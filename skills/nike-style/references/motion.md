# Motion

Motion in this style is athletic and brief: the campaign headline rises into place once, product images lean in a little on hover, panels drop and slide on a fast-out curve. Everything else is instant. Nothing bounces, spins or loops, except the promo strip, which changes its line every six seconds.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | button, chip and link color changes |
| `--dur-base` | 250ms | header hide and show, accordion chevrons, the added popover, view fades |
| `--dur-slow` | 600ms | card reveals, image zoom on hover, the free-delivery meter |
| `--ease` | cubic-bezier(0.4, 0, 0.2, 1) | color changes and the header |
| `--ease-out` | cubic-bezier(0.16, 1, 0.3, 1) | anything that enters: headline lines, reveals, popover, menu sheet |

The hero headline lines take 900ms, staggered 110ms per line, starting 150ms after load. The copy under them follows at 450ms.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Hero headline (`.hero-title .line > span`) | each line slides up from behind a mask (`line-up` keyframes) | page load, once |
| Hero label, sentence and pills | rise 24px and fade in | page load, after the headline |
| `.reveal` tiles and story cards | rise 24px and fade in (`rise` keyframes) | entering the viewport, once; a 2.5 s timer reveals anything left |
| Product and tile images | scale to 1.03 or 1.04 | hover |
| Header | slides up out of view | scrolling down past 240px; returns on any scroll up or focus inside it |
| Views | fade in over 250ms | route change |
| Promo strip | the next line fades in | every 6 s, paused on hover and focus; arrows change it at once |
| Rails | smooth scroll by one card | arrow buttons; native swipe on touch |
| Added popover | drops 12px and fades in | adding to the bag; hides after 6 s |
| Phone menu | slides in from the right | menu button |
| Free-delivery meter | the green bar grows to the new share | bag changes |
| Accordion chevron | turns 180 degrees | opening a `<details>` |

Entrances use `@keyframes`, not transitions on a class added at load: a transition from a class set before the first paint never plays.

## Without JavaScript

The `js` class on `<html>` gates every hidden starting state. Without it all views render one after another, reveals are already visible, every promo line shows, and the hero headline still animates (it is pure CSS and ends visible). Accordions are native `<details>` and work anyway.

## Reduced motion

`prefers-reduced-motion: reduce` removes every animation and transition, turns off smooth scrolling and stops the promo strip from rotating (its arrows still work). Reveals start visible. Nothing else changes: layout, colors and states are identical.
