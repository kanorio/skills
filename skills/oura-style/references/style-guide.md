# Style guide

The look in one sentence: warm oat paper, a condensed editorial serif set large and centred, warm charcoal pill buttons and round icon buttons, and a soft rounded panel held off the edges of the screen, with photographs that carry small dark chips laid over them.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Oat (default) | Walnut | Use |
|---|---|---|---|
| `--bg` | warm oat paper | warm near-black (never `#000`) | the page |
| `--surface` | a step darker oat | a step lighter walnut | product tiles, quote cards, value cards, the bag summary, form cards |
| `--field` | near-white oat | a step lighter than the page | inputs, selects, the menu sheet, the note that opens over a story card |
| `--panel-1` / `--panel-2` | pale oat to warm sand | lifted walnut to the page | the inset panel's top-to-bottom gradient (hero and letters) |
| `--text` / `--text-muted` | warm charcoal / warm grey | oat / soft oat | headings and body / leads, notes, meta, labels |
| `--border` | pale sand | dark walnut | hairlines, ghost pills, outlined round buttons, fields |
| `--accent` / `--accent-text` | warm charcoal / oat | oat / walnut | solid pills, filled round buttons, chosen chips and sizes |
| `--ink` / `--on-ink` | near-black walnut / oat | deeper walnut / oat | the dark band and the small label tags |
| `--chip` | translucent charcoal | translucent walnut | chips laid over photographs (with a backdrop blur) |
| `--clay` | earth red | lighter clay | the bag count, nothing else |
| `--error`, `--ok` | muted red, sage | lighter red, lighter sage | field errors; "added" and checkout notes |

There is no bright brand colour. The palette is oat, sand, charcoal and walnut; colour comes from the photographs and the products themselves. A brand colour may replace `--clay` (the bag count) or tint one small mark, never the pills, the page or the panel.

## Typography

- Two families. **Instrument Serif** (a condensed, high-contrast display serif with an italic) sets the display line, H1, H2, H3, quotes, the wordmark and the big numbers. **Schibsted Grotesk** (a plain grotesk, variable 400 to 900) sets everything else: body, leads, navigation, pills, chips, labels, prices, product names and the captions on photographs.
- Headlines are the serif at its single weight (400), set big and tight: display `clamp(52px … 108px)` at line-height 0.98, H1 up to 84px at 1.0, H2 up to 64px at 1.02, letter-spacing -0.012em, sentence case, `text-wrap: balance`. Most headlines are centred.
- Captions on photographs are the grotesk at weight 300, 28 to 40px: the contrast between a condensed serif on paper and a light sans on pictures is part of the look.
- Body is the grotesk at 17px, weight 400, line-height 1.55. Leads are 18 to 22px in the muted colour, at most 40 characters wide when centred. Articles run at 18px in a 680px column.
- Labels: the kicker (`.kicker`) is 12px, weight 600, uppercase, 0.06em tracking, muted. Tags (`.tag`) are 11px, weight 600, uppercase, cream on ink, in a 6px-radius box. These are the only uppercase on the page besides the date blocks.
- The wordmark is live text in the serif at 32px (40px in the footer).

## Spacing, layout and radius

- Content width 1312px with a fluid gutter (16 to 64px). Sections run 72 to 136px of vertical padding (`--sec`); a following section that continues the same subject uses `.sec.near` (56 to 104px) instead of doubling the gap.
- The inset panel (`.panel`) is held `--inset` (8 to 24px) off both edges of the viewport and rounded by `--r-panel` (20 to 28px). It is used twice on home: the hero and the letters panel.
- Centre the hero, statements, figures, page heads and the letters panel. Grids (products, quotes, journal, values) are left-aligned and even: four tiles on desktop, two on phones; three quote cards; a 1.62 : 1 split in the ink band.
- Radius: pills and chips are fully round (`999px`); cards and pictures 16px; quote and paper cards 12px; tags 6px; the panel 28px. Nothing is square-cornered except hairlines.

## Surfaces and depth

- Flat paper. Depth comes from tone steps (page, oat card, field), never from shadows. The only shadows are inside the product pictures.
- The panel carries a soft vertical gradient (`--panel-1` to `--panel-2`). It is the one gradient on the page besides the dark scrim at the bottom of photographs.
- The ink band (`.ink`) is the one dark block on a light page: it holds the journal feature and its paper cards.
- Photographs with text on them get a gradient scrim at the top and bottom (`.story::after`, `.feature::after`) so chips and captions stay readable.

