# Pictures and images

Pictures in this style are small, friendly and many: dozens of framed thumbnails on one page. They only work if they look like one shoot.

## The picture language

One photographer, one table, one light:

- **Objects (the default):** a flat lay shot straight down on a plain pastel ground (oat, butter, sky, sage, lilac, peach, rose), one main object slightly turned, one small companion (a pencil, a leaf, a biscuit, a spoon), soft daylight from one side, a short soft shadow, plenty of ground around the subject.
- **Places and tableaux:** straight-on at table height, a pale wall and a table edge or pavement line, the subject centered. Shopfronts frontal, kettles and cups in profile.
- **People:** hands at work, shoulders and aprons, faces turned away or out of focus. Real faces only when the user supplies portraits.
- **Color:** soft and warm, never filtered to match the page. Each picture has one pastel ground; neighbouring thumbnails use different grounds so a row reads like a box of crayons.
- **Never:** text, logos or prices inside pictures, collages, heavy vignettes, dramatic shadows, dark moody food photography, stock photos of people at laptops.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Story picture | 1:1 (4:3 on phones) | 1200 x 1200 | `.slide-media` | Subject centered: the same file is cropped square and 4:3. |
| Rail thumbnail | 1:1 | uses the story picture | `.rail` | 40px; the subject must read at that size. |
| Card thumbnail | 283:150 | 1200 x 900 | `.thumb` | Keep the bottom-left corner calm: the stamp sits there. Crops from 4:3 with the subject in the middle half. |
| Ribbon | about 1:1.1 | 800 x 600 | `.ribbon-pics` | Four product shots with four different grounds. |
| Article head | 4:3 | 1600 x 1200 | `.article-head img` | The story's main picture. |
| Product | 4:3 | 1600 x 1200 | `.gallery img`, `.swatch img` | One file per variant, same angle and ground, so swatches compare. |
| Event row | 16:10 | 1200 x 750 | `.erow img` | |
| People | 1:1 | 400 x 400 | `.avatar` | Initials on a tone unless the user supplies portraits. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Wordmark, one line, one product on a pastel ground. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`; pictures below the first screen also get `loading="lazy"`. Alt text says what is in the picture plainly ("A pale blue enamel mug of tea from above"). Pictures that repeat a title link next to them (story pictures, rail buttons, ribbon) are decorative: `alt=""` and `aria-hidden` on the link.

## Generating pictures

When an image tool is available, keep one prompt pattern per role so the set looks like one shoot:

- Object: "Flat lay photograph from directly above of [object] on a plain [butter yellow] paper background, one small [pencil] beside it, soft natural daylight from the left, short soft shadow, lots of empty space, warm gentle colors, no text, no logos, no hands."
- Place: "Photograph of [a small shop front with a striped awning], straight-on at eye level, pale overcast light, soft pastel colors, no people, no readable signage."
- Hands: "Close photograph of hands [mending a sweater] on a wooden table, soft window light, face not visible, warm natural colors, no text."

Generate at the source size, crop to the slot ratio, and export WebP or AVIF under 250 KB each.

## Without an image tool

The template's pictures in `images/` are flat drawings in the same language: a pastel ground, one object drawn with a 4-unit charcoal outline and flat fills, one companion, and a soft offset shadow (the object's outline in charcoal at 12% opacity, shifted 12 units right and 14 down). Make new ones the same way on a 800 x 600 canvas, keep the subject inside the middle 600 x 420 so every crop works, and reference them with `<img>` like photos so they can be swapped later. Tell the user which pictures are placeholders.

Never hot-link stock photos, and never use pictures, logos or artwork from a real brand or maker unless the user supplies them with permission.

## Doodles

Doodles are inline SVG symbols in the sprite (`d-bird`, `d-sun`, `d-sprig`, `d-cup`, `d-needle`, `d-book`): a 2.4-unit `currentColor` line with round caps and flat token fills (`--bird`, `--sun`, `--leaf`, a tone), so they follow the theme. One doodle per block, 52 to 96px; they mark the column, each story, success states and the 404. Draw new ones the same way: one character or object, slightly wobbly, no shading, no faces beyond a dot eye.

## Brand mark and favicon

- The wordmark is live text in Klee One with the `d-sun` doodle, so it can be replaced by typing. If the user has a logo, put it in the same spot at 28 to 32px tall.
- The favicon is the sun doodle on a butter square (`illustrations/mark.svg`).
