# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links (`#/show?id=<id>`, `#/shows?age=<group>&q=<words>`, `#/screenings?kind=<kind>`, `#/news?cat=<cat>`, `#/post?id=<id>`, `#/camp?week=<week>&at=book`, `#/contact?topic=<topic>&event=<text>`). `?at=<id>` scrolls to a section after the view opens. In a framework project each view becomes a real route. Every view opens with a stage (art, or the plain grape version), then one band, and ends on the goo strip and the footer.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Five or six nav links, UPPERCASE in the header, plus one lime button for the main action.

| Site | Nav | Views | The home page holds |
|---|---|---|---|
| Animation studio or kids' show (the template) | Shows, Screenings, Camp, News, About, Grown-ups | home, shows, show, screenings, camp, news, post, about, grown-ups, contact, privacy, 404 | featured shows in the carousel, new shows, a split for screenings, upcoming screenings, the camp promo |
| Kids' entertainment venue (play centre, trampoline park, family cinema) | Play, Parties, Events, Visit, Grown-ups | home, shows (as zones or attractions, chips for age), show (as one zone: what's inside, ages, rules), screenings (as sessions and events), camp (as party packages with a booking form), about, grown-ups (as safety and visiting FAQ), contact, privacy, 404 | attractions in the carousel, zones as cards, a split for parties, this week's sessions, a promo for holiday clubs |
| Summer or holiday camp | Weeks, A day at camp, Team, Parents, Book | home, camp (weeks, how a day works, booking), shows (as activities), about (team), news (as camp diary), grown-ups, contact, privacy, 404 | camp moments in the carousel, activities as cards, a split for the site or the day, open weeks, a promo for early booking |
| Family festival or kids' event series | Line-up, Tickets, Map, Grown-ups, News | home, shows (as acts, chips for stage or age), show (as one act), screenings (as the programme by day), camp (as ticket types with a booking form), news, grown-ups, contact, privacy, 404 | headliners in the carousel, acts as cards, a split for the venue, the next days, a ticket promo |
| Kids' club, class or after-school programme | Classes, Timetable, Holiday club, Team, Parents | home, shows (as classes), show (as one class), screenings (as the timetable), camp (as holiday club), about, grown-ups, contact, privacy, 404 | classes in the carousel, classes as cards, a split for the space, this week's sessions, a holiday promo |
| Children's book, game or toy brand | Characters, Books, Play, News, Grown-ups | home, shows (as titles or products, chips for age), show (as one title: what's inside, ages, where to buy), screenings (as events and readings), news, post, about, grown-ups, contact, privacy, 404 | new titles in the carousel, titles as cards, a split for an event, upcoming events, a promo for a launch |

