# Motion

Motion here is small and friendly: a color slowly changes behind a new story, a sprig sways once, a doodle nods when you point at it. Nothing loops, nothing auto-plays.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 150ms | hover fills, pill gaps, presses |
| `--dur-base` | 260ms | tab underline, accordion plus, picture zoom in cards, the toast |
| `--dur-slow` | 600ms | the band color, story text and picture fades, reveals, the theme cross-fade |
| `--ease` | cubic-bezier(0.3, 0.7, 0.3, 1) | everything: a gentle start and a soft landing |

## What moves

| Element | Effect | Trigger |
|---|---|---|
| Story band and header | background cross-fades to the new story's tone | arrows, rail thumbnails, arrow keys |
| Story text and picture | text rises 14px and fades in, picture fades in | each time a story becomes current (keyframes) |
| Masthead sprig | sways once from its base | page load (keyframes, 0.4s delay) |
| Wordmark sun, column bird | nods (rotate a few degrees and back) | hover |
| Tab underline | grows from the center; a short stub on hover | current view, hover |
| Thumbnails | picture scales to 1.03 inside its frame | card hover |
| "See all" pills and buttons | the gap before the chevron or arrow widens | hover |
| Favourites | lift 3px with a soft shadow | hover |
| Shelves (`.reveal`) | rise 14px and fade in, once | entering the viewport |
| Bag count | pops once | something is added |
| Toast | slides up 24px and fades in, leaves after 3.6s | add to bag |
| Accordion plus | rotates 45 degrees into a cross | open |
| Product picture | fades in | cover change |

No parallax, no auto-advancing carousel, no marquees, no cursor effects, no scroll-jacking.

## Why keyframes

Entrance effects use keyframe animations, not transitions on a class added at load: a transition does not run when the class arrives in the same frame as the first paint, and keyframes also replay each time a hidden view or story is shown again.

## Fallbacks

- Without JavaScript every view is visible in order, the first story shows on its own, reveals do not hide anything, and "show more" cards are visible.
- A timer marks every `.reveal` as revealed after 2.5 seconds, in case the observer never fires (sandboxed frames, print, full-page screenshots).
- `prefers-reduced-motion: reduce` sets every duration and delay to 1ms and shows reveals immediately; color changes become instant.
- Animate only `opacity`, `transform` and `background-color`. The toast hides with `visibility`, so full-page captures never show it.
