# Motion

Motion here is small and friendly: stickers pop onto the page as if pressed down by a thumb, content rises a little as it arrives, and everything else is still.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | link, tab and button colour changes |
| `--dur-base` | 200ms | view fades, sticker hover tilt |
| `--dur-slow` | 520ms | the rise of revealed blocks |
| `--ease` | cubic-bezier(0.25, 0.7, 0.25, 1) | everything |

The sticker pop runs 640ms with the same easing.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.reveal` blocks (news cards, sticker grid items) | fade in and rise 14px | entering the viewport, once |
| `.sticker` inside a revealed block | pop: from 60% scale and a slight turn, past 108%, then settle | the same moment, 90ms later; grid columns are staggered by 70ms |
| Stickers | tilt 5 to 6 degrees and grow 5% | hover on the grid item or the news card |
| Views | fade in | changing route |
| Links | colour deepens, underline appears | hover |
| Header tabs | a pale background | hover |

Nothing loops, slides sideways or parallaxes. No carousels.

## How it is built

- Entrances use `@keyframes` with `animation-fill-mode: backwards`, so they play even when the class is added the moment the page loads, and they release the element afterwards so hover transforms still work.
- `.reveal` hides content only under the `js` class. An IntersectionObserver adds `is-in`; a timer adds it to everything after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- Animate only `opacity` and `transform`.

## Fallbacks

- Without JavaScript every view shows, stacked, with nothing hidden.
- `prefers-reduced-motion: reduce` removes every animation and transition and shows all content at once.
