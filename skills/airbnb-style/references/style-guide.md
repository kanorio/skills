# Style guide

The look in one sentence: a white page where photographs do the talking, one warm coral reserved for the search orb and the main action, and a rounded search bar you can read as a sentence (where, when, who).

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Both themes are complete; light is the default and follows the system setting.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | white | warm near-black | the page |
| `--surface` | soft gray | a step lighter | gray bands (ideas, host band, footer), hover fills |
| `--surface-2` (`surface2`) | light gray | two steps lighter | the open search bar, date ranges, icon tiles |
| `--raised` | white | dark gray | popovers, the booking card, chips, fields |
| `--text` | near-black | off-white | headings and body |
| `--text-muted` (`textMuted`) | mid gray, 5.4:1 on white | light gray | second lines on cards, notes, labels |
| `--border` / `--border-strong` | hairline gray / darker gray | the same roles | dividers / field outlines and steppers |
| `--accent` / `--accent-text` | coral / white | the same coral / white | the search orb, saved hearts, the count badge |
| `--accent-grad` (`accentGradientStart`, `accentGradientEnd`) | coral to rose | the same | the primary booking button only |
| `--accent-ink` (`accentInk`) | coral | lighter coral | coral used as text: the logo, the earnings figure |
| `--ink` / `--ink-text` | near-black / white | off-white / near-black | secondary solid buttons, selected dates, toasts, pressed segments |
| `--error` / `--error-bg` | brick red / faint tint | light brick / dark tint | field errors |

Coral is rare on purpose. It appears on one element per screen that starts a booking or a search, on hearts that are saved, and in the logo. Every other action is ink, outlined or a text link. White text on the coral passes 4.7:1; keep that ratio if you change the hue.

## Typography

- One family: **Figtree**, variable weight, round and friendly. Body 400, emphasis 600, display 700.
- Display (marketing headlines such as the host page and help): 700, letter-spacing -0.025em, line-height 1.05. Use at most once per view.
- H1 (page and listing titles): 600, 26 to 32px, -0.01em. Listing titles are descriptive ("Pinecone A-frame by the river"), not slogans.
- H2 (section titles): 600, 22px. H3 (card titles, sub-sections): 600, 16px.
- Body 16px, line-height 1.5. Small text 14px; labels inside fields and the search bar 12px at 600.
- Card text is 15px and tight (line-height 1.35): a bold first line with the rating on the right, then muted lines, then the price with the number in 600.
- Sentence case everywhere. No all caps except the 10px labels in the booking box and the journal category tag.

## Layout, spacing and radius

- Full-width layout with generous side gutters (`--gutter`, 24 to 80px) up to 1760px. Listing detail, booking and text pages use a narrower 1120px column.
- Grids: 4 columns of cards at 1440, 3 under 1128, 2 under 950, 1 under 550. Gaps 40px vertical, 24px horizontal.
- Rails: a horizontal row of the same cards with scroll snap and two small round arrows at the top right of the row header.
- Spacing scale 4, 8, 12, 16, 24, 32, 48, 64, 80. Sections inside a listing are separated by a 1px divider and 32px of space.
- Radius: 999px for the search bar, chips and the map toggle; 12px for photos, cards and the booking card; 8px for buttons and fields; 24px for dialogs and panels; 32px for search panels.

## Surfaces and depth

- Most of the page is flat white. Depth is only for things that float: the search bar (soft pill shadow), the booking card and host card (card shadow), popovers and dialogs (overlay shadow).
- Photos never have borders or shadows; their rounded corners and the white around them are enough.
- Gray bands (`--surface`) mark the end of a page: the ideas section and the footer.

## Signature elements

These make the style recognizable. Keep the first three on every site; the home page shows all six.

1. **The segmented search bar.** A white pill with three or four segments (Where, Check in, Check out, Who), hairline separators, 12px labels over muted values, and a round coral orb. Opening a segment turns the bar gray and lifts that segment white; the orb grows to show "Search". Panels drop below it with 32px corners: a list of places, a two-month calendar, guest steppers. On scroll it folds into a compact pill in the header.
2. **Photo-first cards.** A rounded photo (20:19 for places, 4:5 for experiences) with a white pill badge top left, a heart top right, carousel dots and arrows on hover; under it a bold first line with the star rating on the right, two muted lines and the price.
3. **One coral.** The orb, the saved heart and the reserve button. Nothing else is coral except the logo.
4. **The photo mosaic and the sticky booking card.** One large photo and four small ones in a rounded block, a "Show all photos" chip, and a booking card that stays beside the details with a check-in, checkout and guests box, a gradient reserve button and a price breakdown.
5. **Category icons with an underline.** A row of line icons over small labels; the chosen one turns dark with a 2px underline.
6. **The big rating.** The score set very large between two leaf sprigs, followed by six category scores and reviews in two columns.

## Components

- **Header:** logo (coral mark and wordmark), centered tabs with icons (an underline marks the current one), then "Host with us", a round theme button, a heart linking to saved places with a coral count, and a menu pill with an avatar. On phones: the mark, a full-width "Where to?" pill and two round buttons.
- **Search bar:** see signature 1. On phones it becomes a rounded card with stacked segments and a full-width coral button; panels open inline.
- **Calendar:** month titles centered, round day buttons 44px, the chosen nights joined by a gray band and capped by ink circles, booked nights struck through, round arrows at the top corners.
- **Stepper:** label and note on the left, a round outlined minus and plus around the number.
- **Card:** see signature 2. The photo area opens the listing; the heart and arrows are separate buttons.
- **Rail header:** H2 with a chevron link, two 32px round outlined arrows on the right.
- **Filters dialog:** sections between dividers (type of place as a segmented control, price fields, bedroom pills, amenity chips with icons), "Clear all" as a text link and an ink "Show 8 stays" button that counts live.
- **Map:** a rounded panel with white price pins; hovering a card turns its pin ink. An ink "Show map" pill floats at the bottom of the list.
- **Booking card:** price per night, a bordered box with three cells, a gradient button, "You won't be charged yet", underlined line items and a total.
- **Fields:** 58px tall, 8px radius, the label set small inside the top of the box, a 2px dark outline on focus. Errors appear under the field in brick red with a small round icon, in reserved space so nothing moves.
- **Dialogs:** 24px corners, a centered title row with a round close button, a footer row for actions. On phones they slide up as sheets.
- **Toast:** an ink rounded box at the bottom left with an underlined link.

## Do and don't

- Do let photos fill the card edge to edge with 12px corners. Don't add frames, borders or shadows to photos.
- Do keep coral for one action per screen. Don't color headings, links or icons coral.
- Do use underlined text links for secondary actions ("Show more", "Clear all", "Edit"). Don't make every action a button.
- Do write prices with the number in 600 and the unit in 400 ("$186 night"). Don't hide fees: show the breakdown before the visitor commits.
- Don't use gradients anywhere except the primary booking button, and don't use emoji, icon fonts or more than one font family.

## Voice

Warm, plain and specific, like a good host's note on the kitchen table. Name the place and what is nearby, give times and distances, and say what happens next ("You won't be charged yet"). Short card lines, no slogans, no exclamation marks, no em dashes, no "unforgettable", "hidden gem" or "luxury escape", and no lorem ipsum.
