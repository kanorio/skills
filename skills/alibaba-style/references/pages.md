# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. Query parameters after `?` carry state: `#/products?cat=linen&ready=1&q=napkin`, `#/products?tab=workshops&q=glass`, `#/products?ws=harrowmere`, `#/product?id=mug`, `#/quote?item=…&qty=…&unit=…`, `#/help?section=samples`, `#/legal?section=terms`. In a framework project each view becomes a real route and the parameters become real query strings.

## Recipes by kind of site

Pick the closest recipe, keep the order, drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Wholesale supplier or small trading company (the template) | home, products, product, list, quote, help, about, signin, join, legal, 404 | notice bar, tabbed search hero, trust strip, explore row (categories, most requested, new this season), freight band, product grid, quote band, workshops |
| Factory or workshop taking custom orders | home, products (catalog of capabilities), product, quote, about (factory profile), help, legal, 404 | search hero with tabs Products / Capabilities / Request a quote, trust strip (equipment, capacity, inspection), explore row by process, product grid, quote band, a profile strip instead of workshops |
| Farm-direct or producer wholesale (food, flowers, coffee) | home, products, product, list, quote, help, about, legal, 404 | search hero with tabs Products / Farms / Request a quote, trust strip (harvest dates, cold chain, samples), explore row by season or crop, product grid with "Ready to ship" as "In season", quote band, farms as workshop cards |
| Packaging, printing or merchandise supplier | home, products, product, list, quote, help, about, signin, join, legal, 404 | search hero, trust strip, explore row by material, product grid with "Custom logo" and the price ladder doing the selling, quote band with spec sheet upload, a short "how an order runs" list in the quote aside |
| Directory of makers or a cooperative | home, products (tab Workshops first), product, quote, about, help, legal, 404 | search hero with Workshops as the first tab, trust strip, workshop cards high on the page, explore row, product grid |

