# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The home page centres the round mark, the name and a lowercase tagline, with the news rail beside them.
- [ ] Every action is a blue text link, except form submits and the one mobile pill.
- [ ] The header is text tabs with an underline under the current one and no logo.
- [ ] Inner pages read like documents: a small H1, one pale blue callout, link lists, hairline dividers.
- [ ] Colour comes from the stickers and covers only; the page itself stays white (or deep blue-grey in dark).
- [ ] Sticker grid sentences start with the product name in bold.
- [ ] Copy is short and exact, with no hype, lorem ipsum, exclamation marks or em dashes.

## Pictures

- [ ] Stickers have the white edge in dark mode and one idea each; none copies a known mascot.
- [ ] Device screens show the user's own product, not a chat app or anyone else's interface.
- [ ] Decorative art is `aria-hidden`; meaningful pictures have `role="img"` and a label, or `alt`.
- [ ] Every raster image has `alt`, `width` and `height`.

## Motion

- [ ] Cards and stickers pop in once; nothing loops.
- [ ] With reduced motion everything appears at once.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every tab, rail item, card, footer link and "more" link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The current tab is underlined on every view, including views that borrow a tab (`tabOf`).
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Filters and the FAQ search show an empty message when nothing matches.
- [ ] Handbook tabs work with a mouse and the arrow keys; Copy buttons give feedback.
- [ ] Every form shows an error under each invalid field without moving the button, a sending state, and a success panel.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] The header never wraps; on phones the tabs scroll sideways and the right-hand text link hides.
- [ ] No horizontal page scrolling at any width (`document.documentElement.scrollWidth <= innerWidth`); code blocks and tables scroll inside themselves.
- [ ] Device pairs shrink on phones; the sticker grid goes to two columns, then one.
- [ ] Touch targets are at least 44px (footer links at least 24px).

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including blue links on the pale callouts.
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
