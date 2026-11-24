# Pictures and images

Two kinds of picture carry this style: **product renders** on a transparent background, which sit on oat cards and inside the hero panel, and **warm lifestyle photographs** for the story cards, the journal and the about page. Both share one warm, soft, low-contrast grade, so they belong to the same room.

## The photographic language

- **Light:** soft and warm, from a window to one side or a lamp at dusk. Gentle shadows, no flash, no hard midday sun.
- **Colour:** oat, sand, cream, walnut, amber glass, a little sage. Low saturation, lifted blacks. One grade for the whole set; never cold blue, teal-and-orange or HDR.
- **Composition:** close and calm. One subject: a jar on stone, a bath with steam, linen on a bench, a candle on a sill, hands at work. Leave the top quarter of story pictures quiet for the chip and the bottom third quiet for the caption.
- **Products:** shot straight on, slightly above the base, on a clean background removed to transparency, with a soft contact shadow kept under the object. The same lens height and lighting for every product, so a row of tiles lines up.
- **People:** welcome but close and unposed: hands, a shoulder, someone reading. Use the user's own photographs of people only; never stock models.
- **Never:** text, logos or watermarks inside pictures; floating 3D renders with neon light; stock smiles; borders or drop shadows added in CSS.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Hero render | about 20:9, transparent | 1600 x 720 | `.hero-media img` | Products in the middle third, a ribbon of fabric running edge to edge. It crops from the bottom centre, so keep the products low and central. |
| Product | 1:1, transparent | 800 x 800 | `IMAGES[id]` in the script; `.prod-media`, `#p-main` | The object stands on the lower fifth, centred, with a soft shadow; same scale across products. |
| Story card | 4:5 | 960 x 1200 | `.story img` | Quiet top and bottom for the chip and caption. |
| Journal card | 3:2 (cropped from 4:5 or 3:2) | 1200 x 800 or the story files | `.post-card .media img` | Keep the subject centred so a 4:5 file crops well. |
| Feature card | fills the ink band card | the story files | `.feature img` | Darkened at the bottom by the scrim. |
| Article | wide | 2400 x 1000 or the story files | `.wide img` | The subject sits in the middle band. |
| About pair | 4:5 | 1200 x 1500 | `.pair img` | Studio, process, people at work. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Oat panel, the mark and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A balm jar, a dropper bottle and a jar of bath salts resting on a fold of cream silk"). Pictures inside a link that already names the thing use `alt=""`. Do not add `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip them); on a deployed site, lazy-load pictures below the first screen. Export WebP (with alpha for renders) or AVIF, under 300 KB each.

Product image paths in the script are written out in full (`"images/night-balm.webp"`) in the `IMAGES` map so `scripts/inline.mjs` can embed them. Never build a path from a variable.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this language: eight product renders on transparent backgrounds (a balm jar, a dropper bottle, a jar of bath salts, a mist bottle, a tube, a soap on a dish, a candle in a stoneware cup, a soap dish), a hero render on silk, and six warm scenes (a bath under a window, soap and rosemary on stone, a candle at a dusk window, linen on a bench, a studio shelf, balm being poured). They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt per kind and change only the subject.

Products:

> Studio product photograph of [product], straight-on, slightly above the base, soft warm window light from the left, gentle contact shadow, warm oat background, low contrast, muted natural colours, no text on the label, no logos, centred with space around it.

Then remove the background to transparency and keep the contact shadow.

Lifestyle:

> Warm editorial lifestyle photograph, [subject], soft window light, oat and sand tones with walnut shadows, low saturation, shallow depth of field, calm and close, quiet space at the top and bottom of the frame, no text, no logos, no faces looking at the camera.

Subjects that suit the style: steam over a filled bath; a bar of soap on wet stone with a sprig of herbs; folded linen in morning light; a candle on a sill at dusk; hands pressing balm into a wrist; jars on a wooden shelf; a jug pouring into small jars; a mug and a book on a blanket. Generate at the source size, crop to the slot, and check the set side by side: same light, same grade.

## Without an image tool

Keep the template's stand-ins, or make new ones the same way: an SVG scene with soft gradients, a few simple shapes, one subject and the warm palette, rendered to WebP (transparent for products) and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, packaging, logos or renders from a real brand unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the brand name in the serif (`.brand`). If the brand has a real logo, put its SVG inside `.brand` at about 28px tall.
- The favicon (`illustrations/mark.svg`) is an oat rounded square with a simple charcoal line drawing (the sample draws a rising moon over a hill). Keep it that simple.
- `illustrations/chevron.svg` is the arrow inside selects; its mid-tone stroke reads on both themes.
