# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. Query parameters after `?` carry state: `#/browse?tag=Cozy&specials=1&max=10&sort=low&q=puzzle`, `#/game?id=ember`, `#/post?id=winter-storms`, `#/support?section=refunds`, `#/legal?section=privacy`. In a framework project each view becomes a real route and the parameters become real query strings.

## Recipes by kind of site

Pick the closest recipe, keep the order, drop what the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Games label or indie studio store (the template) | home, browse, game, cart, news, post, library, signin, support, about, legal, 404 | featured carousel, special offers rail, category tiles, tabbed list with preview, the label's own games, newsletter band |
| Single game or small studio site | home (as the game page), news, post, support, about, legal, 404 | the game page content directly: media stage, buy panel, about, reviews; then news; drop browse and tiles |
| Digital goods shop (fonts, presets, sound packs, ebooks, printables) | home, browse, product (`game` view), cart, library (downloads), signin, support, about, legal, 404 | featured carousel, offers rail, category tiles by format, tabbed list (new, best sellers, on sale, under a price), newsletter |
| Board game or tabletop shop | home, browse, product, cart, news (designer notes, events), post, signin, support, about, legal, 404 | featured carousel, offers rail, tiles by player count or type, tabbed list, upcoming releases rail |
| Software or plugin marketplace | home, browse, product, cart, library (licences), signin, support, legal, 404 | carousel of featured tools, tiles by category, tabbed list (new, popular, free), offers rail |
| Course or video library sold per item | home, browse, product, cart, library (owned courses), signin, support, about, legal, 404 | carousel, tiles by subject, tabbed list, "Free to start" rail |

Header, footer, home, legal and 404 always ship. Product page and cart ship whenever anything can be bought.

## Data: the catalog rows

`#catalog` in the browse view is the single source for every card, list and page. One `<li data-game>` per item:

| Attribute | Meaning |
|---|---|
| `data-game` | id used in links (`#/game?id=…`) and in the art symbol `cv-<id>` |
| `.r-t` link text | the title |
| `data-dev` | maker; the item belongs to the store's own rail when it equals `STORE_NAME` |
| `data-tags` | tags separated by `|`; the first is the breadcrumb, tags used twice or more become filters |
| `data-price` / `data-was` | price, and the old price when discounted; `""` means coming soon, `"0"` means free |
| `data-date` | release date `YYYY-MM-DD` (a future date for coming soon) |
| `data-score` / `data-reviews` | share of positive reviews and their count; leave both out when there are none |
| `data-os` | platform or format badges: `win`, `mac`, `linux`, `mp3`, `flac` (add more in `OS`) |
| `data-feat` | feature list keys: `solo`, `coop`, `online`, `pad`, `cloud` (add more in `FEATS`) |
| `data-blurb` / `data-about` | the short description, and the longer one with paragraphs separated by `|` |
| `data-art` / `data-for` | reuse another item's art; mark an add-on of another item (it shows under "Content for this game") |

To add a field (for example "What's included"), add a `data-*` attribute to the rows, read it in the `GAMES` parser, give its slot on the product page a `data-g` name and fill it in `renderGame()` through `G("<name>")`. Never look a row attribute up with a global selector: `$("[data-inc]")` finds the first catalog row, not the product page. Form fields use `data-req` for their error message, so that name is taken too.

