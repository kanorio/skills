# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. `#/work/<slug>` opens the project view and `#/journal/<slug>` the post view. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. The two blanks of the sentence change with the trade.

| Site | Views | The sentence | Home sections, in order |
|---|---|---|---|
| Design or branding studio (the template) | home, work, project, studio, people, journal, post, contact, privacy, terms, 404 | We make [anything] for [anyone] | wall with the sentence pill, statement, band (a feature), latest work, journal |
| Architecture or interiors practice | home, work (as projects), project, studio (as practice), people, journal, contact, 404 | We design [buildings] for [living] / in [the city] | wall of buildings, statement, band (one recent building with drawings as cards), latest projects, journal or awards the user names |
| Photographer or film director | home, work (as series), project (as a series with more pictures), studio (as about), journal, contact, 404 | I photograph [anything] for [anyone] | wall of single frames, one-line statement, band (a commission or a book), latest series |
| Brand or strategy consultancy | home, work (as cases), project (as a case study), studio, people, journal (as thinking), contact, 404 | We help [companies] with [naming] | wall, statement, band (one case with results the user supplies), latest cases, thinking |
| Illustrator, type foundry or print studio | home, work, project, studio, journal, contact, 404 | We draw [anything] for [publishers] | wall of pieces, statement, band (a type family or a print run), latest work |
| Gallery, festival or museum shop wanting a quiet portfolio | home, work (as exhibitions), project (as one exhibition), studio (as visit), journal, contact, 404 | Showing [everything] by [everyone] | wall, statement, band (now on), past exhibitions |

For a one-person practice, change "we" to "I", drop the people view, and let the studio page carry a portrait.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.brand`, `.nav`, `.header-end`, `#theme-toggle`, `#menu-open`, `#menu` (`<dialog class="sheet">`), `.sheet-links` | Wordmark, up to six short links, the toggle. `fitNav()` adds `.compact` when the links would wrap; under 720px the links always move into the sheet. |
| Wall (home) | `.wall`, `.wa` … `.wg` (grid areas), `.label`, `--i` (entrance delay) | Seven tiles on a 6 by 4 grid: one 3x3, two 2x2, two 1x2 and two small (1x1 and 2x1). With five pictures, drop `.wd` and `.we` and set `.wa` to `grid-area: 1 / 1 / 5 / 4`. Each tile links to its project; its `.label` holds the client and one discipline word. |
| Sentence | `.sentence-wrap[data-sentence="route" or "filter"]`, `.sentence`, `.word[data-pick="make" or "for"]`, `.w`, `.options[role=listbox]` | One wrapper per sentence, holding the sentence and its option list. `route` (the home pill, `.pill`) navigates to `#/work?make=&for=`; `filter` (the work H1) filters in place. Options are built from `VOCAB` with live counts. |
| Statement | `.intro`, `.label`, `.statement`, `.btn` | The home H1: who the studio is and what it makes, in one or two sentences. |
| Band | `.band`, `.band-head`, `.inset`, `.cards` or `.principles`, `.next` | Label, H1-size title, grey paragraph, one button, then an inset panel with four cards (a sideways scroller under 900px) or three numbered principles. On a project page the band is the next-project link. |
| Tiles | `.tiles`, `.tile`, `.s6`, `.s8`, `.tall`, `.drop`, `.ph`, `.t`, `.d` | Default span 4. The work grid's classes are rewritten by `PATTERN` after every filter, so the rhythm survives any selection; the home grid keeps the classes you write. |
| Work bar | `.work-bar`, `#work-count`, `[data-reset-work]`, `.seg button[data-mode]`, `#work-index`, `#work-empty` | Count ("Showing all 12 projects"), a "Show everything" link when filtered, Tiles and Index. `?view=index` opens the index. The empty state offers the reset. |
| Project | `[data-p="…"]` slots, `#facts-toggle`, `#p-facts`, `.p-hero`, `.p-text`, `.p-pair`, `.crop`, `.palette`, `.p-cta` | Filled from the tile with that slug (name, line, picture, tags, year) and the `cases` entry (partner, scope, colours, brief, idea). The static HTML shows the first project, so it reads without JavaScript. |
| Studio | `.split`, `.copy`, `.wide`, `.rows` with `[data-count-make]`, `.clients` | Two-column head, a 21:9 picture, the disciplines as big rows linking to the filtered work with live counts, the band with principles, a client list in columns. |
| People | `.chips[data-filter="studio"]`, `.people`, `li[data-studio]`, `[data-count="studio"]`, `[data-empty="studio"]` | Portraits at 4:5 in fours, name and "discipline · city" under each. `?studio=` preselects. |
| Journal and post | `.posts`, `.card[data-kind][data-slug][data-author]`, `.meta`, `.title`, `[data-a="…"]`, `.prose`, `.pull`, `.byline` | Cards in threes; the post view takes its head from the card and its body from `posts` (the first post's body is written in the page). `?kind=` preselects. |
| Contact | `[data-form="contact"]`, `.fields`, `.field`, `.input`, `.select`, `.error`, `.check`, `#c-make-field`, `[data-success="contact"]`, `[data-echo]`, `[data-again]` | Name, email, organisation, topic (`?topic=`), what to make (`?make=`, shown only for new projects), message (20 characters at least), letter tick. Studios and addresses beside it. |
| Footer | `.site-footer`, `.foot`, `.foot-letter`, `[data-form="newsletter"]`, `.foot-col`, `.foot-bottom` | The studio letter signup, three short lists, the legal line. |
| Legal and 404 | `data-view="privacy"`, `"terms"`, `"404"`, `.legal`, `.notfound` | Plain text at 44em; the 404 is one display line and two buttons. |

## Routing and state

- `#/work?make=identities&for=culture&view=index` sets both words and the layout; the sentence, the count, the tiles and the index all follow. Unknown values fall back to `all`.
- `#/work/<slug>` must match a tile's `data-slug` and a key in `cases`; anything else shows the 404 view. `#/journal/<slug>` works the same with the journal cards and `posts`.
- `#/contact?topic=project&make=type` preselects both selects (the project page's button does this).
- `titles` sets the document title per view (project and post titles are set when they render), and `section` keeps the right header link dark on child views. Update both when you add or rename views.
- In a framework project, give each project and post a real URL, render the work grid on the server, keep `?make=` and `?for=` as query parameters, and keep the sentence as a client component.
