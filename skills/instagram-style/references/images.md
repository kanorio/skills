# Pictures and images

The photographs are the colour of the whole site. The page around them is white, grey and ink, so the set has to look like one feed: different subjects, one photographer, one light, one grade.

## The photographic language

- **Light:** natural and directional. Low sun, the blue hour, window light, fog. No flash, no studio backdrops.
- **Colour:** warm highlights and cool shadows, gently lifted blacks, a fine grain. One grade across the set; never HDR, neon or heavy filters.
- **Composition:** portrait 4:5, one subject with room around it, the horizon low or high but never in the middle. Shoot so the middle 4:5 crop still works as a 9:16 story crop (keep the subject in the central column).
- **People:** in their own places (a bench, a doorway, a beach), seen from the side or behind, or looking away. Faces only in the user's own pictures, with permission.
- **Never:** text, logos, watermarks, borders or collages inside a picture; screenshots of apps; stock smiles.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Grid tile | 4:5 | 720 x 900 | `.tile img` | Cropped with `object-fit: cover`. The alt is the title, because the tile link has no other text. |
| Post | 4:5 | 1080 x 1350 for a deployed site; 720 x 900 in the single file | `#p-img` | The alt describes what is in the picture. |
| Story card | 9:16, cropped from the same 4:5 file | the same files | `.story > img` | Keep the subject in the middle third. |
| Highlight and avatar | 1:1, cropped round | the same files | `.hl .av img`, `.ring .av img` | Pick pictures with one clear shape that reads at 78px. |
| Print | 4:5 on a paper mat | the same files | `.mat img` | Shown with a 10% white border and a soft shadow. |
| Journal | 4:5 | the same files | `.post-card img`, `#a-img` | |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | White, the wordmark, the headline with its gradient phrase, three tilted story cards and a heart sticker. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Decorative copies (the fan, highlight circles, avatars, story backgrounds) use `alt=""`. Do not add `loading="lazy"` or `decoding="async"` in a single-file delivery (full-page captures skip lazy pictures); on a deployed site, lazy-load everything below the first screen. Export WebP or AVIF under 150 KB at 720 wide.

## The sample pictures

`assets/images/*.webp` are 18 rendered stand-ins in this language, all 720 x 900: a harbour at dawn, a lighthouse at dusk, fishing floats on a shed wall, a ferry in fog, a portrait by a window, a figure in a yellow coat on a sea wall, a child with a kite, an older couple on a bench, waves, a rock pool, beach huts, dune grass, footprints, a pier at sunset, quay lamps at night, a lit ferry at dusk, walkers on a cliff path and a figure in a foggy field. They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply. The file name is the photograph's `id`.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject:

> Natural documentary photograph, [subject], [low sun / blue hour / window light / fog], warm highlights and cool shadows, slightly lifted blacks, fine film grain, subject in the central third, 35 mm lens, no visible faces, no text, no logos, vertical 4:5.

Subjects that suit the style: whatever the user sells or does, photographed in its own place. A potter's hands at the wheel by a window; a loaf on a counter in morning light; a shop shelf from the doorway; a couple on a bench at golden hour; a street at the blue hour; a plant on a sill in fog. Check the set side by side as a three-column grid: same light, same grade, no two neighbours alike.

## Without an image tool

Keep the template's stand-ins, or make new ones the same way: a simple scene in flat shapes, a soft gradient sky, one subject, a vignette and a little grain, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder in your reply.

Never hotlink stock photos, and never use photographs, logos or artwork from a real photographer, shop or brand unless the user supplies them with permission.

## Mark, avatars and favicon

- The mark is a round sunset: the gradient circle with a white sun and a white wave (`#i-mark`, `illustrations/mark.svg`). Draw the user's own simple round mark in the same way, or put their real logo in `.brand` at 32px. Never put the logo itself in the gradient unless it already is.
- The profile avatar is a round crop of the most recognizable photograph. People without a photograph are initials in a coloured circle (`.av.ini`, colour in `--av`), always inside a ring.
- The favicon is the round mark.
