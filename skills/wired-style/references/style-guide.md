# Style guide

The look in one sentence: paper white and black ink, tall condensed headlines, small monospaced labels in capitals, and black tabs sitting on heavy rules over a ruled, many-column magazine grid.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Light is the paper edition and the default (it follows the system setting); dark is the same page printed in reverse, and both are complete.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | pure white | near-black | the page |
| `--surface` | very light gray | dark gray | the newsletter band and the well behind pictures while they load; never cards |
| `--text` | ink, near-black | off-white | headlines, body copy, icons |
| `--text-muted` | dark gray | light gray | deks (standfirsts), captions, numbers in lists, secondary lines |
| `--border` | light gray | dark gray | 1px hairlines between stories and between columns |
| `--rule` | ink | off-white | 2px heavy rules, tab labels, filled buttons, pressed chips, the edition strip and the newsletter promo box |
| `--accent` / `--accent-text` | one strong blue / white | light blue / ink | the "Subscribe" link, links inside body copy, the focus ring, the reading progress bar, button hover |
| `--danger` | brick red | light red | form errors only |
| `--mark-line` (`tintMarkLine`) | acid lime | the same | the single bar inside the brand mark; nowhere else |
| `--footer`, `--footer-text`, `--footer-muted`, `--footer-border` | ink and grays | darker ink and grays | the footer, which is always dark |

The palette is deliberately black, white and gray. Color comes from pictures. The accent appears in a handful of places per screen at most; if a second color starts creeping into labels or headlines, take it out.

Elements painted with `--rule` (tabs, the strip, the promo box, filled buttons) flip to light-on-dark automatically in the dark theme. That inversion is intended: the tabs stay the loudest thing on the page in both themes.

## Typography

Two families, plus the platform's monospace:

- **Sofia Sans Extra Condensed** (display), variable weight. Every headline, at weight 650, line-height 0.88 to 1, no letter-spacing, `text-wrap: balance`. The wordmark uses 800 with 0.08em tracking. Condensed type is what lets a long headline sit big in a narrow column; never set headlines in the serif.
- **Newsreader** (body), weights 400 to 700 with a real italic. Deks, article text, list text, captions and form fields. Article body is 19px with line-height 1.62 at a 680px measure; deks are 17px in `--text-muted`.
- **Monospace labels** (`--mono`: `ui-monospace`, SF Mono, Cascadia Mono, Menlo, Consolas). Kickers, bylines, dates, nav links, tab labels, buttons, chips, captions' credit lines. Always 12px, weight 500, capitals, 0.1em tracking. It loads no file, so the page still carries only two font families.

Scale (from `tokens.json`): display 60 to 112px for page titles; h1 44 to 76px for the lead story and article headline; h2 34 to 52px for features; h3 26 to 32px for card headlines; small list headlines 23px; the smallest list headlines 20px.

Headlines are written in title case, without a final period, and may be long: this style is built for two- and three-line headlines. Labels are short ("Field notes", "By Maren Holt", "12 min read").

## Layout, spacing and radius

- **Container:** 1312px wide with a 16 to 48px gutter. Long text stops at 680px; centered deks at 40 to 54 characters.
- **The front page grid:** three columns at 1 : 2.35 : 1 (picks, lead story, most read), separated by 1px vertical hairlines with 24px on each side. Rows of four (`.notes`, `.cards`) use the same hairline dividers. Under 1100px the lead story goes full width with picks and most read in two columns below; under 760px everything is one column.
- **Rhythm:** 72px between front-page blocks, 24px under a tab head, 16 to 20px between stacked stories, each separated by a hairline. The page is dense on purpose; space comes from rules, not from padding.
- **Radius:** zero everywhere. Buttons, fields, chips, pictures, the promo box and the initials tile are all square.
- **Pictures:** 3:2 in cards and the lead, 1:1 thumbnails in lists, 4:3 in the feature, 16:9 as the article hero. They are cropped with `object-fit: cover` and never framed.

## Surfaces and depth

