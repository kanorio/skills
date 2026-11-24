# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The header is white with one saturated pill per kids' section (icon plus label), the Grown-ups link and the theme toggle; the current pill has its ring.
- [ ] Each kids' section has its own colour, and that colour is its pill, its canvas, its badges and its friend band. No two sections share a colour.
- [ ] Canvases are full-bleed with small, still, sparse confetti; the home page is yellow.
- [ ] Every kids' card is white-framed with a round badge on the picture's bottom-right corner; new items have the tilted red sticker.
- [ ] Portraits are round with a frame-coloured ring.
- [ ] Grown-ups pages are white and calm, with the tab bar and a green kicker.
- [ ] Headings and labels are Baloo 2 in sentence case; body text is Andika; no uppercase anywhere.
- [ ] Labels on fills are white; text on canvases is ink.
- [ ] No gradients, glass, blur, emoji, icon fonts or stock photos of children.

## Characters and images

- [ ] One cast, built from simple shapes with the shared face and legs, in the fixed palette.
- [ ] No existing character, puppet, mascot or lookalike; the user's own characters only with permission.
- [ ] Every scene leaves the middle for the friends; props have no text.
- [ ] Children's photos only on grown-ups pages, only with the owner's confirmation of consent.
- [ ] Every image has `alt` (empty for decoration), `width` and `height`.

## Motion

- [ ] Tiles lift and tilt, badges turn, pills and buttons lift; nothing loops or plays on its own.
- [ ] With reduced motion everything appears complete and still.
- [ ] Content is visible with JavaScript turned off, including the first tiles of every list and the first story.

## Completeness and interactions

- [ ] Every pill, tile, portrait, tab and footer link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The friend band, topic chips and day chips filter, update the count and show an empty state.
- [ ] The game plays to the end (wrong answers shake and say "Not that one", right ones pop and fill a star) and Play again resets it.
- [ ] The colour-in fills each part with the chosen colour and Start over clears it.
- [ ] The story reader turns pages with the arrows, a tap and the arrow keys; dots and the page label follow.
- [ ] Book buttons preselect the class and day; the booking and contact forms show errors under each field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">`.
- [ ] Document titles change per view, including the name of the game or story.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px; the header never wraps at 1440, 1024 and 768.
- [ ] Below 640px the pills form their own row of round buttons, evenly spaced, and the brand, Grown-ups and toggle fit on the first row.
- [ ] No horizontal scrolling at any width (`document.documentElement.scrollWidth <= innerWidth` in a normal 390px window); the friend band and the tab bar scroll inside themselves.
- [ ] Touch targets are at least 44px; answer buttons, arrows and age buttons are bigger.

## Accessibility

- [ ] Landmarks: header, nav (pills, tab bar, footer columns), main, footer; one `h1` per view.
- [ ] Contrast meets WCAG 2.2 AA in both themes: white on every fill, ink on every canvas, inputs and chips outlined at 3:1.
- [ ] Focus rings are visible on every interactive element, on every canvas, in both themes.
- [ ] Filters use `aria-pressed`; the count, the game prompt and the story pages are live regions; badges carry a hidden type; swatches and age buttons are labelled radios.

## Children's safety and the kids' pages

- [ ] No ads, outside links, pop-ups, purchase buttons, streaks or timers on the kids' pages.
- [ ] Children are never asked for personal details; forms are for grown-ups and say so.
- [ ] Safety, group size, staff ratio and data claims come from the owner, word for word, or are removed.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; SVG drawings only; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including the friends, the teachers, the address and the email.
- [ ] Activities, stories and their texts are about the real subject; ages and times are real.
- [ ] Every fact you drafted (prices, ages, times, rooms, policies) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, accreditations, safety certifications, learning outcomes or numbers the user did not supply.
- [ ] If the user needs forms that deliver, editable content, payments, member login, courses or a newsletter, you have read `references/kanorio.md`.
