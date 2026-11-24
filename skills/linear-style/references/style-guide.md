# Style guide: Linear style

The look in one sentence: a dark, quiet canvas, one soft glow, and the product's own interface drawn with hairlines.

## Tokens

All values live as CSS custom properties on `:root` (dark, the default) and `:root[data-theme="light"]` in `assets/template.html`, and as data in `tokens.json`.

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--bg` | near-black with a cool tint | near-white | page background |
| `--surface` / `--surface-2` / `--surface-3` | three steps lighter | white and two soft grays | cards, inputs, hover, chips |
| `--text` / `--text-muted` / `--text-faint` | near-white / gray / dim gray | ink / gray / light gray | headings and body / leads and descriptions / labels and timestamps |
| `--border` / `--border-strong` | white at 8% / 14% | ink at 9% / 16% | every edge; the strong one for inputs, pills and the window |
| `--highlight` | white at 6% | white | the 1px inner top edge on cards and buttons |
| `--accent` / `--accent-text` | near-white / near-black | ink / near-white | the primary button only |
| `--brand` / `--brand-soft` | violet / violet at 16% | deeper violet / at 10% | step numbers, the selected row rule, the caret, chips, charts, focus |
| `--glow-a` / `--glow-b` | violet / cool blue, translucent | lighter versions | the glows |
| `--success` / `--warning` / `--danger` | green / amber / red | darker versions | status dots and form states |
| `--headline` | white to gray, top to bottom | ink to gray | gradient headline text |

The primary button is white on dark and ink on light. Violet is a light source, not a fill: it shows up in glows, thin rules, small chips and charts, never as a big solid area or a button.

## Typography

- **Inter** for everything readable, with `cv11`, `ss01` and `ss03`. **JetBrains Mono** for labels, timestamps, keyboard chips, code and numbers inside the product window.
- Display: 600 weight (not bold), letter-spacing about -0.045em, line-height 1.02, gradient text. Once per page.
- H1 and H2: 600 weight, -0.035 to -0.04em, gradient text. H3: 600 weight, 17px, plain text color.
- Body: 16px, line-height 1.6. Leads are muted and slightly larger.
- Labels above sections: uppercase monospace, 12px, 0.08em tracking, faint color. This is the only uppercase in the style.
- Headlines are short claims with a period: "The support inbox that answers itself."

## Spacing, layout and radius

- Page width 1180px. Sections are tall: 72 to 140px of vertical padding, with the next section often starting with `padding-top: 0` to keep rhythm tight between related blocks.
- The hero and closing call to action are centered; everything else is left-aligned.
- Radius: 8px controls, 14px cards and tiles, 16px for the product window.
- The bento grid has six columns: wide tiles span three, narrow tiles span two.

## Surfaces and depth

- Every card, tile, pill and window has a hairline border and a 1px inner top highlight (`--shadow-card`). That highlight is what makes dark surfaces read as objects.
- Only the product window, the featured plan and form cards get the large overlay shadow.
- Backgrounds are flat. Depth comes from the glow behind, never from gradients inside cards.

## Signature elements

Keep at least four on the home page.

1. **The glow.** One or two blurred radial gradients (violet and cool blue) behind the hero headline and the product window, and one behind the closing call to action. One glow per screen; never behind body text.
2. **Gradient headlines.** Display, H1 and H2 fade from the text color to gray, top to bottom.
3. **The product window.** The actual interface, built in HTML: a bar with three dots, a sidebar, a list with one selected row (violet left rule), and a detail pane. It tilts back slightly and settles flat when it scrolls in.
4. **Hairlines and highlights.** 8% borders, inner top highlights, and section rules instead of boxes.
5. **Monospace details.** Uppercase labels, timestamps, keyboard chips (`J`, `K`, `⌘`, `↵`) and code with a few colored tokens.
6. **The faint grid.** A 64px line grid behind the hero and page heads, masked to fade out from the center.

## Components

- **Header:** blurred translucent bar, brand mark and name, four small muted links, theme toggle, a quiet "Log in" and the primary button. A hairline appears after scrolling.
- **Pill:** a rounded announcement link above the headline with a small violet "New" badge.
- **Bento tile:** title, one muted sentence, and a small vignette pinned to the bottom (a list with tags, typed text with a caret, keyboard chips, a rule, a chart).
- **Steps:** three columns separated by hairlines, each with a violet monospace number.
- **Code block:** tabs, a copy button, and code with keyword, string and comment colors.
- **Numbers:** big 600-weight figures over a strong hairline, with a muted caption.
- **Quote:** centered, large, gradient text, initials avatar.
- **Changelog:** monospace dates in a sticky left column, titles and short notes on the right, an occasional interface snippet.
- **Pricing:** a segmented switch, plan cards (featured has a violet edge and a faint glow), and a comparison table.
- **Forms:** inside a card with the overlay shadow; inputs sit on `--surface-2`; labels are small and muted; errors in red under the field; success in a green-edged box.

## Do and don't

- Do show the product. Don't use stock photos, 3D blobs or abstract illustrations instead of it.
- Do keep one glow per screen. Don't stack glows or put them behind paragraphs.
- Do keep violet as light. Don't make buttons or large areas violet.
- Do use monospace for data and labels. Don't set paragraphs or headlines in monospace.
- Don't use emoji, drop shadows on text, neon outlines, glassmorphism on content cards, or bouncy motion.

## Voice

Confident, short and concrete. Lead with the outcome, then the mechanism ("Every message is tagged, prioritized and sent to the right queue before anyone opens it"). Numbers must be real or clearly marked as drafts. No exclamation marks, no em dashes, no "revolutionary", "next-gen" or "supercharge", no lorem ipsum.
