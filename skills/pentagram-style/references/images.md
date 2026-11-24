# Pictures and images

The work is the content. The interface is black, white and grey so that every picture can bring its own colour, and so a poster, a jar, a building and a website can sit side by side on the wall without arguing.

## The picture language

- **What is shown:** finished work, photographed or rendered as an object in use: a poster on a wall, a jar on a table, a sign above a door, a book open on a desk, a page on a screen. One subject per picture, usually centred, filling most of the frame.
- **Light:** even and soft, as in a studio shoot: a seamless background, a gentle shadow under objects, no dramatic spotlights.
- **Colour:** whatever the work is. Backgrounds are a single flat colour taken from the project (green behind the garden identity, yellow behind the typeface), or a neutral paper grey.
- **Set together:** each project has its own colour, but the whole wall shares one way of shooting: front-on or straight down, centred, the same amount of space around the subject.
- **People:** portraits of the team in black and white, shoulders up, plain background, one light. Work pictures rarely need people; when they do, keep them small and in use (someone reading a sign), never posing.
- **Never:** mock-up clichés (floating phones over gradients, hands holding business cards), text added on top of pictures, rounded corners, frames, shadows or colour overlays from CSS.

## Slots and ratios

Pictures are cropped by `object-fit: cover`, so every source should keep its subject in the middle third.

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Wall tiles | from 3.2:1 to 1:1.3 | 1800 x 1800 | `.wall .wa` … `.wg` | Square sources crop well into every tile; the wide 2x1 tile shows only the middle band. |
| Tile, third or half | 3:2 | 1800 x 1200 | `.tile .ph` | |
| Tile, tall | 4:5 | 1440 x 1800 | `.tile.tall .ph` | |
| Band cards | 4:5 | 1440 x 1800 | `.cards .ph` | |
| Project hero | 16:9 (4:3 on phones) | 2400 x 1350 | `.p-hero` | The best single picture of the work. |
| Project detail | 4:5 | 1440 x 1800 | `.crop` | The template zooms into the hero (scale 1.9). With real photography, use a separate close-up instead and remove the `crop` class. |
| Studio and article pictures | 21:9 (4:3 on phones), 3:2 | 2400 x 1030 | `.wide`, `.prose figure` | The studio itself: a desk, a wall of proofs, a workshop. |
| Portraits | 4:5 | 1200 x 1500 | `.people .ph` | Black and white. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | White, the wordmark, a strip of work. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. In the work grid, `alt` describes the work ("Three jars of red, yellow and green ferments with cream labels"), because the project page reuses it for the hero. Pictures inside links that are already named by a caption or label use `alt=""` (the wall, the home tiles, the band cards). Do not add `loading="lazy"` or `decoding="async"` in a single-file delivery; on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each.

## The sample pictures

`assets/illustrations/*.svg` are original flat drawings standing in for photographs of work: a seed-shaped garden mark, three opera posters, jars of ferments, a constructed capital R, a ferry emblem over waves, library shelves under a hanging sign, record sleeves, a market awning, fanned book covers, a cinema website on a laptop and a phone, an observatory exhibition, three terraced houses, a studio desk, six abstract black and white portraits, the favicon mark and the Open Graph image. They are free to use, but they are placeholders: replace them with the user's own work before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available and the user has no photographs yet, keep one base prompt and change only the subject:

> Studio product photograph of [subject], centred, front-on, on a seamless [colour] background, soft even light, gentle contact shadow, crisp detail, no people, no added text, no logos of real brands.

Subjects that suit the style: a series of three posters pinned to a pale wall; glass jars with hand-set labels; a hanging wayfinding sign above shelves; record sleeves overlapping on a table; a book open to a spread; a shop front at dusk with its sign lit; a phone and a laptop showing the same page. Generate at the source size and check the set side by side: same angle, same light, same amount of space around the subject.

Never generate the user's actual logo or work: those must come from the user.

## Without an image tool

Keep the template's drawings, or draw new ones the same way: a flat project-coloured ground, one object made of simple shapes, a soft shadow, a little vignette, saved as files in `illustrations/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos or work from a real studio, client or photographer unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text in the same family: the name at 22px, weight 500, letter-spacing -0.035em, after a 20px mark (`#i-mark`, four blocks in the corner of a square). If the brand has a real logo, put its SVG in `.brand` at about 22px tall and drop the mark.
- The favicon (`illustrations/mark.svg`) is the same mark in white on a black rounded square.
