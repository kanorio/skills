# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The header is black in both themes, with the brand, the wide search, the outlined Donate button and the theme toggle on one row and the links on the second.
- [ ] Home opens on a night photograph with a slab display headline, and a peach torn band cuts across its bottom edge.
- [ ] Every big change of surface between sections uses a torn edge; small cards and text blocks never do.
- [ ] Headlines are Bitter 800 in title case without periods; everything else is Work Sans.
- [ ] Peach appears only in bands, primary buttons, the donate outline, countdown digits and quote marks; small peach-colored text on sand uses `--ember` instead.
- [ ] The countdown panel and footer stay night in the light theme.
- [ ] No emoji, illustrations as decoration, glass, gradients other than photo scrims, or neon text effects.
- [ ] Copy is plain, warm and specific; no hype words, exclamation marks, em dashes or lorem ipsum.

## Photographs

- [ ] Every photograph is at night or blue hour, in one language: low horizon, starry sky, warm light from the art, small silhouettes.
- [ ] Headlines on photos sit over the dark scrim and pass contrast in both themes.
- [ ] Every image has `alt`, `width` and `height`; none uses `loading="lazy"` in the single file.
- [ ] Remaining placeholders are listed in your reply.

## Motion

- [ ] The hero photo settles once; sections rise once; the band's torn photo slides in once.
- [ ] Sparks only rise with motion allowed; with reduced motion everything appears complete and still.
- [ ] Content is visible with JavaScript turned off, including the first three works and stories and a written date in place of the countdown.

## Completeness and interactions

- [ ] Every nav, footer, card and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Search works from the header, the menu sheet and the search view, by button and by Enter, and shows an empty state.
- [ ] The menu sheet opens, closes with Escape, the close button, the backdrop and a link.
- [ ] The theme toggle works and remembers the choice; night is the default whatever the system says.
- [ ] Day tabs work with clicks and arrow keys; kind chips filter; bookmarks, the saved count and "Show only saved" work.
- [ ] Art chips and the name filter narrow the grid, update the count and show an empty state with a reset.
- [ ] Every work page shows its own title, photo, facts and three other works.
- [ ] The giving widget updates the impact line and the button label for amount, other amount and frequency.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">`.
- [ ] The slider's arrows and dots work and the current dot is filled.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px; the header never wraps at 1440, 1024 or 768.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` at 390 without phone emulation); tabs and the slider scroll inside their own frame.
- [ ] Bands stack to one column and drop the torn photo below 760px; date rows put their button on its own line.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view; a skip link.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including umber on peach and muted text on charcoal.
- [ ] Focus rings are visible on every interactive element, also on the black header and footer.
- [ ] Tabs use `role="tablist"`, `aria-selected` and `aria-controls`; toggles and chips use `aria-pressed`; the menu is a `<dialog>`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; photographs under 300 KB each.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including works, makers, places, dates and the board.
- [ ] Every fact you drafted (dates, prices, places, grant amounts, impact lines, numbers on the about page) is listed in your reply for the user to confirm.
- [ ] Nothing claims attendance, history, funding, awards, partners or press the user did not supply.
- [ ] If the user needs forms that deliver, donations, editable content, a newsletter or member logins, you have read `references/kanorio.md`.
