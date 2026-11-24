# Drawings and images

This style is drawn, not photographed. Every picture on the site, from the wall to the 404, comes from one set of flat drawings with one heavy black line, kept as `<symbol>`s in the inline sprite at the top of `assets/template.html` and placed with `<use href="#a-<name>">`. Photos are the exception (see the end).

## The drawing language

- **Box:** each drawing is a `<symbol id="a-<name>" viewBox="0 0 120 120">`, centred, filling about 80 percent of the box, standing on an imagined ground near y = 108.
- **Line:** one group `<g fill="none" stroke="#1d1d22" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round">`. Every shape inside has an explicit `fill`; open strokes stay unfilled. Eye dots go after the group, `fill="#1d1d22"`, radius 4 to 4.5, no stroke.
- **Palette (fixed, both themes):** yellow `#f5c018`, orange `#e8652a`, blue `#2c62b4`, green `#3b8a47`, brown `#8a5b3a`, white `#fff`, plus pale grey `#c9ccd2`, cream `#f4e4c8` and pear green `#a9c63c`. No other colours, no opacity, no gradients, no shading or highlights.
- **Shapes:** front or side views of simple things built from circles, rounded triangles and smooth curves. Faces are two dot eyes and, at most, a short curved line; no cheeks, no teeth, no eyebrows, no "x" mouths.
- **Detail:** three to six lines inside a shape at most (a window, a stripe, a fold). If it needs more to read, choose a simpler subject.
- **Tile placement:** the drawing fills 72 percent of a square tile; a wide (2:1) tile holds a scene symbol (`s-<name>`, `viewBox="0 0 240 120"`) that reuses drawings and adds a ground or sea along the bottom.

## The set in the template

| Symbol | Subject | Used for |
|---|---|---|
| `a-tree` | round tree with three fruit | logo, hero, the about tile, memory-card backs |
| `a-owl`, `a-snail`, `a-whale` | the sample brand's three characters | books, game, films, events band, 404, empty states |
| `a-pear`, `a-tulip`, `a-house`, `a-kite`, `a-umbrella`, `a-teapot`, `a-lighthouse`, `a-fish`, `a-sun` | objects | books, wall tiles, page art, bands |
| `a-book`, `a-cards`, `a-letter`, `a-bag` | interface subjects | the books, play, contact and bag bands, menu tiles, success panels |
| `s-sea`, `s-path` | scenes | wide tiles and films |

The characters are original to the sample brand. Rename or redraw them for the user's brand; never keep them as the user's characters.

## Drawing new subjects

1. Pick a subject from the brief that a three-year-old can name: the brand's product, a place, an animal, a tool of the trade (a pair of scissors for a craft shop, a cup for a café, a slide for a play space).
2. Draw it in the 120 box with the group above: one outline shape first, then one or two inner shapes, then open strokes. Keep the black line the outermost edge.
3. Fill from the palette with at most three colours per drawing, and never the colour of the tile it will sit on.
4. Check it at 64px (menu tile) and 280px (wall tile): it must read at both.
5. Add it to the sprite and to any data arrays (`BOOKS[].art`, `spreads`, `PAIRS`, `FILMS`).

**Never draw an existing character** or anything that could be mistaken for one: no famous picture-book animals, no licensed cartoon shapes, no brand mascots, no lookalikes. If the user owns characters, rebuild them in this line only with their permission. Generic animals (an owl, a whale, a snail, a hen) drawn from scratch are fine.

## With an image generation tool

Use it only for drawings the user asks for that the sprite cannot hold, and keep the same language. Prompt:

> Flat children's picture-book illustration of [subject], single object centred on a plain [tile colour] background, thick uniform black outline with round line ends, flat fills in yellow, orange-red, cobalt blue, green, brown and white only, no gradients, no shading, no texture, no text, simple geometric shapes, front view, minimal detail, square format.

Then trace or redraw the result as an SVG symbol if you can; a raster drawing goes in a tile as an `<img>` with `width`, `height` and an empty `alt` when the tile has its own label.

## Photos

Only for facts a drawing cannot show: the real shop front, the actual classroom, a product the user sells. Place them inside a rounded tile or page-art frame (`border-radius: var(--r-block)`), never full-bleed, never on the wall next to drawings in the same row. Use the user's own photos. No stock photos of children, and no photos of identifiable children without the owner confirming consent. Without a photo, draw the subject.

## Without any image tool

Everything ships as inline SVG already; draw new subjects by hand following the rules above. Never hot-link images from other sites or image libraries.
