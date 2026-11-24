# Style guide: Nike style

The look in one sentence: a white, quiet retail frame of black type and pill buttons, broken open by full-bleed campaign photographs that carry one enormous condensed uppercase headline each, with products on soft gray tiles in dense grids.

## Tokens

All values live as CSS custom properties on `:root` (light) and `:root[data-theme="dark"]` (plus the `prefers-color-scheme` block) in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | pure white | near black | the page |
| `--surface` | soft gray | one step above near black | utility bar, promo strip, search pill, rail arrows, the free-delivery bar, table heads |
| `--tile` | the same soft gray | a lighter charcoal | behind every product image, so products sit on one even studio sweep |
| `--text` / `--text-muted` | near black / cool gray | white / light gray | names and headings / categories, color counts, captions |
| `--border` / `--border-strong` | light gray hairline / near black | dark hairline / white | dividers, fields, chips / selected size, focused field |
| `--accent` / `--accent-text` / `--accent-hover` | black / white / dark gray | white / black / light gray | the solid pill, pressed chips, checked choices |
| `--ink` / `--ink-text` / `--ink-muted` | near black and its text roles | a deeper black | the member band and the footer: the one black block that closes the page |
| `--sale` | retail red | lighter red | "Just in" and "Sale" labels, errors. Never a button, never a heading |
| `--ok` | deep green | brighter green | "20% off", the free-delivery meter, the added-to-bag check, success icons |

There is no brand color. Color comes from the photographs and the products; the chrome stays black, white and one gray. Photography in the sample is black and white, so a page reads as black type, white space and gray tiles until a product adds its own color.

## Typography

- **Anton** for campaign headlines only: a heavy condensed grotesque, always uppercase through CSS, line-height 0.88, set huge. `.display` (up to 144px) once per page for the hero or the page statement; `.h1` (up to 104px) for page titles and the centered section statement.
- **Hanken Grotesk** for everything else: a neutral grotesque at 400 and 500. Section titles (`.h2`) are 24px, weight 500, sentence case, sitting left above the content. Product names and buttons are 16px 500. Body is 16px with a 1.5 line height; articles go to 18px with 1.65.
- The contrast between the two is the style: a shout in condensed capitals, then quiet 16px medium for everything you read. Never set body copy, prices or navigation in Anton, and never set a campaign headline in the grotesque.
- Labels above headlines (`.eyebrow`) are 16px 500 in sentence case, not small spaced capitals.
- Prices are 16px 500; the old price is struck through in muted gray and the saving is green.

## Spacing, layout and radius

- Full-bleed: sections run edge to edge up to 1920px, with a fluid 20 to 48px gutter. Photography always goes to the edges of the viewport.
- Section rhythm: a 24px `.h2` title on the left, an optional "Shop all" link and two round arrow buttons on the right, then the content 24px below. Sections are 40 to 72px apart; campaign bands sit flush with no gap.
- Gaps between tiles and cards are tight: 12px on desktop, 8px on phones. Cards get 40px of vertical gap between rows so the text under each tile breathes.
- Radius: every control is a full pill (buttons, chips, search, quantity stepper, arrows). Photographs and product tiles are square-cornered. Fields, thumbnails and size boxes take a small 6 to 8px radius.
- Grids: product grid three columns beside a 240px filter column, four when filters are hidden, two below 1024px. Rails show three cards (four for sport tiles and recommendations), about two on tablets and one and a bit on phones.

## Surfaces and depth

- No shadows on cards, tiles or buttons. Depth comes from photographs and the black member band.
- The only shadow is the added-to-bag popover and the phone menu.
- Photographs get a bottom-up black gradient so white type always reads, and nothing else on top.

## Signature elements

Keep the first three on every page that sells, and at least five on the home page.

1. **The campaign hero.** A full-bleed photograph, a short label, a two-line `.display` headline in condensed capitals centered at the bottom (left-aligned on phones), one plain sentence, and two white pills. The headline lines rise in on load.
2. **Gray product tiles.** Every product sits on the same square `--tile` gray, contained with even padding, followed by a label line (red for "Just in" and "Sale", black for everything else), the name, the category, the color count and the price.
3. **Black and white pills.** One solid black pill for the main action, white pills on photographs, outlined pills for secondary actions and filters. Nothing is square, nothing is a text link pretending to be a button.
4. **Photo tiles with copy on the image.** Two or three square-cornered 4:5 photographs side by side, each with a label, a 24px title and a white pill sitting on the photo's bottom left.
5. **Rails.** Horizontal scroll-snap rows of cards with round gray arrow buttons in the section head, disabled at the ends.
6. **The centered statement.** A giant `.h1` in capitals centered on white, one muted sentence, then a row of plain text links (the "everyday line").
7. **One black block.** The member band and the footer are the only black surfaces in light mode; they close the page.

## Components

- **Utility bar:** 36px, gray, 12px medium links on the right ("Help | Join us | Our story"), a one-line promise on the left. Desktop only.
- **Header:** white, sticky, hides while scrolling down and returns on the way up. The mark and condensed wordmark on the left, five centered links with a 2px underline on hover and on the current page, then a gray search pill, the theme toggle and the bag with its count inside the icon. Below 1024px: the mark, theme, bag and a menu button that opens a right-hand sheet with 24px links, the search and a join prompt.
- **Promo strip:** gray, centered, one short offer at a time with an underlined link, arrows on both sides, rotating every six seconds.
- **Product card:** see signature 2. The whole card is the link; the image zooms 4% on hover.
- **Band:** a full-bleed photograph with a `.display` headline bottom left, a sentence and white pills.
- **Shop:** a 24px title with the live count, "Hide filters" and "Sort by" on the right; a filter column with underlined category links, then checkbox groups separated by hairlines (sport, price, offers); an empty state with "Clear filters".
- **Product page:** thumbnails in a column beside a large gray stage, then the name (28px 500), category, price, color thumbnails, a size grid of bordered boxes (sold-out sizes struck through on gray), a full-width black "Add to bag" pill, an outlined "Favorite" pill, a paragraph, a bullet list and accordions with a rotating chevron.
- **Added popover:** slides down at the top right with the product, the size and two pills ("View bag", "Checkout"), and closes itself after six seconds.
- **Bag:** line items with a 150px gray tile, details, a pill quantity stepper whose minus turns into a trash can at one, and the line price; a free-delivery bar with a green meter; a sticky summary with a promo code disclosure and a full-width black checkout pill.
- **Forms:** labels above 52px fields with an 8px radius and a 1px border that thickens to 2px black on focus; choice pills for multi-select; errors in red below each field, in space that is always reserved; the success state replaces the fields with a gray panel and a green check.
- **Footer:** black, three link columns and a newsletter field, a hairline, then the copyright and legal links.

## Do and don't

- Do let photographs and products bring the color. Don't add a brand accent, gradients on buttons or tinted section backgrounds.
- Do write headlines in normal case in the source and let CSS uppercase them. Don't type capitals.
- Do keep one display headline per screen and keep it short: two to four words. Don't put a sentence in Anton.
- Do keep product tiles one consistent gray with the product contained, never cropped. Don't put products on photos inside the grid.
- Don't round photographs, add card shadows, outline cards, use emoji or icon fonts.
- Don't use red for anything but labels, sale and errors; don't use green for anything but savings and success.

## Voice

Short, direct and physical. Headlines are imperatives or claims of two to four words ("Own every mile", "Earn the dark"). The sentence under them is concrete and calm: what it is, who it is for, one specific detail. Product copy says what changed and why it matters on the run. No exclamation marks, no superlatives you cannot prove, no "revolutionary".
