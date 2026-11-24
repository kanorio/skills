# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Home services or trades (the template: cleaning, repairs, moving) | home, services, service, pricing, book, join, about, help, journal, post, legal, 404 | black: hero with route form and mosaic, service cards, steps carousel, three "more ways" columns; seam picture; white: two picture cards, a split offer; seam picture; black: three "work with us" columns, circle portrait offer, contact cards |
| Appointments (salon, clinic, tutor, photographer, repair shop) | home, services, service, pricing, book, about, help, legal, 404 | black: hero with the route form as "your area" plus "service", service cards, steps; seam; white: picture cards for the two main services, a membership or package split; black: contact cards |
| Pickup, delivery or transport (laundry, couriers, airport transfers, removals) | home, services, service, pricing, book, join, help, legal, 404 | black: hero where the stops are "pick up from" and "deliver to", service cards, steps; seam; white: picture cards, a business account split; black: driver sign-up columns, contact cards |
| Local marketplace or rental (bikes, equipment, venues) | home, services (as the catalog), service (as the item), book, help, journal, post, legal, 404 | black: hero with location and dates in the stops, category cards, steps; seam; white: featured items as picture cards; black: list your item columns |
| Recruiting or partner sign-up page | join as home, about, help, legal, 404 | the join view: sub-nav, black hero with the phone field, why columns, requirements, open areas with chips, numbered steps, FAQ |

