# Style guide: Stripe style

The look in one sentence: a white canvas, one sweep of soft multicolour gradient, thin two-tone headlines, and the product's own screens floating in front on soft blue shadows.

## Tokens

All values live as CSS custom properties on `:root` (light, the default), repeated for dark under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]` in `assets/template.html`, and as data in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--bg-soft` | white / a breath of blue-gray | deep navy / one step lighter | page / alternating sections and the footer |
| `--surface` / `--surface-2` | white / pale blue-gray | navy steps | cards, inputs / table heads, chips |
| `--text` | navy ink | near-white | headlines and body |
| `--text-soft` | slate blue | light slate | the second tone of every headline |
| `--text-muted` | blue-gray | light gray-blue | leads, descriptions, captions |
| `--border` / `--border-strong` | pale hairline / stronger | white at 10% / 18% | card edges, rules / inputs, outline buttons |
| `--rail` | ink at 9% | white at 7% | the column rails and section rules |
| `--accent` / `--accent-hover` / `--accent-text` | indigo / deeper / white | lighter indigo | the primary button and focus |
| `--link` | indigo | pale indigo | links, kickers, outline-button text, icons in lists |
| `--navy` | deep navy | darker navy | the navy band, the dashboard card, the estimator result |
| `--success` / `--warning` / `--danger` | green / amber / red | lighter versions | status pills and form states |
| `--w1` to `--w6` | amber, coral, magenta, violet, azure, ice | the same | the wash, gradient numerals, covers, card art |
| `--wash-opacity` | 1 | 0.78 | softens every gradient in dark |
| `--numeral` | amber to magenta to violet | the same | gradient-filled figures |

Indigo is the only interactive color. The six wash colors never fill a button, a link or a block of text; they appear only as the wash, tile glows, covers, the card, the line burst and clipped numerals.

## Typography

- **Onest** for everything readable; **Source Code Pro** for code, API paths, version dates and the country codes in vignettes. Money and counts use `font-variant-numeric: tabular-nums` (the `.num` class), so columns of figures line up.
- Display, H1 and H2: weight 300, letter-spacing about -0.024em, line-height 1.06 to 1.14. Display once per page.
- **Two-tone headlines** (`.tt`): the first sentence in `--text` states the claim; a `<span>` continues in `--text-soft` with the explanation. Both are one heading, so screen readers read one sentence pair. Split at a sentence boundary, never mid-phrase. Keep the continuation to one sentence of about 15 words (about 25 words for the whole hero headline), so the buttons stay in the first screen on a 1366 by 768 laptop; longer explanations go into the sections below.
- H3: weight 500 at 18px for small headings; tile and story titles use weight 400 at 19 to 21px.
- Body 16px, line-height 1.55. Buttons and labels weight 500. No uppercase anywhere except country codes.
- Kickers above page heads: a 28px gradient chip with an icon, then a short label in `--link`.

## Spacing, layout and radius

- Frame 1200px with an inner inset of 20 to 36px. Two hairline rails run down the frame edges through every view (`main::after`), and `.ruled` sections start with a rule between the rails. Rails hide under 700px.
- Sections are 72 to 120px tall. Page heads and the hero start under the transparent header, so the wash reaches the top edge.
- Hero: copy on the left, floating cards on the right; one column under 900px.
- Radius: 6px for buttons and inputs, 10px for cards and tiles, 14px for large media and feature art. Pills are fully round.

## Surfaces and depth

- Cards are white with a pale hairline and a two-layer blue-tinted shadow (`--shadow-card`). Floating interface cards, featured plans and form cards use the deeper `--shadow-float`.
- Depth comes from overlap: a light card in front of a navy dashboard, an invoice in front of a table. Never more than three layers.
- Product tiles carry a blurred gradient glow at their bottom edge (`.tile::after`), behind the vignette.

## Signature elements

Keep at least four on the home page.

1. **The wash.** One large ribbon of soft color (ice, azure, violet, magenta, coral, amber) laid diagonally across the top right of each view, with a fine silk texture and soft edges, slowly drifting. One per view, never behind body text. Page heads use the smaller `.wash-sm`.
2. **Two-tone thin headlines.** Weight 300, ink then slate.
3. **Floating interface cards.** The product's real screens in HTML: a navy dashboard with a gradient chart, a white invoice or checkout, a status toast, overlapping on soft blue shadows.
4. **Hairline rails and rules.** The page reads as a quiet grid: vertical rails at the frame edges, horizontal rules between sections, the logo row between two rules.
5. **The navy band.** One deep navy section per page for code, steps and numbers; numerals filled with the gradient; a line burst rising from the bottom.
6. **The hover arrow.** A chevron after every call to action that grows a stem and moves right on hover (`<i class="ar"></i>`).

## Components

- **Header:** transparent over the wash; after scrolling it turns white and blurred with a hairline. Brand mark and name, four links, theme toggle, an outline "Sign in" and the primary "Contact sales".
- **Buttons:** `.btn-primary` indigo with white text; `.btn-secondary` white with an indigo label and a gray hairline. 44px tall, `.btn-sm` 36px in the header.
- **Ticker:** a small line above the hero headline with one live-looking figure; only with a real number.
- **Logo row:** customer names set as type in six cells between rules; vary weight, case and style per name.
- **Bento tile:** title, one sentence, a round plus in the corner, the vignette pinned to the bottom over the glow. The whole tile is a link.
- **Code panel:** navy in both themes, language tabs, a copy button, keyword, string, number and comment colors.
- **Stat:** a gradient numeral in weight 300 over a muted caption, separated by hairlines.
- **Story card:** a gradient cover with the customer's name set as type, an industry label in indigo, a headline, one or two metrics, an arrow link. The featured card spans the row.
- **Plans:** three cards; the featured one has a gradient hairline border and the float shadow.
- **Estimator:** sliders on the left, a navy result panel on the right with the cheaper plan's figure in the gradient.
- **Forms:** inside a white card with the float shadow; labels above fields; errors in a reserved line under each field; success in a green-edged panel.
- **Footer:** soft background, brand, a newsletter field, four link columns, a legal line.

## Do and don't

- Do show the product as interface cards. Don't use stock photos of people pointing at laptops, 3D coins or abstract blobs instead.
- Do keep one wash per view. Don't put gradients behind paragraphs or inside buttons.
- Do keep headlines light. Don't set display or H1 in bold.
- Do align money in tabular figures. Don't mix currencies without their symbols or codes.
- Don't use emoji, card-network logos, bank logos, fake security seals, neon glows or bouncy motion.

## Voice

Calm, exact and plain. Lead with the outcome, then the mechanism ("Each deposit is matched to its invoice automatically, fees and partial payments included"). Name the money: amounts, currencies, days. Numbers must be real or clearly marked as drafts. No exclamation marks, no em dashes, no "revolutionary", "seamless" or "supercharge", no lorem ipsum.
