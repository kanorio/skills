# Pictures and images

Two kinds of picture carry this style, shot by the same photographer under the same light: studio still lifes that fill the photo half of a split block, and product cut-outs that sit in the green circles on the menu. People are optional; products and the room are not.

## The photographic language

- **Light:** bright, soft daylight from the upper left, as if from a big window. One long, soft shadow falls to the right. No hard flash, no dark moody lighting.
- **Ground:** seamless coloured paper that curves from wall to floor, in one of a few colours per site: terracotta for seasonal drinks, cream for coffee at home, sage for anything green, spruce tiles or warm wood for the café counter. Flat-lays sit on pale stone.
- **Colour:** saturated but natural. Coffee is brown, not orange; milk is cream, not blue-white; the brand green appears on sleeves, labels and tiles, never as a colour cast.
- **Composition:** one hero product, sometimes with a companion (a pastry beside a cup, a bag beside its beans). Products stand in the lower two thirds, slightly left of centre so the shadow has room. Shot straight on or from just above; flat-lays from directly overhead.
- **Cut-outs:** the product alone on a transparent ground with only its contact shadow, centred, filling about 70 percent of a square.
- **Never:** text or slogans in pictures, logos of other brands, cups or packaging that copy a real chain, stock smiles, heavy vignettes, teal-and-orange grades.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Split block | 6:5 (cropped to the half; 4:3 on phones) | 1200 x 1000 | `.split-media img` | Keep the subject in the middle 60 percent; the edges get cropped at other widths. |
| Product cut-out | 1:1, transparent | 640 x 640 or larger | `.circ img` on the menu, the drink page, the rewards tabs, the 404 | WebP with alpha. The circle behind it is CSS (`--deep`), so keep the ground transparent. |
| Rewards hero | 5:6 portrait, shown as an oval | 1000 x 1200 | the rewards hero `img` | Subject centred; the oval crops all four corners. |
| Gift card designs | 1.586:1 | drawn in CSS and SVG | `.gcard` | A flat colour, one motif symbol and a small name label. No photos on cards. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Cream and spruce halves, the wordmark and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A paper cup with a green sleeve and a folded paper bag waiting on a wooden counter"). Cut-outs inside a link that already names the item use `alt=""`. Do not add `decoding="async"` or `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip lazy images); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 200 KB each.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this photographic language: seven scenes (`winter-spice`, `pickup`, `flatlay`, `beans`, `pour`, `cherries`, `cafe`) and fourteen cut-outs named after the menu items. They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject and the paper colour:

> Bright studio product photograph, [subject], on seamless [terracotta / cream / sage] paper, soft daylight from the upper left, one long soft shadow to the right, natural saturated colour, shot straight on at eye level with a 70mm lens, clean background, no text, no logos.

For cut-outs, add "isolated on a transparent background, soft contact shadow only" and export PNG or WebP with alpha. Subjects that suit the style: an iced latte with milk swirling through it; a cappuccino on its saucer with a leaf in the foam; a paper cup with a plain coloured sleeve; a croissant and a flat white from above on pale stone; two coffee pouches with a scoop of beans; a pastry case; a café counter under pendant lamps. Check the set side by side: same light direction, same shadow length, same paper colours.

## Without an image tool

Keep the template's stand-ins, or make new ones the same way: a gradient paper ground, a simple product built from a few shapes with a highlight on the left and a shadow on the right, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos or packaging from a real café chain, photographer or brand unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark (`.logo`) is a rounded spruce tile with a white fern frond (`#i-mark`) followed by the name as live text in weight 900. If the brand has a real logo, put its SVG in place of the tile at the same 48px height and keep the name beside it only if the logo is a symbol.
- The favicon (`illustrations/mark.svg`) is the same tile. Keep the replacement that simple: one shape in the brand colour, one white mark.
