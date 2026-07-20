# Claude Design — Setup pack · The B2B Tinkerers (Tinkerers rebrand)

> Material listo para rellenar el formulario **"Set up your design system"** de Claude Design.
> **v2 (2026-07-20)** — actualizado al sistema Tinkerers (rebrand live desde 2026-07-14).
> Fuentes: `docs/brand/brand-system.md` (v0 draft del rebrand) + código de producción (`src/styles/global.css`, `src/layouts/Base.astro`).
> Cada bloque mapea a un campo del formulario. Copia y pega tal cual.

---

# ▣ CAMPO 1 — "Company name and blurb"

```
The B2B Tinkerers — an independent B2B marketing strategy consultancy ("the anti-agency") for mid-market tech/SaaS and industrial companies in Europe and North America. Part of "The Tinkerers" house of brands: B2B Tinkerers is the cool/strategic arm; Motion Tinkerers (AI execution, warm accent) shares the same DNA and launches later. The digital product is a bilingual (EN/ES) static editorial marketing website (Astro, deployed on Netlify): homepage, six service pages, an insights/blog, about and contact. The visual language is editorial black-and-white with one accent: warm-paper ground, near-black ink, a heavy tight-tracked grotesque display face, hairline rules, square corners, and a single chartreuse accent for CTAs and data. Bold in the headline, humble in the detail.
```

---

# ▣ CAMPO 2 — "Any other notes?"

> Pega TODO el bloque siguiente (desde `# The B2B Tinkerers — Design System` hasta el final del documento) en el campo de notas.

---

# The B2B Tinkerers — Design System (Tinkerers rebrand)

A B2B marketing strategy consultancy positioned as **"the anti-agency"**, part of **The Tinkerers** master brand (two arms: **B2B Tinkerers** = human strategy, *cool* temperature; **Motion Tinkerers** = AI execution, *warm* temperature — same grammar, different accent). This system covers **B2B Tinkerers (cool)**; Motion tokens are listed for context so shared components stay sibling-compatible.

The aesthetic is **editorial black-and-white with a single accent** — spirit reference (not copy): bland.ai. Warm-paper ground, heavy grotesque, hairline rules, one accent for CTA + data.

**Core aesthetic rules (apply everywhere):**
- **Square corners only.** No border-radius on any element — buttons, cards, inputs, images.
- **No shadows, no glows.** Depth comes from colour blocking and hairlines. (Exception: the fixed nav gains a soft shadow on scroll.)
- **Gradients are reserved for imagery/heroes** (the cool gradient ramp below), never for UI chrome or buttons.
- **Rhythm by alternation.** Alternate ink-dark and paper-light full-width sections down a page.
- **Restraint with the accent.** Chartreuse is energy — CTAs, key data, logo accent. Never a large background.
- **No AI-slop tropes:** no uppercase-tracked-mono eyebrows with `·` separators, no dot-prefixed pill lists. Section markers = number (accent) + sentence-case label.

---

## 1. Colour

Neutral editorial base shared by the whole Tinkerers house; each brand adds one accent temperature. B2B Tinkerers = **cool chartreuse**.

**Shared neutrals**
| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F7F5EF` | Ground (warm white, not pure). Page background. |
| `--card` | `#FBFAF6` | Card surface. |
| `--paper-2` / `--linen` | `#EFEDE5` | Secondary surface. |
| `--ink` | `#15140F` | Text; dark ground (nav, footer, dark sections). |
| `--ink-2` | `#46443C` | Secondary text. |
| `--ink-3` / `--gray` | `#7C7A70` | Muted text, labels. |
| `--cream` | `#F5F0E8` | Light text on dark grounds. |
| `--line` | `rgba(21,20,15,.13)` | Hairline rules. |

**B2B Tinkerers — cool accent**
| Token | Hex | Role |
|---|---|---|
| `--chartreuse` | `#B7D62B` | **The accent.** Primary CTA fill, key data, logo accent, nav underlines. |
| `--chartreuse-deep` | `#8AAC17` | Text-contrast accent on paper (eyebrows, links, small accents on light). |
| `--emerald` | `#2E7D5B` | Mid green, supporting accent. |
| `--forest-green` | `#1C4A3A` | Heritage forest — **gradients/imagery only**, not UI chrome. |
| Cool gradient ramp | `#07231A` · `#0D3324` · `#175640` · `#1F7351` | Hero/imagery gradient depths. |

