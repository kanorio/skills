# Drawings and images

This style draws first. Every tile, panel and empty state in the template is an inline SVG drawing in one marker line on a flat color. Photos are allowed when the user supplies them, and then they follow the rules at the end of this file.

## The drawing language

- **Line:** one marker weight, round caps and joins. In the sprite the width is `var(--dw, 3.2)` in a 200 by 200 viewBox, so it renders about 3px in a tile. Big panels set `--dw` lower (1.7 to 2.4) on the host element so the line stays near 4 to 5px on screen.
- **Color:** lines use `currentColor`, so they turn from ink to paper in dark mode. Fills come only from tokens: `var(--panel-*)` for food and objects, `var(--bg)` for paper parts (labels, lids, plates), `var(--glass)` for glass. Never hard-code a color in a drawing.
- **Subject:** one object per drawing, drawn like a confident doodle: slightly wobbly outlines, a few texture marks (dots on a pickle, grill lines on toast, tally marks on a crock), and at most one small companion object beside it (a garlic bulb, a chili, a dill sprig).
- **No:** gradients, hatching inside objects, shading, outlines in a second color, text or numbers inside drawings, faces with features, and anything that looks like a real product or logo.
- **Scribbles** are a separate kit: `#s-under` (wavy underline), `#s-ring` (hand-drawn ring), `#s-arrow` (curved arrow), `#s-burst` (scalloped sticker), `#s-star` (four-point star). They sit over the layout, not inside drawings.

## Slots and ratios

| Role | Slot | Ratio or size | Notes |
|---|---|---|---|
| Home poster | `.poster-art` | right half of the poster, about 1:1 | The hero product, biggest drawing on the site. One sticker and one note beside it. |
| Bento tile | `.tile-media` | fills the tile (wide 2:1 to tall 3:4) | The drawing is absolutely centered at 82% and scales to fit. |
| Product tile | `.product-tile .tile-media` | 4:5 | One product per tile, same drawing style for every product. |
| Product page | `.product-art` | left half, 1:1 to 4:5 | Same drawing as the tile, bigger, with a sticker and a note. |
| Article | `.post-art` | full width, about 3:1 | The finished dish or the subject, with two notes and arrows. |
| Basket line | `.line-art` | 76px square | The product's tile drawing at thumbnail size. |
| People | team tiles | tile | Bust doodles without facial features; vary hair, glasses, cap, scarf. |
| Favicon and Open Graph | `assets/illustrations/` | 40px mark; 1200 by 630 | See below. |

## Making a new drawing

1. Pick the object and its one companion. Sketch it in eight to fifteen strokes.
2. Add a `<symbol id="d-name" viewBox="0 0 200 200">` to the sprite. Put all strokes in one `<g>` with the inline style copied from an existing symbol (`fill:none;stroke:currentColor;stroke-width:var(--dw,3.2);…`).
3. Draw back to front: glass or body, contents, the paper label, the lid, then the companion. Give filled shapes `style="fill:var(--panel-…)"` or `var(--bg)`.
4. Reuse the shared parts when they fit: `#p-jar` (tall jar), `#p-squat` (swing-top jar), `#p-bottle` (sauce bottle), `#p-label` (paper label).
5. Use it with `<svg viewBox="0 0 200 200" role="img" aria-label="…"><use href="#d-name"/></svg>`, or `aria-hidden="true"` when the tile title already says what it is.
6. Check it on every panel color it will sit on, in light and dark, and at 76px for basket thumbnails.

An image-generation tool can help sketch a subject: ask for "a simple black marker doodle of <object> on a plain white background, one line weight, round line ends, no shading, no text", then trace it into a few SVG strokes so it follows the theme. A raster drawing cannot change color with the theme.

## When the user supplies photos

Use one photographic language across the site:

- Bright, direct flash or hard window light; objects shot from slightly above on a flat colored backdrop that matches a panel color; a little grain is fine; no moody low-key shots, no stock lifestyle scenes.
- Crop to the slot's ratio and put the photo inside the tile's media area, under the same 1.5px border and caption strip. Keep doodle annotations (a ring, an arrow, a sticker) over at most one photo per screen.
- Every image has `alt`, `width` and `height`, plus `loading="lazy"` and `decoding="async"` below the first screen. Prefer WebP or AVIF.
- With no photos and no drawing tool, keep the template's drawings or use a type tile with one phrase. Never hot-link stock photos or other sites' images.

## Favicon and Open Graph

- The favicon (`assets/illustrations/mark.svg`) is the brand mark: a solid ink jar with a paper wave. Replace it with the user's mark in the same solid, one-color way.
- The Open Graph image (`assets/illustrations/og.svg`, 1200 by 630) is a grid-paper sheet, a framed green panel, the headline in the display face, the hero drawing and the sticker. Export it as PNG for production; social networks do not render SVG, and the fonts must be outlined or embedded.
