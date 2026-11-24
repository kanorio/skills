# Motion

Motion in this style is almost invisible. It is a printed page that happens to be on a screen: things appear, lines underline, a bar fills as you read. Nothing bounces, floats or loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button and chip fills, the checkbox tick |
| `--dur-base` | 200ms | theme change, FAQ icon, menu arrows |
| `--dur-slow` | 360ms | a view appearing, the menu sliding in |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | everything: quick to start, settles softly |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| A view (`[data-view].is-active`) | fades in and rises 8px | every route change (keyframe animation, so it also plays on first load) |
| Menu (`.menu[open]`) | fades in and slides 24px from the left | opening the dialog |
| Headlines | a 2px underline appears | hover or focus on the link |
| Buttons | fill changes to the accent (filled) or to ink (outlined) | hover |
| Chips, billing switch, newsletter ticks, Save | fill with ink | pressed or checked |
| Menu section arrows | slide 6px right | hover |
| FAQ plus | rotates 45 degrees into a cross | open |
| Reading progress (`.progress`) | a 3px accent bar under the header grows with `transform: scaleX()` | scrolling the story view |
| Theme | background and text colors cross-fade | theme toggle |

No parallax, no scroll-triggered reveals, no image zoom on hover, no carousels, no tickers, no animated gradients, no cursor effects. The content is the event.

## Fallbacks

- Nothing is hidden waiting for an animation: without JavaScript every view is visible, stacked in order, and the view-in keyframes never run.
- The view and menu animations use keyframes, not transitions on a class added at load, because a transition does not play on the first frame.
- `prefers-reduced-motion: reduce` turns the view and menu animations off and shortens every transition to 1ms. The progress bar still tracks scrolling, because it reports position rather than decorating it.
- Animate only `opacity`, `transform` and colors.
