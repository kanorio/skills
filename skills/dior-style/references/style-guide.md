# Style guide

The look in one sentence: a white page and a pearl-grey stage, a centred high-contrast serif wordmark above full-bleed films that carry a small round play control, widely tracked capitals for every caption, the story told underneath each film in a narrow centred column, and every product standing alone on a pale grey tile.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Day (default) | Night | Use |
|---|---|---|---|
| `--bg` | white | near-black | the page, the header, the menu drawer |
| `--surface` | pearl grey | a step above black | the stage behind every product, the product page media column, quiet bands, the footer |
| `--surface-2` | a deeper pearl | charcoal | thumbnails, pressed rows |
| `--text` / `--text-muted` | near-black / warm mid grey | warm white / light grey | titles and body / ledes, prices, captions under films |
| `--border` | pale hairline | dark hairline | toolbars, rows, accordions, field underlines, chips |
| `--accent` / `--accent-text` | black / white | warm white / black | the one solid pill per screen, the pressed chip |
| `--film` | dark grey | the same | behind films and film cards while they load; films and their captions stay light-on-dark in both themes |
| `--error` | brick red | soft red | field errors only |

There is no brand colour in the interface. Colour comes from the cloth and the pictures; the interface is black, white and pearl. A real brand colour may tint the wordmark or one small mark, never a band, a button or the links.

The template follows the system setting until the visitor uses the toggle, then remembers the choice. Both themes are complete.

## Typography

- **Two families.** **Bodoni Moda** (an open high-contrast Didone with an optical-size axis, so hairlines stay fine at display sizes) sets the wordmark, the display line, H1 to H3, prices in the selection, the day numbers on the shows list and the quote. **Jost** (an open geometric sans) sets everything else.
- **The serif is never bold.** Titles are 400, line-height 1.02 to 1.2, balanced (`text-wrap: balance`), almost no letter-spacing. The wordmark alone is 500, uppercase, tracked 0.22em.
- **Captions are tracked capitals.** `.cap`, nav links, buttons, chips, accordion summaries, field labels and product names on tiles are Jost 500 at 11px, uppercase, letter-spacing 0.2 to 0.24em. Every title has a `.cap` above it.
- **Reading text** is Jost 400 at 16 to 17px, line-height 1.65, in the muted colour for ledes and stories, never wider than 34em.
- **Product names on tiles** are captions (tracked capitals), with the price under them in muted 14px. On the product page the name becomes a serif H1.
- Sizes: display `clamp(44px … 88px)`, H1 `clamp(36px … 60px)`, H2 `clamp(28px … 44px)`, H3 `clamp(20px … 26px)`, body 16px, caption 11px.

## Spacing, layout and radius

- Page width 1320px with a fluid gutter (16 to 56px). Sections take 72 to 144px of vertical padding (`--sec`).
- **Films go edge to edge**, never inside the page width: the hero (full screen), the diptych (two 4:5 films with a 2px seam), the wide film (21:9, 4:5 on phones) and the film page (16:9, 4:5 on phones).
- **Products sit in a grid with 2px seams**, four across on desktop, three under 1100px, two on phones. The pearl tiles touch, like one long wall of stages.
- Text blocks are centred and narrow (`.narrow`, 640px): the story under a film, page heads, the article, the FAQ. Asymmetry comes only from the product page (media left, details right) and the savoir-faire split.
- Radius: 0 for pictures, tiles, cards and fields. Fully round for pills (buttons, chips, the quantity stepper, status labels) and for the play control.

## Surfaces and depth

- No shadows on content, no cards with borders, no gradients on surfaces. The only shadow is under the menu drawer.
- Depth comes from the films and from the pearl stage behind products. Product pictures have transparent backgrounds so the stage shows through in both themes.
- The only gradient is a dark scrim at the bottom of a film (and the top of the hero, for the clear header), so white captions and the play control stay readable.
- Hairlines (1px `--border`) divide toolbars, list rows, accordion rows and the footer.

## Signature elements

These make the style recognizable. Home uses all of them; every other view keeps at least three.

