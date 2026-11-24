# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Restaurant or café group with several locations (the template) | home, menu, cafes, cafe (one per location), book, gatherings, journal, story, about, faq, contact, privacy, terms, 404 | framed quote hero, pinstripe, staggered introduction, three day cards, "something good at every hour" split, locations band, the special, three journal posts, the letter |
| Single restaurant, bistro or café | home, menu, cafe (as visit), book, about, faq, contact, privacy, 404 | hero, introduction, day cards (menu, book, visit), split, the special, letter; the locations band becomes hours and the address |
| Bakery, patisserie or coffee roaster | home, menu (as the counter), cafes, gatherings (as orders for the office or a party), journal, story, about, contact, privacy, 404 | hero, introduction, day cards, split, the special as this week's bake or roast, journal, letter |
| Bar, wine bar or supper club | home, menu (drinks first), book, gatherings (evenings first), about, faq, contact, privacy, 404 | hero, introduction, day cards, split, the special as a seasonal drink or menu, evenings, letter |
| Caterer or private chef | home, gatherings (as the main page), menu (as sample menus), journal, story, about, contact, privacy, 404 | hero, introduction, feasts, split, journal, letter |
| Food brand with stockists | home, menu (as products), cafes (as stockists), journal, story, about, contact, privacy, 404 | hero, introduction, day cards, split, locations band as stockists, journal, letter |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Header | `.site-header`, `.header-inner`, `.nav`, `.brand`, `.brand-name`, `.brand-sub`, `.header-end`, `#theme-toggle`, `#menu-open` | Five short tracked links at most, the centered wordmark, the toggle and one outlined booking button. Links stay on one line; below 1180px, or when `fitNav()` finds they do not fit and adds `.compact`, they move into `#menu`, a `<dialog class="sheet">` with `.sheet-links`. `.long` and `.short` swap the button label on phones. |
| Hero | `.hero.ink`, `.hero-frame`, `.hero-pic`, `.hero-copy`, `.kicker`, `.hero-quote`, `.btn-row`, `.cap` | One framed picture darkened by `.hero-pic::after`, a kicker, the quote as the only H1 of home, two buttons, an "Above:" caption. Follow it with `.pinstripe`. |
| Introduction | `.lede` (two `span`s), `.stagger`, `.st-a`, `.st-b`, `.st-c`, `.side` | The lede, then a tall frame, a justified paragraph with an arrow link, and a smaller frame with a vertical caption. On phones the frames shift right and left by width instead. |
| Day cards | `.diamonds`, `.kicker`, `.caps`, `.cards3`, `.dcard`, `.plate` | Three linked pictures, each with a caption plate: tracked title and one italic line. |
| Split | `.split`, `.eyebrow.ruled`, `.h2`, `.lead`, `.prose`, `.photos`, `.photos .big`, `.photos .low` | Copy and two buttons on the left; one wide frame and two smaller frames, the second dropped lower, on the right. |
| Locations band | `.band.ink`, `.band-bg`, `.band-inner`, `.band-line`, `.places` | A darkened picture, a tracked sentence and an arrow link, then names grouped under town eyebrows. Names link to the location page or the filtered finder. |
| The special | `.feature`, `.frame.dbl`, `.feature-copy`, `.flourish`, `.note` | One framed picture, kicker, uppercase title, the flourish, a justified paragraph with bold dish names, an italic availability line, one button. |
| Journal and letter | `.head-row`, `.posts`, `.post`, `.tag`, `.meta`, `.letter`, `.inline-form`, `[data-form="newsletter"]` | Three posts with a tag over the frame; the letter is a double-bordered card with an email field. |
| Page head | `.page-head`, `.head-split`, `.head-box`, `.kicker`, `.h1`, `.lead` | Either centered with a flourish, or split: a box with a double rule on its left and a framed picture on the right. |
| Menu | `.tabbar`, `.tabs` (`role="tablist"`), `.tab[data-tab]`, `.diet .chip[data-diet]`, `.menu-panel[role="tabpanel"]`, `.menu-intro`, `.menu-cols`, `.course`, `.dish[data-diet]`, `.dish.chain`, `[data-empty]` | `?tab=` opens a panel; arrow keys move between tabs; the dietary chips hide dishes and empty courses on every panel. Without JavaScript every panel shows. |
| Location finder | `[data-filter="city"]`, `.chip[data-value]`, `[data-count="city"]`, `.cafes`, `.cafe[data-city]`, `[data-empty="city"]` | `?city=` preselects a town. Each card: frame, tag, name, address, hours, a booking button that passes `?cafe=` and a link to the location page. |
| Location page | `.cafe-title`, `.subnav`, `#c-story`, `.newsprint`, `.dropcap`, `#c-food`, `#c-visit`, `.visit`, `.hours`, `.map`, `#c-book` | Wide frame, name in huge capitals, sand sub-navigation, the story in two ruled columns, three specials, hours with leaders, getting there, an SVG map with a title and description, a booking letter. |
| Booking | `.book-grid`, `.facts`, `.form-card`, `[data-form="booking"]`, `.slots`, `.slot`, `[data-success="booking"]`, `[data-echo]`, `[data-again]` | Rules on the left, the form on the right: location, guests, date (minimum today), time slots, name, email, notes, a newsletter tick. The success panel repeats the booking from `data-echo` fields. |
| Gatherings | `.feasts`, `.feast`, `.feast.star`, `.price`, `#evenings`, `.evenings`, `.evening`, `.date-plate`, `#enquire`, `[data-form="enquiry"]` | Three feasts with a price per guest; evenings as rows with a date plate; an enquiry form whose feast is preselected by `?feast=` and whose guest count has range messages. |
| Journal | `[data-filter="kind"]`, `.feature-post`, `.posts`, `.post[data-kind]`, `[data-empty="kind"]` | One feature post and a grid; chips filter by kind. |
| Article | `.article-head`, `.byline`, `.article`, `.dropcap`, `.pull`, `.recipe`, `.recipe-grid` | Tag, H1, italic dek, byline, the flourish; justified prose with framed figures, tracked H2s, a pull quote and a recipe card. |
| About | `.lede`, `.stagger`, `.timeline`, `.year`, `.keeps` | The staggered story again, a ruled timeline of years, three things the place keeps. |
| FAQ | `.faq-layout`, `.faq-nav`, `.faq-group[id]`, `details`, `summary` | Topic links on the left; groups under ruled eyebrows; `?at=<group id>` scrolls to a group. |
| Contact | `.book-grid`, `.facts`, `[data-form="contact"]` | Addresses on the left, a form on the right. `?topic=` preselects the topic. |
| Footer | `.site-footer.ink`, `.pinstripe`, `.footer-grid`, `.footer-bottom` | Wordmark and one line, three link columns, the legal line. |
| 404 | `data-view="404"`, `.notfound` | Diamonds, a kicker, one H1, one sentence, two buttons. |

## Routing and state

- Links that start with `#/` change the view; `?key=value` after the view name is passed to it (`#/book?cafe=quayside`, `#/menu?tab=sweets`, `#/gatherings?feast=long-night&at=enquire`).
- `at=<id>` scrolls to that section of the view after it opens; plain `#id` links scroll inside the current view.
- The `titles` map in the script sets the document title per view, and the `section` map keeps the right header link underlined on child views. Update both when you add or rename views.
- In a framework project, replace the router with real routes (one per location and per article), keep the same URLs where possible, and turn `at` into ordinary fragment links.
