# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links (with optional parameters, `#/platform?tab=risk`, `#/demo?topic=sourcing`). In a framework project each view becomes a real route and each story, resource and module gets its own page.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| B2B software or SaaS (the template) | home, platform, customers, story, resources, article, events, company, demo, trial, legal, 404 | gradient hero with the product card, story switcher, workspace split, feature cards, stats, resource cards, gradient block |
| Consultancy or system integrator | home, platform (as services, tabs per practice, "Ways to work with us" instead of prices), customers (projects), story, resources (insights), article, events, company, demo (as contact), legal, 404 | hero with a project-plan card (milestones, owners, status), story switcher, services as feature cards, stats, insights, gradient block |
| Enterprise or managed services | home, platform (service lines and SLAs), customers, story, company, demo (as contact), legal, 404 | hero with a service-status card (tickets, uptime, next visit), feature cards, workspace split as a status table, stats, gradient block |
| Product launch or single tool | home, platform (features and plans), trial, demo, legal, 404 | hero, workspace split, feature cards, plans teaser, FAQ, gradient block |
| Training or certification provider | home, platform (programmes in tabs, plans as packages), events, resources, company, demo, legal, 404 | hero with a learning-plan card, feature cards, events teaser, stats, gradient block |
| Conference or summit by a company | home, events, resources (talks), company, legal, 404 | hero with an agenda card, the flagship gradient block, sessions as event rows, speakers as people, registration form |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.hd`, `.hd-in`, `#menu-open`, `.brand`, `.nav`, `#theme-toggle`, `.hd-link`, `.btn.btn-primary.btn-sm`, `#menu` (`<dialog class="sheet">`) | Brand, up to five nav links, theme button, a text link and one small button. Links collapse into the dialog under 1080px; the text link hides under 560px and the button under 480px (the dialog repeats it). With more links, collapse earlier; never wrap. Buttons placed in the footer keep their own colours (`.ft a:not(.btn)`). |
| Hero | `.hero`, `.hero-in`, `.display`, `.lead`, `.btn-light`, `.btn-outline-light`, `.hero-art[role=img]` | Gradient band. Left: headline, lead, two buttons. Right: the product card with its overlapping note, avatar, star and sparkle. |
| Product card | `.ui`, `.ui-rail` (`.on`), `.ui-main`, `.ui-bar`, `.ui-time`, `.bubble`, `.ui-msg`, `.ui-res`, `.ui-chips`, `.ui-btn`, `.ui-input`, `.note`, `.av-float`, `.s-hero`, `.s-hero2` | One task, start to finish: the request, the answer, the result, the next action. Rewrite it for the brief's own product or service. |
| Section head | `.sh` with an `.h2`, a `<p>` and an optional `.link` | Opens most sections. |
| Story switcher | `.switch`, `.sw-list > li.is-on`, `.sw-btn[data-co][data-tone][data-fig][data-unit]`, `.sw-body`, `#sw-media`, `#sw-logo`, `#sw-fig`, `#sw-unit` | Three to five items; the button data fills the frame. Without JS every item shows its summary. |
| Workspace split | `.ws`, `.ws-art.scene.t4[role=img]`, `.ui-t`, `.ui-t-h`, `.ui-row`, `.ws-links` | A status table of three or four rows beside two chevron links with a sentence each. |
| Feature cards | `ul.cards2[data-render=cards]`, `.fc`, `.scene`, `.mini` | Drawn from the first four `MODULES`. |
| Stats | `dl.stats` | Three real figures with captions, or remove. |
| Resource cards | `ul.g.g3`, `a.card`, `.chip.on-media`, `.card-b` | Three: a guide, a report and an event work well. |
| Gradient block | `.cta`, `.s-cta`, `.s-cta2` | One sentence of H2, one line, a white and an outline button. Closes the home page; carries the flagship event. |
| Page head | `.phead`, `.crumbs`, `.h1`, `.lead`, `.s-ph` | Breadcrumb on every inner view, a soft violet wash and one star. |
| Module tabs | `.pills[role=tablist][data-render=tabs]`, `[data-render=panels]`, `.tpanel[role=tabpanel]`, `.tp-art`, `.checks` | Drawn from `MODULES`; IDs `tab-<id>` and `pn-<id>`; `#/platform?tab=<id>` opens one. |
| Plans | `.g.g3`, `.plan`, `.plan.featured`, `.price [data-m][data-y]`, `[data-per]`, `[data-bill]` | Two or three; one featured; the billing pills swap prices. |
| FAQ | `.acc` with `<details>` | Four to six questions. |
| Customers | `.toolbar`, `button[data-ind]`, `#c-reg`, `#c-count`, `#c-list[data-render=stories]`, `#c-empty`, `.quote` | Drawn from `STORIES`; industry pills and a region select. |
| Story | `.logo-chip.static`, `.stats`, `.doc.rev`, `.prose`, `.aside`, `.facts`, `.card-row` | Challenge, what changed, result, a pull quote; an "At a glance" aside; the next story. |
| Resources | featured `a.card.card-row`, `button[data-type]`, `#r-q`, `#r-count`, `#r-list[data-render=posts]`, `#r-empty` | Drawn from `POSTS`; type pills and title search. |
| Article | `.byline`, `.art-hero`, `.doc`, `.toc`, `.prose`, `.tbl-wrap .tbl`, `.callout` | Author, date, on-this-page list, table, quote, a closing callout. |
| Events | `.cta` with `.ev-facts`, `ul.evs > li.ev`, `.date`, `[data-ev]`, `#register`, `form[data-form=event]` | Register buttons select the event in the form. |
| Company | `.vcard` values, `ol.tl`, `.people[data-render=team]`, office `.vcard`s | Drawn from `TEAM`; avatars cycle three gradients. |
| Demo (contact) | `.split2`, `.fcard`, `form[data-form=contact]`, `#d-topic`, `.steps`, `.lines` | `#/demo?topic=<module id>` preselects the topic. |
| Trial (sign-up) | `.split2`, `form[data-form=signup]`, `.opts` chip radios, `.aside` with `.checks` | Email, name, company, team size, terms. |
| Forms | `form[data-form]`, `.form`, `.fld`, `.in`, `.pick`, `.err`, `.check`, `.opts`, `.opt`, `[data-success]`, `[data-again]` | Every validated field has `aria-describedby` pointing at its `.err`. |
| Footer | `.ft`, `.ft-top`, `form[data-form=newsletter]`, `.ft-cols`, `.ft-bot` | Lavender layer; link columns and legal links. |
| Floating button | `a.fab` | Links to the contact view; hidden there and on the sign-up view by `[data-route]`. |
| 404 | `[data-view="404"]` | A star, H1, a line, two buttons. |
