# Portfolio Redesign — Design Brief & Build Rules

This file is the source of truth for the visual refactor. Read it fully before writing any code. This is a **visual refactor of an existing Next.js + React portfolio** — preserve routing, data, and logic; change the look, not the wiring.

---

## 1. The concept (one idea, hold the line)

A **near-black, type-led editorial portfolio**. The personality comes entirely from oversized League Spartan type and the restrained use of two loud colors against a calm dark canvas. No decoration earns its place unless it's type, space, or one of the two accent colors.

Structure: **hero + a few sections (hybrid)** — a poster-like opening viewport, then a short scroll of type-led sections.

The whole thing should feel like a printed design annual, not a SaaS landing page.

---

## 2. Design tokens (use these literally — do not invent colors or fonts)

### Color

```css
:root {
  /* Surfaces */
  --bg:        #0D0D0F;            /* near-black canvas. NOT pure #000 */
  --surface:   #161619;            /* faintly raised panels — use rarely */
  --hairline:  rgba(255,255,255,0.10); /* thin dividers only */

  /* Ink */
  --ink:       #ECECEA;            /* primary text — off-white, NEVER pure #fff */
  --ink-muted: #7C7C82;            /* captions, idle nav, secondary text */

  /* Purple — brand + loud display */
  --purple:      #755893;          /* brand/logo anchor, mid fills */
  --purple-loud: #9E74D6;          /* BIG display type on black — vivid variant */
  --purple-deep: #4E3B66;          /* quiet fills, hover backgrounds */

  /* Lime — single accent, used sparingly */
  --lime:      #CAED4A;
  --lime-deep: #B2D62E;            /* hover / pressed */
}
```

**Color rules (non-negotiable):**
- `--purple-loud` is for the largest type. `--purple` is the brand anchor (logo, mid-size accents).
- **Lime is a spice, not a base.** It appears only as small marks: the trailing dot/period, a single hovered word, link underlines, the focus ring, one tiny label. If lime covers more than a few percent of any viewport, it's wrong.
- **Never place a large lime fill directly against a large purple fill** — they vibrate. Always separate them with `--bg` or `--ink`.
- Body text is `--ink` on `--bg`. That's the default reading state everywhere.

### Type

```css
--font-display: "League Spartan", system-ui, sans-serif;  /* HEADINGS ONLY */
--font-body:    "Hanken Grotesk", system-ui, sans-serif;  /* body + all UI text */
```

- **League Spartan is display-only.** It is hard to read small — never use it for paragraphs, nav, captions, or buttons. Headings and the hero name only.
- Body/UI font default is **Hanken Grotesk** (clean, neutral, readable, free on Google Fonts — and deliberately *not* Inter/Geist). If you want more editorial contrast, swap body to a serif like **Newsreader**; pick one and commit. *(Decision point — confirm with me.)*
- Load both via `next/font/google` for zero layout shift.

**Type scale (fluid):**
```css
--text-hero:    clamp(3.5rem, 16vw, 14rem);  /* the name / opening statement */
--text-h1:      clamp(2.5rem, 7vw, 6rem);
--text-h2:      clamp(1.75rem, 4vw, 3rem);
--text-body:    clamp(1rem, 1.1vw, 1.125rem);
--text-small:   0.8rem;                      /* nav, labels — uppercase, tracked */
```

- Display type: `line-height: 0.9`, `letter-spacing: -0.02em`, weight 700–900. Geometric faces want tight tracking when huge.
- Small labels/nav: `text-transform: uppercase`, `letter-spacing: 0.08em`, color `--ink-muted`.

### Space, grid, shape, motion

- **Spacing scale:** 4 / 8 / 16 / 24 / 40 / 64 / 96 / 160px. Use generously — whitespace is the design.
- **Grid:** 12-col, full-bleed with large fluid side padding `clamp(1.5rem, 6vw, 8rem)`. Don't trap everything in a centered `max-w-4xl` column.
- **Radius:** sharp or near-sharp. `0` to `4px` max. No `rounded-2xl`.
- **Shadows:** none. Depth comes from `--hairline` dividers and space, not drop shadows.
- **Motion:** restrained. Allowed — a single hero entrance, link underline draw on hover, color shift on hover, a slow custom easing (`cubic-bezier(0.16, 1, 0.3, 1)`). Forbidden — fade-up-on-scroll on every element. Respect `prefers-reduced-motion`.

---

## 3. Page structure (hybrid)

1. **Hero** — full viewport (`100svh`). Tiny brand/initials top-left; minimal corner nav links with arrows (echo the reference). Center stage is the giant name or a one-line statement of what you do, with a lime trailing dot. One quiet role line beneath in body font.
2. **Selected Work** — a type-led *list*, not a card grid. Each project is a large row: oversized project name in display type, a short line of description and role in body type, year on the right. Hover lifts the name to `--purple-loud` and draws a lime underline. Optional image reveal on hover. **No bento grid, no glass cards.**
3. **About** — short prose in body font, with one or two words emphasized in `--purple-loud`. Optionally a "Currently —" one-liner.
4. **Footer / Contact** — email set large in display type as the closing statement; socials small and muted. Minimal.

---

## 4. Ban-list (these are the slop defaults — do not produce any of them)

- Glassmorphism / `backdrop-blur` cards; floating animated gradient blobs.
- Any color gradient as a primary surface (purple→blue, etc.). Flat color only.
- `rounded-2xl` + `shadow-lg` on everything. Bento grids.
- Skill bars / "React 90%" proficiency meters; tech-logo grids.
- Emoji section headers; "Let's build something amazing together" CTA.
- `framer-motion` fade-up-on-scroll applied globally.
- League Spartan used for body or small UI text.
- Lime as a large fill, or lime directly touching a large purple fill.
- Pure black `#000` or pure white `#fff`.
- Everything centered in one narrow column.

---

## 5. Build workflow (do NOT generate the whole site in one pass)

- **Phase 0 — Audit.** Report the existing stack first: App Router or Pages? Tailwind, CSS Modules, or other? Where do project data and copy live? Don't change anything yet.
- **Phase 1 — System.** Wire the two fonts via `next/font`. Install the color + type tokens (as CSS variables and, if Tailwind, into `theme.extend`). Set global `--bg`/`--ink` defaults.
- **Phase 2 — Hero only.** Build the hero and stop. We iterate on this single section until it's right — it sets the tone for everything.
- **Phase 3 — Propagate.** Once the hero is approved, apply the system to the remaining sections one at a time, reusing the tokens. Keep all existing routing and data intact.

---

## 6. Fill these in before/while building (only the human can supply)

- Real bio / about copy in your own voice (replace any placeholder — content slop is the most common slop).
- The actual project list: name, one-line description, your role, year, link, and an image if any.
- Body font decision: Hanken Grotesk (default) or a serif like Newsreader?
- Confirm the section list above matches what you want (add/remove sections).
- The hero statement: just your name, or a short sentence about what you do?
