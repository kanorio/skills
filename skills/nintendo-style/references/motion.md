# Motion

Motion in this style is a friendly bounce: small, quick and springy, like a button on a toy. Things pop when you press them and settle; nothing drifts, loops or demands attention, except the slow float of the 404 mark.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 140ms | color and border changes, button press |
| `--dur-base` | 240ms | card lift, dot nudge, tile lift |
| `--dur-slow` | 520ms | section rise, image zoom, the menu sheet |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | a soft stop for rises and zooms |
| `--ease-pop` | cubic-bezier(0.34, 1.56, 0.64, 1) | a small overshoot for things you touch: card lift, hearts, tiles, the red dot |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.reveal` blocks | rise 16px and fade in (`@keyframes rise`) | entering the viewport, once |
| Section head rule | the red rule grows from the left (`@keyframes grow`) | its `.sec-head.reveal` entering the viewport |
| Cards (game, feature) | lift 4px with a soft shadow, picture zooms 4% | hover |
| `.dot` | nudges 3px right | hover on its link or button |
| Buttons | press to 96% | click |
| Hearts and the saved count | pop to 130% and back (`@keyframes pop`) | saving |
| Spotlight | slides scroll smoothly; the current tile lifts with a red ring; autoplay every 7 seconds, paused on hover, focus, a tile click or the pause button | tiles, arrow keys, autoplay |
| Icon tiles | tilt 6 degrees | hover |
| Menu sheet | rises from the bottom | opening |
| 404 mark | floats and rocks slowly | always, except with reduced motion |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

No parallax, no auto-playing video, no count-ups, no confetti on submit, no hover effects that move text.

## Fallbacks

- Reveal styles only apply under the `js` class, so content is visible without JavaScript; without it the spotlight is a sideways scroller and the controls are hidden.
- A timer marks everything as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition, shows reveals at once, scrolls the spotlight without smoothing and starts it paused.
- Animate only `transform` and `opacity`.
