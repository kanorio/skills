# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route. Each view also sets `data-top` (`lime`, `soft` or nothing), which colors the header to match the top of that view.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Small professional practice: bookkeeping, tax, payroll (the template) | home, services, service, pricing, guides, guide, about, help, contact, start, privacy, terms, 404 | lime hero, card trio with the calculator, lime block with pill bars, proof row, three steps, quotes, guides, forest call to action |
| Insurance broker or financial adviser | home, services (as cover types or advice areas), service, about, guides, help, contact, privacy, terms, 404 | lime hero, card trio (the calculator becomes a cover or fee estimate), proof row, three steps, quotes, guides, call to action |
| Subscription app or fintech product | home, pricing, help, start, privacy, terms, 404 | lime hero, card trio with product widgets, lime block with pill bars comparing plans or usage, proof row, steps, call to action |
| Local service with prices (cleaning, tutoring, clinic, studio) | home, services, pricing, about, contact, privacy, 404 | lime hero, card trio (one card is the quote calculator), proof row, steps, quotes, call to action |
| Nonprofit or membership | home, about, guides (as news), help, start (as join or donate form), privacy, 404 | lime hero, card trio of programmes, lime block with pill bars showing where money goes, proof row, quotes, call to action |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.head`, `.brand`, `.nav`, `.head-end`, `#theme-toggle`, `.text-link`, `#menu-open` | Four links at most; under 1000px they move into `#menu` (`<dialog class="sheet">`), set in the display face, and under 480px the primary pill moves there too, so a long brand name or button label never wraps or pushes the page sideways. The header takes the top color of the view from `data-top`. |
| Hero | `.hero.band-lime.center`, `.display`, `.lead`, `.btn-row.center` | Three or four short lines of capitals, a lead under 30 words, a primary and a tint pill. Bottom padding leaves room for the trio to overlap. |
| Card trio | `.trio` (inside `.wrap.wide`), `.card.t-aqua`, `.card.t-ink`, `.card.t-plum`, `.mock`, `.big`, `.paypill`, `.note-pill` | Columns 1 : 1.36 : 1, pulled up into the lime field. Center card holds the calculator; side cards hold one widget or one pill row each. Stacks on phones. |
| Calculator | `#quote.calc.mock`, `[data-tier]`, `[data-step]`, `#q-pay`, `#q-tax`, `#q-total` | Chips as a radio group, a stepper (0 to 50), a switch, the total in `.big`, a lime button to `#/start?plan=custom`. Prices come from `RATES` in the script. |
| Fee split | `#fees`, `.block.t-lime`, `.bars-card`, `#bars-total`, `.bars`, `.bar.is-top`, `[data-share]` | Shares in `data-share` sum to 1; widths in `--w` shorten row by row; the figures follow the calculator. Rows reveal with a left-to-right wipe. |
| Proof row | `.h-plain`, `.proof`, `.ic.lg.t-aqua` | Three facts the business can stand behind, each with a 96px aqua badge. No invented numbers. |
| Steps | `.head-row`, `.grid-3`, `.card.t-soft.step` | A huge numeral, an H3, one muted sentence. Three steps. |
| Quotes | `.quote`, `.person`, `.avatar` | Three real quotes with permission, initials avatars in lime, aqua and peach. |
| Guides teaser | `#home-guides` | Filled by the script from `GUIDES`. |
| Call to action | `.block.t-band.center` | Forest block (deeper in dark), lime capitals, a lime pill and a tint pill. |
| Page head | `.top.band-soft` or `.top.band-lime`, `.h1`, `.lead`, `.search`, `.kicker` | Centered for lists, split into two columns when there is a widget (service, about). |
| Services | `[data-filterable="service"]`, `[data-filter]`, `[data-count]`, `.svc-grid`, `.svc[data-cat]`, `.svc-price`, `[data-empty]`, `[data-reset]` | Four columns, two on tablets, one on phones. `?cat=` preselects a chip. |
| Service | `.split2`, `.mock.report`, `.spark`, `.rows`, `.qa-list`, `.qa` | Head with a weekly report widget, an included list, three questions. |
| Pricing | `.seg-wrap [data-billing]`, `.plans`, `.plan`, `.plan.t-ink`, `[data-monthly]`, `[data-yearly]`, `.table-wrap`, `.addons` | Plans overlap the lime field. The table scrolls sideways on phones inside its own rounded box. Add-ons are pill rows. |
| Guides | `.search #g-q`, `[data-filterable="guide"]`, `#guide-list`, `.g-card.is-feature` | The first guide spans two columns. Search and chips combine. `?cat=` preselects. |
| Guide | `.article`, `.article-meta`, `.prose`, `.callout.t-lime`, `#related` | Back link, tag, H1, author and date, lead, a lime "short version" callout, H2 sections, a table, related guides. |
| About | `.split2`, `.grid-3` of `.card.t-lime / .t-aqua / .t-ink`, `.team`, `.member`, `.avatar` | Story beside a heavy H1, three promises, the team with initials. |
| Help | `.search #h-q`, `[data-filterable="question"]`, `.qa[data-cat]`, `.card.t-aqua` | Search plus chips over a `<details>` list, then a contact card. |
| Contact | `.form-split`, `.form-card`, `[data-form="contact"]`, `.pick`, `.info`, `.hours` | Name, email, business type, topic pills (checkboxes), time pills (radios), message. Office hours in an aqua card. |
| Start (sign-up) | `.block.t-lime`, `#start-plan`, `#start-price`, `[data-form="signup"]` | `?plan=solo|standard|growing|custom` fills the lime panel; `custom` shows the calculator's total. |
| Legal | `.legal` | Privacy and terms: short H2 sections with the user's own text. |
| 404 | `data-view="404"`, `.band-lime`, `.num` | A giant heavy "404", a capital H1, a lead, two pills. |
| Footer | `.site-footer`, `.foot-grid`, `[data-form="newsletter"]`, `.foot-bottom` | Brand, a pill newsletter field, four link columns, a legal line. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/services?cat=payroll`, `#/start?plan=growing`).
- Plain `#id` links (`#quote`) open the view that holds the section, then scroll to it.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- Any section with `data-filterable="noun"` gets chips, search, a live count ("Showing 3 guides") and an empty state from one shared function; items only need `data-cat`.
- In a framework project, replace the router with real routes, keep the same URLs where possible, and move `GUIDES`, `RATES` and `PLANS` into typed data.
