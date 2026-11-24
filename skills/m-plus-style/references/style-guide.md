# Style guide: M+ style

The look in one sentence: three tall stripes of saturated color fill the whole page, white type sits straight on them, and a huge hairline outline of the wordmark stands behind the opening screen.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. The light theme is called "day" in copy and the dark theme "night"; both are complete.

| Token | Day (light, default) | Night (dark) | Use |
|---|---|---|---|
| `--s1` / `--s2` / `--s3` (`tintStripeLeft`, `tintStripeMiddle`, `tintStripeRight`) | vermilion / rose / cobalt, all near 56% lightness | oxblood / plum / navy, near 33% | the three stripes behind every page, the header and the menu; date plates on pictures |
| `--stripes` | the gradient that paints them | the same | `body`, `.site-header`, `.menu` |
| `--bg` (`background`) | the middle stripe | the middle stripe | the fallback color when gradients are off |
| `--text` | white | warm off-white | every word, rule and outline |
| `--text-muted` | white (same as text) | light warm gray | night only; in day there is no gray text, hierarchy comes from size |
| `--border` | white | light warm gray | hairline rules, field and button outlines |
| `--accent` / `--accent-text` | white / ink | off-white / deep ink | the filled oval, pressed pills, hover fills |
| `--plate` / `--plate-text` (`surface`) | ink / white | deep ink / off-white | plates, the option list of a select |
| `--signal` / `--signal-text` | lemon / ink | the same | "open now" plates, "free" labels, form errors, the focus ring |

The stripe lightness is the rule that makes the style accessible: white body text needs 4.5:1, which caps each stripe at about 57% OKLCH lightness. When you change the hues, keep the lightness and check white text on each stripe. Pick three hues that are far apart (warm, middle, cool) and keep their chroma similar, so no stripe looks louder than the others.

## Typography

- One family: **Outfit**, variable weight, geometric and round. Weight 400 for everything large; 500 only for small text (labels, captions, plates) so it holds up on color.
- Display (section titles and page titles): 400 weight, letter-spacing about -0.045em, line-height 0.92, centered across all three stripes. Once per section.
- H1 (the hero line): 400, -0.03em, left-aligned, at most two lines on desktop.
- H2 and H3: 400, -0.02em to -0.025em. Card and row titles are H3 at about 36px on desktop: big type is the decoration.
- Body: 17px, line-height 1.55. Small text is 14px at 500 weight.
- No bold headlines, no italics, no all-caps except the tiny category tag on pictures (12px, 0.08em tracking).
- Headlines are names or short descriptions without a period ("Exhibitions", "Plan your visit", "A waterfront museum of design and the moving image"). Only full sentences in the 404 and quotes end with a period.

## Layout, spacing and radius

- **The stripe grid.** The page is three equal columns that match the three stripes exactly (`.tri`). Every cell has the same inside gutter (`--cell`, 16 to 40px). Content snaps to a stripe: one card per stripe, a row read left to right across the stripes (when, picture, what), plan columns, footer columns.
- **Two exceptions** cross all three stripes on purpose: the giant centered section titles, and the big link rows at the end of a page.
- No max-width container: the stripes are full-bleed and so is the grid. Paragraphs stop at about 30 to 36 em inside their cell.
- Sections are tall: 80 to 168px of vertical padding. Separate sections with space and white hairlines inset by the gutter, never with boxes or background changes.
- Radius: 50% for oval buttons (a true ellipse, not a pill); 999px for pills, chips, switches and single-line fields; 28px for a textarea; 0 for pictures, which are always square-cornered and edge to edge inside their stripe.
- Under 760px the grid becomes one column that runs across all three stripes; the stripes stay. Pictures in cards go full-bleed.

## Surfaces and depth

- There are no cards, no shadows and no tinted panels. Type sits directly on the stripes.
- Structure comes from three things only: the stripe edges, white hairlines (1px), and white outlines (1.5px) on controls.
- The only solid fills are plates (small text blocks), the filled oval, and pictures.

## Signature elements

These make the style recognizable. Every page keeps the first three; the home page shows all six.

1. **Three full-height stripes.** A three-stop gradient on `body` and on the sticky header, so the header blends into the page. Never four, never horizontal, never with text boxes over them.
2. **The giant outlined wordmark.** The brand's wordmark drawn as a hairline outline (1.25px, `vector-effect: non-scaling-stroke`) across the full width of the hero, behind the headline. It draws itself once when the home view appears. The 404 view reuses it.
3. **Oval buttons.** A 1.5px white outline with `border-radius: 50%`, about 216 by 68px, sentence-case label. Hover fills it white with ink text. One filled oval (`.oval.solid`) marks the main action of a form or plan.
4. **Plates.** Short text set on a solid block with no gap between stacked plates: ink for facts, lemon for "now" and "free", a stripe color for dates on pictures. They wipe in from the left when revealed.
5. **Giant centered section titles** that cross the stripes, with a small one-line subtitle under them.
6. **Big link rows.** Huge text with a small note and an arrow, between hairlines, at the end of a page.

## Components

- **Header:** the filled wordmark (28px tall), four links in 17px, a round outlined theme button, and a small oval "Tickets". Below 900px the links and the oval move into the full-screen menu behind a "Menu" button. A hairline appears under the header after scrolling.
- **Menu:** a full-screen `<dialog>` painted with the stripes, big link rows with arrows, an oval and an "open today" plate at the bottom.
- **Hero:** the outlined wordmark, the H1 and one line under it across two stripes, plates and an oval in the third stripe, and a row of three link cells along the bottom edge (one per stripe, each with an arrow).
- **Exhibition card (`.xcard`):** one stripe wide. A square-cornered picture with a category tag (top left) and two date plates (bottom left), then a centered H3 and one line.
- **Event row (`.erow`):** three cells after a hairline: when (H3 date and a small line), picture, what (H3 title, small line, one plate). On phones: when, what, then the picture.
- **Plans:** three centered columns with the name, a giant price, a small period line, a list between hairlines and an oval. The recommended plan has a lemon plate above it and the filled oval.
- **Forms:** labels above pill fields with a 1.5px white outline and a transparent fill; the focus ring is a 3px lemon outline. Errors are lemon plates that float in the gap under the field, so nothing moves while the visitor clicks. Success replaces the form with an outlined rounded box.
- **FAQ:** rows between hairlines, 28px questions, a plus that turns into a cross.
- **Footer:** a hairline, then three stripe columns (wordmark and address, two link lists), then the legal line.

## Do and don't

- Do let type sit on the stripes. Don't put content in white or tinted boxes.
- Do snap every row to the three stripes. Don't use a centered 1200px container or a two-column layout that ignores the stripe edges.
- Do use plates for dates and status. Don't use colored text or badges with rounded corners.
- Do keep everything white on the stripes. Don't add gray text in the day theme, gradients inside elements, shadows, blur or glass.
- Do keep pictures square-cornered. Don't round them or add frames.
- Don't use emoji, icon fonts, filled icon sets or more than one font family.

## Voice

Public, plain and inviting, like a good museum label. Lead with what is on and when, then why it is worth the trip. Use real-sounding specifics (times, floors, prices, durations). Titles are names, not slogans. No exclamation marks, no em dashes, no "immersive", "world-class" or "unmissable", no lorem ipsum.
