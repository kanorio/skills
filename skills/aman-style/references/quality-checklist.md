# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is limewash with warm charcoal text; the evening theme is warm near-black, never pure black.
- [ ] Every heading and card title has a tiny tracked eyebrow above it.
- [ ] Headings are a light serif (300 to 400), sentence case, never bold.
- [ ] Actions are underlined text links; the header button and form submits are the only solid buttons.
- [ ] Pictures are unframed, square-cornered and set into uneven whitespace: the hero leaves empty columns beside it, pairs mirror, cards stagger.
- [ ] There is no accent colour, no gradient, no shadow, no badge and no text over a picture.
- [ ] Copy is calm and specific: exact times and distances, few adjectives, no hype words or exclamation marks.

## Pictures

- [ ] All pictures share one light and one grade (natural light, low saturation, empty space).
- [ ] Crops keep the subject in both the desktop and the phone hero.
- [ ] Every `<img>` has `alt`, `width` and `height`; decorative card pictures inside a named link have empty `alt`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Reveals rise and fade once; pictures settle once; nothing loops or moves on its own.
- [ ] With reduced motion, everything appears complete and still.
- [ ] Content is visible with JavaScript turned off, including both dining panels and every room.

## Completeness and interactions

- [ ] Every nav, card, rail, footer and text link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Header links stay on one line at 1440, 1024 and 768 px; when they do not fit, the menu button appears.
- [ ] The menu sheet opens, traps focus in the dialog, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The rail's arrows scroll by one card, disable at the ends, and the scroll line follows a swipe.
- [ ] Filters update the list, the count and the empty message; `?outlook=`, `?season=` and `?kind=` preselect; the reset button clears the guests select too.
- [ ] Gallery thumbnails swap the picture, the counter and `aria-pressed`.
- [ ] Dining tabs work with clicks and arrow keys; `?tab=` opens the right one.
- [ ] Room links pass `?room=` and preselect the room; arrival cannot be in the past; departure must be after arrival.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too).
- [ ] On phones the asymmetry survives: pictures lean left and right, the rail shows part of the next card.
- [ ] Touch targets are at least 44px, text links included.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including eyebrows, captions and placeholder text.
- [ ] Focus rings are visible on limewash, stone and warm black.
- [ ] Chips and thumbnails use `aria-pressed`; tabs use `role="tablist"`, `aria-selected` and `aria-controls`; the map has a title and a description.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; photographs compressed (WebP or AVIF, under 300 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including room names, sizes, treatments, menus and people.
- [ ] Every fact you drafted (rates, sizes, times, distances, policies, treatments) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, ratings, reviews, certifications, star classifications or press the user did not supply.
- [ ] If the user needs enquiries that arrive, rooms or menus they can edit, payments, member accounts or a newsletter, you have read `references/kanorio.md`.
