# Motion

Motion in this style is quick and exact, like a fast tool responding: elements arrive once with a short rise, hover answers in about a tenth of a second, and the only thing that loops is a blinking cursor. Nothing bounces, glows or drifts.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | hover colors, borders, button backgrounds |
| `--dur-base` | 200ms | arrows sliding, the tab underline, FAQ icons, the header hairline |
| `--dur-slow` | 520ms | entrances and reveals |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | everything: a crisp start and a short, firm landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.enter` (pill, headline, lead column, product window) | fades in and rises 10px, 70ms apart by `--i` | page load, as keyframes |
| `.reveal` (feature cells, steps, stats, quote, code) | fades in and rises 10px | entering the viewport, once |
| `.cursor` in the install command | a block cursor blinking once a second | always, only with motion allowed (the one loop) |
| `.go` arrows | move 3px right | hover on their link or button |
| `.tabs [role=tab]::after` | the 2px underline scales in under the selected tab | tab change |
| Header | a hairline appears under it | scrolled past 8px |
| FAQ icon | plus turns 45 degrees into a cross | open |
| Buttons, nav links, filters, cards | background or border color changes | hover |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No parallax, no scroll-jacking, no animated gradients, no carousels, no typing effects in headlines.

## Fallbacks

- Entrance and reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` sets every duration and delay to 1ms and stops the cursor blink.
- Animate only `opacity` and `transform`. The mesh pane never moves.
