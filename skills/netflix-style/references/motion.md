# Motion

Motion in this style feels like a remote control: things answer quickly, grow a little when you land on them and settle without bounce. The pictures move more than the interface. Nothing autoplays sound, and nothing in the interface loops except the slow drift of the poster wall.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` (`--fast`) | 150ms | colors, outlines, the floating label, chevrons in arrow bars |
| `--dur-base` (`--base`) | 260ms | tile growth, the hover buttons, the header fill, the FAQ plus, the search field opening, toasts, the dialog |
| `--dur-slow` (`--slow`) | 480ms | view fades, artwork zoom inside tiles, the success box |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | a quick start and a long, soft stop |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Poster wall | drifts 3 to 4% over 80 seconds and back (`@keyframes drift`, the `translate` property, so the 3D tilt stays) | always, unless reduced motion |
| Tiles in rows | grow to 108% from their left edge, gain an overlay shadow, lift the title 42px and reveal round buttons | hover or keyboard focus inside the tile |
| Artwork inside tiles and posters | zooms 4 to 5% | hover |
| Row titles | "Explore all" slides in from the left and fades in | hover or focus on the row title |
| Arrow bars | fade in over the row; the chevron grows 20% | hover over the row; hover on the bar |
| Header | fills with the page color | scroll past 24px |
| Search | the field opens to 140 to 220px | the search button |
| FAQ | the plus turns 45 degrees into a cross; the answer fades down 6px (`@keyframes open`) | opening a question |
| Dialog, menu, success boxes | rise 14px and fade in from 98% scale (`@keyframes pop`) | opening |
| Views | fade in (`@keyframes fade`) | route change |
| Player | the big play button fades out while playing and back on hover | play and pause |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

No parallax, no scroll-triggered reveals, no autoplaying trailers or sound, no count-ups, no carousels that move by themselves. Content never waits for an animation to be readable.

## Fallbacks

- Without JavaScript every view is shown one after another; the poster wall, the numbered posters, the catalog grid, the static title detail and every FAQ are readable. The header scrolls away instead of staying fixed, and the hover buttons, arrow bars, search, chips and season picker are hidden.
- `prefers-reduced-motion: reduce` removes every animation and transition: the wall stands still, tiles do not grow, views appear without fading.
- Animate only `transform`, `translate`, `opacity` and colors.
