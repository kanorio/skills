# The mosaic, pictograms and photographs

This style decorates with geometry, not pictures. A mosaic of flat squares carries the brand colour, thin line pictograms label services and values, and photographs, when the brand has real ones, are documentary and square-cornered. Everything follows the theme and stays sharp at any size.

## The geometric mosaic

- Seven symbols in the sprite, all on an 80 by 80 square: `t-q` quarter circle, `t-h` half circle, `t-c` ring, `t-t` triangle, `t-a` three concentric arcs, `t-d` a 4 by 4 grid of small squares, `t-s` diamond. Each fills its square with `--q` and draws its shape in `--p`; shapes that meet an edge run 2 units past it, and each square overlaps its neighbour by 1px, so the squares join without seams.
- Six colour pairs set `--p` and `--q`: `.k1` blue on grey, `.k2` navy on pale blue, `.k3` pale blue on blue, `.k4` ink on grey, `.k5` blue on the page colour, `.k6` pale blue on navy. Rotate a square with `.r1` (90°), `.r2` (180°) or `.r3` (270°).
- Composition rules: never put the same symbol or the same colour pair side by side; keep one square in ink (`.k4`) and one with page-colour ground (`.k5`) per strip for contrast; let curves of neighbouring squares meet or point at each other; no text on top except the feature card.
- Places: the eight-square strip under the home hero (four on phones), the 3 by 2 feature panel, a 3 by 1 insights header, a 4 by 1 figure inside articles, a 2 by 2 block on the 404. Use it at most twice per view.
- To fit another brand, change only `--m1` (the accent) and let `--m2` and `--m3` follow as its pale and deep versions. Keep one hue.

## Pictograms

- 48 by 48 line drawings in the sprite (`p-connect`, `p-monitor`, `p-predict`, `p-automate`, `p-measure`, `p-team`, `p-clock`, `p-book`, `p-route`), stroked 1.5px in `--link`, no fill, flat ends, built from circles, straight lines and right angles.
- Draw new ones the same way for the brief's services: one idea each (a gauge, a network, a document, a shield), centred, with about 4px of clear space to the edge. Never fill them, never add a second colour.

## Photographs

- Use them only when the brand has real ones: the team at work, the actual product, sites and facilities. Square corners, full-bleed inside a tile or a column, cropped 16:9 or 1:1, never with a frame or shadow.
- One photographic language: documentary, daylight, cool neutral grading, people engaged in work rather than posing, no lens flare or heavy filters. A photo can sit in one square of the mosaic, next to flat shapes.
- If an image tool is available and the user wants photos, ask for "a documentary photograph of <the real work>, natural daylight, cool neutral colour, square composition, no text, no logos, no readable screens". Without such a tool, keep the mosaic and write a placeholder caption that says what photo belongs there (the template does this in the case study and article).
- Never hot-link stock photos or use pictures of real companies' products or people the user has not supplied.
- Every raster image needs `alt`, `width` and `height`, and no `loading="lazy"` above the fold.

## Brand mark, favicon and Open Graph

- The mark is a square split by quarter circles in the accent, the deep blue and the page colour, kept in the sprite as `#mark` so it follows the theme. Draw a new one from the same shapes for the brand: a square with one or two curves cut from it. Avoid stripes, globes and letters that read as an existing company's logo.
- The favicon is the same mark as an SVG file that switches its cut-out colour with `prefers-color-scheme`.
- The Open Graph image is 1200 by 630: white, the mark and name at the top left, the headline in a light blue sans, one line of grey description, a 3 by 2 mosaic on the right edge and a blue rule along the bottom. Export it as PNG for production; social networks do not render SVG.
