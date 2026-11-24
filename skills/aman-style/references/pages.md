# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Small hotel, resort or retreat (the template) | home, stay, room (one per room type), experiences, dining, wellness, journal, story, enquire, visit, about, faq, privacy, terms, 404 | hero, statement, two mirrored pairs, rail of rooms, wide picture, quote, experiences, stone band with dining, journal |
| Guesthouse, inn or B&B | home, stay, room, dining (as breakfast), visit, about, faq, enquire, privacy, 404 | hero, statement, one pair, rail of rooms, wide picture, quote, stone band with breakfast, journal or the neighbourhood |
| Spa, bathhouse or wellness retreat | home, wellness (as the main page), stay (as retreats or programmes), experiences (as classes), journal, story, about, enquire, visit, faq, 404 | hero, statement, pair (the baths, the treatments), rail of programmes, wide picture, quote, practices, journal |
| Villa or holiday house for rent | home, room (as the house), experiences (as the area), dining (as chef and provisions), visit, enquire, faq, 404 | hero, statement, two pairs (inside, outside), rail of rooms in the house, wide picture, quote, the area |
| Restaurant with rooms, winery or farm stay | home, dining (first in the nav), stay, room, experiences, journal, story, enquire, visit, about, 404 | hero, statement, pair (the table, the land), rail of rooms, wide picture, quote, stone band with the menu |
| Travel designer, slow-travel or expedition company | home, stay (as journeys), room (as one journey), experiences (as places), journal, story, about, enquire, faq, 404 | hero, statement, pairs (two journeys), rail of journeys, wide picture, quote, places, journal |
| Architect, interior or ceramics studio with a quiet voice | home, stay (as projects), room (as a project), journal, story, about, enquire (as contact), 404 | hero, statement, two pairs, rail of projects, wide picture, quote, journal |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.nav`, `.brand`, `.header-end`, `#theme-toggle`, `#menu-open`, `.btn` | Five short links at most, the centred wordmark, the toggle and one solid button. `fitNav()` adds `.compact` when the links do not fit, and the media query does the same below 1100px; the links then live in `#menu`, a `<dialog class="sheet">` with `.sheet-links`. `.scrolled` draws the hairline. |
| Hero (home) | `.hero`, `.g12`, `.hero-media`, `.hero-side`, `.hero-copy`, `.display`, `.hero-aside` | Picture over columns 1 to 10 with an italic caption in 11 to 12, then eyebrow, display H1 and two text links in 1 to 8, one muted sentence in 10 to 12. On phones the picture turns 4:5 and the caption follows the links. |
| Statement | `.sec.center`, `.eyebrow`, `.statement`, `.tlinks.center` | Two or three lines of light serif, one link. |
| Pair | `.g12`, `.ph.lean-l`, `.ph.lean-r`, `.end`, `.mid`, `--c`, `--dy` | Picture 1/8 with words 9/13 at the bottom; then words 2/5 and picture 6/13, both dropped by `--dy`. |
| Rail | `.rail-head`, `#rail`, `.rail`, `.card`, `.rail-foot`, `.progress`, `[data-rail]` | Up to eight cards, 3.2 visible on desktop and 1.3 on phones. Without JavaScript it is a plain sideways scroll. |
| Wide picture | `.ph` with `--r:21/9`, `.cap` | Full bleed, caption right-aligned under it. |
| Quote | `.quote` | One sentence in light italic, centred, no attribution unless the brief gives one. |
| Page head | `.page-head`, `.g12`, `.h1`, `.lead` | H1 over seven columns, the lead in the last four aligned to the bottom; or centred for short heads. |
| Filters | `.filters`, `.chips[data-filter]`, `.chip[data-value]`, `#s-guests`, `.count[data-count]`, `.empty[data-empty]`, `[data-reset]` | `?outlook=`, `?season=` and `?kind=` preselect. Items carry `data-outlook`, `data-sleeps`, `data-season` (space-separated) or `data-kind`. |
| Room list | `.rooms`, `.room`, `.room-copy`, `.facts` | Rows alternate sides among the visible rows. Each row: eyebrow with outlook, size and sleeps, H2, one paragraph, "Discover" and "Enquire" links (`#/enquire?room=<value>`). |
| Room page | `[data-gallery]`, `.gallery-main`, `.thumbs`, `.thumb[data-alt]` (the large picture is taken from the thumbnail's own `<img>`, so inlining keeps it working), `[data-gallery-count]`, `.facts`, `.ticks` | Gallery, then H1 and lead beside a facts table, then "In the room" ticks, then three other rooms. |
| Experiences | `.posts`, `article.card[data-season]` | Cards in threes, the middle one lower; each ends in a text link to the enquiry. |
| Dining | `.tabs[role=tablist]`, `.tab[data-tab]`, `.panel[role=tabpanel]`, `.menu-card`, `.course` | `?tab=` opens a panel; arrow keys move between tabs. Without JavaScript both panels show and the tabs are hidden. |
| Wellness | `.rows`, `.trio` | Treatments as rows with a duration; three daily practices. |
| Journal and article | `.posts`, `.card[data-kind]`, `.article`, `.article-head`, `.dek`, `.byline`, `.article-wide`, `.prose`, `.pull` | Article: centred head, a wide picture, a 680px column with H2s, a pull quote and one figure. |
| Enquiry | `[data-form="enquiry"]`, `.form-card`, `.fields`, `.field`, `.label`, `.input`, `.error`, `.check`, `.form-foot`, `[data-success="enquiry"]`, `[data-echo]`, `[data-again]` | Room (preselected by `?room=`), arrival (min today), departure (after arrival), adults, children, name, email, topic (`?topic=`), note, letters tick. The success panel repeats the room and dates. |
| Getting here | `.map`, `.rows`, `.facts` | An inline SVG map with a title and description, three ways to arrive, contact details. |
| About | `.statement`, `.g12` pairs, `.trio` | The story, two offset pictures with short notes, three things the place keeps. |
| FAQ | `.faq-nav`, `.faq-group[id]`, `details`, `summary` | `?at=<group id>` scrolls to a group. |
| Footer | `.site-footer`, `[data-form="newsletter"]`, `.inline-form`, `.footer-bottom` | Wordmark, address, two link lists, the letters signup, the legal line. |
| 404 | `data-view="404"`, `.notfound` | Eyebrow, one H1, one sentence, two links. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/enquire?room=cove-house`, `#/stay?outlook=sea`, `#/dining?tab=tea`, `#/faq?at=f-dining`).
- `at=<id>` scrolls to that section after the view opens; plain `#id` links scroll inside the current view.
- The `titles` map sets the document title per view, and the `section` map keeps the right header link underlined on child views (`room` under `stay`, `story` under `journal`). Update both when you add or rename views.
- In a framework project, replace the router with real routes (one per room and per article), keep the same URLs where possible, and turn `at` into ordinary fragment links.
