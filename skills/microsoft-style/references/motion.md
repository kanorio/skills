# Motion

Motion in this style is calm and helpful: things arrive once with a gentle rise, cards lift a little when you point at them, and switches slide their fill across without fuss. Nothing loops, bounces or plays on its own.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | hover colors on buttons, chips, topic buttons and option cards |
| `--dur-base` | 220ms | segment fills, the chevron on `.more` links, card lift, FAQ chevrons, the toast |
| `--dur-slow` | 560ms | entrances and reveals |
| `--ease` | cubic-bezier(0.33, 0, 0.1, 1) | everything: a soft start and a long, quiet landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.enter` (greeting, switch, hint, ask box, chips) | fades in and rises 14px, 80ms apart by `--i` | page load, as keyframes |
| `.reveal` (feature card, tiles, story cards, business split, values) | fades in and rises 14px | entering the viewport, once |
| `.pcard`, `.card` | lift 4px and take the larger shadow | hover |
| `.seg` buttons | the navy fill and text color change | click |
| `.more::after` chevron | moves 3px right | hover on the link |
| `.qa` chevron | turns 180 degrees | open |
| Rail | scrolls one card per arrow click, smooth unless reduced motion | `#rail-prev`, `#rail-next` |
| `.toast` | rises in from the bottom, leaves after a few seconds | adding to the cart |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No autoplaying carousels, parallax, scroll-jacking, animated gradients or typing effects.

## Fallbacks

- Entrance and reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- With `prefers-reduced-motion: reduce`, reveals are shown at once, every duration and delay drops to 1ms, cards stop lifting and the rail scrolls without smoothing.
- Animate only `opacity` and `transform`. The hero wash never moves.
