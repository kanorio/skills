# Motion

Motion here is soft and quick to settle: the hero rises into place once, products lift a few pixels when you point at them, round buttons turn, and sections rise gently as they arrive. Nothing loops and nothing moves on its own.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | pill and chip colours, link underlines, press feedback |
| `--dur-base` | 320ms | the plus turning, arrows turning, the menu sheet, the story note, the gallery swap |
| `--dur-slow` | 720ms | the hero rise, reveals, product lifts, photograph zoom, the free-delivery meter |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | everything: fast out, long soft landing |

The hero picture takes longer than the words: 1.1s, starting 200ms after them.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.hero` children | rise 18px and fade in, 80ms apart | page load (keyframes) |
| `.hero-media` | rises 40px from a 0.98 scale and fades in | page load (keyframes) |
| `.reveal` | rises 24px and fades in | entering the viewport, once |
| `.prod` picture | lifts 6px | hover |
| `.story`, `.post-card` pictures | scale to 1.03 | hover |
| Story plus | turns 45 degrees into a cross; the note rises in | click |
| `.paper` arrow | turns 45 degrees | hover |
| FAQ and product `details` | the plus turns into a cross | open |
| Pills | darken slightly; scale to 0.98 while pressed | hover, press |
| Rail | scrolls smoothly by one card; arrows disable at the ends | arrow buttons, swipe |
| Gallery | the new picture fades in | thumbnail click |
| Bag meter | the bar grows to the new share | bag changes |
| Header | a hairline appears under it | page scrolled |
| Menu sheet | drops 12px and fades in | open |

No auto-advancing carousels, no parallax, no scroll-linked animation, no video backgrounds, no animated numbers.

## Fallbacks

- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every element as revealed after 2.2 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and shows hidden reveals at once.
- Animate only `opacity`, `transform` and `width` of the meter bar. Layout, type sizes and colours of large areas never animate.
- Do not use `position: fixed`, `background-attachment: fixed` or a sticky bottom bar: full-page screenshots and some phones paint them only on the first screen. The bag lives in the header; the summary card is sticky only beside the lines on wide screens.
