# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop what the brief cannot fill. The rail, home (the feed), Explore, the video page and the 404 always ship.

| Site | Views | Notes |
|---|---|---|
| Creator or studio portfolio of short videos (the template) | home, explore, video, creator, course, live, collab, about, legal, 404 | The feed shows every video; categories are the creator's topics; the creator page exists once per person on the team. A solo creator drops "Our creators" and the Following tab, and the creator page becomes the about page. |
| Brand showing products in short videos | home, explore, video, creator (as product lines or presenters), collab (as stockists or press), about, legal, 404 | Categories become product lines; the caption ends with the product name; the sound line can name the product ("Featured: Linen tote"). Link to the user's real shop from the video page; this template has no checkout. |
| Short-video course | home (free lessons), explore (all lessons by module), video (lesson player), course (one or several), creator (the teacher), collab (as questions), about, legal, 404 | Lessons are videos; chips are modules; the course view sells access with the enroll form. Locked lessons show a lock and link to the form. |
| Event, festival or venue | home (highlights), explore (chips by day, stage or kind), video, live (as the schedule), creator (as performers or hosts), collab (as tickets or bookings enquiry), about (venue and access), legal, 404 | Live rows carry real dates with `<time datetime>`; reminders become "Notify me". |
| Restaurant or café clip wall | home (dishes being made), explore (chips by menu section), video, live (as tastings or classes), collab (as private dining or catering), about (hours, address), legal, 404 | Keep prices out of captions unless the user gives them; put hours and the address on about and in the rail links. |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Rail | `.rail#rail`, `.rail-head`, `.brand`, `.brand-mark`, `.tools`, `.search-link`, `#theme-toggle`, `#menu-btn`, `.rail-body#rail-body`, `.search#rail-search`, `#rail-q`, `.nav`, `.lbl`, `.rail-cta`, `.rail-title`, `.people`, `.rail-foot` | Full (1100px and up), icon rail (720 to 1099), top bar with a drop-down sheet (below 720). Up to seven nav rows; the current one gets `aria-current="page"`. Typing in the rail search filters Explore live; pressing Enter elsewhere goes to Explore with `?q=`. |
| Feed | `[data-view="home"]`, `.feed-wrap`, `.feed-tabs`, `[data-feed-tab]`, `.feed#feed`, `.feed-empty[data-feed-empty]`, `[data-suggest]` | The first `.post` is written in the HTML (so the first screen works without JavaScript) and is the template the script clones for every video. |
| Post | `.post.player[data-id]`, `.frame`, `.poster`, `.hit`, `.sticker`, `.state`, `.cap`, `.cap-by`, `.cap-date`, `.cap-text`, `.sound`, `.marquee`, `.bar`, `.actions`, `.act-av`, `.follow-plus`, `.act`, `.act-ico`, `[data-like]`, `[data-save]`, `[data-share]`, `.disc`, `.post-nav`, `[data-step]` | Fields with `data-f="…"` are filled from the video; links with `data-href` use `{id}` and `{u}`. |
| Explore | `.page-head`, `.explore-search`, `#explore-q`, `.scroll-wrap[data-scroller]`, `.chips`, `.chip[data-cat]`, `.arrow`, `.results[data-results]`, `[data-clear]`, `.grid[data-grid]`, `[data-empty="explore"]` | One chip per category plus All and Saved; `?cat=` and `?q=` restore the state. |
| Video data (`.tile`) | `.tile[data-id][data-cat][data-u][data-date][data-dur][data-likes][data-comments][data-saves][data-shares][data-views][data-steps][data-sound][data-src]`, `.tile-media`, `img[alt]`, `.tile-cap` | The single source for every video. The image `alt` is the title; `data-steps` (separated by `|`) are the sticker lines; `data-sound` defaults to "original sound - <name>"; `data-src` (optional) is a real video file. The script adds `.tile-n` and `.tile-by` and turns `#words` into hashtag links. |
| Video page | `.watch.player`, `.stage`, `.stage-bg`, `.stage-close[data-back]`, `.stage-nav`, `.side`, `.side-scroll`, `.by-card`, `.by-row`, `.by-u`, `.by-meta`, `.v-title`, `.v-cap`, `.v-acts`, `.copy-row#link-field`, `.tabs[data-tabs="video"]`, `#comments`, `[data-comment-list]`, `#more`, `[data-more]`, `.comment-form[data-form="comment"]` | Filled from the tile in `?v=`. The close button returns to the last page you were on; up and down step through Explore's order. |
| Comments | `COMMENTS` in the script, `.cmt`, `.cmt-name`, `.cmt-text`, `.cmt-meta`, `[data-reply]`, `.cmt-like[data-clike]` | Sample comments per video id; comments typed here are kept on this device only. |
| Creator page | `.prof`, `[data-p="av|u|name|following|followers|likes|bio|collab"]`, `.prof-actions`, `[data-share-profile]`, `.prof-stats`, `.prof-bio`, `.prof-link`, `.prof-bar`, `.tabs[data-tabs="prof"]`, `.seg [data-sort]`, `.grid.compact[data-prof-grid]`, `[data-prof-empty]` | Filled from `.member[data-u]` in About. Liked lists the creator's `data-picks`. `?tab=liked` opens that tab. |
| Course | `.course-hero`, `.cover`, `.meta-row`, `.price`, `.btn-row`, `.split`, `.eps`, `.ep`, `.ep-tile` (`--h`), `.checks`, `.card#enroll`, `form[data-form="signup"]` | Free lessons are links to video pages; locked ones are not links. `?plan=pass` preselects the plan. |
| Live | `.live-list`, `.live-row`, `.date-tile`, `.live-title`, `.live-meta`, `[data-remind]` | Each reminder is remembered on this device. |
| Collab | `.two-col`, `.formats`, `.format`, `.card`, `form[data-form="contact"]`, `#k-with` | `?with=<handle>` preselects the creator. |
| About | `.team`, `.member[data-u][data-name][data-h][data-ini][data-following][data-followers][data-likes][data-picks][data-link][data-label]`, `.m-u`, `.m-role`, `.m-bio`, `.steps`, `.faq` | The member cards are the data for creator pages, the Following suggestions and avatars everywhere. |
| Forms | `.form`, `.form-row`, `.field`, `.err`, `fieldset[data-group-required]`, `.choices`, `.choice`, `.consent`, `.success[data-success]`, `.ok` | Errors float under fields; success cards replace the form. |
| Footer | `.site-foot` | Shown below 1100px (the rail carries the same links on desktop), hidden on the feed and the video page. |
| 404 | `[data-view="404"]`, `.nf`, `.nf-frame`, `.display` | An empty dashed 9:16 frame, one display line, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/video?v=lino`, `#/explore?cat=plants&q=jar`, `#/creator?u=wren.grows&tab=liked`, `#/?feed=following`), and `?at=<id>` scrolls to an element inside the view.
- Plain `#id` links scroll inside the current view (`#enroll`, `#comments`).
- The `titles` map in the script sets the document title per view; the video and creator pages use their own titles.
- Theme, likes, saves, follows, reminders and your comments live in the template's `store` wrapper (`localStorage` with an in-memory fallback); a real account would replace them.
- In a framework project, replace the router with real routes (`/`, `/explore`, `/video/[id]`, `/@[handle]`, `/course/[slug]`) and keep the same query parameters where possible.
