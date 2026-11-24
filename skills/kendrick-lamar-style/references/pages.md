# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. `#/records/<slug>` opens the record view, `#/store/<slug>` the item view and `#/notes/<slug>` the note view. Views with `class="folder"` sit on the white desk surface; views with `class="file"` are black. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. The desk holds one icon per folder or single page, so the folder names are the site map. Keep the desk to seven things or fewer.

| Site | Folders (white) | Files (black) | On the desk |
|---|---|---|---|
| Musician or band (the template) | records, shows, store, notes | record, item, note, about, contact, the letter, legal, 404 | four folders, the newest cover, about, the letter |
| Design studio or illustrator | work (as `records`: project covers in the icon grid, kinds as filter words), journal (as `notes`) | project (as `record`: a hero picture, a short text, a list of credits in place of tracks), post, about, contact, legal, 404 | work, journal, the newest project's picture, about, contact |
| Photographer or film maker | series or films (icon grid of stills), screenings (as `shows`) | one series or film (several small pictures stacked in the column), about, contact, legal, 404 | series, screenings, one still, about, contact |
| Writer, poet or small press | books (icon grid of covers), readings (as `shows`), notes | book (cover, blurb, contents in place of tracks, where to buy), note, about, the letter, contact | books, readings, notes, the newest cover, the letter |
| Small label or shop of a few things | releases or products (icon grid), store | release or item, about, contact, legal | releases, store, about, contact |
| Creator with a newsletter and talks | notes, talks (as `shows`) | note, about, the letter, contact | notes, talks, about, the letter |

For one person, write in the first person and sign notes with initials. For a studio, write "we" and sign with the studio's short name.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.bar`, `.mark`, `.nav`, `.bar-end`, `.lk`, `#theme-toggle`, `#menu-open`, `#menu` (`<dialog class="sheet">`), `.sheet-links` | The name at the left, up to five folder names in the centre, contact and the theme toggle at the right. `fitNav()` adds `.compact` when they would collide; under 640px the menu word always replaces them. The sheet lists every folder and document with its icon. |
| Desk | `.desk`, `.it` with `--x`, `--y`, `--mx`, `--my`, `--i`, `.fd` with `.fd-ink`, `.fd-grey`, `.fd-paper`, `.fd-accent`, `.doc`, `.new`, `.desk-note` | Six or seven `<a class="it">`: an icon (`<svg class="px fd fd-ink"><use href="#i-folder"/></svg>` or `<svg class="px doc"><use href="#i-doc"/></svg>`) or one 88px picture, then `<span class="sel">label</span>`. Positions are percentages; check them at 1440, 1024, 768 and 390 so no two items touch. One accent folder at most. `.desk-note` is an optional one-line announcement in the bottom-left corner on wide screens. The H1 is `.sr-only`. |
| Folder head | `.crumb`, `.back`, `.fhead`, `[data-count]`, `.lede` | Back arrow to the desk and "desk / name"; the folder icon at 1x, the H1 and a live count ("8 items"; the unit word is read from the markup and pluralised); one lede sentence. |
| Filter words | `.tools`, `.chips[data-filter="<view>"][data-param]`, `button[data-value]`, `.seg button[data-mode]`, `[data-empty]`, `[data-reset]` | One group per folder. Each item carries `data-k` with exactly one value; counts are added by the script. `?kind=` (or `?region=` on shows) preselects. The records folder also switches between icons and a list (`?view=list`, remembered). |
| Icon grid | `.grid[data-group]`, `li[data-k][data-slug]`, `.t`, `.m`, `.out`, `.as-list` | A square picture, the name as a selectable label, one muted line (kind and year, or the price). Sold-out items strike the price. |
| Rows | `.rows[data-group]`, `.row`, `.d`, `.t`, `.k`; shows add `.c`, `details`, `.more`, `.k.out` | Date, title (or city and venue), kind or status. Notes link to their file; shows open in place. |
| Notify form | `.notify`, `[data-form="notify"]`, `.inline`, `[data-success="notify"]` | City and email on one line with the button, under the shows. |
| Record file | `[data-r="…"]`: date, cover, title, meta, note, tracks, credits, buy, next, next-t | Filled from the folder tile (title, cover, kind) and `RECORDS` (date, tracks, note, credits, store slugs). Minutes and track count are computed. `buy` links to store items by slug and hides when there are none. |
| Item file | `[data-i="…"]`: kind, img, name, price, desc, opt-label, opts, add, facts; `[data-form="bag"]`, `.opt`, `.qty`, `[data-step]`, `[data-added]` | Filled from the store tile (name, picture, price, kind, `data-out`) and `ITEMS` (option label, options with stock, description, facts). A single in-stock option is preselected; when nothing is in stock the button reads "sold out". "Add to bag" only counts: a real cart needs a backend. |
| Note file | `[data-n="…"]`: date, title, body, fig, img, cap, next, next-t; `.prose`, `.pic`, `.sig` | Filled from the notes row and `NOTES`. The first note's body and picture are written in the page so it reads without JavaScript. Pictures in `NOTES` are full quoted paths. |
| About, contact, the letter | `.col`, `.facts`, `[data-form="contact"]`, `[data-form="letter"]`, `.radios`, `.check`, `[data-success]`, `[data-echo]`, `[data-again]` | Plain text in the column; contact has name, email, topic (`?topic=`), a message of 20 characters or more and an optional letter tick; the letter has email, an optional first name and how often. Success panels repeat what was sent. |
| Legal and 404 | `data-view="legal"` with `#privacy` and `#terms`, `data-view="404"`, `.notfound` | Legal is one file with two h2 sections. The 404 says "file not found" at display size, one sentence and two buttons. |
| Footer | `.foot` | Slash-separated words to the single pages, then the copyright and an address. |

## Routing and state

- `#/records?kind=album&view=list`, `#/store?kind=cloth`, `#/notes?kind=road`, `#/shows?region=asia` preselect the filter (and the layout). Unknown values fall back to everything.
- `#/records/<slug>` must match a `li[data-slug]` in `#records-list` and a key in `RECORDS`; the same goes for the store (`ITEMS`) and notes (`NOTES`, except the first note). Anything else, including `#/record` without a slug, shows the 404 view.
- `titles` sets the document title per view; record, item and note titles are set when they render. `PARENT` keeps the right header word selected on child views. Update both when you add or rename views.
- The click handler grows a black rectangle from the clicked icon or picture whenever a desk or folder link opens a file (`zoom()`), then shows the view. Keep it on any new file view; skip it for links between files.
- In a framework project, give each record, item and note a real URL, render folders on the server, keep filters as query parameters, and keep the zoom as a small client-side transition.
