# Style guide

The look in one sentence: a black header with a wide search bar over near-black night pages, torn-paper bands of warm peach that cut through photographs and sections, chunky slab-serif headlines and night photographs of lit art on an empty desert floor.

It reads like the home of a community, not a venue: big plain headlines in title case, dates and ways to take part right up front, and a donate button that never leaves the header.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--bg` | near-black night | warm sand | page background |
| `--surface` / `--surface-2` | two lifted charcoals | paper white / deeper sand | cards, form cards, the dates band / soft buttons, image wells |
| `--text` / `--muted` | warm white / soft sand | dark umber / brown-grey | body copy / leads, metadata, captions |
| `--border` / `--border-strong` | charcoal hairline / mid grey | sand hairline / brown | dividers / date rows, chips, outline buttons |
| `--ember` | peach | burnt orange | links, kickers, focus ring, numerals in lists; the light value is darker so small text passes contrast |
| `--peach` / `--peach-hi` / `--on-peach` | warm peach / lighter peach / umber | the same | torn bands, primary buttons, countdown digits, the donate outline |
| `--fiber` | pale cream | the same | the thin paper fibre showing along a torn edge |
| `--night`, `--night-2`, `--night-text`, `--night-muted`, `--night-line` | black, charcoal and warm whites | the same | header, menu sheet, footer and the countdown panel, identical in both themes |
| `--field`, `--field-line` | input fill and border | the same roles in light | every input, select and textarea |
| `--crack` | white at 6 percent | umber at 10 percent | the dry-lakebed crack pattern |
| `--c-light`, `--c-fire`, `--c-sound`, `--c-hands` | four light colors | deeper versions | the dot before a kind of work or event (installation, fire, performance, workshop) |
| `--err`, `--ok` | red and green | deeper versions | form errors, success |

Peach is the only loud color. It fills the torn bands, the primary buttons and the countdown digits; everywhere else the page is black, charcoal and warm white (or sand in light). The four kind colors appear only as 10px dots.

## Typography

- Two families. **Bitter** (slab serif, 700 and 800) sets every headline, the brand name, numerals in the date blocks, the countdown, tab labels and quote marks. **Work Sans** (400 to 600) sets everything else: body, navigation, buttons, labels and forms.
- Display: 800 weight, line-height 0.98, letter-spacing -0.012em, once on the home hero. H1 and H2: 800 weight, line-height 1.06. H3: 700 weight, 1.5rem.
- Headlines are short and in title case without a period: "Find Your Place in It", "Upcoming Dates", "Keep the Fire Fund Lit". Card titles follow the same rule; everything else is sentence case.
- Body: 17px, line-height 1.6. Leads are 18 to 21px and muted.
- Kickers: Work Sans 600, 13px, uppercase, 0.08em tracking, in `--ember` (in `--on-peach` on a band). The only uppercase besides the brand's small line.
- Numerals are big and slab: date blocks, countdown digits, numbered principles and grant steps.

## Spacing, layout and radius

- Page width 1200px with a fluid gutter (16 to 40px); long text sits in a 680px column.
- Sections are generous: 56 to 112px of vertical padding. Change background (night, peach band, crack pattern, sand) to separate sections; avoid boxed dividers.
- Headings sit left. Only the countdown on phones, buttons under the way-in cards and the 404 are centered.
- Radius: 6px for buttons, inputs and photos; 10px for cards, the countdown, the slider and date rows; pills only for chips, the frequency switch and the date pill on the hero.
- Ruled lists (a 1.5px text-colored rule on top, hairlines between rows) carry facts: getting there, volunteer teams, contact details, FAQ, search results.

## Surfaces and depth

- Night is the default surface. Light mode turns pages to warm sand, but the header, footer, menu sheet and countdown stay night.
- Photos are the only imagery and they are always at night or at blue hour. They sit full-bleed in the hero and banners, or in 6px-rounded frames in cards.
- The torn edge is the only decoration. No grain, no glass, no gradients except the dark scrim that keeps text readable on a photo.
- Shadows are rare: the dates feature card, the countdown panel and form cards.

## Signature elements

These make the style recognizable. Home uses all six; every other view keeps at least three.

1. **Black header with a big search.** Brand mark and name on the left, a wide search field with an attached "Search" button in the middle, an outlined peach "Donate" button and the theme toggle on the right; a second row spreads six links across the full width. It is black in both themes. Below 900px the links and search move into the menu sheet.
2. **Torn-paper bands.** Peach bands with a ripped top and bottom edge (`#tear`, flipped and mirrored for variety) cut across photos and sections. A pale fibre line runs along each tear. On home the band's photo has a torn right edge and rises into the hero above it. Photo banners end in a tear of the page color; the footer begins with a black tear.
3. **Night photographs of lit art.** One photographic language: long exposures on a dry lakebed, a cold blue-violet sky full of stars, warm amber and ember light from the art, small silhouettes for scale. See `images.md`.
4. **Chunky slab headlines.** Bitter at 800 in title case, big and tight, white on night, umber on peach and sand.
5. **Dated events list.** Rows with a slab date block (month over a big day), three icon lines (what, when, where) and a soft action button, on the dry-lakebed crack pattern, next to a feature card.
6. **Countdown panel.** A night panel with a peach slab headline and four peach slab numbers (days, hours, minutes, seconds) counting to the next gathering, with a static sentence when JavaScript is off.