**Motion Tinkerers — warm accent (context only, do not use in B2B UI)**
`--amber #F5B301` · `--yellow #F6C21A` (CTA) · `--orange #EE5A1E` (data) · `--orange-deep #C6470F` · warm mesh `#FCE39B → #F5B301 → #EE5A1E → #E23C86`.

**Usage rules**
- **Do** use Ink (`#15140F`) as the dominant dark ground (nav, footer, high-impact sections). Green is accent-only in the new system — the neutral base is what scales across the brand family.
- **Do** alternate ink-dark and paper-light sections for rhythm.
- **Do** use chartreuse *exclusively* for the primary CTA, key data points, logo accent and active-state details.
- **Do** use `--chartreuse-deep` when the accent must carry text contrast on paper (eyebrows, inline links).
- **Don't** use chartreuse as a large background.
- **Don't** use the forest/emerald greens for buttons or chrome — they live in gradients and imagery.
- **Don't** put cream text on chartreuse (fails contrast).

**Accessibility (WCAG AA):** Ink on Paper ≈ 15:1 · Chartreuse on Ink ≈ 8:1 · Chartreuse-deep on Paper ≈ 4.6:1 (large text / 600+ weight) · never Cream on Chartreuse.

---

## 2. Typography

Two loaded families plus a sparing monospace. (Target licensed faces for a future upgrade: Neue Haas Grotesk / GT America display, Söhne / Suisse body — until then the variable Google faces below are the system.)

| Typeface | Role | Weights | Specs |
|---|---|---|---|
| **Bricolage Grotesque Variable** | Display & headlines | 800 | Tight tracking **−0.04em**, line-height 0.97–1.0. Expressive, editorial. |
| **Inter Variable** | Body, UI, nav, forms, eyebrows | 400–700 | 400 body · 600 labels/eyebrows · 700 buttons. Body line-height ~1.85. |
| **Monospace (`ui-monospace`/SF Mono)** | Metadata only, sparing | 400 | Small metadata (dates, read-time). **Never** for eyebrows/section markers. |

**Type scale (role → live spec)**
- **H1 hero** — Bricolage 800, `clamp(32px, 6vw, 66px)`, tracking −0.04em, line-height 0.98, max-width 20ch, `text-wrap: balance`.
- **H2 section** — Bricolage 800, `clamp(24px, 3.2vw, 44px)`, tracking −0.04em, line-height 1.0.
- **Body** — Inter 400, clamp(13–16px), line-height ~1.85, `--gray`/`--ink-2`.
- **Eyebrow** — Inter 600, 13px, **sentence case**, letter-spacing −0.01em, colour `--chartreuse-deep`, preceded by a short hairline rule or an accent number. *(This replaced the old uppercase-tracked eyebrow — do not bring it back.)*
- **Buttons/labels** — Inter 700, 11px, uppercase, letter-spacing 0.08em (the one legitimate uppercase use).

---

## 3. Logo

**Two-line wordmark**: `The B2B` over `Tinkerers.` — the trailing dot and the word "Tinkerers" carry the **chartreuse accent**. Source of truth: `public/logo.svg`. No symbol, no icon.

**Colour treatments (use only these):**
1. Cream wordmark + chartreuse accent on dark (nav/footer — the default).
2. Ink wordmark + chartreuse-deep accent on paper.
3. All-ink on chartreuse (rare, promotional).

**Rules:** never abbreviate, never swap typeface, never remove the dot, clear space = cap-height on all sides, never on photographic backgrounds. Motion Tinkerers mirrors the lockup (`Motion` / `Tinkerers.`) with the warm accent — do not mix accents in one lockup.

---

## 4. Spacing — Base-4 grid

4px base unit: xs 4 · sm 8 · md 16 · lg 24 · xl 40 · 2xl 64 · 3xl 96 (section padding desktop).
Responsive page padding: `clamp(20px, 5vw, 72px)` (`--pad`). Content max-width: **1100px**. Nav height: **68px**.

