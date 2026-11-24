# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">` inside `<main>`, reached by `#/name` links. Views that start with a full-bleed picture carry `data-overlay`, which keeps the header transparent at the top. In a framework project each view becomes a real route. The header and footer sit outside the views and stay on every page.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Documentary or video membership (the template) | home, browse, library, title, watch, plans, join, signin, help, about, privacy, 404 | poster wall hero with email start, arc, numbered posters, feature cards, FAQ, email start again |
| Online course platform | home, browse (as "My learning"), library (as the course catalog), title (as the course page with lessons), watch (as the lesson player), plans, join, signin, help, about, privacy, 404 | hero with email start, numbered posters as a learning path ("Start with these, in order"), feature cards (projects, certificates, mentors), FAQ |
| Independent film or documentary studio | home, library (as films), title (as the film page), watch (as trailers), about, help (as press and contact), privacy, 404 | hero wall of the studio's own films, numbered posters only with real data (otherwise a plain poster row), feature cards about screenings and rights, FAQ |
| Event or conference recordings | home, browse (by year and track), library (talks), title (as an event with its talks), watch, plans (as passes), join, help, privacy, 404 | hero with the next edition, rows by year or track, feature cards, FAQ |
| Single series or show | home, title (as the show page), watch, plans, join, help, privacy, 404 | hero with the show's art, numbered episodes as the poster row, feature cards, FAQ |

