# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser at 1440, 1024, 768 and 390 px, in light and dark.

## Look and feel

- [ ] The page is white with light gray bands; the hero, banners, help band, section bar and footer are dark in both themes.
- [ ] Banners have 20px corners, one product lit from behind, one headline and one pale button.
- [ ] The category strip, the support topics and the steps are split by thin vertical rules that line up.
- [ ] Buttons are small and square-ish (4px), blue, with uppercase labels for commerce actions; no pill buttons.
- [ ] Yellow appears only on offers and flags, raspberry only on prices, green only on stock and success; stars are blue.
- [ ] Product titles are long and factual at regular weight; headlines are short, bold and carry a number where it helps.
- [ ] No card shadows, no gradients on buttons, no emoji or icon fonts, no em dashes or exclamation marks.

## Images

- [ ] Every product picture has the same treatment and scale per family, on the tile gradient or a dark banner.
- [ ] No other company's interface, wallpaper, logo or device name appears on any screen or box.
- [ ] Every image has `alt` (empty when a title next to it already names the product), `width` and `height`; every picture the user must supply is listed in your reply.

## Motion

- [ ] The hero rotates, pauses on hover and focus, and stays still with reduced motion; arrows and dots always work.
- [ ] Product art leans in on hover; arrow links nudge; the added panel drops in and closes itself.
- [ ] Entrances use keyframes; nothing depends on a transition from a class added at load.

## Completeness and interaction

- [ ] Every link goes to a view, a section or a real page; no `href="#"`.
- [ ] Theme toggle works and remembers the choice; the default follows the system.
- [ ] Search, category links, every filter group with counts, the offers checkbox, sort and the empty state work, and `?cat=`, `?q=`, `?deal=1` and `?sort=` land filtered.
- [ ] Compare takes up to three products, says so when a fourth is ticked, and the sheet lists every spec label.
- [ ] Product page: thumbnails and arrows change the view, swatches recolour the art, "Add to cart" opens the panel and updates the count, the section bar scrolls to its sections.
- [ ] Cart: steppers, removal at one, totals, the free delivery meter, the checkout note and the empty state all work.
- [ ] Business: the term switch changes every plan price; "Get a quote" preselects the plan.
- [ ] Every form validates inline, shows a sending state and a success state, and runs from the submit button and the Enter key (sandboxed frames block native submission).
- [ ] Error messages appear in their reserved line: the submit button does not move when they show or clear.
- [ ] Content is readable with JavaScript off.

## Responsive

- [ ] The header never wraps at 1440, 1024 and 768 px; the links move into the drawer below 1240px.
- [ ] Nothing scrolls sideways at 390px in a normal (not device-emulated) window: `document.documentElement.scrollWidth <= innerWidth` on every view.
- [ ] Strips become ruled lists, rows stack and center, tiles go to one or two columns, the product page stacks with the buy column under the gallery.

## Accessibility

- [ ] One `<h1>` per view; headings in order.
- [ ] Visible focus on every control, white on the dark bands.
- [ ] Icon buttons have labels; the cart link says how many items it holds; stars have a text label.
- [ ] Pressed and selected states use `aria-pressed`, `aria-current` or real inputs.
- [ ] Text contrast is at least 4.5:1, including muted gray, the previous price and links in dark mode.

## Performance

- [ ] One font file, preloaded; product photos as WebP at sensible sizes; the single-file delivery stays under a few megabytes.
- [ ] No outside requests: no CDNs, remote fonts, trackers or hotlinked product images.

## Real brief

- [ ] Every sample brand string is gone (`validate.mjs` checks the list in SKILL.md).
- [ ] Prices, previous prices, offers and end dates, specs, ratings, reviews, stock, delivery and return rules, warranty and repair times, plan prices and opening hours come from the user; anything drafted is listed in your reply as a placeholder to confirm.
- [ ] No invented reviews presented as real, no partner or certification badges, no benchmark claims, no fake scarcity.
