# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is warm paper with warm ink in light, and warm charcoal with paper text in dark; nothing is pure white or pure black.
- [ ] Display, H1 to H3, prices and quotes are the serif at weight 500; interface text is the sans.
- [ ] Terracotta appears as one accent per view and never fills a button or a background; primary buttons are ink.
- [ ] The product appears in dark cards on muted contour tiles, at least once on home and once on the product page.
- [ ] Illustrations share one hand: 1.7 ink line, offset sand fill, at most one terracotta detail.
- [ ] Labels and numbers are small monospace; there are no uppercase or letter-spaced labels.
- [ ] No emoji, starbursts, sparkles, chat bubbles, robots, gradients, glass effects, stock photos or laptop mockups.
- [ ] Copy is warm and specific, free of hype words, exclamation marks, em dashes and lorem ipsum.

## Product cards and illustrations

- [ ] Every dark card uses the brief's own objects, names and states, in four rows or fewer.
- [ ] Each tile with a card has `role="img"` and an `aria-label` that describes it.
- [ ] Text inside every dark card stays light on dark in both themes (check each tab, not only the first): page rules that mute paragraphs are scoped to the page copy (`.show > div > p`), never `.section p`.
- [ ] In the hero the tile crops the card on the right and bottom, and the note never covers the card's text at 1440, 1024 or 390 px.
- [ ] Tile colors vary side by side, and no body text sits directly on a tile.
- [ ] New illustrations follow the recipe in `images.md` and live in the sprite as symbols.
- [ ] Every raster image has `alt`, `width` and `height`.

## Motion

- [ ] The hero entrance plays once on load; reveals rise once as sections enter; theme bars grow once.
- [ ] The caret is the only loop, and it stops with reduced motion.
- [ ] With reduced motion, everything appears in place and still.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer, card and arrow link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The menu opens inside the header, closes with Escape, the button and a link, and its button label changes.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Showcase tabs work with clicks and arrow keys.
- [ ] The billing switch updates prices and billing lines; plan buttons carry `?plan=` into the form.
- [ ] Journal chips and search filter the cards, the count updates, the empty message appears, and `?kind=` preselects a chip; the home page shows copies of the first journal cards.
- [ ] Sector chips filter the stories, the count updates, and `?sector=` preselects a chip.
- [ ] Copy link reports success, or says the frame blocked it.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px; the header stays on one line at every width.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); the comparison table and code scroll inside their own frame.
- [ ] Sidenotes sit in the margin from 1180px and become inline boxes below; the workspace card drops its side panes on phones.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted text on the oat band, mono labels, and muted text inside dark cards.
- [ ] Focus rings are visible on every interactive element, on paper, on tiles and in the ink footer.
- [ ] Tabs use `role="tablist"`, `aria-selected` and `aria-controls`; chips and the billing switch use `aria-pressed`; counts use `aria-live`; the menu button uses `aria-expanded`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets and the system monospace; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open`, top navigation, fixed bars or lazy-loaded images.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including names inside dark cards, comments and the case study.
- [ ] Every fact you drafted (prices, customers, quotes, results, team, storage and privacy promises) is listed in your reply for the user to confirm.
- [ ] Nothing claims certifications, audits, awards, research findings or customers the user did not supply.
- [ ] If the user needs forms that deliver, editable content, payments, member login, courses or a newsletter, you have read `references/kanorio.md`.
