# Motion

Motion in this style is a storefront's: it answers the pointer and otherwise keeps still. Covers brighten when you point at them, the preview panel swaps to the row you are on, the featured carousel moves on by itself every six seconds, and things that you added confirm themselves in a toast. Nothing bounces, nothing parallaxes, nothing reveals on scroll.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button, row and chip color changes |
| `--dur-base` | 220ms | view fades, the preview swap, the toast, cover brightening, FAQ chevrons, tile lift |
| `--dur-slow` | 420ms | the carousel cross-fade |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Featured carousel (`.slide.is-current`) | the next slide fades in (`fade` keyframes) | every 6 s on the home view, paused on hover and focus; arrows and dots change it at once |
| Cover art (`.art`) | brightness to 1.12 | hovering or focusing a link around it |
| Rows (`.row`) | background one step lighter | hover, focus, or being the previewed row |
| Preview panel (`.pv`) | fades in with new content (`fade`) | hovering or focusing a row |
| Category tiles (`.tile`) | 3px up | hover |
| Rails | scroll by 90 percent of their width | arrow buttons; native swipe and scroll-snap on touch |
| Views | fade in (`fade`) | route change |
| Toast, success boxes | rise 8px and fade in (`rise`) | adding something; a form succeeding |
| FAQ chevron | turns 180 degrees | opening a `<details>` |

Entrances use `@keyframes`, not transitions on a class added at load: a transition from a class set before the first paint never plays.

## Without JavaScript

Every view shows one after another, the first featured slide is static markup, the catalog is a plain list of links with prices, and the controls that need a script (arrows, dots, tabs, filters, thumbnails, sort) are hidden with `[data-js]`. Nothing waits for a script to become visible.

## Reduced motion

`prefers-reduced-motion: reduce` stops the carousel from advancing on its own, makes rails jump instead of glide, shortens every animation and transition to 1ms and keeps tiles in place. Color changes still happen, so hover and focus stay visible.
