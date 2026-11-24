# Motion

Motion in this style is calm and orbital: a thin line draws itself around the hero once, photos settle into their round frames as they arrive, and arrows lean forward when you point at them. Nothing loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 160ms | button and chip colors, presses |
| `--base` | 320ms | arrow nudges, the nav underline, the details plus, carousel dots stretching |
| `--slow` | 720ms | reveals, the split bar growing, the avatar ring tilting |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | everything (a quick start and a long, soft landing) |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.orbit-line path` | draws itself from start to end over 2.4s (`stroke-dasharray` with `pathLength="1"`) | page load, as keyframes |
| `.reveal` | fades in and rises 28px | entering the viewport, once |
| `.reveal .port > img` | settles from 108 percent to 100 percent scale inside its crop over 1.1s | with its reveal |
| `.split span` | grows from the left | with its reveal |
| `.go` | scales to 106 percent; the arrow slides 4px right | hover and focus |
| `.nav a::after` | the orange underline grows from the left | hover, current page |
| `.dots button` | the current dot stretches into a 40px orange pill | carousel scroll |
| `.rail` | smooth scroll with snap | prev, next, dots, swipe |
| `.avatar::after` | the orbit ring tilts 12 degrees | hover |
| `.post .port > img` | scales to 103 percent | hover |
| `.qa summary .icon` | plus turns 45 degrees | open |
| `#menu` | drops 8px into place | open |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No autoplaying carousels, no parallax, no scroll-jacking, no spinning orbits, no cursor-following effects.

## Fallbacks

- Reveal styles apply only under the `js` class, so everything is visible without JavaScript; the orbit line is fully drawn without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation, sets transitions to 1ms and turns smooth scrolling off; the orbit line and the split bar appear complete.
- Animate only `opacity`, `transform` and the SVG stroke offset. Never animate layout properties or large color areas.
