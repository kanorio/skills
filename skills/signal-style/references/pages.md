# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop sections the brief cannot fill. Header, footer, home, legal and 404 always ship.

| Site | Views (template name → what it becomes) | Home sections, in order |
|---|---|---|
| Nonprofit or open-source app (the template: a free route map) | home, get, donate, blog, post, help, mission, volunteer, contact, legal, 404 | strip, periwinkle hero with phones, centred question, wide reason, four cards, short reason, flipped reason with the donate button |
| Charity, food bank or community fund (no app) | get → "Get Help" (who qualifies, opening times, places), donate, blog → news, help → FAQ, mission, volunteer, contact | strip with the current appeal, hero with two tilted photo cards or printed flyers in the phone frames, question, reasons with panels, four cards for programmes, flipped reason with the donate button |
| Privacy tool, browser extension or desktop utility | get → downloads per platform, donate → "Support" or pricing tiers, help → docs FAQ, blog → release notes | hero with the product screens, question, reasons (what it blocks, what it never collects, how it is funded), cards for features |
| Open-source library or developer project | get → install and quick start, donate → sponsors, volunteer → contribute, blog → changelog | hero with a terminal or editor in the browser window instead of phones, cards for features, reason on the license |
| Campaign, petition or advocacy group | get → "Take Action", donate, volunteer, blog → updates, help → FAQ | strip with the deadline, hero with a phone showing the petition card, reasons on what changes, cards for actions |
| Public service, library or clinic | get → "Visit" (hours and places), donate → "Support us", help → before you visit, volunteer → join | hero with the booking or opening-hours screen, reasons, four cards for services |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.hdr`, `.logo`, `.nav`, `.hdr-give`, `#theme-toggle`, `#menu-btn`, `#menu` | Wordmark, at most five links, one blue button, the toggle. Keep the links identical in `.nav` and `#menu`. |
| Strip | `.strip` with `svg.il` (`#il-kite`) | One sentence and one bold link. Home only. On phones the drawing moves under the text. |
| Hero | `.hero`, `.hero-in`, `.hero-copy`, `.display`, `.devices`, `.phone.ph-a.silver`, `.phone.ph-b` | H1 of two to five words, a lead under 40 words, one `.btn-white.btn-lg`. Two phones; move them with `--x`, `--y`, `--r`. Below 860px the phones sit under the copy. |
| Question | `.why` | "Why use …?" and one muted line. |
| Reason row | `.split`, `.split.short`, `.split.flip`, `.split-in`, `.copy`, `.panel`, `.panel.lilac`, `.panel.peri` | H2, one or two paragraphs, an optional `.btn-line`. Use the three variants in that order so panels step across the page. |
| Feature cards | `.on-band.band-pad`, `.cards`, `.card` | Four cards (two or six also work): illustration, `.h3`, one sentence. |
| Get the app | `.get-grid`, `.get-col`, `.get-art`, `.window`, `.note-bar`, `.link-list`, `#web`, `#source`, `#install`, `.steps` | Two columns, each with a big heading, a periwinkle art panel cropped at the bottom, blue buttons and a note. Three numbered steps on the grey band. |
| Donate | `.seg [data-tab]`, `[data-panel]`, `.don-card`, `.don-head`, `.dots`, `[data-form="donate"]`, `.step[data-step]`, `.amounts`, `.amt`, `.money`, `.summary`, `.bars`, `.other`, `.foot-links` | Three steps (amount, details, review) inside one card; the head shows the step name and dots. `#/donate?amount=50&freq=monthly` preselects. The `.bars` percentages are placeholders until the owner gives real numbers. |
| Blog | `.on-band` view, `[data-chips="posts"]`, `#post-q`, `#post-count`, `#post-list li[data-topic][data-post]`, `.post-card`, `.cover`, `#older`, `[data-empty="posts"]` | Every card links to `#/post?p=<id>` and needs an entry in `POSTS` in the script. Four show first; "Older posts" shows the rest. |
| Post | `[data-view="post"]`, `[data-p="av|title|by|cover|body"]`, `#copy-link`, `#post-url` | Title, byline, avatar and cover are copied from the blog card; the body comes from `POSTS` (a line starting with `> ` becomes a quote). The markup shows the first post without JavaScript. |
| Help | `#faq-q`, `[data-chips="faq"]`, `#faq-count`, `#faq-list details.qa[data-topic]`, `[data-empty="faq"]`, `.ask` | Search opens matching answers. `#/help?topic=privacy` and `?q=lift` preselect. |
| Mission | `.page-head`, `.split`, `.timeline`, `.people`, `.person`, `.cta` | Statement, two reasons, dated history (real dates only), people, a periwinkle call to action. |
| Volunteer or jobs | `[data-chips="roles"]`, `#role-count`, `#role-list li.role[data-team]`, `[data-apply]`, `#apply`, `[data-form="volunteer"]`, `#v-role` | Each `data-apply` value must match an option in `#v-role`. `data-team` can hold several words. |
| Contact | `.ways`, `#c-form`, `[data-form="contact"]`, `.pills`, `#c-count` | `#/contact?topic=press&at=c-form` preselects and scrolls. |
| Legal | `[data-view="legal"]`, `#privacy`, `#terms` | `#/legal?at=terms` scrolls to the terms. |
| Footer | `.site-footer`, `.foot`, `[data-form="newsletter"]` | Copyright, one short paragraph, the newsletter field, three link columns. |
| 404 | `data-view="404"`, `.notfound` | A periwinkle panel with the signpost, a short H1, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it: `#/post?p=offline`, `#/blog?topic=privacy`, `#/help?topic=donate`, `#/volunteer?team=code`, `#/contact?topic=map`, `#/donate?amount=100&freq=monthly`, `#/get?at=install`.
- `?at=<id>` scrolls to that element inside the view.
- The `titles` map in the script sets the document title per view; a post uses its own title. Update both when you add or rename views, and keep the nav links in the header and in `#menu` identical.
- The theme choice is stored with the template's `store` wrapper (`evenpath-theme`); rename the key with the brand.
- In a framework project, replace the router with real routes (`/blog/[slug]`, `/donate`), keep the same URLs where possible, and move `POSTS`, roles, FAQ answers and people into typed data.
