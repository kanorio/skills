# Pictures and images

Two kinds of picture live on this paper. **Ink washes** (the mountains, the bands, the map, the lotus) are part of the style and stay. **Content pictures** (dishes, gifts, rooms, people) belong to the user and always sit centred in a round fan.

## The washes and the lotus (keep them)

- `illustrations/mountains.svg` (1600 x 700): the hero landscape. Karst peaks left and right, a misty valley with water lines, a small boat and birds. The copy and the inscription stand in its empty sky.
- `illustrations/ridge.svg` (1600 x 280) and `far-peaks.svg` (1600 x 240): bands between sections and under page heads.
- `illustrations/lotus.svg` (640 x 640): one flower, one bud, leaves and reeds in watercolour.
- `illustrations/paper.svg`: the rice-paper fibre tile behind the light theme.

They are original SVG drawings built from SVG filters (turbulence, displacement and blur) over generated ridge lines and petal shapes, with no raster images inside. They render crisply at any width and turn into moonlit mist at night through the `--wash` filter. To vary them, change the ridge heights or the filter `seed` values; keep the grey ink, the fade into mist at the bottom and the transparent sky. Do not replace them with stock landscapes or another artist's paintings.

## Content pictures in fans

| Role | Fan size | Source | Where |
|---|---|---|---|
| Signature dish | 112px in the arc, up to 400px in the panel | square, the dish centred | `.dish-tab .fan`, `.stage-panel .fan` |
| Course | 220px (96px on phones) | square | `.course-side .fan` |
| Dish page | up to 480px | square, 1200 x 1200 | `.dish-hero .fan` |
| Card (gifts, pairings) | up to 260px | square | `.card .fan` |
| News row | 108px | square | `.news-row .fan` |
| Article | up to 420px | square | `.article-fan` |
| Story | up to 380px | square | `.quote-block .fan` |
| Open Graph | 1200 x 630 | paper, a wash, the wordmark and the seal | `og:image`; export PNG for production |

- **Photographs** go in `.fan.photo`: the picture fills the circle (`object-fit: cover`). Shoot or crop square, the subject in the middle third, on a plain pale surface: a plate from 30 degrees or straight above, a teapot on linen, hands folding on a floured board, a shopfront at eye level. Soft daylight, no flash, natural colour, nothing busy at the edges because the circle will cut them.
- **Drawings** go in `.fan` without `.photo`: a transparent SVG or PNG with the subject centred in a square canvas floats at 84 percent of the fan, like the template's `images/*.svg`.
- Keep one kind per page where you can: all photographs or all drawings.

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("Five soup dumplings on a celadon plate"). Pictures inside tabs or links that already name the dish use `alt=""`. Do not add `loading="lazy"` in a single-file delivery; on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 250 KB each.

## The sample pictures

`assets/images/*.svg` are original brush-and-wash drawings: soup dumplings on a celadon plate, wontons in chilli oil, beef noodles lifted with chopsticks, garlic greens, steamed buns on a leaf, rice balls in syrup, a clay teapot with two cups, a gift box with a red cord, a jar of chilli oil, a shopfront with lanterns, and wrappers with a rolling pin. They are placeholders: replace them with the user's photographs or new drawings and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject:

> [subject], centred in a square frame on a plain warm-white surface, soft diffused daylight, natural colour, shallow shadow, generous empty space around the subject, photographed from 30 degrees, no text, no logos, no hands unless asked.

For drawings instead of photographs:

> Chinese brush-and-ink line drawing with light watercolour washes of [subject], thin wavering ink outline, pale celadon and ochre washes, transparent background, subject centred in a square canvas, no text, no seal, no signature.

Subjects that suit the style: a plate of folded dumplings, a bowl of noodles with chopsticks, a pot of tea and two cups, a box tied with cord, a jar of chilli oil, hands pleating a wrapper, a steaming kitchen window, a scroll of calligraphy on a table, a tea bowl and whisk. Check the set side by side: same light, same surface.

## Without an image tool

Keep the template's drawings, or draw new ones the same way: a few simple shapes for the plate or bowl, the food as soft domes and strokes, a filtered brush outline (`feTurbulence` plus `feDisplacementMap` at a small scale) and light washes in a few colours, centred in a square `viewBox`, saved as files in `images/` and referenced with `<img>` so they can be swapped for photographs later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, illustrations, logos or packaging from a real restaurant or brand unless the user supplies them with permission.

## Wordmark, seal and favicon

- The wordmark is live text: the brand name in EB Garamond 500, uppercase, tracked 0.34em (`.brand`). If the brand has a real logo, put its SVG in `.brand` at about 34px high.
- The seal (`#i-seal`, and `illustrations/mark.svg` for the favicon) is a cinnabar square with a carved mark in paper white. Draw the user's own mark: an initial, a simple plant or object, never a real seal, a character you cannot read or a copy of someone else's logo. In CJK, a real seal with the brand's own characters, designed or approved by the user, is the best choice.
