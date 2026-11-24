# Motion

Motion here is quick and light, like flipping through pictures: tiles rise into place as they arrive, the Save pill slides in when you point at a picture, and a press gives a small bounce. Nothing waits for the motion; it is over in a fraction of a second.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button and chip fills, the button press |
| `--dur-base` | 200ms | the scrim and the Save pill on hover, the suggestions dropping in, the FAQ chevron, tab underlines |
| `--dur-slow` | 400ms | tiles rising, the menu sheet, the toast, the Save bounce |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.tile.enter` | rises 16px and fades in, 35ms apart (`--i`); the class is removed after 900ms so a relayout does not replay it | the script renders a wall |
| `.collage img` | rises and fades in, 90ms apart | page load (keyframes) |
| `.tile-media::after` | the scrim fades in | hover, focus inside the tile |
| `.tile .save` | fades in and drops 4px into place | hover, focus inside the tile |
| `.save.pop` | squeezes to 0.9 and springs back | pressing Save |
| `.btn:active` | scales to 0.96 | press |
| `.suggest` | drops 6px and fades in | focusing the search |
| `.sheet` | slides in from the right | opening the menu |
| `.toast` | rises 16px and fades in | saving, sharing |
| `.board:hover .cover img` | darkens a little | hover |
| `.tab`, FAQ chevron | the ink underline appears; the chevron turns | select, open |

Nothing loops and nothing moves on its own: no auto-advancing carousels, parallax, infinite scroll or video backgrounds. "See more ideas" is a button.

## Fallbacks

- Entrances use `@keyframes`, not transitions, so they also play on elements the script adds and on the first paint.
- Without JavaScript the wall is CSS columns and every view is visible in order; nothing is hidden waiting for a reveal.
- `prefers-reduced-motion: reduce` removes every animation and transition; the Save pill still appears on hover, instantly.
- Animate only `opacity`, `transform`, `filter` and background colours of small controls. Layout and type sizes never animate.
- The toast is the only fixed element, and it exists only for a few seconds after an action. Do not add fixed bars, `background-attachment: fixed` or sticky bottom bars: full-page screenshots and some phones paint them only on the first screen.
