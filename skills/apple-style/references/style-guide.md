# Style guide: Apple style

The look in one sentence: full-bleed tiles that alternate light grey, white and black, each holding one product name, one line, two pill buttons and a big product picture; one blue for everything you can press; tight, heavy sans headlines; and small grey type for everything else.

## Tokens

All values live as CSS custom properties on `:root` (light), on `:root[data-theme="dark"]` and in the `prefers-color-scheme` block of `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | white | black | the page, white tiles, form fields |
| `--surface` / `--surface-2` | light grey / one step darker | near-black grey / one step up | grey tiles, cards, the footer / the price capsule, gallery dots, pills, image wells |
| `--text` / `--text-muted` | near black / mid grey | near white / light grey | headlines and body / captions, the grey half of two-tone headlines, footnotes, the footer |
| `--border` / `--border-strong` | hairline / grey | dark hairline / mid grey | spec rows, list dividers / field outlines, filter chips |
| `--accent` / `--accent-text` | the blue / white | the same blue / white | every filled button, the selected option ring, the focus halo on fields |
| `--link` | a slightly deeper blue | a lighter blue | blue used as text: links, outline buttons, icons in cards |
| `--ink` / `--ink-text` | black / near white | one step above black / near white | black tiles and chapters; inside `.ink` every text and link token switches automatically |
| `--new` | a warm orange-brown | a lighter orange | the "New" label only; never a button, link or background |
| `--danger` | red | lighter red | form errors only |
| `--glass` | translucent grey | translucent dark grey | the global nav, the product sub-nav and the sticky compare pickers, with a background blur |

Blue is the only interactive color. Everything else is white, greys and black, so the products bring all the color. Two blues exist because white text needs a fill around 55 percent lightness, while blue text on black needs a lighter one: fills use `--accent`, text uses `--link`.

Text is never pure black on white. Headlines and body share `--text`; weight and size make the hierarchy.

## Typography

- **Inter** for everything, with the optical-size axis (`opsz` 14 to 32): large headlines automatically get the tighter display cut, body text keeps the open text cut. One file covers weights 100 to 900.
- Headlines at weight 600 with negative tracking: about -0.03em on the mega and display sizes, -0.022em on H2, -0.014em on H3. Line height 1.04 to 1.1. Never 700 or bolder.
- Body 17px at weight 400, line height 1.47, tracking -0.01em. Product taglines under a name are 21 to 28px at weight 400.
- Small text is 12px: the global nav, the footer, footnotes. Buttons are 17px (14px for small pills) at weight 400.
- **Two-tone headlines and copy.** The first phrase is in `--text`, the rest in `--text-muted` (`.two-tone` with `<b>`). Chapter copy (`.copy`) is muted 21px semibold with the key phrases in `<b>` at full strength.
- Numbers that matter are set huge: `40 hrs`, `268 g`, `$349`. Write units with a space and short forms (`hrs`, `min`, `g`).

## Spacing, layout and radius

- Text column 980px plus a fluid 16 to 32px gutter (`.wrap`); wide sections 1240px (`.wrap.wide`). Tiles and chapters are full bleed.
- Tiles are separated by a 12px gap of page color, never by borders. The 2-up tile grid has the same 12px gap and 12px side margin; it becomes one column below 735px.
- Vertical rhythm is generous: 64 to 120px between sections, 80 to 160px above chapters. Inside a tile: name, then 6px, tagline, then 20px, buttons, then the picture.
- Radius: 980px for every button, chip and capsule; 18px for cards; 28px for the gallery cards, picture frames and the buy frame; 12px for form fields and the wide buy button.
- Shadows only on hover (cards) and on overlays (search). Never at rest.

## Signature elements

Keep at least six on the home page and a product page, and the nav, footnotes and footer on every page.

1. **Alternating full-bleed tiles.** One product per tile, centered: an optional "New" label, the name in 40 to 56px, one line, two pill buttons (filled "Learn more", outline "Buy"), then the product picture to the bottom edge. Tiles alternate grey, white and black, then continue as a 2-up grid.
2. **The product is the picture.** Renders or studio photos on a seamless backdrop that matches the tile, nothing around them: no illustrations, patterns, gradients or decorative shapes in the interface.
3. **One blue.** Filled buttons, outline buttons, links with a `›` chevron, the selected swatch or option ring and the focus halo all use the same blue. Nothing else is blue.
4. **The thin glass nav.** A 44px translucent bar with a blurred background: the mark, eight 12px links spread across the width, then search, bag (with a count) and the theme toggle. Below 900px it becomes the mark, icons and a two-line menu button that opens a full-screen menu with 28px links.
5. **The product sub-nav.** On product pages a sticky 52px glass bar: the product name at 21px on the left, 12px links (Overview, Tech Specs, Compare) and a small blue "Buy" pill on the right.
6. **Chapters.** A short eyebrow, one giant headline (up to 80px), then muted copy with bold phrases, centered; sometimes followed by a row of huge numbers or a product picture. Black chapters (`.ink`) break up the white ones.
7. **The price capsule.** On a product hero, "From $349" and a small Buy pill inside one grey capsule.
8. **The highlights gallery.** Wide cards with 28px corners and a caption at the top, scrolling sideways with snap; below, a grey capsule of dots where the current dot stretches and fills while it plays, and a round play and pause button.
9. **Compare columns.** Three pickers (two on phones) that choose which models fill the columns; rows of facts align across columns, with huge numbers for battery and a dash for "not available".
10. **Footnotes and the quiet footer.** Claims carry small superscript numbers that link to a footnotes block in 12px grey; the footer is a grey band with a breadcrumb (mark › page), four link columns, a "more ways to shop" line and a legal row with thin dividers.

## Components

- **Buttons:** `.btn` is a blue pill, 44px tall with 17px text; `.btn.outline` is transparent with a blue outline and blue text, filling blue on hover; `.btn.sm` is 32px tall with 14px text and an invisible 44px hit area; `.btn.wide` is a 52px full-width button with 12px corners for forms and checkout.
- **Text links:** `.more` in `--link` with a non-breaking space and `›` after it. No underline until hover.
- **Product card (store):** a grey card with 18px corners, the product picture square at the top, color dots, an optional "New", the name in 21px semibold, one muted line and the price. The whole card is the link.
- **Option cards (buy):** outlined 12px boxes with a title, a muted line and a price at the right; the checked one gets a 2px blue ring. Color choices are outlined pills with a swatch and the color name.
- **Forms:** 56px fields with 12px corners and a floating label that shrinks into the top of the field. Focus is a blue border with a soft blue halo. Errors are red text with a small "!" disc that floats under the field, so nothing moves. Success is a grey card with a round blue check.
- **Tech specs:** rows divided by hairlines, a 24px label column on the left and plain lists or a two-column `dl` on the right.
- **FAQ:** rows divided by hairlines; 19px semibold questions with a circled plus that turns into a cross when open.
- **Newsroom:** a lead story card with a big picture, then grey cards with a picture, a 12px uppercase category, a 19px title and a date.

## Do and don't

- Do give each product its own tile and let the picture fill it. Don't put two products, a collage or text over the product in one tile.
- Do keep the interface monochrome with one blue. Don't add brand colors, gradients, colored sections or colored icons to the interface.
- Do write short, declarative headlines with a full stop ("Quiet, on your terms."). Don't use exclamation marks, questions as headlines or more than two lines.
- Do keep secondary information small and grey (footnotes, legal, the footer). Don't shout prices or promotions with badges.
- Do use the two-tone headline for page intros. Don't use it in more than one headline per screen.
- Don't add emoji, icon fonts, drop shadows at rest, borders around tiles or rounded corners on full-bleed tiles.

## Voice

Calm, confident and concrete. Lead with the benefit in a few words, then one sentence of proof with a number ("Adaptive noise cancelling and up to 40 hours on a charge."). Product names stand alone without "the". Claims about battery, speed or comfort get a footnote that says how they were measured. Speak to the reader as "you"; the brand rarely says "we" outside support and the newsroom.
