# Style guide

The look in one sentence: a white page broken by light gray bands, where rounded near-black banners each light up one product and carry a pale button, product cut-outs line up between thin vertical rules, and catalog rows lay out the offer, the specs, the stock and a full-width blue button in three clear columns.

## Tokens

All values live as CSS custom properties on `:root` (light) and `:root[data-theme="dark"]` (plus the `prefers-color-scheme` block) in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--page` / `--band` | white / light gray | near black / one step up | the page / the full-width bands that hold strips, tiles and banners |
| `--surface` | white | dark gray | form cards, plan cards, dialogs, the added panel |
| `--tile-a` → `--tile-b` | white to pale gray | lifted gray to dark gray | the vertical gradient behind every product picture |
| `--text` / `--muted` | ink / mid gray | near white / light gray | copy / notes, counts, SKUs |
| `--border` / `--rule` | light hairline / mid gray | dark hairline / mid gray | row and section dividers / the vertical rules between strip items, spec label rules, field borders |
| `--accent` / `--accent-ink` | deep blue / white | light blue / near black | every button, selected states, the stars, the free delivery meter |
| `--link` | deep blue | light blue | links, arrow links, "See product" |
| `--promo`, `--promo-2` | near black to blue-black | darker still | banners, slides, guide covers, the overview banner; with a `--glow` behind the product |
| `--pale` / `--pale-ink` | light gray / ink | the same | the only button on dark banners |
| `--offer` / `--offer-ink` | bright yellow / dark olive | the same, a touch deeper | offer strips, "Year-end price" and "Most chosen" flags; nothing else |
| `--sale` | raspberry | light raspberry | the current price |
| `--ok` / `--err` | green / red | lighter | the stock ring and success boxes / errors |
| `--foot`, `--tab` | charcoal | darker | the footer and the product section bar, dark in both themes |
| `--art-glow` | none | faint white rim and glow | keeps graphite products visible on dark tiles |

Colour has jobs. Blue is the only action colour; yellow only marks an offer; raspberry is only the price; green only stock and success. Everything else is ink on white or gray, or white on near-black inside a banner.

## Typography

- **Funnel Sans** (variable weight) for everything: a geometric grotesque that stays friendly at 400 in spec lists and turns compact and confident at 700 in banners.
- `.display` (40 to 68px, weight 700, letter-spacing -0.035em, line height 1.02) for banner headlines, the support title, article titles and the overview product name. One or two lines.
- Section titles (`.st`) are 26 to 36px at 600, sentence case, left aligned ("Our products", "Shop these must-haves").
- Product titles in rows and on the product page are regular weight (400) at 22 to 32px, long and descriptive like a spec sheet ("Glide 14 Laptop, 8-core, 16 GB, 512 GB SSD").
- Summaries under titles are bold body text. Spec labels, stock, breadcrumbs, "See product", compare labels and commerce buttons are uppercase; everything else is sentence case.
- Body is 16px with a 1.5 line height, small print 13 to 14px.

## Spacing, layout and radius

- One column up to 1376px with a 16 to 40px gutter. Bands are 40 to 76px tall at the top and bottom; a band can hold several sections, each with its own title.
- Radius: 4px on buttons and fields (small and square-ish), 12px on tiles and cards, 16px on feature media and guide covers, 20px on banners and slides. Only the hero pill control and the cart count are fully round.
- The hero spans the full page width with rounded corners. Other banners sit inside the column.
- Grids: six strip items, four tiles, three cards, three plans. Results are a 272px filter column beside rows of three columns (picture with compare, details, price and buttons). The product page is a wide gallery beside a narrower buy column.
- Below 1240px the header links fold into the drawer; below 900px the filters fold behind "Sort & filter"; below 640px strips become ruled lists, rows stack and center, and tiles go to one or two columns.

## Surfaces and depth

- Flat. No card shadows: gray bands, white tiles with a soft vertical gradient, and hairlines carry the structure.
- The dark banners are the only drama: a near-black gradient with one soft coloured glow behind the product and a drop shadow under the product art.
- Shadows only on things that float: the drawer, the compare sheet and the added panel.

## Signature elements

Keep the first four on every page that sells, and at least six on the home page.

1. **Rounded dark banners.** Near-black, 20px corners, a kicker line, a bold display headline, one sentence and a single pale button; one product lit from behind on the other half. The home hero rotates them with a frosted pill control (arrows and dots, the current dot a long dash).
2. **The category strip.** Product cut-outs above short labels, split by thin vertical rules, on a gray band. On phones it becomes a ruled list with the picture on the left.
3. **Tiles with small blue buttons.** A rounded tile with the product on a white-to-gray gradient, a 22px title, one line of copy and a small square blue "Shop" button.
4. **Catalog rows.** A yellow offer strip, a regular-weight descriptive title, blue stars, a bold summary, values separated by small black squares, a muted SKU; on the right a green stock ring with "IN STOCK", a yellow "Year-end price" flag, the struck previous price with "Save", the raspberry price, "SEE PRODUCT" and a full-width uppercase blue "ADD TO CART". "ADD TO COMPARE" sits under the picture.
5. **Spec rows.** Uppercase bold labels, a thin vertical rule, then the value; used on the product page and the full spec table.
6. **The section bar.** A charcoal strip of uppercase links (Overview, Specs, Reviews) under the product, with a white underline on the current one, followed by a big display product name and a dark overview banner with three large stats split by rules.
7. **The help band and the charcoal footer.** A full-width dark band with a big centered "How can we help?" and a row of line icons with labels; then the footer with a store line, link columns, a newsletter field and legal links split by pipes.

## Components

- **Header:** mark and wordmark, seven text links, an outlined blue "For business" button, then search, theme and cart icons; 64px tall with a hairline under it.
- **Arrow link:** blue text with a long thin arrow that moves 4px on hover ("Book a repair →").
- **Filter column:** uppercase accordion titles with a plus or minus on the right, checkboxes with counts, category links, and a small dark promo card at the bottom.
- **Toolbar:** "4 of 13 products", an outlined "Compare (n)" button, and a bordered sort box with "SORT BY" in a cell of its own.
- **Product page:** breadcrumb band, stage and thumbnail strip with arrows, a yellow offer bar, stars, title, bold summary, price block, colour swatches, two big buttons (an outlined monthly plan link and the blue add button), a student or teacher line, the stock ring, spec rows, "See all specs", and three service lines with icons.
- **Plans:** white cards on the page, the chosen one with a 2px blue border and a yellow "Most chosen" flag, a big price with "per person / month", ticks in blue, the term switch above them as a bordered segmented control.
- **Steps:** large thin blue numbers ("01") over a title and a line, split by vertical rules like the strip.
- **Forms:** bold labels above 48px fields with a 4px radius, errors in a reserved line under each field, an uppercase blue submit, a success box with a green left border.
- **Added panel:** drops in at the top right with a green check, the product and two small buttons; closes after six seconds.

## Do and don't

- Do keep the banners dark and the page light. Don't make whole sections dark except the help band, the section bar and the footer.
- Do give each banner one product and one button. Don't stack two buttons or two headlines in a banner.
- Do keep yellow for offers and raspberry for prices. Don't use them for decoration, headings or icons.
- Do write long, factual product titles and short headlines. Don't write slogans in product titles.
- Don't round the buttons into pills, add card shadows, use gradients on buttons, use emoji or icon fonts, or copy another company's logo, product names, wallpapers or typeface.

## Voice

Plain, confident and specific. Headlines name the product or the outcome and often carry a number ("Glide 14, now $649", "Most repairs back within a week"). Labels are short verbs ("Shop", "Add to cart", "Book a repair", "See all specs"). Specs are written as values, not adjectives ("Up to 14 hours", "1.39 kg"). Help copy answers one question per sentence. No exclamation marks, no "revolutionary", no fake urgency.
