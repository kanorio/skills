# Pictures and images

The story cards are the design: tall, saturated, close-up photographs that look like they were taken on a phone a minute ago. The page around them is white and grey so they can be loud.

## The photographic language

- **Device:** shot vertically on a phone, at arm's length or closer. First person and over the shoulder, not posed portraits.
- **Light:** whatever was there: disco light, golden hour, a window, string lights, a camera flash at night. Strong colour is welcome; blown highlights are fine.
- **Colour:** saturated and warm, one strong colour per picture (violet, coral, mint, lemon, sky blue) so a wall of cards looks lively but not muddy.
- **Composition:** the subject sits in the lower two thirds; the top third is calm (sky, wall, ceiling, darkness) because the card's big white line goes there. Leave the bottom centre clear for the pill.
- **People:** hands, feet, backs and silhouettes; faces only in the user's own pictures with permission.
- **Never:** text, logos, watermarks, stickers or face filters baked into a picture; screenshots of real apps; stock smiles.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Story card | 4:7 (cropped from 9:16 is fine) | 720 x 1260 | `.story img` | Calm top third, subject low. `alt=""`: the card's line names it. |
| Lens tile | 3:5, cropped | the same file | `.lens .media img` | Descriptive alt; it is also the viewer's alt. |
| Viewer | 9:16, cropped and pushed in per snap | the same file | `#v-img` | Pick pictures that survive a 1.3x crop low and to the left. |
| Night card | 4:5, cropped | the same file | `.night .media img` | Descriptive alt; the date chip covers the top left corner. |
| Product | 4:5 | 720 x 900 | `.prod img`, `#i-img` | One object on a soft single-colour sweep, centred, a soft shadow below. |
| About strip | 4:5, three in a row | the story files | `.strip img` | Three different moods. |
| Visit map | 4:5 or wider | 720 x 1260 | `.visit img` | A drawn map with a pin, or a photo of the entrance. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | White, the mark, the H1 in heavy type, a yellow pill and four tall coloured cards. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Do not add `loading="lazy"` or `decoding="async"` in a single-file delivery (full-page captures skip lazy pictures); on a deployed site, lazy-load everything below the first screen. Export WebP or AVIF under 150 KB each at 720 wide.

## The sample pictures

`assets/images/*.webp` are original rendered stand-ins: ten 720 x 1260 scenes (`mirrorball`, `dj`, `firststeps`, `family`, `sunset`, `lights`, `birthday`, `wheels`, `skatewall`, `map`) and eight 720 x 900 product shots (`p-*.webp`). They are free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject:

> Vertical phone photo, 9:16, [subject], shot from close up, [light: disco lights / golden hour / window light / string lights at dusk / camera flash], saturated warm colour, slight motion blur, calm empty top third, subject in the lower half, no faces, no text, no logos, no stickers.

For products: "Studio product photo, 4:5, [one object], centred on a soft [colour] paper sweep, soft shadow below, no text, no logo."

Generate the four home cards first and look at them side by side: one strong colour each, all different.

## Without an image tool

Keep the template's stand-ins, or draw new ones the same way: an SVG scene at 720 x 1260 (a gradient background, a few blurred light shapes, one simple subject in the lower half, a dark vignette), rasterised to WebP so it can be swapped for a photograph later. Reference them with `<img>` like photographs. List every placeholder in your reply.

Never hotlink stock photos, and never use photographs, logos or artwork from a real photographer, venue or brand unless the user supplies them with permission.

## Mark, avatars and favicon

- The mark (`#mark` in the sprite, `illustrations/mark.svg`) is a 36px yellow circle with one simple black shape. If the brand has a logo, put its SVG in `.brand` at the same size and keep the circle only if it fits the logo. The wordmark (`.brand span`) is hidden by default and can be shown when the mark alone is not recognisable.
- People are initials in a coloured circle (`.av[data-u]`, colours in `--av-*`); on About they get a yellow ring. Use real portraits only when the user supplies them; keep them round.
