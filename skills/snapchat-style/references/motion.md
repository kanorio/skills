# Motion

Motion here feels like a phone in your hand: cards rise into place, photos grow a little under the pointer, and stories tick forward on their own until you hold to pause. Everything else is instant.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | pill fills, the press, field focus |
| `--dur-base` | 220ms | the menu and toast popping in, the caption strip, the accordion plus |
| `--dur-slow` | 420ms | cards and tiles rising, photos growing on hover, the viewer's crop moving |
| `--ease` | cubic-bezier(0.2, 0.8, 0.2, 1) | everything that is not linear |
| `SNAP_MS` (script) | 5000ms | how long each snap stays in the viewer |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.rise` (story cards, nights, lens tiles, products) | rises 18px and fades in, 70ms apart (`--i`) | the view becomes active (keyframes restart when a view is shown) |
| `.story img`, `.lens img`, `.prod img` | scales to 1.045 | hover |
| `.story .btn` | dark glass turns white | hover or focus on the card |
| `.btn:active` | scales to 0.97 | press |
| `#v-bars i` | the current segment fills from left to right over `SNAP_MS`; earlier ones are full | the viewer is open and not paused |
| `#v-img` | a slow 5s push-in and a new crop per snap (`POSITIONS`) | each snap |
| `.caption` | pops in | each snap |
| `.sheet`, `.toast`, `.done` | pop: 8px drop and fade | open, an action, a sent form |
| accordion `+` | turns into a cross | open |

## The viewer's timing

- Snaps advance on their own; tapping the right two thirds of the frame goes forward, the left third goes back; the last snap opens the next story.
- Pressing and holding the frame pauses it, like a phone; letting go resumes. The pause button and Space do the same. Arrow keys step snaps (left, right) and stories (up, down).
- The timer stops when the view is left or the tab is hidden.

## Fallbacks

- Entrances use `@keyframes`, not transitions, so they play on first paint and when a view is shown again.
- Without JavaScript every view is visible in order, cards and tiles are already in place, and the viewer shows its first snap as a still with all snaps listed beside it.
- `prefers-reduced-motion: reduce` removes every animation and transition, and the viewer opens paused: the play button and taps still move through the snaps.
- Animate only `opacity`, `transform`, `object-position` and colours. Layout and type never animate.
- The toast and the menu are the only fixed or floating elements, and only after an action. No fixed sidebars, bottom tab bars or `background-attachment: fixed`: full-page screenshots and some phones paint them only on the first screen. The join column is `position: sticky` inside its own column, which renders in place everywhere.
