# Images

Two kinds of pictures carry this style: the drawn night city at the top of the home page, and one piece of key art per film, show or event, reused everywhere that title appears (programme card, screen tile, feature panel, deck strip, film page, trailer screen). Everything is flat, layered and lit from inside, like a city at night.

## One visual language

- **The city (inline SVG in the template).** Flat layered silhouettes, no outlines except neon: a gradient sky, a moon or sun with a soft halo, a far skyline, mid-ground blocks with a pattern of lit windows, one hero building in the middle (a marquee, a stage door, a studio, a radio tower), searchlights, street lamps and trees. All fills come from tokens, so dusk and night are the same drawing.
- **Key art (the template's `images/`).** Flat vector scenes in the same family: one dominant hue per title, a gradient sky or wall, one light source, one subject in the middle, three to six shapes for depth. No text, no faces in detail.
- **Photographs** (only when the user has them): stills or event photos with one consistent grade, deep colors, the subject in the central third. Never mix photographs and drawn art in the same row.

## Composition rules

- Key art is 2:3 (`400×600`) and is cropped to 16:9 on screen tiles and the trailer: keep the subject between 32% and 68% of the height and inside the central 60% of the width.
- Leave the bottom fifth calm: tile titles sit there on a dark gradient.
- The city keeps its hero building centered: phones crop the sides away, and the lockup sits in the sky above it, so nothing tall rises above 45% of the scene height in the middle third.
- Mostly mid to dark tones with one bright light source; a few light pictures (a dusk sky, a pale salt flat) break up a row.

## Slots and ratios

| Slot | Ratio | Where | Notes |
|---|---|---|---|
| City | 1440×600 viewBox, `xMidYMax slice` | `svg.scene` | 400 to 640px tall; crops from the sides on small screens |
| Skyline strip | 1440×200 | `symbol#skyline` | reused in the hero, screen tops, the band, the member card |
| Key art | 2:3 source | `images/<id>.svg` (or `.webp`) | one file per title; the programme card's `img` is the source every copy reads |
| Programme card, deck strip, film poster | 2:3 | `.film-art`, `.strip`, `.poster` | |
| Screen tile, trailer, journal art | cropped to 16:9 | `.tile`, `.screen`, `.post .art` | |
| Feature panel | cropped to the panel | `.tv-feature img` | under a dark gradient |
| Film backdrop | blurred and scaled | `.fhero-bg` | the same key art, 40px blur |
| Mark and social image | 1:1 / 1200×630 | `illustrations/mark.svg`, `illustrations/og.svg` | |

Every `img` has `width` and `height`. Copies of key art beside the title's own text have `alt=""`.

## Prompts for an image tool

One prompt per title from this base; change only the subject, hue and light:

> Flat vector key art in portrait 2:3, layered shapes, no outlines, no text. A [subject] in the middle of the frame, lit by [light source], a [hue] gradient sky fading to deep purple, a calm darker band at the bottom, a few small stars or specks of light, gentle and warm, like a city at night.

For the hero city: "Flat vector night city panorama, 2.4:1, deep purple sky with stars and a moon, far skyline silhouette, two crossing searchlight beams, mid-ground buildings with lit windows in amber, pink and cyan, a [venue type] in the center with a neon sign, street lamps with round globes, tree silhouettes, no text, no logos."

## Without an image tool

Draw key art as small SVG files like the template's: a `400×600` viewBox, one `linearGradient` for the sky, at most one `radialGradient` for the light, three to six flat shapes and one subject. Keep each file under 2 KB. Adapt the city by editing the inline scene: swap the hero building's sign letters and board text, recolor through the `--sky-*`, `--far`, `--mid`, `--cinema` and `--win-*` tokens, and move the moon. Do not hotlink stock libraries; do not use posters, stills or logos of real films, studios, channels or services.
