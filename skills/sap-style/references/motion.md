# Motion

Motion in this style is calm and product-like: the product card arrives with a little lift, floating panels breathe, stars drift slowly, and everything else answers the pointer at once. Nothing spins, bounces, counts up or follows the cursor.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 140ms | hover colours, the chevron nudge, card lift, buttons, pills, fields |
| `--dur-base` | 260ms | the accordion chevron, card shadow, the story frame swap |
| `--dur-slow` | 560ms | entrances and reveals (the product card takes 800ms) |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | everything: a quick start that settles softly |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.enter` (hero headline, lead, buttons) | fades in and rises 18px, 90ms apart by `--i` | page load, as keyframes |
| `.hero-art.enter` (the product card) | fades in, rises 28px and scales from 96% over 800ms | page load, once |
| `.star` | drifts up 10px and turns 8 degrees, 9s loop | always (stops with reduced motion) |
| `.note` | bobs 6px, 6s loop, starting after a second | always (stops with reduced motion) |
| `.fab` | rises in 700ms after load | page load, once |
| `.reveal` (home sections) | fades in and rises 18px | entering the viewport, once |
| `#sw-media` | a short fade when another story is chosen | click |
| Chevron links | chevron moves 3px right | hover |
| Cards | lift 3px and gain the soft shadow | hover |
| FAQ chevron | turns 180 degrees | open |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No parallax, no scroll-linked animation, no auto-playing carousels, no typing effects in the product card.

## Fallbacks

- Entrance and reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition, including the drifting stars and the bobbing note, and shows hidden reveals at once.
- Animate only `opacity` and `transform`. Keep loops slow (6 seconds or more) and small (10px or less).
