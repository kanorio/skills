# Pages and sections

Every view in `assets/template.html` is an element with `data-view="name"`, reached by `#/name` links (options after `?`, for example `#/section?c=local`). In a framework project each view becomes a real route, and stories, people and media become typed data.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop blocks the brief cannot fill. This style suits anyone who publishes often, dates everything and sometimes has to report as things happen.

| Site | Views | Front page, in order |
|---|---|---|
| Local or regional news (the template) | home, section, article, live, watch, author, newsletters, about, contact, privacy, 404 | three-column front, live strip, "Across the valley" cards, features + most read, watch band, text-only row, newsletter promo |
| Trade or industry publication | home, section (as beats: markets, people, policy), article, live (for conferences and results days), author, newsletters, about, contact, privacy, 404 | three-column front, cards by beat, features + most read, newsletter promo; the watch band only if there is video |
| School, university or community paper | home, section (as desks: campus, sport, arts, opinion), article, author, newsletters, about, contact, privacy, 404 | three-column front, cards, features + most read, text-only row, newsletter promo; live for election nights and match days |
| Brand or company newsroom | home, section (as press releases, stories, media), article, live (for launches), watch (as media library), about (with press contacts), contact, privacy, 404 | three-column front with the latest announcement as the lead, cards, watch band, newsletter promo |
| Newsletter or single-topic publication | home, article, section (as archive), author, newsletters, about, privacy, 404 | lead + text stack (no left column), most read, newsletter promo moved up under the front |
| Event or results coverage | live as the home view, article, watch, about, 404 | live header, summary, feed; link the rest from the useful-links rail |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hdr`, `#menu-open`, `.brand`, `.plate`, `.dot`, `.hdr-end`, `#theme-toggle` | Sticky. The wordmark plate holds one word of four to eight letters; longer names drop to the plate plus a smaller word, never a second line. |
| Section row | `.nav`, `.nav .sep`, `aria-current="page"` | Five to ten short links, then a divider, then "Watch" and "Live". The router underlines the current one. It never wraps; it scrolls sideways on narrow screens. |
| Menu | `#menu` (`<dialog class="menu">`), `#q`, `#results`, `#q-status`, `#q-empty`, `.menu-sections`, `.menu-links` | Search filters the `STORIES` data by headline, summary, section and town; the latest five show when the field is empty. |
| Section head | `.sec-head` with an `h2` (and a chevron link) | Opens every block: 2px rule, capital label. A count or a "more" link may sit at the right end. |
| Front grid | `.top-grid`, `.lead`, `.col-left`, `.h-sm`, `.col-right.stack` | Lead first in the HTML (it is also first on phones). Two picture cards left; three or four text stories right, a live one first when there is coverage. The visually hidden `h1` names the site. |
| Live strip | `.ticker` | The newest three live updates: red time, serif headline, red line on the left. Remove the block when nothing is live. |
| Card rows | `.cards4` (`data-list="valley"`, `"watch-home"`, `"also"`), `.row5` (`data-list="more"`) | Four picture cards, or five text-only headlines. Built from the data by the script. |
| Features and most read | `.split`, `.duo`, `.most` (`data-list="most"`) | Two large cards beside five numbered headlines. The same list feeds the article rail. |
| Dark band | `.band`, `.band-block` | Full width, dark in both themes. Any component inside it adapts. |
| Newsletter promo | `.promo`, `.inline-form`, `[data-form="newsletter"]`, `[data-success="newsletter"]` | One newsletter, one field, one button. |
| Section page | `#sec-title`, `#sec-dek`, `.subnav`, `[data-town]`, `.sec-lead` (`.lead-text`, `.media`, `.lead-side`), `[data-list="sec-cards"]`, `#sec-count`, `[data-empty]`, `#more` | `?c=` picks the section from `SECTIONS`; the sub-row filters by town (`TOWNS`); the first story with a picture leads, the second sits beside it; eight cards, then "Show more stories". |
| Article | `.art`, `.art-head`, `.kicker`, `.art-title`, `.art-bar`, `[data-save]`, `.byline`, `.avatar`, `.art-hero`, `.credit`, `.art-body`, `.prose`, `.quote`, `.related`, `.topics`, `.topic`, `.rail` | One template for every story. Save is remembered with the `store` wrapper. |
| Live page | `.live-hero`, `.live-title`, `.summary`, `.feed-head`, `#key-only`, `#new-posts`, `#feed`, `.post` (`[data-key]`), `.post-time`, `.post-body`, `.who`, `#earlier`, `.live-aside`, `.links` | Posts newest first. `LIVE_QUEUE` holds updates that arrive while the page is open; they wait behind the "New updates" button and never push the text the reader is on. `LIVE_EARLIER` loads with "Show earlier updates". |
| Watch page | `[data-view="watch"].band`, `.player`, `#play`, `#clock`, `#clock-total`, `#bar`, `.player-info`, `button[data-format]`, `[data-list="media"]`, `.pods`, `.pod`, `.cover`, `.listen`, `.eq` | `?v=` loads a `MEDIA` item into the player. The sample player only counts time; put a real `<video>` or `<audio>` in `.player` for a site. |
| Author | `.author-head`, `#au-initials`, `#au-name`, `#au-role`, `#au-bio`, `#au-mail`, `.rows` (`data-list="author-rows"`) | `?id=` picks a person from `AUTHORS`; their stories come from `STORIES` by `by`. |
| Newsletters | `[data-form="newsletters"]`, `.nl-list[data-group]`, `.nl`, `.box`, `.nl-when`, `#nl-email`, `#nl-consent`, `.faq` | At least one newsletter must be ticked. The FAQ sits beside the form. |
| About | `.page-head`, `.lede-xl`, `.facts`, `.two`, `.steps`, `#corrections`, `.people` | History in one paragraph, four facts, how the newsroom works, corrections, the people. |
| Contact | `.contact`, `.ways`, `[data-form="contact"]`, `#c-topic` | `?topic=` preselects the select (`tip`, `correction`, `ads`, `other`). |
| Privacy, 404 | `.legal`, `.notfound`, `.actions` | Plain prose; the 404 offers the front page and the live page. |
| Footer | `.site-footer.band`, `.foot-nav`, `.foot-legal`, `.foot-copy` | Inverted wordmark, sections, house links, one line of fine print. |

## Data and the script

The repeated parts are written once as data near the top of the script and turned into markup by small template functions (`card`, `row`, `post`, `hed`, `meta`, `badge`):

- `SECTIONS` (key, title, one sentence), `TOWNS`, `AUTHORS` (name, role, bio).
- `STORIES`: id, section, town, author, picture key, format (`""`, `video`, `audio` or `live`), duration, time, headline, summary. Order is newest first.
- `MEDIA` for the watch page, `MOST` for the most-read order, `LIVE_EARLIER` and `LIVE_QUEUE` for the live feed.
- Pictures used by generated cards live once in `<template id="pics">`, keyed by `data-pic`. Generated cards write `<img data-pic="key">` and `fill()` copies the `src` across. Add every new picture there; this keeps `scripts/inline.mjs` able to embed it.

The first screen of every view is written in the HTML so it reads without JavaScript; blocks marked `.js-only` (generated rows) are hidden when the script does not run.

## Real content

- Every headline links to its own story; in a real site each story gets its own route or file, and the article view is the template for all of them.
- Times are relative in lists ("2 hrs ago") and absolute in articles and live posts. Generate relative times from each story's date when you build the site; never hard-code them on a site that will stay online.
- A live page is only for something happening now. When coverage ends, keep the page, remove the live tag and the pulsing dot, and say "Live coverage has ended" in the header.
