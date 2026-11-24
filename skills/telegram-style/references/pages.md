# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| App or small tool (the template) | home, faq, apps, docs, changelog, blog, post, about, contact, signup, privacy, 404 | mark, name and tagline with the news rail; devices with platform links; recent news (two cards); the sticker grid; footer |
| Open-source project or library | home, docs, changelog, apps (as downloads and source), faq, blog, post, about, 404 | mark and tagline with the rail of releases; one device or a code block in a laptop bezel; recent releases; the sticker grid of principles; footer |
| Club, community or society | home, blog (as noticeboard), post, about (members), faq, contact, signup (join), privacy, 404 | mark and tagline with the rail of upcoming meetings; two news cards; the sticker grid of what members get; footer |
| Newsletter or small publication | home, blog (issues), post, about, signup (subscribe), faq, privacy, 404 | mark and tagline with the rail of latest issues; the letter block moved up under the tagline; issue cards; the sticker grid of what readers get |
| Help centre for a product | home (as an index), faq, docs, changelog, contact, privacy, 404 | mark and tagline; the rail of notices; a grid of stickers that link to FAQ groups; footer |

Inner pages stay documents in every recipe: a small H1, one callout, then headings, paragraphs and link lists.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.top`, `.top-in`, `.tabs`, `.top-act`, `.top-link`, `#theme-toggle` | Up to five text tabs; the current one gets `aria-current="page"` and the underline. One quiet link with an icon on the right, then the theme button. No logo. |
| Mark and name | `.hero`, `.hero-main`, `.logo`, `.name`, `.tagline` | The round mark (`#mark` symbol), the product name as the H1, a lowercase tagline. Nothing else in the middle column. |
| News rail | `.rail` | A blue title linking to the news list, then two or three items: bold short date, blue headline link. Moves under the name below 980px. |
| Devices | `.devices`, `.dev`, `.dev.wide`, `.pair`, `.phone`, `.tablet`, `.laptop`, `.scr`, `.scr-dark`, `.front`, `.dl` | Pairs of bezels holding SVG screens; `.front` brings one device forward. Each pair has one or two `.dl` links with the platform name in `<b>`. The device art is `aria-hidden`; the link says it all. |
| Mobile link to all apps | `.only-sm`, `.btn` | A single blue pill under the devices, shown only on phones. |
| News cards | `.news`, `.sec-title`, `.cards`, `.card`, `.cover`, `.tone-*`, `.card-t` | Two on the home page, any even number on the list. Cover with a sticker, blue title, one sentence, muted `<time>`. |
| Sticker grid | `.why`, `.why-title`, `.why-grid`, `.sticker` | Six or nine items: a sticker, a one-word blue H3, one sentence that starts with the product name in `<b>`. |
| Document page | `.page`, `.page.solo`, `.page.docs`, `.page-side`, `.doc`, `.note`, `.rule`, `.links`, `.more` | Side sticker (hidden on phones), small H1, callout, content. `.more` adds the double chevron after a link. |
| FAQ | `[data-faq]`, `#faq-q`, `.qi`, `.qg`, `.qa`, `[data-faq-empty]` | Search box; question index grouped under bold labels; answers grouped below with matching IDs; the search filters both. |
| Downloads and source | `.links`, `.src`, `.src-links`, `.fp` | Platform links with icons, then one `.src` per app or library: blue name, description and licence, "more" links, optional fingerprint. |
| Handbook | `.toc`, `.tablist`, `[role=tab]`, `.panel`, `.panel-t`, `.code`, `.code-bar`, `[data-copy]`, `.table-wrap` | Sticky section list, platform tabs (without JS every panel shows with its own heading), code blocks with Copy, plain tables. |
| Release notes | `.seg[data-filter-bar]`, `[data-filter-list]`, `.rel`, `.rel-meta`, `.tag`, `[data-empty]` | Filters by platform; `?platform=` preselects one. |
| News list | `.seg`, `.cards`, `.letter`, `[data-form="newsletter"]` | Topic filters (`?tag=`), cards, then the email block (`#letter`). |
| Article | `.post`, `.back`, `.meta`, `.cover`, `figure` | Back link, H1, date and author, a wide cover, prose with H2s, one device figure, a callout. |
| About | `.promise`, `.dot`, `.team`, `.av` | Story, three promises with round check badges, round initials avatars. |
| Forms | `.form`, `.row2`, `.field`, `.err`, `.choices`, `.choice`, `.success`, `.ok-badge` | `data-form` names the form; `data-err` on each checked field points at its error line; `data-msg` overrides the missing-value message; `[data-success]` replaces the form. |
| Footer | `.foot`, `.foot-in`, `.foot-brand`, `.legal-line` | Name and one sentence, four link columns, the legal line. |
| 404 | `data-view="404"`, `.lost` | One sticker, a friendly H1, one sentence, a pill and a text link. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it: `?to=<id>` scrolls to a section of that view, `?tag=` and `?platform=` preselect filters, `?topic=` preselects the contact topic, `?platform=` also preselects the beta platform.
- Plain `#id` links scroll inside the current view.
- The `titles` map sets the document title per view and `tabOf` decides which tab is underlined for views without their own tab; update both when you add or rename views.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
