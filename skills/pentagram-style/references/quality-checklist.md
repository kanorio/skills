# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The canvas is white (charcoal in dark), every grey is neutral, and the only colour on the page comes from pictures.
- [ ] One family at regular weight everywhere; 500 only for small emphasis. No bold headlines, no italics, no tracked capitals.
- [ ] The home page opens with the full-bleed wall: tiles in at least three sizes, 2px seams, no gutter.
- [ ] The sentence is there twice: the pill over the wall and the display H1 on the work page, with words that read naturally for this trade.
- [ ] Captions sit under pictures in two lines, name in text colour, one sentence in grey.
- [ ] Each page has at most one dark band, and it holds a feature, not decoration.
- [ ] Buttons, chips, tags and fields are grey rectangles with a 4px radius; one solid button per form.
- [ ] Copy is plain and specific: what was made, for whom, the problem and the idea. No hype words or exclamation marks.

## Pictures

- [ ] Every project picture shows the work itself, centred, so it survives the wall's crops (check the wide 2x1 tile and the tall tiles).
- [ ] Portraits share one treatment (black and white, same framing).
- [ ] Every `<img>` has `alt`, `width` and `height`; work-grid pictures describe the work; pictures in already-named links have empty `alt`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] The wall settles once on load; tiles rise when the selection changes; swapped words roll in. Nothing loops.
- [ ] With reduced motion, everything appears complete and still.
- [ ] Content is visible with JavaScript turned off: the wall, every tile, the first project and the first essay.

## Completeness and interactions

- [ ] Every wall tile, tile, card, row, tag and footer link reaches a view, a section or a real page; unknown project and post slugs show the 404 view.
- [ ] Header links stay on one line at 1440, 1024 and 768 px; when they do not fit, the menu button appears.
- [ ] The menu sheet opens, traps focus, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Each sentence word opens its list; counts are right for the other word's current value; arrow keys, Home, End, Enter, Space, Escape and Tab work; focus returns to the word; a click outside closes the list.
- [ ] Choosing from the home pill opens the work page with both words set; on the work page the count, tiles, index, "Show everything" and the empty state all follow; `?make=`, `?for=` and `?view=index` preselect.
- [ ] The tile rhythm still looks deliberate after filtering down to one, two and five projects.
- [ ] Every project in the grid has a `cases` entry; the project page shows its own name, line, tags, hero, palette, brief, idea, facts and the next project.
- [ ] People and journal chips update the list, the count and the empty message.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view, including project and post names.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too; long email addresses in the footer are the usual culprit).
- [ ] On phones the wall is two columns with the first tile two by two, the sentence wraps without its list leaving the screen, and band cards scroll sideways.
- [ ] Touch targets are at least 44px, tags included.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view (the statement on the home page, the sentence on the work page).
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including grey captions, labels on the band and placeholder text.
- [ ] Focus rings are visible on white, charcoal, the band and over pictures.
- [ ] Sentence words use `aria-haspopup="listbox"`, `aria-expanded` and `aria-controls`; options use `role="option"` and `aria-selected`; chips and the segmented control use `aria-pressed`; counts are `aria-live`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; pictures compressed (WebP, AVIF or small SVG, under 300 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including clients, partners, cities, addresses and the vocabulary of the sentence.
- [ ] Every client, project, year, number and quote is the user's own; anything you drafted is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, rankings, press, client lists or testimonials the user did not supply. Showing a client's work needs the client's permission: remind the user.
- [ ] If the user needs enquiries that arrive, projects they can edit without code, a newsletter or image hosting, you have read `references/kanorio.md`.
