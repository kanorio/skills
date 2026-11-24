# Style guide

The look in one sentence: a white canvas, one neutral grotesque at regular weight, a wall of work in mixed sizes that runs edge to edge, a sentence whose words you can swap to filter the work, and one dark band per page for the feature story.

The page is a gallery wall. The interface stays black, white and grey so the work can be every colour; the only colour on the page comes from the pictures.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Both themes are complete; light is the default and follows the system setting until the toggle is used.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | white | charcoal, 16.5% | the canvas |
| `--surface` | 95.5% grey | 23% grey | buttons, chips, fields, tags, the segmented control |
| `--surface-2` | 91.5% grey | 28% grey | hover on grey |
| `--text` | near-black, 17% | 95% | headlines, captions' first line, links |
| `--text-muted` (`textMuted`) | 48% grey | 71% grey | the second line of every caption, labels, counts |
| `--border` | 88% grey | 31% grey | hairlines, the underline under sentence words |
| `--accent` / `--accent-text` | near-black / white | near-white / charcoal | the one solid button per form, pressed chips |
| `--band`, `--band-inset` | 21% / 11% | 9.5% / 19% | the dark feature band and the panel inside it |
| `--band-text`, `--band-muted` | 97% / 73% | 96% / 72% | words on the band |
| `--tile` | 93% grey | 24% grey | behind pictures while they load |
| `--pill` | white at 82% | charcoal at 82% | the sentence pill over the wall (with a 14px backdrop blur) |
| `--error` | brick red | light brick | field errors only |

Every grey has zero chroma. Do not tint the canvas warm or cool, and do not add a brand colour to the interface: a client's colour belongs in their pictures and on their project page's palette panel, nowhere else. A brand colour of the studio itself may colour the wordmark mark at most.

## Typography

