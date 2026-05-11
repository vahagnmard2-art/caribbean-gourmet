# Caribbean Gourmet — Design System

All tokens and primitives are defined in `app/globals.css`. The stack is Next.js App Router + Tailwind CSS v4 (CSS-first config via `@theme {}`). Styling is ~95% inline `style={{}}` with shared behavior classes in `@layer components`.

---

## Token Inventory

### Brand color tokens

| Token | Value | Use |
|-------|-------|-----|
| `--color-molasses` | `#1A0E05` | Default page background |
| `--color-obsidian` | `#0D0702` | Card and section backgrounds (darker than page) |
| `--color-gold` | `#C8960C` | Primary accent — CTAs, active states, focus ring |
| `--color-gold-light` | `#E4AF24` | Gold hover state |
| `--color-saffron` | `#D4651A` | Secondary accent — weekend badges, chef story accents |
| `--color-pepper` | `#A8281E` | One consumer: "Most Ordered" dish badge in `components/MenuPreview.tsx:13` |
| `--color-callaloo` | `#2D5E3E` | Event section background, success state background |
| `--color-roti` | `#F5EDDB` | Light section backgrounds (chef story, about portrait) |
| `--color-coconut` | `#FAF8F2` | Primary text on dark backgrounds |
| `--color-text-dark` | `#1C1107` | Text on light (roti) backgrounds |
| `--color-text-muted` | `#6B5240` | Muted text on light (roti) backgrounds only — fails WCAG AA on dark |
| `--color-border-dark` | `#3D2410` | All borders in the codebase |

### Semantic text-on-dark tokens

Three named steps on the coconut opacity scale. All assume a dark background (molasses or obsidian).

| Token | Value | Use |
|-------|-------|-----|
| `--color-text-secondary` | `rgba(250,248,242,0.72)` | Card body copy, section descriptions |
| `--color-text-body-compact` | `rgba(250,248,242,0.65)` | Compact paragraph text in dense card/list layouts |
| `--color-text-primary-muted` | `rgba(250,248,242,0.55)` | Captions, disclaimers, metadata, footer nav |

### Font tokens

| Token | Resolves to | Use |
|-------|------------|-----|
| `--font-display` | Playfair Display → Georgia → serif | h1, h2, marketing headlines |
| `--font-serif` | DM Serif Display → Georgia → serif | h3, h4, card titles |
| `--font-sans` | Plus Jakarta Sans → system-ui | Body copy (default) |
| `--font-ui` | Space Grotesk → system-ui | Labels, badges, buttons, nav, captions |

---

## Primitive Inventory

All primitives are in `app/globals.css` `@layer components`. Apply via `className`.

### Buttons

**`.btn-primary`** — Filled gold button. Use for primary CTAs.
- Rest: gold background, molasses text
- Hover: gold-light background
- Active: scale 0.98
- Disabled: 0.6 opacity, not-allowed cursor

**`.btn-outline`** — Bordered gold button. Use for secondary CTAs.
- Rest: transparent background, gold border + text
- Hover: filled gold, molasses text

### Layout

**`.container`** — Max-width 1200px, centered, fluid horizontal padding (`clamp(1.25rem, 5vw, 3rem)`).

**`.section-pad`** — Vertical section rhythm (`clamp(4rem, 8vw, 8rem)`).

### Typography

**`.section-label`** — Uppercase eyebrow label in gold. `0.75rem / 600 / 0.08em tracking`. Apply to `<span>` or `<p>` above headings.

### Links

**`.gold-link`** — Gold text link with hover brightening. For links that should draw attention at rest.

**`.muted-link`** — Muted text link (primary-muted at rest → coconut on hover, underline appears). Use for navigation links, social links, and secondary anchors that should recede until interacted with.

### Cards

**`.card`** — Base card surface: obsidian background, dark border, 8px radius. Compose with layout classes for padding and flex direction.

