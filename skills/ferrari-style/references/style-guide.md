# Style guide

The look in one sentence: a pure black page, wide extended capitals in white, square outline buttons and circled-arrow links, one deep red kept for the action that matters, numbers set as large as headlines, and low-light photographs as the only decoration, so the site feels like a car revealed under a single studio light.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Black (default) | White | Use |
|---|---|---|---|
| `--bg` | pure black | pure white | the page and the header |
| `--surface` | a step above black | a pale grey | the footer and the menu |
| `--surface-2` | charcoal | light grey | bands that change the subject: numbers, specification, forms, the newsletter |
| `--text` / `--text-muted` | white / grey | near-black / mid grey | headings and body / ledes, labels, captions |
| `--border` | dark grey | pale grey | every hairline: specs, rows, events, filters, fields |
| `--line` | white | near-black | outline buttons, the pressed chip, a focused field |
| `--accent` / `--accent-text` | deep red / white | deeper red / white | the one solid button per screen, the hovered arrow ring, the current nav underline |
| `--accent-ink` | a lighter red | the same red | red as text or a rule: the index line, spec group labels, our rows in a results table |
| `--error` | soft red | red | field errors only |
| `--photo` | near-black | near-black | behind pictures while they load; pictures stay dark in both themes |

The red is the only colour in the interface. Everything else is black, white and grey; colour otherwise comes from the paint in the photographs. Pictures, photo tiles and the hero always carry white text, whichever theme is on.

The template is black by default and does not follow the system setting: white appears only after the toggle and is remembered. Both themes are complete.

## Typography

- One family, two widths. **Archivo** (an open grotesque with a width axis from 62% to 125% and weights 100 to 900) sets everything. Every heading, the wordmark, the years and the spec numbers run at 125% width (`font-stretch: var(--wide)`), uppercase. Reading text runs at 100% width in sentence case.
- Display and H1 are 700 to 800, line-height under 1.05, with a hair of letter-spacing. The model name on its own page (`.mega`) is 800 at up to 160px.
- Numbers are thin: spec values, years and dates at weight 300, 125% width, tabular figures, as large as a headline (`--fs-num`, up to 88px), with a small uppercase unit beside them.
- Labels (`.kicker`, nav links, buttons, chips, captions, table heads) are 12px, 500, 115% width, uppercase, letter-spacing 0.16em.
- Body copy is 16px, 400, line-height 1.65. Ledes are 17 to 20px in the muted colour.
- Photo tiles put a sentence-case label above the title (`Racing`, `Atelier`) in 16px semibold: the one place a label is not uppercase.
- The wordmark is live text: 800, extended, uppercase, letter-spacing 0.32em.

## Spacing, layout and radius

- Page width 1320px with a fluid gutter (20 to 56px). Sections take 72 to 144px of vertical padding (`--sec`).
- Pictures go edge to edge whenever they carry words: the hero, page heroes, the two-by-two tiles, the model stage. Elsewhere they sit in the grid at 16:9 or 4:3.
- Layout is calm and symmetric: centred hero copy, centred tile copy, two-column splits for text and specification, three-column cards. Asymmetry comes only from model rows that swap sides.
- Radius is 0 for everything except the circled arrow and the paint swatches, which are circles.

## Surfaces and depth

- No shadows, no glass, no rounded cards. Depth comes from light inside the photographs and from charcoal bands (`.band`).
- The only gradient is a dark scrim at the bottom of a picture that carries words, so the words stay readable.
- Hairlines (1px `--border`) divide everything: spec columns, rows of a table, events, showrooms, the header.

## Signature elements

These make the style recognizable. Home uses all of them; every other view keeps at least four.