- One family: **Instrument Sans**, variable, weights 400 to 700. Use 400 for everything and 500 for the few labels that need emphasis (the byline name, field headings, the selected option). Never bold, never italic, never all caps.
- Display, `--fs-display` (40 to 88px): the sentence on the work page and the 404 headline. Letter-spacing -0.035em, line-height 1.02.
- H1, `--fs-h1` (36 to 62px): page titles, project names, band titles. Letter-spacing -0.03em.
- Statement, 28 to 52px: the one long sentence under the wall on the home page, set at 19em wide.
- H2, `--fs-h2` (26 to 40px): section titles ("Latest work", "Journal"), the rows on the studio page.
- Captions, 17px: the first line in `--text`, the second in `--text-muted`. Captions sit under pictures, never on them (the wall's hover labels are the one exception).
- Body 17px, line-height 1.5; article text 19px, line-height 1.6, in a 680px column.
- Labels, 14px in `--text-muted`, sentence case: "Work", "The studio", "Next project". No tracked capitals, no eyebrows in a second font.
- Headlines are short names or plain statements without a full stop. Sentences end with one.

## Layout and spacing

- **Full width.** The page uses the whole window with a 16 to 24px gutter (`--gutter`); there is no centred container. Text blocks are held to a measure instead (30 to 38em).
- **Twelve columns**, 8 to 12px apart (`--gap`). Tiles take 4, 6 or 8 columns. Two-column page heads put the H1 in the left half and the text in the right half.
- **Rows breathe.** Between rows of tiles 48 to 96px (`--row`); between sections 72 to 144px (`--sec`). Tiles in a row align at the top and end at different heights, because their pictures have different sizes.
- **The wall** has no gutter and 2px seams (`--seam`), so it reads as one surface.
- Radius: 4px on buttons, chips, fields, tags and the sentence pill; 8px on the band's inset panel, the option list and the success panel; 0 on every picture.
- Under 760px: the wall becomes two columns with the first tile two by two; tiles stack full width; two-column heads stack.

## Surfaces and depth

- No cards with borders, no shadows on content. Pictures sit straight on the canvas.
- Grey fills mark things you can press or type into: buttons, chips, fields, tags.
- Two things float and only they get a shadow: the option list of the sentence (a 1px ring and a soft 40px drop) and the sentence pill (a 1px hairline shadow with a blur behind it).
- The band is the only full-width colour change on a page.

## Signature elements

Every page keeps the first two; the home page shows all four.

1. **The wall.** A full-bleed mosaic of seven tiles in four sizes on a six-column grid (`.wa` to `.wg`), 2px seams, pictures cropped to fill. Hovering or focusing a tile slides up a small label with the client and the discipline; on touch screens the labels stay visible.
2. **The sentence.** "We make [anything] for [anyone]": a plain sentence whose underlined words are buttons. Each opens a list of alternatives with counts (`.options`, a listbox). On the home page it sits in a translucent pill over the middle of the wall and sends you to the filtered work; on the work page it is the display-size H1 and filters in place. Rewrite it for the user's trade ("We photograph [anything] for [anyone]", "We build [houses] in [the city]"), keep two blanks at most, and keep each word a noun phrase that reads naturally in the sentence.
3. **Captions under pictures.** Two short lines, name then one sentence, in the same 17px, black then grey.
4. **The dark band.** One per page at most: a feature on the home page, the way of working on the studio page, hiring on the people page, the next project on a project page. A small label, an H1-size title, a grey paragraph, one button, then an 8px-radius inset panel holding cards or principles.

## Components

- **Header:** the wordmark (a small square mark and the name at 22px, weight 500) on the left, grey links on the right that turn black when hovered or current, then the theme toggle. When the links do not fit, `fitNav()` hides them behind a menu button that opens a full-screen `<dialog>` with H1-size links.
- **Buttons (`.btn`):** grey rectangles, 44px tall, 4px radius, text then a 14px arrow that moves 3px on hover. `.btn.solid` is black (white in dark) and is used once per form. On the band, buttons are 12% white.
- **Tags (`.tag`):** 28px grey rectangles with 13px grey text on project pages, each a link back to the filtered work.
- **Chips (`.chip`):** 44px grey rectangles for filters, pressed state black with white text, a count in grey at the end of the row.
- **Segmented control (`.seg`):** Tiles and Index on a grey track; the pressed one is a white key with a hairline shadow.
- **Index (`.index`):** rows between hairlines, five columns (client, line, work, sector, year), the row turns grey and indents 10px on hover. On phones only client and year remain.
- **Tiles (`.tile`):** a picture (3:2, or 4:5 for `.tall`) and the two-line caption. `.drop` lowers a tile to break the row line.
- **Project page:** H1, lead, tags and an "About the project" button that opens a four-column facts row; a 16:9 hero; brief and idea in two columns; a cropped detail beside a palette panel (the project's colours as stacked swatches with names and hex values); a closing line with a solid button; the band with the next project.
- **Forms:** labels above grey fields with no border, a hairline on hover, a 2px outline on focus, a 1.5px red ring when invalid. Errors float in the 26px reserved under each field, so the submit button never moves. Success replaces the form with a grey panel that repeats what was sent.

## Do and don't

- Do let the pictures carry the colour. Don't colour headings, links, buttons or backgrounds.
- Do keep one family at regular weight. Don't add a serif, a mono or bold headlines for "contrast".
- Do put captions under pictures. Don't put text on pictures beyond the wall's small labels.
- Do keep picture corners square and seams thin. Don't add frames, rounded corners, drop shadows or hover overlays that darken the work.
- Do vary tile sizes in a repeating rhythm. Don't make a uniform grid of equal cards.
- Do keep one band per page. Don't stack two dark sections or alternate grey bands.
- Don't use emoji, icon fonts, gradients, glass panels other than the pill, or decorative illustrations around the work.

## Voice

Plain, confident and specific, the way a studio describes its own work in a portfolio review. Name what was made and for whom; say the problem in one sentence and the idea in one more. Use numbers when they are real ("nine glasshouses", "forty stall signs"). No "award-winning", "world-class", "bespoke", "cutting-edge" or "we're passionate about", no exclamation marks, no em dashes. Project lines are one sentence that fits on two caption lines.
