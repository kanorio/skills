# Style guide: IBM style

The look in one sentence: white pages ruled by hairlines, one corporate blue, square corners, large light headlines, flat grey tiles with an arrow in the corner, dark bands for numbers and the footer, and a mosaic of flat geometric squares as the only decoration.

## Tokens

Every color is one custom property on `:root` written as `light-dark(<light>, <dark>)` in `assets/template.html`. The page follows the system setting; the toggle pins a theme by setting `data-theme="light"` or `"dark"` on `<html>`, which only changes `color-scheme`. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | white | near-black | the page |
| `--layer` / `--layer-hover` | light grey / one step darker | dark grey / one step lighter | tiles, plans, form cards, fields, the empty state / hover on tiles, rows and menu items |
| `--layer-on` | white | a step above the layer | fields that sit on a grey card |
| `--text` / `--text-2` | near-black / mid grey | near-white / light grey | headlines and body / eyebrows, captions, descriptions, labels |
| `--border` / `--border-strong` | hairline grey / mid grey | dark grey / mid grey | every rule and list line / field underlines, step rules, the filter segments |
| `--accent` / `--accent-hover` / `--accent-text` | blue / deeper blue / white | the same | primary buttons, the header action, the blue strip, active indicators, the featured plan edge |
| `--link` | blue | lighter blue | text links, the hero headline, pictograms, arrows, step numbers |
| `--focus` | blue | white | the 2px inset focus ring |
| `--tint` | pale blue | deep blue | tags and text selection |
| `--band`, `--band-layer`, `--band-line` | near-black and two greys | a darker black and two greys | the stats band, the timeline band and the footer |
| `--danger` / `--success` | red / green | lighter versions | form errors / the success notice edge |
| `--m1` to `--m5` | blue, pale blue, navy, grey, ink | blue, deep blue, pale blue, dark grey, white | the geometric mosaic and initials blocks only |

There is one hue. Blue does every job that needs colour; everything else is a grey. Red and green appear only inside forms. A dark band (`.band`, and the footer `.ft`) re-maps the tokens locally, so every component placed on it works without extra classes.

## Typography

- **Public Sans** (variable, 100 to 900) for everything readable; **DM Mono** (400) only for small machine-like figures: dates, durations, step numbers, counts, the 404 code.
- Display: weight 300, 42 to 72px, line-height 1.12, letter-spacing -0.01em, in `--link` blue. Once per site, in the home hero.
- H1: 300, 36 to 56px. H2: 300, 28 to 42px. H3: 400 at 20px. Headlines never go bold; weight 600 is kept for small labels (`.label`), the brand name and table heads.
- Body 16px at 400, line-height 1.5. Leads and split-head intros are 18 to 22px at weight 300. Eyebrows (`.eyebrow`) are 14px (12px inside tiles) in `--text-2`, sentence case, never uppercase or tracked.
- Long reading (`.prose`) is 17px with line-height 1.65 and a 42rem measure.
- Headlines are plain statements without a full stop: "Engineers who stay until it runs". Two lines at most for H1, three for the display.

## Grid, spacing and radius

- Page width 1312px with 16 to 32px gutters; columns are separated by a 32px gap, tiles in a row by 16px.
- **Split heads**: most sections open with the H2 in the left half and a 20px light intro (plus an optional text link) in the right half (`.split`). Content follows full width below.
- Section padding 64 to 128px; page heads 32 to 80px. Spacing steps: 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128px.
- **Radius is zero everywhere**: buttons, fields, tiles, tags, images, dialogs. The only curves in the whole site are inside the mosaic shapes and the pictograms.

## Surfaces and depth

- Flat. Tiles are `--layer` grey with no border and no shadow; hover darkens them one step. Lists are separated by 1px rules, never boxed.
- Light and dark bands alternate down the home page: white sections, one near-black band for numbers, the blue strip, the near-black footer.
- The only shadow token (`--shadow-overlay`) is for menus or popovers you add; the template's dialog uses a dark backdrop instead.

## Signature elements

Keep at least four on the home page.

