# Style guide

The look in one sentence: a near-black dashboard where one huge yellow number and two or three heavy white capital words carry the first screen, rounded charcoal panels beside it hold a live table and a list of headlines, and everything below is figures, small tables and square yellow buttons.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Dark is the default and does not follow the system setting; light appears only after the visitor picks it with the toggle, and has the same structure.

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--bg` (`background`) | near-black blue-grey | white | the page, inputs, the inside of the phone |
| `--surface` | charcoal | off-white | panels, the closing band, the plan cards, hover rows in tables |
| `--surface-2` (`surface2`) | lighter charcoal | light grey | the quiet button, the chosen chip, tags, the phone frame, bar tracks |
| `--text` | off-white | ink | headlines, figures in tables, body |
| `--text-muted` | grey | mid grey | labels, artist names, column heads, captions, footer links |
| `--border` | dark hairline | light hairline | outlined mini cards, square icon buttons, table rules, inputs |
| `--line` | transparent | light hairline | panel outlines; panels only need them on white |
| `--accent` | signal yellow | the same yellow | every filled primary button, the tab underline, the "New" tag, chart lines and bars |
| `--accent-text` | near-black | near-black | text on yellow, in both themes |
| `--figure` (`figure`) | signal yellow | deep gold | yellow as text: the counter, the second line of a two-tone headline, big figures, the wordmark |
| `--hover` | signal yellow | darker gold | link and nav hover, the current nav item, text links |
| `--up`, `--down` | green, red | darker green, darker red | rises and falls, sparklines, change chips |
| `--cover` (`cover`) | almost black | almost black | typographic news covers and picture wells; dark in both themes |

Yellow on white fails as text, which is why light swaps `--figure` and `--hover` to gold while `--accent` (always a fill with dark text on it) stays the same yellow. Keep that split when you change the brand colour.

Track dots take one hue each (`style="--h:210"`) and turn it into a two-stop gradient circle with the first letter. Nothing else in the interface takes those hues.

## Typography

One family, **Sora**, variable weight from 100 to 800 (the template uses 400 to 800).

- **Display** (`.display`): 800, capitals, line-height 1.04, -0.02em tracking, `clamp(2.5rem, 5.6vw, 5rem)`. Each line is its own `<span>`: a figure line in `--figure`, then one or two word lines in `--text`, or two word lines with the second in `--figure`. Use it for the hero, the "counted in the open" statement, the about headline and the 404, nowhere else.
- **Headings:** h1 `clamp(2rem, 4vw, 3.5rem)` at 700, h2 `clamp(1.625rem, 2.9vw, 2.625rem)` at 700, h3 19px at 600, panel heads 16px at 600. Sentence case.
- **Figures:** every number that is read across rows uses `font-variant-numeric: tabular-nums` (`.num`, tables, `.stats`). Stat figures are 700 in `--figure`; the plays figure on a detail page is 800.
- **Body:** 16px at 400, line-height 1.6; leads 17 to 20px; small 13px for captions, counts and table heads.

## Layout, spacing and radius

- **Container:** 1200px with a 16 to 48px gutter (`.wrap`). The header spans the full window with 24px side padding, like an app bar.
- **Hero:** two columns, the copy on the left and a 510px column of panels on the right, 32 to 80px apart; one column under 1080px, centred under 640px.
- **Rhythm:** sections are 64 to 120px apart (`--sec`); panels stack with 16px between them and 24px inside; table rows are 14px tall padding with no zebra stripes, only a hover fill.
- **Radius:** 8px controls and buttons (6px for the small header buttons and chips), 20px panels and cards, 14px pictures and covers, full circles for dots and the success mark.
- **Grids:** four mini cards in a row on the charts page (two under 1080px, one under 640px); three pictures or three cards in a row; tables scroll inside their own box, never the page.

## Surfaces and depth

- Panels are flat charcoal on the near-black page with no shadow; on white they become off-white with a hairline and a soft shadow (`--shadow-card`).
- Mini cards are outlined, not filled, so the summary row reads lighter than the main panels.
- The phone and the desktop window are the only things with a deep shadow (`--shadow-pop`).
- The closing band is one step lighter than the page. There are no gradients except the area under a chart line and the dots.

## Signature elements

Keep the first four on every home page; the template shows all of them.

1. **The counter headline.** A huge yellow number with tabular figures, then two short capital words in white ("482,906,310 / Plays / Counted"), a one-line sentence under it and two laurel badges in yellow. The number counts up once on load and is already final in the HTML.
2. **Data panels beside the headline.** A rounded charcoal panel with a small head and a "View all" link, holding five rows of dot, name, muted second name, a right-aligned figure and a green or red change; under it a second panel with four headlines as plain links.
3. **Square yellow buttons.** One filled yellow button per screen for the main action, dark text on it, 8px corners; everything else is a charcoal quiet button or a text link. An email field and the yellow button sit side by side under the headline.
4. **Figures in yellow.** Statements pair a two-tone capital headline (white line, yellow line) with stat figures in yellow and a plain label under each.
5. **Market-style tables.** Big text tabs with a muted second and third tab, four outlined mini cards (top, new, climbers, drops), text tabs with a short yellow bar under the current one, flat chips with a filled "All", then a table with right-aligned tabular figures, coloured change, a 7-day sparkline and a star.
6. **App mockups.** A CSS phone with a search field, one big figure and a yellow chip, two small cards (a sparkline, a gauge) and a list with coloured change chips; "Phone" and "Desktop" tabs with a yellow underline swap it for a browser window; a code card and three platform icons beside it.
7. **The numbered questions.** Each question opens with its number in a small outlined square and ends with a plus that turns into a cross.
8. **Typographic covers.** News covers are black panels with a small yellow wordmark at the top, two words in white capitals over one in yellow, and a yellow disc, record grooves or stripes bleeding off the right edge.

## Components

- **Header (`.site-header`, `.hdr`, `.logo`, `.nav`, `.hdr-end`):** sticky, the wordmark in yellow capitals beside the mark, five nav links at most, then search, theme, a quiet "Log in" and a yellow "Sign up". Under 1080px the links move into the menu (`#menu`, in the flow under the bar); under 560px the two buttons do too.
- **Panel (`.panel`, `.panel-head`, `.rows`, `.news`):** the container for every data block. `.rows` is dot, name, figure and change in a grid; `.news` is a list of headline links.
- **Laurel badge (`.laurels`):** two mirrored `#laurel` symbols around a bold figure and a small label. Only for facts the owner gives.
- **Statement (`.duo`, `.display`, `.big-fig`, `.stats`):** two columns, headline and lead on the left, a dated line, one big figure and two stats on the right.
- **Scenes (`.scenes`, `.scene`, `.cap`):** three 16:9 pictures with a dark gradient caption and a yellow round arrow.
- **Device (`.device`, `.phone`, `.ph-*`, `.desk`, `.u-tabs`):** see signature 6. Panes are `[data-pane]` inside the element named by `data-tabs`.
- **Charts (`.big-tabs`, `.minis`, `.toolbar`, `.cat-tabs`, `.chips`, `.tbl`, `.spark`, `.star`):** table rows carry the data in `data-*` attributes; the script builds the sparklines, stars, mini cards and the desktop mockup from them.
- **Detail (`.crumbs`, `.t-head`, `.t-figs`, `.t-grid`, `.chart`, `.bars`):** a big dot, the title, a quiet follow button; a row of labelled figures; an area chart with 7D, 30D and 90D chips; a panel of horizontal yellow bars.
- **News (`.feat`, `.cover`, `.cards`, `.card`, `.tag`):** a featured story with a cover and a large headline, topic chips and a three-column grid.
- **Plans (`.billing`, `.plans`, `.plan.is-pick`, `.ticks`, `.compare`):** a monthly or yearly switch, three cards with the picked one outlined in yellow and a "Most picked" tag, then a comparison table.
- **Forms (`.field`, `.input`, `.error`, `.check`, `.pick`, `.ok`):** labels above 48px fields with 8px corners that turn yellow on focus; errors float in reserved space under the field, so nothing moves; genre choices are outlined chips that fill with a yellow tint; the success state replaces the form with a yellow check in a circle.
- **Band (`.band`):** one centred sentence and one yellow button, one step lighter than the page.
- **Footer (`.site-footer`, `.f-grid`, `.f-pref`, `.fine`):** the wordmark with language and theme preferences, four link columns and one paragraph of fine print about how the figures are made.

## Do and don't

- Do lead with one real number. Don't stack several counters in the hero.
- Do keep yellow for fills, figures and the current tab. Don't use yellow text on white, yellow headlines in body copy or yellow panels.
- Do use green and red only for rises and falls. Don't use them for buttons, success or errors beyond the error text.
- Do right-align every figure with tabular numbers, and keep tables flat with hairlines. Don't add zebra stripes, card shadows in dark or rounded table rows.
- Do keep panels charcoal on near-black and the page dark by default. Don't add glows, glass or neon.
- Don't present anything as a financial product: no prices to buy at, no returns, no "trade now". The style shows data, it does not sell it as an investment.

## Voice

Confident, numeric and short. Lead with the figure ("482,906,310 plays counted"), then one plain sentence. Labels are literal: "Top tracks this week", "View all", "Biggest climbers", "Change", "Last 7 days", "Most picked". Headlines in the news list state the fact and the number ("Neon Orchard posts the biggest climb of the year: up 28.6% in a week"). Fine print says how the figures are made and what they are not.