Header, footer, home, contact, privacy and 404 always ship. A stage needs real art; a page without it uses `.stage.plain`.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-head`, `.head-in`, `.brand`, `.logo`, `.word`, `.nav`, `.tools`, `#theme-toggle`, `.head-cta`, `.menu-btn`, `#menu.menu-panel` | Sticky, translucent grape gradient with blur, 64px tall, pulled over the stage with a negative margin. Six UPPERCASE links at most. Below 1160px the links and the lime button move into `#menu`, which drops down inside the bar. Without JavaScript the links wrap onto a second row and scroll sideways. |
| Hero carousel | `.hero`, `.slides`, `.slide.stage` (`data-slide`), `.hero-ctrl` (`data-hero-ctrl`), `.dot`, `[data-step]`, `[data-pause]` | Two to five slides; the H1 is a visually hidden line naming the brand, each slide has an H2 title. Slides cross-fade; autoplay every 7 seconds stops on hover, on focus, with reduced motion and with the pause button. Without JavaScript only the first slide shows. |
| Stage | `.stage`, `.stage-sm`, `.stage.plain`, `.stage-art`, `.stage-copy`, `.kicker`, `.back`, `.stage-title`, `.stage-lead`, `.meta-line`, `.actions` | Full-bleed art (`object-fit: cover`, so keep the subject near the centre) under a dark scrim. One title, one lead or meta line, at most two buttons. |
| Band | `.band`, `.band.alt`, `.drip`, `.drip.right`, `.band-head`, `.band-title`, `.more`, `.band-lead` | Orange with goo blobs. Alternate `.band` and `.band.alt` when two bands are close. One drip per band at most. |
| Card row | `.cards`, `.cards.four`, `.card`, `.card.wide`, `.card-art`, `.card-body`, `.meta`, `.tag`, `.price`, `.date`, `.event-foot`, `.seats`, `.seats.low` | Three across (or `auto-fill` at 270px for `.four`). `a.card` when the whole card is a link; `article.card` with a `.btn-ink` button when it has an action. `--i` staggers the entrance. |
| Split | `.split`, `.split.flip`, `.split-art`, `.split-copy`, `.split-title` | Night, art fading into black, centred headline and one lime button. Between two bands, never two in a row. |
| Promo | `.promo`, `.promo-copy`, `.promo-title`, `.caps`, `.promo-art` | Night, headline with an exclamation, an UPPERCASE subtitle, one sentence, two buttons; the goo art (`images/goo.svg`) on the right. One per page. |
| Shows list | `[data-view="shows"]`, `.filters`, `[data-shows-count]`, `.chip[data-age]`, `[data-shows-search]`, `[data-shows]`, `[data-shows-empty]`, `[data-shows-reset]` | Rendered from `SHOWS`; the first three cards are also written in the HTML for readers without JavaScript. The count heading is live; the empty state has a drawing, one line and a reset button. |
| Show page | `[data-view="show"]`, `[data-s="img|title|meta|about|ages|eps|made|episodes"]`, `[data-s-trailer]`, `.facts`, `.episodes`, `[data-s-more]`, `[data-s-more-wrap]` | `?id=` picks a show. Two panels (about with facts, episodes), then "More shows" with three cards from the same age group first. |
| Trailer | `dialog.trailer`, `[data-trailer]`, `[data-t="title|img|cap"]`, `[data-close]` | Any element with `data-trailer="<show id>"` opens it. Replace the panning art with `<video controls>` and a captions track when the brand has real trailers. |
| Screenings | `[data-view="screenings"]`, `.chip[data-kind]`, `[data-events]`, `.card[data-kind]`, `[data-events-count]`, `[data-events-empty]`, `[data-events-reset]` | Written in the HTML (no data array). "Book seats" opens contact with the topic and the event in the message. Two panels below: good to know, finding us. |
| Camp | `[data-view="camp"]`, `.steps`, `#book`, `data-form="camp"`, `[data-sum-week|price|early|total]` | How a week works (five numbered cards), the weeks as price cards (`?week=` preselects), then the booking form with a live summary panel. Full weeks show "Full" and a waiting-list link, and their radio is disabled. |
| News | `[data-view="news"]`, `.chip[data-cat]`, `[data-posts]`, `[data-news-count]` | Rendered from `POSTS`; the first card is `.wide`. |
| Post | `[data-view="post"]`, `[data-p="img|title|meta|body"]`, `[data-p-more]` | `?id=` picks a post. The article is a `.panel.prose` with a lead paragraph; three more posts below. |
| About | `[data-view="about"]`, `.two`, `.prose`, `blockquote`, `.facts`, `.crew-art.c-<colour>`, `.split.flip` | Story panel and facts panel, the crew as cards with drawn avatars (no photos of real people unless the user supplies them), and a split for visits. |
| FAQ | `[data-view="grown-ups"]`, `.faq`, `details`, `summary` | Four to eight questions; the first may start open. A side panel links to contact. |
| Contact | `[data-view="contact"]`, `data-form="contact"`, `.opts.pills`, `.contact-list` | Topic pills (`?topic=` preselects, `?event=` fills the message), name, email, message (10 characters at least), success panel; a side panel with address, hours, email and phone. |
| Privacy | `[data-view="privacy"]`, `.stage.plain`, `.panel.prose` | Plain headed paragraphs. Sample text until the owner supplies their own. |
| 404 | `[data-view="404"]`, `.lost`, `.lost-title`, `.splats` | Huge UPPERCASE title, one line, two buttons, three pieces of art clipped into splats. Any unknown route lands here. |
| Footer | `.goo-strip`, `.site-foot`, `.letter` (`data-form="newsletter"`), `.foot-links`, `.foot-logo`, `.foot-small` | Grape to plum on every page. Newsletter first, then centred links, the centred logo and one small line. |

## Forms

Every form carries `data-form="<kind>"` and `novalidate`; fields that need checking have `required`, the right `type` (and `min`/`max` or `minlength`) and an `aria-describedby` pointing at a `.err` paragraph that reserves one line, so the button never moves. The script validates on blur (once something was typed), on input after an error, and on the submit button's click; it focuses the first problem and shakes the button, then hides the form and shows `[data-success="<kind>"]`, echoing values into `[data-echo="<field name>"]`. `[data-again]` resets it. Nothing is sent: connect a real endpoint before launch.
