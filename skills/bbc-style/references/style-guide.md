# Style guide

The look in one sentence: a white page under a centred block wordmark and one row of section links, a three-column grid of photo-led stories with sturdy serif headlines, short summaries and small time-and-section lines, red only for what is live, and a dark band for video and audio.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Light is the default and follows the system setting; dark is a complete night edition with the same structure.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | pure white | near-black | the page |
| `--surface` | very light gray | dark gray | live posts, the live summary box, the newsletter promo, picture wells while loading |
| `--text` | ink | off-white | headlines, body copy, icons |
| `--soft` | dark gray | light gray | summaries (standfirsts) under headlines |
| `--text-muted` | mid gray | light gray | times, section labels in the meta line, captions, roles |
| `--border` | light gray | dark gray | 1px hairlines under stories, between list items, around the section row |
| `--rule` | ink | off-white | 2px section rules, the wordmark plate, filled buttons, the current tab underline |
| `--accent` | news red | light red | the live tag, section page titles, most-read numbers, newsletter schedules, the "Live" nav item |
| `--accent-fill` / `--accent-text` | news red / white | deeper red / white | time tabs on live posts, the new-updates button, the ticker line, the dot after the wordmark |
| `--danger` | news red | light red | form errors |
| `--ok` | green | light green | the success line above a sent form |
| `--band`, `--band-text`, `--band-muted`, `--band-border`, `--band-accent` | ink and grays | darker ink and grays | the watch band, the live header and the footer, dark in both themes |

Red means "now". Use it for live coverage, time stamps of live posts, section titles and the few numbers that rank things. Never color a headline, a button or a background red outside the live tabs.

Inside `.band` the tokens are redefined (`--bg` becomes the band, `--text` the band text, `--accent` the band red), so every component works on the dark band without extra classes.

## Typography

Two families:

- **Literata** (display), variable weight. Every headline at weight 600, line-height 1.15 to 1.28, `text-wrap: balance`, no letter-spacing. It also sets summaries, article text, captions, quotes and the big most-read numbers at 400. Article body is 19px with line-height 1.62 at a 640px measure; the first paragraph of an article is set at 600.
- **Source Sans 3** (body in `tokens.json`), variable weight. Everything that is interface: the section row, meta lines, section heads, labels, buttons, forms, bylines, chips. Section heads and labels are 15 to 16px weight 700 capitals with 0.05em tracking; meta lines are 13px. The wordmark plate is 800 with 0.14em tracking.

Scale: display 36 to 56px for page titles on dark bands and the 404; h1 32 to 46px for article and page headlines; h2 26 to 36px for the lead story and section-page leads; h3 18px for card headlines (19px in the text-only column, 22px for features); body 19px in articles and 16 to 17px in summaries; small 13px.

Headlines are sentence case, plain and specific, without a final period: what happened, where, and to whom. Summaries are one sentence, at most two.

## Layout, spacing and radius

- **Container:** 1248px with a 16 to 48px gutter; columns separated by a 16px gap. Articles sit in a 1000px frame: headline up to 780px, text column 640px, a most-read rail beside it.
- **The front grid:** three columns at 1 : 2.05 : 1. Left: two picture cards. Centre: the lead story, a 16:9 picture over a large serif headline. Right: four text-only stories stacked between hairlines, the first one usually live. Under 1100px the lead goes full width (picture beside its text) with the two side columns below; under 700px it is one column, the lead picture runs edge to edge and side cards turn into thumbnail rows.
- **Rows:** four cards across, five text-only headlines across, two features beside a numbered most-read list. Every card ends with a 1px hairline.
- **Rhythm:** 48px between blocks, 20px under a section head, 16px between stacked items. The page is dense; space comes from hairlines and the section rules, not from boxes.
- **Radius:** zero. The only round things are people (initials in circles) and the live dot.
- **Pictures:** 16:9 everywhere, cropped with `object-fit: cover`, never framed or rounded.

## Surfaces and depth

- No cards with borders, no shadows on content, no gradients. Structure comes from 2px rules on top of sections and 1px hairlines under stories.
- Filled surfaces: the wordmark plate, filled buttons, the light gray live summary, live posts and the newsletter promo, and the dark band (watch and listen, the live header, the footer).
- The menu is the only thing with a shadow (`--shadow-overlay`).

## Signature elements

Keep the first four on every page; the front page shows all of them.

