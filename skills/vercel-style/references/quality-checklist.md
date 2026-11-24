# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The light theme is white with black text and black primary buttons; the dark theme is pure black with white primary buttons.
- [ ] Display, H1 and H2 are weight 600 with tight negative letter-spacing, in solid text color.
- [ ] Every section and page head has a monospace eyebrow in sentence case; nothing is uppercase.
- [ ] Grids are joined hairline cells with the two crosshair corners; there are no floating cards with shadows.
- [ ] Color appears only in status dots, failed-run marks, code tokens, links, focus rings and one mesh pane per view.
- [ ] Corners are 6px on controls, 8px on cards and code, 10px on windows; only the announcement pill is round.
- [ ] No emoji, gradient text, glows, stock photos, 3D objects or device mockups.
- [ ] Copy is plain and specific, free of hype words, exclamation marks, em dashes and lorem ipsum.

## Product screens and images

- [ ] The hero window and the vignettes use the brief's own objects, names, units and states.
- [ ] Every figure has a unit; columns of numbers use tabular figures.
- [ ] Each window and figure has `role="img"` with a description, and its inner markup is `aria-hidden`.
- [ ] The mesh pane appears at most once per view and has no text on it except a small product card.
- [ ] Every raster image has `alt`, `width` and `height`.

## Motion

- [ ] The hero entrance plays once on load; reveals rise once as sections enter.
- [ ] The install cursor is the only loop, and it stops with reduced motion.
- [ ] With reduced motion, everything appears in place and still.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer, card, list and arrow link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The mobile menu opens, closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Code tabs and the product tour work with clicks and arrow keys; copy buttons report when the frame blocks the clipboard.
- [ ] The billing switch updates prices and their lines; the estimator updates the total and the breakdown; `?plan=` features the right plan and preselects the sign-up form.
- [ ] Changelog and blog filters update the list and the live count, and show the empty message when nothing matches.
- [ ] The docs search filters the sidebar, `/` focuses it, and the sidebar collapses into a menu on phones.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] The header never wraps at 1440, 1024 or 768.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); code and tables scroll inside their own frame.
- [ ] On phones the window drops the sidebar, KPIs go two by two, cells stack, and the docs sidebar becomes a collapsed menu.
- [ ] Touch targets are at least 32px, and primary actions 40px or taller.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including faint mono labels.
- [ ] Focus rings are visible on every interactive element in both themes.
- [ ] Tabs use `role="tablist"`, `aria-selected` and `aria-controls`; filters and the billing switch use `aria-pressed`; counts use `aria-live`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including names in the window, vignettes, code samples, domains and environment variables.
- [ ] Every fact you drafted (prices, limits, stats, customer names, quotes, changelog entries) is listed in your reply for the user to confirm.
- [ ] Nothing claims certifications, uptime figures, customers or awards the user did not supply; the status line in the footer is removed unless a real status page exists.
- [ ] If the user needs forms that deliver, editable content, payments, member login or a newsletter, you have read `references/kanorio.md`.
