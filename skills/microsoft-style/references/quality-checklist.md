# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The header is white with a hairline, thin text links and the Search, Cart, theme and Sign in tools on the right; the offer bar sits under it only when there is a real offer.
- [ ] Home opens on the tinted wash with one centered greeting, the pill switch, the ask box with its blue to violet to teal edge, and chips.
- [ ] The product rail shows big 24px cards with a tint, a drawn product or real photo, a navy scrim, white text and a white button; the next card peeks in from the right.
- [ ] Primary buttons are solid blue rectangles with 4px corners; only the switch and chips are pills; violet is used only for badges and the offer bar.
- [ ] Section heads are centered; sections alternate white, pale blue and the wash; the footer is the only gray band.
- [ ] Open Sans throughout, headlines at weight 600, no uppercase labels, italics or monospace.
- [ ] Both themes are complete: deep navy surfaces, light blue buttons with navy text, glows in the wash.
- [ ] No emoji, gradient text, glass effects, neon glows or stock photos. Copy is warm and plain, without hype words, exclamation marks, em dashes or lorem ipsum.

## Images

- [ ] Every product has its own drawing or real photo on a tint, and the same product keeps the same tint everywhere.
- [ ] Color options recolor the product through `data-c` (or swap to the right photo).
- [ ] Decorative drawings are `aria-hidden`; drawings that carry meaning have `role="img"` and a label; every raster image has `alt`, `width` and `height`.
- [ ] The mark, favicon and Open Graph image are redrawn for the brand.

## Motion

- [ ] The hero entrance plays once on load; reveals rise once as sections enter.
- [ ] Nothing loops or autoplays; the rail moves only when the arrows or a swipe move it.
- [ ] With reduced motion, everything appears in place and still.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, footer, card, chip and button reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The audience switch changes the chips, the rail and the plans; the billing switch changes every price and the buy buttons.
- [ ] The ask box and chips open the help center with matching articles; the help search, topics, count, empty state and feedback work.
- [ ] Shop filters, sort, count and empty state work; `?cat=` opens the right category.
- [ ] The product page updates color, configuration, accessories and total; the tabs work with clicks and arrow keys.
- [ ] Adding to the cart updates the header count and shows the toast; quantities, Remove, the empty cart and checkout work.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] The theme toggle works and remembers the choice; the mobile menu opens, closes with Escape, the close button and a link.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] The header never wraps at 1440, 1024 or 768.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); the rail and tables scroll inside their own frame.
- [ ] Rail card text never covers the product; quick links become a two-column grid with icons on phones.
- [ ] Touch targets are at least 34px, and primary actions 40px or taller.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including white text on the rail scrim and on violet badges.
- [ ] Focus rings are visible on every interactive element in both themes, including the ask box.
- [ ] Switches and filters use `aria-pressed`; tabs use `role="tablist"`, `aria-selected` and `aria-controls`; counts use `aria-live`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family, Latin subset; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including product names in the catalog, plans, articles, the cart seed and the footer.
- [ ] Every fact you drafted (prices, specs, plan limits, offers, warranty, support hours, people) is listed in your reply for the user to confirm.
- [ ] Nothing claims certifications, awards, customer counts or reviews the user did not supply; the offer bar and badges are removed unless the offer is real.
- [ ] If the user needs forms that deliver, a real cart and checkout, editable content, member sign-in or a newsletter, you have read `references/kanorio.md`.
