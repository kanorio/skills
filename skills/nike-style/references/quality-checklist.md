# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser at 1440, 768 and 390 px, in light and dark.

## Look and feel

- [ ] The chrome is white (or near black in dark mode), black type and one gray. No brand accent, no tinted sections.
- [ ] Each page that sells has a campaign hero or statement with one `.display` headline of two to four words, in condensed capitals through CSS (source text in normal case).
- [ ] Every product sits on the same gray tile, contained, with label, name, category, color count and price under it.
- [ ] Buttons are pills: solid black for the main action, white on photographs, outlined for secondary. Nothing else looks like a button.
- [ ] Section titles are 24px medium in sentence case; Anton appears only in display headlines, page titles, the centered statement, pull quotes and the pillar numbers.
- [ ] Red only for "Just in", "Sale" and errors; green only for savings and success.
- [ ] No rounded photographs, card shadows, outlined cards, gradients on controls, emoji or icon fonts.
- [ ] Copy is short and concrete: no exclamation marks, superlatives, lorem ipsum or em dashes.

## Images

- [ ] Campaign photographs share one look (black and white or one grade, hard light, grain) and leave a calm lower third for the headline.
- [ ] White headline text reads on every photograph at 1440 and at 390 (check the phone crop).
- [ ] Product images share one angle, scale and background; none are cropped.
- [ ] Every image has `alt`, `width` and `height`; every image the user must supply is listed in your reply.

## Motion

- [ ] The hero headline rises in once on load; nothing loops except the promo strip.
- [ ] With reduced motion on, nothing moves and the promo strip stays still.
- [ ] Entrances use keyframes; nothing depends on a transition from a class added at load.

## Completeness and interaction

- [ ] Every link goes to a view, a section or a real page; no `href="#"`.
- [ ] Theme toggle works and remembers the choice; the default follows the system.
- [ ] Phone menu opens, closes with the button and Escape, and closes when a link is used.
- [ ] Search goes to the shop with the term applied; categories, filters, sort and the empty state work, and links with `?category=` or `?sport=` land filtered.
- [ ] Product page: color swatches change the image, sold-out sizes cannot be picked, "Add to bag" without a size shows the error without moving the button, adding opens the popover and updates the bag count.
- [ ] Bag: quantities, removal, totals, the free-delivery bar, the promo code field and the empty state all work.
- [ ] Every form validates inline, shows a sending state and a success state, and runs from the submit button and the Enter key (sandboxed frames block native submission).
- [ ] Error messages appear in reserved space: nothing below them moves when they show or clear.
- [ ] Content is readable with JavaScript off.

## Responsive

- [ ] Nothing scrolls sideways at 390px in a normal (not device-emulated) window: `document.documentElement.scrollWidth <= innerWidth` on every view.
- [ ] The header collapses into the menu below 1024px; the utility bar disappears.
- [ ] Rails show one and a bit cards on phones; grids drop to two columns; tiles stack.
- [ ] The hero headline stays on two or three lines at 390px.

## Accessibility

- [ ] One `<h1>` per view; headings in order.
- [ ] Visible focus on every control, white on photographs and the black band.
- [ ] Icon buttons have labels; the bag link says how many items it holds.
- [ ] Pressed and selected states use `aria-pressed` or real radio and checkbox inputs.
- [ ] Text contrast is at least 4.5:1, including muted gray and white on photographs.

## Performance

- [ ] Two font files, preloaded; photographs as WebP or AVIF at sensible sizes; the single-file delivery stays under a few megabytes.
- [ ] No outside requests: no CDNs, remote fonts, trackers or hotlinked images.

## Real brief

- [ ] Every sample brand string is gone (`validate.mjs` checks the list in SKILL.md).
- [ ] Prices, sizes, delivery rules, return policy, reviews and ratings come from the user; anything drafted is listed in your reply as a placeholder to confirm.
- [ ] No invented awards, press quotes, athlete endorsements, review counts or sustainability claims.
