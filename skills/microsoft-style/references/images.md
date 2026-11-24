# Product drawings, tints and photos

The pictures in this style are clean product portraits on soft pastel grounds. The template draws every product as flat SVG in the sprite, so it stays sharp, recolors with one attribute and follows the theme. Real product photos can replace the drawings on the same tints.

## The drawn products

- Each product is a `<symbol id="art-…" viewBox="0 0 400 300">` in the sprite at the end of the template: `art-leaf` (tablet with a keyboard cover and an optional pen), `art-ridge` (laptop), `art-bar` (camera bar over a screen in a video call), `art-pen`, `art-keys` (keyboard), `art-dock` and `art-suite` (the six app icons). Use one with `<svg data-c="sage" viewBox="0 0 400 300" aria-hidden="true"><use href="#art-leaf"/></svg>`.
- Inside a symbol, shapes use three classes: `.a-body` (the device color `--dev`), `.a-edge` (bezels, ports and cables, `--dev-2`) and `.a-kb` (fabric, `--kb`). Screens use the `#scr` gradient with one white wave. `data-c="sage|graphite|sand|silver"` on any ancestor sets the three colors, so a color picker only changes one attribute.
- Parts can be switched with custom properties: on `art-leaf`, `--kb-o: 0` hides the keyboard and `--pen-o: 1` shows the pen. The product gallery uses `data-show` for this.
- For the brief's own products, draw new symbols the same way: one simple front or three-quarter view, flat fills, rounded corners, one soft ellipse shadow (`.a-sh`), no outlines, no text, no real logos. Keep the 400 by 300 box and leave about 10 percent of air around the object.
- Tints (`.t-sage`, `.t-sky`, `.t-sand`, `.t-lilac`, `.t-mint`, `.t-rose`) are the backgrounds behind drawings. Give neighbors different tints and keep one tint per product across the site.

## App and feature icons

`app-write`, `app-grid`, `app-huddle`, `app-locker`, `app-planner` and `app-assist` are 48px rounded squares (13px corners) in one vertical gradient with a white glyph. For other apps or features, keep the shape and the white glyph, and pick a new gradient from the same family: saturated, light at the top, darker at the bottom.

## Photos

- When the user has real product photos, place them in the same tinted panels: product cut out or on a plain background, centered, soft shadow, shot straight on or at a slight three-quarter angle, the same light direction across the set. Export at 2x and give every image `alt`, `width` and `height`.
- People appear in story cards and about pages: natural light, everyday offices, kitchens and classrooms, warm color, one person or a small group mid-task, never looking at the camera. Crop to 16:9 in story cards and square for leadership.
- If an image tool is available and the user wants new pictures, ask for "a clean studio product photo of <the real product>, centered on a soft <tint> background, soft shadow, no text, no logos" or "a candid photo of <who> using <what> in a bright everyday room, warm natural light, no logos, no readable screens". Without such a tool, keep the drawings and initials avatars. Never hot-link stock photos.

## Brand mark, favicon and Open Graph

- The mark is a single leaf-like rounded shape in a blue to teal gradient with one white fold line (`#mark` in the sprite, `illustrations/mark.svg`). For a real brand, keep it to one simple shape in the brand's own colors; avoid grids of colored squares and any shape that reads as an existing company's logo.
- The Open Graph image (`illustrations/og.svg`, 1200 by 630) repeats the hero: the wash, mark and name, the greeting, an ask box with the gradient edge, two chips and the tops of three tinted cards. Export it as PNG for production; social networks do not render SVG.
