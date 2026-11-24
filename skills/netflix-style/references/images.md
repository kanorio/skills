# Images

The artwork is the whole palette of this style. One picture per title (a series, a course, a film, a talk) is reused everywhere that title appears: wall, poster, tile, billboard, detail, episode thumbnails, player. It must work cropped wide (16:9 and wider), tall (2:3) and tiny (a 150px thumbnail zoomed in).

## One visual language

Pick one and keep it for every title:

- **Key art (the template).** Flat cinematic scenes: one dominant hue per title, a gradient sky or wall, one light source (a sun, a moon, a kiln mouth, a spotlight), one subject in silhouette at the center, layered shapes for depth. No text in the picture; the title treatment goes on top in HTML.
- **Film stills.** Real frames from the user's own films or classes: one color grade for the catalog, faces or hands in the central third, no burnt-in subtitles or logos.
- **Studio photographs** for courses: the maker at work, shot from the same height and distance for every course, with a dark or deeply colored background.

## Composition rules

- Keep the subject inside the central 35% of the width and between 35% and 70% of the height. Posters crop to the middle third, the billboard crops top and bottom, episode thumbnails zoom 1.7× into different spots (`--o` on `.thumb`).
- Leave the bottom fifth calm: the title treatment and the progress bar sit there over a dark gradient.
- Mostly mid to dark tones. One or two light pictures in a row are welcome (they break the rhythm), but put white title text on them only over the gradient.
- If the user's artwork already has its title lettered in, remove the `.tt` span from that title's tiles and keep the name in the link's text with a `sr-only` span.

## Slots and ratios

| Slot | Ratio | Where | Notes |
|---|---|---|---|
| Key art | 16:9 source, at least 1600×900 for photos | `images/<title-id>.(svg|webp)` | one file per title; the catalog card's `img` is the source every copy reads |
| Wall tile | cropped to 4:3 | `.wall img` | decorative copies, `alt=""`; 30 tiles, repeats are fine |
| Poster | cropped to 2:3 | `.poster .art img` | numbered row |
| Tile | 16:9 | `.card .art img` | rows, grid, More like this |
| Billboard | full width, about 56% of the width tall | `.billboard > img` | the featured title |
| Detail and player | 16:9 | `.d-hero img`, `#w-art` | |
| Episode thumbnail | 16:9, zoomed | `.thumb img` | per-episode stills replace the zoom when the user has them |
| Page tops | full bleed | `.art-top > img` | about and 404 reuse key art |
| Mark and social image | 1:1 / 1200×630 | `illustrations/mark.svg`, `illustrations/og.svg` | |

Every `img` has `width` and `height`. Decorative copies next to the title's own text have `alt=""`; pictures that carry meaning on their own (the about page) get a short description.

## Prompts for an image tool

Write one prompt per title from this base and change only the subject, hue and light:

> Flat vector key art, cinematic, 16:9. A [subject] in silhouette at the center, [light source] behind it, a [hue] gradient sky fading to near-black at the top, layered shapes for distance, gentle grain, no text, no logos, no people's faces in detail, lots of calm space in the bottom fifth.

For photographs: "Documentary still, 16:9, [maker] at work on [craft] in their own studio, single window light from the left, deep [hue] background, shot at bench height, natural color grade, no text."

## Without an image tool

Draw the key art as inline-ready SVG files like the template's: a 320×180 `viewBox`, one `linearGradient` for the sky, one `radialGradient` for the light, three to six flat shapes for land, water or walls, and one silhouette for the subject. Keep each file under 3 KB. Do not hotlink stock libraries, studio sites or posters of real films; do not use logos or posters of real titles, studios or services.
