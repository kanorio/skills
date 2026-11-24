# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in light and dark.

## Look and feel

- [ ] The page is white (or warm near-black in dark), and red is the only interface color: no tinted sections, gradients or second accent.
- [ ] At least five signature elements are on the home page: the red brand tab, section heads with the short red rule and grey label, red arrow dots, red platform tabs on cards, the text-first news grid, the spotlight with tiles, red date blocks or icon tiles, the red footer band, the phone dock.
- [ ] Every section title uses `.sec-head`; no centered section titles.
- [ ] Every link that opens something (cards, rows, menu items, FAQ questions) ends with a red dot.
- [ ] Dates use the `2027.03.14` form in cards, rows and article meta.
- [ ] Nunito everywhere, body at weight 500, headings 800 to 900; no pure black text.
- [ ] Every corner is rounded; shadows appear only on hover and on the dock and menu.
- [ ] Copy is warm and concrete, with no hype words, exclamation marks in headings, emoji or lorem ipsum.

## Images

- [ ] Every picture follows one language: flat, saturated, rounded shapes, one subject in the middle, no text.
- [ ] Each title keeps the same art everywhere it appears (spotlight, cards, title page).
- [ ] Pictures still read when cropped to 21:9, 16:9 and square.
- [ ] No real game characters, mascots, logos or other studios' art.
- [ ] Every image has `alt`, `width` and `height`; card pictures that repeat the title have `alt=""`.

## Motion

- [ ] Reveals rise once; the section rule grows once; nothing loops except the 404 mark.
- [ ] The spotlight pauses on hover, focus, tile clicks and the pause button, and starts paused with reduced motion.
- [ ] With reduced motion everything is visible at once.
- [ ] Content is visible with JavaScript turned off, and the spotlight still scrolls sideways.

## Completeness and interactions

- [ ] Every nav, dock, footer, card and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Platform filters, the saved filter, sorting, the news category filter with "Show more", the events filter and the FAQ search all work, show an empty message, and follow their URL parameters.
- [ ] Hearts save and unsave, the count in the header and dock follows, and the saved filter lists them.
- [ ] The title page gallery swaps pictures, edition cards change the price, and "Where to buy" points to the user's real stores.
- [ ] Every form shows an error under each invalid field (including "choose at least one" groups), a sending state and a success card, and works with the button and with Enter, also inside a sandboxed frame.
- [ ] The phone menu sheet opens from the dock, closes on Escape, the close button, a link or the backdrop.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width; the featured row and the spotlight scroll inside themselves.
- [ ] Below 960px the header is red, the dock is visible and nothing hides behind it at the bottom of the page.
- [ ] News becomes a one-column list with thumbnails on phones; game cards stay two across; button labels never wrap.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including red links on white, white on red, grey dates and chips.
- [ ] Focus rings are visible on white, on grey and on red.
- [ ] Icons and decorative labels are `aria-hidden`; icon-only buttons have an `aria-label`; hearts and filter chips use `aria-pressed`.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; required groups are fieldsets with a legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family; the whole file stays under 1 MB with the art embedded.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including titles, prices, dates, places and people.
- [ ] Every fact you drafted (release dates, prices, platforms, ages, event times, team names) is listed in your reply for the user to confirm.
- [ ] Nothing claims sales, awards, review scores, ratings or player numbers the user did not supply.
- [ ] If the user needs forms that deliver, news or titles they edit themselves, a real store, member login, a newsletter or hosted media, you have read `references/kanorio.md`.
