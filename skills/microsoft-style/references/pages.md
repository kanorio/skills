# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Software and hardware company (the template) | home, products, product, plans, support, cart, about, contact, signin, legal, 404 | tinted hero with greeting, audience switch, ask box and chips; product rail; quick links; feature card offer; app tiles on the band; story cards; business split |
| SaaS or productivity app | home, plans, support, about, contact, signin, legal, 404 (drop products, product and cart) | hero with the ask box searching help; rail of plan or feature cards; quick links; feature card for the trial; tiles for the main features; story cards as customer guides; business split |
| Enterprise service or B2B platform | home, products (as solutions), product (one solution with specs and plans), plans, support, contact, about, legal, 404 | hero with "For small teams / For enterprises" in the switch; rail of solution cards; feature card; tiles for capabilities; business split leading to contact |
| Hardware or device brand | home, products, product, support, cart, about, contact, legal, 404 | hero with "Shop / Get help" chips; rail of devices; quick links by category; feature card for an offer; story cards as setup guides |
| IT services, agency or reseller | home, products (as services), contact, about, support, legal, 404 | hero with the ask box searching services; rail of service cards; tiles for industries served; business split with a contact button |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `.tools`, `.tool`, `.tool-label`, `.count[data-cart-count]`, `.avatar`, `#theme-toggle`, `#menu-open`, `.hide-xs` | Brand, five links at most, then Search, Cart, theme and Sign in. Labels hide under 1180px, the links move into `#menu` (`<dialog class="sheet">`) under 900px, Search hides under 420px. Never let the header wrap; with more links, collapse earlier. |
| Offer bar | `.notice`, `#notice`, `#notice-close` | One sentence, one underlined link, a close button. Remove it when there is no real offer. |
| Hero | `.wash`, `.hero`, `.display`, `.seg[data-seg="aud"]`, `.hint`, `form.ask[data-ask]`, `.chips`, `.chip[data-q][data-aud]` | Centered greeting, the switch, a one-line hint, the ask box and three chips per audience. Submitting the ask box or a chip opens the help center with the query. `.enter` with `--i` staggers the entrance. |
| Product rail | `.rail-zone`, `#rail`, `.pcard[data-aud]`, `.pcard-art`, `.pcard-body`, `.badge`, `.btn-light`, `#rail-prev`, `#rail-next` | Three to six cards per audience. Each card: drawn product (`<svg data-c>` with `<use href="#art-…">`), optional badge, title, one line, one white button. The switch shows the cards whose `data-aud` matches. |
| Quick links | `.quick` | Four to six underlined links; line icons appear on phones. |
| Feature card | `.feature-card`, `.fc-text`, `.fc-art` | One offer or announcement with a badge, H2, paragraph, button and `.more` link. |
| App or feature tiles | `#apps`, `.band`, `.section-head`, `#app-tiles`, `.tile`, `.app-ico` | Drawn by the script from the `APPS` object: icon, name, one sentence, `.more` link. Three or six tiles. |
| Story cards | `.cards3`, `.card`, `.card-art`, `.card-body` | Three guides, stories or announcements, each with a tinted art panel and a blue button. |
| Business split | `.split`, `.ticks`, `.panel-art` | H2, lead, three ticks, a blue and an outline button, art on the right. |
| Page head | `.page-head.wash`, `.crumbs`, `.h1`, `.lead` | Top of every inner view; centered on plans, support and about. |
| Shop | `.shop-bar`, `[data-cat-btn]`, `#shop-count`, `#sort`, `#shop-grid`, `.shop-card`, `.shop-art`, `.price`, `.was`, `#shop-empty` | Cards are drawn from the `CATALOG` object: every entry with `cat` is a card, in order. `?cat=` selects a category. |
| Product | `#pd`, `.pd-media[data-c]`, `#gallery[data-show]`, `[data-thumb]`, `.buy`, `.swatch`, `.opt`, `input[name=config][data-price][data-label]`, `input[name=addon]`, `#pd-total`, `#pd-add`, `.perks`, `[data-tabs]`, `[role=tabpanel]`, `.highlights`, `.specs` | Colors recolor the drawings through `data-c`; options and accessories update the total; the tabs hold overview, specs and plans. |
| Plans | `.plan-controls`, `.seg[data-seg="billing"]`, `.plan-grid[data-aud]`, `.plan`, `.plan.featured`, `.amount[data-yearly][data-monthly]`, `.apps-row[data-apps]`, `[data-plan-buy][data-py][data-pm]`, `#compare`, `.compare`, `.yes`, `.dash` | `?for=business` opens the business plans. Every price carries both periods; buy buttons carry both prices. |
| Help center | `form.ask[data-ask="live"]`, `#help-q`, `[data-topic-btn]`, `#articles`, `.qa[data-topic][data-k]`, `#help-count`, `#help-empty`, `[data-helpful]` | Search matches the question, the answer and the `data-k` keywords, ignoring small words. `?q=` and `?topic=` prefill it. |
| Cart | `#cart-full`, `#lines`, `.line`, `.qty`, `[data-step]`, `[data-remove]`, `.summary`, `#sum-total`, `[data-form="checkout"]`, `[data-success="checkout"]`, `#cart-empty` | Lines live in the store (`START_CART` seeds the sample). Checkout validates, shows the order panel and empties the cart. |
| About | `.page-head`, `.cards3`, `.tile`, `.people`, `.person`, `.initials`, `#careers` | Story lead, three values, leadership with initials, a call to action. |
| Contact and sign in | `.contact-grid`, `.channels`, `.channel`, `.form-card`, `[data-form="contact"]`, `.auth`, `[data-form="signin"]`, `[data-success]` | `?topic=` preselects the topic. |
| Footer | `.site-footer`, `.footer-grid`, `.footer-bottom`, `.region` | Five link columns, region select, legal links, copyright. |
| 404 | `data-view="404"`, `.notfound` | A short line, an H1, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/products?cat=accessories`, `#/plans?for=business`, `#/support?q=reset+password`).
- Plain `#id` links (for example `#privacy` in the footer) open the view that contains the section, then scroll to it. `#/plans?for=business#compare` opens a view and then scrolls.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- The cart and the theme are kept with the `store` wrapper (local storage when allowed, memory inside a sandbox).
- In a framework project, replace the router with real routes, keep the same URLs where possible, and move `CATALOG`, `APPS`, plans and articles into typed data.
