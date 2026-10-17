#!/usr/bin/env node
/**
 * Publication queue for the blog: which posts are live, which are due, and which
 * are still scheduled.
 *
 * A post is due once its `date` (00:00 UTC) is on or before now, the same rule
 * as isPublished() in src/content/utils.ts. A due post only appears on the site
 * after a build that ran on or after its date, so "due but missing from the live
 * sitemap" means a rebuild is needed. The scheduled-publish workflow runs this
 * daily and pings the Netlify build hook only in that case.
 *
 * Dependency-free on purpose, like umami-report.mjs.
 *
 * Usage:
 *   node scripts/due-posts.mjs            # summary of the queue
 *   node scripts/due-posts.mjs --json     # machine-readable (content autopilot)
 *   node scripts/due-posts.mjs --offline  # skip the live sitemap check
 *
 * Inside GitHub Actions it also writes `missing=<count>` to $GITHUB_OUTPUT, or
 * `missing=unknown` when the live sitemap could not be read. The workflow
 * rebuilds on anything but 0, because a wasted build is cheaper than a post
 * that never goes live.
 */

import { appendFileSync, readdirSync, readFileSync } from 'node:fs';

const SITE = process.env.SITE_URL ?? 'https://theb2btinkerers.com';
const BLOG_DIR = new URL('../src/content/blog/', import.meta.url);

const argv = process.argv.slice(2);
const AS_JSON = argv.includes('--json');
const OFFLINE = argv.includes('--offline');

// Top-level `key: value` pairs from the frontmatter block. Enough for the
// fields read here (date, lang, slug, title, translationKey).
function frontmatter(text) {
  const block = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const data = {};
  if (!block) return data;
  for (const line of block[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z]+):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].trim().replace(/^(["'])(.*)\1$/, '$2');
  }
  return data;
}

// Mirrors the routes: EN at /insights/<slug>/, ES at /es/insights/<slug>/, and
// the slug comes from frontmatter or the filename, like postSlug().
const posts = readdirSync(BLOG_DIR)
  .filter((file) => file.endsWith('.md'))
  .map((file) => {
    const fm = frontmatter(readFileSync(new URL(file, BLOG_DIR), 'utf8'));
    const lang = fm.lang === 'es' ? 'es' : 'en';
    const slug = fm.slug || file.replace(/\.md$/, '');
    const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(fm.date) ? `${fm.date}T00:00:00Z` : fm.date);
    return {
      file,
      lang,
      date: Number.isNaN(date.valueOf()) ? null : date.toISOString().slice(0, 10),
      dueAt: date,
      path: `${lang === 'es' ? '/es' : ''}/insights/${slug}/`,
      title: fm.title ?? '',
      translationKey: fm.translationKey ?? null,
    };
  });

const undated = posts.filter((p) => !p.date);
for (const p of undated) console.warn(`warning: ${p.file} has no valid date and is ignored`);

const now = new Date();
const dated = posts.filter((p) => p.date).sort((a, b) => a.dueAt - b.dueAt);
const due = dated.filter((p) => p.dueAt <= now);
const scheduled = dated.filter((p) => p.dueAt > now);

async function livePaths() {
  const get = async (url) => {
    const res = await fetch(url, { headers: { 'user-agent': 'theb2btinkerers-due-posts' } });
    if (!res.ok) throw new Error(`${url} answered ${res.status}`);
    return res.text();
  };
  const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const paths = new Set();
  for (const map of locs(await get(`${SITE}/sitemap-index.xml`))) {
    for (const loc of locs(await get(map))) paths.add(new URL(loc).pathname.replace(/\/?$/, '/'));
  }
  if (paths.size === 0) throw new Error('the sitemap lists no URLs');
  return paths;
}

let missing = null;
let liveError = null;
if (!OFFLINE) {
  try {
    const live = await livePaths();
    missing = due.filter((p) => !live.has(p.path));
  } catch (err) {
    liveError = err.message;
  }
}

const strip = ({ dueAt, ...rest }) => rest;

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `missing=${missing ? missing.length : 'unknown'}\n`);
}

if (AS_JSON) {
  console.log(JSON.stringify({
    checkedAt: now.toISOString(),
    site: SITE,
    published: due.length,
    scheduled: scheduled.map(strip),
    missingFromLiveSite: missing ? missing.map(strip) : null,
    liveCheckError: liveError,
  }, null, 2));
} else {
  const line = (p) => `  ${p.date}  ${p.lang}  ${p.path}`;
  console.log(`${due.length} posts due as of ${now.toISOString().slice(0, 16)}Z, ${scheduled.length} scheduled.`);
  if (scheduled.length) console.log(`Scheduled:\n${scheduled.map(line).join('\n')}`);
  if (OFFLINE) console.log('Live check skipped (--offline).');
  else if (liveError) console.log(`Could not read the live sitemap (${liveError}); treating the state as unknown.`);
  else if (missing.length) console.log(`Due but not on the live site:\n${missing.map(line).join('\n')}`);
  else console.log('Every due post is on the live site.');
}