1. **The film plate.** Full-bleed stills that cross-fade and drift slowly, like a campaign film, with a 40px round play control and short chapter lines at the bottom left. The film plays only while it is on screen, pauses when the visitor presses the control, and never moves with reduced motion (the chapter lines still switch stills).
2. **The centred serif wordmark.** The brand name in tracked serif capitals in the middle of the header, between the menu on the left and the appointment link and selection bag on the right. On home the header is clear and white over the film until the page moves.
3. **Tracked captions everywhere.** A line of small, widely spaced capitals above every title, on every product name and every action. Actions are underlined capitals (`.tlink`) whose line slides away on hover.
4. **The story underneath.** Below each film, never on top of it (except the hero and the grid film), a centred caption, a serif title, one or two sentences and an underlined link.
5. **The pearl stage.** Each product alone on a pale grey tile, centred, with a soft floor shadow, its name in tracked capitals under it. Campaign films break into the product grid as a double tile.
6. **One black pill.** The single solid action on a screen is a black (or, at night, white) pill; the second action is an outlined pill. Everything else is an underlined caption.

## Components

- **Header:** 72px, sticky, a hairline under it. Left: the menu button (icon and "Menu") and up to four links; centre: the wordmark; right: the theme toggle, "Book an appointment" (an icon under 1100px) and the selection bag with its count. When the links do not fit, `fitNav()` adds `.compact` and they live only in the drawer.
- **Menu drawer:** a `<dialog>` that slides from the left, 440px wide, with serif links at 32px and three tracked links at the bottom. Closes on the button, Escape, a link or the backdrop.
- **Film:** `.film` with `img.frame` stills (the first has `.on`), optional `.film-cap` on top, and `.film-ui` with `.play` and `.segs` of `.seg` buttons. Variants: `.hero`, `.tall` (4:5), `.wide` (21:9), `.screen` (16:9). `--fx` on a still moves its focal point for narrow crops.
- **Film note:** `.film-note` under a film: caption, serif title, one muted sentence, an underlined link.
- **Tile:** `a.tile` with a `.stage` (4:5 pearl, the picture contained), an optional `.tag` ("New"), and `.tile-cap` (name in capitals, price). The tile's `data-*` attributes are the product record.
- **Film tile:** `.film-tile` spans two columns and two rows of the product grid and holds a `.film` with a caption.
- **Toolbar:** chips on the left (`aria-pressed`), the count and a sort select on the right, hairlines above and below; an empty state with a reset link.
- **Product page:** media column on pearl with thumbnails; a sticky details column with crumbs, serif name, price, description, colour, size chips, the black pill and the outlined pill, a status line, and three accordions; "Worn with" below.
- **Selection:** rows with a small stage, name, size, price, a round stepper and "Remove"; a pearl summary box with the black pill.
- **Shows list:** hairline rows with the day in the serif, a caption, title and sentence, a round status label and an underlined link.
- **Forms:** fields are a single underline with a tracked label above; choices are bordered boxes (`.pick`) or chips; errors float under the field in reserved space, so the submit never moves; one black pill; a pearl success panel that repeats the choices.
- **Footer:** pearl, the letters signup centred, four link columns, and the wordmark with the legal line.

## Do and don't

- Do let films fill the width and tell the story under them. Don't box a film into a card with a border or a radius.
- Do keep every product alone on its pearl tile. Don't photograph products on busy backgrounds or put several on one tile.
- Do put a tracked caption above every title. Don't set captions in sentence case or titles in the sans.
- Do keep one black pill per screen. Don't add coloured buttons, ghost buttons with icons, or rectangles over photographs.
- Do keep the serif light and large. Don't bold it, italicise it with a fake slant, or use it for body text.
- Don't use emoji, icon fonts, auto-advancing carousels, parallax, `background-attachment: fixed` or real video files in the single file.

## Voice

Quiet, precise and material. Name the cloth, the cut and the hand that made it (double-faced cashmere, cut on the bias, hems rolled by hand), give one detail, stop. Headlines are three to eight words, sentence case. Captions are nouns ("Tailoring", "Next show", "Savoir-faire"). No superlatives, no exclamation marks, no "luxury", "iconic", "exclusive" or "timeless". Placeholders stay visible as "Placeholder:".
