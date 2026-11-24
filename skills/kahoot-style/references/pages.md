# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. `#/nights/<slug>` opens the night view and `#/notes/<slug>` the note view. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe, keep the order, and drop rows the brief cannot fill. The components stay the same; the words change.

| Site | Views | Home sections, in order |
|---|---|---|
| Quiz nights, study club and team events (the template) | home, nights, night, study, teams, notes, note, faq, about, contact, join, privacy, terms, 404 | promo strip, hero with three gradient cards, tile carousel, warm-up round, this week's nights, three features, latest notes, closing band |
| Tutoring centre or after-school club | home, study (as courses or classes), nights (as open days and mock exams), teams (as packages for schools), notes, faq, about, contact, join (as enrolment), 404 | hero (cards: classes, holiday camps, school packages), tiles by subject or age, warm-up round on the subject, upcoming sessions, features, closing band |
| Corporate training or workshop studio | home, teams (as programmes and prices), nights (as public workshops), notes (as guides), about, contact, 404 | hero (cards: open workshops, in-house training, online), tiles by topic, warm-up round as a sample question, upcoming workshops, features, closing band "Plan a session" |
| Book club, language café or community group | home, nights (as meetings), study (as reading lists or levels), notes, faq, about, join, contact, 404 | hero (cards: meetings, groups, membership), tiles by genre or language, this month's meetings, latest notes, closing band "Join the club" |
| Bar, café or venue with weekly events | home, nights (as the events calendar), teams (as private hire), about (with the menu or the room), faq, contact, 404 | promo strip, hero (cards: weekly nights, private hire, food and drink), tiles by night of the week, this week's events, features, closing band |
| Game, puzzle or trivia product | home, teams (as plans), study (as packs or levels), notes (as updates), faq, join, contact, 404 | hero (cards by audience), tiles by category, warm-up round, features, latest updates, closing band |

