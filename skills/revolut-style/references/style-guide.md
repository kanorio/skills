# Style guide: Revolut style

The look in one sentence: full-bleed photographs with a huge white headline and a glass phone frame floating over them, alternating with pure black, white and pale grey bands, each carrying one centred idea, a pill button and a row of pill tabs that swap the picture, the card or the phone above them.

## Tokens

Every page color is a custom property on `:root` in `assets/template.html`, written as `light-dark(<light>, <dark>)`. The theme is the `color-scheme`: `:root` follows the system, `[data-theme="light"]` and `[data-theme="dark"]` pin it, and photo scenes (`.scene`) and ink bands (`.dark`) force dark inside themselves, so their pills and tabs turn white automatically. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | white | near-black | the page, white bands, inputs |
| `--surface` / `--surface-2` | very pale grey / pale grey | dark grey / lighter dark grey | cards, plan cards, tiles, the footer / switch tracks, bars, quiet fills |
| `--mist` | pale grey | dark grey | the grey band, one per page at most |
| `--text` / `--text-muted` | near-black / grey | near-white / light grey | headlines, body and solid pills / meta lines, captions, the trust line |
| `--border` | hairline grey | dark hairline | rules between rows, input borders, outline chips |
| `--accent` / `--accent-text` | electric blue / white | light blue / deep blue | switches that are on, progress bars, the "Most chosen" badge, ticks, focus rings, success marks. Never a background for a band. |
| `--ink` | black | black | the ink band and behind photographs; identical in both themes |
| `--error` | red | light red | form errors |

The palette is monochrome on purpose: black, white, two greys and photography. Color comes from the pictures and from the member card. The accent is a signal (on, chosen, progress), used in small amounts.

## Typography

- **Host Grotesk** (variable, 300 to 800) for everything. A neutral grotesque with open apertures and tight default spacing; there is no second family.
- Headlines are big, medium weight and tightly spaced: display (`.display`) 56 to 128px at **weight 500**, letter-spacing -0.045em, line-height 0.95; H1 44 to 88px; H2 36 to 64px at 500, -0.035em. Size carries the hierarchy. A display line is two to five words.
- H3 22px at 600. Large figures (`.fig`, `.price`, `.stats strong`, `.scr-fig`) are 500 to 600 with negative tracking, like the headlines.
- Body 17px at 400, line-height 1.5. Leads 18 to 21px in the text color, at most 31em wide, never more than three lines under a display headline.
- Pills and tabs 15 to 17px at 500. Sentence case everywhere; no uppercase labels, no eyebrows over headlines.

## Spacing, layout and radius

- Content sits in a 1200px page (`.wrap`) with 16 to 48px gutters. Bands are full bleed and generous: 80 to 160px above and below (`--sec`).
- One idea per band. A band is either centred (headline, lead, pill, then a mockup and its tabs) or split (copy on one side, a phone or a card on the other). Alternate the surfaces: photo, white, ink, photo, grey, white, photo.
- The home hero is a full-viewport photograph (760 to 960px tall on desktop). The display headline spans the top; the lead and a dark pill sit low on the left; the glass frame stands in the middle column and runs off the bottom edge.
- Radius: pills, tabs, chips and switches fully round; inputs 14px; cards and tiles 24px; photos 28px; the glass frame and form cards 40px; the phone 50px outside and 40px inside; the member card 26px.
- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 160px.

## Surfaces and depth

- Flat. Cards on white are pale grey with no border and no shadow; on grey bands, phones and cards carry the only shadows.
- Mockups float: the member card and the phone get `--shadow-pop`, a long soft shadow. Nothing else does.
- The glass frame is a 2px white outline at 62 percent opacity over a faint dark tint and a 6px backdrop blur. It never gets a shadow.
- Photographs sit under a gradient (`.scene::before`): darker at the top for the header and headline, clear in the middle, darker at the bottom for tabs.
- The header is transparent with white text over photo and ink heroes (`[data-over]` views), then turns into the page color with a hairline once the page scrolls.

## Signature elements

Keep at least four of these on the home page.