---

## 5. Components (live specs)

### Buttons
Square, no shadows. Inter 700, 11px, uppercase, letter-spacing 0.08em, padding ~14px × 28px.

| Button | Background | Text | Use |
|---|---|---|---|
| **Primary** | `--chartreuse` | `--ink` | Main CTA. One per section max. Hover: opacity .88. |
| **Secondary (dark)** | `--ink` | `--cream` | Important actions on paper. |
| **Ghost light** | transparent | `--ink` | Tertiary on paper. |
| **Ghost dark** | transparent | cream @80% | Secondary on ink sections. |

Primary CTAs may carry a trailing arrow ("Primary CTA →"). The same button grammar is shared with Motion (fill = warm yellow there) — shape and behavior identical, colour by brand temperature.

### Cards & containers
Square corners. Surfaces: `--card` on paper, `--paper-2` for supporting panels, `--ink` for featured/dark cards. Hairline borders (`--line`) instead of shadows.

### Navigation
Fixed top bar, `--ink` background, 68px, 1px chartreuse-tinted bottom border (`rgba(183,214,43,.14)`); soft shadow on scroll. Links: Inter 600 15px, cream @70% → full cream + chartreuse underline (2px) on hover/active. Chartreuse CTA at right (uppercase 11px). Burger menu ≤700px. Includes an EN/ES language switcher (site is bilingual; ES lives under `/es/`).

### Forms
Inputs: cream background, 1.5px ink-tinted border (goes solid on focus), 13–15px padding, Inter 14px, square. Labels: small, 700, uppercase, tracked. Submit: dark fill, cream text.

### Section primitives
- **Eyebrow** — see Typography. Sentence case, chartreuse-deep, hairline/number marker.
- **Numbered section markers** — accent-coloured number + sentence-case label (replaces old mono eyebrows).

---

## 6. Voice & Tone

**Challenger. Humble. Human.** Bold in the headline, humble in the detail.

