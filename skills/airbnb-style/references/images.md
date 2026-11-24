# Pictures and images

This style is photo first: the picture is what a visitor clicks. Pictures fill rounded frames edge to edge, with no borders, frames or text on top except a small white badge and the heart.

## The photographic language

One photographer, one way of looking:

- **Places:** shot in daylight or at the blue hour with the lights on, eye level, a slightly wide but straight lens (no fisheye, no tilted horizons). Show the whole building in its landscape first, then the rooms.
- **Rooms:** bright and tidy, beds made, windows uncovered so the view shows, warm practical light. One room per photo, shot from a corner or a doorway.
- **Experiences:** the activity up close in natural light: hands, food, tools, water. Faces turned away or out of focus unless the user supplies photos of real people with permission.
- **Color:** natural and a little warm. No heavy filters, no black-and-white, no duotones.
- **Never:** text or logos inside photos, collages, stock photos of people pointing at laptops, or photos of a real place passed off as the user's.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Place card (2 or 3 per place) | 20:19 | 1200 x 1140 | `.card .slides img` | The first photo is the outside or the best view. Keep the top left and top right calm for the badge and heart. |
| Experience card | 4:5 | 960 x 1200 | `.card.tall .card-media img` | The activity, not the host's portrait. |
| Listing mosaic | 1 large + 4 small | 1600 x 1200 and 800 x 600 | `.mosaic` | The large one matches the card's first photo. The four small ones are rooms and details. |
| Where you'll sleep | 4:3 | 800 x 600 | `.sleep img` | One per bedroom. |
| Host band and estimate | 16:10 and 1:1 | 1600 x 1000 | `.host-band img`, `.estimate img` | A lived-in room or the outside of a place. |
| Journal | 3:2 and 16:9 | 1600 x 1067 | `.post-card img`, `.article > img` | Landscapes and walks. |
| Map | 3:4 | 900 x 1200 | `.map-pane img`, `.map-box img` | A simple drawn map; price pins are placed in percent. |
| People | none | none | `.av` | Initials in colored circles unless the user supplies real photos. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | White ground, the mark, one headline and a drawn search bar. Export PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Use `loading="lazy"` only for pictures far below the first screen or inside dialogs, so screenshots and the first scroll are never blank. Alt text says what is in the picture ("A white cottage on a green cliff above the sea").

## Generating pictures

When an image tool is available, keep one prompt pattern per role so the set looks like one shoot:

- Place: "Real estate photograph of [a small timber A-frame cabin] in [a pine valley] at blue hour, warm lights on inside, eye level, straight verticals, natural colors, no people, no text."
- Room: "Interior photograph of [a bedroom with linen bedding and a wooden wall], bright daylight from a large window with a view of [trees], tidy, shot from the doorway, natural colors, no people, no text."
- Experience: "Close photograph of [hands shaping bread dough on a floured wooden table], soft window light, shallow depth of field, warm natural colors, faces not visible, no text."
- Landscape: "Landscape photograph of [a river path through pine woods] in early morning mist, level horizon, natural colors, no people, no text."

Generate at the source size, crop to the slot ratio, export WebP or AVIF under 300 KB each.

## Without an image tool

The template's pictures are flat illustrations in the same spirit: one place or scene, soft gradients for sky and light, warm glowing windows, three to six colors each, no text. Make new ones the same way as SVG files in `images/` and reference them with `<img>` like photos so they can be swapped later. Tell the user which pictures are placeholders.

Never hot-link stock photos, and never use photos of a real listing, hotel or person unless the user supplies them with permission.

## Brand mark and favicon

- The mark is a single-stroke SVG `<symbol>` (`#mark`) drawn with a 2.4 stroke and round caps, colored by `currentColor`, so the header can tint it coral. Replace it with the user's own mark; a simple line glyph works best at 32px.
- The favicon is the mark in white on a coral rounded square.
