# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links (`#/book?id=<id>`, `#/events?kind=<kind>`, `#/contact?topic=<topic>`). In a framework project each view becomes a real route. The home view sits on the blue canvas; every other view opens with a colour band on the warm white page.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Give each nav section one band colour (yellow, orange, green, blue, brown; grey for contact and legal pages) and use the same colour for its menu tile.

| Site | Nav (lowercase) | Views | The wall holds |
|---|---|---|---|
| Picture-book author, illustrator or small press (the template) | books, play, events, about, grown-ups | home, books, book, bag, play, events, about, grown-ups, contact, privacy, 404 | one tile per book, a film, the game, events, the studio, the newsletter |
| Children's bookshop | books, events, visit, about, help | home, books (with more chips: age, theme, new), book, bag, events (story times), about, grown-ups (as help), contact, privacy, 404 | new books, staff picks, story time, the shop, gift cards (as a placeholder until real) |
| Kindergarten, preschool or playgroup | our days, groups, visit, about, parents | home, books (as groups or rooms, with an age chip each), book (as one group: a day in pictures, times, ratio, fees), events (as open days and visits), about, grown-ups (as parents' FAQ), contact (with a "book a visit" topic), privacy, 404; drop bag and play | one tile per group or room, the garden, lunch, open day, the team (drawn), how to apply |
| Family café or play space | play, eat, parties, visit, about | home, books (as the menu or the play areas), events (as sessions and parties), bag (as a party booking request), about, grown-ups, contact, privacy, 404 | play areas, food, a party scene, opening hours, the newsletter |
| Children's goods or toy shop | shop, new, gifts, about, help | home, books (as products, chips for age and kind), book (as a product with views instead of pages), bag, about, grown-ups (as delivery and returns), contact, privacy, 404 | one tile per category or product, a film of how a toy works, gift wrapping |
| Kids' classes (art, music, swimming) | classes, timetable, teachers, about, parents | home, books (as classes), book (as one class: what you will make, ages, dates), events (as the timetable), about, grown-ups, contact, privacy, 404; drop bag or turn it into a booking request | one tile per class, a film, the next term, the teachers (drawn) |

Four to six nav links. Header, footer, home, contact, privacy and 404 always ship.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-head`, `.head-in`, `.brand`, `.logo`, `.word`, `.nav`, `.tools`, `.head-btn`, `[data-bag-count]`, `#theme-toggle`, `.menu-pill`, `#menu`, `.menu-tiles` | Badge logo and lowercase wordmark, four to six links, bag and theme buttons. Canvas-blue on the home view (`body[data-page="home"]`), page-coloured elsewhere. Below 960px the links hide behind the `menu` pill, which opens a three-across grid of menu tiles. Without JavaScript the links stay visible and scroll sideways. The wordmark hides below 380px; the logo link keeps its accessible name. |
| Hero | `[data-view="home"].canvas`, `.hero`, `.hero-art`, `.display` | One drawing built from three to five symbols on a ground line, the lowercase brand name as the H1, one sentence. Nothing else: no buttons. |
| Wall | `.wall`, `.tile.c-<colour>`, `.tile.wide`, `.cap`, `.play`, `[data-film]` | 8 to 20 tiles, two wide at most. Every tile is a link to a view, a section (`#letter`) or a film (`data-film`). Neighbours never share a colour. `--i` staggers the entrance. |
| Band | `.band.b-<colour>`, `.band-in`, `.back`, `.lead`, `.band-art` | Lowercase H1, one lead of one or two sentences, at most one control. The drawing is any `#a-*` symbol. Privacy has no drawing. |
| Search | `.search`, `[data-search]` | A white pill field in the books band; it filters by title and the book's `theme` words. |
| Filter head | `.list-head`, `[data-shelf-title]`, `.chips`, `.chip[data-age]`, `[data-events-title]`, `.chip[data-kind]` | A lowercase H2 with a live count ("all books (9)", "coming up (6)") and chips with `aria-pressed`. `?age=`, `?q=` and `?kind=` preselect. |
| Shelf | `.shelf` (`data-shelf`, `data-more`), `.book`, `.cover.c-<colour>`, `.cover-title`, `.book-name`, `.book-meta`, `[data-empty]` | Rendered from `BOOKS`; the first four are written in the HTML for readers without JavaScript. The empty state has a drawing, one line and "show all books". |
| Book | `data-view="book"`, `[data-book-band]`, `[data-b="title|blurb|price|ages|pages|format"]`, `[data-b-art]`, `.reader`, `[data-pages]`, `.pg`, `.pg-art`, `[data-turn]`, `[data-page-label]`, `.buy`, `.facts`, `[data-add]`, `[data-added]` | `?id=` picks a book. The band takes the cover colour (white covers use the grey band). Three to eight sample pages; arrows and the arrow keys turn them. "more books" lists four, same age first. |
| Bag | `data-view="bag"`, `[data-lines]`, `.line`, `.qty`, `[data-qty]`, `[data-remove]`, `[data-bag-empty]`, `[data-checkout]`, `.sum`, `[data-subtotal]`, `[data-total]`, `data-form="order"`, `[data-address]` | Lines from the store wrapper (`tumbletree-bag`). The form is an order request: name, email, post or collect (collect hides the address), success panel. Connect a real checkout before taking money. |
| Memory game | `data-view="play"`, `.game-head`, `[data-status]`, `[data-new-game]`, `.memory` (`data-memory`), `.mcard`, `.face.front`, `.face.rear`, `[data-win]`, `[data-win-text]` | Six pairs from `PAIRS` in the script, shuffled each game, two cards at a time, a live status line and a win panel. Without JavaScript the six pictures show face up. |
| Films | `.films`, `.tile.wide[data-film]`, `.film` (`data-film-dialog`), `[data-stage]`, `[data-mover]`, `[data-ground]`, `[data-caption]` | `FILMS` holds a title, a drawing, a stage colour and caption lines. Replace the drawn scene with `<video controls>` and a captions track when the brand has real films. |
| Events | `.events` (`data-events`), `.event.card[data-kind]`, `.date.c-<colour>`, `.act`, `.seats`, `[data-book-event]`, `[data-events-empty]` | Written in the HTML (no data array). "book a seat" scrolls to `#booking`, preselects the event and focuses the name field. |
| Booking | `#booking`, `.form-grid`, `data-form="booking"`, `.side` | Event, grown-up's name, email, children coming, an optional note; a side card with where, cost and rules. |
| Story split | `.split`, `.prose`, `.tile` | Text on the left, one big tile with a drawing on the right. |
| Card links | `.links`, `.card-link`, `i-go` icon | Three pale grey cards linking to other views, each with an orange circled arrow. |
| FAQ | `.faq`, `details`, `summary` | Four to eight questions grown-ups ask; the arrow turns when open. The first may start open. |
| Contact | `data-form="contact"`, `.opts`, `.opt`, `.side` | Topic pills (`?topic=` preselects), name, email, message (10 characters at least), success panel; a side card with address, hours, email, phone. |
| Privacy | `data-view="privacy"`, `.prose` | A grey band without a drawing, then plain headed paragraphs. Sample text until the owner supplies their own. |
| 404 | `data-view="404"`, `.lost` | An orange band with a lost drawing, a "back to the wall" button, three card links. |
| Footer | `.site-foot`, `.foot-grid`, `#letter`, `.letter-form` (`data-form="newsletter"`), `.foot-small` | Canvas-blue on every page. Logo and address, lowercase links, the newsletter with a success line, small print with privacy and contact. |

## Forms

Every form carries `data-form="<kind>"` and `novalidate`; fields that need checking have `required`, the right `type` and an `aria-describedby` pointing at a `.err` paragraph that reserves one line. The script validates on blur (only once something was typed) and on the submit button's click, focuses the first problem, then hides the form and shows `[data-success="<kind>"]`, echoing the first name into `[data-echo="name"]`. Nothing is sent: connect a real endpoint before launch.
