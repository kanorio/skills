# Style guide: Discord style

The look in one sentence: a deep blurple night sky full of sparkles, enormous glass frames with huge rounded corners that hold bright media panels, soft 3D toys floating around the content, wide heavy titles, and a word marquee and a cropped giant wordmark as bookends.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`; `tokens.json` has the same values as data. The night sky is the default whatever the system says (`:root`, `color-scheme: dark`); the day sky is `:root[data-theme="light"]`, reached through the toggle and remembered. Change values there, never inline.

| Token | Night (default) | Day | Use |
|---|---|---|---|
| `--sky-0` / `--sky-1` / `--sky-2` | near-navy / indigo / bright blurple | near-white lavender / pale lavender / periwinkle | the page gradient, top to middle |
| `--sky-glow` | violet haze | pink haze | two soft glows on the page background |
| `--sky-art` | `illustrations/sky.svg` (white sparkles) | `illustrations/sky-day.svg` (blurple sparkles) | the tiled sparkle field |
| `--glass` / `--glass-line` | white at 22 to 6 percent / white hairline | white at 92 to 55 percent / blurple hairline | every frame, card, row and panel |
| `--hover` | white at 12 percent | blurple at 8 percent | chips, hovers, quiet tags |
| `--field` | dark ink at 50 percent | white at 85 percent | inputs, selects, the billing switch |
| `--ui` / `--ui-2` / `--ui-text` / `--ui-muted` | dark grey-indigo product card | white product card | the small product cards inside media panels |
| `--text` / `--text-muted` | white / lavender grey | deep indigo / slate indigo | body and leads |
| `--accent` / `--accent-text` | blurple / white | the same | the second button, picked choices, the scrolled header button |
| `--btn` / `--btn-text` | white / near black | deep indigo / white | the main button |
| `--link` | light periwinkle | deep blurple | text links and focus rings |
| `--pink`, `--mint`, `--sun` | candy pink, mint, sunshine | deeper versions | badges and the plan border |
| `--g1` / `--g2` (`.g-pink`, `.g-mint`, `.g-blurple`, `.g-sun`, `.g-sky`) | a dark base and a bright glow | the same in both themes | media panels and date tiles |

Blurple is the brand. White carries the main action on the night sky; blurple carries the second one. Bright colour lives only inside media panels, date tiles, tags and toys; the page itself is always the sky.

## Typography

- **Unbounded** (600 to 900), a wide, round, heavy display face, sets the H1, H2, the wordmark, versions, prices, date numbers and the finale. **Manrope** (500 to 800), a friendly grotesk, sets everything else.
- H1: up to 3.5rem, weight 700, sentence case, slightly tight tracking. H2: up to 2.125rem, 700. H3 is Manrope 800 at 1.25rem.
- The finale line is the only uppercase headline: Unbounded 800, up to 4.25rem, two short sentences ("You reached the end. Better go play."). Uppercase also appears in plan names, kickers and footer column titles, always Unbounded with wide tracking.
- Body is Manrope 500 at 17px, line height 1.6; frame paragraphs are 18px and muted; leads 18 to 21px.
- The wide display face fills lines fast: keep headlines short (three to seven words) and never set body text in it.

## Spacing, layout and radius

- Content width 1240px with a 16 to 48px gutter; the header bar spans 1360px; articles and FAQ sit in 780px.
- Home sections are tall: 72 to 128px between frames. Inner pages open with a centred page head (kicker, H1 limited to 15ch, lead) with a toy on each side.
- Radii are the signature: frames 64px, media panels 44px, plan and form cards 40 to 44px, cards and rows 28 to 30px, product cards 20px, buttons 12 to 16px (never full pills), chips and tags full pills, date tiles 24px.
- On phones frames drop to 40px and media to 28px, copy goes above the media, and toys shrink to 60 percent.

## Surfaces and depth

- The page is the sky: a vertical gradient from near-navy to bright blurple and back, two soft glows, and a tiled field of four-point sparkles, pixel squares and dots. It scrolls with the page (never `fixed`).
- Every container is glass: a diagonal white gradient at low opacity plus a 1px inner hairline. No hard borders.
- Media panels are opaque and saturated: a dark base with a bright radial glow rising from the bottom (`--g1`, `--g2`).
- Real shadows only on floating things: product cards inside media, the hero screen, the menu sheet, toasts and the scrolled header pills.

## Signature elements

The home page uses all seven; every other page keeps at least four (sky, glass frames or cards, toys, wide titles, and the footer wordmark always ship).

1. **The night sky.** Deep blurple gradient with tiled sparkles and a few twinkling four-point stars (`.tw`).
2. **The double frame.** A glass slab with 64px corners holding a 44px media panel on one side and an H2, a paragraph and an arrow link on the other; rows alternate sides (`.frame`, `.frame.flip`). The media holds art (`.media.pad` with an image) or a small product card (`.ui`) such as a playtest card, a leaderboard, patch notes or a platform grid.
3. **Floating toys.** Soft 3D objects (planet, cube, star, gamepad, mushroom, heart, coin, gem, a moth mascot) drift around the hero, peek over the top edge of frames (`.toy.peek`) and flank page heads; the far ones are blurred (`.toy.far`).
4. **Wide heavy titles.** Unbounded at 700 to 800 with short sentence-case lines; the finale in uppercase.
5. **The hero.** Title and lead on the left, a slightly tilted screen with key art on the right, toys around it and a product card overlapping its corner, then two large buttons centred under both columns (white, then blurple).
6. **The word marquee.** A translucent band of huge uppercase words separated by the brand mark, sliding sideways.
7. **Bookends.** The finale line, one button and a row of toys standing on the footer; a blurple footer whose giant lowercase wordmark is cut off by the bottom edge. The header floats: a bar at the top, two white pills (brand and tools) once you scroll.

## Components

- **Header:** transparent over the sky; brand mark and Unbounded wordmark, six links centred, the theme toggle and a small white button. After 40px of scrolling the links hide and the brand and tools become white pills with a blurple button and a menu button. Below 1200px the links live in the `<dialog>` sheet, a sky-coloured card of glass rows.
- **Product card (`.ui`):** dark (night) or white (day) card, 20px corners, a bold head row with a live dot or icon, list rows on a lighter fill with tabular numbers on the right, a seat meter (mint to sun gradient), an avatar stack and a full-width button.
- **Card:** glass, 28px corners, a 16:10 image with 20px corners inset by 12px, tags, a Manrope 800 title whose link covers the card, a muted meta line with small icons.
- **Event row:** glass row, a 78px gradient date tile (month in tracked caps, day in Unbounded), title and meta, then a seat meter and a small button on the right.
- **Patch note:** glass card, the version in Unbounded on the left, game tag, title and rows of New, Fixed and Balance tags.
- **Plans:** three glass cards; the recommended one has a pink to blurple to mint gradient border, a gradient badge on its top edge and a blurple button. Plan names are uppercase Unbounded.
- **Forms:** 52px fields with 14px corners on `--field`, a thick periwinkle ring on focus, errors in reserved space under each field, pill checkboxes for choices, and a success panel with the mascot that repeats the visitor's name and email.
- **Footer:** blurple band, mark and a short line, three round icon links, four link columns, the legal line, the giant wordmark.

## Do and don't

- Do keep the whole page on the sky and put colour in media panels, tiles and toys. Don't add white or grey sections.
- Do use huge corners on frames and media. Don't use square corners or full-pill buttons.
- Do alternate frame sides down the page. Don't stack two frames with the media on the same side.
- Do keep toys at the edges of text, peeking over frames or flanking page heads. Don't let a toy cover a word.
- Do use real product cards inside media (events, scores, notes) for whatever the site is about. Don't build a fake chat client or message thread.
- Don't use emoji, icon fonts, stock photos as decoration, or anyone else's mascot or logo.

## Voice

Friendly, playful and short, like a good host. Speak to "you" and "friends"; promise a feeling plus a plain fact ("Games you can finish in one evening"). Jokes are welcome in small doses ("Burgers float; so do the orders"). No hype words, no exclamation marks outside the finale, no em dashes, no invented player counts, ratings or press quotes.
