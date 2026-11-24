# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is a stack of full-width color bands, and no two neighbors share a color (the footer is red).
- [ ] Every band title is a shout headline that fills the width with jostled letters, two to five words long.
- [ ] At least four signature elements appear on the home page: color bands, fitted stamped capitals, a tilted framed photo, hand-cut paper cards, square yellow buttons, product tiles on solid color, the split.
- [ ] Buttons, chips and tags are lowercase; body text is Zilla Slab; only shouts, titles, prices and numbers use the display face.
- [ ] Cards, buttons and frames have the uneven paper cut; radius is 0 everywhere.
- [ ] No gradients behind content, glass, pastel washes, emoji or icon fonts.
- [ ] Copy is warm, plain and specific, with no hype words, em dashes or lorem ipsum.

## Photos and art

- [ ] Photos sit in white frames or clipped inside paper cards, never edge to edge.
- [ ] Product art (or cut-out product photos) is centered on the tile color at the same size for every product.
- [ ] Meaningful pictures have alt text; decorative ones are `aria-hidden` or `alt=""`.
- [ ] Every stand-in image still in use is listed in your reply.

## Motion

- [ ] Shout letters drop in when a view appears; cards land once; buttons wobble on hover.
- [ ] With reduced motion nothing animates and everything is visible at once.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The document title changes per view; the current nav link is underlined.
- [ ] The menu sheet opens, traps focus, and closes on a link, the close button and Escape.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Filters show an empty message when nothing matches; `?cat=` preselects a chip; sorting reorders the grid.
- [ ] Adding to the basket updates the count, shows the toast, and the basket totals, free-delivery note and empty state are right.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success message, also inside `<iframe sandbox="allow-scripts">` (the template handles the submit button's click for this).

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px in light and dark.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth` at 390 in a normal, non-touch window too).
- [ ] The header never wraps; the nav turns into the menu button under 1100px.
- [ ] Shouts re-break into balanced lines on phones and never overflow; touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Contrast meets WCAG 2.2 AA in both themes: ink on green and yellow, white on red and blue.
- [ ] Focus rings are visible on every control (the paper cut is on `::before`, so outlines are not clipped).
- [ ] Shout headlines are written in normal case; screen readers get the plain text, not single letters.
- [ ] Form fields have labels; errors are announced and linked with `aria-describedby`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone.
- [ ] Every fact you drafted (prices, amounts in the split, years, addresses, delivery rules, quotes) is listed in your reply for the user to confirm.
- [ ] Nothing claims certifications, awards, impact numbers or press the user did not supply.
- [ ] If the user needs forms that deliver, a real basket and checkout, editable content or member login, you have read `references/kanorio.md`.