## Signature elements

These make the style recognizable. Home uses all of them; every other view keeps at least three.

1. **The inset rounded panel.** The hero sits in a rounded, softly graded panel held off the screen edges, with the headline centred at the top and a product render on a ribbon of silk at the bottom.
2. **A condensed editorial serif, centred and large.** One headline per screen, often a single line, over a short muted lead and a pair of pills.
3. **Charcoal pill buttons and round icon buttons.** Solid charcoal pills for actions, ghost pills beside them, 48px circles for the theme, the bag, carousel arrows and "add"; one filled circle marks the forward direction.
4. **Chips laid over photographs.** Story cards carry a dark translucent chip with an icon and a word at the top left, a cream round plus at the top right that opens a short note, and a large light caption at the bottom.
5. **The hairline rail.** A sideways row of story cards, a full-width hairline under it, and two arrows at the right end: a plain one back, a filled one forward.
6. **Tag-headed quote cards and the ink band.** Oat cards headed by a small uppercase tag on ink, the quote in the serif, initials in a circle; then a near-black band with one picture card and a column of paper cards with round arrow buttons.

## Components

- **Notice line:** one centred 13px sentence above the header.
- **Header:** the wordmark on the left, up to five grotesk links centred (the current one underlined), round theme and bag buttons on the right; the bag shows a clay count. A hairline appears once the page scrolls. Links never wrap: `fitNav()` adds `.compact` whenever they do not fit, and they move into `#menu`, a rounded `<dialog>` sheet in the top-right corner with large serif links.
- **Hero:** `.panel.hero`: a tag, the display H1, a lead, two pills (solid, ghost), and `.hero-media` with a wide transparent product render that crops from the bottom on phones.
- **Statement:** a centred H2, a lead and two solid pills.
- **Story card:** `.story` in `.rail`: a 4:5 photograph, a chip, a cream round plus (`aria-expanded`) that opens `.story-more` over the picture, and the caption.
- **Figure:** a centred display line with a footnote marker (`sup.fn`) that links to the note in the footer, a lead, a small line and one pill.
- **Product tile:** `.prod`: oat card, a square product picture on a transparent background, an optional badge pill, the name, one muted line, the price and an outlined round plus that adds to the bag. The whole tile links to the product; the plus sits above the link.
- **Quote card:** `.quote`: tag, serif quote, initials and a first name.
- **Ink band:** `.ink` with `.feature` (picture card with a light caption and a cream pill) and `.paper` cards (one sentence and a filled round arrow that turns 45 degrees on hover).
- **Filters:** pill chips with `aria-pressed` (the chosen one charcoal), an optional toggle chip, a live count and a pill select; an empty state on an oat card with a reset pill.
- **Product page:** an oat gallery with thumbnails, breadcrumbs, the H1, a lead, the price, size pills (radio inputs), a quantity stepper and a wide "Add to bag" pill, then `details` rows with a plus that turns into a cross.
- **Bag:** lines with a picture, a stepper and "Remove"; a summary card with a free-delivery meter, subtotal, delivery, total and the checkout pill.
- **Forms:** a rounded oat card, labels above pill-shaped fields (the textarea is 20px round), errors floating under each field, one solid pill submit, and a success panel that repeats what was sent.
- **Footer:** a hairline above, the wordmark and address, three short link lists, then the footnote and the copyright line.

## Do and don't

- Do centre the big serif lines and keep them short. Don't set long paragraphs in the serif or headlines in the grotesk.
- Do use pills and circles for every action. Don't use square buttons, underlined-word buttons as the main action, or outlined rectangles.
- Do keep the page oat and the text charcoal. Don't use pure white, pure black, bright accent colours or coloured section bands.
- Do put chips and captions on photographs, with a scrim. Don't put body copy or forms over pictures.
- Do use one inset panel per screen at most. Don't round every section or nest panels.
- Don't use emoji, icon fonts, auto-advancing carousels, parallax or video backgrounds.

## Voice

Warm, plain and specific, like a maker talking across a counter. Say what a thing is made of, how much of it there is and what to do with it (two tablespoons, ten minutes, sixty jars). Short sentences, gentle verbs (slow, settle, wind down), no superlatives, no exclamation marks and no wellness claims or hype ("miracle", "clinically", "transform", "luxury", "game-changing"). Numbers are exact and true; prices sit beside the product, never hidden.
