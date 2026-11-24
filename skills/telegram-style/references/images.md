# Stickers, devices and images

This style has three kinds of pictures: die-cut stickers, the product on devices, and soft news covers. All three are inline SVG in the template, so they cost a few kilobytes and follow the theme where they should.

## Stickers

- **Look:** flat objects in a few warm, saturated colours, each with one darker shade on its right side for depth. A white die-cut edge and a soft drop shadow come from the `.sticker` class (a chain of CSS `drop-shadow` filters), so every symbol gets the same edge without drawing it.
- **Subjects:** one object per idea, chosen from the user's world: a boat for "simple", a shell with a keyhole for "private", a lighthouse for "offline". People, animals and mascots with faces are allowed only when the user supplies their own character; never imitate a known mascot.
- **Palette:** sticker colours are fixed hex values (yellow, coral, red, sea blue, teal, navy, sand). They do not change with the theme, like real stickers.
- **Composition:** a 160 by 160 viewBox, the object about 120px tall and centred, nothing touching the edges, water or ground as a band at the bottom when it helps.
- **No:** text inside stickers, gradients inside stickers, outlines in black, emoji.

### Making a new sticker

1. Sketch the object as four to eight flat shapes.
2. Add an SVG `<symbol id="st-…" viewBox="0 0 160 160">` to the sprite. Draw the light side first, then a darker shape over the right half, then small details.
3. Use it with `<svg class="sticker" viewBox="0 0 160 160" aria-hidden="true"><use href="#st-…"/></svg>`, or with `role="img"` and an `aria-label` when it carries meaning on its own.
4. Look at it on white and on the dark background: the white edge should read as a sticker on dark and disappear softly on white.

An image-generation tool may be used for richer stickers: ask for "a flat vector sticker of <object>, a few saturated colours, simple shapes, white die-cut border, plain white background, no text". Export a PNG with a transparent background, at least 320px square, and keep `width`, `height` and `alt` on the `<img>`.

## Devices

- The bezels (`.phone`, `.tablet`, `.laptop`) are CSS; the screens are SVG symbols (`#scr-today`, `#scr-places`, `#scr-tablet`, `#scr-desk`) drawn with the `--scr-*` tokens, so they turn dark with the page. `.scr-dark` shows one device in dark mode on purpose.
- Redraw the screens for the user's product: its real objects, numbers and labels, in the same flat style. Keep text in screens short; grey bars stand in for long lines. Reuse shared parts through `<use>` (the template's `#scr-chart` and `#scr-row`).
- Real screenshots work too when the user has them: put an `<img>` inside the bezel instead of the SVG, cropped to the bezel's aspect ratio, with `alt`, `width` and `height`. Never show another company's interface.

## News covers

`.cover` with a `.tone-*` class: a soft two-colour gradient, a pale sun and a horizon drawn by CSS, and one sticker. Six tones ship (`dusk`, `day`, `night`, `sand`, `sea`, `dawn`); add more with the same two-stop pattern. A photo can replace the gradient when the post has one: keep the 16:10 ratio and the 18px radius.

## Photos and avatars

- People are round initials avatars (`.av`) unless the user supplies portraits; then crop them square and keep them round.
- Never hot-link stock photos. Every raster image has `alt`, `width` and `height`.

## Mark, favicon and Open Graph

- The mark is a circle with a vertical blue gradient and one white glyph from the product's world. Replace the glyph and the `#mark` symbol, and the two files in `assets/illustrations/`.
- The Open Graph image is 1200 by 630: white, the mark centred, the name and tagline under it. Export it as PNG for production; social networks do not render SVG.
