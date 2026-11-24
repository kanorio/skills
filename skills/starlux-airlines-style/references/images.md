# Pictures and images

The photographs set the mood more than anything else on the page: they are cinematic, taken at blue hour or at night, and they all look as if one cinematographer graded them for the same film.

## The photographic language

- **Light:** blue hour, dusk, night, or soft overcast for the occasional daylight scene. Practical lights in the frame (lanterns, windows, a lamp, a candle) are warm amber; everything else is cool.
- **Colour:** deep teal shadows, slate and violet skies, amber highlights; one daylight picture in turquoise and white is allowed for contrast. One grade across the set; no high saturation, no HDR.
- **Composition:** wide and calm, one subject placed off-centre with room for words: a lodge at the end of the water, a train on a viaduct, a tent in the dunes, a table, a lamp. Keep the lower third of hero pictures dark and quiet, because the words sit there.
- **People:** rare and never posed at the camera; seen from behind, in silhouette, or as a hand on a glass.
- **Never:** text, logos or watermarks inside pictures; aircraft cabins, liveries or uniforms of a real company; harsh flash; bright midday stock as the main mood.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Slide | about 16:10 on desktop, 9:16 crop on phones | 2400 x 1500 | `.slide > img` | Keep the subject in the right half and the lower third dark; on phones the centre is kept. |
| Page hero | 16:10, shown wide and short | 2400 x 1500 | `.page-hero > img` | Centred words: the middle of the frame should be calm. |
| Place square | 1:1 crop | the slide files | `.sq-card .ph.sq` | The crop is from the centre. |
| Card | 4:3 | 1600 x 1200 | `.card .ph` | |
| Note card | 16:9 | 1600 x 900 | `.note-card .ph` | |
| Duo | 3:2 | 1800 x 1200 | `.duo .ph` | |
| Row | 3:2 | 1800 x 1200 | `.split .ph` | |
| Overlap band | wide, dark at lower left | 2400 x 1500 | `.overlap > img` | The note covers the lower left. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Night teal, the mark, the wordmark and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A night train with lit windows crossing a stone viaduct under a full moon"); square place pictures inside a link that already names the place use `alt=""`. Do not add `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip lazy pictures); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this photographic language (a fjord at blue hour, a lantern-lit canal, a lagoon with a jetty, dunes under stars, snow peaks over a lodge, a night train on a viaduct, a lounge with lamps, a candlelit table, a bedroom over a harbour, a boat at dawn, a harbour skyline, an atoll from the air, a curved timber wall with a line of light, an amber drink at a bar). They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject:

> Cinematic travel photograph at blue hour, [subject], deep teal shadows, warm amber practical lights, calm composition with empty space in the lower third, soft film grain, anamorphic feel, no people facing the camera, no text, no logos.

Subjects that suit the style: a lodge lit at the end of a fjord; a canal at night with lanterns on a bridge; a night train on a viaduct under the moon; dunes under the Milky Way with one tent glowing; a lounge with conical lamps over leather chairs; a candlelit table for two; a tall window over harbour lights; a boat on still water at dawn; a jetty across a turquoise lagoon under soft cloud. Generate at the source size, crop to the slot, and check the set side by side: same grade, same warm-against-cool light.

## Without an image tool

Keep the template's stand-ins, or make new ones the same way: a gradient sky from deep teal to a warm horizon, dark silhouettes, a few amber lights with a soft glow, reflections in water, and light grain, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos, aircraft, uniforms or artwork from a real airline, hotel, photographer or brand unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the brand name in Urbanist, uppercase, letter-spacing 0.36em, after the small mark (`.brand`). If the brand has a real logo, put its SVG inside `.brand` at about 26px tall and keep the space around it.
- The favicon (`illustrations/mark.svg`) is a night-teal rounded square with one champagne shape (the sample draws a crescent and a small dot). Keep it that simple; the same shape is the `#i-mark` symbol in the page.
