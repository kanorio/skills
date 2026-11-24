# Style guide: Mastercard style

The look in one sentence: a warm cream canvas under a floating white pill header, oversized plain headlines in one friendly geometric sans, near-white stage panels with extreme radii, stadium-outlined rows, and photographs cropped into circles and stadiums with a thin orange orbit line and a round arrow button riding on their edge.

## Tokens

All values live as CSS custom properties on `:root` (light, the default) and are repeated for dark under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]` in `assets/template.html`. `tokens.json` holds the same values as data.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--bg-alt` | warm cream / one step deeper | warm charcoal / one step deeper | the page canvas / image placeholders, the split bar track |
| `--surface` / `--surface-2` | near-white with a warm cast / a step down | lifted charcoal / a step higher | stage panels, the header pill, cards, inputs on cards / cards inside a stage |
| `--text` / `--text-muted` | near-black ink / warm gray | warm white / light warm gray | headlines and body / leads, card text, meta |
| `--border` / `--border-strong` | hairline / stronger warm gray | charcoal steps | dividers / inputs, chips, details outlines |
| `--accent` / `--accent-text` | persimmon orange / ink | lighter persimmon / ink | the one warm mark: eyebrow dots, orbit lines, lane outlines, date rings, accent arrow buttons, the featured tier, link underlines, focus rings |
| `--primary` / `--primary-text` | ink / cream | warm white / ink | primary buttons and selected chips (never orange) |
| `--footer`, `--footer-text`, `--footer-muted` | near-black and cream | deeper black and cream | the footer and the closing band, dark in both themes |
| `--error` / `--success` | brick / green | lighter steps | form messages |

Orange is a line and a dot, never a large fill: it never carries body text, and on cream it is only used for shapes (dots, rings, outlines) or behind dark text (the accent arrow button, the "Most chosen" pill). Primary buttons are ink pills.

## Typography

- **Kumbh Sans** (variable, SIL Open Font License) is the only family: weight 500 for display and headings, 400 for body, 500 to 600 for buttons, eyebrows and labels. No serif, no italic, no second family.
- Display: about 120px at 1440 wide (`--fs-display`), line-height 1.0, letter-spacing -0.025em, sentence case, no trailing period. It opens the hero and the big statement sections; several per home page is part of the look.
- H1 80px, H2 64px, H3 32px, H4 22px, all at 500 with slight negative tracking. Body 18px, line-height 1.55; leads 22px in the muted color.
- Eyebrow (`.eyebrow`): 13px, weight 600, uppercase, 0.09em tracking, always preceded by a 10px orange dot. It sits above nearly every section headline and card title ("Service", "Coming up", "Story").
- Numbers use tabular figures in prices and dates. No mono font, no all-caps headlines, no exclamation marks.

## Spacing, layout and radius

- Frame 1240px with a 16 to 64px gutter; sections are 72 to 136px tall. Generous empty cream is part of the look: do not fill it.
- Stage panels (`.stage`) sit 16px inside the viewport edges (8px on phones) with a 32 to 64px radius, so the cream canvas shows around them like a mat.
- Radii: 999px for every control (buttons, inputs, chips, the header), 36px for cards, 64px for stages, 50 percent for portholes and rings, 999px for stadium images and lanes, 48px for tall photo cards.
- Grids: two columns for the hero, page heads, lanes and the quote; a staggered two-column field for service tiles (even tiles drop by up to 160px); auto-fill cards at 330px minimum. Everything drops to one column below 760 to 920px.

## Surfaces and depth

- Three levels only: the cream canvas, near-white stages and cards, and the floating header pill with a soft warm shadow (`--shadow-card`). Overlays (the menu) use `--shadow-overlay`.
- Cards on the canvas are `--surface`; cards inside a stage use `--surface-2` (`.on-surface`).
- No gradients on surfaces, no glass beyond the header's light blur, no borders on cards except the orange outline of the featured tier and the lanes.

## Signature elements

Keep at least five on the home page.

