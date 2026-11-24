# Motion

Motion in this style is quick and functional, like a live dashboard: the counter counts up once, the hero pieces rise into place, sections fade up as they arrive, and table rows flash yellow when they reorder. Nothing loops and nothing drifts.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | button fills, presses, input borders, row hover, chip and tab states |
| `--dur-base` | 260ms | the question plus turning into a cross |
| `--dur-slow` | 600ms | hero and section entrances, the picture zoom on hover |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | everything: a quick start and a firm stop |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Counter (`[data-count]`) | counts from zero to the figure over 1.4 seconds with an ease-out; tabular figures keep the width steady | the home view appears, once per page load |
| Hero pieces (`.rise`) | rise 18px and fade in, staggered by 80ms through `--i` | the view appears (keyframes) |
| Section content (`.reveal`) | rise and fade in | entering the viewport, once |
| Table rows (`tr.is-flash`) | a yellow tint that fades out over 900ms | sorting or picking a mini card preset |
| Scenes (`.scene img`) | scale to 1.04 inside the rounded frame | hover |
| Questions (`.qa summary::after`) | the plus turns 45 degrees into a cross | opening |
| Buttons | darker yellow on hover, 1px down while pressed | hover, press |
| Tabs, chips and the star | colour and fill change instantly within `--dur-fast` | click |

No tickers that scroll by themselves, no fake live updates, no autoplaying carousels, no parallax, no animated charts drawing themselves. If the user has a real live feed, update the figures in place and flash the changed cell with the same `flash` keyframes.

## Fallbacks

- Every entrance uses `@keyframes`, not transitions: a class added during page load would skip a transition.
- Hidden starting states apply only under the `js` class, so every view is visible without JavaScript, and the counter already shows its final figure in the HTML.
- A timer marks every `.reveal` as shown after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and skips the count-up: figures appear final and in place.
- Animate only `opacity`, `transform` and the row background flash.
- Do not rely on `position: fixed`, `position: sticky; bottom: 0` or `background-attachment: fixed`; full-page screenshots and some phones only paint them on the first screen. The menu opens in the flow under the header, and there is no floating help button for that reason.
