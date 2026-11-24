# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Fintech or B2B platform (the template) | home, product, pricing, customers, story, docs, changelog, contact, signup, privacy, terms, 404 | hero with floating cards, logo row, product bento, navy developer band with numbers, stories, closing call to action |
| Developer API or infrastructure | home, docs, changelog, pricing, customers, signup, privacy, terms, 404 | hero with the code panel in place of the cards, navy band with steps and numbers, bento of capabilities, stories, call to action |
| Consumer finance (card, wallet, savings) | home, product, pricing (as fees and limits), docs (as help center), contact, privacy, terms, 404 | hero with a card, a balance and a transfer, bento, navy band with numbers only, stories (as reviews the user supplies), call to action |
| B2B service or consultancy | home, product (as one service), customers, story, contact, privacy, terms, 404 | hero with one result card, logo row, bento of services, stories, call to action |
| One product launch or waitlist | home, signup, privacy, 404 | hero with the email field in place of the buttons, bento of three tiles, navy band with the code or the numbers |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `#theme-toggle`, `#menu-open` | Transparent over the wash, `.is-scrolled` after 8px. Four links at most; the links and the primary button move into `#menu` (`<dialog class="sheet">`) under 900px. |
| Wash | `.top`, `.wash`, `.wash-sm`, `.above` | The first section of every view has `.top` (it starts under the header) and one `.wash` (home) or `.wash-sm` (page heads). Content inside `.above`. |
| Hero | `.hero`, `.hero-grid`, `.ticker`, `.display.tt`, `.btn-row`, `.hero-art` | Ticker, two-tone display headline, primary and secondary buttons; the art column holds `.ui-dash`, `.ui-invoice` and `.ui-toast` with `role="img"` on `.hero-art` and `aria-hidden` inside. |
| Logo row | `.logos` | Six customer names as type between two rules. Only names the user confirms. |
| Product bento | `#products`, `.bento`, `.tile`, `.tile.w4`, `.tile.cool`, `.plus`, `.vig` | Title, one sentence, the plus, a vignette (`.co`, `.device`, `.mini-inv`, `.payouts`, `.card3d`, `.cash`). Six-column grid. |
| Navy band | `#developers`, `.band`, `.dev-grid`, `.dev-steps`, `.code[data-tabs]`, `.stats`, `.stat`, `.burst[data-burst]` | Two-tone H2, three numbered steps, buttons, tabbed code; three gradient numerals; the line burst drawn by the script. One band per page. |
| Stories | `#stories`, `.story-grid`, `.story.feature`, `.story`, `.cover.g1` to `.g6`, `.metrics` | One featured card spanning the row and three cards. |
| Closing call to action | `#start`, `.cta-grid`, `.mini` | H2, one sentence, two buttons; two small cards with an icon, a title, a line and an arrow link. |
| Page head | `.top.page-head`, `.wash-sm`, `.kicker`, `.h1.tt` | Kicker chip (optional), two-tone H1, buttons or a search field. |
| Product | `.page-art`, `.ui-table`, `.feat-row`, `.feat-art`, `.timeline`, `.method-grid`, `.specs` | A table and a hosted invoice overlapping under the head, three alternating feature rows, a six-item spec grid. |
| Pricing | `.billing[data-billing]`, `.plans`, `.plan.featured`, `[data-monthly]`, `[data-yearly]`, `#calc`, `.calc-in`, `.calc-out`, `.est`, `.compare`, `.faq` | `?plan=` sets the featured plan. The estimator reads the `rates` object in the script; update it with the real fee schedule or remove the section. |
| Customers | `.filters [data-filter]`, `#story-count`, `#story-list [data-industry]`, `#story-empty`, `.pull` | One chip per industry; `?industry=` preselects one; a pull quote below. |
| Case study | `.crumbs`, `.story-cover`, `.story-layout`, `.facts`, `.prose`, `.results`, `.pull` | Breadcrumb, two-tone H1, cover, a sticky facts column (industry, headquarters, team, products used), the article with three result figures and a quote. |
| Docs | `.search #doc-q`, `.quick [data-guide]`, `.docs-grid`, `#guide-list [data-guide]`, `#guide-empty`, `.ref`, `.sdks` | The search filters quick starts and guides by their `data-guide` keywords and text. API reference cards show method and path. |
| Changelog | `.log`, `time`, `.pill-s`, `.code` | One article per change with an ID, a monospace date, a status pill (New, Improved, Deprecated), a title, a note and an optional code sample. |
| Contact sales | `.split`, `.ticks`, `.form-card`, `[data-form="contact"]` | Name, work email, company, monthly volume, interest, message. `?topic=` preselects the interest. |
| Sign up | `[data-form="signup"]` | Work email, name, country, plan, password. `?plan=` preselects the plan. |
| Footer | `.site-footer`, `.footer-grid`, `[data-form="newsletter"]`, `.footer-bottom` | Brand, newsletter, four link columns, the legal line with the user's own disclosure. |
| 404 | `data-view="404"`, `.notfound`, `.code404` | Small wash, monospace "404", a two-tone H1, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/signup?plan=growth`).
- Plain `#id` links (for example `#products` in the footer) open the view that contains the section, then scroll to it.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
