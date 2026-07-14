# The Tinkerers — Brand System

> Consolidated design & brand system for the rebrand. Single source of truth for implementation in Astro.
> Status: **v0 draft** (2026-07-12). Directions validated visually; content for Motion still to be finalized.

---

## 1. Brand architecture — one house, two brands

**The Tinkerers** is the master brand (the "studio"). Two arms with a **hard division of labor**:

| Brand | Role | Temperature | Sells |
|---|---|---|---|
| **B2B Tinkerers** | The brain — strategy | Cool | Marketing strategy, positioning, GTM. Human, senior, advisory. |
| **Motion Tinkerers** | The hands — AI execution | Warm / kinetic | Agentic AI marketing team that runs GTM & marketing execution. |

**The rule that makes it work:** do **not** transition B2B Tinkerers toward AI *and* run Motion for AI at the same time — they'd collide. Motion **is** the AI move; B2B doubles down as the human strategy brand.

- Shared connective tissue: the "Tinkerers" wordmark family + one editorial visual system.
- Cross-sell funnel: Strategy (B2B) → Execution (Motion) → Direction (B2B).
- **Launch staged**, not simultaneous: B2B consolidated first on the new system; Motion built on the same DNA and launched when its offer is real and sellable.
- Legal entity: **B2B Tinkers SL** (invoicing only; not a market-facing brand name).

**Open naming tension (unresolved):** logo reads "The B2B Tinkerers", but the family pairs cleaner in parallel as "B2B Tinkerers / Motion Tinkerers". Decide before launch. The `B2B Tinkers` rename (to match the SL) was **rejected** — "Tinkerers" (maker/experimenter) is the stronger word; "Tinkers" loses that and carries a slur risk in UK/Ireland.

---

## 2. Design system — shared DNA

Editorial black-and-white with a single warm/cool accent. Reference of *spirit* (not copy): **bland.ai** — warm-white ground, heavy grotesque, hairline rules, one hot accent for CTA + data.

### Color tokens

**Shared neutrals**
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F7F5EF` | Ground (warm white, not pure) |
| `--card` | `#FBFAF6` | Card surface |
| `--paper-2` | `#EFEDE5` | Secondary surface |
| `--ink` | `#15140F` | Text / dark ground |
| `--ink-2` | `#46443C` | Secondary text |
| `--ink-3` | `#7C7A70` | Muted / labels |
| `--cream` | `#F5F0E8` | Text on dark grounds |
| `--line` | `rgba(21,20,15,.13)` | Hairlines |

**B2B Tinkerers — cool accent** (heritage lime, refined)
| Token | Hex |
|---|---|
| `--chartreuse` | `#B7D62B` |
| `--chartreuse-deep` | `#8AAC17` (text-contrast on paper) |
| Cool gradient depths | `#07231A` · `#0D3324` · `#175640` · `#1F7351` |

**Motion Tinkerers — warm accent**
| Token | Hex |
|---|---|
| `--amber` | `#F5B301` |
| `--yellow` (CTA) | `#F6C21A` |
| `--orange` (data) | `#EE5A1E` |
| `--orange-deep` | `#C6470F` (text-contrast on paper) |
| Warm mesh (hero) | `#FCE39B` · `#F5B301` · `#EE5A1E` · `#E23C86` |

### Typography

