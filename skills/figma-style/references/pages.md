# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. `#/stories/<slug>` opens the story view and `#/journal/<slug>` the post view. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe, keep the order, and drop rows the brief cannot fill. The components stay the same; the words change.

| Site | Views | Home sections, in order |
|---|---|---|
| Software product or app (the template) | home, stories, story, pricing, changelog, journal, post, about, contact, signup, privacy, terms, 404 | hero, panel and note, wide panel with two notes, mosaic, second wide panel, quote and stat with marquee, slab, rail |
| Design, product or branding studio | home, stories (as work), story (as a case study), about (with team and roles), journal, post, contact, 404 | hero with a collage of work, panel and note (how you work), mosaic of work, quote and stat, marquee of clients the user names, slab ("Start a project") |
| Creative event, conference or festival | home, stories (as sessions or speakers), story (as one session), pricing (as tickets), changelog (as the programme, rows by day), journal (as news), contact, signup (as registration), 404 | hero with dates and venue in the lead, mosaic of last year's moments, panel with the venue map, quote and stat (attendees, sessions), slab ("Get tickets") |
| School, course or workshop series | home, stories (as courses), story (as one course), pricing, journal, about, contact, signup, 404 | hero, panel with a lesson view, mosaic of student work, quote and stat, slab ("Enrol") |
| Agency or freelancer selling services | home, stories (as projects), story, pricing (as packages), about, contact, 404 | hero, two notes (services), mosaic of work, quote, slab ("Book a call") |
| Shop with a few products | home, stories (as products in tiles), story (as a product page with facts as specs), pricing (only if there are tiers), journal, contact, 404 | hero with the product, panel close-ups, mosaic of the range, quote, slab ("Shop now") |

