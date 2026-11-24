# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is white (dark: warm near-black, never pure black); colour comes from the pictures.
- [ ] The wall keeps every picture at its own ratio, in tight columns with uneven bottoms, and starts on the first screen of home.
- [ ] Every corner is rounded: 16px pictures and cards, 32px panels, pill controls.
- [ ] Red appears only on Save, the main button of each screen and the mark. Chosen chips, Saved and Following are ink, not red.
- [ ] Search, chips and secondary buttons are warm grey pills.
- [ ] Headings are heavy and tight (700 to 800, negative letter-spacing), sentence case.
- [ ] No illustrations, gradients, emoji or text over pictures (category tiles excepted).
- [ ] Copy is practical and short: numbers in notes, no hype, no invented popularity.

## Pictures

- [ ] All pictures share one light and grade, and the set mixes tall, portrait, square and a few landscape ratios.
- [ ] Every `<img>` has `alt`, `width` and `height`, and the sizes match the real files (the wall is placed by them).
- [ ] The close-up has descriptive alt text; wall tiles use empty alt with the title link beside them.
- [ ] Board covers and category tiles crop well (subject in the middle, no bright centre under white text).
- [ ] Placeholder pictures are listed in your reply, idea by idea.

## Motion

- [ ] Tiles rise once when a wall is rendered and do not replay on resize.
- [ ] The scrim and Save pill appear on hover and on keyboard focus, and quickly.
- [ ] With reduced motion, everything is still and complete.
- [ ] Without JavaScript the home wall shows as CSS columns and every view is readable.

## Completeness and interactions

- [ ] Every nav, chip, tile, board, person, footer and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The header stays on one line at 1440, 1024 and 768 px; when it does not fit, the menu button appears and the sheet opens, closes with Escape, the close button and a link.
- [ ] Search: focus shows suggestions, Enter searches, the clear button empties it, Escape and outside clicks close it; no results shows the empty state with suggestions.
- [ ] Category chips filter and mark the current one; board section chips filter the board; person chips filter the boards list with a count and an empty state.
- [ ] Save toggles on tiles and in the close-up, updates every copy of that button, the header count and the Saved view, and shows the toast; the board select decides the board.
- [ ] Follow toggles on people and boards; Share copies the link or explains how.
- [ ] Profile tabs work with clicks and arrow keys; `?tab=boards` opens the boards tab.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Document titles change per view, idea, board and person.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] Two columns on phones, up to seven on wide screens; a wall with few ideas is centred, not stuck to the left.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too); the category bar scrolls inside itself.
- [ ] The close-up stacks the picture above the details on phones; the board select and Save stay together.
- [ ] Touch targets are at least 44px; on touch screens the wall has no hover-only controls (Save lives in the close-up).

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view; tile titles are `h3` under a section `h2`.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including white on red, muted meta text and chip labels.
- [ ] The blue focus ring shows on white, grey, red and dark.
- [ ] Save and Follow use `aria-pressed`; Save names the idea; chips use `aria-pressed` or `aria-current`; tabs use `role="tablist"`, `aria-selected` and `aria-controls`; counts and the toast are live regions.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; pictures compressed (WebP or AVIF, under 150 KB each at 720 wide).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including ideas, boards, people, notes and the letter's schedule.
- [ ] Every fact you drafted (measurements, times, schedules, prices, bios) is listed in your reply for the user to confirm.
- [ ] No follower counts, save counts, ratings, reviews or press the user did not supply.
- [ ] If the user needs forms that arrive, ideas they can edit themselves, member accounts with real saved lists, a newsletter or image hosting, you have read `references/kanorio.md`.