Also characteristic: the outlined Donate button, cards with a photo, slab title, one line and a centered peach button, and a story slider with a caption bar and dots.

## Components

- **Header:** see signature 1. Nav links are Work Sans 500 in warm white; hover and the current page turn peach, and the current page gets a 2px peach underline.
- **Hero:** a full-bleed night photo with a dark left-to-bottom scrim, a date pill, the display headline, one lead, a peach and an outline button. A few sparks rise from the bottom while motion is allowed. Its bottom edge disappears under the first torn band.
- **Torn band:** peach background, `.tear-top` and `.tear-bot` SVGs outside its box, umber text, a black ("ink") button with peach text. Variants: with a torn photo on the left (`.band-inner` + `.band-photo`), or two columns of copy (`.band.solo`), or holding a white form card (the donate band).
- **Buttons:** primary is solid peach with umber text; "ink" is black with peach text (on peach bands); outline is 1.5px current color; soft is a charcoal or sand fill (date-row actions); donate is the peach outline. All 6px radius and at least 44px tall.
- **Way-in card:** photo (4:3, 6px radius), slab H3, one muted line, a centered peach button pinned to the bottom so buttons line up across the row.
- **Work card:** photo, a kind dot and label, slab title, maker and place. The whole card is a link.
- **Date row and feature card:** see signature 5.
- **Countdown:** see signature 6.
- **Story slider:** a scroll-snap track of full-width slides, each a photo with a gradient caption (slab title, topic and read time), square arrow buttons and dots. Without JavaScript it is a horizontal scroller.
- **Banner:** a shorter photo head for inner views (kicker in peach, H1, lead, optional buttons) that ends in a torn edge of the page color.
- **Schedule:** slab day tabs with a peach underline, kind chips, rows of slab time, title, place, kind and a bookmark button; a saved count and a "Show only saved" chip.
- **Facts card:** a ruled definition list (Where, Lit, Made of, Made by) with one full-width peach button.
- **Quote:** a surface card with big peach slab quote marks, the quote in Work Sans 600 and the speaker muted.
- **Forms:** labels above 50px fields with a 1.5px border, errors floating under the field in reserved space, pill checkboxes for choices, and a peach-edged success panel that replaces the form.
- **Giving widget:** a once or monthly pill switch, four amount tiles in slab numerals, an "Other amount" field, an impact line that changes with the amount, and an ink button that says the amount and frequency.
- **Footer:** black, starting with a torn edge; brand and one line, two link columns, a newsletter form, then the legal line.

## Do and don't

- Do let the night photographs carry the color. Don't add illustrations, icons as decoration, or a second accent color.
- Do use the torn edge for every hard change of surface between big sections. Don't put it on small cards or around text blocks.
- Do keep peach for fills and the donate outline. Don't set body text in peach on sand; use `--ember` for small text in light.
- Do write headlines in title case, short and plain. Don't use all caps headlines, exclamation marks or slogans.
- Do keep dates, places and ways to help near the top of every page. Don't hide the donate button or the search.
- Don't use emoji, icon fonts, glassmorphism, neon text effects, stock-photo smiles, or daytime festival crowds as decoration.

## Voice

Warm, plain and participatory. Speak to people who might come and help, not to an audience: "Pick a team", "Bring a dish and a friend", "We carry every scrap back out". Give specifics (times, places, what to bring) and keep sentences short. No hype words ("epic", "life-changing"), no em dashes, no lorem ipsum, no claims about attendance, history or impact that the user did not supply.
