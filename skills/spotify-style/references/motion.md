# Motion

Motion in this style is quick and physical, like the controls of a good audio app: buttons swell a little when you point at them and press in when you click, play buttons rise into place, color slides behind the content. Nothing loops except the equalizer of the track that is playing.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button swell and press, color and outline changes |
| `--dur-base` | 220ms | card hover fill, the rising play button, tile cover zoom, toasts, the menu sheet |
| `--dur-slow` | 420ms | the view fade, the player bar rising |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | a fast start and a soft stop for everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Pills (`.btn`) | grow to 104%, press to 97% | hover, click |
| Round and play buttons | grow to 105 to 106% | hover |
| Cover cards | background fills; the green play button fades in and rises 8px into the cover corner | hover or keyboard focus inside the card |
| Shortcut cards | background lightens; the play button fades in | hover or focus |
| Home wash | the gradient at the top of the home page slides to the hovered shortcut's tint over 700ms (a registered `@property --wash`) | hover or focus on a shortcut |
| Browse tiles | the tilted cover grows 6% | hover |
| Track rows | the number becomes a play triangle; the playing track shows three green bars moving up and down (`@keyframes eq`) | hover; playing |
| Views | fade in (`@keyframes fade`) | route change |
| Player bar and toasts | rise 12 to 16px and fade in (`@keyframes rise`, `toast`) | first play; a follow, save or copy |
| FAQ chevrons | turn 180 degrees | opening an answer |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

No scroll-triggered reveals, no parallax, no auto-playing audio or video, no count-ups, no confetti. Content never waits for an animation to be readable.

## Fallbacks

- Without JavaScript every view is shown one after another, play, follow and copy buttons are hidden, and the player never appears. Everything else is plain links and content.
- `prefers-reduced-motion: reduce` removes every animation and transition: buttons do not scale, the wash changes at once, the equalizer bars stand still and views appear without fading.
- Animate only `transform`, `opacity` and the registered `--wash` color.
