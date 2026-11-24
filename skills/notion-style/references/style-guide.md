# Style guide: Notion style

The look in one sentence: a warm white page, ink-black words, a few pastel blocks, and a line drawing that makes it human.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | warm off-white | warm near-black | page background |
| `--surface` | white | slightly lifted near-black | cards, inputs, dialogs |
| `--surface-2` | soft warm gray | a step lighter | alternate sections, table heads, hover |
| `--text` | ink | warm off-white | headings, body, illustrations |
| `--text-muted` | warm gray | light warm gray | lead paragraphs, metadata, captions |
| `--border` / `--border-strong` | hairline / control outline | the same roles in dark | card edges / inputs and ghost buttons |
| `--accent` / `--accent-text` | ink / white | off-white / near-black | primary buttons, selected chips, checked boxes |
| `--link` / `--focus` | quiet blue | lighter blue | inline links, focus rings |
| `--tint-*` | six pastels | six deep, low-chroma tints | callouts, tags, card covers, illustration blobs |

The accent is the ink color itself. Blue appears only for inline links and focus rings, never for buttons or large areas.

## Typography

- One family: **Inter**, variable weight, with `cv11` and `ss01` for the single-storey a and open digits.
- Display: 800 weight, letter-spacing about -0.04em, line-height 1.02. Used once per page, for the hero headline.
- H1 and H2: 750 to 800 weight, -0.03em. H3: 650 weight, -0.012em.
- Body: 17px, line-height 1.6, normal letter-spacing. Lead paragraphs are a size up and muted.
- Eyebrows above section titles: 14px, 600 weight, muted, sentence case. No all-caps labels.
- Headlines are short statements with a period: "Write clearly. One page at a time." Never two sentences in a heading unless both are under five words.

## Spacing, layout and radius

- Page width 1120px with a fluid gutter; long-form text sits in a 680px column.
- Sections breathe: 64 to 120px of vertical padding. Alternate the page background with `--surface-2` to separate sections instead of drawing lines.
- Section heads are left-aligned by default; center them only for quotes, FAQ and the closing call to action.
- Radius: 8px for buttons, inputs and icons tiles; 12px for cards and callouts; 14px for the document card.
- Grids: three columns of cards on desktop, two on tablets, one on phones.

## Surfaces and depth

- Cards are white (`--surface`) with a hairline border and almost no shadow.
- Only the document card and dialogs get the soft overlay shadow.
- Pastel tints are always flat fills. No gradients, no glass, no blur except the sticky header.

## Signature elements

These make the style recognizable. Keep at least three on every page.

1. **Callout blocks.** A pastel rectangle, a small white icon tile on the left (36px, 8px radius, hairline shadow), a short bold title and one muted sentence. They group ideas the way a note groups thoughts.
2. **The document card.** A product view drawn as a page: a thin bar with three dots, a pastel cover strip, a big bold page title, tag pills, a callout, gray placeholder lines and a toggle row. Use it to show any product, lesson or note without a screenshot.
3. **Line illustrations.** Single-weight ink lines with round caps and a slight hand-drawn wobble, one pastel blob behind. They follow the text color, so they invert in dark mode. See `images.md`.
4. **Ink buttons.** The primary button is a solid ink rectangle with white text; the secondary is a hairline outline. One primary button per view section.
5. **Pastel tags.** Rounded pills in a tint with ink text, for levels, categories and small labels.
6. **Toggles and checkboxes.** FAQ and curriculum rows open like toggle lists, with a chevron that turns 90 degrees. Checklists use square boxes; done items are filled with ink.

## Components

- **Header:** brand mark and name, four quiet links, theme toggle, "Log in" as a quiet button and one ink button. It becomes a right-side sheet on narrow screens. A hairline appears under it after scrolling.
- **Hero:** tag pill linking to the newest thing, display headline, one muted lead paragraph, an ink and a ghost button, a small note under them, and an illustration on the right (above on phones).
- **Logo row:** customer or reader names set as type in different weights and styles, muted. Do not draw fake logos.
- **Cards:** a pastel cover with a small illustration, a tag, an H3 title, one muted sentence and a metadata line pushed to the bottom.
- **Quotes:** white cards, the quote first in 17px, then an initials avatar in a tint with name and role.
- **Letter block:** a large yellow callout with an inline email form and a small illustration.
- **Pricing:** a pill switch for the billing period, then plan cards; the featured plan has an ink border, the overlay shadow and a yellow "Most popular" tag on its title row.
- **Forms:** labels above fields, 44px inputs with the strong border, a blue focus ring, the error text under the field, and a green success callout that replaces the form.

## Do and don't

- Do let white space separate things. Don't add dividers between every block.
- Do keep one pastel per block. Don't mix two tints inside one element.
- Do write short headlines with periods. Don't use exclamation marks or ALL CAPS headlines.
- Do use initials avatars. Don't use stock photos of people.
- Do keep icons at 20px with round caps. Don't use emoji, filled icon sets or icon fonts.
- Don't add gradients, neon accents, glassmorphism or heavy shadows; they belong to other styles.

## Voice

Plain, warm and specific. Write to one reader. Lead with what the reader gets, then how. Use numbers that sound real ("ten minutes a day", "seven lessons"). No em dashes, no hype words ("revolutionary", "supercharge"), no lorem ipsum, no "Your Company".
