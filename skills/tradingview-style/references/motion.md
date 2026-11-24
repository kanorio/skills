# Motion

Motion in this style says one thing: the numbers are current. Two small things move on their own, the green live dot and the ping around the last point of a chart. Charts draw in from left to right when they appear; everything else answers the visitor and stops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button presses, chip and tab fills, link chevrons, nav hover |
| `--dur` | 220ms | views appearing, dialogs, the header turning from ink to white, the FAQ chevron, tile lift |
| `--dur-slow` | 700ms | the slow zoom of a chart picture on hover |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | everything: quick start, long soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| A view (`[data-view].is-active`) | fades in and rises 6px | every route change (a keyframe animation, so it also plays on first load) |
| Chart (`.plot svg`) | revealed left to right with `clip-path` over 1s; the last-point dot fades in after | each time the chart is drawn: route change, range pill |
| Last-point dot (`.dot.last::after`) | a ring grows and fades every 2.4s | always |
| Live dot (`.live::before`) | a green halo pulses every 2s | always |
| Hero quote card (`.hero-card`) | fades in and rises 16px, 0.15s after the page | first load |
| Header (`.top`) | background and text colour cross-fade between ink and white | scrolling past the hero |
| Tile (`.tile`) | lifts 2px, outline darkens | hover |
| Chart picture (`.idea-img img`) | scales to 1.03 over 700ms | hover on the card |
| Reaction (`.useful .icon`) | pops to 1.3 and back | pressing it on |
| Tile rail | scrolls by most of its width | the round arrow; smooth unless reduced motion is on |
| Chevrons after links and section heads | slide 3px right | hover |
| Dialogs | fade in, drop 8px into place | opening |

No parallax, no auto-scrolling tickers, no count-up numbers, no scroll-triggered reveals. Numbers change by being re-rendered, never by animating digits.

## Fallbacks

- Without JavaScript every view is visible, stacked in order; charts and tiles are not drawn, but every number is in the HTML. `.js-only` blocks are hidden instead of empty.
- Entry effects use keyframes, not transitions on a class added at load, because a transition does not play on the first frame.
- `prefers-reduced-motion: reduce` stops the live dot and the ping, shortens every animation and transition to 1ms (charts appear at once), and makes the rail arrow jump instead of glide.
- Animate only `opacity`, `transform` and `clip-path` (plus colours on hover).