For a one-person practice, change "we" to "I", drop the team and roles, and keep the about view short.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.head`, `.brand`, `.nav`, `.head-end`, `#theme-toggle`, `#menu-open`, `#menu` (`<dialog class="sheet">`), `.sheet-links` | Wordmark, up to five short links, the toggle, an outline and a solid button. Below 1100px the links and the outline button move into the sheet; under 370px the solid button hides too. Add a sixth link only after checking 1101px. |
| Hero | `.hero`, `.hero-grid`, `.hero-lead`, `.stage`, `.stack`, `.layer`, `.l-sq1`, `.l-sq2`, `.l-back`, `.bubble`, `.l-strip`, `.l-art`, `.l-phone`, `.l-chip`, `.hero-cta`, `.btn-xl` | H1 of three to six words, one grey line, the collage, one extra-large button with a small line under it. The collage layers are positioned in percentages of `.stack`; swap the pictures, keep the positions. The whole stage is decorative (`aria-hidden`). |
| Panel and note | `.fsplit`, `.panel`, `.note`, `.glyph` | Two-tone H2, then a panel (two thirds) holding a product view or a piece of work, and a note: glyph, 16px title, grey line, arrow link. |
| Wide panel and two notes | `.panel` with `--ar:16 / 8`, `.duo`, `.tt-in` | Indented two-tone H2, a wide panel, then two notes side by side, indented from both edges. |
| Mosaic | `.mosaic`, `.tile`, `.lbl`, `.float`, `.row-sp`, `.meter`, `.slider`, `.switch`, `.pointer` | Eight tiles, each a link with a picture and a label "Name · kind". Up to three carry a `.float` control and a `.pointer`, placed with inline `left`/`top`/`right`/`bottom` percentages; keep them away from the picture's subject. Six tiles also work: change the grid to three columns. Phones get two columns with a brick rhythm. |
| Quote and stat | `.proof`, `.quote`, `.ava`, `.stat`, `.stat-n` | One real quote with name and role, one real number with a source line. Without either, drop the block rather than inventing one. |
| Marquee | `#marquee`, `.marquee-view`, `.marquee-track`, `.wm`, `#marquee-toggle` | Six to ten names written once; the script repeats them for the loop. Only names the user supplies (customers, partners, venues). |
| Slab | `.slab` | A short centred line above, one action. At most one per page. |
| Rail | `.rail-bar`, `#rail-count`, `[data-rail]`, `#rail`, `.rail-img` | Four to eight square pictures with an arrow-link label. |
| Stories | `[data-list="stories"]`, `#story-grid > li[data-kind][data-slug]`, `.story-card`, `.story-img`, `.story-name`, `.story-line`, `.chip[data-for="stories"]`, `[data-count="stories"]`, `[data-empty="stories"]` | Cards in threes. `data-kind` may hold several keys separated by spaces. `?kind=` preselects a chip. |
| Story | `[data-s="…"]` slots, `.facts`, `.panel.inset`, `.cols2`, `.quote` | Filled from the card with that slug (name, line, picture and alt) and the `STORIES` entry (type, city, classes, since, panel, ava, who, quote, before, after). The static HTML shows the first story, so it reads without JavaScript. Then the next story and the slab. |
| Pricing | `.announce`, `.tags`, `.seg [data-billing]`, `#notice`, `#billing-note`, `.plans`, `.plan`, `.price [data-monthly][data-annual]`, `.dots`, `.checks`, `.addons`, `.addon`, `#compare`, `#compare-table`, `.grp`, `tr[data-key]`, `[data-scope]`, `#faq`, `.faq details` | Two to four plans. Prices swap with the billing switch; `?billing=monthly` preselects. Rows marked `data-key` stay in "Key features". FAQ uses `<details>`, so it works without JavaScript. |
| What's new | `[data-list="log"]`, `.frow[data-kind]`, `.frow-name`, `.badge`, `.badge.beta`, `time`, `.frow .panel`, `.frow-text`, `.frow-links` | Newest first. The first three or four rows carry a panel; older rows are text only. `?area=` preselects a chip. Also works as a feature list, a programme by day or a menu of services. |
| Journal and post | `.post-card.featured`, `[data-list="posts"]`, `.post-card[data-post]`, `.post-img`, `.meta`, `.post-title`, `.article`, `[data-p="…"]`, `.prose`, `.pull`, `.byline` | One featured post, then cards in threes with the picture framed in a panel. The post view takes title, meta and picture from the card and the body from `POSTS` (the featured post's body is written in the page). |
| About | `.values`, `.team`, `.sq`, `#careers`, `.roles` | Two-tone H1, an inset panel, three values with glyphs, people as initials on panel colours (or the user's portraits, all treated the same way), open roles as hairline rows linking to `#/contact?topic=jobs`. |
| Contact and sign-up | `.split`, `.ticks`, `.form-card`, `[data-form]`, `.pair`, `.field`, `.input`, `.select`, `.textarea`, `.error`, `.check`, `[data-success]`, `[data-echo="email"]` | Two-tone H1 and three ticks on the left, the form card on the right. `?topic=` and `?plan=` preselect the selects. |
| Footer | `.site-footer`, `.foot`, `.foot-mark`, `.socials`, `#news`, `[data-form="newsletter"]`, `.foot-cols`, `.foot-bottom` | Wordmark, round icon links (only to real destinations), the newsletter, four columns of links with optional badges, the legal line. |
| Legal and 404 | `data-view="privacy"`, `"terms"`, `"404"`, `.legal`, `.notfound` | Plain text at 760px; the 404 is one two-tone display line and two large buttons. |

## Routing and state

- `#/stories/<slug>` must match a card's `data-slug` and a key in `STORIES`; `#/journal/<slug>` must match a card's `data-post` (and a key in `POSTS`, except the featured post). Anything else shows the 404 view.
- `#/stories?kind=`, `#/changelog?area=`, `#/journal?kind=`, `#/pricing?billing=monthly`, `#/signup?plan=` and `#/contact?topic=` preselect their filter or field. Unknown values fall back to the default.
- Plain `#id` links (`#faq`, `#careers`, `#news`) open the view that holds that ID, then scroll to it.
- `titles` sets the document title per view (story and post titles are set when they render), and `parent` keeps the right header link underlined on child views. Update both when you add or rename views.
- In a framework project, give each story and post a real URL, render the lists on the server, keep the query parameters, and keep the theme toggle, the filters, the billing switch, the rail and the forms as small client components.
