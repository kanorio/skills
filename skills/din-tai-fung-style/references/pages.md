# Pages and sections

Every view in `assets/template.html` is a `<div data-view="name">`, reached by `#/name` links. In a framework project each view becomes a real route. Query parameters preselect things: `#/menu?course=tea`, `#/locations?town=<town>`, `#/news?kind=seasonal`, `#/reserve?house=<house>`, `#/gifts?gift=<gift>&at=order`, `#/contact?topic=rooms`; `at=<id>` scrolls to a section of the view.

## Recipes by kind of site

Pick the closest recipe. Keep the order; drop rows the brief cannot fill.

| Site | Views | Home sections, in order |
|---|---|---|
| Restaurant group or dumpling house with several locations (the template) | home, menu, dish, locations, reserve, gifts, story, news, post, contact, faq, legal, 404 | hero with inscription, craft statement with lotus, wash band, signature-dish selector, latest news, far band, houses row, gift cards |
| Single restaurant or noodle bar | home, menu, dish, reserve, story, news, contact, faq, legal, 404 (locations becomes a visit section on reserve) | hero, craft statement, band, dish selector, visit cells (address, hours, phone) in place of the houses row, news |
| Tea house or tea shop | home, menu (teas by origin), dish (one tea, with brewing cells), reserve (tastings), gifts (tins and sets), story, news, contact, faq, legal, 404 | hero, statement about the leaves, band, tea selector, tasting times, gift cards, news |
| Bakery, dim sum counter or souvenir brand | home, gifts (as the shop), dish (as a product), locations (as shops and stockists), story, news, contact, faq, legal, 404 | hero, statement, band, gift cards first, product selector, shops row, news |
| Calligraphy, tea-ceremony or craft studio | home, menu (as classes), dish (one class), reserve (class enquiry), story, news, contact, faq, legal, 404 | hero, statement about the practice, band, class selector, steps cells, teacher in the story, news |
| Traditional-medicine or wellness clinic | home, menu (as services), reserve (appointments), story (practitioners), locations, contact, faq, legal, 404 | hero, statement, band, services selector, houses row as clinics, FAQ teaser; no health claims the user cannot support |

## Section anatomy

| Section | Classes and IDs | Contents and rules |
|---|---|---|
| Loader | `.loader`, `.drop`, `.enso`, `#ink-bleed` | Shown once per visit with JavaScript and without reduced motion; hidden by `.done` after 2.6s. Holds the wordmark. Never put content in it. |
| Header | `.site-header`, `.header-inner`, `.brand` (seal symbol and wordmark), `.nav`, `.header-end`, `#theme-toggle`, `.btn.sm`, `#menu-open` | Up to five links split by hairlines; `fitNav()` adds `.compact` when they do not fit. The current view's link is gold (`aria-current`). |
| Menu sheet | `dialog#menu.sheet`, `.sheet-top`, `.sheet-links`, `#menu-close` | Large serif links, one button, a far wash band at the foot. |
| Home hero | `.hero`, `.hero-art.wash` (mountains), `.hero-grid`, `.hero-copy` (gloss, lead, actions), `.inscription` (`h1.vtitle` with two spans, `.vgloss`, `.seal`) | The copy sits in the sky on the left, the inscription over the valley on the right; on phones the inscription comes first, then the copy, then the landscape. The H1 is the inscription. |
| Craft statement | `.sec.clip-x`, `.title`, `.ornament` (`#i-steam`), `.statement`, `.btn`, `img.lotus` | Three or four sentences of fact; the lotus bleeds off the right edge. |
| Wash band | `.band.wash` with `ridge.svg`, `.band.far.wash` with `far-peaks.svg` | Between major sections and under page heads. Decorative: `aria-hidden`, `alt=""`. |
| Split title | `.title` (add `.start` to align left), `h1.split` or `h2.split` with one `<span>` per word, `.gloss` | Every section and page title. Two to four words. |
| Dish selector | `.stage-tabs[role=tablist]`, `.dish-tab[role=tab][data-tab]`, `.stage-panel[role=tabpanel]` | Three to five dishes. Each panel: fan, gloss, `.h3` name, sentence, `.price`, a link. Without JavaScript all panels show in order. |
| News rows | `.news-list`, `li[data-kind]`, `.news-row`, `.date`, `.fan`, `.kind`, `.h3`, `.link` | The newest row is in the HTML; the rest come from `NEWS` in the script. Home copies the first three. |
| Houses row | `.house-row` | Up to four cells: name and one line. |
| Cards | `.cards`, `.card`, `.fan`, `.gloss`, `.h3`, `.price`, `.btn.sm` | Gifts and "goes well with". Price and button line up across a row. Home copies the first three gift cards from the gifts view. |
| Page head | `.page-head`, `.wrap.title`, `.band.far` | The top of every inner view. |
| Menu | `.filters`, `.chips[data-filter=course]`, `#veg-only`, `.count[data-count=menu]`, `.course[data-course]`, `.course-side` (`.course-h`, `.gloss`, `.fan`), `.dishes`, `.dish[data-veg]`, `.dish-line` (name, `<i>` leader, `.price`), `.tag`, `.tag.hot`, `[data-empty=menu]` | Chips and the toggle combine; empty courses hide; the count and empty message update. |
| Dish page | `.dish-hero`, `.fan`, `.crumb`, `h1.split`, `.gloss`, `.lead`, `dl.cells`, `.actions`, `ol.cells.list` (steps), `.cards` | Facts are three to five cells; steps four or five. |
| Locations | `.map-box` (`img.wash` map, `.place` labels, `a.pin` at `--x`/`--y`), `.chips[data-filter=town]`, `.house-cards`, `.house[data-town][data-open][data-close][data-closed-day]`, `.num`, `.status`, `.hours` | Pins link to the cards (`#h-…`). Status reads the visitor's clock. |
| Booking | `.split-grid`, `.form-card`, `form[data-form=reserve]`, `#r-house`, `#r-size`, `#r-date` (min today, max 60 days), `.slots` (radio `name=time`, `.slots-sep` between lunch and dinner), `.aside`, `[data-success=reserve]` with `[data-echo]` | Success repeats the house, guests, date and time. |
| Gifts | `#gift-list` cards, `#order`, `form[data-form=order]`, `#o-gift`, `#o-qty`, `#o-date` (min two days), `#o-house` | "Order this" links pass `?gift=` and `at=order`. |
| Story | `.story-grid` with a second `.inscription`, `.cells.list` (craft steps), `.quote-block` (fan and `blockquote`), `.timeline` (`.year`) | One inscription at most on this view. |
| Article | `article`, `.article-head`, `.date`, `.post-title`, `.dek`, `.article-fan`, `.prose` | A long title is not split. |
| Contact | `form[data-form=contact]`, `#c-topic`, `.check` (consent), `.aside` | `?topic=` presets the topic. |
| FAQ | `.faq`, `.faq-nav`, `.faq-group`, `details`, `summary` with `#i-plus` | Two to five groups of two to four questions. |
| Footer | `.site-footer`, mirrored `.band.far`, `.foot-grid`, `.foot-brand`, `form[data-form=letters].inline-form`, `.foot-h`, `.foot-bottom` | Letters form, three link columns, legal links. |
| 404 | `.notfound` | A split title, two actions and a ridge band. |

## Building a new view

Copy the page head, a `.sec.wrap` section and the footer stays as it is. Add the view's name to `titles` in the script, a link in the nav or the menu sheet, and nothing else: the router, reveals, filters and forms pick it up from the markup.
