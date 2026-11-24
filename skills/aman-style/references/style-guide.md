# Style guide

The look in one sentence: a warm limewash page, a fine light serif, tiny tracked capitals above every heading, links that are words with a thin underline, and photographs set into wide, uneven whitespace, so the site feels like a quiet room rather than a brochure.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Limewash (default) | Evening | Use |
|---|---|---|---|
| `--bg` | warm limewash white | warm near-black (never `#000`) | the page |
| `--surface` | paper, a step lighter | a step lighter than the page | form cards, menu cards, the map |
| `--surface-2` | stone, a step darker | a step lighter still | quiet bands, the footer, the sea on the map |
| `--text` / `--text-muted` | warm charcoal / warm grey | limewash / soft limewash | headings and body / ledes, captions, labels |
| `--border` | pale stone | dark stone | every hairline: filters, rows, fields, cards |
| `--line` | charcoal | limewash | text-link underlines, the active filter, the rail's scroll line |
| `--accent` / `--accent-text` | charcoal / limewash | limewash / warm black | the one solid button |
| `--error` | muted clay | soft clay | field errors only |
| `--photo`, `--photo-filter` | stone, none | dark stone, slightly dimmed | behind pictures while they load; dark mode lowers picture brightness a little so they do not glare |

There is no brand colour. The palette is limewash, stone and charcoal; colour comes only from the photographs. If a brand insists on a colour, use it for nothing larger than the wordmark or a single small mark.

## Typography

- Two families. **Cormorant Garamond** (a fine, high-contrast serif, 300 to 700 with true italics) sets everything you read: the display line, headings, body, ledes, captions and quotes. **Mulish** (a plain, open sans) sets only small things: eyebrows, navigation, text links, buttons, filters, field labels and the footer links.
- Headings are light: display and H1 at 300, H2 at 300, H3 at 400. Never bold. Line-height tight (1.04 to 1.14), sentence case, `text-wrap: balance`.
- Body copy is the serif at 19px, weight 500 (Cormorant is delicate; 500 reads like a normal text weight), line-height 1.62. Articles run at 20px in a 680px column.
- Eyebrows (`.eyebrow`) are Mulish 11px, uppercase, letter-spacing 0.26em, in the muted colour. Every section heading and card title sits under one.
- Text links (`.tlink`) are Mulish 13px, letter-spacing 0.08em, sentence case, with a 1px underline 9px below the box.
- Ledes and the centred statement (`.statement`) are serif 300 at 24 to 36px in the muted or main colour. Captions, notes and the pull quote are serif italic.
- The wordmark is live text: the serif at 400, uppercase, letter-spacing 0.5em.

## Spacing, layout and radius

- Page width 1360px with a fluid gutter (20 to 48px). Sections breathe: 88 to 176px of vertical padding (`--sec`).
- Layout is a twelve-column grid (`.g12`). Each item takes its columns from `--c` (`style="--c:1/8"`) and can drop lower with `--dy` on wide screens. On phones every item spans the full width, and pictures lean left or right (`.lean-l`, `.lean-r`) by 14% so the asymmetry survives.
- Asymmetry is the rule: a picture over seven columns with its words in the last four, aligned to the bottom; the next pair mirrored and dropped 120px; cards in threes with the middle one lower. Centre only the intro statement, the quote, the page head of a few views, the rates band and the 404.
- Radius is 0 everywhere: pictures, cards, fields, buttons.

## Surfaces and depth

- The page is flat limewash. Depth comes from whitespace and hairlines, never from shadows.
- Stone bands (`.stone`) mark a change of subject: dining on home, the rates note, practices, the footer. Paper cards (`.form-card`, `.menu-card`) carry a 1px hairline border.
- No gradients, no glass, no blur, no overlays on photographs. Text never sits on a picture.

## Signature elements

These make the style recognizable. Home uses all of them; every other view keeps at least four.

1. **Tiny tracked eyebrows.** Small uppercase sans with very wide letter-spacing above every heading, card title and field. Together with field labels, filters and the wordmark, they are the only uppercase on the page.
2. **A fine, light serif.** Headings at 300 weight in a high-contrast serif, large and calm, with italics for captions and quotes.
3. **Underlined text links instead of buttons.** Calls to action are words with a 1px underline that slides away on hover. The header's "Enquire" and the form's submit are the only solid buttons on the site.
4. **Asymmetric whitespace around photographs.** Pictures are large, unframed and offset: a column of empty space beside the hero, mirrored pairs, staggered cards. The emptiness is part of the composition.
5. **The hairline scroll line.** A row of cards that scrolls sideways, with a 1px track and a darker segment that shows where you are, plus two thin arrows.
6. **Slow, light fades.** Things settle into place over one to three seconds, once.

## Components

- **Header:** sticky limewash bar, five Mulish links on the left, the wordmark centred, the theme toggle and one small solid "Enquire" on the right. A hairline appears under it once the page scrolls. Links never wrap: below 1100px, or whenever they do not fit (`fitNav()` adds `.compact`), they move into `#menu`, a full-screen `<dialog>` with large light serif links.
- **Home hero:** one picture across ten columns with a short italic caption in the two empty columns beside it, then the eyebrow, the display line and two text links underneath, and one muted sentence offset to the right. No text over the picture.
- **Statement:** a centred eyebrow, two or three lines of light serif, one text link.
- **Pair:** picture and words side by side, mirrored on the next row (`.g12` with `--c` and `--dy`).
- **Card:** picture (4:5 or 3:2), eyebrow, H3, one muted line, and a text link. The whole card is the link; the picture scales to 1.03 slowly on hover.
- **Rail:** `.rail-head` (eyebrow, H2, a text link), `.rail` with scroll snapping, `.rail-foot` with the scroll line and two arrow buttons.
- **Filters:** a bar between two hairlines, tracked uppercase words as chips (the chosen one underlined), an optional select, and a live count.
- **Pavilion list:** large rows, picture and words swapping sides, a hairline facts table under each.
- **Gallery:** one wide picture, a counter, and thumbnails underlined when chosen.
- **Tabs:** large light serif words, the chosen one underlined.
- **Rows:** a hairline list with a serif name, a muted description and a tracked duration.
- **Forms:** a paper card; tracked labels above fields that are only a bottom hairline; errors float under the field in small clay text; one solid submit; the success panel replaces the form and repeats the details.
- **FAQ:** topic links on the left, `details` with a thin plus that loses its vertical stroke when open.
- **Footer:** stone, the wordmark and address, two short link lists, the letters signup with an underlined field and a text-link submit, and a hairline above the legal line.

## Do and don't

- Do leave space empty on purpose: a blank column beside the hero, a whole section for one sentence. Don't fill every column.
- Do use words with underlines for actions. Don't add pill buttons, outlined button rows or icon buttons with labels.
- Do keep headings light and large. Don't bold, condense or shout.
- Do keep photographs unframed and square-cornered. Don't put text, gradients or logos over them.
- Do keep colour in the pictures. Don't add accent colours, badges, ratings or price tags.
- Don't use emoji, icon fonts, carousels that auto-advance, parallax or video backgrounds.

## Voice

Calm, sparse and sensory, like a host who does not need to persuade. Describe what is there (cedar floors, a stone bath, the tide) and what happens (we meet every train). Short sentences, few adjectives, no superlatives, no exclamation marks and no hype ("luxury", "world-class", "unparalleled", "curated", "experience the"). Prices and rates are often "on enquiry"; times and distances are exact.
