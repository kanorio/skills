# Images

This style looks like it was printed: black ink, paper, one red, and dots. Photos of a live show are the natural fit, but the template proves the look with drawings only, so it never depends on images the user does not have.

## The image language

- **Monochrome halftone.** Light is drawn as dots on black: bigger dots where it is brighter, on a hexagonal grid. Shapes on top are flat black silhouettes or white line work, never shaded.
- **One red detail per image.** A rose window center, a record label, a play mark, sparks. Never more than one red element, never red as a background.
- **Geometry over illustration.** Arches, circles, beams, bars, grids, sprocket holes. No hand-drawn wobble, no gradients inside shapes (a soft beam fading out is the one exception).
- **No faces.** People are backlit silhouettes: a head, shoulders, at most a guitar or a cap.
- **No text inside images.** Titles, prices and names stay in HTML.

## Slots and ratios

| Role | Ratio | Template file | Notes |
|---|---|---|---|
| Hero stage | 16:10, cropped by `background-size: cover` | `illustrations/stage.svg` | Keep the light source in the left 60%; the right third and the bottom stay dark for the headline and the wedge. The art's own background is a little lighter than the stage black so the wedge edge shows. |
| Album or release cover | 1:1 | `cover.svg` | White line work over halftone, one red center. |
| News and video | 3:2 | `news-*.svg` | Black background, one subject centered. Cut diagonally at the bottom by CSS. |
| Product | 1:1 | `p-*.svg` | Flat product on a light stone backdrop with a soft floor shadow; the same backdrop in both themes, like studio photography. |
| Member portrait | 4:5 | `member-*.svg` | Backlit silhouette, the light from a different side for each person. |
| Wide band or venue | 16:7 | `band.svg` | Figures in a row against two light sources. |
| Grain | 320px tile | `grain.svg` | SVG `feTurbulence` noise turned into sparse black specks; the page sets its opacity and inverts it in dark mode. |
| Favicon and Open Graph | 32px and 1200 by 630 | `mark.svg`, `og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt` (empty when a card title already says it), `width` and `height`. On a real site with photos, add `loading="lazy"` and `decoding="async"` to images below the first screen.

## Making new art without an image tool

Draw it as SVG. The halftone is a loop: sample a brightness function on a hexagonal grid and draw each dot as a zero-length line with a round cap, grouped by size so the file stays small.

```js
// node halftone.mjs > art.svg  (brightness(x, y) returns 0..1)
const W = 1200, H = 800, step = 16, levels = 8, ink = "#0e0e0e", dot = "#f1efe9";
const glow = (x, y, cx, cy, s) => Math.exp(-((x - cx) ** 2 + (y - cy) ** 2) / (2 * s * s));
const brightness = (x, y) => Math.min(1, glow(x, y, 600, 380, 220) + 0.25 * glow(x, y, 600, 760, 300));
const groups = Array.from({ length: levels }, () => []);
for (let j = 0, y = 0; y <= H + step; j++, y = j * step * 0.866) {
  for (let x = j % 2 ? step / 2 : 0; x <= W + step; x += step) {
    const r = (step / 2) * Math.sqrt(brightness(x, y));
    if (r < 1.2) continue;
    groups[Math.round(((r - 1.2) / (step / 2 - 1.2)) * (levels - 1))].push(`M${Math.round(x)} ${Math.round(y)}h0`);
  }
}
const paths = groups.map((d, k) => d.length ? `<path stroke-width="${(2 * (1.2 + ((step / 2 - 1.2) * k) / (levels - 1))).toFixed(1)}" d="${d.join("")}"/>` : "").join("");
console.log(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="${ink}"/><g fill="none" stroke="${dot}" stroke-linecap="round">${paths}</g></svg>`);
```

Then add the subject on top as flat shapes (`<rect>`, `<circle>`, `<path>` in black with white strokes) and one red detail. Keep each file under about 60 KB by raising `step` or the minimum radius.

For small surfaces (a card corner, a badge) use the CSS halftone instead: the `.halftone` class draws equal dots with `radial-gradient`, and a `mask-image` fades them.

## With an image tool

Ask for: "monochrome halftone print, black background, large dots for highlights, a single [subject] as a flat black silhouette lit from behind, one small red accent, no text, no faces, high contrast, screen-printed tour poster look". Generate square or 3:2, then check that the subject sits where the layout needs it (left in the hero).

## Photos

When the user supplies photos (live shows, the band, products):

- Convert them to black and white with strong contrast (`filter: grayscale(1) contrast(1.15)` or in an editor), and keep product photos on one plain backdrop.
- Crop live photos to the slot ratios above and keep the brightest area away from where the headline sits.
- Keep the diagonal frames: news images use `clip-path` on `.media`, the hero keeps the wedge.
- Never hot-link stock photos or images from other sites, and never use photos of real performers the user has no rights to.
