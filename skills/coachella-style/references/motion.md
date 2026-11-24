# Motion

Motion in this style is handmade and unhurried: a stem grows, a flower opens, paper objects are set down on the page. Things happen once, as they come into view, and then stay still.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | hover and press colors |
| `--dur-base` | 280ms | chevrons, arrow nudges, card lifts, cut-out wiggles |
| `--dur-slow` | 640ms | reveals and cut-outs settling |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | everything |

The stem line grows over 1.1s; the bloom opens 0.8s after it starts.

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.stem.grow` | the line uncovers from left to right (`clip-path`), then the bloom scales up from zero while turning a third of a circle | entering the viewport, once |
| `.cutout.settle` | drops 20px into place, turning from -8 degrees to its resting tilt (`--tilt`) and fading in | entering the viewport, once |
| `.reveal` | fades in and rises 14px; poster days stagger by 70ms through `--i` | entering the viewport, once |
| Cut-outs inside cards and tiles | turn 3 to 4 degrees and lift slightly | hover on the card |
| Arrow links and stage rows | the arrow moves 4 to 5px right | hover |
| Night tiles | lift 3px, border brightens | hover |
| Nav links | a marigold line grows under the text | hover, and stays on the current page |
| Save star | fills and pops | toggled on |
| `.stars .twinkle` | slow opacity breathing, 3.6s, alternate | always, only with motion allowed |

The twinkling stars are the only loop. Nothing else repeats: no carousels, no parallax, no marquees, no animated gradients on the poster.

## Fallbacks

- Reveal, settle and grow styles apply only under the `js` class, so everything is visible without JavaScript.
- A timer marks every element as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` shortens every transition to 1ms, removes rises and tilts on entry, shows the stem and bloom complete and stops the twinkle.
- Animate only `opacity`, `transform` and `clip-path`. The poster never animates its gradient or text size.
