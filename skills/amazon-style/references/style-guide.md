# Style guide

The look in one sentence: a cool gray shelf of square white boxes under a deep blue-black bar with one big search field, where colour bands announce the promotions and rows of small product cards do the selling with stars, red discount tags, struck-through prices and a delivery date.

## Tokens

All values live as CSS custom properties on `:root` (light) and `:root[data-theme="dark"]` (plus the `prefers-color-scheme` block) in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--page` | cool light gray | near black blue | the shelf every box sits on |
| `--surface` | white | one step up | every box: quads, shelves, result cards, the buy box, forms |
| `--tile` | almost white gray | lighter slate | behind every product drawing or photo |
| `--text` / `--text-muted` | ink / slate gray | near white / light gray | names, prices / counts, notes, list prices |
| `--border` / `--border-strong` | light hairline / mid gray | dark hairline / mid slate | dividers / fields, outlined pills, size boxes |
| `--link` | teal blue | light teal blue | every text link, rating counts, the selected thumbnail and option |
| `--warm` | burnt orange | light orange | link hover, the search query in the result bar, "Verified purchase" |
| `--bar` / `--bar-2` | deep blue-black / one step lighter | darker still | the top bar / the department bar, drawer head and dark buttons |
| `--accent` | warm yellow | the same | "Add to cart", "Sign in", "Proceed to checkout": the main action, always a pill |
| `--accent-2` | orange | the same | "Buy now", the search button, the cart count, the brand mark |
| `--deal` / `--deal-ink` | retail red | red / lighter red | the discount tag (white text) / "Limited time deal", "-20%", errors |
| `--badge` | orange | the same | "Best seller" and rank numbers |
| `--star` / `--star-off` | orange / pale gray | orange / slate | rating stars and the review histogram |
| `--ok` | green | bright green | "In stock", "Arriving tomorrow", the free-delivery meter, success |
| `--band-1`…`--band-3` | pale teal, peach, lilac | deep teal, rust, plum | promotion bands; dark ink on them in light mode, white in dark mode |
| `--foot-top` / `--foot` / `--foot-2` | three steps of the bar colour | darker steps | "Back to top", the link columns, the legal strip |

Colour has jobs. Yellow and orange are only for the two buying actions and the search; red is only for discounts and errors; green only for stock, delivery and success; blue only for links. Everything else is ink on white on gray.

## Typography

- **Libre Franklin** (variable weight) for everything, a sturdy grotesque that stays legible at small sizes in dense grids and turns into a shouting promotional face at 850.
- `.display` (32 to 60px, weight 850, letter-spacing -0.03em, line height 1) only inside colour bands: the hero slides, the promo band, the about band. Two lines at most.
- `.h1` page titles are 24 to 28px at weight 500, plain, like a shop sign rather than a headline. The product title is the same size at weight 400 so long names stay readable.
- `.h2` section titles are 21px bold, sentence case, left. Card titles are 15px regular, clamped to two lines.
- Body is 15px with a 1.45 line height, small print 13px. Labels on the bar are 12px muted over 14px bold (`Hello, sign in` over `Account & lists`).
- Prices use the split form: a small raised currency sign, large whole number, small raised cents (`.price`, `.cur`, `.cents`). The list price is 12px muted and struck through after "List:".

## Spacing, layout and radius

- One centered column up to 1500px with a 12 to 20px gutter. Boxes are 20px apart on desktop, 10 to 12px on phones, with 20px inner padding.
- Boxes are square-cornered white panels on the gray page. Product tiles and photos take a small 4px radius, fields 6px, the buy box and forms 8px. Every button and chip is a full pill.
- The home page opens with a colour band 450 to 620px tall that fades into the page gray; the first row of four boxes rides up over its lower third.
- Grids: four quad boxes, results in auto-filled columns from 200px beside a 230px filter column, product page in three columns (gallery, details, a 280px buy box). Below 900px the filters fold behind a "Filters" button; on phones grids are two columns and rails show about two and a half cards.

## Surfaces and depth

- Flat: no shadows on boxes or cards. The gray gap between white boxes is the structure.
- Shadows only on things that float: the drawer, the location dialog and the added-to-cart panel.
- The result bar under the header carries a 2px soft shadow so the filters read as a toolbar.

## Signature elements

Keep the first four on every page that sells, and at least six on the home page.

1. **The dark bar with the big search.** Logo, "Deliver to" with a pin, a search field that takes all remaining width with a department select on its left and an orange square button on its right, the two-line account and orders links, the theme toggle and a cart icon with the count above it. Hovering any item on the bar draws a thin white outline around it.
2. **The department bar.** A lighter strip under it: "All" opens the drawer, then departments and a bold promotion on the far right. It scrolls sideways on small screens instead of wrapping.
3. **Small product cards.** A square tile with the product contained, an optional "Best seller" or "Top rated" flag in the corner, a two-line title, the rating number with stars and the count in blue, "2K+ bought in past month", the red discount tag with "Limited time deal", the split price with the struck list price, the delivery date in bold and a yellow "Add to cart" pill.
4. **The buy box.** A bordered box on the right of the product page: price, delivery date with the cutoff ("Order within 5 hrs 12 mins"), "Deliver to", green "In stock", quantity, a yellow "Add to cart" pill over an orange "Buy now" pill, "Secure transaction", ships from and sold by, and "Add to list".
5. **The promotion band and quad boxes.** A full-width colour band with a short heavy headline and product art, rotating every seven seconds with tall bare arrows at the edges, and four white boxes over its lower edge: a 2 by 2 grid of products, a deal of the day with a countdown, a 2 by 2 grid of departments and a sign-in prompt.
6. **Rails of deals and best sellers.** White shelves with a bold title, a "See all" link and round arrow buttons; deal cards lead with the red tag and the price, best seller cards carry a rank number.
7. **The filter column.** Department links, star rows ("4 stars & up"), price ranges as plain text buttons and checkboxes for deals and delivery, next to a result bar that says "1–12 of 12 results for "kettle"".
8. **The stepped footer.** "Back to top" on a lighter strip, link columns on the bar colour, the logo with language and currency boxes, a darker legal strip.

## Components

- **Quad box:** 21px bold title, a 2 by 2 grid of 1:1 tiles with 13px captions, a 13px blue link pinned to the bottom.
- **Deal card:** tile, tag line, price row, two-line title. **Rank card:** tile with "#1" in the corner, title, stars and count. **Full card:** see signature 3.
- **Product page:** breadcrumb, a 56px thumbnail column beside a square stage (front, back, close-up), details column (title, store link, rating, badge line, bought line, rule, "Limited time deal", "-20%" in light red beside the big price, "List price", colour options as bordered boxes with a swatch, "About this item" bullets), the buy box, a rail of related products, a product information table and customer reviews with a five-bar histogram.
- **Added-to-cart panel:** drops in at the top right with a green check, the product, the subtotal, "Go to cart" and "Proceed to checkout"; closes after six seconds.
- **Cart:** lines with a 150px tile, title, green "In stock", delivery date, colour, a yellow-ringed pill stepper whose minus turns into a bin at one, "Delete" and "Save for later" as links, the line price on the right; a summary box with the free-delivery meter, subtotal, gift checkbox and a yellow checkout pill; "Saved for later" and "Customers also bought" below.
- **Orders:** a bordered order card with a gray head (order placed, total, ship to, order number), a green status line, item rows with "Buy it again", and the action pills on the right; "Track package" opens four steps.
- **Forms:** bold 13px labels above 38px fields with a 6px radius and an inner shadow, a blue focus ring, errors in red with a round "!" in a reserved 18px line, the yellow pill to submit, fine print with blue links, a success box with a green border.
- **Drawer:** a left sheet with a dark head ("Hello, sign in"), department links and help links.
- **Location dialog:** a small modal with a gray head, one postal code field and "Apply"; the "Deliver to" labels update everywhere.

## Do and don't

- Do let the boxes, tags and dates carry the page. Don't add gradients, glass, big shadows or decorative illustrations between sections.
- Do keep red for discounts, green for stock and delivery, yellow and orange for buying. Don't use them anywhere else.
- Do show the real delivery promise and the real price per item. Don't invent urgency: a countdown must end when the deal really ends.
- Do keep headlines inside colour bands and short. Don't put `.display` type on the white boxes.
- Don't round the boxes, use emoji or icon fonts, or copy another store's logo, mark, wording for its membership, or typeface.

## Voice

Plain, quick and transactional. Labels are nouns and short verbs ("Add to cart", "Buy it again", "See all deals"). Numbers and dates come first ("FREE delivery Tomorrow, Nov 24", "2K+ bought in past month"). Headlines in bands are offers with a number in them ("Up to 30% off cookware"). Help copy answers one question per sentence. No exclamation marks, no "amazing", no fake scarcity.
