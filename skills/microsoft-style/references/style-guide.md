# Style guide: Microsoft style

The look in one sentence: a white header with a thin text menu over a softly tinted hero, one centered greeting, a pill switch, a large ask box with a gradient edge and suggestion chips under it, then a row of big rounded product cards, all in a calm humanist sans with square blue buttons.

## Tokens

Every color is one custom property on `:root` written as `light-dark(<light>, <dark>)` in `assets/template.html`. The page follows the system setting; the toggle pins a theme by setting `data-theme="light"` or `"dark"` on `<html>`, which only changes `color-scheme`. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--surface` | white / white | deep navy / one step lighter | the page / every card, field and plan |
| `--band` / `--grey` | pale blue / light gray | navy bands | alternate section bands / the footer only |
| `--wash`, `--w1`, `--w2`, `--w3` | warm white with lilac, peach and sky | navy with violet, rose and blue glows | the tinted hero and page heads (`.wash`) |
| `--text` / `--text-body` / `--text-muted` | navy ink / softer ink / slate | near white / light gray / gray | headlines / paragraphs / captions, counts, footer links |
| `--border` / `--border-strong` | hairline / gray | dark hairline / mid gray | card edges / fields, topic buttons, option cards |
| `--accent` / `--accent-hover` / `--accent-text` | blue / deeper blue / white | light blue / lighter / navy | every primary button, selected option, focus outline on fields |
| `--link` | blue | light blue | `.more` text links, breadcrumbs, inline links |
| `--navy` / `--navy-text` / `--chip` | dark navy / white / pale blue | light blue / navy / dark blue | the selected segment, chip outlines and text, outline buttons, round arrows, icon squares |
| `--badge` / `--notice` | violet | lighter violet / deep violet | offer badges / the offer bar under the header |
| `--g1` to `--g3` | blue, violet, teal | same | the 4px edge under the ask box only |
| `--success` / `--danger` | green / red | lighter | success panels / field errors |

Tints for drawn products are classes, not tokens: `.t-sage`, `.t-sky`, `.t-sand`, `.t-lilac`, `.t-mint`, `.t-rose` set `--tint`, a soft two-stop gradient in both themes. Device colors are `data-c="sage|graphite|sand|silver"` and set `--dev`, `--dev-2` and `--kb` for the drawings.

Color is quiet. Blue is for pressing, navy for choosing, violet for offers, and the pastel wash and product tints carry the warmth. Never set body text in blue or fill large areas with the accent.

## Typography

- **Open Sans** (variable, 300 to 800) for everything. One family keeps the friendly, even texture; hierarchy comes from size and weight, never from a second face.
- Display: weight 600, 40 to 64px, letter-spacing -0.028em, line-height 1.08, centered. Once per page, on home.
- H1 (page heads) 34 to 52px, H2 (section heads, centered) 28 to 40px, H3 20px, all weight 600 with a slight negative letter-spacing.
- Body 16px at 400, line-height 1.55. Leads 17 to 20px in `--text-body`. Small text 13px for the footer, captions and article topics.
- No uppercase labels, no italics, no monospace. Numbers in prices and tables use tabular figures.

## Spacing, layout and radius

- Page width 1296px with 16 to 48px gutters. Sections are 56 to 96px tall and alternate white, pale blue (`.band`) and the tinted wash; the footer is the only light gray band.
- Section heads are centered: an H2 and an optional lead, then the content. Page heads sit on the wash, left-aligned for shop, contact and legal views, centered for plans, support and about.
- Radius has four steps: 4px for buttons, fields and topic buttons (square, businesslike); 12px for option cards, FAQ rows and thumbnails; 16px for tiles, shop images and tables; 24px for product cards, feature cards, plans and form cards. Pills (`999px`) are only for the segmented switch and chips.
- Spacing steps: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96px.

## Surfaces and depth

- White cards with a hairline and a soft, short shadow (`--shadow-card`) on the white page or the pale blue band. On hover, product and story cards lift 4px to `--shadow-overlay`.
- Product cards in the rail are the one dark surface: a tinted panel with the drawn product at the top and a navy gradient scrim at the bottom that carries white text and a white button.
- The wash is the only gradient background; the ask box edge is the only gradient line.

## Signature elements

Keep at least five on the home page.

1. **Tinted hero with a centered greeting.** `.wash` with three soft radial glows (lilac, peach, sky) over warm white, and a short, friendly display headline in the middle.
2. **Pill segmented switch.** `.seg`: a white pill track with a soft shadow and two or three options; the selected one fills navy. It changes what the page shows (home or business, yearly or monthly, the product tabs).
3. **Ask box with a gradient edge and chips.** `.ask`: a 60px white field with square corners and a 4px blue to violet to teal line along the bottom, a send icon, a one-line hint above it, and pale blue outlined chips (`.chip`) below that run common questions.
4. **Big rounded product cards in a row.** `.rail` of `.pcard`: 24px corners, a drawn product on a pastel tint, a navy scrim with a violet badge, a title, one line and a white button; alternate cards sit 32px lower on desktop; round outline arrows underneath; the next card peeks in from the right edge.
5. **Underlined quick links.** `.quick`: a centered row of underlined navy links under the rail that turns into a two-column grid with line icons on phones.
6. **Square blue buttons and chevron links.** Primary buttons are solid blue rectangles with 4px corners; secondary actions are navy outline buttons or blue `.more` links that end in a drawn chevron.
7. **Offer bar.** One violet bar under the header with a short offer, an underlined link and a close button that remembers the choice.

## Components

- **Header:** white, not sticky, a hairline below. Brand mark and name, five text links that underline on hover and for the current page, then Search, Cart (with a count badge), the theme toggle and Sign in with a round avatar outline. Under 1180px the tool labels hide; under 900px the links move into a left sheet behind the menu button. Never let it wrap.
- **Feature card:** `.feature-card`, text on the left (badge, H2, paragraph, button and a `.more` link) and a tinted art panel on the right.
- **Tiles:** `.tile`, white 16px cards with an app icon or a line icon in a pale blue square (`.sq`), an H3, one sentence and a `.more` link.
- **Story cards:** `.card` with a 16:9 tinted art panel, title, text and a blue button pinned to the bottom.
- **Shop grid:** `.shop-card`, a square tinted image with a corner badge, name, one line, price (`.was` for the old price) and a small blue button; filter chips with `aria-pressed`, a live count and a sort select.
- **Product page:** gallery panel with three thumbnails, a buy column with badge, H1, lead, round color swatches, option cards for configurations and accessories, a total and a full-width button, perks with line icons, a segmented tab list (Overview, Tech specs, Plans) and a spec list.
- **Plans:** two segmented switches (audience and billing), plan cards with a badge on the top edge, a big price, an app icon row, a tick list, a blue button and a `.more` link, then a comparison table and an FAQ.
- **Help center:** the ask box as a live search, chips, a topic list of square buttons with icon squares, article rows as `<details>` with a small topic line above the question, a count, an empty state and a feedback row.
- **Cart:** line items with a tinted thumbnail, a quantity stepper and Remove, and a summary card that also holds the checkout form.
- **Forms:** inside a 24px white card; labels above 44px fields with 4px corners; errors in a reserved line under each field; a success panel replaces the form.
- **Footer:** light gray, five columns of small links with a heading each, then a region select with a globe icon, legal links and the copyright line.

## Do and don't

- Do keep the hero light and centered, with the switch, ask box and chips stacked under the headline. Don't put a photo or a dark panel behind the greeting.
- Do draw products as clean flat illustrations on pastel tints, or use the user's own product photos on the same tints. Don't use stock photos, 3D renders, isometric scenes or device mockups of real brands.
- Do use one violet for offers and badges. Don't use violet for buttons or links.
- Do keep buttons square and chips round. Don't round primary buttons into pills.
- Don't use emoji, gradient text, glassmorphism, neon glows, all-caps labels or bouncy motion.

## Voice

Warm, plain and helpful, like a good shop assistant. Lead with what the person gets ("Your first month is on us"), then the detail. Short sentences, everyday words, numbers with units. Questions in the help center are phrased the way people ask them ("Which plan is right for me?"). No exclamation marks, no em dashes, no hype words, no lorem ipsum.
