# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Every product moment is one full screen: name and one line at the top, the product in the middle, the buttons at the bottom.
- [ ] No shadows, no gradients, no borders on cards, no bold weights, no uppercase labels. Corners are 4px on controls and 12px on picture cards.
- [ ] The blue appears only on the main action of each screen.
- [ ] The header is clear over pictures with readable text, and solid on every other part of the page and while the mega panel is open.
- [ ] Facts are numbers with units and short labels; the line under each name is one sentence.
- [ ] Copy is calm and exact: no exclamation marks, em dashes, slogans or lorem ipsum.

## Pictures

- [ ] One photographic language; each panel's `data-tone` matches its picture.
- [ ] Products sit on the ground line and never cover the name, the facts or the buttons, at 1440 and at 390.
- [ ] Every image has `alt`, `width` and `height`; no lazy loading on full-screen panels.
- [ ] Placeholder pictures and drawings are listed in your reply.

## Motion

- [ ] Panel text rises into place, colours change at one speed, the mega panel drops; nothing loops or plays by itself.
- [ ] With reduced motion everything appears at once and scrolling is instant.
- [ ] Content is readable with JavaScript turned off.

## Completeness and interactions

- [ ] Every link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Carousel arrows, dots and swipes agree; the lineup rail scrolls.
- [ ] The model page shows the right name, picture, numbers and links for each `?m=`; trim tabs switch the specs.
- [ ] The configurator repaints the drawing, and every choice updates its label, the summary, the total and the monthly estimate; cash hides the finance lines; "Continue to order" opens the order form.
- [ ] Inventory filters and sort combine, the count updates, and the empty state offers a reset.
- [ ] The test-drive picture follows the chosen model; day chips show real upcoming dates; `?m=` and `?loc=` preselect.
- [ ] Location search, type filter, list and pins agree; choosing one highlights both.
- [ ] Support search and topics filter the answers, with an empty state.
- [ ] Every form shows errors under the fields without moving anything, a sending state and a success message that repeats what was entered, and works inside a sandbox without `allow-forms` (Enter included).
- [ ] The theme toggle switches light and dark and remembers the choice; the system setting is the default.
- [ ] Document titles change per view and per product.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px, in light and dark.
- [ ] No horizontal scrolling at any width (check `scrollWidth <= innerWidth` in a normal browser window at 390, not only in device emulation).
- [ ] On phones: panel buttons stack full width, the header shows the wordmark, the theme button and the menu, the configurator stage sits above the choices, segmented controls scroll sideways instead of wrapping.
- [ ] Touch targets are at least 40px.

## Accessibility

- [ ] Text over every picture passes 4.5:1 where it sits; muted text passes 4.5:1 on its background in both themes; white on the blue passes 4.5:1.
- [ ] The focus outline is visible on every control, including swatches, chips and pins.
- [ ] One `h1` per view; landmarks for header, nav, main and footer; the carousel has its role description and slide labels.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; toggles use `aria-pressed`; the live total and counts are announced.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including product names, locations, the phone number and the wordmark.
- [ ] Every number you drafted (prices, ranges, speeds, capacities, warranties, finance rate, order fee, delivery times, hours) is listed in your reply for the user to confirm. Safety ratings, awards, incentives and certifications are never invented.
- [ ] If the user needs orders, bookings or quote requests that really arrive, payments, owner accounts, or products and prices they can edit, you have read `references/kanorio.md`.
