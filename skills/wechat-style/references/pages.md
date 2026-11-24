# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route. Every view starts with a green band; the band's form says what kind of page it is.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Community or residents' service (the template) | home, services, membership, events, news, post, help, about, contact, get, legal, 404 | hero band with lockup, tagline and four round buttons; three entry cards; round service icons; latest stories; closing band; footer |
| App or mini-program homepage | home, services (as features), membership (as plans), news, post, help, about, contact, get, legal, 404 | hero band with the platforms as round buttons; three entry cards (news, help, the most used feature); round icons of what the app does; latest updates; closing band |
| Membership business (gym, studio, club, co-op) | home, services (classes or perks), membership, events, help, about, contact, get (as join), legal, 404 | hero band whose round buttons are the four main actions (book, join, timetable, visit); three entry cards; round icons of what members get; closing band with the join button |
| Local life service (clinic, salon, laundry, repairs) | home, services (treatments with durations and prices), events (as open days or classes), help, about, contact, get (as booking), legal, 404 | hero band with round buttons for call, book, find us and prices; three entry cards; round icons of the services; closing band with opening hours |
| Public or campus service desk | home, services (tasks), news (notices), post, help, contact, legal, 404 | hero band with the search field instead of round buttons; three entry cards for the most asked-for tasks; notices; footer |

The home page band never holds more than the lockup, the tagline and the round buttons. Detail lives below the curve.

## The band in five forms

| Form | Classes | Used on | Notes |
|---|---|---|---|
| Hero | `.band.hero`, `.lockup`, `.tagline`, `.orbs`, `.orb` | home | The tallest band. Lockup is the H1 (mark plus name). Tagline is two `<span>` lines. Two to four round buttons. |
| Lifted | `.band.lifted`, `.band-sub`, `.band-search`, then `.lift` on the next element | services, membership, events, help, about, 404 | A centred H1, an optional one-sentence `.band-sub`, an optional search field or toggle; the next element overlaps the arch by `--lift`. A short lifted card inside `.lift.narrow` grows to cover the arch. |
| Feature | `.band` with extra bottom padding, then `.lift` with a matching negative margin | news | The band is deep enough for the carousel to start inside it and end below the arch. Change the two inline values together. |
| Thin | `.band.thin`, then `.lift.sheet` | post, contact, legal | Only the arch under the header; the white sheet sits in the curve. For reading pages. |
| Closing cap | `.band.cap` | end of home and about | The arch turned over at the top; an H2 styled `.h1`, one sentence, one white and one veil button. |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hdr`, `.logo`, `.mk`, `.nav`, `.hdr-end`, `#theme-toggle`, `#menu-btn`, `#menu` | Mark and name, up to six links (the current one gets `aria-current="page"` and a white underline), the theme button, one white button. The menu opens in the flow below 1180px. |
| Entry cards | `.entries`, `.entry`, `style="--c:…"` | Exactly three. Icon, `<strong>` label, optional `<span>` line. Links to views. |
| Round service icons | `.panel`, `.life`, `.disc` | Four or eight items in a white panel; each a tinted disc and a label, linking to a filtered view (`#/services?cat=…`). |
| Stories | `.stories`, `.story`, `.art`, `.story-body`, `.tags`, `.tag`, `#story-list`, `#home-stories`, `#more-stories` | The list in the news view is the source; the home page and the post's "More stories" clone cards from it. Each card has `data-post` and `data-cat`. |
| Featured carousel | `#feature`, `.feature`, `.slide`, `.caption`, `#dots` | Two to four slides, each a link with an illustration and a caption bar. Dots are generated; no autoplay. Without JavaScript the slides stack. |
| Filters | `[data-chips="name"]`, `.chip[data-value]`, `[data-search="name"]`, `[data-count="name"]` with `data-one` and `data-many`, `[data-list="name"]`, `[data-empty="name"]`, `[data-pager="name"]` | One `makeFilter(name, perPage)` call per list. `?cat=` preselects a category on services and help. |
| Service cards | `.grid3.listing`, `.card`, `.disc`, `.meta`, `.link` | Icon disc, H2 styled `.h3`, one-sentence description, hours and price, one link. |
| Plans | `.toggle [data-billing]`, `.plans`, `.plan`, `.plan.featured`, `.badge`, `.price`, `.per` | Elements with `data-m` and `data-y` switch text with the toggle. `#/get?plan=<value>` preselects the plan in sign-up. |
| Events | `.evs.listing`, `.ev`, `.date`, `.left`, `[data-book]`, `#book` | `data-book` matches an option value in `#b-event`; the button fills the form and scrolls to it. |
| Help | `.cats`, `.cat` (buttons with `data-value`), `.qa`, `.ans` | Category cards filter the answers and toggle off when pressed again; the band search filters too. |
| About | `.statement`, `.split`, `.tl`, `.people`, `.person`, `.avatar` | One centred statement on the curve, a dated timeline with round dots, initials avatars tinted by `--c`. |
| Reading sheet | `.sheet`, `.prose`, `.post`, `.back`, `#post-title`, `#post-date`, `#post-tags`, `#post-art`, `#post-body` | The post view takes title, date, tags and picture from the story card and the body from `POSTS` (lines starting `## ` become H2s). |
| Get the app | `#devices`, `.phone`, `.screen`, `.screen-band`, `.screen-grid`, `#signup` | Round platform buttons in the band, a phone drawn in HTML that repeats the band and the round icons, then the sign-up form. The phone hides under 860px. |
| Forms | `.form[data-form]`, `.field`, `.input`, `.error`, `.hint[data-counter]`, `.row2`, `.opts`, `.opt`, `.check`, `.stepper`, `[data-success]`, `[data-echo]`, `[data-reset]` | `data-form` names the form; each checked field's `aria-describedby` points at its `.error`; `[data-success]` replaces the form and echoes the first name. `#c-phone` shows a `pattern` written for the `v` flag (syntax characters escaped inside the class) with its own message. |
| Footer | `.site-footer`, `.foot-links`, `.copy`, `.socials` | One centred line of links with thin rules between them, the copyright, round grey icon links (mail, feed, map), never social network logos. |
| 404 | `data-view="404"`, `.notfound` | A lifted band with a friendly H1, a card with three ways out. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it: `?cat=` preselects a filter, `?p=` picks a story, `?plan=` picks a plan, `?at=<id>` scrolls to a section of that view.
- Plain `#id` links scroll inside the current view (the round buttons on the get page scroll to `#signup`).
- The `titles` map sets the document title per view; the post view underlines News in the header. Update both when you add or rename views.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
