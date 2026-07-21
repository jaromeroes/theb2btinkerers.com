# motiontinkerers.com Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and locally verify the bilingual (EN/ES) Motion Tinkerers marketing site in a new Astro repo, expressing the offer defined in `docs/superpowers/specs/2026-07-21-motion-tinkerers-definition-design.md`, with no public deploy.

**Architecture:** Static Astro 5 site mirroring the proven theb2btinkerers.com architecture: thin page routes wrapping lang-aware page components, copy in `src/i18n/`, native Astro i18n (EN at root, ES under `/es/`), one data-driven service template for the 5 areas. Warm Tinkerers palette over shared neutrals; same editorial rules (square corners, hairlines, sentence-case eyebrows, gradient only in heroes — warm mesh instead of cool ramp).

**Tech Stack:** Astro ^5, @astrojs/sitemap, @fontsource-variable/inter + bricolage-grotesque, plain CSS custom properties (no Tailwind, no JS framework). Git + `gh` (private repo). No Netlify deploy in this plan (config file prepared only).

**Reference repo (source of patterns):** `/Users/jose/Developer/theb2btinkerers/theb2btinkerers.com` — especially `src/i18n/*`, `src/layouts/Base.astro`, `src/styles/global.css`, `astro.config.mjs`.

**Target repo:** `/Users/jose/Developer/theb2btinkerers/motiontinkerers.com` (new).

**Verification model:** this is a static content site with no test framework (same as the B2B repo). Every task verifies with `npm run build` (must exit 0) plus `grep` assertions against `dist/` output. Do not add a test framework (YAGNI).

**Copy:** written at execution time following the spec (§2 voice: propulsive, challenger; §4 areas; §5 narrative) and the B2B writing rules (short sentences, no jargon, no em-dash separators, sentence-case eyebrows). EN is US English, ES is Spain Spanish (natural, not literal). **No pricing amounts anywhere** — pilots are "fixed price / precio cerrado" without numbers until José sets them (spec §8.1).

---

### Task 1: Scaffold the repo

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `src/pages/index.astro` (placeholder), `public/robots.txt`

- [ ] **Step 1:** `mkdir -p ~/Developer/theb2btinkerers/motiontinkerers.com && cd` into it; `git init -b main`.
- [ ] **Step 2:** Write `package.json` (name `motiontinkerers.com`, scripts dev/build/preview, deps: `astro@^5`, `@astrojs/sitemap`, `@fontsource-variable/inter`, `@fontsource-variable/bricolage-grotesque`).
- [ ] **Step 3:** Write `astro.config.mjs`: `site: 'https://motiontinkerers.com'`, sitemap integration, i18n `{ defaultLocale: 'en', locales: ['en','es'], routing: { prefixDefaultLocale: false } }` (mirror B2B config).
- [ ] **Step 4:** Write `.gitignore` (node_modules, dist, .astro, .DS_Store, .env) — do NOT version `dist/` (deliberate divergence from the B2B repo, which regrets it).
- [ ] **Step 5:** Minimal `src/pages/index.astro` ("Motion Tinkerers — coming to life") + `public/robots.txt` (allow all).
- [ ] **Step 6:** `npm install` → expect clean install; `npm run build` → expect exit 0, `dist/index.html` exists.
- [ ] **Step 7:** Commit: `chore: scaffold Astro site`.

### Task 2: Warm design tokens + global.css

**Files:**
- Create: `src/styles/global.css`

- [ ] **Step 1:** Port the structure of B2B `global.css` with the warm system per `docs/brand/brand-system.md` §2:
  - Shared neutrals: `--paper:#F7F5EF`, `--card:#FBFAF6`, `--paper-2:#EFEDE5`, `--ink:#15140F`, `--ink-2:#46443C`, `--ink-3:#7C7A70`, `--line:rgba(21,20,15,.13)`, `--cream:#F5F0E8`.
  - Warm accents: `--amber:#F5B301`, `--yellow:#F6C21A` (CTA fill), `--orange:#EE5A1E` (data), `--orange-deep:#C6470F` (text-contrast accent on paper).
  - Hero mesh stops: `--mesh-1:#FCE39B`, `--mesh-2:#F5B301`, `--mesh-3:#EE5A1E`, `--mesh-4:#E23C86`.
  - `--pad:clamp(20px,5vw,72px)`.
