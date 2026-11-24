# Style guide

The look in one sentence: a busy game-show palette on light grey, with a floating purple console bar of coloured mode buttons, pastel gradient cards with dark folder tabs hanging from their corners, a headline with one word in a sunset gradient, a carousel of saturated tiles that fade toward the bottom, slanted colour cards for stories, compact heavy buttons with a pressable bottom edge, and a charcoal footer.

The page is loud on purpose, but it is loud in an organised way: every colour belongs to a job. Five mode colours mark the five things the site does, four answer colours belong to questions, gradients belong to cards and tiles, and the text and canvas stay grey and white so all of that reads as play rather than noise.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, written as `light-dark(light, dark)`, and as data in `tokens.json`. Change them there, never inline. Light is the default and follows the system setting until the toggle is used; `<html data-theme="light|dark">` pins one.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | light grey with a violet hint | near-black aubergine | the canvas behind cards; the hero fades from it to white |
| `--surface`, `--surface-2` | white, off-white | deep violet greys | cards, the link bar, the lower half of home, leaderboard rows |
| `--text`, `--text-muted` | charcoal, mid grey | near-white, soft lilac grey | all text; colour never carries body copy |
| `--border`, `--border-strong` | pale and mid grey | violet greys | the link bar line, chips, fields, outline buttons |
| `--accent` / `--accent-text` | grape purple / white | light lilac / deep purple | solid buttons, pressed chips, eyebrows, folder tabs on detail heads |
| `--console` | deep purple | deeper purple | the console bar, the quiz header, the table head, the "next" bar, avatars by default |
| `--go` | green | the same | the main action on every page ("Book a table", "Find a night") |
| `--m-green`, `--m-gold`, `--m-blue`, `--m-red`, `--m-violet` | five saturated mode colours | the same | the console buttons, slanted cards, side rules, small icon chips |
| `--a-1` to `--a-4` | violet, teal, orange, pink | the same | answer tiles and numbered steps only |
| `--pc-*-a`, `--pc-*-b` | pastel pairs (lilac to mint, rose to sky, mint to butter) and one deep blue pair | deep jewel pairs | gradient cards |
| `--tab`, `--tab-text` | deep purple, white | pale lilac, deep purple | folder tabs (white on the deep blue card and on detail heads) |
| `--pop-a`, `--pop-b`, `--pop-c` | orange, magenta, violet | lighter versions | the gradient word |
| `--link` | blue | light blue | the outline button in the link bar, small notes under prices, the current link pill |
| `--foot` | charcoal | near-black | the footer in both themes |
| `--ok`, `--error`, `--focus` | green, red, violet | lighter versions | success, field errors, focus rings |
| `--press` | an inset 3px shadow at the bottom | the same | the pressable edge on buttons, mode buttons, chips and date blocks |

Items that carry their own hue (tiles, nights, tracks, avatars, detail heads) set one number, `--h`, and the CSS builds the colour from it with `oklch()`. Pick hues where white text stays readable: 300 violet, 280 indigo, 262 blue, 196 teal, 150 green, 48 orange, 22 red, 350 pink. Avoid yellow and cyan for anything with white text.

## Typography

- One family: **Red Hat Display**, variable, weights 300 to 900, Latin subset.
- Display, `--fs-display` (40 to 68px), weight 900, letter-spacing -0.03em, line-height 1.02: the home headline only.
- H1, `--fs-h1` (34 to 52px), weight 900, -0.028em: page heads, detail heads, the 404 line.
- H2, `--fs-h2` (26 to 38px), weight 850: section headlines, often centred over a one-line grey lede.
- H3, `--fs-h3` (19 to 22px), weight 800: card titles, form card titles, feature titles.
- Product names in gradient cards (`.pname`) are 30 to 40px at 900 with -0.04em, followed by a small filled badge (`.badge`) in the same line.
- Body 17px at weight 450, line-height 1.55; ledes 17 to 21px in grey; small text 14px.
- Labels and eyebrows: 12 to 13px, weight 800, tracked capitals (0.06 to 0.08em). Folder tabs use the same treatment.
- Buttons, links in bars and chips are weight 750 to 800. Nothing is italic.

## The gradient word (signature)

One word or short phrase per page is filled with the orange to magenta to violet gradient, always at the end of the headline it belongs to: "Turn any room into a **quiz show!**", "Find a **quiz night**".

```html
<h1 class="display">Turn any room into a <span class="pop">quiz show!</span></h1>
```

- Use it in the home headline, page heads and the closing band. Never on body text, buttons or more than one phrase per heading.
- It is the only place an exclamation mark is allowed, and only once on the home page.

## Layout and spacing

- **Width:** content spans 1320px with a 16 to 32px gutter (`--gutter`); the tile carousel runs to the right edge.
- **Sections:** 64 to 112px apart (`--sec`), headlines 24 to 48px above their content. Home sections that introduce a format (tiles, the warm-up round, features) centre their headline and lede; list sections put the headline left with a "See all" link on the right (`.sec-row`).
- **Canvas:** the grey canvas sits behind list pages so white cards stand out. On home, the promo strip and the hero sit on grey and fade to white; the sections below are white.
- **Card grids:** three gradient cards in a row on desktop (one column under 1024px, at most 640px wide); night cards fill columns of at least 380px; track cards at least 300px; slanted cards in threes (two on tablets, one on phones).
- **Radii:** 6px on buttons, chips, fields and mode buttons; 10px on tiles, date blocks and the promo strip; 12px on picture frames; 16px on the console bar, night cards and panels; 24px on gradient cards, track cards, form cards and detail heads; 4px on slanted cards (they read as paper).

