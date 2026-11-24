# Motion

Motion is ink settling into paper: slow, soft and once. A drop blooms while the page loads, the landscape clears out of a blur, the inscription writes itself down its columns, and sections fade up as you reach them. Nothing loops and nothing moves on its own after that.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 300ms | chip and link colour, pin scale |
| `--dur-base` | 900ms | button fill, link rule growth, fan lift on the chosen dish, the menu sheet, panel fades |
| `--dur-slow` | 1800ms | reveals and the hero copy |
| `--ease` | cubic-bezier(0.25, 0.1, 0.25, 1) | everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Loader (`.loader`) | an ink drop blooms from a point and fades; a brush circle draws itself around it; the wordmark fades in; the sheet fades away at 1.5s | first view of a visit only (`sessionStorage`), never with reduced motion |
| Hero landscape | blurs into focus and fades in over 2.8s (`bleed`) | page load, after the loader (`--intro`) |
| Inscription columns | revealed top to bottom like a brush writing (`write`, clip-path), the second column 0.5s later | page load |
| Vertical gloss and seal | fade in last | page load |
| Hero copy | rises 12px and fades, staggered | page load |
| Wash bands | fade in while the ink comes out of a blur | entering the viewport |
| Lotus | fades in slowly | entering the viewport |
| `.reveal` blocks | rise 12px and fade, once, staggered with `--i` | entering the viewport |
| Dish selector | the chosen fan lifts 6px and gains a gold ring; the panel fades in | click or arrow keys |
| Buttons | gold fills in over 900ms | hover |
| Text links | the trailing rule grows from 28 to 48px | hover |
| Menu sheet | fades in | open |

No parallax, no auto-advancing carousels, no drifting clouds, no cursor effects, no scroll-jacking, no sound.

## Why keyframes

Entrance effects use keyframe animations, not transitions on a class added at load: a transition does not run when the class arrives in the same frame as the first paint, and keyframes replay each time a hidden view is shown again. Animate only `opacity`, `transform`, `filter` on images and `clip-path` on the inscription. Never animate `filter` on an element that also carries `--wash`: the wash sits on the wrapper (`.wash`), the blur on the image inside.

## Fallbacks

- Without JavaScript the loader never shows, every view is visible in order, every dish panel and course shows, and reveals hide nothing.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, full-page screenshots), and the loader is removed after 2.6 seconds whatever happens.
- `prefers-reduced-motion: reduce` removes the loader, every animation and transition, and shows reveals immediately; the page simply appears.
