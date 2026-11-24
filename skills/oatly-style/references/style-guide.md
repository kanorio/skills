# Style guide: Oatly style

The look in one sentence: a site laid on grid paper inside a thin-lined window, built from bordered tiles with colored category stickers, shouted in hand-cut condensed capitals and annotated with marker doodles.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--mat` / `--grid` | warm cream / soft tan lines | near-black / faint warm lines | the grid paper outside the window and in tile zones |
| `--bg` | paper white with a cream cast | warm near-black | the inside of the window |
| `--surface` / `--surface-2` | white / pale cream | one and two steps lighter | caption strips, inputs, cards / hover |
| `--text` / `--text-muted` | ink / warm gray | paper / light warm gray | everything readable / leads and metadata |
| `--line` | ink | paper | every frame line, tile border and drawing stroke |
| `--line-soft` | light tan | dark tan | dividers inside lists only |
| `--accent` / `--accent-text` | ink / paper | paper / ink | primary buttons, the ticker, pressed chips |
| `--tag-*` | six pastel stickers | the same pastels | category tags, stickers, swatches; text on them is always `--tag-text` (dark) |
| `--panel-*` | seven bright flat fills | seven deep fills | the media area of tiles, the poster, art panels |
| `--panel-ink` / `--panel-ink-text` | ink / paper | paper / ink | type tiles (one giant phrase, no drawing) |
| `--focus` / `--danger` | blue / red | lighter blue / lighter red | focus rings / form errors |

Tags are stickers: the same light pastel in both themes, so they pop on dark panels. Panels change with the theme because drawings on them use `currentColor`.

## Typography

- Two families. **Bahiana** (display, one weight) for every headline, number, price and handwritten note. **Archivo** (variable weight and width) for body text, labels and controls.
- Display text is always uppercase (set with CSS, written in normal case), line-height 0.82 to 0.9, letter-spacing 0.01em, and thickened with `-webkit-text-stroke: 0.025em currentColor` so the hand-cut letters read heavy. That stroke is part of the face; keep it.
- Sizes: display 72 to 216px (once per page, the home poster), H1 60 to 152px, H2 44 to 92px, H3 30 to 44px. These sizes look enormous in pixels but the face is narrow, so a headline still fits in half the width.
- Labels: Archivo at `font-stretch: 85%`, weight 650, uppercase, 0.05em tracking, 12 to 14px. Used for nav, tile titles, tags, buttons, field labels and the path in the window bar.
- Body: Archivo 17px, line-height 1.55. Leads are 17 to 21px. Never set paragraphs in the display face.
- Headlines are short claims with a period: "Fermented slowly. Eaten fast." Prices in the display face: "$9".

## Spacing, layout and radius

- The window: the page sits on grid paper (16px squares), inset 22px on desktop, 12px on tablets and 0 on phones. The frame is 1.5px ink lines; its width caps at 1680px so wide screens show more paper.
- Inside, content runs edge to edge in full-width bands separated by 1.5px lines. Side padding is 16 to 40px. There is no centered narrow column except for legal prose (68 characters).
- Tile zones put the grid paper back behind a 12-column bento grid (6 columns on tablets, 2 on phones) with 14 to 26px gaps and rows of 128 to 166px.
- Radius: 0 for tiles, panels and frames; 2px for buttons, inputs and tags. Only stickers and avatars are round.
- Vertical rhythm comes from the bands, not from big empty margins: 28 to 64px of padding per band.

## Surfaces and depth

- Everything is flat. A tile is a 1.5px ink border, a flat panel color and a white caption strip.
- Depth is a hard offset shadow: `4px 4px 0` in the line color, shown when a tile is hovered, a pack option is chosen, or an index card is pinned. Overlays use `8px 8px 0`.
- No gradients, blur, glass or soft shadows. The only translucency is the jar glass in drawings and the tape strips.

## Signature elements

Keep at least four on every page.

1. **The window.** Grid paper outside, a thin-lined frame, and a sticky bar of square cells: the brand mark, a path cell ("Jarful / Shop / Loud Dill Spears"), the theme toggle, the basket with a sticker count. Under it a row of evenly spaced uppercase links. A mat of grid paper covers the inset above the bar, so content scrolls under the frame's edge.
2. **Bento tiles with category stickers.** A bordered tile, a flat colored media area with one drawing (or one giant phrase), and a caption strip: an uppercase title on the left, a colored tag on the right. The whole tile is one link and lifts with a hard shadow on hover.
3. **Hand-cut giant type.** Condensed capitals at poster size, used for headlines, numbers, prices, the footer wordmark and the type tiles.
4. **Marker doodles and annotations.** Drawings with one marker line, plus scribbles laid over the layout: a wavy underline under one word, a hand-drawn ring around the current nav item and step numbers, curved arrows with a handwritten note, a scalloped sticker ("21 days in the crock").
5. **Ruled cells.** Steps, stats, contact details, the footer and the timeline are tables of equal cells divided by the same 1.5px lines as the frame.
6. **Small props.** Tape strips on a pinned note, a rotated index card in page heads, a hatch-filled spacer tile, an ink ticker strip.

## Components

- **Window bar:** 52px cells. Cells are square except the path cell, which takes the rest. On screens under 860px the link row hides and a menu cell opens a full-window sheet with giant links, each with its tag.
- **Poster:** the home hero. A full-width panel, a display headline with one underlined word, one lead sentence, a large drawing, a sticker, a handwritten note with an arrow, and a caption strip linking to the newest thing with its tag.
- **Ticker:** an ink strip of short promises in labels, separated by four-point stars, scrolling slowly; it pauses on hover and stops with reduced motion.
- **Tile kinds:** drawing tile, type tile (ink panel, one phrase), quote tile (cream panel, a short quote in the display face), form tile (newsletter), manifesto (a pinned paper note with uppercase text and one button), hatch spacer.
- **Product tile:** drawing on a panel (4:5), caption with name and price, then a foot with the category tag and an ink "Add" button.
- **Page head:** a giant H1 with a lead, and an optional index card (rotated 1.5 degrees, hard shadow, a tag and one sentence).
- **Toolbar:** filter chips (outlined, a small swatch of the category color; pressed chips are ink) and a count.
- **Rows:** FAQ and product details as full-width ruled rows with a plus that turns into a cross.
- **Forms:** uppercase labels above 48px fields with a 1.5px ink border; errors under the field; a green success sticker replaces the form.
- **Footer:** the brand name as a giant wordmark, a grid of link cells with a back-to-top cell, and one line of small print.

## Do and don't

- Do give every content category one tag color and keep it everywhere (tile, chip swatch, menu). Don't use tag colors decoratively.
- Do put one drawing or one phrase in a tile. Don't crowd a tile with text; the title lives in the caption.
- Do keep lines at 1.5px and corners square. Don't round tiles or add soft shadows.
- Do annotate: one underline, ring, arrow or sticker per screen. Don't scatter doodles everywhere.
- Do write headlines in the display face and everything else in Archivo. Don't set body text or long labels in the display face.
- Don't add photos to the tile grid unless the user supplies them, and don't add gradients, glass, emoji or icon fonts.

## Voice

Loud, honest and specific, with a dry sense of humor. Short sentences. Say what is in the product and what it is not ("Nothing else in the jar."). Admit small flaws ("Day 9 smells terrible."). First person plural, talking to one reader. No em dashes, no hype words ("revolutionary", "premium", "artisanal"), no exclamation marks in headlines, no lorem ipsum.
