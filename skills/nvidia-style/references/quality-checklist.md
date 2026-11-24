# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Light theme: white page, pale grey bands, near-black text, one acid green. Dark theme: black page, dark grey cards, near-white text, the same green.
- [ ] Every headline is bold Encode Sans; leads are regular with loose line-height; nothing is uppercase except the wordmark.
- [ ] Buttons, fields, chips and arrows have 2px corners; cards, panels and media have 12px corners; nothing is pill-shaped.
- [ ] Green appears only on buttons, arrows, chevrons, underlines, bars, badges and on text over black; no green paragraph text on white.
- [ ] The home page shows at least four signature elements: the hero ticker, a carousel row with square green arrows, cards with pictures on black, the black product band, the black strip (on product or event pages), the black footer with green links.
- [ ] Copy is specific, with numbers and units; no lorem ipsum, hype words, exclamation marks or em dashes.

## Images

- [ ] Every product picture sits on black and shares one lighting plan; scenes use only black and green.
- [ ] Every `<img>` has `alt`, `width` and `height`; no `loading="lazy"` in a single-file page.
- [ ] Placeholder pictures are listed in the reply.

## Motion

- [ ] The hero rotates every 8 seconds with a filling green bar, pauses on hover and focus, and stops once a slide is picked.
- [ ] With reduced motion nothing rotates or rises; everything is visible at once.
- [ ] Content is visible with JavaScript turned off, including one summary card in each data-drawn list.

## Completeness and interaction

- [ ] Every link reaches a view, a section ID or a real page; nothing points at `#`.
- [ ] Carousel arrows scroll one card and disable at either end; tracks also scroll by swipe and trackpad.
- [ ] Filters update the list, the live count and the empty state; reset buttons work; route parameters (`?cat=`, `?work=`, `?topic=`) preselect them.
- [ ] Strip links scroll to their sections, the section in view is underlined, and on phones the strip opens and closes as a menu.
- [ ] The configurator total matches the chosen options; "Add to cart" updates the badge, the cart lines and the totals; quantity and remove work.
- [ ] Every form shows inline errors without moving the submit button, then a success state; Enter submits.
- [ ] The theme toggle switches both themes completely, including cards, bands, the strip and the footer.

## Responsive

- [ ] At 1440, 1024 and 768 wide the header stays on one line; under 1024 the links are in the menu dialog.
- [ ] At 390 wide nothing scrolls sideways (check `document.documentElement.scrollWidth` in a normal window, not only in phone emulation); carousel rows show one card and a peek of the next.
- [ ] Hero pictures move under the copy on phones; the ticker shows bars only.

## Accessibility

- [ ] One H1 per view; headings in order.
- [ ] The hero ticker is a tablist with arrow keys; chart tabs too; filter tabs use `aria-pressed`.
- [ ] Focus rings are visible on every control in both themes and on black bands.
- [ ] Text contrast is at least 4.5:1, including grey captions on grey bands.

## Performance

- [ ] One font file, no external requests; pictures under 250 KB each.
- [ ] The single-file page from `scripts/inline.mjs` opens from disk with fonts and pictures in place.

## Real brief

- [ ] Every product, price, figure, chart value, customer, quote and date comes from the brief, or is a marked placeholder listed in the reply.
- [ ] No invented reviews, awards, certifications, partner logos or benchmark claims.
