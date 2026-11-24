# Style guide: Signal style

The look in one sentence: a white header with one blue rounded button, a pale strip with a tiny drawing, a full-bleed soft periwinkle hero with a heavy plain headline and two tilted phones running off its bottom edge, then black-outlined flat illustrations with blue halftone dots inside big pastel panels, white cards on a pale grey band, and a charcoal footer.

## Tokens

Every color is a custom property on `:root` in `assets/template.html`, written as `light-dark(<light>, <dark>)`. `:root` follows the system; `[data-theme="light"]` and `[data-theme="dark"]` pin it. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--surface` | white / white | near-black violet / one step up | the page and header / cards, form cards, blog cards |
| `--band` | pale grey | a step above the page | the feature-card band, the blog page, the install band, note bars |
| `--strip` | very pale blue | dark blue-grey | the announcement strip and the "Still stuck?" box |
| `--text` / `--text-muted` | near-black / grey | near-white / light grey | headlines and body / card text, leads on inner pages, meta |
| `--border` / `--border-strong` | light grey / mid grey | dark / mid | rules, card edges / inputs, chips, amount tiles |
| `--blue` / `--on-blue` | strong blue / white | the same | the header button, primary buttons, selected chips, the donation card head, year badges |
| `--link` | strong blue | light blue | text links, the wordmark, outline buttons, bylines |
| `--tint` | blue-white | deep blue | selected amount tile, tags, outline-button hover, the summary box |
| `--peri` / `--on-peri` | soft periwinkle / ink | deep indigo / white | the hero, the closing call to action, the panels behind phones |
| `--lilac`, `--slate` | pastel lilac, pastel slate-blue | muted versions | illustration panels and blog covers |
| `--foot` | charcoal violet | deeper charcoal | the footer, in both themes |
| `--device`, `--device-2` | graphite, silver | the same | phone frames (the screens keep their own app colors) |
| `--i-ink`, `--i-line` | ink | ink / light grey | illustration outlines / free-standing strokes (ground lines, sun rays) |
| `--i-paper`, `--i-lilac`, `--i-peri`, `--i-slate`, `--i-blue`, `--i-coral`, `--i-sun`, `--i-grey` | flat pastel fills | slightly dimmed | illustration fills and avatar colors |
| `--error` / `--focus` | red / blue | lighter versions | form errors / focus rings |

Blue is the only strong color on the page. It marks actions and links and appears in the illustrations as halftone dots and one solid shape; everything else is white, pale grey or a pastel panel. Coral and yellow are small accents inside drawings (a pin, a heart, a coin, a sun), never surfaces.

## Typography

- **Rethink Sans** (variable, 400 to 800) for everything. A plain grotesque; there is no second family.
- Headlines are **weight 800**, tight (line-height 1.04 to 1.08, -0.012em), and written in **Title Case**: "Go Anywhere, Step-Free", "Routes Without Guesswork". Display 44 to 68px, H1 38 to 56px, H2 30 to 42px, H3 22 to 28px. The only lowercase-led heading is the centred question that opens the reasons ("Why use Evenpath?").
- Body 17px at line-height 1.55; leads 18 to 20px. Copy next to panels is 19px and stays in the full text color; card text is 16 to 17px and muted.
- Buttons 17px at 600 (20px on large buttons). Labels 15px at 600. Bylines and meta 15px.
- No uppercase, no letter-spaced labels, no italics outside the percentages on the donation page.

## Spacing, layout and radius

- Content sits in a 1344px page (`.wrap`) with 16 to 48px gutters; the header is 88px tall (68px on phones).
- The hero is full bleed and 680px tall on desktop: copy in the left 47%, phones in the right 53%, the front phone running about 90px below the band into the white section, which starts with 150px of top padding.
- Reasons alternate: copy at most 430px wide beside a panel at most 680px wide (`.split`). The first row spans the page; the second hugs the left (`.short`), the third is flipped and hugs the right (`.flip`), so the panels step across the page instead of lining up. On phones the panel comes first.
- Feature cards sit two by two on the grey band with 24px gaps and 32px of band above and below.
- Inner pages open with a centred page head (H1, a muted lead) and use 56 to 104px section spacing.
- Radius: buttons, inputs and amount tiles 8px (rounded rectangles, never pills); cards, panels and covers 12px; chips, tabs, tags and searches fully round; phones 46px outside, 36px inside; avatars circles.
- Spacing steps: 4, 8, 16, 24, 32, 48, 56, 104, 150px.

## Surfaces and depth

- Flat white and pastel. Cards get a soft two-layer shadow (`--shadow-card`) and no border; donation and form cards add a 1px border.
- Only the phones float: `--shadow-pop` under each, plus a thin inner rim.
- The header is white with a 1px bottom rule and stays at the top while scrolling.
- The footer is charcoal in both themes; its newsletter field is translucent white.

## Signature elements

Keep at least five of these on the home page.

1. **The periwinkle hero with tilted phones** (`.hero`, `.devices`, `.phone`). A heavy Title Case headline, a plain lead, one white button with blue text, and two phones turned 24 degrees: a silver one in front showing the product, a graphite one behind showing a dark detail screen. The front phone breaks out of the band's bottom edge.
2. **The white header with one blue button** (`.site-header`, `.hdr-give`). Wordmark left in blue, five plain dark links, one 8px rounded blue button, the theme toggle. Nothing else is blue in the header.
3. **The announcement strip** (`.strip`). A pale band right under the header with a tiny drawing at its left edge and one sentence ending in a bold blue link. Home only.
4. **Outlined illustrations with halftone dots** (`svg.il` with `<use href="#il-…">`). Flat pastel shapes, 3px ink outlines with round joins, one patch of blue dots (`.ht`) and often one patch of ink dots (`.hk`) behind the subject, a dotted blue route line (`.rt`) when something moves.
5. **Pastel panels that step across the page** (`.panel`, `.lilac`, `.peri`, default slate). Large 12px-rounded color blocks holding one illustration, alternating sides with uneven offsets.
6. **Two-by-two white cards on a grey band** (`.cards`, `.card`). Each card is an illustration, a centred H3 and one muted sentence.
7. **The centred question** (`.why`). "Why use …?" with one muted line, opening the reasons.
8. **The donation card** (`.don-card`). A blue head with the step name and three dots, amount tiles in a grid, and a full-width blue button.
9. **The blog column** (`.post-card`). One centred column of white cards on grey, each with a round avatar sitting on the top edge, a centred title, a blue byline and a pastel cover.

## Components

- **Header** (`.site-header`, `.hdr`, `.nav`, `.hdr-give`, `#theme-toggle`, `#menu-btn`, `#menu`): five links at most. Below 1024px the links move into `#menu`, which opens under the bar in the flow; below 520px the blue button moves into the menu too.
- **Buttons** (`.btn`): `.btn-blue` (primary), `.btn-white` (on periwinkle), `.btn-line` (outline, secondary), `.btn-lg` for heroes and forms. 8px corners always.
- **Phone** (`.phone` > `.screen`): set `--x`, `--y` and `--r` to place and turn it; `.silver` for the light frame; `.screen.dark` for a dark app screen. Inside: `.s-bar`, `.s-card`, `.s-tags`, `.s-sheet`, `.s-title`, `.s-list`, `.s-share`, and the drawn map `#map-art`. Decorative: `aria-hidden="true"`.
- **Browser window** (`.window`): a bar with three dots, a side list and the map, cropped at the bottom of its panel.
- **Illustration** (`svg.il` + `<use>`): set the viewBox to the symbol's (320 by 240 for panels and cards, 200 by 100 for the strip). Fill classes: `.fp` paper, `.fl` lilac, `.fb` periwinkle, `.fs` slate, `.fa` blue, `.fc` coral, `.fy` sun, `.fk` ink; `.ht`/`.hk` halftone; `.ln` free line; `.lg` grey detail line; `.sw` white stroke; `.th` thick stroke; `.rt` dotted route.
- **Avatar** (`svg.av.p1`…`.p6` with `<use href="#av1|av2">`): drawn heads in an outlined circle; the person class sets background, shirt, skin and hair.
- **Segmented control** (`.seg`): a pill with a blue selected half; `.small` inside cards.
- **Amount tiles** (`.amounts`, `.amt`): radio inputs drawn as 8px tiles, `USD` in small grey before the number; `.money` for the custom amount.
- **Chips and search** (`.chips`, `.chip[aria-pressed]`, `.search`, `.found`, `.empty`): round, white, blue when pressed.
- **FAQ** (`details.qa`): bold question, a CSS chevron, a muted answer, hairlines between.
- **Role card** (`.role`): tag, H3, meta line with icons, one sentence, an outline "Apply" button that fills the form.
- **Timeline** (`.timeline`): blue year pills on a thin line.
- **Person** (`.person`): avatar, name, role, in a white card.
- **Forms** (`.form-card`, `.field`, `.two`, `.pills`, `.check`): labels above 48px inputs with 8px corners; errors float under each field in reserved space; success states replace the form with an illustration, a heading and a reset button.
- **Footer** (`.site-footer`, `.foot`): copyright and a short paragraph, the newsletter field, three link columns under bold labels.

## Do and don't

- Do set headlines in weight 800 and Title Case. Don't use light weights or all caps.
- Do keep one blue button in the header and blue for actions. Don't add a second accent color to buttons or links.
- Do draw with ink outlines, flat pastel fills and halftone dots. Don't use gradients, 3D renders, glossy icons or stock illustration packs.
- Do let the panels step across the page at uneven offsets. Don't line every panel up on the same side.
- Do keep buttons and inputs as 8px rounded rectangles. Don't turn them into pills (chips, tabs and searches are the round ones).
- Don't put photographs straight on the page; a photograph goes inside a panel or a phone screen.
- Don't use emoji; use the SVG icons and drawings in the template.

## Voice

Plain, warm and a little dry, like a nonprofit explaining itself to a friend. Headlines are short promises in Title Case ("Lifts You Can Trust", "No Ads. No Tracking. No Fine Print."). Body copy says what happens and who does it, in short sentences with no jargon. One light joke per page at most, never at the visitor's expense. No exclamation marks in headlines, no superlatives, no invented numbers.
