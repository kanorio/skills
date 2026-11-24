# Images

Pictures do half the work in this style: every product is shown lit on black, in cards, heroes and bands, in both themes. The interface around them stays white, grey and green.

## The photographic language

One studio, one lighting plan:

- **Products on black**: the product at a three-quarter angle from slightly above, on a black sweep, lit by one soft key light from above and a thin rim light along the top edges. One green light on the product (a strip, a status LED, an edge) is allowed and is the only colour.
- **Scenes**: abstract renders on black for topics without a product: a wireframe surface glowing green, a corridor of racks with a light at the end, an orbit of nodes, a stage with a green screen. Same black, same green, no other hues.
- **People**: when the user supplies portraits, crop them 16:9, dark background, soft light from one side. Without portraits, the template's black initials blocks.
- No white backgrounds, no colour gradients behind products, no text or logos baked into pictures, no stock photos of hands on keyboards.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Hero slide | about 3:2, cropped | 1600 x 1000 | `.hero-img img` | Bleeds off the right edge; keep the product in the centre two thirds. |
| Card picture | 16:9, cropped | 1600 x 900 | `.card-img img` | Product centred with black around it; the crop loses the top and bottom tenth. |
| Black band and product hero | 16:10 | 1600 x 1000 | `.showcase img`, `section.black .hero-img img` | The darkest corners touch the black band, so the edges disappear. |
| Wide card | fills the left half | 1600 x 1000 | `.card-wide .card-img img` | Scenes work better than products here. |
| Story cover | 21:9 | 2100 x 900 | `.cover img` | 12px corners. |
| Cart line | 16:10 | 800 x 500 | `.cart-line img` | Same picture as the product card. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Black, the product on the right, the mark top left. Export PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Do not use `loading="lazy"` in a single-file page (preview tools that capture the whole page never scroll). Alt text names the product and what it shows; pictures next to a heading that already says it get `alt=""`.

## The template's pictures

`assets/images/` holds ten SVG renders on black in a 1600 x 1000 box with `preserveAspectRatio="xMidYMid slice"`, so they crop like photographs: `tower.svg`, `rack.svg`, `edge.svg`, `laptop.svg`, `cube.svg`, `card.svg` (products) and `mesh.svg`, `aisle.svg`, `stage.svg`, `orbit.svg` (scenes). The script references them through one `IMG` table with full paths; `flip: true` in the data mirrors a picture for a second product in the same family.

To make a new one by hand, keep the recipe: a radial black-to-grey spotlight behind, a soft ellipse shadow on the floor, the object built from three faces with grey gradients, a 2px light rim along the top edges, and one green line with a blurred copy behind it for the glow. Never trace a real product's shape, logo or badge.

## Generating pictures

When an image tool is available, keep one prompt pattern per role so the set looks like one shoot:

- Product: "Studio product photograph of [the user's product], three-quarter view from slightly above, on a seamless black background, one soft key light from above, a thin rim light on the top edges, [one small green status light], no text, no logos."
- Scene: "Dark abstract 3D render of [a wireframe landscape / a corridor of server racks / a ring of glowing nodes], black background, lit only by acid green light, no text."
- Portrait: "Portrait of [person], dark grey background, soft light from the left, shoulders up, natural expression."

Generate at the source size, crop to the slot ratio, export WebP or AVIF under 250 KB.

## Without an image tool

Use the template's SVG renders, or draw new ones with the recipe above, as files in `images/` referenced with `<img>` so they can be swapped for photographs later. Tell the user which pictures are placeholders. Never hot-link stock photos, and never use photos of a real product, logo or person unless the user supplies them with permission.

## Brand mark and favicon

- The template's mark is a 2px-cornered green square with a black square outline and a short diagonal (`#mark` in the sprite, `illustrations/mark.svg`). Replace it with the user's logo as inline SVG at 24 to 32px; the wordmark beside it is set in Encode Sans 800, uppercase, spaced 0.06em.
- Redraw `illustrations/og.svg` with the user's product and mark.
