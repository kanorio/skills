# Motion

Motion in this style says one thing: the scores are current. The only thing that moves on its own is the dot next to a live clock. Everything else answers the visitor quickly and stops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | pill fills, nav hover, the play button growing, input outlines |
| `--dur-base` | 200ms | FAQ chevrons |
| `--dur-slow` | 300ms | a view appearing, the menu sliding in |
| `--ease` | cubic-bezier(0.3, 0, 0, 1) | everything: fast out of the gate, settles softly |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| A view (`[data-view].is-active`) | fades in and rises 6px | every route change (a keyframe animation, so it also plays on first load) |
| Live dot (`.live::before`) | fades to 25% and back every 1.6s | always, while a game is live |
| Menu (`.menu[open]`) | fades in and slides 24px from the left | opening the dialog |
| Score strip and video row | scroll sideways by most of their width | the arrow buttons; smooth unless reduced motion is on |
| Play button (`.play`) | scales to 1.08 | hover on the picture link |
| Sample player (`#story-bar`) | the red bar grows with `transform: scaleX()`, the chip counts down | play |
| Nav links, pills, rows | background and colour change | hover |
| Current tab, date, nav link | a 3px red underline (an inset box-shadow, no layout shift) | route change, filter |
| FAQ chevron | rotates 180 degrees | open |

No parallax, no carousels that move by themselves, no tickers that crawl, no count-up numbers, no scroll-triggered reveals, no picture zoom. Scores change by being re-rendered, never by animating digits.

## Fallbacks

- Without JavaScript every view is visible, stacked in order; the view animation only runs under the `js` class, and generated blocks (`.js-only`) are hidden instead of empty.
- Entry effects use keyframes, not transitions on a class added at load, because a transition does not play on the first frame.
- `prefers-reduced-motion: reduce` stops the live dot, shortens every animation and transition to 1ms, and makes the arrow buttons jump instead of glide. The player bar still tracks time, because it reports position rather than decorating it.
- Animate only `opacity` and `transform` (plus colours and inset shadows on hover).
