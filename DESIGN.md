# DESIGN.md — Janibek Shakeleq, portfolio

## Direction
Editorial gallery. The paintings are loud (ochre, umber, burnt red, teal, charcoal figures),
so the site is quiet: warm paper background, ink text, one ochre accent, generous whitespace,
large images, captions set small like a museum label. Reference feel: Italian gallery sites
(Monica De Cardenas, Galleria Continua) + personal painter sites (Kehinde Wiley-style
"Works / Commissions / About / Contact" simplicity).

## Tokens
Colors (light):
- --paper  #f4efe6  page background (warm, slightly yellow like primed linen)
- --paper-2 #ebe4d6 cards / alternate bands
- --ink    #1c1a17  text
- --ink-2  #5a554d  secondary text, captions
- --line   #d8d0c0  hairlines
- --ochre  #b9772d  accent (links, hover, availability dot) — pulled from his canvases
- --teal   #3d7f80  secondary accent (used once: "Available" status)
- --umber  #5b3a26  dark accent for buttons

Colors (dark): --paper #171512, --paper-2 #1f1c18, --ink #ece6da, --ink-2 #a39b8d,
--line #332e28, --ochre #d4914a, --teal #5fa5a4.

Typography:
- Display: "Cormorant Garamond" 300/400/italic — headlines, work titles.
- Body/UI: "Inter" 400/500 — captions, nav, forms. Captions 13px tracking .02em.
- Scale: hero 56–96px fluid, h2 36–48px, body 17px, caption 13px.

Spacing: 8px base; section padding 96–144px; max content width 1280px; gutter 24px mobile / 48px desktop.
Radius: 0 (paintings are rectangles; nothing rounded except the status dot).
Shadows: none. Hierarchy comes from size and hairlines.
Motion: 200ms ease on hover opacity; images fade in on load; no parallax.

## Components
- Nav: wordmark left, 4 links right, EN|IT switch, hairline below.
- Work card: image, then caption "Title, year" (serif italic) / "medium, W × H cm" / status.
- Filter chips: text buttons with underline on active.
- Lightbox: full-bleed image on paper background, caption below, ← → keys, Esc.
- Commission steps: numbered list 01–05, hairline separators.
- Form: underline inputs, umber submit button.