1. **The photo scene** (`.scene` with `.bgimg`). A full-bleed photograph with the headline in white straight on it. No rounded corners, no inset, no card around it.
2. **The glass frame** (`.frame`). A tall rounded outline the size of a phone screen, laid over the photograph, showing one label, one big figure (`.fig`) and one white pill (`.chip-w`), with round action buttons (`.acts`) or a white strip of two assurances (`.strip`) at the bottom. It says what the product does in a glance: a balance of visits, a time and places left, a ticket count.
3. **Pill tabs that swap the scene** (`.tabs[data-tabs]`, `.tab[aria-pressed]`). White filled for the chosen one, outlined for the others, under the thing they change. On the home page they swap the background photograph and the numbers in the frame together, or the card for the phone.
4. **Ink bands with one huge line** (`.band-ink.dark`). Pure black, a display headline centred, one lead, one white pill, then a mockup.
5. **Card and phone mockups** (`.pass`, `.fan`, `.phone`). A member card with a gradient, wave lines, the brand, a tier pill, a name and a tap symbol; a fan of three cards in different finishes; a phone with a status time, an island and a real screen of the product (rows, a big figure, switches, one pill at the bottom).
6. **The trust band** (`.stats`). A muted one-line statement over four large figures with one short line each, on white.
7. **Pills.** Solid in the text color on light bands (black), solid white on photos and ink, outline in the current color for the second action; a dark pill (`.btn-ink`) on a bright photograph.

## Components

- **Header** (`.site-header`): sticky, 72px (64px on phones): the wordmark as live text at 650, five links, then the theme toggle, a "Help" text link and one solid pill. Below 1080px the links move into `#menu`, which opens below the bar in the flow; below 560px the pill moves into the menu too.
- **Glass frame** (`.frame`): `.lab`, `.fig`, `.chip-w`, optional `.acts` (the first action is white), optional `.strip`. Inside a scene with tabs, wrap the contents in `.stack` and give each state a `.body[data-pane]`.
- **Pill tabs** (`.tabs`, `.tab`, `.tab-sm`): `data-tabs="<id>"` on the group and `data-show="<value>"` on each tab; every element with `data-pane="<value>"` inside `#<id>` gets `.is-on` when chosen. Panes in a `.stack` cross-fade; `.bgimg` panes fade. The same buttons with `data-chip` filter lists.
- **Member card** (`.pass`, `data-tone="tide|coral|night"`): gradient from `--a` to `--b` with a `--c` glow in the top corner and the `#waves` symbol. Add tones by setting the three variables.
- **Phone** (`.phone` > `.screen`): `.time`, `.scr-lab`, `.scr-fig`, `.rows` (a `.dot` icon, two lines, an `.end` value), `.switch[role=switch]`, and one `.scr-btn` pinned to the bottom. The screen follows the page theme.
- **Tiles** (`.tiles`, `.tile`, `.tile-ui`): three grey cards, each with a small piece of product UI on the page color (time slots, faces with a guest pill, a bar chart), an H3 and one sentence.
- **Plans** (`.plans`, `.plan`, `.plan.pick`): three cards; the chosen one is inverted (black in light, white in dark). Prices that change with the billing tabs are `.stack-inline` with a `data-pane` per period.
- **Comparison** (`.compare`): a plain table with a caption, hairline rows and accent ticks.
- **Session row** (`.session`): a date tile, title and meta with icons, a places-left bar (`.left .bar i` with `--w`), and a solid pill that fills the booking form.
- **Journal card** (`.post-card`): a 28px-rounded photograph, a muted topic, an H3 and the reading time.
- **Forms** (`.form-card`): labels above 52px inputs with 14px corners, radio pills (`.opt`), a checkbox line, a stepper, one solid pill to send, errors floating under each field in reserved space, and a centred success state with an accent tick.
- **Footer** (`.site-footer`): pale grey, the wordmark and one sentence, three link columns, and a fine-print block with the legal line.

## Do and don't

- Do let one photograph fill the screen and put the headline straight on it. Don't box photographs in cards on the home page.
- Do keep headlines at weight 500 and very large. Don't bold them to 700 or set them in uppercase.
- Do show the product as numbers in a frame, a card or a phone screen. Don't use stock icons in circles as the main visual.
- Do keep the bands black, white, grey and photographic. Don't paint a band in the accent color or use gradients behind text.
- Do use pill tabs to change something visible. Don't use them as decoration or navigation.
- Do keep every figure in the frames and mockups real or clearly a sample the owner will replace.
- Don't use logos of banks, payment networks, app stores or card schemes, and don't draw card numbers, chips or expiry dates on the member card.

## Voice

Confident, short and plain. Headlines are two to five words that name the benefit ("One pass. Every door.", "Pause it when life gets busy"). Leads are one or two sentences in the second person with one concrete detail. Fine print is honest and small, but present: prices include tax, what changes, what is not included. No exclamation marks, no superlatives, no promises about money, health or results.
