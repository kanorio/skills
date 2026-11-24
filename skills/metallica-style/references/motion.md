# Motion

Motion in this style is a hard cut, not a float: things are wiped into view along straight edges, quickly, and stop dead. Nothing bounces, drifts in on its own or loops.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 120ms | button inversion, color changes (linear) |
| `--dur-base` | 240ms | arrows, nav underlines, toggle icons |
| `--dur-slow` | 620ms | section reveals and image zoom |
| `--ease` | cubic-bezier(0.12, 0.9, 0.2, 1) | a fast attack and a hard stop, for every movement |

The diagonal image wipe runs 900ms with the same easing.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.reveal` blocks | wiped open from the top with `clip-path: inset()`, rising 28px | entering the viewport, once |
| `.wipe` images (album cover) | wiped open along a diagonal with `clip-path: polygon()` | entering the viewport, once |
| `.wm` watermark words | slide 8% sideways as the section scrolls through (`animation-timeline: view()`) | scrolling, in browsers that support it |
| Buttons | invert fill and text | hover |
| `.more` and ticket arrows | move 4 to 6px right | hover |
| Nav links | 2px underline grows from the left | hover, current page |
| News and product images | zoom 4% inside their frame | hover on the card |
| Toggles | plus icon turns 45 degrees into a cross | open |

Do not combine `.wipe` or `.reveal` with an element that has its own `clip-path` (cut news images, the band art, the member card): the animation would replace the shape. Wrap it instead, or use `.reveal` on the parent.

No parallax on images, no auto-playing carousels, no animated noise, no count-ups, no flicker effects on text.

## Fallbacks

- Reveal and wipe styles only apply under the `js` class, so content is visible without JavaScript.
- A timer marks everything as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- The watermark drift lives inside `@supports (animation-timeline: view())`; elsewhere the words stay still.
- `prefers-reduced-motion: reduce` removes every animation, shortens every transition to 1ms and shows reveals and wipes already open.
- Animate only `transform`, `opacity` and `clip-path` (translate for the watermark drift).
