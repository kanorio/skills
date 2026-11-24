# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is white (near-black in dark) everywhere: no coloured sections, banners or cards.
- [ ] One typewriter monospace family, everything lowercase; 14px body, 12px small, 16px only for story and product names, 24px only for the wordmark and the 404.
- [ ] The wordmark is typed text with its rule underneath, centred, with the live clock and place code under it. It is not in a box, a badge or on a coloured block, and it does not imitate any real brand's logo.
- [ ] The current page is bold in the row, the category list, the footer and the filter words; there are no pills, underline bars or colour changes for "current".
- [ ] The accent appears only as a thin mark (picked thumbnail ring, "new", "open now", "live now"), never as a fill.
- [ ] Buttons are flat slabs with small bold lowercase words; sold out is the grey slab and italic "sold out" under the tile.
- [ ] Copy is terse and factual. No hype words, no exclamation marks, no em dashes.

## Pictures

- [ ] Product shots are square, centred, on white or transparent, at the same scale within a category.
- [ ] Looks share one wall-and-floor framing; story pictures are real places and moments.
- [ ] The wall's crops land on something worth seeing (a print, a pocket, a texture); `CROP` is set for the products that need it.
- [ ] Every `<img>` has `alt`, `width` and `height`; wall squares and cart thumbnails have empty `alt` and a named link.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Views fade in four steps; the "added" line types itself out; nothing else moves except the clock text.
- [ ] With reduced motion, nothing animates.
- [ ] Content is visible with JavaScript turned off: every view in order, including the shop tiles, the first story, the lookbook thumbnails and every form.

## Completeness and interactions

- [ ] Every word in the home list, the row, the category list, the footer, every tile, wall square, row and pager reaches a view, a section or a real page; unknown routes and slugs show the 404 view.
- [ ] The header and the row stay on one line at 1440, 1024 and 768 px.
- [ ] The clock shows the brand's local time with the right place code; the drop countdown and "open now" use the same zone and the real schedule (or are removed).
- [ ] The theme word works, shows the other theme's name, and remembers the choice; the system setting is the default.
- [ ] Category links filter the tiles and update the title and count; an empty category shows the empty line; `?cat=new` bolds "new" in the row.
- [ ] Every tile has an `ITEMS` entry; its spec sheet shows its own name, colour, description, sizes, price, related thumbnails and "next" link.
- [ ] A size is required before "add to cart"; sold-out sizes are disabled; a sold-out product shows the grey slab. The cart counts, steps quantities, removes lines and totals correctly.
- [ ] The wall, the lookbook (thumbnails, pager, arrow keys, caption links) and the news pager all work and wrap around.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success state that repeats what was sent, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view, including story and product names.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too).
- [ ] On phones the pairs stack picture first, the wall is four across, the shop three across with the categories above, the lookbook thumbnails one row of eight.
- [ ] On touch screens every word link, button and field is at least 44px (the `pointer: coarse` block).

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view (visually hidden on home).
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including the muted footer and the accent words.
- [ ] Focus rings are visible on white and on near-black; the wall shows an ink frame on focus.
- [ ] Pager arrows and wall squares have labels; icons are `aria-hidden`; status lines use `role="status"`; filter words use `aria-pressed`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family, Latin subset, three files; pictures small (SVG, WebP or AVIF under 200 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including products, stories, stores, addresses, the drop number and the storage keys.
- [ ] Prices, sizes, stock, dates, addresses, hours and collaborators are the user's own; anything you drafted is listed in your reply.
- [ ] Nothing claims sell-outs, collaborations, press, awards or figures the user did not supply.
- [ ] If the user needs messages that arrive, content they can edit without code, a real cart and checkout, a mailing list or image hosting, you have read `references/kanorio.md`.
