# Pictures and images

This style runs on figures, not photographs. Most of the page is type, tables and drawn interface; pictures appear in three places only: a row of three wide scenes under the statement, the news covers, and the app mockups. Keep it that way.

## The visual language

One illustrator, one palette:

- **Flat night scenes.** Simple geometric illustrations of the place where the data comes from (a radio booth, a shop counter, a stage, a pitch, a server room, a market street), drawn on a near-black blue gradient with yellow as the only strong colour and a little white, grey, green and red. Light comes from lamps, screens and beams, never from a sky.
- **Typographic covers instead of photographs** for news and articles: black panels with the wordmark small at the top, two to four words in white capitals with the key word or figure in yellow, and one yellow shape bleeding off the right edge (record grooves, a disc, stripes).
- **Interface as imagery.** The phone and the desktop window are built in CSS from the same tokens, so they follow the theme and stay sharp.
- **Never:** stock photos of people pointing at screens, coins, rockets, rising arrows on money, real exchange or bank logos, real app store badges, glowing neon, 3D renders, or text baked into a picture.

The template's scenes (`assets/images/booth.svg`, `crates.svg`, `stage.svg`) are original placeholder illustrations in this language. Replace them with scenes from the user's own world; keep the 16:9 crop and the dark palette.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Scenes | 16:9 | 640 x 360 (SVG) or 1280 x 720 | `.scene img` | Three in a row, each linking to a story. The caption sits on a dark gradient, so keep the bottom third calm. |
| News covers | 16:9 | CSS | `.cover` | Text in `<b>` and `<em>`, a shape through `data-tone`. Real photographs can replace a cover: put an `<img>` inside `.cover` with `object-fit: cover` and keep the wordmark. |
| Dots | 1:1 | CSS | `.dot` | First letter on a two-hue gradient circle. Swap for the user's square artwork or avatars when they have them, cropped to a circle at 2x. |
| Phone and desktop | none | CSS | `.phone`, `.desk` | Fill with three to five real rows of the product. |
| Code card | 1:1 | SVG | `#qr` | The template draws decorative modules. Replace with a real QR code for the app or sign-up link, or delete the card. |
| Favicon | 1:1 | 32 x 32 SVG | `illustrations/mark.svg` | The mark on a yellow rounded square. |
| Open Graph | 1200 x 630 | SVG | `illustrations/og.svg` | The wordmark, the counter and the sentence on the dark page. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Scene pictures describe the scene in their alt text, because the caption names the story and not the picture. On a built site, add `decoding="async"` and `loading="lazy"` to pictures below the first screen; the template keeps them eager so full-page preview screenshots render.

## Prompts for an image tool

- Base: "Flat geometric vector illustration, night scene, near-black blue background gradient, signal yellow as the main accent with small touches of white, grey, green and red, warm lamp light, no people's faces, no readable text, no logos, 16:9."
- Add the place: "a small radio studio with a microphone arm, faders and a lit on-air sign", "a record shop with crates under hanging lamps", "a stage with yellow beams over a crowd in silhouette", "a football pitch at night from the stand with floodlights", "a row of server racks with yellow status lights".

## Without an image tool

Draw SVG scenes in the same manner as the template: a 640 x 360 viewBox, a vertical gradient from `#1b2030` to `#121419`, rectangles and rounded rectangles in `#2c3137` and `#1e2227` for furniture, `#f8cf32` for the one lit object, `#ebedef` for highlights and a radial glow behind the light source. Save each file in `assets/images/` and reference it with a full quoted path. List every placeholder in your reply so the user knows which pictures to replace. Never hot-link pictures from other sites or stock libraries.
