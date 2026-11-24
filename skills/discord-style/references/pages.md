# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Header, footer, home and 404 always ship.

| Site | Views | Home sections, in order |
|---|---|---|
| Indie game studio (the template) | home, games, game, events, blog, post, patch-notes, support, join, faq, about, contact, legal, 404 | hero, five frames (games, playtests, club, patch notes, platforms), marquee, devlog cards, coming up, finale |
| Community, fan club or online club | home, events, blog, post, support (as membership), join, faq (with rules), about (as organisers), contact, legal, 404 | hero (club photo or art in the screen, next meetup card), frames for what members do, marquee, coming up, devlog as news, finale |
| Event, meetup series or tournament | home, events (as schedule), game (as one event page with tickets in the actions), support (as ticket tiers), join (as registration), faq, about, contact, legal, 404 | hero (date and venue card), frames for programme, venue, prizes and travel, marquee, coming up, finale |
| App, bot or tool for a community | home, games (as features or plugins), game (as one feature), patch-notes, support (as plans), join (as waitlist), faq, contact, legal, 404 | hero (product screenshot in the screen), frames with product cards, marquee, patch notes, finale |
| Creator, streamer or podcast | home, blog (as episodes or videos), post, events (as live dates), support (as supporter tiers), about, contact, legal, 404 | hero, frames for shows and community, marquee, latest episodes, coming up, finale |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.bar`, `.brand`, `.nav`, `.tools`, `#theme-toggle`, `#menu-open` | Mark and wordmark, up to six links, the toggle, one small button. After 40px of scroll `.is-scrolled` hides the links and turns brand and tools into white pills; below 1200px the links live in `#menu`. |
| Menu sheet | `dialog.sheet#menu`, `.sheet-head`, `#menu-close` | Glass rows with a chevron, then one large blurple button. Closes on a link, the close button, the backdrop and Escape. |
| Hero | `.hero`, `.hero-grid`, `.hero-copy`, `.hero-art`, `.screen`, `.hero-card.ui`, `.toy`, `.tw`, `.hero-actions` | H1 and lead left; tilted screen with key art right, one product card on its lower left corner, three or four toys around; two `.btn.lg` buttons centred under both columns. Phones: art first, everything centred, buttons stacked. |
| Frame rows | `.rows`, `.frame`, `.frame.flip`, `.frame.solo`, `.toy.peek`, `.media` + `.g-*`, `.media.pad`, `.frame-copy`, `.text-link` | Two to six frames, alternating `.flip`. Media holds an image (`.media.pad > img`, or `img.art` to fill) or a product card (`.ui`) or `.platforms`. `.frame.solo` is media only (articles). One toy may peek over each frame. |
| Product card | `.ui`, `.ui-head`, `.live`, `.meter > i` (`--v`), `.stack .av`, `.cursor` | Head row, two to five list rows, an optional meter and avatar stack, an optional button that is a real link. Content is real site data: an event, a score board, a changelog, opening hours, a ticket. |
| Marquee | `.marquee`, `.marquee-track`, `.mq`, `.mark` | Three to five single words separated by the mark. The script clones `.mq` once for a seamless loop; `aria-hidden`. |
| Section head | `.sec-head`, `.h2`, `.text-link` | Title left, "All …" link right. |
| Cards | `.cards`, `.card`, `.thumb`, `.tags`, `.tag`, `.h3 a`, `.meta` | Auto-filling grid of 300px minimum. The title link covers the card. |
| Home copies | `[data-clone="posts"]`, `[data-clone="events"]` | Empty containers the script fills with the first three cards or rows of `[data-list="posts"]` and `[data-list="events"]`, so each item is written once. Hidden without JavaScript (`.needs-js`); the full lists stay visible on their own pages. |
| Event rows | `.events`, `.event` (`data-type`), `.date` + `.g-*`, `.event-side`, `.seats .meter` | Date tile, title and meta, seats and one small button linking to `#/join?event=<id>`. |
| Finale | `.finale`, `.display`, `.lineup` | Two short uppercase sentences, one large button, five to seven toys standing on the footer. |
| Footer | `.site-footer`, `.footer-grid`, `.f-brand`, `.socials`, `.footer-bottom`, `.giant` | Brand, three round icon links, four link columns, legal line, the cropped lowercase wordmark. The footer keeps its own night colours in both themes. |
| Page head | `.clip > .wrap.page-head`, `.kicker`, `.h1`, `.lead`, `.toy` | Centred kicker, H1 (max 15ch), lead; one toy at each side (hidden below 700px). |
| Filters | `.toolbar`, `.chips` with `button.chip[data-<attr>]`, `[data-count]`, `[data-list]`, `[data-empty]`, `[data-reset]` | Chips with `aria-pressed`, a live count, an empty state with a reset button. `makeFilter(name, attr, noun)` wires any list; URL parameters `?status=`, `?type=`, `?topic=` preselect. |
| Games and game page | `[data-list="games"]` (`data-status`, `data-date`), `#g-sort`, `[data-view="game"]`, `[data-gd]`, `[data-gd-status]`, `[data-gd-glow]`, `[data-gd-art]`, `[data-gd-shot]`, `[data-gd-about]`, `[data-gd-join]`, `[data-wish]`, `.specs`, `.shots` | The game page shows `?id=` from the `GAMES` map in the script; the static markup is the first game. Wishlist toggles are stored. |
| Article | `.narrow`, `.back`, `.byline`, `[data-copy]`, `.frame.solo.post-frame`, `.prose`, `blockquote`, `figure` | Back link, tag, H1, lead, byline with copy link, a solo frame, prose with H2s, a list, a glass quote and a framed figure. |
| Patch notes | `#p-game`, `.patches`, `.patch` (`data-game`), `.ver`, `.changes`, `.tag.new`, `.tag.fix`, `.tag.bal` | Newest first; `?game=` preselects. |
| Plans | `.switch` (`data-billing`), `.plans`, `.plan`, `.plan.star`, `.badge`, `.price [data-price]`, `[data-per]`, `.perks` | Two or three plans, one starred. Prices swap from `data-month` to `data-year`. Buttons link to `#/join?plan=<id>`. |
| Join (signup) | `[data-form="join"]`, `[data-join-note]`, `fieldset[data-group-required]`, `.picks .pick`, `.check`, `[data-success="join"]`, `[data-echo]` | Name, email, a required group of pill checkboxes, two selects, a consent checkbox. `?game=`, `?event=` and `?plan=` prefill. |
| FAQ | `.faq-group[id]`, `details.q` | Groups with H2s; `?at=<group id>` scrolls to one. |
| About | `.frame`, `.values .feat`, `.team .person`, `#jobs .events` | Story frame, three values with toys, team as initials tiles, open roles as event rows. |
| Contact | `[data-form="contact"]`, `.side-list .panel` | Name, email, topic (`?topic=` preselects), message; side panels. |
| Legal and 404 | `[data-view="legal"]`, `.toc`, `#privacy`, `#terms`; `[data-view="404"]`, `.notfound` | Plain sections; the mascot and two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the name is passed to it (`#/game?id=snailpost`, `#/join?event=diner-3`).
- `at=<id>` scrolls to that section after the view opens; plain `#id` links scroll inside the current view.
- The document title is the view's H1 plus the brand; the home keeps the page title.
- In a framework project, replace the router with real routes, keep the URLs where possible, turn `GAMES` into typed data with one route per item, and render the home copies from the same data instead of cloning nodes.
