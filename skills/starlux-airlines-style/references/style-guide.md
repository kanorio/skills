# Style guide

The look in one sentence: a deep night-teal page, thin geometric type set large, champagne for the one thing to press, a plum band where the visitor names where they are going, an espresso floor of circled shortcuts, and cinematic night photographs that cross-fade slowly behind the words, so the site feels like a quiet cabin after the lights are dimmed.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Night teal (default) | Cream | Use |
|---|---|---|---|
| `--bg` | deep night teal | warm cream | the page, fields, tier cards |
| `--surface` | a lighter teal | blush | every second band, the crumb bar, the article aside |
| `--surface-2` | a third teal | deeper blush | table heads, the pressed billing segment |
| `--header` | teal at 92% with blur | cream at 94% with blur | the sticky header |
| `--text` / `--text-muted` | warm white / teal grey | teal ink / slate | headings and body / ledes, meta, captions |
| `--border` | teal hairline | sand hairline | rows, tabs, fields, tier cards |
| `--accent` / `--accent-text` | champagne / teal ink | bronze / cream | the one solid button per screen, the pressed tab, a chosen pace |
| `--accent-ink` | champagne | bronze | champagne as text or a line: labels, prices, the current crumb, the hairline under card titles |
| `--pill` / `--pill-text` | taupe / cream | bronze / cream | the quiet pill: secondary actions on the page |
| `--note` / `--note-text` | cream / teal ink | white / teal ink | the note card that overlaps a photograph |
| `--plum` | translucent plum | the same | the composer band over the hero, in both themes |
| `--espresso` | warm espresso | the same | the shortcut strip and the footer, in both themes |
| `--gold` | champagne | the same | anything on a photograph: links, the page-hero label, the slideshow controls |
| `--error`, `--focus`, `--photo` | | | field errors; focus rings; behind pictures while they load |

The template is night teal by default and does not follow the system setting: cream appears only after the toggle and is remembered. Both themes are complete. Photographs, the plum composer, the espresso strip and the footer look the same in both themes; only the page between them changes.

## Typography

- One family: **Urbanist**, an open geometric sans with a weight axis from 100 to 900.
- Display and headings are thin: the hero line at weight 200, page titles and section titles at 300, never bold. Line-height 1.04 to 1.15, a hair of negative tracking.
- The composer words ("From", "To") are 200 weight at 32 to 48px: the biggest words in the interface, set beside small pickers.
- Labels (`.label`, pills, tabs, counts, statuses, table heads, field labels) are 12px, 500, uppercase, letter-spacing 0.28em. Field labels and table heads use 0.12em so they stay readable.
- The wide line (`.wide`) is 300 weight uppercase at 18 to 32px with 0.42em tracking: one per page at most, as an overline for a section of large picture cards.
- Body copy is 17px, 400, line-height 1.7. Ledes are 18 to 21px at weight 300 in the muted colour.
- The wordmark is live text in uppercase with 0.36em tracking, after a small champagne mark.

## Spacing, layout and radius

- Page width 1320px with a fluid gutter (16 to 60px). Sections take 64 to 120px of vertical padding (`--sec`).
- Bands alternate: page colour, then `--surface`, then page colour. Rows of pictures and text alternate the same way (`.rows-alt`), and the text in every second row aligns right, against its picture.
- Section titles are centred when the section is a rail or a single statement, left-aligned when cards follow.
- Pictures carry a 6px radius (`--r-card`); tier cards and panels 12px; buttons, tabs, the billing switch and pace choices are full pills. Full-bleed photographs (hero, page heroes, the overlap band) have no radius.

## Surfaces and depth

- No shadows. Depth comes from light inside the photographs, from the alternating teal bands, from the translucent header and composer (with a blur behind them), and from the cream note card laid over a picture.
- The only gradients are the scrims on photographs and the champagne hairline.

## Signature elements

Home uses all of them; every other view keeps at least four.

