# Style guide

The look in one sentence: a near-black hero with one oversized geometric headline, a gradient phrase, a white search pill and a glass quote card over a glowing line, then a white page of hairline cards full of numbers: quote rows with round badges, grey code chips and green or red changes, area charts that fade to nothing, sparklines in every tile and table row, proportion bars, and chart cards with a small corner flag.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Light is the default and follows the system setting; dark has the same structure.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg`, `--surface` (`background`, `surface`) | white | near-black, a step lighter | the page; every card, table and dialog |
| `--surface-2` (`surfaceAlt`) | cool off-white | dark grey | code chips, the search pill, table heads, pill tabs, figure tiles |
| `--surface-3` (`surfaceStrong`) | light grey | mid-dark grey | the chosen pill tab, chip hover |
| `--text` | ink | off-white | headlines, names, numbers |
| `--soft` | dark grey | light grey | summaries, article text |
| `--text-muted` | mid grey | light grey | units, meta lines, axis labels, table heads |
| `--border` | hairline grey | dark hairline | card outlines and row dividers: the only separation |
| `--field` | grey at 3:1 | grey at 3:1 | input and outline-button edges, the chart crosshair |
| `--accent` | blue | light blue | links, the "See all" chevrons, focus rings, the chosen state of a reaction |
| `--ink`, `--ink-text`, `--ink-muted` | near-black and whites | darker black | the hero, the email band, primary buttons, tooltips: dark in both themes |
| `--green`, `--red` | deep green, deep red | light green, light red | gain and loss, always through `--up` and `--down` |
| `--amber` | amber | amber | the small superscript flag on a number, a watched star |
| `--c1` to `--c5` | blue, amber, violet, cyan, grey | lighter blue, grey | parts of a whole in proportion bars and legends, never gain or loss |
| `--danger`, `--ok` | red, green | light red, light green | form errors, success ticks, the live dot |

**Gain and loss.** `--up` and `--down` map to green and red. Put `data-rise="bad"` on `<html>` when a rise is bad news for the reader (prices, rents, waiting times, emissions) and a rise turns red; leave it out when a rise is good news (wages, scores, visitors, savings). Every change also carries a sign (`+`, `−` with a true minus) so colour is never the only cue. Inside `.ink` surfaces the same mapping uses the lighter pair automatically.

## Typography

Two families:

- **Sora** (display), 600 and 700. Wide and geometric. The hero headline (700, up to 84px, tracking −0.045em, line-height 1.02), page titles (700, 32 to 52px, −0.035em), section heads (600, 24 to 32px, −0.025em, followed by a chevron), card heads (600, 18px), and every big number: the quote-card value, the item price (up to 60px), tile prices, the pricing figures, the 404.
- **Rethink Sans** (body), variable 400 to 700. Everything else: reading text at 16 to 18px, names in quote rows (600), buttons (650), tables at 15px, labels, meta lines at 13 to 14px. Every number in a row, a table or a chip uses `font-variant-numeric: tabular-nums` so columns line up.

The unit after a number is the small tell: 11px, 600, capitals with 0.04em tracking, muted (`.u`: `112.4 PTS`, `4.86 USD / DOZEN`). Code chips are 11px, 700, on a grey rounded rectangle (`.code`). Headlines are sentence case, plain and specific.

## Layout, spacing and radius

- **Container:** 1320px with a 16 to 40px gutter (`--max`, `--gutter`). The hero and the header span the full width.
- **The front page grid:** a 2:1 row (the big chart card beside a list card), then three equal cards, then full-width rows: tiles, chart cards in three columns, stories in three columns, the email band. Under 1024px the 2:1 row stacks and the three cards become two plus one; under 640px everything is one column.
- **Inner pages:** a title block (`.ph`: h1 and a lead), then either a full-width table or a main column beside a 360px side column (`.two`).
- **Rhythm:** 72px between front-page sections, 24px between cards, 20px inside a card, 12px between quote rows (hairlines, not gaps).
- **Radius:** 16px cards and tiles, 12px pictures, 10px inputs and pill tabs, full pills for buttons, chips and the search field, 24px for the glass hero card, 28px for the email band. Badges and avatars are circles.

## Surfaces and depth

- Cards are white with a 1px hairline and no shadow; in dark they are a step lighter than the page with a dark hairline. Hover darkens the outline to `--field` and lifts tiles 2px.
- Ink surfaces: the hero (with a faint dot grid, a blue radial glow behind the quote card and the glowing horizon line), the email band (with a teal glow), primary buttons and tooltips. They stay dark in both themes.
- The glass card is the one translucent surface: 5% white over the hero, a 16% white hairline, a 10px backdrop blur.
- The only real shadows: the round carousel arrow, the hero search pill (a blue glow) and dialogs (`--shadow-overlay`).

## Signature elements

Keep the first five on every build; the front page shows all of them.

1. **The ink hero.** Full-bleed near-black, the header melting into it (`.top.on-ink`) and turning white once the hero scrolls away. A live pill (green pulsing dot and one fact), one huge headline whose last phrase is a blue-to-green gradient (`.grad`), one paragraph, a 60px white search pill with a key hint, quick chips with badges, and on the right a glass quote card: badge, name, code chip, a big value with its unit and change, a sparkline, three quote rows and one link. A glowing line rises across the bottom (`.horizon`).
2. **Quote rows.** A round coloured badge (letters or a line icon), the name in 600 with a grey code chip under it on the left; on the right the tabular number with its small-caps unit and the change in green or red under it. Rows are divided by hairlines.
3. **Area charts.** A 2px line in the direction colour over an area that fades from 24% to nothing, dashed horizontal guides, axis labels on the right, dates under it, a dot with a slow ping on the last value, a crosshair and an ink tooltip on hover, and a row of range pills (1M, 6M, 1Y, 5Y) that redraws it. The line colour follows the change over the chosen range.
4. **Sparklines everywhere.** Every tile and table row has a 12-week sparkline in its direction colour with a faint fill.
5. **Section heads with a chevron.** "This week ›", "Biggest movers ›": the whole head is the link to the full list.
6. **Proportion bars and two-colour progress bars.** A legend of coloured dots with percentages above a segmented bar; progress rows where a blue part and an amber part fill a grey track, with a small key.
7. **Chart cards.** A 16:9 chart picture with a hairline and 12px corners, a blue ribbon flag top-left and the item's badge bottom-left, a two-line title, two lines of summary, then "by Author / 2 days ago" and a comments count beside an outlined reaction button with a count.
8. **The tile rail.** Quote tiles in a row that scrolls sideways with snap points and a round white arrow half outside the edge.

## Components

- **Header (`.top`, `.brand`, `.mark`, `.find`, `.nav`, `.top-end`):** sticky, 64px. The search pill opens the search dialog (also `/` and Cmd or Ctrl K). Five links at most; under 1100px they move into the menu; under 768px the pill becomes an icon and the button leaves.
- **Search (`<dialog class="dlg">`, `#q`, `#results`):** quote rows for matching items, then matching articles; the biggest movers when empty; a sentence when nothing matches.
- **Card pieces:** `.card`, `.card-h`, `.cc-head` (badge beside name and value), `.cc-name`, `.cc-val`, `.cc-sub`, `.cc-foot`, `.live`.
- **Quotes:** `.quotes > li > .q` with `.q-n` (badge, name, code) and `.q-v` (number, `.u`, `.chg`). `.badge` takes its hue from `--h`; `.badge.lg` is 56px.
- **Charts:** `.plot[data-chart][data-range]` drawn by `drawChart()`; `svg.spark[data-spark]` drawn by `drawSparks()`; `.seg` range pills inside the same card.
- **Buttons and controls:** `.btn` ink pill (white on ink surfaces), `.btn-o` outlined, `.more` blue link with a chevron, `.tabs` and `.seg` grey pill tabs, `.chips` filled filter pills (the chosen one inverts), `.star` watch toggle, `.useful` reaction button.
- **Tables:** `.tbl-wrap` scrolls sideways inside a 16px outline; `.tbl` with a sticky first column, right-aligned numbers, grey head, sortable headings (`.sort` with an arrow and `aria-sort`), a sparkline column and a star column.
- **Forms:** labels above 48px fields with 10px corners and a 3:1 outline that turns blue with a soft ring on focus. Errors float in reserved space under the field, so nothing moves. Success replaces the form with a grey box and a green tick.
- **Pricing:** three `.tier` cards; the chosen one has a 2px ink outline and an ink tag; prices in Sora 700 with a muted period; ticks drawn as masks; a monthly or yearly `.seg`.
- **Footer (`.foot`):** white, a hairline above, the name with one sentence, three link columns, one line of fine print.

## Do and don't

- Do put a number, a unit and a change on everything that has one. Don't round away the decimals the data really has.
- Do keep the page white and let the numbers, badges and chart colours bring colour. Don't colour card backgrounds or headlines.
- Do keep green and red for change only. Don't use them for buttons, links or categories; parts of a whole use `--c1` to `--c5`.
- Do keep the hero ink in both themes. Don't put a photograph behind it; the glowing line and the dot grid are the picture.
- Do set big numbers in Sora and table numbers in tabular figures. Don't set reading text in Sora.
- Don't add drop shadows to cards, gradients beyond the hero phrase and the glows, or animated counters.

## Voice

Plain, factual and short. Lead with the number and what moved ("Eggs rise for a third week as two shops run short"), then one sentence of context. Labels are literal: "This week", "Biggest movers", "Key numbers", "See all 20 prices", "1 week", "Checked at". Times are relative in lists ("3 hours ago") and absolute in articles. Say where a number comes from and when it was last checked. Never write advice about what to buy, sell or invest in.