1. **The centred block wordmark.** The name in heavy spaced capitals, reversed out of one solid ink plate, with a small red square at its foot. It sits in the middle of a white bar, menu-and-search on the left, theme and a filled "Newsletters" button on the right. The plate inverts in the dark theme and on the footer.
2. **The section row with an underline.** One line of section links under the bar, centred, never wrapping (it scrolls sideways on small screens). The current section has a 4px ink underline; a hairline divides the sections from "Watch" and "Live".
3. **Serif headlines over a time-and-section line.** Every story: picture (optional), serif headline, one-sentence summary, then "2 hrs ago | Transport" in small gray sans, split by a thin vertical line.
4. **Section heads.** A 2px ink rule across the full width, a small bold capital label under it, and a chevron when the label links somewhere.
5. **Live coverage.** A pulsing red dot with "Live" before the headline; on the live page, a dark header, a gray summary box with square bullets, and posts that each open with a red time tab sitting on a red rule. A timeline strip of the newest three updates on the front page.
6. **Media badges.** A black square with a white play triangle (video) or bars (audio) and the duration, sitting on the bottom-left corner of the picture. Picture credits sit in a small dark box on the bottom-right.
7. **The dark band.** Video and audio live on a near-black band that runs the full width of the page.
8. **The numbered most-read list.** Big red serif numbers beside headlines, separated by hairlines.

## Components

- **Header (`.site-header`, `.hdr`):** sticky white bar with the menu-and-search button, the wordmark plate and the theme and "Newsletters" controls. The section row (`.nav`) sits below it and scrolls away with the page.
- **Menu (`<dialog class="menu">`):** slides in from the left: search field that filters stories as you type, every section as a bold row with a chevron, secondary links.
- **Card (`.card`):** 16:9 picture, serif h3, summary, meta line. The whole card is one link (the headline link stretches over it); the section link in the meta line stays clickable on top.
- **Lead (`.lead`):** card with a credit on its picture and an h2-size headline.
- **Text stack (`.stack`), row (`.row5`), ticker (`.ticker`), most read (`.most`):** headline-only variants of the card, divided by hairlines or a red timeline line.
- **Section page:** a red capital title, one sentence, a sub-row of filters (towns) underlined like the section row, then a lead block (text, big picture, side card) and the card grid with "Show more stories".
- **Article:** red section kicker, headline, meta line with Save, a byline with an initials circle, a wide 16:9 hero with a credit and a caption, the serif column with bold underlined inline links, square-bulleted lists, a quote with a red left bar, a related-story box under a rule, an inline video figure, topic buttons, a most-read rail, and "More on this story" cards.
- **Live page:** dark header (live tag, headline, updated time, picture), summary box, feed with a "Key posts only" switch, time-tabbed posts with author circles, "New updates" button that waits for the reader, "Show earlier updates", and a useful-links rail.
- **Watch page:** dark band with a featured player (big play button, time, red progress bar), format filter, media cards with badges, and podcast rows with square typographic covers and a Listen toggle.
- **Buttons:** square, 44px tall, sans 700. Filled ink for the main action, outlined for the rest; hover swaps fill and outline.
- **Forms:** sans labels above square fields with a 1px gray border that turns ink on hover. Errors are red lines that float in reserved space under the field; a red bar marks the invalid field. Success replaces the form with a gray block under a green line.
- **Footer:** the dark band with the inverted wordmark, a bold row of section links between hairlines, a row of house links and one line of fine print.

## Do and don't

- Do keep the page white, ink and gray; let pictures bring color and keep red for live and ranking. Don't add brand colors to headlines or buttons.
- Do write headlines like news: plain, specific, past or present tense. Don't write teasers, puns or questions you then don't answer.
- Do show time on everything (`2 hrs ago`, `14:32`). Don't hide when a story was published.
- Do keep the three-column front with the lead in the middle. Don't replace it with a hero banner.
- Don't use condensed headline faces, monospace labels or black tab labels: this style's headlines are a sturdy serif and its labels are plain sans capitals under a rule.
- Don't round corners, add shadows to cards, or animate pictures.

## Voice

Calm, factual and local. Say what happened, where, when, and what it means for the reader ("what the new timetable means for your commute"). Attribute claims ("the operator said"). Labels are short and literal: "Live", "Most read", "Watch and listen", "Key post", "Show earlier updates". British or American spelling follows the user; the template uses British dates ("23 November") and the 24-hour clock in live posts.
