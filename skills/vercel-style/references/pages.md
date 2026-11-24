# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Developer tool or CLI (the template) | home, features, pricing, docs, changelog, blog, post, contact, signup, privacy, terms, 404 | hero with install command, product window, logo cells, feature cells with vignettes, steps with tabbed code, stats, quote, changelog teaser, closing call to action with the mesh pane |
| API product | home, docs (as the API reference), pricing (per request), changelog, signup, privacy, terms, 404 | hero with a request and its JSON response in the window, steps with code first, feature cells, stats, call to action |
| Infrastructure or data product | home, features, pricing, docs, changelog, contact, privacy, terms, 404 | hero with a metrics dashboard, logo cells, feature cells, stats, quote, call to action |
| Open-source library or framework | home, docs, changelog, blog, post, 404 | hero with the install command and a code sample in the window, feature cells, a sponsors or contributors cell grid, changelog teaser |
| Engineering team or dev studio | home (projects as feature cells), blog, post, contact, 404 | hero with a terminal-style window of shipped work, feature cells as services, stats, quote, call to action |
| Launch or waitlist | home, signup, privacy, 404 | hero with the email field in place of the buttons, a preview window labeled as a preview, three feature cells |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `#theme-toggle`, `.hide-sm`, `#menu-open` | Brand, five links at most, theme toggle, a secondary and a primary button. Under 860px the links and the secondary button move into `#menu` (`<dialog class="sheet">`). Never let the header wrap; with more links, collapse earlier. |
| Hero | `.hero`, `.hero-grid`, `.pill`, `.display`, `.lead`, `.btn-row`, `.install`, `.enter` | Pill and display headline on the left; lead, two buttons and the install command on the right. `.enter` with `--i` staggers the entrance. |
| Product window | `.stage`, `.window.fade`, `.window-bar`, `.app`, `.app-side`, `.app-main`, `.app-title`, `.kpis`, `.kpi`, `.table`, `.tr`, `.tr.th`, `.strip[data-strip]`, `.st`, `.dot` | The product's real screen. `role="img"` with a description on `.window`, `aria-hidden` inside. The sidebar hides under 1000px; under 760px the KPIs go 2 by 2 and the table keeps only the name and status. |
| Logo cells | `.cells.c6.logos.cross` | Six customer names set as type. Only names the user confirms; otherwise remove the section. |
| Feature cells | `#features`, `.section-head`, `.eyebrow`, `.cells.c3.cross`, `.cell.feature`, `.vig` | Six cells: icon, H3, one sentence, a vignette (`.mini` with `.mini-row`, `.comment`, `.bars`, `.trace`, `.chips`). Three, four or six cells; keep the grid full. |
| Steps and code | `#how`, `.cells.c3`, `.cell.step`, `.code[data-tabs]`, `.code-bar`, `[role=tablist]`, `[data-copy]` | Three numbered steps, then a code block with two or three tabs. The copy button copies the visible tab. |
| Stats | `.cells.c3`, `.cell.stat` | Three real figures with captions, or remove the section. |
| Quote | `.quote` | One quote with permission, initials avatar, name and role. |
| Changelog teaser | `.head-row`, `.list` | Three latest entries linking to their IDs on the changelog. |
| Closing call to action | `#start`, `.cells.c2.cta`, `.mesh`, `.term` | Text and buttons in the left cell; the mesh pane with a small product card in the right cell. The only mesh on the page. |
| Page head | `.page-head`, `.eyebrow`, `.h1`, `.lead`, `.btn-row` | Top of every view except home and docs, closed by a hairline. |
| Product tour | `[data-tabs]`, `.tabs`, `.tour`, `.ticks`, `.window` | Underlined tabs; each panel pairs an H2, a lead and three ticks with a window. Arrow keys move between tabs. |
| Pricing | `.billing[data-billing]`, `.cells.c3`, `.plan`, `.plan.featured`, `[data-monthly]`, `[data-yearly]`, `#estimate`, `.calc`, `#seats`, `#runs`, `.breakdown`, `.compare`, `#faq` | `?plan=` sets the featured plan. The estimator reads the `rates` object in the script; update it with real prices or remove the section. |
| Docs | `.docs`, `details.doc-side`, `#doc-q`, `.doc-nav [data-k]`, `#doc-empty`, `.prose`, `.crumbs`, `.note`, `.ref`, `.pager`, `#helpful`, `.toc` | The search matches link text and `data-k` keywords. Every heading has an ID used by the sidebar and "On this page". The sidebar is a `<details>` that the script opens on desktop and closes on phones. |
| Changelog | `.filters [data-filter][data-for="log"]`, `[data-count-for]`, `[data-list="log"]`, `.log[data-kind]`, `[data-empty-for]` | One article per change with an ID, a mono date, a kind badge (New, Improved, Fixed) and an optional version badge. |
| Blog | `.card.featured-post`, `.filters [data-for="posts"]`, `[data-list="posts"]`, `.card[data-kind]`, `.cover` | One featured post and cards in joined cells; covers are a mono figure on a fine grid. |
| Post | `.article`, `.meta`, `.byline`, `.prose`, `.figure`, `.pull`, `.code` | Back link, meta line, H1, author, prose with H2s, a figure drawn in SVG, a code block and a pull quote. |
| Contact and sign up | `.split`, `.ticks`, `.form-card`, `[data-form="contact"]`, `[data-form="signup"]`, `[data-success]` | Reasons on the left, the form on the right. `?topic=` and `?plan=` preselect the selects. |
| Footer | `.site-footer`, `.footer-grid`, `.footer-news`, `[data-form="newsletter"]`, `.footer-bottom`, `.status` | Brand and one line, four link columns, a changelog-by-email form, the legal line and a status line only if a status page exists. |
| 404 | `data-view="404"`, `.notfound`, `.code404` | A mono line, a short H1, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/signup?plan=hobby`).
- Plain `#id` links (for example `#cli` in the footer) open the view that contains the section, then scroll to it.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- In a framework project, replace the router with real routes, keep the same URLs where possible, and turn the docs into real pages with the same sidebar.
