# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in light and dark.

## Look and feel

- [ ] Sections alternate between stage black and paper, and every change of surface is a diagonal cut with one shard.
- [ ] At least four signature elements are on the home page: the cut, the hero wedge, heavy capitals, outlined watermark words, mono sub-lines, halftone art, square ghost buttons.
- [ ] Every headline is Jost 800 in uppercase through CSS; the source text is in normal case.
- [ ] There is one display headline per page, and every big headline has a mono line under it.
- [ ] Red appears only for sale prices, scarce or sold-out status, errors and one detail per image.
- [ ] No rounded corners, soft shadows, gradients on controls, emoji or stock photos.
- [ ] Copy is short and concrete, with no exclamation marks, hype words, lorem ipsum or em dashes.

## Images

- [ ] Every image follows one language: monochrome halftone or flat geometry, one red detail, no text, no faces.
- [ ] The hero light sits away from the headline; the headline sits on solid black at every width.
- [ ] Product images share one backdrop and ratio.
- [ ] Every image has `alt`, `width` and `height`; decorative card images have `alt=""`.
- [ ] User photos, if any, are black and white, cropped to the slot ratios, and the user owns them.

## Motion

- [ ] Reveals wipe open once and stop hard; nothing floats, bounces or loops.
- [ ] No `.reveal` or `.wipe` sits on an element that already has its own `clip-path`.
- [ ] With reduced motion, everything is already open and the watermark words stay still.
- [ ] Content is visible with JavaScript turned off, including both media tabs.

## Completeness and interactions

- [ ] Every nav, footer, card and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Ticket buttons point to the user's real ticket sellers, or to the ticket notes until those exist.
- [ ] The mobile menu opens full screen, closes with Escape, the close button and any link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Region and category filters work, show an empty message, and follow `?region=` and `?category=`.
- [ ] The media tabs switch with clicks and arrow keys.
- [ ] The product page asks for a size before adding, swaps images from the thumbnails, steps the quantity between 1 and 6, and updates the bag count.
- [ ] Every form shows an error under each invalid field, a sending state and a success message, and works when the button is pressed or Enter is typed, also inside a sandboxed frame.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width: watermark words and cuts are clipped by their sections, tables scroll inside their own container.
- [ ] The hero copy moves to the left under the art on phones, and the wedge still sits behind it.
- [ ] Date rows stack status and button under the city on phones; product grids drop to two columns.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes on paper and on stage, including mono metadata and the dimmed tab.
- [ ] Focus rings are visible on black and on paper (they use the surface's text color).
- [ ] Status chips say their meaning in words; red is never the only cue.
- [ ] Watermark words, cuts and the member card are `aria-hidden`.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; tabs use `role="tab"`, `aria-selected` and `aria-controls`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families; the whole file stays under 2 MB with the art embedded.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including dates, venues, prices and track lists.
- [ ] Every fact you drafted (dates, venues, prices, member names, record history) is listed in your reply for the user to confirm.
- [ ] Nothing claims sales, awards, chart positions or audience numbers the user did not supply.
- [ ] If the user needs forms that deliver, a real store and checkout, member login for the fan club, a newsletter or news they edit, you have read `references/kanorio.md`.