**`.press-card`** — Extends `.card` with `1.75rem` padding, `display: block`, and gold border hover. Use for standalone press/quote cards.

**`.menu-card`** — Modifier for menu item cards. Adds gold border on hover. Always compose with `.card`.

**`.gallery-card`** — Modifier for gallery image containers. Applies a scale-up transform to the child `<img>` on hover. No fill — pair with explicit background.

### Utilities

**`.scrollbar-none`** — Hides scrollbar cross-browser. Use on horizontally-scrolling filter bars.

**`.marquee-track`** — Infinite horizontal scroll animation (50s). Pauses on hover. Use with duplicated content for seamless loop.

**`.hidden-mobile` / `.show-mobile`** — Responsive visibility breakpoint at 768px. Used by `Nav.tsx`.

---

## Intentional Un-tokenized Values

These `rgba(250,248,242,x)` values appear in the codebase without token names. Each is documented with the reason it was not tokenized.

### Background-relative opacity (callaloo surface)

`rgba(250,248,242,0.82)` in `components/GuyanaNight.tsx:43` and `app/catering/CateringForm.tsx:123` — both are body text on `--color-callaloo` (#2D5E3E). The contrast math differs from dark-background surfaces; a shared "dark-bg body" token would produce wrong contrast if applied here.

### Conditional open/closed signal

`rgba(250,248,242,0.82)` in `components/Footer.tsx:93` and `rgba(250,248,242,0.85)` in `app/contact/page.tsx:157` — these are the "open" value in a conditional pair where "closed" rows get `--color-text-primary-muted`. The opacity is doing semantic work (status indicator), not describing a text role.

### Elevated prose (watch for third instance)

`rgba(250,248,242,0.78)` in `components/VIPSignup.tsx:54` and `app/about/page.tsx:205` — intentionally brighter than `--color-text-secondary` to signal importance for persuasion copy and long-form prose. Two instances; tokenize if a third appears.

### Single-use calibrations

These appear once each and are context-specific adjustments, not drifting patterns:

| Value | Location | Reason |
|-------|----------|--------|
| `rgba(250,248,242,0.88)` | `ReviewsMarquee.tsx:74` | Review quote is primary visual focus of the card — near-full opacity intentional |
| `rgba(250,248,242,0.82)` | `Hero.tsx:64` | Large-format hero lead at hero scale; single instance |
| `rgba(250,248,242,0.8)` | `Footer.tsx:112` | Address block in footer contact column |
| `rgba(250,248,242,0.76)` | `catering/page.tsx:83` | Catering hero description at large format |
| `rgba(250,248,242,0.75)` | `CateringForm.tsx:50` | Form field labels — UI chrome, not prose body |

### Filter tab inactive color

`rgba(250,248,242,0.6)` in `MenuClient.tsx:58` and `GalleryClient.tsx:122` tab buttons — UI chrome for the filter tab pattern. Encoded in the tab button inline styles rather than a token because it belongs to the tab pattern (see Open Gaps).

---

## Open Gaps

### G2 — `.card` unadopted consumers (5 remaining)

The `.card` primitive exists and is used by `CateringForm.tsx` and `MenuClient.tsx`. Five components still define the card surface inline:

| File | Lines |
|------|-------|
| `components/Pillars.tsx` | 67–69 |
| `components/MenuPreview.tsx` | 95–97 |
| `components/ReviewsMarquee.tsx` | 53–55 |
| `app/catering/page.tsx` | 124–126 (package cards) |
| `app/catering/page.tsx` | 163–165 (trust signals box) |

Each adoption removes three inline properties (`backgroundColor`, `border`, `borderRadius`) and adds `className="card"`. No visual change.

### G5 — Tab filter pattern (deferred)

`MenuClient.tsx` and `GalleryClient.tsx` implement identical sticky filter tab bars with 100% duplicated inline styles. The right extraction is `.filter-bar` + `.filter-tab` CSS classes with `aria-selected` driving the active state — but correct ARIA requires the full tablist pattern (`role="tablist"`, `role="tab"`, `aria-controls`, `aria-labelledby`), which is a meaningful accessibility change. Deferred to a dedicated accessibility sprint.

Proposed CSS when ready:

```css
.filter-bar {
  position: sticky;
  top: 4.5rem;
  z-index: 10;
  background-color: var(--color-molasses);
  border-bottom: 1px solid var(--color-border-dark);
  overflow-x: auto;
}

.filter-tab {
  padding: 0.875rem 1.25rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-family: var(--font-ui);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(250, 248, 242, 0.6);
  white-space: nowrap;
  transition: color 150ms ease, border-color 150ms ease;
}
.filter-tab[aria-selected="true"] {
  border-bottom-color: var(--color-gold);
  font-weight: 700;
  color: var(--color-gold);
}
```

Note: `.filter-bar` assumes `--color-molasses` background. `GalleryClient.tsx` already uses molasses; `MenuClient.tsx` also uses molasses. Both match.

### `--color-pepper` — single consumer, decision pending

`#A8281E` (deep red) has one consumer: the "Most Ordered" dish badge in `components/MenuPreview.tsx:13`. With only one use, decide: keep as a one-off accent, promote to a named badge-color role if more uses appear, or replace with `--color-saffron` for consolidation.

---

## Adding New Tokens

Before adding a token to `@theme {}`:

1. Confirm at least two consumers serving the same semantic role on the same background type.
2. Confirm it is not a context-specific calibration (background-relative, conditional signal, single-use).
3. The elevated prose tier (`rgba(250,248,242,0.78)`) is the next candidate if a third instance appears.
4. All token additions require a scope proposal before implementation.

---

## Backlog

Items that are deferred but tracked. Each needs a trigger before action.

### G1 — Tab filter pattern extraction

**What:** `MenuClient.tsx` and `GalleryClient.tsx` share identical sticky filter tab bars with 100% duplicated inline styles. Proposed CSS (`.filter-bar` + `.filter-tab`) is fully specified in Open Gaps above.
**Current state:** Deferred — correct ARIA (`role="tablist"`, `role="tab"`, `aria-controls`, `aria-labelledby`) is a prerequisite and belongs in its own sprint.
**Trigger:** Accessibility sprint is scoped. Start in `app/menu/MenuClient.tsx` — it has the more complex filter set (6 items vs 4).

### G2 — Remaining `.card` unadopted consumers (5)

**What:** Five components define the card surface (`backgroundColor`, `border`, `borderRadius`) inline instead of using `.card`.
**Current state:** `components/Pillars.tsx:67-69`, `components/MenuPreview.tsx:95-97`, `components/ReviewsMarquee.tsx:53-55`, `app/catering/page.tsx:124-126`, `app/catering/page.tsx:163-165`.
**Trigger:** Any time. Each is a 3-property removal + `className="card"` addition, no visual change. Lowest-risk backlog item.

### Elevated prose tier (0.78) — promote to token at third instance

**What:** `rgba(250,248,242,0.78)` appears in `VIPSignup.tsx:54` (persuasion copy) and `about/page.tsx:205` (long-form prose). Two instances, same dark-bg context, similar role.
**Current state:** Documented as intentional un-tokenized. Not yet worth a token at two instances.
**Trigger:** A third consumer appears anywhere on a dark background in a prose/body role. Proposed name: `--color-text-elevated` or `--color-text-prose`.

### `--color-pepper` — one consumer, decide fate

**What:** `#A8281E` (deep red) is used only in `MenuPreview.tsx:13` as a badge color ("Most Ordered"). One instance is below the two-consumer gate.
**Current state:** Kept — it's in the token file and actively used. No urgency.
**Trigger:** A second badge or accent use appears → promote and document. Or decision is made to consolidate with `--color-saffron` → replace the one instance and remove the token.
