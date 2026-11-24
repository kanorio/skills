# Style guide: the picture-book wall

The look in one sentence: a deep blue page tiled with rounded squares of flat yellow, orange, green, brown and white, each holding one drawing in a single heavy black line and almost no words; inner pages open on a full-bleed colour band with a lowercase rounded heading and one drawing sitting on the band's lower edge.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, written as `light-dark(light, dark)` so one line holds both themes; `tokens.json` has the same values as data. Change them there, never inline. `:root` uses `color-scheme: light dark` (the system setting), and `data-theme="light"` or `"dark"` on `<html>` pins one.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--canvas` | deep cobalt | night navy | the home wall, the home header, the footer, memory-card backs |
| `--bg` / `--surface` | warm white / pale grey | deep navy / one step lighter | inner pages / cards, FAQ rows, chips' hover, the buy card |
| `--field` | white | lifted navy | inputs |
| `--text` / `--text-muted` | ink / slate | warm white / blue-grey | all text / leads, meta, captions |
| `--border` / `--border-strong` | pale grey / mid grey (3:1) | the same roles | rules in cards, white tiles on paper / inputs, chips |
| `--accent` / `--accent-text` | cobalt / white | sunshine yellow / ink | primary buttons |
| `--pop` | orange | light orange | the circled arrows on card links and FAQ rows |
| `--yellow`, `--orange`, `--green`, `--brown`, `--white` | flat tile fills | the same, a little deeper | tiles, covers, date tiles, page art, menu tiles |
| `--band-*` | the same five colours plus blue at full strength | deep tints of each hue | the band that opens every inner page |
| `--ink` | near black | near black | the line of every drawing, text on yellow, orange and white fills |
| `--focus` | cobalt | yellow | the 3px focus ring; inside bands, the canvas and the footer it takes the region's text colour |
| `--error` | brick red | coral | form errors |

**Six colours, no more.** Yellow, orange, green, blue, brown and white (grey for quiet bands). No pink, purple, teal, gradients or tints between them. A drawing uses the same six plus a pale grey and a cream.

**Ink on light fills, white on deep fills.** Yellow, orange and white tiles carry ink text; green, brown and blue carry white. Bands follow the same rule in light; in dark every band is deep and carries white.

**The canvas is blue in both themes.** It is a brand colour, not a light-mode background: in dark it becomes night navy, and the tiles on it stay bright.

## Typography

- One family: **M PLUS Rounded 1c**, a rounded grotesque. 800 for the wordmark, every heading, nav links, buttons, chips, labels, prices and tile captions; 500 for body copy, leads and fields.
- **Lowercase headings and interface.** The wordmark, H1 to H3, nav, buttons, chips, labels, captions and book titles are written in lowercase in the source (not with `text-transform`), so the copy reads the same everywhere. Body copy, FAQ questions and names of people stay in sentence case.
- Display (home wordmark): `clamp(3rem, …, 5.5rem)`, letter-spacing -0.02em. H1 (band headings): up to 4rem. H2: up to 2.25rem. H3: 1.3rem.
- Body 17px, line-height 1.65; leads 17 to 20px. No italics, no tracked capitals, no uppercase.

## Spacing, layout and radius

- Page width 1180px with a 20px gutter; bands, the canvas and the footer are full-bleed with their content in the same width.
- **The wall:** four columns at 1440 (two below 700px), 12 to 22px gaps, square tiles with `aspect-ratio: 1`; a wide tile spans two columns at 2:1. `grid-auto-flow: dense` packs them.
- Sections 56 to 96px apart. After a band, the first section adds half the band drawing's height so the drawing never touches text.
- Radius: 24px for tiles and page art (`block`), 20px for cards and memory cards, 16px for media and the film stage, full pills for buttons, chips, the search field and caption labels, circles for round buttons and the logo. Book covers are square with 6px on the spine side and 16px on the open side.

## Surfaces and depth

- Flat. Tiles, covers, cards and bands have no shadow, no border and no gradient. The only shadow is the film dialog's.
- Cards are pale grey (`--surface`) on the warm white page; white tiles on the page get a 2px inset rule so they keep their edge.
- Hover: tiles lift 4px and tilt one degree (alternating left and right), covers lift and tilt, card links lift 3px. Nothing glows.

## Signature elements

The home page uses the first three; every inner page keeps the header, the band and the footer.

