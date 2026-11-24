# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The home page opens on the poster, and the poster is the loudest thing on the screen.
- [ ] Every page head has the serif headline in green and the stem rule with its bloom.
- [ ] Each screen has one to three cut-outs, tilted, at an edge, never used as icons.
- [ ] Uppercase appears only in small labels, nav, buttons and footer headings.
- [ ] Primary buttons are espresso (cream in dark) and square; nothing green or marigold is a button.
- [ ] Paper grain covers the page, bands, header and sheet; cards are smooth paper.
- [ ] No emoji, gradients outside the poster, glass effects, neon or decorative crowd photos.
- [ ] Copy is plain and specific, free of hype words, exclamation marks, em dashes and lorem ipsum.

## Poster, cut-outs and images

- [ ] The poster is HTML text: one ribbon and one headliner per day, rows getting smaller, no name split across lines.
- [ ] At 390px wide the smallest poster row is still readable, and the full lineup is also listed as text on the lineup page.
- [ ] Every cut-out has the paper edge and shadow, and decorative ones are `aria-hidden`.
- [ ] The scene band looks right in both themes (day hills, then moonlit hills).
- [ ] Every raster image has `alt`, `width` and `height`.

## Motion

- [ ] Stems grow and blooms open once; cut-outs settle once; reveals rise once.
- [ ] Only the stars loop, and they stop with reduced motion.
- [ ] With reduced motion, everything appears complete and still.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer, card and arrow link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The mobile menu opens, traps focus in the dialog, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Day tabs work with clicks and arrow keys; stage chips filter; stars, the counter, "Only my plan" and Clear all work and survive a reload.
- [ ] The payment switch updates every price and its line; `?pass=` highlights the right ticket and preselects the form.
- [ ] Every form shows an error under each invalid field, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">`.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width; the map and tables scroll inside their own frame.
- [ ] The hero stacks with the poster below the copy; cards stack to one column; day tabs fit on one line.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including names on the poster's lightest part and muted text on sand.
- [ ] Focus rings are visible on every interactive element, also on the night band and the footer.
- [ ] Tabs use `role="tablist"`, `aria-selected` and `aria-controls`; toggles use `aria-pressed`; the map has a title, a description and a text legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including every performer on the poster and in the set times.
- [ ] Every fact you drafted (names, dates, prices, times, distances, policies) is listed in your reply for the user to confirm.
- [ ] Nothing claims sell-outs, attendance, awards, sponsors or press the user did not supply.
- [ ] If the user needs forms that deliver, editable content, ticket sales or a newsletter, you have read `references/kanorio.md`.