- **Display:** heavy grotesque, 800, tight tracking (`letter-spacing` ~ -0.035em). Target faces: **Neue Haas Grotesk / GT America** (to license). System placeholder: `-apple-system` / `system-ui`.
- **Body:** neutral sans (Söhne / Suisse Int'l target). Placeholder: same system stack.
- **Labels / metadata:** monospace (`ui-monospace`, SF Mono). Used sparingly.
- **Avoid AI-slop:** no uppercase-tracked-mono eyebrows with `·` separators; no dot-prefixed pill lists. Section markers = number (accent) + sentence-case label.

### CTA rule — shared grammar, color by temperature

Same **shape, weight, placement** across both brands (the family signature). The **fill follows the brand**:
- B2B → `--chartreuse` fill, `--ink` text (its heritage lime button, evolved).
- Motion → `--yellow`/amber fill, `--ink` text (the warm bland-style CTA).

Not identical, but siblings — unified by *behavior*, differentiated by *temperature*.

---

## 3. Logo

- Use the **real two-line wordmark**: `The B2B` (cream/ink) over `Tinkerers.` + dot (accent). Source: `public/logo.svg`. Recolor accent to `--chartreuse` for system consistency.
- **Motion** mirrors the lockup: `Motion` / `Tinkerers.`, accent in warm. Currently a text placeholder — **needs a proper drawn wordmark**.

---

## 4. Imagery system

Three registers that **coexist under an assignment rule** (not free choice per post — that's what unifies the blog):

| Register | When to use | Notes |
|---|---|---|
| **Photo-duotone** | Default workhorse. Cases, tactical, how-to, anything with a real subject. | Topical + consistent + premium. |
| **Abstract / gradient** | Heroes, concept/opinion posts with no obvious subject, category headers, all of Motion. | The "gradientes guapos". Premium-tech. Don't overuse or it goes monotonous. |
| **Risograph** | Reserved / occasional. Data-heavy posts where an illustrated chart genuinely communicates. | Retired as *primary* style; kept as a deliberate accent. |

**Connective tissue** (makes three feel like one): brand color + temperature (cool B2B / warm Motion), **grain across all three**, same typographic treatment of title/tag on cards. Grain is where the risograph soul survives.

### The duotone recipe = the reusable "visual code"

Deterministic luminance→color map. See [`duotone.py`](./duotone.py). Same script, different color stops = different temperature.

Flow per cover: **photo → grayscale → map luminance to brand ramp → grain → crop 1200×514 → WebP**.
- Cool ramp (B2B): ink → forest → emerald → chartreuse → cream.
- Warm ramp (Motion): ink → deep brown → orange → amber → cream.

This fixes the "olive vs clean chartreuse" problem: the model's direct duotone is uncontrolled; the script makes tone a deliberate decision.

### Generation notes

- **Model:** Higgsfield connector (user's account) → **Recraft V4.1**. Use its structured `colors` param for brand palette (never hex in the prompt text — causes text artifacts). `models_explore(action:'recommend')` when unsure.
- Existing prompt rules still apply (see root `CLAUDE.md`): unlabeled/abstract charts, hands as selective motif, no reliance on vertical positioning.

### Image specs (unchanged)

- Cover: **1200×514**, WebP, < 120 KB.
- Inline: **1200×675**, WebP, < 80 KB.

---

## 5. Voice (unchanged)

Direct, insider, honest even when uncomfortable. Challenger. Bold in the headline, humble in the detail. No agency jargon, no buzzwords, no transactional lead-gen CTAs. Avoid em-dashes as sentence separators. Money shown in euro + dollar: `€200,000 ($220,000)`.
- B2B voice: reflective. Motion voice: propulsive, "in motion".

---

## 6. Open decisions / next steps

1. **Motion offer** — real capabilities, packaging, pricing, ICP → replace placeholder content on the Motion page.
2. **Naming** — resolve "The B2B Tinkerers" vs parallel "B2B Tinkerers".
3. **Motion logo** — commission a proper drawn wordmark.
4. **Fonts** — license the display + body faces; replace system placeholders.
5. **Implementation** — bring the system into Astro (tokens in `global.css`, new hero, imagery pipeline). Version `duotone.py` into the build.

---

## 7. Working artifacts (v0 explorations)

- Visual territories (early): https://claude.ai/code/artifact/fb3f06ea-acbc-418a-b33a-53731dbdb0fb
- Brand system (house, two temperatures): https://claude.ai/code/artifact/c457619b-7e29-4f32-b033-4b3389d2c1eb
- **B2B Tinkerers home** (cool, gradient hero): https://claude.ai/code/artifact/c4c0c8ad-f376-4606-a0d8-c6640ffa98c2
- **Motion Tinkerers home** (warm, kinetic): https://claude.ai/code/artifact/9be6fc03-13a6-4d5c-9ae0-85fdbdd0a1f6
- Duotone verification: https://claude.ai/code/artifact/693edfa9-5cab-4baa-bdb5-a3885ebf2d6a

*(Artifacts are private to the owner's claude.ai account.)*
