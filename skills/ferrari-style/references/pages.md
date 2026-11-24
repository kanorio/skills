# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Performance car maker or coachbuilder (the template) | home, range, model (one per car), racing, heritage, dealers, news, article, faq, privacy, terms, 404 | hero, the range (three cards), numbers band, four tiles, news, newsletter |
| Motorcycle workshop or custom builder | home, range (as bikes), model (as one bike), racing (as rides and events), heritage (as the workshop), dealers (as the workshop and a booking), news, faq, 404 | hero, bikes, numbers band (power, weight, seat height, tank), tiles, news, newsletter |
| Watchmaker or jeweller | home, range (as collections), model (as one reference), heritage, dealers (as boutiques and appointments), news, faq, 404 | hero, collection cards, numbers band (case, reserve, depth, parts), tiles (movement, strap, atelier, boutique), news, newsletter |
| Racing team or driving school | home, racing (first in the nav), range (as cars or programmes), model (as a car or a course), heritage (as the team), dealers (as the circuit and a booking), news, article, faq, 404 | hero, next event, numbers band (seasons, wins, podiums), tiles, news, newsletter |
| Luxury hotel, yacht charter or private aviation | home, range (as suites, yachts or aircraft), model (as one of them), racing (as events), heritage, dealers (as locations and an enquiry), news, faq, 404 | hero, the fleet or suites, numbers band (length, guests, range, crew), tiles, news, newsletter |
| Made-to-order brand (bikes, audio, furniture, knives) | home, range, model (with materials as the paint swatches), heritage (as the workshop), dealers (as stockists and a consultation), news, faq, 404 | hero, range, numbers band, tiles, news, newsletter |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.bar`, `.brand`, `.nav`, `.end`, `#theme-toggle`, `#menu-open`, `.btn.sm` | Five short links at most. `fitNav()` adds `.compact` when they do not fit; they then live in `#menu`, a `<dialog class="sheet">` with `.sheet-links` (numbered by a CSS counter) and one red button. Below 520px the header button hides and the menu carries it. |
| Hero | `.hero.on-photo`, `.hero > img`, `.hero-copy`, `.kicker`, `.display`, `.actions.center` | One picture, `fetchpriority="high"`; the label, the display line and two buttons (outline, then red) centred at the bottom. |
| Page hero | `.page-hero.on-photo` (`.short` for a lower one), `.page-hero-copy`, `.index`, `.display` | Index line and display line, left-aligned at the bottom. Used by racing, heritage, dealers and the article. |
| Page head | `.page-head`, `.index`, `.display`, `.lead` | For views that open without a picture: range, news, FAQ. |
| Index line | `.index` with `<b>NN</b>` | Opens every section; numbering restarts on each view. |
| Section head | `.head-row` | An H1 or H2 on the left, a circled link or a count on the right. |
| Cards | `.cards`, `.card`, `.ph` | Three across, wrapping. Picture 16:9 (or `.ph.sq` for 4:3), label, H3 with the link, one muted line. |
| Numbers | `.specs`, `.spec` (`b`, `span`, `small`), `.note` | Exactly four on desktop, two by two below 1024px. Placeholders are zeros, and the note says so. |
| Tiles | `.tiles.on-photo`, `.tile`, `.tile-copy` | Two by two, or one row of two; one column below 820px. Each tile is one link; the arrow inside is a `span.go`. |
| Range | `.toolbar`, `.chips[data-filter="body"]`, `.count[data-count="body"]`, `.models`, `.model-row[data-body]`, `.mini`, `.gos`, `.empty[data-empty="body"]`, `[data-reset]`, `.teaser` | Rows swap sides; `?body=` preselects. The teaser is for a car still under cover. |
| Model | `.model-top` with `[data-m="kind"]` and `[data-m="name"]`, `.stage`, `#m-img`, `.model-bar`, `#swatches`, `#paint-name`, `.subnav`, `#m-drive`, `.split`, `.spec-table`, `.spec-group`, `.rows`, `.details`, `[data-m-link]` | `#/model?m=<key>` fills the view from `MODELS`. Paint swatches swap `#m-img` with a picture found by `img[data-scene]`, so every paint picture must exist once in the markup (the hidden block before the script keeps the ones not shown elsewhere). |
| Racing | `.chips[data-filter="type"]`, `.events`, `.event[data-type]`, `.date`, `.status` (`.live` for red), `.table-wrap`, `table`, `tr.us` | `?type=` preselects. Each event links to the form with `?topic=`. |
| Heritage | `.statement`, `.timeline`, `.year`, `.principles` | Five to eight years; one may carry a picture. |
| Dealers | `.chips[data-filter="region"]`, `.dealers`, `.dealer[data-region]` | Each showroom links to `#/dealers?showroom=<value>&at=drive`. |
| Test-drive form | `#drive`, `.form-grid`, `form[data-form="drive"]`, `.field`, `.field.full`, `.err`, `.check`, `[data-success="drive"]`, `[data-echo]`, `[data-again]` | Topic (`?topic=`), car (`?model=`), showroom (`?showroom=`), day (from tomorrow), time, name, email, phone, licence, note, consent. The success panel repeats the car, showroom, day and time. |
| News | `.chips[data-filter="cat"]`, `.news-grid`, `.card[data-cat]` | The first card is featured (two columns, two rows). `?cat=` preselects. |
| Article | `.page-hero`, `.prose-wrap`, `.prose`, `blockquote`, `figure`, `.facts` | A 2:1 column of text and a facts box topped by a red rule. |
| FAQ | `.faq-group`, `details`, `summary` | Group names on the left; two to five groups. |
| Newsletter | `.band.center`, `form.newsletter[data-form="newsletter"]`, `[data-success="newsletter"]` | One field, one red button. |
| Footer | `.site-footer`, `.foot-cols`, `.foot-base` | Wordmark and one line, three link columns, the legal line. |
| 404 | `data-view="404"`, `.notfound`, `.mega` | "404" in red, one H1, one sentence, one button. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/model?m=tessera`, `#/range?body=spider`, `#/racing?type=track`, `#/dealers?model=vertice&at=drive`).
- `at=<id>` scrolls to that section after the view opens; plain `#id` links (the model sub-navigation) scroll inside the current view.
- The `titles` map sets the document title per view (the model view uses the car's name), and the `section` map keeps the right header link marked on child views (`model` under `range`, `article` under `news`). Update both when you add or rename views.
- `MODELS` holds one entry per car: `name`, `kind`, `body`, `engine`, `gearbox`, `headline`, `intro` and `paints` as `[scene, name, hex]`. Every `[data-m="…"]` in the model view takes the field of the same name.
- In a framework project, replace the router with real routes (one per car and per article), keep the same URLs where possible, and turn `at` into ordinary fragment links.
