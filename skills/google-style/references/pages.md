# Pages and sections

Every view in `assets/template.html` is a `<section data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

This style suits sites people come to in order to find something: a guide, a directory, a help center, a small service with a few questions to answer. Pick the closest recipe, keep the order, and drop rows the brief cannot fill.

| Site | Views | What the home box searches |
|---|---|---|
| Local or city guide (the template) | home, places, place, guide, article, events, notes, post, about, contact, signup, legal, 404 | places, guide answers, events |
| Knowledge base or help center for a product or service | home, guide (topics), article, notes (updates), contact, legal, 404 | articles and topics; the empty-state links to contact |
| Directory (makers, clinics, venues, members, tools) | home, places (as the directory), place (as the profile), signup (as "Add a listing"), about, contact, legal, 404 | listing names, categories, areas |
| Small service or practice (a clinic, a repair shop, a tutor) | home, guide (as services and answers), article (as one service), events (as dates or classes), about, contact, legal, 404 | services and questions; the second button can be "Book a visit" |
| Community or club | home, events, notes, post, about, signup (as "Join"), contact, legal, 404 | events, notes, people |

Header, footer, home and 404 always ship. The home view always keeps its four parts (wordmark, box, two quiet buttons, one line of links); only their words change.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.top`, `.top-in`, `.brand`, `.nav`, `.acts`, `#theme-toggle`, `#menu-open`, `.btn` | Inner pages: mark and wordmark on the left, five 14px tab links, toggle and one filled pill on the right. On home (`body[data-page="home"]`) the brand hides and the links become 13px utility links in the corner. Below 900px the links move into the menu. |
| Phone menu | `<dialog class="menu" id="menu">`, `.menu-links`, `#menu-close` | A sheet that drops from the top with 20px links and the filled pill. Closes on a link, the close button, Escape or the backdrop. |
| Home | `[data-view="home"].home`, `.wordmark`, `.badge`, `#home-search`, `#q-home`, `#q-home-list`, `.home-actions`, `#home-go`, `#surprise`, `.home-line` | One centered column. The wordmark is the view's H1. The first quiet button searches; the second does something small and playful (a random place). The line of links points at three popular pages. |
| Search box | `.sbox`, `.sfield`, `[data-clear-box]`, `.slist`, `[role=option]`, `.sg-ic`, `.sg-l`, `.sg-h` | Home: suggestions come from the place cards, the topic links and the event rows in the HTML (at most six, matches at the start first). Enter with nothing selected goes to `#/places?q=` or, when only the guide matches, `#/guide?q=`. Index pages: `.sbox.compact` with `data-filter-input="<list>"` filters as you type. |
| Intro | `.intro`, `.eyebrow`, `.display`, `.lead` | Centered, 760px wide. One display headline per view. |
| Chips | `.chips[data-chips="<list>"]`, `.chip[data-value]`, `.dot[data-c]`, `.ck` | `all` plus one chip per category; `saved` shows places saved in this browser. `?cat=` in the route preselects one. |
| Toolbar | `.toolbar`, `[data-count="<list>"]`, `#places-sort` | Count on the left, sort or one text button on the right. |
| Card grid | `.grid[data-list="places"]`, `.card[data-id][data-cat][data-added]`, `.tag`, `.card-line`, `.card-meta > span` (area, then hours) | The cards are the data: the place view reads the name, category, line, area, hours and picture from them. Sorting reads `h3` and `data-added`. |
| List helpers | `[data-more="<list>"]`, `[data-empty="<list>"]`, `[data-clear="<list>"]` | "Show more" adds a page (nine places, six events); the empty state offers a way out. |
| Place | `#place-box[data-cat]`, `#place-title`, `#place-line`, `#place-img`, `#save`, `#share`, `.facts > .fact`, `#place-hours`, `#place-area`, `#place-access`, `#place-good`, `.note`, `#place-about`, `#place-checked`, `#nearby` | `#/place?id=<card id>` fills the view from the card plus the `PLACES` record (access, good for, about, checked). Nearby shows three other cards, same area first. |
| Guide | `.topics > .topic`, `.ticon`, `.qa details`, `#q-guide`, `[data-empty="guide"]` | Eight topic panels, each with three links, then up to six questions. `#/guide?q=` prefills the filter. |
| Article | `.doc`, `.toc`, `.crumbs`, `.meta`, `.answer#a-day`, `#area`, `#area-out`, `.prose` (`h2[id]`, `.table-wrap > .table`, `.steps`), `.useful`, `[data-useful]`, `[data-form="feedback"]`, `.related` | One article layout. Section IDs feed the "On this page" list and `#/article?at=<id>`. The answer panel holds the quick answer or a tiny tool (`DAYS` in the script). Duplicate the view, or fill it from data, for more articles. |
| Events | `.events-bar`, `[data-list="events"] > .ev[data-id][data-cat]`, `.date`, `.ev-meta`, `[data-remind]` | Rows sorted by date. Remind toggles are kept in this browser; real reminders need a backend. |
| Notes | `.lead-card`, `[data-chips="notes"]`, `[data-list="notes"] > .card[data-cat]` | The lead note stays put; the chips filter the cards below it. |
| Post | `.post-head`, `.byline`, `.avatar`, `.figure`, `.prose` (`table`, `blockquote`) | 700px column, a 21:9 picture with 28px corners, a quote set large with a blue rule. |
| About | `.figure`, `.band`, `.cols > .col`, `.steps.how`, `.how-cta`, `.letter#letter`, `[data-form="newsletter"]` | Intro, one wide picture, a pale band with three principles, how-it-works steps, then the newsletter card. |
| Contact | `.split`, `[data-form="contact"]`, `#c-topic`, `.side`, `.ways` | `#/contact?topic=edit` (or `question`, `event`) preselects the topic. |
| Sign-up (list your place) | `[data-form="signup"]`, `.pick` (radio chips in a fieldset), `#s-about` with `#s-about-count`, `#s-ref` | Free listing request with a reference number on success. Rename for "Join", "Register" or "Request a visit". |
| Legal | `.legal`, `.prose`, section IDs `privacy`, `terms` | `#/legal?at=terms` scrolls to a section. |
| Footer | `.foot`, `.foot-loc`, `.foot-row` | Place or organization line, then two groups of small links. |
| 404 | `[data-view="404"].nf`, `.big` | A large light "404", one line, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/places?cat=eat`, `#/places?q=bread`, `#/place?id=saltloaf`, `#/events?cat=family`, `#/contact?topic=edit`), and `?at=<id>` scrolls to an element inside the view.
- Plain `#id` links scroll inside the current view.
- The `titles` map sets the document title per view; the place view sets its own from the card. Detail views light up their parent tab (`place` → places, `article` → guide, `post` → notes). Update both maps when you add or rename views.
- Saved places, reminders and the theme live in the template's `store` wrapper under three keys. They stay in the visitor's browser; a site with accounts keeps them on the server instead.
- In a framework project, replace the router with real routes, render the lists from data, and keep the same URLs and query parameters where possible.
