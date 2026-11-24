# Style guide

The look in one sentence: a stark white canvas and one black grotesque at regular weight, headlines in two tones (a black sentence, then a grey one), pictures set inside flat colour panels and an edge-to-edge mosaic of colourful tiles, underlined links with an arrow, black rounded buttons beside outline pills, a full-width black slab for the last call to action, and a black footer.

The frame is strictly black and white. Colour never touches the text, the buttons or the page background; it arrives in blocks (a pastel panel holding a picture, a saturated tile, one green notice band) and each block is a picture of something. That contrast between a quiet frame and loud blocks is the whole style.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, written as `light-dark(light, dark)`, and as data in `tokens.json`. Change them there, never inline. Light is the default and follows the system setting until the toggle is used; `<html data-theme="light|dark">` pins one.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | white | 14.5% near-black | the canvas, cards, chips |
| `--surface`, `--surface-2` | 96.5%, 92.5% grey | 20.5%, 27% | hover fills, the tag strip, segmented tracks, meters |
| `--text` | pure black | 98% | headlines, the first sentence of every two-tone headline, links |
| `--text-muted` (`textMuted`) | 50% grey | 72% | the second sentence, descriptions, labels, counts |
| `--border`, `--border-strong` | 90%, 80% grey | 28%, 42% | the header line, hairline rows, the quote and stat rules, outline buttons |
| `--accent` / `--accent-text` | black / white | near-white / black | solid buttons, pressed chips, the slab |
| `--foot` | black | 9% | the footer, in both themes |
| `--p-cyan`, `--p-lilac`, `--p-peach`, `--p-mint`, `--p-butter`, `--p-grey`, `--p-green` | pastels (and one mid green) | deep, muted versions of each | colour panels, avatars, team squares, badges |
| `--c-blue`, `--c-green` | saturated blue and green | the same | small controls inside pictures (meters, sliders, switches), the hero strip |
| `--notice` | bright green | slightly deeper green | the one dismissible notice band |
| `--ok`, `--error`, `--focus` | green, red, blue | lighter versions | check marks, field errors, focus rings |

Panels change with the theme (pastel in light, deep and muted in dark) so the page never glows at night; pictures inside them keep their own colours in both themes.

## Typography

- One family: **Host Grotesk**, variable, weights 300 to 800. Everything is set at **400**; 500 appears only in tiny labels (badges, the bold word in a floating control, footer column titles are 400 in caps). No bold headlines, no italics.
- Display, `--fs-display` (44 to 80px): the pricing headline, the slab's words, the 404 line. Letter-spacing -0.035em, line-height 1.
- H1, `--fs-h1` (36 to 58px): the home headline and page heads. Letter-spacing -0.03em, line-height 1.04.
- H2, `--fs-h2` (24 to 36px): section headlines, almost always two-tone. Letter-spacing -0.022em, line-height 1.14, at most 25em wide.
- H3: 16px at regular weight for the small feature notes beside panels; 20 to 30px for feature-row names, plan names and add-on titles.
- Body 16px, line-height 1.55; descriptions at 15px in grey; article text 18px.
- Small 14px for labels, counts and meta. Tracked capitals (0.1em) only in footer column titles and badges.

## Two-tone headlines (signature)

One heading element, two sentences: the first states the point in `--text`, the second explains it in `--text-muted` on its own line, at the same size and weight.

```html
<h2 class="tt">Run the studio, not the inbox. <span>Members book, swap and pay on their own.</span></h2>
```

- The first sentence is short (two to six words is ideal) and ends with a full stop; the second is one sentence, two lines at most on desktop.
- Page heads use the same pattern at H1 size (`.tt.tt-xl`): "Customer stories. Studios of every size, in their own words."
- `.tt-in` indents a headline about one sixth of the page so a long page does not stack every heading on the same left edge.
- A plain one-tone headline is reserved for the hero, the pricing headline and the line above the slab.

## Layout and spacing

- **A wide page.** Content spans 1360px with a 16 to 40px gutter (`--gutter`); the mosaic and the rail run edge to edge.
- **Sections breathe.** 72 to 160px between sections (`--sec`), 28 to 48px between a headline and its panel.
- **Hero in three columns:** headline and one line on the left, a collage inside a hairline frame (`.stage`, vertical lines left and right) in the middle, one extra-large button on the right. On tablets the button moves under the headline; on phones everything stacks.
- **Panel then note:** a wide panel takes two thirds and a small note (glyph, 16px title, grey line, arrow link) sits at the top of the last third; or a full-width panel followed by two notes side by side (`.duo`).
- **Radii:** 0 on panels, tiles and every picture; 8px on buttons and fields; 16px on large buttons, form cards and add-on cards; 20px on the slab; pills for chips, badges with labels, the segmented control and the secondary large button.

