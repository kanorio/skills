# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. This style suits brands that publish something every day or week and sell a few things they make: reading first, shop second, both on the same shelves.

| Site | Views | Home sections, in order |
|---|---|---|
| Lifestyle, stationery or kitchenware brand with a daily read (the template) | home, reads, read, shop, product, bag, visit, letters, about, faq, legal, 404 | story band, ribbon, daily column with sidebar, reads row, shop grid with one read inside, cream pick, rose favourites, mint places |
| Web magazine or newsletter with a small shop | home, reads, read, shop, product, bag, letters, about, legal, 404 | story band, daily column, two or three reads rows by kind, rose favourites, shop grid, newsletter row in the footer |
| Zakka shop, ceramics or craft store that tells stories | home, shop, product, bag, reads, read, visit, about, faq, legal, 404 | story band about makers, ribbon, shop grid with reads inside, cream pick, reads row, mint places |
| Maker, workshop or craft school | home, visit (as classes), reads (as journal), read, shop, product, bag, letters, about, legal, 404 | story band, column as the teacher's note, mint places with class rows and a booking form, reads row, small shop grid |
| Cafe, bakery or tea house with a journal | home, reads, read, visit, letters, about, legal, 404 | story band, daily column as "today's bake", mint places with hours, reads row, rose favourites (most loved recipes) |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.head`, `.brand`, `.tabs`, `.tools`, `.today[data-today]`, `.md`, `.dow`, `[data-count]`, `#theme-toggle` | Handwritten wordmark with the sun doodle, three or four tabs, today's date, bag, theme. On the home view (`[data-at="home"]`) the header takes `--band`. Two rows under 860px. |
| Story band | `.band[data-band]`, `.band-grid`, `.slides`, `.slide[data-tone]`, `.slide-text`, `.kicker`, `.dek`, `.slide-media`, `.band-ctrl`, `.long[data-step]`, `[data-counter]`, `.rail`, `[data-goto]` | Three to seven stories. Each slide: doodle, tag and part, H2 title, dek, square picture. Tones cycle through oat, peach, sky, sage, lilac. Without JavaScript only the first story shows. |
| Ribbon | `.ribbon`, `.ribbon-text`, `.ribbon-note`, `.ribbon-pics` | One promotion at a time: the name in handwriting, a year or short label in bold, one line, four pictures. |
| Daily column | `#margin`, `.today-grid`, `.margin`, `.margin-head`, `.margin-label`, `.byline`, `.margin-body`, `.margin-thanks`, `.signature`, `.margin-links` | Two or three stanzas of four to seven short lines, written with `<br>`. A thank-you line, a handwritten signature, two links. |
| Sidebar | `.side`, `.studio`, `.studio-frame`, `.bubble`, `.avatar`, `.out-card`, `.out-inner`, `.when`, `.tag.now` | One dark studio card (picture and a question of the day), one tone card for something happening now. |
| Section head | `.shead`, `.icon`, `h2` or `h1`, `.note`, `.see-all` | Starts every list. One icon from the sprite, one pill at most. |
| Reads row | `.row[data-row]`, `.round[data-prev]`, `.round[data-next]`, `.track.as-list`, `a.card` | Five to eight cards, four visible on desktop, a ruled list on phones. |
| Grid of goods | `.grid4`, `a.card` or `div.card`, `.thumb`, `.stamp`, `.card-title`, `.card-dek`, `.add[data-add]` | Four columns; every seventh or eighth card can be a read (`.stamp.is-read`). |
| Pick shelf | `.pastel.cream`, `.pickup`, `.pill-label`, `.btn.warm` | One pick per week: label, title, two or three sentences, one button, one picture. |
| Favourites | `.pastel.rose`, `.loved`, `.rank` | Four numbered items with the year they were first published. |
| Places | `.pastel.mint`, `.venue`, `.venue-head`, `.erow`, `.tag.now` | A white panel per venue: handwritten name, pill to the visit view, one line, then event rows. |
| Page head | `.page`, `.shead` with `h1`, `.lead` | Top of every list and info view. |
| Filters and sort | `.toolbar`, `.chips[data-filter-for]`, `.chip[data-filter]`, `.chip i` (color dot via `--dot`), `[data-cat]`, `[data-empty]`, `#sort` | `?cat=` presets a chip. Items with `data-cat="aside"` are interleaved cards: shown under "All" only. Sorting moves goods and keeps asides at `data-slot`. |
| Show more | `[data-more]`, `[data-more-button]` | Extra cards hidden behind one button; visible without JavaScript. |
| Article | `.article-band[data-tone]`, `.article-head`, `.sub`, `.meta`, `.article-body`, `.talk`, `.who`, `.who.b`, `.pull`, `.inline-product`, `.parts`, `.write-back` | Head in a tone, a narrow body, conversation lines, one pull quote, one inline product, part numbers, related reads. |
| Product | `.pdp`, `.gallery`, `[data-main-img]`, `form[data-buy]`, `.opt`, `.swatches`, `.swatch`, `.seg`, `.stepper`, `[data-qty]`, `.ship-note`, `.short-lines`, `.acc` | Cover swatches swap the main picture (`data-art`), size pills change the price, quantity stepper, "Add to bag". |
| Bag and checkout | `[data-bag-full]`, `[data-lines]`, `.line`, `.summary`, `.sums`, `[data-free-note]`, `[data-form="checkout"]`, `[data-bag-empty]` | Lines are rendered from the `catalogue` in the script; pictures are copied from images on the page with the same `data-art`. |
| Visit | `.two`, `.note-card`, `.hours`, `.events.venue`, `#workshop`, `[data-form="booking"]` | Picture, short lines, hours card, event rows, a booking form. `#/visit?at=workshop` scrolls to the form. |
| Letters (contact) | `[data-form="letter"]`, `#l-topic`, `.check` | Topic select, name, email, letter, a consent tick. `?topic=` presets the topic. |
| About | `.short-lines`, `.people`, `.avatar` | Short lines about what the place does, then people with initials avatars. |
| Help | `.acc.faq-group` | Groups of two or three questions. |
| Footer | `.site-footer`, `.foot-links`, `.post#newsletter`, `[data-form="newsletter"]`, `.legal` | Links, the newsletter row, legal links, wordmark, copyright. |
| 404 | `data-view="404"`, `.notfound` | The bird doodle, one H1 sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/reads?cat=kitchen`, `#/letters?topic=story`, `#/visit?at=workshop`).
- Plain `#id` links scroll inside the page; if the target lives on another view (for example `#margin`), that view opens first.
- The `titles` map in the script sets the document title per view, and `tabFor` keeps a tab underlined on views that belong to it (an article under "Reads", the bag under "Shop").
- The article and product views stand for every read and every product in the sample. In a real build, make one page per item from data and point each card at its own page.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
