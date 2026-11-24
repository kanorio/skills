# Motion

Motion here is almost invisible: colours change, text settles into place, panels drop open. Nothing bounces, nothing grows on hover, and nothing moves on its own.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | small state changes |
| `--dur-base` (`--t` with the easing) | 330ms | every hover and selection colour, the header turning clear or solid, the mega panel, the menu, the swatch ring |
| `--dur-slow` | 700ms | text settling into a panel, reveals, tile pictures |
| `--ease` | cubic-bezier(0.45, 0, 0.1, 1) | everything: a firm start and a long, quiet finish |

One duration for every colour change is part of the look: buttons, links, choices and the header all answer at the same speed.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Panel name and buttons | fade in and rise 14px (`rise`), buttons 120ms later | the view opens |
| Panels and sections further down | the same `rise` | scrolling them into view |
| Header | background and text colour cross-fade between clear and solid | scrolling from a picture onto the page and back |
| Mega panel | drops 8px and fades in (`drop`), scrim fades in | opening |
| Mobile menu | slides in 40px from the right | opening |
| Carousel and rail | scroll with snap, smoothly | arrows, dots, swipes |
| Configurator drawing | paint colour cross-fades | choosing a paint |
| Tile pictures | scale to 103 percent | hovering a tile |
| Buttons, links, choices, swatch rings | colour only | hover, focus, selection |
| FAQ chevrons | turn 180 degrees | opening an answer |
| Success messages | `rise` | a form is sent |

No parallax, no autoplaying carousels or video, no scroll-jacking, no counters that tick up, no hover lifts.

## Why keyframes

Entrances are keyframe animations, not transitions on a class. A class added while the page loads does not run a transition, so a transition-based entrance would never play on the first view; keyframes run every time a view is shown.

## Fallbacks

- Without JavaScript every view is visible in order, the carousel and rail scroll by touch or trackpad, the order form is open, and all text, prices and answers are readable.
- `prefers-reduced-motion: reduce` cuts every animation and transition to 1ms, shows reveals at once, and the script scrolls instantly instead of smoothly.
- Animate only `opacity`, `transform`, `translate`, `scale`, `rotate`, `color` and `background-color`.
