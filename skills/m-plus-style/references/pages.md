# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. This style suits places and programmes: anything with dates, a schedule and a reason to visit.

| Site | Views | Home sections, in order |
|---|---|---|
| Museum, gallery or arts center (the template) | home, whats-on, exhibition, visit, membership, join, about, contact, privacy, terms, 404 | hero, exhibitions (three cards), events (three rows), membership band, newsletter row, big link rows |
| Festival or design week | home, whats-on (as programme), exhibition (as venue or event), visit (as tickets and travel), about, contact, privacy, 404 | hero with the dates as plates, events rows grouped by day, exhibitions as venues, newsletter row, big link rows |
| Cinema or performance venue | home, whats-on (as listings), exhibition (as film or show), membership, visit, contact, privacy, terms, 404 | hero, events rows for this week, exhibitions as seasons, membership band, big link rows |
| Studio, school or publisher with a public programme | home, whats-on (as courses or launches), exhibition (as project), about, contact, privacy, 404 | hero, exhibitions as projects, events rows, newsletter row, big link rows |
| Single exhibition or campaign site | home, exhibition, visit, contact, privacy, 404 | hero with one oval to tickets, three "inside" columns from the detail view, one quote, events rows, big link rows |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Stripe grid | `.tri`, `.span-2`, `.span-3`, `.col-2`, `.col-3`, `.rule` | Three equal columns that match the stripes. Direct children get the gutter; pictures that should touch the stripe edge use `padding-inline: 0`. One column under 760px. |
| Header | `.site-header`, `.header-inner`, `.brand`, `.brand-mark`, `.nav`, `#theme-toggle`, `.oval.small`, `#menu-open` | Filled wordmark, four links at most, round theme button, one small oval. Painted with the stripes. |
| Menu | `#menu` (`<dialog class="menu">`), `.menu-links`, `.menu-foot` | Full screen, stripes behind, big link rows with arrows, one oval and one plate. |
| Hero | `.hero`, `.logotype.draw`, `.hero-body`, `.hero-side`, `.plates`, `.cta-cells` | The outlined wordmark across the top, H1 and one line in two stripes, plates and an oval in the third, three link cells on the bottom edge. Full screen on landscape screens; logotype plus copy on portrait ones. |
| Giant section head | `.giant-head`, `.display`, `.sub` | One word or a short name, centered, with a one-line subtitle. |
| Exhibition cards | `.cards`, `.xcard`, `.media`, `.tag`, `.dates`, `.xcard-body` | Exactly three, one per stripe. Picture 4:3, category tag, two date plates, H3 and one line. The whole card is the link. |
| Event rows | `.rows`, `.erow`, `.when`, `.media`, `.what` | When, picture, what. One plate per row (price, "free", "members first"). Rows are links to the detail view. |
| Membership band | `.benefits` | Three centered benefits, one per stripe, then one oval. |
| Newsletter row | `.letter`, `.ticks`, `.inline-form`, `[data-form="newsletter"]`, `[data-success="newsletter"]` | Title, three ticks, the field and a small oval, each in its own stripe. |
| Big link rows | `.bigrows`, `.bigrow`, `.label`, `.note`, `.icon-lg` | Two or three rows that end a page. Labels are short ("Plan your visit"). |
| Page head | `.page-head.center`, `.display`, `.lead` | Top of every list and info view. |
| Filters | `.chips`, `.pill[data-filter]`, `[data-filterable]`, `[data-kind]`, `[data-empty]` | Pills with `aria-pressed`; `?type=` in the link preselects one; an empty message when nothing matches. |
| Detail (exhibition or event) | `.detail-head`, `.facts`, `.detail-hero`, `.caption`, `.moves`, `.big-quote` | Date plates, a display title and a lead in two stripes, a facts list and an oval in the third; the main picture across two stripes with a caption in the third; three "inside" columns; one big centered quote; related event rows. |
| Visit | `.info`, `.hours`, `#tickets`, `.price-table`, `.ways`, `#faq`, `.faq` | Hours, tickets and travel, one per stripe; access notes; FAQ. `?at=tickets` and `?at=faq` scroll to those sections. |
| Plans | `.switch`, `[data-cards]`, `.plans`, `.plan`, `[data-one]`, `[data-two]` | Three plans, one per stripe. The switch swaps every price and period line. Each oval links to the join view with `?tier=`. |
| Join (sign-up) | `.steps`, `.form`, `[data-form="signup"]`, `#j-tier`, `#j-cards` | Three numbered steps in one stripe, the form across two. `?tier=` preselects the plan; the switch on the plans view sets the card count. |
| Contact | `.ways`, `[data-form="contact"]`, `#c-topic` | Ways to reach the team in one stripe, the form across two. `?topic=` preselects the topic. |
| About | `.prose-cols`, `.numbers`, `.people`, `.initials`, `.names` | Three short stories, one wide picture, three numbers, people as rows with initials, supporters set as type. |
| Footer | `.site-footer`, `.footer-grid`, `.footer-brand`, `.footer-legal` | Hairline, three stripe columns, legal line. |
| 404 | `data-view="404"`, `.notfound` | The outlined wordmark, one H1, one sentence, a filled and an outlined oval. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/join?tier=friend`, `#/whats-on?type=talk`, `#/visit?at=faq`).
- Plain `#id` links scroll inside the page.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- The detail view stands for every exhibition and event in the sample. In a real build, make one detail page per item from data and point each card and row at its own page.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
