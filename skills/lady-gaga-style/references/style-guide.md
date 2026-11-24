# Style guide: Lady Gaga style

The look in one sentence: a black page where every record is its own era, announced by one roughened serif word over grainy full-bleed art, with the year told as a row of dated moments and a thumbnail timeline on a hand-drawn wire.

## Tokens

All values live as CSS custom properties on `:root` (light) and `:root[data-theme="dark"]` (the default) in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark (default) | Use |
|---|---|---|---|
| `--bg` | paper white | pure black | the page |
| `--surface` / `--surface-2` | pale gray / light gray | two steps above black | product wells, form fields, night rows / pressed states |
| `--text` / `--text-muted` | ink / mid gray | white / light gray | headings and body / dates, venues, captions |
| `--border` / `--border-strong` | light rule / ink | dark rule / white | row dividers / the success box |
| `--accent` / `--accent-text` | deep vermilion / white | bright vermilion / black | the wordmark, lettering, city names, moment icons, errors, the strip marker |
| `--ink` / `--ink-text` | ink / white | white / black | the one solid button per view |
| `--footer` | pale gray | near black | the footer band |
| `--stage-*` | black, white, gray, bright vermilion | the same | `.stage` sections: the hero, the join band, the tour art, the menu, 404 |

The `.stage` class redefines the surface tokens, so every button, chip and tag works on black without a second version. The hero and the bands stay black in the light theme too: they are artwork, not page.

Each era has its own color, set on the era panel as `--era-d` (on black) and `--era-l` (on paper). The color is used for that era's lettering only. The site accent is the current era's color: when the next record comes out, change `--accent` and `--stage-accent` and the whole site moves into the new era.

## Typography

- **Crimson Pro** (a classic old-style serif) for everything that is a title: era lettering at 800 in capitals, headings at 400, kickers in spaced capitals, the "Scroll" label in italic.
- **Hanken Grotesk** (a plain grotesk) for navigation, body, buttons and forms, at 400 to 500 and 15 to 18px.
- **Fragment Mono** for every date and tag, 11 to 12px, uppercase, tracked 0.1 to 0.14em: `MAR.06.2026`, `2026`, `SINGLE`, `FEW LEFT`.
- Era lettering is the display size, once per view at most. H1 and H2 are serif 400, never bold. Moment titles are serif at about 28px with song names in curly quotes: “Rust Halo” Video.
- Dates on moments are written `Mon.DD.YYYY` in the source and set in capitals by CSS.

## The era lettering

One word in heavy serif capitals (or italic lowercase for a quiet era), drawn as SVG text so it can be roughened:

```html
<svg class="lettering" viewBox="0 0 1120 190" role="img" aria-label="Saltglass"><text class="f-rough" x="560" y="170">SALTGLASS</text></svg>
```

- The script fits the `viewBox` to the word once the font has loaded, so changing the word is all you do. The height comes from `--lh` on the element.
- Four treatments live in the sprite as SVG filters: `f-rough` (torn ink edges and specks), `f-melt` (columns that slide and drip), `f-scan` (bands shifted sideways, like a bad signal), `f-rough-sm` (a light rough edge for the small wordmark). Class `it` sets the word in italic with no filter.
- Pick one treatment per era and keep it everywhere that era appears. The current era uses `f-rough`; the tour uses `f-melt`.
- Lettering is white on the stage, the era color in the music view, the accent in the header and footer wordmark.

## Spacing, layout and radius

- Page width 1360px with a 16 to 40px gutter. Navigation and the strip run edge to edge with the gutter only.
- Generous vertical space: sections are 56 to 112px apart; moments are 56 to 128px apart.
- Moments do not sit on a grid: they alternate across the page (`--x` offset, `--w` width, cycling every four) so the list reads like a scrapbook of the year. On phones they stack full width.
- Corners: 4px on boxed markers and fields, 2px on tags, round for pills and icon buttons, square for images and product cards.

## Surfaces and depth

- No shadows on cards. Depth comes from the art: grain, glow and vignette inside the images.
- A fine grain tile sits under the whole page (multiplied on paper, screened on black); it never covers text contrast.
- The hero darkens toward the top and bottom with a gradient so the header and the strip read over any art.

## Signature elements

Keep at least four on the home page and two on every other page.

1. **Era lettering over grainy art.** The hero is full-bleed art with a serif kicker ("Era VI") and the era's name in roughened serif capitals, white, centered.
2. **The strip.** A row of small square thumbnails, one per moment, over a hand-drawn wire with a diamond marker. At the bottom of the hero the marker sits at the newest moment; on the Latest page the strip sticks under the header and the marker follows your reading.
3. **Dated moments.** Releases, videos, shows and news as a scattered list: art, a serif title, a mono date and one accent icon for the kind.
4. **The outlined current marker.** The current page in the nav, the current era, the pressed filter and the chosen size wear a thin 1px box with 4px corners. Nothing is underlined or filled to show "current".
5. **Mono tag boxes.** Year, format and ticket status in tiny tracked mono inside 1px outlined boxes.
6. **Accent serif places.** Tour cities in accent serif capitals, with the venue and dates in plain gray below.
7. **Circle-icon pills.** Secondary buttons are outlined pills with a small circled arrow or plus on the left. The primary button is a solid pill with no icon.

## Components

- **Header:** four links on the left, the wordmark centered (accent, `f-rough-sm`), About, Join, the bag ("Bag (0)") and the theme toggle on the right. Transparent over the home hero, solid otherwise. Below 960px a round menu button opens a full-screen black menu with large serif links.
- **Hero:** art, gradient, kicker, lettering, one gray sentence, a solid pill and a circle-icon pill, the strip at the bottom.
- **Moment:** `article.moment` with an image link (square, or 16:9 with `.wide`), an optional round play mark for videos, the title, then a row with the date and the kind icon.
- **Era panel:** the square cover, the kicker, the era lettering in the era color, tags, two sentences, a numbered track list in two columns (serif titles, mono numbers) and buttons.
- **Release card:** square cover, the name in sans, tags. A list layout turns cards into rows.
- **City row:** a `<details>` with the city, venue, dates, status tag and a chevron; open, it lists each night with doors time and a ticket button.
- **Product card:** a gray well with the item drawn flat in the middle, a tag in the corner, the name and price under it in sans, all inside the card.
- **Bag:** a side drawer with line items, subtotal and checkout.
- **Forms:** labels above 48px fields on `--surface`, errors in accent mono under the field in space that is always reserved, one solid submit pill, a bordered success box that replaces the fields.
- **Footer:** the newsletter form, two columns of links, then the wordmark and a mono legal line.

## Do and don't

- Do give each record its own lettering treatment and color. Don't use the same treatment for every era, or more than one per era.
- Do keep the page black and quiet so the art and the lettering carry the color. Don't add colored backgrounds, gradients on buttons or a second accent.
- Do use the outlined box for "current". Don't underline, fill or bold the current item.
- Do write dates in mono capitals. Don't set dates in the serif or the sans.
- Don't round images, add card shadows, use emoji, or put lettering over a busy part of the art.

## Voice

Plain and a little theatrical. Titles name the thing and the event: “Rust Halo” Video, Saltglass Announced, Headlining Harbour Lights Festival. Sentences are short and concrete ("Twelve songs about glass, salt and getting out."). No exclamation marks, no hype words, no em dashes, no lorem ipsum.
