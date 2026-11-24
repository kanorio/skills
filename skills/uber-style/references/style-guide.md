# Style guide: Uber style

The look in one sentence: a black header of pill links over a black hero with a booking form of stacked grey fields joined by a route line, then black and white bands that take turns, with a wide rounded picture straddling each change, grey cards with small white pill buttons, flat editorial illustrations as the only color, and underlined text links.

## Tokens

All values live as CSS custom properties on `:root` (light), on `:root[data-theme="dark"]` and in the `prefers-color-scheme` block of `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` / `--bg` | white | near-black grey | white bands; `--bg` is whatever band you are in |
| `--surface` / `--surface-2` | light grey / one step darker | dark grey / one step up | fields, cards, chips / hover and pressed |
| `--text` / `--text-muted` | black / mid grey | near white / light grey | headlines and body / card text, captions, meta |
| `--border` | hairline grey | dark hairline | table rows, FAQ rows, the sub-nav edge |
| `--accent` / `--accent-text` | black / white | white / black | the main button and solid pills; flips to white on black bands |
| `--ink` | black | black | header, footer and black bands, the same in both themes |
| `--ink-field` | light grey | dark grey | fields on a black band (the hero form) |
| `--signal` | green | lighter green | availability dots ("Few left") and the success check only |
| `--danger` | red | lighter red | form errors only |
| `--tint` | pale blue | deep blue | the one colored panel per page (the "book ahead" panel) |

**`.ink` flips everything.** Any element with the `ink` class becomes a black band and redefines `--bg`, `--surface`, `--text`, `--accent` and the field tokens, so buttons, cards, pills and forms work unchanged on black. Build a black band by adding `ink`, never by setting colors on its children.

The interface has no brand color. Black and white do all the work; the illustrations bring the color. Green and red are status colors, never decoration.

## Typography

- **Albert Sans** for everything, one variable file (`fonts/albert-sans-latin-wght.woff2`, weights 100 to 900).
- Headlines at weight 700 with tight tracking: -0.03em on display, -0.025em on H1, -0.02em on H2. Line height 1.04 to 1.15. `text-wrap: balance`.
- Display is 40 to 56px and used once per page, in the hero. Section titles (H2) are 28 to 36px and sit on the left above their content, never centered.
- Card and column titles are 17 to 20px at 600. Card text is 13px, muted. Body is 16px at 400 with a line height of 1.5.
- Buttons and text links are 16px at 500; pills and chips are 14px at 500.
- The wordmark is plain text at 24px weight 500 with tight tracking, no symbol beside it.
- Write in sentence case. No uppercase labels, no eyebrows above headlines.

## Spacing, layout and radius

- One content column of 1152px plus a fluid 16 to 48px gutter (`.wrap`); the header spans 1280px. Text and forms align to the left edge of the column.
- Bands carry 56 to 88px of padding. Consecutive bands of the same color drop the top padding (`.flush-top`) so they read as one long black or white stretch with section titles as the only breaks.
- Grids: three columns of cards with an 18px gap, three text columns with 36px, two picture cards with 36px. Everything collapses to one column under 720px.
- Radius: 8px for fields, buttons, cards and pictures; 999px for pills, chips and round arrows; 16px for panels, plans and the floating hero card; 32px for the seam picture. Columns of pictures in "more ways" and the steps carousel stay square.
- No shadows at rest, except the floating card over the hero mosaic and the icon tiles of the circle portrait.

## Signature elements

Keep at least six on the home page, and the header, sub-nav and footer on every page.

