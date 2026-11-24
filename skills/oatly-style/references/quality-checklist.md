# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The site sits in the window: grid paper outside, a 1.5px frame, the sticky bar of square cells with the path cell, and content that scrolls under the frame's top edge.
- [ ] Every page has one giant display headline in uppercase with the text stroke, and every other text is Archivo.
- [ ] At least four signature elements appear on the home page: the window, bento tiles with category tags, hand-cut giant type, a doodle annotation (underline, ring, arrow or sticker), ruled cells.
- [ ] Each content category has exactly one tag color, used the same way on tiles, chips and the menu.
- [ ] Tiles have square corners, 1.5px borders, one drawing or one phrase, and a caption strip with a title and a tag.
- [ ] No gradients, blur, soft shadows, rounded cards, emoji or icon fonts.
- [ ] Copy is short, honest and specific, with no hype words, em dashes or lorem ipsum.

## Drawings and images

- [ ] Every drawing uses `currentColor` lines and token fills, and reads well on its panel in light and dark.
- [ ] One object per drawing, no text inside drawings, no faces with features.
- [ ] Meaningful drawings have `role="img"` and an `aria-label`; decorative ones are `aria-hidden`.
- [ ] Any photo has `alt`, `width` and `height`, sits inside a tile frame, and follows the photographic language in `images.md`.

## Motion

- [ ] Tiles reveal once, lift with a hard shadow on hover and focus, and their drawing boils only while hovered.
- [ ] The ticker pauses on hover and stops with reduced motion; with reduced motion everything else appears instantly.
- [ ] Content, including the hidden "show more" tiles, is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The window bar path and the document title change per view; the current nav item has the ring.
- [ ] The menu sheet opens, traps focus, and closes on a link, the close cell and Escape.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Filters show an empty message when nothing matches, and `?cat=` preselects a chip.
- [ ] Adding to the basket updates the count sticker, shows the toast, and the basket page totals, delivery note and empty state are right.
- [ ] Every form shows an error under each invalid field, a sending state and a success message, also inside `<iframe sandbox="allow-scripts">` (the template handles the submit button's click for this).

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px in light and dark.
- [ ] No horizontal scrolling at any width; the ticker and the footer wordmark are clipped inside the frame.
- [ ] The bento falls from 12 to 6 to 2 columns without holes; the link row turns into the menu cell under 860px.
- [ ] Giant headlines wrap on whole words and never overflow the frame; touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including text on panels and tags.
- [ ] Focus rings are visible on every control, and a focused tile link outlines the whole tile.
- [ ] Display headlines are written in normal case and uppercased with CSS.
- [ ] Form fields have labels; errors are announced and linked with `aria-describedby`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone.
- [ ] Every fact you drafted (prices, stats, years, quotes, addresses, delivery rules) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, certifications, sales numbers or press the user did not supply.
- [ ] If the user needs forms that deliver, a real basket and checkout, editable content or member login, you have read `references/kanorio.md`.
