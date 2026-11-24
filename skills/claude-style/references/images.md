# Illustrations, product cards and images

This style is drawn, not photographed. The product appears as dark cards built in HTML, and everything else is carried by small hand-drawn objects and soft tiles. All of it is inline SVG or HTML, so it stays sharp, follows the theme and can be edited like text.

## Hand-drawn illustrations

Each illustration is a `<symbol>` in the sprite (`ill-pages`, `ill-lens`, `ill-pen`, `ill-card`, `ill-cards`, `ill-cabinet`, `ill-lock`, `ill-bird`), used with `<svg class="ill"><use href="#ill-…"/></svg>`. The `.ill` class sets the fill to `--sand` and the line color to `--line`, so one drawing works in both themes and on any tile.

To draw a new one for the brief's own objects (a notebook, a microphone, a mug, a chart, a stack of books, a lamp, a compass):

1. Use a 64 by 64 viewBox and simple, slightly imperfect shapes: a gentle curve where a ruler would draw a straight line, round caps and joins.
2. First a fill layer: the object's main silhouette with `stroke="none"`, shifted 3 to 4 units right and down from where the line will be. It inherits the sand fill.
3. Then a line layer: `<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">` with the outline and two or three interior details.
4. At most one terracotta detail, written as `style="stroke:var(--accent)"` or `style="fill:var(--accent)"` (a style attribute, because `var()` does not work in presentation attributes): a written line, a key hole, a label, a leaf.
5. No faces on objects, no people, no robots, no sparkles or stars, no chat bubbles. Animals are fine when they belong to the brand, drawn as simply as the wren.

Sizes: 64px in steps and plans, 112 to 184px on tiles (`.tile.art`, post covers), 88 to 140px for success panels and the 404.

## Tiles

A tile (`.tile.t-clay`, `.t-sage`, `.t-sky`, `.t-sand`) is a 22px-radius block in one muted color with faint contour lines drawn by `<svg class="lines"><use href="#contours"/></svg>`. The lines are white at low opacity, so they suit every tile color. Use tiles behind dark cards and as covers for posts and illustrations. Vary colors side by side; never put body text directly on a tile.

## Dark product cards

1. List the objects the product handles and the one screen that proves the promise for each view: for a research tool a transcript, a theme board, a memo; for a writing tool a draft, comments, a version list; for a course a lesson outline, an exercise, feedback.
2. Build the card from `.ink` (dark in both themes), `.ink-bar` (three dots and a mono title), and an `.ink-body` holding the content: `.tr` rows (mono speaker and time, text with `<mark class="m-clay">` highlights, `.tag` chips), `.th` rows with `.bar` meters, a `.memo` with `.cite` chips, `.cmt` comments with `.av` initials, a `.ws` three-pane workspace, or a `.code` block.
3. Use real-sounding content in the brief's vocabulary and keep it short: four rows, two paragraphs, three comments.
4. Give the tile `role="img"` and an `aria-label` that says what the card shows; its children are then presentational.
5. In the hero and on the product page, add `.crop` to the tile so the card runs off its right and bottom edges. One light `.note` may float over the empty lower area of the hero card.

## Photos

Use photos only when the user supplies them: a team page, a customer story, a course teacher. Prefer quiet, natural-light pictures of real work (a desk with paper notes, a workshop, a classroom), warm in tone, cropped 4:3 or 16:10 inside the 22px radius. A photo can replace an illustration tile; never put a photo inside a dark card. Never hot-link stock photos. Every image has `alt`, `width` and `height`; do not lazy-load images in a single-file page that may be captured as a screenshot.

If an image-generation tool is available and the user wants pictures, ask for "a simple hand-drawn line illustration of <object>, dark brown ink line, flat warm sand fill slightly offset from the line, one small terracotta detail, on plain paper, no text, no people" for drawings, or "an editorial photograph of <the real work>, soft daylight, warm paper and wood tones, no text, no logos, no screens with readable content" for photos. Without such a tool, draw SVG illustrations as above.

## Brand mark, favicon and Open Graph

- The mark is a small terracotta silhouette (the sample uses a wren) beside the serif wordmark; it lives in the sprite as `#mark` and takes its color from `currentColor`. Replace it with the user's own mark, or draw a simple silhouette of an object from the brand's name. Never a starburst, an asterisk or a sparkle.
- The favicon is the same mark as an SVG file with plain hex colors on a paper square.
- The Open Graph image is 1200 by 630: paper, a clay tile with a dark card on the right, the mark, the name in a serif and the headline. Export it as PNG for production; social networks do not render SVG.
