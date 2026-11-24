# Style guide

The look in one sentence: a plain white page with one narrow centred column of small lowercase typewriter text under a typed, underlined wordmark and a live local clock; seasons shown as dense walls of unlabelled square pictures, black slab buttons, and one row of words where the page you are on is bold.

The site behaves like a shop counter with a printed price list taped to it. Nothing is decorated. The pictures and the clock carry the energy; the type stays small, typed and lowercase, and the visitor is trusted to look.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | white | near-black, 15% | the page, the header, the footer: one surface everywhere |
| `--ink` (`text`) | near-black, 16% | 93% | all type, rules, the wordmark's underline |
| `--muted` (`textMuted`) | 46% grey | 70% grey | counts, the footer, dates in rows, optional notes |
| `--line` (`border`) | 87% grey | 31% grey | hairlines between rows, field borders, cart lines |
| `--surface` (`surface`) | 96.5% grey | 20% grey | hovered rows, quantity buttons |
| `--tile` (`tile`) | white | paper white, 94% | behind every product picture. In dark the pictures stay on paper-white tiles, like prints laid on a dark table |
| `--slab` / `--slab-ink` (`slab`, `slabText`) | near-black / white | 93% / near-black | the slab buttons |
| `--off` / `--off-ink` (`slabOff`, `slabOffText`) | 82% / 98% grey | 34% / 72% grey | a sold-out slab |
| `--accent` (`accent`) | signal red, `oklch(55% 0.21 27)` | lighter red | thin marks only (see below) |
| `--error` (`error`) | brick red | light brick | field errors |

Every grey has zero chroma. The accent appears only as a thin mark: the 2px outline around the picked lookbook thumbnail and the current item's thumbnail, the word "new" in the category list, "open now" on the stores page, "(live now)" during a drop. It is never a filled block, never a background behind text, never the wordmark.

## Typography

- One family: **Courier Prime**, a typewriter monospace, at 400, 400 italic and 700. Everything is set in it: the wordmark, navigation, titles, body text, prices, the clock, fields and buttons. Never a second family.
- Body `--fs-body` 14px (15px on touch screens), line-height 1.5. Small `--fs-small` 12px for dates, counts, captions, descriptions and the footer.
- Titles are not bigger, they are bold: an `h1` is 14px at 700. Story and product names are the exception: 16px at 400 (`--fs-title`), like a typed heading on a spec sheet.
- Display `--fs-display` 24px, used twice: the wordmark and the 404 number. Nothing else on the site is bigger.
- Everything is lowercase, including names of things, buttons ("add to cart"), the navigation and the wordmark. Field errors are full sentences in sentence case.
- "Sold out" is italic. Bold means "you are here" or "this is the name"; it never means emphasis inside a sentence.
- Figures (prices, dates, the clock, sizes) use `font-variant-numeric: tabular-nums`. Dates are written day/month/year with slashes (`20/11/2026`), times on a 24-hour clock with the place code after them (`11:00 lis`).

## Layout and spacing

- **One centred column.** Grids, the navigation row and the footer sit in a 768px column (`--wide`); text pages and forms in a 600px column (`--col`); both centred with 16px gutters. Nothing runs edge to edge, nothing is full-bleed.
- **Header:** three cells. "cart (n)" at the left corner, the theme word ("dark" or "light") at the right corner, and in the centre the wordmark with the clock one line under it. 24px from the top. It never wraps.
- **The row:** 40px under the header, one line of words across the column: the shop at the left end, the season (preview, lookbook, news) at the right end. On phones the season label shortens to "preview". It is hidden on the home page, which has its own list.
- **Pairs:** most content views are a pair of columns centred together: a picture (300 to 360px) and a narrow typed column (252 to 320px), 28 to 64px apart. They stack on phones, picture first.
- **Walls and tiles:** the preview wall is six columns with 2px gaps (four on phones); the shop is five columns of about 120px with 14px gaps beside a 112px category list (three columns on phones, with the categories above as a wrapped line).
- Spacing steps: 2, 4, 8, 12, 16, 24, 28, 40, 48, 64px. Views start 48px under the row.
- Radius 0 everywhere. No shadows. The only borders are hairlines and field outlines.
- With a mouse, words stay small (28 to 32px targets); one `@media (pointer: coarse)` block raises every word link, button and field to 44px on touch screens without changing how they look.

