# Images

The interface is black, grey and one green, so the cover art carries every other color. Covers should read like a shelf of records and podcast tiles seen from across the room: one bold idea per square, saturated, simple shapes, strong contrast, recognisable at 48px in the sidebar and at 232px on the page top.

## The image language

- **Square first.** Every show, episode, release and session has one square cover. It appears in the sidebar (48px), cards (about 200px), shortcut cards (64px), tiles (tilted), the page top (232px) and the player (56px). It must work at all of them.
- **One idea, flat shapes, one tint.** A lamp and its cone of light, a planet on an orbit, two overlapping circles for two voices. Each cover owns one main color; write that color into `--tint` (in `oklch()`) wherever the cover is used so tinted page tops and tiles match it.
- **Saturated, slightly grainy.** A soft gradient in the main color, two or three accent colors, and a faint noise layer so the squares feel printed rather than drawn on a screen.
- **No text inside covers.** Titles stay in HTML so they can be translated, searched and read by screen readers. (Real podcast covers often include their title; when the user supplies such a cover, use it as is.)
- **People as round portraits.** Hosts and artists appear in circles. The template uses flat silhouettes on a colored ground with a sun disc behind; real photos replace them, cropped square with the face in the upper middle.

## Slots and ratios

| Role | Ratio | Template files | Notes |
|---|---|---|---|
| Show, episode, release, session cover | 1:1, at least 600 by 600 for production | `images/second-chorus.svg`, `lamplight.svg`, `field-static.svg`, `low-orbit.svg`, `pantry-tapes.svg`, `weather-for-two.svg`, `glasshouse-summer.svg`, `ferry-lights.svg`, `live-room.svg` | Episodes reuse the show cover unless the user has episode art. |
| Hero disc | 1:1, shown as a circle | the newest cover | Keep the subject away from the corners; the circle cuts them. |
| Host and artist portraits | 1:1, shown as a circle | `images/host-*.svg`, `images/artist-*.svg` | A band can be one group portrait. |
| Studio or place | 21:9 | `images/studio.svg` | About page only. |
| Favicon and Open Graph | 64px and 1200 by 630 | `illustrations/mark.svg`, `illustrations/og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt` (empty when a title next to it already names it), `width` and `height`. Do not lazy-load covers in the first two screens; rails scroll sideways and lazy images inside them can stay blank.

## With an image tool

Ask for: "square album or podcast cover art, flat graphic shapes, one bold idea: [subject], saturated [main color] gradient background with [two accent colors], subtle print grain, no text, no letters, no logos, no faces, centered composition that still reads at thumbnail size". For portraits of fictional people, prefer silhouettes or backs of heads; never generate a likeness of a real musician or host.

## Without an image tool

Draw covers as SVG, like the template does: a `<linearGradient>` or `<radialGradient>` background in the main color, two to four shapes (`<circle>`, `<rect rx>`, `<path>` with simple curves), one detail in an accent color, and a noise layer (`<feTurbulence>` with a low-opacity color matrix). Keep each file under about 1.5 KB and the palette to four or five colors. The template's covers are examples to copy and recolor; give each new cover a different main color so rails look like a varied shelf.

## Photos

When the user supplies real cover art, portraits or venue photos:

- Use their covers exactly as delivered; do not crop text off a cover or add filters. Pick the tint from the cover's main color.
- Crop portraits square with the face in the upper middle so the circle does not cut the head.
- Never use covers, logos or photos of real artists, labels or shows the user does not own, and never hot-link images from other sites or streaming services.
