# Motion

Motion in this style is like turning a page: things settle into place once, gently, and then stay still so people can read. The only movement that lasts is a blinking caret in a dark card, a small sign that the product is at work.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 140ms | hover colors, borders, the arrow in text links |
| `--dur-base` | 240ms | the header hairline, card lifts, the FAQ plus turning |
| `--dur-slow` | 560ms | entrances and reveals |
| `--ease` | cubic-bezier(0.22, 0.61, 0.36, 1) | everything (a soft start and an easy landing) |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.enter` (pill, headline, lead, buttons, fine line) | fades in and rises 16px, 80ms apart via `--i` | page load, as keyframes |
| `.hero-tile .ink` | rises into the tile over 800ms after a 160ms pause | page load, as keyframes |
| `.hero-tile .note` | pops in from 97 percent scale after 900ms | page load, as keyframes |
| `.reveal` | fades in and rises 16px | entering the viewport, once |
| `.bar i` (theme bars) | grows from the left over 900ms | the view becoming active |
| Showcase card | rises as its tab is selected | tab change |
| `.caret` | blinks once a second | always, only with motion allowed (the one loop) |
| `.post` tile | lifts 3px; the title underlines in terracotta | hover and focus |
| `.more` arrow | moves 3px right | hover |
| Header | gains a hairline | scrolled past 8px |
| FAQ icon | plus turns 45 degrees | open |

Entrances use `@keyframes`, not transitions on a class added at load: a class added in the same frame as the first paint never transitions. No parallax, no scroll-jacking, no typing effects that hide text, no carousels, no cursor-following effects.

## Fallbacks

- Entrance and reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation, including the caret and the bars, sets transitions to 1ms and shows everything in place.
- Animate only `opacity` and `transform`. Never animate colors of large areas, blur, or layout properties.
