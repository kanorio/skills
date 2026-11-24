# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Nonprofit or community service (the template) | home, services, workshops, stories, story, about, give, book, volunteer, faq, privacy, terms, 404 | stage hero with a porthole, highlights carousel, display statement with the staggered service field, stage with stadium lanes, quote, three event cards, ink band |
| Consultancy or advisory practice | home, services, stories (as insights), story (as a case study), about, book (as contact), faq, privacy, terms, 404 | hero, carousel of recent work, statement with four practice areas as tiles, lanes as engagement models, client quote, ink band |
| Small financial service (credit union branch, accountant, insurance broker) | home, services (as products, each lane a product with a "Talk to us" pill), stories (as guides), story, about, book, faq, privacy, terms, 404 | hero, carousel of guides, statement with tiles for each product line, lanes for ways to get help, quote, upcoming information sessions, ink band |
| Clinic, studio or local practice | home, services, workshops (as classes), about, give (as plans or packages), book, faq, privacy, terms, 404 | hero, carousel, statement with tiles, lanes, quote, classes, ink band |
| Event or program series | home, workshops (as the schedule), stories, story, about, book (as registration), faq, privacy, 404 | hero with the next date in the `.tag`, carousel of past sessions, statement, lanes as formats, events, ink band |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.bar`, `.brand`, `.mark`, `.nav`, `.head-actions`, `#theme-toggle`, `#menu-btn`, `#menu` | Five links at most. Under 1080px the links move into `#menu`, positioned under the pill inside the header (no fixed overlay); under 560px the ink button moves there too. The current link gets `aria-current="page"` and an orange underline. |
| Hero | `.stage.hero`, `.orbit-line`, `.hero-grid`, `.hero-copy`, `.eyebrow`, `.display`, `.lead`, `.actions-row`, `.hero-media`, `.port`, `.tag`, `.go.accent` | Eyebrow, display headline (three short lines at most), lead, ink and ghost pills. The porthole is about 540px with its ring; `.tag` floats on its upper left; the accent arrow sits on its lower right. The orbit curve runs above the copy and behind the photo, never across text. |
| Carousel | `[data-carousel]`, `.rail`, `.slide`, `.slide-labels`, `.pill`, `.pill-title`, `[data-prev]`, `[data-next]`, `.dots` | Three to seven slides. Each slide is one image and one link. Prev and next live in the section head; dots are built by the script. |
| Statement and field | `.sec-head`, `.display`, `.field`, `.ring.r1`, `.ring.r2`, `.tile`, `.port`, `.port.tall`, `.port.left`, `.go` | Display H2 and a lead, then two to six tiles in a staggered two-column field. Mix circle and tall crops; alternate white and orange arrows. |
| Lanes | `.stage.flat`, `.lanes`, `.lane`, `.lane.rev`, `.lane-body` | A stage with a display H2 and one ink pill, then two to four lanes alternating sides. Each lane: stadium photo, H3, one or two lines, an outline pill. |
| Quote | `.quote`, `.port.left`, `blockquote`, `.q`, `.who` | One real quote with the person's name and relation. |
| Events on home | `.grid`, `.card.event`, `.date`, `.event-body` | Three upcoming dates; link to the full schedule. |
| Ink band | `.band`, `.brand-row` | The mark, one H3-size line, a cream pill. Ends every main view. |
| Page head | `.stage.page-head`, `.hero-grid`, `.h1`, `.lead`, optional `.hero-media` and `.orbit-line` | Eyebrow, H1, lead, an optional porthole on the right. |
| Services | `.lanes`, `#coaching`, `#business`, `#taxes`, `#housing`, `.checks`, `.steps` | One lane per service with an eyebrow for duration or season, three checks and a pill that links to `#/book?topic=…`; then three ringed steps. |
| Workshops | `button[data-topic]`, `#online-only`, `#ws-count`, `#ws-list`, `#ws-empty` | Topic chips, an "Online only" chip, a live count and the event grid drawn from `WORKSHOPS`. |
| Stories | featured `.lane`, `button[data-kind]`, `#post-q`, `#post-list`, `#post-empty` | A featured story lane, kind chips, a search field and post cards drawn from `POSTS`. |
| Story (article) | `.article-head`, `.port.wide.article-hero`, `.prose`, `.pull`, `.figure`, `.callout`, `.share`, `#copy-link` | Eyebrow, H1, byline and reading time, a 2:1 stadium photo, the article with H2s, a pull quote with an orange rule, an ordered list with orange markers, a figure with a small porthole, a callout card, copy link and a booking pill. |
| About | `.steps` (as promises), `#team`, `#team-list` | Origin story in the page head, three ringed promises, team drawn from `TEAM` as initials avatars, an ink band. |
| Give (pricing) | `[data-freq]`, `.tiers`, `.tier[data-monthly][data-once]`, `[data-price]`, `[data-per]`, `[data-choose]`, `.split`, `.legend`, `#pledge`, `[data-form="give"]` | Frequency switch, three tiers (one featured), where the money goes, a pledge form whose amount follows the chosen tier. |
| Book (contact) | `[data-form="book"]`, `#b-topic`, chip radios and checkboxes, `[data-counter]`, `#b-consent`, `.info`, `.hours` | `?topic=` preselects the topic. Success echoes the email and the chosen format. |
| Volunteer (careers) | `.qa details`, `[data-role]`, `#apply`, `[data-form="volunteer"]` | Roles as details; "Apply for this role" fills the role field and scrolls to the form. |
| FAQ | `#faq-q`, `#faq-list`, `#faq-empty` | Search filters the details as you type. |
| Legal | `data-view="privacy"`, `data-view="terms"`, `.legal` | Plain H2 sections. |
| 404 | `data-view="404"`, `.notfound`, `.ring` | Two orbit rings, eyebrow, display "404", lead, home pill. |
| Footer | `.site-footer`, `.foot-top`, `.foot-cols`, `.foot-bottom` | Ink in both themes. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/book?topic=housing`).
- Plain `#id` links (the footer's `#team`) open the view that contains the section, then scroll to it.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- `WORKSHOPS`, `POSTS` and `TEAM` at the top of the script hold the repeated cards; `IMAGES` maps every image key to its full path (write each path out in full so `scripts/inline.mjs` can embed it), and `SIZES` gives non-default image dimensions.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
