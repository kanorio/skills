# Style guide

The look in one sentence: a white page split in two, a calm sign-up column that stays put on one side and two columns of tall rounded photo cards scrolling on the other, each card with a big white line at the top and a dark pill at the bottom, under a header of small icons with labels, with lemon yellow for the one thing to do.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | white | near-black | the page; the photographs carry the colour |
| `--surface` / `--surface-hover` | light grey / a step darker | dark grey / a step lighter | the search pill, filled fields, round icon buttons, chips |
| `--surface-2` | off-white | a step above the page | soft cards: week rows, crew cards, stats, success cards |
| `--raised` | white | a step above the page | floating panels: the price card, the contact card, the menu |
| `--text` / `--text-muted` | ink / grey | white / soft grey | headings and body / leads, meta, labels |
| `--border` | pale grey | dark grey | hairlines: under the header and beside the join column, tabs, accordions |
| `--accent` / `--accent-text` / `--accent-hover` | lemon / black / a deeper lemon | the same | the one main call to action per screen, page badges, the banner, the chosen menu tile, a held product |
| `--ink` / `--ink-text` | black / white | white / black | secondary pills (Book a party, Save my spot), week numbers, chip icons, the toast |
| `--action` / `--action-text` | blue / white | light blue / black | form submits and inline text links only |
| `--glass` | black at 74% | the same | dark pills and the caption strip over photographs |
| `--bar` | black | deeper black | the footer bar, in both themes |
| `--error`, `--success` | red, green | lighter red, lighter green | field errors; ticks in lists |
| `--av-*` | four mid-tone hues | the same | avatar circles behind initials |

Yellow is loud, so it is rationed: one yellow button per screen (Join Friday in the header counts), plus the round badges next to page titles and one banner. Blue only ever means "send this form" or "this is a link". Everything else is white, grey and black, so the photographs can be as colourful as they like.

## Typography

- One family: **Albert Sans**, a friendly geometric sans, variable from 100 to 900. No second family.
- Display (`.display`) 850, letter-spacing -0.035em, line-height 1: the one huge centred line on home and the 404. H1 800 at -0.015em; H2 800; H3 750. Sentence case, `text-wrap: balance`.
- Story card lines are the loudest type after the display line: 800, white, sized by the card's own width (`7.4cqi`, 20 to 32px), two or three lines.
- Body 16px at 400, line-height 1.55. Leads 17px in the muted colour.
- Small things are bold: nav labels 12px at 650 (800 when current), pills 15px at 700, chips 14px at 700.
- Labels above link lists (`.label`) are 13px, 800, uppercase with 0.08em tracking, in the muted colour. This is the only uppercase in the style, with the date chips.

## Spacing, layout and radius

- Header 72px (60px on phones), white, a hairline below. Pages sit in a 1280px column with a 16 to 32px gutter.
- Home splits at 41% (at least 380px): the join column on the left with its content centred vertically and sticky under the header, a hairline, then the story cards in two columns with 16px between them. Below 900px the split stacks: the cards come first, the join column follows.
- Story cards are 4:7. Lens tiles in Stories are 3:5. Night and product photos are 4:5. The viewer frame is 9:16.
- Generous space around the one display line (72 to 140px above it); tighter elsewhere (28 to 36px between blocks).
- Radius: 20px on story cards, photos and cards; 16px on lens tiles; 10px on fields; 28px on panels and the menu; full pills on every button, chip and filter; full circles on avatars, badges and icon buttons.

## Surfaces and depth

- Flat. Photos have no border and no shadow; the rounded corner is the frame.
- Only floating things get a shadow: the price and contact panels (`--shadow-card`), the menu and the toast (`--shadow-overlay`). In dark mode the panels sit on `--raised`.
- Fields are filled grey with no outline; focus adds a 1.5px ink outline and turns the fill white.
- Text over photos always sits on a scrim (the top gradient of a story card) or on `--glass` (dark pills, the caption strip).

## Signature elements

These make the style recognizable. Home uses all of them; every other view keeps at least four.

1. **The split home.** A sign-up column that stays still beside two columns of tall story cards that scroll. The column is calm and white: one heading, one line, filled fields, a blue pill.
2. **The story card.** A tall 4:7 photograph with rounded corners, a big white line at the top over a dark gradient, and one dark glass pill at the bottom centre. The whole card is the link; on hover the photo grows a little and the pill turns white.
3. **Icon-over-label navigation** in the middle of the header: 26px line icons that fill solid when current, 12px labels, and a small blue "NEW" tag on one item.
4. **Pills everywhere on the right of the header:** a grey round theme button, a grey round grid button for every page, a black pill, and the lemon pill.
5. **Outline filter pills**, centred above a grid; the chosen one gets a thicker outline, not a fill.
6. **Round yellow badges** with a black line icon beside every page title.
7. **The lens wall** in Stories: tall tiles with a round avatar overlapping the bottom edge, a bold title and a name, all centred.
8. **The story viewer:** segment bars across the top, the author on the photo, a full-width dark caption strip two thirds down, round actions beside it.
9. **One huge centred line** ("Roll with us.") between the cards and the directory, and a **directory of links** in three columns under small uppercase labels.
10. **The black footer bar**, with a one-line safety note and a yellow underlined link.

