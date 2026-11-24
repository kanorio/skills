# Style guide: Claude style

The look in one sentence: warm paper and warm ink, editorial serif headlines, one terracotta accent, and the product shown honestly in dark cards resting on soft, contour-lined clay tiles, with small hand-drawn objects to keep it human.

## Tokens

All values live as CSS custom properties on `:root` (light, the default), repeated for dark under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]` in `assets/template.html`, and as data in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--bg-alt` | warm paper / oat, one step darker | warm charcoal / one step darker | page / alternating bands, the subscribe box |
| `--surface` | near-white paper | lifted charcoal | plan cards, story cards, forms, the floating note |
| `--text` / `--text-muted` | warm ink / warm gray | paper / warm light gray | headlines and body / leads, captions, card text |
| `--border` / `--border-strong` | hairline / stronger | charcoal steps | card edges and rules / inputs, outline buttons, step rules |
| `--accent` / `--accent-text` | terracotta / paper | lighter terracotta / ink | the one warm mark: link underlines, the quote mark, drop-cap rules, list markers, the plan flag, illustration details, focus |
| `--primary` / `--primary-text` | ink / paper | paper / ink | primary buttons and selected chips (the button is ink, never terracotta) |
| `--footer` | ink | deeper ink | the footer, dark in both themes |
| `--sand` / `--line` | warm sand / ink | dark sand / paper | the fill and the stroke of every illustration |
| `--t-clay`, `--t-sage`, `--t-sky`, `--t-sand` | soft clay, sage, sky, sand | the same hues, deeper | tiles behind product cards and illustrations |
| `--tile-line` | white at 30% | white at 13% | the contour lines on tiles |
| `--card`, `--card-2`, `--card-line`, `--card-text`, `--card-muted` | ink steps and paper text | darker ink steps | the dark product cards, identical in spirit in both themes |
| `--c-clay`, `--c-sage`, `--c-sky` | bright clay, sage, sky | the same | code dots, highlights, bars and citations inside dark cards only |

Terracotta is rare on purpose: one accent per view in the page itself (a link underline, the quote mark, the plan flag, a stroke in an illustration). Buttons are ink. The tile colors are muted, never saturated, and never carry text directly; text on a tile lives in a dark card or a light note.

## Typography

- **Source Serif 4** (variable weight and optical size) for display, H1 to H3, plan names, prices, quotes, pull quotes, the article body and the wordmark. Weight 500 everywhere; let `font-optical-sizing: auto` pick the display cut. No bold serif, no italic (the template ships no italic file).
- **Instrument Sans** for interface text, body copy outside articles, buttons and forms, weight 400 to 600.
- **The system monospace** (`--mono`) for small labels: section labels ("How it works"), step numbers ("01"), post meta ("Essay / 12 min read"), timestamps and speaker codes inside cards, file formats. It is never a font file and never above 14px.
- Display: about 84px on desktop, line-height 1.02, letter-spacing -0.024em, at most two lines, once per view. H1 64px, H2 46px, H3 22px.
- Body 17px, line-height 1.6. Article body is the serif at 19px with line-height 1.72, about 68 characters per line, with a three-line drop cap on the first paragraph.
- No uppercase labels, no letter-spaced capitals, no exclamation marks.

## Spacing, layout and radius

- Frame 1200px with a 20 to 48px gutter. Sections are 72 to 128px tall; bands alternate between paper and oat.
- Headlines sit left-aligned above their content (`.sec-head`), centered only for pricing, the quote, the closing call to action and the 404.
- Grids: three columns for steps, posts, principles and stories; two columns (copy and tile) for the hero, showcase, splits and the lead story. Everything drops to one column below 820 to 900px.
- Radius: 10px controls, 16px cards, 22px tiles. Pills and chips are fully round.
- The article column is 680px wide, set off-center so a 240px sidenote margin fits on the right from 1180px up.

## Surfaces and depth

- Paper cards (`--surface`) have a hairline border and, when featured, a soft warm shadow. Nothing floats without a reason.
- Dark product cards are the only strong depth: a deep shadow (`--shadow-overlay`), a title bar with three dots, and dashed row dividers. In the hero and the product view the tile crops the card on the right and bottom (`.tile.crop`), as if the window continues past the frame.
- At most two layers: a dark card and one light note on top of it.

