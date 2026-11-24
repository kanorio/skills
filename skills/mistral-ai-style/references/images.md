# Pixel sprites, mosaics and images

This style draws its pictures instead of photographing them. Every picture is one of three things: a 16 by 16 pixel sprite, a mosaic of square tiles, or a small interface card built in HTML. All three are code, stay sharp at any size, follow the theme and can be edited like text.

## Pixel sprites

Sprites live in the `PIX` object in the template's script as character maps: one line per row, one letter per pixel, `.` for empty. The letters map to the pixel palette (`k` ink, `w` white, `l` light gray, `s` gray, `y` sun, `a` amber, `o` orange, `r` red, `c` ember, `b` sky, `n` navy, `g` leaf, `d` dark leaf, `t` soil). The script turns each map into one SVG path per color with crisp edges. Use one with `<svg class="px" data-px="name"></svg>`.

1. Pick objects from the brief's own world: a coffee shop gets a cup, a bean and a croissant; a code tool gets a terminal, a bug and a branch; a studio gets a pencil, a ruler and a frame. Four to eight sprites are enough for a whole site.
2. Draw on the 16 by 16 grid. Keep a dark outline (`k`) on light objects, two or three fill colors, one white highlight. Leave a row or two of air at the edges. Mirror symmetrical shapes by hand and count every row: a row with the wrong length shifts everything after it.
3. Show them only at whole-number scales of 16: 32px in chips, cards and tabs, 48px in success panels and the stories fact card, 64px on blocks and mosaics (48 and 32 on smaller screens through `--ps`), 128px on featured covers.
4. Sprites are decorative. The script marks them `aria-hidden`; never put meaning only in a sprite.
5. Icons (the theme toggle, menu, close, search, copy, plus, down) are 8 by 8 maps with `x`, which takes the text color. The chevron and check are CSS masks (`--i-chev`, `--i-check`) because they appear dozens of times.
6. In a framework project, keep the maps and the drawing function as a small `Pixel` component that renders the SVG at build time.

Do not draw a mascot or character to stand for the brand, and do not copy sprites or characters from games or other sites. Objects, plants, tools and buildings are the safe vocabulary.

## Mosaic panels and covers

- A `.mosaic` (chapter rows, sign-up) or `.cover` (posts) with one hue class: `.m-leaf`, `.m-sky`, `.m-ember` or `.m-sun`. Each hue has a base (`--m0`), light tiles (`--m1`) and dark tiles (`--m2`); the script scatters the tiles with a seeded random so every panel differs and stays the same on reload.
- One interface card (`.mcard`) per mosaic panel, built from the brief's real objects: a chart with units, a JSON response, a checklist with times, a device list with statuses. One or two sprites float beside it (`.mspr`). A post cover gets one centered sprite and nothing else.
- To recolor for a brand, change only the three tints of a hue, keep them in the same lightness order, and keep at least two different hues on one page so rows stay apart.

## The mark, favicon and Open Graph

- The mark is a four-step staircase in the warm ramp (`#mark` in the sprite sheet, 8 by 8). Redraw it for the user's brand as a small pixel shape on the same grid, in two to four ramp colors. Avoid letters made of blocks and shapes that read as an existing company's logo.
- `assets/illustrations/mark.svg` is the favicon; `og.svg` is the 1200 by 630 sharing image (off-white, rails, the mark, the name, the stripes). Export the Open Graph image as PNG for production; social networks do not render SVG.

## Photos

The style works without photos. When the user insists on real images (a team, a product, a place):

- Put them in square cells (`.cover` without tiles, or a `.card` image slot) with no rounded corners, at 4:3 or 1:1, under a hairline border. Give every image `alt`, `width` and `height`, and do not lazy-load images in the first screen.
- Keep them flat and bright: daylight, plain backgrounds, no filters. A row of photos replaces a row of mosaic covers; it never goes behind text.
- With an image tool, ask for "a bright daylight photograph of <the real subject>, plain off-white background, centered, no text, no logos". Without one, keep sprites and mosaics; never hot-link stock photos.
- People without real photos get initials on a colored square (`.av`).
