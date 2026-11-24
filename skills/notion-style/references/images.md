# Illustrations and images

This style draws instead of photographing. The drawings carry the warmth; photos are the exception.

## The illustration language

- **Line:** one continuous-looking ink stroke, round caps and joins, 2 to 2.5px at hero size and about 1.8px at card size. Lines wobble slightly, like a careful hand: prefer gentle curves (`c` and `q` commands) over perfectly straight segments.
- **Color:** strokes use `currentColor`, so they follow the theme. Exactly one flat pastel blob sits behind each drawing, filled with a `--tint-*` variable through an inline `style`, so it changes in dark mode too.
- **Subject:** everyday objects that stand for the idea: a desk and notebook for writing, an envelope and paper plane for a newsletter, a winding path with flags for progress, a stack of pages for a journal. One idea per drawing. People appear as simple figures only when needed, without faces in detail.
- **Composition:** generous empty space inside the viewBox, the blob slightly off-center, nothing touching the edges.
- **No:** gradients, shading, hatching, multiple colors, text inside drawings, or any recognizable logo or character.

## Making new drawings

1. Choose one object per idea from the brief and sketch it as five to twelve strokes.
2. Write it as an SVG `<symbol>` in the sprite at the bottom of the template, with a `viewBox` near the template's sizes (480 by 340 for heroes, 120 by 90 for cards).
3. First element: the tint blob path with `style="fill:var(--tint-…)"`. Then one `<g>` with the stroke attributes and the inline drawing style copied from an existing symbol. Give every stroked path `class="ink"` and `pathLength="1"`.
4. Use it with `<svg class="illo draw" viewBox="…" role="img" aria-label="…"><use href="#your-id"/></svg>`, or `aria-hidden="true"` when it is decorative.
5. Check it in both themes and at phone width.

An image-generation tool may be used for a hero drawing if the user wants more detail: ask for "a minimal black line drawing on a plain white background, single weight round-cap strokes, no shading, no text", then trace or simplify it into SVG strokes so it still follows the theme. A raster image cannot change color with the theme; if you must use one, provide a light and a dark version.

## Photos

Use photos only when the user supplies them (team, product, venue). Crop them to a consistent ratio, put them inside a 14px-radius frame, and keep one pastel tint behind or around them. Never hot-link stock photos. Every image has `alt`, `width` and `height`.

## Open Graph and favicon

- The favicon is the brand mark: a 32px rounded ink square with a simple white symbol.
- The Open Graph image is 1200 by 630: off-white background, the headline in Inter 800, the mark, and one illustration on a tint blob. Export it as PNG for production; social networks do not render SVG.
