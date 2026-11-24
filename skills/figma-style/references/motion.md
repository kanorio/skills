# Motion

Motion is crisp and short, like objects being placed on a desk: the hero collage settles layer by layer, sections rise into view once, and controls over pictures lift a little when you reach for them. Only one thing moves on its own, the row of names, and it has a pause button.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | hover fills on buttons, chips and round buttons |
| `--dur-base` | 300ms | arrows in links, labels and floating controls on tiles, the pointer, the FAQ plus |
| `--dur-slow` | 700ms | entrances and reveals |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | everything (a fast start and a long, soft landing) |

The hero layers use 900ms with the same easing; pictures zoom over 1.2s on hover so the movement is felt more than seen.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.stack .layer` | each layer rises 28px from 97% scale and fades in, 110ms apart (`--i`) | page load (keyframes) |
| `.enter` | rises 16px and fades in, 90ms apart (`--i`) | page load, on page heads |
| `.reveal` | rises 16px and fades in | entering the viewport, once |
| `.pop` | list items rise 14px, 60ms apart | every filter change |
| `.tile img`, `.story-img img`, `.rail-img img`, `.post-img img` | scale to 1.03 | hover |
| `.tile .lbl` | rises 6px and fades in | hover or keyboard focus; always shown on touch screens |
| `.tile .float` | lifts 4px | hover |
| `.tile .pointer` | moves 6px up and left, toward its control | hover |
| `.arrow-link .icon` | moves 3px right | hover |
| `.marquee-track` | slides left in a 48-second loop | always, until paused |
| `.faq summary .icon` | the plus turns into a cross | open |
| `.rail` | scrolls one card per arrow press (smooth) | the round buttons |

No parallax, no scroll-jacking, no video backgrounds, no cursor followers, no typing text, no auto-advancing carousels.

## Fallbacks

- Entrances use `@keyframes`, never transitions: a class added while the page loads would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript; a timer marks every `.reveal` as shown after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` cuts every animation and transition to an instant, stops the marquee and turns it into a still row you can scroll, hides its repeated names and its pause button, and skips the observer so reveals show at once.
- Animate only `opacity` and `transform`. Layout, colours and type sizes never animate.
- Do not use `position: fixed`, `background-attachment: fixed` or sticky bars at the bottom of the screen: full-page screenshots and some phones paint them only on the first screen. The header is the only sticky element, at the top.
