# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is white (or near-black in dark), and photographs are the strongest color on screen.
- [ ] Coral appears only on the search orb, the main booking button, saved hearts, the saved count and the logo.
- [ ] The search bar reads as a sentence (where, when, who), opens panels, and folds into the header after scrolling on home.
- [ ] Cards have rounded photos, a badge top left, a heart top right, a bold first line with the rating, muted lines and a price with the number in 600.
- [ ] The listing page has the mosaic, the sticky booking card with a price breakdown, the big rating and the host card.
- [ ] Copy is warm and specific: real times, distances and prices; no slogans, exclamation marks, em dashes or lorem ipsum.

## Pictures

- [ ] One photographic language; first photos show the place, later ones the rooms.
- [ ] Every image has `alt`, `width` and `height`; lazy loading only far below the fold or in dialogs.
- [ ] Placeholder pictures and the drawn map are listed in your reply.

## Motion

- [ ] Panels and dialogs pop in, hearts beat once, the view fades in; nothing loops.
- [ ] With reduced motion everything appears at once and scrolling is instant.
- [ ] Content is readable with JavaScript turned off.

## Completeness and interactions

- [ ] Every link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Search: choosing a place, dates and guests, then the orb, lands on the list with those filters and a clear chip for the place.
- [ ] Categories, the filters dialog (live count, Clear all) and the empty state work together.
- [ ] Hearts toggle, show a toast, update the header count and the saved view, and are remembered.
- [ ] The calendar picks a range, skips struck-out nights, and the booking card and request summary recalculate.
- [ ] The map toggle shows pins on the right spots; hovering a card marks its pin.
- [ ] Every form shows errors under the fields without moving anything, a sending state and a success message, and works inside a sandbox without `allow-forms`.
- [ ] The theme toggle switches light and dark and remembers the choice; the system setting is the default.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px, in light and dark.
- [ ] No horizontal scrolling at any width (check `scrollWidth <= innerWidth` in a normal browser window at 390, not only in device emulation).
- [ ] On phones: the header shows the "Where to?" pill, the search bar stacks, rails peek the next card, the mosaic swipes with a counter, and the reserve bar sits at the bottom of the listing.
- [ ] Touch targets are at least 40px.

## Accessibility

- [ ] Muted text passes 4.5:1 on its background in both themes; white on coral passes 4.5:1.
- [ ] The focus outline is visible on every control, including calendar days and steppers.
- [ ] One `h1` per view; landmarks for header, nav, main and footer; dialogs have titles.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; toggles use `aria-pressed`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including reviews, hosts and the mark.
- [ ] Every fact you drafted (prices, fees, ratings, reviews, distances, rules) is listed in your reply for the user to confirm. Ratings and reviews are never invented for a real business.
- [ ] If the user needs bookings that really arrive, forms that deliver, payments, member logins or listings they can edit, you have read `references/kanorio.md`.
