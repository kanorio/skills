# Motion

Motion in this style feels like messages arriving: bubbles pop in one after another with a small overshoot, a typing indicator comes before a reply, and faces around the big statement drift gently. Everything else is quick and quiet.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | pill fills and presses, chips, inputs, the "more" chevron |
| `--dur-base` | 280ms | header hairline, FAQ chevron, menu open |
| `--dur-slow` | 600ms | headline and row entrances |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | entrances and states |
| `--ease-pop` | cubic-bezier(0.3, 1.35, 0.5, 1) | bubbles only: a small overshoot, like a message landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Hero headline, lead and pill (`.reveal`) | rise 22px and fade in, staggered by 90ms through `--i` | page load (keyframes, so it plays right after the script adds `js`) |
| Bubbles and chip cards (`.pop-in`) | scale from 0.92 and rise 10px with the pop curve, staggered by 160ms; they grow from their tail side | entering the viewport, once |
| Rows, values, team cards (`.reveal`) | rise and fade in | entering the viewport, once |
| Voices around the statement (`.voice`) | drift 5px up and down over 7 seconds, each with its own delay | always, very slowly; the only loop on the page |
| FAQ answer | pops in from the top right | opening the question |
| Quote preview | the outgoing bubble mirrors the typing; after sending, ticks turn read, three dots bounce for 1.5 seconds, then the reply pops in | typing, sending |
| Success bubbles | pop in | a form succeeds |
| Pills | tint on hover, scale to 0.97 while pressed | hover, press |
| "More" links | the chevron slides 4px right | hover |
| Notes track | scrolls one card per arrow press, snapping to the card edge | arrow buttons or swipe |
| Header | an ink hairline appears | scrolling past 8px |

No autoplaying carousels, no parallax, no video backgrounds, no counting numbers, no confetti.

## Fallbacks

- Every entrance uses `@keyframes`, not transitions: a class added during page load would skip a transition.
- Hidden starting states apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every element as shown after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition: bubbles and rows appear in place, the voices stand still, and the quote reply appears without the typing dots.
- Animate only `opacity` and `transform`.
- Do not rely on `position: fixed`, `position: sticky; bottom: 0` or `background-attachment: fixed`; full-page screenshots and some phones only paint them on the first screen. The menu opens in the flow under the header for that reason.
