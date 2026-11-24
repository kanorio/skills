# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Private travel or journey designer (the template) | home, journeys, journey (one per trip), departures, salons, circle, journal, article, enquire, faq, privacy, terms, 404 | slideshow with composer, espresso shortcuts, place rail, three cards, cream note on a photograph, duo, notes, letters |
| Boutique hotel or resort | home, journeys (as rooms and suites), journey (as one room), departures (as events and seasons), salons (as spaces: bar, spa, dining), circle (as a stay club), journal, enquire (composer as "Arrive" and "Depart" with the month as nights), faq, 404 | slideshow with composer, shortcuts (find my booking, call reception, what's on), rooms rail, three cards, cream note, duo, notes, letters |
| Fine-dining restaurant or supper club | home, journeys (as menus), journey (as one menu, courses as the day rows), departures (as dinners and events), salons (as rooms and the bar), circle (as membership), enquire (composer as "Date" and "Guests"), faq, 404 | slideshow, shortcuts (my reservation, private dining, calendar), menus rail, three cards, cream note, notes, letters |
| Members' club or lounge | home, salons first in the nav, circle (tiers and join), departures (as the programme), journal, enquire, faq, 404 | slideshow, shortcuts, spaces rail, three cards, cream note on membership, duo, notes, letters |
| Yacht, rail or private-charter service | home, journeys (as routes or vessels), journey (as one route), departures (fixed sailings), salons (as the fleet or the cabins), circle, enquire, faq, 404 | slideshow with composer, shortcuts, routes rail, three cards, cream note, duo, notes, letters |
| Spa or wellness retreat | home, journeys (as programmes), journey (as one programme, days as rows), departures (as retreats), salons (as the rooms), circle (as passes), enquire, faq, 404 | slideshow, shortcuts, treatments rail, three cards, cream note, notes, letters |

Rename the composer words to what the visitor chooses (From and To, Arrive and Depart, Date and Guests); keep two huge words, the swap arrow only when the two choices can trade places, and one champagne button.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Notice bar | `.notice`, `#notice-link`, `#notice-prev`, `#notice-next`, `#notice-count`, `.notice-all`; `NOTICES` in the script | One line, up to three notices stepped by hand. The first notice is also written in the HTML. |
| Header | `.site-header`, `.top`, `.brand`, `.util`, `.gold-link`, `#theme-toggle`, `#menu-open`, `.nav` | Up to six short links, spread evenly. `fitNav()` adds `.compact` when they do not fit (and always below 720px): the utility links and nav hide and the menu button appears. Only the nav row sticks; the top row scrolls away. |
| Menu | `dialog#menu.sheet`, `.sheet-links`, `.sheet-foot` | The same links plus FAQ; one champagne pill and one outline pill. |
| Hero | `.hero.on-photo` with `aria-roledescription="carousel"`, `.sr` H1, `.slides#slides`, `.slide[data-place]` (`.is-on` on the first), `.slide-copy`, `.hero-ctl`, `#hero-place`, `.ctl`, `#hero-pause`, `#hero-count`, `#hero-next` | Three to five slides. Each slide: a photograph (`fetchpriority="high"` on the first only), an H2 `.display` line of at most 15 characters per line, one sentence and a `.link`. |
| Composer | `form.composer[data-form="composer"]`, `.cp-in`, `.cp`, `.cp-word`, `#cp-from`, `#cp-to`, `.cp-swap[data-swap]`, `.cp-small`, `#cp-month`, `.pill.gold` | "To" is required; the error floats under it. Compose opens `#/enquire?from=&to=&month=&at=enquiry`. Option values must match the enquiry selects. |
| Shortcuts | `nav.quick`, `.quick-in`, `.ring` | Exactly three. Stacked rows on phones. |
| Rail | `.rail#rail`, `.sq-card`, `.ph.sq`, `.rail-btn[data-rail]` | Four to eight places; arrows disable at the ends. |
| Cards | `.cards`, `.card`, `.ph`, `.meta`, `hr.rule`, `.price` | Three across, two below 1024px, one below 640px. |
| Cream note | `.overlap`, `.note`, `.pill.line.sm` | One per page. The picture should be dark where the note sits. |
| Duo | `.wide`, `.duo` | Two pictures linking to two sections. |
| Notes | `.note-card`, `.note-title`, `[data-clone="#notes"][data-limit]` | Home copies the first cards of `#notes` in the journal view, so write each note once. |
| Letters | `form.newsletter[data-form="newsletter"]`, `[data-success="newsletter"]` | One field, one champagne button. |
| Page hero | `.page-hero.on-photo`, `.label`, `.h1`, `.pill` | Label, H1, one sentence, one quiet pill. |
| Crumbs | `nav.crumbs > ol.wrap > li` with `[aria-current="page"]` | Under the page hero, or first on views without one. |
| Page head | `.page-head`, `.label`, `.h1`, `.lead` | Views without a photograph: departures, journal, enquire, FAQ. |
| Journeys | `.toolbar`, `.tabs[data-filter="mode"]`, `#f-length[data-filter-select]`, `.count[data-count="journeys"]`, `#journey-list`, `.card[data-id][data-place][data-mode][data-length]`, `.empty[data-empty="journeys"]`, `[data-reset="journeys"]` | Mode tabs and the length select combine. `?mode=` and `?length=` preselect. Each card is the source for its journey view: name (H2), meta (mode, nights, season), price (`b`) and picture. |
| Journey | `#j-img`, `[data-j="kicker|name|lead|place|nights|season|price"]`, `#j-enquire`, `#j-enquire-2`, `.facts-table`, `.rows-alt#j-days`, `.split` | `#/journey?j=<id>` fills the view from the card and `JOURNEYS[id]` (`lead`, `days` as `[label, title, text, picture, alt]`). The first journey's lead and rows are read from the HTML. |
| Departures | `.tabs[data-filter="kind"]`, `ol.dep`, `li[data-kind]`, `.date`, `.status` (`.open`), `.pill.sm` | `?kind=` preselects. Each row links to the enquiry with `?to=&month=` or `?topic=`. |
| Salons | `#salon-tabs[role="tablist"]`, `[role="tab"]`, `[role="tabpanel"]` (`.is-on`), `.panel-title`, `.rows-alt` | Arrow keys, Home and End move between tabs. Without JavaScript all panels show in order. |
| Circle | `.seg [data-bill]`, `.tiers`, `.tier` (`.pick`), `.amount [data-year][data-month]`, `[data-per]`, `.ticks` | Three tiers; `?tier=` preselects the join form. |
| Join form | `#join`, `form[data-form="join"]`, `[data-success="join"]` | Tier, name, email, home city, journeys a year, consent. |
| Enquiry | `#enquiry`, `form[data-form="enquiry"]`, `.big-pair`, `#e-from`, `#e-to`, `#e-month`, `.stepper [data-step]`, `#e-guests`, `.choice`, `#e-topic`, `[data-success="enquiry"]`, `[data-echo]` | `?from=`, `?to=`, `?month=` and `?topic=` preselect. The success panel repeats the guests, places, month and pace. |
| Lookup | `#lookup`, `form[data-form="lookup"]`, `#l-ref` (pattern), `[data-success="lookup"]` | A reference and a last name. |
| Article | `.page-hero`, `.crumbs`, `.prose-wrap`, `.prose`, `blockquote`, `figure`, `.aside` | Text in a 2:1 column with a facts aside. |
| FAQ | `.faq-group`, `details`, `summary` | Two to five groups. |
| Footer | `.site-footer`, `.foot-cols`, `.circles`, `.foot-base`, `.to-top` | Four short columns, three round icon links, the legal line. |
| 404 | `data-view="404"`, `.notfound`, `.big` | A thin "404" in champagne, one H1, one sentence, one champagne pill. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/journey?j=coralune`, `#/journeys?mode=rail`, `#/departures?kind=evening`, `#/enquire?to=mirra&month=mar`, `#/circle?tier=zenith&at=join`).
- `at=<id>` scrolls to that section after the view opens (`#/enquire?at=lookup`).
- The `titles` map sets the document title per view (the journey view uses the journey's name), and the `section` map keeps the right header link marked on child views (`journey` under `journeys`, `article` under `journal`). Update both when you add or rename views.
- In a framework project, replace the router with real routes (one per journey and per article), keep the same URLs where possible, and turn `at` into ordinary fragment links.
