# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in dark and light.

## Look and feel

- [ ] The page is black by default and the light theme is complete; the hero, the join band, the tour art and 404 stay black in both.
- [ ] At least four signature elements are on the home page: era lettering over grainy art, the strip, dated moments, the outlined current marker, mono tag boxes, accent serif places, circle-icon pills.
- [ ] Each era has one lettering treatment and one color, used everywhere that era appears; the site accent is the current era's color.
- [ ] Titles are in the serif, dates and tags in mono capitals, everything else in the sans.
- [ ] "Current" is always the thin outlined box: nav, era index, filters, sizes, gallery buttons.
- [ ] No colored backgrounds, gradients on controls, card shadows, rounded images or emoji.
- [ ] Copy is short and concrete, with no exclamation marks, hype words, lorem ipsum or em dashes.

## Images

- [ ] Every image follows one language: one object, one hard light, darkness, grain, duotone in its era color, no faces or text.
- [ ] The hero's brightest area sits away from the lettering at 1440, 768 and 390 wide.
- [ ] Product images share one backdrop and ratio.
- [ ] Every image has `alt`, `width` and `height`; decorative ones have `alt=""`; none uses `loading="lazy"` in a single file.

## Motion

- [ ] The hero art settles and the copy rises once; moments rise as they enter; nothing loops.
- [ ] With reduced motion, everything is shown at once and nothing moves.
- [ ] Content is visible with JavaScript turned off: every view, every era and every moment.

## Completeness and interactions

- [ ] Every sample name from the Replace checklist is gone, including storage keys and the `titles` map.
- [ ] Every link reaches a view, a section or a real page; no `href="#"`.
- [ ] The strip shows one thumbnail per moment; on the Latest page the marker follows scrolling and a thumbnail jumps to its moment.
- [ ] Filters (moments, formats, regions, categories) update, show an empty message when nothing matches, and accept their URL parameter.
- [ ] Every era opens from the index; the collection switches between grid and list.
- [ ] City rows open and list each night with a working ticket link or a clear status.
- [ ] The product page fills from the card, asks for a size, adds to the bag, and the bag count and drawer agree.
- [ ] Every form shows inline errors that do not move the submit button, a sending state and a success state, from the button and from Enter.

## Responsive

- [ ] At 1440, 1024 and 768 the header stays on one line; below 960 the menu button takes over.
- [ ] At 390 nothing scrolls sideways (check with a normal 390px window, not only phone emulation); moments stack, the collection is two columns, the tour art hides.
- [ ] The lettering fits the width at every size and never touches the edges.

## Accessibility

- [ ] One H1 per view; lettering used as a heading has `role="img"` and an `aria-label`.
- [ ] Text contrast is at least 4.5:1 on black and on paper, including gray dates and accent city names.
- [ ] Every control is reachable by keyboard with a visible focus ring; dialogs close with Escape.
- [ ] Status never relies on color alone: sold out is struck through and says so, few left says so.

## Performance

- [ ] One file under a few megabytes after inlining; fonts are the three families only.
- [ ] Art files are SVG or compressed images sized to their slot.

## Real brief

- [ ] Only real facts: dates, venues, prices, track lists, credits and quotes the user gave. Drafted ones are listed in your reply.
- [ ] Ticket buttons point to the real sellers; checkout and the list form say plainly what is not connected yet.