For a one-person host or tutor, change "we" to "I", keep the about view to one paragraph and one host card, and keep the five console modes (rename them to the five things you do).

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.console-wrap`, `.console`, `.brand`, `.modes`, `.mode`, `.mi`, `.find` (`[data-search]`), `.console-cta`, `.subbar`, `.subbar-in`, `.mini`, `.links`, `.sub-end`, `#theme-toggle`, `#menu-open`, `#menu` (`<dialog class="sheet">`), `.sheet-links` | Exactly five modes, one-word labels, each with `style="--c:var(--m-…)"` and an icon. The search field shows from 1240px; between 768 and 1023px the modes become icon tiles; under 768px they move to a second row. `--cw` (the console strip height) is set per breakpoint so the sticky header can hide the console on small screens; if you change the console's height, change `--cw` with it. The white bar holds up to four links, one `.btn-ghost`, the toggle and, under 900px, the menu button. |
| Promo strip | `#promo`, `.promo-in`, `.promo-ico`, `#promo-close` | One uppercase line, one sentence, one white button. Dismissal is stored under the site's own key. Drop it when there is nothing time-bound to say. |
| Hero | `.hero`, `.display`, `.pop`, `.lede`, `.pcards`, `.pcard`, `.pc-lilac`, `.pc-rose`, `.pc-mint`, `.pc-deep`, `.tab`, `.pname`, `.badge`, `.ptag`, `.price`, `.pframe` | Display headline with one gradient phrase, one grey line, then three gradient cards (two pastel, the third deep). Each card: tab (audience), name and badge, tagline, one line, price and a note, green button and text link, a 4:3 picture. Two cards also work; keep the deep one last. |
| Tile carousel | `.rail-wrap`, `#rail`, `.tile` (`style="--h:…"`), `.tile-art`, `[data-rail]` | Six to ten tiles; each is a link with a title, a short line and a line drawing from the sprite (or a cut-out photo). Arrows scroll two tiles and hide at the ends; phones swipe. |
| Warm-up round | `#play`, `.quiz`, `.quiz-top`, `[data-q="count"]`, `[data-q="score"]`, `[data-q="timer"]`, `[data-q="text"]`, `[data-q="answers"]`, `.ans`, `[data-q="fact"]`, `[data-q="next"]`, `.board`, `[data-q="board"]`, `.you` | Questions live in `QUIZ` (question, four answers, the index of the right one, a true fact). The static HTML shows the first question. Leaderboard rows carry `data-pts`; the `.you` row is the visitor's. Write only questions with one clearly correct answer. |
| Night cards | `.ngrid`, `.ncard[data-kind][data-slug]` (`style="--h:…"`), `.date`, `.kind`, `.ntitle`, `.nmeta` ("Venue · time"), `.nend` | The home section copies the first three cards from the nights list, so write each night once. |
| Features | `.feats` | Three items: an outline icon, an H3, one grey sentence. |
| Notes | `.sgrid`, `.feature`, `.scard[data-kind][data-slug]` (`style="--c:var(--m-…)"`), `.spic`, `.spanel`, `.sby`, `.ring`, `.stitle`, `.sx`, `.more`, `.stab` | One `.feature` card spanning the row, then slanted cards in threes. The home section copies the first three `.scard`s. Rotate the five mode colours across cards. |
| Closing band | `.cta-band` | A centred H2 with a gradient phrase, one line, a purple button and an outline button, a small note. At most one per view, right before the footer. |
| Nights list | `[data-list="nights"]`, `#nights-list`, `.chip[data-for="nights"]`, `#nights-q`, `[data-count="nights"]`, `[data-empty="nights"]` | Chips by kind, a search over the card text, a live count and an empty state with a reset. `?kind=` and `?q=` preselect (the console search sends `?q=`). |
| Night | `.dhead` with `[data-n="…"]` slots, `.facts`, `.steps[data-n="rounds"]`, `.host`, `.ava`, `.card.sticky-card`, `[data-form="booking"]` | Title, kind, price, availability, time and venue name come from the card; date, street, rounds, host and notes come from `NIGHTS`; hosts from `HOSTS`. The booking form resets each time a night opens. |
| Study list | `[data-list="tracks"]`, `#tracks-list`, `.tcard[data-kind][data-slug]`, `.ttop`, `.tbody`, `.tfoot` | Chips by age or level, a count, an empty state. Each card links to `#/join?track=<slug>`, which preselects the track in the sign-up form. |
| Teams | `.seg [data-mode]`, `.plans`, `[data-room][data-online]`, `#mode-note`, `.ticks`, `.table-wrap` | Three gradient cards as packages (deep one in the middle, tab "Most booked"), prices that switch between the two formats, a comparison table that scrolls sideways inside its box on phones, a closing band. `?mode=online` preselects. |
| Note | `.article`, `[data-p="…"]`, `.prose`, `.next` | Title, topic, date, author initials and picture come from the card; the body from `POSTS` (the featured note's body is written in the page). The purple bar at the end links to the next note. |
| FAQ | `.faq`, `details`, `summary` | Grouped questions with `<details>`, so they work without JavaScript. |
| About | `.feats`, `.hosts`, `.ava` | Headline with a gradient phrase, one paragraph, three values, hosts as initials on coloured discs (or the user's portraits, all cropped alike). |
| Contact and join | `.split`, `.card`, `.form`, `.form-2`, `.field`, `.err`, `.hint`, `.check`, `[data-form]`, `[data-success]`, `[data-echo="email"]` | Contact: form card and an aside with real contact details. Join: a gradient card with a tab and three ticks beside the form. `?topic=` and `?track=` preselect the selects. |
| Footer | `.site-footer`, `.foot-cols`, `.foot-base` | Four link columns, then the wordmark and a copyright line. Social links only to real profiles, with plain icons. |
| Legal and 404 | `data-view="privacy"`, `"terms"`, `"404"`, `.legal`, `.notfound`, `.bigq` | Plain text at 760px; the 404 is a tilted purple question-mark tile, an H1, one line and two buttons. |

## Routing and state

- `#/nights/<slug>` must match a card's `data-slug` in `#nights-list` and a key in `NIGHTS`; `#/notes/<slug>` must match a card in `#notes-list` and a key in `POSTS`. Anything else shows the 404 view.
- `#/nights?kind=` and `?q=`, `#/study?level=`, `#/notes?kind=`, `#/teams?mode=online`, `#/join?track=` and `#/contact?topic=` preselect their filter or field. Unknown values fall back to the default.
- Plain `#id` links open the view that holds that ID, then scroll to it: the Play mode points at `#play` on home.
- `titles` sets the document title per view (night and note titles are set when they render), and `parent` keeps the right mode or link marked on child views. Update both when you add or rename views.
- In a framework project, give each night and note a real URL, render the lists on the server, keep the query parameters, and keep the theme toggle, the console search, the filters, the carousel, the warm-up round, the format switch and the forms as small client components.
