# Motion

Motion in this style serves one idea: news is arriving. The only thing that moves on its own is the live dot. Everything else responds to the reader, quickly and quietly.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button fills, the section-row underline, the checkbox tick |
| `--dur-base` | 200ms | the "Key posts only" switch, FAQ chevrons, menu chevrons |
| `--dur-slow` | 320ms | a view appearing, the menu sliding in, the new-updates button dropping in |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | everything: quick to start, settles softly |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| A view (`[data-view].is-active`) | fades in | every route change (a keyframe animation, so it also plays on first load) |
| Live dot (`.live::before`) | fades to 30% and back every 1.6s | always, while coverage is live |
| Menu (`.menu[open]`) | fades in and slides 24px from the left | opening the dialog |
| Section row and sub-row | a 4px (3px) underline appears in gray on hover, in ink when current | hover, route change, filter |
| Headlines | a 1px underline | hover or focus on the card or link |
| Buttons | fill and outline swap | hover |
| New updates (`#new-posts`) | drops 8px into place; new posts flash a faint red once | updates waiting; inserting them |
| Player (`#bar`) | the red bar grows with `transform: scaleX()`; the big button scales to 1.06 on hover | play; hover |
| Podcast Listen (`.eq`) | three bars rise and fall | the episode is playing |
| FAQ chevron | rotates 180 degrees | open |
| Menu chevrons | slide 4px right | hover |

No parallax, no carousels that move by themselves, no scroll-triggered reveals, no image zoom, no tickers that crawl sideways. New live posts never appear above the reader's position on their own: they wait behind the button.

## Fallbacks

- Without JavaScript every view is visible, stacked in order; the view animation only runs under the `js` class, and generated rows (`.js-only`) are hidden instead of empty.
- Entry effects use keyframes, not transitions on a class added at load, because a transition does not play on the first frame.
- `prefers-reduced-motion: reduce` stops the live dot pulse, the view, menu and button entrances, and shortens every transition to 1ms. The player's progress bar still tracks time, because it reports position rather than decorating it.
- Animate only `opacity` and `transform` (plus colors and box-shadow underlines on hover).
