# Motion

Motion in this style is quick and functional. Things appear where they belong without fuss, controls answer at once, and the only movement you notice is the carousel sliding to the next step. It should feel like a well-run dispatch app: fast, certain, never showy.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | button, pill, chip and card color changes; field borders |
| `--dur-base` | 250ms | FAQ chevrons, answers opening, the menu fading in |
| `--dur-slow` | 500ms | hero copy and mosaic arriving, blocks rising into view, the success card |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | one fast-out, soft-landing curve for everything; no overshoot |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Hero copy and mosaic | rise 16px and fade in, the headline first, the form 120ms later, the mosaic 160ms later (`@keyframes rise`) | the view becoming active |
| `.reveal` blocks (columns, picture cards, splits, numbered steps) | rise 16px and fade in | entering the viewport, once |
| Steps carousel | slides one page with scroll snap; counter and arrows update when it settles | the round arrows, swiping, the trackpad |
| Buttons, pills, chips, service cards | background lightens or darkens | hover, pressed |
| Contact card arrow | nudges 4px to the right | hover |
| FAQ chevron and answer | chevron turns 180 degrees, the answer rises in | opening |
| Menu | fades in (`@keyframes fade`) | opening |
| Success cards | rise in | a form succeeding |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

No parallax, no auto-advancing carousel, no count-up numbers, no moving backgrounds, no hover lifts on cards, no animated illustrations.

## Fallbacks

- Reveal and entrance styles only apply under the `js` class, so content is visible without JavaScript; without it every view shows in order and the steps track still scrolls sideways.
- A timer marks every `.reveal` as shown after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition, shows reveals at once and makes the carousel and anchor links jump instead of glide.
- Animate only `transform`, `opacity` and colors.
