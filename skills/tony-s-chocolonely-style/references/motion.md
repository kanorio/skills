# Motion

Motion in this style feels like paper being slapped onto a board: letters drop into place with a small bounce, cards land with a twist, buttons wobble when you point at them. It is quick and a little springy, never slow or floaty.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 140ms | button wobble and press |
| `--base` | 260ms | rows opening, nav underline, toast, tile art tilt |
| `--slow` | 520ms | letter drop, card landing, basket count pop |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | color, underline and opening changes |
| `--ease-pop` | cubic-bezier(0.3, 1.5, 0.5, 1) | anything that should overshoot: letters, cards, buttons, the count, the toast |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Shout letters (`.ch`) | drop 0.3em from above with four times their resting tilt, staggered 14ms per letter | each time a view is shown |
| `.reveal` cards and split rows | land from 26px below with a 2.5 degree twist | entering the viewport, once |
| Buttons | the yellow block tilts 1.6 degrees and grows 5%; press shrinks it | hover, active |
| Product art in a tile | tilts 4 degrees and grows 6% | tile hover |
| Nav links | a 3px underline grows from the left | hover, current page |
| Basket count | pops to 1.4 times with a small tilt | an item is added |
| Toast | rises 24px and fades in, leaves after 3.6 seconds | an item is added |
| Rows | plus rotates into a cross | open |
| Menu sheet | drops 16px and fades in | open |
| Rail | smooth scroll by 80% of its width | arrow buttons |

Nothing else moves: no parallax, no auto-playing carousels, no looping marquees, no cursor effects, no animated gradients.

## Fallbacks

- Letter drops are keyframe animations, so they play when a view first appears without depending on a class added at load.
- Reveal styles only apply under the `js` class, so content is visible without JavaScript; a timer reveals everything after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` turns off every animation and transition, shows reveals at once and makes rail scrolling instant. The jostled letters keep their resting tilt: that is type, not motion.
- Animate only `transform` and `opacity`.
