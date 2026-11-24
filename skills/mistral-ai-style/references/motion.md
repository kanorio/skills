# Motion

Motion in this style moves like a pixel game: things arrive in a few discrete steps instead of gliding, sprites idle by hopping one frame, and hover answers in a tenth of a second. Nothing bounces, blurs or drifts.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 120ms | hover backgrounds, the chevron step |
| `--base` | 240ms | the FAQ plus turning into a cross |
| `--slow` | 560ms | reveals |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | color changes |
| `steps(n, end)` | 2 to 4 steps | every movement: reveals, block drops, the chevron, sprite idles |

The stepped timing is the point: smooth easing makes the pixel art look like vector art. Use `steps()` for anything that moves position; use `--ease` only for color.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.terrain .b` (stepped blocks) | drop half a cell into place in three steps, lower rows first, left to right (`--y` and `--x` set the delay) | page load, as keyframes |
| `.sp`, `.mspr` (sprites on blocks and mosaics) | hop 3px up and back, one frame each, every 1.6s; neighbors offset by half a cycle | always, only with motion allowed |
| `.reveal` (section headings, chips) | fade in and rise 16px in four steps | entering the viewport, once |
| Story panel | replays the stepped reveal | tab change |
| `.go::after` (pixel chevrons) | steps 2px right | hover on its button or link |
| FAQ plus | turns 45 degrees in two steps | open |
| Header cells, cards, rows, buttons | background color changes | hover |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No parallax, no scroll-jacking, no carousels, no typing effects, no animated gradients.

## Fallbacks

- Reveal styles apply only under the `js` class, so everything is visible without JavaScript; blocks and stripes are plain CSS and show without it too.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` turns off every animation and transition, shows reveals in place, and stops the sprite idles.
- Animate only `opacity` and `transform`. Mosaic tiles never move.
