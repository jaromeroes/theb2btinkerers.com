# Transatlantic Positioning Expansion — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update all site copy to position The B2B Tinkerers as a transatlantic consultancy (Europe & North America), broaden sectors to include financial services, remove company-size restrictions, and display dual currency (€/$).

**Architecture:** Pure copy edits across existing Astro pages, Markdown blog posts, and CLAUDE.md. No structural, layout, or component changes. Verification via `npm run build`.

**Tech Stack:** Astro 4.16, Markdown content files

**Spec:** `docs/superpowers/specs/2026-04-02-transatlantic-positioning-expansion-design.md`

---

## File Map

All changes are edits to existing files. No files created or deleted.

| File | Changes |
|------|---------|
| `src/layouts/Base.astro` | Sector expansion in default meta description |
| `src/pages/index.astro` | Sector expansion in meta + hero body |
| `src/pages/about.astro` | Sector expansion + remove company size |
| `src/pages/services/index.astro` | Sector expansion + remove "mid-market" |
| `src/pages/services/marketing-audit.astro` | Remove "mid-market" from meta |
| `src/pages/services/go-to-market.astro` | Remove "mid-market" from meta + dual currency in case study |
| `src/pages/services/brand-strategy.astro` | Remove "mid-market" from meta |
| `src/pages/services/marketing-plan.astro` | Remove "mid-market" from meta + "dollar and euro" |
| `src/pages/services/fractional-cmo.astro` | Remove "mid-market" from stat |
| `src/pages/join.astro` | "across Europe" → "across Europe and North America" |
| `src/content/blog/your-b2b-website-doesnt-need-expensive-cms.md` | Dual currency + "regional" |
| `src/content/blog/agentic-ai-b2b-marketing.md` | Dual currency |
| `CLAUDE.md` | Update target audience, sectors, currency convention |

---

### Task 1: Layout and homepage — sector expansion

**Files:**
- Modify: `src/layouts/Base.astro:12`
- Modify: `src/pages/index.astro:9,30`

- [ ] **Step 1: Edit Base.astro default meta description**

In `src/layouts/Base.astro` line 12, change:
```
'B2B Marketing Strategy Consultancy. We help B2B tech and industrial companies get more from marketing — without spending more.'
```
to:
```
'B2B Marketing Strategy Consultancy. We help B2B tech, industrial, and financial services companies get more from marketing — without spending more.'
```

- [ ] **Step 2: Edit index.astro meta description**

In `src/pages/index.astro` line 9, change:
```
description="We help B2B tech and industrial companies get more from marketing — without spending more. Not an agency. An insider."
```
to:
```
description="We help B2B tech, industrial, and financial services companies get more from marketing — without spending more. Not an agency. An insider."
```

- [ ] **Step 3: Edit index.astro hero body**

In `src/pages/index.astro` line 30, change:
```
We help B2B tech and industrial companies get more from marketing
```
to:
```
We help B2B tech, industrial, and financial services companies get more from marketing
```

- [ ] **Step 4: Commit**

```bash
git add src/layouts/Base.astro src/pages/index.astro
git commit -m "copy: expand sector positioning in layout and homepage"
```

---

### Task 2: About page — sector expansion + remove size restriction

**Files:**
- Modify: `src/pages/about.astro:21,42`

- [ ] **Step 1: Edit line 21 — sector expansion**

Change:
```
deep roots in B2B tech and industrial markets
```
to:
```
deep roots in B2B tech, industrial, and financial services markets
```

- [ ] **Step 2: Edit line 42 — sector expansion + remove size**

Change:
```
We work best with B2B tech and industrial companies between 10 and 200 people — typically at an inflection point.
```
to:
```
We work best with B2B tech, industrial, and financial services companies — typically at an inflection point.
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.astro
git commit -m "copy: expand sectors and remove size restriction on about page"
```

---

### Task 3: Services index — sector expansion + remove "mid-market"

**Files:**
- Modify: `src/pages/services/index.astro:4,11`

- [ ] **Step 1: Edit line 4 meta description**

Change:
```
description="Six ways we help B2B tech and industrial companies get more from marketing. Strategy, positioning, GTM, AI, and fractional leadership for mid-market companies."
```
to:
```
description="Six ways we help B2B tech, industrial, and financial services companies get more from marketing. Strategy, positioning, GTM, AI, and fractional leadership for B2B companies."
```

- [ ] **Step 2: Edit line 11 subtitle**

Change:
```
We help B2B tech and industrial companies get more from marketing
```
to:
```
We help B2B tech, industrial, and financial services companies get more from marketing
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/services/index.astro
git commit -m "copy: expand sectors and remove mid-market from services index"
```

---

### Task 4: Service pages — remove "mid-market" from meta descriptions

**Files:**
- Modify: `src/pages/services/marketing-audit.astro:15`
- Modify: `src/pages/services/go-to-market.astro:15`
- Modify: `src/pages/services/brand-strategy.astro:15`
- Modify: `src/pages/services/marketing-plan.astro:15`

- [ ] **Step 1: marketing-audit.astro meta**

Change `mid-market B2B companies` to `B2B companies`.

- [ ] **Step 2: go-to-market.astro meta**

Change `mid-market B2B companies` to `B2B companies`.

- [ ] **Step 3: brand-strategy.astro meta**

Change `mid-market B2B companies` to `B2B companies`.

- [ ] **Step 4: marketing-plan.astro meta**

Change `mid-market B2B` to `B2B companies`.

- [ ] **Step 5: Commit**

