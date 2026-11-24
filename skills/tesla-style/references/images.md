# Pictures and images

This style is picture first: every product moment is a full-screen picture with almost nothing on top. The interface has no colour of its own, so the pictures carry the mood.

## The photographic language

One photographer, one way of looking:

- **Products in place:** the product seen square from the side or at a low three-quarter angle, small enough to leave sky above it for the name and ground below it for the buttons. Shot at dusk, at the blue hour or under a flat bright sky, never in harsh midday sun.
- **Places:** wide, empty and calm: a coast road, a mountain pass, a city street at night, a desert track, a house with a clean roof line. Level horizons, no people, no other brands.
- **Studio:** a dark gray wall and floor with a soft pool of light, for lineups and the final call to action.
- **Details:** the cabin from the seat, a charger, a battery on a wall, panels on a roof. One subject, filling the frame.
- **Color:** natural and slightly cool, with one warm accent (a low sun, a lit window). No filters, no duotones, no text or logos in the picture.
- **Tone:** every full-screen picture is either clearly dark or clearly light at the top and bottom, where the text sits. Mark it with `data-tone="dark"` or `"light"` on the panel; the header and the text follow it.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Full-screen panel | 16:10, cropped to fill | 2400 x 1500 | `.panel .media` | Keep the top fifth calm for the name and the bottom fifth calm for the buttons. Phones crop to the middle third; keep the subject there. |
| Product on a panel | 3:1 drawing or cut-out | 1800 x 600 | `.panel .car`, `.cat .car` | Sits on the picture's ground line. Use a transparent PNG or WebP cut-out of the user's product, or the template's drawings. |
| Lineup card | 16:10 (4:5 on phones) | 1600 x 1000 | `.cat .media` | Studio or a calm place; the product is laid over it. |
| Split section | 4:3 to 16:10, cropped | 1600 x 1200 | `.split > img` | Detail pictures: cabin, charger, battery, roof, material. |
| Feature bleed | 16:10, cropped | 2400 x 1500 | `.feature-bleed .media` | Dark at the bottom left for the caption. |
| Tiles | 16:10, cropped | 1200 x 750 | `.tile .media` | Dark at the bottom for the white text. |
| Configurator and cards | 3:1 drawing | none | `#cfg-car`, `.inv .car`, `.mega-car .car`, `.car-pick .car` | Must change colour: use the drawings, or one cut-out per colour swapped by the script. |
| Map | 4:3 | 1200 x 900 | `.map img` | A simple drawn plan; pins are placed in percent. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Dark studio, the product, the wordmark. Export PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Do not use `loading="lazy"` on full-screen panels; use it only far below the first screen. Alt text describes the scene ("A white SUV below snowy peaks at the blue hour"); background pictures behind a described drawing get `alt=""`.

## The product drawings

The template draws its products as flat side views in the SVG sprite: `#car-sedan`, `#car-suv`, `#car-compact` and `#car-pickup`, each in a 600 x 200 box with the ground at the bottom, and `#wheel` with two rim designs.

- The body is `currentColor`, so a paint class on the `<svg class="car paint-…">` repaints it. Add a paint by adding a `.paint-<name>` class and a swatch with the same colour.
- `wheels-sport` on the `<svg>` switches the rim design through the `--aero` and `--sport` custom properties.
- Glass, lights, tyres and the ground shadow are fixed colours, so any paint reads correctly.
- For another product (an e-bike, a scooter, a camper, a battery, a speaker), draw a new `<symbol>` in the same 3:1 box: a simple side view built from a few shapes, the main body in `currentColor`, details in two or three fixed grays, one light accent. Never trace a real model's silhouette, grille, badge or logo.

## Generating pictures

When an image tool is available, keep one prompt pattern per role so the set looks like one shoot:

- Panel: "Wide landscape photograph of [an empty coast road] at [dusk], level horizon, calm sky in the top fifth, empty road surface in the bottom fifth, natural slightly cool colors, no people, no vehicles, no text."
- Product cut-out: "Studio product photograph of [the user's product], side view, even soft light, on a plain background, no reflections, no text, no logos." Remove the background before use.
- Studio: "Empty dark gray photo studio, seamless wall and floor, a soft pool of light on the floor in the center, no objects, no text."
- Detail: "Photograph of [a slim battery mounted on a garage wall beside a charger], soft daylight, clean and tidy, natural colors, no people, no text."

Generate at the source size, crop to the slot ratio, export WebP or AVIF under 400 KB for full-screen pictures and 200 KB for the rest.

## Without an image tool

The template's pictures are flat geometric scenes: bands of colour for the sky, simple shapes for mountains, buildings and roofs, a plain ground line for the product to stand on, and one warm accent. Make new ones the same way as SVG files in `images/` and reference them with `<img>` so they can be swapped for photographs later. Tell the user which pictures are placeholders.

Never hot-link stock photos, and never use photos of a real vehicle, product, place or person unless the user supplies them with permission.

## Brand mark and favicon

- The wordmark is text: the brand name in capitals, 600 weight, spaced 0.42em. Replace it with the user's own logo as inline SVG at 16 to 20px tall, colored by `currentColor` so it follows the header's tone.
- The favicon is a simple mark in white on a carbon rounded square.
