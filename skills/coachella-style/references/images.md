# Cut-outs, scenes and images

This style decorates with objects, not photos. Every accent is a flat cut-paper drawing of something you would find on the way to, or at, an outdoor gathering. The poster is type, the landscapes are shapes, and photos are the exception.

## The cut-out language

- **Subject:** one recognizable object per drawing: desert plants (prickly pear, agave, palm, wildflowers), festival things (tent, shuttle, lantern, radio, ticket, map, canteen, stamp, tumbleweed). Choose objects from the brief's own world: a wine weekend gets a crate and a vine, a book fair a stack of books and a tote.
- **Shapes:** flat fills built from ellipses, rounded rectangles and a few curves. Two or three tones per object (a base, a lighter highlight, a darker detail) and small dots or lines for texture. No outlines, gradients or shading.
- **Palette:** fixed, earthy colors that look right on cream and on night: cactus greens `#78a661` and `#93bf77`, agave blue-greens `#6a9a90`, marigold `#f2a92a`, flower pink `#e48bb0`, tomato `#d65a3e`, canvas `#f2e6cb`, sand `#c9a774`, espresso `#3b2f26`. Cut-outs do not change with the theme; they are objects lying on the page.
- **Edge and shadow:** every symbol wraps its shapes in `<g filter="url(#cut-edge)">`, which adds a thin cream paper edge, and the `.cutout` class adds a soft drop shadow (`--shadow-cut`). Most objects stand on a flat sand ellipse.
- **Placement:** one to three per screen, slightly tilted with `--tilt` (between -6 and 6 degrees), at the edge of a block, breaking out of a card's top or floated beside prose. Never as icons, never in a repeating row of more than three, never behind text.

## Making a new cut-out

1. Pick the object and block it out in a viewBox of about 120 to 260 units wide, leaving a few units of margin for the paper edge.
2. Add it as a `<symbol id="cut-name" viewBox="…">` in the sprite at the bottom of the template. First element: the ground ellipse. Then the base shapes, the highlights, then small details.
3. Wrap everything in `<g filter="url(#cut-edge)">`.
4. Use it with `<svg class="cutout settle" viewBox="…" aria-hidden="true"><use href="#cut-name"/></svg>`; give it `role="img"` and an `aria-label` instead when it carries meaning.
5. Check it at 90px and at 220px wide, on cream and on the night band.

An image-generation tool can help for a richer hero accent: ask for "a single flat cut-paper illustration of <object>, two or three earthy flat colors, no outlines, no shading, no text, plain background", then rebuild it as SVG shapes so it stays crisp and small. If you keep a raster, export a transparent WebP at 2x, add the same paper edge in the image and the CSS shadow, and give it `alt`, `width` and `height`.

## Scenes

The scene band, the poster horizon and the footer horizon are layered silhouettes: a sky, a sun or moon disc, far ridges, rolling hills, and a few palms and agaves on the nearest layer. The scene band reads its colors from `--scene-*` so it turns to night in dark mode; the poster horizon keeps fixed dusk colors; the footer horizon uses `--night`. Change the landmarks to match the place (pines and a lake, vineyards and a farmhouse, rooftops and water towers), but keep three to four flat layers and no detail inside them.

## The poster

The poster is never an image. Keep it as HTML text so it stays sharp, searchable, translatable and accessible. Replace the names, the days or dates and the ribbons; keep the sky gradient, the shrinking rows and the horizon.

## Photos

Use photos only when the user supplies them: artists, past editions, the venue. Pick one treatment and keep it: warm, late-afternoon light, cropped to 4:5 for people and 3:2 for places, inside a 4px radius with no border. For artist cards, a cut-out photo (subject on a transparent background with the paper edge) fits the style better than a rectangle. Never hot-link stock photos, and never use crowd photos as background decoration behind text. Every image has `alt`, `width` and `height`.

## Brand mark, favicon and Open Graph

- The mark is a circle in the heading green with a marigold sun rising behind a hill cut in the page color, so it follows the theme.
- The favicon is the same mark in fixed colors.
- The Open Graph image is 1200 by 630: cream paper, the headline in the serif, the stem with its bloom, and a small poster on the right. Export it as PNG for production; social networks do not render SVG.
