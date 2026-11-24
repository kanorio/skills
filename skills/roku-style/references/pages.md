# Pages and sections

Every view in `assets/template.html` is a `<section data-view="name">` inside `<main>`, reached by `#/name` links. The header and footer sit outside the views and stay on every page. In a framework project each view becomes a real route with the same anatomy.

## Recipes by kind of site

Pick the closest recipe. Keep the section order; drop what the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Independent cinema (the template) | home, programme, film, membership, join, journal, note, visit, hire, faq, legal, 404 | night city with lockup, intro, Tonight screen, horizon band + seasons deck, tile wall, three cards, FAQ, closing line |
| Film festival | home, programme (as the festival guide: days as tabs, venues as rows), film, membership (as passes), join (as pass checkout form), journal (as news), visit (as venues and travel), hire (as press and industry contact), faq, legal, 404 | city with the festival name and dates in the tagline, intro, "Today at the festival" screen, band + strands deck, wall of pass perks, cards, FAQ |
| Streaming channel or video studio | home, programme (as the broadcast schedule), film (as a show or video page with the trailer player), membership (as plans), join, journal, faq, legal, 404 | city, intro, home screen of shows, band + collections deck, wall of what members get, cards, FAQ |
| Podcast network | home, programme (as the release calendar: shows as rows), film (as a show page; the trailer dialog plays the latest episode), membership (as supporter tiers), join, journal (as show notes), hire (as advertising and guests), faq, legal, 404 | city, intro, screen of shows with the next episode in the feature panel, band + seasons deck of series, wall, cards, FAQ |
| Venue, club or theatre | home, programme, film (as the event page), visit, hire, faq, legal, 404 | city, intro, Tonight screen, band + series deck, cards, FAQ |

