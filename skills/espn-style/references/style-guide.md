# Style guide

The look in one sentence: a cool grey page under a strip of score cells and a near-black bar with a slanted red name block, then columns of white rounded cards (link lists with small crests on the left, a feed of photo and video stories in the middle, a headline list and a small table on the right), bold sans headlines, and condensed numerals for every score, record and table.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Light is the default and follows the system setting; dark has the same structure.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | cool light grey | near-black | the page between cards |
| `--surface` | white | dark grey | every card, the score strip, inputs, the sticky team column |
| `--surface-2` (`surfaceAlt`) | off-white | lighter dark grey | hover rows, picture wells, fact tiles, division rows, the success box |
| `--text` | ink | off-white | headlines, scores of winners, table text, the selected segment |
| `--soft` | dark grey | light grey | summaries under headlines, article ledes |
| `--text-muted` | mid grey | light grey | times, bylines, labels, losing scores, table headings |
| `--border` | light grey | dark grey | hairlines between list items, card heads, table rows |
| `--field` | grey at 3:1 | grey at 3:1 | input, segmented-control and pill outlines |
| `--block` | news red | news red | the name block, the current tab underline, the live dot fill, the quote bar, the player progress |
| `--accent` | news red | light red | red as text: live clocks, the 404 number |
| `--link`, `--link-fill` | blue | light blue, mid blue | text links and outlined pills; filled pills with white text |
| `--link-soft` (`sortHighlight`) | pale blue | deep blue | the sorted table column, chosen options, the "Best view" tag |
| `--bar`, `--bar-text`, `--bar-muted` | near-black and whites | darker black | the top bar, the promo card, the footer, the menu top: dark in both themes |
| `--up`, `--down` | green, red | light green, light red | positive and negative differences, W and L results |
| `--danger`, `--ok` | red, green | light red, light green | form errors, the success bar |

Team colours are classes (`.t-gulls { --c: … }`): one mid-tone colour per team with white letters. They colour crests, avatars, the bar on top of a team page and the event banner gradient. Nothing else in the interface takes a team colour.

## Typography

Two families:

- **Libre Franklin** (body), variable weight. Everything that is reading or interface: headlines at 700 to 800 with tight line-height (1.15 to 1.3), summaries at 400, labels, buttons, tables' team names, forms. Card heads are 15px at 700; section heads (`.sec-h`) are 17px at 800 in capitals next to a crest; kickers and mini heads are 11 to 12px capitals at 700 with 0.06em tracking; meta lines are 12px.
- **Barlow Condensed** (display), 600, 700 and 700 italic. Only for names and numbers: the slanted name block (700 italic, capitals), scores in the strip and line scores, totals, table numerals with tabular figures (600), stat-leader numbers, prices, fact numbers, the promo card and pull quotes (700 italic capitals or sentence case), the 404.

Scale: page titles (h1) 28 to 36px at 800 with slight negative tracking; the lead headline (h2) 20 to 24px at 800; card headlines (h3) 16px at 700, 13px inside video cards; body 16px, article text 17px with line-height 1.65 at a 680px measure; small 13px. Headlines are sentence case, plain and specific: who did what, with the score when there is one.

## Layout, spacing and radius

- **Container:** 1240px with a 12 to 24px gutter. The front page is three columns at 220px, flexible and 300px with 16px gaps; inner pages are two (flexible and 300px). Under 1180px the left rail moves under the right one; under 900px everything is one column in the order main, right rail, left rail.
- **The strip and the bar span the full width**; the name block sits flush against the left edge of the window, not the container.
- **Rhythm:** 12px between cards in a column, 16px inside a card, 20px above the first card, 56px before the footer. Lists divide items with 1px hairlines, not gaps.
- **Radius:** 8px cards, 6px pictures and inputs, full pills for buttons, segmented controls and team pickers. Crests are shields cut with `clip-path`, avatars are circles.
- **Pictures:** 16:9 everywhere, `object-fit: cover`, rounded 6px inside cards and square-cornered inside video cards.

## Surfaces and depth

- Cards are white on the grey page with a hairline-and-1px shadow (`--shadow-card`); in dark they lose the shadow and keep a faint outline.
- Dark surfaces: the bar, the promo card, the footer and the menu top. They stay dark in both themes.
- The bar has a short shadow under it while it sticks. The menu dialog is the only thing with a deep shadow (`--shadow-overlay`).
- No gradients except the thin event banner on the lead card.

## Signature elements

Keep the first four on every page; the front page shows all of them.

