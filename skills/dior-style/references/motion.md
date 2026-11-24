# Motion

Motion here belongs to the films. Stills cross-fade and drift slowly, as if a camera were breathing in front of the cloth, and a thin line fills under each chapter. Everything else is calm: words rise once, underlines slide away when you point at them, and the menu slides in from the left.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 180ms | pill and chip colours, the play control hover |
| `--base` | 420ms | underlines, the header turning solid, the menu drawer, accordion icons, the gallery fade |
| `--slow` | 1400ms | the cross-fade between stills, picture zoom on hover |
| `--chapter` | 7s | how long one still holds before the next |
| `--ease` | cubic-bezier(0.22, 0.61, 0.36, 1) | everything except the drift and the chapter line, which are linear |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.film .frame.on` | drifts from scale 1.0 to 1.06 over the chapter, linearly | the film is playing |
| `.film .frame` | cross-fades over 1.4s; the outgoing still keeps its last size while it fades | the chapter line fills, or a chapter line is pressed |
| `.seg.on i::after` | a white line fills from the left over `--chapter`; its `animationend` moves to the next still | the film is playing |
| `.play` | swaps play and pause, `aria-pressed` and its label | press |
| Films | play while at least 45% on screen, pause when they leave; a film the visitor paused stays paused | scrolling, view changes |
| `.reveal` | rises 18px and fades in over 1.1s; siblings stagger 120ms through `--i` | entering the viewport, once |
| `.tlink`, nav links | the 1px underline slides away to the right and grows back | hover, current |
| Tiles and film cards | the picture scales to 1.04 over 1.4s | hover |
| Header on home | from clear and white to solid with a hairline | the page scrolls 24px |
| Menu drawer | slides in 28px from the left and fades in | open |
| Product picture | fades in | thumbnail press |
| Accordions | the plus turns into a cross | open |

Nothing else loops. No auto-advancing product carousels, no parallax, no animated text, no counters.

## Fallbacks

- The first still of every film has `.on` in the markup, so a film without JavaScript is a full-bleed photograph with its caption. `.film-ui` only appears under the `js` class.
- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- Reveal styles apply only under the `js` class. A timer marks every element as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition. Films never start, the play control is hidden, and the chapter lines still switch stills on press.
- Animate only `opacity`, `transform` and `background-size`.
- Do not use real video files, `position: fixed`, `background-attachment: fixed` or a sticky bottom bar in the single file. Full-page screenshots and some phones paint fixed layers only on the first screen, and a single file with video gets heavy. On a deployed site, a real film may replace the stills: keep the same control, chapter lines, poster (the first still) and reduced-motion rule, and give it captions.
