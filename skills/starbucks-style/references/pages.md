# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Coffee or tea chain with several locations (the template) | home, menu, item, rewards, join, signin, stores, gift, story, help, legal, 404 | opening band, seasonal split, order-ahead split, bakery split, rewards strip, at-home split, store search band |
| Single café or bakery | home, menu, item, story (as "Visit us" with hours and the map), help, legal, 404 | opening band with today's hours, two or three splits (signature drink, bakery, the room), a band with the address and a "Get directions" pill |
| Bubble tea or juice brand | home, menu, item, stores, rewards, join, legal, 404 | opening band with the drink of the month, splits for the build-your-own steps and the toppings, rewards strip, store search band |
| Quick-service restaurant | home, menu, item, stores, gift, help, legal, 404 | opening band with the current deal, splits per meal (breakfast, lunch, late night), order-ahead split, store search band |
| Roaster or packaged food brand | home, menu (as the shop), item (as the product page with grind or size), story, stores (as stockists), help, legal, 404 | opening band with the new release, splits per product line, subscription strip in cream, stockist search band |
| Loyalty or membership program on its own | home, rewards, join, signin, help, legal, 404 | opening band with the join pill, how-it-works strip, tiers, tab box of rewards, FAQ |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hdr`, `.logo`, `.nav`, `.hdr-end`, `.find`, `#theme-toggle`, `.signin`, `.join`, `#menu-open` | Wordmark, four uppercase links at most, the find link, the theme toggle, "Sign in" outline and "Join now" solid. `fitNav()` hides the find label (`.tight`) and then the links (`.compact`) when the bar would not fit. |
| Menu sheet | `#menu` (`<dialog class="sheet">`), `.sheet-links` | Every header link plus the finder and help, then the two pills. |
| Band | `.band`, `.band.cream`, `.display`, `.lead`, `.pills`, `.search[data-search]` | Full-bleed, centred. Green bands take white outline or solid pills; cream bands take spruce ones. One action per band. |
| Split block | `.split`, `.split.rev`, `.split.on-green`, `.split-media`, `.panel`, `.p-cream`, `.p-green`, `.p-deep` | Photo half and colour half. The photo uses `object-fit: cover` and keeps its subject in the middle so both 1:1 and 4:3 crops work. Add `on-green` when the panel is green or evergreen. |
| Rewards strip | `.band.cream`, `.eyebrow`, `.steps`, `.reveal` | Eyebrow, H2 in spruce, three steps, then a solid and an outline pill. |
| Menu | `.subnav`, `.menu-layout`, `.cat-nav`, `.pickup`, `#pickup`, `[data-filter="tags"]`, `.menu-cat#cat-*`, `.items li[data-tags]`, `.circ`, `.kcal`, `.tag`, `[data-empty="tags"]` | Category IDs are the anchors for `#/menu?at=cat-hot`. Tags are space-separated (`hot iced plant food home`); chips filter them and empty categories hide. One "New" tag per category at most. |
| Drink page | `.crumbs`, `.item-hero`, `[data-i]`, `[data-drink]`, `[data-qty]`, `.sizes`, `input[name=size][data-add]`, `#o-milk`, `#o-shots`, `#o-sweet`, `.facts-table`, `.order-card`, `[data-form="order"]` | Filled from the `items` object in the script by `#/item?d=<id>`; the markup shows one item without JavaScript. Drinks show sizes and options, food and goods show quantity. `data-add` on each size is the price difference. |
| Rewards | `.tabpanel` (hero), `.steps`, `.tiers`, `.tier.t-sprout`, `.t-grove`, `.t-canopy`, `.tab-box`, `[role=tablist]`, `[role=tabpanel]`, `.faq` | Hero with eyebrow, display, lead, two pills and an oval photo. Three tiers at most; the tab box lists rewards by cost. |
| Join and sign in | `.form-split`, `.perks`, `.form-card`, `[data-form="join"]`, `[data-form="signin"]`, `[data-reveal]`, `.check`, `[data-success]` | Perks on the left, the form on the right. The password rule lives in `pattern` and its message in `data-pattern-mismatch`. |
| Store finder | `.finder`, `.finder-list`, `#store-q`, `[data-filter="amen"]`, `[data-count="amen"]`, `.store[data-store][data-amen][data-q]`, `.store-head`, `details`, `.hours`, `.amen`, `.map`, `.pin[data-pin]` | Each café has the same id on its card and its pin. `data-q` holds extra search words (neighbourhood, landmarks). Pins are placed with `left` and `top` percentages over the drawn map. |
| Gift cards | `[data-filter="occ"]`, `.gifts`, `.gcard.d-*[data-occ]`, `m-*` symbols, `[data-preview]`, `[data-gift]`, `.amounts`, `[data-form="gift"]`, `[data-count-for]` | Each design is a `d-<name>` class (background and motif colour) plus an `m-<name>` symbol with the same name. The preview follows the selected design, amount and recipient. |
| Our story | `.split`, `.values`, `.timeline` | A split with the H1 in the green panel, three values, a split with the room, four dates. |
| Help | `.faq`, `[data-form="contact"]`, `#c-topic` | Grouped questions on the left, the form on the right. `?topic=` preselects the topic. |
| Footer | `.site-footer`, `.foot-cols`, `.foot-legal` | Four link columns and the wordmark, then legal links and the copyright. |
| 404 | `data-view="404"`, `.notfound` | A product circle, a short H1, two pills. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it: `#/item?d=latte`, `#/menu?at=cat-bakery`, `#/menu?cafe=pier`, `#/stores?q=harbor`, `#/help?topic=account`, `#/legal?at=terms`.
- `?at=<id>` scrolls to that section inside the view.
- The pickup café is one choice shared by the menu strip and the order card, remembered with the template's `store` wrapper (`fernway-pickup`).
- The `titles` map in the script sets the document title per view; the drink page uses the item name. Update both when you add or rename views.
- In a framework project, replace the router with real routes (`/menu/[item]`, `/stores/[id]`), keep the same URLs where possible, and move `items` and the café list into typed data.