Header, footer, home and 404 always ship. A detail per title can be one view filled from data (the template) or one page per title in a real project; keep the same anatomy.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.brand`, `.menu-btn` (`#menu-btn`), `.nav`, `.menu` (`#menu`), `.head-end`, `.search` with `#search-btn` and `#q`, `#theme-toggle`, `#signin-btn` | Turns `.solid` after 24px of scroll or on views without `data-overlay`. Typing in `#q` opens the catalog filtered. Below 1100px the nav moves into the Browse menu. |
| Poster wall hero | `.hero`, `.wall` (30 `img`), `.hero-in`, `.display`, `.sub`, `.start[data-form="start"]`, `.start-row`, `.field` | One headline, one bold line, a prompt and the email start. The wall uses decorative copies of the artwork (`alt=""`). |
| Arc | `.arc` | Always directly after the hero. Decorative (`aria-hidden`). |
| Numbered posters | `.slider`, `.rail-btn.prev/.next`, `ol.rail#top10 > li.poster`, `.rank`, `a.art` with `img` and `.tt` | Ten posters at most. The browse page copies this list into its own row. |
| Feature cards | `.features`, `.feature`, `h3`, `p`, `.badge-ico` | Four cards; each has one line icon from the sprite in the red disc. |
| FAQ | `#faq .faq details`, `summary` with the plus icon, `.ans` | Six questions on home; grouped compact lists (`.faq.compact`) on the help view. Works without JavaScript. |
| Billboard | `.billboard`, `.bb-info`, `.kind`, `.bb-title.tt`, `.ink`, `.bb-blurb`, `.bb-actions` (`.btn.play`, `.btn.glass`), `.bb-rate` | The featured title. Its H1 is the title treatment. Play goes to the watch view, More info opens the detail dialog. |
| Rows | `#rows`, `template#row-tpl` (`.row`, `.row-head` with `.explore`, `.slider`, `.track`) | Built from `ROWS` in the script; each row copies cards from the catalog. Rows with no items hide. `#row-list` is My list. |
| Card (tile) | `article.card[data-id][data-kind][data-topics][data-year][data-by]`, `.art`, `a.cover` with `img` and `.tt`, `.info` (from `template#info-tpl`), `.prog`, `.card-meta` | The catalog grid is the source: every row, "More like this" and the detail read names, artwork, kind, topics and year from these cards. |
| Catalog | `#h-lib`, `#lib-topic`, `[data-kind-filter]`, `#lib-q`, `#lib-sort`, `[data-lib-count]`, `[data-lib]`, `[data-empty]`, `[data-clear]` | `#/library?kind=workshop&topic=food&q=salt&sort=az` preselects. `kind=list` shows My list. The H1 follows the kind. |
| Title detail | `#title-slot`, `.title-bg`, `article#detail.detail`, `.d-hero`, `.d-head`, `[data-d-name]`, `[data-d-play]`, `[data-list]`, `.d-meta` (`[data-d-new]`, `[data-d-year]`, `[data-d-count]`, `[data-d-rating]`), `[data-d-blurb]`, `.credits` (`[data-d-by]`, `[data-d-topics]`, `[data-d-format]`), `[data-d-eps]` with `#d-season` and `[data-d-list] .ep`, `[data-d-more]`, `[data-page]` | One block. `#/title?id=…` shows it as a page; any other link to `#/title?…` opens it in `dialog#preview` (links marked `data-page` always navigate). Films have no episode list. |
| Watch | `#stage`, `#w-art`, `#w-big`, `#w-range`, `#w-now`, `#w-total`, `#w-toggle`, `[data-w-seek]`, `#w-title`, `#w-sub`, `#w-next`, `#w-back` | `#/watch?id=…&s=1&e=2`. Saves progress for "Continue watching" and Resume. |
| Plans | `.plans`, `label.plan` with `--pa`/`--pb` and `input[name="plan-pick"]`, `.plan-top`, `.tickmark`, `dl`, `#plan-next` | Three plans at most. On phones only the chosen plan shows its rows. `#/plans?plan=studio` preselects. |
| Join | `[data-form="join"]`, `#j-email`, `#j-pass` with `[data-reveal]`, `fieldset.choices[data-group-required]`, `.check`, `[data-success="join"]` | `#/join?plan=studio&email=…` preselects; the email start forms send people here. |
| Sign in | `.auth`, `.auth-bg` (the wall is copied in by the script), `.auth-card`, `[data-form="signin"]`, `.split`, `[data-success="signin"]` | |
| Help | `.help-group` (`#billing`, `#watching`, `#account`), `#contact`, `[data-form="contact"]` with `#c-topic`, `[data-success="contact"]`, `.desks` | `#/help?topic=pitch&at=contact` preselects the topic and scrolls to the form. |
| About | `.art-top` with `img`, `.inner`, `.two .prose`, `.pillars .pillar .n`, the pitch desk | |
| Privacy | `.prose`, `#cookies`, `#terms` | `#/privacy?at=terms` scrolls to the terms. |
| 404 | `data-view="404"`, `.art-top.lost` | Any unknown route lands here. |
| Footer | `.site-footer`, `.foot-q`, `.foot-links` (16 underlined links), `.foot-base` | Dense on purpose: every link reaches a view or a section. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it, and `?at=<id>` scrolls to an element inside it. Plain `#id` links scroll inside the current view.
- The document title is the view's H1 followed by the site name (titles and the player use the title's name). Detail views light up their parent in the nav (title and watch → Browse, join → Plans).
- `TITLES` in the script holds what the detail needs per title id: rating, format, `isNew`, blurb, and `seasons` (arrays of `[title, minutes, description?]`) or a `runtime` in minutes for films. Kind, name, artwork, topics, year and credit come from the catalog card with the same `data-id`, so the single-file build keeps its embedded images.
- My list, progress and the theme live in the template's `store` wrapper under `ferrotype-list`, `ferrotype-progress` and `ferrotype-theme`; a real account replaces the first two.
- The watch view runs a simulated clock. With real video, put a `<video>` element in `#stage` in place of the image, call `play()` and `pause()` from `setPlaying`, and drive `watch.pos` from its `timeupdate` event.
- In a framework project, make each view a route (`/browse`, `/titles/[id]`, `/watch/[id]`), keep the detail as one component that renders both as a page and inside a dialog route, and keep the same query parameters for filters.