The header, footer, home and 404 always ship. Section pages (service, join) get the sub-nav. One service view is filled from data for every service; keep that, rather than writing a view per service.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `header.top.ink`, `.top-in`, `.brand`, `.nav > .pill`, `.top-end`, `.hide-sm`, `#theme-toggle`, `.pill.solid`, `#menu-open` | Wordmark, up to five pill links, then Help, the theme toggle and one solid pill for the main action. Sticky. Under 960px the links and Help hide and `#menu-open` shows. It must not wrap at 1440, 1024 or 768: cut links before squeezing. |
| Menu | `<dialog class="menu ink" id="menu">`, `.menu-links`, `#menu-close` | Full screen, black, 28px links and the main button. Any route link closes it. |
| Sub-nav | `nav.subnav`, `.top-in`, `b`, anchor links | The section name on the left, three to five anchor links on the right; scrolls sideways on phones. Directly under the header. |
| Hero | `section.band.ink.hero`, `.hero-grid`, `.hero-copy`, `.loc`, `.display`, `.mosaic` or `.hero-art` | Location line with pin and "Change area" link, one display headline, the route form, then the picture column. White heroes (service page) drop `ink`. |
| Route form | `form[data-form="quote"]`, `.sel.when`, `.stops`, `.stop`, `.stop.sel`, `.stop-act[data-locate]`, `.err`, `.actions`, `.btn`, `.tlink` | One `.stops` group of two or three `.stop` fields that share one error line. The first stop gets the dot and the last the square automatically; middle stops get the line through. Submitting routes to `#/book` with `s`, `addr` and `when`. |
| Mosaic | `.mosaic` with four `img`, `.float-card` with a `.pill` | Four 5:4 pictures, the left column offset down 24px, and one floating blurred card with a short question and a white pill. On phones the card drops below the grid. |
| Service cards | `.svc-grid > article.svc`, `h3`, `p.muted`, `.price`, `.pill.solid`, `svg.spot` | Three across, 160px tall. Title, one line, optional price, the "Details" pill (its `::after` covers the card) and a spot drawing from the sprite. Generated from `SERVICES` on the services page and in "Often booked together". |
| Steps | `#steps.track > article.step`, `.pager[data-pager="steps"]`, `.count`, `[data-dir]` | Three visible on desktop, two on tablets, one on phones. The counter counts pages, not cards. Without JavaScript the track scrolls sideways. |
| Columns | `.cols3 > article.col`, `img`, `.h3`, `p.muted`, `.tlink` | Three text-and-picture columns with an underlined link each. Pictures are square-cornered 16:10. Text-only columns are fine on black. |
| Seam picture | `div.seam` (black to white) or `div.seam.up` (white to black), `.wrap > img` | Always between two bands of different colors, never inside one. 32:9 on desktop, 16:9 on phones, decorative (`alt=""`). |
| Picture cards | `.pics2 > article`, `img`, `h3`, `p.muted`, `.btn` | Two side by side on white, each with a picture, a title, a line and a black button. |
| Split | `.split` with a text block and an `img` or `.orb` | Text left, picture right (or the reverse on black). One H2, one paragraph, one button or button plus text link. |
| Circle portrait | `.orb > img + ul > li > svg` | A round portrait and three dark rounded tiles with spot drawings overlapping its lower edge. For the business or partner offer. |
| Contact cards | `.cards2 > a.lcard`, `.tile`, `b`, arrow icon | White cards on black, a black icon tile, one big line and a small one, an arrow that nudges on hover. |
| Services list | `#svc-q`, `[data-cat-filter]`, `[data-svc-count]`, `#svc-list`, `[data-empty="svc"]` | Search plus category chips; `#/services?cat=repairs` preselects a chip. |
| Service page | `[data-s="name"]`, `[data-s="line"]`, `[data-s="from"]`, `[data-s="hours"]`, `[data-s="img"]`, `[data-s="inc"]`, `[data-s="sizes"]`, `#related` | Filled by `setService(id)` from `#/service?s=<id>`. Sections: hero with route form, what's included (`.ticks.two`), prices (`.rows`), the tinted `.panel`, questions, related cards on black. |
| Pricing | `.seg [data-bill]`, `.plans > .plan`, `.tag`, `[data-plan-price]`, `[data-plan-note]`, `#price-list` | Black band with the billing switch and two plans; the price list on white is generated from `SERVICES`. |
| Booking | `form[data-form="booking"]`, `[data-route-only]`, `#b-days`, `.opts > label.opt`, `.summary [data-sum]`, `[data-success="booking"]`, `[data-again]` | Where and what (route stops; services with `route: true` show the middle stop), day tiles generated for the next eight days, arrival windows, details, terms checkbox, one wide button. The summary updates on every change. |
| Join | `form[data-form="signup"]`, `#j-why`, `#j-req`, `#j-roles [data-cat]`, `[data-role-filter]`, `.nums` | Black hero with one phone field and a consent line, why columns, a requirement list, open areas with trade chips, three numbered steps, FAQ. |
| Help | `#faq-q`, `[data-topic]`, `[data-faq-group]`, `[data-empty="faq"]`, `#manage`, `#contact` | Search, topic chips, grouped FAQ, a manage-booking form on black and a contact form on white. `#/help?at=contact` scrolls to the form. |
| Journal | `.feature`, `[data-post-filter]`, `#posts`, `[data-empty="posts"]` | A feature story, topic chips and a grid drawn from `POSTS`. |
| Article | `.narrow.article` | Back link, meta line, H1, lead, picture, body with H2s and a tick list, a tinted panel with one call to action. |
| Footer | `footer.ink.foot`, `.foot-cols`, `.foot-news`, `form[data-form="newsletter"]`, `.foot-base` | Wordmark, help link, four link columns and a newsletter column, then language and area pills, legal links and the copyright line. |

## IDs and routes

- Views: `home`, `services`, `service`, `pricing`, `book`, `join`, `about`, `help`, `journal`, `post`, `legal`, `404`. An unknown route shows `404`.
- `?at=<id>` scrolls to an element inside the view (`#/help?at=manage`, `#/about?at=areas`, `#/join?at=j-roles`).
- Plain `#id` links scroll within the current view (the sub-nav anchors).
- `#/service?s=<id>` and `#/book?s=<id>&addr=…&when=today|tomorrow` read from `SERVICES`.
