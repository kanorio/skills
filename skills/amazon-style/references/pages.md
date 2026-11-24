# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. Query parameters after `?` carry state: `#/shop?cat=kitchen&q=kettle&deal=1&sort=price-asc`, `#/product?id=towels`, `#/help?section=returns`, `#/legal?section=privacy`. In a framework project each view becomes a real route and the parameters become real query strings.

## Recipes by kind of site

Pick the closest recipe, keep the order, drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| General or multi-department store (the template) | home, deals, shop, product, cart, signin, register, orders, help, about, legal, 404 | promotion band, four quad boxes, today's deals rail, best sellers rail, promo band, a full-card rail, sign-in block |
| Grocery or pantry shop | home, deals (weekly offers), shop (aisles), product, cart, signin, register, orders, help, legal, 404 | band with this week's offer, quads per aisle and a "deal of the day", a deals rail, "Buy again" rail of staples, a band for delivery slots, a full-card rail per aisle |
| Electronics, hardware or parts store | home, deals, shop, product, cart, signin, orders, help, legal, 404 | band with the launch or sale, quads by category and by brand, best sellers rail, a band for a bundle, a full-card rail of accessories; the product information table carries the real specs |
| Book, game or media shop | home, deals, shop (genres), product, cart, signin, help, about, legal, 404 | band with a featured release, quads by genre, a ranked best sellers rail, a band for a series, new releases rail |
| Single-brand store with many products | home, shop, product, cart, signin, help, about, legal, 404 | band, quads by collection, a full-card rail, a band, best sellers |
| Marketplace or second-hand shop | home, shop, product, cart, signin, register, orders, help, about, legal, 404 | band, quads by category, "Just listed" rail, best sellers rail; "Sold by" in the buy box names each seller |

