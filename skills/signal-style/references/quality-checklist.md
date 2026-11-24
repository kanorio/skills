# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser in both themes.

## Look and feel

- [ ] Light by default following the system setting; the dark theme is complete behind the toggle and remembered.
- [ ] The home page keeps at least five signature elements: the white header with one blue button, the strip with a tiny drawing, the periwinkle hero with two tilted phones breaking out of its bottom edge, the centred "Why …?" question, outlined illustrations with halftone dots in pastel panels that step across the page, the two-by-two cards on the grey band, the charcoal footer.
- [ ] Headlines are Rethink Sans 800 in Title Case; body copy is plain and short.
- [ ] Blue is the only strong color, used for actions, links and one shape per drawing.
- [ ] Buttons and inputs are 8px rounded rectangles; only chips, tabs, tags and searches are round.
- [ ] Copy is plain and warm, with no hype, no exclamation marks in headlines, no emoji and no lorem ipsum.

## Images

- [ ] Every drawing uses ink outlines, flat pastel fills and a halftone patch; none uses gradients or 3D.
- [ ] Phone screens show the owner's product (or a photograph, flyer or receipt for a site without an app), never a fake messaging app or someone else's product.
- [ ] Every `<img>` has `alt`, `width` and `height`; nothing uses `loading="lazy"`.
- [ ] No logos, mascots, characters, screenshots or photographs the owner does not own.

## Motion

- [ ] The phones swing into their tilt once; reveals rise once; nothing loops.
- [ ] Reveals use keyframes with the 2.5 second fallback; content is visible with JavaScript turned off.
- [ ] With reduced motion everything appears in place.

## Completeness and interactions

- [ ] Every nav, card, footer and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Blog chips and search update the count, show the empty state and follow `?topic=`; "Older posts" shows the rest; every card opens its post.
- [ ] Help search opens matching answers; chips follow `?topic=`.
- [ ] Volunteer chips follow `?team=`; every "Apply" picks its role in the form.
- [ ] The donation card moves through its three steps, validates each one, follows `?amount=` and `?freq=`, and shows the success state; the tabs switch panels.
- [ ] Every form shows an error under each invalid field, a sending state and a success state that repeats the name or email, and works with the button and with Enter inside a sandboxed frame. Errors never move the submit button.
- [ ] The theme toggle works; the menu opens and closes on a link, the button and Escape.
- [ ] Document titles change per view.
- [ ] The console shows no errors on any view; every loop uses `all()`, never `one()`; the fail-open guard is still at the top of the script.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360px; the header never wraps (links move into the menu below 1024px).
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth` at 390 without mobile emulation); the tilted phones are clipped by the hero, not the page.
- [ ] On phones the panels sit above their copy, cards stack, and the amount tiles fall to two columns.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view; a skip link.
- [ ] Contrast meets WCAG 2.2 AA in both themes, including white text on blue, ink on periwinkle, muted text on the grey band and links in the footer.
- [ ] Focus rings are visible on white, on the grey band, on periwinkle and in the footer.
- [ ] Icon-only buttons have an `aria-label`; chips, tabs and the frequency control expose `aria-pressed`; phones, drawings and avatars are hidden from assistive technology.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; radio groups are fieldsets with a legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family; drawings reused through `<use>`; the inlined file stays well under 1 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including people, places, posts, roles, the registration number and email addresses.
- [ ] Every fact you drafted (dates, percentages, opening hours, platform versions, registration numbers) is listed in your reply for the owner to confirm.
- [ ] Nothing claims user counts, ratings, awards, tax status or press quotes the owner did not supply.
- [ ] If the owner needs forms that deliver, donations or payments, content they edit themselves, member login, a newsletter, or hosted images and video, you have read `references/kanorio.md`.
