# Style guide: Google style

The look in one sentence: a white page that holds almost nothing, a centered wordmark above one pill-shaped search box, two quiet grey buttons and a line of small links, with utility links in the corner and a grey footer bar; inner pages keep the same calm with light, centered headlines, pale blue-grey panels and small colored dots as the only decoration.

## Tokens

All values live as CSS custom properties on `:root` (light), on `:root[data-theme="dark"]` and in the `prefers-color-scheme` block of `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | white | soft charcoal | the page, form fields, icon wells on panels |
| `--surface` / `--surface-2` | pale blue-grey / one step deeper | dark grey / one step up | bands, topic panels, fact panels, callouts, the lead note card / hover on panels, image wells |
| `--quiet` | near-white grey | dark grey | the quiet grey buttons |
| `--field` | white | lifted grey | the pill search box and its suggestion list |
| `--foot` | light neutral grey | near black | the footer bar |
| `--text` / `--text-muted` | near black / slate grey | near white / light grey | headlines and body / leads, meta lines, footer, chip labels |
| `--border` / `--border-strong` | hairline / grey | dark hairline / mid grey | the search box at rest, list dividers / chips, fields, selects |
| `--accent` / `--accent-text` | the blue / white | light blue / deep navy | the one filled pill per screen (header action, form submit), focus ring, the brand mark, the tab indicator |
| `--link` | the same blue as text | light blue | text links, links in suggestions, topic links |
| `--tonal` / `--tonal-text` | pale blue / deep navy | deep blue / pale blue | selected chips, tonal buttons, step numbers, avatars, the "guide" badge, pressed toggles |
| `--inverse` / `--inverse-text` | dark grey / near white | near white / dark grey | the toast |
| `--danger` | red | light red | form errors only |
| `--c-eat`, `--c-outdoors`, `--c-shops`, `--c-services`, `--c-culture` | five mid-tone hues | lighter versions | 8px category dots only, never fills or text |

Color is rationed. The page is white and grey; blue marks what you can press; five small dots tell categories apart. No gradients, no colored sections, no colored headlines. The five dot hues may be renamed for the user's categories (keep three to six), but stay dots.

## Typography

- **Gantari** for everything: one variable file, weights 100 to 900. Headlines use 400 (light-feeling, never bold); titles of cards and panels use 500; body uses 400; buttons and chips use 500.
- **The wordmark** is lowercase at 52 to 92px, weight 500, tracking -0.05em, line height 1, set in `--text`. A small tonal pill sits at its top right with one word ("guide"). It is typeset text, not an image; replace it with the user's name in the same way, or with their own logo if they supply one.
- Display headlines (one per view) are 34 to 54px at 400 with -0.02em tracking and 1.12 line height, centered on index pages. Section headings are 24 to 32px at 400.
- Body 16px with 1.6 line height; article prose 17px with 1.7. Leads under a headline are 18px in `--text-muted`.
- Small text is 13 to 14px: header links, meta lines, chip labels, the footer. The utility links on the home page are 13px in `--text`.
- Sentence case everywhere, including buttons. Numbers and times as people write them: `9:00–13:00`, `Tue–Sun`, `4 km`.

## Spacing, layout and radius

- Content width 1120px with a fluid 16 to 40px gutter (`.wrap`); reading width 700 to 760px (`.narrow`, `.prose`, `.qa`, `.intro`).
- The home view has no container: everything is centered in one column starting about 17 percent down the viewport, and the footer sits at the bottom of the screen.
- Index pages start with a centered intro (headline, lead), then a centered pill search box and centered chips, then the content.
- Generous but not grand: 40px above a page title, 48 to 72px between sections, 96px before the footer. Bands (`.band`) run full width with 72px of padding.
- Radius: 999px for the search box, filled and tonal buttons and the badge; 8px for quiet buttons, chips, fields and selects; 16px for card pictures and date tiles; 24px for panels and callouts; 28px for big media, the lead card, the newsletter card and the menu sheet.
- Shadows appear on the search box (hover and focus), its suggestion list, the menu sheet and the toast. Never on cards at rest.

## Signature elements

Keep the first four on the home page, and at least three of the rest on every inner page.

1. **The empty home.** A white page with only the wordmark, the pill search box, two quiet grey buttons and one line of small links, centered. Nothing else on the first screen: no hero picture, no cards, no marketing copy.
2. **Corner utility links.** On home, the header has no logo; a few 13px text links, the theme toggle and one filled blue pill sit in the top-right corner. On inner pages the header gains the small mark and wordmark on the left and the links become a tab row with a 3px blue indicator under the current page.
3. **The pill search box that grows suggestions.** 50px tall, 25px radius, a hairline border at rest that turns into a soft shadow on hover and focus. While typing, the box flattens its lower corners and a list of suggestions hangs from it inside the same shadow: an icon or category dot, the label with the untyped part in bold, and a small hint on the right. Arrow keys move, Enter opens, Escape closes.
4. **Quiet grey buttons.** Light grey rectangles with 8px corners and 14px text; a hairline border and the faintest shadow appear on hover. They carry the secondary actions: "Search", "Show more", "Yes / No", "Clear".
5. **The grey footer bar.** A full-width neutral band: one line naming the place or organization, a divider, then small links on the left and legal links on the right.
6. **One filled blue pill per screen.** The header action is always the filled pill; inside a view only the form's submit button may also be filled. Everything else is quiet, tonal or a text link.
7. **Tonal chips with a check.** Filter chips are 32px, 8px corners, outlined at rest; the selected chip fills pale blue, hides its dot and shows a check mark.
8. **Category dots.** A single 8px dot in one of five hues before a category label, on chips, cards, events and suggestions. The only color besides blue.
9. **Pale panels with a white icon well.** Topic, fact and principle panels are `--surface` with 24px corners and a 40 to 44px white circle holding a blue line icon.
10. **Light, centered headlines.** Large weight-400 titles centered above a muted lead; never bold, never colored, never over a picture.

## Components

- **Buttons:** `.btn` is the filled blue pill (40px, 14px text, 500); `.btn.tonal` is the pale-blue pill; `.btn.text` is a blue text button with a pale hover. `.qbtn` is the quiet grey button (36px, 8px corners); `.qbtn.pill` is the outlined 40px pill used for toggles (Save, Share, Remind me) and turns tonal when `aria-pressed="true"`. `.ibtn` is a 40px round icon button.
- **Search box:** `.sbox` > `.sfield` (icon, input, clear button) and `.slist` (role `listbox`) on home; `.sbox.compact` (46px) without suggestions on index pages, where it filters the list below as you type.
- **Chips:** `.chips` > `.chip[data-value][aria-pressed]`, each with an optional `.dot[data-c]` and a check icon `.ck`.
- **Cards:** no box. A 16:10 picture with 16px corners, then a dot and category, a 20px 500 title, one muted line and a 13px meta line. The whole card is the link; the title underlines on hover.
- **Facts:** four `.fact` panels in a row (hours, where, getting in, good for), each with an icon well, a 14px muted label and the value.
- **Topic panels:** `.topic` with an icon well, an 18px 500 title and three blue links.
- **Questions:** `details` rows with a hairline under each, an 18px question and a chevron that turns when open.
- **Article:** a sticky "On this page" list on the left (hidden below 1000px), crumbs, the title, a meta line, a pale "answer first" panel with a small tool, then prose with hairline tables, numbered steps in tonal circles and a "Was this page useful?" row.
- **Event rows:** a 64px date tile (month small, day large), a 19px 500 title, a dot, category and place line, and a "Remind me" pill.
- **Forms:** labels above fields at 14px 500; 48px fields with 8px corners and a strong hairline; focus is a 2px blue border. Errors are 13px red text in a reserved line under the field, so nothing moves. Option groups are chips (`.pick`). Success is a pale panel with a tonal check circle.
- **Toast:** a dark rounded bar at the bottom center for small confirmations (saved, copied, reminder set).

## Do and don't

- Do leave the home page almost empty. Don't add a hero picture, carousel, feature grid or testimonial to the first screen; put that content one click away.
- Do keep one filled blue pill per screen. Don't color sections, headings or icons in the category hues.
- Do center index-page intros and the search box. Don't center long body text or forms.
- Do write labels as plain nouns and verbs. Don't use clever names for navigation.
- Do use tonal chips and quiet buttons for secondary actions. Don't use outlined blue buttons or shadows on cards.
- Don't copy any real search engine's results page, logo colors, product names or icon set; this style is for the user's own site, not an imitation of another product.
- Don't add emoji, icon fonts, gradients, glassy blur or bold display type.

## Voice

Helpful, plain and brief, like a good librarian. Lead with the answer ("Tuesday. Green bin and glass box every week."), then the detail. Use "you" for the reader and "we" sparingly for the people who run the site. No exclamation marks, no superlatives, no marketing adjectives. Button labels say exactly what happens ("Send for a visit", "Show more places"). Dates and times are concrete; every page that states facts says when it was last checked.
