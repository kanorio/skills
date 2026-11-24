# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Festival or outdoor event (the template) | home, lineup, passes, plan, news, post, faq, about, contact, privacy, terms, 404 | hero with the poster, scene band with three info cards, stage list, night band, three posts, postcard newsletter |
| Concert series, tour or club season | home, lineup (as dates), passes (as tickets), news, post, faq, privacy, 404 | hero with the poster listing dates and venues instead of days, scene band (getting there, doors, accessibility), night band, posts, newsletter |
| Conference, fair or market weekend | home, lineup (as program), passes, plan, faq, about, contact, privacy, terms, 404 | hero with the poster listing speakers or makers, scene band, stage list as rooms or halls, night band, newsletter |
| Venue, campsite or retreat | home, plan (as visit), passes (as stays or rates), news, faq, about, contact, privacy, 404 | hero with the poster as this season's calendar, scene band (arrive, stay, eat), stage list as spaces, posts, newsletter |
| Wine, food or garden brand with seasonal events | home, news, post, lineup (as events), about, contact, privacy, 404 | hero with the poster as the season's events, scene band (visit, shop, join), night band, posts, newsletter |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.brand-dates`, `.nav`, `#theme-toggle`, `#menu-open` | Brand, dates, five links at most, theme toggle, one primary button. Below 1080px the links move into `#menu`, a `<dialog class="sheet">` with a cut-out at the bottom. |
| Hero | `.hero`, `.hero-grid`, `.hero-copy`, `.display`, `.stem.grow`, `.lead`, `.btn-row`, `.link-row`, `.hero-note`, `.hero-cactus` | Kicker with place and dates, one display headline, the stem rule, one lead, two buttons, up to two arrow links, one note, one cut-out. The poster sits in the right column. |
| Poster | `.poster`, `.poster-top`, `.poster-title`, `.poster-day`, `.poster-date`, `.poster-head`, `.poster-row.r1`–`.r3`, `.poster-horizon`, `.poster-foot` | One block per day or date: a ribbon, one headliner, then rows of four, five and six names. Keep names short; move long ones to a lower row. It is a `<figure>` of real text. |
| Scene band | `.scene-band`, `.scene`, `.festoon`, `.info-cards`, `.info-card` | Centered kicker and H2 on the sky, three cards with a cut-out each. Scene colors come from `--scene-*`, so it turns to night in dark mode. |
| Stage list | `.stages-grid`, `.stage-list`, `.stage-dot`, `.stage-name`, `.stage-note` | Intro with a button and a cut-out on the left, four to six ruled rows on the right. Each row links to `#/lineup?stage=<id>`. |
| Night band | `.night`, `.stars`, `.spectrum`, `.night-tiles`, `.night-tile` | Centered H2, the spectrum line, three tiles with a cut-out, a title, one line and an arrow link. |
| Posts | `.posts`, `.post-card`, `.post-cover` (+ `.marigold`, `.berry`, `.sky`), `.post-meta` | Three cards on home; a `.feature-post` and a grid on the news view. One cut-out per cover. |
| Postcard newsletter | `.postcard`, `.postcard-copy`, `.postcard-side`, `.stamp`, `[data-form="newsletter"]` | Headline, one line, email field and button; stamp and address lines on the right. The success panel replaces the form. |
| Page head | `.page-head`, `.kicker`, `.h1`, `.stem.grow`, `.lead`, `.head-cut` | On every view except home, post and legal. The `.head-cut` cut-out sits bottom right on wide screens and hides below 900px. |
| Set times | `.day-tabs` (`role="tablist"`), `[data-day]`, `[data-day-panel]`, `[data-stage-filter]`, `.stage-col[data-stage]`, `.set`, `.set.headline`, `.save`, `[data-plan-count]`, `[data-only-picks]`, `[data-plan-clear]`, `[data-day-empty]` | Day tabs with arrow-key support, stage chips, a personal plan stored through the `store` wrapper. `?day=` and `?stage=` preselect. Without JavaScript all days show. |
| Passes | `.switch`, `[data-pay]`, `[data-full]`, `[data-monthly]`, `.passes`, `.pass[data-pass]`, `.pass.featured`, `.pass-top`, `.pass-body`, `.pass-price`, `.ticks` | Two or three ticket cards. Prices switch with the payment buttons. `?pass=` highlights a card and preselects it in the presale form. |
| Add-ons | `#addons`, `.addons`, `.addon` | Three small cards with a cut-out, a label, a serif price and one line. |
| Comparison | `.table-scroll`, `.compare` | Rows of features, columns of passes; checks are SVG with `aria-label`, missing items say "Not included". |
| Presale or waitlist | `#presale`, `.presale-grid`, `.form-card`, `[data-form="presale"]` | Copy on the left, a form card on the right on a sand band. |
| Plan | `#getting-here`, `.ways`, `.way`, `#shuttle`, `#camping`, `.split`, `.split-art`, `#stay`, `.towns`, `#grounds`, `.map-scroll`, `.map`, `.legend` | Four ways to arrive, a split with a cut-out on a blob, ruled rows of towns, an SVG map with a text legend. The map scrolls sideways inside its frame on phones. |
| Article | `.article-head`, `.byline`, `.avatar`, `.article`, `.float-cut`, `.table-scroll` | Tag, H1, lead, byline with an initials avatar, then prose in the 680px column: H2s, a ticked list, a serif pull quote, a table, a floated cut-out. |
| FAQ | `.faq-layout`, `.faq-nav`, `.faq-group[id]`, `.faq`, `details`, `.help-card` | Topic links on the left, grouped questions on the right, a marigold help card at the end. `?at=<group id>` scrolls to a group. |
| About | `.split`, `.values`, `.value`, `.timeline` | A split with a cut-out, three numbered promises, a ruled timeline of years. |
| Contact | `.contact-grid`, `[data-form="contact"]`, `.contact-list` | Form card on the left (name, email, topic, message), ruled contact details and a cut-out on the right. `?topic=` preselects the topic. |
| Footer | `.site-footer`, `.horizon`, `.footer-body`, `.footer-grid`, `.footer-bottom` | The horizon silhouette, the brand and one line, three link columns, the legal line. |
| 404 | `data-view="404"`, `.notfound` | The tumbleweed cut-out, one H1, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/passes?pass=garden&at=presale`).
- `at=<id>` scrolls to that section of the view after it opens; plain `#id` links scroll inside the current view.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- In a framework project, replace the router with real routes, keep the same URLs where possible, and turn `at` into ordinary fragment links.
