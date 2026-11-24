# Style guide

The look in one sentence: a white page with a spaced, centred wordmark, then one photograph after another filling the screen, each with a small category line, a large uppercase name and a single white rectangle button at its foot, so the site reads like a stack of campaign plates; everything around the pictures is black and white.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | White (default) | Black | Use |
|---|---|---|---|
| `--bg` | pure white | pure black | the page and the header bar |
| `--surface` | pale grey | very dark grey | product tiles, the order summary, appointment cards |
| `--surface-2` | a step darker | a step lighter | spare quiet band |
| `--text` / `--text-muted` | black / mid grey | white / light grey | headings and body / metadata, descriptions, captions |
| `--border` | light grey | dark grey | every hairline: toolbars, rows, fields, accordions |
| `--accent` / `--accent-text` | black / white | white / black | the solid button (`.btn`), the pressed option, the bag count |
| `--error` | muted red | soft red | field errors only |
| `--tile-glow` | none | a faint white glow | lifts dark objects off the dark tile in the black theme |
| `--foot-*` | black footer | near-black footer | the footer is black in both themes |

There is no brand colour and no accent hue. Chrome is black, white and greys; colour comes only from the photographs (amber perfume, gold, ecru wool). The button on a photograph is white with black text in both themes (`.btn-plate`). If a brand insists on a colour, it may tint the photographs' art direction, never the chrome.

## Typography

- Two families. **Josefin Sans** (a geometric sans with tall, narrow capitals, variable 100 to 700) sets the wordmark, plate titles, H1, H2, the centred statements, timeline years and step numerals, always uppercase except statements. **Schibsted Grotesk** (a plain grotesque, 400 to 900) sets everything else: body, labels, buttons, navigation, product names and prices.
- Plate titles (`.display`) are Josefin 500, uppercase, letter-spacing 0.02em, line-height 1.02, 32 to 68px. H1 32 to 52px, H2 24 to 36px, same treatment.
- Labels (`.kicker`, the nav, chips, field labels, the footer headings) are Schibsted 600 at 11px, uppercase, letter-spacing 0.14em.
- Product names (`.tile-name`, `.h3`) are Schibsted 600 at 14px, uppercase, letter-spacing 0.06em; the material and the price follow in 13px regular, the material in grey.
- Body is Schibsted 400 at 15px, line-height 1.6. Articles run at 17px in a 680px column. Statements (`.statement`) are Josefin 400 at 24 to 36px, centred, sentence case.
- Buttons are Schibsted 600 at 12px, uppercase, letter-spacing 0.12em.
- The wordmark is live text: Josefin 600, uppercase, letter-spacing 0.42em, 26px (20px on phones), with matching left padding so the spaced letters stay optically centred.
- Light weights only for numerals: step numbers at 200, timeline years at 300.

## Spacing, layout and radius

- Page width 1440px with a fluid gutter (16 to 48px). Sections have 64 to 128px of vertical padding (`--sec`).
- Plates are full-bleed and as tall as the screen under the header (`calc(100svh - header)`); half plates share a row; band plates (`.plate.band`, 320 to 480px) head inner pages. Plates and tiles are separated by 2px seams of page colour, never by margins.
- Grids are dense: four product tiles across on desktop, three on tablets, two on phones, all with 2px gutters and 40px between rows.
- Text blocks are left-aligned; only plate copy, statements and the 404 are centred.
- Radius is 0 everywhere: buttons, fields, tiles, pictures, the menu panel, the bag count.

## Surfaces and depth

- Flat. No shadows on cards, no gradients in the chrome, no glass.
- The only overlay is the plate scrim: a black gradient rising from the bottom third of each photograph so the white copy always reads. Keep it even if a photograph looks dark enough.
- Hairlines mark structure: under the header once the page scrolls, around toolbars, between bag lines, accordions and timeline rows.
- The footer is a black block in both themes.

## Signature elements

These make the style recognizable. Home uses all of them; every other view keeps at least three.