## Surfaces and depth

- Gradient cards, form cards, night and track cards carry a soft violet shadow (`--shadow-card`); the round carousel arrows carry a stronger one (`--shadow-overlay`).
- Every coloured control has a pressable edge: an inset 3px darker band at the bottom (`--press`). Pressed, it shrinks to 1px and the control drops 2px.
- Slanted cards and the footer are flat. Dark mode keeps the structure and loses most shadows; the console, mode colours and slanted cards stay saturated.

## Signature elements

Every page keeps the first two; the home page shows all six.

1. **The console bar** (`.console`): a rounded deep-purple bar floating 10 to 12px inside the window, holding the wordmark with a short tagline, five mode buttons (`.mode`) in five colours each with a darker icon chip (`.mi`), a white search field and the green main action. Under 1024px the mode buttons become icon tiles with labels below; under 768px they move to a second row across the full width. A plain white link bar (`.subbar`) sits under it with secondary links, an outline button and the theme toggle; the current link is a filled blue pill.
2. **Gradient cards with folder tabs** (`.pcard` with `.pc-lilac`, `.pc-rose`, `.pc-mint` or `.pc-deep`, and `.tab`): a 24px-radius card in a two-colour pastel gradient (or the deep blue one, at most one per row), centred text, a tracked-capitals tab hanging from the top-right corner, a big product name with a filled badge, a bold tagline, a grey line, a price with a small blue note, a green button beside a text link, and a picture in a white-edged frame cut off by the card's bottom edge.
3. **The gradient word** (above).
4. **The tile carousel** (`.rail`, `.tile`): 4:5 tiles whose colour runs from saturated at the top to pale at the bottom (deep in dark), a white title and line at the top, a large white line drawing in the bottom-right corner and a few dots; round white arrow buttons sit over both ends and hide at the ends.
5. **Slanted colour cards** (`.scard`, `.feature`): a picture on top, then a full-colour panel whose top edge tilts, with a ringed initials avatar, a white title, a short excerpt, an underlined "Read more", and a white tab with a tilted top edge at the foot naming the topic in the card's colour.
6. **Answer tiles and a live leaderboard** (`.answers`, `.ans`, `.board`): four tall buttons in the four answer colours, each with a white letter disc (A to D, never shapes), a countdown bar in the sunset gradient, and a ranked list that re-sorts after every answer.

## Components

- **Mode button:** 44px tall, coloured, white 15px label at 800, a 34px icon chip in a darker shade of the same colour, the pressable edge; it lifts 2px on hover. The current mode gets a white ring.
- **Buttons:** `.btn-go` (green, the main action), `.btn-solid` (purple), `.btn-line` (outline), `.btn-light` (white, on dark or saturated backgrounds), `.btn-ghost` (blue outline, compact, for the link bar). One green button per group; pair it with a `.tlink` (bold text with a chevron).
- **Badge:** a filled box at about half the product-name size, 900 weight, purple (white on the deep card).
- **Folder tab:** `.tab` on any card with `position: relative`; `.tab-inline` for the same label inside text (article topic).
- **Promo strip:** ink to purple gradient, a gold icon tile, an uppercase bold line, a white button and a close button; faint question marks drift behind it. It remembers being closed.
- **Night card:** white, a coloured date block (weekday, big day, month), kind label, title, venue and time, price and a blue availability note on the right.
- **Track card:** a gradient head in the track's hue with a white folder tab and a big line drawing, then title, line, schedule and price.
- **Detail head** (`.dhead`): a gradient block in the item's hue with a white folder tab, a white H1, icon facts in a row and a giant faint question mark in the corner.
- **Steps** (`.steps`): white rows with a numbered square that cycles through the four answer colours.
- **Chips:** 40px outline boxes with 6px corners; pressed is purple. Search fields sit beside them; a grey count on the right.
- **Leaderboard row:** grey row, numbered disc (gold for first), name, score in tabular figures; the visitor's row is tinted green with a green left edge.
- **Forms:** labels above 48px fields with a 2px border, violet focus ring, red border when invalid. Errors sit in a reserved line under each field. Success replaces the form with a green-tinted panel, a round check and the email echoed.
- **Footer:** charcoal, four columns of plain links under bold titles, then the wordmark and a copyright line.

## Do and don't

- Do give every colour a job (a mode, an answer, a card, a topic). Don't colour body text or paint whole sections in saturated colour.
- Do keep the console bar and its five colours on every page. Don't add a sixth mode; secondary links go in the white bar.
- Do use letters on answer tiles. Don't use shape icons (triangles, diamonds, circles, squares) as answer markers.
- Do keep one deep card at most per row of gradient cards. Don't put gradients behind text-heavy sections.
- Do keep buttons compact with small corners and the pressable edge. Don't use pill buttons or ghost buttons for the main action.
- Don't use emoji, icon fonts, mascots copied from games, or stock 3D renders.

## Voice

Upbeat, quick and inclusive, like a good quiz host warming up a room. Short headlines with one playful turn ("Revision that feels like game night", "Quizzes for teams that actually show up"), plain sentences underneath, real numbers and prices. Buttons are verbs of two or three words ("Book a table", "Find a night", "Check a date"). One exclamation mark on the home page at most; no "ultimate", "revolutionary", "unleash" or "supercharge".
