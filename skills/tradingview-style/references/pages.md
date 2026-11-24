# Pages and sections

Every view in `assets/template.html` is an element with `data-view="name"`, reached by `#/name` links (options after `?`, for example `#/item?id=eggs`, `#/prices?cat=food&sort=w`; `at=` scrolls to an ID inside the view). In a framework project each view becomes a real route, and items, series and articles become typed data.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop blocks the brief cannot fill. This style suits anyone whose content is numbers that change over time and who wants readers to compare them.

| Site | Views | Front page, in order |
|---|---|---|
| Price or cost-of-living tracker (the template) | home, prices, item, charts, chart, report, support, about, contact, privacy, 404 | ink hero with the index card; this week (big chart and indexes); three cards (shares, a category, a breakdown); movers; chart cards; stories; email band |
| Research or data newsroom | home, charts (as articles), chart, prices (as datasets or indicators), item (as one indicator), support (as membership), about, contact, privacy, 404 | hero with the latest headline figure; this week; chart cards first, then stories; the email band |
| Sports or esports stats | home, prices (as a leaderboard of players or teams), item (as a player or team page), charts (as analysis), chart, about, contact, privacy, 404 | hero with the current leader; big chart of a season metric; indexes as league tables; movers as risers and fallers; stories |
| Product price comparison | home, prices (as products with the lowest price), item (as one product with prices by shop), charts (as buying guides), chart, report (as "tell us a price"), about, contact, privacy, 404 | hero with a search pill; movers as price drops; the by-place table becomes "by shop" |
| Local housing, transport or air-quality observatory | home, prices (as indicators), item, charts, chart, report (as a reading or a complaint), support, about, contact, privacy, 404 | hero with one headline index; this week; three cards by district; stories |
| Personal-finance or data-literacy course site | home, charts (as lessons), chart, prices (as a glossary of example series), support (as course plans), about, contact, privacy, 404 | hero with a sample chart; chart cards as lessons; FAQ on about. Example series are fictional and labelled so |