1. **Stacked campaign plates.** Photograph after photograph, each filling the screen, each with the same caption at its foot, centred: a small tracked category line, a large uppercase name, and one white rectangle button. One pair of half plates breaks the rhythm. A plate can hold a muted, looping film instead of a still (see below).
2. **The centred, spaced wordmark.** A white bar with the wordmark in the middle, the menu and search at the left, the theme toggle and the bag at the right, and a row of category links in small capitals under it on wide screens.
3. **Black and white, sharp rectangles.** No colour in the interface and no rounded corners: black buttons on the page, white buttons on photographs, black pressed options, a square black bag count.
4. **Pale tiles with small-capital names.** Products are centred on a pale grey ground, with the name in uppercase small capitals, then the material in grey, then the price.
5. **The left menu panel.** A full-height panel from the left with the categories in large Josefin capitals, and the smaller service links at its foot.

## Components

- **Header:** sticky white bar (`.site-header`, `.bar`): `#menu-open` with "Menu", a search link, the wordmark, a "Book" text link, `#theme-toggle` and the bag with `#bag-count`. Under it, `.nav` holds up to seven category links. The row never wraps: when it does not fit, or under 900px, `fitNav()` adds `.compact` and the links live only in `#menu`. A hairline appears once the page scrolls.
- **Menu:** `<dialog class="menu">` sliding from the left, wordmark and close button at the top, `.menu-links` in large capitals, `.menu-more` with four small service links.
- **Plate:** `.plate` with `.plate-media` (an `<img>` or `<video>`), and `.plate-copy` with `.kicker`, `.display` (or `.h1` on bands) and `.btn-plate`. Use `--pos` to move the crop focus. `.half` inside `.plate-pair` for two side by side; `.band` for a shorter page head without a button.
- **Product tile:** `li.tile[data-id][data-cat][data-price]` with `.tile-media` (pale ground, the object contained with 8% padding, optional `.tag` like "New"), and `.tile-text` (name, material, price). The whole tile is a link to `#/product?id=`.
- **Rail:** `.rail` of tiles with scroll snapping and two square arrow buttons (`[data-rail]`) in the section head.
- **Toolbar:** a hairline-bottomed bar with text tabs (`.chips`, the chosen one underlined), a square search field and sort select (`.mini`), and a live count.
- **Product page:** `.pdp` with a large contained picture and square thumbnails on the left, and on the right: category, name, material and reference, price, description, square option buttons, a full-width black "Add to bag", a status line, an atelier link, and three accordions with a thin plus.
- **Bag:** lines with a small tile picture, name, option, a square quantity stepper and "Remove"; a grey summary panel with a black checkout button.
- **Steps and appointments:** four columns under a black rule with large thin numerals; three grey appointment cards with a duration, a title and an underlined text link.
- **Forms:** square 1px fields, labels in small capitals above, time slots as square radio buttons, errors floating under the field in small red text; one black submit; a success panel framed by a black line that repeats the details.
- **Journal card:** a 4:5 picture (the first card wide), a grey kicker with category and date, a title in small capitals or Josefin for the featured one, one line of description.
- **Footer:** black, three columns of small grey links, the letters signup with a white button, then the wordmark, the cities and the copyright under a hairline.

## Plates with film

The plate is also the slot for a campaign film. Replace the `<img class="plate-media">` with `<video class="plate-media" muted loop playsinline autoplay poster="images/…">` and add a small square pause button inside `.plate-copy` (a visible control is required for anything that moves for more than five seconds). With `prefers-reduced-motion`, do not autoplay; show the poster and a play button. In a single-file delivery keep stills unless the user supplies a short, compressed film, because the film is embedded into the page.

## Do and don't

- Do let the photographs do the work: one subject, filling the frame, the lower third dark enough for white text. Don't put two buttons, a paragraph or a price on a plate.
- Do keep every plate's caption identical in structure. Don't move captions around for variety.
- Do keep the chrome black and white. Don't add an accent colour, coloured badges, sale reds or gradients behind text.
- Do use sharp rectangles. Don't round buttons, fields, tiles or pictures.
- Do keep product copy factual: material, size, reference, price. Don't add star ratings, stock counters or urgency labels.
- Don't use emoji, icon fonts, monograms built from interlocking letters, carousels that advance on their own, parallax, or text in the photographs.

## Voice

Short, declarative and exact, like a label sewn into a coat. Name things (the long coat, eau de parfum, 18k recycled gold), say how they are made and how to care for them, and stop. Buttons are verbs with an object: "Discover the collection", "Book an appointment", "Add to bag". No superlatives, no exclamation marks, no hype ("iconic", "timeless", "luxury", "must-have", "curated").
