# Motion

Motion is snappy and a little bouncy, like a buzzer being pressed: controls lift when you reach for them and drop when you press, cards and tiles spring into place once, the right answer bumps, and the countdown bar drains. Nothing loops except a few faint question marks drifting behind the promo strip.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | hover and press on buttons, mode buttons and answer tiles |
| `--dur-base` | 240ms | arrows in text links, card lifts, the FAQ plus, chip fills |
| `--dur-slow` | 520ms | entrances, the right-answer bump, success panels |
| `--ease` | cubic-bezier(0.34, 1.45, 0.64, 1) | anything that moves in space (a short overshoot, like a spring) |
| `--ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | reveals (a soft landing without overshoot) |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.btn`, `.mode`, `.ans` | lift 2px and brighten on hover; drop 1 to 2px with a thinner bottom edge when pressed | hover, press |
| `.reveal` | rises 22px from 98% scale and fades in, 70ms apart (`--d`) | entering the viewport, once |
| `.pop-in` | list items rise 10px from 97% scale, 40ms apart (`--i`) | every filter or search change |
| `.tile a` | lifts 4px with a slight tilt | hover |
| `.ncard a`, `.tcard a`, `.scard a` | lift 3 to 4px; slanted cards tilt 0.4 degrees | hover |
| `.rail` | scrolls two tiles per arrow press (smooth) | the round arrow buttons |
| `.timer i` | the speed-bonus bar drains over 20 seconds | each new question |
| `.ans.is-right`, `.ans.is-picked` | the right answer grows 4 percent and settles with a check disc; a wrong pick stays half visible with a cross; the rest fade | answering |
| `.board` rows | re-order by score | answering |
| `.success` | springs in from below | a form is sent |
| `.promo-in::after` | the question marks drift a few pixels, back and forth | always, very slowly |
| `.tlink .icon` | moves 3px right | hover |
| `.faq summary .icon` | the plus turns 45 degrees into a cross | open |

No parallax, no auto-advancing carousels, no confetti bursts, no sound, no typing text and no cursor effects.

## Fallbacks

- Entrances use `@keyframes`, never transitions: a class added while the page loads would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript; a timer marks every `.reveal` as shown after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- The countdown is a speed bonus, not a time limit: nobody is cut off, the points just shrink from 1,000 toward 500.
- `prefers-reduced-motion: reduce` makes every animation and transition instant, stops the drifting marks, keeps the timer bar full and still, and skips the observer so reveals show at once.
- Animate only `opacity` and `transform`. Layout, colours and type sizes never animate.
- Do not use `position: fixed`, `background-attachment: fixed` or sticky bars at the bottom of the screen: full-page screenshots and some phones paint them only on the first screen. The header is the only sticky element, at the top (on small screens only its white link bar sticks).
