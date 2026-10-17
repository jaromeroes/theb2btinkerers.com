# Content autopilot

A scheduled Claude Code routine (claude.ai/code/routines, "Content autopilot") runs this playbook every Monday. It keeps the blog's queue full: it picks the next topic from `docs/content-backlog.md`, checks it against OpenSEO data, writes the EN and ES versions, and opens a pull request. The owner approves by merging; the scheduled-publish workflow then makes the post live on its date. Nothing reaches the site without that merge.

The goal is calls booked, not traffic. Every piece targets a question a buyer asks on the way to hiring outside marketing help, and links to the service page that answers it.

## Every run, in order

1. **Read** `CLAUDE.md`, this file and `docs/content-backlog.md`.
2. **Health check.** Report any failure at the top of the run summary and of the PR, prefixed with "Aviso:".
   - `curl -s https://api.github.com/repos/jaromeroes/theb2btinkerers.com/actions/workflows/scheduled-publish.yml` must show `"state": "active"`. Anything else means GitHub stopped the daily publish job; the owner re-enables it from the Actions tab.
   - `node scripts/due-posts.mjs` must say every due post is on the live site. If the sandbox cannot reach theb2btinkerers.com, fetch `https://theb2btinkerers.com/sitemap-0.xml` with WebFetch and compare by hand; if that fails too, say the live check could not run.
3. **Decide whether to write.** Count the posts still scheduled (`node scripts/due-posts.mjs --json`, `scheduled` holds one entry per language, so divide by two) plus open autopilot PRs (`curl -s "https://api.github.com/repos/jaromeroes/theb2btinkerers.com/pulls?state=open"`, branches starting `claude/content-`). If that total is 2 or more, write nothing: refresh the data (step 4), update the backlog if there is something new, and finish with a short summary. Otherwise write one piece.
4. **Research** with OpenSEO (below).
5. **Pick the topic.** The first backlog entry with Estado `aprobado`; if none, the first `propuesto`. Skip `necesita input`, `en PR`, `publicado` and `vetado`. One piece per run.
6. **Write, check, ship** as described below.

## OpenSEO

Project `e2235b56-48a2-4e45-a3bd-b21feb887f6e` (theb2btinkerers.com). The OpenSEO tools come from the claude.ai connector attached to the routine. If they are missing, carry on with the figures stored in the backlog and say "OpenSEO no estaba conectado" in the summary and the PR.

- Budget: at most 30 credits per run. Check `whoami` first; below 60 credits make no paid calls. OpenSEO cannot buy credits, so never suggest it.
- Free every run: `get_project_context` (research log, key pages) and `get_search_console_performance` for the last 28 days with dimensions query and page, minImpressions 5. Use it to sharpen the chosen topic and to spot new questions people already find the site for.
- Paid, for the chosen topic only: one `get_serp_results` for its lead query in its lead market (US is locationCode 2840 with en; Spain is 2724 with es), depth 10, about 2.5 credits. Read the top three organic results with WebFetch and note what they cover and what they miss. The piece must answer the searcher's question better than they do, not copy their outline.
- Paid, first run of each calendar month only: one `get_keyword_metrics` batch per market (about 16 credits each, up to 40 candidate phrases taken from Search Console queries and from the services). Add at most three new backlog entries, each with its figures and the date, in the backlog's format.
- After shipping: `update_project_context` with `appendResearchLog`, e.g. "Content autopilot 2026-11-02: drafted 'What a fractional CMO actually does' (what does a fractional cmo do, 140/mo US) for 2026-11-05; PR #12."
- Report positions the way the SEO audit does: "#8 (page 1)", or "not in the first 20 results". Search volume is not visits; never promise traffic.

## Writing the pair

One article, two files: `src/content/blog/<slug>.md` (EN) and `src/content/blog/<slug>.es.md` (ES), sharing a new `translationKey`. Follow CLAUDE.md for everything it covers (frontmatter, slugs, voice, anti-slop budgets, currency formatting, Spain Spanish). On top of that:

- **Date.** The next free slot of the fortnightly Thursday cadence: 14 days after the latest scheduled or published post, or the first Thursday at least 4 days away if that date has passed. Dates are plain `YYYY-MM-DD`.
- **Frontmatter**, in the order the existing posts use: title, description, excerpt, slug, author ("The B2B Tinkerers"), date, tag, readTime, image (if there is one), lang (ES only, `"es"`), translationKey. Reuse an existing tag in the post's language (`grep -h '^tag:' src/content/blog/*.md | sort | uniq -c`). readTime is words / 230, rounded ("7 min read", "7 min de lectura").
- **Lead market.** Each backlog entry names one. In that language, the title carries the lead query or a close natural variant within the first 60 characters, and `description` (meta description, under 155 characters) carries it too. The other language gets a natural title of its own, not a translation of the keyword.
- **Shape.** 1,200 to 1,800 words. H2s that answer what the searcher is actually asking, in the order they would ask it. At least one thing the reader can use straight away (a test, a checklist, a decision rule). An opinion the firm would sign.
- **Links.** In the body, link the service page the entry names and one or two related posts, with trailing slashes (`/services/fractional-cmo/`, `/es/insights/<slug-es>/`). End with the italic sign-off the existing posts use, pointing at the same service page and `#contact`. No other call to action.
- **Facts.** Never invent statistics, clients, results, quotes or anecdotes. A figure needs a source the run actually opened; name it in the text as the existing posts do (organisation and year). Claims about how the firm works must match what the service pages already say.
- **Humanizer.** Run the `humanizer` skill (`.claude/skills/humanizer/`, file mode) on both files after drafting. Then check by hand: no em or en dashes, at most two "not X but Y" contrasts per article (headline excepted), no run of fragments, none of the phrases CLAUDE.md bans, and no five-word phrase that already appears in another post (grep a handful of the most distinctive ones).
- **Opening.** Read the openings of the five most recent posts and open differently.

## Cover image

If the Higgsfield connector is attached and its image can be downloaded, generate the cover with the Seedream model following CLAUDE.md's prompt rules, convert it with sharp (already in node_modules) to 1200x514 WebP at quality 80, under 120 KB, save it as `src/assets/blog/<translationKey>-cover.webp`, and reference it from both files. Otherwise leave `image` out and put the prompt in the PR so the owner can add it before merging.

## Verify

- `npm ci` then `npm run build` must pass. The build validates the frontmatter of every post, scheduled ones included, even though a future-dated post is not rendered yet.
- `node scripts/due-posts.mjs --offline` lists the new pair under Scheduled with the expected date and paths.

## Ship

- Branch `claude/content-<date>-<translationKey>`. Commit message in English: `Add post: <EN title> (scheduled <date>)`.
- In the backlog, set the entry's Estado to `en PR`, note the branch, and add a row to Historial.
- Open the PR against `main` with the REST API (`gh api repos/jaromeroes/theb2btinkerers.com/pulls -f title=... -f head=<branch> -f base=main -f body=...`; `gh pr create` uses GraphQL, which the cloud proxy blocks). If that fails, give the branch name in the summary so the owner can open the PR from the session page.
- PR title, in Spanish: `Artículo <fecha>: <título del mercado principal>`. Body, in Spanish: the topic and why it brings leads, the target query with its figures and the live SERP check, the service page it feeds, what the top results miss and how the piece answers it, the cover prompt if the image is missing, the health-check warnings, and the credits spent.

## Page work

Entries under "Trabajo en páginas" are never touched unless the owner sets them to `aprobado`. Then, in a run that writes no article, do one of them in its own PR (`claude/page-<date>-<id>`), following CLAUDE.md and the audit notes in the entry.

## Never

- Merge, push to `main`, or change the date of a post that is already scheduled.
- Edit a published post, or a service page outside an `aprobado` page-work entry.
- Publish prices or anything the backlog marks `necesita input`.
- Spend more than 30 OpenSEO credits in one run.

## Run summary

The run's final message, in Spanish and short: warnings first, then what was prepared (topic, date, PR link), OpenSEO credits spent and left, the next topic in the queue, and any new backlog entries.
