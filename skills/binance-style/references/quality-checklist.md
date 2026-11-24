# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page opens dark: near-black background, charcoal panels, off-white text. Light appears only after the toggle and is complete.
- [ ] The home hero leads with one huge yellow figure and two heavy white capital words, a one-line sentence, at most two laurel badges, and the email field beside a yellow button.
- [ ] Beside the hero sit two rounded panels: five data rows with right-aligned figures and green or red change, then four headlines.
- [ ] The primary action on each screen is one square yellow button with dark text; everything else is a quiet charcoal button or a text link.
- [ ] Statements use a two-tone capital headline (white, then yellow) with yellow stat figures and plain labels.
- [ ] Tables are flat: hairlines, hover fill, right-aligned tabular figures, a sparkline and a star. Tabs have the short yellow bar; chips have a filled "All".
- [ ] News covers are black with white and yellow capitals and one yellow shape.
- [ ] Green and red only mean up and down.
- [ ] Copy leads with figures and is short; no exclamation marks, no lorem ipsum.

## Pictures

- [ ] Scenes share one flat night palette with yellow as the only strong colour, 16:9, calm bottom third under the caption.
- [ ] The code card is a real code for a real link, or it is gone.
- [ ] Every picture has alt text, width and height; placeholder pictures are listed in your reply.

## Motion

- [ ] The counter counts up once and is final in the HTML; with reduced motion it does not count.
- [ ] Sections rise once; table rows flash once on sort; nothing moves by itself after that.

## Completeness and interaction

- [ ] Every link reaches a view, a section ID, a `mailto:` address or a real page; no `href="#"`.
- [ ] The table filters by tab, chip and search, sorts by each sortable column with `aria-sort`, shows a live count and an empty state with a reset, and the four mini cards' "More" buttons set the matching order.
- [ ] Stars follow and unfollow in the table and on the detail page, and the "Following" tab lists them.
- [ ] Every row opens its detail page with the right figures, chart ranges and breakdown.
- [ ] The device tabs swap the phone and the desktop window; billing switches every price and period; the sign-up preview follows the name and chips.
- [ ] Every form validates inline, keeps the submit button still while errors appear, and shows a success state. Submit runs from the button's click, so it works in a sandboxed frame.
- [ ] Help search opens matches and hides empty groups; news chips and search filter the grid.
- [ ] Each view has exactly one `h1`.
- [ ] The sample brand, artists, labels and people are all replaced (the validator checks the list in SKILL.md).

## Responsive

- [ ] 1440, 1024, 768 and 390 px wide in dark and light: the header never wraps, nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth`), the counter fits on one line.
- [ ] Under 1080px the hero stacks and the nav moves into the menu; under 640px the hero is centred and the laurels stay side by side.
- [ ] Tables and chip rows scroll inside themselves; on phones the rank column hides and names wrap.
- [ ] Touch targets are at least 40 x 40 px on phones.

## Accessibility

- [ ] Text meets 4.5:1 in both themes; yellow is never used as text on white (light uses the gold `--figure`).
- [ ] Focus rings are visible on every control.
- [ ] Filters and tabs use `aria-pressed`; the current page uses `aria-current="page"`; the sorted column has `aria-sort`; charts have a text label with their range.
- [ ] Dots and mockups are decorative (`aria-hidden`) next to the written name.

## Performance

- [ ] One font family, preloaded, `font-display: swap`; nothing loads from another host.
- [ ] Pictures are SVG or sized to their slot; a built site lazy-loads pictures below the first screen.

## Real brief

- [ ] Every figure, ranking, change, date, price, name and address is from the user or marked as a placeholder and listed in your reply.
- [ ] No invented user counts, awards, press mentions, ratings or partner logos; laurel badges carry only facts the owner gives.
- [ ] Nothing reads as a financial product: no buy or sell buttons, no returns, yields or promises; risk and legal wording is a marked placeholder when the subject is money.
