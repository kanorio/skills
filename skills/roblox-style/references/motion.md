# Motion

Motion in this style feels like a game menu: quick, light and a little springy, with the art doing most of the moving. The only loop is the slow drift of the wall. Nothing autoplays sound.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 120ms | colors, borders, segment fills, button presses |
| `--base` | 220ms | tile lift, arrow bars, the FAQ chevron, the ready button turning blue, the stage fade, toasts |
| `--slow` | 480ms | the card rising onto the wall, the vote ratio bar |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | a quick start and a soft stop, no overshoot |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Wall | the tilted grid drifts 150px left and 70px up over 70 seconds and back (`@keyframes drift` on the `translate` property, so the rotation stays) | always, unless reduced motion |
| Card on the wall | rises 14px and fades in (`@keyframes rise`) | page load |
| Form button | grey to blue | every field becomes valid |
| Tiles | the picture lifts 3px and gains a soft shadow | hover or keyboard focus |
| Arrow bars | fade in over the row | hover over the row, or focus on the bar |
| Rows | scroll by 85% of their width, smoothly | arrow bars |
| Buttons | scale to 98% | press |
| FAQ | the chevron turns 180 degrees | opening a question |
| Stage | fades in; the loading bar fills over 1.4 seconds | Play |
| Vote ratio | the bar slides to the new width | a new project loads |
| Toast | rises 14px and fades in | favorite, vote, reminder |

Entrance effects use `@keyframes`, not transitions: a class added during the first load does not start a transition, but it does start an animation.

## Without JavaScript

Every view shows one after another. The wall shows its twelve static tiles without drifting further than the CSS allows, the card and forms are visible (they cannot send), shelves and the home page's event copies are hidden (`.js-only`), and the showcase grid shows every project.

## Reduced motion

`@media (prefers-reduced-motion: reduce)` stops the wall drift and the card rise, cuts every transition to 1ms, scrolls rows and anchors without smoothing and shortens the play stage's loading to 0.3 seconds. Nothing else changes: the layout and the content are the same.

## Don't

- Don't animate layout properties (width of cards, height of shelves). Use `transform` and `opacity`; the one exception is the ratio and loading bars, which are tiny.
- Don't bounce or spin things. The tilt is still; only the wall drifts.
- Don't autoplay video or sound on the wall or tiles.