Without JavaScript the rows show as a plain list. With real cover art, put `<img src="images/<file>" width height alt="">` inside the row; screenshots go into `#shots` as `<img data-shot="<id>" …>` in order.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Top bar | `.top`, `.brand`, `.mark`, `.primary`, `.who[data-who]`, `#theme-toggle`, `.cart-btn[data-cart]`, `[data-cart-count]`, `.menu[data-pop]`, `.menu-panel` | Five capitals links at most. Below 1100px the links move into the menu; below 520px the wordmark and "Sign in" hide. Never wraps. |
| Store bar | `.subnav`, `.cats[data-pop]`, `.cats-panel`, `.search[data-search]`, `#q` | Categories dropdown (a `<details>`, works without JavaScript), up to four quick links (hidden below 760px), the search. |
| Featured carousel | `.car[data-car]`, `[data-slides]`, `.slide`, `.slide-info`, `.shots`, `.why`, `.car-arrow[data-car-step]`, `[data-dots]` | Three to six slides from `FEATURED` (`[id, reason]`). The static first slide is the no-JavaScript fallback. |
| Rail | `.head`, `.steps`, `[data-step]` with `aria-controls`, `.rail` with `id`, `data-rail="<list>"`, `data-card="deal|mini"` | The list names a function in `LISTS`; five to twelve items. |
| Deal card | `CARDS.deal`: `.deal`, `.ribbon` (`.r1`, `.r2`), `.deal-foot`, `.deal-t` | Ribbon names cycle through `RIBBONS`; use real sale names. |
| Category tiles | `.rail.tiles`, `.tile` with `--a` and `--b` | Six tiles link to `#/browse?tag=…`; static markup. |
| Tabbed list | `[data-tabs]`, `.tab[data-tab]`, `.tl`, `[data-tab-list]`, `.pv[data-pv]` | Each tab names a list in `LISTS`; eight rows; arrow keys move between tabs. |
| Promotional band | `.band`, `[data-form="newsletter"]`, `[data-ok="newsletter"]` | One per page at most. |
| Browse | `[data-browse-h]`, `.results-bar`, `[data-count]`, `#sort`, `[data-filter-toggle]`, `[data-results]`, `[data-results-empty]`, `.filters[data-filters]`, `#f-q`, `#f-max`, `input[name=specials|soon|tag]`, `[data-clear]` | Reads `q`, `tag`, `max`, `specials` and `sort` from the route. |
| Game page | `.gp`, `[data-g="stage|thumbs|cap|blurb|reviews|date|dev|tags|wish|buy-h|os|buy|dlc-wrap|dlc|about-wrap|about|readmore|req|req-os|score|feats|more"]`, `.hud`, `.wishbar`, `.purchase`, `.buy`, `.about`, `.req`, `.review`, `.verdict` | `renderGame()` fills every slot through `G()`, which only looks inside the game view. The static markup is the first item. Review cards are static examples: replace them with real reviews or remove them. |
| Cart | `[data-lines]`, `.line`, `[data-remove]`, `[data-cart-empty]`, `[data-total]`, `[data-form="checkout"]`, `[data-ok="checkout"]` | Checkout moves the items into the library and empties the cart (front end only). |
| News | `[data-news-chips]`, `[data-news] li` with `data-kind`, `data-post`, `data-game` | Kinds: `patch`, `devlog`, `event`. |
| Article | `[data-post="kind|title|date|art|body|buy"]`, `template[data-body="<post id>"]` | The first article is static; others take their body from their `<template>` and their title, date and kind from the list item. |
| Library | `[data-lib-tabs]`, `[data-lib]`, `.cap.tall`, `[data-key]`, `[data-lib-empty]` | Owned games and wishlist from storage. |
| Sign in | `[data-auth-tabs]`, `[data-form="login"]`, `[data-form="signup"]`, `[data-reveal]` | One card, two tabs. |
| Support | `ul.boxes`, `.box`, `.faq details` with ids, `#contact`, `[data-form="contact"]` | `#/support?section=<id>` opens and scrolls to a question. |
| Toast | `[data-toast]`, `[data-toast-text]` | After add to cart, wishlist or library. |

## Interactions to keep working

Theme toggle, menu and categories dropdowns (close on outside click and on navigation), carousel arrows, dots and autoplay, rail arrows, tabs with hover and focus preview, header search into browse, every browse filter and sort, thumbnails on the game page, "Read more", wishlist, add to cart or library, remove from cart, checkout, library tabs and keys, sign-in tabs, password reveal, news chips, and every form with floating errors, a busy state and a success box.
