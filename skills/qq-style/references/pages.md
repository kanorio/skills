# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill. The first screen of the home page is always the aurora hero: one glowing title, one white pill, one short line, and a row of quick links at the foot.

| Site | Views | Home sections, in order |
|---|---|---|
| App or software product (the template) | home, download, changelog, blog, post, events, pricing, faq, about, contact, signup, privacy, terms, 404 | hero with the platform row; three aurora cards; a feature with an interactive aurora panel; four plain features; upcoming events; three stories; closing aurora band |
| Music release, album or artist | home, events (tour dates), blog (news), post, about, contact, signup (mailing list), privacy, 404 | hero with the record title and a "Listen" pill, the foot row as listening services written as text; tracks or videos as aurora cards; tour dates; news; closing band |
| Art or music event, festival, exhibition | home, events (programme), pricing (tickets), faq, about, contact, privacy, 404 | hero with the event name and dates, the pill to tickets, the foot row as days or venues; programme highlights as aurora cards; the full programme; ticket plans; closing band |
| Club, bar or night venue | home, events (what's on), pricing (tables or memberships), about, contact (bookings), faq, privacy, 404 | hero with the venue name and tonight's line, the pill to book, the foot row as opening hours or rooms; rooms as aurora cards; this week's nights; closing band with the address |
| Creator, studio or podcast | home, blog (episodes or work), post, about, contact, signup (newsletter), pricing (memberships), 404 | hero with the name and a short line, the pill to the latest work, the foot row as channels; three series as aurora cards; latest episodes; closing band |

Inner pages stay plain and white. Each one gets one aurora surface: a page head, the story feature, a featured plan, a side panel or a cover.

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.top`, `.top-in`, `.brand`, `.mark`, `.nav`, `.dd`, `.dd-menu`, `.top-end`, `.top-link`, `#theme-toggle`, `.menu-btn`, `#sheet` | Up to six links; the current one gets `aria-current="page"` and the accent colour. `.dd` holds one dropdown (CSS hover and focus). Below 1100px the links move into `#sheet`. |
| Hero | `.hero.aurora.au-night.live`, `.flutes`, `.hero-in`, `.hero-title.glow`, `.pill.lg`, `.ver`, `.plats` | The H1 in two `<span>`s (they stack below 820px), the pill (`data-get-link`, `data-get-label`), the version line (`data-get-ver`), six links at the foot. Exactly one screen tall. |
| Aurora cards | `.rooms`, `.room.aurora.au-*.deep`, `.tag`, `.frost`, `.more` | Three cards, each a different palette, one frosted shape, a tag, a glowing H3, one sentence, a read link. |
| Interactive panel | `.split`, `.mixer.aurora[data-mixer]`, `.mix-glass`, `.slider`, `[data-mix]`, `.seg` | Text and ticks on one side, the glass panel on the other. Sliders write `--hue`, `--flute`, `--sat` and `--a4` on the panel. Rename the sliders to the product's own controls. |
| Features | `.feats`, `.ico` | Four tinted tiles: round icon, H3, one sentence. |
| Event list | `.nights`, `.night`, `.nd`, `.nb`, `.badge`, `.badge.hot` | Date block, title with venue and time, status, a pill (or an outlined waitlist pill). `data-tags` holds the filter key; `data-night` the label for the reservation select (empty when full). The home teaser clones the first three rows. |
| Story cards | `.cards`, `.card`, `.cover.aurora.au-*`, `.meta` | Built from the `STORIES` array in the script; `data-stories` (all) and `data-stories-teaser` (first three). |
| Closing band | `.cta.aurora.au-ember.live`, `.actions`, `.pill.ghost` | Glowing H2, one line, the pill and one ghost pill. |
| Page head | `.pagehead.aurora.au-*` | A glowing H1 and one sentence, centred; on the help page it also holds the search field (`.search`). |
| Download | `.ptabs[data-ptabs]`, `.ppanel[data-ppanel]`, `#dl-table`, `.tbl`, `.code`, `[data-copy]` | The table is the source: each `tr` has `data-p` and `data-icon`; tabs and the panel are built from it. `?p=` picks a platform. Replace the `[data-get]` button with a real file or store link. |
| Release notes | `.log`, `.log-side`, `#log-platform`, `[data-log-list]`, `[data-log-doc]` | Built from the `VERSIONS` array; the first entry is also written in the HTML for readers without JavaScript. `?v=` opens a version. |
| Stories feature | `.feature.aurora.au-dawn`, `.frost.f1`/`.f2`, `.feature-in`, `.kicker`, `.feature-title` | The small H1 kicker, date, a heavy title, one sentence, a blue pill. Dark text on the pale palette; the frosted shapes stay on the right, away from the text (the second one hides on phones). |
| Article | `.post-head.aurora.au-dawn`, `.back`, `.by`, `.av`, `.prose`, `.fig`, `.post-foot`, `[data-copy-link]` | Back link, date, H1, lead, byline; prose with H2s, one quote, one aurora figure; copy-link and more stories. |
| Pricing | `.switch`, `[data-bill]`, `.plans`, `.plan`, `.plan.hot.aurora.deep`, `.price`, `[data-price]`, `.compare` | Billing switch rewrites every `[data-price]` from `data-m` and `data-y`. The featured plan is aurora with the white pill. |
| Help | `.search`, `#faq-q`, `[data-faq]`, `.qg`, `.qa`, `[data-faq-empty]`, `.help-card` | Search filters questions, opens matches and hides empty groups. |
| About | `.split`, `.values`, `.team`, `.av` | Story with an aurora figure, three values, initials avatars with gradient fills (`--c1`, `--c2`). |
| Forms | `.form`, `.form-head`, `.two`, `.field`, `.err`, `.opts`, `.opt`, `.check`, `.pw`, `[data-reveal]`, `.success` | `data-form` names the form; `data-err` on each checked field points at its error line; `data-msg` overrides the missing-value message; `[data-success]` replaces the form. |
| Sign-up | `.signup`, `.signup .aurora.deep`, `.signup-form` | Half aurora panel with the glowing H1 and ticks, half form. Stacks on tablets. |
| Legal | `.doc` | H1, date line, H2 sections, short paragraphs and lists. |
| Footer | `.foot`, `.foot-in`, `.foot-legal` | Brand and one sentence, three columns, the centred care line and copyright. |
| 404 | `data-view="404"`, `.lost.aurora.au-night`, `.big` | A huge glowing "404", a glowing H1, one sentence, the pill home. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it: `?to=<id>` scrolls to a section, `?p=` picks a download platform, `?v=` a release, `?tag=` a story filter, `?city=` and `?night=` the event filter and the reservation, `?topic=` the contact topic, `?plan=` the sign-up plan.
- Plain `#id` links scroll to that element.
- The `titles` map sets the document title per view and `navOf` decides which header link is current for views without their own; update both when you add or rename views.
- In a framework project, replace the router with real routes and keep the same URLs where possible.