Header, footer, home and 404 always ship.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.bar`, `.brand` (mark from `#mark`), `.nav`, `.tools` (search link, `#theme-toggle`, Join, `#menu-btn`), `nav#menu.menu` | Sticky and solid. Five links at most in `.nav`; under 1100px they live in `#menu`, which also carries secondary links. |
| Hero | `.hero`, `svg.scene` (gradients, star and window patterns, `#mid-l`/`#mid-r`, beams, cinema, blade sign, marquee, lamps, trees), `h1.lockup` (`.script`, `.word`, `.tag`) | The lockup is the home H1. Change the blade letters (`tspan`s) and the board text to the user's words; keep both short. |
| Intro | `.intro` with `h2`, `.sub`, `.actions.center` | One promise, one line of facts, one filled and one outline button. |
| Tonight screen | `.frame > .tv[data-tv]`: `.tv-top` (`.tv-sky`, `.tv-brand`, `[data-clock]`), `.tv-rail`, `.tv-body` (`ul.tiles > li > a.tile[data-id]`, `.tv-chips`), `.tv-feature[data-feature]` (`[data-f-next]`, `[data-f-name]`, `[data-f-meta]`, `[data-f-link]`) | Six tiles fit the 3 × 2 grid. The feature panel follows the focused tile. Tiles are static HTML so the screen reads without JavaScript. |
| Horizon band | `.band` with two `svg`s using `#skyline` (the second is `.flip`) | Decorative; once per page, right before a new chapter. |
| Seasons deck | `.deck[data-deck] > article.deck-card` (`--c` for the badge), `.strip[data-strip="id id id id id"]`, `.deck-foot` (`.badge`, `h3`, `p`, `.btn-line`), `.deck-nav` | Two to six cards. The strip is built from the film ids in `data-strip`; posters come from the programme cards. Without JavaScript the cards stack as a list. |
| Tile wall | `.wall[data-wall]` | Built from `WALL` and `WALL_COLORS` in the script. Decorative and hidden without JavaScript; the real facts sit in `.perks` or the plans. |
| Three cards | `.cards3 > .card` (`.card-ic`, `h3`, `p`, `.btn-line`) | Three next steps, each to a different view. |
| FAQ | `[data-faq-home]` (filled with the first four questions of the FAQ view), `.faq details > summary + p` | Works without JavaScript on the FAQ view. |
| Closing | `.closing h2` (`.script`, `.word`) | "See you at the …" with the name; nothing else. |
| Page head | `.page-head` with `.kick` (script), `h1`, one `p` | Every inner view starts with it. |
| Guide | `.guide-wrap.frame > .guide`: `.tv-top` with `[data-days]`, `.gscroll > .ggrid[data-guide]` | Rows and blocks are rendered from `FILMS` and `EVENTS`. The grid scrolls sideways inside itself on small screens. |
| Programme list | `.filters` (`[data-tag]` chips, `#prog-q`), `[data-count]`, `ul.films[data-films] > li.film[data-id][data-tags][data-by]` (`.film-art`, `h2`, `.film-meta`, `.times`), `[data-empty]`, `[data-clear]` | The cards are the source of every film's name, artwork and tags; every other view copies them. `#/programme?tag=late&q=moth` preselects. |
| Film | `.fhero` (`.fhero-bg`, `.poster`, `[data-fd-*]`, `.credits`), `#book` with `.picker[data-picker]` (`[data-b-days]`, `[data-b-times]`, `[data-b-picked]`) and `[data-form="booking"]` (`.tk[data-price]` rows, `[data-b-total]`, `#b-err`), `[data-f-more]`, `dialog#trailer` | `#/film?id=…&day=2&time=18:15` preselects the showing. The static content is the first film, the no-JavaScript fallback. |
| Membership | `.page-head` with `.bill` (`[data-bill]`), `.wall`, `ul.plans > li.plan` (`.price[data-month][data-year]`, `.ticks`, `[data-plan-link]`), `ul.perks` | The recommended plan carries `.pick`. The billing choice and plan travel to join. |
| Join | `[data-form="signup"]` (`#j-name`, `#j-email`, `fieldset[data-group-required]` with `input[name="plan"]`, `#j-bill`, `#j-pass` with `[data-reveal]`, `#j-terms`), `.mcard` (`[data-card-name]`, `[data-card-plan]`), `[data-success="signup"]` | `#/join?plan=regular&bill=year` preselects. |
| Journal | `.filters` with `[data-cat]`, `ul.posts > li.post[data-post][data-cat]` (first one `.big`) | The cards are the source of the article title, kicker, meta and art. |
| Article | `.article` (`.back`, `[data-n-cat]`, `[data-n-title]`, `[data-n-meta]`, `[data-n-art]`, `.prose[data-n-body]`) | The first article is written out in the page; `POSTS` holds the others. In a real project, one page per post. |
| Visit | `.page-head` with `.status[data-status]`, `.split`, `dl.hours`, `ul.screens`, `#bar`, `#access` | `HOURS` in the script drives "Open now". |
| Hire (contact) | `.split`, `.ticks`, `[data-form="contact"]` (`#c-topic`, `#c-date`, `#c-guests`, `#c-msg`), `[data-success="contact"]` | `#/hire?topic=press` preselects the topic. |
| FAQ, legal, 404 | `#faq-q`, `[data-faq]` grouped by `h2`, `[data-faq-empty]`; `.legal`; `data-view="404"` | Any unknown route lands on 404. |
| Footer | `.foot`, `.foot-news` with `[data-form="newsletter"]`, `.foot-cols`, `.foot-base` | |

## Routing, data and state

- Links that start with `#/` change the view; `?key=value` is passed to the view, and `?at=<id>` scrolls to an element in it. Plain `#id` links (`#book`) scroll inside the current view.
- The document title is the view's H1 (or the film or article name) followed by the site name. Film, article and join light up their parent in the nav.
- `FILMS` holds per film id: genre, year, minutes, rating, language, director, cast, screen, start `times` and `days` (a string of weekdays, `0` = Monday) and the blurb. `EVENTS` holds the bar's weekly events as `[weekday, start, minutes, name, route]` (the route without `#/`). Names, artwork and tags come from the programme card with the same `data-id`.
- Dates are relative: the guide and the booking picker show today and the next six days, and past showings are dimmed or disabled. For a dated programme (a festival), replace `days` with real dates and label the tabs with them.
- The theme lives in the template's `store` wrapper under `nightjar-theme`.
- Real trailers: put a `<video>` (or the user's player embed) in `.screen` in place of the image and drive play, pause and the progress bar from it; keep the simulated clock only in the static demo.
- In a framework project make each view a route (`/programme`, `/films/[id]`, `/journal/[slug]`), keep the screen, guide, deck and wall as components, and load the schedule from the user's data.
