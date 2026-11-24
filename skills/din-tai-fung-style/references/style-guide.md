# Style guide

The page is a sheet of rice paper with a painting on it. Ink washes, a lotus and round fans do the decorating; type and rules stay fine and calm. Read this before writing markup, then keep `assets/template.html` open: every rule here is already in its CSS.

## Tokens

| Token | Rice paper (light) | Ink night (dark) | Use |
|---|---|---|---|
| `--bg` | oklch(98.4% 0.004 95) | oklch(19% 0.014 255) | The paper. In light it carries `--paper`, a faint fibre texture; ink night is plain. |
| `--surface` | oklch(99.6% 0.002 95) | oklch(22% 0.015 255) | Form cards, house cards. |
| `--surface-2` | oklch(95.8% 0.006 95) | oklch(16.5% 0.013 255) | Mist: a quiet band when a section needs one. |
| `--text` | oklch(24% 0.012 255) | oklch(91% 0.016 88) | Ink, and paper-coloured words at night. |
| `--text-muted` | oklch(46% 0.012 255) | oklch(73% 0.016 88) | Diluted ink: glosses, descriptions, labels. |
| `--border` | oklch(87% 0.007 90) | oklch(32% 0.014 255) | Hairlines around fields, cards and rows. |
| `--rule` | oklch(72% 0.025 80) | oklch(50% 0.03 85) | The fine rules between title words, cells and inscription columns; dotted menu leaders. |
| `--accent` | oklch(52% 0.095 78) | oklch(81% 0.085 85) | Old gold: buttons, text links, prices, dates, the chosen chip. Nothing else. |
| `--accent-text` | paper | ink | Text on a filled gold button (hover only). |
| `--seal` | oklch(50% 0.17 30) | oklch(56% 0.16 30) | Cinnabar: the seal, map pins, house numbers, "hot" tags. Never text, never bands. |
| `--fan` | oklch(95.6% 0.007 90) | a soft paper-coloured radial gradient | The disc behind every picture; at night it glows like a moon. |
| `--wash` | none | invert, hue-rotate, dim | Filter on ink washes and the map: grey ink by day becomes moonlit mist at night. |
| `--lotus`, `--pic` | none | dimmed | Filters that keep colour pictures quiet at night. |

Type: `--serif` EB Garamond, `--sans` Alegreya Sans. Sizes: `--fs-display` (the inscription), `--fs-h1`, `--fs-h2`, `--fs-h3` 1.375rem, `--fs-body` 1.0625rem, `--fs-small` 0.9375rem, `--fs-gloss` 0.875rem with `--track` 0.3em. Space: `--gutter`, `--gap`, `--sec` (section padding), `--hh` (header height). Motion: `--dur-fast` 300ms, `--dur-base` 900ms, `--dur-slow` 1800ms, `--ease`.

## Type

- **Titles** are EB Garamond 400, sentence or title case, never bold, never uppercase. Section and page titles are split titles (below). Card and row titles use `.h3`.
- **The gloss** is the one line of small, widely tracked serif under every split title (`.gloss`): a translation, a subtitle or a place and year. One line, no full stop, muted.
- **Reading text** is Alegreya Sans 400 at 17px with line-height 1.85, muted for descriptions. Keep paragraphs short and centred only in statements and success panels.
- **Actions** are EB Garamond 500, uppercase, tracked 0.24 to 0.32em: gold outline buttons (`.btn`) and text links with a short trailing rule (`.link`).
- **Numbers** that matter (prices, years, facts, dates) are EB Garamond in gold.
- **Labels** in forms and tags are Alegreya Sans 500, small, lightly tracked.

## Signature elements

