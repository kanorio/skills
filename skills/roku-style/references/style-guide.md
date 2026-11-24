# Style guide: Roku style

The look in one sentence: a deep purple night, an illustrated city with a lit-up marquee under a hand-lettered welcome, the program shown on a glowing TV-style screen where one tile wears a white focus ring, a sunset skyline band between sections, a tilted wall of rounded color tiles and season cards stacked like a deck.

## Tokens

All values live as CSS custom properties on `:root` (night, the default) and `:root[data-theme="light"]` (dusk) in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Night | Dusk | Use |
|---|---|---|---|
| `--bg` / `--bg-2` | deep purple / deeper | lavender white / pale lilac | the canvas / the footer |
| `--surface` / `--surface-2` | one and two steps lighter purple | white / lilac | cards, plans, deck cards, panels / time pills, the billing toggle |
| `--text` / `--text-muted` | near-white / lilac grey | deep purple / muted purple | headings and body / sublines, meta |
| `--border` / `--border-strong` | purple hairline / lilac | pale hairline / mid purple | dividers / fields, chips, steppers |
| `--accent` / `--accent-hover` / `--accent-text` | vivid violet / deeper / white | a deeper violet / deeper / white | the one filled button per area (Join, Book seats, Send), the chosen billing option |
| `--accent-ink` | light orchid | violet | script kickers, eyebrows, check marks, the nav underline |
| `--neon` | hot pink | deeper pink | the sign outline, the "now" line in the guide, pull quotes |
| `--gold` | marquee gold | the same | bulbs, kickers and event bars on screens |
| `--tv`, `--tv-2`, `--tv-line` | near-black purple | the same | every screen (home screen, guide, picker, trailer); screens stay dark in both themes |
| `--frame`, `--glow` | purple panel / violet haze | lilac panel / violet haze | the rounded panel around a screen and the haze at its top |
| `--sky-1..3`, `--far`, `--mid`, `--cinema`, `--street`, `--win-*`, `--moon`, `--stars` | midnight sky, lit windows | dusk sky, fewer stars | the illustrated city |
| `--band-1..3` | violet, magenta, amber | lilac, pink, peach | the horizon band gradient |
| `--danger`, `--ok` | coral / mint | deep red / deep green | errors / success |

Night is the default and does not follow the system setting; dusk is a complete second theme behind `#theme-toggle`. Color comes from the illustration, the artwork and the screens; the interface itself is purple on purple with white type. One violet fills buttons; pink and gold are for light sources only (signs, bulbs, the now line), never for buttons or body text.

## Typography

- **Urbanist** for everything: a geometric sans with a variable weight axis. Headlines at 800, the wordmark at 900, labels and buttons at 700, body at 500 (the weight that keeps white-on-purple text crisp).
- **Kaushan Script** for hand lettering only: the line above the wordmark ("Meet me at the"), the kicker above each page title, the closing line and the member card. At most five words, rotated -4deg, never for body, buttons, navigation or prices.
- Wordmark in the hero (`.lockup .word`): 52 to 112px, 900, letter-spacing -0.045em, line height 0.92, white over the illustration in both themes.
- Tagline (`.lockup .tag`): 12 to 17px uppercase at 800 with 0.3em tracking, between the wordmark and the city.
- Page titles (`h1`) 36 to 60px at 800; section titles (`h2`) 28 to 42px, centered with a muted subline (`.sec-head`); card titles 20px.
- Eyebrows (`.eyebrow`): 13px uppercase at 800 with 0.22em tracking in `--accent-ink`.
- Times and counts use tabular figures.

## Layout, spacing and radius

- **One centered column** of 1160px (`.wrap`) with a 16 to 48px gutter. The hero illustration, the horizon band and the footer run full width.
- **Centered sections.** Every section opens with a centered title and one muted line, then one big object: a screen frame, the deck, the tile wall or a three-card row. Section rhythm is 48 to 96px.
- **Screens sit in frames.** A rounded panel (`.frame`, 28px radius, 14 to 56px padding) with a violet haze at the top holds a dark screen (22px radius, an 8px near-black bezel and a deep shadow). Never put a screen straight on the canvas.
- **Header**: sticky, solid canvas color, one hairline. Brand left; five links, search, theme and a filled Join at the right. Below 1100px the links fold into the menu button so the bar never wraps; below 440px the bar tightens and the search icon steps aside (the programme page keeps its own search). Keep the header button to one or two short words, and never let the mark shrink (`flex: none`).
- **Radius.** 6px buttons, fields and screen buttons; 10px media and tiles; 14px cards; 999px chips and toggles; 22px screens and deck cards; 28px frames and the tile wall.
- **Shadows** only on floating things: screens, deck cards, the member card, posters on the film page.

