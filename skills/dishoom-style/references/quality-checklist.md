# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is cream paper with ink text; the hero, the locations band and the footer are ink in both themes.
- [ ] Every picture (except day cards and darkened band pictures) sits in a double-rule frame and has a direction caption.
- [ ] Section titles are uppercase serif with wide tracking; page headings are sentence case; nothing is bold and tight.
- [ ] Home has the staggered introduction: a two-line lede and offset frames, one with a vertical caption.
- [ ] Ornaments are only the diamond row, the diamond chain, the flourish, pinstripes and short double rules, one per section.
- [ ] Buttons are square outlines with an inner rule; the solid button is ink. No pills, shadows or gradients outside band scrims.
- [ ] Teal is only for dish names and red only for chains, tags and errors.
- [ ] Copy is warm and specific, with real times and plain dish descriptions; no hype words, exclamation marks or lorem ipsum.

## Pictures

- [ ] Captions name what is in each picture and where, in one sentence.
- [ ] Crops keep the subject clear of caption plates and the hero quote.
- [ ] Every `<img>` has `alt`, `width` and `height`; decorative pictures behind text have empty `alt`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Reveals rise once, pictures settle once in their frames, diamond rows draw once; nothing loops.
- [ ] With reduced motion, everything appears complete and still.
- [ ] Content is visible with JavaScript turned off, including every menu tab.

## Completeness and interactions

- [ ] Every nav, footer, card, band and arrow link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Header links stay on one line at every width; when they do not fit, the header shows the menu button instead.
- [ ] The menu sheet opens, traps focus in the dialog, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Menu tabs work with clicks and arrow keys; `?tab=` opens the right one; the dietary chips hide dishes and empty courses and show the empty message.
- [ ] The town and journal filters update their lists, counts and empty messages; `?city=` and `?kind=` preselect.
- [ ] Booking links pass `?cafe=` and preselect the location; the date cannot be in the past; time slots are required.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width; the tab bar scrolls inside itself.
- [ ] The staggered layouts stack cleanly; vertical captions stay beside their frames; the menu becomes one column without splitting dishes.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted ledes, captions and text on darkened pictures.
- [ ] Focus rings are visible on paper and on ink.
- [ ] Tabs use `role="tablist"`, `aria-selected` and `aria-controls`; chips use `aria-pressed`; the map has a title and a description.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; real photos are compressed and lazy-loaded below the first screen.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including dishes, prices, hours, locations and people.
- [ ] Every fact you drafted (prices, hours, booking rules, years, events, policies) is listed in your reply for the user to confirm.
- [ ] Nothing claims reviews, ratings, awards, press, certifications or allergen safety the user did not supply.
- [ ] If the user needs bookings or forms that deliver, menus they can edit, ordering, gift cards or a newsletter, you have read `references/kanorio.md`.
