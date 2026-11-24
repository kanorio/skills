# Pictures and images

Pictures are few and small. The desk shows one; a folder shows one square per item; a file shows one or two, never wider than 240px. Small pictures on a large empty page feel like prints left on a table, and that is the effect to keep.

## The picture language

- **Covers and artwork:** square, flat and graphic: one idea per picture (a horizon, a pane of glass, a row of dots), a few solid colours, no type unless the real artwork has it. They carry most of the colour on the site.
- **Things for sale:** one object, centred and front-on, on a pale neutral ground (the same ground for every item), with a soft contact shadow and generous space around it.
- **Photographs inside notes and about:** black and white, a little grainy, ordinary places rather than portraits: a hall, a window, a road, a desk with equipment. Light comes from one side. People, when they appear, are small or turned away.
- **Set together:** every square in a folder uses the same crop and the same amount of space around the subject, so the grid reads as one shelf.
- **Never:** full-bleed photographs, hero banners, background images, collages, rounded corners, frames, CSS shadows or colour overlays, stock pictures of people smiling at the camera.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Desk picture | 1:1 | 600 x 600 | `.it img` (shown at 88px) | The newest thing only. |
| Folder squares | 1:1 | 600 x 600 | `.grid img` (132px, 120px on phones, 40px in the list) | Covers, product shots, project stills. |
| File cover or product | 1:1 | 800 x 800 | `.cover` (200px) | The record and item views take it from the folder tile. |
| Picture in a note or about | 4:3 | 800 x 600 | `.pic` (240px, indented) | Black and white. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | White, a few folders and the name. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Folder pictures describe the picture itself ("Cover of low tide almanac: an orange sun half under a dark blue sea"), because the file view reuses that alt; the desk picture uses `alt=""` because its label names it. Do not add `loading="lazy"` or `decoding="async"` in a single-file delivery; on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 200 KB each; the slots are small.

Pictures that JavaScript places (note pictures in `NOTES`) are written as full quoted paths (`img: "images/photo-road.svg"`), never assembled from a variable, so `scripts/inline.mjs` can embed them.

## The sample pictures

`assets/images/*.svg` are original flat drawings: eight square covers (`cover-*.svg`), six store items on a pale ground (`shop-*.svg`) and four grey "photographs" (`photo-*.svg`: a hall, a road, a window, a studio). `assets/illustrations/` holds the favicon (a pixel folder) and the Open Graph image. They are free to use but they are placeholders: replace them with the user's own artwork and photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available and the user has no pictures yet, keep one base prompt per role and change only the subject.

> Covers: Flat graphic square artwork of [subject], two or three solid colours, simple geometric shapes, lots of empty space, slight paper grain, no text, no people, no logos.

> Store items: Studio product photograph of [object], centred, front-on, on a seamless pale grey background, soft even light, gentle contact shadow, no props, no text added, no logos of real brands.

> Photographs: Black and white photograph of [an ordinary place], natural light from one side, quiet, slightly grainy, no people facing the camera, no text.

Generate at the source size, look at the set side by side, and regenerate any picture whose framing or ground does not match the others. Never generate the user's actual artwork, products or face; those must come from the user.

## Without an image tool

Keep the sample drawings, or draw new ones the same way: an SVG with a few flat shapes, saved in `images/` and referenced with `<img>` so it can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use artwork, photographs or likenesses of a real artist unless the user supplies them with permission.

## Icons, wordmark and favicon

- Folder and document icons are the two `<symbol>`s in the template (`#i-folder`, `#i-doc`), drawn on a pixel grid with `crispEdges`. Colour them with the `.fd-*` classes, show them only at whole-number scales, and never replace them with emoji, icon fonts or detailed illustrations.
- The back and forward arrows, the select chevron and the theme toggle are pixel `<symbol>`s too (`#i-back`, `#i-go`, `#i-down`, `#i-theme`), shown at 2x.
- The wordmark is live text: the name in lowercase, 13px, weight 500. If the user has a real logo, put its SVG in `.mark` at about 14px tall.
- The favicon (`illustrations/mark.svg`) is an ink folder on white, drawn on the same grid.
