# Motion

Motion in this style is slow and polite, like a waiter setting things down: pictures settle into their frames, paragraphs rise into place, and the diamond rows draw out from the middle. Things happen once, as they come into view, and then stay still.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | button fills, chip presses |
| `--dur-base` | 320ms | arrow nudges, nav underlines, FAQ icons, the menu sheet |
| `--dur-slow` | 760ms | reveals |
| `--ease` | cubic-bezier(0.25, 0.8, 0.25, 1) | everything |

Pictures settle over 1.8s (2.8s for the hero), slower than the text around them.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.hero-copy` children | rise 16px and fade in, staggered by 0.14s | page load (keyframes, so they also play right after the script adds `js`) |
| `.hero-pic img` | scales from 1.07 to 1 inside the frame | page load |
| `.reveal` | rises 16px and fades in; siblings stagger by 110ms through `--i` | entering the viewport, once |
| Framed pictures inside a `.reveal` | scale from 1.07 to 1 inside the frame, which does not move | entering the viewport, once |
| `.diamonds.reveal` | draws out from the center (`scaleX`) | entering the viewport, once |
| Day cards | the picture scales to 1.04 under the plate | hover |
| Arrow links | the arrow slides 6px right | hover |
| Nav links | a hairline grows under the text, and stays on the current section | hover, current page |
| Buttons and chips | fill with ink (teal for solid buttons) | hover, pressed |
| FAQ | the plus turns into a cross | open |
| Menu sheet | fades in | open |

Nothing loops: no carousels, no parallax, no marquees, no autoplaying video, no animated steam.

## Fallbacks

- Every entrance uses `@keyframes`, not transitions: a class added during page load would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every element as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and shows hidden reveals at once.
- Animate only `opacity` and `transform`. Frames, rules and text sizes never animate.
- Do not rely on `position: fixed` or `background-attachment: fixed` for effects; full-page screenshots and some phones only paint them on the first screen.
