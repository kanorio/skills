# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] A white score strip sits above a near-black bar; the bar carries the name in condensed italic capitals on a red block cut at an angle, flush left.
- [ ] The page is cool grey and everything sits in white 8px cards; in dark the cards are dark grey with a faint outline.
- [ ] The front page has the three columns (link lists, the feed, headlines and a table) and the lead card with the banner, a 16:9 picture, a bold headline, a "2h • Author" line, a second story, the video row and bullets.
- [ ] Every score, record, rank, price and table number is in the condensed face with tabular figures; headlines and body text are not condensed.
- [ ] Red is only the name block, live clocks, the current underline and the quote bar; buttons and links are blue.
- [ ] Line scores show the winner's total in ink with the small arrow; standings tint the sorted column pale blue and colour differences green and red.
- [ ] Copy leads with results and names; no exclamation marks, no lorem ipsum.

## Pictures

- [ ] One courtside action language across every picture, 16:9, subjects in the middle third, no logos.
- [ ] Videos carry the round play button and the duration chip.
- [ ] The lead and the hero have real alt text; card pictures beside their headline are `alt=""`.
- [ ] Every picture the script uses is in `IMAGES` as a full quoted path, and placeholder pictures are listed in your reply.

## Motion

- [ ] Only the live dot moves on its own; with reduced motion it is still and the arrows jump.
- [ ] Views fade in once; the menu slides in; nothing counts up, zooms or auto-scrolls.

## Completeness and interaction

- [ ] Every link reaches a view, a section ID, a `mailto:` address or a real page; no `href="#"`.
- [ ] The strip is built from `GAMES` and every cell opens that day on the scores page; the day buttons and arrows switch days, and an empty day says so.
- [ ] Standings sort by each underlined column and switch between league and division, with ranks and games behind recomputed.
- [ ] The team picker, roster, schedule, team news and Follow all follow `?id=`.
- [ ] News tabs filter and "Show more stories" adds rows; the home feed does too.
- [ ] The ticket toggle switches prices, the tier links preselect the form, the sample player plays and pauses.
- [ ] Search in the menu finds teams by town, code or player and stories by headline, and says so when nothing matches.
- [ ] Every form validates inline, keeps the submit button still while errors appear, and shows a success state. Submit runs from the button's click, so it works in a sandboxed frame.
- [ ] Each view has exactly one `h1`; the front page's is visually hidden.
- [ ] The sample league, teams, towns, players and addresses are all replaced (the validator checks the list in SKILL.md).

## Responsive

- [ ] 1440, 1024, 768 and 390 px wide in light and dark: the bar never wraps, nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth`), headlines wrap cleanly.
- [ ] Under 1180px the left rail moves under the right; under 900px it is one column (main, right rail, left rail).
- [ ] The strip, the video row, the date row and wide tables scroll inside themselves; the standings keep the team column sticky.
- [ ] Touch targets are at least 44 x 44 px on phones.

## Accessibility

- [ ] Body and muted text meet 4.5:1 in both themes; outlines of inputs and pills meet 3:1.
- [ ] Focus rings are visible on every control, on white, on grey and on the dark bar.
- [ ] The menu is a `<dialog>` with a labelled search field; filters use `aria-pressed`; the current page and team use `aria-current="page"`; the sorted column has `aria-sort`.
- [ ] Crests and initials are decorative next to the written name; every table has a caption; live games say "in progress" in the caption, not only with red.

## Performance

- [ ] Two font families, the two main files preloaded, `font-display: swap`; nothing loads from another host.
- [ ] Pictures are sized to their slot; a built site lazy-loads pictures below the first screen.

## Real brief

- [ ] Every result, score, statistic, name, time, price and address is from the user or marked as a placeholder and listed in your reply.
- [ ] No invented results for real teams or real people, no fake attendance or awards, no real team badges the user does not own.
- [ ] A live clock appears only where a live feed exists.
