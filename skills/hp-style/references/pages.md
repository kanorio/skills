# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. Query parameters after `?` carry state: `#/shop?cat=laptops&q=dock&deal=1&sort=price-asc`, `#/product?id=forge16`, `#/guide?id=ink-schedule`, `#/support?section=book`, `#/business?section=quote`. A `section` parameter scrolls to that ID inside the view. In a framework project each view becomes a real route and the parameters become real query strings.

## Recipes by kind of site

Pick the closest recipe, keep the order, drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Computer and printer store (the template) | home, shop, product, cart, business, support, guides, guide, legal, 404 | hero slides, category strip, must-have tiles, business banner, repair and refill features, guide cards, help band |
| Electronics or accessories shop | home, shop, product, cart, support, guides, guide, legal, 404 | hero slides, category strip, must-have tiles, a banner for the main offer, guide cards, help band |
| Repair or IT service | home, support (booking first), shop as a price list without the cart, guides, guide, legal, 404 | a hero with booking, a strip of service types, tiles for the popular repairs, a banner for business support, guide cards, help band |
| Device leasing or office equipment | home, business (plans and quote), shop, product (monthly price first), support, legal, 404 | hero with the plan offer, strip of device types, tiles for bundles, steps, a banner for the quote, help band |
| Single-product maker | home, product, cart, support, guides, legal, 404 | one hero slide, the overview banner with stats, tiles for accessories, guide cards, help band |

Header, footer, home, legal and 404 always ship. Results, product and cart ship whenever anything can be bought.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.hd`, `.hd-in`, `.brand`, `.nav`, `.nav .biz`, `.tools`, `.ib`, `[data-search-open]`, `#theme-toggle`, `[data-cart]`, `[data-cart-n]`, `.menu-btn` | Never wraps: the links fold into the drawer below 1240px. The outlined "For business" button is the last link. |
| Search panel | `#searchbar`, `[data-form="search"]`, `#q` | Opens under the header; Enter sends the words to the results. |
| Drawer | `#drawer.drawer`, `[data-menu-close]` | `<dialog>` with every link, including the ones the header hides. |
| Hero | `.hero`, `.slide` (`.s1`…`.s3` set `--glow`), `.slide-copy`, `.kicker`, `.display`, `.lead`, `.btn-pale`, `.slide-art`, `.pill-ctl`, `[data-hero-step]`, `[data-hero-go]` | One to four slides; the first headline is the page's `<h1>`, the rest are `<h2>`. One product per slide, one pale button. |
| Band | `.band` with `.sec` sections inside | Several sections can share one band; use `.pt0` on the second and later sections. |
| Category strip | `.cats.ruled.c6` (`.c4`, `.c5` for other counts) | Product cut-out over a label, vertical rules between; three per row on tablets, a ruled list on phones. |
| Tiles | `.tiles`, `.tile`, `.tile-media`, `.btn.btn-sm` | Four per row; one title, one line, one small button. |
| Promo banner | `.promo.on-dark`, `.copy`, `.kicker`, `.btn-pale` | One per band at most. The business view and other pages open with one holding their `<h1>`. |
| Features | `.split`, `.feature`, `.feature-media`, `.links`, `.link-arrow` | Two columns, each with one or two arrow links. |
| Guide cards | `.cards[data-guides="3"]`, `.card`, `.card-media` (`.g1`…`.g4` set the glow), `.date` | Filled from `POSTS`; `data-guides` is how many to show. `.lead-card` makes the first card run full width. |
| Help band | `.helpband.on-dark`, `.help-row` | Big centered question and four to six icon links. |
| Footer | `.ft`, `.ft-top`, `.ft-cols`, `.ft-news[data-box]`, `.ft-legal` | Store line, three link columns, the newsletter form, legal links split by pipes. |
| Breadcrumb | `.crumbs` | Gray band, uppercase, the last item bold. |
| Results | `.page-head`, `.shop[data-shop]`, `.filters`, `.fg` (`<details>`), `.pm`, `[data-cat-links]`, `[data-f="use|price|mem"]`, `input[name=deal]`, `.side-promo`, `.toolbar`, `[data-filters]`, `[data-count]`, `[data-compare-open]`, `.sort #sort`, `[data-cmp-msg]`, `[data-rows]`, `[data-empty]`, `[data-clear]` | Reads `cat`, `q`, `deal` and `sort` from the route. Filter groups are generated with counts and hide when empty. |
| Result row | `row(p)` renders `.row`, `.row-media`, `.cmp`, `.offer`, `.row-title`, `.rating`, `.stars`, `.row-sum`, `.specline`, `.sku`, `.row-buy`, `.stock`, `.flag`, `.was`, `.now`, `.see`, `[data-add]` | Edit the row once in `row()`. The first five specs make the spec line. |
| Compare | `#compare.sheet`, `[data-compare-table]`, `[data-compare]`, `[data-compare-close]` | Up to three products; rows are the union of their spec labels. |
| Product page | `.pdp`, `[data-stage]`, `[data-thumbs]`, `[data-angle-step]`, `[data-p-…]`, `.offer-bar`, `.p-title`, `.p-sum`, `.p-price`, `.swatches[data-p-opts]`, `.buy-row`, `[data-buy]`, `[data-p-monthly]`, `.spec-rows`, `.perks`, `.tabbar`, `#p-overview`, `.ov-head`, `.ov-media`, `.stats`, `#p-specs`, `.spec-table`, `#p-reviews`, `.reviews`, `.rev`, `[data-helpful]`, `#p-more`, `.minis[data-minis="also"]` | Every `[data-p-*]` field is filled from the catalog row by `renderProduct()`. The static markup is the first product, for pages without JavaScript. |
| Added panel | `[data-added]`, `[data-added-art]`, `[data-added-name]` | Shows after any add outside the cart; closes after 6 s. |
| Cart | `.cart-grid[data-cart-full]`, `[data-lines]`, `.line`, `.qty`, `[data-step]`, `.summary`, `[data-free-note]`, `.meter [data-meter]`, `[data-sub]`, `[data-ship]`, `[data-total]`, `[data-checkout]`, `[data-checkout-note]`, `[data-cart-empty]`, `.minis[data-minis="essentials"]` | The minus turns into a bin at one. The empty state is static content. |
| Business | `.promo` with the `<h1>`, `#plans`, `.terms` (radios `name="term"`), `.plans`, `.plan.pick`, `[data-plan]`, `[data-term-label]`, `[data-pick]`, `.steps.ruled.c4`, `#quote`, `[data-form="quote"]` | `data-plan` holds the 24-month price; the term switch multiplies it. "Get a quote" preselects the plan in the form. |
| Support | `.display` `<h1>`, `[data-faq-search]`, `.htiles.ruled.c5`, `#book`, `[data-form="repair"]`, `#faq`, `[data-faq]`, `[data-faq-empty]`, `#contact`, `.hours`, `[data-form="contact"]` | The help search filters the FAQ as you type and opens the matches. |
| Guides, guide | `.cards.lead-card[data-guides]`, `[data-g-title]`, `[data-g-meta]`, `[data-g-cover]`, `[data-g-body]`, `[data-g-related]` | The article is filled from `POSTS` by `renderPost()`. |
| Legal, 404 | `.legal`, `#terms`, `#privacy`, `#returns`, `.lost` | Legal text is sample text to replace. |

