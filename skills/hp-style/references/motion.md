# Motion

Motion in this style is quiet and product-first: the hero cross-fades to the next offer, product art leans in a little on hover, arrow links nudge forward, the drawer slides in and the added panel drops down. Nothing bounces, nothing parallaxes, nothing reveals on scroll: a store page has to work the moment it loads.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button and link colour changes |
| `--dur-base` | 220ms | view fades, the drawer, the compare sheet, the added panel, arrow links, the pill dot |
| `--dur-slow` | 480ms | the hero cross-fade, product art scale on hover, the free delivery meter |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | everything: fast out, soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Hero (`.slide.is-current`) | the next slide fades in (`fade` keyframes); the current dot grows into a long dash | every 8 s on the home page, paused on hover and focus; arrows and dots change it at once |
| Product art (`.art`) | scales to 1.04 | hovering a strip item, a tile or a row picture |
| Arrow links | the arrow moves 4px right | hover |
| Views | fade in over 220ms | route change |
| Drawer | slides in from the left (`slide-in`) | the menu button |
| Compare sheet, added panel | drop 10px and fade in (`drop`) | opening; the panel hides after 6 s |
| Free delivery meter | the bar grows to the new share | cart changes |
| Gallery views | the stage swaps to the mirrored or close-up view | thumbnails and arrows |

Entrances use `@keyframes`, not transitions on a class added at load: a transition from a class set before the first paint never plays.

## Without JavaScript

The `js` class on `<html>` gates every hidden state. Without it every view renders one after another, the hero slides stack with a gap between them, the pill control, thumbnails, swatches and script-built lists are hidden (`[data-js]`), and short notes with links stand in for the results and guide lists (`[data-nojs]`). The product page shows its first product as static markup. Accordions are native `<details>` and still work.

## Reduced motion

`prefers-reduced-motion: reduce` removes every animation and transition and stops the hero from rotating (its arrows and dots still work). Layout, colours and states are identical.
