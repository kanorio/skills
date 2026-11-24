# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe and drop what the brief cannot fill. Header, footer, home and 404 always ship.

| Site | Views | Home sections, in order |
|---|---|---|
| Singer, band or DJ (the template) | home, latest, story, music, live, shop, product, join, about, contact, privacy, terms, 404 | hero with era lettering and the strip, latest moments, tour teaser, shop teaser, join band, footer |
| Visual or performance artist | home, latest (as works and shows), story, music (as series, one era per body of work), live (as exhibitions and performances), about, contact, privacy, 404 | hero with the current series, latest moments, upcoming shows, join band |
| Theatre company, drag or comedy act | home, latest, story, music (as productions), live (as the run, one city row per venue), shop, join, contact, privacy, terms, 404 | hero with the current production's lettering, dates, moments from rehearsal to opening night, shop |
| Album or campaign microsite | home, latest, music (one era only, without the index), live, shop, product, join, privacy, 404 | hero, the era panel, moments, tour, shop |
| Label or collective | home, latest, music (as artists, each artist an era), live, shop, about, contact, privacy, 404 | hero for the newest release, moments across artists, collection, events |

An era is whatever the person makes in chapters: a record, a series, a season, a production, a collection. Keep the vocabulary of the brief ("Series", "Season", "Production") and keep the components.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.bar`, `.bar-l`, `#menu-open`, `.nav.nav-l`, `.brand`, `.nav.nav-r`, `[data-bag-open]`, `[data-bag-count]`, `#theme-toggle` | Four links left, the wordmark centered, two links, the bag and the toggle right. Transparent over the home hero (`[data-route="home"]`), solid elsewhere. Links collapse into `#menu` below 960px; the wordmark shrinks to fit between the menu button and the bag, so a long name never pushes the toggle off a phone screen. |
| Menu | `dialog#menu.menu.stage`, `#menu-close` | Full-screen black, the wordmark and large serif links. |
| Hero | `.hero.stage`, `.hero-art`, `.hero-copy`, `.kicker`, `.lettering.hero-word`, `.hero-line`, `.actions`, `.strip` | The art is an `<img>` with `object-position` keeping its light away from the lettering. One kicker, one lettering H1, one sentence, two buttons. |
| Lettering | `svg.lettering` with `<text class="f-rough">`, `--lh` for height | One word per lettering. Treatments: `f-rough`, `f-melt`, `f-scan`, `f-rough-sm`, or class `it` for italic. Give it `role="img"` and `aria-label` when it is the heading, `aria-hidden="true"` when it repeats a visible name. |
| Strip | `.strip`, `[data-strip="end"]` (home) or `[data-strip="scroll"]` (latest), `.strip-label`, `.strip-thumbs`, `.wire`, `.strip-marker`, `.strip-sticky` | Thumbnails are built from the moments by the script; without JavaScript the strip is hidden. `#/latest?m=<moment id>` scrolls to a moment. |
| Moments | `#moments.moments`, `article.moment`, `.wide`, `.m-art`, `.m-play`, `.m-title`, `.m-meta`, `data-kind` | Oldest first, one article each. Square art by default, `.wide` for 16:9. The kind icon is `#i-disc` (release), `#i-film` (video), `#i-mic` (live), `#i-spark` (news). Home shows the newest four (`[data-home="moments"]`, `.moments.compact`). |
| Kind filter | `[data-kind-filter]`, `[data-filter-list="kind"]`, `[data-empty="kind"]` | `#/latest?kind=video` preselects. Filtered moments also leave the strip. |
| Story | `.story`, `.story-head`, `.story-art`, `.prose`, `.lead`, `blockquote`, `.story-nav` | Kicker linking back to Latest, serif H1, mono date and byline, a 16:9 image, a 680px column, a pull quote with an accent rule, credits as a list. |
| Era index | `.era-index`, `[data-era-link]`, `aria-current="true"` | Sticky on desktop, a wrapped row on phones. `#/music?era=<id>` selects an era. |
| Era panel | `article.era[data-era]`, `--era-d`, `--era-l`, `.era-cover`, `.era-name`, `.tags`, `.tracks` | Only the selected era shows; all show without JavaScript. Newest era first. |
| Collection | `#releases.releases`, `a.rel[data-format]`, `.rel-name`, `[data-format-filter]`, `button[data-layout]` | Grid or list (remembered). Formats: album, single, ep, live, remix. Each card links to its era. |
| Tour | `.live`, `.live-list`, `.live-head`, `.cities`, `details.city[data-region][data-nights]`, `.city-name`, `.city-venue`, `.city-dates`, `.status` (`.hot`, `.out`, `.soon`), `.nights`, `#tickets`, `.live-art`, `.next` | `data-nights="2027-02-12 18:30, …"` builds one row per night; a city whose status is `.out` shows "Sold out" on every night, `.soon` shows "Presale details". `#/live?region=asia` filters, `#/live?city=c-tokyo` opens a city. Home shows the first five cities (`[data-home="cities"]`). |
| Shop | `#products.products`, `a.product[data-id][data-category][data-price][data-art][data-sizes][data-note][data-status]`, `.p-well`, `.p-art` (`--g`), `.p-flag`, `.p-name`, `.p-price`, `[data-filters-toggle]`, `#filters`, `[data-category-filter]`, `[data-sort]` | Cards carry everything the product page needs. `data-sizes` is a comma list or "One size"; `data-status="sold-out"` disables the button. `#/shop?category=music` opens the filters preselected. Home shows the first four. |
| Product | `.crumbs`, `[data-pd-cat]`, `.pd-grid`, `.pd-well`, `#pd-art`, `.thumbs [data-box]`, `[data-form="add-to-bag"]`, `#pd-sizes`, `#size-error`, `.stepper`, `#qty`, `[data-add]`, `[data-added]`, `.details` | Filled from the card for `#/product?id=<id>`. The view buttons zoom the drawing through its `viewBox`; with photos, swap them for thumbnails. |
| Bag | `dialog#bag.drawer`, `[data-bag-list]`, `[data-bag-empty]`, `[data-bag-foot]`, `[data-bag-total]`, `[data-checkout]`, `[data-checkout-note]` | Kept in the `store` wrapper under `velour-bag`. Checkout says it is not connected; a real shop replaces the drawer with its cart and checkout. |
| Join | `.two`, `.perks`, `[data-form="signup"]`, `[data-fields]`, `[data-success="signup"]` | Email, first name, region, topics, a required consent box. |
| About | `.about-lede`, `.about-art`, `.cols-2`, `.facts` | One serif sentence, a wide image, two text columns, three facts. |
| Contact | `.desks`, `[data-form="contact"]`, `#c-topic` | Desks with addresses on the left, the form on the right. `#/contact?topic=press` preselects. |
| Join band | `.band.stage`, `.band-art` | Art at half opacity behind a kicker, a serif H2, a sentence and one button. |
| Legal | `.legal` | Privacy and terms, serif H2s, gray body. |
| 404 | `.lost.stage` | `LOST` in `f-melt` lettering, a serif H1, one sentence, two buttons. |
| Footer | `.site-footer`, `.foot-grid`, `[data-form="newsletter"]`, `.foot-links`, `.foot-line` | Newsletter form with an inline error and success, two link columns, the wordmark and the legal line. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it.
- Plain `#id` links (for example `#tickets`) scroll inside the current view.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- The theme (`velour-theme`), collection layout (`velour-layout`) and bag (`velour-bag`) are kept in the `store` wrapper, which falls back to memory inside sandboxed frames. Rename the keys for the real brand.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
