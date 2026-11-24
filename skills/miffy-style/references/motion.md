# Motion

Motion in this style is small and bouncy, like a picture book that wobbles when you put it down: tiles pop in, lift and tilt under the pointer, drawings drop onto the band's edge, cards flip. Nothing moves on its own except a film you opened.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 140ms | button and round-button presses, caption pills |
| `--base` | 220ms | tile and cover lifts, card links, the FAQ arrow |
| `--slow` | 420ms | tiles, books and events popping in, the band drawing dropping in, memory cards flipping |
| `--ease` | cubic-bezier(0.34, 1.4, 0.64, 1) | things that bounce: pops, lifts, drops |
| `--ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | things that settle: the card flip, caption pills |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.tile` | lifts 4px and tilts one degree (left on odd tiles, right on even); the caption pill rises 6px and fades in | hover, focus |
| `.tile`, `.book`, `.event` in the open view | pop from 90 percent scale and transparent (`pop` keyframes); siblings stagger 45ms through `--i` | the view opens |
| `.band-art` | drops 24px into place (`drop`) | the view opens |
| `.cover` | lifts 4px and tilts -1 degree | hovering its book card |
| `.btn` | lifts 2px; presses down 1px at 98 percent | hover / `:active` |
| `.round` | grows 8 percent | hover |
| `.card-link` | lifts 3px | hover |
| `.mcard` | the two faces turn on the Y axis (`rotateY`, 420ms); a matched card pops | a tap |
| submit button | a short sideways shake (`shake`, `translate` only) | submitting with errors |
| `.mover` in the film | crosses the stage in 12 seconds, looping (`cross`) | the film dialog is open |

No carousels, parallax, autoplaying video, scroll-jacking or confetti.

## Fallbacks

- Entrance effects are keyframes with `backwards` fill, applied under the `js` class to elements in the open view. They never start from a transition on a class added at load (that would not play), and after they end the element's own styles take over, so hover still works.
- Without JavaScript every view is shown one after another, tiles and books are visible, the memory cards show their pictures face up and the reader shows its first page.
- `prefers-reduced-motion: reduce` stops every animation (the film's character stands still, captions still change) and cuts transitions to 1ms; tilts and lifts are removed. Colour changes and focus rings stay.
- Animate only `transform`, `translate` and `opacity`. The band drawing uses `translate` for its entrance because its `transform` holds its position on the edge.
