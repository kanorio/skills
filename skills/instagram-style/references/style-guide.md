# Style guide

The look in one sentence: a white page split by hairlines, a medium-weight headline with one phrase in a warm sunset gradient, tall story cards fanned out with stickers, photographs in a tight three-column grid, round faces in gradient rings, and one blue pill for the thing to do next.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | white | near-black with a cool tint | the page; the photographs carry the colour |
| `--surface` / `--surface-hover` | pale cool grey / a step darker | dark grey / a step lighter | grey buttons, filter chips, initials avatars |
| `--surface-2` | almost white | a step above the page | quiet bands |
| `--raised` | white | a step above the page | fields, the post panel, form cards |
| `--text` / `--text-muted` | ink / cool grey | soft white / light grey | headings and body / leads, meta, dates |
| `--border`, `--field` | pale grey, mid grey | dark grey, mid grey | hairlines (the hero divider, tabs, the post panel); 1px field outlines |
| `--accent` / `--accent-text` / `--accent-hover` | action blue / white / deeper blue | the same blue / white / lighter blue | the one filled button per screen, the outlined pill's line |
| `--link` | blue | light blue | text links ("See all work", "Write") |
| `--g1` to `--g4`, `--grad` | sunflower, tangerine, coral, magenta | the same | rings around avatars and highlights, the mark, the step numbers, the success tick, the dot under the current nav link |
| `--grad-text` | darker stops of the same gradient | lighter stops | one phrase per headline, clipped to the text |
| `--heart` | red | lighter red | liked hearts, the heart sticker, the bag count |
| `--star`, `--clock` | green, violet | the same | the star and time stickers in the hero fan only |
| `--scrim` | black at 40% | black at 50% | over a grid tile while you point at it |
| `--paper` | warm white | a little greyer | the mat around prints |
| `--error`, `--focus`, `--photo` | red, blue, pale grey | soft red, light blue, dark grey | field errors; the focus ring; behind photographs while they load |

Colour comes from three places only: the photographs, the gradient (rings and one headline phrase), and the blue action button. Everything else is white, grey and ink. Never fill a background, a card or a button with the gradient; it is a line, a ring or a phrase.

## Typography

- One family: **Albert Sans**, an open geometric sans, variable from 100 to 900. No second family.
- Display (`.display`) and H1 (`.h1`) are 500, not bold, with tight letter-spacing (-0.035em and -0.03em) and line-height 1.06 to 1.1. The softness of a medium headline is part of the look; do not set headlines at 700 or 800.
- One phrase per headline is wrapped in `<span class="grad">`: the part that carries the feeling ("the people you love.", "any camera."). Put it at the end of the headline, keep it to two to five words, and never use it twice on a screen.
- H2 600 at -0.02em, H3 600. Sentence case everywhere.
- Body 16px at 400, line-height 1.5. Leads (`.lead`) 17 to 20px in the muted colour.
- Small tracked capitals (`.label`: 12px, 600, letter-spacing 0.08em, uppercase) only for kickers above page titles, dates under posts and the profile tabs.
- Names and handles are 600 at body size; meta beside them is muted 400.
- The wordmark is live text: the lowercase brand name at 600 and -0.045em, beside the round mark.

## Spacing, layout and radius

- Reading pages sit in a narrow 975px column (`.wrap`): the profile, the grid, posts, prints and forms. The hero and the header run wider.
- The home hero is a split screen: the headline and the story fan on the left, a vertical hairline, and a form panel on the right (40% of the width, at most 440px of content). Below 900px it stacks, with a horizontal hairline instead.
- The grid has 4px gaps (2px on phones). Nothing else is that tight; cards and sections breathe at 16 to 36px.
- Radius: grid tiles are square-cornered (`--r-media: 0`); story cards and cards are 20px; fields 14px; panels and bands 24px; buttons, chips' cousins the option pills, and avatars are fully round. Filter chips are 10px.
- Sections are 48 to 96px apart (`--sec`).

## Surfaces and depth

- The page is flat white. Hairlines (`--border`) do the separating: the hero divider, the header's bottom edge, the post panel, tabs, list rows.
- Only floating things have shadows: story cards in the fan and on Walks, stickers, the paper mat (`--shadow-card`), and the toast (`--shadow-overlay`).
- Photographs never get borders or rounded corners in the grid. Rounded photographs belong to story cards, post cards and prints.

## Signature elements

These make the style recognizable. Home uses all of them; every other view keeps at least three.

