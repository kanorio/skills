# Motion

Motion in this style is slow, large and cinematic, then gets out of the way: the hero headline rises, the glass frame lifts into place from below the fold, bands fade up as they arrive, and pill tabs cross-fade one photograph into the next. Everything interactive answers quickly.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | pill and tab fills, presses, inputs, the "more" arrow |
| `--dur-base` | 320ms | header background, switch knobs, pane cross-fades, FAQ icon |
| `--dur-slow` | 700ms | headline and band entrances, photograph cross-fades |
| `--ease` | cubic-bezier(0.22, 1, 0.36, 1) | everything: a fast start and a long, soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Hero headline, lead and pill (`.rise`) | rise 24px and fade in, staggered by 90ms through `--i` | the view appears (keyframes, so it plays right after the script adds `js` and again each time the view is shown) |
| Glass frame in the hero (`.frame.rise`) | lifts 80px with a slight scale from 0.97 over 1.1 seconds | the view appears |
| Band content (`.reveal`) | rise and fade in | entering the viewport, once |
| Photographs behind tabs (`.bgimg[data-pane]`) | cross-fade over 700ms | choosing a tab |
| Frame contents, card fan and phone (`.stack > [data-pane]`) | the old pane fades out, the new one rises 10px and fades in | choosing a tab |
| Member card colour (`#how-pass[data-tone]`) | swaps the gradient | choosing a colour tab |
| Switches (`.switch`) | the knob slides, the track fills with the accent | click or Space |
| Pills | tint on hover, scale to 0.97 while pressed | hover, press |
| Journal photographs | scale to 1.03 inside their rounded frame | hover |
| Plan strip cards | lift 3px | hover |
| Header | from transparent to the page color with a hairline | scrolling past 8px |

No autoplaying carousels, no scroll-jacking, no parallax, no video backgrounds, no counting numbers, no 3D tilts. The tabs only change when the visitor chooses one.

## Fallbacks

- Every entrance uses `@keyframes`, not transitions: a class added during page load would skip a transition.
- Hidden starting states apply only under the `js` class, so every view is visible without JavaScript, and the first tab's picture and frame are the ones that show.
- A timer marks every `.reveal` as shown after 2.5 seconds, in case the observer never fires (sandboxed frames, print, screenshots).
- `prefers-reduced-motion: reduce` removes every animation and transition: the hero and bands appear in place, and tabs switch instantly.
- Animate only `opacity` and `transform` (the card colour and the header background are the two exceptions, both short).
- Do not rely on `position: fixed`, `position: sticky; bottom: 0` or `background-attachment: fixed`; full-page screenshots and some phones only paint them on the first screen. The menu opens in the flow under the header for that reason, and the scene photographs scroll with the page.
