# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in light and dark.

## Look and feel

- [ ] The chrome is black and white only: black header, black and white bands, black or white buttons. No brand color on buttons, links, headings or backgrounds.
- [ ] The first screen has the route form: the "when" pill, stacked grey fields with a dot, a line and a square, a rectangular button and an underlined link.
- [ ] Bands take turns (a black stretch, then white, then black), and every change of color has a seam picture straddling it.
- [ ] At least six signature elements are present: route form, pill header, alternating bands, seam picture, grey service cards with white pills, the illustration mosaic, the steps carousel, the sub-nav, underlined text links, white contact cards on black.
- [ ] Headlines are Albert Sans 700, short, left aligned, in sentence case; one display headline per page.
- [ ] Main actions are 8px-cornered rectangles; navigation, chips and small actions are pills; secondary actions are underlined text links.
- [ ] Copy is plain and concrete, with a verb on every button and no hype words, exclamation marks, emoji or lorem ipsum.

## Images

- [ ] Every picture is a flat editorial illustration from one palette with halftone shadows, or every picture is a photo; never both.
- [ ] Each picture fills its frame edge to edge; nothing floats on the band color.
- [ ] The hero mosaic shows four different jobs; seam pictures are wide scenes with the subject in the middle band.
- [ ] Service cards have a spot drawing each, from the same palette.
- [ ] No other company's logos, photos or characters; every image has `alt`, `width` and `height` (`alt=""` for seams and decorative spots).

## Motion

- [ ] Hero copy and blocks rise once; nothing loops, bounces or auto-advances.
- [ ] The carousel moves only when asked, and its counter and arrows match the position.
- [ ] With reduced motion everything is visible at once and scrolling jumps instead of gliding.
- [ ] Content is visible with JavaScript turned off, and the steps track still scrolls sideways.

## Completeness and interaction

- [ ] Every link reaches a view, a section ID or a real page; there is no `href="#"`.
- [ ] The hero form validates, then opens the booking view with the service, address and day filled in.
- [ ] The booking view shows the extra stop for moving-type services, updates the summary on every change and ends in a success card with a reference.
- [ ] Services filter by chip and search, with an empty state; `?cat=` preselects a chip.
- [ ] The service view fills from `?s=` for every service, including prices and related cards.
- [ ] The pricing switch, the trade chips, the help topics and search, and the journal chips all work.
- [ ] Every form shows floating errors that never move the button, a sending state and a success state, and is handled on the submit button's click.
- [ ] The theme toggle works and remembers the choice; both themes are complete, including fields on black bands.

## Responsive

- [ ] At 1440, 1024 and 768 the header stays on one line; under 960px the links move into the menu.
- [ ] At 390 the hero form is full width, the mosaic sits below it with the floating card under the grid, cards stack, and nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth`).
- [ ] Sub-nav links scroll sideways on phones instead of wrapping.
- [ ] Tap targets are at least 36px (pills) or 48px (buttons, fields).

## Accessibility

- [ ] One H1 per view, headings in order, landmarks for header, main, footer and each nav.
- [ ] Every field has a label (visually hidden in the route form), errors are linked with `aria-describedby`, and the shared route error has `role="alert"`.
- [ ] Focus is visible on every control; chips and segmented buttons use `aria-pressed`; the current page uses `aria-current`.
- [ ] Text contrast passes WCAG AA on white, black and grey surfaces, including muted text on the grey cards.

## Performance

- [ ] One font file, inline SVG icons and spots, illustrations under about 10 KB each.
- [ ] No external requests; `scripts/inline.mjs` produces one file that works from disk.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, and every drafted price, area, hour and policy is listed in the reply for the user to confirm.
- [ ] No invented reviews, ratings, customer counts, certifications or insurance claims.
