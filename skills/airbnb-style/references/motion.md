# Motion

Motion here is small and helpful: things that float pop in, hearts beat once, the search bar folds into the header. Nothing loops and nothing moves on its own.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | hover fills, presses, arrows appearing on cards |
| `--dur-base` | 250ms | panels, popovers, dialogs, the compact search pill |
| `--dur-slow` | 400ms | the view fade, the heart beat, sheets and toasts |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | everything: quick out of the gate, soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| The active view | fades in and rises 8px (`view-in`) | every route change, including the first load |
| Search panels, popovers, dialogs | fade and grow from 98 percent (`pop`) | opening |
| The search bar | turns gray, the chosen segment lifts white, the orb widens to show "Search" | opening a segment |
| The compact search pill | pops into the header center | the hero search bar scrolls out of view on home |
| Hearts | fill coral and beat once (`beat`) | saving |
| Card arrows | fade in | hovering a card or focusing an arrow |
| Card photos and rails | scroll with snap, smoothly | arrows, swipes, trackpads |
| Buttons | scale to 97 percent | pressing |
| Map pins | turn ink and grow 10 percent | hovering the pin or its card |
| Toast | slides up 16px | saving, sharing |
| Dialogs on phones | slide up from the bottom (`sheet-in`) | opening |
| FAQ chevrons | rotate 180 degrees | opening an answer |

No parallax, no autoplaying carousels, no scroll-jacking, no animated gradients, no cursor effects.

## Why keyframes

Every entrance is a keyframe animation, not a transition on a class. A class added while the page loads does not run a transition, so a transition-based entrance would never play on the first view; keyframes run every time the element is shown.

## Fallbacks

- Without JavaScript the views are all visible in order, the panels and dialogs stay closed, and the cards, prices and text are all readable. The rails on home are filled by the script, so their rows carry `.needs-js` and stay hidden without it; the full listing is still on the page in the list view.
- `prefers-reduced-motion: reduce` cuts every animation and transition to 1ms and turns smooth scrolling off.
- Animate only `opacity`, `transform`, `background-color` and `box-shadow`.
