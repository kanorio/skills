# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Video creator or channel (the template) | home, videos, watch, clips, courses, course, live, join, about, contact, legal, 404 | channel header and tabs, featured video, latest videos shelf, clips row, courses shelf, upcoming live, newsletter |
| Online courses or a teaching creator | home, courses, course, watch (as a free lesson), videos (as free lessons), join (as enrolment), about, contact, legal, 404 | channel header, featured lesson, courses shelf first, latest free lessons, clips, newsletter |
| Video series, podcast with video or documentary brand | home, videos (as episodes, chips as seasons), watch, live (as premieres and screenings), about, contact, legal, 404 | channel header, featured episode, latest episodes, a shelf per season, upcoming premieres, newsletter |
| Brand or studio video library (product tutorials, a company channel) | home, videos, watch, courses (as guides and playlists), about, contact, legal, 404 | channel header with the brand banner, featured video, latest, a shelf per product or topic, playlists |
| Live streams and events | home, live, watch (as replays), join, about, contact, legal, 404 | channel header, upcoming live first, replays shelf, clips, membership tiers |

The top bar, sidebar, footer, home and 404 always ship. A watch page per video can be one view filled from the card data (as here), or one route per video in a framework; keep the same anatomy.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Top bar | `.topbar#topbar`, `.tb-start`, `#menu-btn`, `.brand`, `.brand-mark`, `.search#search`, `#q`, `#search-go`, `.tb-end`, `#search-open`, `#theme-toggle`, `.pill.outline` | Menu, mark and wordmark; the pill search with its grey button segment; theme toggle and one outlined pill. Below 657px the search collapses to an icon that opens it across the bar. |
| Sidebar | `.sidebar#sidebar`, `.drawer-top`, `.side-nav`, `.side-more`, `.side-title`, `.side-foot`, `#scrim`, `html[data-nav="full|rail|drawer"]` | Five main destinations first (they are the rail), then groups in `.side-more`. The script sets `data-nav`; the watch page and phones use the drawer. |
| Page frame | `.page`, `.page-head`, `.lead` | `.page` is the content column and the container for every container query. |
| Channel header | `.channel`, `.banner`, `.ch-head`, `.ch-avatar`, `.ch-id`, `.ch-name`, `.ch-meta`, `.ch-more`, `.ch-desc`, `.ch-links`, `.ch-actions`, `.tabs` | Banner 6.15:1 (4:1 on phones), round avatar, the name as the home page's H1, the stats line, one line of description, a link line, Subscribe and Join, then tabs linking to the views. |
| Featured video | `.feature`, `.thumb`, `.play-badge`, `.eyebrow`, `.feature-title`, `.desc-text` | One video with a round play badge, an eyebrow ("Start here"), the title, stats, two lines and an ink "Watch now". |
| Shelf | `.shelf`, `.shelf-head`, `.see-all`, `.shelf-sub` | Title, optional "Play all", blue "View all" at the right. Shelves are divided by hairlines. |
| Video grid | `.grid`, `.grid.one-row`, `.grid.rows-sm` | `--cols` 1 to 4 by container width. `.one-row` hides what does not fit one row; `.rows-sm` turns cards into compact rows on phones. |
| Video card | `.vc[data-id][data-topic][data-views][data-date][data-desc]`, `.thumb`, `.dur`, `.watched` (`--w`), `.vc-body`, `.vc-title`, `.meta`, `.badge` | The library (`[data-video-list]`) is the data source for the watch page, search and "Up next". The script adds the three-dot `.kebab` to every card. |
| Card menu | `#card-menu`, `[data-pop="save" or "share"]` | Opens under the three dots: Save to Watch later, Copy link. |
| Clips | `.clip-grid[data-clips]`, `.clip`, `.clip-media`, `.clip-title`, `.clip-row`, `.scroller`, `.scroll-wrap[data-scroller]`, `.arrow.prev`, `.arrow.next` | 9:16 tiles; on home a sideways scroller with arrow buttons that hide at either end. Each clip links to its full video. |
| Cloned shelves | `[data-clone="<selector>"]` | Home shelves copy items from the library, clips, courses and live views when the script starts, so each item is written once. Without JavaScript every view is visible, so nothing is lost. |
| Library toolbar | `.toolbar`, `[data-topic-filter]`, `[data-sort]`, `[data-search-note]`, `[data-clear-search]`, `[data-more]`, `[data-empty="videos"]`, `[data-video-count]`, `[data-videos-h]` | Topic chips (including `saved` for Watch later), Latest, Popular and Oldest, search results from `?q=`, "Show more" after 12. |
| Player | `.player-band`, `.player#player[data-duration]`, `video`, `.poster`, `.big-play`, `.captions`, `.controls`, `.scrub`, `.gaps`, `.ctl[data-act="play|mute|cc|theater"]`, `[data-now]`, `[data-total]`, `[data-chapter-label]` | With a `<source>` inside the `<video>`, the controls drive the real file; without one, a silent demo clock runs over the poster. Keys: K or Space, J and L, M, C, T. |
| Watch details | `.watch#watch`, `.watch.theater`, `.watch-info`, `.watch-title[data-w-title]`, `.watch-bar`, `.owner`, `.actions`, `.seg`, `[data-like]`, `[data-dislike]`, `[data-share]`, `[data-save-current]`, `.desc#desc`, `.desc-more`, `.desc-toggle`, `[data-chapters-for]`, `.chapters button[data-t][data-cap]` | Title, owner row with Subscribe, action pills, the description box that expands to show more text, chapters (each with a caption line) and links. |
| Comments | `.comments`, `#c-sort`, `.comment-form[data-form="comment"]`, `.comment-list`, `.comment[data-likes][data-order]`, `[data-pinned]`, `.owner-tag`, `.initials` (`--h` hue) | The pinned comment stays first. The form adds a comment on this device only. |
| Up next | `.watch-side`, `#autoplay`, `.upnext[data-upnext]`, `.row`, `.row.is-next` | Built from the library cards; autoplay goes to the first row when a video ends. |
| Courses and playlists | `.course-grid[data-course-list]`, `.course-card`, `.cc-title`, `.cc-price`, `.thumb-count`, `.grid` of `.pl`, `.thumb.stack` | Course cards with lessons, length and price or a waitlist badge; playlists link to the library filtered by topic. |
| Course page | `.course-page`, `.course-panel` (`--tint`), `.cp-cover`, `.cp-title`, `.cp-price`, `.cp-actions`, `.course-main`, `.lessons`, `a.lesson`, `.lesson.locked`, `.checks`, `.faq` | Tinted panel at the left (sticky on desktop), numbered lessons with free previews linked and the rest locked, what you will make, questions. |
| Live | `[data-live-filter]`, `.live-list[data-live-list]`, `.live-row[data-kind]`, `.lr-title`, `.lr-when`, `.lr-text`, `[data-notify]`, `[data-empty="live"]` | Rows with a kind badge, date and time with `<time datetime>`, and a reminder toggle. |
| Membership | `.billing [data-billing]`, `.tiers`, `.tier`, `.tier.pick`, `.price [data-price][data-month][data-year]`, `[data-per]` | Monthly and yearly prices swap in place; each tier links to the form with `?plan=`. |
| Forms | `form[data-form="signup" or "contact" or "newsletter"]`, `.form-row`, `.field`, `.err`, `fieldset[data-group-required]`, `.choices`, `.choice`, `.consent`, `.success[data-success]`, `.aside`, `.steps`, `.desks` | Errors float under fields; success cards replace the form. `#/join?plan=knife` and `#/contact?topic=press` preselect. |
| About | `.two-col`, `.prose`, `.team`, `.facts`, `.links` | Story, people as initials, channel details and links. |
| Footer | `.site-foot` | One row of links and a copyright line, under the content column. |
| 404 | `data-view="404"`, `.notfound`, `.nf-art`, `.display` | Empty plate, one display line, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/watch?v=curry`, `#/videos?topic=bread&sort=popular`, `#/videos?q=noodles`), and `?at=<id>` scrolls to an element inside the view.
- Plain `#id` links scroll inside the current view.
- The `titles` map in the script sets the document title per view; the watch page uses the video's title. Detail views light up their parent in the sidebar (`watch` → videos, `course` → courses).
- Theme, subscription, Watch later, reminders, autoplay and theater mode live in the template's `store` wrapper; a real account would replace them.
- In a framework project, replace the router with real routes (`/watch/[id]`, `/videos?topic=`) and keep the same URLs where possible.