## Data and state

- `CATS` lists the categories (the filter column is generated from it, so add a category there and in the strip and header). `USES` and `PRICES` are the usage and price filter values.
- `products` holds one row per product: `id`, `cat`, `name` (short), `title` (the long descriptive title), `use`, `price`, optional `list` (the previous price; it shows the "Year-end price" flag and "Save"), optional `mem` (the memory filter), `rating`, `reviews`, `art` (a drawing in the sprite), optional `c` (chassis colour) and `w` (screen wallpaper from `WALLS`), optional `flag` (the yellow offer line), `sum` (the bold summary), `specs` (label and value pairs), optional `feats` (three big stats for the overview banner; the first three specs stand in when missing) and optional `opts` (colour name and chassis colour). A real store loads these rows from its backend.
- `POSTS` holds the guides: `id`, `cat`, `date`, `mins`, `art`, `g` (the cover glow), `title`, `ex` (excerpt) and `body` (paragraphs).
- The cart is `[{ id, opt, qty }]` under `<KEY>-cart`, the theme under `<KEY>-theme`, both through the `store` wrapper so it still works where storage is blocked.
- `FREE_OVER` (50) and `DELIVERY` (9.99) are the sample delivery rules; `monthly()` is a sample plan price (price plus 8 percent over 24 months). Replace all of them with the real rules.
- Forms validate and show a success state but send nothing. See `references/kanorio.md` before wiring a real endpoint.
