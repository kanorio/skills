# Motion

Motion in this style is quiet: things settle into place, lines draw themselves once, and nothing bounces or loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 140ms | hover, press, color changes |
| `--dur-base` | 220ms | toggles, chevrons, small transforms |
| `--dur-slow` | 420ms | section reveals |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | everything |

Illustrations draw their lines over 1.4s with the same easing.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.reveal` blocks | fade in and rise 10px | entering the viewport, once |
| `.draw` illustrations | ink lines draw from start to end | entering the viewport, once |
| Cards | lift 2px, border darkens | hover |
| Buttons | 1px press | active |
| FAQ and curriculum chevrons | rotate 90 degrees | open |
| Header | hairline appears | scrolled past 8px |

Nothing else moves: no parallax, no auto-playing carousels, no looping animations, no animated gradients.

## How the line drawing works

Each illustration's ink group has `stroke-dasharray: 1` and `stroke-dashoffset: var(--draw, 0)`, and every ink path has `pathLength="1"`. The host `<svg class="draw">` sets `--draw: 1` until it gets the `is-in` class, and the custom property inherits into the `<use>` shadow tree, so the lines transition from hidden to drawn. Card covers do not use `.draw`, so they are always fully drawn.

When you add a new illustration, give every stroked path `pathLength="1"` and put the strokes in one group with the same inline style as the template's symbols.

## Fallbacks

- Reveal and drawing styles only apply under the `js` class, so content is visible without JavaScript.
- A timer marks everything as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` sets every duration to 1ms, removes the rise, and shows illustrations fully drawn.
- Animate only `opacity` and `transform` (plus `stroke-dashoffset` on illustrations).
