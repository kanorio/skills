# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Language app or language club for kids (the template) | home, courses, course, try, pricing, signup, blog, post, faq, about, contact, privacy, terms, 404 | hero with characters, language strip, four feature rows, lesson preview, quotes, navy family band, finale over the hill |
| Tutoring centre or after-school club | home, courses (as classes with day and time), course (as the term plan), try (as a placement quiz), pricing, signup (as a free trial class), faq, about, contact, privacy, 404 | hero, subject strip, three feature rows (small groups, a plan per child, reports for parents), quotes, navy band for holiday camps or sibling rates, finale |
| Online course or learning community for adults | home, courses, course, try, pricing, blog, post, faq, about, privacy, terms, 404 | hero (one adult character and the mascot), topic strip, three feature rows, lesson preview, quotes, finale; skip the family band |
| Kids' product or family app | home, courses (as packs or features), course (as "how it works"), pricing, signup, faq, about, contact, privacy, 404 | hero, strip of packs, three feature rows, navy band for the family plan, finale |
| School, library or reading programme | home, courses (as levels), course, try, blog, post, faq, contact, privacy, 404 | hero, level strip, three feature rows, lesson preview, navy band for teachers, finale |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.brand`, `.nav`, `#theme-toggle`, `#menu-open` | Mark and lowercase wordmark, five links at most, theme toggle, one small primary button. Below 1000px the links move into `#menu`, a `<dialog class="sheet">` of 3D cards with the mascot at the bottom. |
| Hero | `.hero-grid`, `.hero-art`, `.hero-copy`, `.btn-row`, `.hero-note` | Drawing left, copy right: one sentence-case H1, a primary and a secondary button (both full width of the column), one short note. On phones the drawing goes first. |
| Strip | `.strip`, `.strip-track` (`data-strip-track`), `.strip-btn` (`data-strip="-1"`/`"1"`), `.lang`, `.word` | Four to ten links, each a word bubble plus an uppercase label. The track scrolls sideways on its own; arrows hide below 700px. |
| Feature rows | `.feature`, `.feature.flip`, `.feature-art`, `.title` | Lowercase H2, one paragraph, optional `.text-link`; the drawing on the other side. Alternate `.flip` on every second row. |
| Lesson preview | `.preview`, `.bar`, `.say`, `.bubble`, `.choices.pics`, `.choice` | A static, `aria-hidden` card showing one question, followed by a button to the real lesson. |
| Quotes | `.quotes`, `.quote`, `.avatar` | Three 3D cards with initials avatars in toy colors. Only real quotes the user supplied, or omit. |
| Navy band | `.navy`, `.navy-grid`, `.shine`, `.navy-art`, `.btn-white` | Lowercase H2 with one gradient word, one paragraph, three ticks, one white button; a drawing on the right. |
| Finale and footer | `.finale`, `.display`, `.hill`, `.site-footer`, `.footer-grid`, `.footer-bottom` | Lowercase display line, one primary button, a drawing that sits in the dip of the hill; the hill SVG flows into the green footer. |
| Page head | `.page-head`, `.label`, `.h1`, `.lead` | Centered: uppercase kicker, lowercase green H1, one lead. On every view except home, course, try, post and legal. |
| Course cards | `.chips` (`data-age`), `[data-count]`, `.cards` (`data-courses`), `.course-card` (`data-ages`), `[data-empty]` | Filter chips with `aria-pressed`, a live count, cards linking to `#/course?lang=<id>`. `?age=` preselects a filter. |
| Course path | `.course-head`, `[data-course-word]`, `[data-course-name]`, `.course-grid`, `.unit`, `.unit.sky`, `.path`, `.stop` (`--x`), `.stop.current`, `.node`, `.node.locked`, `.ring`, `.start-tip`, `#stop-pop`, `.path-art`, `.side`, `.stats`, `.goal` | Unit banners over ordered lists of stops. `--x` offsets the stop sideways (0, ±64px, ±100px); one `.current` stop with the ring and the tip. Each `.node` carries `data-title`, `data-text` and `data-locked` for the popover. `?lang=` sets the name and the bubble from the `courses` map in the script. The side column holds stats, the daily goal and unit notes, and stacks under the path on phones. |
| Lesson | `.lesson`, `.lesson-top`, `[data-progress]`, `[data-hearts]`, `[data-quiz]`, `.q` (`data-answer`, `data-right`), `.q-prompt`, `.choices`, `.choice`, `.key`, `[data-check-bar]`, `[data-check]`, `.feedback`, `[data-done]`, `.tally`, `[data-xp]`, `[data-acc]`, `[data-restart]` | One `.q` per question, each a radiogroup of labelled radios. The check bar enables Check after a pick, shows right or wrong, then Continue; keys 1 to 3 pick answers. After the last question the results screen shows XP, accuracy and the streak. Without JavaScript all questions are listed. |
| Plans | `.switch` (`data-billing`), `.plans`, `.plan` (`data-plan`), `.plan.navy`, `[data-monthly]`, `[data-yearly]`, `.compare` | Two or three cards; the group or family plan is navy. Prices and their lines switch with the billing buttons. `?plan=` outlines a card. The table scrolls inside `.table-scroll` on phones. |
| Signup | `.signup-grid`, `.form-card`, `[data-form="signup"]`, `.chips.left`, `.choices.langs`, `.choices.goals`, `.check`, `[data-success="signup"]`, `[data-echo]`, `.perks` | Email, a name, an age chip group, picture tiles for the subject, a goal list, a consent checkbox. `?lang=` preselects a tile. The success panel repeats the name and email from `data-echo`. |
| Notes (blog) | `.chips` (`data-topic`), `[data-posts]`, `.feature-post`, `.post-card`, `.post-cover`, `.letter`, `[data-form="newsletter"]` | Topic chips, one wide feature post, a grid of cards with tinted covers, a monthly letter signup on a sun card. |
| Article | `.article-head`, `.byline`, `.article`, `.say.tip`, `.table-scroll` | Back link, sentence-case H1, lead, byline with initials avatar; prose with lowercase green H2s, a ticked list, the mascot tip bubble, a table and a Fredoka pull quote. |
| FAQ | `.faq-group[id]`, `.faq`, `details.card`, `.help` | Lowercase H2 per group, questions as 3D cards, a sky help card linking to contact. `?at=<group id>` scrolls to a group. |
| About | `.split`, `.values`, `.value`, `.team` | Story beside a drawing, three promises with reward icons, the team as large initials avatars with a colored edge. |
| Contact | `.contact-grid`, `[data-form="contact"]`, `.contact-list` | Form card (name, email, topic, message) and contact cards with a drawing. `?topic=` preselects the topic. |
| 404 | `data-view="404"`, `.notfound` | The puzzled mascot, one H1, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/course?lang=french`, `#/pricing?plan=family`).
- `at=<id>` scrolls to that section of the view after it opens; plain `#id` links scroll inside the current view.
- The `titles` map in the script sets the document title per view; update it when you add or rename views.
- In a framework project, replace the router with real routes, keep the same URLs where possible, and turn `at` into ordinary fragment links. Course pages become one route per course instead of the `courses` map.
