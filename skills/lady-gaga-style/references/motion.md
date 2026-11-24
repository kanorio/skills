# Motion

Motion in this style is a slow reveal under stage light: the hero art settles in from slightly too close and too dark, the lettering rises into place, and moments surface one by one as you scroll. Everything else is quick and quiet.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 140ms | color and fill changes on buttons, chips and thumbnails |
| `--base` | 280ms | the strip marker, chevrons, header background, the bag drawer |
| `--slow` | 900ms | moment reveals, hero copy, image zoom on hover |
| `--ease` | cubic-bezier(0.2, 0.7, 0.1, 1) | a soft start and a long settle, for every movement |

The hero art push runs 2.8s with the same easing.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.hero-art` | scales from 1.08 to 1 and brightens from 60% (`@keyframes push`) | page load |
| `.rise` hero copy (`.d1`, `.d2`, `.d3` delays) | fades in and rises 18px, staggered 120 to 400ms | page load |
| `.reveal` moments | the same rise, once | entering the viewport |
| `.strip-marker` | slides along the wire to the reading position | scrolling the Latest page |
| `.strip-thumbs` images | lift 3px and go to full opacity | hover, current moment |
| Moment and release images | zoom 3% inside the frame, or dim slightly | hover |
| Circle-icon pills | the small circle fills | hover |
| Solid pills | turn into outlines | hover |
| City and detail chevrons | turn 90 degrees | open |
| Bag drawer | slides in 40px from the right | open |

Entrances use `@keyframes`, never a transition on a class added at load (a transition from a state the page never painted does not play).

No parallax, no looping animation, no animated grain or flicker on the lettering, no autoplaying video or carousel.

## Fallbacks

- Reveal styles only apply under the `js` class, so content is visible without JavaScript.
- A timer marks every `.reveal` as shown after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and shows reveals at once; the strip marker jumps instead of sliding.
- Animate only `transform`, `opacity` and `filter` (the hero brightness), and `left` for the small strip marker.
