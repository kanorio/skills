# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">` inside `<main>`, reached by `#/name` links. The header and footer sit outside the views and stay on every page. In a framework project each view becomes a real route and each repeated card a component.

## Recipes by kind of site

Pick the closest recipe, keep the section order and drop what the brief cannot fill. The cast (`heroes`) is the heart of this style: whatever the site, find the people, characters or teams that can stand in the frames.

| Site | Views | Home sections, in order |
|---|---|---|
| Board game or tabletop game (the template) | home, heroes, hero, news, post, rules, editions, events, join, support, about, legal, 404 | scene hero with logotype, latest news on lattice, choose your hero (ring), expansion band (diamond), ways to play, finale scene |
| Indie video game | home, heroes (characters), hero, news, post, rules (as patch notes), editions (as store editions or platforms), join (wishlist or beta sign-up), support, about, legal, 404 | scene hero with a trailer button, news, characters, the update or season band, game modes, finale with the wishlist |
| Tabletop or role-playing club, guild, larp group | home, heroes (as members or player characters), hero, news (session reports), post, events (sessions), join (as membership request), support (as FAQ and code of conduct), about, legal, 404 | scene hero, next session strip from events, the cast, the current campaign band, ways to take part, finale with the join form |
| Fantasy novel or comic series | home, heroes (as characters), hero, news (as the author's updates), post, editions (as books and formats), events (signings), join (newsletter), about (the author), legal, 404 | scene hero with the series name, latest updates, the cast, the new book band, reading order as "ways to play", finale with the newsletter |
| Esports or competitive team | home, heroes (as the roster with roles), hero (player profile), news, post, events (matches), editions (as merchandise or memberships), join (fan club), support, about, legal, 404 | scene hero, latest results, the roster by role, the season band, the schedule, finale |
| Themed event or festival | home, heroes (as guests or performers), hero, news, post, events (programme), editions (as tickets), join, support, about, legal, 404 | scene hero with dates, news, the line-up, the venue band, ticket types as ways to play, finale |

Header, footer, home and 404 always ship. A detail per hero and per post is one view filled from data in the template; in a project, one page per item with the same anatomy.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.bar`, `.brand` with `.wordmark`, `.nav`, `.head-end`, `#theme-toggle`, `.btn.arcane.sm`, `#menu-btn`, `#menu` | Six links at most. Below 1180px the links move into the menu, which opens in the flow under the bar. The current section gets `aria-current` and a gold bar. |
| Home hero | `.scene.hero.sc-vale`, `.mist`, `.embers`, `h1` with `.kick`, `.logotype`, `.tagline`, `.btn.framed` | The H1 is the whole stack: kicker, name, tagline. One framed button. |
| News strip | `.strip.stone.lattice`, `#home-news`, `#news-rule`, `[data-strip]` | Filled with copies of the first three news cards. Below 900px it scrolls sideways with a progress rule and arrows. Hidden without JavaScript (the news view still shows). |
| Choose your hero | `#choose.stone` with `svg.crest`, `.duo`, `.classes .cls[data-cls]`, `#cls-rule`, `[data-cls-step]`, `figure#pick` with `.ring-stage`, `svg.ring`, `#pick-img`, `#pick-name`, `#pick-title`, `#pick-link` | Each class button shows the first hero of that class from the roster. Five classes at most; with fewer, the rule's segment widens (`--w`). |
| Feature band | `.scene.flip.band` (picture on the left) or `.scene.band`, `.diamond-stage` with `.figure`, `.duo`, `.lead`, `.btns` | One hero or object in the double diamond; one or two buttons. |
| Ways to play | `#play.deep`, `.modes .mode[data-mode]`, `#mode-show`, `.disc`, `#mode-img`, `#mode-name`, `#mode-text` | Two to four modes. `MODES` in the script holds names, texts and alt text; pictures come from the buttons. |
| Finale | `.scene.finale` | A kicker pair, one sentence and one framed button. |
| Banner | `.banner` with `svg.crest`, `.duo` or `.big` | Starts every inner view except hero, join, about and 404, which start with a scene. |
| Roster | `.filters`, `[data-chips="roster"]`, `#roster-q`, `#roster-sort`, `#roster-count`, `ul#roster > li.hcard[data-id][data-cls][data-diff]` with `style="--hue:…"`, `[data-empty="roster"]`, `[data-clear]` | The roster is the source of truth: name, class, difficulty, art and hue come from these cards. `#/heroes?class=warden` preselects. Four columns, three below 1024px, two below 720px. |
| Hero detail | `#hd.scene.hd`, `[data-h="name|cls|title|level|lore|pips"]`, `#hd-img`, `.abilities .ab[data-ab]`, `#ab-items .ab-item`, `#pairs` | `#/hero?h=id`. `HEROES[id]` holds title, lore and four `[name, text]` abilities; the scene follows the class (`SCENES`). The static markup is the first hero, so it reads without JavaScript. |
| News | `[data-chips="news"]`, `#news-count`, `ul#news-list > li.ncard[data-id][data-topic]` | `#/news?topic=rules` preselects. Six cards in the template. |
| Article | `[data-p="title|topic|date|by|body"]`, `#post-img`, `.prose`, `.post-foot`, `#read-next` | `#/post?p=id`. Title, topic, date and picture come from the news card; `POSTS[id]` holds the byline and the body (`"## "` starts a subheading). |
| Rules updates | `[data-chips="rules"]`, `#rules-jump`, `article.patch#v13` with `.patch-side` and `ul.changes > li.change[data-tag]`, `.gbox`, `.ch-head`, `.tag` | Newest first. Tags are `new`, `changed`, `clarified`; strike the old value with `<s>`. A version with nothing left after filtering hides. |
| Editions | `.editions > article.ed`, `.ed.featured` with `.flag`, `.box.sc-*`, `.price`, `.stats` | One to three cards. Buttons go to `#/join?edition=id`, which preselects the radio. |
| Events | `[data-chips="events"]`, `#event-count`, `ul#events > li.ev[data-kind]`, `.ev-date`, `[data-seat]`, `#seat`, `[data-form="seat"]`, `#s-event`, `[data-step]`, `#s-seats` | The form's options are built from the event cards. "Save a seat" picks the date and scrolls to the form. |
| Join | `.scene.sc-gate.band`, `.ticks`, `[data-form="join"]`, `.choices .choice`, `[data-success="join"]` | The pre-order or newsletter sign-up. Consent is a required checkbox. |
| Support | `#faq-q`, `.faq-group` (`#rules-help`, `#orders`, `#pieces`), `details.qa`, `.aside-card`, `#contact`, `[data-form="contact"]`, `#c-msg-count` | `#/support?at=contact` scrolls to the form. |
| About | `.scene.sc-thorn.band`, `.cols`, `.timeline`, `.team`, `.values` | People are names and roles in text; no portraits unless supplied. |
| Legal | `.legal-text` with `#privacy`, `#cookies`, `#terms` | `#/legal?at=terms` scrolls. |
| 404 | `data-view="404"`, `.scene.lost` | Any unknown route lands here. |
| Footer | `.site-footer`, `.foot-bar`, `.foot-base`, `.socials`, `.fine`, `.foot-links`, `.spec` | The spec tile holds facts about the product (age, players, length); replace or delete it. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it, and `?at=<id>` scrolls to an element inside it. Plain `#id` links scroll inside the current view.
- The document title is the view's title followed by the site name; hero and article titles use the item's name. Hero detail lights up Heroes in the nav, articles light up News.
- The theme lives in the template's `store` wrapper under `gloamreach-theme`; rename the key with the brand.
- Forms validate on the submit button's click (Enter clicks it), show errors under each field and then a success box. Nothing is sent: connect a real endpoint in a deployed site.
- In a framework project: `/heroes`, `/heroes/[id]`, `/news`, `/news/[slug]`, `/rules`, `/editions`, `/events`, `/join`, `/support`, `/about`, `/legal`; keep the same query parameters for filters, and render the hero cards, news cards and event rows from typed data.
