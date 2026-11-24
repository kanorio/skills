# Motion

Motion in this style is springy and small, like paper cut-outs on a table: things lift, tilt and pop back. It rewards a tap; it never runs on its own. The canvas and its confetti stay still.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 140ms | pill and button lifts, chip and swatch presses |
| `--dur-base` | 240ms | tile lifts, badge turns, portrait wiggles, the FAQ chevron |
| `--dur-slow` | 480ms | tiles popping in, a found friend, turning a story page |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | things that settle: page turns, chevrons |
| `--ease-spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | things that bounce: lifts, pops, badges |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.pill`, `.btn`, `.chip` | lifts 2 to 3px; buttons press down 1px and shrink to 98 percent | hover / `:active` |
| `.tile` | lifts 5px and tilts -0.8 degrees; its badge turns -14 degrees and grows 6 percent | hover |
| Portraits (`.avatars`, `.round-tile`, `.option`) | rise or tilt a few degrees | hover |
| `.reveal` | rises 18px from 96 percent scale with a spring (`rise` keyframes); siblings stagger 60ms through `--i` | entering the viewport, once |
| `.found` | the silhouette turns into the friend and pops (`pop`) | a right answer in the shadow game |
| `.option.is-wrong` | a short sideways shake (`shake`) | a wrong answer, with "Not that one. Look again!" |
| `.page.is-current` | slides in 24px from the right and fades (`turn`) | turning a story page |
| Age buttons, swatches | grow 8 to 12 percent when chosen | `:checked` |

No loops, carousels, parallax, falling confetti, autoplay or celebration bursts. A child should be able to stop looking at the screen at any moment without missing anything.

## Fallbacks

- Entrance effects use keyframes on a class the script adds (`.is-in`), never a transition from a class set at load: a transition from the first frame does not play.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript, and a timer marks every element in the open view as revealed every 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` cuts every animation and transition to 1ms and removes the hover lifts and tilts; colour changes and focus rings stay.
- Animate only `transform` and `opacity` (and colours on hover). SVG parts that pop use `transform-box: fill-box` so they scale from their own centre.
