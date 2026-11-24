# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Every view starts with the flat green band, and its lower edge is one smooth, shallow arch with no seam under the header.
- [ ] The home band holds only the mark and name, a two-line tagline and two to four round translucent buttons.
- [ ] Exactly three white entry cards sit under the arch, each with one icon in its own colour and a short label.
- [ ] Inner pages lift a white panel, cards or the carousel onto the curve, and no sliver of green shows below a lifted card.
- [ ] Introductions are centred; lists, forms and articles are left-aligned inside white cards.
- [ ] The page is pale grey with white cards; there are no other coloured sections besides the bands.
- [ ] Copy is short and plain, with no hype, lorem ipsum, exclamation marks or em dashes.

## Pictures

- [ ] Illustrations are flat: solid panel, rounded shapes, no outlines, no faces, no readable text.
- [ ] No logo, icon or interface of a real company or platform appears anywhere, including the round platform buttons.
- [ ] Meaningful pictures have `role="img"` and a label, or `alt`; decorative drawings are `aria-hidden`.
- [ ] Every raster image has `alt`, `width` and `height`.

## Motion

- [ ] The band contents and cards rise in once; nothing loops or autoplays.
- [ ] With reduced motion everything appears at once.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every header, entry card, round button, service icon, story, footer and in-text link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The current page is underlined in the header on every view, including the post view.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Chips, help categories and searches update the count, and show an empty message when nothing matches.
- [ ] The carousel dots, the numbered pages, the billing toggle, "Save a spot", the stepper and the character counter all work.
- [ ] Every form shows an error under each invalid field without moving the button, then a success state with a way back.
- [ ] Every `pattern` attribute compiles (no console error): inside a character class, `( ) [ ] { } / - |` are escaped, as in the template's phone field.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] The header never wraps; under 1180px the links move into the menu, under 560px the white button hides.
- [ ] The round buttons go two by two on phones; entry cards stack; chips scroll sideways inside their panel.
- [ ] No horizontal page scrolling at any width (`document.documentElement.scrollWidth <= innerWidth`).
- [ ] Touch targets are at least 44px (footer links, dots and chips at least 24px).

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] White text on the band and on green buttons reaches 4.5:1 in both themes; links and muted text pass on white and on grey.
- [ ] Focus rings are visible on every interactive element, white on the band.
- [ ] Chips and help categories expose `aria-pressed`; counts and errors are announced with `aria-live`.
- [ ] Icons inside links and buttons are `aria-hidden`, and icon-only buttons have a label.

## Performance

- [ ] One font file, no remote requests, illustrations drawn once as symbols.
- [ ] The single file stays small: no base64 photos larger than they need to be.

## Real brief

- [ ] Every sample string from the replace checklist is gone.
- [ ] Prices, hours, dates, counts and the story's years are the user's, or are marked placeholders listed in the reply.
- [ ] No invented reviews, members, partners, awards or certifications.