1. **The score strip.** A full-width white strip of cells above the bar: status in small capitals ("Final", "Final/OT", a red live clock with a pulsing dot, or "Wed 7:30 PM"), then two rows of crest, three-letter code and condensed score. The winner is ink, the loser grey; upcoming games show records instead of scores. A "Scores" label on the left and an arrow on the right. Every cell links to that day's scores.
2. **The dark bar with the slanted name block.** A near-black bar, sticky, with the name in condensed italic capitals on a red block whose right edge is cut at an angle, flush left. Short nav links in white; the current one has a 3px red underline. Search, theme and one filled blue pill on the right.
3. **Columns of white cards.** Link lists with small icons or crests on the left, the story feed in the middle, a headline list and a compact table on the right. Each card opens with a bold head and a hairline.
4. **Condensed numerals.** Every score, record, total, rank and price is set in the condensed face with tabular figures, so columns of numbers line up.
5. **The lead card.** A thin event banner (team-colour to red gradient, spaced capitals) on top, a 16:9 picture with a round white play button and a dark duration chip, a large bold headline, one-line summary and "2h • Author"; then a smaller story beside a thumbnail, a row of video cards that scrolls sideways with an arrow, and bullet links in two columns.
6. **Line scores.** Status, periods and total in a small table; crest, team name and record per row; the winner's total in ink with a small arrow pointing at it; top performers with team-coloured initials; outlined pill buttons (Recap, Box score, Tickets).
7. **Dense standings.** Rank, crest and team name in a sticky first column, then narrow right-aligned numeric columns with underlined sortable headings; the sorted column is tinted pale blue; positive differences green, negative red; a black segmented control switches league and division.
8. **Section heads with a crest.** A crest beside a short capital heading opens a feature card.

## Components

- **Strip (`.strip`, `.games`, `.g`, `.g-st`, `.g-t`):** built from `GAMES`; scrolls sideways; the arrow (`#strip-next`) moves it by most of its width.
- **Bar (`header.bar`, `.brand`, `.block`, `.nav`, `.bar-end`):** sticky. Seven links at most; below 960px they move into the menu and a menu button appears.
- **Menu (`<dialog class="menu">`):** slides in from the left with the name block on dark, a pill search field that finds teams (by town, name, code, venue or player) and stories, and every page as a bold row with a chevron.
- **Card (`.card`, `.card-h`, `.sec-h`):** the only container. `.links`, `.heads`, `.bullets`, `.rows` are its lists.
- **Story pieces:** `.media` (16:9 with `.play` and `.dur`), `.hed`, `.lead-h`, `.dek`, `.meta`, `.kicker`, `.pair` (thumbnail beside text), `.vrow` and `.vcard` (video row), `.rows` (headline left, picture right).
- **Buttons:** `.pill` filled blue with white text, `.pill-o` outlined blue (`.sm` in game rows), `.seg` black segmented control, `.tabs` with a red underline, `.picker` of team pills, `.arrow` icon buttons.
- **Tables:** `.lines` (line score), `.stand` (standings), `.mini-t` (rail table), `.roster`, `.box` (box score). Numbers right-aligned in the condensed face.
- **Crest and avatar (`.crest`, `.av`):** a team-coloured shield with one condensed letter; initials in a team-coloured circle. Both are decorative (`aria-hidden`) next to the written name.
- **Forms:** labels above 44px inputs with 6px corners and a 3:1 grey outline that turns blue on focus. Errors float in reserved space under the field (a red line and a red inset bar on the field), so nothing moves. Option cards (`.opt`) for a radio choice. Success replaces the form with a grey box under a green bar.
- **Footer:** the dark band with the name block, one sentence, three link columns and a line of fine print.

## Do and don't

- Do put a score, a record or a time on everything that has one. Don't hide results behind a click.
- Do keep cards white and the page grey; let pictures and team colours bring colour. Don't colour card backgrounds, headlines or buttons with team colours.
- Do keep red for the name block, live clocks and the current tab; blue for links and buttons. Don't use red buttons.
- Do set every number in the condensed face with tabular figures. Don't set headlines or body text condensed.
- Do keep the strip and the bar on every page. Don't replace them with a hero banner.
- Don't add drop shadows beyond the card hairline, glass effects, rounded corners above 8px on cards, or animated pictures.

## Voice

Direct, factual and quick. Lead with the result and the name ("Calder scores 24 as the Gulls beat the Comets"), then one sentence of context. Labels are short and literal: "Final", "Top performers", "Box score", "Full table", "Show more stories". Times are relative in lists ("2h", "1d") and absolute in articles. Use the vocabulary of the sport the user runs (periods, innings, sets, legs) and keep the components.
