# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Food or drink brand with a shop (the template) | home, shop, product, cart, kitchen, post, story, faq, contact, privacy, terms, 404 | poster, ticker, bento (manifesto, products, type tile, recipe, story, quote, letter), how it works steps |
| Shop for any physical product | home, shop, product, cart, story, faq, contact, privacy, terms, 404 | poster with the newest product, ticker of shipping promises, bento of products with one manifesto and one type tile, steps (how it is made), letter |
| Magazine, blog or newsletter | home, kitchen (as the journal), post, story, contact, privacy, 404 | poster with the lead story, ticker of topics, bento of articles by category, letter tile, steps (what readers get) |
| Restaurant, cafe or bakery | home, shop (as the menu), story, faq, contact, privacy, 404 | poster, ticker of opening hours, bento of dishes and news, steps (how to order), contact cells with the address |
| Campaign, festival or cause | home, kitchen (as news), post, story, faq, contact, privacy, 404 | poster with the date, ticker, bento of program items and type tiles, stats cells, big links |

Category tags map one category to one color across the whole site. In the template: products green, recipes yellow, stories pink, planet blue, news orange, other gray.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Window bar | `.site-header`, `.bar`, `.cell`, `.brand-cell`, `.bar-path` with `[data-path]`, `#theme-toggle`, `[data-count]`, `#menu-open` | Square cells divided by lines. The path cell shows the brand and the current view's path, set from the `paths` map in the script. |
| Link row | `.nav`, `.nav-label`, `.ring` | Five links at most, evenly spaced. The current one gets the hand-drawn ring (`aria-current="page"`). Hidden under 860px. |
| Menu sheet | `<dialog class="sheet" id="menu">`, `.sheet-links` | Full-window, giant display links in ruled rows, each with its category tag. Closes on a link, the close cell and Escape. |
| Poster | `.poster`, `.panel-*`, `.poster-copy`, `.display`, `.mark`, `.under`, `.poster-art`, `.sticker`, `.scrawl`, `.poster-cap` | Full-width panel, display headline with one underlined word, one lead, a drawing, a sticker, one handwritten note, and a caption strip linking to the newest thing with its tag. |
| Ticker | `.ticker`, `.ticker-track` | Five short promises, duplicated once with `aria-hidden` for the loop. |
| Bento zone | `.zone.grid-paper`, `.bento`, `.c3`/`.c4`/`.c6`/`.c8`/`.c12`, `.r1`/`.r2`/`.r3`, `.t-r2`, `.m-wide` | Tiles on grid paper. Spans add up to 12 per row; `grid-auto-flow: dense` fills holes. On tablets the grid has 6 columns (`.c3` and `.c4` take half), so check for holes there: `.t-r2` shortens a tall tile to two rows on tablets, `.m-wide` makes a small tile full width on phones. |
| Related row | `.trio` with plain `.tile` children (no span classes) | Exactly three tiles in a row, one column on phones. Used for "Goes well with" and "More from the kitchen". |
| Drawing tile | `.tile`, `.tile-media.panel-*`, `.tile-cap`, `.tile-title`, `.tile-link`, `.tag` | One drawing on one panel, a caption title that is the tile's only link (stretched over the tile), one tag. |
| Type tile | `.tile-type` inside `.tile` | One phrase of up to five words on the ink panel; sized by container width. |
| Quote tile | `.tile-type.quote.panel-cream` in a `<figure class="tile">` | One short quote the user is allowed to publish; the caption names the person. |
| Manifesto | `.manifesto.taped` | Two to four uppercase sentences and one button. One per page. |
| Letter tile | `.tile` with `.letter.panel-*`, `[data-form="newsletter"]`, `[data-success="newsletter"]` | Display title, one sentence, an email field and a button, a small drawing. |
| Hatch spacer | `.hatch` | Decorative, `aria-hidden`. Hidden on phones. |
| Show more | `[data-more]` on tiles, `[data-more-button]` | Tiles past the first screens stay hidden until the button is pressed; without JavaScript all tiles show and the button stays hidden. |
| Steps | `.steps`, `.step`, `.step-num` | Three ruled cells: a big number, a short bold title, one sentence. |
| Page head | `.page-head`, `.h1`, `.lead`, `.index-card` | Every view except home and post. The index card holds one tag and one sentence of news. |
| Toolbar and filters | `.toolbar`, `.chips[data-filter-for="<list id>"]`, `.chip[data-filter]`, `.swatch`, `[data-cat]`, `[data-empty]` | Chips with `aria-pressed`; items carry `data-cat`; `?cat=` in the link preselects a chip. |
| Shop grid | `.shop-grid`, `.product-tile`, `.price`, `.tile-foot`, `.add[data-add]` | Four columns, three on tablets, two on phones. The add button sits above the tile link. |
| Product | `.product`, `.product-art`, `.product-info`, `form.buy[data-buy]`, `.packs`, `.pack`, `.stepper`, `[data-price-now]` | Art panel with a sticker and a note, then tag and batch, H1, lead, price, pack options, quantity, one ink button, a delivery note. |
| Detail rows | `.rows`, `details`, `summary`, `.answer` | Full-width ruled rows; the plus rotates into a cross. |
| Basket | `.basket`, `[data-lines]`, `.line`, `[data-basket-empty]`, `.upsell`, `.summary`, `.sums`, `[data-form="checkout"]` | Line items rendered from the basket state, an upsell row of three product tiles, totals with the free-delivery note, the delivery form. |
| Article | `.post-head`, `.meta`, `.byline`, `.post-art`, `.recipe`, `.ingredients`, `.checks`, `.method`, `.method-steps`, `.num`, `.callout`, `.pull` | Tag and meta, H1, lead, byline; a drawing panel with notes; ingredients with checkboxes beside numbered steps; a tip callout; one pull quote. For a plain article, drop `.recipe` and use `.method` alone. |
| Story | `.split`, `.stats`, `.timeline`, `.big-links` | Text beside a drawing, four stat cells, a four-step timeline under a wavy line, team tiles, two giant links. |
| Contact | `.contact`, `.contact-side`, `.info-cells`, `.contact-art`, `.form-tile`, `[data-form="contact"]` | Four ruled info cells and a drawing on the left, the form on the right. `?topic=` preselects the topic. |
| Legal | `[data-view="privacy"]`, `[data-view="terms"]`, `.prose` | Page head, then short sections in a 68-character column. |
| 404 | `[data-view="404"]`, `.notfound`, `.nf-art`, `.nf-copy`, `.big` | A drawing panel, a giant 404, one H1, one sentence, two big links. |
| Footer | `.site-footer`, `.foot-word`, `.foot-grid`, `.up`, `.foot-bottom` | Giant wordmark, link cells with back to top, one line of small print. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/shop?cat=pickles`, `#/contact?topic=wholesale`).
- `#top` scrolls to the top; other `#id` links scroll to that element.
- The `titles` and `paths` maps in the script set the document title and the window bar path per view; update both when you add or rename views.
- The basket lives in the `basket` array and the `products` catalogue in the script, saved through the sandbox-safe `store`. In a real shop, replace both with the commerce backend.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
