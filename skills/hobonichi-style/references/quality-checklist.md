# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The masthead shows the wordmark, the tabs with an underline on the current one, and today's date in handwritten numerals with a sprig.
- [ ] On the home page the story band and the header share one pastel tone, and changing the story changes both.
- [ ] Every list starts with a ruled section head: line icon, bold title, hairline, pale pill.
- [ ] The daily column is set in short hand-broken lines with a doodle, a byline, a signature and two links.
- [ ] Thumbnails sit in hairline frames with a small stamp in the bottom-left corner; no shadows on cards.
- [ ] At least one read sits inside a shop row, and one product inside an article.
- [ ] Klee One appears only in small doses (wordmark, date, labels, signature, quote, ranks, success lines).
- [ ] Copy is warm and specific; titles are plain sentences; no hype, lorem ipsum or em dashes.

## Pictures

- [ ] One picture language: flat lays on pastel grounds (or the user's own photos), neighbouring grounds differ.
- [ ] Card pictures keep the stamp corner calm; story pictures work square and 4:3.
- [ ] Every image has `alt`, `width` and `height`; below-the-fold images are lazy; decorative duplicates have empty alt.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] The band color cross-fades between stories; story text rises in; the sprig sways once; nothing loops or auto-advances.
- [ ] With reduced motion everything appears in its final state.
- [ ] Content is visible with JavaScript turned off (the first story, every view, every "show more" card).

## Completeness and interactions

- [ ] Every tab, card, pill, footer link and button reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Story arrows, rail thumbnails and arrow keys change the story and the counter.
- [ ] Row arrows page the reads row and disable at each end.
- [ ] Filters update the list, show the empty message and hide interleaved cards; `?cat=` presets a chip; sorting keeps reads in their slots.
- [ ] Cover, size and quantity update the product picture and price; "Add to bag" updates the count, the bag lines and totals, and shows the toast.
- [ ] Every form shows inline errors that do not move the button, a sending state and a success message, and works inside a sandbox without `allow-forms`.
- [ ] The theme toggle switches both themes completely and remembers the choice; the system setting is the default.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px, light and dark.
- [ ] No horizontal scrolling at any width (check `scrollWidth` at 390 without mobile emulation too).
- [ ] Under 860px the header is two rows; under 760px the band stacks, reads become ruled rows and the shop is two columns.
- [ ] Short lines that wrap on phones still read well; shorten the longest lines if they break awkwardly.
- [ ] Touch targets are at least 40px.

## Accessibility

- [ ] Text contrast meets 4.5:1 on white, on every tone and on every pastel shelf, in both themes.
- [ ] The blue focus ring is visible on every control.
- [ ] Landmarks: header, nav, main, footer; one `h1` per view (the home one may be visually hidden); doodles are `aria-hidden`.
- [ ] The story band has `aria-roledescription="carousel"`, the counter is a live region, and the rail buttons have labels and `aria-current`.
- [ ] Form fields have labels; errors are announced and linked with `aria-describedby`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families; Japanese or Chinese text uses subset fonts or system fonts (see SKILL.md); the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including the storage keys and the catalogue in the script.
- [ ] Every fact you drafted (prices, dates, hours, addresses, people, quotes) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, sales figures, press or partners the user did not supply.
- [ ] If the user needs forms that deliver, an editable column or product list, checkout, a newsletter or hosted pictures, you have read `references/kanorio.md`.
