# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Header, footer, home and 404 always ship.

| Site | Views | Home sections, in order |
|---|---|---|
| Small product brand: skincare, body care, candles, tea (the template) | home, shop, product, bag, journal, article, workshops, about, contact, faq, legal, 404 | panel hero, statement, story rail, figure, product shelf, quote cards, ink band, letters panel |
| Ceramics, homeware or a curated goods shop | home, shop (by material or room), product, bag, journal (as studio notes), about, contact, faq, legal, 404 | panel hero with one object, statement, story rail (rooms or materials), product shelf, figure (a making fact), ink band, letters |
| Bakery, patisserie or tea room | home, shop (as the menu, kinds become days or categories), product (as one cake or box), workshops (as classes or tastings), about, contact (with opening hours), faq, 404 | panel hero with the signature item, statement, product shelf, story rail (mornings, gifts, seasons), quote cards, letters |
| Stationery or a small paper goods maker | home, shop, product, bag, journal, about, contact, faq, legal, 404 | panel hero, product shelf, statement, story rail (ways to use it), figure, ink band, letters |
| Wellness studio, yoga or massage practice | home, workshops (as classes and sessions), about, journal, contact (as booking), faq, legal, 404 | panel hero with a calm still life, statement, story rail (practices), figure, quote cards, workshops list, letters |
| Boutique hotel, guesthouse or retreat | home, shop (as rooms, kinds become views or sizes), product (as one room with rates instead of sizes), workshops (as experiences), journal, about, contact, faq, legal, 404 | panel hero, statement, story rail (the place), figure, rooms shelf, quote cards, ink band, letters |
| Consumer device or app with a calm, lifestyle voice | home, shop (as models or plans), product, about, journal, faq, contact, legal, 404 | panel hero with the product render, statement, story rail (what it helps with), figure, product shelf, quote cards, ink band (press and articles) |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Notice line | `.notice` | One short sentence about delivery, dates or opening hours. Drop it when there is nothing timely to say. |
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `.header-end`, `#theme-toggle`, `.bag-btn`, `[data-bag-count]`, `#menu-open` | Up to five short links. `fitNav()` adds `.compact` when the links do not fit beside the wordmark and the buttons; they then live in `#menu` (`<dialog class="sheet">`, `.sheet-links`). `.scrolled` draws the hairline. Without a shop, drop `.bag-btn`. |
| Hero (home) | `.panel.hero`, `.tag`, `.display`, `.lead`, `.pills`, `.hero-media` | Tag (optional), one-line display H1, a lead of one or two lines, a solid and a ghost pill, then a wide picture with a transparent background (product render on silk) that crops from the bottom. |
| Statement | `.statement.center`, `.h2`, `.lead`, `.pills` | One H2 sentence, one lead line, two solid pills. |
| Story rail | `.rail-wrap`, `#rail`, `.rail`, `.story`, `.story-top`, `.chip`, `[aria-expanded][aria-controls]`, `.story-more`, `.rail-foot`, `[data-rail]` | Three to eight cards, about 2.9 visible on desktop and 1.2 on phones. Each: 4:5 photograph, chip with icon and one word, cream plus that opens a note with one link, caption of four to seven words. Without JavaScript the rail is a plain sideways scroll and the notes stay hidden. |
| Figure | `.figure.center`, `.display`, `sup.fn`, `#fn-1` | One true number or fact as a display line, with a footnote marker when it needs a qualifier. The note lives in `.foot-base`. |
| Product shelf | `.sec-head`, `.grid-4[data-tiles]` | The tiles are built from `PRODUCTS` by id: `data-tiles="night-balm bath-soak …"`. Four on desktop, two on phones. |
| Quote cards | `.grid-3`, `.quote`, `.tag`, `blockquote`, `.who`, `.initials` | Real customer words only, with the product or service as the tag. Without real quotes, drop the section. |
| Ink band | `.ink`, `.kicker`, `.ink-grid`, `.feature`, `.paper-list`, `.paper` | One picture card with a caption and a cream pill, three paper cards with a round arrow. Use it for the journal, press or upcoming dates. |
| Letters panel | `.panel.letters`, `[data-form="newsletter"]`, `.inline-form`, `[data-success="newsletter"]` | H2, lead, pill email field and pill submit; the success line repeats the address. |
| Page head | `.page-head`, `.h1`, `.lead` | Centred H1 and lead on every inner view. |
| Shop | `.toolbar`, `.chips[data-filter="kind"]`, `.fchip[data-value]`, `#f-free`, `.count[data-count="shop"]`, `#sort`, `#shop-grid`, `.fallback`, `.empty[data-empty="shop"]`, `[data-reset="shop"]` | `?kind=` preselects. The grid is rebuilt from `PRODUCTS`; `.fallback` is the list people see without JavaScript. Rename the kinds and the toggle chip (fragrance-free, vegan, in stock) to what divides the user's products. |
| Product | `[data-gallery]`, `#p-main`, `#p-thumbs`, `.crumbs`, `#p-name`, `#p-note`, `#p-price`, `#p-sizes`, `.stepper`, `#p-qty`, `#p-add`, `#p-added`, `.acc details`, `#p-pairs` | `?id=` picks the product from `PRODUCTS`. The static markup is the first product, so the page reads without JavaScript. Sizes are radio pills; the price follows size and quantity. |
| Bag | `#bag-lines`, `.line`, `#bag-empty`, `.summary`, `#bag-meter`, `#bag-sub`, `#bag-ship`, `#bag-total`, `#checkout`, `#checkout-note` | Lines come from the store; `FREE_FROM` sets the free-delivery threshold. The checkout pill is where a real checkout connects. |
| Journal and article | `.chips[data-filter="kind-j"]`, `.post-card[data-kind-j]`, `.count[data-count="journal"]`, `.article-head`, `.wide`, `.prose`, `.pull`, `.inline-prod` | `?kind=` preselects. Article: centred tag, H1 and meta, a wide rounded picture, a 680px column with H2s, numbered steps, a serif italic pull quote and one product card. |
| Workshops | `.chips[data-filter="month"]`, `.event[data-month]`, `.date`, `.facts`, `.seats`, `#book`, `[data-form="booking"]` | Date block, title and line, time and place, places left, a booking pill linking to `#/workshops?w=<value>&at=book`, which preselects the select and scrolls to the form. |
| About | `.page-head`, `.pair`, `.values`, `.value`, `.steps` | Story, two 4:5 pictures, three values with filled round icons, four numbered steps, two pills. |
| Contact | `.split`, `.info`, `[data-form="contact"]` | Address and hours, email, phone, a pointer to FAQ; form with name, email, topic (`?topic=` preselects), optional order number with a pattern, and message with a minimum length. |
| FAQ | `.faq-group.acc`, `details`, `summary` | Two to five groups; the plus turns into a cross when open. |
| Legal | `#privacy`, `#terms` | One view, two sections; `#/legal?at=terms` scrolls to terms. |
| Footer | `.site-footer`, `.foot-grid`, `.foot-base`, `#fn-1` | Wordmark and address, three link lists, the footnote and the copyright line. |
| 404 | `data-view="404"`, `.lost` | One display H1, one sentence, two pills. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/product?id=bath-soak`, `#/shop?kind=home`, `#/workshops?w=soak&at=book`, `#/contact?topic=order`).
- `at=<id>` scrolls to that section after the view opens; plain `#id` links scroll inside the current view.
- The `titles` map sets the document title per view (the product page uses the product name), and the `section` map keeps the right header link underlined on child views (`product` and `bag` under `shop`, `article` under `journal`). Update both when you add or rename views.
- The bag lives in the template's `store` wrapper (localStorage, or memory inside a sandboxed frame). In a framework project, replace it with the project's cart state and real routes (one per product and per article).
