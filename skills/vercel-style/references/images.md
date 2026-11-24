# Product screens, the mesh pane and images

This style has almost no pictures. The product's own interface, drawn in HTML and SVG, does the job of a hero image; one mesh pane is the only patch of color; covers are typography. Everything stays sharp, follows the theme and can be edited like text.

## Building the product window

1. List the objects the product handles (runs, requests, deployments of the user's own product, keys, logs, tests, queries) and pick the one screen that proves the promise.
2. Map it onto the window: a `.window-bar` with the mark and a monospace path (`team / project / view`) plus one or two status chips; a sidebar with six or seven items and counts; a title row with one secondary action; four `.kpi` cells; a `.table` of four or five `.tr` rows with names, mono columns, a history `.strip` or a small bar, and a status chip.
3. Use real-sounding content in the brief's vocabulary: exact names, durations with units, percentages with one decimal, IDs like `#4821`. Avoid "Item 1" and lorem ipsum.
4. Status uses `.st` with a `.dot` (`.ok`, `.warn`, `.bad`, `.off`). History strips are a string of `p` (pass) and `f` (fail) in `data-strip`; the script draws them.
5. Give the window `role="img"` and an `aria-label` that says what it shows; mark the inner markup `aria-hidden="true"`.
6. Keep `.fade` on the hero window only: the bottom rows dissolve into the page, which tells the visitor it is a glimpse, not a dashboard to read.

Vignettes in feature cells are small slices of the same interface: a list with strips, a bot comment, horizontal bars, a stack trace with one highlighted line, a path-to-team list, mono chips. Charts are inline SVG paths stroked with `currentColor` in the text color, with a 6 percent fill under the line.

## The mesh pane

- CSS only: four radial gradients (`--m1` blue, `--m2` cyan, `--m3` violet, `--m4` peach) over `--bg-subtle`, with a 40px grid of `--mesh-line` drawn over it by `.mesh::after`.
- One per view at most, inside a hairline cell, never behind text. Place a small product card on it (`.term`) so it still reads as the product.
- To recolor for a brand, change only `--m1` to `--m4`, keep two cool and one warm hue, and keep them light in the light theme so the white grid shows.

## Covers

Blog and changelog covers (`.cover`) are a fine grid on `--bg-subtle` with one mono figure or phrase taken from the post (`40m → 7m`, `retries: 0`, `$0`). One idea per cover, under 14 characters on the main line, an optional small caption.

## Screenshots and photos

- Real screenshots, when the user insists: frame them in the same `.window` (bar, hairline, 10px radius, overlay shadow), export at 2x, supply light and dark versions, and give every image `alt`, `width` and `height`. No device mockups or perspective laptops.
- Photos appear only for real people on an about or team page: square, grayscale or lightly desaturated, inside a hairline border. Never hot-link stock photos.
- If an image tool is available and the user wants a photo, ask for "a black and white documentary photograph of <the real work>, soft daylight, plain background, no text, no logos, no readable screens". Without such a tool, use initials avatars.

## Brand mark, favicon and Open Graph

- The mark is one simple geometric shape filled with the text color, so it flips with the theme; it lives in the sprite as `#mark`. Avoid triangles, arrows and other marks that read as an existing company's logo.
- The favicon is the same mark as an SVG file that switches color with `prefers-color-scheme`.
- The Open Graph image is 1200 by 630: white, the mark and name at the top left, the headline in a bold tight sans, the install command in mono, and the mesh pane as a right-hand strip. Export it as PNG for production; social networks do not render SVG.
