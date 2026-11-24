# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The light theme is white with near-black text and one blue; the dark theme is near-black with near-white text and the same blue buttons.
- [ ] Display, H1 and H2 are weight 300; the home display headline is blue; no headline is bold, uppercase or tracked.
- [ ] Every corner is square: buttons, fields, tiles, tags, images, dialogs.
- [ ] Tiles are flat grey with no border or shadow, and each linked tile has its arrow 16px from the bottom-right corner.
- [ ] Sections open with a split head; lists use a hairline above each row.
- [ ] There is exactly one hue; red and green appear only in form states.
- [ ] The home page shows at least four signature elements: light blue display, tiles with arrows, hairline lists, square arrow buttons, the flush header action, the mosaic, a dark band or the blue strip.
- [ ] Copy is plain and specific, free of hype words, exclamation marks, em dashes and lorem ipsum.

## Mosaic and images

- [ ] The mosaic strip and panels were recomposed for this brand: no two neighbours share a symbol or a colour pair.
- [ ] The mosaic is `aria-hidden`; the feature card covers exactly the bottom-right two squares and does not leave slivers.
- [ ] Pictograms fit the brief's services and use the same 1.5px blue line.
- [ ] Every raster image has `alt`, `width` and `height`; photos are real, documentary and square-cornered.
- [ ] Placeholder captions remain only where the user still owes a photo, and they are listed in the reply.

## Motion

- [ ] The hero entrance and the mosaic wipe play once on load; reveals rise once as sections enter.
- [ ] With reduced motion, everything appears in place and still.
- [ ] Content is visible with JavaScript turned off, including a summary card in each data-drawn list.

## Completeness and interaction

- [ ] Every view in the nav exists and every link reaches a view, a section ID or a real page; there is no `href="#"`.
- [ ] Service tabs switch by click and arrow keys, and `?tab=` links open the right one.
- [ ] Filters update the list, the live count and the empty state; reset buttons restore everything.
- [ ] Search narrows insights as you type.
- [ ] Each form shows inline errors in a reserved line (the submit button does not move), focuses the first invalid field, and replaces itself with a success notice; Enter submits.
- [ ] Event Register buttons select the event in the form.
- [ ] The theme toggle works and is remembered; the menu dialog opens, closes with its button, Escape and the backdrop, and closes when a link is chosen.
- [ ] The data arrays (`CASES`, `POSTS`, `TEAM`, `ROLES`) and the filter buttons and options use the same keys.

## Responsive

- [ ] At 1440, 1024, 768 and 390 px the header never wraps.
- [ ] Nothing scrolls sideways at 390 px; tables scroll inside their own wrapper.
- [ ] Tiles in a row share one height; split heads stack under 800px; the mosaic strip drops to four squares on phones.

## Accessibility

- [ ] One `<h1>` per view; headings in order; tiles and rows have readable link text.
- [ ] Focus is visible on every control (2px inset ring); the skip link works.
- [ ] Tabs use `role="tablist"`, `role="tab"` and `role="tabpanel"` with `aria-selected`; filter toggles use `aria-pressed`; counts are `aria-live`.
- [ ] Text contrast meets WCAG AA in both themes, including grey eyebrows on grey tiles.

## Performance

- [ ] Two font files only; the variable Public Sans is preloaded.
- [ ] The finished single file is under 1 MB without photos.

## Real brief

- [ ] Every client, figure, price, quote, date and person comes from the user or is a marked placeholder listed in the reply.
- [ ] No invented testimonials, awards, certifications, partner logos or compliance badges.
- [ ] All sample strings from the Replace checklist in SKILL.md are gone.
