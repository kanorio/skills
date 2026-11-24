# Motion

Motion in this style is like light coming up at dusk: the hero photo settles, sparks drift up, sections rise into view once, and a torn photo slides into its band. Then the page is still, except for the countdown ticking.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 140ms | hover and press colors, arrow nudges |
| `--base` | 260ms | the FAQ plus, the menu sheet sliding in |
| `--slow` | 700ms | reveals, the torn photo, image zoom on card hover |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | everything |

The hero photo settles over 1.8s. Sparks take 6 to 10 seconds to rise.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.hero > img` | scales from 1.06 to 1 (`settle` keyframes) | page load, once |
| `.sparks .spark` | 22 small ember dots rise from the bottom of the hero and fade, each with its own drift and delay | always, only with motion allowed; the script adds them |
| `.reveal` | fades in and rises 18px (`rise-in` keyframes) | entering the viewport, once |
| `.band .band-photo` | slides 24px in from the left and fades (`tear-in`) | the band entering the viewport, once |
| Card photos | scale to 1.04 inside their frame | hover on the card |
| Text links | the arrow moves 3px right | hover |
| `.btn` | colors change; presses sink 1px | hover, press |
| `.sheet` | slides 24px in from the right | opening the menu |
| `.faq summary .icon` | the plus turns 45 degrees into a cross | opening a question |
| `.slides` | smooth scroll to the next slide | arrows and dots |
| Countdown digits | the numbers change every second | always; not an animation |

Entry effects use `@keyframes`, not transitions: a class added during page load does not start a transition, so a transition-based reveal would never play on the first screen.

## Fallbacks

- Reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every element as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition, shows reveals at full opacity, hides the sparks and makes the slider jump instead of scroll. The countdown keeps counting because it is information, not motion.
- Animate only `opacity` and `transform`. Never animate the torn edges, the photo scrim or text size.
