# Widgets, covers and photos

This style shows the business through its own numbers. The hero widgets, the calculator, the report card, the fee bars and the guide covers are HTML and CSS, so they stay sharp, follow the theme and can be edited like text. Color comes from flat fills in the card palette, not from photos or gradients.

## Building widgets

1. List the objects the business handles (transactions, receipts, payslips, returns, policies, sessions, bookings) and the one number that proves each promise.
2. Put each number in a white `.mock` inside a colored card: a small header row with a badge, one heavy figure (`.num.big`), and one supporting row (`.row`) with a 32px badge and a short line.
3. Use real-sounding content in the brief's vocabulary, and mark every figure that is an example as an example in the copy around it. Money uses tabular figures with the cents in `<small>`.
4. Give the widget an `aria-label` that says what it shows. Decorative bar charts (`.spark`) get `aria-hidden="true"`.
5. On phones the card stacks above its widget; check that nothing overflows at 360px.

Bar charts are flex rows of `<i>` elements with heights in `--h` (0 to 1); the last bar is lime. Pill rows (`.bar`, `.addons li`) carry one circular badge each, in lime, aqua, peach or forest, rotating so neighbours differ.

## Covers

- Guide covers (`.cover.t-lime`, `.t-aqua`, `.t-peach`, `.t-ink`) are flat color blocks with one or two words in the display face, bottom left. Rotate the four colors; never repeat one twice in a row.
- Keep cover words short (up to eleven letters per line) so they fit a phone column.
- Avatars are initials in the display face on lime, aqua or peach circles.

## Photos

Use photos only when the user supplies them or has an image tool, for the about page, a team grid or one lifestyle moment on home. The photographic language: candid, close and warm; real hands doing real work (a laptop on a café table, a receipt being photographed, a shop counter); daylight with saturated greens and warm wood; shallow depth of field; no posed handshakes and no screens with readable content. Crop 4:3 or 16:9, place inside a 24px radius (`--r-media`) or a 32px card, never behind a headline.

If an image-generation tool is available and the user wants photos, ask for "a candid photograph of <the real work>, natural daylight, close crop on hands and objects, warm wood and fresh green tones, shallow depth of field, no text, no logos, no readable screens". Without such a tool, keep widgets and covers; never hot-link stock photos.

Every image has `alt`, `width` and `height`. In a single-file page do not use `loading="lazy"`: full-page previews and sandboxed frames may never scroll it into view.

## Brand mark, favicon and Open Graph

- The mark is a 32px circle in the accent color with three rounded bars of decreasing length in the accent text color; it lives in the sprite as `#mark` and follows the theme through `currentColor` and `--mark-fg`. Replace it with the user's own mark, keeping it inside a circle or as a simple glyph.
- The wordmark is the business name in the display face at 900, in lowercase or the brand's own case.
- The favicon is the mark as an SVG file with plain hex colors (`illustrations/mark.svg`).
- The Open Graph image is 1200 by 630 (`illustrations/og.svg`): a lime field, the mark, heavy bars standing in for the headline, and an ink card with a white widget. Export it as PNG for production; social networks do not render SVG.
