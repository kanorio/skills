# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links; the router reads query parameters (`?type=`, `?c=`, `?q=`, `?s=`, `?p=`, `?level=`, `?topic=`) and `?at=<id>` scrolls to a section. In a framework project each view becomes a real route.

Repeated content is written once, as markup that is also the data: each night is an `article.night`, each story an `a.lens`, each product an `a.prod`, all with `data-*` attributes. Filters hide and show these tiles; the story viewer and the product page read their content from them. Without JavaScript every tile and every view is visible in order.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Every recipe keeps the split home, the story cards and the directory.

| Site | Views | Story cards on home (four is ideal, six at most) |
|---|---|---|
| Venue, club or studio with sessions (the template) | home, nights, stories, story, lessons, shop, item, about, faq, contact, privacy, terms, 404 | this week, learn, rent or shop, find us |
| Event, festival or night series | home (join column = ticket alerts or RSVP), nights (as the line-up or schedule), stories (as last year's moments), story, about (with the team and getting there), faq, contact, legal, 404 | the headline night, the line-up, tickets, the place |
| Creator or artist | home (join column = mailing list or bookings), stories (as work or episodes), story, shop (as merch or prints), item, about, contact (as collaborations), 404 | latest work, the series, merch, work with me |
| Small shop or drop brand for a young audience | home (join column = drop alerts with a phone or email), shop, item, stories (as lookbook), story, about, faq (as shipping and sizing), contact, legal, 404 | the new drop, a bestseller, the lookbook, the store or pickup |
| Class, camp or coaching programme | home (join column = trial class sign-up), lessons (one level per tab), nights (as the timetable), stories (as student moments), about (with the coaches), faq, contact, 404 | first class, the levels, the timetable, the place |
| Café, food truck or pop-up | home (join column = table or pre-order), nights (as events and specials), shop (as the menu), item (as a dish), stories, about with visit, contact, 404 | tonight's special, the menu, events, where we are |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.h-left`, `.brand`, `.search`, `#q`, `.nav`, `.new`, `.h-right`, `#theme-toggle`, `#menu-open`, `.hide-1180` | Five nav items at most, each an icon over a one-word label. One yellow pill at the far right (the main action, often a link to `#/?at=join`) and at most one ink pill. `fitNav()` adds `.compact` when the row does not fit; the nav then lives in the menu. |
| Menu | `#menu` (`<dialog class="sheet">`), `#menu-close`, `#q2`, `.tiles` | Every page as a round icon tile, nine at most. Search appears here on phones. Links close it. |
| Join column (home) | `.split`, `.join#join`, `.join-inner`, `h1#join-title`, `.lead`, `form[data-form="signup"]`, `[data-swap]`, `[data-swap-toggle]`, `.done`, `.fine` | The page's H1 is here: four to six words. One lead sentence. Two or three fields; the email or phone swap is optional. The submit is the full-width blue pill. Ask for what the visitor wants (a spot, alerts, a booking), never a password. |
| Story cards (home) | `.feed`, `.feed-title`, `.stories`, `a.story`, `.btn.glass` | Four cards, 4:7, each a full sentence of eight words or fewer and a two- or three-word pill; each card links to a view. `.feed-title` shows only when the split stacks. |
| Display block | `.big`, `.display`, `.row` | Three to five words with a full stop, one muted sentence, a yellow pill and an outline pill. Also the 404. |
| Banner | `.wrap`, `a.banner`, `.box` | One per site at most: a gift, a drop, an offer. |
| Directory | `.directory`, `.label`, `ul.cols`, `.more` | Two to four groups of three to six links, each to a filtered view or section. |
| Page head | `.page-head`, `.badge`, H1, muted line | Every inner page. One badge icon per page. |
| Filter pills | `.pills[data-filter="<group>"]`, `.pill-o[data-value]`, `[data-count="<group>"]`, `[data-list="<group>"]`, `[data-empty="<group>"]`, `[data-reset="<group>"]` | "All" (or "For you") first, then four to six kinds matching the tiles' `data-cat`. `applyFilter(group, value, q)` also takes search words. |
| Nights | `article.night[data-cat]`, `.media`, `.date`, `.meta`, `[data-spot][aria-pressed]` with `.when-off` and `.when-on` | `data-spot` is the night's id; saved spots stay on this device. Date chips are short ("Fri 4 Dec"). |
| Stories wall | `a.lens` with `data-id`, `data-cat`, `data-u`, `data-date`, `data-likes`, `data-place`, `data-sound`, `data-caps` (snaps separated by `|`), `data-text`; `.media`, `.av[data-u]`, `strong`, name | The viewer reads everything from here. Two to four snaps per story. `data-likes` is optional: drop the count from the viewer if the brief has no real numbers. |
| Story viewer | `.viewer-page`, `#frame`, `#v-img`, `#v-bars`, `#v-pause`, `#v-cap`, `.tap[data-step]`, `#v-up`, `#v-down`, `#v-like`, `#v-likes`, `[data-share]`, `.side`, `#v-title`, `#v-text`, `#v-sound`, `#v-place`, tabs `#t-snaps`/`#t-next`, `#v-snaps`, `#v-next` | `openStory(id)` fills it. Each snap shows for `SNAP_MS` with a new crop (`POSITIONS`); the last snap goes to the next story. The static markup is the first story, for pages without JavaScript. |
| Course | level pills `[data-level][role=tab]` controlling `ol.weeks`, `.panel`, `.price`, `.ticks`, `form[data-form="course"]` | Two to four levels, four to eight weeks each. The form's level select stays in step with the tabs. |
| Shop | `a.prod` with `data-id`, `data-cat`, `data-price`, `data-sizes` (separated by `|`, empty for one size), `data-text`; `.media`, `.tag` | `.tag` marks rentals or new items, one word. |
| Product | `#i-img`, `#i-title`, `#i-price`, `#i-text`, `#i-sizes-field`, `#i-sizes` (radio pills), `#i-hold`, `.acc` | `renderItem(id)` fills it from the tile. Holding needs a size; the choice stays on this device. |
| About | `.strip` (three photos), `.prose`, `.stats`, `#crew`, `.crew`, `.person`, `#visit`, `.visit`, `dl.hours` | Stats only with real numbers. One `.person` per real person. |
| FAQ | `.acc`, `details`, `summary` | Native `details`; `?at=<id>` opens and scrolls to one. |
| Contact | `form[data-form="contact"]`, `#c-topic` (`?topic=` preselects), `.panel` | Name, email, topic, an optional number, message. |
| Footer | `.site-footer`, `.safety`, `.foot` | One safety or care sentence with a yellow link, four to six links, the copyright, back to top. |

## Forms

| Form | `data-form` | Fields | Success says |
|---|---|---|---|
| Guest list (join column) | `signup` | first name; email or phone; skate size | the name and where the line-up will go |
| Course booking | `course` | name, email, level, start date, age confirmation | the start date and the email |
| Contact | `contact` | name, email, topic, group size, message | when we answer |

Every form: labels above fields, `required` and types for validation, `aria-describedby` pointing at an `.err` in reserved space, the click on the submit button handled (not only `submit`), "Sending…", then the `.done` card. Nothing is sent; to deliver, connect a real endpoint (see `references/kanorio.md`).
