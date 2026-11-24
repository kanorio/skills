# Pictures and images

The page is black and white; the pictures bring all the color. They should look like one art department made them for this issue.

## The visual language

One art director, one way of working:

- **Editorial illustration and photo-illustration.** A single idea per picture, built from bold flat shapes or cut-out black-and-white photographs, placed on one saturated color field (cobalt, tomato, acid lime, hot pink, teal, orange, violet, yellow).
- **Texture:** a coarse halftone dot screen on one or two areas (water, sky, a shadow), never over the whole frame.
- **Composition:** the subject in the middle third, so the same picture survives a 3:2 card, a 1:1 thumbnail and a 16:9 hero. Leave the edges simple.
- **Photography, when the user has it:** documentary, natural light, people at work, places at eye level. Keep it in color; the page around it is already monochrome.
- **Never:** text or logos inside pictures, stock photos of handshakes or people pointing at screens, drop shadows, rounded corners, frames, filters that tint every picture the same color.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Lead story | 3:2 | 1600 x 1067 | `.lead .media` | The strongest picture on the page. |
| Article hero | 16:9 | 2400 x 1350 | `.story-hero` | Full container width; crop from the same picture as the lead if they match. |
| Cards and section pages | 3:2 | 1200 x 800 | `.card .media`, `.sec-top .media`, `.desk .media` | Same art direction as the lead. |
| Thumbnails | 1:1 | 600 x 600 | `.pick .media`, `.note .media`, `.row .media` | Cropped from the 3:2 source; keep the subject centered. |
| Feature | 4:3 | 1600 x 1200 | `.feature .media` | The long read; can be quieter and more atmospheric. |
| Inline figure | 3:2 | 1360 x 907 | `.figure` | Inside the 680px text column, with a caption and credit. |
| People | none | none | `.initials` | An ink tile with initials. Use real portraits only when the user supplies them. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | The wordmark large on white, the brand mark bar, one monospace line. Export as PNG for production. |

Every `<img>` has `alt`, `width`, `height` and `decoding="async"`; pictures below the first screen also get `loading="lazy"`. Thumbnails that repeat a headline next to them are decorative (`alt=""`, link `aria-hidden` with `tabindex="-1"`), because the headline link already says where it goes. The lead, feature, hero and inline figures get real alt text that says what is in the picture.

Captions are a short italic serif sentence; credits are monospace capitals on the right ("Illustration: Name", "Photograph: Name").

## Generating pictures

When an image tool is available, keep one prompt pattern so the set looks like one issue:

- Illustration: "Flat editorial illustration of [subject], bold simple shapes in black and white on a solid [cobalt blue] background, coarse halftone dot texture on [the water], centered composition, no text, no logos, no gradients."
- Photo-illustration: "Editorial photo-illustration: a cut-out black-and-white photograph of [subject] placed on a flat [tomato red] background, one bold geometric shape behind it, halftone print texture, centered, no text."
- Documentary photo: "Documentary photograph of [people doing something] in [place], natural light, eye level, candid, color, no text or signage in focus."

Generate at the source size, crop to the slot ratio, and export WebP or AVIF under 250 KB each.

## Without an image tool

The template's pictures are flat SVG illustrations in this language: one color field, black and white shapes, a halftone dot pattern, nothing smaller than the thumbnail can show. Make new ones the same way and save them as files in `images/`, referenced with `<img>` like photos so they can be swapped later. Tell the user which pictures are placeholders.

Never hot-link stock photos, and never use pictures, logos or artwork from a real publication, artist or brand unless the user supplies them with permission.

## Brand mark and wordmark

- The wordmark is live text in the display face at weight 800 with 0.08em tracking, in capitals. Replace the name in the header, the menu and the footer.
- The brand mark is a small square inline SVG: an ink square, one bar in `--mark-line` and one cut-out line. Redraw it for the brand (a letter, a symbol) at the same size, and keep it simple enough to work as the favicon.
