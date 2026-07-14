import type { CollectionEntry } from 'astro:content';

/**
 * A post is "published" once its `date` is on or before the current build time.
 *
 * Future-dated posts stay hidden — no page is generated, so they don't appear in
 * listings or the sitemap — until a rebuild runs on or after their date. A daily
 * GitHub Actions cron pings the Netlify build hook to trigger that rebuild, so
 * scheduled posts go live on their own date without any manual commit.
 * See `.github/workflows/scheduled-publish.yml`.
 */
export function isPublished(post: CollectionEntry<'blog'>, now: Date = new Date()): boolean {
  // In `npm run dev` show every post (including future-dated ones) so drafts can
  // be previewed locally. The date-gate only applies to production builds.
  if (import.meta.env.DEV) return true;
  return post.data.date.valueOf() <= now.valueOf();
}
