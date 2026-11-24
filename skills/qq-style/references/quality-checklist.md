# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The home page opens on one full screen of aurora through fluted glass: one glowing, widely spaced white title, one frosted white pill, one short line, and a row of quick links at the foot. Nothing else above the fold.
- [ ] Each aurora surface has one glowing title at most; inner headings are solid, heavy and never glow.
- [ ] Inner pages are plain white (night blue in dark) with one aurora surface each.
- [ ] Colour comes from the aurora only; buttons on white pages are the one blue, buttons on aurora are the white pill.
- [ ] White text on aurora stays readable to the bottom edge (`.deep` where needed); dark text only on pale `.au-dawn` in light mode.
- [ ] Copy is calm and short, with no hype, lorem ipsum, exclamation marks or em dashes.

## Pictures

- [ ] Frosted shapes are simple silhouettes from the user's world, not logos, mascots or characters.
- [ ] Platforms appear as names beside generic device icons; no store badges or platform logos.
- [ ] Decorative layers (`.flutes`, `.frost`) are `aria-hidden`; every `<img>` has `alt`, `width` and `height` and no `loading="lazy"`.
- [ ] The mark and the share image are redrawn for the user's brand.

## Motion and performance

- [ ] Only the hero and the closing band drift; everything else is still, and the drift pauses off screen.
- [ ] No `backdrop-filter` on aurora layers; only `transform` and `opacity` animate.
- [ ] With reduced motion the aurora is still and everything appears at once.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every header link, dropdown item, card, row, footer link and pill reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The current header link is blue on every view, including views that borrow one (`navOf`).
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Download tabs work with a mouse and the arrow keys; `?p=` preselects one; the hero pill names the visitor's platform; download buttons point at real files or store listings.
- [ ] The release list, story and event filters, billing switch, help search and copy buttons all respond, with an empty message when nothing matches.
- [ ] Every form shows an error under each invalid field without moving the button, a sending state, and a success panel.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px, light and dark.
- [ ] The header never wraps; below 1100px the links fold into the sheet.
- [ ] The hero stays one screen; the title stacks into two lines below 820px; the platform row becomes a 3 by 2 grid on phones.
- [ ] No horizontal page scrolling at any width (`document.documentElement.scrollWidth <= innerWidth`); tables, checksums and the version list scroll inside themselves.
- [ ] Touch targets are at least 44px (footer links at least 24px).

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including small text on aurora and blue links on `--surface`.
- [ ] Focus rings are visible on every interactive element, white on aurora.
- [ ] Form fields have labels; errors are announced and linked with `aria-describedby`.

## Sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone.
- [ ] Every fact you drafted (versions, sizes, dates, prices, venues) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, certifications, user numbers or press the user did not supply.
- [ ] If the user needs forms that deliver, editable content, checkout or member login, you have read `references/kanorio.md`.
