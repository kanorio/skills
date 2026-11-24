# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order and the alternation of black and paper; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Band, artist or DJ (the template) | home, tour, shop, product, news, post, band, join, contact, privacy, terms, 404 | hero (stage), album or release (stage), latest news (paper), tour dates (paper), store (paper), video and photo tabs (stage), fan club (paper), footer (stage) |
| Festival or event series | home, tour (as lineup and schedule), news, post, shop (tickets and passes), contact, privacy, 404 | hero with the dates and the city, schedule rows, lineup as member cards, news, passes as product cards, FAQ as toggles, newsletter in the footer |
| Venue or club | home, tour (as calendar), news, band (as about the venue), contact, privacy, 404 | hero with tonight's show, the next ten date rows, a stage band about the room, news, how to get there, footer |
| Sports team or racing series | home, tour (as fixtures), shop, product, news, post, band (as squad), join (as membership), contact, privacy, 404 | hero with the next fixture, results and fixtures as date rows, news, store, squad cards, membership band |
| Streetwear or merch label | home, shop, product, news (as drops), post, band (as about), contact, privacy, terms, 404 | hero with the current drop, product grid, a stage band for the story, drop archive as news cards, newsletter |

Header, footer, home and 404 always ship. A site without tour dates replaces the dates section with whatever repeats on a calendar for that brand (drops, fixtures, workshops); keep the row anatomy.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header.stage`, `.header-inner`, `.nav-left`, `.brand`, `.brand-mark`, `.brand-name`, `.header-right`, `#theme-toggle`, `[data-bag]`, `[data-bag-count]`, `#menu-open` | Three links left, the mark and wordmark centered, up to two links, the theme toggle and the bag right. The links move into `#menu` (`<dialog class="sheet stage">`) below 960px. |
| Hero | `.hero.stage`, `.hero-art`, `.hero-wedge`, `.hero-copy`, `.label`, `.display`, `.mono-line`, `.btn-row` | The artwork is a CSS background on `.hero-art`; `.hero-wedge` is a clip-path polygon with a shard (separate polygon for phones). One label, one display headline of two to four words, one mono line, a solid and a ghost button. |
| Album or release | `.section.stage.has-cut`, `.album`, `.cover`, `.tracklist` | Cover art left, label, H2, mono line, a numbered track list in two mono columns, two buttons. Ends with `.cut.to-paper`. |
| Section head | `.head-row`, `.h2`, `.more` | H2 on the left, one spaced link with an arrow on the right. |
| Watermark word | `.wm`, `.wm.right`, `.wm.bottom`, `--wm-top`, `--wm-bottom`, `--wm-size` | One outlined word per section, `aria-hidden="true"`, first child of the section. The section clips it. |
| Cut | `.cut.to-paper`, `.cut.to-stage`, `.cut.fall` | Last child of a section with `.has-cut` (or a `.page-head`), `aria-hidden="true"`. `to-` names the color of the next section. |
| News cards | `.news-grid`, `.news-card`, `.media`, `.meta`, `.h3` | Three or six cards. Image 3:2 with `alt=""` when the title says it all; a mono "date · category" line; heavy title. |
| Feature post | `.feature-post` | One wide image and the lead story on the news page. |
| Tour dates | `.dates`, `.date-row`, `.when` (`.d`, `.m`, `.w`), `.where`, `.status` (`.hot`, `.out`, `.soon`), `.btn-sm` | One row per date with `datetime` on the `<time>`. Status text always says what it means; red is never the only cue. |
| Region filter | `.chips`, `[data-region-filter]`, `[data-filter-list="region"]`, `[data-region]`, `[data-empty="region"]` | Square chips with `aria-pressed`; an empty message when nothing matches. `#/tour?region=asia` preselects; `#/tour?date=<row id>` scrolls to a row. |
| Ticket notes | `#ticket-info`, `.toggles`, `details` | Where to buy, presale, accessible seating. Replace "Tickets" buttons with the user's real ticket links. |
| Products | `.products`, `.product`, `.media`, `.tag` (`.sale`), `.product-name`, `.price` (`s`, `.now`) | Four columns. Square image well on `--surface-2`. Sale prices show the old price struck through and the new one in red. |
| Category filter | `[data-category-filter]`, `[data-filter-list="category"]`, `[data-category]`, `[data-empty="category"]` | Same as the region filter. `#/shop?category=music` preselects. |
| Product page | `.page-head.compact`, `.crumbs`, `.product-grid`, `.gallery`, `#product-image`, `.thumbs [data-image]`, `.buy`, `[data-form="add-to-bag"]`, `.sizes`, `.size`, `.stepper`, `[data-step]`, `#qty`, `[data-added]`, `.toggles.details` | Gallery with thumbnails that swap the main image, the name as H1, price, a mono description, size radios (sold-out sizes are `disabled`), a quantity stepper, "Add to bag", a status line, then details, shipping and size guide toggles. |
| Watch | `.tabs`, `[role=tab]`, `[role=tabpanel]`, `.videos`, `.video`, `.play`, `.photos` | Two tabs. Panels have no `hidden` attribute in the markup, so both show without JavaScript; the script hides the inactive one. |
| Fan club band | `.club`, `.perks`, `.member-card`, `.halftone` | Label, H2, three perks with icons, two buttons, and the member card. |
| Page head | `.page-head.stage`, `.label`, `.h1`, `.mono-line`, `.cut` | Top of every view except home and 404. Add one watermark word if the page has a one-word subject. |
| Story and members | `.story`, `.cols`, `.members`, `.member`, `.disco` | A heading and two text columns; four portrait cards (4:5) with name and role; a records list with year, title and format. |
| Fan club signup | `.join-grid` (the form), `.tiers`, `.tier`, `[data-fields]`, `[data-form="signup"]`, `[data-success="signup"]` | Plan radios as cards on the left, details on the right. `#/join?tier=ember` preselects. The success state replaces the fields. |
| Contact | `.contact-grid`, `.desks`, `[data-form="contact"]`, `#c-topic` | Desks with addresses in mono on the left, the form on the right. `#/contact?topic=press` preselects the desk. |
| Article | `.page-head` with `.prose`, `.article`, `.article-figure`, `blockquote`, `.table-scroll` | Label with the category, H1, mono standfirst, mono byline; drop cap, heavy H2s, a capitals pull quote with a red rule, slash bullets, mono tables. End with two buttons. |
| Footer | `.site-footer.stage`, `.footer-grid`, `.footer-brand`, `[data-form="newsletter"]`, `.footer-bottom` | Wordmark, one mono line, the alerts form, three link columns, the legal line. The section before it ends with `.cut.to-stage`. |
| 404 | `data-view="404"`, `.notfound.stage`, `.wm` | A giant outlined 404, a label, a short H1, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/shop?category=music`, `#/join?tier=furnace`).
- Plain `#id` links (for example `#ticket-info`) scroll inside the current view.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- The bag count lives in the template's `store` wrapper under one key; a real store replaces it with its cart.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
