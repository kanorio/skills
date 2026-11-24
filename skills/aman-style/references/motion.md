# Motion

Motion here is slow and light, like a room as the morning comes in: pictures settle, words rise a few pixels and fade in, and underlines slide away when you point at them. Everything happens once and then stays still.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 240ms | button opacity, chip colour |
| `--dur-base` | 600ms | underlines growing and sliding away, the header hairline, the scroll line, the menu sheet |
| `--dur-slow` | 1400ms | reveals |
| `--ease` | cubic-bezier(0.22, 0.61, 0.36, 1) | everything |

Pictures take longer than words: 2.4s to settle, 2.8s for the hero. Card pictures scale over 1.6s on hover.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.hero-media img` | fades in from a 1.025 scale | page load (keyframes) |
| `.hero-copy` children, `.hero-side`, `.hero-aside` | rise 14px and fade in, 180ms apart after a 500ms pause | page load (keyframes) |
| `.reveal` | rises 14px and fades in over 1.4s; siblings stagger 160ms through `--i` | entering the viewport, once |
| Pictures inside or on a `.reveal` | fade in from a 1.025 scale over 2.4s | entering the viewport, once |
| `.tlink` | the underline slides away to the right, and grows back from the right | hover |
| Nav links, chips, tabs, thumbnails | a 1px underline grows from the left and stays on the chosen one | hover, current, pressed |
| Card pictures | scale to 1.03 | hover |
| Header | a hairline fades in under it | page scrolled |
| Rail | cards scroll smoothly by one card; the scroll line follows | arrow buttons, swipe |
| Gallery | the new picture fades in over 1.2s | thumbnail click |
| FAQ | the plus loses its vertical stroke | open |
| Menu sheet | fades in | open |

Nothing loops and nothing moves on its own: no auto-advancing carousels, no parallax, no video backgrounds, no animated text.

## Fallbacks

- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every element as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and shows hidden reveals at once.
- Animate only `opacity`, `transform` and `background-size`. Layout, type sizes and colours of large areas never animate.
- Do not use `position: fixed`, `background-attachment: fixed` or a sticky bottom bar for effects: full-page screenshots and some phones paint them only on the first screen. The booking action lives in the header.
