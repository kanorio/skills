# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The interface is black, white and greys only; the black theme is pure black with white text; the footer is black in both.
- [ ] Home is a stack of full-screen plates, each captioned the same way at its foot: category line, uppercase name, one white rectangle button. One pair of half plates breaks the rhythm.
- [ ] The wordmark is centred and widely spaced; the category row sits under it on wide screens.
- [ ] Every button, field, tile and picture has square corners; buttons are black on the page and white on photographs.
- [ ] Product names are uppercase small capitals, followed by the material in grey and the price.
- [ ] Copy is short and factual: materials, sizes, references, care. No hype words, no exclamation marks.

## Pictures

- [ ] All plates share one light and one grade (hard light, neutral palette, one material colour), and their lower thirds are dark enough for white text, with the scrim kept.
- [ ] Phone crops keep the subject (check every plate at 390px and set `--pos` where needed).
- [ ] Product pictures are centred on a plain ground and read on both the pale and the dark tile.
- [ ] Every `<img>` has `alt`, `width` and `height`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Plate captions rise once and photographs settle once; nothing loops or moves on its own (a plate film has a pause control).
- [ ] With reduced motion, everything appears complete and still.
- [ ] Content is visible with JavaScript turned off: every view, every plate, every tile, the first product.

## Completeness and interactions

- [ ] Every nav, plate, tile, card, footer and text link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The header stays on one line at 1440, 1024 and 768 px; the category row folds into the menu when it does not fit.
- [ ] The menu opens from the left, keeps focus inside, and closes with Escape, the close button, the backdrop and any link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Collection: category tabs, search and sort update the grid, the count and the empty message; the band picture and title follow the category; `?cat=` and `?q=` preselect.
- [ ] Product page: every product id shows its own name, price, picture, options and details; thumbnails swap the picture; "Add to bag" asks for an option first, then confirms with a link to the bag; the bag count updates.
- [ ] Bag: quantities, removal, subtotal and the empty state work; the bag survives a reload where storage is allowed.
- [ ] Rails scroll by their arrows, and the arrows disable at the ends.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter. The appointment date refuses past days and the closed weekday.
- [ ] Document titles change per view and per product.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too).
- [ ] Half plates stack on phones; the grid is two tiles across; the toolbar tabs scroll sideways instead of wrapping.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including grey metadata, placeholder text and white text on every plate.
- [ ] Focus rings are visible on white, black and on photographs (the plate button uses a white ring).
- [ ] Chips, options and thumbnails use `aria-pressed`; the count and the add-to-bag note are live regions.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; photographs compressed (WebP or AVIF, under 300 KB each); a plate film, if any, short and compressed.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including product names, references, prices, boutiques and dates.
- [ ] Every fact you drafted (prices, materials, sizes, delivery times, return rules, opening hours) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, press, celebrity clients, certifications or heritage the user did not supply.
- [ ] If the user needs orders that are paid, appointment requests that arrive, products they can edit, member accounts or a newsletter, you have read `references/kanorio.md`.
