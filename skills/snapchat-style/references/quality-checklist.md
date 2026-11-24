# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Home on a wide screen is split: the calm join column on the left (sticky, content centred, a hairline beside it) and two columns of tall 4:7 story cards on the right.
- [ ] Every story card has a big white sentence at the top over a dark gradient and one dark glass pill at the bottom centre, and nothing else.
- [ ] The header has icons over labels in the middle, grey round buttons and pills on the right, one yellow pill.
- [ ] Yellow appears on one main action per screen, the page badges and at most one banner. Blue appears only on submits and links.
- [ ] Inner pages open with a round yellow badge beside the H1; filters are outline pills with a thicker outline when chosen.
- [ ] One huge centred line sits between the cards and the directory; the footer is a black bar.
- [ ] Copy is short and warm; card lines are sentences with full stops.

## Pictures

- [ ] Photos are vertical, saturated, with a calm top third so the white line reads.
- [ ] Every `<img>` has `alt`, `width` and `height`; story card photos use empty alt because the card's line names them.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Cards and tiles rise once when a view is shown.
- [ ] The viewer's bars fill, snaps advance, the last snap opens the next story; holding the frame, the pause button and Space pause it.
- [ ] With reduced motion, nothing animates and the viewer opens paused but still steps by tap and keys.
- [ ] Without JavaScript every view is readable in order and the viewer shows a still with the snaps listed.

## Completeness and interactions

- [ ] Every nav item, menu tile, card, tile, directory link, footer link and button reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The header stays on one line at 1440, 1024 and 768 px; the grid button opens the menu, which closes with Escape, the close button, a click outside and a link.
- [ ] Search: Enter opens Stories filtered by every word; the count says what matched; no results shows the empty state with a reset.
- [ ] Filter pills filter, update the count and support deep links (`?type=`, `?c=`).
- [ ] Save my spot, likes and product holds toggle, stay on this device and confirm with the toast.
- [ ] The email or phone swap in the join column swaps the field and its validation.
- [ ] Course level tabs work with clicks and arrow keys and keep the form's level in step; `?level=` opens a level.
- [ ] The product page requires a size before holding; products without sizes hide the size field.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success card, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Document titles change per view, story and product.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px in light and dark.
- [ ] Below 900px the split stacks with the cards first and the join column after them; below 600px cards are one column.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too).
- [ ] The viewer stacks the frame above its actions and details on phones; touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view (home's is in the join column).
- [ ] White text on photos sits on a scrim or glass; text contrast meets WCAG 2.2 AA in both themes, including black on yellow, white on blue and muted labels.
- [ ] The focus ring shows on white, grey, yellow, photos and dark.
- [ ] Filter pills, spots, likes and holds use `aria-pressed`; sizes are a `radiogroup`; tabs use `role="tablist"`, `aria-selected` and `aria-controls`; counts, captions, errors and the toast are live regions.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; photos compressed (WebP or AVIF, under 150 KB each at 720 wide); no `loading="lazy"` in the single file.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including nights, stories, products, people, prices, hours and the address.
- [ ] Every fact you drafted (dates, times, prices, sizes, hours, bios, numbers) is listed in your reply for the user to confirm.
- [ ] No like counts, follower counts, ratings, reviews or press the user did not supply.
- [ ] The join column asks for something the visitor wants; there is no fake sign-in or password field.
- [ ] If the user needs forms that arrive, content they can edit themselves, payments, member accounts, a newsletter or image hosting, you have read `references/kanorio.md`.
