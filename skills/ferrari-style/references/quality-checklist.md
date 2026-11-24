# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is pure black with white type by default; the white theme is complete and only appears after the toggle.
- [ ] Every heading, name, year and number is extended uppercase; reading text is normal width and sentence case.
- [ ] Every section opens with the index line: red number, red rule, tracked name.
- [ ] Buttons are square, 56px tall, outlined; one red solid button per screen at most.
- [ ] "Go somewhere" links are tracked capitals with a circled chevron.
- [ ] The specification is set as numbers (thin, huge, tabular) in hairline columns, and as a table.
- [ ] Photographs are the only decoration: no illustrations, icons, patterns, gradients on surfaces, shadows or rounded corners.
- [ ] Copy is short and technical: three to seven words per headline, no superlatives, no exclamation marks.

## Pictures

- [ ] All pictures share one low-key light: a dark studio or night, highlights on the edges.
- [ ] Paint pictures of one model are shot from the same angle, so a swatch changes only the colour.
- [ ] Words on pictures sit on a dark area with the scrim, and stay readable in both themes.
- [ ] Every `<img>` has `alt`, `width` and `height`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] The hero lights up once; reveals rise once; nothing loops or moves on its own.
- [ ] With reduced motion, everything appears complete, bright and still.
- [ ] Content is visible with JavaScript turned off: every view, every model row, event, showroom and story.

## Completeness and interactions

- [ ] Every nav, card, tile, footer and circled link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Header links stay on one line at 1440, 1024 and 768 px; when they do not fit, the menu button appears.
- [ ] The menu dialog opens, keeps focus inside, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; black is the default.
- [ ] `#/model?m=<key>` fills the name, kind, engine, gearbox, body, headline, intro, paints and the test-drive links for every model.
- [ ] Swatches change the picture, its alt text and the paint name, with clicks and arrow keys.
- [ ] Filters update the list, the count and the empty message; `?body=`, `?type=`, `?region=` and `?cat=` preselect.
- [ ] `?model=`, `?showroom=` and `?topic=` preselect the form; the day cannot be today or earlier.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view and per model.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too); the results table scrolls inside its wrapper.
- [ ] The `.mega` model name fits on one line at 360px; shorten the size, not the name, if a long name does not.
- [ ] Touch targets are at least 44px, circled links included.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes; red text uses `--accent-ink`, never `--accent`, on black.
- [ ] Focus rings are visible on black, charcoal, white and on photographs.
- [ ] Chips use `aria-pressed`; swatches use `role="radio"` and `aria-checked` inside a `radiogroup`; the results table has a caption.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One variable font file with the Latin subset; photographs compressed (WebP or AVIF, under 300 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including model names, showrooms, circuits and teams.
- [ ] Performance figures, prices, dates and results the user did not give stay as visible placeholders (zeros, "Placeholder:"), and are listed in your reply.
- [ ] Nothing claims records, awards, wins, certifications or press the user did not supply.
- [ ] If the user needs requests that arrive, models or events they can edit, payments, member accounts or a newsletter, you have read `references/kanorio.md`.
