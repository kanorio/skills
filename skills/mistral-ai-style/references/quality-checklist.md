# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is warm off-white in light and deep blue-black in dark, held between two hairline rails with small square nodes where section lines cross them.
- [ ] The header is one row of boxed cells, edge to edge, ending in the solid ink action cell.
- [ ] Display, H1 and H2 are weight 500 with tight negative letter-spacing, in the text color; the home headline is centered.
- [ ] Eyebrows and tags are uppercase Azeret Mono in small gray boxes; body text is never mono.
- [ ] The warm ramp appears as stepped blocks in the hero, the stripes and mark in the footer, the popular tab and one red quote card, and nowhere as button or headline color.
- [ ] Corners: 4px controls, 6px floating cards, 8px the chapter index and switch; blocks, cells, panels and covers are square.
- [ ] No emoji, gradient text, glows, stock photos, smooth vector illustrations or a mascot.
- [ ] Copy is plain and specific: short headlines ending with a period, no exclamation marks, hype words, em dashes or lorem ipsum.

## Sprites and mosaics

- [ ] Every sprite is drawn on the 16 by 16 grid, rows of equal length, and shown at 32, 48, 64 or 128px with crisp edges.
- [ ] Sprites come from the brief's world; none is a character standing for the brand.
- [ ] Each mosaic panel carries one interface card in the brief's own vocabulary and units; neighboring rows use different hues.
- [ ] The mark is redrawn for the user's brand, in the sprite sheet and in `assets/illustrations/`.
- [ ] Every raster image has `alt`, `width` and `height`, and none is lazy-loaded in the first screen.

## Motion

- [ ] Blocks drop in steps on load; reveals rise in steps once; sprites hop one frame.
- [ ] With reduced motion, everything appears in place and still.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer, card, row and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The menu sheet opens and closes with Escape, the close button and a link; the header never wraps at 1440, 1024 or 768.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The chapter index follows the row in view; story tabs and code tabs work with clicks and arrow keys; copy buttons survive a blocked clipboard.
- [ ] The billing switch updates prices and their lines.
- [ ] Model, note and role filters update the list and the live count, and show the empty message when nothing matches.
- [ ] The docs search filters the sidebar, `/` focuses it, and the sidebar collapses into a menu on phones.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px in both themes.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); code and tables scroll inside their own frame.
- [ ] On phones the blocks shrink to 48px cells and still leave the buttons clear; the chapter index hides; story tabs become a row of three; plans stack.
- [ ] Touch targets are at least 32px, and primary actions 44px or taller.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes; white text only on red or ember, ink on sun, amber and orange.
- [ ] Focus rings are visible on every interactive element in both themes.
- [ ] Tabs use `role="tablist"`, `aria-selected` and `aria-controls`; filters and the billing switch use `aria-pressed`; counts use `aria-live`; sprites are `aria-hidden`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including names in cards, code samples, domains and environment variables.
- [ ] Every fact you drafted (prices, limits, model specs, customer names, quotes, stats, dates) is listed in your reply for the user to confirm.
- [ ] Nothing claims certifications, benchmarks, customers or awards the user did not supply.
- [ ] If the user needs forms that deliver, editable content, payments, member login or a newsletter, you have read `references/kanorio.md`.
