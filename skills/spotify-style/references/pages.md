# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">` inside `<main>`, reached by `#/name` links. In a framework project each view becomes a real route. The library sidebar, the gradient band and the footer sit outside the views and stay on every page.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Podcast network or audio studio (the template) | home, library, show, episode, release, live, members, join, about, contact, legal, 404 | hero with the disc and "new episode" card, shortcut grid, new episodes rail, new release card, people rail, live dates (browse tiles live on the library view) |
| Single podcast | home, show (as the episode list), episode, live, members, join, about, contact, legal, 404 | hero with the latest episode, episodes rail, topic tiles, hosts rail, live tapings; the sidebar lists seasons or topics |
| Record label | home, library (as the catalog), release, live (as shows and tours), members (as a fan club or subscription), join, about, contact, legal, 404 | hero with the newest release, shortcut grid of releases, new release card with the first tracks, artists rail, browse tiles by genre, live dates |
| Independent artist or band | home, release (one per record), live, join (as the mailing list), about, contact, legal, 404 | hero with the newest record, release card, tracks rail, live dates, a color block for the mailing list |
| Streaming or audio-learning brand (courses, audiobooks, meditations) | home, library, show (as a series), episode (as a lesson), members (as plans), join, about, contact, legal, 404 | hero, shortcut grid, "continue" rail with progress bars, browse tiles by topic, series rail, membership color blocks |

