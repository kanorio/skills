# Motion

Motion here is a long exposure: photographs cross-fade over a second and settle by drifting slowly closer, words rise once, and controls answer softly. Nothing snaps, bounces or loops quickly, and nothing moves while the visitor is reading.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 180ms | pills, tabs, nav colour, the ring filling on the espresso strip, chevrons sliding |
| `--dur-base` | 420ms | the nav underline growing, the menu fading in, the swap arrow turning, the FAQ chevron |
| `--dur-slow` | 1100ms | slide cross-fades, reveals, picture zoom on hover, page-hero words rising |
| `--ease` | cubic-bezier(0.3, 0, 0.1, 1) | everything: a gentle start and a long settle |

The drift on a slide lasts 12 seconds (14 on page heroes); slides change every 7 seconds.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.slide` | cross-fades in and out (`opacity`, then `visibility`) | the slideshow timer, the next button |
| `.slide.is-on > img`, `.page-hero > img` | drifts from 107% to 100% scale (`@keyframes drift`) | a slide becoming current; page load |
| `.slide-copy`, `.page-hero .wrap` | rises 20px and fades in | a slide becoming current; page load |
| `.reveal` | rises 20px and fades in | entering the viewport, once |
| `.nav a::after` | the hairline grows from the centre | hover; the current page |
| `.cp-swap` | turns half a circle | hover |
| `.link svg` | slides 4px to the right | hover on the link or the card around it |
| Card and rail pictures | scale to 1.04 | hover |
| `.ring` on the espresso strip | fills champagne | hover |
| Tabs, pace choices, billing switch | fill when pressed | click |
| Menu sheet | fades in | open |

## The slideshow

- It advances every 7 seconds only while the home view is open, the tab is visible, and the pointer and focus are outside the hero.
- The pause button stops it for good until pressed again; its label and icon switch between pause and play.
- While it runs, the slides region is `aria-live="off"`; when paused it becomes `polite`, so manual changes are announced.
- Under `prefers-reduced-motion: reduce` it starts paused and the play button stays available.

## Fallbacks

- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript; without it only the first slide shows.
- A timer marks every element as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition: slides switch instantly, pictures stand still, reveals are visible at once.
- Animate only `opacity`, `transform` and `visibility`. Layout, type sizes and band colours never animate.
- Do not use `position: fixed`, `background-attachment: fixed` or a sticky bottom bar: full-page screenshots and some phones paint them only on the first screen. The back-to-top button sits in the footer, and the header carries the actions.
