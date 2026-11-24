# Pictures and images

Pictures are the main content of this style after the words: the food, the rooms and the streets around them. Every picture is framed, captioned and calm, like a photograph in a family album.

## The photographic language

One photographer, one way of looking:

- **Food:** straight down from above on a real table (marble, worn wood, enamel trays), or at a low three-quarter angle with steam or a pour. Daylight from one side, soft shadows, plates partly cut off by the edge of the frame, hands allowed.
- **Rooms:** eye level, the lamps on, a little of the street through the window, the room lived in but not crowded. No wide-angle distortion.
- **Streets and buildings:** early morning or dusk, level horizon, signs and shutters, one or two people seen from behind at most.
- **Color:** warm and natural, slightly faded like good film. Never filters, heavy vignettes or teal-and-orange grading.
- **Never:** text or logos inside pictures, posed smiles at the camera, flash, stock photos of people toasting, rounded corners, drop shadows.

## Frames and captions

- Every picture sits in `.frame` (or `.frame.dbl` for the one feature picture per page), with `.pic` around the `<img>`.
- Every framed picture has a caption: "Above:" under the frame, or "Right:" or "Left:" running vertically beside it in a `.side` figure. Captions name what is in the picture and where ("Kaya toast, soft eggs and a kopi."), in one plain sentence.
- Set the crop with `--r` on the `<img>` (`style="--r:4/3"`) and move the focus with `object-position`.
- The day cards and the darkened pictures behind ink bands are the only unframed pictures; their `alt` is empty because the text on them says what the link does.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Hero | 3:2, shown wider | 2000 x 1333 | `.hero-pic` | A room or a table with dark areas; it is darkened under the quote. Keep the middle quiet. |
| Introduction, tall | 4:5 | 1200 x 1500 | `.st-a` | The kitchen, the stove, a counter. |
| Introduction, small | 4:5 | 1000 x 1250 | `.st-c` | One dish or drink from above. |
| Day card | 5:6 | 1000 x 1200 | `.dcard` | Keep the bottom third simple: the plate covers it. |
| Split, wide | 4:3 | 1600 x 1200 | `.photos .big` | The signature dish. |
| Split, small | 4:5 | 1000 x 1250 | `.photos` | A drink, a grill, a pair of hands. |
| Locations band | 16:9 | 2400 x 1350 | `.band-bg` | A street at dusk; it is darkened. |
| Feature | 5:4 | 1600 x 1280 | `.feature .frame.dbl` | The special, close up. |
| Location card | 4:5 | 1000 x 1250 | `.cafe .frame` | The front of the building or its best corner. |
| Location page | 21:8 | 2400 x 915 | `#/cafe` hero frame | Shot wide; the crop is a strip. |
| Journal | 4:3 | 1200 x 900 | `.post`, `.feature-post` | One subject per story. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Cream, the double-rule frame, the wordmark and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width`, `height` and `decoding="async"`. When you swap in real photos, add `loading="lazy"` to every picture below the first screen and export WebP or AVIF under 300 KB each. Alt text says what is in the picture ("A bowl of laksa with prawns and half an egg, seen from above"), not what it means.

## Generating pictures

When an image tool is available, keep one prompt pattern per role so the set looks like one shoot:

- Dish from above: "Overhead photograph of [dish] on [a marble café table], natural window light from the left, soft shadows, plates partly cut off by the frame, warm faded film colors, no text, no logos, no faces."
- Drink: "Photograph of [drink] being poured, low three-quarter angle, steam visible, [green tiled wall] behind, warm natural light, film grain, no text, no logos."
- Room: "Photograph of a busy-but-calm old café interior with [marble tables, bentwood chairs, ceiling fans, warm lamps], eye level, evening light, no recognizable faces, no text or signage."
- Street: "Photograph of [a row of old shophouses] at dusk, lamps on, level horizon, one person seen from behind, warm faded colors, no readable signs."

Generate at the source size, crop to the slot ratio, and keep one color grade across the set.

## Without an image tool

The template's pictures are flat SVG drawings in the same language: one subject seen from above or straight on, a real-looking surface (marble, wood, tiles), five to eight flat warm colors, no outlines, no gradients, no text. Make new ones the same way, save them as files in `images/`, and reference them with `<img>` like photos so they can be swapped later. Tell the user which pictures are placeholders.

Never hot-link stock photos, and never use pictures, logos or artwork from a real restaurant, photographer or brand unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the name in Brygada 1918 italic 600 over a tiny tracked line of Cabin capitals between two short rules (`.brand-name`, `.brand-sub`). Replace both lines; if the brand has a real logo, put its SVG in `.brand` instead and keep the size.
- The favicon is an ink square with a thin cream inner rule and a simple object of the brand (the sample uses a lamp). Keep it to three shapes.
