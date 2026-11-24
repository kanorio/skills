# Motion

Motion in this style feels like a phone app: quick, physical and responsive to touch. The feed snaps from one video to the next, a tap pauses, a double tap throws a heart. Everything else stays still so the video is the only thing that moves for long.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | hover backgrounds, button press |
| `--dur-base` | 220ms | the play symbol, the sticker swap, the phone menu, the toast |
| `--dur-slow` | 460ms | tile zoom, reveals, success cards |
| `--ease` | cubic-bezier(0.22, 0.9, 0.3, 1) | a fast start and a soft landing for everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Feed | snaps one post per scroll, wheel or swipe; the up and down buttons and the arrow keys scroll smoothly to the next post | scrolling, buttons, keys |
| Active video | plays: the demo clock fills the lime progress bar, the sticker changes to the next step with a small pop (`@keyframes sticker`), the picture drifts in slowly (`@keyframes drift`), the sound line scrolls (`@keyframes marquee`) and the disc spins (`@keyframes spin`) | the post is mostly in view; pauses on a tap |
| Play symbol | fades in over the centre of the frame | paused |
| Double-tap heart | a violet heart with lime sparks grows, tilts and floats up (`@keyframes burst`) | double tap or double click on the video |
| Heart button | the circle pops to 128% and back (`@keyframes pop`) | liking |
| Tiles | picture zooms 4% inside its rounded frame | hover |
| Chip row | scrolls smoothly by 70% of its width | the arrow buttons |
| Phone menu | drops down 8px and fades in (`@keyframes drop`) | the menu button |
| `.reveal` blocks | rise 12px and fade in (`@keyframes rise`) | entering the viewport, once |
| Toast and success cards | rise in | confirmations |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

Videos autoplay only when motion is allowed, and they are silent (a real `<video>` source is muted and loops, like a feed). No parallax, no autoplaying sound, no confetti, no count-ups.

## Fallbacks

- Without JavaScript every view is shown in turn: the first feed post is a still with its caption, Explore shows every tile with its caption, and the forms are plain fields.
- Reveal styles only apply under the `js` class, and a timer marks everything as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and hides the heart burst. Videos then start paused with the play symbol showing; pressing play still runs the clock and the progress bar, because playing a video is the user's choice.
- Animate only `transform` and `opacity`, plus the background color of hovered controls.
