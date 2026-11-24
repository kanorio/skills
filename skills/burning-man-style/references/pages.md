# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Header, footer, home, search and 404 always ship.

| Site | Views | Home sections, in order |
|---|---|---|
| Arts gathering or participatory festival (the template) | home, gathering, art, work, get-involved, stories, story, faq, about, contact, legal, search, 404 | hero, torn band with a photo, three way-in cards, upcoming dates, countdown, story slider |
| Music festival or concert series | home, gathering (as line-up and schedule), art (as artists), work (as one artist), stories, faq, contact, legal, search, 404 | hero, torn band, way-in cards (tickets, camping, volunteer), dates as shows, countdown, story slider |
| Nonprofit, foundation or cause | home, about, get-involved (volunteer and donate first), stories, story, faq, contact, legal, search, 404 | hero with the mission, torn band, way-in cards (give, volunteer, partner), dates as events, countdown to a campaign goal date or remove it, story slider |
| Community group, meetup or club | home, gathering (as the next meetup), stories, get-involved (as join), faq, about, contact, legal, search, 404 | hero, torn band, way-in cards, dates as meetups, story slider |
| Arts venue, gallery or residency | home, art (as the program), work, gathering (as visit), get-involved (as membership and support), stories, about, contact, legal, search, 404 | hero, torn band, way-in cards (visit, see, support), dates as openings, story slider |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hbar`, `.brand`, `.hsearch[data-search]`, `.hactions`, `.btn-donate`, `#theme-toggle`, `#menu-open`, `.nav` | Brand, the wide search, Donate and the theme toggle; six links at most in the second row, spread across the width. Below 900px the search and links move into `#menu`, a `<dialog class="sheet">`. Never let it wrap at 1440, 1024 or 768. |
| Hero | `.hero.on-photo`, `.sparks`, `.hero-copy`, `.pill`, `.display`, `.lead`, `.row` | One night photo, a date and place pill, one display headline, one lead, two buttons. Its bottom padding leaves room for the band's tear. |
| Torn band | `.band`, `.tear.tear-top`, `.tear.tear-bot` (+ `.flip`), `.band-inner`, `.band-photo`, `.band-copy`; `.band.solo` for two columns of copy | One H2, one paragraph or a tick list, one ink button. The photo variant hides its photo below 760px. Mirror the tears with `.flip` so adjacent bands do not repeat. |
| Way-in cards | `.cards`, `.card`, `.ph`, `.btn-peach` | Three cards: photo, slab H3, one line, a centered button. Use for the main ways to take part. |
| Upcoming dates | `.crackle` with `svg.bg` (the `#crack` pattern), `.dates-grid`, `.feature`, `.date-list`, `.date-row`, `.date-block`, `.date-meta` | A feature card on the left, three to six date rows on the right, one peach button below. Each row: month and day, what, when, where, one action. |
| Countdown | `.countdown[data-countdown="YYYY-MM-DDTHH:MM:SS"]`, `[data-countdown-fallback]`, `.units`, `[data-unit]` | A night panel. The fallback sentence states the date for no-JS and screen readers; the digits show only with JavaScript. Remove the panel if there is no single date to count to. |
| Story slider | `.slider[data-slider]`, `.slides`, `.slide`, `.cap`, `.slide-btn`, `.dots` | Three to five slides with a photo, a title and topic. Arrows and dots appear with JavaScript; without it the track scrolls sideways inside itself. |
| Banner | `.banner.on-photo`, `.kicker`, `.h1`, `.lead`, `.tear.tear-in` | Inner-view head with a photo, ending in a tear of the page color. Views without a fitting photo use `.page-head` (kicker, H1, lead). |
| Essentials | `.info` | Four short boxes with an icon: when, where, passes or price, what to bring. |
| Schedule | `#schedule`, `.tabs[role=tablist]`, `[data-day]`, `[data-day-panel]`, `[data-kind].chip`, `.slots`, `.slot[data-kind]`, `.save`, `[data-plan-count]`, `[data-only-saved]`, `[data-slots-empty]` | Day tabs with arrow-key support, kind chips, bookmark buttons added by the script and stored under `emberwell-plan`. Without JavaScript all days show. |
| Ruled list | `.ruled` (+ `.stack`) | Title on the left, text on the right (stacked on phones or with `.stack`). For getting there, teams, contact details. |
| Art grid | `.toolbar`, `.find`, `[data-type].chip`, `[data-art-count]`, `[data-art-grid]`, `[data-art-empty]`, `[data-art-reset]` | Cards are drawn from `WORKS` in the script; the first three are also in the HTML for no-JS. `?type=` preselects a kind. |
| Work page | `.work-hero`, `.crumbs`, `[data-work-title]`, `[data-work-lead]`, `[data-work-body]`, `.quote`, `.side-card`, `.facts`, `[data-work-more]` | Filled from `WORKS` by `?id=`. Give each work its own body text in a real site. |
| Steps | `.steps` | Three to five dated steps with a peach top rule and slab dates (grant timeline, application process). |
| Giving | `#donate`, `.seg [data-freq]`, `.amounts [data-amount]`, `[data-impact]`, `#d-other`, `[data-give-label]`, `[data-form="donate"]` | Inside a torn band. Impact lines come from the `IMPACT` map; write real ones or remove the line. |
| Stories grid | `[data-topic].chip`, `[data-story-grid]`, `[data-story-empty]` | Cards drawn from `STORIES`; `?topic=` preselects. Every card links to the one sample article; give each story its own route in a real site. |
| Article | `.article-head`, `.byline`, `.avatar`, `.article-photo`, `.prose`, `.quote` | Breadcrumb, H1, lead, byline with initials, a photo ending in a tear, then prose in the 680px column. |
| FAQ | `#faq-find`, `.faq-grid`, `.faq-nav`, `.faq-group[id]`, `.faq details`, `[data-faq-empty]` | Topic links, grouped questions with a plus that turns, a filter that opens matches, a help card. `?at=<group id>` scrolls to a group. |
| About | `.split`, `.side-card .facts`, `.principles`, `.people` | Mission with an "at a glance" card, numbered principles, the board or team as initials. |
| Contact | `[data-form="contact"]`, `#c-topic`, `.ruled.stack` | Form card and contact details. `?topic=` preselects the topic. |
| Search | `[data-view="search"]`, `[data-search-summary]`, `[data-search-results]` | Results from works, stories, the schedule, dates and answers. Every `form[data-search]` sends its words to `#/search?q=`. |
| Footer | `.site-footer`, `.tear-top`, `.fgrid`, `.flinks`, `[data-form="newsletter"]`, `.fbottom` | Brand and one line, two link columns, the newsletter, the legal line. |
| 404 | `data-view="404"`, `.notfound` | One H1, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/work?id=ember-spiral`, `#/get-involved?at=donate`).
- `at=<id>` scrolls to that section after the view opens; plain `#id` links scroll inside the current view.
- The `titles` map in the script sets the document title per view; the work view sets its own from the work's title.
- Storage goes through the `store` wrapper (theme and saved schedule), which falls back to memory inside a sandboxed frame.
- In a framework project, replace the router with real routes, keep the same URLs where possible, and turn `at` into ordinary fragment links.
