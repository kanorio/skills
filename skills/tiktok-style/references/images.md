# Images

The interface is white, grey and two small accents, so the videos bring every color. Each video is a tall picture that has to read at two sizes: full screen in the feed and as a 168px tile in a grid of twelve.

## The image language

- **Vertical first.** Every picture is 9:16 (1080 by 1920 for photos and frames; the sample files use a 540 by 960 viewBox). The subject sits in the middle band, between about 35 and 70 percent of the height: the sticker covers the top fifth and the caption and actions cover the bottom third.
- **One subject on one color.** The sample uses flat eye-level illustrations: a paper crane, a carved block, jars of cuttings, a wheel, each on its own saturated backdrop with a soft light circle behind it, a darker table band below and a soft shadow under the object. Each video owns one backdrop color, so the grid reads as a wall of distinct tiles.
- **A frame from the video, not a poster.** Pictures look like a paused moment: hands-free, centred, no lettering. Titles, steps, counts and handles are HTML on top of the picture, never baked in.
- **No other platform's look.** Never draw another app's logo, note mark, two-color glitch edges or interface into a picture.

## Slots and ratios

| Role | Ratio | Template files | Notes |
|---|---|---|---|
| Video poster and tile | 9:16 | one per video in `images/` (`crane.svg`, `pothos.svg`, `tube.svg`…) | The same file is the feed frame, the tile, the watch page frame and its blurred background. |
| Real video | 9:16 | none (`data-src` on the tile) | MP4 (H.264) or WebM hosted beside the page or on the user's video host; the poster stays the first frame. |
| Course cover | 9:16 | reuses a video picture | Shown at 210px wide (132 on phones). |
| Lesson tiles | 9:16 | none, drawn in CSS | A gradient of the lesson's hue (`--h`) with the number. |
| Avatars | 1:1, shown round | none, initials in CSS | Replace with the creator's own photo in a square crop if the user has one. |
| Favicon and Open Graph | 64px and 1200 by 630 | `illustrations/mark.svg`, `illustrations/og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt` (the tile's `alt` is the video title and is reused as the poster's alt; background copies use `alt=""`), `width` and `height`. The template loads every image eagerly; on a real site with dozens of videos, add `loading="lazy"` to tiles below the first screen.

## With an image tool

Ask for: "flat vector illustration of [object] centred on a saturated [color] backdrop, soft light circle behind it, darker table band at the bottom, soft shadow under the object, vertical 9:16, no text, no logos, no people". For a creator who films real things, use a real frame from each video instead: the object or the hands at work in the middle of the frame, bright and sharp, with plain space at the top and bottom.

## Without an image tool

Draw the posters as SVG, like the template does: a full `<rect>` backdrop, a white circle at 7 to 12 percent opacity, a table `<rect>` in a darker shade of the backdrop from about 68 percent down, an `<ellipse>` shadow, the object from a handful of paths, and three or four tiny white dots. Keep each file under about 3 KB and five or six colors; reuse a shape with `<use>` for repeated leaves, lemons or stars. The template's files are examples to copy and recolor.

## Photos and real video

When the user supplies frames, photos or video files:

- Crop or export to 9:16 and keep the subject in the middle band.
- Keep the rounded frames and the top and bottom gradients; do not add borders, filters or drop shadows to pictures.
- Use the user's own videos and frames, never ones from other accounts, and never hot-link images or embed another site's player.