## Surfaces and depth

- No cards, no panels, no tinted sections. The header, the row, every view and the footer share `--bg`.
- Product pictures sit on `--tile`; in light it is the page itself, so a product seems to float on white.
- The success state after a form is two rules in ink above and below a few lines of text, not a box.

## Signature elements

Keep all four on every site built with this style.

1. **The typed wordmark and the clock.** The name, lowercase, bold, 24px, with a 3px rule under it at the full width of the word, centred at the top; under it the current local date and time with a place code (`23/11/2026 09:52 lis`), updated by the script (`PLACE.zone`). The wordmark is text, never an image, never inside a box or on a coloured block.
2. **The row of words with the current page in bold.** No underline bar, no pill, no colour: the page you are on is simply bold, in the row, the category list, the footer and the filter words alike.
3. **The wall.** A season shown as a dense grid of unlabelled square close-ups, cropped into the product pictures (`CROP`), 2px apart. Names appear only while you point (in the line under the wall) or in the screen reader label.
4. **Slab buttons and "sold out".** Actions are flat black rectangles with small bold lowercase words ("add to cart", "keep shopping", "sign up"); sold out is the same slab in light grey and the word in italic under a tile. Nothing else looks like a button.

## Components

- **Home (`.home`):** one picture (300px) beside a short list of words with 12px between them, preceded by one line about the next drop and its live countdown. No headline (the `h1` is visually hidden), no hero text, no slideshow.
- **Story (`.story`):** picture left with a pager under it ("arrow 1 of 6 arrow"); right: the date, a 16px title, two or three short paragraphs in 12px, an optional bold availability line, and an underlined "archive" link.
- **Rows (`.rows`):** date, title, kind between hairlines; the whole row is the link; filter words with counts above.
- **Wall (`.wall`):** see signature 3. A 2px ink frame marks the hovered or focused square.
- **Lookbook (`.lb`):** a 340px picture, the season as thumbnails four across, the picked one ringed in accent, the pager under them (arrow keys work too); under the picture a caption: the season in bold, then the products shown, each a link.
- **Category list (`.cats`):** small right-aligned words, one per line, "new" in accent, the current one bold.
- **Tile (`.tile`):** the picture on `--tile`; under it one reserved line: "sold out" in italic, and while pointing the name and price laid over it. Hover adds a 1px ink outline.
- **Spec sheet (`.pd`):** picture left; right: name (16px), colour (bold, 12px), description (12px, a few short sentences), thumbnails of the other things in the category (42px, the current one ringed in accent), size select, price (16px), two slabs, "next jacket ›" at the right, then the typed status line.
- **Fields:** labels above in 12px lowercase, square inputs with a 1px line on the page colour, a 2px ink outline on focus, a red line when invalid. Errors sit in a reserved line under each field, so the submit button never moves.
- **Typed status (`.typed`):** confirmations ("added: crow tee, m. cart (1).") appear left to right in steps, like a line being typed.
- **Footer (`.foot`):** every page as plain muted words in one centred line (wrapping on phones), then one line with the name and place.

## Do and don't

- Do keep the page white and the type small. Don't add a hero headline, a banner, a big display face or a coloured section.
- Do let pictures carry colour. Don't tint the interface; the accent is a thin mark, not a fill.
- Do keep the wordmark as typed text with its rule. Don't put the name in a filled box, a badge or a coloured rectangle, and don't imitate any real brand's logo.
- Do show names only where a visitor reads (the spec sheet, the cart, the caption). Don't print names and prices under every square in the wall.
- Don't use rounded corners, shadows, gradients, icon fonts, emoji, carousels that move by themselves, sticky bars or popups.

## Voice

Terse, lowercase and factual, like a label sewn into a garment or a typed price list. Materials, colours, dates, times and places ("heavyweight cotton fleece with a star embroidered on the chest", "available thursday 26/11, 11:00 lis"). No adjectives about how good things are, no exclamation marks, no hype ("iconic", "must-have", "limited edition" unless it is literally numbered), no em dashes. Navigation and buttons are one or two words.
