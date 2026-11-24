# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. This style suits anything people browse by photo and then book or reserve: places to stay, experiences, classes, rentals, venues.

| Site | Views | Home sections, in order |
|---|---|---|
| Guesthouses, cabins or a small rental collection (the template) | home, stays, stay, experiences, book, saved, host, journal, post, help, about, privacy, terms, 404 | hero title and search bar, category icons, stays rail, experiences rail, host band, ideas tabs |
| A single guesthouse, B&B or small hotel | home, stays (as rooms), stay (as room), book, help, about, privacy, terms, 404 | hero title and search bar (dates and guests only), rooms rail, the listing's highlights and big rating, host band as "Our story", ideas as things to do nearby |
| Tours, classes or experiences | home, experiences, stay (as the experience page), book, help, about, privacy, 404 | search bar (where, date, group size), category icons as kinds of activity, experiences rail, host band as "Run a class with us" |
| Rentals: bikes, boats, gear or spaces | home, stays (as the catalogue), stay (as the item), book, saved, help, privacy, terms, 404 | search bar (pickup place, dates, quantity), category icons as kinds, rails per category |
| Venue or event space hire | home, stays (as spaces), stay (as the space), book (as an enquiry), help, about, 404 | search bar (date, guests), spaces rail, the big rating, ideas as past events |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-bar`, `.logo`, `.tabs`, `.mini-search`, `.m-search`, `#theme-toggle`, `.saved-link`, `.menu-pill`, `#menu` | Logo, at most three tabs with icons, the compact search pill (shown with `.is-compact`), actions on the right. The menu is a `<dialog>`: a dropdown on desktop, a sheet on phones. |
| Hero and search bar | `.hero`, `.hero-title`, `.search`, `.seg`, `.seg-where`, `#s-where`, `[data-panel]`, `.panel`, `#p-where`, `#p-when`, `#p-who`, `.dest`, `.orb`, `[data-search-go]` | One H1 line, then the bar. Segments open panels; the orb goes to the list with `?where=` and `?guests=`. |
| Calendar | `[data-calendar]`, `[data-booked]`, `.cal`, `.day`, `.cell.start`, `.cell.mid`, `.cell.end` | Rendered by the script from the shared trip state. Add `data-booked` to strike out taken nights. |
| Guest steppers | `[data-guests-ui]`, `.stepper[data-guest]`, `[data-max-guests]` | Rendered by the script. `data-guests-ui="2"` drops the pets row; `data-max-guests` on an ancestor caps adults plus children. |
| Category icons | `.cats`, `.cat`, `#stays-cats [data-filter]` | Links on home (`#/stays?type=cabin`), filter buttons with `aria-pressed` on the list. |
| Rails | `.row`, `.row-head`, `.rail-nav`, `[data-rail]`, `.rail`, `[data-from]`, `[data-ids]` | A rail lists ids from a grid (`data-from="#stays-grid" data-ids="…"`) and clones those cards, so each listing is written once. |
| Listing card | `.card`, `.card.tall`, `.card-media`, `.slides`, `.badge`, `.save[data-save]`, `.card-link`, `.card-title`, `.rating`, `.price` | `data-id`, `data-name`, `data-region`, `data-tags`, `data-guests`, `data-beds`, `data-place`, `data-amen`, `data-price`, `data-cleaning` on stays; `data-kind`, `data-price`, `data-unit="guest"` on experiences. Carousel arrows and dots are added by the script. |
| Host band | `.host-band`, `.copy` | Photo left, title, one line and an ink button. |
| Ideas tabs | `.inspire`, `.itabs[role=tablist]`, `.itab`, `.ipanel` | Two to four tabs, six links each (bold title, muted line). |
| List toolbar and results | `.toolbar`, `.toolbar-row`, `[data-open="filters"]`, `[data-filter-count]`, `.results-head`, `[data-stays-count]`, `[data-where-clear]`, `#stays-grid`, `[data-stays-empty]` | Sticky under the header. The count and the empty message update live. |
| Filters dialog | `#filters`, `[data-place]`, `#f-min`, `#f-max`, `[data-beds]`, `button[data-amen]`, `[data-clear-all]`, `[data-show-count]` | Filters apply live; the footer button only closes. |
| Map | `#stays-layout.with-map`, `.map-pane`, `.pin[data-for]`, `[data-map-toggle]` | The map image is 3:4 and the pane keeps that ratio, so pins placed in percent stay on their spots. |
| Listing detail | `.stay-head`, `.head-actions`, `[data-share]`, `.mosaic`, `.all-photos`, `.stay-body`, `.stay-main`, `.loved`, `.host-row`, `.highlights`, `.clamp`, `[data-more]`, `.sleep`, `.amen`, `#dates` | Title row, mosaic, then two columns: details on the left, the booking card on the right. |
| Booking card | `.book-card[data-price-card]`, `.box`, `.box-cell`, `#guest-pop`, `[data-reserve]`, `[data-has-dates]`, `[data-no-dates]`, `[data-l]` | `data-price` and `data-cleaning` drive the breakdown; the service fee is 12 percent in the sample. On phones it becomes `.reserve-bar`. |
| Reviews | `.rate-hero`, `.rate-big`, `.sprig`, `.scores`, `.reviews`, `.review`, `[data-more-reviews]` | Big score, six category scores, reviews in two columns, a button that reveals the rest. |
| Location, host, things to know | `.map-box`, `.home-pin`, `.host-grid`, `.host-card`, `.host-stats`, `.know` | Map with a coral home marker; host card with stats; three columns of rules. |
| Booking request | `.two-col`, `.trip-row`, `[data-trip-dates]`, `[data-form="booking"]`, `#book-summary`, `.sum-top`, `[data-success="booking"]` | `?for=<id>` fills the summary from that card; per-guest items price by guests and show one date. |
| Saved | `#saved-grid`, `[data-saved-empty]` | Clones the saved cards; the empty state links to the list. |
| Host sign-up | `.estimate`, `[data-earn]`, `#h-nights`, `#h-kind`, `.steps`, `[data-form="host"]` | Earnings estimate from nights and kind of place, three steps, then the form. |
| Journal and post | `.post-card`, `.article`, `.byline`, `.prose`, `.letter`, `[data-form="newsletter"]` | Three cards; the post ends with a newsletter box. |
| Help | `.help-search`, `#help-q`, `[data-topic-filter]`, `.faq details[data-topic]`, `[data-help-empty]`, `#contact`, `[data-form="contact"]`, `#c-topic` | Search and topic chips filter the answers. `?topic=` preselects; `?at=contact` scrolls to the form. |
| About, legal, 404 | `.wide-img`, `.cols`, `.team`, `.legal`, `.notfound` | Short and plain. |
| Footer | `.site-footer`, `.foot-cols`, `.foot-bar` | Gray band, three link columns, legal line with language and currency. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/stays?type=cabin`, `#/stays?where=wren&guests=3`, `#/book?for=bread`, `#/help?topic=hosting`, `#/stay?at=dates`).
- Plain `#id` links scroll inside the page.
- One `trip` object holds the place, dates and guests. The search bar, both calendars, the steppers, the booking card and the request summary all read and write it, and `renderTrip()` refreshes every `[data-out]` element.
- Saved places live in the `store` wrapper (local storage when allowed, memory inside a sandbox).
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- The detail view stands for every listing in the sample. In a real build, make one detail page per listing from data and point each card at its own page.
