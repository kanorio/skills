# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Header, footer, home, legal and 404 always ship.

| Site | Views (template name → what it becomes) | Home sections, in order |
|---|---|---|
| Local service that quotes by message (the template: home repair, cleaning, gardening, removals) | home, services, workshops, team, notes, note, faq, quote, about, legal, 404 | photo hero, voices, photo-to-price row, workshop row, booking row, ink band on pricing, closing strip, notes panel |
| Tutor, coach or music teacher | services → lessons and packages, workshops → group classes, team → teachers, notes → study notes, quote → "Book a trial lesson" | hero with a lesson-booking exchange, voices from students, a row per format (one-to-one, group, online), ink band on how progress is tracked, notes panel |
| Clinic, salon, studio or practice | services → treatments and prices, workshops → classes, team → practitioners, quote → booking request, faq → before your visit | hero with an appointment reminder, voices, rows for booking, reminders and aftercare, ink band on prices, notes panel |
| Bakery, florist or kitchen taking orders by message | services → the menu as a price list with categories, quote → order request with a pickup time, workshops → tastings or classes | hero with an order exchange (photo bubble of the cake), voices, rows for ordering, pickup and custom requests, ink band on "made to order", notes panel as recipes |
| Club, choir, sports team or neighbourhood group | services → membership, workshops → meetups and matches, team → organisers, notes → news, quote → "Join us" | hero with a group chat card (chip card with "Join"), voices, rows for meeting, joining and helping, ink band on what members get, news panel |
| Tour guide or small travel host | services → tours and prices, workshops → departure dates, team → guides, quote → enquiry | hero with a trip-planning exchange, voices in many languages, rows per tour type, ink band on what is included, notes panel as travel notes |
| App or digital product | services → pricing, notes → updates, quote → contact or waitlist | hero with the product's own UI as bubbles, voices, three phone rows showing real screens, ink band on privacy or security, updates panel |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hdr`, `.logo`, `.nav`, `.hdr-end`, `#theme-toggle`, `#menu-btn`, `#menu` | Wordmark, at most five links, the theme toggle, one outline pill and one green pill. Below 1100px the links collapse into `#menu`, which opens below the bar in the flow. |
| Photo hero | `.hero`, `.hero-card`, `.hero-copy`, `.floaters`, `.hero-note` | One photograph with 32px corners; `.display` H1, a lead and one `.btn-white` low on the left; in `.floaters` one `.chip-card` and two bubbles (one out, one in). `.floaters` hides below 900px. The footnote explains any asterisk. |
| Voices | `.voices`, `.statement`, `.voice`, `.voice.r`, `.voice.xs` | One H2 sentence centred, eight or nine voices positioned with `--x`/`--y` (desktop) and `--mx`/`--my` (below 900px); `.r` puts the bubble left of the avatar; `.xs` hides on phones. Keep bubbles to three or four words. |
| Feature row | `.row`, `.row.flip`, `.row-copy`, `.row-media`, `.more`, `.phone`, `.photo` | H2, lead and one `.more` link; the media is a phone with a short thread or a `.photo` with a `.chip-card`. Alternate with `.flip`. Three rows on home is right; never two phones on the same side in a row. |
| Ink band | `.band` > `.wrap.on-ink` | One per page. A row with `<em>` for the green second line, or `.stats` with three numbers. `.on-ink` keeps it dark in both themes. |
| Closing strip | `.closing` | An H2 question and two pills. |
| Notes panel | `.panel`, `.bleed`, `.intro`, `.arrows`, `.track#home-notes` | Intro on the left with the arrows at the bottom; the track scrolls and runs to the right edge. On home the track is filled with copies of `#note-list` cards. |
| Plans | `.seg [data-rate]`, `.plans`, `.plan`, `.plan.pick`, `[data-day][data-eve]` | Three plans at most; one `.pick`. Every price that changes with the toggle carries both values. |
| Price list | `[data-chips="prices"]`, `#price-q`, `#price-count`, `#prices li[data-cat]`, `[data-empty="prices"]` | `data-cat` is space-separated; chips match one category, search matches any text. `#/services?cat=plumbing` preselects a chip; `?at=price-list` scrolls to it. |
| Events | `[data-chips="events"]`, `#events li.event[data-kind]`, `.date`, `.seats i[style="--fill:.6"]`, `[data-seat]`, `#register` | Each "Save a place" button sets `#s-event` to its `data-seat` and scrolls to the form. Keep the select options and the cards in sync. |
| Team | `.people`, `.person`, `.facts` | Six people at most per row set; one quote each in their own words. |
| Notes list | `[data-chips="notes"]`, `#note-q`, `#note-count`, `#note-list li[data-topic]`, `.note-card` | Every card links to `#/note?p=<id>`, and every id needs an entry in `NOTES` in the script. |
| Article | `[data-view="note"]`, `[data-n="topic|title|meta|body"]`, `#note-img` | Filled from `NOTES` (topic, title, meta, img, alt, lead, body, steps, tip, end, service). The markup shows the first note without JavaScript. |
| FAQ | `#faq-q`, `.faq-group`, `details.qa`, `[data-empty="faq"]` | Groups of two to four questions under a `.label` heading. The first question starts open. Search opens matches and hides empty groups. |
| Quote form | `[data-form="quote"]`, `#q-msg`, `#q-msg-count`, `#preview`, `#preview-text`, `#preview-typing`, `#preview-reply` | The phone mirrors the message as the visitor types; after sending, the ticks turn read, the typing dots show, then the reply. `#/quote?service=walls` preselects the service. |
| Story | `.story`, `.day`, `.bubble` | Four to eight moments, oldest first, each a date chip and one or two bubbles. Real dates and facts only. |
| Values | `.values` | Three cards with a line icon, an H3 and one sentence. |
| Legal | `[data-view="legal"]`, `#privacy`, `#terms` | `#/legal?at=terms` scrolls to the terms. |
| Footer | `.site-footer`, `.foot`, `.foot-base`, `[data-form="newsletter"]` | Wordmark and the email field, three link columns, base line. |
| 404 | `data-view="404"`, `.notfound` | A date chip, a short H1, an outgoing bubble with grey (unread) ticks, two pills. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it: `#/note?p=shelf`, `#/services?cat=electrical`, `#/workshops?kind=kids`, `#/notes?topic=seasonal`, `#/quote?service=plumbing`, `#/legal?at=terms`.
- `?at=<id>` scrolls to that element inside the view.
- The `titles` map in the script sets the document title per view; the article uses its note title. Update both when you add or rename views, and keep the nav links in the header and in `#menu` identical.
- The theme choice is stored with the template's `store` wrapper (`mendery-theme`); rename the key with the brand.
- In a framework project, replace the router with real routes (`/notes/[slug]`, `/services`), keep the same URLs where possible, and move `NOTES`, the price list, events and people into typed data.
