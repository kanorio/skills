# Motion

Motion in this style is quick and functional, like a well-made app: things respond the moment you touch them and then get out of the way. Nothing bounces, floats or loops; the only thing that keeps moving is a video you started.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | hover backgrounds, button press, the scrubber thumb |
| `--dur-base` | 200ms | the drawer, the switch knob, the play badge, fades |
| `--dur-slow` | 420ms | shelf rise, thumbnail zoom, success cards |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | a fast start and a soft stop for everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.reveal` shelves | rise 12px and fade in (`@keyframes rise`) | entering the viewport, once |
| Thumbnails | picture zooms 4% inside its rounded frame | hovering the card, clip or row |
| Play badge and big play button | grow to 108% | hover |
| Pills | press to 97% | click |
| Three-dot menu | appears on card hover, the menu fades in | hover, click |
| Drawer | slides in from the left over a dim scrim | the menu button on phones and the watch page |
| Shelf arrows | the row scrolls smoothly by 80% of its width | arrow buttons |
| Player controls | fade out while playing unless hovered or focused; the scrubber thumb grows from nothing on hover | playing, hover, focus |
| Autoplay switch | the knob slides | toggling |
| Watch later count | pops to 135% and back (`@keyframes pop`) | saving |
| Toast | rises in, disappears after about three seconds | save, subscribe, reminder, copy link, comment |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

No parallax, no autoplaying video or previews on hover, no count-ups, no confetti, no hover effects that move text.

## Fallbacks

- Reveal styles only apply under the `js` class, so content is visible without JavaScript; without it every view is shown one after another and the player is a still poster.
- A timer marks everything as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition, shows reveals at once and scrolls shelves without smoothing. Playing a video is the user's choice and still works.
- Animate only `transform` and `opacity`, plus the background color of hovered controls.
