# Pages and sections

Every view in `assets/template.html` is a `<section data-view="name">`, reached by `#/name` links. `#/news/<slug>` opens a story and `#/shop/<slug>` a product; `?cat=`, `?look=` and `?to=` are read by the router. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the row to two words at the left and three at the right, and the home list to about nine words.

| Site | Views to keep | The row | The wall shows |
|---|---|---|---|
| Clothing or skate label with drops (the template) | all fourteen | shop, new / preview, lookbook, news | this season's products |
| Independent shop or concept store | home, shop, product, cart, news, archive, stores, contact, faq, mailing list, legal, 404 | shop, new / brands (as `preview`), news | this week's arrivals |
| Artist or musician merch | home, shop, product, cart, news (as tour or release notes), archive, mailing list, contact, legal, 404 | shop / records (as `preview`), dates (as `news`) | covers and merch |
| Designer or small studio | home, lookbook (as work: projects instead of looks), preview (as an index of all work), news, about, contact, legal, 404 | work / index, news | details from every project |
| Photographer or zine press | home, preview (as an index of photographs), lookbook (as one series), shop (prints and zines), product, cart, about, contact, legal, 404 | shop / index, series, news | close crops of the photographs |
| Restaurant, bar or venue that releases things | home, news (as nights or menus), archive, shop (as merch or vouchers), stores (as locations and hours), contact, mailing list, legal, 404 | shop / menu, nights | dishes or posters |

Without a shop, delete the shop, product and cart views, the cart corner in the header and the "shop" words; move another word to the left end of the row. Without drops, change the home line to an opening hours or next-event line and keep the countdown only if there is a real recurring time.

## Section anatomy

| Section | Classes, IDs and data | Contents and rules |
|---|---|---|
| Header | `.top`, `.corner`, `.brand`, `.wordmark`, `.clock`, `[data-clock]`, `[data-count]`, `#theme-toggle` | Cart count at the left, the wordmark and clock centred, the theme word at the right. `PLACE.zone` is the IANA time zone of the brand's place; write its short code after the time ("lis", "nyc", "tpe"). The static time in the markup is the fallback without JavaScript. |
| The row | `nav.row`, `.long` | Two groups pushed to the ends. `.long` words disappear under 560px. The current page gets `aria-current="page"` (bold); a link with `?cat=` is current only on that category. Hidden on home (`.on-home`). |
| Home | `.home`, `.hero`, `.drop`, `[data-countdown]`, `.menu` | One picture linking to the lookbook, then the drop line and the list of words. `PLACE.drop` sets the weekday (0 is Sunday) and hour of the recurring drop; the countdown reads "(in 2d 4h 08m)" and "(live now)" for the first hour. The `h1` is `.sr-only`. |
| News | `.story`, `[data-n="img|prev|pos|next|date|title|body|avail"]` | The first story is written in the page; the others come from `NEWS` (`s` slug, `d` date, `k` kind, `t` title, `img`, `alt`, `p` paragraphs, `a` availability line or ""). The pager wraps around. Picture paths are full quoted strings. |
| Archive | `[data-filter="archive"]`, `button[data-value]`, `[data-rows]`, `[data-count-of]`, `[data-empty]`, `[data-reset]` | Rows are built from `NEWS`; one filter word per `k` value, with counts. Without JavaScript a link to the latest story shows instead (`.nojs`). |
| Preview (the wall) | `.wall`, `[data-wall]`, `[data-peek]`, `CROP` | Built from the shop tiles: every product once, then repeats with a mirrored crop to fill the last row of six. `CROP[slug]` is the `[x, y]` point the 2.3x crop centres on; aim it at a print, a pocket or a texture. The peek line shows "name, colour, price" or "sold out". |
| Lookbook | `.lb`, `[data-thumbs]`, `[data-l="img|pos|prev|next|items"]`, `.lb-cap`, `LOOKS` | Thumbnails are the source of the pictures (`?look=n`, 1-based). `LOOKS[n - 1]` lists the product slugs shown in that look; they become links in the caption. Arrow keys step through the looks. |
| Shop | `.shop`, `.cats`, `[data-tiles]`, `li.tile[data-slug][data-k][data-p][data-new][data-out]`, `.cap`, `.nm`, `.so`, `[data-shop-title]` | Categories are links (`#/shop?cat=jackets`); `new` filters `data-new`, `all` shows everything, a category with no products shows the empty line. Each tile has the picture, the name in `.nm` (the script adds the price) and `.so` when sold out. |
| Product | `.pd`, `[data-form="cart"]`, `[data-i="img|name|col|desc|rel|price|add|next"]`, `#size`, `[data-added]`, `ITEMS`, `ONE` | Built from the tile (name, picture, price, category, `data-out`) and `ITEMS[slug]` = colour, sizes (space separated), sold-out sizes, description. A single size is preselected; sold-out sizes are disabled; a sold-out product shows the grey slab. `ONE` gives the word for "next jacket". |
| Cart | `[data-cart-empty]`, `[data-cart-full]`, `.lines`, `.line`, `.qty`, `[data-sub]`, `[data-total]`, `[data-checkout]` | Kept in the browser under `cv-cart`. Quantities step from 1 to 9; going below 1 removes the line. "check out" only explains that a payment provider is needed. |
| About, stores, f.a.q., legal | `.narrow`, `.prose`, `.stores`, `.store[data-hours]`, `[data-now]`, `.qa`, `.sizes`, `#sizing`, `#terms`, `#privacy` | Store hours are written as `"1-6 11-19, 0 12-18"` (weekdays 0 to 6, then hours) so "open now" can be computed in `PLACE.zone`. The f.a.q. uses `<details>`; the size table is a real `<table>`. `?to=sizing` and `?to=privacy` scroll to those headings. |
| Contact and mailing list | `[data-form="contact"]`, `[data-form="newsletter"]`, `.two`, `.field`, `.error`, `.check`, `.radios`, `[data-success]`, `[data-echo]`, `[data-again]` | Contact: name, email, topic, an optional order number (4 to 8 digits), a message of 20 characters or more. Mailing list: email, country, what to receive, consent. Each success state repeats what was sent. |
| 404 | `data-view="404"`, `.notfound` | "404" at display size, one sentence, two links. Unknown routes and unknown slugs land here. |
| Footer | `.foot` | Every page as a word, then one line with the name and place. |

## Routing and state

- `#/shop?cat=<category>` must match a `.cats` link; unknown values show everything. `#/lookbook?look=<n>` clamps to the number of looks. `#/news/<slug>` must match `NEWS`, `#/shop/<slug>` a tile and an `ITEMS` key; anything else shows the 404 view.
- `titles` sets the document title per view; story and product titles are set when they render. Update it when you add or rename views.
- Theme (`cv-theme`) and cart (`cv-cart`) are stored through the `store` wrapper, which falls back to memory inside a sandboxed frame. Rename the keys for the new brand.
- In a framework project, give every product and story a real URL, render the shop and the wall on the server, keep `?cat=` as a query parameter, and keep the clock and countdown as small client components.
