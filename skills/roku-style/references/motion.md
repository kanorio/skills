# Motion

Motion in this style is the city being alive and the remote being responsive. The illustration moves slowly and constantly (searchlights, bulbs, a window or two); the interface answers quickly, the focus ring lands with a small grow and nothing bounces.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 140ms | button colors, chip states, screen options |
| `--dur-base` | 240ms | the focus ring and tile grow, poster lift, FAQ chevron |
| `--dur-slow` | 600ms | view fades, the deck dealing a card, journal art zoom |
| `--ease` | cubic-bezier(0.22, 0.8, 0.24, 1) | a quick start and a long soft stop |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Searchlight beams | rotate ±5deg around their base, 10s, alternating, the second half a cycle behind | always |
| Marquee bulbs | a dotted stroke that chases around the board (`stroke-dashoffset`, 1.4s) | always |
| Lit windows | one window color blinks off and on every 7s | always |
| Tile wall | drifts 4% sideways over 40s and back | always |
| Focus ring | tile scales to 1.04 with a white ring; the feature panel swaps | hover, keyboard focus, arrow keys |
| Posters | lift 4px and take the ring | hover or focus |
| Deck | cards slide and shrink into place; the new front card rises 18px (`@keyframes deal`) | the deck arrows |
| Views | fade up 10px (`@keyframes fade`) | route change |
| FAQ chevron | turns over | opening a question |
| Trailer progress | the bar fills | play |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

No parallax, no scroll-triggered reveals, no carousels that advance by themselves, no autoplaying video or sound. Content never waits for an animation to be readable.

## Fallbacks

- Without JavaScript every view is shown one after another; the city, the lockup, the Tonight screen tiles, the programme cards with their usual times, the static film page, the plans, the articles and every FAQ are readable. The guide, the tile wall, the filters and the deck arrows are hidden, and the deck cards stack as a list.
- `prefers-reduced-motion: reduce` removes every animation and transition: the beams and bulbs stand still, the wall stops, tiles do not grow, views appear without fading.
- Animate only `transform`, `opacity`, `stroke-dashoffset` and colors.
