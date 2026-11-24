# Style guide

The look in one sentence: a deep blue storefront lit from the top, where wide cover art fills every slot, a lime percentage and a struck-through price sit in a dark box beside every title, and long tabbed lists of slim rows do the browsing.

## Tokens

All values live as CSS custom properties on `:root` (dark) and `:root[data-theme="light"]` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--page` / `--glow` | deep navy / brighter blue | pale blue-gray / soft blue | the page, and the radial light that falls from the top of every page |
| `--bar` | near-black blue | deep navy | the top bar and the footer; stays dark in both themes |
| `--sub` / `--sub-text` | mid blue / near white | pale blue / navy | the store bar under the top bar (categories, quick links, search) |
| `--panel` / `--raise` | blue slate / one step lighter | white / pale blue | rows, cards and boxes / their hover state and the preview panel |
| `--well` | darkest blue | light gray-blue | the price box, the gallery frame, empty image slots |
| `--text` / `--strong` / `--muted` | pale blue-gray / near white / gray-blue | slate / ink / gray | body copy / titles and prices / tags, dates, counts |
| `--link` | sky blue | strong blue | every text link, the active tab underline, positive review words |
| `--chip` / `--chip-text` | translucent blue / light blue | pale blue / blue | tags and filter chips |
| `--btn` / `--btn-hover` | dark blue / bright blue | pale blue / blue | every secondary button ("See all", arrows, "Add to wishlist") |
| `--sale` / `--sale-text` | lime / dark green | the same | the discount percentage, and nothing else |
| `--buy` / `--buy-2` | green gradient | the same | "Add to cart", "Place order", "Sign in", the cart button: the one action that spends or commits |
| `--search` | bright blue | blue | the square search button |
| `--pos` / `--mix` / `--neg` | blue / amber / coral | darker versions | review summary words ("Very positive", "Mixed") and the review meter |
| `--err` / `--ok` | coral / light green | red / green | form errors / success boxes and the toast edge |
| `--band-a` / `--band-b` | plum / blue | lilac / pale blue | the one promotional band (newsletter) |

Color has jobs. Lime is only the discount percentage. Green is only for buying and committing. Blue is everything interactive that is not buying: links, tabs, secondary buttons, search. The cover art carries all the other color; the interface stays blue-gray so twelve covers in a row never fight it.

## Typography

- **Saira** (variable weight) for display: section titles (20px, weight 600), the top navigation (15px, weight 600, capitals, 0.07em tracking), tab labels (20px, weight 500), slide and preview titles (24 and 20px, weight 500), small headings inside pages (15px, weight 600, capitals, 0.06em tracking, with a hairline under them), and the lettering over cover art (weight 800, capitals, sized from the cover with `9cqi`).
- **Red Hat Text** (variable weight) for everything you read: body at 16px with a 1.55 line height, row titles 16px weight 500, meta lines 13px muted, prices 15px weight 500.
- `.display` (28 to 40px, weight 700) appears only in the promotional band, the about headline and the 404 page.
- Page titles (`.h1`) are 24 to 30px at weight 500, plain, like a game's name above its media.
- Sentence case everywhere except the top navigation, small section headings inside pages, ribbons, tile labels and cover lettering, which are capitals.

## Spacing, layout and radius

- One centered column of 1200px with a 16px gutter on each side. Blocks on the home page are 28px apart; rows in a list 5px apart; cards in a rail 16px apart.
- Corners are nearly square: 3px for controls, 4px for cards and panels, 2px for cover art, 10px only for the category tiles.
- The featured carousel is a wide cover (about 1.75 parts) beside an info panel (1 part); the arrows sit outside the column on wide screens. The game page is a 16:9 media stage with a thumbnail strip beside a 340px column; below it the main column and a 320px side column.
- Lists are dense: a row is a 184px cover, the title and a meta line, and the price block on the right, about 86px tall. Browse rows add a date column and a review column.
- Below 900px the side columns stack, the hover preview disappears, and rails show about two and a half cards. Below 560px rows put the price under the title.

## Surfaces and depth

- The page is one gradient: a radial blue light at the top that fades into the navy (or pale blue) page. Never `background-attachment: fixed`.
- Panels are flat blue slate on the page; hover lifts them one step lighter instead of adding a shadow.
- Shadows only for things that float or must read as one object: the featured carousel, the price-and-button group on the game page, dropdowns, the toast.
- Cover art brightens by 12 percent under the pointer; nothing else moves on hover except category tiles (3px up).

## Signature elements

Keep the first four on every page that sells; the home page uses all seven.

1. **The price block.** A lime box with the percentage ("-40%") welded to a dark box with the old price small and struck through over the new price. Without a discount only the dark box shows. "Free" and "Coming soon" use the dark box alone. It is the same block in every slot: carousel, deal cards, rows, cart lines, the game page.
2. **Cover art in every slot.** One wide drawing (460 by 215) per title, cropped for the wide capsule, the tall library capsule and four "screenshots". With real images, the cover already carries the title lettering; without them the template letters the title over the art in Saira capitals.
3. **The dark bar and the blue store bar.** Logo and capitals navigation on the near-black bar with the green cart button at the right; under it a lighter blue strip with a categories dropdown, quick links and a long search field ending in a square blue button.
4. **Green buy button attached to the price.** On the game page the price block and "Add to cart" form one group that hangs over the bottom edge of the "Buy …" panel.
5. **The featured carousel.** Wide cover on the left, the title, four screenshots, why it is featured with the review summary, two tags and the price block on the right; bare chevrons outside the column; short bar-shaped dots under it.
6. **Ribboned deal cards.** A rail of cover cards, each with a gradient ribbon ("Midweek deal") in the corner and the title, maker and price block underneath.
7. **The tabbed list with a preview.** Four tabs (new, top sellers, specials, a price cap) over slim rows; hovering or focusing a row shows its title, review summary, tags and three screenshots in the panel beside the list.

## Components

- **Row:** cover, title (ellipsis), platform badges (`WIN`, `MAC`, `LINUX`, or formats like `MP3`) and tags, price block. Variants: browse (`brow`, adds date and review), compact (side columns).
- **Deal card:** ribbon, cover, title with maker under it, price block. **Mini card:** cover, title, price block.
- **Category tile:** a 16:9 two-color gradient with a soft light in the top left and a white label chip in spaced capitals.
- **Game page:** breadcrumb, title, the media stage with thumbnails (overlays suggest a game's interface), the side column (cover, blurb, review summary, release date, developer, publisher, tags), the wishlist bar, the "Buy …" panel with platform badges and the hanging price group, "Content for this game" (add-ons), "About this game" that folds at 300px behind "Read more", system requirements as a definition list, player reviews (summary meter, cards with a thumb verdict bar, hours played and "Helpful"), features with icons, more like this.
- **Browse:** result bar (count, sort, filters button on small screens), rows, and a filter column of panels: search, price slider, "Specials only", "Hide coming soon", tag checkboxes with counts.
- **Cart:** lines with cover, platforms, price block and "Remove"; an order summary with the estimated total, the email for the receipt, the terms checkbox and a full-width green button.
- **Library:** tabs for owned games and wishlist, tall capsules in a grid, a key button for owned games, price block and "Add to cart" for wishlisted ones.
- **Forms:** 14px labels above 42px fields with a 3px radius; errors float in a reserved 22px line under the field, so nothing moves; a green submit button; a success box with a green left edge.
- **Toast:** slides in at the top right after adding to the cart, with "View cart"; leaves after five seconds.

## Do and don't

- Do let the covers carry the color. Don't tint panels, add photos behind text or decorate between sections.
- Do keep lime for the percentage and green for buying. Don't use either for anything else, and don't show a discount without the old price.
- Do show real review summaries with their counts. Don't invent review words, ratings, "Top seller" labels or player counts; leave them out until there is data.
- Do keep rows slim and lists long. Don't turn the list into large cards or add excerpts to rows.
- Don't round corners past 4px (category tiles excepted), use emoji or icon fonts, or copy another store's logo, typeface, wording or artwork.

## Voice

Short, concrete and a little warm, like a shop run by people who play the games. Titles and prices first, then facts: release date, platforms, how long it is, what you do in it. Buttons are verbs ("Add to cart", "Add to wishlist", "Place order"). Descriptions say what you do in the game in one or two sentences, no "epic", "ultimate" or exclamation marks. Sale copy states the rule ("Specials run Thursday to Thursday") instead of shouting.
