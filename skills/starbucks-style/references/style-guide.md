# Style guide: Starbucks style

The look in one sentence: a white header with uppercase, widely tracked navigation, full-bleed spruce-green bands, half-photograph and half-colour blocks with the copy centred in the colour, pill buttons in outline or solid, and one rounded humanist sans for everything.

## Tokens

Every color is a custom property on `:root` in `assets/template.html`, redefined for the evening theme under `[data-theme="dark"]` and under `prefers-color-scheme: dark` when no theme is pinned. The same values are in `tokens.json`.

| Token | Day (default) | Evening | Use |
|---|---|---|---|
| `--bg` | warm white | evergreen black | the page, the header, form cards |
| `--surface` / `--surface-2` | cream / near-white | two steps up from the page | cream panels in split blocks, the rewards hero, tab boxes, value cards / the menu sub-navigation |
| `--text` / `--text-muted` | green-tinted near-black / grey-green | warm white / sage grey | headlines and body / secondary lines, calories, footer links |
| `--border` | soft grey | dark green-grey | hairlines under headings, list rows, inputs at rest |
| `--green` | spruce | a darker spruce | bands, green panels, the first tier, the current-page tab |
| `--deep` | evergreen | evergreen | product circles, the drink band, the pickup strip, dark panels |
| `--on-green` | white | white | every word on green |
| `--accent` / `--accent-text` | spruce / white | mint / evergreen | solid pills |
| `--link` | spruce | mint | text links, outline pills on light panels, the selected chip ring |
| `--mint` | pale mint | dark mint | selected chips, sizes and amounts, success badges |
| `--gold` / `--gold-ink` | honey gold / bronze | lighter versions | the middle tier / eyebrows and the line icons on cream |
| `--clay` | terracotta | lighter terracotta | the "New" tag and seasonal photography only |
| `--error` / `--focus` | red / spruce | lighter versions | form errors / focus rings |

Green carries the brand. It fills whole bands and panels rather than appearing as small accents, and white text sits on it. Cream is the second surface. Gold and clay are rare: one tier card, the eyebrows, the "New" tag.

## Typography

- **Nunito Sans** (variable, 200 to 1000) for everything. It is a humanist sans with soft, rounded details; there is no second family.
- Display (once per view): 800, letter-spacing -0.02em, line-height 1.08, centred inside a band or panel.
- H1 800; H2 800 at 24 to 32px; H3 800 at 19px. Headings are sentence case and never italic.
- **Navigation is the only uppercase text** besides eyebrows: 14px, weight 800, letter-spacing 0.1em (`.nav a`). Eyebrows (`.eyebrow`) use the same caps in bronze.
- Body 17px at 400, line-height 1.6. Leads inside panels and bands are 17 to 19px at line-height 1.7, centred, never wider than about 34em.
- Buttons and labels are 15px at 800, letter-spacing about -0.005em.
- Copy is short and warm: "Order ahead, skip the line", "Baked before the doors open". One idea per block.

## Spacing, layout and radius

- The header and every band run edge to edge; content inside sits in a 1280px page with 16 to 40px gutters.
- **Split blocks** (`.split`) are two equal columns, 380 to 500px tall, separated from each other by 32px of page colour. Alternate the photo side (`.split.rev`). On phones the photo stacks on top at 4:3 and the panel follows.
- Sections that are not split blocks (steps, tiers, tab boxes, forms) sit in the page width with 56 to 96px above and below, centred headings first.
- Radius: pills and chips are fully round (999px); cards and inputs 12 to 16px; tier cards and form cards 28px; product thumbnails are circles; photographs in split blocks have square corners because they meet the page edge.
- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96px.

## Surfaces and depth

- Mostly flat. Colour, not shadow, separates things: a green panel next to a photo, a cream band between white sections.
- Form cards and gift cards get `--shadow-card`, a soft two-layer drop. The menu sheet gets `--shadow-overlay`.
- The header has a hairline underneath and a soft shadow once the page scrolls.

## Signature elements

