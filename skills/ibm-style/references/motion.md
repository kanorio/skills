# Motion

Motion in this style is productive, not expressive: things respond at once, arrive once, and never perform. A short rise for content, one left-to-right wipe that lays down the mosaic strip, colour changes on hover. Nothing bounces, loops, floats or follows the cursor.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 110ms | hover colours on tiles, rows, buttons, links, tabs and segments |
| `--dur-base` | 240ms | the accordion chevron, tab indicators |
| `--dur-slow` | 400ms | entrances and reveals |
| `--ease` | cubic-bezier(0.2, 0, 0.38, 0.9) | everything: a quick start that settles without overshoot |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.enter` (hero eyebrow, headline, lead, buttons, Latest list) | fades in and rises 16px, 80ms apart by `--i` | page load, as keyframes |
| `.mosaic.enter` (the hero strip) | revealed left to right with a `clip-path` wipe over 900ms, after a 240ms pause | page load, once |
| `.reveal` (home sections) | fades in and rises 16px | entering the viewport, once |
| Tiles, rows, menu items, header links, segments | background steps one grey darker or lighter | hover |
| Tertiary buttons | outline fills with blue, text turns white | hover |
| Tabs | 2px indicator changes colour | hover and selection |
| FAQ chevron | turns 180 degrees | open |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No parallax, no scroll-linked animation, no carousels, no counters that tick up, no typing effects.

## Fallbacks

- Entrance and reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and shows hidden reveals at once.
- Animate only `opacity`, `transform` and `clip-path`. The mosaic never moves after it has appeared.