- No shadows, no blur, no rounded cards, no gradients. Structure comes from rules: 1px `--border` hairlines between items and columns, 2px `--rule` heavy rules on top of every section.
- The only filled surfaces are tabs, the edition strip, the promo box, filled buttons, the gray newsletter band and the dark footer.

## Signature elements

Every page keeps the first three; the front page shows all six.

1. **Tabs on heavy rules.** Each section opens with a 2px ink rule across its full width and a small black tab on its left end: white monospace capitals in a box that touches the rule. An optional "More" link sits at the right end of the same rule. Plans, FAQ, menus and article rows use the same head.
2. **Tall condensed headlines.** Big, tight and balanced, centered for the lead story, the article and page titles, left-aligned everywhere else. Hover underlines the headline with a 2px line.
3. **Monospace kickers and bylines.** A short label above every headline (topic or series) and "By Name" below, both in 12px monospace capitals. Dates, read times and credits use the same voice.
4. **Ruled columns.** Vertical hairlines between columns and horizontal hairlines between stories, so a dense page still reads as an orderly newspaper grid.
5. **The serif dek.** A one- or two-sentence standfirst in muted serif under every important headline, centered under centered headlines.
6. **The edition strip and the inverted promo.** A thin black strip above the header with one monospace line (an issue, an event, a subscribe offer), and a black newsletter box in the most-read column.

## Components

- **Header:** edition strip, then a sticky white bar with a hairline ink border: menu button, wordmark, six section links in monospace, then search, theme toggle, "Newsletters" and the blue "Subscribe". Below 1100px the section links move into the menu; below 560px search moves into the menu too.
- **Menu (`<dialog>`):** slides in from the left, a search field that filters stories as you type, section links as big condensed rows with arrows, and secondary monospace links.
- **Lead story (`.lead`):** kicker, h1-size headline, dek, byline, 3:2 picture, then two secondary stories side by side under a hairline.
- **List story (`.pick`, `.note`, `.most li`):** thumbnail and text in a two-column grid, or a number and text, separated by hairlines.
- **Card (`.card`):** 3:2 picture, kicker, h3, dek, byline.
- **Article:** centered kicker, headline, dek and a meta line (byline, date, read time, Save toggle); full-width 16:9 hero with an italic caption and a monospace credit; the 680px column of serif text with condensed h2s, a drop cap, a pull quote between two heavy rules, inline figures, an author box with an initials tile, topic chips; "Read more" cards.
- **Buttons:** square, 50px tall, monospace capitals with 0.14em tracking. Filled ink for the main action, outlined for the rest; hover turns either to the accent.
- **Chips and toggles:** square outlined buttons with monospace labels; pressed fills with ink.
- **Forms:** monospace labels above square fields with a 1px ink border and serif input text. Errors are small red monospace lines that float in reserved space under the field, so nothing moves. Success replaces the form with a block under a heavy rule.
- **FAQ:** rows between hairlines, condensed questions, a plus that turns into a cross.
- **Footer:** dark, centered wordmark and one sentence, four link columns under monospace headings, a legal line.

## Do and don't

- Do let rules and tabs organize the page. Don't add cards, shadows or rounded corners.
- Do keep the page black, white and gray and let the pictures bring color. Don't color headlines or labels.
- Do write long, specific headlines in title case. Don't shrink them to fit; let them wrap.
- Do use monospace capitals for every label. Don't use it for paragraphs.
- Do keep every column separated by a hairline. Don't float stories in white space without a rule.
- Don't use emoji, icon fonts, filled icon sets, a third font file or a second accent color.

## Voice

The voice of a good magazine: specific, curious and calm. Headlines state what happened or what is surprising, with a real noun in them ("The Harbor Town That Voted to Move Back From the Sea"). Deks add the stakes in one or two sentences. Labels are plain and short. No exclamation marks, no clickbait questions, no "you won't believe", no lorem ipsum. Bylines name real (or clearly placeholder) people; never invent experts, quotes from real people, statistics presented as fact, or awards.
