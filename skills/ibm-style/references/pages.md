# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links (with optional parameters, `#/services?tab=predict`, `#/contact?topic=pilot`). In a framework project each view becomes a real route and each case study, insight and role gets its own page.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Consultancy or engineering services (the template) | home, services, work, case, insights, article, about, careers, events, contact, legal, 404 | hero with Latest list, mosaic strip, service tiles, feature result with More results, stats band, steps, insights tiles, blue strip |
| B2B software or platform | home, services (as products with tabs and plans), work (customer stories), insights (blog), article, about, careers, contact, legal, 404 | hero, mosaic strip, product tiles, feature story, stats band, steps (how it works), insights, blue strip |
| Manufacturer or industrial supplier | home, services (product families in tabs, no plans), work (applications), case, about, careers, contact, legal, 404 | hero with Latest list (news, trade fairs), mosaic strip, product family tiles, feature application, stats band (capacity, sites, years), insights or downloads, blue strip |
| Research institute or nonprofit | home, services (programmes), work (projects), case, insights (publications), article, events, about, contact, legal, 404 | hero, mosaic strip, programme tiles, feature project, stats band, events list teaser, publications, blue strip |
| Professional practice (law, accounting, architecture) | home, services (practice areas), about (people first), insights, article, contact, legal, 404 | hero, practice tiles, people row, insights, blue strip |
| Event or conference by an organisation | home, events, about, contact, legal, 404 | hero with the date in the eyebrow, mosaic strip, programme as steps, speakers as people, registration form, blue strip |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.hd`, `.hd-in`, `#menu-open`, `.brand`, `.nav`, `#theme-toggle`, `.hd-cta`, `#menu` (`<dialog class="sheet">`) | Brand, up to six text links, theme button, one flush blue action. Links collapse into the dialog under 1056px; the action hides under 600px. With more links, collapse earlier; never wrap. |
| Hero | `.hero`, `.hero-main`, `.eyebrow`, `.display`, `.lead`, `.btn-row`, `.hero-side`, `.label`, `.rl`, `.enter` with `--i` | Eyebrow and blue display headline, light lead, a primary and a tertiary button; a "Latest" hairline list of three items on the right. |
| Mosaic strip | `.wrap.mosaic.m8.enter` with eight `<svg class="kN rN">` | Eight squares (four on phones), each one `<use href="#t-…">`; decorative, `aria-hidden`. |
| Split head | `.split` with an `.h2` and a `<div>` holding a `<p>` and an optional `.link` | Opens most sections. |
| Tiles | `ul.g.g4.gt` (or `.g3`, `.g2`), `.tile`, `.picto`, `.h3`, `.go` | Three or four per row; all tiles in a row share one height. |
| Feature result | `.feature`, `.feature-main`, `.mosaic` (`--cols: 3`), `.feature-card.tile.tile-lg`, `.rl` | The card covers the bottom-right two squares; under 672px it drops below the mosaic. |
| Stats band | `section.band`, `.split`, `dl.stats` | Three or four real figures with captions, or remove. |
| Steps | `ol.g.g4.steps` with `.meta` | Numbered stages with a duration. |
| Blue strip | `a.strip`, `.strip-in` | One sentence (bold first clause) and an arrow, full width, before the footer. |
| Page head | `.phead`, `.crumbs`, `.h1`, `.lead` | Breadcrumb on every inner view. |
| Tabs | `.tabs[role=tablist]`, `.tab[role=tab]`, `.panel[role=tabpanel]`, `.fig` | IDs `tab-<key>` and `pn-<key>`; `#/services?tab=<key>` opens one. |
| Plans | `.g.g3.gt`, `.plan`, `.plan.featured`, `.tag`, `.price` | Two or three; one featured. |
| FAQ | `.acc` with `<details>` | Inside the right half of a split head. |
| Results | `.toolbar`, `.seg [data-ind]`, `#w-svc`, `#w-count`, `#w-list[data-render=cases]`, `.card .fig`, `#w-empty` | Drawn from `CASES`; filters by industry and service. |
| Case study | `.facts`, `.stats`, `.doc`, `.toc`, `.prose` | Facts row, figures, then challenge, approach and result with a quote. |
| Insights | featured `a.feature.tile`, `button.tab[data-topic]`, `#p-q`, `#p-list[data-render=posts]`, `#p-empty` | Drawn from `POSTS`; topic toggles and title search. |
| Article | `.byline`, `.doc`, `.toc`, `.prose`, `.tbl-wrap .tbl`, `figure` | Author, date, on-this-page list, table, quote. |
| About | `.steps` values, `section.band` with `.timeline`, `#team[data-render=team]`, office tiles | Drawn from `TEAM`; initials blocks cycle four colours. |
| Careers | `.steps` benefits, `#r-dis`, `#r-loc`, `#r-list[data-render=roles]`, `.row`, `#r-empty` | Drawn from `ROLES`. |
| Events | `.feature` grid, `li.ev` with `<time>`, `[data-ev]`, `#register.fcard`, `form[data-form=register]` | Register buttons select the event in the form. |
| Contact | `.feature` grid, `form[data-form=contact]`, aside `.rl` | `#/contact?topic=<value>` preselects the topic. |
| Forms | `form[data-form]`, `.form`, `.fld`, `.in`, `.pick`, `.err`, `.check`, `.radios`, `[data-success]`, `[data-again]` | Every validated field has `aria-describedby` pointing at its `.err`. |
| Footer | `.ft`, `.ft-top`, `form[data-form=newsletter]`, `.ft-cols`, `.ft-bot` | Dark band; link columns, offices, legal links. |
| 404 | `[data-view="404"]` | Mono code, H1, two buttons, a 2 by 2 mosaic. |
