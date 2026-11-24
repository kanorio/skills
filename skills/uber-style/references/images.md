# Images

The interface is black and white, so the pictures bring all the color. They are flat editorial illustrations of people doing the work the site sells, drawn in one hand with one palette, the way a magazine commissions one illustrator for a whole issue.

## The image language

- **People at work, seen in their setting.** A cleaner in a sunny living room, a pro under a sink, someone building a shelf, a mover between a doorway and a van. Show the job and the place, not a portrait against nothing (the one exception is the pro portrait for sign-up pages).
- **Flat shapes, no outlines.** Figures and objects are built from solid shapes: round heads, rounded torsos, limbs as thick round-capped strokes, simple hair and caps. Faces have at most two dots and a curve. No gradients, no 3D, no textures except the dots below.
- **Halftone dots for shadow.** Shadows and shaded sides are a pattern of small dark dots at about 40 percent, never a darker flat color or a blur. One light direction per picture.
- **One palette.** Sky blue `#9cc8ee`, cobalt `#2d5bd7`, sun yellow `#f2c230`, terracotta `#e8693a`, warm orange `#d9773f`, deep green `#2e7d5b`, cream `#f3ecdf`, card grey `#c9ccd2`, navy `#22305a` for trousers, ink `#111` for hair, frames and tools, and three skin tones (`#e6b48e`, `#c98a5e`, `#8a5a3c`). Use a varied, realistic mix of people.
- **Full bleed inside the frame.** Every picture fills its rectangle edge to edge with a colored background (a wall, the sky, a tiled kitchen). Nothing floats on white or black, so the same file works on both bands.
- **Spot drawings for cards.** Service cards use small flat objects (a spray bottle, a bucket, a wrench, flat-pack boxes, a plant) from the SVG sprite in the same palette, about 96px, on the card's grey.
- **Never mix with photos.** Use illustrations throughout or, if the user has real photos, photos throughout (see below). Not both on one page.

## Slots and ratios

| Role | Ratio | Template files | Notes |
|---|---|---|---|
| Hero mosaic | four pictures shown at 5:4, drawn 4:3 | `clean.svg`, `fix.svg`, `build.svg`, `move.svg` | Four different jobs. Keep the subject in the middle; the floating card covers the lower edge of the bottom row. |
| Hero art (section pages) | 4:3 | any scene, `pro.svg` for sign-up | One picture with 8px corners. |
| Seam picture | 32:9 on desktop, 16:9 on phones, drawn 10:3 | `street.svg`, `rooms.svg` | Wide scenes: a street of houses with a van, or a cut-away of three rooms side by side. Keep people and key objects in the middle 60 percent of the height. Decorative, `alt=""`. |
| Columns, steps, journal cards | 16:10 | scenes | Square corners. |
| Picture cards and splits | 16:10 and 16:9 | scenes | 8px corners. |
| Circle portrait | 1:1 | `pro.svg` | Cropped into a circle; the subject's head in the upper half. |
| Service spots | 1:1, in the sprite | `#s-spray`, `#s-bucket`, `#s-wrench`, `#s-drop`, `#s-flatpack`, `#s-screen`, `#s-boxes`, `#s-bag`, `#s-plant`, `#s-window` | One per service. Add new ones as `<symbol>` in the sprite, 64 by 64. |
| Favicon and Open Graph | 32px and 1200 by 630 | `mark.svg`, `og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every path the script uses is listed in the `IMAGES` map at the top of the script (with alt text in `ALTS`), so `scripts/inline.mjs` can embed them. Every `<img>` has `alt`, `width` and `height`. No picture is lazy-loaded in the template so whole-page screenshots stay complete; on a deployed multi-page site add `loading="lazy"` below the first screen.

## With an image tool

Prompt: "flat editorial illustration, [person] [doing the job] in [a setting], solid shapes with no outlines, simple faces, halftone dot shading, limited palette of sky blue, cobalt, sun yellow, terracotta, deep green and cream with black details, full-bleed background, no text, no logos, 4:3". For seam pictures add "wide panoramic composition, 10:3, subject centered vertically". Generate every picture with the same prompt stem so they share one hand, and export at 1600 by 1200 (or 3200 by 960 for seams).

## Without an image tool

Draw the scenes as SVG, like the template does. Start with a full-size background rectangle, add a floor band and one or two pieces of furniture as rectangles, then the figure: a circle head, a hair path, a torso as one thick round-capped stroke (70 to 84px), arms and legs as 22 to 30px strokes, ellipses for shoes. Add a `<pattern>` of small dots and fill shadow shapes with it. Keep each file under about 4 KB and reuse the palette above. For a wide seam, compose existing rooms side by side with `<clipPath>` and a scale transform, separated by thick black walls, as `rooms.svg` does.

## Photos

When the user supplies real photos:

- Use them everywhere the illustrations were, at the same ratios, with the same 8px corners (square in columns and steps). Pick warm, daylight shots of people at work in real homes; avoid stock poses and empty studios.
- Keep a consistent grade across the set, and crop seam photos wide with the subject in the middle band.
- Keep the spot drawings in the service cards, or replace them with tightly cropped object photos on a transparent background, all at the same scale.
- Never use another company's photos, logos or products.
