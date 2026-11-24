# Motion

Motion in this style is slow, smooth and quiet: things settle into place as you scroll, pictures cross-fade, and nothing bounces. It should feel like the page is presenting the product, never like it is performing.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | color, border and opacity changes on buttons, links and chips |
| `--dur-base` | 320ms | card hover, dot stretch, the plus turning into a cross |
| `--dur-slow` | 700ms | text rising into place, picture cross-fades, the success card |
| `--ease` | cubic-bezier(0.3, 0.1, 0.2, 1) | one soft deceleration for everything; no overshoot |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.reveal` blocks (tile text, chapter text, the product hero row) | rise 24px and fade in (`@keyframes rise`) | entering the viewport, once |
| `.tile-img`, `.chapter-img`, `.p-hero-img` | settle from 94 percent and 32px lower to full size, tied to scroll (`animation-timeline: view()`) | scrolling into view; only where supported and when motion is allowed |
| Gallery | cards scroll with snap; the current dot stretches into a bar that fills over six seconds while playing (`@keyframes progress`) | dots, arrow keys, the play button, autoplay |
| Closer look and color pictures | cross-fade (`@keyframes fade`) | a pill or a swatch |
| Cards (store, perks) | grow 1 percent with a soft shadow | hover |
| Outline buttons | fill blue | hover |
| FAQ and closer-look icons | the plus turns 45 degrees into a cross | opening |
| Bag count | pops once (`@keyframes pop`) | adding to the bag |
| Menu and search | fade in | opening |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

No parallax backgrounds, no auto-playing video, no count-up numbers, no confetti, no bounce, no text that moves on hover.

## Fallbacks

- Reveal styles only apply under the `js` class, so content is visible without JavaScript; without it the gallery is a sideways scroller and its controls are hidden.
- A timer marks everything as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- The scroll-linked settle is inside `@supports (animation-timeline: view())` and `prefers-reduced-motion: no-preference`; elsewhere pictures are simply in place.
- `prefers-reduced-motion: reduce` removes every animation and transition, shows reveals at once and starts the gallery paused.
- Animate only `transform` and `opacity`.
