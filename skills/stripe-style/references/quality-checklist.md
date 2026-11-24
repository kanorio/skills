# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Every view opens with one wash at the top right, and no paragraph or form sits on top of it.
- [ ] Display, H1 and H2 are weight 300, and the two-tone headlines split at a sentence boundary.
- [ ] The hairline rails run down the frame edges on desktop, and ruled sections start between them.
- [ ] There is exactly one navy band on the home page, and it holds code or numbers.
- [ ] Indigo is the only button and link color; the wash colors never fill buttons or text blocks.
- [ ] Every call to action that leads somewhere has the hover arrow.
- [ ] No emoji, card-network or bank logos, security seals, stock photos, 3D coins or neon effects.
- [ ] Copy is calm and specific, free of hype words, exclamation marks, em dashes and lorem ipsum.

## Interface cards, gradients and images

- [ ] The hero cards, vignettes and product art use the brief's own objects, amounts and states.
- [ ] Every amount has a currency and uses tabular figures; columns of numbers line up.
- [ ] Each card composition has `role="img"` with a description, and its inner markup is `aria-hidden`.
- [ ] Covers use different gradients side by side; customer names on covers are real text.
- [ ] Every raster image has `alt`, `width` and `height`.

## Motion

- [ ] The hero entrance plays once on load; reveals rise once as sections enter.
- [ ] The wash drift is the only loop, and it stops with reduced motion, together with the ticker count.
- [ ] With reduced motion, everything appears in place and still.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer, tile, card and arrow link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The mobile menu opens, closes with Escape, the close button and a link, and keeps focus inside.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Code tabs work with clicks and arrow keys; copy reports when the frame blocks the clipboard.
- [ ] The billing switch updates the price and its line; the estimator updates both plans and names the cheaper one; `?plan=` features the right plan and preselects the sign-up form.
- [ ] Industry chips filter the stories, the count updates, and `?industry=` preselects a chip.
- [ ] The docs search filters quick starts and guides and shows the empty message when nothing matches.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); code and tables scroll inside their own frame.
- [ ] On phones the wash stays in the top right corner, the hero cards stack with the front card overlapping, and tiles drop to one column.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including slate headline tones, muted captions and text inside the navy band.
- [ ] Focus rings are visible on every interactive element, including on the navy band and the wash.
- [ ] Tabs use `role="tablist"`, `aria-selected` and `aria-controls`; filters and the billing switch use `aria-pressed`; live counts use `aria-live`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including names inside vignettes, code samples and API keys.
- [ ] Every fact you drafted (rates, prices, volumes, uptime, countries, customer results, quotes) is listed in your reply for the user to confirm.
- [ ] Nothing claims licences, regulatory status, partner banks, certifications, awards or customers the user did not supply; the ticker shows a real figure or is removed.
- [ ] If the user needs forms that deliver, editable content, payments, member login or a newsletter, you have read `references/kanorio.md`.