- [ ] **Step 2:** Component classes mirroring B2B: nav (ink bg, 68px, amber-tinted border `rgba(245,179,1,.14)`), `.section-eyebrow` (Inter 600 13px sentence-case, `--orange-deep`, 16px hairline @.55), `.section-h2` (Bricolage 800 −0.04em), `.btn-primary` (`--yellow` fill, `--ink` text, uppercase 11px), `.page-hero` with **warm mesh**: `radial-gradient` amber glow + `linear-gradient(158deg, mesh stops)` + dot-grain overlay (copy B2B's `.page-hero::after` grain verbatim), forms, footer.
- [ ] **Step 3:** `npm run build` → exit 0.
- [ ] **Step 4:** Commit: `feat: warm design tokens and global styles`.

### Task 3: i18n foundation

**Files:**
- Create: `src/i18n/config.ts`, `src/i18n/utils.ts`, `src/i18n/ui.ts`, `src/i18n/services-nav.ts`

- [ ] **Step 1:** Copy `config.ts` + `utils.ts` from the B2B repo verbatim (locales en/es, `htmlLang`, `getLangFromUrl`, `localizePath`, `mirrorAlternates`) — they are brand-agnostic.
- [ ] **Step 2:** Write `ui.ts` with Motion chrome strings EN/ES: nav (Services/Servicios, About/Nosotros, Start a pilot/Empieza con un pilot), footer, contact form, SEO defaults (title "Motion Tinkerers — The AI-native marketing agency" / ES equivalent).
- [ ] **Step 3:** Write `services-nav.ts`: 5 slugs (`content-engine`, `ai-search`, `creative-studio`, `web-sprint`, `brand-studio`) + EN/ES labels. Slugs identical across languages (B2B pattern).
- [ ] **Step 4:** `npm run build` → exit 0 (files unused yet, must typecheck).
- [ ] **Step 5:** Commit: `feat: i18n foundation (EN/ES)`.

### Task 4: Base layout + provisional logo

**Files:**
- Create: `src/layouts/Base.astro`, `src/components/Logo.astro`

- [ ] **Step 1:** `Logo.astro`: typographic two-line lockup — `Motion` over `Tinkerers.` — Bricolage 800, tight tracking; word "Tinkerers." + dot in `--amber` on dark / `--orange-deep` on light. Props: `treatment` (light/dark), `size`. (Provisional per spec §8.2 — drawn wordmark comes later.)
- [ ] **Step 2:** `Base.astro` mirroring B2B: `lang` prop → `<html lang>`, head (title/desc/canonical/hreflang via `mirrorAlternates`/og), fonts import, nav (Logo dark + links + EN/ES switcher + yellow CTA "Start a pilot →"), contact section (Formspree pattern with `FORM_ID` placeholder const + `TODO(jose)` comment — form disabled state until ID exists; email fallback `hello@motiontinkerers.com` shown), footer (Logo + columns + "A Tinkerers company" line linking theb2btinkerers.com). No Umami yet (`TODO(jose)` comment with instructions).
- [ ] **Step 3:** Point `index.astro` at Base; `npm run build`; `grep -q 'hreflang' dist/index.html` and `grep -q 'Tinkerers.' dist/index.html` → both pass.
- [ ] **Step 4:** Commit: `feat: base layout, nav/footer/contact, provisional logo`.

### Task 5: Services data + template + routes

**Files:**
- Create: `src/i18n/pages/services.ts`, `src/components/pages/ServicePage.astro`, `src/components/pages/ServicesIndex.astro`, `src/pages/services/index.astro`, `src/pages/services/[slug].astro`, `src/pages/es/services/index.astro`, `src/pages/es/services/[slug].astro`, `src/components/service-icons.ts`

- [ ] **Step 1:** `services.ts` — `{ en: {...}, es: {...} }` per area with: name, one-liner, outcomes list (what ships), how-it-works (3 steps), pilot block (name + scope + "fixed price", NO amounts), proof reference (per spec §6: content-engine→TB2BT system; brand-studio/creative-studio/web-sprint→Barkers "brand building in progress"; ai-search→own GEO practice), FAQ (2-3 each). AI Search area carries the ⭐ spearhead framing (Pew CTR stat, cited).
- [ ] **Step 2:** `service-icons.ts` — 5 inline Lucide-style SVGs (1.5px stroke, currentColor): engine/gears (content), sparkle-search (ai-search), layers/brush (creative), rocket/browser (web), shapes (brand).
- [ ] **Step 3:** `ServicePage.astro` — one data-driven template (B2B `ServicePage.astro` as structural reference): warm page-hero, outcomes grid (2px gaps), steps, pilot CTA band (yellow), FAQ, cross-links to sibling areas.
- [ ] **Step 4:** Routes: `[slug].astro` with `getStaticPaths` over the 5 slugs, EN + ES mirrors passing `lang`.
- [ ] **Step 5:** `npm run build`; verify: `ls dist/services` shows 5 dirs + index; `ls dist/es/services` same; `grep -q 'precio cerrado' dist/es/services/content-engine/index.html` passes; `grep -rL 'hreflang' dist/services | wc -l` → 0.
- [ ] **Step 6:** Commit: `feat: five service areas, data-driven template, EN/ES routes`.

### Task 6: Home

**Files:**
- Create: `src/i18n/pages/home.ts`, `src/components/pages/Home.astro`; Modify: `src/pages/index.astro`; Create: `src/pages/es/index.astro`

- [ ] **Step 1:** `home.ts` EN/ES: hero (headline candidate: EN "Marketing that ships itself." / sub "An AI-native agency that sells outcomes, not hours..." — final copy at execution, propulsive voice), 5-area grid teasers, "outcomes not hours" manifesto strip, maturity-model context section (0→5, narrative device per spec §5), proof strip (3 cases §6), pilot CTA.
- [ ] **Step 2:** `Home.astro`: warm mesh hero (the one gradient moment) + grain, areas grid (2px gap, invert-on-hover ink→amber), manifesto band, proof, CTA. Square corners everywhere; amber never large-background except hero mesh.
- [ ] **Step 3:** Wire routes; `npm run build`; `grep -q 'es/index.html' <(find dist -name index.html)`… concrete check: `test -f dist/es/index.html` passes; homepage contains exactly one `<h1>`.
- [ ] **Step 4:** Commit: `feat: home page with warm mesh hero`.

### Task 7: About + legal

**Files:**
- Create: `src/i18n/pages/about.ts`, `src/components/pages/About.astro`, `src/pages/about.astro`, `src/pages/es/about.astro`, `src/pages/legal/{aviso-legal,privacidad,cookies}.astro` + ES mirrors (or single Legal.astro template + data)

- [ ] **Step 1:** About: the Tinkerers house story (sister brands, human direction + agentic execution, José as founder — reuse founder-photo rules from brand system: photography only here/contact), the red-line honesty ("what we don't do" section is on-brand challenger move: no enterprise AI consulting, no hourly billing, no author-studio identity — we partner).
- [ ] **Step 2:** Legal template + 3 pages ES-first legal text (LSSI basics) with EN mirrors, `noindex` on legal.
- [ ] **Step 3:** `npm run build`; `test -f dist/about/index.html && test -f dist/es/about/index.html` passes.
- [ ] **Step 4:** Commit: `feat: about and legal pages`.

### Task 8: Favicon, SEO polish

**Files:**
- Create: `public/favicon.svg`, `public/favicon.ico`, `public/apple-touch-icon.png`; Modify: `Base.astro` head

- [ ] **Step 1:** Family favicon: reuse the B2B "T." build script pattern (Bricolage T glyph path already extracted in scratchpad `favicon-b.svg`) with **amber dot** `#F5B301` instead of chartreuse; generate ico + apple-touch via the same sips/PIL pipeline.
- [ ] **Step 2:** Head links (svg + ico + apple-touch), og:image placeholder (TODO), sitemap check: `grep -q 'motiontinkerers.com/es/' dist/sitemap-0.xml` passes after build.
- [ ] **Step 3:** Commit: `feat: family favicon (amber) and SEO polish`.

### Task 9: Repo docs + Netlify config (prepared, not deployed)

**Files:**
- Create: `CLAUDE.md`, `README.md`, `netlify.toml`

- [ ] **Step 1:** `CLAUDE.md` for the new repo: project summary, commands, architecture (mirror B2B doc structure), warm palette table, voice rules (propulsive), i18n notes, **no-pricing-amounts rule until José sets them**, deploy status (NOT deployed; Netlify config prepared).
- [ ] **Step 2:** `netlify.toml` (build command, publish dist, node 20) — file only.
- [ ] **Step 3:** `npm run build` final full check; commit: `docs: repo guide and deploy config (not connected)`.

### Task 10: Private GitHub repo + push

- [ ] **Step 1:** `gh auth status` → if not authenticated, SKIP (leave local only, note for José).
- [ ] **Step 2:** `gh repo create motiontinkerers.com --private --source . --push` → verify `git remote -v` shows origin and push succeeded.
- [ ] **Step 3:** Report repo URL in final summary.

---

**Out of scope (deliberate):** deploy/DNS, blog/content collections (add when Motion starts publishing), Formspree ID + Umami ID (José), pricing amounts (José), drawn wordmark (commissioned later), B2B wordmark retouch (separate task in the B2B repo).