```bash
git add src/pages/services/marketing-audit.astro src/pages/services/go-to-market.astro src/pages/services/brand-strategy.astro src/pages/services/marketing-plan.astro
git commit -m "copy: remove mid-market from service page meta descriptions"
```

---

### Task 5: Service pages — body content changes

**Files:**
- Modify: `src/pages/services/fractional-cmo.astro:128`
- Modify: `src/pages/services/marketing-plan.astro:73`
- Modify: `src/pages/services/go-to-market.astro:151,154`

- [ ] **Step 1: fractional-cmo.astro — remove "mid-market"**

Change:
```
of mid-market companies say they need
```
to:
```
of companies say they need
```

- [ ] **Step 2: marketing-plan.astro — dual currency phrasing**

Change:
```
Where every euro goes
```
to:
```
Where every dollar and euro goes
```

- [ ] **Step 3: go-to-market.astro line 151 — dual currency in heading**

Change:
```
&euro;2M in 5 months
```
to:
```
&euro;2M ($2.2M) in 5 months
```

- [ ] **Step 4: go-to-market.astro line 154 — dual currency in body**

Change:
```
over two million euros
```
to:
```
over €2M ($2.2M)
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/services/fractional-cmo.astro src/pages/services/marketing-plan.astro src/pages/services/go-to-market.astro
git commit -m "copy: remove mid-market and add dual currency in service pages"
```

---

### Task 6: Join page — geographic expansion

**Files:**
- Modify: `src/pages/join.astro:10`

- [ ] **Step 1: Edit line 10**

Change:
```
across Europe
```
to:
```
across Europe and North America
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/join.astro
git commit -m "copy: expand join page to Europe and North America"
```

---

### Task 7: Blog post — CMS article dual currency + regional

**Files:**
- Modify: `src/content/blog/your-b2b-website-doesnt-need-expensive-cms.md:4,24,40,42`

- [ ] **Step 1: Edit line 4 (excerpt/frontmatter)**

Change:
```
"Thousands of B2B companies are spending between €200,000 and over €1 million implementing web platforms their marketing teams can barely touch without calling an agency. In 2026, there is no longer any excuse for this."
```
to:
```
"Thousands of B2B companies are spending between €200,000 ($220,000) and over €1 million ($1.1M) implementing web platforms their marketing teams can barely touch without calling an agency. In 2026, there is no longer any excuse for this."
```

- [ ] **Step 2: Edit line 24 — multiple currency figures**

Change:
```
can cost anywhere between €200,000 at the low end — for straightforward deployments — and well over €1 million when advanced customisation, CRM and ERP integrations, content migration and team training are factored in. The annual licence alone averages around €70,000, reaching €360,000 in high-traffic scenarios.
```
to:
```
can cost anywhere between €200,000 ($220,000) at the low end — for straightforward deployments — and well over €1 million ($1.1M) when advanced customisation, CRM and ERP integrations, content migration and team training are factored in. The annual licence alone averages around €70,000 ($77,000), reaching €360,000 ($400,000) in high-traffic scenarios.
```

- [ ] **Step 3: Edit line 40 — European → regional**

Change:
```
a primarily national or European market
```
to:
```
a primarily national or regional market
```

- [ ] **Step 4: Edit line 42 — dual currency**

Change:
```
spending between €200,000 and €1 million on implementation
```
to:
```
spending between €200,000 ($220,000) and €1 million ($1.1M) on implementation
```

- [ ] **Step 5: Commit**

```bash
git add src/content/blog/your-b2b-website-doesnt-need-expensive-cms.md
git commit -m "copy: add dual currency and regional phrasing in CMS blog post"
```

---

### Task 8: Blog post — agentic AI dual currency

**Files:**
- Modify: `src/content/blog/agentic-ai-b2b-marketing.md:12`

- [ ] **Step 1: Edit line 12**

Change:
```
a budget somewhere between €200K and €1M
```
to:
```
a budget somewhere between €200K–€1M ($220K–$1.1M)
```

- [ ] **Step 2: Commit**

```bash
git add src/content/blog/agentic-ai-b2b-marketing.md
git commit -m "copy: add dual currency in agentic AI blog post"
```

---

### Task 9: CLAUDE.md — update project metadata

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update target audience description**

Find the line:
```
The site belongs to The B2B Tinkerers, a B2B marketing strategy consultancy ("the anti-agency") targeting mid-market European B2B companies (100–500 employees, €20M–€200M revenue) in tech/SaaS and industrial sectors.
```
Change to:
```
The site belongs to The B2B Tinkerers, a B2B marketing strategy consultancy ("the anti-agency") targeting B2B companies in tech/SaaS, industrial, and financial services sectors across Europe and North America.
```

- [ ] **Step 2: Add dual currency convention**

In the `### Writing Voice` section, after the last bullet point ("All content is written in English."), add:

```
- All monetary figures display both euro and dollar amounts, with the dollar equivalent in parentheses: e.g., €200,000 ($220,000).
```

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md with transatlantic positioning and expanded sectors"
```

---

### Task 10: Build verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build completes with no errors. All pages generated successfully.

- [ ] **Step 2: Spot-check output**

Verify key strings appear in built output:
```bash
grep -r "financial services" dist/ | head -5
grep -r "North America" dist/ | head -3
grep -r "mid-market" dist/services/ | head -5
```

Expected:
- "financial services" appears in homepage, about, services pages
- "North America" appears in join page
- "mid-market" should NOT appear in service page meta descriptions (may still appear in blog posts — that is expected)
