# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The home page is the desk: an empty white canvas with six or seven icons and labels, no headline, hero, grid or paragraph.
- [ ] Every section that holds many things is a folder icon; every single page is a document icon; at most one small picture sits on the desk.
- [ ] Folders are drawn from `#i-folder` at whole-number scales (68 x 56 or 34 x 28), crisp, with the dither; one accent folder at most.
- [ ] Folder pages are white (charcoal in dark); every file page is black and starts with the pixel back arrow and a date or the file's name.
- [ ] One monospace family at 12 to 15px everywhere; 20px only for a price or the 404 line. No bold headlines, no second family.
- [ ] Names, navigation, dates and buttons are lowercase; body sentences use normal capitals.
- [ ] Hover and focus turn labels into a block of ink. No underlines on hover, no colour changes.
- [ ] Nothing looks like an operating system: no windows, title bars, dock, menu-bar clock, trash or drag-and-drop.
- [ ] Copy is plain and quiet. No hype words, no exclamation marks.

## Pictures

- [ ] Pictures are small: 88px on the desk, 132px in folders, 200 to 240px in files. None is full-bleed.
- [ ] Every folder's squares share one crop and one ground; photographs inside notes are black and white.
- [ ] Every `<img>` has `alt`, `width` and `height`; folder pictures describe the picture; the desk picture has empty `alt`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Desk icons drop in once on load; filtered items blink in; opening a file grows a black rectangle from the clicked icon. Nothing loops.
- [ ] With reduced motion, everything is simply there and files open without the zoom.
- [ ] Content is visible with JavaScript turned off: the desk, every folder, the first record, the first note, every form.

## Completeness and interactions

- [ ] Every desk icon, header word, menu link, grid square, row, button and footer word reaches a view, a section or a real page; unknown slugs and child routes without a slug show the 404 view.
- [ ] Header words stay on one line at 1440, 1024 and 768 px; when they do not fit, the "menu" word appears.
- [ ] The menu sheet opens, traps focus, and closes with Escape, the close word and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Each folder's filter words update the contents, the count and the empty message; counts are right; `?kind=`, `?region=` and `?view=list` preselect.
- [ ] Every record, item and note in a folder has its data entry, and its file shows its own title, date, picture and text, plus the next link.
- [ ] Shows open in place to doors, prices and how to buy.
- [ ] Items need an option before "add to bag"; sold-out options are disabled; a fully sold-out item says so.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel that repeats what was sent, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view, including record, item and note names.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px; desk icons never touch or overlap at any of them (adjust `--x`/`--y` and `--mx`/`--my`).
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too).
- [ ] On phones the desk is taller, folders show two squares per row, show rows stack, and the notify form stacks.
- [ ] On touch screens every word link, filter word, button, option and field is at least 44px (the `pointer: coarse` block); with a mouse the words may stay at 32 to 36px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view (visually hidden on the desk).
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted labels on white and on black.
- [ ] Focus rings are visible on white, charcoal and black.
- [ ] Back arrows have an `aria-label` that names the destination; icons are `aria-hidden`.
- [ ] Filter words and the layout switch use `aria-pressed`; counts are `aria-live`; errors are announced.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family, Latin subset, two weights; pictures small (SVG, WebP or AVIF under 200 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including record and note titles, venues, store items, addresses and the signature line.
- [ ] Dates, venues, prices, track lengths, stock and quotes are the user's own; anything you drafted is listed in your reply.
- [ ] Nothing claims sold-out shows, sales figures, press, awards or collaborators the user did not supply.
- [ ] If the user needs messages that arrive, content they can edit without code, a real cart and checkout, a newsletter or image hosting, you have read `references/kanorio.md`.
