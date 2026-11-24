# Style guide: Roblox style

The look in one sentence: a dark wall of square project art tilted a few degrees, with loose outline squares floating over it and one compact card in the middle; behind it, a plain light (or dark) catalog of square tiles in sideways shelves, big blue buttons that mean "go", and a wide, chunky display face for the few headlines.

## Tokens

All values live as CSS custom properties on `:root` (light, the default unless the visitor's system is dark) and `[data-theme="dark"]` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | white | blue-tinted near-black | the page |
| `--bar` | the faintest grey | one step up | the header bar and the footer |
| `--surface` / `--surface-2` | pale greys | two and three steps up | event cards, bands, tab bars, the age box / pill selects, chips, the search field, empty tile backgrounds |
| `--text` / `--muted` | near-black / mid grey | near-white / light grey | titles and body / stats, meta lines, hints |
| `--border` | light hairline | dark hairline | the stats strip, FAQ rows, the header edge |
| `--accent` / `--accent-hover` / `--accent-text` | electric blue / deeper blue / white | the same blue, lighter on hover / white | Join, Play, Save a spot, focus rings, ready submit buttons, the active nav underline |
| `--link` | a deeper blue | a lighter blue | blue used as text: links, maker handles, the highlighted words in a statement |
| `--ink` / `--ink-text` | near-black / white | near-white / near-black | the selected chip and pill select, "Remind me", the selected segment, tooltips, toasts |
| `--card`, `--card-line`, `--field` | white / grey line / white | near-black / grey line / darker | the card on the wall, its field outlines and fills |
| `--wall`, `--on-wall` | near-black / white | the same | the wall section in both themes |
| `--good`, `--bad` | green / red | green / red | the success tile, error text and outlines |

The interface is neutral and cool; the project art brings every other color. There is one blue and it means "go": white text on it is about 4.8:1 in both themes. Blue text uses `--link`, never `--accent`, so it stays readable on both backgrounds. The wall is dark in both themes, like a screen in a lit room.

## Typography

- **Lexend** for the interface: a wide, round-shouldered sans built for easy reading, with a variable weight axis. Body 16px at 400, labels 500, tile and nav titles 500 to 600, headings 700, card titles 800.
- **Unbounded** for display only: a very wide, chunky sans. The hero headline, page titles, band titles, the about statement, the 404 number and numbered steps. Never for buttons, nav, tiles or paragraphs.
- Hero headline (`.hero-title`): 28 to 42px, 700, line height 1.12, letter-spacing -0.025em, centered, one line on desktop.
- Page titles (`.page-title`) 28 to 36px at 700 in Unbounded; shelf and section headings (`.head h2`) 21px at 700 in Lexend; tile titles 15.5px at 600, two lines at most.
- Card titles (`.card-title`) and event titles: Lexend 800 or 700, uppercase, 0.01em tracking ("BOOK A FREE TASTER", "WINTER JAM: ONE-ROOM GAMES"). The caps heading over the badges (`.caps`) is the same at 18px.
- Stats lines are 13px muted with 15px icons: a thumbs-up and a percentage, a play triangle and a count.

## Layout, spacing and radius

- **One column, 1240px**, with a 24px gutter (16px on phones). The project page narrows to 1020px. The wall runs edge to edge.
- **The header** is a sticky 60px bar: mark and name, four text links, a wide search field in the middle, then the theme toggle, an outlined Log in and a blue Join. Under 1180px the field becomes a search icon; under 940px the name hides; on phones the links drop to a second row and the bar is about 104px tall.
- **Shelves.** A heading with a small info icon and a "See all" link with an arrow on the right, then a row of 162px square tiles with 16px gaps that scrolls sideways (144px and 12px on phones). The last tile is cut by the edge and fades out, so the row reads as "more this way". Tall translucent arrow bars appear on hover.
- **Rhythm.** Sections are 44px apart; shelves 30px apart; the wall has 48px above the headline and 44px below the badges.
- **Radius.** 8px for buttons, fields, segments and tiles; 10px for event and content cards; 12px for the card on the wall, bands and panels; 14px for wall tiles; pills only for filter selects, chips and the date chip. Avatars and the tilted icon squares are 11 to 16px.
- **Shadows** only on things that float: the card on the wall, hovered tiles, the stacked art in the parent band and toasts.

## Signature elements

Keep the wall, the card, the shelves and the blue on every build; keep at least five of the nine on the home page.

1. **The tilted wall.** A 9-column grid of square art tiles rotated -12 degrees and bled past every edge, darkened to 60% and pulled together by a radial veil, drifting slowly. Six outline squares (2px, white at 20% or blue at 70%, rotated 8 to 30 degrees) float over it. The log-in page reuses it.
2. **One centered card on the wall.** A white card (near-black with a hairline in dark) 468px wide with an uppercase title, stacked fields with labels above, a joined trio of selects, a segmented choice, fine print with underlined links, and a full-width button that stays grey until the form is complete, then turns blue.
3. **Outlined badges under the card.** An uppercase caps heading and a row of outlined rectangles on the dark wall, each with an icon, a small first line and a bold second line ("In the studio / Saturdays").
4. **Shelves of square tiles.** Title, info tip, See all, sideways row, a stats line under every tile.
5. **The project page.** Art on the left, a right column with a bold title, "By @maker" with a seal, an age line, then a tall full-width blue Play button with only a triangle, and under it Favorite, a thumbs-up with a percentage, a thin ratio bar and a thumbs-down.
6. **The grey tab bar** with a 4px underline on the selected tab, followed by a description, an age box and a centered stats strip (small muted label over a bold value, hairlines above and below).
7. **Event cards with a date chip.** A 16:9 picture with a white pill date in the corner, an uppercase title, one line of detail and a full-width button: blue to sign up, ink to be reminded.
8. **Pill selects.** The first filter is an ink pill, the rest grey pills, each with a chevron, next to a pill search field.
9. **Wide display words with a blue highlight.** A statement in Unbounded where a few words turn blue ("make *the games they want to play*").

## Components

- **Buttons** (`.btn`): 44px tall (40px in the header), 8px radius, 600 weight. `.btn-blue` for the main action, `.btn-ink` for a strong secondary, `.btn-line` outlined, `.btn-soft` grey. One blue button per group. `.go` is the full-width form button that turns blue with `.ready`.
- **Fields** (`.field`): a 13.5px label, a 44px input with an 8px radius, and 22px reserved underneath for the error (`.err`), so errors never move the button.
- **Trio** (`.trio`): three selects in one outlined box, divided by hairlines. Use it for a date (day, month, year) or a slot (day, time, place).
- **Segments** (`.seg`): equal buttons in one outlined box; the selected one fills with ink.
- **Tiles** (`.tile`): a square image, a title, a stats line. The whole picture and title are one link.
- **Pill selects** (`.pill`, `.pill.ink`) and **chips** (`.chip`, selected with `aria-pressed="true"`).
- **Votes** (`.vote`, `.ratio`): icon over a small label; pressed turns blue and fills the icon.
- **Tabs** (`.tabs`), **stats strip** (`.strip`), **log rows** (`.log`) for updates and credits.
- **Boxes** (`.box`) with a tilted blue icon square (`.tilt`, rotated -9 degrees, the icon counter-rotated).
- **Bands** (`.band`): a grey panel with a display title, a paragraph, two buttons and a stack of three tilted pictures.
- **Toast** (`#toast`): ink, bottom center, short.

## Do and don't

- Do keep the wall dark in both themes and the rest of the page plain: white or near-black, no gradients, no textures.
- Do keep tiles square and art edge to edge inside them, with the title underneath, never on top.
- Do use real numbers in stats lines, or drop the stats line.
- Do keep the card narrow and the form short: four fields is the ceiling.
- Don't put a second accent color in the interface. Color comes from the art.
- Don't use Unbounded for anything smaller than 22px or longer than a sentence.
- Don't round tiles or buttons into pills; only filters, chips and the date chip are pills.
- Don't let the header wrap on desktop or tablet; collapse the search and the name first.

## Voice

Short, friendly and direct, written for young people and the adults beside them. Second person, plain verbs, no hype: "Make the game you wish existed", "Book my taster", "Remind me", "This level does not exist yet." Card and event titles shout in capitals; everything else is sentence case. Name safety plainly ("Nicknames only", "Adults in every room"). One small joke per page at most.
