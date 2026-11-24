# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. This style suits anything sold one model at a time, where a large picture and a few numbers make the case: vehicles, mobility, energy, gear and other considered purchases.

| Site | Views | Home sections, in order |
|---|---|---|
| Car, motorbike or EV maker (the template) | home, vehicle, design, inventory, drive, energy, locations, support, about, privacy, terms, 404 | hero carousel, lineup rail, one or two product panels, an energy or service panel, charging panel, next-step tiles |
| E-bikes, scooters or boards | home, vehicle (as the bike page), design (frame, colour, battery), inventory (ready to ship), drive (as a test ride), locations (dealers), support, privacy, terms, 404 | hero carousel, lineup rail, a panel per range, next-step tiles |
| Home batteries, solar or heat pumps | home, energy (as the product page), design (sizing the system), drive (as a consultation or site survey), locations (installers), support, about, privacy, 404 | one product panel per product, an estimate panel, next-step tiles |
| Outdoor, expedition or adventure gear (campers, tents, roof boxes, boats) | home, vehicle (as the product page), design (finish and options), inventory, drive (as a showroom visit), locations, support, about, 404 | hero carousel, lineup rail, panels by use (mountain, coast, city), next-step tiles |
| One high-ticket product (a watch, a speaker, a bike, a piece of furniture) | home, vehicle (as the product page), design, drive (as a private appointment), locations, support, privacy, 404 | one hero panel, feature panels (one per material or detail), the specs, a final panel with the two buttons |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.wordmark`, `.nav`, `#vehicles-btn`, `.drive-link`, `#theme-toggle`, `#menu-open` | Wordmark, at most five links (one may open the mega panel), one quiet action and the theme button. `.is-clear` with `.on-dark` or `.on-light` is set by the script from the `data-tone` of the picture under the header. |
| Mega panel | `#mega`, `.mega-cars`, `.mega-car`, `.mega-links`, `#scrim` | Up to four products as drawings with "Learn" and "Order" sub-links, and a column of plain links. Opens on click, closes on Escape, the scrim or a route change. |
| Mobile menu | `#menu` (a `<dialog>`), `.sheet`, `.sheet-inner` | Products first, then the other pages, each a row with a chevron. |
| Full-screen panel | `.panel[data-tone]`, `.media`, `.car`, `.panel-copy`, `.panel-sub`, `.panel-foot`, `.actions`, `.bleed` | `data-tone="dark"` for dark pictures (white text) and `"light"` for bright ones (carbon text). `.bleed` on the first section of a view slides it under the header. The product drawing sits on the picture's ground line (`bottom: 15%`, `33%` on phones when facts are shown). |
| Hero carousel | `.hero`, `[data-slides]`, `.slides > .panel`, `.hero-arrow[data-slide]`, `[data-dots]` | A scroll-snap track, so it swipes without the script; the arrows and dots scroll it. Only the first slide has the view's `h1`. |
| Lineup rail | `.rail-head`, `.rail-nav [data-rail]`, `[data-rail-track]`, `.cat`, `.cat-copy` | Picture cards with the category in white top left, the product name under it and two small buttons bottom left. |
| Next-step tiles | `.tiles`, `.tile` | Three linked picture tiles: try it, visit, buy from stock. |
| Model page | `[data-view=vehicle]`, `[data-model-tone]`, `[data-m-scene]`, `[data-m-car]`, `[data-m="…"]`, `[data-m-link]`, `.model-foot` | Filled from `MODELS` by `?m=`: name, tagline, best numbers, scene, drawing, and the links to the configurator and the test drive. |
| Feature bleed and splits | `.feature-bleed`, `.split`, `.split.flip`, `.split-copy` | A full-bleed picture with a caption at the bottom left; halves of picture and text, alternating. |
| Specs | `#specs`, `[data-trim-tabs]`, `[data-trim]`, `.drawing`, `.dim.len`, `.dim.hgt`, `.spec-list`, `[data-s="…"]` | Trim tabs switch the trim-specific numbers; the drawing carries length and height. |
| Configurator | `.design`, `.stage`, `#cfg-car`, `[data-out=note]`, `.opts`, `[data-cfg-models]`, `.choice`, `.swatches`, `.swatch`, `.toggle`, `[data-mode]`, `[data-finance]`, `#f-down`, `#f-term`, `.summary`, `[data-continue]`, `.order`, `[data-form=order]` | One `cfg` object holds the model, trim, paint, wheels, interior and payment mode; `renderConfig()` repaints the drawing and every `[data-out]` label and price. Options carry `data-name` and `data-price`. The order form opens on "Continue to order" (it is open without the script). |
| Inventory | `[data-inv-model]`, `[data-inv-cond]`, `#inv-sort`, `[data-inv-count]`, `[data-inv]`, `.inv`, `[data-inv-empty]`, `[data-inv-reset]` | Cards carry `data-model`, `data-cond`, `data-price`, `data-range`; filters and sort apply live, with a count and an empty state. |
| Test drive | `.drive`, `.drive-media`, `[data-d-scene]`, `[data-d-car]`, `.car-picks`, `.car-pick`, `#d-loc`, `[data-days]`, `.chips`, `.chip`, `[data-form=drive]` | The picture follows the chosen model. The script relabels the day chips with the next six days. `?m=` and `?loc=` preselect. |
| Energy | `#hearth`, `#lattice`, `#quote`, `.estimator`, `#e-bill`, `.result`, `[data-out=kw]`, `.quote`, `[data-form=quote]` | Two product splits, then a slider estimate next to the quote form. The estimate's assumptions are stated under it. |
| Finder | `.find`, `.find-list`, `#loc-q`, `[data-loc-type]`, `[data-loc-count]`, `[data-locs]`, `.loc`, `.loc-more`, `.map-wrap`, `[data-map]`, `.pin` | Pins are built from the list (`data-x`, `data-y` in percent of the 4:3 map). Choosing a row or a pin highlights both. `?type=` preselects. |
| Support | `#help-q`, `[data-topics]`, `[data-faq] details[data-topic]`, `[data-help-empty]`, `#contact`, `[data-form=contact]`, `#c-topic` | Search and topics filter the answers; `?topic=` preselects and `?at=contact` scrolls to the form. |
| About, legal, 404 | `.values`, `.updates`, `[data-form=updates]`, `.legal`, `.notfound` | Short and plain. |
| Footer | `.site-footer` | One centered row of small links. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/vehicle?m=fjell`, `#/design?m=strata&trim=1&paint=ember&wheels=sport`, `#/design?m=tern&at=order`, `#/drive?m=tern&loc=northgate`, `#/locations?type=charger`, `#/support?topic=charging`, `#/energy?at=quote`).
- `?at=<id>` scrolls to that section after the view opens. Plain `#id` links scroll inside the page.
- `MODELS` is the single source for products. Pictures the script swaps in are read from `img[data-scene]` elements already on the page, so they survive `scripts/inline.mjs`.
- The theme lives in the `store` wrapper (local storage when allowed, memory inside a sandbox).
- The `titles` map in the script sets the document title per view; the model and configurator views update it with the product name.
- The model view stands for every product in the sample. In a real build, make one page per product from data and point the links at them.
