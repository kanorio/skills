# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. Views marked `data-over` start with a photo or ink band, and the header turns transparent over them. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order of bands and their alternation (photo, white, ink, photo, grey, white, photo); drop bands the brief cannot fill. Header, footer, home, legal and 404 always ship.

| Site | Views (template name → what it becomes) | Home bands, in order |
|---|---|---|
| Membership or pass app (the template: gyms, pools, coworking, museums, car or bike sharing) | home, plans, how, sessions, journal, post, help, join, company, contact, legal, 404 | photo hero with the frame, trust band, ink band with the card fan and Card/Phone tabs, photo band with activity tabs, grey band with the phone, tiles, plan strip, closing photo |
| App or startup launch | plans → pricing, how → product tour, sessions → changelog or roadmap list, journal → blog, join → sign-up or waitlist, company → about and careers | hero frame showing the product's key number, trust band, ink band with phone and device tabs, photo band with use-case tabs, grey band with settings, tiles, pricing strip, closing photo |
| Events, tickets or a venue | sessions → events with chips by night or genre, plans → ticket types, join → tickets or guest list, how → entry and refunds | night photo hero with the frame showing the next date and tickets left, trust band (capacity, years, artists), ink band with a ticket fan, photo band with tabs per room or stage, grey band with the phone ticket, tiles, closing photo |
| Club, studio or class schedule | sessions → timetable, plans → memberships and packs, how → first visit, company → teachers | hero with the frame showing today's next class, trust band, ink band with the member card, photo band with tabs per class type, grey band with booking settings, tiles, closing photo |
| Travel, rentals or experiences | sessions → departures or stays, plans → packages, journal → guides, join → enquiry or booking | landscape hero with the frame showing nights and price from, trust band, ink band with a boarding-pass style card, photo band with tabs per destination, grey band with the trip in a phone, tiles, closing photo |
| Product or service with plans | plans → pricing, how → features, help → support | hero with the frame showing the result the product gives, trust band, ink band with the product mockup, grey band with the phone, tiles, plan strip |

