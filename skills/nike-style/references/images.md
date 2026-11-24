# Images

Two kinds of images, and they never mix: **campaign photographs** that fill the frame and carry the headlines, and **product shots** on one even gray.

## Campaign photography

One photographer, one season: black and white (or one consistent grade if the brand insists on color), hard light, deep blacks, visible grain, and movement. Athletes mid-effort, shadows on courts and tracks, empty places at the edges of the day. Shoot wide enough to leave a dark, calm band at the bottom of the frame for the headline.

- The sample photographs in `assets/images/*.webp` are rendered monochrome stand-ins (a shoe with a speed trail, fence shadows on a court, fog ridges, stadium steps, light trails, a group run against a low sun, track lanes). Reuse them while drafting; replace them with real photographs before launch.
- Faces are fine in real photographs the user owns. Never generate or use faces of real athletes, and never imply an endorsement.
- No text, logos or watermarks in the photographs. The headline is live text on top.

## Product shots

Every product is shot (or rendered) in the same way: side profile for shoes with the toe to the right, flat lay for clothing, centered, on a transparent or `--tile` gray background, with a soft contact shadow. The tile gray comes from CSS so the same files work in dark mode.

- The sample products in `assets/images/*.svg` are drawn originals with the sample brand's bar-and-chevron mark. Replace the mark and the products with the user's own.
- Keep every product image square with even margins; `object-fit: contain` and 6% padding do the rest. Never crop a product inside the grid.

## Slots and ratios

| Slot | Ratio | Size to export | Notes |
|---|---|---|---|
| Campaign hero (`.hero-media img`) | about 16:9, cropped to cover | 2400 × 1350 | Subject in the top two thirds, dark ground at the bottom; check the 390px crop, which keeps the center |
| Statement band, article hero (`.band img`, `.article-hero img`) | 16:10 cropped to cover | 2400 × 1500 | Same rule: calm lower third |
| Photo tile, sport card, story card | 4:5 | 1200 × 1500 | Landscape photos work if the subject is centered |
| Feature story (`.feature img`) | 16:7, at least 420px tall | 2400 × 1050 | |
| About wide photo (`.wide-photo img`) | 16:7 | 2400 × 1050 | |
| Product tile, gallery, bag line | 1:1 | 1500 × 1500 transparent PNG, WebP or SVG | Same scale for every shoe, same scale for every garment |
| Open Graph (`illustrations/og.svg`) | 1200 × 630 | | Mark on black |

Use WebP or AVIF for photographs (quality 70 to 80), with `width`, `height` and a real `alt` on every image. Images below the first screen should not use `loading="lazy"` in single-file deliveries (they are embedded anyway); in a deployed site lazy loading is fine.

## Prompts for an image tool

When the user has no photographs and an image tool is available, keep one prompt base and change only the subject:

> Black and white sports campaign photograph, [subject], hard directional light, deep shadows, fine film grain, slight motion blur, shot on a 35mm lens, wide frame with a dark empty band along the bottom third, no text, no logos.

Subjects that suit the style: a runner's legs mid-stride at dawn on wet asphalt; shadows of a chain-link fence across an outdoor court; a climber on stadium steps cut by a diagonal shadow; a group run in silhouette against a low sun; a shoe on a starting line with motion streaks. Product shots: "studio product photograph of [product], side profile, centered on a plain light gray background, soft contact shadow, no text".

## Without an image tool

Keep the template's stand-ins and list every image the user must supply, slot by slot, in your reply. Do not hotlink stock photos, brand assets or images found online; do not use photos of real athletes or other brands' products.