1. **Split titles.** Two to four words, each in its own cell, separated by 1px vertical rules in `--rule`, centred, with the gloss line underneath (`.title > .split + .gloss`). This is the voice of the style; every section title uses it. A word that wraps to a new line loses its rule (the script adds `.line-start`). In Chinese or Japanese, one character per cell.
2. **The inscription.** One vertical title on the home hero (`.inscription > .vtitle`): two columns written top to bottom, read right to left, separated by a rule, with a thin vertical gloss column and the cinnabar seal at its foot. It stands in the empty sky of the landscape, like the inscription on a scroll painting. Use it once on home and at most once more (the story page).
3. **Ink washes.** Grey-ink mountains dissolving into mist: the hero landscape (`illustrations/mountains.svg`) and bands between sections (`.band` with `ridge.svg` or `.band.far` with `far-peaks.svg`). They overlap the section above slightly and fade into the paper below. At night the `--wash` filter turns them into pale mist on ink.
4. **The lotus.** One watercolour lotus (`.lotus`) bleeding off the right edge of one section on home. Only one per page. On phones it drops below the text, right-aligned, so it never sits behind a word or a button.
5. **Round fans.** Every picture sits centred in a circle of `--fan` (`.fan`), like a painting on a silk fan. Drawings float inside at 84 percent; photographs fill it (`.fan.photo`).
6. **The seal.** A small cinnabar square with a carved mark (`#i-seal`), beside the wordmark, at the foot of the inscription and on success panels.
7. **The ink-drop loader.** A drop of ink blooms and a brush circle closes around it, once per visit, then the page fades in (`.loader`).

## Layout and spacing

- Centred compositions: titles, statements and the signature-dish selector sit on the centre line; lists and forms use a 1240px page with `--gutter` margins.
- Generous vertical space (`--sec`, 80 to 148px) and wash bands instead of coloured section backgrounds.
- Hairline cells (`.cells`) carry facts, steps and houses: content split by the same fine rules as the titles, with hairlines above and below.
- No shadows, no rounded corners except the fans and the pins. Square cards with hairline borders only where something is filled in (forms) or compared (house cards).

## Components

- **Header** (`.site-header`): seal and tracked wordmark on the left, links split by hairlines, the theme toggle and a small "Reserve" button. A hairline appears once the page scrolls. Links fold into the menu sheet when they do not fit.
- **Buttons** (`.btn`): 1px gold outline, gold uppercase tracked serif, square, 52px tall (`.btn.sm` 44px). On hover the gold fills in slowly. One button per group; the second action is a `.link`.
- **Chips** (`.chip`): hairline rectangles in serif; the chosen one turns gold. Counts sit beside them in tracked serif.
- **Dish selector** (`.stage-tabs`, `.dish-tab`, `.stage-panel`): small fans in a gentle arc, the chosen one lifted with a gold ring; the panel below holds a large fan, gloss, name, sentence, price and a link.
- **Menu rows** (`.dish`): name, dotted leader, gold price, one muted sentence, small tags.
- **Date blocks** (`.date`): year small and tracked over a rule, month and day in gold serif.
- **House cards** (`.house`): number in cinnabar, name, gloss, address, open-now status, hours in a hairline table, a button and a link.
- **Forms** (`.form-card`): a white card with a hairline border; fields are hairline boxes on the paper colour; time slots are hairline boxes that turn gold; errors float under the field in a reserved space.
- **Footer**: a mirrored wash band, the seal and wordmark with one line and the letters form, three link columns, a hairline and the legal links.

## Do

- Keep every page mostly paper. One wash band or the lotus per screen is enough.
- Keep gold for actions, prices and dates; keep cinnabar seal-sized.
- Write titles as two to four short words and give each one a gloss.
- Let pictures float in their fans with paper around them.
- Keep both themes equally quiet: ink night is deep blue-black with paper-coloured words, never pure black and never neon gold.

## Don't

- No bold titles, no uppercase titles, no gradients on text, no drop shadows, no glossy buttons.
- No red bands, red buttons or red text; no gold fills except the hover state.
- No photographs of dishes on busy tables cropped into rectangles; no rectangular picture frames.
- No dragons, lanterns, fans or knots used as clip-art decoration, no fake calligraphy fonts, and no random characters used as ornament. Use real words, written by the user, in a real CJK font.
- No steamer baskets, logos or artwork copied from a real restaurant.

## Voice

Quiet, exact and warm. Short sentences that say what happens: who folds, how many pleats, how long it steams, when the room opens. Numbers beat adjectives ("eighteen pleats", "five minutes"). No exclamation marks, no superlatives, no "authentic", "world-famous" or "best". Glosses are a few words in title or sentence case without a full stop: "Folded at the window", "By the river, since 1979".
