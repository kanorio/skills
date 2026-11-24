# Interface cards, gradients and images

This style shows the product instead of decorating it. The hero cards, bento vignettes, product tables and feature art are HTML and SVG, so they stay sharp, follow the theme and can be edited like text. Color comes from one family of gradients, not from photos.

## Building interface cards

1. List the objects the product handles (invoices, payouts, cards, accounts, transfers, API keys) and the one screen that proves the promise.
2. Compose two or three overlapping cards: a navy `.ui-dash` (a balance, a gradient chart, three rows), a white card in front (`.ui-invoice`, `.co` checkout, `.mini-inv`), and an optional `.ui-toast` with a status.
3. Use real-sounding content in the brief's vocabulary: amounts with currency symbols, due dates, invoice numbers, country codes, status pills (`.pill-s`, `.pill-s.wait`, `.pill-s.info`). Every amount uses tabular figures.
4. Give the composition `role="img"` and an `aria-label` that says what it shows; mark the inner markup `aria-hidden="true"`.
5. On phones the cards stack: the back card first, the front card overlapping its bottom edge by about 40px. Check that nothing overflows at 360px.

Charts are inline SVG paths drawn from data: a line stroked with a horizontal gradient (`--w1` to `--w3` to `--w4`) and a translucent violet fill under it. Bar charts are flex rows of `<i>` elements with heights in percent.

## The wash and other gradients

- The wash is CSS only: a rotated ribbon filled with a horizontal gradient through `--w6`, `--w5`, `--w4`, `--w3`, `--w2`, `--w1`, a 6px silk texture of white hairlines, and a mask that fades both long edges. To recolor it for a brand, change the six `--w` tokens; keep them light enough that dark text next to the ribbon still reads, and keep the order cool to warm.
- Covers (`.cover.g1` to `.g6`) are three-stop diagonal gradients from the same family with a finer silk texture and the customer's name set in white type. Use one cover per story; never repeat a cover twice in a row.
- The company card (`.card3d`) is the same gradient with a chip drawn in CSS. Do not draw card-network or bank logos.
- Gradient numerals use `--numeral` clipped to the text.

## Photos

Use photos only when the user supplies them, for customer stories or a team page. Prefer bright, natural-light pictures of real work (a warehouse floor, a clinic front desk, a team at a table), cropped 16:9, inside a 10 to 14px radius with the float shadow. A photo can replace a cover; keep the customer's name on the card in text, not in the image. Never hot-link stock photos. Every image has `alt`, `width` and `height`, and below the first screen `loading="lazy"`.

If an image-generation tool is available and the user wants photos, ask for "an editorial photograph of <the real work>, soft daylight, clean modern space, cool blue and white tones with one warm accent, no text, no logos, no screens with readable content". Without such a tool, keep the gradient covers.

## Brand mark, favicon and Open Graph

- The mark is a 26px rounded square filled with the azure-violet-magenta gradient and cut with a simple white glyph; it lives in the sprite as `#mark`.
- The favicon is the same mark as an SVG file with plain hex colors.
- The Open Graph image is 1200 by 630: white, the wash ribbon on the right, the mark and name at the top left, and the headline in Onest 300. Export it as PNG for production; social networks do not render SVG.
