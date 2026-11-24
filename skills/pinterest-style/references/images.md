# Pictures and images

Pictures are the whole design. The page around them is white and grey on purpose, so the wall has to look like one collection: different subjects, one light, one grade.

## The photographic language

- **Light:** soft daylight from one side, as from a window on the left. Long, gentle shadows; no flash, no ring lights. Evening scenes are lit by lamps and candles only.
- **Colour:** warm and natural: oak, linen, clay, sage, terracotta, ink blue, mustard. Slightly lifted blacks and a fine grain. One grade across the set; never neon, HDR or heavy filters.
- **Composition:** one subject, close enough to see how it was made. Top-down for food on a table, textiles and flat work; eye level for rooms and shelves; a little space around the subject so a 16px corner never cuts it.
- **Variety of shape:** mix tall (2:3, 3:5), portrait (3:4, 4:5), square and a few landscape (4:3) pictures. The wall depends on uneven heights; a set of identical ratios turns it into a plain grid.
- **People:** hands at work, or no one. Faces only in the user's own pictures, with permission.
- **Never:** text, logos, watermarks or price stickers in pictures; collages made inside one picture; stock smiles.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Wall tile | the picture's own (between 3:5 and 4:3) | 720 wide | `.tile-media img` | Never cropped; `width` and `height` must be the real size, because the script places tiles by their ratio. |
| Close-up | the same file | 720 to 1200 wide | `#d-img` | Shown at its own ratio beside the details. |
| Board cover | 3:2 cover, cropped from the board's first three ideas | the same files | `.cover img` | Pick a first idea whose subject sits in the middle. |
| Collage | any; cropped by the grid | the same files | `.collage img` | Five pictures with different subjects and tones. |
| Category tile | 3:2, cropped, with the name over a dark scrim | the same files | `.cat-tile` | Choose busy pictures without a bright centre so white text reads. |
| Toast thumbnail | square crop | the same file | `.toast img` | |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | White, the wordmark, the headline and a few rounded colour blocks. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. The close-up's alt says what is in the picture ("A round sourdough loaf with one curved score on a wooden board"); wall tiles use `alt=""` because the title link under them names the idea, and the picture link is hidden from assistive technology. Do not add `loading="lazy"` or `decoding="async"` in a single-file delivery (full-page captures skip lazy pictures); on a deployed site, lazy-load tiles below the first screen. Export WebP or AVIF under 150 KB each at 720 wide; the wall shows many at once.

## The sample pictures

`assets/images/*.webp` are 26 rendered stand-ins in this language: shelves, a galley kitchen, herbs at a sink, a reading corner, a bed, a white room, stairs, a desk lamp, a loaf, a tart, buns, tomatoes, soup, a supper table, lemons, vases, a pottery wheel, glaze tests, wool, a quilt, indigo cloth, a balcony, seed trays, dried grasses, a paper lantern and candles. They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply. The file name is the idea's `id`.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject and the ratio:

> Natural home and craft photograph, [subject], soft window light from the left, warm natural colours (oak, linen, clay, sage), slightly lifted blacks, fine film grain, uncluttered background, shot on a 50mm lens, no people's faces, no text, no logos, [ratio] format.

Subjects that suit the style: open shelves with stacked bowls; a narrow kitchen with green cabinets; herbs on a sill above a sink; an armchair by a floor lamp; a loaf with a deep score; a tart from above; a tray of buns; a bowl of tomatoes on a striped towel; candles on a sill at dusk; three handmade vases; glaze test tiles; a basket of wool; a patchwork quilt; indigo cloth on a line; pots of herbs on a balcony. Generate a mix of ratios, then check the set side by side as a wall: same light, same grade.

## Without an image tool

Keep the template's stand-ins, or make new ones the same way: a wall or table, soft light from the left, one subject in warm colours, a little grain, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, idea by idea, in your reply.

Never hotlink stock photos, and never use photographs, logos or artwork from a real photographer, shop or brand unless the user supplies them with permission.

## Wordmark, avatars and favicon

- The wordmark is live text: the brand name in lowercase, 800, letter-spacing -0.05em, in red, after a 32px round mark (`#i-mark`). If the brand has a real logo, put its SVG in `.brand` at the same height and keep the red to the logo.
- People are shown as initials in a coloured circle (`.av[data-u]`, colours in `--av-*`). Use real portraits only when the user supplies them; keep them round.
- The favicon (`illustrations/mark.svg`) is the round red mark with four white rounded bars, two columns of uneven height: a tiny wall. Keep it that simple, and do not use letters.