Header, footer, home, legal and 404 always ship. Product, list and quote ship whenever anything can be ordered.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Notice bar | `.notice`, `.notice-inner` | One sentence with one `<strong>` phrase and one arrow link. Remove it when there is nothing true and timely to say. |
| Header | `header.top#top`, `.top-row`, `.brand`, `.brand-sub`, `.mini-search[data-search="mini"]`, `#q2`, `.utils`, `.ship` (`[data-ship]` select), `#theme-toggle`, `[data-list-link]`, `[data-list-count]`, `.util-signin`, `.join`, `.nav-row`, `.nav-all[data-mega]`, `.nav-right` | Never wraps at 1440, 1024 or 768: below 1200px "Ship to" and the sign-in label hide, below 900px the compact search takes its own row and the right-hand links hide, below 768px the header stops being sticky and the link row scrolls sideways. On the home page the compact search shows only once the big search has scrolled away (`.is-stuck`). |
| Mega menu | `#mega.mega`, `[data-mega-cats]`, `[data-mcat]`, `.mega-panel[data-mega-panel]` | Generated from `CATS` by `catPanel()`; Escape and outside clicks close it. |
| Search hero | `.hero`, `.hero-h` (the page's `h1`), `.tabs`, `.tab[data-mode]`, `.tab-rule`, `.tab-new`, `form.bigsearch#bigsearch[data-search="big"]`, `.bigsearch-in`, `#q`, `[data-q-label]`, `.bigsearch-tools`, `.tool`, `.go-lg`, `[data-go-label]`, `.popular` | Two or three tabs. `MODES` sets each tab's label, placeholder and button text; the submit handler sends Products to `#/products?q=`, Workshops to `#/products?tab=workshops&q=` and the quote tab to `#/quote?item=`. Two tools at most. Four popular searches at most, all real searches that return results. |
| Trust strip | `.trust`, `.trust-inner`, `.trust-item`, `.trust-ic`, `.trust-h` | Exactly three promises the business really keeps. |
| Explore row | `.explore` (`--catw`), `.catpanel`, `.cat-item[data-cat]`, `.cat`, `.fly` (added by script), `.most-tile`, `.most-k`, `.most-t`, `.season`, `.season-slide`, `[data-dots]` | Four to eight categories. Three "most requested" tiles. Two or three new-season slides, each one link. |
| Freight band | `.freight` | One line about a real delivery rule and a link to the help answer. |
| Product grid | `.block`, `.block-head`, `ul.grid[data-grid="picks"]`, `card()` → `.pc`, `.pc-media`, `.flag`, `.pc-title`, `.pc-price`, `.pc-moq`, `.pc-ws`, `.pc-trust`, `.vf`, `.pc-acts`, `[data-add]` | Edit the card once in `card()`. Five or ten cards on the home page. |
| Quote band | `.rfq`, `.rfq-inner`, `.kicker`, `.rfq-h`, `.rfq-steps`, `form.card[data-form="quick"]` | The quick form validates, then opens `#/quote` with the item, quantity and unit filled in. |
| Workshops | `ul.ws-grid[data-ws-list="3"]`, `wsCard()` → `.ws`, `wsHead()` → `.ws-head`, `.ws-mono`, `.ws-name`, `.ws-meta`, `.ws-craft`, `.ws-stats`, `.ws-thumbs`, `.ws-acts` | Three on the home page, all on the about page and the Workshops tab. For a single maker, turn this into one profile card. |
| Results | `.rtabs`, `.rtab[data-rtab]`, `[data-results-h]`, `[data-results-sub]`, `[data-results-body]`, `.selectby`, `.chip[data-chip]`, `[data-clear]`, `aside.filters#filters`, `[data-f-cats]`, `[data-f-ws]`, `.toolbar`, `[data-filters]`, `[data-count]`, `#sort`, `ul.grid[data-grid="results"]`, `[data-empty]`, `ul.ws-grid[data-ws-results]`, `[data-ws-empty]`, `.nojs` | Reads `q`, `cat`, `ws`, `tab`, `ready`, `logo`, `moq`, `fast` and `eco` from the route. Chips toggle; filters are radio lists; below 1024px the filter column folds behind "Filters". |
| Product page | `.crumbs`, `.pdp`, `.gallery`, `[data-thumbs]`, `.stage[data-stage]`, `.pdp-title[data-p-name]`, `.pdp-meta`, `.tiers[data-tiers]`, `.tier`, `.tier-q`, `.tier-p`, `.facts`, `.opts`, `.swatches[data-opts]`, `table.lead[data-lead]`, `form.orderbox[data-form="order"]`, `#qty`, `[data-step]`, `[data-estimate]`, `[data-sample]`, `[data-to-list]`, `aside.supplier[data-supplier]`, `.subnav`, `.spec`, `[data-specs]`, `[data-customs]`, `[data-p-pack]`, `ul.grid[data-grid="also"]` | Every `[data-p-*]` field is filled from the catalog row by `renderProduct()`; the static markup is the first product, for pages without JavaScript. The order box refuses less than the minimum order. |
| Inquiry list | `.list-layout`, `[data-lines]`, `.line`, `.line-media`, `[data-lq]`, `[data-remove]`, `[data-list-empty]`, `[data-summary]`, `.sum`, `[data-sum-items]`, `[data-sum-total]`, `form[data-form="inquiry"]` | The empty state is static content; the summary and the inquiry form show once there is a line. |
| Quote request | `.quote-layout`, `form.card[data-form="quote"]`, `#attach`, `.checks`, `.check`, `aside.aside` | Prefilled by `prefillQuote()` from the route. The file field is optional and only names the file in this static page. |
| Help center | `.band`, `[data-faq-search]`, `[data-faq]`, `.faq-group` with an `id` per topic, `details.qa`, `[data-faq-empty]`, `form#contact[data-form="contact"]` | Native `<details>`; the search hides groups without a match. |
| About | `.card.profile`, `.profile-mark`, `.profile-meta`, `dl.ws-stats.facts-grid`, `.prose`, `#quality-checks`, `#workshops` | A company profile: only facts the brief gives. |
| Sign in, create account | `.auth`, `form.card[data-form="login"]`, `form.card[data-form="signup"]` | Sample screens until a real account system is connected; the success text says so. |
| Legal, 404 | `.prose`, `#privacy`, `#terms`, `.lost` | Legal text is sample text to replace. The 404 offers the catalog and a quote request. |
| Footer | `.foot`, `.foot-cols`, `.foot-news`, `form[data-form="newsletter"]`, `.foot-mid`, `.pay`, `.foot-bottom` | Four link columns and a newsletter field, payment methods as plain text chips, the legal strip. |

## Data and state

- `CATS` lists categories with an icon and subcategories; the category panel fly-outs, the mega menu and the filter column read it. Add a category there and in the static `.catpanel` list.
- `WS` lists the makers (workshops, farms, factories): `name`, `where`, `years`, `craft`, `rating`, `reply`, `ontime`. Remove fields the brief cannot back up, and their cells in `wsHead()`.
- `products` holds one row per product: `id`, `name`, `short`, `cat`, `ws`, `unit` (plural: pieces, sets, packs), `tiers` (`[from quantity, unit price]`, lowest quantity first; the first is the minimum order), `lead` (days per tier), `sample` (price of one sample), `logo`, `ready`, `eco` (1 or 0, used by the chips), `rating`, `reviews`, `opts` ("Label:#colour" pairs that recolor the art), `specs` (pairs for the details table) and `pack`. Cards, results, the product page, the fly-outs and the inquiry list all read it. A real catalog loads these rows from its backend.
- Product art is a `<symbol id="art-<id>">` in the sprite. For photos, put one `<img data-photo="<id>">` per product in `#photos`; `art()` uses it everywhere and `scripts/inline.mjs` embeds it.
- The inquiry list is `[{ id, opt, qty, sample }]` under `brindlewood-list`, the country under `brindlewood-ship`, the theme under `brindlewood-theme`, all through the `store` wrapper so it still works where storage is blocked.
- `COUNTRIES` fills every `[data-countries]` select and the header's "Ship to".
- Forms validate and show a success state but send nothing. See `references/kanorio.md` before wiring a real endpoint.