## Signature elements

Keep the hero lockup and at least three of the others on the home page; keep screens and script kickers on inner pages.

1. **The illustrated night city.** One inline SVG (`.scene`): starry gradient sky, a moon with a halo, a far skyline silhouette, two searchlight beams crossing behind the roofs, mid-ground blocks with a lit-window pattern, a deco building in the middle with a vertical neon blade sign and a bulb-lined marquee board, glowing doors, street lamps with three globes and tree silhouettes. Recolored entirely by tokens, so dusk and night are the same drawing.
2. **The lockup.** Script line, heavy wordmark and tracked caps tagline stacked in the sky above the marquee building, white with a soft purple shadow.
3. **The TV home screen** (`.tv`). A dark screen inside a frame: a sunset strip with the skyline and a clock on top, a rail of line icons on the left, tiles in a grid, and a large feature panel on the right that follows the focused tile. One tile at a time wears the focus ring: a 3px gap in the screen color and a 3px white ring, scaled 1.04.
4. **The guide** (`.guide`). The same screen shape holding a timetable: day tabs in the top strip, one row per room or channel, blocks placed by start time and length, a pink now line, past blocks dimmed.
5. **The horizon band** (`.band`). A sunset gradient from violet through magenta to amber with the skyline silhouette and its faint reflection, used once on a page to open a new chapter.
6. **The tilted tile wall** (`.wall`). Rounded tiles in six flat colors, each with a short label set in heavy type, rotated -12deg inside a rounded panel and drifting slowly. Decorative: the same facts are listed in real text nearby.
7. **The deck** (`.deck`). Cards stacked so the ones behind peek above the front card, narrower and dimmer; the front card shows a strip of five posters and a footer with a colored badge, a title, a line and an outline button. Arrows deal the next card.
8. **Outline buttons.** Secondary actions are transparent with a 1.5px border in the text color; only one filled violet button per area. On screens the action is a white button.

## Components

- **Buttons** (`.btn`): 46px tall, 22px side padding, 6px radius, 700 weight. `.btn-fill` violet, `.btn-line` outline, `.btn-white` on screens, `.btn-sm` 38px in the header and on screens.
- **Chips** (`.chip`): pill outline; the pressed one inverts to the text color.
- **Tiles** (`.tile`): 16:9 artwork, the title on a dark gradient at the bottom, the focus ring on focus or hover.
- **Film cards** (`.film`): 2:3 poster, title, one meta line, time pills that link to booking. The poster lifts 4px and takes the ring on hover.
- **Screen options** (`.opt`): dark buttons on screens; the chosen one wears the focus ring; unavailable ones fade to 38%.
- **Fields** (`.field`): label above, 48px field with a 1.5px border and 8px radius; the error floats in reserved space below so nothing moves.
- **Plans** (`.plan`): three cards; the recommended one has an eyebrow, a violet-tinted gradient and the filled button.
- **FAQ** (`.faq`): flat rows with hairlines and a drawn chevron, centered at 880px.
- **Member card** (`.mcard`): a 1.6:1 gradient card with the skyline, script line, wordmark and the live name.

## Do

- Let the illustration and the screens carry the color; keep the interface purple, white and calm.
- Put schedules, picks and choices on screens with the focus ring, so the site feels like using a TV remote.
- Center section titles and keep each to one short claim ("Membership, made simple").
- Give every inner page a script kicker over its title.

## Don't

- Don't use photographs in the hero; the city is drawn, flat and layered.
- Don't add a second accent for buttons, or use pink or gold for text blocks.
- Don't put the script on anything longer than five words or on a button.
- Don't make the screens follow the light theme; screens are always dark.
- Don't tilt real content. Only the decorative tile wall is rotated.

## Voice

Warm, plain and a little playful, like a friendly usher. Short claims in sentence case ("Seasons worth staying up for", "Ready for a night out?"), concrete facts after them (times, prices, seat counts). Speak to "you", say "we" for the venue. No exclamation marks, no superlatives, no hype; let one joke per section do the work ("Bring the friend who screams").
