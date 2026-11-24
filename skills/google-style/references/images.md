# Images

Pictures are the only large areas of color in this style, so they carry the warmth while the interface stays white and grey. They are always framed: rounded corners, never full bleed, never behind text.

## The image language

- **Everyday and local.** Real places, objects and people in ordinary light: the counter of a shop, a path, a shelf, a hall. Nothing staged, no stock-photo handshakes, no text in the picture.
- **Daylight and soft color.** Bright, slightly airy exposure, natural color, gentle contrast. Avoid moody night shots, heavy filters and strong vignettes; a page of cards should read as one set.
- **Eye level, one subject.** Shoot from where a visitor stands, with one clear subject in the middle third and calm space around it, so the 16:10 crop on cards and the 4:3 crop on detail pages both work.
- **The template's flat scenes.** The sample uses flat SVG scenes (sky, sea, buildings, shelves) built from a few shapes in one muted palette. They are placeholders in the same spirit; replace them with the user's photos when they exist.

## Slots and ratios

| Role | Ratio | Template files | Notes |
|---|---|---|---|
| Card picture (places, nearby, notes) | 16:10, 16px corners | `harbour.svg`, `bakery.svg`, `cliff.svg`, `pools.svg`, `garden.svg`, `market.svg`, `library.svg`, `boatshed.svg`, `cinema.svg`, `street.svg` | One picture per listing. The place view reuses the card's picture. |
| Place detail | 4:3, 24px corners | the card's file | Keep the subject centered; the frame crops the sides. |
| Lead note | fills its half of the card, 28px corners on the card | `harbour.svg` | Becomes 16:10 on phones. |
| Post and about picture | 21:9, 28px corners | `harbour.svg` | Wide and calm; put the subject in the middle band. |
| Favicon and Open Graph | 64px and 1200 by 630 | `illustrations/mark.svg`, `illustrations/og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt`, `width` and `height`. In the template no picture is lazy-loaded so whole-page screenshots stay complete; on a deployed multi-page site add `loading="lazy"` below the first screen. The home view has no pictures at all; keep it that way.

## With an image tool or a photographer

Ask for: "photograph of [subject] in [place], daylight, natural colors, eye level, one clear subject in the center, calm background, no people facing the camera, no text, no logos, 16:10". For detail pages ask for 4:3 versions of the same subject. Export at 1600 by 1000 (cards) and 1600 by 1200 (detail) as WebP.

## Without an image tool

Draw flat SVG scenes like the template's: a sky rectangle, one or two horizon shapes, the subject built from rectangles, circles and simple paths, a ground strip. Use one shared palette (pale sky blue, sea blue, sand, sage green, terracotta, butter yellow, slate) and no outlines, gradients or shadows. Keep each file under about 2 KB and give each listing its own scene, or reuse a scene per category.

## Photos

When the user supplies photos:

- Crop each to the slot's ratio with the subject centered; check the 16:10 and 4:3 crops of the same file.
- Keep the corners rounded and the frame clean: no borders, captions on the picture or overlaid buttons.
- Use their own photography only; never use another company's images or hot-link pictures from other sites.
