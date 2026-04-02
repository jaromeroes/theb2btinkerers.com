# Transatlantic Positioning Expansion

**Date:** 2026-04-02
**Status:** Draft
**Scope:** Copy changes across the site to expand positioning from Europe-only to Europe & North America, broaden sector focus, and remove company-size restrictions.

## Context

The B2B Tinkerers already has a client in the USA and collaborators based there. The current site copy positions the consultancy exclusively for mid-market European B2B companies in tech and industrial sectors. This no longer reflects reality.

## Decisions

1. **Geography:** Explicitly transatlantic — "Europe and North America"
2. **Sectors:** Primary focus remains tech and industrial, with financial services added — "tech, industrial, and financial services"
3. **Company size:** Remove all restrictions (no "mid-market", no employee/revenue ranges)
4. **Currency:** Dual display (€ and $) wherever monetary figures appear
5. **Case studies:** Existing fictional service-page case studies stay as-is (European context is fine as one example among future ones)

## Changes by File

### Layout

**`src/layouts/Base.astro` (line 12)**
- Default meta description: "B2B tech and industrial companies" → "B2B tech, industrial, and financial services companies"

### Homepage

**`src/pages/index.astro`**
- Line 9 (meta description): "B2B tech and industrial companies" → "B2B tech, industrial, and financial services companies"
- Line 30 (hero body): same change

### About

**`src/pages/about.astro`**
- Line 21: "deep roots in B2B tech and industrial markets" → "deep roots in B2B tech, industrial, and financial services markets"
- Line 42: "B2B tech and industrial companies between 10 and 200 people — typically at an inflection point" → "B2B tech, industrial, and financial services companies — typically at an inflection point" (remove size restriction)

### Services index

**`src/pages/services/index.astro`**
- Line 4 (meta): "B2B tech and industrial companies" → "B2B tech, industrial, and financial services companies"; "mid-market companies" → "B2B companies"
- Line 11 (subtitle): "B2B tech and industrial companies" → "B2B tech, industrial, and financial services companies"

### Service pages — meta descriptions

Remove "mid-market" from meta descriptions:
- **`services/marketing-audit.astro` (line 15):** "mid-market B2B companies" → "B2B companies"
- **`services/go-to-market.astro` (line 15):** "mid-market B2B companies" → "B2B companies"
- **`services/brand-strategy.astro` (line 15):** "mid-market B2B companies" → "B2B companies"
- **`services/marketing-plan.astro` (line 15):** "mid-market B2B" → "B2B companies"

### Service pages — body content

**`services/fractional-cmo.astro` (line 128)**
- "mid-market companies say they need" → "companies say they need"

**`services/brand-strategy.astro` (line 153)**
- Keep as-is — "mid-market companies" here describes the case study client's customers, not our target audience

**`services/marketing-plan.astro` (line 73)**
- "Where every euro goes" → "Where every dollar and euro goes"

**`services/go-to-market.astro`**
- Line 151: `&euro;2M` → `&euro;2M ($2.2M)`
- Line 154: "over two million euros" → "over €2M ($2.2M)"

### Join page

**`src/pages/join.astro` (line 10)**
- "across Europe" → "across Europe and North America"

### Blog posts — dual currency

**`src/content/blog/your-b2b-website-doesnt-need-expensive-cms.md`**
- Line 4 (excerpt): "€200,000 and over €1 million" → "€200,000 ($220,000) and over €1 million ($1.1M)"
- Line 24: "€200,000 at the low end" → "€200,000 ($220,000) at the low end"; "€1 million" → "€1 million ($1.1M)"; "€70,000" → "€70,000 ($77,000)"; "€360,000" → "€360,000 ($400,000)"
- Line 40: "national or European market" → "national or regional market"
- Line 42: "€200,000 and €1 million" → "€200,000 ($220,000) and €1 million ($1.1M)"

**`src/content/blog/agentic-ai-b2b-marketing.md`**
- Line 12: "€200K and €1M" → "€200K–€1M ($220K–$1.1M)"

### CLAUDE.md

Update the project description to reflect new positioning:
- Remove "mid-market European" from target audience
- Remove employee/revenue size ranges (100–500 employees, €20M–€200M revenue)
- Add financial services to sector list
- Update currency convention to mention dual display

### ai-strategy.astro

Audited — no references to sectors, geography, currency, or company size. No changes needed.

## Out of scope

- No layout, component, or style changes
- No new pages or sections
- Blog content that already uses USD (the Contentful section in the CMS article) stays as-is
- **Blog body copy with "mid-market"** — `agentic-ai-b2b-marketing.md` (lines 44, 68, 78) and `ai-slop-marketing-team.md` (line 46) use "mid-market" as a descriptor for the article's target reader. These are published, dated content and should be treated as historical. Not modified.
- **case-study-ai-insurance-quoting.md** — "mid-market" (lines 18, 60) describes the client's customers, not the consultancy's positioning. Not modified.
- **CMS blog post line 40** — "mid-sized businesses" describes the historical reality of companies that bought enterprise CMS platforms, not our target audience. Stays as-is.
- The newsletter feature (separate initiative, to follow)
