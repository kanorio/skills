# Motion

Motion in this style is calm and brief. The phones swing into their tilt once when the page opens, copy rises into place as it scrolls in, and everything else is an instant, quiet state change. Nothing loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 140ms | button fills and presses, chip and border changes |
| `--dur-base` | 260ms | FAQ chevron, answer fade, donation step fade |
| `--dur-slow` | 640ms | reveals and success states |
| `--ease` | cubic-bezier(0.22, 0.8, 0.24, 1) | everything: a quick start and a soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Hero headline, lead and button (`.rv` with `--i`) | rise 20px and fade in, staggered by 90ms | page load (keyframes, so it plays right after the script adds `js`) |
| Hero phones (`.devices .phone`) | rise 90px and turn from 16 to 24 degrees over one second; the back phone follows 140ms later | the home view becoming active |
| Reason copy, panels, cards and steps (`.rv`) | rise and fade in, once | entering the viewport |
| Donation steps (`.step.is-in`) | fade in | Next or Back |
| FAQ answer | fades in; the chevron turns over | opening the question |
| Success states | rise and fade in | a form succeeds |
| Buttons | darken on hover, scale to 0.98 while pressed | hover, press |
| Chips, tiles, outline buttons | fill or tint | hover, select |

No parallax, no carousels, no looping illustrations, no counting numbers, no confetti on a donation.

## Fallbacks

- Every entrance uses `@keyframes`, not transitions: a class added during page load would skip a transition.
- Hidden starting states apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every reveal as shown after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition: the phones sit in their final tilt, reveals appear in place, and scrolling jumps instead of gliding.
- Animate only `opacity` and `transform`.
- The header is `position: sticky; top: 0`, which full-page captures paint correctly at the top. Do not add `position: fixed` bars, `position: sticky; bottom: 0` or `background-attachment: fixed`; captures and some phones only paint them on the first screen. The menu opens in the flow under the header for the same reason.