1. **The slow slideshow.** A full-bleed night photograph under a thin display line, bottom left, with one sentence and a champagne link; bottom right, the place name above a small black control box (pause or play, "1 / 4", next). Slides cross-fade over a second and drift from 107% to 100% scale. Paused under reduced motion, on hover and on focus.
2. **The composer band.** A translucent plum band across the top of the hero: "From" and "To" in huge thin type, each with a small picker on a hairline, a champagne swap arrow between them, a small dark "When" box, and the one champagne button. Pressing it opens the enquiry, prefilled.
3. **The espresso floor.** Under the hero, a warm espresso strip of three shortcuts, each a circled line icon and a few words, divided by hairlines. The footer is the same espresso.
4. **The champagne hairline.** Under every card title, a 2px line that fades in from the left into champagne (`hr.rule`).
5. **Crumb bar and champagne tabs.** Inner views open with a photograph and a centred title over a quiet pill, then a teal crumb bar with small triangles and the current page in champagne. Filters and tabs are pills; the pressed one fills with champagne.
6. **The cream note.** A cream card with a label, a heading, one sentence and an outline pill, overlapping the lower edge of a photograph.

## Components

- **Notice bar:** one line above the header with a glowing champagne dot, the notice as a link, a small pager (previous, "1 / 2", next) and "All notes" after a hairline.
- **Header:** two rows. The mark and wordmark on the left with two utility links (the second in champagne) and the theme toggle on the right; under them, up to six links spread evenly across the page (`justify-content: space-around`), the current one in champagne with a hairline under it. The header is sticky by its second row only. Links never wrap: whenever they do not fit (`fitNav()` adds `.compact`), they move into `#menu`, a full-screen `<dialog>` with large thin links.
- **Rail:** square pictures with the place name centred under each, five across on desktop, scrolled sideways by champagne chevrons outside the page edge; about 1.5 across on phones.
- **Card:** a 4:3 picture, a muted meta line, an H3, the hairline, one muted sentence, and a price line with the amount in champagne.
- **Note card (journal):** a 16:9 picture, a small document mark beside the title, the date under it.
- **Duo:** two large 3:2 pictures under a wide line, each with an H1-sized name and one muted line.
- **Page hero:** a photograph 400 to 620px tall, a scrim, and centred: label, H1, one sentence, a quiet pill.
- **Facts table:** a table with a teal head row of champagne labels and hairline rows; it scrolls sideways inside its wrapper on phones.
- **Departures:** a hairline list: the day as a large thin numeral with the month and year in tracked capitals under it, the title and one line, a status pill (champagne outline when places are open) and a quiet pill action.
- **Tier cards:** three bordered panels; the recommended one has a champagne border and the champagne button. A thin amount, the hairline, ticks, and the button at the bottom. A billing switch swaps yearly and monthly amounts.
- **Forms:** fields on the page colour with a 6px radius, champagne tracked labels above, errors floating under the field (space is reserved, so nothing moves), pace as pill radios, a guests stepper, and a success panel with a circled tick that repeats the choices. The enquiry form repeats the composer: "From" and "To" as huge thin labels with the swap arrow between them.
- **Footer:** espresso, four columns each headed by a name over a hairline, three round icon links, then the wordmark, the legal line and a round bronze "back to top" button.

## Do and don't

- Do keep the page night teal and the type thin. Don't set headings bold or in a serif.
- Do keep champagne for one solid button per screen, the pressed tab, prices and the current crumb. Don't fill bands, icons or headings with it.
- Do put words on photographs only over a scrim, in warm white, with champagne for links.
- Do let the slideshow move slowly and stop it whenever the visitor is reading. Don't use fast transitions, bouncing or parallax.
- Do use pills for every action. Don't add square buttons or drop shadows.
- Don't use emoji, icon fonts, stock smiles at the camera, or bright midday pictures as the main mood.

## Voice

Calm, warm and exact, like a host speaking quietly in a dim room. Name the thing and the hour ("a boat of four suites", "the canals to yourselves after ten"), promise little and specifically, never shout. Headlines are three to eight words. No exclamation marks, no "unforgettable", "luxury", "world-class" or "once in a lifetime". Placeholders stay visibly placeholders ("Placeholder:", sample prices labelled as samples).
