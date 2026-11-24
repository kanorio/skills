# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route. The work grid, the series list, the post, prints, the bag, the journal and the story viewer are rendered by the script from five lists at the top of the script (`SERIES`, `PHOTOS`, `PRINTS` with `SIZES`, `PEOPLE`, `POSTS`); change the data, not the markup. Home, Walks, About, Contact, FAQ and the legal views are plain HTML.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Photo studio with prints and walks (the template) | home, work, photo, prints, print, bag, walks, journal, post, about, contact, saved, faq, privacy, terms, 404 | split hero with the booking form, highlights, latest grid, walks row, studio band |
| Photographer or illustrator portfolio | home, work (series as highlights), photo, about, contact (as bookings), journal, faq, 404 | split hero with an enquiry form, highlights, latest grid, about band |
| Small shop (ceramics, candles, clothing, plants) | home, work (as the lookbook), prints (as products), print (as one product with options), bag, about, contact, faq, 404 | split hero with a newsletter or drop signup, highlights (collections), product grid, lookbook row as stories, band |
| Café, bakery or restaurant | home, work (as the menu photographed), walks (as events or classes), about, contact (as bookings), faq, 404 | split hero with a booking form, highlights (breakfast, lunch, cakes), grid, events row as stories, opening-hours band |
| Creator, community or club | home, work, walks (as meetups), journal, post, about, contact (as join), faq, 404 | split hero with a join form, highlights (topics), grid, meetups row as stories, band |
| Event or pop-up | home, walks (as the programme), work (as last year's photographs), about, contact, faq, 404 | split hero with a ticket or waitlist form, programme row as stories, grid, venue band |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `.header-end`, `#theme-toggle`, `#bag-count`, `.wide-only`, `#menu-open`, `#menu` | Five links at most. `fitNav()` adds `.compact` when the row does not fit, and the media query does the same below 860px; links, Saved and Book then live in `#menu`, a `popover` opened by `popovertarget`, so it works without JavaScript too. |
| Hero (home) | `.hero`, `.hero-main`, `.display` with `.grad`, `.fan`, `.story`, `.sticker` (`.st-heart`, `.st-time`, `.st-star`, `.st-av`), `.hero-side`, `.panel`, `[data-form="booking"]`, `.or` | The fan takes exactly three stories; the middle one carries `.story-head` and `.reply`. The panel holds one form of two to four fields, a blue submit, one text link, the "or" divider and one outlined pill. |
| Highlights | `.highlights`, `.hl[data-story]`, `.ring`, `[data-highlights]` | Four to eight circles. Home has them in HTML; Work renders them from `SERIES`. A click opens the story viewer; without JavaScript the link goes to the filtered grid. |
| Grid | `.grid`, `.tile`, `.tile-over`, `.tile-flag`, `#home-grid`, `#work-grid`, `#more-grid`, `#print-grid`, `#saved-grid` | Always three columns of 4:5. Home keeps nine tiles in the HTML so the grid shows without JavaScript; the other grids are written by `tile()`. |
| Walks row | `.walks`, `[data-walks]`, `#walk-cards` | Three story cards in HTML on Walks; home copies them. On phones they scroll sideways with snap. |
| Studio band | `.band.split`, `.label`, `.h1` with `.grad`, `.actions` | One headline, one lead, a blue and a grey button. |
| Profile (work) | `.profile`, `.ring.xl`, `.pf-top`, `.pf-stats [data-stat]`, `.pf-bio`, `[data-highlights]`, `.tabs`, `[role=tab]`, `#pane-grid`, `#pane-series`, `#pane-prints`, `[data-filter="series"]` | `?s=<series>` filters the grid; `?tab=series` opens a tab. Counts come from the data. Arrow keys move between tabs. |
| Post (photo) | `.post`, `#p-media`, `#p-img`, `#p-prev`, `#p-next`, `#p-set`, `#p-title`, `#p-caption`, `.facts`, `#p-like`, `#p-save`, `[data-share]`, `#p-date`, `#p-ask`, `#more-grid` | `?id=` picks the photograph. Double-click likes it with a heart burst; arrow keys step through. "Ask about this photograph" opens Contact with the topic and the title filled in. |
| Prints | `[data-filter="prints"]`, `#prints-count`, `#prints-list`, `.print`, `.mat` | `?s=<series>` filters, with a live count. |
| Print | `.pd`, `#pd-img`, `#pd-title`, `#pd-price`, `#pd-sizes`, `.size`, `.qty`, `#pd-add`, `#pd-save`, `details.qa`, `#pd-more` | `?id=` picks the print. The price follows the size and quantity. Add to bag bumps the header count and shows a toast. |
| Bag | `#bag-empty`, `#bag-full`, `#bag-list`, `.summary`, `#bag-sub`, `#bag-total`, `[data-form="order"]` | Lines from the `tidewell-bag` store key (`id:size` and quantity). The sample asks for an email and sends an invoice instead of taking payment. |
| Walks signup | `#walk-form`, `[data-form="signup"]`, `#w-walk`, `.opts[data-min]`, `.opt`, `.check` | `?w=<walk>` preselects; `&at=walk-form` scrolls to the form. One choice is required and the checkbox must be ticked. |
| Journal and post | `#posts-list`, `.post-card`, `.byline`, `#a-by`, `#a-title`, `#a-img`, `#a-body`, `#a-like` | `?id=` picks the note. Paragraphs come from the data. |
| About | `.split`, `.display`, `.people`, `.person`, `.steps`, `.band` | Story, people in rings, three numbered steps, a closing band. |
| Contact | `[data-form="contact"]`, `#c-topic`, `[data-show-when="session"]`, `#c-people`, `#c-msg[data-min]` | `?topic=` preselects; `?about=<photo id>` starts the message with the photograph's title. The number of people appears, and is required, only for a session. The message needs 20 characters. |
| Saved | `#saved-grid`, `#saved-empty` | From the `tidewell-saved` store key. |
| FAQ, Privacy, Terms | `details.qa`, `.legal` | Plain HTML. |
| Footer | `.site-footer`, `.f-letter`, `[data-form="newsletter"]`, `.inline-form`, `.f-links`, `.f-legal` | The letter signup, one row of links, the legal line. |
| Story viewer | `#viewer` (a `<dialog>`), `#v-card`, `#v-bars`, `#v-pause`, `#v-prev`, `#v-next`, `#v-open`, `#v-close` | Opened by any `[data-story]` link. Five seconds per card, a pause button, tap zones and arrow keys, Escape to close. Watching marks the ring as seen. |
| Toast | `#toast-slot`, `.toast` | Written by `toast(html)`; disappears after a few seconds. |
| 404 | `data-view="404"`, `.notfound` | A grey ring, one line, one sentence, one button. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/photo?id=lighthouse`, `#/work?s=harbour`, `#/print?id=buoys`, `#/walks?w=lamps&at=walk-form`, `#/contact?topic=print&about=buoys`).
- The `titles` map sets the document title per view (photographs, prints and notes set their own), and the `section` map keeps the right header link highlighted on child views (`photo` under Work, `print` and `bag` under Prints, `post` under Journal). Update both when you add or rename views.
- Likes, saves, the bag, watched highlights and the theme are kept with the sandbox-safe `store` wrapper under `tidewell-*` keys. On a real site with accounts or a shop backend, keep the same buttons and swap the storage.
- In a framework project, replace the router with real routes (one per photograph, print and note) and render the grids on the server; the viewer, likes and the bag stay client-side.
