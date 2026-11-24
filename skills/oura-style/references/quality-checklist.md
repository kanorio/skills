# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is oat paper with warm charcoal text; the dark theme is warm walnut, never pure black.
- [ ] Home opens with the inset rounded panel, held off the screen edges, with the headline centred inside it.
- [ ] Headlines are the condensed serif at 400, large, sentence case and mostly centred; everything else is the grotesk.
- [ ] Every action is a pill or a round button; one filled circle marks the forward direction in the rail.
- [ ] Story cards carry a chip, a cream round plus and a light caption over the picture, with the scrim behind them.
- [ ] There is one dark ink band at most, and no other coloured bands.
- [ ] Copy is warm and exact: quantities, times and ingredients, no hype words, no wellness claims, no exclamation marks.

## Pictures

- [ ] Product pictures share one scale, one lens height and one light, on transparent backgrounds with a soft contact shadow.
- [ ] Lifestyle pictures share one warm, low-contrast grade, with quiet space for chips and captions.
- [ ] The hero render keeps the products visible on phones (it crops from the bottom centre).
- [ ] Every `<img>` has `alt`, `width` and `height`; pictures inside named links have empty `alt`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] The hero rises once on load; sections rise once as they arrive; nothing loops or moves on its own.
- [ ] With reduced motion, everything appears complete and still.
- [ ] Content is visible with JavaScript turned off: every view, the static product, the shop fallback list, every workshop and every journal card.

## Completeness and interactions

- [ ] Every nav, card, pill, footer and paper link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Header links stay on one line at 1440, 1024 and 768 px; when they do not fit, the menu button appears.
- [ ] The menu sheet opens, traps focus in the dialog, and closes with Escape, the close button, a click outside and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The story plus opens and closes its note and updates `aria-expanded` and its label.
- [ ] Rail arrows scroll by one card and disable at the ends.
- [ ] Shop chips, the toggle chip and the sort update the grid, the count and the empty state; `?kind=` preselects; the reset pill clears all three.
- [ ] Product links pass `?id=`; sizes and quantity update the price; thumbnails swap the picture; "Add to bag" updates the header count.
- [ ] The bag adds, steps, removes, totals, shows the free-delivery meter and an empty state.
- [ ] Journal and workshop chips filter with a count and an empty state; booking links preselect the workshop and scroll to the form.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view, and the product page uses the product name.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too); chip rows scroll inside themselves on phones.
- [ ] On phones the panel keeps its inset and rounded corners, products show two to a row, and the rail shows part of the next card.
- [ ] Touch targets are at least 44px, the round buttons included.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including chips on photographs, muted leads, tags and placeholder text.
- [ ] Focus rings are visible on oat, on the panel, on photographs and on the ink band.
- [ ] Chips use `aria-pressed`; the story plus uses `aria-expanded` and `aria-controls`; icon-only buttons have labels; the bag button's label includes the count.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; pictures compressed (WebP or AVIF, under 300 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including products, ingredients, prices, workshops, people and the footnote.
- [ ] Every fact you drafted (prices, sizes, ingredients, dates, delivery terms, opening hours) is listed in your reply for the user to confirm.
- [ ] Nothing claims reviews, ratings, press, certifications, clinical results or numbers the user did not supply; the quote cards and the figure use real words and real facts or are removed.
- [ ] If the user needs orders that are paid, forms that arrive, products they can edit, member accounts or a newsletter, you have read `references/kanorio.md`.
