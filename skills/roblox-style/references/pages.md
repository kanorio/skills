# Pages and sections

Every view in `assets/template.html` is an element with `data-view="name"` inside `<main>`, reached by `#/name` links (`#/project?id=sky-orchard`, `#/showcase?genre=puzzle`). Once JavaScript runs, only the active view shows; without it every view shows one after another. In a framework project each view becomes a real route. The header and footer sit outside the views and stay on every page.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Youth club or after-school activity (the template) | home, showcase, project, events, parents, news, post, about, contact, login, legal, 404 | wall with the booking card and badges, two shelves, coming up, at a glance, parent band |
| Independent game studio | home, showcase (as "Games"), project (as the game page with Play, updates and credits), news (as devlog), post, events (as conventions and launches), about (as studio and team), contact (press kit desks), legal, 404 | wall of the studio's own game art with a newsletter or wishlist card, a "Our games" shelf, a "Coming soon" shelf, events, at a glance (platforms, players, languages), press band |
| Online community or club for adults | home, showcase (as members' work or groups), project (as a group or work page), events, parents (as "How it works" or code of conduct), news, about, contact, login, legal, 404 | wall with a join card (name, email, interests as segments), shelves of groups or work, events, at a glance, a band about the rules |
| Creator collective or school showcase | home, showcase, project, events (as exhibitions and crits), news, about (as tutors), contact, legal, 404 | wall with an enquiry card, shelves by year or course, events, at a glance (intake, length, places), band for applicants |
| Camp, workshop series or kids' activities | home, events (as sessions with a date chip and Save a spot), parents (as safety and FAQ), showcase (as last season's work), about, contact, legal, 404 | wall with the booking card, coming up, at a glance (ages, group size, times, price), parent band, one shelf |

