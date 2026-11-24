# Pictures and images

The page is white, ink and gray; pictures bring the color and the sense of place. On a news page they also carry trust: they must show what the story says happened, and be credited.

## The visual language

One picture desk, one way of seeing:

- **Documentary news photography.** Real places and people at eye level, in available light: overcast daylight, dusk, streetlights, a lit window. The subject fills the middle third of a 16:9 frame so it survives a thumbnail crop.
- **Color:** natural and slightly muted, with one warm light source where there is one (a lamp, an oven, a lit cabin). No heavy filters, no single tint across all pictures.
- **People:** small in the frame doing the thing the story is about (a crew on a pier, traders under a market roof), not posing for the camera. Faces only with consent; children never identifiable without it.
- **Never:** stock photos of handshakes or people pointing at screens, staged smiles, text or logos baked into a picture, frames, rounded corners, drop shadows, or a picture that suggests a different event from the one reported.

The template's pictures are original placeholder illustrations drawn in that language (muted documentary scenes with a soft vignette and fine grain) so the layout reads like a news page before real photographs arrive. Replace them with the user's photographs; keep the same crops.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Lead story | 16:9 | 1600 x 900 | `.lead .media` | The strongest news picture of the day, with a credit. |
| Article hero | 16:9 | 2000 x 1125 | `.art-hero` | Same picture as the lead when they match; caption under it, credit on it. |
| Cards, section pages, watch | 16:9 | 1200 x 675 | `.card .media`, `.sec-lead .media`, `.player` | Video and audio cards add a `.badge` with the duration. |
| Inline figure | 16:9 | 1280 x 720 | `.prose figure` | A second picture or a video inside the text, with a caption. |
| Live header | 16:9 | 1200 x 675 | `.live-top .media` | A picture from today, credited. |
| People | none | none | `.avatar` | Initials in a circle. Use real portraits (square, cropped to a circle) only when the user supplies them. |
| Podcast covers | 1:1 | none | `.cover` | Type on a single deep color (`--c`); no picture needed. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | The wordmark plate on white and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Card pictures that sit beside their own headline are decorative (`alt=""`; a picture link gets `aria-hidden="true"` and `tabindex="-1"`), because the headline link already names the story. Lead, hero, live and inline pictures get real alt text that says what is in the picture. On a built site, add `decoding="async"` and `loading="lazy"` to pictures below the first screen; the template keeps them eager so full-page preview screenshots render.

Captions are one plain serif sentence under the picture; credits ("Calver Daily", "Photograph: Name", "Supplied") sit in the dark box on the bottom-right corner.

## Prompts for an image tool

Use these only for illustrative or feature pictures, never as evidence of a real event. Label generated pictures as illustrations in the caption.

- Base: "Documentary photograph, eye level, natural available light, muted realistic color, 16:9, subject in the middle third, people small in the frame and not looking at the camera, no text, no logos."
- Add the scene: "a passenger ferry with lit windows leaving a small harbour at dusk", "traders setting up stalls under an iron and glass market roof on an overcast morning", "a tram with its headlights on in light rain on a city street", "a brick oven glowing in a bakery at night with loaves on shelves".

## Without an image tool

Keep the template's placeholder illustrations, or draw new SVG scenes in the same manner: a 160 x 90 viewBox, a vertical sky gradient, two or three silhouette layers that get darker toward the front, one warm light, a radial vignette and a fine noise grain. Name each file after its subject and add it once to `<template id="pics">`. List every placeholder in your reply so the user knows which pictures to replace. Never hot-link photographs from other sites or stock libraries.
