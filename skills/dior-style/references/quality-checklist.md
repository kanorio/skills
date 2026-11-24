# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] White and pearl by day, near-black and charcoal at night; both themes complete, the system setting followed until the toggle is used.
- [ ] The wordmark is centred in the header in tracked serif capitals; on home the header is clear and white over the film until the page scrolls.
- [ ] Every title is the serif at weight 400 with a tracked caption above it; body text is the sans; nothing in the serif is bold.
- [ ] Films are full-bleed, each with a round play control and chapter lines; their stories sit underneath (only the hero and the grid film carry words on the picture).
- [ ] Every product stands alone on a pearl tile with 2px seams between tiles; names are tracked capitals with the price under them.
- [ ] One black pill per screen at most; other actions are outlined pills or underlined capitals.
- [ ] Copy is quiet and material: short headlines, no superlatives, no exclamation marks.

## Pictures

- [ ] Film stills of one film share one light and grade; product pictures share one scale and camera height.
- [ ] Product pictures have transparent backgrounds and look right on pearl and on charcoal.
- [ ] White captions on films stay readable over the scrim; `--fx` keeps the subject in frame on phones.
- [ ] Every `<img>` has `alt`, `width` and `height`; extra stills inside a film have `alt=""`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Films play only on screen, pause and resume with the control, and stay paused once paused; the chapter lines switch stills.
- [ ] With reduced motion nothing moves, the play control is hidden, and every reveal is visible.
- [ ] Content is visible with JavaScript turned off: every view, every product tile, film, date and answer, and the first still of every film.

## Completeness and interactions

- [ ] Every nav, tile, card, footer and underlined link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Header links stay on one line at 1440, 1024 and 768 px; when they do not fit, only the menu button shows them.
- [ ] The menu drawer opens, keeps focus inside, and closes with Escape, the close button, a link and the backdrop.
- [ ] The theme toggle works and remembers the choice.
- [ ] `#/piece?id=<id>` fills name, price, kind, description, colour, sizes, picture, the second action and "Worn with" for every product.
- [ ] Adding without a size shows the error under the sizes without moving the button; adding updates the header count and the selection.
- [ ] The selection's stepper, remove and totals work, and "Send to a client adviser" carries the list into the form.
- [ ] Filters update the grid or list, the count and the empty message; `?cat=`, `?kind=` and `?city=` preselect; sorting keeps the film tile in place.
- [ ] `?service=`, `?salon=`, `?piece=` and `from=selection` preselect the appointment form; the date cannot be today or earlier.
- [ ] Every form shows errors under invalid fields without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view and per product.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too).
- [ ] The product grid is four, three, then two across; the diptych stacks; wide films turn 4:5 on phones.
- [ ] Touch targets are at least 40px; chips and pills at least 36px tall.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, captions on films included.
- [ ] Focus rings are visible on white, pearl, charcoal and on films.
- [ ] Chips use `aria-pressed`; the play control uses `aria-pressed` and a label that says what it will do; chapter lines are labelled buttons.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two variable font files with the Latin subset; pictures compressed (WebP or AVIF, under 300 KB each); no video files.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including product names, fragrance names, salons, credits and dates.
- [ ] Prices, sizes, compositions, opening hours, show dates and delivery terms the user did not give stay as visible placeholders and are listed in your reply.
- [ ] Nothing claims heritage years, awards, celebrity clients, press, certifications or craft hours the user did not supply.
- [ ] If the user needs requests that arrive, products or films they can edit, payments, member accounts or a newsletter, you have read `references/kanorio.md`.