Money products (savings, investing, lending, insurance, crypto) need regulated wording that this skill does not provide: if the user asks for one, keep the design, make no claims about returns, rates or safety, and leave every legal statement as a marked placeholder for the owner and their adviser.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hdr`, `.logo`, `.nav`, `.hdr-end`, `#theme-toggle`, `.hdr-link`, `#menu-btn`, `#menu` | Wordmark, at most five links, the theme toggle, one text link and one solid pill. Transparent over `[data-over]` views until the page scrolls (`.is-scrolled`). Below 1080px the links collapse into `#menu`, which opens below the bar in the flow. |
| Photo hero | `.scene.hero.under-hdr`, `.bgimg`, `.hero-grid`, `.hero-copy`, `.frame` | One `.bgimg` photograph; `.display` H1 across the top; lead and one `.btn-ink` in `.hero-copy`; the `.frame` in the middle column with `.lab`, `.fig`, `.chip-w`, `.acts` and `.strip`. Below 1100px everything stacks and the frame is cut by the bottom edge. |
| Trust band | `.sec` > `.trust-line`, `.stats` | One muted sentence and four figures with one line each. Real figures only. |
| Ink band | `.band.band-ink.dark.center`, `.mock`, `.stack`, `.fan`, `.phone`, `.tabs[data-tabs]` | Display H2, lead, one solid pill, then a `.mock` whose `.stack` holds the panes and whose tabs switch them. |
| Photo band with tabs | `.scene.scene-band.center#<id>`, `.bgimg[data-pane]`, `.frame` > `.stack` > `.body[data-pane]`, `.tabs[data-tabs="<id>"]` | Up to four photographs, one per tab; each tab also swaps the frame's label, figure and pill. Keep all photographs the same light and crop. |
| Grey band | `.band.band-mist`, `.split`, `.split-copy`, `.phone` | H2, lead, a solid pill and a `.more` link on one side; a phone with `.rows`, `.switch`es and a `.scr-btn` on the other. |
| Tiles | `.tiles`, `.tile`, `.tile-ui` | Three tiles, each with a small product UI, an H3 and one sentence. The same grid holds numbered steps in the how view. |
| Plan strip | `.sec-head`, `.plan-strip` | Three links to the plans view with name, one line, a price and the period. |
| Closing photo | `.scene.closing.center` | A display H2, one lead and two pills (solid and outline) over a dark photograph. |
| Plans | `.tabs[data-tabs="plan-list"]`, `#plan-list`, `.plan`, `.plan.pick`, `.badge`, `.stack-inline [data-pane]`, `.compare` | Three plans, one `.pick`. Every price and period that changes with the billing tabs has a `data-pane` per value. The comparison table has a caption and uses accent ticks with `aria-label`. |
| How | `#how-pass[data-tone]`, `button[data-tone]`, `ol.tiles` | Ink hero with the card and colour tabs, three numbered steps, a grey split with a booking phone. |
| Sessions | `[data-chips="sessions"]`, `#session-q`, `#session-count`, `#session-list li.session[data-kind]`, `[data-seat]`, `#book`, `#b-session` | `data-kind` is space-separated (`swim night`). Each "Book a place" sets `#b-session` to its `data-seat` and scrolls to the form. Keep the cards and the select options in sync. `#/sessions?kind=night` preselects a chip. |
| Journal | `[data-chips="posts"]`, `#post-count`, `#post-list li.post-card[data-topic]` | Every card links to `#/post?p=<id>`, and every id needs an entry in `POSTS` in the script. `#/journal?topic=guides` preselects a chip. |
| Post | `[data-view="post"]`, `[data-p="title|meta|body"]`, `#post-img` | Filled from `POSTS` (topic, read, title, img, alt, lead, body, quote). The markup shows the first story without JavaScript. |
| Help | `#faq-q`, `.faq-group`, `details.qa`, `[data-empty="faq"]` | Groups of two to four questions. Search opens matches and hides empty groups. |
| Join | `.join`, `.join-scene`, `#join-pass`, `#join-name`, `#join-tier`, `#join-price`, `[data-form="signup"]`, `PRICES` | The card in the frame follows the name and the plan as the visitor types. `#/join?plan=unlimited` preselects the plan. |
| Company | `.scene.under-hdr`, `.story`, `#roles`, `.roles` | Photo hero with the founding line, a dated story, open roles whose pills go to `#/contact?topic=careers`. `#/company?at=roles` scrolls to the roles. |
| Contact | `.routes`, `[data-form="contact"]`, `#c-topic`, `#c-msg`, `#c-msg-count` | Three routes with icons and a form; `#/contact?topic=venue` preselects the topic. |
| Legal | `[data-view="legal"]`, `.legal-body` | Plain-language sections. Replace with the owner's real policy. |
| Footer | `.site-footer`, `.foot`, `.fine` | Wordmark and one sentence, three link columns, fine print with tax, changes and the legal line. |
| 404 | `data-view="404"`, `.notfound` | A display H1, one line and a solid pill home. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it: `#/post?p=sea-pool`, `#/sessions?kind=climb`, `#/journal?topic=venues`, `#/join?plan=plus`, `#/contact?topic=careers`, `#/company?at=roles`.
- `?at=<id>` scrolls to that element inside the view.
- The `titles` map in the script sets the document title per view; the post uses its own title. Update both when you add or rename views, and keep the links in `.nav` and `#menu` identical.
- Add `data-over` to a view only if its first section is a `.scene` or a `.dark` band with `.under-hdr`.
- The theme choice is stored with the template's `store` wrapper (`tidepass-theme`); rename the key with the brand.
- In a framework project, replace the router with real routes (`/journal/[slug]`, `/plans`), keep the same URLs where possible, and move `POSTS`, `PRICES`, sessions, plans and roles into typed data.
