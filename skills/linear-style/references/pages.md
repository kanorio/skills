# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of product

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Product | Views | Home sections, in order |
|---|---|---|
| SaaS for teams (the template) | home, changelog, pricing, signup, contact, privacy, terms, 404 | hero with product window, logo row, bento features, steps with code, numbers, quote, changelog teaser, FAQ, closing call to action |
| Developer API or CLI | home, changelog, pricing, signup, privacy, terms, 404 | hero with a window showing requests and logs, steps with code (first), bento, changelog teaser, FAQ, call to action |
| AI product | home, changelog, pricing, signup, contact, privacy, terms, 404 | hero with a window showing input, output and sources, bento, numbers, quote, FAQ, call to action |
| Waitlist before launch | home, signup, privacy, 404 | hero with the email field in place of the buttons and a preview window labeled as a preview, bento (three tiles), FAQ |
| Changelog or docs hub for an existing product | home (as overview), changelog, contact, 404 | page head, changelog teaser, bento of topics, FAQ |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `#theme-toggle`, `#menu-open` | Brand, four links at most, theme toggle, quiet "Log in", one primary button. The links move into `#menu` (`<dialog class="sheet">`) on narrow screens. |
| Hero | `.hero`, `.grid-bg`, `.glow.glow-hero`, `.pill`, `.display.gradient-text`, `.lead`, `.btn-row` | Centered: announcement pill, one display headline, one lead sentence or two, primary and ghost buttons. |
| Product window | `.stage`, `.window`, `.window-bar`, `.app`, `.app-side`, `.app-list`, `.ticket`, `.app-detail`, `.draft` | The product's real screen in HTML. The outer element has `role="img"` and a description; the inner markup is `aria-hidden`. Sidebar hides under 1000px, detail pane under 680px. |
| Logo row | `.logos` | Four to six customer names set as type in varied weights. Only names the user confirms. |
| Bento | `.bento`, `.tile`, `.tile.wide`, `.tile.full`, `.vignette`, `.stack`, `.keys`, `.typing`, `.chart` | Title, one sentence, a small vignette at the bottom built from the product's objects. |
| Steps | `.steps`, `.step`, `.label` | Three numbered steps with a monospace violet number. |
| Code block | `.code`, `.code-tabs`, `[role=tab]`, `[data-copy]`, `pre` with `.k`, `.s`, `.c` | Two or three tabs (terminal, API, SDK). Keep lines short; the copy button copies the visible tab. |
| Numbers | `.numbers`, `.number` | Three real figures with captions, or remove the section. |
| Quote | `.big-quote` | One quote with permission, gradient text, initials avatar, name and role. |
| Changelog teaser | `.teaser` | Three latest entries: monospace date, title, arrow. |
| FAQ | `.faq`, `details`, `summary` | Three to six questions; the plus icon turns into a cross. |
| Closing call to action | `.cta`, `.glow` | One H1-size line, one sentence, two buttons. |
| Page head | `.page-head`, `.glow.glow-head` or `.grid-bg`, `.label`, `.h1.gradient-text`, `.lead` | Top of every view except home. Use `.glow-head` (not `.glow-hero`) here: page heads clip their overflow. |
| Changelog | `.log-item`, `time`, `.log-shot` | One article per release with an ID, a sticky monospace date, a title, a short note, an optional interface snippet and a short list. |
| Pricing | `.billing`, `[data-billing]`, `.plans`, `.plan.featured`, `.plan-head`, `[data-monthly]`, `[data-yearly]`, `.compare` | Plans with one featured; prices switch with the billing buttons; `?plan=` in links sets the featured plan; a comparison table below. |
| Sign up | `.split`, `.ticks`, `.form-card`, `[data-form="signup"]` | Reasons on the left, the form on the right: work email, company, team size, plan. `?plan=` preselects the plan. |
| Contact | `[data-form="contact"]` | Name, work email, topic, message. `?topic=` preselects the topic. |
| Footer | `.site-footer`, `.footer-grid`, `.footer-bottom`, `.status` | Brand and one line, three link columns, the legal line, and a status line only if a status page exists. |
| 404 | `data-view="404"`, `.notfound`, `.code404` | Faint grid, monospace "404", a short H1, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/signup?plan=team`).
- Plain `#id` links (for example `#features` in the footer) go to the home view first, then scroll.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
