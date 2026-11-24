# Images

This style runs on cartoon art. Every stage, card and split shows one scene from the brand's own world, drawn in one language: bright flat colour, thick dark outlines, big friendly eyes and a simple background with a strong sky. The sample scenes in `assets/images/` are original SVG drawings for the fictional sample studio; replace them with the user's own art.

## One drawing language

- **Outline:** every character and prop has a round-capped dark violet outline (`#1d1340`), about 5 units thick in a 640 by 360 scene. Backgrounds (sky, hills, walls) have no outline.
- **Colour:** saturated flat fills (orange, hot pink, lime, sky blue, violet, sunny yellow), a two- or three-stop gradient only in the sky or a glow. No textures, no photographic detail.
- **Characters:** simple shapes with a face: two big white eyes with a dark pupil and a white catchlight, a small open mouth, pink cheeks. Arms are single strokes ending in a round hand. Draw everyday things given a face (a vegetable, a raindrop, a sock, a cloud) or simple invented creatures.
- **Composition:** the main character in the middle third, slightly above centre, so it survives every crop: 2:1 on a wide stage, 16:9 on cards, the top two thirds of a phone screen, and a square splat on the 404. Leave the lower left quieter, because the stage title sits there.
- **Mood by item:** give each show, zone or product its own sky colour (sunset orange, rainy blue, night purple, teal day) so a row of cards reads as different worlds.

## Slots and ratios

| Slot | Ratio | Where |
|---|---|---|
| Stage and carousel slide | any, cropped with `object-fit: cover` (scenes are drawn at 16:9) | the top of every view |
| Card art | 16:9 | show, event, post and related cards |
| Split art | 16:9, cropped to fill the left 58 percent and faded into black | split panels |
| Splats | 16:9, clipped square into a splat | the 404 |
| Promo art | 3:2 (`images/goo.svg`) | the goo promo |
| Crew avatar | 4:3 tile with a drawn creature (`#crew` symbol) | team cards |

The template keeps every path written out in full in the `IMAGES` map (`"images/rocket-radish.svg"`), so `scripts/inline.mjs` can embed them; never build a path from a variable. Every `<img>` has `width`, `height` and an `alt` (empty when a title next to it already names it). Do not use `loading="lazy"` in a single-file page.

## With an image generation tool

Generate one scene per item, then keep the set consistent. Prompt:

> Flat 2D cartoon scene, 16:9, [one original character: what it is, its colour, what it is doing] in [simple setting], centred in the middle third, thick dark violet outlines with round ends on the character and props, big white cartoon eyes, bright saturated flat colours, a smooth [sunset orange / rainy blue / night purple / teal] gradient sky, no text, no logos, no existing characters, clean vector look.

Export or trace to SVG when you can; otherwise use WebP at 1600 by 900, under 200 KB each.

## Rules

- **Never draw an existing character** or anything that could be mistaken for one: no famous cartoon sponges, starfish, puppies in uniforms, turtles with masks, pigs, explorers or mascots, and no lookalikes in shape, colour and outfit. Use the user's own characters only with their permission, or invent new ones.
- Do not use another studio's logos, title lettering, goo or splat marks, screenshots or show stills.
- Photos are for real places and real events the user supplies (the venue, the room, a workshop). Put them in the same slots (stage, cards) with the same scrim; never stock photos of children, and no photos of identifiable children without the owner confirming consent.

## Without any image tool

Draw simple SVG scenes by hand following the language above: a gradient sky, one or two background shapes, a ground, and one outlined character with eyes. Keep each file small (under 10 KB) and in `assets/images/`. Never hot-link images from other sites or image libraries.
