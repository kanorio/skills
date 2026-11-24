# Motion

Motion here is short and functional: things appear where you expect them, shadows lift a little under your pointer, and nothing performs. If a visitor notices an animation, it is probably too much.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | color, border, background and shadow changes on buttons, chips and links; the suggestion list fading in |
| `--dur-base` | 200ms | the search box shadow, the chevron in questions, the toast |
| `--dur-slow` | 360ms | content rising into place when a view opens, the success panel, the menu sheet |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | one quick start and a long, soft stop for everything; no overshoot |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Home column (wordmark, box, buttons, links) | rises 10px and fades in, 60ms apart (`@keyframes rise`) | page load and returning home |
| Inner views | each top-level block rises 10px and fades in together | opening the view |
| Search box | hairline border gives way to a soft shadow | hover and focus |
| Suggestion list | fades in under the box; the box squares its lower corners | typing |
| Chips, quiet buttons, toggles | background, border or a faint shadow changes | hover, press |
| Question chevron | turns 180 degrees | opening a question |
| Menu sheet | drops 16px from the top and fades in (`@keyframes drop`) | opening the menu |
| Success panel and toast | rise and fade in | sending a form, saving, copying |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

No parallax, no scroll-linked effects, no auto-playing carousels or video, no count-up numbers, no hover zoom on pictures, no bounce.

## Fallbacks

- View styles only apply under the `js` class, so without JavaScript every view is visible, one after another, and nothing is hidden or transparent.
- Animations run with `both` fill and end at full opacity, so a screenshot or a print taken after load shows everything.
- `prefers-reduced-motion: reduce` removes every animation and transition.
- Animate only `transform`, `opacity`, colors and shadows.