Not for live trading, brokerage or investment products: there is no order entry, and real market prices need a licensed data feed.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `header.top`, `.on-ink`, `.brand`, `.mark`, `.find` (`data-search`), `.nav`, `aria-current="page"`, `.top-end`, `#theme-toggle`, `#menu-open` | Five links at most and one ink button. It never wraps at 1440, 1024 or 768; under 1100 the links move into the menu. `.on-ink` is set by the script only while the home hero is under the header. |
| Search | `#search` (`<dialog class="dlg">`), `#q`, `#q-status`, `#results` | Matches items by name, code, category and unit, and articles by title and summary. Opens from any `[data-search]`, `/` or Cmd or Ctrl K. |
| Menu | `#menu` (`<dialog class="menu">`), `.menu-nav` | Every page as a large row with a chevron, then the button. |
| Hero | `.hero.ink`, `.hero-in`, `.pill-live.live`, `.hero-h` with `.grad`, `.hero-p`, `.hero-find`, `.hero-chips`, `.hero-card`, `.horizon` | One h1 of 4 to 9 words; the gradient phrase is its second half. Two to five chips. The card shows one headline number with a 1-year sparkline and three rows. |
| This week | `.sec`, `.sec-head`, `.sec-h`, `.g-sum`, `.plot[data-chart="i:basket"]`, `.seg [data-range]`, `[data-range-note]` | The big chart card and a list card of five to seven quote rows. |
| Three cards | `.g-3`, `.legend`, `.share`, `.bars`, `.bar`, `.key`, a small `.plot` | Shares of a whole, a category with a mini chart (no axis labels), a breakdown with two-colour bars. |
| Movers | `#movers` (`.tiles`), `.tile`, `.tile-v`, `.nudge[data-nudge]` | Built from `ITEMS`: the ten biggest weekly changes. Four tiles per view on desktop. |
| Chart cards | `#ideas-home`, `#ideas-all`, `.idea`, `.idea-img`, `.corner`, `.by`, `.acts`, `.cmt`, `.useful[data-useful]`, `[data-sort-ideas]`, `[data-order]`, `[data-topic]` | Three on the front page; the charts view lists all with order tabs and topic chips. Reactions are remembered with the `store` wrapper. |
| Stories | `.stories` | Six to nine headlines with a small badge, a relative time and a desk name. |
| Email band | `.band.ink#newsletter`, `[data-form="newsletter"]` | One line, one sentence, one field. |
| Prices table | `.chips [data-cat]`, `#pq`, `#p-count`, `#ptable`, `#prows`, `[data-sort]`, `[data-watch]`, `#watch-n`, `#p-empty`, `.note` | Rows from `ITEMS`. `?cat=` picks the category, `?sort=w` sorts by the weekly change. "Watching" lists starred rows. Explain every flag and colour in `.note`. |
| Item | `.crumbs`, `.it-head`, `#it-badge`, `#it-name`, `#it-code`, `#it-places`, `#it-watch`, `#it-report`, `.it-price`, `#it-price`, `#it-unit`, `#it-chg`, `#it-plot`, `#it-stats`, `#it-areas`, `#related` | `?id=` picks the item (the first one without it). Key numbers come from the series; the breakdown table shows each place against the middle value, with "Lowest" on the cheapest. |
| Article | `.art`, `.byline`, `.av`, `figure`, `.prose`, `.embed`, `.figs`, `blockquote`, `.art-foot` | One chart picture, short paragraphs, a live quote row (`.embed`) linking to the item, three figure tiles, one quote, a reaction button. |
| Report form | `[data-form="report"]`, `#r-item`, `#r-price`, `#r-shop`, `#r-area`, `#r-date`, `.steps` | `?item=` preselects the item. The date cannot be in the future. |
| Support | `[data-bill]`, `.tiers`, `.tier.best`, `.price[data-m][data-y]`, `[data-per]`, `.ticks`, `#join`, `[data-form="signup"]`, `#s-tier` | `?tier=` preselects the level and `at=join` scrolls to the form. |
| About | `.facts`, `#method`, `.legend`, `.share`, `.people`, `#faq` (`.faq details`) | Four facts, how the numbers are made, the people, three to six questions. |
| Contact | `[data-form="contact"]`, `#c-topic`, `.ways` | `?topic=` preselects the topic (`correction`, `data`, `press`, `other`). |
| Privacy, 404 | `.legal`, `.prose`, `.nf` | Plain prose; the 404 offers search and the full list. |
| Footer | `.foot`, `.foot-in`, `.fine` | The name, one sentence, three link columns, one line of fine print saying where the numbers come from. |

## Data and the script

The repeated parts are data near the top of the script, turned into markup by small functions (`badge`, `nameCell`, `tile`, `priceRow`, `ideaCard`, `chg`):

- `ITEMS`: id → name, code, category, unit, current value, 1-week %, 1-year %, % over the four years before, how much the line wiggles, how many places were checked, badge hue, badge letters, whether the value moves in steps (fares, tariffs), whether readers reported it.
- `INDEXES`: composite series for the hero and the big chart (`i:<id>` keys).
- `AREAS`: the places in the breakdown table and their level against the middle value.
- `IDEAS`: the chart articles: id, title, summary, author, topic, picture key, days ago, comments, reactions, editors' pick order, related item.
- `IMAGES`: every picture the script uses, as a full quoted path with its alt text, so `scripts/inline.mjs` can embed it. Never build a path from a variable.
- `daily(key)`: five years of daily values per series. In the template they are generated from seeded noise that passes exactly through the numbers in the data (today, a week ago, a year ago, five years ago), so every view agrees. **Replace it with the user's real series** (an array per key, or a fetch in a deployed site); `slice()`, `drawChart()` and `drawSparks()` only need an array of values and dates.

The first screen of every view is written in the HTML so it reads without JavaScript (the hero, the indexes, the three cards, the first chart cards and stories, the first table rows, the eggs item page, the article). Blocks marked `.js-only` are hidden when the script does not run.

## Real content

- Every number must come from the user or be clearly fictional. Keep a line in the footer or the table note that says where the numbers come from and when they were last checked.
- Never invent prices, statistics or results for real companies, products, teams or people, and never show real market prices without a licensed feed.
- Write no advice about buying, selling or investing; report what changed and why.
- Relative times ("3 hours ago") should be generated from each item's date in a built site, not hard-coded.
