# Motion

Motion here is calm and graphic: a line draws itself, labels wipe in like a highlighter, colors cross-fade. Nothing bounces, nothing loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | hover fills, presses, color changes |
| `--dur-base` | 280ms | arrows, FAQ icons, the header hairline |
| `--dur-slow` | 700ms | reveals, plate wipes, the theme cross-fade |
| `--dur-draw` | 1800ms | the outlined wordmark |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | everything: a quick start and a long, soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.logotype.draw` paths | the hairline outline draws from start to end | each time the home view appears (keyframe animation, 150ms delay) |
| `.reveal` blocks | fade in and rise 18px | entering the viewport, once |
| `.plate` inside a revealed block | wipes in from the left with `clip-path` | 180ms after its block reveals |
| Stripes | cross-fade between day and night | theme toggle (the three colors are registered with `@property`, so the gradient can transition) |
| Ovals, pills, round buttons | fill white, text turns ink | hover |
| Arrows in link cells and big rows | slide 6 to 8px right | hover |
| Pictures in cards and rows | scale to 1.035 inside their frame | hover |
| FAQ plus | rotates 45 degrees into a cross | open |
| Header | hairline fades in | scrolled past 8px |

No parallax, no scroll-jacking, no marquees, no auto-playing carousels, no animated gradients inside elements, no cursor effects.

## How the wordmark draws

The hero has its own inline copy of the wordmark paths (not a `<use>`), each with `pathLength="1"` and `vector-effect="non-scaling-stroke"`, so the outline stays a 1.25px hairline at every size. Under the `js` class the paths get `stroke-dasharray: 1` and a keyframe animation from `stroke-dashoffset: -1` to `0`. A keyframe animation is used instead of a transition because it also runs on first load, and it replays each time the home view is shown again. When you change the wordmark, keep one `<path>` per letter (outer contour and counters in one path) with those two attributes.

## Fallbacks

- Reveal, plate wipes and the drawing only apply under the `js` class, so everything is visible without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` sets every duration and delay to 1ms, removes the rise and the stripe cross-fade, and shows the wordmark fully drawn.
- Animate only `opacity`, `transform`, `clip-path`, `stroke-dashoffset` and the registered stripe colors.
