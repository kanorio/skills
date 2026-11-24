# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. Without JavaScript all views show one after another; with it, one view at a time. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order of the home sections (counter hero with panels, recognition strip, two-tone statement with figures and pictures, app mockup, numbered questions, closing band); drop sections the brief cannot fill. Header, footer, home, legal and 404 always ship.

| Site | Views (template name → what it becomes) | What the counter, the panels and the table show |
|---|---|---|
| Charts, rankings or leaderboards (the template: an independent music chart) | home, charts, track, news, post, plans, signup, login, help, about, contact, legal, 404 | total counted, top five with change, news; the table ranks items with a 7-day sparkline |
| Esports, sports or game stats | charts → standings or player ratings, track → team or player page, news → match reports, plans → supporter or pro plan | matches tracked; top teams with rating change; patch notes and results |
| Price comparison or tracker (groceries, fuel, flights, hardware) | charts → prices with chips per category or store, track → item page with price history and stores, plans → alerts | prices checked this week; cheapest stores or biggest drops; price news |
| Open data or status dashboard (city data, air quality, a service's uptime) | charts → indicators by district or service, track → one indicator over time, news → updates and incidents | readings collected; latest readings with change; notices |
| Member club or community information page (traders' club, collectors, a league) | charts → member leaderboard or listings, plans → membership tiers, signup → join form, about → rules and committee | members or events counted; latest results or listings; club announcements |
| App or product launch with live numbers | charts → public stats page, track → feature or integration page, plans → pricing | people or actions counted; most used features; changelog headlines |

Money products are out of scope for this skill's copy: if the brief is about trading, investing, lending or any financial product, keep the design but show no buy or sell actions, no returns or yields, and leave every risk and legal statement as a marked placeholder for the owner and their adviser.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hdr`, `.logo`, `.nav`, `.hdr-end`, `.hdr-search`, `#theme-toggle`, `#menu-btn`, `#menu` | Wordmark with the mark, at most five links, search, theme, a quiet "Log in" and a yellow "Sign up". Under 1080px the links move into `#menu`, which opens in the flow under the bar; under 560px the buttons move too. |
| Counter hero | `.hero`, `.hero-copy`, `h1.display` > `.fig.num[data-count]` + two `<span>`s, `.hero-sub`, `.laurels`, `.join-row[data-form="newsletter"]`, `[data-success="newsletter"]`, `.quick`, `.sq` | One real figure, written in full in the HTML; `data-count` holds the same number without commas. Two laurel badges at most. The email field and the yellow button share a row. Square icon links under it. |
| Hero panels | `.hero-side`, `.panel`, `.panel-head`, `.rows`, `.news`, `.more` | Five rows: dot, name, muted second name, figure, change. Four headlines. Each head has a "View all" link to the full page. |
| Recognition strip | `.strip`, `.sq` | Two short facts with an icon square: where the data comes from and how it is checked. Not awards unless the owner has them. |
| Statement | `#open`, `.duo`, `h2.display` with a `.fig` line, `.lead`, `.big-fig`, `.stats`, `.scenes`, `.scene`, `.cap` | A two-tone headline and one sentence; on the right a dated line, one big figure and two stats; three 16:9 pictures that link to stories. |
| App | `#app`, `.app`, `.device`, `#device`, `.phone`/`.ph-*` and `.desk` as `[data-pane]`, `.u-tabs[data-tabs="device"]`, `#desk-rows`, `.qr-row`, `#qr`, `.platforms` | The phone shows one figure and a short list; the desktop pane is filled from the table. Replace `#qr` with a real code for the app link or delete the code card. List only platforms that exist. |
| Numbered questions | `#faq`, `.faq`, `details.qa`, `.n`, `.a` | Five to twelve questions, numbered in order. The plus is drawn in CSS. |
| Closing band | `.band` | One sentence and one yellow button. |
| Charts | `.big-tabs`, `#minis`, `#chart-tools`, `.cat-tabs [data-tab]`, `#chart-q`, `.chips [data-genre]`, `#chart-count`, `#chart-table`, `th[data-sort]`, `[data-empty="chart"]`, `[data-clear]` | Rows are `tr[data-id][data-genre][data-plays][data-chg][data-w][data-peak][data-label][data-h]`: `data-chg` is a signed number or `new`; `data-h` is seven daily values in thousands, oldest first. The script adds the sparkline and star cells and builds the four mini cards from the rows. `#/charts?tab=new`, `?tab=fav`, `?preset=climb` and `?at=chart-q` work. |
| Detail | `[data-view="track"]`, `[data-t="title|artist|label|genre|plays|chg|rank|peak|weeks|dot|from|range"]`, `#t-follow`, `[data-range]`, `#t-chart`, `#t-cities` | Filled from the table row named by `#/track?t=<id>`. The 30 and 90 day lines are drawn from the 7-day values for the demo: feed real history when you have it. Rename the vocabulary (track, plays, cities) to the user's. |
| News | `.news-top`, `#news-q`, `.feat`, `.cover[data-tone]`, `button[data-topic]`, `#news-count`, `#post-list li.card[data-topic][data-post]`, `[data-empty="news"]` | A featured story, topic chips and a card grid. Each card's `data-post` needs an entry in `POSTS`. Covers are typographic: two to four words in `<b>` with the yellow part in `<em>`; `data-tone` is empty, `b` (disc) or `c` (stripes). |
| Post | `[data-view="post"]`, `[data-p="title|tag|meta|cover|body"]` | Reads the title, tag, date and cover from its card and the text from `POSTS` (lead, two body paragraphs, quote). Reading time is computed. |
| Plans | `.billing [data-bill]`, `.plans`, `.plan.is-pick`, `[data-m][data-y]`, `.ticks`, `.compare` | Three plans, one picked. Every price and period that changes with billing has `data-m` and `data-y`. |
| Sign up | `[data-form="signup"]`, `#s-name`, `#s-plan`, `.picks`, `.preview`, `#pv-hello`, `#pv-genres`, `#pv-list` | The phone preview follows the name and the chosen chips. `#/signup?plan=pro` preselects the plan. |
| Log in | `[data-form="login"]`, `[data-reveal]` | Email, password with a show button, remember me. |
| Help | `#help-q`, `.help-group`, `details.qa`, `[data-empty="help"]`, `#help-app` | Groups of two or three questions; search opens matches and hides empty groups. |
| About | `.duo`, `.stats`, `#method`, `.steps`, `.timeline`, `.team` | A display headline, four figures, three numbered steps of the method, a dated story and the team with initials. |
| Contact | `[data-form="contact"]`, `#c-topic`, `#c-msg`, `#c-count`, `.contact-side` | `#/contact?topic=station` preselects the topic. |
| Legal | `.legal`, `.toc`, `.prose` | Plain sections. Replace with the owner's real policy. |
| Footer | `.site-footer`, `.f-grid`, `.f-brand`, `.f-pref`, `[data-theme-alt]`, `.fine` | Wordmark with preferences, four link columns, one paragraph on how the figures are made and what they are not. |
| 404 | `data-view="404"`, `.lost` | A yellow display "404", one line and two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it: `#/track?t=neon-orchard`, `#/post?p=method-v42`, `#/charts?tab=new`, `#/signup?plan=pro`, `#/contact?topic=label`.
- `?at=<id>` scrolls to that element inside the view and focuses it when it is a field.
- The `titles` map in the script sets the document title per view; the detail page and the post use their own titles. Update the map when you add or rename views, and keep `.nav` and `#menu` identical.
- Follows and the theme are stored with the template's `store` wrapper (`spinrank-follow`, `spinrank-theme`); rename the keys with the brand.
- In a framework project, replace the router with real routes (`/charts`, `/track/[id]`, `/news/[slug]`), move the table rows and `POSTS` into typed data, and render the same markup from it.