## Components

- **Header:** `.site-header` > `.header-inner`, a three-column grid: `.h-left` (the mark, the `.search` pill), `.nav` (icon over label), `.h-right` (`#theme-toggle`, `#menu-open`, an ink pill hidden below 1180px, the yellow pill). It never wraps: below 940px, or whenever it does not fit (`fitNav()` adds `.compact`), the nav hides and lives in the menu; below 600px the search pill moves into the menu too.
- **Menu:** `#menu`, a rounded `<dialog>` under the header's right edge: a title, a close button, search on phones, then a 3-column grid of round icon tiles for every page. The current page's circle turns yellow.
- **Join column:** `.join` > `.join-inner` (sticky, centred): H1, `.lead`, the form (filled fields, an email or phone swap link in blue, a select, a full-width blue submit), a fine-print line. The success card replaces the form.
- **Story card:** `a.story` > `img`, `h3`, `span.btn.glass`.
- **Display block:** `.big` with `.display`, a muted paragraph and a row of a yellow pill and an outline pill.
- **Banner:** `a.banner`, a lemon bar with a 2px black border and 18px corners: an icon in a white rounded box, a bold line and a line, and a white pill at the end.
- **Directory:** `.directory` with an H2, then `.label` + `ul.cols` (three columns, two on phones) per group, and a "See every …" link with a chevron.
- **Page head:** `.page-head`: `.badge` (68px yellow circle, black icon), H1 and a muted line.
- **Filter pills:** `.pills[data-filter]` > `button.pill-o[data-value][aria-pressed]`, centred; a live count below; an empty state with a reset link.
- **Night card:** `.night`: a 4:5 photo with a white uppercase date chip, H3, a muted meta line, one sentence, an ink "Save my spot" pill that turns yellow and says "Spot saved".
- **Lens tile:** `a.lens`: `.media` (3:5), `.av` overlapping by 30px with a ring in the page colour, a bold title and a muted name.
- **Viewer:** `.frame` (9:16): `.bars`, `.frame-top` (avatar, name, date, a glass pause button), `.caption`, two invisible `.tap` halves; `.actions` beside it (up, down, like with a count, share); `.side` with the author, H1, text, two `.chip`s (an ink square icon, a bold line, a small label) and underlined tabs (Snaps, Up next).
- **Course:** level pills as tabs, `.weeks` rows (an ink numbered circle, a bold line, a muted line), and a `.panel` with a big price, ticks and the booking form.
- **Product:** a large 4:5 photo, H1, price, text, size pills as a radio group, a yellow "Hold at the door" pill and an outline pill, then an accordion with plus signs that turn into crosses.
- **Crew:** `.person` cards with an 88px avatar in a yellow ring.
- **Forms:** labels above filled 46px fields, errors floating under the field in reserved space, one blue submit, a short "Sending…" state, then `.done`: a yellow tick circle, a heading with the person's name and what happens next, and a grey pill to start again.
- **Footer:** `.site-footer`: `.safety` (an icon, a sentence, a yellow underlined link) and `.foot` (links, the copyright, a round back-to-top button).
- **Toast:** an ink pill at the bottom with a yellow tick.

## Do and don't

- Do keep story cards tall (4:7) and in two columns beside the join column on wide screens. Don't turn them into a short grid or a carousel.
- Do put one short, big line at the top of every story card and one pill at the bottom. Don't add body copy, prices or icons to a story card.
- Do keep the join column calm: white, one heading, one line, the form. Don't put photos or colour in it.
- Do use yellow for one main action per screen and for badges. Don't use it for text, links or large backgrounds (the banner is the one exception).
- Do use blue only for submits and links. Don't make a blue secondary button.
- Do keep icons as simple 2px line drawings that fill when current. Don't use emoji, icon fonts, mascots or cartoon characters.
- Don't build fake sign-in screens: the side column asks for something the visitor wants (a spot, a guest list, a booking), never a password.

## Voice

Short, warm and in the second person, like a friend inviting you out: "Friday is skate night", "Never skated? Four Sundays and you're rolling." Story card lines are full sentences with a full stop, eight words or fewer when possible. Buttons are two or three words that say what happens ("See the nights", "Save my spot"). Practical details are exact: times, sizes, what is included. No hype, no exclamation marks, no follower or view counts the brief does not give.
