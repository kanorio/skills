# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser at 1440, 1024, 768 and 390 px, in light and dark.

## Look and feel

- [ ] The page is a gray shelf of square white boxes under the deep blue-black bar and the lighter department bar.
- [ ] The search field takes the remaining width of the bar, with the department select on the left and the orange square button on the right.
- [ ] Yellow pills for adding and signing in, orange for "Buy now" and search; red only for discount tags, "Limited time deal" and errors; green only for stock, delivery and success; blue only for links.
- [ ] Heavy `.display` type appears only inside colour bands, two lines at most, with a concrete offer.
- [ ] Every product card shows rating and count, the split price, the list price when there is one, and a delivery date.
- [ ] No shadows on boxes, no rounded boxes, no gradients on controls, no emoji or icon fonts.
- [ ] Copy is short and factual: no exclamation marks, superlatives, lorem ipsum or em dashes.

## Images

- [ ] Every product picture is the same treatment: centered, contained, on a light or transparent ground, same scale per family.
- [ ] The art in colour bands is product cut-outs, not photos with text in them.
- [ ] Every image has `alt` (empty when a title next to it already names the product), `width` and `height`; every picture the user must supply is listed in your reply.

## Motion

- [ ] The promotion band rotates, pauses on hover and focus, and stays still with reduced motion; the arrows always work.
- [ ] The added-to-cart panel drops in and closes itself; the drawer slides in.
- [ ] Entrances use keyframes; nothing depends on a transition from a class added at load.

## Completeness and interaction

- [ ] Every link goes to a view, a section or a real page; no `href="#"`.
- [ ] Theme toggle works and remembers the choice; the default follows the system.
- [ ] The search sends the words and the department to the results; department links, star filters, price ranges, the deals and delivery checkboxes, sort and the empty state all work, and `?cat=`, `?q=` and `?deal=1` land filtered.
- [ ] "Deliver to" opens the postal code dialog and the new code shows everywhere.
- [ ] Product page: thumbnails change the stage, colour options recolor the art, quantity is respected, "Add to cart" opens the panel and updates the count, "Buy now" lands in the cart.
- [ ] Cart: steppers, delete, save for later, move to cart, totals, the free-delivery meter, the checkout note and the empty state all work.
- [ ] The countdown and delivery dates are computed, not typed.
- [ ] Every form validates inline, shows a sending state and a success state, and runs from the submit button and the Enter key (sandboxed frames block native submission).
- [ ] Error messages appear in their reserved line: the submit button does not move when they show or clear.
- [ ] Content is readable with JavaScript off.

## Responsive

- [ ] The top bar never wraps at 1440, 1024 and 768 px; below 640 px the search has its own row.
- [ ] Nothing scrolls sideways at 390px in a normal (not device-emulated) window: `document.documentElement.scrollWidth <= innerWidth` on every view.
- [ ] Quad boxes go to two columns, results to two columns, rails show about two and a half cards, the product page stacks with the buy box under the details.

## Accessibility

- [ ] One `<h1>` per view; headings in order.
- [ ] Visible focus on every control, orange on the dark bars.
- [ ] Icon buttons have labels; the cart link says how many items it holds; prices have a plain text version for screen readers.
- [ ] Pressed and selected states use `aria-pressed` or real inputs.
- [ ] Text contrast is at least 4.5:1, including muted gray, list prices and links in dark mode.

## Performance

- [ ] One font file, preloaded; product photos as WebP at sensible sizes; the single-file delivery stays under a few megabytes.
- [ ] No outside requests: no CDNs, remote fonts, trackers or hotlinked product images.

## Real brief

- [ ] Every sample brand string is gone (`validate.mjs` checks the list in SKILL.md).
- [ ] Prices, list prices, ratings, review counts, "bought in past month" figures, delivery rules, return policy and stock come from the user; anything drafted is listed in your reply as a placeholder to confirm.
- [ ] No invented reviews presented as real, no fake countdowns, no "only 2 left" without real stock data.
