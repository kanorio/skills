# Motion

Motion here is buoyant and slow in the background, quick in the foreground: toys drift like they are in low gravity, sparkles twinkle, words slide past, and anything you touch lifts a little. It should feel like a party in space, never like a slot machine.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 140ms | button lift, chip and link hover, arrow nudge |
| `--dur-base` | 260ms | header pills, menu sheet, toasts, FAQ chevrons |
| `--dur-slow` | 700ms | frame reveals, card image zoom |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | everything that settles |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.toy` | drifts 14px up and turns 6 degrees (`bob`, 5 to 6s, alternate); `--d` offsets each one | always, only with motion allowed |
| `.tw` | four-point sparkle fades and shrinks (`twinkle`, 2.8s) | always |
| `.marquee-track` | slides left by half its width (`slide`, 40s, linear, infinite) | always; the script clones the words first |
| `.reveal` (frames, patch notes) | rises 26px from 98 percent scale (`rise` keyframes) | entering the viewport, once |
| `.btn` | lifts 2px with a deeper shadow; presses 1px on click | hover, active |
| `.card` | lifts 6px with a shadow; the image zooms 5 percent | hover |
| `.site-header` | the bar turns into two white pills; the links fade out | scrolling past 40px |
| `.sheet`, `.toast` | rise in | opening, showing |
| `details.q` chevron | turns from down to up | open and close |

Nothing parallaxes, nothing auto-plays sound, no carousels.

## Fallbacks

- Entrance effects use keyframes on a class the script adds (`.is-in`), never a transition from a class set at load: a transition from the first frame does not play.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript, and a timer marks every element revealed after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` stops every animation and transition: toys and sparkles stand still, the marquee shows one static row, reveals are visible at once, buttons still change colour on hover.
- The sky scrolls with the page (no `background-attachment: fixed`) and nothing important is `position: fixed`, so full-page captures and print show everything.
- Animate only `transform`, `opacity` and colours.
