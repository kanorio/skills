# Style guide: WeChat style

The look in one sentence: a flat green band with a wide arch at its foot, the name and a two-line promise centred in it over a row of round translucent buttons, and below the curve, white rounded cards on a pale grey page, each with one coloured icon and a few plain words.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, written as `light-dark(light, dark)`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | pale grey | near black | the page under everything; inputs |
| `--surface` | white | lifted grey | cards, panels, the sheet, the footer |
| `--surface-2` | light grey | a step above the surface | chips, tags, soft buttons, the pager arrows |
| `--text` / `--text-muted` | near black / mid grey | soft white / light grey | headings and body / descriptions, dates, counts |
| `--border` | hairline grey | dark hairline | story cards, inputs, the timeline line |
| `--band` | a fresh mid green | a deep green | the header, every band, the arch, the phone screen header |
| `--on-band` | white | white | all text and icons on the band |
| `--veil` / `--veil-2` | white at 13% / 24% | the same | round buttons, the theme and menu buttons, the billing toggle, hover |
| `--btn` | the band green | the same green | primary buttons, the chosen chip, the featured plan outline, timeline dots |
| `--accent` | a darker green | a light green | links, counts that matter, icons in tinted discs |
| `--tint` | very pale green | dark green | date badges, the plan badge, step numbers, chosen options, success discs |
| `--c-green`, `--c-blue`, `--c-amber`, `--c-coral`, `--c-teal` | icon colours | lighter versions | one colour per entry card, service, category and avatar |
| `--p-*`, `--a-*` | illustration panels and shapes | the same | pictures only, never interface |

There is one interface hue, green, and it lives in the band and the primary button. The five icon colours give each destination its own identity; they are never used for text or backgrounds larger than a tinted disc. White text on `--band` and on `--btn` is at least 4.5:1; keep it that way when you change the green.

## Typography

- One family: **Urbanist**, variable weight. Geometric, round and quiet, close to the rounded wordmarks of everyday apps.
- The home lockup is the display size (44 to 64px) at weight 500, mark and name side by side, slightly tight.
- The tagline is two short lines at about 20px, weight 500, with open tracking (0.03em). Each line is a complete thought: what it is, then what you can do.
- Band titles (H1) are 34 to 54px at weight 500. Section titles (H2) are 26 to 32px at weight 600, always centred. Card titles (H3) 20px at 600.
- Story titles are 19 to 23px at weight 500: calmer than card titles because there are many of them.
- Body 17px with line-height 1.6; descriptions and dates in `--text-muted`; small text 14px.
- Date badges use small tracked capitals for the month (`DEC`). No other all-caps.

## Spacing, layout and radius

- Everything that introduces something is centred: the lockup, band titles, section heads, entry card contents, plan cards. Lists, forms and articles are left-aligned inside their cards.
- The page width is 1100px; entry cards sit in a 964px row of three with 32px gaps; the plans in 1040px; help categories in a 1224px row of four.
- The arch depth is `--arch` (30px on phones to 116px on wide screens); panels lift onto it by `--lift` (56 to 104px). Sections are separated by 64 to 112px of grey.
- Radius: 6px for chips, inputs and buttons; 10px for cards and pictures; 16px for panels and the sheet; circles for round buttons, icon discs, date badges, avatars and the pager.

## Surfaces and depth

- Three layers only: the green band, the pale grey page, white cards. No gradients, no textures, no coloured section backgrounds besides the band.
- Cards are almost flat: a 1px shadow at rest, a soft lift on hover. The featured carousel is the one element with a real shadow, because it sits on the arch.
- The band is the same flat green from the very top of the header to the bottom of the arch, with no line between them.

## Signature elements

These make the style recognizable. Keep the first three on the home page and the first on every view.

1. **The arched band.** A flat green band at the top of every view whose lower edge is one wide, shallow arch: lowest in the middle, rising towards both edges without ever turning vertical (`.band::after`, an ellipse wider than the screen). It also closes the home and about pages turned upside down (`.band.cap`).
2. **The centred entry.** On the home page the band holds only the mark and name, a two-line tagline and a row of round translucent buttons (`.orb`): 120px circles, an outline icon over one word. Nothing else: no image, no sentence-long headline, no rectangular buttons.
3. **Three white entry cards.** Just under the arch, three equal white cards in a row, each with a single icon in its own colour and a one-to-three-word label (and an optional muted line). They are the site's front door.
4. **Panels lifted onto the curve.** Inner pages put a white panel, a row of cards or the feature carousel so that it overlaps the arch: the green shows on both sides of it and disappears behind it.
5. **A search field in the band.** Directory and help pages centre a title over a white-outlined search field on the green.
6. **Round service icons.** A grid of tinted circles with one coloured icon each and a short label, like the home screen of an app.
7. **Grey chips and horizontal stories.** Filters are flat grey chips that turn green when chosen; stories are wide white cards with a flat illustration on the left and a date, a title and grey tags on the right.

## Components

- **Header (`.site-header`):** green, sticky, the mark and name on the left, up to six text links, the round theme button and one white button. Under 1180px the links fold into a menu that opens in the flow under the bar.
- **Round button (`.orb`):** `--veil` circle, white icon and label; lifts 3px and brightens on hover. Two by two on phones.
- **Entry card (`.entry`):** white, 10px radius, at least 216px tall, centred contents; the icon colour comes from `--c`.
- **Panel (`.panel`), toolbar (`.panel.toolbar`) and sheet (`.sheet`):** white surfaces with 16px corners; the toolbar holds chips and a count; the sheet holds reading pages.
- **Chips (`.chip`):** 38px tall, grey, 6px corners; the chosen one is green with white text. They scroll sideways on phones.
- **Card (`.card`):** a tinted icon disc, an H3, a muted description, a meta row with small icons, a green text link.
- **Story card (`.story`):** a 9:5 illustration on the left (top on phones), a muted date, a title, grey tags.
- **Plan (`.plan`):** centred name, a large price, a muted "per" line, a list with green ticks, a button; the featured plan has a 2px green outline and a pale green badge.
- **Event row (`.ev`):** a round date badge, a title, a meta line, a green line of places left, a small button.
- **Help category (`.cat`):** a white card with a coloured icon, a title and two lines of muted text; it is a button that filters the answers.
- **Answer (`.qa`):** a white `details` row with the question, a grey tag and a chevron that turns.
- **Forms:** labels above 46px inputs on the grey page colour, the error line floating under each field, option cards for choices, a stepper with round buttons, a success state with a pale green disc and a tick.
- **Footer (`.site-footer`):** white, centred: one line of links separated by thin vertical rules, the copyright line, small round grey icon buttons.

## Do and don't

- Do keep the band flat and green, with the arch as its only curve. Don't add gradients, photos or patterns to it.
- Do centre introductions and keep labels to a few words. Don't put long paragraphs or left-aligned headlines in the band.
- Do give each destination one icon colour. Don't colour whole cards or sections.
- Do use round shapes for things you tap to go somewhere (round buttons, icon discs). Don't make primary buttons pills; they are 6px rectangles.
- Do let white space and the grey page separate sections. Don't add borders or dividers between sections.

## Voice

Plain, helpful and brief, like a sign at a good front desk. Labels are nouns ("Newsroom", "Help centre"); the tagline says what it is and what you can do in two lines; descriptions are one sentence with a real detail (an hour, a place, a number of credits). Address the visitor as "you". No exclamation marks, no hype, no em dashes.
