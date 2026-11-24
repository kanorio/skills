# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in light and dark.

## Look and feel

- [ ] The interface is white, greys and black with one blue for everything interactive; no brand colors, gradients or colored sections. The "New" label is the only other color.
- [ ] The home page alternates full-bleed tiles (grey, white, black) with 12px gaps, one product per tile, then a 2-up grid.
- [ ] Each tile has the name, one line, two pill buttons and the product picture, centered.
- [ ] At least six signature elements are present: tiles, product-only pictures, one blue, the glass nav, the product sub-nav, chapters, the price capsule, the highlights gallery, compare columns, footnotes and the quiet footer.
- [ ] Headlines are Inter 600 with negative tracking, short, and end with a full stop; body is 17px; nav, footnotes and footer are 12px grey.
- [ ] Two-tone headlines appear at most once per screen.
- [ ] Every claim with a number has a footnote, and every footnote number links to its note.
- [ ] Copy is calm and concrete, with no hype words, exclamation marks, emoji or lorem ipsum.

## Images

- [ ] Product pictures show one object on a transparent or matching backdrop, lit from the upper left with a soft floor shadow.
- [ ] Every colorway is a separate file with the same angle and framing, and swatches swap them.
- [ ] Products share one floor line and read at the same scale in store cards and compare columns.
- [ ] No product picture leaves the upper part of its frame empty: in every tile the product starts right under the buttons.
- [ ] Gallery captions sit on a calm area of each picture; light pictures use `.on-light`.
- [ ] No other company's products, logos or photos; every image has `alt`, `width` and `height`.

## Motion

- [ ] Text rises once; pictures settle with scroll only where supported; nothing bounces or loops except the playing gallery.
- [ ] The gallery stops on a dot, the arrow keys or the pause button, and starts paused with reduced motion.
- [ ] With reduced motion everything is visible at once.
- [ ] Content is visible with JavaScript turned off, and the gallery still scrolls sideways.

## Completeness and interactions

- [ ] Every nav, menu, tile, card, footer and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Search filters its quick links; the phone menu closes on a link, Escape, the close button and the backdrop.
- [ ] Store filters follow `?cat=`, sorting works and the empty message shows when nothing matches.
- [ ] Compare pickers swap models, keep rows aligned and drop to two columns on phones.
- [ ] The buy page follows `?p=`, swatches swap the picture, engraving shows on the picture and validates, cover changes the total, and Add to Bag updates the bag count.
- [ ] The bag changes quantities, removes lines, shows the empty state, and checkout is connected to a real provider or clearly not offered.
- [ ] Every form shows an error under each invalid field, a sending state and a success card, and works with the button and with Enter, also inside a sandboxed frame.
- [ ] Document titles and the footer breadcrumb change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width; the gallery scrolls inside itself.
- [ ] Below 900px the nav collapses to icons and the menu button; below 735px the tile grid is one column, the sub-nav keeps only the Buy pill, and compare shows two columns.
- [ ] Button labels never wrap; touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view (visually hidden on home).
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including white on blue, blue links on white and black, grey footnotes and the footer.
- [ ] Focus rings are visible on white, grey and black.
- [ ] Icons are `aria-hidden`; icon-only buttons have an `aria-label`; swatches, dots, filters and pills use `aria-pressed`.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; option groups are fieldsets with a legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font file; the whole file stays under 1 MB with the pictures embedded.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including products, prices, colors, specs, dates, footnotes and the phone number.
- [ ] Every fact you drafted (prices, specs, battery figures, colors, delivery times, warranty terms) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, reviews, ratings, certifications or test results the user did not supply.
- [ ] If the user needs forms that deliver, products or news they edit themselves, a real cart and checkout, member accounts, a newsletter or hosted media, you have read `references/kanorio.md`.