Header, library sidebar, footer, home and 404 always ship. A show or release page per title can be one view filled from data, or one view per title; keep the same anatomy.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.brand`, `.brand-mark`, `.home-btn`, `.search` with `#q`, `.search-browse`, `.search-btn`, `.nav`, `.header-sep`, `#theme-toggle`, `.header-join`, `.menu-btn` (`#menu-open`) | Typing in `#q` opens the library and filters it. Below 960px the nav hides and the tab bar and menu appear; below 768px the search pill becomes `.search-btn`. |
| Shell | `.shell`, `.side`, `.side-inner`, `.panel`, `main#main` | Library panel at 1100px and wider; the main panel holds the views, the band and the footer. |
| Library sidebar | `.side-head`, `.side-title`, `[data-side]` chips, `.side-list li[data-kind]`, `.side-card` | Covers with title and "Kind · Person". The chips filter by `data-kind`. One prompt card at the end. |
| Home hero | `.home-top#home-top`, `.hero`, `.display`, `.lead`, `.actions`, `.hero-art`, `.disc`, `.np`, `[data-np-bar]` | One display headline, one paragraph, a green and an outlined pill. The disc is the newest artwork cut to a circle; the `.np` card plays it. |
| Shortcut grid | `.shortcuts`, `.shortcut[data-tint]`, `.card-link`, `.fab` | Six items, three columns (two on phones). `data-tint` recolors the home wash on hover. |
| Rail | `.sec`, `.sec-head`, `.h2`, `.all`, `.rail`, `.card`, `.cover`, `.fab[data-play]`, `.card-link`, `.card-link.two`, `.card.person` | Five or more cards. `.two` allows a two-line title (episodes). People use `.card.person` without a play button. |
| Browse tiles | `.tiles`, `.tile` with `style="--tint:…"` | Six tiles; each links to `#/library?topic=…`. The cover is decoration (`alt=""`). |
| Release card | `.release` with `--tint`, `.tracks`, `.track`, `.t-btn[data-play][data-track]`, `.t-main`, `.t-title`, `.t-dur` | Cover, kind and date line, H3 title as a link, meta, the first three tracks, Play and "Open the album". |
| Event rows | `.events`, `.event[data-type][data-event]`, `.date` (`span` month, `strong` day), `.pill`, `.pill.go`, `.btn.light.small` | Title, day, time and place, a status pill and one button to `#/join?event=…`. |
| Browse page | `.page-head`, `.lib-search` (`#lib-q`), `.tiles`, `.toolbar`, `[data-kind-filter]`, `#lib-sort`, `[data-lib-count]`, `[data-lib] > .card[data-kind][data-topics][data-date]`, `[data-empty="lib"]`, `[data-clear]` | `#/library?kind=podcast&topic=science` preselects. Keep `data-kind` and `data-topics` in step with the chips and tiles. |
| Tinted page top | `[data-view]` with `style="--tint:…"`, `.tinted`, `.page-top`, `.art`, `.eyebrow`, `.h1`, `.meta`, `.sep`, `.after-tint`, `.action-row` | Used by show, episode and release. The tint fades through `.after-tint` into the panel. |
| Show page | `[data-follow]` (with `data-on`, `data-off`), `[data-copy]`, `[data-ep-sort]`, `[data-eps] > .ep[data-key]`, `.ep.extra`, `[data-more-eps]`, `.box`, `.mini-form[data-form="newsletter"]` | Episode rows: cover, linked title, `.desc`, `.ep-foot` with `.play-sm`, date and length; `.left` with `--p` for a started episode. Extra rows hide until "Show more". |
| Episode page | `.player-card`, `[data-ep-seek]`, `[data-speed]`, `[data-ep-range]`, `[data-ep-now]`, `.chapters [data-chapter]`, `.prose`, `details.transcript`, `.ep.mini` | Chapter buttons hold their start in seconds. The card follows the same player state as the bar. |
| Release page | `#wft-tracks`, `.tracks-head`, `#buy`, `.desks` | Ten tracks with artist lines, release and rights line, "Own it" with prices and real order links, credits, a rail of more releases. |
| Live page | `[data-live-filter]`, `[data-months] > .month + .events` | Grouped by month; empty months hide. `#/live?type=online` preselects. |
| Members page | `.perks`, `#plans`, `.billing [data-billing]`, `.plans`, `.plan` with `--plan`, `.plan-top`, `[data-price][data-month][data-year]`, `.blocks`, `.block` with `--block`, `.stack`, `#faq .faq details` | Three plans at most. The band is hidden on this view and on join. |
| Join | `[data-rsvp]`, `[data-form="join"]`, `.choices .choice` (radio `name="plan"`), `fieldset[data-group-required]`, `.checks .check`, `.consent`, `[data-success="join"]`, `.steps` | `#/join?plan=member&event=chorus-live` preselects the plan and shows the note. |
| Contact | `[data-form="contact"]`, `#c-topic`, `[data-success="contact"]`, `.desks` | `#/contact?topic=press` preselects the topic. |
| About | `.wide-art`, `.two`, `.prose`, `.box .desks`, `.values .value` with `--tint`, `#people .grid .card.person` | `#/about?at=people` scrolls to the people. |
| Legal | `.legal`, `#privacy`, `#terms` | `#/legal?at=terms` scrolls to the terms. |
| 404 | `data-view="404"`, `.notfound` | A large grey "404", one heavy line, one sentence, two pills. |
| Band and footer | `.promo`, `.site-footer`, `.foot-cols`, `.socials`, `.foot-base` | The band links to membership. Social buttons only for services the user really uses. |
| Player, tab bar, sheet, toast | `#player` (`#pl-cover`, `#pl-title`, `#pl-sub`, `#pl-toggle`, `[data-seek]`, `#pl-range`, `#pl-now`, `#pl-total`, `#pl-close`), `.tabbar`, `dialog.sheet#menu`, `#toast` | The player stays hidden until something plays. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/library?kind=record`, `#/join?plan=member`), and `?at=<id>` scrolls to an element inside the view. Plain `#id` links (`#plans`, `#buy`) scroll inside the current view.
- The document title is the view's H1 followed by the site name (the home page keeps the `<title>` in the head). Detail views light up their parent in the nav (`show`, `episode`, `release` → Browse; `join` → Members).
- The theme and followed or saved items live in the template's `store` wrapper under `driftwire-theme` and `driftwire-follows`; a real account replaces the follows.
- Playback: every `[data-play]` names an entry in the `media` map in the script (title, subtitle, cover file name, length in seconds); album track buttons add `data-track` and read their title and length from the track list. The clock is simulated. With real audio, add one `<audio preload="none">`, set its `src` in `load()`, and drive `state.position` from its `timeupdate` event instead of the interval.
- In a framework project, replace the router with real routes and keep the same URLs where possible; the player becomes one component mounted once in the layout so it survives navigation.
