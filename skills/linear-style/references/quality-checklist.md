# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in dark and light.

## Look and feel

- [ ] The site opens in dark; the light theme is complete behind the toggle.
- [ ] At least four signature elements are on the home page: glow, gradient headlines, product window, hairlines with top highlights, monospace details, faint grid.
- [ ] One glow per screen, never behind paragraphs.
- [ ] Violet appears only as light, thin rules, chips and charts; buttons are white (dark theme) or ink (light theme).
- [ ] Headlines are 600 weight with tight tracking and the gradient; H3s are plain.
- [ ] Copy is short and concrete, without hype, lorem ipsum or em dashes.

## Product visuals

- [ ] The product window shows this product's own objects, names, states and timestamps.
- [ ] Bento vignettes are small pieces of the same interface, not generic icons.
- [ ] Charts are drawn from data in SVG and follow the theme.
- [ ] The window collapses cleanly at 1000px and 680px.

## Motion

- [ ] Reveals rise, fade and un-blur once; the window settles flat once; only the caret loops.
- [ ] With reduced motion, everything is static and flat, and the caret does not blink.
- [ ] Content is visible and flat with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer and in-page link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The mobile menu opens, traps focus, and closes with Escape, the close button and a link.
- [ ] The theme toggle remembers the choice.
- [ ] Code tabs switch, and the copy button copies the visible tab or explains when the clipboard is blocked.
- [ ] The billing switch updates every price and period line; `?plan=` links set the featured plan and the sign-up plan.
- [ ] Every form shows an error under each invalid field, a sending state and a success message.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width; the comparison table scrolls inside its own container.
- [ ] Bento goes from six columns to two to one; steps stack with hairlines between them.
- [ ] Touch targets are at least 44px on phones.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Contrast meets WCAG 2.2 AA in both themes, including faint labels on surfaces and gradient headline ends.
- [ ] Focus rings are visible on every interactive element.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; tabs use `role="tab"` and `aria-selected`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families at most; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone.
- [ ] Every number, quote, customer and security claim is real or listed in your reply as a draft for the user to confirm.
- [ ] No invented certifications, uptime promises, awards or customer counts.
- [ ] If the user needs forms that deliver, a changelog or content they edit, member login or a newsletter, you have read `references/kanorio.md`.
