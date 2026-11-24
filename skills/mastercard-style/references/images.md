# Pictures and images

This style is people first: warm, candid photographs of real moments, cropped into circles, stadiums, arches and tall rounded cards, with a thin orange ring beside them. A photo is never a hard-cornered rectangle and never carries text.

## The photographic language

One photographer, one way of looking:

- **People:** one or two people doing something ordinary (reading a letter, talking across a table, holding a phone, serving at a stall), mid-moment, often smiling, never posing at the camera. Waist-up or closer, so faces survive a circle crop. Leave space around the head.
- **Places:** neighborhoods, markets, rooms with daylight, a hall set up for a talk. Eye level, natural perspective.
- **Light and color:** warm and natural; golden indoor light with soft bokeh, daylight by a window, evening light outdoors. Slightly warm white balance, no heavy filters, no black and white.
- **Variety:** mix ages, backgrounds and settings across one page; at least one close detail (hands, a notebook) for rhythm.
- **Never:** stock photos of handshakes, piles of coins, cards or calculators as the subject, people pointing at laptops, text or logos inside photos, collages.

## Slots and crops

| Role | Crop | Source size | Where | Notes |
|---|---|---|---|---|
| Hero and page heads | circle | 1200 x 1200 | `.hero-media .port` | The subject's face in the upper middle; keep the lower right calm for the arrow button and the upper left for the `.tag`. |
| Carousel | stadium (16:9), circle on phones | 1600 x 900 | `.slide img` | The bottom fifth holds the two labels; keep it simple. |
| Service tiles | circle or tall (3:4, 48px radius) | 1200 x 1200 or 900 x 1200 | `.tile .port`, `.port.tall` | Alternate shapes down the field. |
| Lanes | stadium (5:3) | 1500 x 900 | `.lane .port` | Subject centered; edges are cut by the round ends. |
| Quote and figures | circle | 1000 x 1000 | `.quote .port`, `.figure .port` | The person quoted, with permission. |
| Post cards | arch (4:5) or circle | 960 x 1200 | `.post .port` | |
| Article hero | stadium (2:1) | 2000 x 1000 | `.article-hero` | |
| People | none | none | `.avatar` | Initials in tinted circles unless the user supplies real portraits with permission. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Cream ground, a white stage, the headline, one circle photo with its ring. Export PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Do not use `loading="lazy"` above the fold or in anything a screenshot needs; below the fold, lazy loading is fine in a real deployment. Alt text says what is in the picture ("Two people talk across a table covered in papers").

## Generating pictures

When an image tool is available, keep one prompt pattern so the set looks like one shoot:

- Person: "Candid photograph of [a woman in her sixties in a teal cardigan holding a mug], smiling, warm indoor light, soft background bokeh, waist up, centered with space above the head, natural colors, no text."
- Pair: "Candid photograph of [two people talking across a wooden table with papers], daylight from a window, eye level, natural warm colors, no text."
- Place: "Photograph of [a fruit stall with a striped awning at a morning market], eye level, warm natural light, a vendor behind the counter, no text or logos."
- Detail: "Top-down photograph of [hands writing in a notebook beside a calculator and a coffee] on a wooden desk, soft daylight, no text."

Generate at the source size, crop to the slot, export WebP or AVIF under 300 KB each.

## Without an image tool

The template's pictures are flat illustrations in the same spirit: warm backgrounds, soft bokeh or window light, simple figures with closed smiling eyes, five to eight colors each, no text. Make new ones the same way as SVG files in `images/`, add each to the `IMAGES` map with its full path, and reference them with `<img>` like photos so they can be swapped later. Tell the user which pictures are placeholders.

Never hot-link stock photos, and never use photos of real people unless the user supplies them with permission.

## Brand mark and favicon

- The sample mark (`#mark` in the sprite) is one orange dot inside a single tilted ellipse, drawn with `currentColor` so it turns cream on the ink band. Replace it with the user's own mark.
- Do not draw two overlapping or interlocking circles, side-by-side colored discs, or anything close to that composition, as a mark or as decoration.
- The favicon is the mark on a cream circle (`assets/illustrations/mark.svg`).
