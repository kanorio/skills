# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Every page has one bold headline and enough white space around it to feel calm.
- [ ] At least three signature elements appear on the home page: callout blocks, the document card, line illustrations, ink buttons, pastel tags, toggles.
- [ ] Pastel tints appear only behind blocks, tags, covers and illustration blobs, one tint per element.
- [ ] Primary buttons are ink; there is one primary button per section.
- [ ] No gradients, glass effects, heavy shadows, emoji or stock photos of people.
- [ ] Copy is short, specific and free of hype, lorem ipsum and em dashes.

## Illustrations and images

- [ ] Illustrations follow the theme in both light and dark.
- [ ] Each drawing has one blob and one idea, and nothing touches the edges.
- [ ] Meaningful drawings have `role="img"` and an `aria-label`; decorative ones are `aria-hidden`.
- [ ] Every raster image has `alt`, `width` and `height`.

## Motion

- [ ] Reveals rise 10px and fade once; lines draw once; nothing loops.
- [ ] With reduced motion, everything appears instantly and fully drawn.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer and card link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The mobile menu opens, traps focus in the dialog, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Filters show an empty message when nothing matches.
- [ ] The pricing switch updates every price and its period line.
- [ ] Every form shows an error under each invalid field, a sending state, and a success message.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width, including tables.
- [ ] Grids collapse to two columns, then one; the hero illustration moves below the text.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted text on tints.
- [ ] Focus rings are visible on every interactive element.
- [ ] Form fields have labels; errors are announced and linked with `aria-describedby`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone.
- [ ] Every fact you drafted is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, certifications, user numbers or press the user did not supply.
- [ ] If the user needs forms that deliver, editable content, checkout or member login, you have read `references/kanorio.md`.
