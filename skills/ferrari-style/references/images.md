# Pictures and images

Photographs are the only decoration in this style. The interface is black, white and one red; the pictures bring the paint, the light and the feeling of speed. Every picture should look as if it was taken in the same dark studio or on the same night.

## The photographic language

- **Light:** low and hard. One overhead softbox or strip light in a black studio, floodlights at night, a single warm lamp. Most of the frame is black; the subject is drawn by highlights along its edges and reflections in its surfaces.
- **Subjects:** the product whole and in profile, and the product in close-up: a wheel and brake, a dial, a light strip, stitching, carbon weave, a gear lever, a watch movement, a buckle. Motorsport at night: light trails, start lights, rain on a track.
- **Colour:** neutral blacks, true paint colours in the highlights, no tint on the shadows. Red appears in the pictures as paint, lamps and stitching, which echoes the interface red.
- **Composition:** product shots are side profiles or three-quarter views on a reflective floor with space above; close-ups fill the frame with shallow depth of field. Keep the bottom third quiet when words will sit on it.
- **People:** rarely; a gloved hand, a driver from behind, a mechanic at work. Never posed smiles at the camera.
- **Never:** daylight stock, white seamless backgrounds, busy streets, text, watermarks or logos in the picture, rounded corners, frames or shadows added in CSS.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Home hero | fills the first screen (about 16:9 on desktop, cropped to 9:16 on phones) | 2400 x 1350 | `.hero > img` | Keep the subject in the upper two thirds and the middle half, so the phone crop and the words both work. |
| Page hero | about 21:9 | 2400 x 1030 | `.page-hero > img` | Racing, heritage, dealers, the article. Dark at the bottom. |
| Model stage and paints | 16:9 | 1600 x 900 or larger | `#m-img`, `.model-row .ph`, `.card .ph` | One picture per model and paint, all shot from the same angle and distance so a swatch only changes the colour. |
| Tiles | 4:3 or 16:9 | 1400 x 1050 | `.tile > img` | Edge to edge, words centred low. |
| Details | 4:3 | 1400 x 1050 | `.details .ph` | Close-ups. The first one is shown tall, so keep its subject centred. |
| Cards (news) | 16:9 | 1600 x 900 | `.card .ph` | The featured card shows 4:3. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Black, the wordmark, a short red rule and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A red mid-engined coupé in a dark studio, its roofline caught by one light"), not what it means. Do not add `decoding="async"` or `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip them); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this photographic language: three invented car shapes in a dark studio, each in three paints (`gt-*`, `mid-*`, `spider-*`), a hero crop (`hero`), close-ups (`wheel`, `dial`, `lamp`, `leather`, `carbon`), night scenes (`trails`, `lights`, `rain`), a car under a cover (`cover`), a pencil drawing under a lamp (`sketch`) and a dark showroom (`hall`). They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply. They are not real cars and must not be presented as a real product.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject:

> Low-key product photograph, [subject], black studio, single overhead softbox, crisp highlights along the edges, glossy reflective floor, deep blacks, true colours, shallow depth of field for close-ups, no people facing the camera, no text, no logos, no badges.

Subjects that suit the style: a sports car in side profile under one strip light; the same car in three paints from the identical angle; a wheel and brake caliper in close-up; an analogue dial with a red needle; a thin light strip in a body panel; quilted leather with contrast stitching; woven carbon fibre; light trails through a floodlit bend; five red start lights; rain on a track at night; a car under a cover; a pencil drawing on a workbench. For a watchmaker: a movement under a loupe, a case side in profile, a dial in low light. For a hotel or a yacht: a suite at night lit by one lamp, a hull at dusk, a pool lit from inside. Generate at the source size, crop to the slot, and check the set side by side: same studio, same light.

Never generate a real brand's car, badge, livery or logo, and never use a real model name in a prompt.

## Without an image tool

Keep the template's stand-ins, or make new ones the same way: a black background, one soft light, the subject drawn by a few highlights, a reflection on the floor, and grain, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos or artwork from a real maker, team or photographer unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the brand name in Archivo 800 at 125% width, uppercase, letter-spacing 0.32em (`.brand`). If the brand has a real logo, put its SVG inside `.brand` at about 18px tall, in `currentColor` so it works in both themes.
- The favicon (`illustrations/mark.svg`) is a black square with a white letterform and a short red rule. Keep it that simple: no shields, crests or animals.