## Signature elements

Keep at least five on the home page.

1. **Warm paper and warm ink.** The canvas is a soft paper tone, text is a brown-black ink, and the dark theme is warm charcoal with paper text. Never pure white or pure black.
2. **Editorial serif headlines.** Source Serif 4 at 500, short and plain, with sans body copy beside them.
3. **Dark product cards on contour tiles.** The product's real screens, built in HTML: a transcript with highlighted passages and code tags, a theme board with bars, a memo with citation chips, review comments, a workspace with three panes, an export in Markdown. Each sits on a clay, sage, sky or sand tile traced with hand-drawn contour lines and loops (`#contours`).
4. **Two-tone hand-drawn illustrations.** Small objects (pages, a lens, a pen, index cards, a card cabinet, a lock, a wren on a branch) drawn with a 1.7 ink line, a sand fill nudged 3 to 4 units off the line like a misregistered print, and at most one terracotta detail each.
5. **One terracotta accent.** The bird mark, link underlines, the opening quote mark, drop-cap and pull-quote rules, ordered-list markers and illustration details. Never a background, never a button fill.
6. **Mono field labels.** Small monospace labels and numbers ("01", "Essay / 12 min read", "P7 04:26") that make the pages feel like a researcher's notebook.
7. **Sidenotes.** In articles, notes sit in the right margin on wide screens and become tinted inline boxes on phones.
8. **The ink footer.** Dark in both themes, with the wordmark and the bird in terracotta.

## Components

- **Header:** paper and blurred, a hairline after scrolling. Bird mark and serif wordmark, five links in muted sans (the current page gets a terracotta underline), the theme toggle and an ink "Join the waitlist" button. Below 960px the links move into a drop-down inside the header; below 520px the button moves there too.
- **Buttons:** `.btn-primary` ink with paper text; `.btn-ghost` transparent with a strong hairline; `.btn-soft` oat. 48px tall, 40px in the header. No arrows inside buttons; text links (`.more`) carry the arrow.
- **Pill:** a round announcement link above the hero headline, a mono tag, a short title and a terracotta arrow.
- **Steps:** three columns, each a rule, a mono number, an illustration, a serif H3 and two lines of muted text.
- **Showcase:** a segmented tab control (selected tab is a paper chip with a soft shadow), then copy on the left and a tile with a dark card on the right.
- **Quote:** centered serif at about 40px with a terracotta opening mark and a sans attribution.
- **Post card:** a 16:10 tile with an illustration, a mono kind and reading time, a serif title, one line of summary. The title underlines in terracotta on hover; the tile lifts 3px.
- **Plans:** paper cards with an illustration, the plan name in serif, the price in serif with tabular figures, a fine line about billing, the button, then a ruled list with checks. The featured plan has a stronger border, the warm shadow and a terracotta flag.
- **Forms:** inside a paper card; labels above fields; a reserved error line under each field; radio choices as round chips; success replaces the form with an illustration, a serif heading and the echoed email.
- **Story card:** mono sector, serif organization name, the quote in muted text, the person, and one serif figure under a rule.
- **Footer:** ink, wordmark, one line, four link columns, a small legal line.

## Do and don't

- Do show the real product in dark cards. Don't use screenshots of other products, laptop mockups, stock photos of people at desks, or glowing abstract shapes.
- Do keep tiles muted and lines faint. Don't use gradients, neon, glass effects or saturated fills.
- Do keep headlines in the serif at 500. Don't set display text in bold or in the sans.
- Do use one terracotta mark per view. Don't paint buttons, backgrounds or whole headlines terracotta.
- Don't draw starbursts, sparkles, asterisk marks, robots or chat bubbles as logos or decoration; this is an editorial style, not a chat interface.
- Don't use emoji, icon fonts or more than two layers of overlap.

## Voice

Warm, precise and unhurried, like a good editor. Say what the product does in plain words, then why it matters to the reader ("Every sentence in a memo can carry its sources"). Prefer verbs about attention and care: read, notice, keep, check, write. Short sentences, no hype words ("revolutionary", "supercharge", "magic"), no exclamation marks, no em dashes, no lorem ipsum. Numbers and quotes must be real or clearly marked as drafts.
