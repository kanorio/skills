# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The console bar floats at the top of every view: deep purple, rounded, five mode buttons in five colours with darker icon chips, the green main action; the white link bar sits under it.
- [ ] Every colour has a job: mode colours on modes, slanted cards and rules; answer colours only on answer tiles and steps; gradients only on cards, tiles and detail heads. Body text is charcoal or grey in light, near-white or lilac grey in dark.
- [ ] The home hero has one gradient phrase and three gradient cards with folder tabs, the deep card last; every card ends in a framed picture cut off by its bottom edge.
- [ ] Tiles fade from saturated at the top to pale at the bottom (deep in dark) and carry a large white line drawing.
- [ ] Notes use slanted colour cards with a tilted panel edge and a tilted white tab at the foot.
- [ ] Buttons are compact with 6px corners and a pressable bottom edge; one green button per group, paired with a bold text link.
- [ ] Answer tiles show letters, never shape icons.
- [ ] One family, heavy headlines (850 to 900), body at 450; tracked capitals only in tabs, eyebrows and kind labels.
- [ ] The footer is charcoal in both themes.

## Pictures

- [ ] Scenes share one flat palette, or photographs share one warm, bright treatment; no mix of styles in one row.
- [ ] Every `<img>` has `alt`, `width` and `height`; card pictures describe the scene because detail views reuse them.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Cards and tiles spring in once; filters re-animate the list; the right answer bumps and the leaderboard re-orders.
- [ ] With reduced motion everything appears complete and still, the timer bar is full and still, and the question marks behind the promo strip do not move.
- [ ] Content is visible with JavaScript turned off: every view in order, the first night and the featured note; home sections copied by script are hidden rather than empty.

## Completeness and interactions

- [ ] Every mode, tile, card, text link and footer link reaches a view, a section or a real page; unknown night and note slugs show the 404 view.
- [ ] The console never wraps at 1440, 1280, 1024 and 768 px; icon tiles appear under 1024 px and move to a second row under 768 px; the menu button appears under 900 px and the sheet closes with Escape, the close button and any link.
- [ ] On small screens only the white link bar stays at the top while scrolling, and `--cw` matches the console strip height at every breakpoint.
- [ ] The console search opens the nights list filtered by the words typed, with Enter and with the button.
- [ ] Chips and search filter nights, tracks and notes; the count and the empty state follow; the empty state's button resets both; `?kind=`, `?q=` and `?level=` preselect.
- [ ] The warm-up round scores, shows the true fact, re-orders the leaderboard, finishes with a place and restarts with "Play again".
- [ ] The format switch on the teams view changes every price and the note under it.
- [ ] The carousel arrows scroll and hide at the ends; the promo strip closes and stays closed; the theme toggle remembers the choice.
- [ ] Every night card has a `NIGHTS` entry and every note card a `POSTS` entry; the night view shows its own title, date, time, venue, rounds, host and price, and its booking form starts empty.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel that repeats the email, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view, including night and note names.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too).
- [ ] Gradient cards stack under 1024 px; answers stack under 520 px; the comparison table scrolls sideways inside its box.
- [ ] Touch targets are at least 40px; answer tiles at least 60px tall.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes: white on every mode, answer, tile, slanted-card and date colour; grey text on pastel cards; the blue notes under prices.
- [ ] Focus rings are visible on grey, on white, on the purple console and on saturated tiles.
- [ ] Chips, the format switch and the theme toggle expose their state (`aria-pressed`, labels); counts and the quiz feedback are `aria-live`; check marks in the table have a text label.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; pictures compressed (small SVG, WebP or AVIF under 300 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including hosts, venues, team names, prices, dates and the email domain.
- [ ] Every price, date, venue, host and quiz question is the user's own or listed in your reply as drafted; quiz facts are true.
- [ ] Nothing claims customers, awards, press, research results or testimonials the user did not supply.
- [ ] If the user needs bookings or enquiries that arrive, content they can edit without code, payments, member sign-ups, a newsletter or image hosting, you have read `references/kanorio.md`.
