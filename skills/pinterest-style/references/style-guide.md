# Style guide

The look in one sentence: a white page with a wall of pictures at their own ratios in tight columns, every corner rounded, warm grey pills for search and tags, one red for the Save button, and heavy tight headings that stay out of the pictures' way.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | white | warm near-black (never `#000`) | the page; pictures carry all the colour |
| `--surface` / `--surface-hover` | warm grey / a step darker | dark grey / a step lighter | the search pill, chips, secondary buttons, note numbers |
| `--surface-2` | warm off-white | a step above the page | soft bands, FAQ rows, the trio and people cards, the footer |
| `--raised` | white | a step above the page | the close-up card, the form card, the search suggestions |
| `--text` / `--text-muted` | plum-black / plum-grey | warm white / soft grey | headings and body / leads, meta, counts |
| `--border`, `--field` | pale grey, mid grey | dark grey, mid grey | hairlines; 2px field outlines |
| `--accent` / `--accent-text` / `--accent-hover` | red / white / deeper red | the same red | Save, the one main button per screen, the mark and wordmark, the note numbers on About |
| `--ink` / `--ink-text` | plum-black / white | warm white / near-black | chosen chips, Saved, Following, the active nav link, the toast |
| `--scrim` | black at 32% | black at 42% | over a picture while you point at it |
| `--error` | deep red | soft red | field errors only |
| `--focus` | blue | light blue | the focus ring: the only other hue, and it is functional |
| `--photo` | warm grey | dark grey | behind pictures while they load |

The red is the only brand colour and it means "do it": Save, Subscribe, Start exploring. Never use it for text links, headings, tags or backgrounds larger than a button. Everything else is white, warm grey and plum-black, so the pictures look as colourful as they are.

## Typography

- One family: **Plus Jakarta Sans**, an open geometric grotesque, variable from 200 to 800. No second family.
- Display (`.display`) 800, letter-spacing -0.045em, line-height 1.02: the home headline, About and the 404. H1 (`.h1`) 800 at -0.035em. H2 700 at -0.025em, H3 700 at -0.01em. Sentence case, `text-wrap: balance`, never uppercase.
- Body 16px at 400, line-height 1.5. Leads (`.lead`) 17 to 20px in the muted colour.
- Small things are 600: tile titles (14px, two lines at most), chips, buttons, labels, counts. Meta lines (the person under a tile) are 12px in the muted colour.
- The wordmark is live text: lowercase, 800, letter-spacing -0.05em, in red, beside the round mark.

## Spacing, layout and radius

- The wall runs nearly edge to edge (`.edge`, a 12 to 32px gutter). Reading pages (page heads, boards, forms, About) sit in a 1240px column (`.wrap`).
- The wall has 16px between columns and 24px between tiles (10px and 18px on phones). Columns are at least 220px wide (140px on phones, always two); up to seven.
- Sections are close together (48 to 88px, `--sec`). The density is part of the style: the wall should start on the first screen.
- Radius: 16px on every picture, card, board cover and field; 32px on large panels (the close-up card, form cards, bands, the footer's top corners, the search suggestions); fully round on buttons, chips, the search field and avatars. Nothing is square.

## Surfaces and depth

- The page is flat white. Pictures have no border and no shadow; the rounded corner is the frame.
- Only things that float get a shadow: the close-up card and form cards (`--shadow-card`, soft and wide), the search suggestions and the toast (`--shadow-overlay`). In dark mode cards trade the shadow for a 1px border.
- Grey is the only fill for controls. A chosen control turns ink (black on white, white on black), not red.

## Signature elements

These make the style recognizable. Home uses all of them; every other view keeps at least four.

1. **The wall.** Pictures at their natural ratios in tight columns, so the bottoms never line up. Without JavaScript it is CSS columns; the script deals tiles into the shortest column, left to right.
2. **Rounded everything.** 16px on pictures and cards, 32px on panels, full pills on every control.
3. **Pictures are the only decoration.** No illustrations, gradients, patterns or colour bands; colour comes from the photographs.
4. **The pill search across the header**, with popular searches and category tiles that drop down on focus.
5. **Pill chips** for categories, board sections and filters; the chosen one turns ink.
6. **The Save button that appears on hover**: a red pill in the corner of the picture over a light scrim. It turns into an ink "Saved", and a toast confirms the board.
7. **One red.** Save and the main button only.
8. **Boards**: a cover of three pictures (one large, two stacked), a heavy title and a count.

## Components

- **Header:** sticky white bar: the red mark and wordmark, three nav pills (the current one ink), the search pill filling the middle, a small red "Subscribe", the Saved icon with an ink count badge, the theme toggle. It never wraps: below 900px, or whenever it does not fit (`fitNav()` adds `.compact`), the links and Subscribe move into `#menu`, a side sheet. On phones the wordmark hides and the mark stays.
- **Search:** `.search` with the icon inside the pill, a clear button, and `#suggest` (popular searches as chips, four category tiles with the name over the picture). Enter searches; Escape closes.
- **Category bar:** `#catbar`, a row of chips under the header on the wall views, scrolling sideways on phones.
- **Home intro:** display headline, one lead, a red and a grey button, and a collage of five rounded pictures on a grid beside it (above it on phones).
- **Tile:** `.tile` > `.tile-media` (the picture link, the Save pill), a two-line title link, and the person (initials avatar and name). The whole picture is a link to the close-up.
- **Close-up:** one rounded card, picture on the left at its own ratio, details on the right: share icon, board select pill and red Save; category link; H1; description; three numbered notes; the person with a Follow pill. "More like this" below is another wall.
- **Board card:** `.board` with `.cover` (a 3:2 cover, one picture over two thirds and two stacked), title and "N ideas · Name".
- **Board page:** centred title, the person, a lead, the count, Share and Follow pills, section chips, then the wall.
- **Profile:** a large initials avatar, H1, role, bio, counts, Follow and Get in touch, then Ideas and Boards tabs underlined in ink.
- **Bands and cards:** `.band` (a 32px-rounded off-white panel with a heading and one red button), `.trio` with red numbered circles, `.people`.
- **Forms:** a raised card; labels above 48px fields with a 2px outline and 16px corners; choice chips (`.opt`) for checkboxes and radios; errors float under the field; one red submit; the success panel replaces the form with a red tick and repeats the details.
- **FAQ:** off-white rounded rows with a chevron that turns.
- **Toast:** an ink bar at the bottom with the saved picture, "Saved to <board>" and a View pill.
- **Footer:** off-white, rounded top corners, the wordmark and one line, two link lists, the letter signup with a pill field and a red button, the legal line.

## Do and don't

- Do keep pictures at their own ratios. Don't crop the wall to a uniform grid; uniform crops belong only to board covers, collages and category tiles.
- Do round every corner. Don't mix square and round.
- Do use red only for Save and the main action. Don't colour links, tags, badges or headings red.
- Do let the wall start on the first screen. Don't put a tall hero or long copy above it.
- Do show the Save button on hover and focus. Don't add permanent overlays, captions or icons on pictures in the wall.
- Don't use illustrations, emoji, icon fonts, gradients, glass, or text on pictures (category tiles are the one exception).

## Voice

Friendly, practical and short, like a friend who has made the thing: "Leave 30 cm between boards so a jug fits." Titles say what is in the picture ("Plum and almond tart"), not what it means. Notes give numbers, orders and the mistake to avoid. No hype ("stunning", "must-have", "aesthetic", "inspo"), no exclamation marks, no follower counts or popularity claims the brief does not supply.
