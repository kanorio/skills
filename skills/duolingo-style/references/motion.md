# Motion

Motion in this style is physical and quick, like a toy: buttons sink, tiles pop, the progress bar overshoots a little and settles. Feedback is instant; nothing drifts or floats in the background.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-press` | 90ms, linear | the button and stop sinking on press |
| `--dur-fast` | 150ms | hover colors |
| `--dur-base` | 260ms | chevrons, popovers, the check bar sliding up, tile pops |
| `--dur-slow` | 520ms | reveals and the progress bar |
| `--ease` | cubic-bezier(0.25, 1, 0.5, 1) | everything that should settle |
| `--ease-bounce` | cubic-bezier(0.34, 1.56, 0.64, 1) | things that should overshoot: reveals, the progress bar, popovers, a right answer |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.btn` | moves down 4px while its edge shrinks to zero | `:active` |
| `.node` (path stop) | moves down 6px, the 8px edge shrinks to 2px | `:active` |
| `.reveal` | rises 18px from 98 percent scale with a small overshoot (`rise` keyframes); siblings stagger by 80ms through `--i` | entering the viewport, once |
| `.bar > i` | the fill grows with `transform: scaleX()` and overshoots slightly | progress changes |
| `.start-tip` | bobs 6px up and down (`bob`, 1.4s, alternate) | always, only with motion allowed |
| `.pop` | pops in from 94 percent scale | opening a path stop |
| `.check-bar` | slides up from below (`slide-up`) | after Check |
| `.choice.is-right` | pops (`pop`) | a right answer |
| FAQ chevron | turns 180 degrees | opening a question |

The "start" bubble is the only loop. No carousels, parallax, marquees, confetti or floating characters.

## Fallbacks

- Entrance effects use keyframes on a class the script adds (`.is-in`), never a transition from a class set at load: a transition from the first frame does not play.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript, and a timer marks every element as revealed after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` cuts every animation and transition to 1ms, stops the bobbing bubble and removes the overshoot; buttons still sink on press, without the transition.
- Animate only `transform` and `opacity` (and colors on hover). The progress bar uses `scaleX`, not `width`.
