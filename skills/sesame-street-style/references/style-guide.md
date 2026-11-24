# Style guide: the colour-coded playground

The look in one sentence: a white header with a row of saturated pill buttons, one colour and icon per section, over a full-bleed bright canvas sprinkled with paper confetti; white-framed cards with round badges on the corner, round character portraits and chubby friendly type, and every section repainting the canvas in its own button colour.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, written as `light-dark(light, dark)` so one line holds both themes; `tokens.json` has the same values as data. Change them there, never inline. The theme follows `color-scheme`: `:root` uses `light dark` (the system setting), and `data-theme="light"` or `"dark"` on `<html>` pins one.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--surface` | white / white | deep navy / one step lighter | header, grown-ups pages, forms |
| `--surface-2` | warm off-white | lifted navy | bands, input fill, age buttons |
| `--text` / `--text-muted` | deep ink navy / slate | near white / blue-grey | all text / leads, captions, meta |
| `--border` / `--border-strong` | pale grey / mid grey (3:1) | the same roles | card outlines / inputs, chips, age buttons |
| `--frame` | white | lifted navy | the frame around every tile, the stage, the book, badges' ring |
| `--accent` / `--accent-text` | cobalt / white | light blue / ink | primary buttons, links |
| `--sky`, `--orange`, `--magenta`, `--purple`, `--green`, `--red` | six section colours | the same | pills, badges, class icons, stickers, kickers |
| `--cv-sun`, `--cv-sky`, `--cv-orange`, `--cv-magenta`, `--cv-purple` (+ `-2`) | bright canvases (and a deeper band) | deep tints of the same hue; the sun canvas becomes a night-blue | full-bleed section backgrounds |
| `--cc-*` | white paper at 62% | the section colour at about 30% | the confetti on each canvas |
| `--focus` | cobalt | sunshine yellow | the 4px focus ring |
| `--error` | brick red | coral | form errors, "full" in the timetable |

**One section, one colour.** Each kids' section owns a colour: games are sky, stories orange, making magenta, friends purple, and the home page is the yellow canvas. The colour appears in four places at once: its header pill, the canvas of its pages, the badge on its cards and the band of friend portraits. Never give two sections the same colour, and never use a section colour for decoration elsewhere.

**Labels on fills are white.** The six fills are deep enough for white labels at AA (4.5:1). Text on a canvas is always ink (`--text`), which holds 6:1 or more on every canvas.

**Grown-ups get white.** The grown-ups pages (classes, timetable, booking, about, contact, privacy) sit on plain white with warm off-white bands, a green kicker pill and a tab bar under the header. Colour comes back only in class icons, the yellow call-to-action band and the footer.

## Typography

- Two families. **Baloo 2** (700 to 800) sets the wordmark, every heading, pills, buttons, chips, tile names, badges, prices and the story text. **Andika** (400 and 700) sets body copy, leads, lists and forms; its single-storey a and g are kind to early readers.
- Sentence case everywhere. No uppercase, no tracked capitals, no italics. Headings end without a period, except the playful home H1, which may use an exclamation mark.
- Display (home H1): `clamp(2.5rem, …, 4.5rem)`, weight 800, line-height 1.08. H1: up to 3.6rem. H2: up to 2.6rem. H3: 1.3rem at 700.
- Tile names: Baloo 2 700 at 1.1875rem, one or two lines. Story pages: Baloo 2 600, up to 2rem, so a grown-up can read aloud from across the room.
- Body: Andika 17px, line-height 1.6. Leads are 18 to 21px and muted.
- No negative letter-spacing: rounded faces need their gaps.

## Spacing, layout and radius

- Page width 1240px with a fluid 16 to 40px gutter. Canvases are full-bleed; their content sits in the same page width.
- Kids' pages: a canvas head (H1, one line, a live count) then a grid of tiles, `minmax(260px, 1fr)`, 16 to 24px gaps. The home page opens with a mosaic: one big tile spanning two rows, small tiles and one round portrait.
- Grown-ups pages: page head, then 56 to 96px sections alternating white and the warm band.
- Radius: full pills for buttons, chips and header pills; 18px for tiles and cards; 12px for the art inside a tile; 28px for the stage, the book and form panels; circles for badges, portraits, age buttons and swatches.

## Surfaces and depth

- **The white frame.** A tile is a white card with 5px of padding around its art, so the art looks like a picture mounted on card. The same frame wraps the stage, the book, the side card and the friend cards. In dark mode the frame is a lifted navy.
- **Paper shadow.** Framed things cast one soft, low shadow (`--shadow-card`) as if lying on the canvas. On hover a tile lifts 5px and tilts 0.8 degrees, like paper picked up by a corner.
- Grown-ups cards are flat: a 2px inset outline and no shadow.
- No gradients, no glass, no blur, no hard drop edges.

## Signature elements

These make the style recognisable. The home page uses all six; every kids' page keeps at least four, every grown-ups page at least two (the header and the footer).

1. **The pill header.** A white bar with the wordmark, a row of saturated pills (each with its own colour and a 28px icon), and a quiet "Grown-ups" link with the theme toggle on the right. The current pill gets a white gap and a ring in its own colour. Below 980px the pills become round icon buttons; below 640px they drop to their own row, evenly spaced.
2. **The repainting canvas.** Each section's pages sit on a full-bleed canvas in that section's colour, scattered with small paper confetti: bars, rings, triangles, zigzags and dots in white (in dark mode, in the section colour).
3. **Framed tiles with corner badges.** A white-framed card, a picture on top, a short name below, and a round badge in the section colour, ringed in the frame colour, overlapping the bottom-right corner of the picture. New items get a red round "New" sticker, tilted, on the top-left corner.
4. **Round portraits.** Characters appear in circles with a frame-coloured ring: in the home mosaic (with a badge), in the "Pick a friend" row, in the band of filters, on the friend cards (with a second ring in their colour) and as answer buttons in games.
5. **The cast of shapes.** Simple geometric friends (a circle, a triangle, a square, an arch, a star), each in one section colour, with dot eyes, pink cheeks and a small smile, standing on two short legs. They fill the pictures and peek over the top edge of the footer.
6. **The grown-ups corner.** A clearly separate, calmer area for parents and carers: white pages, a tab bar, a green kicker, classes, a timetable and a booking form, reached from the "Grown-ups" link.

## Components

- **Header:** see signature 1. It is not sticky; the page is short enough to scroll back.
- **Grown-ups tab bar:** under the header only in the grown-ups area; text tabs with a 4px green underline for the current one. It scrolls sideways on phones.
- **Canvas head:** H1, one short line and a right-aligned count ("8 games") that updates with the filters.
- **Friend band:** a deeper strip of the canvas colour with "Everyone" and one round portrait per friend; the pressed one gets an ink ring. It filters the grid.
- **Chips:** white pills with a grey outline; the pressed one turns ink with white text. Used for story topics and timetable days.
- **Tile:** see signature 3. The whole tile is one link; the badge carries a visually hidden type ("Game", "Story", "Colour-in").
- **Stage:** a framed panel holding an activity: the picture on top, a bar with the prompt and stars, then big round answer buttons or a palette of round swatches.
- **Book:** a framed reader, picture on the left and large text on the right (stacked on phones), round orange arrows and page dots underneath.
- **Class card:** a round icon in the class colour, name, one line, ages and length with icons, a price and a small Book button.
- **Timetable row:** time and day, class name with a colour dot, ages and room, places left (red when full) and a Book or Waitlist button.
- **Forms:** 54px fields with 16px corners and a 2px mid-grey border, labels in Baloo 2, the error under the field in reserved space, round age buttons, a consent checkbox and a success panel with two friends waving.
- **Footer:** deep ink navy, four friends peeking over its top edge, the wordmark and one line, three link columns and a bottom line.

## Do and don't

- Do give each section its own colour and use it everywhere that section appears. Don't mix two section colours on one canvas or tint the grown-ups pages.
- Do frame every kids' card in white with a corner badge. Don't use bare images, outlines or square corners on the kids' side.
- Do keep the confetti small, sparse and still. Don't animate it, enlarge it or put it behind text-heavy grown-ups pages.
- Do keep labels on fills white and text on canvases ink. Don't put white text on a canvas or coloured text on a fill.
- Do draw original characters from simple shapes. Don't use, trace or imitate any existing puppet, cartoon or mascot, and don't give characters fur, googly eyes or noses.
- Don't put ads, outside links, pop-ups, streaks, timers or "buy" buttons on the kids' pages. Outside links, if any, live on grown-ups pages only.
- Don't use emoji, icon fonts, stock photos of children, uppercase labels or gradients.

## Voice

Two registers on one site. **For children:** very short, warm and playful sentences they can follow when a grown-up reads them out: "Tap a game to play.", "Who is hiding in the shadow?", "Not that one. Look again!". Mistakes are never wrong, only "not that one". Exclamation marks are fine in games and greetings. **For grown-ups:** plain, calm and specific: ages, times, group sizes, what a class practises, what happens on the first visit, what data is kept. No hype, no invented statistics, no em dashes, no lorem ipsum.
