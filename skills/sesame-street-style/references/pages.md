# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route. Kids' views sit on a coloured `.canvas`; grown-ups views sit on white.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Give every kids' section its own colour (sky, orange, magenta, purple) and keep the home page yellow.

| Site | Header pills | Views | Home sections, in order |
|---|---|---|---|
| Play studio or children's club with an online playroom (the template) | Games, Stories, Make, Friends | home, games, play, stories, story, make, friends, grownups, timetable, book, about, contact, privacy, 404 | intro and mosaic on the canvas, pick a friend, grown-ups split, this week at the studio |
| Picture-book or children's publisher | Books, Read along, Activities, Characters | home, stories (as books), story (as a sample read), make (as printables), friends (as characters), grownups (as "for parents and teachers"), about, contact, privacy, 404 | mosaic of new books, pick a character, a split for the newsletter or school visits, upcoming readings |
| Children's museum or science centre | Explore, Watch, Make, Visit | home, games (as exhibits or online activities), play, stories (as videos or tours), make, grownups (as "plan a visit"), timetable (as opening hours and events), book (as tickets or group visits), about, contact, privacy, 404 | mosaic of what's on, pick a gallery, a visit split, events this week |
| Art, music or dance classes for kids | Classes, Watch, Make, Teachers | home, make (as projects), stories (as short videos), friends (as teachers drawn as characters, or photos with consent), grownups, timetable, book, about, contact, privacy, 404 | mosaic of projects, pick a class type, grown-ups split, this week |
| Family events or a kids' festival | Activities, Stage, Make, Meet | home, games (as activities), story (as the programme for one day), make, grownups (as tickets and info), timetable (as the schedule), book (as tickets), contact, privacy, 404 | mosaic of highlights, pick a day, a tickets split, the schedule |
| Educational app or learning games | Games, Stories, Make, Friends | home, games, play, stories, story, make, friends, grownups (as "for parents" with plans and safety), contact, privacy, 404 | mosaic, pick a friend, a parents split, what children practise |

