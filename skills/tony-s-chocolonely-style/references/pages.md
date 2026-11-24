# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links (`#/shop?cat=pantry` presets a filter, `#/contact?topic=join` presets the topic). In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the band order and the alternation of colors; drop bands the brief cannot fill.

| Site | Views | Home bands, in order |
|---|---|---|
| Producer or fair-trade brand with a shop (the template) | home, shop, product, cart, promise, farms, journal, post, faq, contact, legal, 404 | green hero, product rail, red split, blue card row, gray journal cards, red footer |
| Small shop for any product (bakery, maker, refill store) | home, shop, product, cart, promise (as "how we make it"), faq, contact, legal, 404 | hero, product rail, split (what is in it, or where the money goes), card row (makers or workshop), footer |
| Social enterprise or cause with a few products | home, promise, farms (as "who we work with" or "our team"), journal (as news), post, shop, contact, legal, 404 | hero with the mission, split (impact or where donations go), card row (programs), journal cards, footer with a sign-up |
| Cafe, bakery or market stall without delivery | home, shop (as the menu: no add buttons, no basket), promise, faq, contact (address and hours), legal, 404 | hero, menu rail, card row (what's on this week), contact band, footer |
| Campaign or petition | home, promise (the demands), journal (updates), post, contact (as "sign"), legal, 404 | hero with the ask, split (the numbers behind the problem), card row of demands with `.num`, journal, footer |

## Band order rules

- Never put two bands of the same color next to each other. The footer is red, so the last band of every view is paper, gray, blue or green.
- One shout per band, at the top. Page heads (`.band.tight`) hold the view's H1 as a shout and a centered lead.
- The home hero and the 404 use a colored band; other page heads stay on paper so the content band under them can carry the color.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header band | `.site-header#top-of-page`, `.bar`, `.brand`, `.nav`, `.tools`, `#theme-toggle`, `[data-count]`, `#menu-open`, `.notice` | Brand mark and name, six lowercase links at most, theme, basket, menu button (under 1100px). The notice is one sentence; delete it when there is nothing time-bound to say. |
| Menu sheet | `<dialog class="menu" id="menu">`, `#menu-close` | Full-screen red, giant display links. Closes on a link, the close button and Escape. |
| Band | `.band` plus `.on-red`, `.on-green`, `.on-blue`, `.on-sun`, `.on-grey`; `.tight` for page heads | Full width; content in `.wrap`. |
| Shout headline | `h1`/`h2.shout[data-fit]`, `.band-title`, `.start` (left aligned) | Plain text, or one `<span>` per line. Two to five words. The script adds the letters, the screen-reader text and the size. |
| Hero | `.hero`, `.hero-grid` (`.flip` puts the photo right), `.snap`, `.hero-copy`, `.lead`, `.actions`, `.bit` | Framed photo with a caption link, stacked shout, one lead sentence, two buttons, up to four scattered `.bit` decorations positioned with `--x`, `--y`, `--r`. |
| Framed photo | `figure.snap` (`--tilt`), `img`, `figcaption` | 4:3 photo in a white frame; the caption is short and may link. |
| Product grid | `.tiles#shop-grid`, `article.tile[data-product][data-price][data-cat]`, `--tile`, `.tile-media`, `.tile-name`, `.tile-meta`, `.tile-price`, `.add[data-add]`; `data-home` marks the tiles copied to the home rail | **The catalogue.** The basket, the home rail and "goes well with" read names, sizes, prices, colors and art from these tiles, so a product is written once. |
| Filters and sort | `.chips[data-filter-for="<list id>"]`, `.chip[data-filter]`, items with `data-cat`, `[data-empty]`, `select[data-sort-for]` | Chips with `aria-pressed`; `?cat=` in a link preselects one; the empty message shows when nothing matches. |
| Rail | `.rail-head`, `.btn.sq[data-rail-step][aria-controls]`, `.rail[data-clone-tiles="home"]` or `="related"` | Six tiles, four visible on desktop. |
| Split | `ol.split`, `li` with `--w` (percent) and `--c` (bar color), `strong`, `span`, `.fill` | Three to five rows; amounts must add up and must be real. Beside it one `.paper` card explains it. |
| Card row | `.cards` / `.cards.four`, `.paper`, `.cut-img`, `.num`, `.year`, `.on-sun-card` (a yellow card) | Three or four cards; same structure in each. |
| Journal list | `.posts.three#post-list`, `article.post-card[data-cat]`, `.post-media` (photo, or art on `--tile`), `.post-meta`, `.tag`, `time`, `.post-title`; `[data-clone-posts="4"]` copies the first cards to the home page, `data-skip` skips the current article | Six to nine cards. |
| Product page | `.product-grid`, `.snap > .art` (art on `--tile`), `.crumbs`, `.title`, `.price [data-price-now]`, `form[data-buy]` with radio `.chip`s (`data-price`), `.stepper [data-qty]`, `.facts details` | One product per page. The options change the price. |
| Basket | `[data-basket-full]`, `ul.lines[data-lines]`, `fieldset` of delivery days, `aside.paper` with `dl.sums`, `[data-free-note]`, `form[data-form="checkout"]`, `[data-basket-empty]`, `[data-success="checkout"]` | Lines are drawn by the script from the catalogue. |
| Farms (people, makers, partners) | `.farms#farm-list`, `article.paper.farm[data-cat]`, `.art` | A small colored art square, a name and one line of facts. For people, use initials on the color square, never invented faces. |
| Article | `.post-head`, `.byline`, `.title`, `.snap`, `.prose`, `.paper.on-sun-card.pull` | Lead, short sections with H2s, one pull quote, two buttons at the end. |
| FAQ and facts | `.prose`, `h2`, `details`, `summary` with the plus icon | Two to four groups of two to four questions. |
| Contact | `.cart-grid`, `.paper` with `form.form.two[data-form="contact"]`, `[data-success="contact"]`, `ul.info` | Name, email, topic, message; email, address and hours beside it. |
| Legal | `.prose` with `#privacy` and `#terms` | Plain words; the user must supply the real text. |
| Footer | `.site-footer.band.on-red`, `.foot-grid`, `form.inline[data-form="newsletter"]`, `.foot-links`, `.foot-base` | Shout, one sentence, the sign-up card, three link columns, small print and back to top. |
| Toast | `[data-toast]` | Appears when something is added to the basket. |

## Forms

Every form has `data-form="<kind>"` and `novalidate`, a matching `[data-success="<kind>"]` block, and each required field points at its error with `aria-describedby`. The script validates on blur and on the submit button's click, shows "sending…", then the success block. Nothing is sent: connect a real endpoint when the site goes live.
