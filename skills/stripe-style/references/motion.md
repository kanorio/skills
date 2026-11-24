# Motion

Motion in this style is smooth and quiet, like a well-made instrument: the gradient drifts slowly, cards float into place once, and every interaction answers in a quarter of a second. Nothing bounces, flashes or loops for attention.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | hover and press colors, border changes |
| `--dur-base` | 240ms | the hover arrow, the tile plus, card lifts, FAQ icons, the header turning solid |
| `--dur-slow` | 700ms | entrances and reveals |
| `--ease` | cubic-bezier(0.25, 1, 0.5, 1) | everything (a quick start and a long, soft landing) |

The hero cards float in over 900ms, 140ms apart; the wash drifts over 28 seconds and back.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.wash::before` | slides 3 percent left and right inside its ribbon | always, only with motion allowed (the one loop) |
| `.enter` (ticker, headline, buttons) | fades in and rises 18px, staggered by `--i` | page load, as keyframes |
| `.hero-art .ui` | fades in, rises 28px and settles from 98 percent scale, staggered | page load, as keyframes |
| `.reveal` | fades in and rises 18px | entering the viewport, once |
| `[data-count]` | counts up to the figure in the markup over 1.6s | page load, once |
| `.ar` hover arrow | the stem draws in and the chevron moves 3px right | hover and focus on its link or button |
| `.tile .plus` | turns 90 degrees | hover on the tile |
| `.card3d` | straightens from -8 to -4 degrees and lifts 6px | hover on its tile |
| `.story` | lifts 2px, shadow deepens | hover |
| Header | turns white and blurred with a hairline | scrolled past 8px |
| FAQ icon | plus turns 45 degrees into a cross | open |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No parallax, no scroll-jacking, no cursor-following glows, no carousels.

## Fallbacks

- Entrance and reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` sets every duration to 1ms, stops the wash drift, skips the ticker count and shows the cards in place.
- Animate only `opacity` and `transform`. Never animate the gradient colors, blur radius or layout properties.
