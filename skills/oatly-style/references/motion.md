# Motion

Motion in this style is cheeky but short: things pop like stickers, lift like paper, and drawings wobble for a moment the way hand-drawn animation does. Nothing glides slowly or fades through gradients.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button lift, press |
| `--dur-base` | 220ms | tile lift, rows opening, toast |
| `--dur-slow` | 520ms | tile reveals, the basket count pop |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | reveals, color and position changes |
| `--ease-pop` | cubic-bezier(0.34, 1.56, 0.64, 1) | anything that should overshoot a little: the count sticker, the plus turning into a cross, the toast, arrows in big links |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.reveal` tiles | fade in and rise 18px | entering the viewport, once |
| Tiles | lift 3px up and left, hard shadow appears | hover or keyboard focus on the tile link |
| Drawing in a hovered tile | "boils": two-frame wobble (`steps(2)`) of about one degree | while the tile is hovered |
| Buttons | lift 2px with a hard shadow; press flattens it | hover, active |
| Ticker | scrolls left at about 40 seconds per loop | always; pauses on hover |
| Basket count | pops to 1.35 times with a small tilt | an item is added |
| Toast | rises 24px and fades in, leaves after 3.6 seconds | an item is added |
| Rows | plus rotates 45 degrees | open |
| Big-link arrows | slide 6px right | hover |

Nothing else moves: no parallax, no scroll-jacking, no auto-playing carousels, no animated gradients, no cursor effects.

## The boil

Hand-drawn animation keeps lines alive by alternating two slightly different frames. The template fakes it with a stepped keyframe on the drawing inside a hovered tile:

```css
@keyframes boil { 50% { transform: rotate(-1.2deg) translate(1px, -1px); } }
.tile:has(.tile-link:hover) .tile-media > svg { animation: boil 0.36s steps(2) infinite; }
```

Use it only on hover, only on drawings, and never on text.

## Fallbacks

- Reveal styles only apply under the `js` class, so content is visible without JavaScript; a timer reveals everything after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- The ticker is pure CSS, so it also runs without JavaScript; its duplicate list is `aria-hidden`.
- `prefers-reduced-motion: reduce` sets every duration to 1ms, stops the ticker and the boil, and removes the rise from reveals.
- Animate only `transform` and `opacity` (the toast also toggles `visibility`).
