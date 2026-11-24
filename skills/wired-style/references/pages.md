# Pages and sections

Every view in `assets/template.html` is an element with `data-view="name"`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop blocks the brief cannot fill. This style suits anything that publishes often and has more stories than one screen can hold.

| Site | Views | Front page, in order |
|---|---|---|
| Magazine or news site (the template) | home, section, story, author, subscribe, newsletters, about, contact, privacy, terms, 404 | today's picks + lead story + most read, field notes row, the long read feature, three section desks, newsletter band |
| Newsletter or independent writer | home, story, author (as about), newsletters (as the sign-up page), subscribe (if paid), privacy, 404 | lead story, latest as `.cards`, newsletter band; drop most read and the desks |
| Company blog or content brand | home, section (as blog index), story, author, newsletters, about, contact, privacy, 404 | lead story with two secondary stories, `.cards` of the latest posts, one desk per product area, newsletter band |
| Podcast or video show | home, section (as episodes), story (as episode page with notes and transcript), about, contact, privacy, 404 | lead episode, numbered most played, episodes as `.cards`, newsletter band |
| Report, guide or yearbook | home, section (as chapters), story (as a chapter), about, contact, privacy, 404 | lead chapter, chapters as `.notes`, a feature, newsletter band |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Edition strip | `.strip` | One line in monospace capitals with one link. An issue date, an event or an offer. Delete it if there is nothing timely. |
| Header | `.site-header`, `.hdr`, `.brand`, `.brand-mark`, `.nav`, `.hdr-end`, `#search-open`, `#theme-toggle`, `.sub-link`, `.progress` | Sticky. Six section links at most; the progress bar only shows on the story view. |
| Menu | `#menu` (`<dialog class="menu">`), `#q`, `.results`, `[data-latest]`, `#q-status`, `#q-empty`, `.menu-sections`, `.menu-links` | Search filters `.results` by text. Items marked `data-latest` show when the field is empty. |
| Tab head | `.tab-head`, `.tab`, optional `.label` link | Opens every section: heavy rule, black tab on the left, "More" on the right. |
| Front page top | `.top-grid`, `.ph`, `.lead`, `.duo`, `.picks`, `.pick`, `.th`, `.trend`, `.most`, `.promo` | Four picks with square thumbnails, one lead story with two secondary stories, five most-read headlines and a promo box. The visually hidden `h1` names the site. |
| Notes row | `.notes`, `.note` | Exactly four short items, kicker plus small headline plus square thumbnail. Also used under the feature. |
| Feature | `.feature`, `.feature-text` | One 4:3 picture and a centered headline, dek and byline. |
| Section desks | `.trio`, `.desk` | Three sections, each with a tab that links to the section, one picture and three headline links. |
| Newsletter band | `.band`, `.inline-form`, `[data-form="newsletter"]`, `[data-success="newsletter"]` | One newsletter, one field, one button, the fine print. |
| Page head | `.page-head`, `.display`, `.dek` | Kicker, giant centered title, one sentence. Top of every list and info view. |
| Section page | `#sec-title`, `#sec-dek`, `.nl-strip`, `.sec-top`, `.big`, `.side` | `?c=` sets the title, the dek and the topic filter from the `sections` map in the script. |
| Topic filter | `.chips`, `.chip[data-filter]`, `[data-filterable]`, `[data-kind]`, `[data-more]`, `#more`, `[data-empty]` | Chips with `aria-pressed`; cards marked `data-more` wait for "Load more"; an empty message when nothing matches. |
| Card grid | `.cards`, `.card` | Four across, three under 1100px, two under 820px, one under 520px. |
| Story | `.story-head`, `.story-meta`, `[data-save]`, `.story-hero`, `.caption`, `.prose`, `.lede`, `.pull`, `.figure`, `.author-box`, `.initials`, `.topics`, `.topic` | One story template for every article. The save toggle is remembered with the `store` wrapper. |
| Author | `.author-head`, `.rows`, `.row`, `.when` | Initials tile, name, role, bio, a tip link; then dated rows with a picture. |
| Plans | `.billing`, `[data-billing]`, `.plans`, `.plan`, `[data-monthly]`, `[data-yearly]` | Three plans, each under its own tab. The switch swaps every price and period line and the billing select. Plan buttons link to `#/subscribe?plan=…&at=join`. |
| Sign-up | `#join`, `.join`, `[data-form="signup"]`, `#s-plan`, `#s-billing` | Picture and a note beside the form. `?plan=` preselects the plan. |
| FAQ | `.faq`, `details`, `summary` | Three to six questions. |
| Newsletter picker | `[data-form="newsletters"]`, `[data-group]`, `.nl-grid`, `.nl`, `.tick`, `#nl-submit`, `#nl-err` | Tiles are labels with hidden checkboxes; the submit button counts the picks; at least one is required. |
| About | `.about-lead`, `.cols3`, `#standards`, `.standards`, `.mast` | Mission, three short columns, numbered standards, the masthead. |
| Contact | `.contact`, `.ways`, `[data-form="contact"]`, `#c-topic` | Ways to reach each desk beside the form. `?topic=` preselects the topic. |
| Legal | `.legal`, `.prose` | Privacy and terms. Sample text only: the owner must supply real policies. |
| 404 | `data-view="404"`, `.notfound`, `.big` | Giant number, one headline, one sentence, two buttons. |
| Footer | `.site-footer`, `.foot-brand`, `.foot-cols`, `.foot-legal` | Always dark. Four link columns. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/section?c=oceans`, `#/contact?topic=tip`, `#/subscribe?plan=print&at=join`).
- `at=` scrolls to an element ID inside the view after it opens.
- The `titles` map and the `BRAND` constant in the script set the document title per view; section titles come from the `sections` map.
- The story and author views stand for every article and every writer. In a real build, generate one story page per article and one author page per writer from data, and point each card, list item and byline at its own page.
- In a framework project, replace the router with real routes and keep the same URLs where possible (`/climate`, `/story/<slug>`, `/author/<slug>`).
