# Motion

Motion here is almost invisible: the band's contents settle in when a page opens, cards rise a little as they arrive, round things lift when you point at them. The arch itself never moves.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | button, chip, link and veil colour changes |
| `--dur-base` | 260ms | card and round button lift on hover, chevrons turning, dot width |
| `--dur-slow` | 520ms | the band's contents and revealed cards rising in, the carousel fade |
| `--ease` | cubic-bezier(0.25, 0.8, 0.25, 1) | everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.rise > *` inside the band | fade in and rise 14px, children 70ms apart | the view becoming active |
| `.reveal` (entry cards, panels, plans, timeline items, people, steps) | fade in and rise 14px | entering the viewport, once |
| `.orb` | lift 3px, veil brightens | hover |
| `.entry`, `.story`, `.cat` | lift 2 to 4px, a soft shadow appears | hover |
| `.disc` in the service grid | grows 8% | hover on its link |
| `.slide` | fades in | choosing a dot |
| `.dots` | the current dot stretches to a 32px bar | choosing a dot |
| `.qa` chevron | turns 90 degrees | opening an answer |
| `.success .disc` | rises in | a form succeeding |

Nothing loops, parallaxes, autoplays or slides sideways. The header gains a soft shadow after scrolling.

## How it is built

- Entrances use `@keyframes` (`rise`, `fade`), so they play even when the class is added the moment the page loads. A view's band animates because the animation is attached under `.is-active`; switching views restarts it.
- `.reveal` hides content only under the `js` class. An IntersectionObserver adds `is-in`; a timer adds it to everything after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- Animate only `opacity`, `transform` and the dot `width`.

## Fallbacks

- Without JavaScript every view shows, stacked, with nothing hidden; carousel slides stack too.
- `prefers-reduced-motion: reduce` removes every animation and transition, shows all content at once, and makes scrolling jump instead of glide.
