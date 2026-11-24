# Motion

Motion here is quick and confident, like a good app: the hero settles in once, cards rise as they scroll into view, the fee bars wipe in from the left, and every number you change lands with a small bump. Nothing loops, floats or follows the cursor.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | hover colors, chip selection, input borders |
| `--dur-base` | 260ms | the switch knob, card lifts, the FAQ plus |
| `--dur-slow` | 620ms | entrances and reveals |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | everything (a fast start and a soft landing) |

The fee bars wipe over 900ms, 110ms apart; the calculator total counts to its new value over 360ms.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.enter` (headline, lead, buttons, the three cards) | fades in and rises 28px, staggered by `--i` | page load, as keyframes |
| `.reveal` | fades in and rises 28px | entering the viewport, once |
| `.grow` (pill bar rows) | wipes in left to right with a rounded `clip-path` | entering the viewport, once |
| `#q-total` | counts from the old to the new total, then the figure bumps to 106 percent and back | any calculator change |
| `.btn` | presses to 97 percent | active |
| `.g-card a` | lifts 4px | hover |
| `.switch span` | slides across | toggle |
| `.qa` plus | turns 45 degrees into a cross | open |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No parallax, scroll-jacking, auto-playing carousels or marquee tickers.

## Fallbacks

- Hidden start states exist only under `.js` and inside `@media (prefers-reduced-motion: no-preference)`, so everything is visible without JavaScript and with reduced motion.
- A timer marks every `.reveal` and `.grow` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, full-page screenshots).
- `prefers-reduced-motion: reduce` sets every duration to 1ms, skips the count and the bump, and shows the final figures at once.
- Animate only `opacity`, `transform` and `clip-path`. Never animate widths, heights or colors of large areas.
