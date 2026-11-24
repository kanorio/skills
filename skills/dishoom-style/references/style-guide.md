# Style guide: Dishoom style

The look in one sentence: cream paper, pictures hung in double-rule frames with small direction captions, widely tracked serif headings, and a staggered layout that tells a story before it sells a table.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Day (default) | Evening | Use |
|---|---|---|---|
| `--bg` | cream paper | warm near-black | page background |
| `--surface` / `--surface-2` | fresh paper / sand | two lifted browns | forms, letters, feast cards / the sub-navigation band |
| `--text` / `--text-muted` | warm ink / brown-grey | cream / soft cream | body copy / ledes, notes, metadata |
| `--rule` | warm ink | cream | frames, double rules, outline buttons, the pinstripe |
| `--border` | pale sand | dark brown | hairlines between rows, menu columns, course dividers |
| `--accent` / `--accent-text` | tile teal / cream | pale teal / near-black | dish names, the solid button's hover |
| `--chilli` | brick red | coral | diamond chains, tags, error text |
| `--leaf`, `--saffron` | green, saffron | lighter versions | tags, the focus ring on ink |
| `--ink`, `--ink-text`, `--ink-muted` | deep warm black | deeper black | the hero, the locations band and the footer, in both themes |

Inside `.ink` bands the tokens are re-mapped (`--bg` becomes ink, `--text` and `--rule` become cream), so frames, buttons and captions work there without extra classes. Color is quiet: almost everything is ink on cream. Teal is for dish names, red is for chains and tags, and nothing else gets a color.

## Typography

- Two families. **Brygada 1918** (a period serif, 400 to 700 with italics) sets everything you read: headings, body, quotes, captions, prices. **Cabin** (a humanist sans, 700) sets only small things in tracked capitals: navigation, eyebrows, buttons, dish names, tags, form labels and the "Above:" in captions.
- Hero quote: 400 weight, letter-spacing 0.07em, line-height 1.34, sentence case inside curly quotes. One per page at most.
- Section titles: uppercase serif, 400 weight, letter-spacing 0.16em (`.caps`). They sit centered under an italic kicker (`.kicker`, letter-spacing 0.06em).
- Page H1 and H2: sentence case, 400 weight, tight tracking (`.h1`, `.h2`). Left-aligned, often under an eyebrow with a short double rule (`.eyebrow.ruled`).
- Body: 17px, line-height 1.62. Story paragraphs are justified with hyphenation (`.prose`); short notes and availability lines are italic (`.note`).
- Ledes (`.lede`) are large, tracked 0.06em and muted, split into two lines with the second indented, like a sentence read aloud with a pause.
- Labels: Cabin 700, 12 to 13px, uppercase, letter-spacing 0.2em. Dish names: Cabin 700, 15px, letter-spacing 0.16em, in teal, with the price in the same line.

## Spacing, layout and radius

- Page width 1320px with a fluid gutter (20 to 56px); articles and legal text sit in a 720px column.
- Sections are generous: 56 to 112px of vertical padding. Separate them with whitespace, a diamond row or a pinstripe, never with boxed dividers.
- The layout staggers: text and pictures start at different heights, pictures sit in uneven columns (`.stagger`, `.photos .low`), and the second line of a lede is indented. Center only section titles, the feature copy, the letter and the 404.
- Menus run in two columns with a hairline rule between them (`.menu-cols`); a dish never breaks across columns.
- Radius is 0 everywhere. Corners are square like printed card.

## Surfaces and depth

- The page is flat cream paper. Depth comes from rules, not shadows: frames, inner rules on buttons and plates, and the double border on forms and letters (`border: 5px double`).
- Ink bands are the only dark fields on a day page: the hero, the locations band (with a darkened picture behind it) and the footer. They stay ink in the evening theme, a step darker than the page.
- No gradients except the legibility scrim over pictures in ink bands. No glass, blur or drop shadows.

## Signature elements

These make the style recognizable. The home page uses all of them; every other page keeps at least three.

