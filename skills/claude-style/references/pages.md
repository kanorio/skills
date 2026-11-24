# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| AI or software product (the template) | home, product, pricing, journal, article, customers, story, about, waitlist, privacy, terms, 404 | hero with the dark product card and a suggestion note, three steps, tabbed workspace showcase, serif quote, latest journal posts, closing waitlist field |
| Writing tool or editor | home, product, pricing, journal, article, about, waitlist (as sign-up), privacy, terms, 404 | hero with a draft and margin comments, steps (Draft, Revise, Publish), showcase, quote, journal, call to action |
| Research studio or consultancy | home, product (as services), customers, story, journal, article, about, waitlist (as contact), privacy, 404 | hero with a sample deliverable card, steps (as how an engagement runs), showcase of three deliverables, quote, journal, call to action |
| Online course or school | home, product (as the curriculum), pricing (as enrollment), journal (as lessons and essays), article, customers (as student stories), about, waitlist (as enrollment interest), privacy, terms, 404 | hero with a lesson outline and progress, steps, showcase of a lesson, an exercise and feedback, quote, journal, call to action |
| Waitlist launch | home, waitlist, privacy, 404 | hero with the email field in place of the buttons, steps, one dark card, call to action |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.head-in`, `.brand`, `.mark`, `.nav`, `#theme-toggle`, `.head-cta`, `#menu-btn`, `#menu` | Paper and blurred, `.is-scrolled` after 8px. Five links at most. Under 960px the links move into `#menu`, a panel inside the header toggled by `#menu-btn` (no overlay, no fixed position); under 520px the button moves there too. |
| Hero | `.hero`, `.hero-grid`, `.pill`, `.display`, `.lead`, `.btn-row`, `.fine`, `.tile.crop.hero-tile`, `.ink`, `.tr`, `.note` | Pill, display headline (two lines), lead, ink and ghost buttons, one fine line. The tile has `role="img"` with a description; the dark card is cropped by the tile, and `.note` floats over the card's empty lower area. |
| Steps | `#how`, `.sec-head`, `.label`, `.steps`, `.ill` | Label, H2, three items with a rule, a mono number, an illustration, an H3 and two lines. |
| Showcase | `#showcase`, `.band`, `.seg[data-tabs]`, `[role=tab]`, `.tabpanel.show`, `.tile.t-sage` | Segmented tabs with icons; each panel is copy with a `.more` link on the left and a tile with a dark card on the right. Arrow keys move between tabs. |
| Quote | `.quote`, `blockquote`, `figcaption` | One quote the user supplies, with the person and organization. |
| Journal on home | `#notes`, `#home-posts` | Filled by the script with copies of the first three cards in `#post-list`, so there is one source of truth. |
| Closing call to action | `.cta`, `.inline-form[data-form="waitlist"]`, `[data-success="waitlist"]` | Illustration, H2, lead, an email field with the button beside it, a success line. |
| Page head | `.page-head`, `.label`, `.h1`, `.lead`, `.crumbs` | Label or breadcrumb, H1, lead. |
| Product | `.tile.crop`, `.ws`, `.feat`, `#export`, `.split`, `.formats`, `#privacy-promise`, `.tile.art`, `.ticks` | A three-pane workspace card (list, main pane, side list; the side panes hide on phones), a six-cell feature grid with icon badges, an export split with a code card, a promise split with an illustration tile. |
| Pricing | `[data-billing]`, `.plans`, `.plan.featured`, `.flag`, `[data-monthly]`, `[data-yearly]`, `#compare`, `.table-wrap`, `#faq`, `.faq details` | The billing switch swaps every `data-monthly` and `data-yearly` text. Plan buttons link to `#/waitlist?plan=…`, which fills a hidden field. The table scrolls inside its own frame on phones. |
| Journal | `.feature-post`, `.toolbar`, `[data-filter]`, `#post-q`, `#post-count`, `#post-list [data-cat]`, `#post-empty` | A featured post, kind chips, a search field and the card grid. `?kind=` preselects a chip. |
| Article | `.article-head`, `.byline`, `.article-art`, `.prose`, `.sn`, `sup.ref`, `.pull`, `.fig`, `.loop`, `.article-foot`, `[data-copy-link]`, `[data-form="newsletter"]`, `.next` | Mono meta, H1, dek, byline; an illustration tile; the serif column with a drop cap, H2s, sidenotes (`aside.sn` placed just before the paragraph they annotate), a pull quote, a figure with a caption and an ordered list; then copy link, subscribe box and previous and next links. |
| Customers | `.lead-story`, `.toolbar`, `[data-sector]`, `#story-count`, `#story-list`, `.story-card`, `#story-empty` | A lead story linking to the case study, sector chips (`?sector=` preselects one), quote cards with one figure each. |
| Case study | `.crumbs`, `.story-grid`, `.story-body`, `.facts`, `.inline-quote` | Breadcrumb, H1, lead; the story in three short sections with one dark card and one quote; a sticky facts list (on phones it moves above the story in two columns). |
| About | `.split`, `.tile.art`, `.principles`, `.team`, `.av` | Origin story beside an illustration tile, three numbered principles on an oat band, team cards with initials, a contact line. |
| Waitlist | `.waitlist-grid`, `.form-card`, `[data-form="signup"]`, `.row2`, `.radios`, `.check`, `.count`, `[data-success="signup"]`, `[data-echo]` | Name, email, role, team size chips, optional study with a character count, a hidden plan field, a consent box. Success echoes the email. |
| Footer | `.site-footer`, `.foot-grid`, `.foot-bottom` | Ink in both themes: wordmark, one line, four columns, legal line. |
| 404 | `data-view="404"`, `.notfound` | Illustration, mono "404", H1, lead, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/journal?kind=methods`, `#/customers?sector=civic`, `#/waitlist?plan=studio`).
- Plain `#id` links (for example `#export` in the footer) open the view that contains the section, then scroll to it.
- The `titles` map in the script sets the document title per view; update it when you add or rename views. Article and story pages mark their parent link (Journal, Customers) as current.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
