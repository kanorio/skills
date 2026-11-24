# Photos and art

This style runs on two kinds of picture: **photos in white frames** for people, places and stories, and **flat product art on solid color** for things you can buy. Both are bright, simple and centered, so they read from across the room.

## The photographic language

- Bright, even light (flash or a big window), saturated color, no moody shadows. One subject, centered, shot straight on or slightly from above.
- Backdrops are flat and colorful: a painted wall, a colored sheet, a field under a clear sky. Pick backdrops close to the band colors.
- Real people doing real work (hands in soil, a stall being set up, a crate being packed). Faces are fine when the user supplies the photo; never invent people.
- Every photo sits in a `.snap` frame (4:3, white border, tilted about 2 degrees) or is clipped with `.cut-img` inside a paper card. Never edge to edge, never with rounded corners.

## Slots and ratios

| Role | Slot | Ratio | Notes |
|---|---|---|---|
| Home hero | `.hero .snap img` | 4:3 | The best photo on the site. Caption strip links to the featured product or story. |
| Card photo | `.paper .cut-img` | 4:3 | One per card, same subject distance across a row. |
| Journal card | `.post-media img` | 4:3 | Or flat art on a `--tile` color when there is no photo. |
| Article | `.post-head .snap img` | 4:3 | |
| Product tile | `.tile-media` | 1:1 | Flat art or a cut-out product photo on the tile color, centered, about 70% of the square. |
| Product page | `.snap > .art` | 1:1 | The tile picture, larger. |
| Basket line, farm card | `.art` | 1:1, 76 to 92px | The tile picture at thumbnail size. |
| Favicon and Open Graph | `assets/illustrations/` | 48px mark; 1200 by 630 | See below. |

## The template's stand-ins

`assets/images/*.webp` are original cut-paper dioramas rendered for this skill, free to use: a crate of vegetables on green (`crate`), hills with a barn under a blue sky (`field`), yellow boots and a spade in mud (`boots`), a market stall with a striped awning (`stall`), an apple branch on pink (`apples`) and a pot of soup from above on orange (`soup`). They are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

With no photos and no image tool, keep the stand-ins, or render new ones the same way: an SVG scene of flat paper shapes with soft drop shadows on a flat color with a light radial glow, exported to WebP at 1200 by 900, under 60 KB, saved in `images/` and used with `<img>` so it can be swapped later. An image-generation tool can be asked for "a bright cut-paper diorama of <subject>, flat colored paper shapes with soft shadows, plain <color> background, centered, no text, no people's faces".

Never hot-link stock photos or other sites' images.

## Product art

The sprite holds flat product art (`#p-box`, `#p-bag`, `#p-eggs`, `#p-jar`, `#p-bottle`, `#p-sack`, `#p-card`) drawn in solid fills with no outlines, in a 200 by 200 viewBox, about 140 units wide and centered.

- One object per square, solid fills, no strokes except tiny details, no gradients, no text.
- Recolor shared shapes with `--c` on the `<svg>` (jar contents, sack color); the tile color comes from `--tile` on the tile.
- New art: add `<symbol id="p-name" viewBox="0 0 200 200">`, draw back to front, check it on every tile color in light and dark and at 76px.
- Real product photos: cut the product out (transparent WebP), place it on the tile color, keep the same size and centering for every product.

## Rules

- Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture; card pictures inside links that already name the item use `alt=""` and the link is `aria-hidden`.
- Do not add `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip lazy images); on a deployed site, lazy-load pictures below the first screen.
- Export WebP or AVIF under 300 KB each.

## Favicon and Open Graph

- The favicon (`assets/illustrations/mark.svg`) is the brand mark: a cut-paper turnip. Replace it with the user's mark in flat fills.
- The Open Graph image (`assets/illustrations/og.svg`, 1200 by 630) is a red band with a framed picture, the stacked headline and a yellow label. Export it as PNG for production; social networks do not render SVG, and the fonts must be outlined or embedded.
