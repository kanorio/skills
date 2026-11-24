# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser at 1440, 1024, 768 and 390 px, in dark and light.

## Look and feel

- [ ] The page is deep navy (or pale blue in light) with a blue light falling from the top, under a near-black bar and a lighter blue store bar with a long search field and a square blue button.
- [ ] Every item shows its cover art, and the covers carry the color; panels and rows stay blue-gray.
- [ ] Every price uses the price block: lime percentage, dark box, old price struck through over the new price; no discount without an old price.
- [ ] Lime appears only in discount percentages; green only on buying and committing buttons; blue for links, tabs, secondary buttons and search.
- [ ] The home page has the featured carousel, a ribboned deal rail, category tiles and the tabbed list with its preview panel.
- [ ] Corners are 4px or less except category tiles; no emoji, no icon fonts, no stock photos behind text.
- [ ] Copy is short and factual: no exclamation marks, "epic", "ultimate", lorem ipsum or em dashes.

## Images

- [ ] One cover per item at the same ratio; real covers in the catalog rows, screenshots in `#shots`.
- [ ] Every image has `alt` (empty when the title next to it names the item), `width` and `height`; no `loading="lazy"` in a single-file deliverable.
- [ ] Every picture the user must still supply is listed in your reply.

## Motion

- [ ] The carousel advances only on the home view, pauses on hover and focus, and never with reduced motion.
- [ ] Hover effects have focus equivalents; nothing reveals on scroll.

## Completeness and interaction

- [ ] Every catalog row has a title, maker, tags, price (or free or coming soon), date and platforms; review data only where it is real.
- [ ] Carousel, rails, tabs, preview, search, filters, sort, gallery, wishlist, cart, checkout, library, sign-in, news chips and every form work.
- [ ] Forms show floating errors that do not move the button, a busy state and a success box; they run from the submit button's click.
- [ ] Every link reaches a view, a section ID or a real page; no `href="#"`.
- [ ] Sample strings from the replace checklist are gone (the validator checks).

## Responsive

- [ ] The header stays on one line at 1440, 1024 and 768; the menu button appears below 1100px.
- [ ] At 390 px nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth` with a non-mobile 390 px window), rows put the price under the title, rails show part of the next card.

## Accessibility

- [ ] One `h1` per view; tabs use `role="tab"` with `aria-selected`; the price block has screen-reader text for the discount and old price.
- [ ] Body text meets 4.5:1 in both themes; focus rings are visible on dark and light.
- [ ] Platform badges have a screen-reader sentence ("Available for Windows, macOS").

## Performance

- [ ] Two font files, no third-party requests, images sized for their slot.

## Real brief

- [ ] Prices, discounts, dates, reviews, platforms and features are the user's real data or clearly marked placeholders listed in your reply.
- [ ] Checkout, accounts, library and wishlist are labeled in your reply as front-end only until a backend is connected.
