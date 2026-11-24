# Style guide: Tony's Chocolonely style

The look in one sentence: full-width bands of saturated red, green, blue and yellow, each opened by a headline of uneven slab capitals that fills the width, with hand-cut paper cards, tilted white-framed photos and square yellow buttons laid on top.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` / `--paper-2` | warm white / light gray | warm near-black / one step lighter | the plain bands / gray bands, chips, steppers |
| `--card` | white | dark paper | paper cards (`.paper`) |
| `--frame` | white | off-white | the border of framed photos; stays light in dark mode, like a print |
| `--ink` / `--ink-soft` | near-black / warm gray | off-white / light gray | text / metadata |
| `--line` | ink at 16% | off-white at 16% | dividers in lists, rows and the basket |
| `--red` `--green` `--blue` | three saturated primaries | the same hues, deeper | band backgrounds |
| `--yellow` | lemon | slightly softer lemon | buttons, pressed chips, tags; the same in both themes |
| `--orange` `--pink` `--purple` | product-tile colors | deeper | only behind product art and in the split bars |
| `--sun` / `--sun-ink` | yellow / ink | dark olive / yellow | the header band |
| `--shout` | red | light red | headline color on plain bands |
| `--on-color` | off-white | off-white | text and headlines on red and blue bands, headlines on green |
| `--green-ink` | ink | off-white | body text on the green band (ink passes contrast there, white does not) |
| `--btn-ink` | ink | ink | text on yellow and on photo frames, in both themes |
| `--focus` / `--danger` | blue / red | yellow / light red | focus rings / form errors |

Bands are set with one class: `.on-red`, `.on-green`, `.on-blue`, `.on-sun`, `.on-grey`, or none for paper. Each class sets `--band`, `--band-ink` and `--band-shout`, so everything inside picks the right text and headline colors. A `.paper` card resets to ink on card, whatever band it sits on.

## Typography

- Two families. **Alfa Slab One** (display, one weight) for shout headlines, page titles, prices, years, step numbers and pull quotes. **Zilla Slab** (400 and 700) for everything else: body, nav, buttons, labels, card titles.
- **Shout headlines** (`.shout`) are uppercase (set with CSS, written in normal case), line-height 0.92. The script splits them into letters with small, fixed rotations, offsets and scales, so the capitals look stamped by hand, then sizes each line to fill the width of its container (28 to 260px). A headline written as one `<span>` per line keeps those breaks on wide screens; on narrow screens any headline is re-broken into balanced lines that each fill the width, so a short last word comes out bigger. Without JavaScript they fall back to a fluid size and wrap normally.
- One shout opens every band that has a title. Keep them short: two to five words. A long sentence never goes in a shout.
- Page titles that must stay readable as a sentence (product name, article title) use `.title`: the display face at 38 to 68px, not fitted.
- Body: Zilla Slab 18px, line-height 1.5. Leads (`.lead`) are bold, 18 to 22px, at most 40 characters wide, centered under shouts.
- Nav links, buttons, chips and tags are bold and lowercase ("fill a box", "our promise"). Headings inside cards are bold sentence case.
- Prices and amounts in the display face: "$29", "$6.10".

## Spacing and layout

- Everything is a full-width band. Content inside sits in `.wrap`: at most 1400px, with 16 to 40px side padding. Bands have 40 to 88px vertical padding (`.tight` for page heads: 24 to 40px).
- Alternate band colors so no two neighbors match: green hero, paper, red, blue, gray, red footer. The footer is always red, so the band above it must not be.
- Inside bands: two-column splits (photo and copy, numbers and a card), rows of three or four paper cards, four-column product grids (two on phones), and horizontal rails with square arrow buttons.
- Radius is 0 everywhere. Nothing is a true rectangle either: see paper cuts below.

## Surfaces and depth

- Flat color, no gradients behind content, no glass, no blur.
- **Paper cuts:** cards, buttons, chips, photo frames and product media are clipped to slightly irregular quadrilaterals (`--cut-a`, `--cut-b`, `--cut-c`, `--cut-btn`), drawn by a `::before` layer so focus rings are not clipped. Cards in a row cycle through the three cuts with `:nth-child`.
- **Torn edge:** product media and thumbnails end in a zigzag bottom edge (`--torn`).
- The only shadow is a soft drop shadow under tilted photo frames.

## Signature elements

Keep at least four on every page.

1. **Color bands.** Edge-to-edge red, green, blue, yellow and gray bands; each one is a chapter.
2. **Fitted stamped capitals.** Every band title is a shout headline stretched to the band's width, with jostled letters.
3. **Tilted framed photos.** A thick white frame with a caption strip, rotated about 2 degrees, on a colored band (`.snap`).
4. **Hand-cut paper cards.** White (or dark paper) cards with uneven edges laid on colored bands, text centered, a yellow button at the bottom (`.paper`).
5. **Square yellow buttons.** Lowercase bold labels on lemon blocks with uneven edges; secondary buttons are white blocks (`.btn.alt`); icon buttons are 48px squares.
6. **Product tiles on solid color.** The product on a flat colored square with a torn bottom edge, name, size and price under it, and a square add button.
7. **The split.** Amounts in the display face over torn color bars, showing where the money goes. Use it for any honest breakdown: price, time, ingredients, impact.

## Components

- **Header band:** the yellow `.site-header` with the brand mark and name in the display face, lowercase nav, the theme toggle, the basket with a count, and a one-line notice under it. Under 1100px the nav becomes a menu button that opens a full-screen red sheet with giant links.
- **Hero:** a green band with a framed photo on one side and a stacked shout, a lead and two buttons on the other. Scattered paper stars and seeds (`.bit`) at the edges, three or four at most.
- **Band title:** `.shout.band-title` with `data-fit`, then an optional centered lead, then the content.
- **Rail:** `.rail-head` with two square arrow buttons and a "shop all" button, then `.rail` of product tiles that scrolls sideways with snap points.
- **Product tile:** `.tile` with `.tile-media` (color from `--tile`), `.tile-name`, `.tile-meta`, `.tile-price` and `.add`.
- **Card row:** `.cards` (three) or `.cards.four` of `.paper` cards: an image clipped with `.cut-img`, or a big number (`.num`) or year (`.year`), a bold heading, one or two sentences, a button.
- **Journal card:** `.post-card` with clipped media, a yellow tag and date, and a bold title.
- **Rows:** FAQ and product facts are `<details>` rows divided by `--line`, with a plus that turns into a cross.
- **Forms:** bold labels above 50px fields with a 2px ink border and square corners; errors appear in reserved space under the field; a short bold success message replaces the form.
- **Footer:** a red band with a shout, a lead and a newsletter card, three link columns and one line of small print.

## Do and don't

- Do let shouts fill the width. Don't center a small headline in a big band.
- Do keep body text in Zilla Slab and lowercase labels on buttons. Don't set paragraphs in the display face.
- Do put photos in white frames and tilt them. Don't run photos edge to edge or round their corners.
- Do keep the palette to the band colors plus product colors. Don't add gradients, pastels or a second accent for buttons.
- Do pick contrast per band: ink on green and yellow, white on red and blue. Don't put white body text on green.
- Don't rotate cards or text blocks; only photo frames tilt, and letters jostle.

## Voice

Warm, cheeky and plain-spoken about something serious. Lead with the mission in one short line, then the practical bit. First person plural, talking to one reader. Lowercase button labels that sound like a person ("fill a box", "lend a hand", "sign me up"). Admit what you can't do. No em dashes, no hype words ("revolutionary", "premium", "artisanal"), no exclamation marks in headlines, no lorem ipsum.
