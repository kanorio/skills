# Images

The project art is the whole palette of this style. One picture per project (a game, a world, a piece of work, a group) is reused everywhere it appears: the wall, tiles, the project page, event cards, posts, the parent band. It must work cropped square (a 144px tile), wide (16:9) and dimmed under the wall's veil.

## One visual language

Pick one and keep it for every project:

- **Block dioramas (the template).** A small isometric island built from cubes, floating on a two-color gradient sky: grass, sand, snow or lava on top, a layer of earth underneath, a few props (trees, towers, boats, lanterns) and one or two tiny figures. Each cube has three faces: the color on top, 20% darker on the left, 38% darker on the right. One dominant hue per project, saturated but not neon. No text, no logos.
- **Real screenshots or renders** of the user's own games: the same camera height and angle for every project (a three-quarter view from above works best), the subject in the middle, the HUD hidden, no lettering.
- **Photographs of the work** for a club or school: the piece on a plain colored backdrop, shot square from the same distance, one color grade for the whole set.

## Composition rules

- Keep the subject inside the central square of a 16:9 frame: tiles crop to the middle, the project page shows the whole frame.
- Use a different sky color for neighbors on a shelf, so a row reads as a strip of distinct worlds.
- Mostly mid tones with one bright accent per picture. The wall darkens everything to 60%, so very dark pictures disappear there: keep at least half of the set mid to light.
- No text in the picture: the title is set in HTML under the tile.

## Slots and ratios

| Slot | Ratio | Where | Notes |
|---|---|---|---|
| Project art | 16:9 source, 640×360 for SVG, at least 1280×720 for photos | `images/<project-id>.(svg\|webp)` | one file per project; the tile's `img` in `#grid` is the source every copy reads |
| Wall tile | cropped to 1:1 | `.wall-grid img` | decorative copies, `alt=""`; twelve in the markup, 63 after the script |
| Tile | cropped to 1:1 | `.tile img` | shelves, the grid, More like this |
| Project media | 16:9 | `#p-img` | gets a real `alt` from `PROJECTS` |
| Event and post pictures | 16:9 | `.event img`, `.post-card img`, `#post-img` | borrow project art or use the event's own picture |
| Band stack | cropped to 1:1 | `.stack img` | three pictures, tilted |
| Mark and social image | 1:1 / 1200×630 | `illustrations/mark.svg`, `illustrations/og.svg` | the mark is a small isometric cube with a sprout; redraw it for the user's brand |

Every `img` has `width` and `height`. Copies next to their own title have `alt=""`; the project page's main picture gets a one-line description.

## Prompts for an image tool

Write one prompt per project from this base and change only the place, props and colors:

> Isometric voxel diorama, a small floating island made of cubes seen from above at 30 degrees, [ground: grass / sand / snow / lava] on top and a layer of brown earth below, [props], one or two tiny blocky figures, flat shading with three tones per cube, a smooth [color] to [color] gradient sky, a few [clouds / stars / bubbles], no text, no logos, no characters from existing games, 16:9, subject centered with empty sky on both sides.

Keep the sky colors, the angle and the cube size the same across the set.

## Without an image tool

Draw the dioramas as SVG, the way the template does: define one cube once (`<g id="c">` with a top, a left and a right face that use `currentColor`, plus two black overlays at 20% and 38% opacity), then place it with `<use href="#c" x=".." y=".." color="#hex"/>`. On a 2:1 grid with a 50px tile, a cube at grid position (x, y, z) sits at `320 + (x − y) × 25`, `118 + (x + y) × 12.5 − z × 27`. Draw from back to front (sort by x + y + z), add a gradient sky and a few circles or rounded rectangles for sun, stars or clouds. Each picture stays under 10 KB.

Never hot-link stock photos, other games' screenshots or fan art.
