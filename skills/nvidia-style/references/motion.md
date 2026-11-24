# Motion

Motion here is engineered and brief: slides fade in while a green bar measures how long they stay, cards lift their shadow and zoom their picture slightly, chevrons nudge, bars in a chart grow from the axis. Nothing bounces, spins or follows the cursor.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | button, link and tab colours, chevron nudges |
| `--dur-base` | 250ms | card shadows, disclosure chevrons, the strip underline, toasts |
| `--dur-slow` | 500ms | entrances, reveals, the card picture zoom |
| `--ease` | cubic-bezier(0.25, 0.1, 0.25, 1) | everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Hero copy (`.hero-copy > *`) | fades in and rises 16px, 70ms apart by `--i` | the slide becomes active, as keyframes |
| Hero picture | fades in over 700ms | the slide becomes active |
| Ticker bar (`.tick .bar::after`) | fills with green from left to right over 8 seconds, then the next slide shows | while `.hero.is-auto`; pauses on hover and focus; stops for good once the visitor picks a slide |
| `.reveal` (home sections) | fades in and rises 16px | entering the viewport, once |
| Cards | shadow grows, picture scales to 103% | hover |
| `.more` chevron | moves 3px to the right | hover |
| Carousel track | scrolls one card with smooth scrolling and snap | arrow buttons, swipe, trackpad |
| Chart bars | grow from the axis over 700ms | the product view opens or a chart tab changes |
| Strip underline | scales in under the link | hover, and the section in view |
| Disclosure chevrons | turn to point up | open |
| Toast | rises in | adding to the cart, a download button |

Entrances use `@keyframes`, never a transition on a class added at load: a class added in the same frame as the first paint does not transition.

## Fallbacks

- Without JavaScript every view renders in order, only the first hero slide shows, the ticker hides, and each data-drawn list shows one summary card.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires.
- `prefers-reduced-motion: reduce` removes every animation and transition: the hero does not rotate (the bar shows full), reveals appear in place, carousels jump instead of gliding.
- Animate only `opacity` and `transform`. The ticker never rotates faster than 8 seconds a slide.
