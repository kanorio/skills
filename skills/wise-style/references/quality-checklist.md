# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Home opens on a full-bleed lime field (forest in dark) with one heavy all-caps headline of three or four short lines.
- [ ] Display, H1 and H2 use the display face at 900 in capitals with tight leading; nothing else is in capitals.
- [ ] The card trio rises out of the field in three different colors, each card with one white widget showing real numbers.
- [ ] Every action is a pill; there are no square or outline buttons.
- [ ] Lime surfaces carry forest text and buttons; ink and plum carry pale text with lime or peach headings.
- [ ] Colored cards are flat: no borders, no heavy shadows, no gradients.
- [ ] No emoji, flags, bank or card-network logos, security seals, stock photos or 3D coins.
- [ ] Copy is plain and specific, with no hype words, exclamation marks or promises of returns or savings.

## Widgets, covers and images

- [ ] Widgets use the brief's own objects and figures; every example figure is clearly an example or comes from the user.
- [ ] Money uses tabular figures with the cents in `<small>`; columns of figures line up.
- [ ] Guide covers rotate lime, aqua, peach and ink, and the cover words fit a phone column.
- [ ] Every raster image has `alt`, `width` and `height`, and none uses `loading="lazy"` in a single-file page.

## Motion

- [ ] The hero settles in once on load; reveals rise once; the fee bars wipe in from the left.
- [ ] Calculator totals count to the new value and bump once; nothing loops.
- [ ] With reduced motion, everything appears in place and still.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer, card and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The mobile menu opens, closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The calculator's chips, stepper and switch all change the total, the fee bars follow it, and "Start with this quote" carries it to the sign-up panel.
- [ ] The billing switch updates every plan price and its billing line.
- [ ] Filter chips and search work together, the count updates, the empty state appears and its button resets; `?cat=` preselects a chip.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view; `?plan=` fills the sign-up panel.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px; the header never wraps (links fold into the menu under 1000px).
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); tables scroll inside their own box.
- [ ] On phones the hero pills go full width, the trio stacks, pill bars keep one or two lines, and grids drop to one column.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted text on sage, lime and aqua.
- [ ] Focus rings are visible on every interactive element, including on lime, ink and plum surfaces.
- [ ] Filters and the billing switch use `aria-pressed`; the tier chips use `role="radio"` with `aria-checked`; the switch uses `role="switch"`; live counts and the total use `aria-live`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including names in quotes, avatars, the team and the footer.
- [ ] Every fact you drafted (prices, rates, response times, years, team members, quotes) is listed in your reply for the user to confirm.
- [ ] Nothing claims licences, regulatory status, certifications, awards, ratings or client counts the user did not supply.
- [ ] If the user needs forms that deliver, editable content, payments, member login or a newsletter, you have read `references/kanorio.md`.
