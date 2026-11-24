# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Online school or courses (the template) | home, courses, course, journal, post, pricing, about, privacy, terms, 404 | hero, logo row, callout blocks, how it works (checklist + document card), course cards, quotes, letter block, FAQ, closing call to action |
| Newsletter or writer | home, journal, post, about, privacy, 404 | hero with the email form in place of the buttons, three recent posts as cards, callout blocks (what readers get), quotes, FAQ |
| Software product or app | home, pricing, journal (as changelog or blog), post, about, privacy, terms, 404 | hero, logo row, callout blocks (three main capabilities), how it works with the document card showing the product's real objects, feature cards, quotes, pricing teaser or letter block, FAQ, closing call to action |
| Knowledge base or docs | home, journal (as guides), post, about, 404 | hero with a short search-style input, callout blocks as topic entry points, guide cards, FAQ |
| Small shop | home, courses (as shop), course (as product), pricing (remove or use for bundles), about, privacy, terms, 404 | hero, product cards, callout blocks (shipping, returns, care), quotes, letter block, FAQ |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `#theme-toggle`, `#menu-open` | Brand, four links at most, theme toggle, a quiet "Log in", one ink button. On narrow screens the links move into `#menu`, a `<dialog class="sheet">`. |
| Hero | `.hero`, `.hero-grid`, `.display`, `.lead`, `.btn-row`, `.hero-note`, `.hero-art` | A tag pill linking to the newest thing, one display headline, one lead paragraph, an ink and a ghost button, an optional one-line note, an illustration. |
| Logo row | `.logos` | Four to six names set as type. Only names the user confirms. |
| Callout blocks | `.blocks`, `.callout` (+ `.blue`, `.pink`, `.green`, `.purple`), `.page-icon` | Three blocks, each with an icon tile, an H3 and one sentence. One tint per block. |
| How it works | `.split`, `.checklist`, `.box`, `.doc`, `.doc-bar`, `.doc-body`, `.doc-cover`, `.doc-title`, `.doc-line`, `.doc-toggle` | Text with a three-item checklist on the left, the document card on the right. Fill the card with the product's own objects and words. Mark it `aria-hidden` and describe it in the text. |
| Cards | `.cards`, `.card`, `.card-cover` (+ tint), `.card-body`, `.card-meta` | Cover with a small illustration, a tag, an H3, one sentence, metadata at the bottom. Whole card is the link. |
| Quotes | `.quotes`, `.quote`, `.avatar` | Three quotes the user is allowed to publish. Initials avatars in different tints. |
| Letter block | `.letter`, `.inline-form`, `[data-form="newsletter"]`, `[data-success="newsletter"]` | Yellow block, a short headline, an email field and a button, an illustration. The success state replaces the form. |
| FAQ | `.faq`, `details`, `summary` | Three to six questions, answers of one to three sentences. |
| Closing call to action | `.cta` | Small illustration, one H1-size line, one muted sentence, two buttons. |
| Page head | `.page-head`, `.eyebrow`, `.h1`, `.lead` | Used at the top of every view except home and post. |
| Filters | `.chips`, `.chip[data-filter]`, `[data-filterable]`, `[data-level]`, `[data-empty]` | Toggle buttons with `aria-pressed`; an empty message when nothing matches. |
| Course or product page | `.course-grid`, `.curriculum`, `.lessons`, `.locked`, `.enroll` | Toggle sections of lessons with durations; locked rows show a lock and "Members"; a sticky card with the price and one ink button. |
| Article | `.article-head`, `.byline`, `.article`, `.table-scroll` | A tag, H1, lead, byline with an initials avatar, then prose in the 680px column: H2s, callouts, quotes with an ink rule, lists, tables. End with a letter block. |
| Pricing | `.billing`, `[data-billing]`, `.plans`, `.plan`, `.plan.featured`, `.plan-head`, `[data-monthly]`, `[data-yearly]` | One to three plans. Prices switch with the billing buttons. The featured plan follows `?plan=` in the link. |
| Contact | `.contact-grid`, `[data-form="contact"]` | Short story on the left, the form on the right: name, email, topic select, message. `?topic=` preselects the topic. |
| Footer | `.site-footer`, `.footer-grid`, `.footer-bottom` | Brand with one sentence, three link columns, the legal line. |
| 404 | `data-view="404"`, `.notfound` | An illustration, one friendly H1, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/pricing?plan=writer`).
- Plain `#id` links scroll inside the current view.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