1. **The split hero.** Headline with a gradient phrase and a fan of three story cards on one side, a hairline, a form panel on the other: title, tall fields with the label inside, a full-width blue pill, a quiet text link, an "or" divider, an outlined pill as the second way in.
2. **Story cards.** 9:16, 20px corners, thin progress bars across the top, a ringed avatar and a time, a dark fade at the bottom with the title and one pill. Three of them fan out at -9, -1.5 and 8 degrees.
3. **Stickers.** A red heart bubble with a tail, a green star pill, a violet time pill, a large ringed avatar overlapping the fan. Only in the hero fan, never elsewhere.
4. **Gradient rings.** Every face and every highlight sits in a 2 to 4px ring of `--grad` with a gap the colour of the page. A ring turns grey (`.seen`) once its stories have been watched.
5. **Highlights.** A centred row of ringed circles with a short label; each one opens its series in the story viewer.
6. **The three-column grid.** 4:5 photographs, 4px apart, square corners, a scrim with the title on hover, a small frame icon on photographs that are sold as prints.
7. **The profile header.** A big ringed avatar, the handle beside a blue and a grey button, counts in a row (from the data), the name in bold and two lines of bio; tabs underneath with small tracked capitals and a line on top of the chosen one.
8. **The post.** The photograph beside a hairline panel: ringed avatar and handle on top, caption and facts in the middle, a row of outline icons (heart, comment, send, bookmark) at the bottom, the date in small capitals. Double-click the photograph to like it.
9. **One blue.** Book, Request, Add to bag, Subscribe. Never two blue buttons side by side.

## Components

- **Header:** a translucent white bar with a hairline: mark and wordmark, five text links centred (the current one in ink with a gradient dot under it), then the theme toggle, Saved, the bag with a red count, and a small blue "Book a session". It never wraps: below 860px, or whenever it does not fit (`fitNav()` adds `.compact`), the links, Saved and Book move into `#menu`, a popover that also works without JavaScript.
- **Hero:** `.hero` > `.hero-main` (`.display`, `.fan` with three `.story` and four `.sticker`) and `.hero-side` > `.panel` (the booking form and its success).
- **Story card:** `.story` > `img`, `.bars` (`i`, `i.on`, `i.run`), `.story-head` (`.ring.xs`, name, `time`), `.story-foot` (`h3`, `p`, one pill or `.reply`).
- **Highlights:** `.highlights` > `.hl[data-story]` > `.ring` > `.av` > `img`, then the label.
- **Grid tile:** `.tile` > `img` (alt is the title), `.tile-over` (title and series, hidden from assistive technology), optional `.tile-flag`.
- **Profile:** `.profile` > `.ring.xl`, `.pf-top` (handle as H1 and two buttons), `.pf-stats` (counts written by the script), `.pf-bio`; then `.highlights`, `.tabs` with `[role=tab]`, panels.
- **Chips:** `.chips[data-filter]` > `.chip[data-value]` with the count in `small`; the chosen one turns ink.
- **Post:** `.post` > `.post-media` (image, round previous and next buttons) and `.post-side` (`.post-head`, `.post-body` with H1, caption and `.facts`, `.post-actions`, `.post-date`, `.ask`). On phones the panel unfolds around the photograph: head above, actions and caption below.
- **Print card:** `.print` > `.mat` (the photograph on paper) and the title with "Series · from $38". The print page has size options (`.size`), a quantity stepper (`.qty`), Add to bag and Save, and `details.qa` rows.
- **Bag:** `.bag-list` rows with the mat thumbnail, size, stepper and Remove; `.summary` with totals and the invoice form.
- **Forms:** `.fl` wraps each field: the input, then its label (inside the field, it shrinks to the top when the field has a value or focus), then `.err`, which floats under the field and never moves the button. Choice pills (`.opt`) for radios, a plain checkbox row (`.check`), one blue submit, a success panel with the gradient tick that repeats what was entered.
- **Band:** `.band`, a 24px-rounded off-white panel with a hairline, a headline with a gradient phrase and one blue button.
- **Footer:** centred and quiet: the letter signup, one row of small muted links, the legal line.

## Do and don't

- Do keep the grid at three columns with square corners and tiny gaps, on every width. Don't round grid tiles or add captions under them.
- Do put the gradient only on rings, the mark, step numbers, the tick and one headline phrase. Don't fill buttons, backgrounds or cards with it.
- Do keep headlines at weight 500. Don't make them heavy.
- Do use one blue button per screen; a second action is grey or outlined.
- Do keep stickers in the hero fan. Don't scatter them over other pages.
- Don't invent follower counts, like counts or comments. Counts on the site come from the data (photographs, series, prints).
- Don't use emoji; the stickers and icons are inline SVG.

## Voice

Warm, plain and first person plural, like a note from the people behind the counter: "We turn the chair until the light falls across the cheek and stop there." Captions say what happened when the picture was made, in one or two sentences. Titles are short and concrete ("Quay lamps at nine"). No hype ("stunning", "iconic", "content"), no hashtags, no exclamation marks, no social-media slang.
