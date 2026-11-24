# Style guide: WhatsApp style

The look in one sentence: a warm cream page, very large headlines in a regular-weight grotesque, a rounded photograph with chat bubbles floating over it, rows that pair a short headline with a phone showing the conversation, bright green pill buttons, one dark ink band and a pale mint panel of white cards that curves into a dark footer.

## Tokens

Every color is a custom property on `:root` in `assets/template.html`, written as `light-dark(<light>, <dark>)`. The theme is the `color-scheme`: `:root` follows the system, `[data-theme="light"]` and `[data-theme="dark"]` pin it, and `.on-ink` forces dark inside the ink band and the footer. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | warm cream | blue-black | the page and the header |
| `--surface` / `--surface-2` | white / darker cream | two steps up from the page | cards, incoming bubbles, form cards / segmented control, team quotes, the date tile track |
| `--text` / `--text-muted` | blue-black ink / grey ink | warm white / blue-grey | headlines and body / meta lines, timestamps, labels |
| `--border` | sand | dark blue-grey | inputs, chips, list rules |
| `--line` | ink | warm white | outline pills and round arrow buttons: 1.5px, full strength |
| `--green` / `--on-green` | bright green / ink | the same | solid pills, the "Booked" and "Join" chips, the send button, the green second line in the ink band, stat numbers |
| `--green-ink` | deep green | light green | the wordmark, icons in lists and tags, checked radio borders |
| `--out` | pale green | deep teal-green | outgoing bubbles, selected chips, date tiles, the picked plan |
| `--mint` | very pale mint | dark green | the card panel |
| `--wall` | darker cream with a dot grid | near-black with a dot grid | inside phones and behind the story thread |
| `--device` | near-white | dark grey | the phone frame |
| `--ink` | ink | deeper ink | the band and the footer |
| `--tick` | blue | light blue | read ticks in bubbles |
| `--c1` to `--c4` | purple, coral, teal, amber | lighter versions | sender names in group bubbles (`--who`) |
| `--error` / `--focus` | red / deep green | lighter versions | form errors / focus rings |

Green is an action color, not a background: it fills buttons and small chips and colors one line of type in the ink band. Large areas are cream, white, mint or ink. White text never sits on the bright green; ink does.

## Typography

- **Albert Sans** (variable, 100 to 900) for everything. A geometric grotesque with round bowls; there is no second family.
- Headlines are big and light in weight: display (`.display`) 48 to 88px, H1 42 to 76px, H2 34 to 58px, all at **weight 400**, line-height 1.0 to 1.06, letter-spacing -0.02em. Size carries the hierarchy, not weight. The statement in the voices section is 450.
- H3 22px at 500. Labels (`.label`) 14px at 500 in the muted color: small, sentence case, never uppercase.
- Body 18px at 400, line-height 1.5. Leads 18 to 21px in the text color (not muted), at most 34em wide.
- Buttons 17px at 500. Bubbles 14 to 18px; sender names 14px at 600 in a sender color; timestamps 12px muted.
- Copy is sentence case, plain and conversational. No uppercase anywhere.

## Spacing, layout and radius

- Content sits in a 1120px page (`.wrap`) with 16 to 40px gutters; the header runs to 1320px. Sections breathe: 72 to 128px above and below (`--sec`).
- The hero is a photograph inset 16 to 32px from the edges with 32px corners (`--r-media`), 500 to 660px tall. Copy sits low on the left; bubbles float on the right.
- Feature rows (`.row`) are two equal columns: copy at most 500px wide on one side, a phone or a photo centred on the other, alternating with `.row.flip`. On phones copy comes first, then the media.
- The mint panel (`.panel`) runs full width with 48px bottom corners (`--r-panel`). The footer slides 48px under the last section, so the corners show ink behind them.
- Radius: pills and chips fully round; cards 20px; plans and form cards 28px; photos and the hero 32px; bubbles 12px with one square corner where the tail is; phones 42px outside and 33px inside; avatars are circles.
- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 72, 128px.

## Surfaces and depth

- Mostly flat. Cards on cream are white with no border and no shadow. Form cards get `--shadow-card`.
- Anything that floats gets `--shadow-pop`: hero bubbles, chip cards on photos, phones.
- Bubbles in a thread get only a 1px drop, as in a real chat.
- The header is cream with no shadow; a thin ink hairline appears once the page scrolls.

## Signature elements

Keep at least five of these on the home page, and at least one bubble on every page.