Two to five pills. With two or three, keep the full labels at every width above 640px.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.head-row`, `.brand`, `.pills`, `.pill.c-<colour>`, `.head-end`, `.grown`, `#theme-toggle` | Wordmark with the shape mark, two to five pills (icon plus label; the label hides below 980px, the pills take their own row below 640px), the Grown-ups link and the theme toggle. The current pill and the Grown-ups link get `aria-current="page"`. |
| Grown-ups tab bar | `.subnav` (`data-subnav`) | Text tabs for the grown-ups views; shown only while one of them is open. |
| Canvas | `.canvas`, `.cv-sky`, `.cv-orange`, `.cv-magenta`, `.cv-purple` (yellow without a modifier) | Full-bleed colour with confetti from `::before`. One canvas per kids' view; the yellow canvas also makes the call-to-action band on grown-ups pages and the 404. |
| Home intro and mosaic | `.home-intro`, `.display`, `.mosaic`, `.tile.big`, `.round-tile` | H1 and one line, then five items: one big tile (two rows), three small tiles and one round portrait linking to a friend. On tablets the big tile spans the top; on phones everything stacks. |
| Pick a friend | `.friends-row`, `.avatars` | Round portraits with names, each linking to that friend's games (`#/games?who=<id>`). |
| Canvas head | `.canvas-head`, `[data-count]`, `.back` | H1, one line, a live count; detail views put a "back" pill above the H1. |
| Friend band | `.who-band`, `.who-row` (`data-who-filter`), `.who` (`data-who`) | Built by the script from the `friends` map: "Everyone" plus one portrait per friend, `aria-pressed`. `?who=` preselects. Hidden without JavaScript. |
| Tile grid | `.grid` (`data-list="game"`, `"make"`, `"story"`), `.tile`, `.tile-art`, `.art.t-<tint>`, `.tile-name`, `.badge.c-<colour>`, `.sticker`, `[data-empty]` | The script renders every tile from the `activities` and `stories` arrays; the first few are written in the HTML so the page reads without JavaScript. Each tile carries `data-who` or `data-topic` for the filters. |
| Chips | `.chips` (`data-topic-filter`, `data-day-filter`), `.chip` (`data-topic`, `data-day`) | Pressed state with `aria-pressed`; the empty state shows when nothing matches. |
| Play (one activity) | `data-view="play"`, `[data-play-canvas]`, `[data-play-title]`, `.play-grid`, `.stage`, `[data-stage="match"]`, `[data-shadow]`, `[data-prompt]`, `[data-stars]`, `[data-options]`, `[data-replay]`, `[data-stage="paint"]`, `[data-paint]`, `[data-part]`, `.palette`, `[data-clear]`, `.side-card`, `[data-more]` | `?id=` picks an entry from `activities`. `kind: "game"` shows the shadow-matching game on the sky canvas; `kind: "make"` shows the colour-in on the magenta canvas. The side card shows `about`, `ages` and `mins` for grown-ups; "More to play" lists three of the same kind. |
| Story reader | `data-view="story"`, `[data-story-title]`, `.book`, `.pages` (`data-pages`), `.page`, `[data-book-nav]`, `[data-turn]`, `[data-dots]`, `[data-page-label]`, `[data-more-stories]` | `?id=` picks an entry from `stories`; each page is `[art, friends, text, tint]`. One page at a time with arrows, dots, a tap on the page and the arrow keys. Without JavaScript the first story shows every page. |
| Friends | `.friend-cards`, `.friend.c-<colour>[id]` | Large round portrait with a ring in the friend's colour, name, one or two lines, a link to their games. `?at=<id>` scrolls to a card. |
| Page head (grown-ups) | `.page-head`, `.head-split`, `.kicker`, `.lead`, `.circle-art` | Green kicker pill, H1, lead, one or two buttons; optionally a round picture ringed in yellow. |
| Points | `.points`, `.point`, `.face.c-<colour>` | Three short promises with round icons or portraits. |
| Class cards | `.cards`, `.card`, `.card-meta`, `.price` | Round icon in the class colour, name, one line, ages and length, price, a Book button linking to `#/book?class=<id>`. |
| Ticks band | `.band`, `.split`, `.ticks` | A heading on the left, four ticked facts on the right: safety, group size, ads and data. Only facts the owner confirms. |
| FAQ | `.faq`, `details`, `summary` | Four to eight questions grown-ups ask. |
| Call-to-action band | `.canvas.cta-band`, `.cta-inner` | Yellow canvas, one heading and line, one button. |
| Timetable | `.slots` (`data-slots`), `.slot.c-<colour>` (`data-day`), `.spaces`, `.spaces.full` | One row per session; the day chips filter it, `?day=` preselects, Sunday shows the empty state. Book buttons link to `#/book?class=<id>&day=<day>`. |
| Booking form | `.form-grid`, `.form-card`, `[data-form="booking"]`, `.field`, `.field.half`, `.age-pick`, `.check`, `[data-success="booking"]`, `[data-echo]`, `.aside` | Grown-up's name and email, child's first name, optional phone, age buttons, class and day selects (preselected from the URL), notes, consent. The success panel repeats the names and email. |
| Contact form | `[data-form="contact"]`, `#c-topic`, `[data-success="contact"]` | Name, email, topic, message; `?topic=` preselects. Contact details in the aside. |
| About | `.head-split`, `.points`, `.team`, `.person`, `.initials` | Story, three values with the friends' portraits, teachers as large initials circles with a ring. |
| Privacy | `.prose` | Plain headings and paragraphs: what is collected, what the games do, how long data is kept, how to ask. |
| 404 | `data-view="404"`, `.notfound` | Yellow canvas, a friend in the rain, H1, one line, two buttons. |
| Footer | `.site-footer`, `.peek-row`, `.foot-grid`, `.foot-bottom` | Four friends peek over the top edge; wordmark and a line, three link columns, the legal line. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/play?id=shadow-match`, `#/games?who=pim`, `#/book?class=shape-lab&day=thu`).
- `at=<id>` scrolls to that section of the view after it opens.
- The `titles` map sets the document title per view; play and story titles come from their data. `sectionOf` decides which pill lights up; views not listed belong to the grown-ups area and show the tab bar.
- In a framework project, replace the router with real routes, keep the same URLs where possible, and turn the `activities` and `stories` arrays into content (one route per activity and per story).
