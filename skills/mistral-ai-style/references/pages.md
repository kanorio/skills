# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links, some with parameters (`#/models?task=solar`, `#/research?topic=field`, `#/contact?topic=onsite`). Links to a section ID on another view (the footer's `#privacy` and `#terms`) open that view first and scroll. In a framework project each view becomes a real route, and each model, post and role gets its own page.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. Header, footer, home and 404 always ship.

| Site | Views | Home sections, in order |
|---|---|---|
| AI or software startup, developer tool (the template) | home, models (as products or features), pricing, docs, research (blog), post, company, careers, contact, signup, legal, 404 | hero with blocks, names row, threads, chapters, stories, deep band |
| Research lab or institute | home, models (as projects or datasets), research, post, company (people first), careers, contact, legal, 404 | hero, threads (what you study), chapters (programmes), stories (results), deep band |
| Design or engineering studio | home, models (as services or case studies with mosaic covers), research (journal), post, company, contact, legal, 404 | hero with sprites from the studio's world, names row (clients the user confirms), chapters (services), stories (projects), deep band |
| Hardware or device maker | home, models (as products with specs), pricing (as models and prices), docs (setup and support), contact, signup (pre-order or waitlist), legal, 404 | hero, threads (what the device senses or does), chapters (features), stories, deep band |
| Event, game jam or community | home, research (as programme or schedule), company (as organisers), contact (as registration), legal, 404 | hero with the date in the lead, threads (topics), chapters (tracks), stories (past editions), deep band |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.hd`, `.hc`, `.hc-r`, `.brand`, `.hd-nav`, `.hd-fill`, `#theme-toggle`, `.hd-sec`, `.hd-cta`, `#menu-open`, `#menu` (`dialog.sheet`) | Brand cell, up to five nav cells, theme cell, one secondary cell, the ink action cell. Nav and secondary cells hide under 900px; the action hides under 560px and lives in the sheet. With more links, collapse earlier; never wrap. |
| Hero | `.hero`, `.terrain` with `.b.l`, `.b.r`, `.dia`, `.sp`; `.hero-in.frame.node`, `.display`, `.lead`, `.actions` | Centered display headline (one inline sprite at most), a lead, two buttons. Blocks and sprites are absolutely placed in cells; keep at least two cells free under the buttons. `.wide` hides a sprite on phones. |
| Names row | `section.frame`, `ul.names` with `.n2` to `.n5` | Five names the user confirms, set as type; four on tablets, four in two rows on phones. Remove the row without real names. |
| Threads | `section.thr.line`, `svg.threads`, `.chips`, `.chip`, `.chip.dim` | One H2, eight to ten chips: four with sprites, the rest dimmed. The thread paths are decorative and stretch with the band. |
| Chapters | `.chapters`, `nav.ch-nav` (links to `#ch-1` to `#ch-4`), `.ch-list`, `article.ch`, `.ch-t`, `.mosaic.m-*`, `svg.tiles`, `.mspr`, `.mcard` | Two to five rows. Each mosaic uses a different hue and one interface card from the brief's world (a chart, a JSON response, a checklist, a device list). The index hides under 1100px. |
| Stories | `.stories`, `.st-tabs` (`role=tablist`), `#st-t0`…, `#st-p`, `#st-px`, `#st-fact`, `#st-q`, `#st-who`, `#st-org` | Drawn from `STORIES` in the script: one fact and one quote per tab. Two to four tabs. Without real quotes, remove the section. |
| Deep band | `section.deep`, `ul.cells3` | Three link cells to the deepest pages. One per page. |
| Page head | `section.phead`, `.frame.node.pad`, `.eyebrow`, `.h1`, `.lead`; `.split` when an H1 shares the row with a control | Every inner view. |
| Toolbar | `.bar`, `.count[aria-live]`, `.tags` with `button.tag[aria-pressed]`, `label.search` | Models, research and roles. |
| Models | `#m-list[data-render=models]`, `.card`, `.tags`, `.specs`, `#m-empty`, `[data-reset=models]` | Drawn from `MODELS`; filters by `task` and search. A two-column `.two` with a code panel follows. |
| Pricing | `.seg [data-bill]`, `ul.plans`, `.plan`, `.plan.is-pop`, `.pop`, `.pi`, `.price b[data-month][data-year]`, `.feat`, `table.cmp`, `td.y`, `.no`, `.faq`, `details.qa` | Two to four plans, one popular. Yearly prices live in `data-year`. `td.y` draws a check and keeps "Included" for screen readers. |
| Docs | `.docs`, `aside.d-side`, `details#d-menu`, `#d-q`, `.d-grp`, `#d-none`, `article.doc`, `.crumbs`, `.code[data-tabs]`, `.copy`, `.note`, `.ptbl`, `.pager`, `#d-fb`, `#d-thanks`, `nav.toc` | `/` focuses the search; the sidebar collapses into a closed menu under 900px; section links light up as they scroll by. |
| Research | `#p-feat.feature-post` (static), `#p-list[data-render=posts]`, `#p-count`, `#p-q`, `button.tag[data-topic]`, `#p-empty` | The featured note is in the markup so it shows without JavaScript; the grid is drawn from `POSTS`. |
| Post | `article`, `.art`, `.byline`, `.av`, `.cover.m-*`, `.prose`, `figure.fig`, `.steps-chart`, `.legend`, `ul[data-render=more]` | Tag, H1, byline, a wide mosaic cover, prose with a stepped chart and a pull quote, then three related posts. |
| Company | `.cells3` values, `ol.stair` with `i[style="--n:1"]`, `ul[data-render=team]`, `.person`, `.av` | Values with sprites; a stair timeline whose bars rise one block per year; people from `TEAM` as initials on colored squares. |
| Careers | `.cells3` perks, `#r-team`, `#r-loc`, `#r-list[data-render=roles]`, `#r-count`, `#r-empty` | Drawn from `ROLES`; rows link to the contact form with `?topic=careers`. |
| Contact | `.two`, `ul.chan`, `#c-form .fcard`, `form[data-form=contact]`, `#c-topic` | `#/contact?topic=<value>` preselects the topic. |
| Sign-up | `.two`, `form[data-form=signup]`, `.radios`, `.rad`, `.mosaic.m-sun` with a steps card | Password `minlength`, a choice and a terms checkbox. |
| Forms | `form[data-form]`, `.fld`, `.in`, `.hint`, `.err`, `.check`, `[data-success]`, `[data-again]` | Every validated field has `aria-describedby` whose first ID is its `.err`. |
| Legal | `.lg`, `#privacy`, `#terms` | Sample text, marked as such. |
| Footer | `.ft`, `.ft-cols`, `form.nl[data-form=newsletter]`, `.ft-bot`, `.ft-land`, `.ft-mark`, `.ft-sp`, `.stripes` | Link cells, newsletter, small print, the mark on the stripes. |
| 404 | `[data-view="404"]`, `.nf`, `.terrain` | Eyebrow, H1, two buttons, a small floor of blocks with a sprite. |
