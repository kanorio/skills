# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The front page opens on a full-bleed ink hero: one huge Sora headline with a gradient second half, a white search pill, chips with badges, a glass quote card with a sparkline, and the glowing line along the bottom.
- [ ] The header is ink over the hero and turns white once the hero has scrolled away; on every other view it is white with a hairline.
- [ ] Below the hero the page is white (dark grey in dark), and everything sits in 16px hairline cards with no shadows.
- [ ] Quote rows show a round badge, the name, a grey code chip, a tabular number with a small-caps unit, and a signed green or red change.
- [ ] `data-rise` matches the subject: `bad` when a rise is bad news for the reader (prices, rents), absent when a rise is good news (scores, visitors).
- [ ] Section heads end in a chevron and link to the full list.
- [ ] Green and red mean change only; parts of a whole use the `--c1` to `--c5` palette.
- [ ] Copy leads with the number and what moved; no exclamation marks, no lorem ipsum, no investment advice.

## Charts and pictures

- [ ] The big chart has dashed guides, right-hand axis labels, dates under it, the last-point dot, a crosshair tooltip and working range pills; its colour follows the change over the range.
- [ ] Every tile and table row has a sparkline; flat series show a flat grey line.
- [ ] Chart pictures are 16:9 snapshots in one language, light and dark mixed, with clear space for the corner flag and badge; each has descriptive alt text.
- [ ] Every picture the script uses is in `IMAGES` as a full quoted path, and placeholder pictures are listed in your reply.

## Motion

- [ ] Charts draw in left to right once per render; only the live dot and the last-point ping move on their own, and both stop with reduced motion.
- [ ] Views fade in once; dialogs drop in; nothing counts up or auto-scrolls.

## Completeness and interaction

- [ ] Every link reaches a view, a section ID, a `mailto:` address or a real page; no `href="#"`.
- [ ] Search opens from the pill, `/` and Cmd or Ctrl K, finds items and articles, and says so when nothing matches.
- [ ] The table filters by chip and text, sorts by every underlined heading with `aria-sort`, and the watch stars feed the "Watching" chip.
- [ ] Every item link opens the item view with its own chart, key numbers, breakdown and related tiles (`?id=`).
- [ ] The tile rail scrolls with the arrow; the chart-card tabs and topic chips re-order and filter; reactions toggle and are remembered.
- [ ] The monthly or yearly switch changes the prices; tier links preselect the form.
- [ ] Every form validates inline, keeps the submit button still while errors appear, and shows a success state. Submit runs from the button's click, so it works in a sandboxed frame.
- [ ] Each view has exactly one `h1`.
- [ ] The sample name, city, places, people and addresses are all replaced (the validator checks the list in SKILL.md).

## Responsive

- [ ] 1440, 1024, 768 and 390 px wide in light and dark: the header never wraps, nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth`), headlines wrap cleanly.
- [ ] Under 1024px the big chart card and the list card stack; under 640px everything is one column, the chart is 220px tall and keeps three date labels.
- [ ] Wide tables and the tile rail scroll inside themselves; the first table column stays put.
- [ ] Touch targets are at least 44 x 44 px on phones.

## Accessibility

- [ ] Body and muted text meet 4.5:1 in both themes and on the ink surfaces; green and red changes also meet 4.5:1; input outlines meet 3:1.
- [ ] Focus rings are visible on white, on grey and on ink.
- [ ] Changes carry a sign, not only a colour; charts and bars have `role="img"` with a label that states the numbers.
- [ ] Search and menu are `<dialog>` elements; filters and tabs use `aria-pressed`; the current page uses `aria-current="page"`.

## Performance

- [ ] Two font families, both preloaded, `font-display: swap`; nothing loads from another host.
- [ ] Series are computed once and cached; charts redraw only the card that changed.

## Real brief

- [ ] Every number, name, date and price is from the user or marked as a placeholder and listed in your reply.
- [ ] The site says where its numbers come from and when they were last checked.
- [ ] No invented figures for real companies, products, teams or people; no real market prices without a licensed feed; no advice to buy, sell or invest.