1. **The wall.** A full-bleed blue canvas (the header sits on it too) tiled with rounded flat-colour squares. Each tile holds one centred drawing at about 72% of its size and no visible text: its name is a small lowercase pill that appears on hover or focus (always on touch screens). Neighbouring tiles never share a colour. Wide tiles hold a scene and, for films, a white round play button in the bottom-right corner.
2. **One black line.** Every picture is drawn with one 3.5-unit black line (in a 120-unit box), round caps and joins, flat fills from the six colours, front-facing, simple geometric shapes, dot eyes, no shading, no highlights, no gradients. Characters and objects are drawn the same way, and scenes are built from the same symbols.
3. **The colour band.** Every inner page opens with a full-bleed band in its section's colour: a lowercase H1, one lead and at most one control (the search field). One drawing (116 to 168px) sits on the band's lower edge, half in, half out, at the right (centred on phones).
4. **Lowercase rounded type.** One rounded family, bold and lowercase for everything you read as a label.
5. **The round badge logo.** The mark is a drawing inside a filled circle next to the lowercase wordmark; it repeats in the footer and the favicon.
6. **Grey cards with circled arrows.** Links to other pages are pale grey rounded cards with a lowercase title and an orange circled arrow on the right; FAQ rows use the same arrow, turning 90 degrees when open.

## Components

- **Header:** logo and wordmark left; lowercase nav links (pill highlight on hover and for the current section); a round bag button with an orange count; the round theme toggle. Below 960px the links move into a `menu` pill that opens a panel of menu tiles (three across, each a coloured square with its drawing and label). On the home page the header is canvas-blue with white text; elsewhere it is the page colour.
- **Tile:** an `a` (or `button`) with a colour class, an inline SVG `<use>` of a drawing, a `.cap` caption pill and, for films, a `.play` circle. Square or `.wide`.
- **Band:** `.band.b-<colour>` > `.wrap.band-in` (back link, H1, lead, optional search) + `.band-art`.
- **Search field:** a white pill with a search icon, 56px high, inside the band.
- **Chips:** outlined pills (2px, mid grey) that fill with ink when pressed (`aria-pressed`).
- **Book card:** a square cover in a tile colour with a darker spine strip, the lowercase title printed on the cover, the drawing at the bottom; under it the title and "ages 2–5 · $16".
- **Page reader:** one page at a time: a 3:2 coloured page with a drawing, a sentence under it, round previous and next buttons and "page 1 of 3".
- **Buy card:** price, a facts list with 2px rules, the primary button and a live note ("In your bag. See your bag").
- **Bag line:** a mini cover, the title, unit price, round minus and plus buttons, remove.
- **Memory card:** a square button; the back is canvas-blue with the logo drawing, the front a coloured tile with a drawing. Flips in 3D; matched pairs stay open.
- **Event card:** a coloured date tile (big day number, lowercase month), title, one line of when, ages and place, seats left and a small "book a seat" button.
- **Forms:** 52px fields with 14px corners and a 2px mid-grey border, lowercase bold labels, errors in reserved space under the field, choice pills for radio groups, and a success panel with a drawing and a lowercase heading.
- **Film dialog:** a native `<dialog>`, lowercase title, a round close button, a 2:1 stage with the scene and one moving character, and a caption line below.
- **Footer:** canvas-blue, the logo and wordmark with the address, a lowercase link list, the newsletter form (white pill field, yellow button) and a small print line.

## Do and don't

- Do let pictures carry the home page. Don't add headlines, paragraphs or buttons between the wall's tiles.
- Do keep every tile one flat colour with one drawing. Don't put photos, gradients, borders or text blocks in tiles.
- Do draw every new picture with the same line, palette and front-facing simplicity. Don't mix in icon sets, clip art, 3D renders or stock illustration.
- Do write labels and headings in lowercase. Don't uppercase anything or add letter-spacing.
- Do open each inner page with a band and its drawing on the edge. Don't stack two bands or put more than one control in a band.
- Do keep cards pale grey and flat. Don't add shadows to cards or tiles.
- Don't draw a known picture-book or cartoon character, or anything that looks like one, and don't copy another studio's book covers. Use the brand's own subjects, or simple objects and animals drawn from scratch.

## Voice

Short, warm and plain, like a picture book read aloud: one idea per sentence, concrete nouns, no exclamation marks except in the game. Headings and labels are a few lowercase words ("books", "book a seat", "your bag"). Grown-up information (delivery, prices, privacy) is specific and calm. Never invent facts, reviews or awards; mark anything the brief does not give as a placeholder.
