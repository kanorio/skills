# Pictures and images

Photographs carry this style, and they are always taken after dark. Every picture should look as if one photographer shot the whole set on the same few nights.

## The photographic language

- **Time:** night or blue hour. Long exposures, so lights draw trails and the sky fills with stars. Never daylight, except the cold blue minute before sunrise.
- **Place:** a wide, empty, flat ground (dry lakebed, salt flat, desert floor, open field, beach or car park at night) with a low horizon, a faint ridge or skyline and a lot of sky.
- **Light:** the art is the light source. Warm amber, ember orange and soft pink against a cold blue-violet sky; one or two cooler accents (cyan, violet) at most. Glow and a little haze around lights are welcome.
- **People:** small silhouettes for scale, seen from behind or in profile, often rim-lit by the art. Never posed at the camera, never close-up faces unless the user supplies photos of their own people with permission.
- **Grade:** deep blacks, gentle grain, no HDR, no teal-and-orange crush, no added vignettes or borders in CSS.
- **Never:** text, logos or watermarks inside photos; daytime crowd shots as decoration; stock smiles; photographs of real artworks, artists or events the user did not supply.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Home hero | 16:9 on desktop, cropped tall on phones | 2000 x 1125 | `.hero > img` | Put the subject in the right half and the middle third, so the headline on the left and the phone crop both work. |
| Band photo | any, cropped tall | 1600 x 1000 | `.band-photo` | Shown with a torn right edge, rising into the hero; hidden below 760px. A long path or field of lights works best. |
| Banner | wide | 1600 x 1000 | `.banner > img` | Keep the left third dark and calm for the headline. |
| Card | 4:3 | 1600 x 1000 | `.card .ph` | Subject centered; the crop takes the sides. |
| Feature, slider | 1:1 and 16:7 | 1600 x 1000 | `.feature .ph`, `.slide` | The slider caption covers the bottom third; keep the subject above it. |
| Work page | wide | 1600 x 1000 | `.work-hero` | The same file as the work's card. |
| Article | wide, then 16:10 | 1600 x 1000 | `.article-photo`, `.prose figure` | |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Night sky, one peach torn band, the brand mark and name. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("Fire bowls burning in a spiral, sparks rising"), not what it means; card pictures inside a link that already names the work use `alt=""`. Do not add `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip lazy images); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this language, original and free to use: a lattice tower lit from inside (`tower`), a field of lanterns (`lanterns`), a tunnel of neon rings (`rings`), fire bowls in a spiral (`fire`), a glowing dome (`dome`), bicycle light trails around a lamp (`trails`), a crew raising a frame at dawn (`dawn`), a fire spinner over a seated crowd (`spin`) and a steel flower at dusk (`flower`). They are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject:

> Long-exposure night photograph on a wide empty desert lakebed, [subject], warm amber and ember light against a deep blue-violet starry sky, low horizon with a faint mountain ridge, small silhouetted people for scale, soft glow and light haze, deep blacks, fine grain, no text, no logos, no recognizable faces.

Subjects that suit the style: a lattice tower glowing from inside; thousands of small lanterns on stems; a row of neon arches; fire bowls in a spiral; a dome lit from within; bicycles drawing light trails; a fire spinner and a ring of people; a crew raising a timber frame under work lights before sunrise; a giant flower sculpture at dusk; a lit art car crossing the flats; a lantern procession. Generate at the source size, crop to the slot, and check the set side by side: same sky, same warmth, same grain.

## Without an image tool

Keep the template's stand-ins, or render new ones the same way: a gradient night sky with stars, a dark ridge, a dark ground, one glowing subject drawn with additive light and a soft blur, small silhouettes, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos or artwork from a real festival, artist or organization unless the user supplies them with permission.

## Brand mark and favicon

- The mark (`#mark` in the sprite) is a ring with a small peach flame and a short base line, drawn in `currentColor` so it works on the black header and in the footer. Replace it with the user's logo at the same 42px height, keeping the name in Bitter 800 and the small uppercase line beside it.
- The favicon (`illustrations/mark.svg`) is the same mark on a dark rounded square.