Keep at least four of these on the home page.

1. **The split block.** A photograph fills one half; a flat colour fills the other (cream, spruce or evergreen) with an H2, a centred lead and one pill, all centred. Blocks alternate sides down the page.
2. **The spruce band.** A full-bleed strip of green with a centred headline, one line and an outline pill in white. The home page opens with one and the store search sits in another.
3. **Caps navigation with the green tab.** A white header, the wordmark on the left, uppercase tracked links, and a 6px green bar along the header's bottom edge under the current section. On the right: a pin icon with "Find a café", an outline "Sign in" pill and a solid "Join now" pill.
4. **Pill buttons.** Outline (1px currentColor) or solid; on green they turn white. Never square, never a text-only button where a pill fits.
5. **Product circles.** Every drink, pastry and bag on the menu sits in a circle of evergreen, cut out with a soft contact shadow, with the name and calories beside it. The drink page repeats the circle large on the evergreen band.
6. **Membership and store entry points.** Rewards, sign-in and the café finder are always one click away: in the header, in a cream rewards strip on home, and in the closing band.

## Components

- **Header** (`.site-header`): sticky, 96px (68px on phones). When the bar would not fit on one line, `fitNav()` first hides the "Find a café" label (`.tight`) and then swaps the links for the menu button (`.compact`). Never let links wrap.
- **Menu sheet** (`#menu`): a dialog sliding in from the right with large bold links and the two pills.
- **Band** (`.band`, `.band.cream`): centred, padding 40 to 64px. Put at most one pill or one search field in it.
- **Split** (`.split` > `.split-media` + `.panel.p-cream|p-green|p-deep`): add `on-green` to the split when the panel is green or evergreen so pills and eyebrows turn white.
- **Steps** (`.steps`): three centred columns with a 56px bronze line icon, an H3 and one muted sentence.
- **Tier cards** (`.tier.t-sprout|t-grove|t-canopy`): green, gold and near-black, a large top radius, the name and requirement centred, benefits as a checked list.
- **Tab box** (`.tab-box`): cream panel with tabs labelled by a number and a leaf; the selected tab gets a 4px spruce underline; arrow keys move between tabs.
- **Menu** (`.menu-layout`): a light sub-navigation strip, a sticky category list on the left, a dark pickup strip with the café picker, filter chips, then each category as an H2 with a hairline and a two-column list of circles.
- **Drink page**: breadcrumbs, the evergreen band with the large circle and the name, size cards with cup icons, option selects and a shot stepper, the facts table, and a cream order card that prices the choice and asks for the pickup café.
- **Store finder** (`.finder`): list on the left (number badge, name, address and distance, today's closing time, a "Hours and details" disclosure), a drawn map with numbered pins on the right. A card and its pin select each other.
- **Gift cards**: occasion chips, a grid of card designs at the bank-card ratio, a live preview that follows the chosen design, amount and name, and the eGift form.
- **Forms** (`.form-card`): labels above 48px inputs with 12px corners, errors floating under the field (space is reserved, so nothing moves), a solid pill to submit and a success state with a mint badge.
- **Footer**: white, four columns of muted links and the wordmark, legal links under a hairline.

## Do and don't

- Do let colour panels and photos share each block 50/50. Don't put text over photographs.
- Do centre copy inside panels and bands. Don't left-align a lead inside a split panel.
- Do use one rounded sans in heavy weights. Don't add a serif or a script for flavour.
- Do keep the header white (evergreen black in the evening). Don't make it green; the green belongs to the bands.
- Do show products in circles on the menu. Don't use square product tiles or cards with borders there.
- Don't use emoji, festive clip art, or anything that copies a real chain's cups, mascots or logos.

## Voice

Friendly, short and practical, like a barista who remembers your order. Lead with what the guest gets ("Order ahead, skip the line"), then one sentence of detail. Use "we" for the company and "you" for the guest. Numbers are specific (6 cafés, 25 leaves, 5 am). No exclamation marks in headings, no superlatives about the coffee.
