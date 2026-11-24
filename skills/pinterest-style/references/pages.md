# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route. The walls, board cards, the close-up, boards and profiles are rendered by the script from three arrays (`IDEAS`, `BOARDS`, `PEOPLE`) plus `CATS`; change the data, not the markup.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Idea library or inspiration collection (the template) | home, explore, idea, boards, board, curator, saved, about, letter, contact, faq, privacy, terms, 404 | intro with collage, category bar, the wall, See more, boards row, letter band |
| Photographer's portfolio | home, explore (as galleries by subject), idea (as one photograph with its story and gear), boards (as series), board (as one series), about (with the photographer instead of three people), contact (as bookings), faq, 404 | intro, category bar of subjects, the wall, series row, booking band |
| Interior designer or stylist | home, explore (by room), idea (as one room with sources), boards (as projects), board (as one project), about, contact (as an enquiry with budget and room), faq, 404 | intro, room chips, the wall, projects row, enquiry band |
| Recipe or baking site | home, explore (by course or season), idea (as a recipe: ingredients become the notes list, steps below), boards (as collections), board, about, letter, faq, 404 | intro, course chips, the wall, collections row, letter band |
| Craft, pottery or textile maker | home, explore (by technique), idea (as a make with materials and steps), boards (as techniques or workshops), board, about, contact (as commissions), letter, 404 | intro, technique chips, the wall, techniques row, commissions or letter band |
| Shop of curated finds | home, explore (by kind of object), idea (as one object with a price and where to buy), boards (as edits), board, about, contact, faq, 404 | intro, kind chips, the wall, edits row, letter band |
| Mood board for an event, a wedding or a brand | home, explore, idea, board (one per theme), about, contact, 404 | intro, the wall, themes row |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `.search`, `#q`, `.search-clear`, `#suggest`, `.header-end`, `#saved-link`, `#saved-count`, `#theme-toggle`, `#menu-open`, `.wide-only` | Three or four nav links at most. `fitNav()` adds `.compact` when the row does not fit, and the media query does the same below 900px; links and Subscribe then live in `#menu`, a `<dialog class="sheet">`. |
| Search suggestions | `#suggest`, `#popular` (chips), `#cat-tiles` (`.cat-tile`) | Filled from `POPULAR` and four categories. Opens on focus, closes on Escape, outside click and navigation. Enter goes to `#/explore?q=`. |
| Category bar | `#catbar`, `.chipbar`, `.chip` | One chip per category plus "All ideas"; `aria-current` marks the open one. Shown on home and explore only. |
| Intro (home, about) | `.intro`, `.display`, `.lead`, `.actions`, `.collage` | Headline in six words or fewer per line, one lead, a red and a grey button. The collage takes exactly five pictures placed by `nth-child`. |
| Wall | `.wall`, `.wall-col`, `.tile`, `.tile-media`, `.save[data-save]`, `.tile-title`, `.by`, `.av[data-u]` | `renderWall(el, list)` writes tiles; `layout(el)` deals them into columns by each picture's ratio and centres the wall when there are fewer ideas than columns. Home shows `HOME_FIRST` ideas and a "See more ideas" button. Keep a static copy of the first dozen tiles in the HTML for pages without JavaScript. |
| Boards row and grid | `.board-grid`, `.board`, `.cover` | Covers use the board's first three ideas. Count and person come from the data. |
| Page head | `.page-head`, `.h1`, `.lead`, `.count`, `.head-row` | Centred title and one lead; counts in small muted 600. |
| Explore | `#x-title`, `#x-lead`, `#x-count`, `#x-clear`, `#wall-explore`, `#x-empty`, `#x-suggest` | `?c=<category>` filters, `?q=<words>` searches title, description, category, person and the boards an idea is on (every word must match); both together narrow further. Empty results show chips of popular searches. |
| Close-up | `.closeup`, `#d-img`, `[data-share]`, `#d-board`, `#d-save`, `#d-cat`, `#d-title`, `#d-desc`, `#d-notes`, `.person`, `[data-follow]`, `#wall-related` | `?id=` picks the idea. The board select decides where Save puts it. Related ideas: same category first, then the same person. The back button returns to the previous view. |
| Board | `#b-title`, `#b-who`, `#b-desc`, `#b-count`, `#b-follow`, `#b-sections`, `#wall-board` | `?b=` picks the board. Section chips are the categories inside the board, shown when there are two or more. |
| Boards list | `[data-filter="curator"]`, `#all-boards [data-curator]`, `#boards-count`, `[data-empty]`, `[data-reset]` | Filter chips by person, a live count and an empty state. |
| Profile | `#p-av`, `#p-name`, `#p-role`, `#p-bio`, `#p-stats`, `#p-follow`, `[role=tab]`, `#pane-ideas`, `#pane-boards` | `?u=` picks the person; `?tab=boards` opens the boards tab. Arrow keys move between tabs. |
| Saved | `#wall-saved`, `#s-count`, `#s-clear`, `#s-empty` | Newest first, from the `fernwick-saved` store key. |
| About | `.split`, `.collage`, `.trio`, `.people` | Story beside a collage, three steps with red numbers, the people. |
| Signup (the letter) | `[data-form="signup"]`, `.group[data-min]`, `.opt` | Email required, at least one subject, how often; the success panel repeats the email, frequency and subjects. |
| Contact | `[data-form="contact"]`, `#c-topic`, `#c-link`, `#c-message[data-min]`, `#c-own[data-needed-for]` | `?topic=` preselects. The link must be a full URL; the message needs 20 characters; sharing work requires the permission tick. |
| FAQ | `.faq`, `details`, `summary` | `?at=<id>` opens at a question's position. |
| Footer | `.site-footer`, `.footer-grid`, `[data-form="newsletter"]`, `.inline-form`, `.footer-bottom` | Wordmark and one line, two lists, the letter signup, the legal line. |
| Toast | `#toast-slot`, `.toast` | Written by `toast(html)`; disappears after a few seconds. |
| 404 | `data-view="404"`, `.notfound` | One display line, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/idea?id=loaf`, `#/explore?c=clay`, `#/explore?q=lamp`, `#/board?b=weekend-bakes`, `#/curator?u=juno&tab=boards`, `#/contact?topic=share`).
- The `titles` map sets the document title per view (ideas, boards and people set their own), and the `section` map keeps the right header link highlighted on child views (`idea` under Explore, `board` under Boards, `curator` under About). Update both when you add or rename views.
- Saves, follows and the theme are kept with the sandbox-safe `store` wrapper. On a real site with accounts, keep the same buttons and swap the storage for the user's saved list.
- In a framework project, replace the router with real routes (one per idea, board and person), render the wall on the server with the same CSS columns, and run `layout()` after hydration.
