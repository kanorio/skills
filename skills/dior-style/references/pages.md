# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Header, footer, home and 404 always ship.

| Site | Views | Home sections, in order |
|---|---|---|
| Fashion house with ready-to-wear and fragrance (the template) | home, collection, piece, selection, films, film, shows, maison, appointment, services, legal, 404 | hero film, story, diptych, new in, wide film, savoir-faire split, next show, services, letters |
| Bridal or eveningwear atelier | home, collection (as gowns, filtered by silhouette), piece (as one gown, "Book a fitting" first), films (as real weddings or fittings), maison, appointment (bridal first), services, legal, 404 | hero film, story, diptych (two gowns), new in, savoir-faire split, appointment band, services, letters |
| Fragrance or skincare studio | home, collection (as scents or the range, filtered by family), piece (sizes as millilitres), films (as notes and rituals), shows (as workshops and launch evenings), maison (as the studio), appointment (as consultations), services, legal, 404 | hero film, story, new in, wide film (the ingredient), savoir-faire split (the lab or garden), next event, services, letters |
| Independent designer label | home, collection, piece, selection, films (as lookbooks and show films), shows (as stockists and trunk shows), maison (as the designer), appointment, services, legal, 404 | hero film, story, diptych, new in, wide film, next show, letters |
| Jeweller or watchmaker | home, collection (filtered by line or metal), piece (sizes as ring sizes or none), films, maison (as the workshop), appointment, services, legal, 404 | hero film, story, diptych, new in, savoir-faire split, services, letters |
| Concept store or curated boutique | home, collection (filtered by designer or category), piece, selection, films (as the journal), shows (as in-store events), maison (as the shop), appointment (as personal shopping), services, legal, 404 | hero film, story, new in, diptych, next event, services, letters |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hd`, `.hd-start`, `#menu-open`, `.nav`, `.brand`, `.hd-end`, `#theme-toggle`, `.hd-appt`, `.bag`, `[data-bag-count]` | Up to four short links. `fitNav()` adds `.compact` when they do not fit. On home the header is clear and white until the page scrolls (`.solid`). |
| Menu drawer | `dialog#menu.drawer`, `.drawer-links`, `.drawer-more`, `#menu-close` | Every view the header cannot show; three tracked links at the bottom. |
| Hero film | `section.film.hero[data-film]`, `img.frame` (first `.on`), `.film-cap`, `.display`, `.links`, `.film-ui`, `.play`, `.segs`, `.seg` | Two to four stills of one campaign, one caption line, the display line, two underlined links. One `.seg` per still. |
| Story | `#story.sec.narrow.center` | Caption, serif H2, a lede of one or two sentences, two underlined links. |
| Diptych | `.diptych`, `article`, `.film.tall`, `.film-note` | Two 4:5 films side by side with a 2px seam, each with its note underneath. One column on phones. |
| New in | `#new-in`, `.rail-head`, `.grid[data-clone="id id id id"]` | Four tiles copied from the collection by id, so prices and names stay in one place. |
| Wide film | `.film.wide`, `.film-note` | A 21:9 film (4:5 on phones) with its story underneath. |
| Savoir-faire split | `.split`, `figure`, `.split-copy` | A 4:5 picture edge to edge on the left, centred copy on pearl on the right. |
| Next show | `#next-show.sec.narrow.center` | Caption, H2, one sentence with the date and place, two links. |
| Services | `.services` on `.pearl` | Four columns of icon, caption, one sentence and a link; two by two under 1100px. |
| Page head | `.page-head`, `.cap`, `.h1`, `.lede`, `.crumbs` | Centred. Every view without a hero film opens with it. |
| Collection | `.toolbar`, `[data-filter="cat"]`, `.chip[data-value]`, `[data-count="collection"]`, `#sort`, `#products`, `a.tile[data-id]`, `.film-tile`, `[data-empty="collection"]`, `[data-reset="collection"]` | `?cat=` preselects. Each tile carries the product record: `data-id`, `data-cat`, `data-kind`, `data-price`, `data-sizes` (spaces, or `|` when a size has a space), `data-colour`, `data-look` (four ids), `data-desc`. Keep the film tile fifth; sorting keeps it there. Twelve products fill the grid evenly around the film tile. |
| Product page | `[data-view="piece"]`, `[data-gallery]`, `.piece-main`, `.thumb`, `.piece-info`, `[data-p="…"]`, `[data-size-list]`, `#err-size`, `#add`, `#fitting`, `#added`, `details.acc`, `[data-look-grid]` | `#/piece?id=<id>` fills the name, price, kind, description, colour, sizes, the first picture and "Worn with" from the tile. The second pill follows the category: a fitting, a consultation or a viewing. |
| Selection | `#rows`, `template#row-tpl`, `[data-r="…"]`, `[data-step]`, `[data-remove]`, `#sel-empty`, `.summary`, `[data-sum]` | Kept in the store under `veranne-selection`; the header count follows it. "Send to a client adviser" opens the appointment form with the list in the notes. |
| Films | `.feature.card`, `[data-filter="kind"]`, `.cards`, `.card[data-kind]`, `.badge-play`, `[data-count="films"]`, `[data-empty="films"]` | One featured film, then three across. `?kind=` preselects. |
| Film page | `.film.screen.flex[data-film][data-caps]`, `img.frame[data-cap]`, `#film-chapter`, `.prose`, `.quote`, `.credits`, `.grid[data-clone]` | The chapter line under the film follows the still (`data-cap`). The article's H2s repeat the chapter names. |
| Shows | `[data-filter="city"]`, `.events`, `.event[data-city]`, `.day`, `.state`, `[data-count="shows"]` | Each date links to the appointment form with `?service=` and `?salon=`. A wide film of the last show follows. |
| Maison | `.page-head`, full-width `figure`, `.prose`, `.timeline`, `.cards` | Four to six dates; three ateliers or people. |
| Appointment | `form[data-form="appointment"]`, `fieldset[data-group="service"]`, `.pick`, `#a-salon`, `#a-date`, `fieldset[data-group="time"]`, `#a-notes`, `.check`, `[data-success="appointment"]`, `[data-echo]`, `[data-again]`, `.salons` | `?service=`, `?salon=`, `?piece=` and `from=selection` preselect. The date starts tomorrow. The success panel repeats service, salon, date, time and email. |
| Client services | `#faq-q`, `[data-count="faq"]`, `.faq-group`, `details.acc`, `[data-empty="faq"]` | The search filters questions and hides empty groups. Group IDs (`orders`, `returns`, `care`, `appointments`) are link targets with `?at=`. |
| Letters | `form.letters-form[data-form="letters"]`, `[data-success="letters"]` | One email field, one consent box, one black pill. |
| Footer | `.site-footer`, `.letters`, `.f-cols`, `.f-base` | Letters, four link columns, wordmark and legal line. |
| Legal | `.legal`, `#privacy`, `#terms`, `.legal-nav` | Privacy notice and terms on one view; `?at=terms` scrolls. |
| 404 | `data-view="404"`, `.notfound` | One caption, one H1, one sentence, two links. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/piece?id=coat`, `#/collection?cat=fragrance`, `#/appointment?service=fitting&salon=tokyo`).
- `at=<id>` scrolls to that section after the view opens; plain `#id` links scroll inside the current view.
- The `titles` map sets the document title per view (the product page uses the product's name), and the `section` map keeps the right header link marked on child views (`piece` under `collection`, `film` under `films`). "Collection" and "Fragrance" share the collection view; the category decides which is current. Update both maps when you add or rename views.
- The collection tiles are the catalogue: the product page, "New in", "Worn with", "In the film" and the selection all read them. Add a product by adding one tile.
- In a framework project, replace the router with real routes (one per product and per film), the tiles with typed product data, and `at` with ordinary fragment links.
