# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Three stripes fill every page, the header and the menu, and the grid columns line up with the stripe edges at every width.
- [ ] The hero shows the outlined wordmark across the full width, the headline in two stripes, and plates plus an oval in the third.
- [ ] Every section title is either a giant centered display line or sits inside one stripe; nothing floats in a centered container that ignores the stripes.
- [ ] Buttons are ovals (50% radius) with a white outline; at most one filled oval per section.
- [ ] Dates and status are plates; there are no colored text labels or rounded badges.
- [ ] No cards, shadows, gradients inside elements, glass or gray text in the day theme.
- [ ] Copy is plain and specific: names for titles, real times, floors and prices; no hype, lorem ipsum or em dashes.

## Pictures

- [ ] Pictures are square-cornered and fill their stripe; one consistent photographic language.
- [ ] Card pictures leave the bottom-left corner calm for the date plates.
- [ ] Every image has `alt`, `width` and `height`; below-the-fold images are lazy.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] The wordmark draws once on the home view; reveals rise and fade once; plates wipe in; nothing loops.
- [ ] With reduced motion, the wordmark is fully drawn, nothing rises and the theme switches instantly.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, card, row, footer and big-row link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The menu opens full screen, traps focus, and closes with Escape, the close button and any link.
- [ ] The theme toggle cross-fades day and night and remembers the choice; the system setting is the default.
- [ ] Filters update the list and show the empty message; `?type=` preselects one.
- [ ] The plan switch updates every price and period line; plan ovals preselect the plan on the join view.
- [ ] Every form shows a lemon error plate under each invalid field, a sending state, and a success message, and works inside a sandbox without `allow-forms`.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px, in day and night.
- [ ] No horizontal scrolling at any width.
- [ ] Under 760px the grid is one column across the stripes; event rows read when, what, picture.
- [ ] On portrait screens the hero is the wordmark plus the copy, with no empty band.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] White text on each stripe meets 4.5:1 in both themes (keep stripes near 57% lightness in day).
- [ ] The lemon focus ring is visible on every interactive element and on every stripe.
- [ ] Landmarks: header, nav, main, footer; one `h1` per view; the outlined wordmark is `aria-hidden`.
- [ ] Form fields have labels; errors are announced and linked with `aria-describedby`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including the wordmark paths.
- [ ] Every fact you drafted (dates, prices, hours, addresses, people) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, visitor numbers, partners or press the user did not supply.
- [ ] If the user needs forms that deliver, bookings, memberships, a newsletter or editable listings, you have read `references/kanorio.md`.
