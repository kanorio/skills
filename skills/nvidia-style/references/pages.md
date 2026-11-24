# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links, with optional parameters (`#/products?cat=server`, `#/products?work=vision`, `#/news?topic=customers`, `#/contact?topic=press`). In a framework project each view becomes a real route, and each product and story gets its own page. In the template every product card opens the one product view (`#/product`); for a real catalog, drive that view from the product data or make one page per product.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Hardware maker or PC builder (the template) | home, products, product, cart, news, post, events, support, about, contact, legal, 404 | hero with ticker, product carousel row, black product band, second product row, news row, event card |
| Workstation, server or AI compute provider selling by quote | home, products (no cart buttons), product (configurator ends in "Request a quote"), news, post, support, about, contact, legal, 404 | hero, solutions row, black band with capacity figures, product row, customer stories row |
| AI or cloud service (subscriptions, managed GPUs) | home, products (as plans or instance types), product (as a service page with the chart and specs), news, post, support (docs and status links), about, contact, legal, 404 | hero, services row, black band with performance figures, customer stories row, event card |
| Tech event, meetup or conference | home (event first), events, news, post, about, contact, legal, 404 | hero slides for keynote, labs and registration, speakers row, black band with numbers (days, sessions, seats), sessions row, venue card |
| Repair shop or system integrator | home, products (services and parts), support, about, contact, legal, 404 | hero, services row, black band with turnaround figures, parts row, reviews only if the user supplies them |
| Hardware startup before launch | home, product, news, about, contact (waitlist), legal, 404 | hero with one slide, black product band, feature cards, news row, waitlist form |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.hd`, `.hd-in`, `#menu-open`, `.brand`, `.nav`, `#theme-toggle`, cart link with `#cart-count`, `.hd-act .btn`, `#menu` (`<dialog class="sheet">`) | Up to five text links; they move into the dialog under 1024px, the action hides under 600px. With more links, collapse earlier; never wrap. Remove the cart link on sites without a store. |
| Hero | `.hero.band`, `.slides`, `.slide#sN[role=tabpanel]`, `.hero-in`, `.hero-copy`, `.eyebrow`, `.display`, `.lead`, `.btn-row`, `.hero-img`, `.ticker[role=tablist]`, `.tick[role=tab]` with `.bar`, `small`, `b` | One to four slides; one tick per slide. The first slide holds the H1. One slide: delete the ticker. |
| Carousel row | `.crow`, `.crow-head`, `.arrows[data-for=<track id>]`, `.crow-body`, `.crow-intro`, `details.quick`, `ul.track[data-render=cards][data-set=<set>]` | Three to eight cards per row. The set name picks a function in `SETS`. `.crow.end` adds bottom padding to the last row. |
| Card | `.card`, `.card-img` (`.flip` mirrors the picture), `.card-body`, `.label` with `<i>|</i>`, `h3 a.stretch`, `.card-foot`, `.more` | Built by `card()`; `productCard(p, true)` adds `.specs-mini`, `.price` and an `[data-add]` button. |
| Black band | `section.black`, `.showcase`, `dl.stats`, `.btn-row` | One product, four real figures, two actions. `.stats.s4` puts four figures in a row. |
| Wide card | `.card.card-wide` | Picture left, copy right; for an event, a launch or a featured story. |
| Page head | `.phead`, `.crumbs`, `.h1`, `.lead` | Grey band with a breadcrumb on every inner view. |
| Catalog | `.toolbar`, `.tabs button[data-cat]`, `#p-work`, `#p-sort`, `#p-count`, `#p-list[data-render=catalog]`, `#p-empty` | Drawn from `PRODUCTS`; category tabs, workload select, price sort. |
| Product hero | `section.black > .hero-in` with `.crumbs`, `.display`, `.price-big` | Name, one-line promise, starting price and two actions. |
| Strip | `nav.strip`, `.strip-toggle`, `.strip-links a[href="#section"]`, primary button | Three to six links to sections of the same view; the section in view gets `aria-current="true"`. |
| Feature cards | `ul.g.g4 > li.card.feat` with `.picto` | Three or four reasons, one line each. |
| Chart | `.tabs[role=tablist] [data-chart]`, `#chart`, `#bars .grp .bar-v` (`--v` is the height in percent), `#bars-x`, `.legend`, `.note` | Data in `CHART`; four groups, one green and one grey bar each. Real measurements only. |
| Configurator | `#cfg-form` with `fieldset.opt-group`, `label.opt > input[type=radio][data-price]`, `aside.sum` with `#sum-rows`, `#sum-total`, `[data-add=cfg]` | Prices are deltas on the base price (`BASE`); the summary rows follow the fieldset order. |
| Spec table | `.tbl-wrap > table.tbl` | Row heads in `th[scope=row]`; scrolls sideways on phones. |
| FAQ | `.split` with `.acc` and `<details>` | Three to eight questions. |
| Cart | `#cart-empty`, `#cart-full`, `#cart-lines .cart-line`, `.qty [data-q][data-d]`, `[data-rm]`, `#c-sub`, `#c-total`, `form[data-form=checkout]` | Kept in the store under the cart key; nothing is charged until a real checkout is connected. |
| Newsroom | `.tabs button[data-topic]`, `#n-q`, `#n-count`, `#n-list[data-render=posts]`, `#n-empty` | Drawn from `POSTS`; topic tabs and title search. |
| Story | `.prose`, `.byline`, `.cover`, `.keys`, `blockquote`, `.tbl` | Breadcrumb, label, H1, byline, a 21:9 cover on black, takeaways box, prose. |
| Event | `section.black` hero, `.strip`, `#agenda` with `button[data-day]`, `.chips button[data-track]`, `#a-list[data-render=sessions]`, speakers row, `#register` with `form[data-form=register]` | Drawn from `SESSIONS` and `SPEAKERS`. |
| Downloads | `#d-prod`, `#d-os`, `#d-type`, `#d-count`, `#d-list`, `[data-dl]`, `#d-empty` | Drawn from `FILES` (`only` and `not` limit a file to some products). Point each button at the real file. |
| About | `.phead`, `.black dl.stats.s4`, `.timeline`, `[data-render=team]`, `#jobs` | Drawn from `TEAM`. |
| Contact | `.cfg` with `.panel > form[data-form=contact]` and an aside `.lines.two` | `#/contact?topic=<value>` preselects the topic. |
| Forms | `form[data-form]`, `.form`, `.fld`, `.in`, `.pick`, `.err`, `.check`, `.radios`, `[data-success]`, `[data-again]` | Every validated field has `aria-describedby` pointing at its `.err`. |
| Footer | `.ft`, `.ft-cols`, `form[data-form=newsletter]`, `.ft-bot` | Black; three link columns and the newsletter. |
| 404 | `[data-view="404"]` | Big green code, H1, two actions. |
