# Pictures and images

Photographs carry this style. The page around them is almost empty on purpose, so every picture has to look as if one photographer made all of them on one quiet trip.

## The photographic language

- **Light:** natural only. First light, overcast noon, or the last half hour of the day. Soft shadows, no flash, no lamps as the main light except at dusk.
- **Colour:** low saturation, warm neutrals, a lifted matte black. Stone, limewash, cedar, slate-blue water, sage grass. One grade across the whole set; never teal-and-orange, HDR or heavy vignettes.
- **Composition:** one subject and a lot of nothing: a horizon, a bed facing a window, a bowl on a tray, a path. Leave a third of the frame empty. Level horizons, eye-level or slightly low, no wide-angle distortion.
- **People:** rarely, small in the frame, seen from behind or in passing. Never posed at the camera.
- **Never:** text, logos or watermarks in pictures; drone shots of crowded pools; champagne toasts; stock smiles; rounded corners, frames or shadows added in CSS.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Home hero | about 16:9 on desktop, 4:5 on phones | 2400 x 1600 | `.hero-media` | Keep the subject in the middle third so both crops work; a calm sky helps. |
| Pair picture | 3:2 | 1800 x 1200 | `.g12 .ph` | One room or one detail. |
| Card | 4:5 (`.tall`) or 3:2 | 1200 x 1500 or 1500 x 1000 | `.card .ph` | 3:2 sources are cropped to the centre in 4:5 slots, so keep the subject centred. |
| Wide picture | 21:9 | 2400 x 1030 | full-bleed `.ph` | A horizon or a long pool; it is shown edge to edge. |
| Room row and room gallery | 3:2, 16:9 | 2400 x 1350 | `.room .ph`, `.gallery-main` | The first gallery picture is the room itself. |
| Article | 16:9 wide, 3:2 inside | 2400 x 1350 | `.article-wide`, `.prose figure` | |
| Thumbnails | 3:2 | the same files | `.thumb` | |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Limewash, the wordmark and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A long stone bath under a high window, steam rising into the light"), not what it means. Card pictures inside a link that already names the place use `alt=""`. Do not add `decoding="async"` or `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip them); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this photographic language (a misty headland, two rooms facing sea and forest, a stone bath, a long pool, a cove, a boat in mist, a table at dusk, a house at dusk, cedars in fog, stone steps, a tea bowl, a limewash wall). They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject:

> Quiet editorial travel photograph, [subject], soft natural light, early morning haze, muted warm neutral colours, low saturation, matte blacks, generous empty space, level horizon, shot on a 50mm lens, no people facing the camera, no text, no logos.

Subjects that suit the style: a low bed facing a wall of glass and a pale sea; cedar trunks in fog; a stone bath with steam under a high window; a long pool running to the horizon; a wooden tray with a tea bowl; stone steps through long grass; a limewashed wall with the shadow of a branch; a single boat on still water; a long table at dusk with one lamp. Generate at the source size, crop to the slot, and check the set side by side: same light, same grade.

## Without an image tool

Keep the template's stand-ins, or make new ones in the same way: a few soft shapes, a gradient sky or wall, one subject, muted warm colours, and lots of empty space, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos or artwork from a real hotel, photographer or brand unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the brand name in the serif, uppercase, letter-spacing 0.5em (`.brand`). If the brand has a real logo, put its SVG inside `.brand` at the same height (about 22px) and keep the space around it.
- The favicon (`illustrations/mark.svg`) is a limewash square with two or three thin charcoal lines (the sample draws a horizon and a rising sun). Keep it that simple.