1. **Wide capitals.** Headings, names and numbers in an extended grotesque, uppercase, white on black. The width does the shouting, never the colour.
2. **The index line.** A red section number, a 64px red rule, then the section's name in tracked capitals (`<p class="index"><b>02</b>Specification</p>`). It opens every section.
3. **Square outline buttons and circled arrows.** Buttons are 56px tall, square, a 1px outline that fills on hover; links to go somewhere are tracked capitals followed by a 40px ring with a chevron, which fills red on hover.
4. **One red per screen.** The red solid button is the main action and appears once on any screen; the red index line and the current nav underline are the only other red.
5. **Numbers as type.** Power, time, speed and weight set thin and huge in a row of hairline-separated columns, each with a tiny unit and a tracked label.
6. **Low-light photographs.** A car in a dark studio caught by one light, a dial, a wheel, stitching, light trails at night. Pictures are the only decoration; there are no illustrations, icons or patterns in the content.

## Components

- **Header:** a solid black (or white) bar, 64px, with a bottom hairline. The extended wordmark on the left, five tracked links, the theme toggle and a small outline "Test drive" on the right. The current link gets a 2px red underline. Links never wrap: whenever they do not fit (`fitNav()` adds `.compact`), they move into `#menu`, a full-screen `<dialog>` with huge extended links numbered in red and one red button.
- **Hero:** one photograph filling the first screen, a scrim at the bottom, and centred at the bottom: a small label, the display line (at most 16 characters per line) and two buttons, outline then red.
- **Page hero:** the same with the index line and the display line aligned left, 420 to 640px tall.
- **Card:** a 16:9 picture, a muted label, an extended H3 and one muted sentence. The picture brightens and scales to 1.03 on hover.
- **Specs:** `.specs` with four `.spec` items: number, unit, label. Two by two below 1024px.
- **Tiles:** two by two, edge to edge, each a whole link: picture, scrim, centred label, H2 and a circled arrow.
- **Model row:** a large picture and the name, one paragraph, three mini specs and two circled links; the next row swaps sides.
- **Model page:** the eyebrow and the `.mega` name centred, the stage (the car on black, full width), a bar with paint swatches and the paint's name, anchor links and the red button; then overview with specs, a specification table in four groups, details, and a closing band.
- **Swatches:** 40px circles in a `radiogroup`, the chosen one with a white ring; arrow keys move between them and the stage picture is swapped.
- **Filters:** square chips with a 1px border, the pressed one filled; a live count on the right; an empty message with a reset link.
- **Events:** a hairline list: the day in thin extended numerals with the month under it, the round and title, a status box (red outline when tickets are on sale) and a circled link.
- **Results table:** thin extended position numbers, our cars in red; scrolls sideways inside its wrapper on phones.
- **Timeline:** thin extended years on the left, an extended H3 and a paragraph on the right, hairlines between.
- **Forms:** square fields on the page colour inside a charcoal band, tracked labels above, errors floating under the field (space is reserved, so the submit never moves), one red submit, and a success panel that repeats the choices.
- **FAQ:** extended group names on the left, `details` rows with a plus that turns into a cross.
- **Footer:** the wordmark and one line, three short columns of links, a hairline and the legal line.

## Do and don't

- Do let a single photograph fill the screen and put the words low on it. Don't box the hero into a card.
- Do keep the red for one thing per screen. Don't colour headings, backgrounds, icons or badges red.
- Do set numbers big and thin. Don't hide the specification in a paragraph.
- Do keep corners square. Don't add pill buttons, rounded cards or shadows.
- Do keep photographs dark, lit by one light. Don't use bright daylight stock, people smiling at the camera or busy backgrounds.
- Don't use emoji, icon fonts, gradients on surfaces, auto-advancing carousels, parallax or video backgrounds.

## Voice

Short, certain and technical, like an engineer who loves the thing. Name the part and what it does (a carbon tub, a manual gearbox with an open gate), give the number, stop. Headlines are three to seven words. No superlatives, no exclamation marks, no "unleash", "ultimate", "luxury" or "experience the". Placeholders stay visibly placeholders: zeros in the numbers, "Placeholder:" in the text.
