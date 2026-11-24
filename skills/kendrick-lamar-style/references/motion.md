# Motion

Motion here moves in steps, the way pixels do: things appear in three or four frames rather than gliding, and the one big movement, a folder opening into a black page, grows in seven hard steps. Everything is short. Nothing loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | reserved for small state changes you add (a pressed button) |
| `--dur-base` | 240ms | items blinking in after a filter, the menu sheet, a file's column appearing |
| `--dur-slow` | 480ms | desk icons dropping into place on load |
| `--ease` | `steps(6, end)` | the default; the template also uses `steps(2)`, `steps(3)`, `steps(4)` and `steps(7)` |

Hover states (the ink selection block, the 2px icon lift) change instantly, without a transition.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.it` (desk items) | drop 6px and appear in four steps, 90ms apart through `--i` | page load (keyframes) |
| `.zoom` | a black rectangle grows from the clicked icon to the whole window in seven steps (280ms), the file appears under it, then it fades in three steps | a desk or folder link that opens a file (Web Animations API) |
| `.file.is-active .col` | appears in three steps | opening a file |
| `.enter` (grid items and rows) | appear in two steps, 40ms apart | every filter change |
| `.sheet[open]` | appears in three steps | opening the menu |
| `.it` icon or picture, `.grid` pictures | rise 2px | hover |

No parallax, no smooth easing curves, no autoplaying media, no cursor trails, no text that types itself, no windows that open or minimise.

## Fallbacks

- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- The zoom is skipped when `prefers-reduced-motion: reduce` matches, when the Web Animations API is missing, and for links between two files; the view simply changes.
- Without JavaScript nothing waits on a script: the desk icons animate in with CSS alone, and every view is visible in order.
- `prefers-reduced-motion: reduce` removes every animation and transition; icons and items are simply there.
- Animate only `opacity`, `transform` and `clip-path`. Layout, type sizes and colours never animate.
- Do not use `position: fixed` for anything that must appear in a screenshot. The zoom cover is fixed only for its 440ms and is removed afterwards; the header and footer are ordinary flow elements.
