# Motion

Motion here is small and springy, like tapping through a phone: cards fan out once when the page opens, stickers pop onto them, a heart swells when you like something, and story bars fill while a series plays. Everything else is a quick fade.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | button and chip fills, the press, the tile scrim, ring hover |
| `--dur-base` | 250ms | the menu sliding in, the toast, the FAQ chevron, the mat lifting |
| `--dur-slow` | 600ms | the fan opening, tiles rising, the photograph zoom on hover |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | everything that moves into place |
| `--ease-pop` | cubic-bezier(0.34, 1.56, 0.64, 1) | stickers, the heart pop, the success tick: a small overshoot |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.fan .story` | rises 28px from straight and turns to its angle, 80ms apart | page load (keyframes `fan-in`) |
| `.sticker` | pops in from 40% with an overshoot, after the cards | page load (keyframes `stick`) |
| `.bars i.run` | fills from left to right in 6s (5s in the viewer) | always in the fan; per card in the viewer |
| `.pop` | swells to 1.28, dips, settles | liking, saving, the bag count changing |
| `.burst` | a large white heart swells over the photograph and fades | double-clicking the photograph |
| `.tile.enter`, `.print.enter`, `.post-card.enter` | rise 14px and fade in, 35ms apart (`--i`) | the script renders a list |
| `.tile:hover` | the scrim fades in, the photograph zooms to 1.03 | hover, focus |
| `.hl .ring` | grows to 1.05, presses to 0.95 | hover, press |
| `.print .mat` | lifts 4px | hover |
| `.menu` | slides in 40px from the right | opening the menu |
| `.toast`, the viewer card | rises and fades in | an action, opening a series |
| `.tick` | pops in | a form succeeds |

The story viewer is the only thing that advances by itself, and it has a visible pause button; it stops at the last card and closes. Nothing else loops or auto-plays: no carousels, parallax or video backgrounds.

## Fallbacks

- Entrances use `@keyframes` with `both` fill, not transitions, so they play on the first paint and on elements the script adds.
- Without JavaScript every view is visible in order, the home grid and walk cards are in the HTML, and the menu still opens (it is a `popover`).
- `prefers-reduced-motion: reduce` shortens every animation and transition to 1ms, so things appear in their final place. The story viewer then starts paused and, when played, advances on a 5-second timer instead of the bar animation.
- Animate only `opacity`, `transform`, `translate`, `rotate` and `scale`, plus background colours of small controls. Layout and type sizes never animate.
- The toast and the viewer are the only fixed elements, and they exist only after a tap. Do not add fixed bars, sticky bottom bars or `background-attachment: fixed`: full-page screenshots and some phones paint them only on the first screen.
