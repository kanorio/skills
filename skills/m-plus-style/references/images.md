# Pictures and images

The stripes and the type carry the color; pictures carry the content. Every picture is a calm, square-cornered rectangle that fills its stripe edge to edge.

## The photographic language

One photographer, one way of looking:

- **Objects and installations:** one object or one room per frame, shot straight on at eye level, soft even light, a plain seamless ground (pale warm gray, stone, pale blue or one deep color), and generous empty space around the subject. Like a good catalogue.
- **Events and people:** candid, natural window light, people seen from the side or from behind, hands at work, no posed smiles, no flash.
- **Buildings:** level horizon, frontal or a clean three-quarter view, an overcast or early-morning sky, no wide-angle distortion.
- **Color:** natural and slightly warm. Never tint or filter pictures to match the stripes; the contrast between a quiet picture and a loud stripe is the point.
- **Never:** text or logos inside pictures, collages, drop shadows, rounded corners, frames, duotones, or stock photos of people pointing at screens.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Exhibition card | 4:3 | 1200 x 900 | `.xcard .media` | Keep the bottom-left corner calm: two date plates sit there, and a tag sits top left. |
| Event row | 16:10 | 1200 x 750 | `.erow .media` | Middle stripe; inset by the gutter on desktop, full width on phones. |
| Detail main picture | 4:3 | 1600 x 1200 | `.detail-hero` | Spans two stripes with no gutter; the caption sits in the third stripe. |
| Detail "inside" columns | 4:3 | 1200 x 900 | `.moves .media` | Three pictures shot the same way, one per stripe. |
| Wide picture | 5:2 | 2000 x 800 | about view | The building, a gallery, or a crowd from far away. |
| People | 1:1 | 600 x 600 | people rows | Use initials in an outlined circle unless the user supplies real photos. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | The three stripes, the outlined wordmark and one line of type. Export as PNG for production. |

Every `<img>` has `alt`, `width`, `height` and `decoding="async"`; pictures below the first screen also get `loading="lazy"`. Alt text says what is in the picture, like a label ("A wooden rocking chair on a pale floor"), not what it means.

## Generating pictures

When an image tool is available, keep one prompt pattern per role so the set looks like one shoot:

- Object: "Museum catalogue photograph of [object], centered on a plain [pale warm gray] seamless backdrop, soft even studio light, straight-on at eye level, generous empty space around the object, natural colors, no text, no people, no logos."
- Installation: "Photograph of a quiet museum gallery showing [works], frontal view, soft daylight, white walls, polished concrete floor, no visitors, no text or signage."
- Event: "Candid photograph of [activity] in a bright museum workshop room, natural window light, people seen from the side or behind, faces out of focus, no text, no logos."
- Building: "Architectural photograph of [building] on a waterfront, level horizon, overcast sky, frontal view, no people, no text."

Generate at the source size, crop to the slot ratio, export WebP or AVIF under 300 KB each.

## Without an image tool

The template's pictures are flat SVG drawings in the same language: one object or scene on a plain ground, three to five flat colors, no gradients, no text. Make new ones the same way (simple shapes, a floor line, a soft shadow ellipse), save them as files in `images/`, and reference them with `<img>` like photos so they can be swapped later. Tell the user which pictures are placeholders.

Never hot-link stock photos, and never use pictures, logos or artwork from a real museum, artist or brand unless the user supplies them with permission.

## Brand mark and favicon

- The wordmark is one SVG `<symbol>` with one `<path>` per letter (outer contour and counters together, `fill-rule="evenodd"`). The same paths render filled in the header and as a hairline outline in the hero.
- Draw it on a grid: letters about 300 units wide and 420 tall, 40 units apart, strokes about 86 units thick, counters generous so the outline reads at hero size.
- The favicon is the three stripes in a rounded square with the first letter outlined in white.