1. **Double-rule frames.** Every picture sits in `.frame`: a 3px rule, a 4px paper gap, and a 1px rule around the picture. Feature pictures use `.frame.dbl`, a 5px double border with a wider gap.
2. **Direction captions.** Every framed picture is labelled "Above:", "Right:" or "Left:" in Cabin capitals, followed by one plain sentence in the serif. "Right:" and "Left:" captions run vertically beside the frame (`.side`), reading bottom to top.
3. **Tracked serif.** Section titles in widely spaced capitals and the hero quote in widely spaced sentence case. Tracking is the style's voice; never set headings tight and bold.
4. **The staggered introduction.** A two-line lede, then a tall frame on the left, a justified paragraph on the right, and a smaller frame with a vertical caption below it, offset from the first.
5. **Printer's ornaments.** A row of eleven small diamonds above section titles (`.diamonds`), a chain of outlined red diamonds above and below a signature dish (`.chain`), an asterisk between two rules under feature titles (`.flourish`), five fine pinstripes where paper meets ink (`.pinstripe`), and a short double rule above eyebrows (`.ruled`).
6. **Inner rules.** Buttons, caption plates, date plates and feast cards carry a second, thin rule 3 to 4px inside their border, drawn with inset box-shadows.

## Components

- **Header:** sticky paper bar with a hairline. Five tracked links on the left, the wordmark centered (italic serif name over a tiny tracked line between two rules), the theme toggle and an outlined "Book a table" on the right. Links never wrap: below 1180px, or whenever they do not fit on one line beside the wordmark (the script adds `.compact`), they move into `#menu`, a full-screen `<dialog>` with big tracked links and a pinstripe at the bottom.
- **Hero:** an ink band holding one framed picture, darkened, with an italic kicker, the quote as H1 and two buttons centered on it, and an "Above:" caption under the frame.
- **Buttons:** `.btn` is a 1.5px outline with an inner rule that fills with ink on hover; `.btn.solid` is ink with a cream inner rule and turns teal on hover. Arrow links (`.arrow`) are tracked capitals with a long feathered arrow that slides 6px.
- **Day card:** a picture with a caption plate across its bottom: cream, ruled twice, a tracked title and an italic line. The whole card is the link.
- **Locations band:** a darkened street picture, a tracked sentence and an arrow link on the left, location names in large serif on the right, grouped under town eyebrows.
- **Menu:** sticky tab bar with tracked tabs (underlined when selected) and dietary chips; each panel has a title, an italic note, and courses in two columns. A course is an eyebrow, an italic line and dishes; a signature dish is centered inside a diamond chain.
- **Location card:** framed picture, a tag, the name in serif, the address in italics, hours, and two buttons. The location page has a wide frame, the name in huge tracked capitals, a sand sub-navigation with diamond separators, a two-column story with a drop cap and a column rule, hours with dotted leaders, and a map.
- **Forms:** cream cards with a double border; labels in tracked capitals above square 50px fields; time slots are square chips; errors float under the field in red capitals; the success panel replaces the form and repeats what was booked.
- **Feast card and date plate:** ruled twice inside, prices in large serif, red diamond bullets.
- **Article:** centered head with a tag, H1, italic dek and a tracked byline; justified prose with a drop cap, uppercase tracked H2s, an italic pull quote, framed figures with captions, and a recipe card with a double border.
- **Footer:** ink, a pinstripe on top, the wordmark and one line, three link columns under tracked eyebrows, the legal line.

## Do and don't

- Do frame every picture and caption it. Don't show a bare picture, a rounded picture or a picture without a caption, except the day cards and the darkened pictures behind ink bands.
- Do track headings out. Don't set headings bold, condensed or tight.
- Do keep the color to ink, cream, teal dish names and red chains. Don't paint sections in brand color or add gradients.
- Do stagger pictures and text. Don't line every block up into an even grid.
- Do use the diamonds, the chain and the flourish sparingly: one ornament per section. Don't invent new ornaments or use emoji.
- Don't use pill buttons, drop shadows, glass, icon fonts or stock photos of people toasting.

## Voice

Warm, specific and a little wry, like a host who knows the history of the room. Describe food by what it is and how it is made ("charred over coals", "cut into fingers for dipping"), give real times ("from half past seven"), and tell small true stories. Short sentences, no exclamation marks, no hype ("authentic", "world-class", "elevated", "experience"), no lorem ipsum.
