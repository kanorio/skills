# Images

The interface is white, grey and ink, so the thumbnails bring every color on the page. They should read at 168px wide: one bold subject, one strong backdrop color per video, and the same picture language from the first shelf to the last.

## The image language

- **One subject, centred, on one color.** The sample uses overhead flat-lay illustrations: a dish, a pan or a board seen from above, on a saturated backdrop with a faint dot texture and a hard offset shadow under the object. Each video owns one backdrop color, so a shelf reads as a row of distinct tiles.
- **Built to crop.** The subject sits in the middle third. The same 16:9 file fills the card, the player poster, the "Up next" row, the course cover and the 9:16 clip tile (`object-fit: cover`), so a vertical crop still shows the subject.
- **No text inside pictures.** Titles, durations, badges and counts are HTML on top of or under the picture; a real channel that uses lettering on its thumbnails can keep it, but the template's pictures stay clean.
- **No real platforms, people or brands.** Never draw another video service's logo, play button or interface into a thumbnail, and never use real people's faces without permission.

## Slots and ratios

| Role | Ratio | Template files | Notes |
|---|---|---|---|
| Video thumbnail and player poster | 16:9 | one per video in `images/` (`soup.svg`, `curry.svg`, `sourdough.svg`…) | 1280 by 720 is enough; the poster can be a frame from the video. |
| Clip | 9:16 tile, cropped from the 16:9 file | the same files | For real clips, export a 1080 by 1920 cover instead. |
| Channel banner | 6.15:1 desktop, 4:1 phones | `banner.svg` | Keep anything important in the middle 60 percent. |
| Channel avatar | 1:1, shown round | `avatar.svg` | The logo or the creator's face, centred with room around it. |
| Course cover | 16:9 | reuses a video file | Shown in the course card and in the tinted panel. |
| Favicon and Open Graph | 64px and 1200 by 630 | `illustrations/mark.svg`, `illustrations/og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt` (empty when a card title already says it), `width` and `height`. Thumbnails in the template load eagerly; on a real site with many videos add `loading="lazy"` below the first screen.

## With an image tool

Ask for: "overhead flat-lay illustration of [dish or object] centred on a saturated [color] backdrop, flat vector shapes, a hard offset shadow under the object, faint dot texture, no text, no logos, 16:9". For a creator who films people, use real frames from their videos instead: a clear face or a close-up of the hands at work, bright and sharp, with the subject in the middle.

## Without an image tool

Draw the thumbnails as SVG, like the template does: a `<rect>` backdrop, a dot `<pattern>`, the object from circles, ellipses and rounded rectangles, and the same shapes again in black at 16 percent opacity, shifted 12px right and 14px down, as the shadow. Keep each file under about 6 KB and five or six colors. The template's files are examples to copy and recolor.

## Photos and video frames

When the user supplies real thumbnails, frames or photos:

- Crop to the slot ratios above and keep the subject centred.
- Keep the rounded frames; do not add borders, filters or drop shadows to thumbnails.
- Use the user's own frames and thumbnails, never ones taken from other channels, and never hot-link images or embed players from other sites.