**Tone position:** Conversational (75%) · moderately Provocateur (60%) · Close · mildly humorous.
**Personality:** BOLD · WARM · CURIOUS · HUMBLE. **Never:** corporate, jargon-heavy, promotional, arrogant, vague.
**B2B voice is reflective** (Motion's, when it arrives, is propulsive).

**Writing rules:** short sentences, one idea each · no jargon ("pipeline" yes, "revenue velocity optimisation" no) · we over I · active voice · specific over vague · end on the point · avoid em-dashes as separators (use periods).

**Sound like this ✓** "Your marketing budget isn't the problem. How you use it is." · "We don't arrive with answers. We arrive with the right questions." · "30 minutes. No pitch. Just an honest conversation."
**Not like this ✕** "We offer comprehensive B2B marketing solutions tailored to your unique business needs."

**Bilingual:** EN (US) default at root; ES (Spain Spanish, natural — not literal translation) under `/es/`. Same challenger voice in both. Technical terms stay as-is (pipeline, GTM, ICP, MQL…).
**Money:** EN → `$220,000 (€200,000)` · ES → `200.000 € (220.000 $)` (ES number format, symbol after).

---

## 7. Messaging

**Brand promise** — "We don't do more marketing. We do marketing that works." · "Less noise. More signal. Real growth."

Approved headlines: Hero "Your marketing budget isn't the problem. How you use it is." · Problem "You're not spending too little on marketing. You're spending it wrong." · Method "We don't arrive with answers. We arrive with the right questions." · CTA "Your team is ready. What's missing is the direction." + "30 minutes. No pitch. Just an honest conversation."

Proof points (always cite source): 65% misalignment (Forrester 2024) · ~10% revenue lost · 27% faster profit growth with alignment.

---

## 8. Image system — three registers, one temperature

The old single-style risograph system was **retired as primary**. Imagery now uses **three registers under an assignment rule** (never free choice per post), unified by brand colour, grain and identical card typography:

| Register | When | Notes |
|---|---|---|
| **Photo-duotone** | Default workhorse: cases, tactical, how-to, real subjects. | Deterministic luminance→brand-ramp map (scripted, `docs/brand/duotone.py`). Cool ramp: ink → forest → emerald → chartreuse → cream. Then grain. |
| **Abstract / gradient** | Heroes, concept/opinion posts, category headers. | The cool gradient ramp (`#07231A → #1F7351`) — premium-tech. Don't overuse. |
| **Risograph** | Occasional accent: data-heavy posts where an illustrated chart genuinely communicates. | The heritage style, now deliberate seasoning. |

**Connective tissue:** grain across all three registers (15–25%), cool temperature, same title/tag treatment on cards.
**Specs:** cover 1200×514 WebP < 120 KB · inline 1200×675 WebP < 80 KB.
**Generation:** Higgsfield connector — **Recraft V4.1** for flat/duotone/riso (use its structured `colors` param, never hex in prompt text), Seedream for legacy riso. Charts always "unlabeled/abstract". No faces; abstract silhouettes only in illustration.

---

## 9. Founder photography (human layer)

Real, not corporate: direct eye contact, navy t-shirt, natural workspace, natural side light. Only in About / final CTA / Contact / LinkedIn. Never in blog imagery, heroes or next to illustration — the two visual languages stay strictly separate. Crops 4:5, 1:1, 3:4.

---

## 10. Brand context (for tone-aware generation)

Audience: mid-market B2B tech/SaaS & industrial (100–500 employees, €20M–€200M) with a marketing team but no strategic leadership. Buyers: CEO, Sales Director, Head of Marketing (come in alongside, not above). Positioning: insiders, not an agency; leave clients more capable, not more dependent. Six services: Marketing Audit · Brand Strategy & Positioning · Go-To-Market · Marketing Plan & Alignment · AI & Hybrid Marketing Strategy · Fractional CMO. **Site is bilingual EN/ES**; EN is default.

---

# ▣ ADJUNTOS — "Provide examples of your design system and products"

1. **Link code on GitHub (recomendado)** — repo público: `https://github.com/jaromeroes/theb2btinkerers.com`, rama **`rebrand/tinkerers-theme`** (o `main` una vez mergeada — verifica cuál lleva el rebrand al montarlo). Cubre `src/styles/global.css` (tokens reales), `src/layouts/Base.astro`, `src/components/pages/`, `public/logo.svg`. Ignora `dist/`.
2. **Fuentes** — en el repo vía Fontsource: **Inter Variable** y **Bricolage Grotesque Variable** (`node_modules/@fontsource-variable/...` o descárgalas de Fontsource y arrástralas). DM Mono ya **no** forma parte del sistema (los eyebrows son Inter sentence-case).
3. **Logo** — `public/logo.svg` (wordmark dos líneas con punto chartreuse).
4. **Referencias visuales** — artifacts del rebrand (privados de tu cuenta): B2B home cool `claude.ai/code/artifact/c4c0c8ad-...` · brand system `c457619b-...` · duotone check `693edfa9-...` (URLs completas en `docs/brand/brand-system.md` §7).

---

# ▣ NOTAS DE AUDITORÍA (doc anterior → este)

Cambios clave respecto al pack v1 (sistema viejo):
1. **Paleta**: Forest `#1C4A3A` deja de ser el dark dominante → ahora **ink `#15140F`**; el verde queda para gradientes/imagen. Lime `#D4E84A` → **chartreuse `#B7D62B`** (+ `#8AAC17` para texto).
2. **Eyebrows**: de DM Mono uppercase tracked → **Inter 600 sentence-case chartreuse-deep** (el uppercase-mono se considera AI-slop en el nuevo sistema). DM Mono sale del stack.
3. **Imagen**: de "todo risograph" → **tres registros** (duotone default + gradientes + riso como acento) con receta `duotone.py`.
4. **Idioma**: de "English only" → **bilingüe EN/ES** con switcher en nav.
5. **Marca**: ahora existe la casa **The Tinkerers** (B2B cool / Motion warm); el design system debe mantener la gramática compartida de botones.
6. Tokens legacy en CSS (`--forest`, `--lime`) **conservan nombre pero han cambiado de valor** — al montar el design system usa los nombres semánticos nuevos (paper/ink/chartreuse) y trata los viejos como alias.