1. **The route form.** A pill-shaped "when" select with a clock icon, then stacked 56px grey fields (address, then service) with a dot in the first, a square in the last, and a line joining them: dark inside the fields, band-colored in the gap. Under it a rectangular "See times" button beside an underlined text link. It lives in the hero, on service pages and in the booking flow (where a moving job adds a middle stop).
2. **Black header with pill links.** A 64px black bar: the wordmark, five pill links on near-black pills, then Help, the theme toggle and a white solid "Book now" pill. Under 960px the links go into a full-screen black menu with 28px links.
3. **Black and white bands that take turns.** The home page starts with a long black stretch (hero, services, steps, more ways), turns white, then black again. Never two colors of band in a row without a reason.
4. **The seam picture.** At every change of band a wide picture (32:9, 32px corners) sits half on each color, so the page seems to pass through it.
5. **Grey service cards.** Small title, one muted line, a white (or black) "Details" pill at the bottom left and a small flat spot drawing on the right; the whole card is the hit area.
6. **Editorial illustrations as the only color.** Flat scenes of people doing the work, in a fixed palette with halftone-dot shadows, arranged as a 2 by 2 mosaic in the hero with a floating blurred card ("Moving this month? Plan ahead").
7. **Steps carousel.** Square-cornered pictures with a title and a line, a "1/2" counter and two round arrow buttons at the bottom right; the previous arrow greys out at the start.
8. **Sub-nav.** On section pages a white 64px bar under the header: the section name in 24px bold on the left, small grey text links to anchors on the right.
9. **Underlined text links.** Secondary actions are text with a 1px underline set 7px below the baseline ("Manage a booking", "See open areas"), never outline buttons.
10. **White cards on black.** Contact cards ("Call us", "Send a message") are white rectangles with a black rounded icon tile, a big line of text and an arrow at the right; the circle portrait with three icon tiles marks the business offer.

## Components

- **Buttons:** `.btn` is a 48px rectangle with 8px corners, black on white bands and white on black ones; `.btn.alt` is grey; `.btn.wide` fills the form. Hover lightens or darkens it slightly; nothing moves.
- **Pills:** `.pill` is 36px, 14px text, on `--chip` (near-black in the header, light grey on white); `.pill.solid` is the accent; `.pill.round` is a 36px circle for icons; `.chip[aria-pressed="true"]` inverts to black on white or white on black. Filter rows are chips in a wrap.
- **Fields:** 56px grey boxes with 8px corners and no border until focus, when a 2px border in the text color appears. Labels sit above in 14px medium. Errors float under the field in red, so the button below never moves.
- **Options:** days and arrival windows are grey 56px tiles with a bold line and a small muted line; the chosen one inverts. A green dot marks scarce slots.
- **Summary card:** a grey 16px panel beside the booking form that updates as you choose, with the total separated by a hairline.
- **Price rows:** hairline-separated rows with the label on the left and tabular figures on the right.
- **FAQ:** hairline rows with a chevron that turns; answers in muted text.
- **Plans:** grey panels on black with a big price, a tick list and a full-width button; a small solid tag marks the popular one, and a segmented pill switches monthly and yearly.
- **Footer:** black, the wordmark, an underlined help link, four link columns and a newsletter column, then pills for language and area and a quiet legal row.

## Do and don't

- Do keep the chrome black and white. Don't add a brand color to buttons, links, headings or backgrounds; color comes only from illustrations and the one tinted panel.
- Do put the booking form in the first screen. Don't replace it with a single big button.
- Do alternate bands and use the seam picture at the change. Don't separate sections with borders, gradients or tinted backgrounds.
- Do use pills for navigation, chips and small buttons, and rectangles for the main action. Don't round the main button into a pill.
- Do keep headlines short, left aligned and bold. Don't center section titles or use more than one display headline per page.
- Don't use emoji, icon fonts, outline buttons, drop shadows on cards or photographs mixed with the illustrations on the same page.

## Voice

Plain, direct and helpful, like a dispatcher who knows the area. Lead with what the person gets ("Home help, sorted", "Know the price before we knock"), then one short line of how. Use verbs on every button ("See times", "Book assembly", "Plan a move"). Talk about prices, windows and what happens next in concrete terms ("You pay after the visit", "a text when they are on the way"). Speak to "you"; the business says "we" in support, about and booking copy.
