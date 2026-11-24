# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser at 1440, 1024, 768 and 390 px, in light and dark.

## Look and feel

- [ ] The home page opens with the peach wash, a quiet headline, big text tabs and the giant search with its orange gradient rim and gradient Search pill.
- [ ] One accent only: the orange gradient for the main action and the search rim, orange text for the active tab, kickers, links and the chosen tier. No blue links, no second colour.
- [ ] Product cards are flat: a gray tile, a two-line title, the price range, "Min. order", the maker, the trust line and two outlined pills.
- [ ] The trust strip has exactly three promises with icons in white rounded squares and thin dividers.
- [ ] Buttons and chips are full pills; panels, the search and form cards are 16px rounded; fields 10px.
- [ ] Copy is practical and specific: numbers first, no exclamation marks, no "world-class", no lorem ipsum.

## Images

- [ ] Every product picture has the same treatment: centered, contained, on a light or transparent ground, same scale per family.
- [ ] No photos of people, factories or places that are not the user's own; no other company's logos or packaging.
- [ ] Every image has `alt` (empty when a title next to it already names the product), `width` and `height`; every picture the user must supply is listed in your reply.

## Motion

- [ ] The tab underline grows under the chosen tab; the chosen price tier lifts as the quantity changes.
- [ ] The new-season panel rotates, pauses on hover and focus, and stays still with reduced motion; the dots always work.
- [ ] Entrances use keyframes; nothing depends on a transition from a class added at load.

## Completeness and interaction

- [ ] Every link goes to a view, a section or a real page; no `href="#"`.
- [ ] The theme toggle works and remembers the choice; the default follows the system.
- [ ] Each hero tab changes the search's placeholder and button, and lands in the right place (results, workshops, the quote request with the words filled in).
- [ ] Category fly-outs open on hover and keyboard focus at 1024px and up; "All categories" opens the mega menu and Escape closes it.
- [ ] Results: select-by chips, category and maker filters, sort, the Workshops tab, the empty state and `?q=`, `?cat=`, `?ws=`, `?ready=1` all work.
- [ ] Product page: thumbnails change the stage, swatches recolor the art, the stepper and the field respect the minimum order, the estimate and the chosen tier follow the quantity, "Send inquiry" and "Order a sample" land in the inquiry list.
- [ ] Inquiry list: quantities below the minimum are refused with a message, line estimates and the total update, lines can be removed, the empty state shows when the list is empty.
- [ ] Every form validates inline, shows a sending state and a success state, and runs from the submit button and the Enter key (sandboxed frames block native submission).
- [ ] Error messages appear in their reserved line: the submit button does not move when they show or clear.
- [ ] Content is readable with JavaScript off.

## Responsive

- [ ] The header never wraps at 1440, 1024 and 768 px.
- [ ] Nothing scrolls sideways at 390px in a normal (not device-emulated) window: `document.documentElement.scrollWidth <= innerWidth` on every view.
- [ ] Product grids go to two columns on phones, the explore row stacks into a two-column category list, three small tiles and the new-season panel, the product page stacks with the workshop card under the order box.

## Accessibility

- [ ] One `<h1>` per view; headings in order.
- [ ] Visible focus on every control; the big search shows a ring around the whole box.
- [ ] Icon buttons have labels; the inquiry list link says how many items it holds.
- [ ] Pressed and current states use `aria-pressed`, `aria-current` or real inputs.
- [ ] Text contrast is at least 4.5:1: white on the orange gradient, muted gray, orange text in both themes.

## Performance

- [ ] One font file, preloaded; product photos as WebP at sensible sizes; the single-file delivery stays under a few megabytes.
- [ ] No outside requests: no CDNs, remote fonts, trackers or hotlinked product images.

## Real brief

- [ ] Every sample brand string is gone (`validate.mjs` checks the list in SKILL.md).
- [ ] Prices and tiers, minimum orders, lead times, sample prices, ratings, years in business, reply times, on-time shares, "Verified" ticks, freight rules and payment terms come from the user; anything drafted is listed in your reply as a placeholder to confirm.
- [ ] No invented certifications, audits, reviews, buyer counts or factory figures presented as real.
