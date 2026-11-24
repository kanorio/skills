# Motion

Motion in this style is utilitarian: it confirms what you did and otherwise stays out of the way. The promotion band changes every seven seconds, the added-to-cart panel drops in, the drawer slides from the left, product art leans in a little on hover. Nothing bounces, nothing parallaxes, nothing reveals on scroll: a store page has to be usable the moment it loads.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button, chip and link colour changes |
| `--dur-base` | 220ms | view fades, the drawer, the dialog, the added panel, FAQ chevrons |
| `--dur-slow` | 500ms | the hero cross-fade, product art zoom on hover, the free-delivery meter |
| `--ease` | cubic-bezier(0.4, 0, 0.2, 1) | colour changes and fades |
| `--ease-out` | cubic-bezier(0.16, 1, 0.3, 1) | anything that enters: drawer, dialog, added panel |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Promotion band (`.slide.is-current`) | the next slide fades in (`fade` keyframes) | every 7 s, paused on hover and focus; the edge arrows change it at once |
| Product art (`.art`) | scales to 1.04 | hovering a card or a tile link |
| Views | fade in over 220ms | route change |
| Drawer | slides in from the left (`slide-in`) | "All" or the menu button |
| Location dialog, added panel | drop 12px and fade in (`drop`) | opening; the panel hides after 6 s |
| Rails | scroll by most of their width | arrow buttons; native swipe on touch |
| Free-delivery meter | the green bar grows to the new share | cart changes |
| FAQ chevron | turns 180 degrees | opening a `<details>` |
| Countdown | the digits change every second | always; it is text, not animation |

Entrances use `@keyframes`, not transitions on a class added at load: a transition from a class set before the first paint never plays.

## Without JavaScript

The `js` class on `<html>` gates every hidden state. Without it every view renders one after another, all three promotion slides show stacked, the rails and other script-built shelves are hidden (`[data-js]`), and a short note stands in for the results grid. Accordions are native `<details>` and still work.

## Reduced motion

`prefers-reduced-motion: reduce` removes every animation and transition, turns rail scrolling instant and stops the promotion band from rotating (its arrows still work). The countdown keeps counting because it is information. Layout, colours and states are identical.
