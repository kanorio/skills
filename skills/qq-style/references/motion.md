# Motion

Motion here is slow light. The aurora behind the hero and the closing band drifts over half a minute, as if the sky were moving behind the glass; the title, pill and version line rise once when the page opens; sections rise a little as they arrive. Everything else is still.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 150ms | link and button colours, chevrons, small lifts |
| `--base` | 280ms | view fades, card lifts |
| `--slow` | 900ms | the rise of the hero and of revealed blocks |
| `--ease` | cubic-bezier(0.22, 0.8, 0.24, 1) | everything except the drift |

The drift uses `ease-in-out` over 26s (the light) and 19s (the flutes), alternating, so the two layers never line up the same way twice.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.live::before` (the light) | translate and scale a few percent | always, while on screen |
| `.live .flutes` (the refracted copy) | slide up and down 6 to 7 percent | always, while on screen |
| `.hero-in` children | fade in and rise 18px, 120ms apart | page load |
| `.reveal` blocks | fade in and rise 18px | entering the viewport, once |
| Views | fade in | changing route |
| `.pill` | lift 1px and turn fully white | hover |
| Story covers | lift 3px | hover on the card |
| Arrows in `.link` and `.more` | slide 3px right | hover |
| Header dropdown | fade in; the chevron turns | hover or focus |

Only `.live` surfaces (the hero and the closing band) animate on their own. Cards, covers, page heads and the mixer are still, so a page with many aurora surfaces costs nothing at rest.

## How it is built

- The drift animates only `transform` on two layers, so it runs on the compositor; an IntersectionObserver adds `.is-off` to pause it while the band is off screen.
- The glass is a static repeating gradient (`::after`); it never animates. No `backdrop-filter` on the aurora; the one glass panel that blurs (`.mix-glass`) sits on a still card.
- Entrances use `@keyframes` with fill mode `both`, so they play even when the class is added the moment the page loads.
- `.reveal` hides content only under the `js` class. An IntersectionObserver adds `is-in`; a timer adds it to everything after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).

## Fallbacks

- Without JavaScript every view shows, stacked, with nothing hidden; the aurora is pure CSS and still renders.
- `prefers-reduced-motion: reduce` removes every animation and transition: the aurora stays still and all content shows at once.