Header, footer, home and 404 always ship. A detail page per project can be one view filled from data (the template) or one route per project in a real project; keep the same anatomy.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.bar`, `.bar-in`, `.brand` (the mark from `#i-mark` and the name), `.nav` (four links), `form.search[data-search]`, `.bar-end` with `.search-link`, `#theme-toggle`, Log in (`.btn-line`), Join (`.btn-blue`) | Sticky. Typing in the search and pressing Enter opens `#/showcase?q=…`. Under 1180px the field becomes `.search-link`; under 940px the name hides; on phones `.nav` drops to a second row. Five links at most. |
| Wall | `.hero`, `.wall` (`.wall-grid` with 12 `img`, filled to 63 by the script; six `i.sq` with `--x`, `--y`, `--s`, `--r` and optional `.blue`), `.hero-in`, `.hero-title` (the H1), `.hero-sub` | Decorative copies of the project art (`alt=""`, `aria-hidden` on `.wall`). The log-in view gets a copy of the whole wall from the script. |
| Card | `.card#join`, `form[data-form="signup"]`, `.card-title`, `fieldset.field[data-group]` with `.trio` (three `select`) or `.seg` (radio labels), `.field` with `label`, `.input`, `.err`, `.fine`, `button.go`, `[data-success="signup"]` with `[data-echo]` and `[data-reset]` | `#/?at=join` scrolls here and focuses the first field. The button is grey until every field is valid, then gets `.ready`. Four fields at most. |
| Badges | `.ways`, `.caps`, `ul.badges > li` with an icon, `small` and `b` | Two to four badges. Use them for ways to take part, platforms, places or times; never for store logos you do not own. |
| Shelf | `template#shelf-tpl` (`.shelf`, `.head`, `h2 > span`, `.info` with `.tip`, `.see-all`, `.track`, `.arrow.prev/.next`, `.row`) | Built by `makeShelf(title, tip, ids, href)` from tiles in the showcase grid. `SHELVES` in the script names each shelf; a tile joins a shelf through `data-shelves`. Five or more tiles per shelf, or use a grid. |
| Tile | `article.tile[data-id][data-genre][data-likes][data-plays][data-maker][data-shelves]`, `a` with `img` and `h3`, `p.stats` | The showcase grid (`#grid`) is the source: shelves, the wall, the project page and posts read titles and art from these tiles. |
| Showcase | `.page-title`, `.filters#find` with `select.pill.ink#f-genre`, `select.pill#f-sort`, `label.find` with `#f-q`, `#shelves`, `#results` with `#count`, `#grid`, `#empty` | No filter: shelves. Any filter or `?shelf=`: the grid, sorted and counted. `#/showcase?genre=puzzle&sort=plays&q=fox&shelf=jam` preselects. |
| Project | `.proj-top`, `.media` with `#p-img` and `#stage`, `.side` with `#p-title`, `.by` (`#p-by`, the `#i-seal` icon, `#p-team`), `#p-age`, `button.play#play`, `.votes` (`#fav`, `[data-vote="up"]`, `.ratio #p-ratio`, `[data-vote="down"]`), `.tabs` (`role="tab"`), panels `#t-about` (`#p-desc`, `.age`, `dl.strip#p-strip`), `#t-updates` (`#p-log`), `#t-credits` (`#p-credits`), `#more` | Filled from `PROJECTS` plus the tile. The static markup is the first project (the no-JavaScript fallback). Favorites and votes are kept on this device. |
| Events | `.chips#ev-filter` (`.chip[data-kind]`), `.events#event-list`, `article.event[data-kind][data-id]` with `figure` (`img`, `.date`), `.event-body` (`h3`, `p`, a blue `.btn` link or an ink `button[data-remind]`), `#ev-empty` | The home page copies the first three into `#home-events`. Reminders are kept on this device. |
| At a glance | `dl.strip` | Four to six facts; label over value. |
| Band | `.band`, `h2`, `p`, `.actions`, `.stack` (three `img`) | One per page at most. |
| Parents | `.cards` of `.box` with `.tilt` icons, `.faq details` | Three boxes; six questions. Works without JavaScript. |
| News | `.posts`, `article.post-card` with `img`, `.meta` (`.tag`, `time`), `h2`, `p` | Three columns, two on tablets, one on phones. |
| Post | `.article`, `#post-title`, `#post-tag`, `#post-date`, `#post-img`, `.prose#post-body` | The first post is the static article; `POSTS` holds the others. In a real project, one page per post. |
| About | `.statement` with `em` for the blue words, `.steps` (numbered automatically), `.people` with `.avatar` (`--c` sets its color) | Initials, not photos, unless the user supplies photos they have the rights to. |
| Contact | `.split`, `.panel-box` with `form[data-form="contact"]` (`.two` puts two fields side by side), `[data-success="contact"]`, `dl.desks` | `#/contact?topic=parents` preselects the topic. |
| Log in | `[data-view="login"] .hero`, `.card`, `form[data-form="login"]`, `.pw` with `[data-reveal]`, `[data-success="login"]` | Front-end only. |
| Legal | `.article`, `.prose`, `#rules` | `#/legal?at=rules` scrolls to the rules. |
| 404 | `.lost`, `.num`, two `i.sq`, `.page-title`, `.actions` | Unknown routes land here. |
| Footer | `.foot`, `nav`, `.foot-base` | Centered links, then a hairline and one line of legal text. |

## Data

- **Tiles** in `#grid` hold what every list needs. Add a project by adding one tile (art, title, genre, likes, plays, maker, shelves) and one `PROJECTS` entry (team, age, favorites, made in, updated, alt text, description, log, credits) with the same id.
- **`SHELVES`** maps a key to a title and the info tip. **`GENRES`** maps filter values to labels. Keep the `#f-genre` options in step.
- **`POSTS`** holds every post but the first, with the art id to borrow.
- Images are read from the tiles (`artOf(id)`), never assembled from file names in code, so `scripts/inline.mjs` can embed each one once.

## Real interactions

- **Play.** The template's stage shows a loading bar, then a running clock. For a real game, replace the stage contents with the build: an `<iframe>` of a hosted web build, or a `<canvas>` the game draws into, inside `.media`. Keep the big blue button as the only way to start it.
- **Votes, favorites, reminders, log in.** Front-end only in the template (kept in this browser). Real accounts, shared vote counts and reminder emails need a backend.
- **Forms.** The template shows a success state and sends nothing. Wire each form to a real endpoint before launch, and keep the click handler on the submit button.
