# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The canvas is warm cream in light and warm charcoal in dark; the hero and the lanes section sit on near-white (or lifted charcoal) stage panels with 32 to 64px radii, inset from the viewport edge.
- [ ] The header is a floating pill on one line at every width, with the round theme button.
- [ ] Headlines are Kumbh Sans at 500; the hero and at least one statement section use the display size.
- [ ] Almost every headline has an orange-dot eyebrow in small tracked capitals.
- [ ] Orange appears only as dots, thin lines, outlines and behind dark text; primary buttons are ink pills.
- [ ] Every control is a pill or a circle; every card has a 36px radius; nothing has a hard corner.
- [ ] No emoji, gradients on surfaces, glass panels, bold display type, or overlapping-circle marks.
- [ ] Copy is plain and warm, free of hype words, exclamation marks, em dashes and lorem ipsum.

## Pictures

- [ ] Every photo is cropped into a circle, stadium, arch or tall rounded card; circles carry their offset orange ring.
- [ ] Round arrow buttons sit on the edge of portholes, alternating white and orange, and each has an `aria-label`.
- [ ] The orbit line sweeps above the copy and behind the photo, never across text; it is hidden on phones.
- [ ] Faces survive every crop at 1440, 768 and 390 px.
- [ ] Every image has `alt`, `width` and `height`, and every path in the script's `IMAGES` map is written out in full.

## Motion

- [ ] The orbit line draws itself once; reveals rise once; photos settle into their crops; nothing loops.
- [ ] With reduced motion, everything appears in place and the orbit line is complete.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer, card, lane and arrow link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The menu opens under the pill, closes with Escape, the button, a link and a click outside, and its button label changes.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The carousel's prev and next buttons, dots and swipe agree; the first and last states disable the arrows.
- [ ] Workshop chips and the online chip filter cards, the count updates and the empty message appears.
- [ ] Story chips and search filter the cards; the empty message appears.
- [ ] The frequency switch updates every tier price and the form; "Choose this" moves the featured outline and fills the amount.
- [ ] `?topic=` preselects the booking topic; volunteer role buttons fill the role.
- [ ] Copy link reports success, or says the frame blocked it.
- [ ] Every form shows errors under invalid fields without moving the submit button, a sending state and a success panel that echoes the email, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px; the header never wraps.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); rings and the carousel stay inside their sections.
- [ ] Lanes become rounded cards with the photo on top below 860px; the service field becomes one column; carousel slides become circles.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted text on stages and the footer; no text sits on orange except dark text.
- [ ] Focus rings are visible on cream, on stages, on photos and in the ink footer.
- [ ] Chips and the frequency switch use `aria-pressed`; counts use `aria-live`; the menu button uses `aria-expanded`; the carousel dots have labels.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open`, top navigation, fixed bars or bottom-sticky elements.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including workshop, story and team data in the script.
- [ ] Every fact you drafted (services, hours, prices, quotes, figures, team, partners, promises) is listed in your reply for the user to confirm.
- [ ] Nothing claims accreditation, licenses, awards, partners or results the user did not supply.
- [ ] If the user needs forms that deliver, editable content, payments, member login, courses or a newsletter, you have read `references/kanorio.md`.
