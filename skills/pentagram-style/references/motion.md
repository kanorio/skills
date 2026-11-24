# Motion

Motion here is quick and plain, like turning pages in a portfolio: the wall settles once, tiles rise into place when the selection changes, and a swapped word rolls up into the sentence. Nothing moves for its own sake.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | hover fills on buttons and chips, the option list appearing |
| `--dur-base` | 320ms | the word roll, label slides, arrows, the facts row, the menu sheet |
| `--dur-slow` | 700ms | tile entrances, reveals, the wall settling |
| `--ease` | cubic-bezier(0.2, 0.7, 0.2, 1) | everything |

Pictures zoom on hover over 1.2s so the movement is felt more than seen.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.wall > a` | fades in from a 1.04 scale, 70ms apart (`--i`) | page load (keyframes) |
| `.pill` | fades in after 500ms | page load (keyframes) |
| `.wall .label` | rises 6px and fades in | hover or keyboard focus on a tile; always shown on touch screens |
| Pictures in tiles, cards and the wall | scale to 1.025 to 1.03 | hover |
| `.w` (a word of the sentence) | rolls up 0.35em and fades in | its value changes |
| `.word .chev` | turns 180 degrees | the list opens |
| `.options` | drops 6px and fades in | the list opens |
| `.tile.enter` | rises 16px and fades in, 50ms apart | every filter or layout change |
| `.reveal` | rises 16px and fades in, 80ms apart through `--i` | entering the viewport, once |
| `.btn .go` | moves 3px right | hover |
| `.index a` | turns grey and indents 10px | hover |
| `#p-facts` | drops in | "About the project" |
| The plus on that button | turns into a cross | open |
| `.rows svg` | slides in from the left | hover or focus on a studio row |
| Menu sheet | fades in | open |

No parallax, no auto-advancing slideshows, no video backgrounds, no cursor followers, no text that types itself.

## Fallbacks

- Entrances use `@keyframes`, not transitions: a class added while the page loads would skip a transition.
- Reveal styles apply only under the `js` class, so everything is visible without JavaScript; a timer marks every `.reveal` as shown after 2.5 seconds in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition and shows hidden reveals at once. The wall, the words and the tiles simply appear.
- Animate only `opacity` and `transform`. Grid layout, type sizes and colours never animate.
- Do not use `position: fixed`, `background-attachment: fixed` or sticky bars at the bottom of the screen: full-page screenshots and some phones paint them only on the first screen. The sentence stays in the wall and on the work page instead of following the visitor.