1. **Light headlines, the hero in blue.** Large 300-weight headlines on every page; the home display headline is set entirely in `--link` blue.
2. **Flat tiles with the corner arrow.** Grey, square, no border; an eyebrow, a title, a short line and a 20px arrow pinned 16px from the bottom-right corner (`.tile` with `.go`). Results tiles put one big light figure at the bottom left (`.card .fig`).
3. **Hairline lists.** Rows separated by a 1px rule above each item, an optional small eyebrow, the title, and an arrow at the bottom right (`.rl`). Used for "Latest", "More results", deliverables and contact details.
4. **Square buttons with the arrow on the right.** 48px tall, at least 13rem wide, label left and arrow right. Primary is solid blue, tertiary a blue outline that fills blue on hover, ghost is blue text.
5. **The 48px header with a flush blue action.** Brand, plain text links with a 2px blue underline on the current page, a theme button and a full-height blue block at the right edge.
6. **The geometric mosaic.** A row or block of squares, each a flat shape (quarter circle, half circle, ring, triangle, arcs, dots, diamond) in two of five colours, rotated in 90 degree steps (`.mosaic`). One strip under the home hero, one panel with an overlapping tile for the featured result.
7. **Dark bands and the blue strip.** A near-black band for big light numbers over rules, and a full-width blue strip with one sentence and an arrow before the footer.

## Components

- **Header:** sticky, white or near-black, 48px, hairline below. Under 1056px the links move into a left `<dialog>` opened by a menu button placed before the brand; under 600px the blue action hides too. Never let it wrap.
- **Hero:** two thirds for the eyebrow, display headline, light lead and two buttons; one third for a "Latest" hairline list. The mosaic strip of eight squares follows (four on phones).
- **Service tiles:** a 48px blue line pictogram, H3, one line, arrow. Linked to the services view with `?tab=`.
- **Feature result:** a 3 by 2 mosaic with a grey tile covering the bottom-right two squares, next to a "More results" hairline list.
- **Stats:** big 300-weight figures (40 to 64px, tabular) with a small caption under each, a rule above, on a dark band or on white.
- **Steps:** four columns with a mid-grey rule, a mono blue "01 · 2 days" label, an H3 and one line.
- **Tabs:** text tabs on a hairline with a 2px blue indicator under the selected one; arrow keys move between them. Panels split in two: pictogram, H2, paragraph and a big figure on the left; a "What you get" hairline list on the right.
- **Filters:** a segmented row of square buttons where the selected one fills with the text colour (`.seg`), selects with a grey field and a chevron, and text tabs used as toggles; a mono live count on the right and an empty state with a reset button.
- **Plans:** grey tiles with a 4px top edge that turns blue on the featured plan, a light price, a mono unit, a short line, a ruled list with check marks and a full-width button.
- **Accordion:** native `<details>` rows with rules, a 48px summary and a chevron that turns.
- **Forms:** labels 12px above; fields are grey with a bottom rule and no radius; the focus and error states are a 2px inset outline (blue or red); errors sit in a reserved line under the field so nothing moves; a success notice with a green left edge replaces the form.
- **Case study and article:** breadcrumb, eyebrow, H1, a five-column facts row with rules, a stats row, an "On this page" list with a left rule, and prose with blue-ruled pull quotes, square bullets and a grey-headed table.
- **People:** colour blocks with large light initials at the bottom left, name and role below.
- **Footer:** near-black band: brand and one line, a newsletter field with a square button, four link columns, a bottom rule with legal links.

## Do and don't

- Do let hairlines, grey tiles and bands carry the structure. Don't add rounded corners, card shadows, gradients or glows.
- Do keep one blue. Don't introduce a second accent; the mosaic uses tints of the same blue, a grey and ink.
- Do keep headlines light and large. Don't bold them, uppercase them or track them out.
- Do pin arrows to the right edge of buttons, tiles and rows. Don't centre button labels or use pill shapes.
- Don't use stock photos as decoration, isometric 3D art, emoji or icon fonts.

## Voice

Plain, specific and calm, like an engineer explaining a plan: short sentences, concrete nouns, numbers with units, and the reader's own vocabulary ("lines", "shifts", "stops"). Claims are measured and qualified ("typical", "usually"). No exclamation marks, no superlatives, no hype words ("revolutionary", "seamless", "cutting-edge"), no em dashes.
