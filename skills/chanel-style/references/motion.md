# Motion

Motion is restrained and photographic: a plate's caption rises into place once as the plate arrives, the photograph settles from a very slight zoom, product pictures lean in a little when pointed at. Nothing loops and nothing moves on its own.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 160ms | button fills, underlines on nav links and chips |
| `--base` | 360ms | the header hairline, the menu panel, accordion plus, gallery swaps |
| `--slow` | 900ms | plate captions rising, statements fading in, tile pictures scaling |
| `--ease` | cubic-bezier(0.25, 0.1, 0.25, 1) | everything |

Photographs take longer than words: a plate's picture settles over 2.4s.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.plate-copy` | rises 18px and fades in over 0.9s, after 120ms | the plate is a quarter visible, once (`.in`, keyframes) |
| `.plate-media` | settles from a 1.06 scale to 1 over 2.4s | the same moment, once |
| `.reveal` (statements) | fades in | the view opens |
| `.btn`, `.btn-plate`, `.btn-line` | fill and text colour swap (black to outline, white to outline) | hover |
| `.nav a`, `.chip` | a 1px underline appears; it stays on the current one | hover, current, pressed |
| `.tile-media img`, `.card .ph img` | scale to 1.035 / 1.03 | hover |
| Header | a hairline appears under it | the page has scrolled |
| `#menu` | slides in from the left | open |
| Gallery | the new picture fades in | thumbnail click |
| Accordions | the plus turns 45 degrees into a cross | open |
| Rail | scrolls by one screen of tiles | arrow buttons, swipe |

No auto-advancing carousels, no parallax, no scroll-jacking, no animated text. A plate film (see the style guide) is the only thing that may move by itself, and it always has a pause control.

## Fallbacks

- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- Caption hiding applies only under the `js` class, so everything is visible without JavaScript; if the script fails before the first view is shown, it removes the `js` class.
- A timer marks every plate as arrived after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and shows captions at once.
- Animate only `opacity` and `transform` (plus colours on small controls). Layout and type sizes never animate.
- Do not use `position: fixed`, `background-attachment: fixed` or a sticky bottom bar: full-page screenshots and some phones paint them only on the first screen. The header is `position: sticky; top: 0`, and the add-to-bag button sits in the flow.
