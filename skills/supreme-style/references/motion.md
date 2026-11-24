# Motion

Almost nothing moves. Pages swap the way a printed sheet is replaced: a short fade in four hard steps. The one moving thing on every page is the clock, and the one flourish is a confirmation line that types itself out. Nothing glides, bounces or loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 100ms | reserved for small state changes you add |
| `--dur-base` | 160ms | a view appearing, a new lookbook or news picture |
| `--dur-slow` | 420ms | a status line typing itself out |
| `--ease` | `steps(4, end)` | the default; the typed line uses `steps(28, end)` |

Hover states (underlines, the ink frame on a wall square, the outline on a tile, the name appearing under a tile) change instantly, without a transition.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.is-active` view | fades in, four steps, 160ms | every route change (keyframes; the view goes from `display: none` to shown, so the animation restarts) |
| `.swap` picture | fades in, four steps | the next story or look |
| `.typed` status | revealed left to right with `clip-path` in 28 steps, 420ms | "added to cart", the checkout note |
| `[data-clock]` | the time text changes | every 20 seconds (no animation) |
| `[data-countdown]` | the remaining time changes; reads "(live now)" in accent for the first hour of a drop | every 20 seconds |

No parallax, no scroll-triggered reveals, no autoplaying slideshows or video, no marquee, no cursor effects, no smooth scrolling between pages.

## Fallbacks

- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- `prefers-reduced-motion: reduce` removes every animation and transition: views and status lines are simply there. The clock and countdown still update; they are text, not motion.
- Without JavaScript every view is visible in order, the clock shows the time written in the markup, and nothing waits on a script.
- Animate only `opacity`, `transform` and `clip-path`. Layout, type sizes and colours never animate.
- Nothing that must appear in a screenshot uses `position: fixed`, `position: sticky` at the bottom, or `background-attachment: fixed`: the header, the row and the footer are ordinary flow elements.
