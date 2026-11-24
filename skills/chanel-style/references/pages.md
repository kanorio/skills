# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home, in order |
|---|---|---|
| Designer label with an atelier (the template) | home, collection, product, bag, atelier, journal, story, house, contact, faq, legal, 404 | plate (lead collection), plate (second line), half-plate pair, plate (the service), rail of new pieces, plate (a story) |
| Fragrance or candle house | home, collection (categories as families or sizes), product, bag, atelier (as consultations or refills), journal, story, house, contact, faq, legal, 404 | plate per scent or family, a pair (two sizes, or perfume and candle), plate (the consultation), rail, plate (how it was made) |
| Jewellery or watch studio | home, collection, product (ring sizes, lengths, metals as options), atelier (as commissions), journal, house, contact, faq, legal, 404 | plate (a collection), pair (two pieces close up), plate (commissions), rail, plate (the bench) |
| Select shop or concept store | home, collection (categories as departments or designers), product, bag, journal, story, contact (with the shop address), faq, legal, 404 | plate per department or designer, pair, rail of arrivals, plate (an edit or story) |
| Couture, bridal or made-to-measure service without a shop | home, atelier (the main page), journal (as a lookbook of past commissions), story, house, contact, faq, legal, 404; drop collection, product and bag | plate (the service), pair (two commissions), plate (the fitting room), statement, plate (a story) |
| Photographer, florist or artist with a gallery voice | home, collection (as works or editions), product (as one work), journal, house, contact, legal, 404 | a plate per series, pair, rail of works, plate (a story) |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.bar`, `.bar-l`, `.bar-r`, `.brand`, `#menu-open`, `#theme-toggle`, `#bag-count`, `.nav` | Menu and search on the left, the wordmark centred, a text link, the toggle and the bag on the right. `.nav` holds up to seven links; `fitNav()` adds `.compact` when they do not fit or under 900px, and they then live in `#menu`. `.hide-s` items drop under 560px. |
| Menu | `dialog#menu.menu`, `.menu-top`, `.menu-links`, `.menu-more` | Large capitals for categories and main pages, four small service links at the foot. Closes on a link, the close button, Escape or the backdrop. |
| Plate | `.plate`, `.plate-media`, `.plate-copy`, `.kicker`, `.display`, `.btn-plate`, `--pos` | One photograph (or a muted film with a pause button), the caption centred at the foot: category line, name (2 to 5 words), one button. The first plate's title is the view's H1. |
| Half plates | `.plate-pair` > `.plate.half` | Two plates side by side on wide screens, stacked on phones. Use portrait pictures. |
| Band | `.plate.band` | A shorter plate that heads inner views with a kicker and an H1, no button. The collection band changes picture and title with the category (`CATS` in the script). |
| Rail | `section` > `.head` with `.rail-btns` `[data-rail]`, `ul.rail` | Tiles cloned from the collection by the script (`tileClone`); home shows tiles with `data-new`, the product page shows related tiles. Hidden without JavaScript (`.needs-js`). |
| Collection | `#grid`, `li.tile[data-id][data-cat][data-price][data-new]`, `.toolbar`, `.chips[data-filter="cat"]`, `#q`, `#sort`, `.count[data-count]`, `.empty[data-empty]`, `[data-reset]` | The tiles in `#grid` are the product list for the whole site. `?cat=` preselects a category, `?q=` fills the search, `?focus=search` focuses it. Sorting reorders with CSS `order`. |
| Product | `.pdp`, `[data-gallery]`, `#p-img`, `#p-thumbs .thumb[data-alt][data-cover]`, `#p-cat`, `#p-name`, `#p-ref`, `#p-price`, `#p-desc`, `#p-opts`, `#add`, `#add-note`, `#p-book`, `.acc details`, `#also-rail` | `#/product?id=<data-id>`. Name, material, price and picture come from the tile; reference, description, options, details and care come from `DETAILS[id]`. The static HTML is the first product, so the page reads without JavaScript. |
| Bag | `#bag-lines`, `.line`, `.qty`, `.summary`, `#checkout`, `#bag-empty` | Lines kept in the `store` wrapper under one key. Checkout shows a note until a real payment provider is connected. |
| Atelier | `.plate.band`, `.statement`, `ol.steps`, `.services`, `.service`, `#book`, `[data-form="appointment"]` | `?service=` preselects the appointment type; `?at=book` scrolls to the form. |
| Appointment form | `.form`, `.field`, `.err`, `.slots`, `.slot`, `.check`, `[data-success="appointment"]`, `[data-echo]`, `[data-again]` | Type, boutique, date (from tomorrow; `data-closed` names a weekday that is refused), time slot, name, email, optional phone and notes, consent. The success panel repeats the details. |
| Journal | `ul.cards`, `li.card[data-kind]`, `.card.feature`, `.chips[data-filter="kind"]` | The first card spans two columns. Keep the count at 2 + 3n (5, 8) so rows close evenly. `?kind=` preselects. |
| Story | `article`, `.plate.band`, `.prose`, `.lead`, `.pull`, `.figure-pair` | Band with kicker (category and date) and H1, a 680px column with H2s, one pull quote between two rules and one picture pair. |
| The house | `.plate.band`, `.statement`, `ol.timeline`, `.values` | A statement, four to six dated rows, three short principles and one outlined button. |
| Contact | `.two`, `[data-form="contact"]`, `#c-order-field`, `aside.info`, `#boutiques` | Subject (choosing "An order" shows the order number field; `?topic=` preselects), name, email, message; the aside lists phone, email and boutiques. `?at=boutiques` scrolls there. |
| FAQ | `.faq`, `h2.h3[id]`, `details`, `summary` | Groups with IDs (`delivery`, `sizes`, `care`) for `?at=`. |
| Legal | `.legal`, `.toc`, `h2.h3[id]` | Privacy, terms of sale and cookies in one view, with an in-page list of links. |
| Footer | `.site-footer`, `.foot`, `.letters`, `[data-form="newsletter"]`, `.foot-base`, `.foot-word` | Three link columns and the letters signup; the wordmark, cities and copyright underneath. |
| 404 | `data-view="404"` | Kicker, one H1, one sentence and one button to the collection. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/collection?cat=fragrance`, `#/product?id=cendre`, `#/atelier?service=jewellery&at=book`, `#/contact?topic=order`).
- `at=<id>` scrolls to that section after the view opens; plain `#id` links scroll inside the current view.
- The `titles` map sets the document title per view (the product page uses the product name), and the `section` map keeps the right nav link underlined on child views (`story` under `journal`). Category links in the nav are underlined when their `cat` matches. Update both maps when you add or rename views.
- The theme and the bag are kept through the `store` wrapper (`localStorage` when allowed, memory inside a sandbox). Rename both keys for the user's brand.
- In a framework project, replace the router with real routes (one per product and per story), keep the URLs readable (`/collection/fragrance`, `/products/cendre`), and turn `at` into ordinary fragment links.
