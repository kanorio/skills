# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links (query parameters after `?` set filters and sections, for example `#/shop?category=shoes` or `#/help?section=returns`). In a framework project each view becomes a real route and the parameters become real query strings.

## Recipes by kind of site

Pick the closest recipe, keep the order, drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Sportswear or footwear store (the template) | home, shop, product, bag, stories, story, about, join, help, privacy, terms, 404 | campaign hero, featured photo tiles, trending rail, statement band, shop by sport rail, centered statement with links, member band, stories |
| Fashion or streetwear label | home, shop, product, bag, stories (as lookbook or journal), story, about, help, privacy, terms, 404 | campaign hero with the season, two or three photo tiles (one per collection), new arrivals rail, statement band for the campaign film, centered "the collection" statement with category links, stories |
| Fitness studio, gym or run club | home, stories (as classes or sessions), story, about, join (as membership), help, privacy, 404 | hero with the next session or the class you are known for, photo tiles per discipline, schedule as a rail of cards, member band with plans, stories from members, a small shop rail only if they sell gear |
| Sports team or league | home, shop (merch), product, bag, stories (news), story, about (club and squad), join (season tickets or membership), help, 404 | hero with the next fixture, photo tiles (tickets, kit), news rail, statement band for the season, shop rail, member band |
| Outdoor or lifestyle brand | home, shop, product, bag, stories (field reports), story, about (materials and repair), help, 404 | hero landscape with a two-word headline, photo tiles per activity, product rail, statement band, centered statement about how things are made, stories |
| Single-product launch | home, product, bag, story, help, privacy, 404 | hero with the product, a statement band, the product page sections inline (gallery, sizes, details), stories, member band as the waitlist |

Header, footer, home and 404 always ship. The bag ships whenever anything can be bought.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Utility bar | `.utility` | One short promise left, up to three links right separated by `|`. Desktop only; drop it on small sites. |
| Header | `.site-header`, `.header-inner`, `.brand`, `.brand-mark`, `.brand-name`, `.nav`, `.header-tools`, `.search[data-search]`, `#theme-toggle`, `[data-bag]`, `[data-bag-count]`, `#menu-open` | Logo left, three to five centered links, search pill, theme, bag right. Hides on scroll down (`.is-hidden`). Below 1024px the links and search move into `#menu` (`<dialog class="sheet">`). |
| Promo strip | `.promo`, `.promo-slides`, `[data-promo]` | Two or three one-line offers, each with an underlined link. Rotates every 6 s; the first one is the only one visible without JS. |
| Campaign hero | `.hero`, `.hero-media`, `.hero-copy`, `.eyebrow`, `.display.hero-title`, `.line`, `.lede`, `.btn-row`, `.btn-light` | One photograph, a label (product or collection), a two-line headline (each line in `<span class="line"><span style="--i:n">`), one sentence, two white pills. 560 to 860px tall. |
| Section head | `.section-head`, `.h2`, `.arrows`, `.arrow-btn[data-rail-prev|next="<rail id>"]` | 24px title left; "Shop all" link and the two round arrows right. Arrows only for rails. |
| Photo tiles | `.tiles` (two) or `.tiles.three`, `.tile`, `.tile-copy` | 4:5 photographs with label, 24px title and a white pill on the photo. One column below 768px. |
| Rail | `.rail` (three across) or `.rail.four`, with an `id` the arrows point at | Product cards, sport cards or story cards. Five to eight items so the arrows have work to do. |
| Product card | `.card`, `.card-media`, `.card-label` (`.plain` for black), `.card-name`, `.muted`, `.price`, `s`, `.off` | Gray square tile, label, name, category, color count, price. On the shop grid the card carries `data-cat`, `data-sport`, `data-price`, `data-new` and optional `data-sale`. |
| Statement band | `.band` | A full-bleed photograph, label, one `.display` line, a sentence, two white pills. One per page at most. |
| Sport cards | `.sport-card` | 4:5 photograph, 20px name below. |
| Centered statement | `.essentials`, `.h1`, `.link-grid` | Giant capitals centered, one muted sentence, six to twelve plain links. |
| Member band | `.member.ink` | Black block: label, `.h1`, two pills; three perks with icons on the right. |
| Stories | `.stories-grid`, `.story-card`, `.feature`, `.filter-row`, `.chip[data-topic-filter]`, `[data-topic]` | Feature story full width with copy on the photo, then cards: 4:5 image, "topic · date", title, one-line summary. |
| Shop | `.shop-bar`, `[data-count]`, `[data-toggle-filters]`, `#sort`, `.shop-layout[data-shop]`, `.filters`, `.cat-list`, `fieldset`, `.check`, `.grid[data-grid]`, `[data-empty]`, `[data-clear]` | Title with live count; filter column (categories, then checkbox groups); grid; empty state. Reads `category`, `sport`, `q` and `sort` from the route. |
| Product page | `.pdp`, `.gallery`, `.thumbs`, `[data-image]`, `.stage-img`, `#product-image`, `.buy`, `.swatches`, `[data-color]`, `.sizes`, `.size`, `#size-error`, `[data-form="add-to-bag"]`, `[data-fav]`, `.facts`, `.accordion` | Gallery left (sticky), buying column right. Sold-out sizes are `disabled`. Accordions are native `<details>`. |
| Added popover | `[data-added]`, `.added` | Product, color and size, "View bag" and "Checkout". Closes after 6 s. |
| Bag | `.bag-layout`, `[data-lines]`, `.line-item`, `.qty`, `[data-step]`, `[data-free]`, `.meter`, `.summary`, `[data-subtotal]`, `[data-delivery]`, `[data-total]`, `.promo-code`, `[data-checkout]`, `[data-bag-empty]` | Lines are rendered from the `catalog` object and the stored bag; the empty state is the static content. |
| Article | `.article-hero`, `.prose`, `.lede`, `.pull`, `.wide-figure`, `.next-story` | Full-bleed photo with the display title on it, a 680px column, one pull quote in capitals, one wide figure, a gear rail, next story. |
| About | `.statement`, `.wide-photo`, `.pillars` | A display statement on white, a wide photo, three numbered pillars, a member band as the call to action. |
| Join | `.split`, `.perks`, `[data-form="signup"]`, `.choice-group`, `.choice` | Display headline and perks left, form right. |
| Help | `.faq-search[data-faq-search]`, `.accordion[data-faq]`, `.faq-group` with an `id` per topic, `.table-scroll`, `.size-table`, `[data-form="contact"]` | Searchable FAQ grouped by topic, the size table inside the sizing answer, the contact form beside it. |
| Footer | `.site-footer`, `.footer-top`, `.footer-news`, `[data-form="newsletter"]`, `.footer-bottom` | Black. Three link columns and the newsletter field, then copyright and legal links. |

## Data and state

- Product data for the bag lives in the `catalog` object in the script (name, category line, price, colors with label and image). Add every product that can be put in the bag. A real store loads this from its backend.
- The bag is stored as `[{ id, color, size, qty }]` under the `kordo-bag` key through the `store` wrapper, so it survives reloads and still works where storage is blocked. It starts empty.
- Delivery is free from `FREE_OVER` (100) and costs 8 below it in the sample; replace both with the user's real rules.
- Forms show validation and a success state but send nothing. See `references/kanorio.md` before wiring a real endpoint.
