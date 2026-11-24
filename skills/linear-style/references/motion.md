# Motion

Motion here is precise and settling: things come into focus, the product window lays flat, and nothing bounces or loops except the caret.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | hover, press, color changes |
| `--dur-base` | 200ms | toggles, icon rotation, header hairline |
| `--dur-slow` | 600ms | section reveals |
| `--ease` | cubic-bezier(0.16, 1, 0.3, 1) | everything (a fast start and a long, soft landing) |

The product window settles over 1.2s with the same easing.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.reveal` blocks | fade in, rise 16px and un-blur from 4px | entering the viewport, once |
| `.stage .window` | tilts from 12 degrees back to flat | its stage entering the viewport, once |
| `.caret` | blinks once per second | always (the only loop; removed with reduced motion) |
| Buttons | opacity or background shift | hover |
| FAQ icon | plus rotates 45 degrees into a cross | open |
| Header | hairline appears | scrolled past 8px |

No parallax, no cursor-following glows, no animated gradients, no scroll-jacking, no number count-ups.

## Fallbacks

- Reveal styles and the tilt only apply under the `js` class, so content is visible and flat without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires.
- `prefers-reduced-motion: reduce` sets every duration to 1ms, removes the rise, blur and tilt, and stops the caret.
- Animate only `opacity`, `transform` and `filter`.
