# Motion

Motion in this style is quick and friendly, like a cup set down on the counter: headlines rise into place, pills give a little when pressed, product photos lean in on hover. Nothing loops and nothing waits for you.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | pill fills and presses, chip and input states |
| `--dur-base` | 250ms | the nav tab, tab underlines, FAQ chevrons, the menu sheet, header shadow |
| `--dur-slow` | 600ms | entrances and product photo zoom |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | everything |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Band headline, lead and pills | rise 18px and fade in, staggered by 90ms | page load (keyframes, so they also play right after the script adds `js`) |
| `.reveal` (steps, tiers, values, timeline) | rise 18px and fade in; siblings stagger by 90ms through `--i` | entering the viewport, once |
| Pills | fill with a 9% tint of their own colour; scale to 0.96 while pressed | hover, press |
| Nav links | the green tab grows halfway on hover and fully on the current page | hover, current page |
| Product circles | the photo scales to 1.06 inside the circle | hover on the menu link |
| Gift cards | lift 3px | hover |
| Rewards tabs | the underline moves; the new panel fades in | select |
| FAQ | the chevron turns over | open |
| Menu sheet | slides 24px in from the right and fades | open |
| Header | a soft shadow appears | scrolling past 8px |

No carousels, no parallax, no autoplaying video, no animated steam or confetti, no counting numbers.

## Fallbacks

- Every entrance uses `@keyframes`, not transitions: a class added during page load would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every element as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and shows hidden reveals at once.
- Animate only `opacity` and `transform`. Bands, panels and text sizes never animate.
- Do not rely on `position: fixed`, `position: sticky; bottom: 0` or `background-attachment: fixed`; full-page screenshots and some phones only paint them on the first screen. The pickup strip on the menu is an ordinary block for that reason.
