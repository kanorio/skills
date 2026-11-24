# Pages and sections

Every view in `assets/template.html` is an element with `data-view="name"`, reached by `#/name` links (options after `?`, for example `#/scores?d=2026-11-25` or `#/team?id=owls`; `at=` scrolls to an ID inside the view). In a framework project each view becomes a real route, and teams, games, players and stories become typed data.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop blocks the brief cannot fill. This style suits anyone whose news is results: a league, a club, a tournament, a sports newsroom, a school's athletics, a racing or esports series.

| Site | Views | Front page, in order |
|---|---|---|
| Regional league (the template) | home, scores, standings, team, news, story, tickets, join, about, contact, privacy, 404 | promo card and link lists left; lead card with banner, picture, second story, video row and bullets; feature card; more stories; headlines, mini standings and email sign-up right |
| A single club with several teams (senior, youth, women's, veterans) | home, scores (as fixtures and results), team (one per squad, with the picker), news, story, tickets (or membership), join (as registration and trials), about, contact, privacy, 404 | lead card about the last match; the strip shows only the club's games; the mini table shows the division the first team plays in |
| Tournament or event weekend | home, scores (one day per tab), standings (as groups or pools), team (as entrants), news, story, tickets, about (as schedule and venue), contact, privacy, 404 | lead card for the current round; bullets to the bracket, the venue and tickets |
| Sports newsroom or blog | home, news, story, scores (if they cover results), about, contact, privacy, 404 | lead card, feature card and the feed; the right rail keeps headlines; drop tickets and join |
| School or university athletics | home, scores, team (one per sport), news, story, join (as tryouts), about, contact, privacy, 404 | lead card, the strip across sports (the code becomes the sport), sign-up for parents' email |
| Running, cycling or racing series | home, scores (as events with finish times), standings (as series points), team (as clubs or riders), news, story, join (as entries), about, contact, privacy, 404 | lead card for the latest race; line scores become splits |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Score strip | `.strip`, `.strip-head`, `#strip` (`.games`), `.g`, `.g-st`, `.g-t`, `#strip-next` | Built from `GAMES` by `stripCell()`. Six to twelve cells: finals of the last round, anything live, the next fixtures. Each cell links to `#/scores?d=<date>`. |
| Bar | `header.bar`, `.brand`, `.block`, `.nav`, `aria-current="page"`, `.bar-end`, `#search-open`, `#theme-toggle`, `#menu-open` | The name block holds one word of four to ten capitals; a longer name drops to its short form. Seven nav links at most, one filled pill. It never wraps at 1440, 1024 or 768; below 960 the links move into the menu. |
| Menu | `#menu` (`<dialog class="menu">`), `#q`, `#results`, `#q-status`, `.menu-nav` | Search matches teams by town, name, code, venue and roster, and stories by headline, summary and category; the latest four stories show when the field is empty. |
| Front columns | `.page.cols`, `.col-main`, `.rail-l`, `.rail-r` | `col-main` first in the HTML, then the right rail, then the left, so phones read in that order. The visually hidden `h1` names the site. |
| Lead card | `.card.lead`, `.banner`, `.lead-in`, `.media`, `.play`, `.dur`, `.lead-h`, `.pair`, `.vrow`, `.vcard`, `#vrow-next`, `.bullets` | One banner line, one picture (video gets the play button and duration), one headline, a second story, three to six video cards, two to four bullets. |
| Feature card | `.sec-h` with a crest, `.pair.feature` | A capital heading beside the team's crest, a big picture and a long headline. |
| More stories | `[data-list="feed"]`, `#feed-more` | Rows from `STORIES` (picture right), four at a time. |
| Right rail | `.heads`, `.mini-t` (`[data-list="mini"]`), `#newsletter` with `[data-form="newsletter"]` | Seven to nine headlines, the table sorted by percentage, one email field. |
| Left rail | `.promo`, `.links`, `[data-list="team-links"]` | One promo in condensed italic capitals with one pill; page links with icons; every team with its crest. |
| Scores and schedule | `.dates`, `.date-list`, `[data-date]`, `[data-step]`, `#day-h`, `[data-list="games"]`, `.game`, `.lines`, `.venue`, `.perf`, `.acts`, `[data-empty]` | `?d=` picks the day. Finals show periods, total and an arrow at the winner; live games a red clock; upcoming games the tip-off time, both records and a Tickets pill. Days without games say so. |
| Standings | `#stand` (`.stand`, `data-sorted`), `button[data-sort]`, `button[data-groupby]`, `.rk`, `.tm`, `.div-row`, `.up`, `.down`, `.key` | Rows are static HTML, one per team with `data-id`; the script re-sorts them from `TEAMS`, renumbers the rank, recomputes games behind and inserts division rows. Explain every abbreviation in `.key`. |
| Stat leaders | `.leaders`, `.mini-h`, `.big` | Two or three leaders per category, initials in the team colour, the number in the condensed face. |
| Team | `.picker` (`[data-list="picker"]`), `#team-head` (`.team-head`), `#tm-crest`, `#tm-div`, `#tm-name`, `#tm-rec`, `#tm-place`, `#tm-venue`, `#follow`, `[data-list="roster"]`, `[data-list="sched"]`, `[data-list="team-news"]` | `?id=` picks the team (the first one without it). The top border takes the team colour. Follow is remembered with the `store` wrapper. |
| News | `.tabs` with `button[data-cat]`, `[data-list="news"]`, `#news-more`, `[data-empty]` | Category tabs with a red underline; six rows at a time. |
| Story | `.art`, `.lines`, `.kicker`, `.byline`, `.art-hero`, `#story-play`, `#story-clock`, `#story-bar`, `.prose`, `.quote`, `#box`, `.box`, `.bullets` | One template for every story: the line score on top for a game recap, headline, lede, byline with initials, hero with the sample player, text, a pull quote, a box score and what comes next. |
| Tickets | `button[data-plan]`, `.tiers`, `.tier.pick`, `.tag`, `.price` (`data-single`, `data-season`, `data-unit`), `#buy`, `[data-form="tickets"]`, `#t-game`, `#t-tier`, `#t-qty` | `?tier=` preselects the seats and `tier=season` switches to the season pass; `at=buy` scrolls to the form. |
| Join | `[data-form="signup"]`, `fieldset[data-group]`, `.opts`, `.opt`, `.check` | One choice is required; consent is required. |
| About | `.facts`, `.steps`, `.people`, `#faq` (`.faq details`) | One paragraph, four facts, how a season works, the office, three to six questions. |
| Contact | `[data-form="contact"]`, `#c-topic`, `.ways` | `?topic=` preselects the select (`tickets`, `teams`, `media`, `other`). |
| Privacy, 404 | `.legal`, `.nf`, `.actions` | Plain prose; the 404 offers the front page and the scores. |
| Footer | `.site-footer`, `.foot`, `.foot-copy` | Name block, one sentence, three link columns, fine print. |

## Data and the script

The repeated parts are written once as data near the top of the script and turned into markup by small template functions (`stripCell`, `gameRow`, `storyRow`, `headLink`, `crest`, `pic`, `meta`):

- `TEAMS`: id, town, name, three-letter code, division, home court, wins, losses, home and away records, points for and against per game, streak, last five. Add a matching `.t-<id> { --c: … }` colour class for each team.
- `ROSTERS`: five players per team as "number name position height".
- `GAMES`: date, status (`final`, `live`, `pre`), away and home ids, points by period (a fifth entry is overtime), the clock or tip-off time, and up to two "name|team|line" performers. The strip, the scores page and the team schedules all read it.
- `STORIES`: category, team, picture key, video length (empty for text), time, author, headline, summary. Newest first.
- `IMAGES`: every picture the script uses, as a full quoted path, so `scripts/inline.mjs` can embed it. Never build a path from a variable.

The first screen of every view is written in the HTML so it reads without JavaScript (the first game of the default day, the standings rows, the first roster, the first two news rows, the whole story); blocks marked `.js-only` are hidden when the script does not run.

## Real content

- Results and standings must come from the user. When the brief has none, keep the structure with clearly fictional teams and say so in the footer and in your reply; never invent results for real teams or real people.
- Times are relative in lists ("2h") and absolute in articles. Generate relative times from each story's date when you build the site; never hard-code them on a site that will stay online.
- A live clock is only for a game in progress. When a site has no live data feed, show finals and fixtures only and remove the live cell.
