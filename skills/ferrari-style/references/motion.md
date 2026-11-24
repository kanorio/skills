# Motion

Motion here is the moment the studio lights come up: a picture brightens out of black, the words rise once, and controls answer quickly and precisely. Nothing drifts, bounces or loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | buttons filling, chips, nav colour, the arrow ring turning red |
| `--dur-base` | 360ms | the menu fading in, the FAQ plus turning |
| `--dur-slow` | 900ms | reveals, picture zoom on hover, the hero copy rising |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | everything: fast out, long settle |

The hero picture takes 1.8s to light up; a new paint on the model stage takes 0.9s.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.hero > img`, `.page-hero > img` | "lights up": brightness from 15% to full, scale from 1.04 to 1 (`@keyframes lightsup`) | page load |
| `.hero-copy` | rises 24px and fades in after 0.5s | page load (keyframes) |
| `#m-img` | lights up again (`.swap`) | a paint swatch is chosen |
| `.reveal` | rises 24px and fades in over 0.9s | entering the viewport, once |
| `.btn` | fills with the text colour (outline) or a darker red (red) | hover |
| `.go i` | the ring fills red and the chevron turns white | hover on the link, or on the card or tile around it |
| Card and tile pictures | brighten slightly and scale to 1.03 | hover |
| Chips | fill with the text colour when pressed | click |
| Menu sheet | fades in | open |
| FAQ plus | turns 45 degrees into a cross | open |

No auto-advancing carousels, no parallax, no counters that tick up, no video backgrounds, no animated text.

## Fallbacks

- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every element as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition; pictures appear at full brightness and reveals are visible at once.
- Animate only `opacity`, `transform` and `filter` on pictures. Layout, type sizes and the colours of large areas never animate.
- Do not use `position: fixed`, `background-attachment: fixed` or a sticky bottom bar: full-page screenshots and some phones paint them only on the first screen. The header is sticky at the top and carries the test-drive button.
