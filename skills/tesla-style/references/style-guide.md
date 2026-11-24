# Style guide

The look in one sentence: one product per screen, filling it edge to edge, a short name in medium-weight type above it and two flat buttons below, with an interface so quiet that the picture and the numbers do all the work.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Both themes are complete; light is the default and follows the system setting.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | white | blue-black | the page, the header when solid, the mega panel |
| `--surface` | ash gray | a step lighter | fields, the configurator stage, inventory cards, bands, segmented controls |
| `--surface-2` (`surface2`) | light gray | two steps lighter | secondary buttons, tags |
| `--text` | carbon | off-white | headings, prices, chosen values |
| `--text-2` (`text2`) | graphite | light gray | body copy |
| `--text-muted` (`textMuted`) | pewter, 6.5:1 on white | mid gray | labels, notes, sub-links |
| `--border` / `--border-strong` | hairline / darker gray | the same roles | dividers, choice outlines / hover outlines |
| `--accent` / `--accent-text` | electric blue / white | the same | the main action only; white on blue passes 5.3:1 |
| `--ink` / `--ink-text` | carbon / white | off-white / blue-black | the chosen trim, chip or option outline |
| `--glass` / `--glass-text` | frosted white at 72 percent / carbon | the same | the second button over pictures and the carousel arrows |
| `--on-dark` / `--on-light` | white / carbon | the same | text over a picture, chosen by the picture's `data-tone` |
| `--scrim` | carbon at 42 percent with a blur | the same | behind the mega panel and the mobile menu |
| `--error` / `--ok` | brick / green | lighter tints | form messages and the success tick only |

There is no other colour in the interface. Pictures carry the colour; the UI stays white, gray and carbon with one blue.

## Typography

- One family: **Montserrat**, variable weight, a geometric sans with even, engineered proportions. Two weights only: 400 for text and 500 for names, headings, buttons and navigation. Nothing bolder except the 600 wordmark.
- Display (product names over pictures): 28 to 40px, 500, line-height 1.2, normal letter-spacing. Restraint is the point; never larger than 40px.
- H1 on text pages 26 to 34px; H2 22 to 28px; H3 and product names 17px.
- Body 15px, line-height 1.55. Small text 13px; buttons and navigation 14px.
- Numbers lead: a headline number is 24px at 500 with a 13px label under it ("610 km" over "Range").
- Sentence case everywhere. No uppercase except the spaced wordmark (letter-spacing 0.42em). No italics, no underlines except sub-links.

## Layout, spacing and radius

- Full-screen panels (`min-block-size: 100svh`) for every product moment: the name and one line at the top, the product in the middle on its ground line, the facts and buttons at the bottom. One message per screen.
- Text pages use a 1280px container (720px for reading) with gutters from 16 to 48px. Split sections are two halves: a full-bleed picture and a text column with generous padding.
- Two-column tools: the configurator, the test-drive page and the finder put the picture or map on the left (sticky on desktop) and a 420 to 560px column of choices on the right. On phones the picture goes on top.
- Spacing scale 4, 8, 12, 16, 24, 32, 48, 64, 96. Sections are 64 to 112px apart.
- Radius: 4px for buttons, fields, chips, choices and segmented controls; 12px for picture cards (lineup, tiles) and inventory cards; 0 for full-bleed pictures; round only for colour swatches and carousel dots.

## Surfaces and depth

- No shadows and no gradients anywhere in the interface. Layering is done with flat colour (the solid header, the ash surface), the frosted glass of the second button, and the blurred scrim behind panels.
- The header is clear over a picture and solid `--bg` everywhere else, including when the mega panel is open. No border, no shadow, no line under it.
- Choices are outlined with a 1px inset line and the chosen one gets a 2px ink line. Swatches get a blue ring when chosen.

## Signature elements

Keep the first three on every site; the home page shows all five.

1. **The full-screen product panel.** Picture edge to edge, product name and one factual line centered at the top, two buttons of equal width (200px) side by side at the bottom: the blue main action and a frosted second action. On phones the buttons stack full width.
2. **The clear header that takes the picture's tone.** A spaced-capitals wordmark on the left, five plain text links in the middle, a quiet action and the theme button on the right. Over a picture it has no background and its text turns white or carbon to match the picture's `data-tone`; anywhere else it is solid. The vehicles item opens a flat full-width panel of product drawings with "Learn" and "Order" sub-links.
3. **One blue, numbers first.** The blue appears only on the main action of each screen. Facts are given as large numbers with small labels, never as adjectives.
4. **The configurator.** A large product drawing on an ash stage that repaints as you choose, and a column of choices: trims as outlined cards with price and three facts, paint, wheels and interior as round swatches with the chosen name and price under them, add-ons as toggles, then cash or finance and a summary that adds up line by line.
5. **The lineup rail and tiles.** Rounded picture cards with a white name in the top left and small buttons in the bottom left, scrolling sideways with snap.

## Components

- **Buttons:** 40px tall, 200px wide in panels, 4px corners, 14px at 500. Blue main, frosted glass second over pictures, light gray second on the page. Small buttons are 32px tall. Hover only darkens the fill; nothing moves or grows.
- **Sub-links:** muted 14px text with a thin underline that darkens on hover ("Learn", "Order", "Book a demo drive").
- **Segmented control:** an ash track with 3px-cornered segments; the chosen one turns white (`--bg`). Used for trims, filters, payment and topics. It scrolls sideways on narrow screens instead of wrapping.
- **Headline numbers:** `.stats` of `.stat` blocks, number over label, centered in panels and left-aligned in splits.
- **Fields:** ash-filled, borderless, 44px tall, 4px corners, a 2px blue inset line on focus. Labels sit above in 13px at 500. Errors appear under the field in reserved space, so nothing moves.
- **Chips:** outlined 40px boxes for days and times; the chosen one fills with ink.
- **Inventory card:** ash card, a tag, the name and a muted line, the price at the right with the monthly estimate under it, the drawing, three numbers, and two small buttons.
- **Location list and map:** rows with a tag, a name, an address and hours, separated by hairlines; the chosen row turns ash and its pin turns blue and grows.
- **FAQ:** rows separated by hairlines with a chevron that turns; no boxes.
- **Footer:** one centered row of 12px muted links on the page background. Nothing else.

## Do and don't

- Do give each product its own screen. Don't put two products or more than two buttons on one screen.
- Do keep the blue for the step that moves the visitor forward. Don't color links, icons or headings blue.
- Do state facts as numbers with units and keep the line under a product name to one sentence. Don't stack adjectives or claims.
- Don't add shadows, gradients, outlines on cards, rounded pills, bold weights, uppercase labels or hover motion. Don't put text in pictures.

## Voice

Calm, exact and short, like a specification read aloud. Names are one word; the line under them is one fact or one benefit ("610 km of range. From $46,900."). Prefer numbers to adjectives, verbs to slogans, and say what happens next ("An advisor calls within one working day"). No exclamation marks, no em dashes, no "revolutionary", "game-changing" or "the future of", and no lorem ipsum.
