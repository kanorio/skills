# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The frame is black and white: every word, link and button is black, white or grey; colour appears only in panels, tiles, avatars, badges and the one notice band.
- [ ] One family at weight 400 everywhere; 500 only in badges and tiny labels. No bold headlines, no italics.
- [ ] Section headlines are two-tone: a short black sentence, then a grey one on its own line, in one heading element.
- [ ] Panels and tiles are flat with square corners; pictures inside panels are centred and either run off the bottom or sit fully inside (`.inset`).
- [ ] The home page has the hero collage in its hairline frame, the edge-to-edge mosaic with at most three floating controls, and one black slab near the end.
- [ ] Secondary actions are underlined arrow links; buttons are black rounded rectangles, with the outline pill only as the second large button.
- [ ] The footer is black with the big wordmark and tracked grey column titles, in both themes.
- [ ] Copy is short and concrete; headlines have no exclamation marks or hype words.

## Pictures

- [ ] Every work picture has one centred subject on its own saturated ground and survives the mosaic crops (check the short first row and the tall second row).
- [ ] Product views are real screens of the user's product (or clearly listed placeholders), front-on inside pastel panels.
- [ ] Every `<img>` has `alt`, `width` and `height`; decorative pictures and pictures inside already-named links have empty `alt`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] The hero collage settles once; sections rise once; filters re-animate the list. Only the marquee loops, and it has a pause button.
- [ ] With reduced motion everything appears complete and still, and the marquee is a still row.
- [ ] Content is visible with JavaScript turned off: every view in order, the first story and the featured post.

## Completeness and interactions

- [ ] Every tile, card, row, arrow link, footer link and round icon reaches a view, a section or a real page; unknown story and post slugs show the 404 view.
- [ ] Header links stay on one line at 1440, 1101 and 1024 px; below 1100 px the menu button appears and the sheet opens, closes with Escape, the close button and any link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Chips filter stories, updates and posts; the count and the empty message follow; `?kind=` and `?area=` preselect.
- [ ] The billing switch changes every price and the note under it; "Key features" hides the other rows; the notice band closes and stays closed.
- [ ] The rail's arrows move one card and the counter follows scrolling; the first arrow is disabled at the start and the last at the end.
- [ ] Every story card has a `STORIES` entry and every post card a `POSTS` entry (except the featured post); the story view shows its own name, line, facts, picture, before and after, quote and the next story.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel that repeats the email, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view, including story and post names.

## Responsiveness

- [ ] Checked at 1440, 1101, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too).
- [ ] On tablets the hero button sits under the headline; on phones the hero stacks, the mosaic is two columns with tall tiles in a brick rhythm, plans stack, and the compare table scrolls sideways inside its box.
- [ ] Touch targets are at least 44px, chips and round buttons included.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including grey second sentences, grey labels on panels and text on the notice band.
- [ ] Focus rings are visible on white, on near-black, on the footer and over pictures.
- [ ] Chips, the billing switch, the scope switch and the marquee button use `aria-pressed`; counts and the rail counter are `aria-live`; check marks in the table have a text label.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; pictures compressed (WebP, AVIF or small SVG, under 300 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including studios, people, cities, prices and the email domain.
- [ ] Every customer, quote, number, price and logo is the user's own; anything you drafted is listed in your reply for the user to confirm.
- [ ] Nothing claims customers, awards, press, statistics or testimonials the user did not supply; without them, drop the quote, the stat and the marquee instead of inventing them.
- [ ] If the user needs enquiries that arrive, content they can edit without code, payments, sign-ups, a newsletter or image hosting, you have read `references/kanorio.md`.
