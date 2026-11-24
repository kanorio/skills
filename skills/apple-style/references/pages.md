# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Hardware or consumer electronics brand (the template) | home, store, product, specs, compare, buy, bag, support, newsroom, post, legal, 404 | ribbon, one full tile per hero product (grey, white, black), a 2-up tile grid, "what every order includes", footnotes |
| Single product launch (a gadget, an e-bike, a speaker) | home as the product page, specs, buy, support, newsroom, post, legal, 404 | product sub-nav, hero with price capsule, highlights gallery, closer look, two or three chapters, color picker, footnotes |
| Product line without a shop (stockists only) | home, product, specs, compare, support, newsroom, post, legal, 404 | tiles with "Learn more" and "Where to buy" (to the user's stockists), 2-up grid, footnotes |
| Consumer goods with variants (appliances, furniture, cookware, bikes) | home, store, product, specs, compare, buy, bag, support, legal, 404 | tiles per range, 2-up grid, perks, footnotes; compare by size or model |
| App or software with a hardware feel | home, product (as the app), compare (plans), support, newsroom, post, legal, 404 | tiles with device renders or screen captures, chapters with big numbers, compare as plans |

Global nav, footer, home and 404 always ship. One product page can be filled from data for every product, or one view per product; keep the same anatomy.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Global nav | `.gnav`, `.gnav-inner`, `.gnav-mark`, `.gnav-links`, `.gnav-actions`, `#search-open`, `[data-bag-count]`, `#theme-toggle`, `#menu-open` | The mark, up to eight 12px links spread across 1024px, then icons. Not sticky. Below 900px only the mark and icons remain. |
| Phone menu | `<dialog class="menu" id="menu">`, `.menu-links`, `#menu-close` | Full-screen, 28px semibold links. Closes on a link, the close button, Escape or the backdrop. |
| Search | `<dialog class="search" id="search">`, `#search-q`, `#search-links`, `#search-empty` | A big borderless field and quick links that filter as you type. Swap the quick links for a real search when the site has one. |
| Ribbon | `.ribbon` | One centered line under the nav with a `.more` link, home only. |
| Tile | `.tile`, `.tile.white`, `.tile.ink`, `.tile-name`, `.tile-sub`, `.ctas`, `.tile-note`, `.tile-img` | Name (H2), one line, two buttons, optional small note with a footnote, then the picture. Wrap the text in `.reveal`. |
| Tile grid | `.tile-grid` | Two tiles side by side with small buttons (`.btn.sm`); one column below 735px. Even count only. |
| Perks | `.perks`, `.perk` | Four grey cards: line icon in blue, bold title, one muted sentence. |
| Footnotes | `.footnotes` with `<li id="fn-…">` | Last section of a view. Link claims to them with `<sup><a href="#fn-…">1</a></sup>`; IDs are unique across all views. |
| Product sub-nav | `.lnav`, `.lnav-title`, `.lnav-links`, `.btn.sm` | Sticky at the top of product and spec views. The current link is dimmed with `aria-current="page"`. Links hide below 735px; Buy stays. |
| Product hero | `.p-hero`, `.p-hero-img`, `.p-hero-row`, `.eyebrow`, `.display`, `.p-hero-sub`, `.price-cap` | Picture first, then the product name as an eyebrow, the headline as the view's H1, one line with a footnote, and the price capsule at the right. |
| Highlights | `#gallery`, `#g-track`, `.g-card`, `.g-card.on-light`, `.g-dots`, `#g-play` | Three to five cards; one dot per card. `.on-light` darkens the caption on light pictures. Without JavaScript the track still scrolls. |
| Closer look | `.closer`, `.closer-list`, `.closer-pill[data-src][data-alt]`, `.closer-text`, `#closer-img` | Three to five pills; the pressed one opens its text and swaps the picture. Without JavaScript every text shows. |
| Chapter | `.chapter`, `.chapter.ink`, `.eyebrow`, `.mega`, `.copy`, `.stats`, `.chapter-img` | One idea each. Copy is one paragraph with two or three bold phrases. Stats come in threes. |
| Color picker | `.swatches`, `.sw-btn[data-color]`, `#color-img`, `#color-name` | One button per color; the image file is `images/<product>-<color>.svg`. |
| Which one | `.which` | Three products: picture, name, one line, price, Buy and a link. Ends the product page before the footnotes. |
| Store | `.store-head`, `.two-tone`, `.help-link`, `.seg [data-cat-filter]`, `#p-sort`, `[data-product-count]`, `[data-product-list] > .p-card[data-cat][data-price]`, `[data-empty="products"]` | `#/store?cat=earbuds` preselects a category. Sorting reads `data-price`. |
| Tech specs | `.spec-row` with an H2 and a `ul` or `dl`, `.spec-colors` | One row per topic: color, size and weight, the core tech, battery, connectivity, controls, in the box. |
| Compare | `[data-compare]`, `.cmp-pick select[data-slot]`, `.cmp[style="--rows: N"]`, `.cmp-col[data-model]`, `.s1`–`.s3`, `.is-off`, `.cmp-head`, `.cmp-val`, `.cmp-big`, `.cmp-none` | Each `.cmp` block is one section; every column in it has exactly `--rows` children so rows line up (subgrid). Put every model in every block, in the same order; extra models start with `is-off`. |
| Buy | `.buy`, `#buy-img`, `#engrave-preview`, `#buy-title`, `#buy-price`, `[data-form="order"]`, `#buy-colors`, `#engrave-field`, `#care-group`, `#buy-total`, `[data-success="order"]` | `#/buy?p=<id>` fills the page from the `PRODUCTS` record. Add to Bag keeps the form and shows the success card. |
| Bag | `#bag-title`, `#bag-list`, `.bag-item`, `[data-qty]`, `[data-remove]`, `#bag-sum`, `#checkout`, `#checkout-note`, `#bag-empty` | Rendered from the bag in the `store` wrapper. Checkout needs a real payment provider. |
| Support | `.sup-hero`, `.sup-topics`, `#faq-q`, `.faq-group[data-faq-group]`, `details`, `[data-empty="faq"]`, `.band#get-help`, `[data-form="contact"]`, `.ways` | Topics jump to groups (`#/support?at=faq-room`); the field filters questions. The form ends the view on a grey band. |
| Newsroom | `.news-lead`, `.cat`, `[data-news-filter]`, `[data-news-list] > .news-card[data-cat]`, `[data-more]`, `[data-empty="news"]`, `.letter`, `[data-form="newsletter"]` | Six cards, then "Show more" adds three. |
| Article | `.article`, `.cat`, `.lead`, `.article-figure`, `.prose` (`h2`, `ul`, `blockquote`, `cite`) | 692px column, picture in a grey 28px frame, two buttons at the end. |
| Legal | `.legal`, `.prose`, section IDs `privacy`, `terms`, `offer`, `warranty` | `#/legal?at=terms` scrolls to a section. |
| Footer | `.site-footer`, `.f-crumbs [data-crumb]`, `.f-cols`, `.f-more`, `.f-base`, `.region` | The breadcrumb follows the view title. Four link columns, two on phones. |
| 404 | `data-view="404"`, `.nf`, `.display` | One display line, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/store?cat=speakers`, `#/buy?p=room`), and `?at=<id>` scrolls to an element inside the view.
- Plain `#id` links (footnotes) scroll inside the current view.
- The `titles` map sets the document title per view, and the breadcrumb uses the part before ` · `. Update it when you add or rename views. Detail views light up their parent in the nav (`specs` → product, `post` → newsroom).
- `PRODUCTS` in the script is the single list the buy page and the bag read: name, price, optional cover price, whether engraving is offered, colors as `[id, label, hex]`, and an `image` for single-image products. Product pictures follow `images/<id>-<color>.svg`.
- The theme and the bag live in the template's `store` wrapper under two keys; a real store replaces the bag with its cart.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
