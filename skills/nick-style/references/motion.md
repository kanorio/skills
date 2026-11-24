# Motion

Motion in this style is springy and a little rubbery, like goo that has just been poked: buttons squash and stretch, cards pop up from the band, the stage copy bounces in, featured items cross-fade. It is lively but short, and nothing important waits for an animation.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--fast` | 150ms | button presses, chips, round buttons, outline colour |
| `--base` | 260ms | card lifts and underline growth, the FAQ plus turning, carousel dots |
| `--slow` | 600ms | cards rising into a view, stage copy popping in, slides cross-fading |
| `--ease` | cubic-bezier(0.34, 1.56, 0.64, 1) | things that overshoot and settle: lifts, pops, the logo tilt |
| `--ease-out` | cubic-bezier(0.22, 1, 0.36, 1) | things that just settle: fades, the wobble, the shake |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| `.btn` | `wobble` keyframes: squash to 108/92 percent, stretch back, settle (520ms) | hover |
| `.btn`, `.round` | scale to 96 percent / grow 8 percent | `:active` / hover |
| `.card` (`a.card`) | lifts 3px, the hard underline grows from 4 to 7px, a 2px ink outline appears | hover |
| `.card` in the open view | `rise`: from 22px lower and transparent, staggered 60ms through `--i` | the view opens |
| `.stage-copy` children | `pop`: from 18px lower and 97 percent, staggered 70ms | the view opens |
| `.slide` | cross-fade (`opacity`, 600ms) | dots, arrows, autoplay every 7s |
| `.dot` | the current dot stretches into a 34px lime pill | slide change |
| `.promo-art img` | `bob`: drifts and grows 5 percent, 7s, alternating | while the home view is open |
| `.logo` | tilts -8 degrees | hovering the brand link |
| `.faq summary .ic` | the plus turns 45 degrees into a cross | a question opens |
| `.trailer img` | `pan`: slow zoom to 114 percent over 14s, alternating | the trailer is open |
| submit button | `shake`: three short sideways moves (`translate` only) | submitting with errors |

No parallax, scroll-jacking, confetti, autoplaying sound or video, or looping animations on cards.

## Fallbacks

- Entrance effects are keyframes with `backwards` fill under the `js` class on elements in the open view; they never depend on a transition from a class added at load (that would not play). After they end, the element's own styles take over, so hover still works.
- The carousel autoplay never starts with `prefers-reduced-motion: reduce`, pauses on hover and focus, and has a visible pause button. Without JavaScript only the first slide shows and every view is visible, one after another.
- `prefers-reduced-motion: reduce` stops every animation (the wobble, rise, pop, bob, pan and shake) and cuts transitions to 1ms; card lifts are removed. Colour changes, the growing underline and focus rings stay.
- Animate only `transform`-family properties (`translate`, `scale`, `rotate`) and `opacity`. Never animate layout, `box-shadow` blur or filters.