Header, footer, home, legal and 404 always ship. Cart and product ship whenever anything can be bought.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Top bar | `.bar`, `.bar-inner`, `.brand`, `.brand-mark`, `.brand-name`, `.where` (`data-where-open`, `[data-where]`), `.search[data-search]`, `#q-cat`, `#q`, `.acct`, `.orders`, `#theme-toggle`, `.cart[data-cart]`, `[data-cart-count]`, `.menu-btn` | Never wraps between 640 and 1440px: "Deliver to" and orders hide below 900px (a `.where-strip` appears under the department bar), and below 640px the search drops to its own row and the department select hides. |
| Department bar | `.cats`, `.cats-inner`, `.cats-all[data-menu-open]`, `.cats-promo` | "All", today's deals, five to eight departments, help, one bold promotion on the right (hidden below 1280px). Scrolls sideways, never wraps. |
| Drawer | `#drawer.drawer`, `[data-cat-links]`, `[data-menu-close]` | `<dialog>`. Department links are generated from `CATS`. |
| Location dialog | `#where.modal`, `[data-form="location"]`, `#zip` | One postal code field; on success every `[data-where]` shows the code and it is stored. |
| Promotion band | `.hero`, `.slide` (`.s2`, `.s3` change `--b`), `.slide-inner`, `.slide-copy`, `.kicker`, `.display`, `.slide-sub`, `.slide-art`, `.hero-arrow[data-hero]` | Two or three slides; each slide is one link. Short offer headline with a number, one sentence, a dark pill, two or three product drawings or cut-out photos. Only the current slide shows with JavaScript. |
| Quad boxes | `.quads`, `.quad`, `.quad-title`, `.quad-grid`, `.tile`, `.quad-more`, `.quad-note`, `[data-countdown]` | Exactly four on desktop (two on tablets and phones). Mix: a 2 by 2 of products, a single deal with tag and countdown, a 2 by 2 of departments, a sign-in or delivery box. |
| Shelf and rail | `.shelf`, `.shelf-head`, `.h2`, `.rail` with `data-rail="<list>"`, `data-card="deal|rank"` and an `id` for arrows | The list names a function in `RAILS`. Rails with an `id` get arrow buttons from the script. Five to ten cards. |
| Product card | `card(p, kind)` renders `.pc`, `.pc-media`, `.badge` or `.rank`, `.pc-title`, `.rate`, `.stars`, `.deal-row`, `.tag`, `.deal-label`, `.price-row`, `.price`, `.list`, `.ship`, `[data-add]` | `full` for results and most rails, `deal` for deals, `rank` for best sellers. Edit the card once in `card()`. |
| Promo band | `.band` (`--b` picks the band colour), `.band-copy`, `.band-art` | One per page at most, between rails. |
| Sign-in block | `.signin-block` | Last block of the home page. |
| Deals | `[data-deal-chips]`, `#deal-min`, `[data-deal-grid]`, `[data-deal-empty]`, `.countdown` | Chips are generated for departments that have deals. |
| Results | `.result-bar`, `[data-result-count]`, `[data-toggle-filters]`, `#sort`, `.shop[data-shop]`, `.filters`, `[data-cat-filter]`, `[data-rating]`, `[data-price]`, `input[name=deal|tomorrow|free]`, `[data-grid]`, `[data-empty]`, `[data-clear]` | Reads `cat`, `q`, `deal` and `sort` from the route. Filters list only values that exist. |
| Product page | `.crumbs`, `.pdp`, `.gallery`, `[data-thumbs]`, `[data-stage]`, `.pdp-info`, `[data-p-…]`, `[data-opts]`, `.buybox[data-form="add-to-cart"]`, `[data-buy-now]`, `[data-list]`, `.specs`, `#reviews`, `[data-hist]`, `.review`, `[data-helpful]` | Every `[data-p-*]` field is filled from the catalog row by `renderProduct()`. The static markup is the first product, for pages without JavaScript. |
| Added panel | `[data-added]`, `[data-added-art]`, `[data-added-name]`, `[data-added-sub]` | Shows after any add; closes after 6 s. |
| Cart | `.cart-layout`, `[data-lines]`, `.line`, `.qty`, `[data-step]`, `[data-del]`, `[data-save]`, `[data-saved]`, `[data-move]`, `[data-free]`, `.meter`, `[data-subtotal]`, `[data-checkout]`, `[data-cart-empty]`, `data-rail="also"` | The empty state is static content; the summary hides while the cart is empty. |
| Sign in, create account | `.auth`, `.auth-card`, `[data-form="login"]`, `[data-form="signup"]`, `.divider` | Narrow centered card with the logo above it. |
| Orders | `.order`, `.order-head`, `.order-body`, `.status.go`, `.order-item`, `[data-track]`, `[data-track-panel]` | One card per order; "Buy it again" uses `data-add`. |
| Help | `.help-tiles`, `.help-tile`, `[data-faq-search]`, `[data-faq]`, `.faq-group` with an `id` per topic, `#contact`, `[data-form="contact"]` | Six tiles, a searchable FAQ in native `<details>`, the contact form beside it. |
| About, legal, 404 | `.band.s2`, `.facts`, `.prose`, `#conditions`, `#privacy`, `.lost` | Short. Legal text is sample text to replace. |
| Footer | `.foot`, `.to-top`, `.foot-cols`, `.foot-mid`, `.foot-pill`, `.foot-bottom` | Four link columns, the logo with language and currency boxes, the legal strip. |

## Data and state

- `CATS` lists the departments; the search select, the drawer, the filter column and the deal chips are generated from it, so add a department there and in the department bar.
- `products` holds one row per product: `id`, `name`, `maker`, `cat`, `type`, `price`, optional `list` (the struck price), `deal` (in today's deals), `rating`, `reviews`, `bought`, `days` (1 means tomorrow), optional `badge`, optional `opts` ("Label:#color" pairs that recolor the art) and `about` (bullets). Cards, rails, results, deals, the product page and the cart all read from it. A real store loads these rows from its backend.
- Product art is a `<symbol id="art-<id>">` in the sprite. For photos, put one `<img data-photo="<id>">` per product in `#photos`; `art()` uses it everywhere and `scripts/inline.mjs` embeds it.
- The cart is `[{ id, opt, qty }]` under `pennyrow-cart`, saved items under `pennyrow-saved`, the postal code under `pennyrow-zip`, all through the `store` wrapper so it still works where storage is blocked.
- `FREE_OVER` (35) and `DELIVERY` (5.99) are the sample delivery rules; delivery dates are computed from today plus `days`; the countdown ends at local midnight. Replace all of them with the store's real rules.
- Forms validate and show a success state but send nothing. See `references/kanorio.md` before wiring a real endpoint.
