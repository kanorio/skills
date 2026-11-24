# Motion

Motion in this style is slow air and quick metal: mist drifts across the night, embers rise, and when you choose something the gold answers at once with a sweep, a glow or a frame that opens out. Nothing bounces.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 160ms | button fills, chip borders, icon opacity |
| `--base` | 320ms | the nav underline, the gold rule under the class picker, card frames, the framed button's outer frame, view fades |
| `--slow` | 700ms | section entrances, the ring's sweep, a hero stepping in, the map changing, card art growing |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | everything that moves; a fast start and a long, soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Hero mist (`.mist`) | drifts 9 percent sideways and back over 24 seconds | always, very slowly |
| Hero embers (`.embers`) | rise and fade over 9 seconds, then repeat | always; the only other loop |
| Sections and figures (`.reveal`) | rise 26px and fade in | entering the viewport, once |
| Views | fade in | changing route |
| The ring (`.ring .arc`) | the gold arc sweeps 230 degrees round to its rest position | choosing a class or an arrow |
| The hero in the ring (`.figure`) | slides in from the right and fades in | choosing a class |
| The map disc | the picture fades in | choosing a way to play |
| Class icons | lift 3px and light up | hover and the chosen class |
| Gold rule under the classes | slides to the chosen class | choosing a class |
| Hero cards | the figure grows 6 percent from its feet; a double gold inset frame appears | hover and focus |
| News cards | the picture grows 5 percent | hover |
| Framed button | the outer frame opens from 6 to 9px | hover |
| Gold and arcane buttons | lighten and glow | hover |
| Ability tiles | the chosen tile gets a ring and a glow; the panel fades in | click |
| Nav links | a gold bar grows under the link | hover and the current section |

No parallax, no autoplaying carousels or video backgrounds, no counting numbers, no shaking, no particles following the cursor.

## Fallbacks

- Every entrance uses `@keyframes`, not transitions, so it plays even when the class is added during page load. Restart a keyframe on repeat clicks by removing the class, reading `offsetWidth`, and adding it again (`.swap` in the script).
- Hidden starting states apply only under the `js` class, so everything is visible without JavaScript; a timer marks every `.reveal` as shown after 2.5 seconds in case the observer never fires.
- `prefers-reduced-motion: reduce` removes every animation and transition: mist and embers stand still, the ring and figures change in place, and nothing rises.
- Animate only `opacity` and `transform`.
- Do not rely on `position: fixed`, `position: sticky; bottom: 0` or `background-attachment: fixed`; full-page screenshots and some phones only paint them on the first screen. The header is sticky at the top and the menu opens in the flow.