1. **Chat bubbles** (`.bubble`, `.bubble.out`, `.tail`). Incoming bubbles are white on the left, outgoing ones pale green on the right; the first of a run has a tail. Sender name on top in a sender color, the timestamp and ticks float bottom-right. Reactions (`.reacts`) are small SVG icons in a white pill hanging off the bottom edge. Date chips (`.day`) separate days.
2. **The photo hero with floating bubbles.** A rounded photograph, the display headline in white low on the left, one white pill, and on the right a chip card (`.chip-card`: icon, title, avatar stack, green chip) plus an outgoing and an incoming bubble. A one-line footnote under the photo, right-aligned.
3. **Voices around one statement** (`.voices`). A large centred sentence surrounded by round avatars, some with a short bubble beside them ("Thank you", "Merci beaucoup"), drifting slowly.
4. **Phone rows.** A headline, a lead and a "more" link with a green underline on one side; a phone (`.phone`) showing the real exchange on the other, or a rounded photo with a chip card overlapping its corner.
5. **The ink band.** One dark band per page with a two-line H2 whose second line is green (`<em>` inside `.band .row-copy`).
6. **The mint panel** with a card track that runs off the right edge, round arrow buttons, and white cards with an outline "Read more" pill.
7. **Pills.** Green solid with a thin ink border for the main action, ink outline for the second, white solid on photographs. Chevron or send icons sit after the label.

## Components

- **Header** (`.site-header`): sticky, 80px (68px on phones): the green wordmark on the left, five links centred with a green underline for the current page, then the theme toggle, an outline "Help" pill and a green "Get a quote" pill. Below 1100px the links and the outline pill move into the menu (`#menu`), which opens below the bar in the flow; below 560px the green pill becomes a round icon button.
- **Bubble** (`.bubble`): add `.out` for outgoing, `.tail` for the first in a run, `.who` with `--who: var(--c1..c4)` for a named sender, `.meta` for the time and `.ticks` (add `.sent` for grey, not yet read). `.pic` puts a photo inside; `.file` puts a document line inside.
- **Chip card** (`.chip-card`): an icon in a circle, a bold title over an avatar stack (`.avs`), and a green chip (`.go`) such as "Booked" or "Join". Decorative: it summarises something the copy already says.
- **Avatar** (`svg.av` with a person class `.p1`…`.p8` and `<use href="#av-a|b|c">`): drawn heads with three hairstyles; the class sets background, shirt, skin and hair. Replace with circular photographs when the user has them.
- **Phone** (`.phone` > `.screen` > `.screen-top`, `.thread`, `.compose`): the top bar with an avatar and a status line, the thread on the dotted wall, a compose bar with a green send button. `.visit` is a booking card inside a thread.
- **Plans** (`.plans`, `.plan`, `.plan.pick`): three white cards, the picked one pale green, a large price, ticked lines and a pill. The segmented control (`.seg`) swaps `data-day` and `data-eve` prices.
- **Price list** (`.prices`): rows with a name, one muted line, the price and an outline "Ask" pill, under chips (`.chip`) and a pill search (`.search`).
- **Event** (`.event`): a pale green date tile, a tag with an icon, the title, time and place, a thin places-left bar and a "Save a place" pill that fills the form.
- **Person** (`.person`): an 88px avatar, the name, two fact lines with icons, and their own words in a bubble.
- **FAQ** (`.qa`): the question is an incoming bubble in a `<summary>` with a chevron; the answer is an outgoing bubble with ticks.
- **Story** (`.story`): the company history as a thread on the dotted wall, with date chips between moments.
- **Forms** (`.form-card`): labels above 52px inputs with 14px corners on the page color, radio pills (`.opt`) for choices, a checkbox line, a green pill to send, errors floating under each field in reserved space, and a success state that shows the message as a sent bubble.
- **Footer** (`.site-footer`): ink, the wordmark in green, a monthly-notes email field with a green pill, three columns of large links under small muted labels, and a base line with the address, phone and "Back to top".

## Do and don't

- Do keep headlines at weight 400 and let size do the work. Don't bold them.
- Do show the product of the business as a conversation: a quote, a booking, a thank-you. Don't fill bubbles with marketing slogans.
- Do keep the page cream and the cards white. Don't paint large areas green; green belongs to buttons, chips and one line in the ink band.
- Do left-align copy in rows and centre only the voices statement and the 404. Don't centre leads under left-aligned headlines.
- Do use drawn or real avatars of the user's own people. Don't use stock faces, celebrities or logos of messaging apps.
- Don't use emoji in bubbles or reactions; use the SVG icons in the template.

## Voice

Warm, short and personal, as if a neighbour were texting back. Headlines are plain statements of what the visitor gets ("Send a photo, get a fixed price", "Never miss a visit"). Leads are one or two sentences in the second person. Bubbles are real lines someone would send, with times on them. No exclamation marks in headlines, no superlatives, no jargon.
