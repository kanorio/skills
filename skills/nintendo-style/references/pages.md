# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Game studio or publisher (the template) | home, games, game, news, post, events, signup, about, support, contact, privacy, 404 | intro head, spotlight, featured, news grid, game cards with platform links, updates, events, newsletter, shortcut tiles |
| Toy or collectibles brand | home, games (as products, filtered by range or age), game (as product), news, post, events (as store events and drops), about, support, contact, privacy, 404 | spotlight with the new range, featured, product cards (the tab names the range or age), news grid, updates as drops and restocks, newsletter, tiles for parents, stockists and support |
| Entertainment brand or franchise (shows, characters, an app) | home, games (as titles or episodes), game (as title page), news, post, events, about, support, contact, privacy, 404 | spotlight, featured, news grid, title cards (the tab names where to watch or play), events, newsletter, tiles |
| Single game or app | home, game, news, post, signup, support, contact, privacy, 404 | spotlight with trailer stills, featured as feature cards, news grid, updates as patch notes, play-test or beta sign-up, tiles |
| Events, fairs or community programme | home, events, post, signup, about, support, contact, privacy, 404 | spotlight, events with date blocks first, news grid, updates, newsletter, tiles |

Header, footer, home and 404 always ship. A game or product page per title can be one view filled from data, or one view per title; keep the same anatomy.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.brand-mark`, `.nav`, `.header-actions`, `.saved-link`, `[data-saved-count]`, `#theme-toggle` | Brand tab flush left, four nav links with red icons, the saved button, the theme toggle and one small red button. Below 960px the header turns red and only the brand and the toggle stay. |
| Phone dock | `.dock`, `#menu-open`, `.dock-main` | Five destinations; the middle one is the main list (games, products or episodes). Hidden above 960px. `body` gets bottom padding so the dock never covers the footer. |
| Menu sheet | `<dialog class="sheet" id="menu">`, `.sheet-links`, `#menu-close` | Every page as a row with a red dot. Closes on a link, the close button, Escape or a click on the backdrop. |
| Section head | `.sec-head`, `.sec-label` | First child is the heading (H1 on page heads, H2 in sections); the label is short, uppercase and `aria-hidden` unless it is a link. |
| Spotlight | `.spotlight`, `#spot-track`, `.spot-slide`, `.spot-media`, `.spot-cap`, `.spot-title`, `.spot-sub`, `.spot-controls`, `#spot-pause`, `.spot-tile[data-slide]` | Three to five slides. Each slide: one picture link, a title, one line and one red button. Tiles reuse the slide pictures. Without JavaScript the track still scrolls sideways. |
| Featured | `.feature-row`, `.feature-card`, `.fc-body`, `.pill`, `.fc-cat` | Four cards on desktop, a sideways scroller below 960px. One pill per card. |
| News grid | `.news-grid`, `.news-card`, `.news-card.plain`, `.nc-title`, `.nc-meta`, `.chip`, `.dot` | Four or eight cards on home. Cards without a picture get `.plain`. Use `alt=""` on card pictures; the title says it all. |
| Lead story | `.news-lead` | One big picture and the lead story at the top of the news page. |
| Game cards | `.game-grid`, `.game-card[data-platform][data-id][data-date]`, `.plat-tab`, `.gc-link`, `.gc-body`, `.gc-title`, `.gc-date`, `.gc-price`, `.gc-foot`, `.gc-genre`, `.heart[data-save]` | Four on home, any number on the list. `data-platform` is a space-separated list matching the filter chips; `data-date` sorts. Unreleased titles show a pill instead of a price. |
| Platform links | `.plat-links` | Three big links under the game cards, one per platform or range. |
| Filters and sort | `.toolbar`, `.chips`, `[data-platform-filter]`, `#g-sort`, `[data-game-count]`, `[data-empty="games"]` | `#/games?platform=pc` preselects; `saved` shows the hearts. |
| Updates | `.updates`, `.chip`, `.u-text` | Three to six rows: date, category chip, one sentence, dot. |
| Events | `.month[data-month]`, `.event-list`, `.event-row[data-mode]`, `.ev-date` (`.ev-m`, `.ev-d`, `.ev-w`), `.ev-meta`, `[data-event-filter]`, `[data-empty="events"]` | Grouped by month. Each row links to a sign-up with `?event=` or to details. `#/events?mode=online` preselects. |
| Newsletter | `.letter`, `.letter-form`, `[data-form="newsletter"]`, `[data-success="newsletter"]` | One field, one button, a success card. |
| Notice box | `.notice` | A grey rounded box with a short title and one sentence with a red link. |
| Shortcut tiles | `.tiles-band`, `.tiles`, `.tile`, `.tile-icon` | Four links with a red icon tile, a small caption and a bold label. Last section of the home page. |
| Page head | `.page-head`, `.crumbs`, `.sec-head` with the H1, `.lead` | Top of every view except home and 404. |
| Game page | `.game-top`, `.gallery-main`, `#gallery-main`, `.thumbs button[data-src][data-alt]`, `.buy`, `.plat-row`, `.buy-facts`, `.editions`, `.edition`, `[data-price-now]`, `.save-btn[data-save]`, `.two-col`, `.facts`, `.features`, `.feature`, `#where-to-buy`, `.stores` | Gallery and buy box side by side, then overview with facts, three features and where to buy. Store rows link to the user's real store pages. |
| News list | `.news-lead`, `[data-news-filter]`, `[data-news-list] > [data-cat]`, `[data-more]`, `[data-empty="news"]` | Eight cards, then "Show more" adds four. `#/news?cat=events` preselects. |
| Article | `.article`, `.article-meta`, `.article-figure`, `.prose` (`h2`, `ul`, `blockquote`, `cite`) | Category pill, dotted date and byline, H1, lead, a 16:9 figure, prose with red-barred H2s and red bullet dots, two buttons at the end. |
| Play-test sign-up | `.form-grid`, `[data-form="signup"]`, `fieldset[data-group-required]`, `.checks`, `.check`, `.consent`, `.aside`, `.steps` | Form on the left, how it works on the right. `#/signup?event=workshop` preselects. |
| About | `.two-col`, `.values`, `.feature`, `.team`, `.person`, `.initials` | Story and studio picture, three values, people as initials. |
| Support | `.faq`, `.faq-search`, `#faq-q`, `.faq-group[data-faq-group]`, `details`, `[data-empty="faq"]` | Groups of questions with a live filter. `#/support?at=parents` scrolls to a group. |
| Contact | `.form-grid`, `[data-form="contact"]`, `#c-topic`, `.desks` | Form and desks. `#/contact?topic=press` preselects the desk. |
| Legal | `.legal`, `.prose` | Privacy and terms in one view; `#/privacy?at=terms` scrolls to the terms. |
| Footer | `.site-footer`, `.footer-band`, `.footer-brand`, `.footer-cols`, `.footer-base` | Red band with the brand, four link columns, the graphite base bar. |
| 404 | `data-view="404"`, `.notfound`, `.nf-mark`, `.display` | The floating mark, one display line, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/games?platform=pc`, `#/signup?event=gardenbot`), and `?at=<id>` scrolls to an element inside the view.
- Plain `#id` links (for example `#where-to-buy`) scroll inside the current view.
- The `titles` map in the script sets the document title per view; update it when you add or rename views. Detail views light up their parent in the nav (`game` → games, `post` → news).
- Saved games and the theme live in the template's `store` wrapper under two keys; a real account would replace the saved list.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