1. **Cream canvas and the stage.** Warm cream page, with the hero and the main statement section on near-white panels with extreme radii, inset from the viewport edge.
2. **The floating pill header.** A white pill 72px tall with the mark and wordmark, centered links with an orange underline for the current page, a round outline theme button and an ink pill button.
3. **Portholes with orbit rings.** Photos cropped into circles (`.port`), stadiums (`.port.wide`), arches (`.port.arch`) or tall rounded cards (`.port.tall`). A thin orange ring sits slightly off-center behind each circle (`::after`), as if the photo were in orbit.
4. **Orbit lines.** One long, thin orange curve sweeps across the hero and page heads (`.orbit-line`, drawn in on load), and large outline circles (`.ring`) cross the empty space between service tiles.
5. **Round arrow buttons.** 56 to 80px circles (`.go`), white with a shadow or orange with an ink arrow, riding the bottom edge of a porthole. The arrow slides 4px on hover.
6. **Orange-dot eyebrows.** Small tracked capitals after an orange dot, above almost every headline.
7. **Oversized plain headlines.** Display-size sentences, weight 500, in the hero and statement sections.
8. **Stadium lanes.** Full-width rows outlined in a 1px orange stadium, a stadium photo on one side and a title, a line and an outline pill button on the other, alternating sides (`.lane.rev`).
9. **The stretched dot.** Carousel dots are small ink dots; the current one stretches into a 40px orange pill.
10. **The ink band and footer.** A black pill band with the mark and one call to action closes each page; the footer is black in both themes.

## Components

- **Header** (`.site-header`, `.bar`): sticky 12px from the top, the pill holds `.brand`, `.nav`, `.head-actions` (theme toggle, "Book a session", menu button). Below 1080px the links move to `#menu`, a rounded panel that drops under the pill; below 560px the ink button moves there too.
- **Buttons:** `.btn-primary` ink pill; `.btn-ghost` 1px ink outline that fills ink on hover; `.btn-light` cream pill on the ink band and footer; `.btn-sm` 44px. 50px tall by default. Icons inside buttons only for an arrow or a link symbol.
- **Round icon button** (`.icon-btn`): 44px outline circle for the theme toggle, the menu and carousel arrows.
- **Hero:** eyebrow, display headline, lead, two pills; on the right a large porthole with its ring, a floating `.tag` pill with an orange dot, and an accent `.go` arrow.
- **Carousel:** a scroll-snap rail of stadium slides, each with a small `.pill` kind label over a white `.pill-title` link; prev and next round buttons in the section head; dots under the rail. On phones the slides become circles.
- **Service tile:** porthole with a `.go` on its edge, eyebrow, H3 link (optionally underlined in orange with `.uline`), one muted line.
- **Lane:** described above; on phones it becomes a 36px rounded card with the photo on top.
- **Quote:** porthole with its ring on the left, an eyebrow, the quote at about 48px weight 500, the person in bold and their relation in muted text.
- **Event card:** a date ring (day number over an uppercase month), eyebrow topic, title, time and place with icons, an outline "Save a seat" pill.
- **Post card:** arch or circle crop, eyebrow kind, H4 title, one line, reading time.
- **Person:** initials in a tinted circle with an offset orange ring that tilts on hover.
- **Tier:** card with eyebrow name, price at 64px with a muted period, one line of impact, a pill button; the featured tier has an orange outline and an orange "Most chosen" pill.
- **Split bar:** a pill-shaped bar of shares with a legend of dots, numbers at 24px.
- **Forms:** in a card; labels above pill-shaped fields; textareas 26px radius; radio and checkbox options as chips; a reserved error line under each field; success replaces the form with a ringed check, a heading and the echoed email.
- **Details** (`.qa`): 32px rounded outlines that turn orange when open, a plus that turns into a cross.
- **Steps:** numbers inside 112px orange rings, an H4 and two lines.
- **Footer:** ink, a large line and a cream pill, four columns with tracked capital headings, a legal row.

## Do and don't

- Do crop photos into circles, stadiums and arches. Don't use square photos or hard corners anywhere on the page.
- Do keep orange as dots, thin lines and outlines. Don't fill backgrounds, headlines or primary buttons with it.
- Do leave big areas of cream around few elements. Don't stack dense grids of small cards on the home page.
- Do use one sans at weight 500 for headlines. Don't use bold display type, a serif or a script.
- Don't use two overlapping circles, interlocking rings or any similar symbol as a logo or decoration; orbit lines are single thin curves and rings.
- Don't use emoji, icon fonts, stock photos of handshakes or cards and coins, gradients or glass panels.

## Voice

Warm, plain and reassuring, like a good neighbor who happens to know about money. Lead with what the visitor gets ("Leave with one page"), not with the organization. Short sentences, second person, sentence case. No hype words, no exclamation marks, no em dashes, no jargon without a plain explanation. Numbers, quotes and promises must be real or clearly marked as drafts.
