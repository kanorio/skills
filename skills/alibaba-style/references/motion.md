# Motion

Motion here is the motion of a working tool: it confirms a choice and otherwise keeps still. The active search tab draws its orange underline, the chosen price tier lifts onto white, fly-outs and the mega menu fade or drop in, the new-season panel cross-fades every six seconds, product art leans in a little on hover. Nothing bounces, parallaxes or reveals on scroll: a buyer comparing prices needs the page usable the moment it loads.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button borders and brightness |
| `--dur-base` | 200ms | the tab underline, fly-outs, the mega menu, the toast, the price tier, FAQ chevrons |
| `--dur-slow` | 480ms | view changes, the new-season cross-fade, product art on hover, success states |
| `--ease` | cubic-bezier(0.2, 0, 0, 1) | everything: a fast start and a soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Search tab (`.tab::after`) | the underline grows from the centre (`scaleX`) | choosing a tab |
| Views (`[data-view].is-active`) | rise 8px and fade in (`rise` keyframes) | route change |
| Category fly-out (`.fly`) | fades in (`fade`) | hover or focus on a category, desktop only |
| Mega menu, toast | drop 8px and fade in (`drop`) | "All categories"; adding to the inquiry list (the toast hides after 5 s) |
| New-season slides | the next slide fades in | every 6 s, paused on hover and focus and while another view is open; the dots change it at once |
| Price tier (`.tier.is-on`) | background and ring change | the quantity crosses a tier |
| Product art (`.art`) | scales to 1.04 | hovering a card or tile link |
| Gallery stage | the close-up zooms the same drawing | the second thumbnail |
| FAQ chevron | turns over | opening a `<details>` |
| Success states | rise and fade in | a form is accepted |

Entrances use `@keyframes`, not transitions on a class added at load: a transition from a class set before the first paint never plays.

## Without JavaScript

The `js` class on `<html>` gates every hidden state. Without it every view renders one after another, the first new-season slide shows alone, script-built parts (`[data-js]`: product grids, filters, workshop cards, the order box) are hidden, a short note stands in for the results, and the product page shows its static first product. Accordions are native `<details>` and still work.

## Reduced motion

`prefers-reduced-motion: reduce` removes every animation and transition and stops the new-season rotation (the dots still work). Layout, colours and states are identical.