## Surfaces and depth

- Flat. Panels and tiles have no border, no radius and no shadow.
- Only things that float over pictures get a shadow (`--shadow-overlay`): the white controls on mosaic tiles and in the hero, and the phone in the hero (a soft drop shadow).
- Cards that hold text and an action (add-ons, form cards) have a hairline border and a faint shadow (`--shadow-card`).
- The footer is the only full-width dark block on a light page; the notice band on pricing is the only full-width colour.

## Signature elements

Every page keeps the first three; the home page shows all six.

1. **Two-tone headlines** (above).
2. **Colour panels** (`.panel`): a flat field in one panel colour that frames a picture, usually a product view or a piece of work. The picture sits centred with generous padding and runs off the bottom edge (default) or sits fully inside (`.inset`). Set `--panel`, `--ar` (the panel's ratio) and `--w` (the picture's width) inline.
3. **Underlined arrow links** (`.arrow-link`): 1px underline 4px below the text and an arrow that moves 3px on hover. They replace secondary buttons nearly everywhere.
4. **The tile mosaic** (`.mosaic`): eight colourful pictures in a four-column grid with 16px gaps, running edge to edge, the first row shorter than the second. Up to three tiles carry a floating white control (`.float`: a meter, a slider or a switch with a short label) and a black pointer arrow, as if someone were working on them. A small pill label (`.lbl`) slides up on hover and stays visible on touch screens.
5. **The black slab** (`.slab`): a full-width black rounded block whose words are display size. One per page at most, at the end, under a short centred line.
6. **The black footer:** a big wordmark, round icon buttons, a short newsletter form, and four link columns under tracked grey capitals, with `New` and `Beta` badges.

## Components

- **Header:** wordmark (mark plus name at 21px, weight 500) on the left, plain links, then the theme toggle, an outline "Talk to sales" button and a black "Start free" button, all on one hairline-bottomed bar. Below 1100px the links and the outline button move into a full-screen menu sheet with 28px links.
- **Buttons:** `.btn.btn-solid` is black with white text (white with black text in dark); `.btn.btn-line` is white with a grey hairline; add `.btn-pill` for the outline pill; `.btn-xl` makes either 60 to 84px tall with 20 to 30px text. One solid button per group.
- **Badges:** `.badge` is 11px tracked capitals on cyan (`New`) or lilac (`.beta`), 4px radius. On the announcement pill the badge turns green.
- **Chips:** 44px outline pills; pressed is black with white text. A grey count sits at the right of the filter bar.
- **Segmented control:** a grey pill track with a white key and a hairline shadow on the pressed option.
- **Quote and stat:** a large quote with a hanging opening mark on a 1px left rule, the person with a pastel initials avatar; beside it a huge number, a grey sentence and a grey source line, also on a left rule.
- **Marquee:** a slow row of studio wordmarks (one family, varied weight, case and tracking, a small glyph) behind a round pause button; it stands still with reduced motion.
- **Rail:** square pictures in a horizontal scroll-snap row that starts at the content edge and runs off the right, an arrow link under each, a "1 of 6" counter and round arrow buttons.
- **Feature rows** (`.frow`): hairline rows of name and badge with a date, a 4:3 panel, a grey line and arrow links at the right. Rows without a picture keep the same columns.
- **Plans:** columns divided by hairlines, no cards: name, one grey line, price rows on hairlines, a full-width button, "Choose X if you" with small dots, then key features with green check discs.
- **Compare table:** group rows in medium weight, check discs or a grey "No", and a segmented "All features / Key features" switch.
- **Forms:** labels above 48px fields with a grey hairline, black on focus with a soft blue ring, red when invalid. Errors sit in a reserved line under each field, so nothing moves. Success replaces the form with a mint panel that repeats the email address.

## Do and don't

- Do keep every word black or grey. Don't colour headlines, links or buttons, and don't use a brand colour as the page background.
- Do put colour in blocks that hold pictures. Don't use gradients, glassy cards, glows or tinted section backgrounds.
- Do keep one weight. Don't make headlines bold for emphasis; use the two tones.
- Do keep panels and tiles square-cornered. Don't round pictures or add borders to them.
- Do use arrow links for secondary actions. Don't put three buttons side by side.
- Don't use emoji, icon fonts, stock illustration packs or decorative blobs around the text.

## Voice

Short, confident and concrete, like a product team explaining one thing at a time. The first sentence of a headline makes a plain claim ("Run the studio, not the inbox."); the second says how, in everyday words. Use numbers only when they are real. No exclamation marks in headlines, no "revolutionary", "seamless", "all-in-one", "supercharge" or "unlock". Buttons are verbs of two or three words ("Start free", "Talk to sales", "Select plan").
