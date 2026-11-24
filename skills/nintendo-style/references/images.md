# Images

The interface is white, grey and one red, so the pictures bring every other color. They should look like bright key art for a family game: flat, saturated, round and cheerful, each one a single clear scene you can read at thumbnail size.

## The image language

- **Flat color, rounded shapes.** Skies, hills and water as solid fills with soft curves; characters and objects built from circles and rounded rectangles. One darker tone of a color is enough for shading. No outlines, no textures, no photo-real lighting.
- **One scene, one subject.** A fish with a lantern, a tower of blocks, a snail with a kite. The subject sits in the middle third, so the same picture works cropped to 21:9 (spotlight), 16:9 (cards) and 1:1 (game cards).
- **Saturated and warm.** Each title owns one sky color (night blue, mint, sunflower, lilac, peach) and repeats it everywhere it appears. Reds in the art are warm coral, so they do not fight the interface red.
- **Friendly faces only when they are characters.** Two dark oval eyes, round blush and a small smile, or nothing. Never draw real game characters, mascots or anything that looks like them.
- **No text inside pictures.** Titles, dates and prices stay in HTML.

## Slots and ratios

| Role | Ratio | Template files | Notes |
|---|---|---|---|
| Spotlight | 21:9 desktop, 4:3 phones (cropped by `object-fit: cover`) | `lantern-lake.svg`, `tumble-tower.svg`, `gardenbots.svg`, `showcase.svg` | Keep the subject in the middle; the edges get cut. |
| Key art for a title | 16:9 source, shown 16:9 and 1:1 | one per title in `images/` | The same file feeds feature cards, news cards and game cards. |
| Screenshots | 16:9 | `lantern-lake.svg`, `lantern-cave.svg`, `lantern-village.svg` | The gallery on the title page; real screenshots replace them. |
| Studio or place | 16:9 | `studio.svg`, `showcase.svg` | About page and event news. |
| Product | 16:9 on a plain paper backdrop | `comet-plush.svg` | Toys are shot on one warm backdrop with a soft floor shadow, like a catalogue. |
| Favicon and Open Graph | 64px and 1200 by 630 | `illustrations/mark.svg`, `illustrations/og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt` (empty when a card title already says it), `width` and `height`. Below the first screen add `loading="lazy"`. Thumbnails reuse the slide or screenshot files instead of new crops.

## With an image tool

Ask for: "flat vector key art for a cheerful family video game, [subject] in the center, bright saturated [sky color] background with soft rounded hills, simple round shapes, no outlines, no text, no logos, no existing characters, 16:9". For toys: "studio product photo of [toy] on a warm cream paper backdrop, soft shadow, centered, 16:9". Generate at 1600 by 900 and check that the subject still reads when cropped square.

## Without an image tool

Draw the art as SVG, like the template does: a `<rect>` sky, one or two hill `<path>`s with quadratic curves, a sun or moon `<circle>`, cloud groups made of three circles and a rounded rectangle, and the subject from circles, ellipses and rounded rectangles with `rx`. Keep each file under about 4 KB and the palette to five or six colors. The template's art files are examples to copy and recolor.

## Photos

When the user supplies real screenshots, product photos or event photos:

- Crop to the slot ratios above and keep the subject centered.
- Keep the rounded frames; do not add filters, borders or shadows to photos.
- Use their own screenshots, never ones from other games or stores, and never hot-link images from other sites.
