# Style guide: Nintendo style

The look in one sentence: a bright white page with one signal red, a red tab holding the wordmark at the top left, section titles over a short red rule with a small grey label at the right, rounded cards under red platform tabs, and a round red arrow dot on everything you can open.

## Tokens

All values live as CSS custom properties on `:root` (light), on `:root[data-theme="dark"]` and in the `prefers-color-scheme` block of `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | white | warm near-black | the page, cards, buttons that are not red |
| `--surface` / `--surface-2` | soft warm grey / one step darker | one and two steps above the background | tiles band, newsletter, notices, feature boxes / chips, image wells, round icon buttons |
| `--text` / `--text-muted` | warm graphite / mid grey | warm white / light grey | headings and body / dates, labels, captions |
| `--border` / `--border-strong` | light hairline / grey | dark hairline / mid grey | card outlines, section rules / dotted row dividers, field outlines |
| `--accent` / `--accent-text` | the red / white | a slightly deeper red / white | every red fill: brand tab, platform tabs, buttons, date blocks, dots, icon tiles, footer band |
| `--link` | the red | a lighter coral red | red used as text: links, nav icons, hearts, footer links, errors |
| `--ink` / `--ink-text` | graphite / light grey | near black / light grey | the footer base bar |
| `--focus` | the red | the coral red | focus rings |

Red is the only color in the interface. Everything else is white, warm grey and graphite, so the game art carries all the other colors. Two reds exist because white text needs a deep red behind it, and red text on a dark page needs a lighter one: fills always use `--accent`, text always uses `--link`.

Text is never pure black. Headings use the same graphite as body text and get their weight from size and the 800 to 900 font weight.

## Typography

- **Nunito** for everything: a rounded sans with a variable weight axis from 200 to 1000. The round terminals make the whole page feel friendly and toy-like without a novelty font.
- Body 16px at weight 500, line height 1.65. Weight 400 looks thin on white; do not use it.
- Headings 800; the brand tab, prices, spotlight titles and the 404 headline 900. Letter-spacing is normal except a slight negative on the H1 and display.
- Small labels (platform tabs, section labels, months, legends): 11 to 14px, weight 800 to 900, uppercase, 0.06 to 0.14em tracking.
- Dates are numeric with dots, `2027.03.14`, in tabular figures, everywhere: cards, rows, article meta. Write long dates ("8 and 9 May") only inside sentences.
- One display headline per site at most (the 404). Page titles are H1 at 28 to 42px, section titles H2 at 24 to 32px: the style is calm and organised, not loud.

## Spacing, layout and radius

- Page width 1200px plus a fluid 16 to 40px gutter (`.wrap`). The header is full width with the brand tab flush to the left edge of the window.
- Sections are separated by 48 to 88px of space and by their section heads, never by background bands, except the soft grey tiles band at the end of the home page and the red footer band.
- Grids: four columns for news, features and games on desktop, two on tablets; news becomes a one-column list with small thumbnails on phones, games stay two across.
- Radius: 999px for buttons, chips and the dock; 14px for cards; 10px for images inside cards; 12px for icon tiles and date blocks; 18px for the spotlight and gallery frames. Nothing is square-cornered except chips inside rows (4px).
- Shadows only on hover (cards lift 4px with a soft shadow) and on floating things (the phone dock, the menu sheet).

## Signature elements

Keep at least five on the home page, and the section head, the dot and the footer on every page.

1. **The red brand tab.** The header starts with a solid red block, flush to the left edge and the full height of the header, holding a small white mark and the wordmark in Nunito 900. On phones the whole header turns red.
2. **Section heads with a short red rule.** Title on the left, a 3px red rule under the title only (a little longer than the text) sitting on a 2px grey hairline that runs the full width, and a small uppercase grey label at the right ("Topics", "Library", "Calendar"). The label can carry a second language, or a "See all" link in red.
3. **The round red arrow dot.** An 18px red circle with a white chevron, drawn in CSS (`.dot`). It ends every news card, update row, platform link, menu link and FAQ question, and sits inside buttons (white with a red chevron on red buttons). It nudges right on hover.
4. **Red platform tabs.** Every game card wears a red strip across its top edge with the platforms in spaced capitals and a small icon. The card below is white with a hairline border, a square picture, the title, a dotted date, the price in 900 weight, the genre and a red heart.
5. **The text-first news grid.** Four columns of news cards: an optional 16:9 picture, two or three lines of title text, then the date at the bottom left and a red dot at the bottom right, each card closed by a hairline. Half the cards have no picture.
6. **The spotlight.** A wide rounded frame (21:9, 4:3 on phones) with one slide per story, a title and one red button underneath, and a row of square thumbnail tiles with a round red pause button. The current tile lifts and gets a red ring.
7. **Red date blocks and icon tiles.** Events start with a red rounded block (month, big day, weekday); shortcuts and features start with a red rounded square holding a white line icon.
8. **The footer.** A full-width red band with the white mark and wordmark centred, then link columns with grey titles, red links and a thin grey rule on the left of each column, then a graphite base bar with the copyright and legal links.
9. **The phone dock.** Below 960px a white floating pill at the bottom of the screen with five destinations and a big red circle in the middle for the main one (games).

## Components

- **Header:** brand tab, four nav links with a red icon before each, then at the right a round grey "saved" button with a red count, the theme toggle (`#theme-toggle`) and a small red pill button for the one action that matters (here, play-test sign-up). The current nav link gets a 3px red underline.
- **Buttons:** red pill with white text and a white dot (`.btn`); white pill with a grey outline and a red dot (`.btn.ghost`); 48px tall, 40px for `.small`. They press down to 96% on click. Labels never wrap.
- **Pills and chips:** `.pill` is a small rounded tag (red for new, out now, sale or limited; grey otherwise). `.chip` is a squarer grey category label inside rows. Filter chips are outlined pills that fill red when pressed.
- **Feature card:** white card with a 16:9 picture flush at the top, a two-line title, one pill and a small category line with a 2px red bar on its left.
- **Update row:** date in 900 weight, a grey chip, one line of text, a red dot; rows divided by dotted lines.
- **Event row:** red date block, title, a meta line with clock, pin or globe icons, an optional pill, and a ghost button at the right.
- **Game page:** gallery (16:9 frame and thumbnails that swap it), red platform pills, the H1, a short line, facts, edition cards (radio cards whose border turns red), the price in 32px 900, a red "Where to buy" button and a ghost "Save" toggle; then an overview with a facts list, three feature boxes and a where-to-buy list.
- **Forms:** labels in 14px 900 above 50px fields with a 2px grey outline and 12px radius; the focused field gets a red outline and a soft red halo. Required marks are a red asterisk. Checkboxes sit in outlined pills. Errors float under the field in red with a small red "!" disc, so the layout never moves. The success state is a red-outlined card with a red round check.
- **FAQ:** a rounded search field with a red magnifier that filters the questions; questions are rows with a red dot that turns down when open.

## Do and don't

- Do keep the page white and let the art bring color. Don't tint sections, add gradients, or use a second accent color in the interface.
- Do put a red dot on things that open something. Don't use arrows, chevrons alone or "Read more" links instead.
- Do round every corner. Don't use sharp corners, heavy borders or drop shadows at rest.
- Do write dates as `2027.03.14`. Don't mix date formats in cards.
- Do use the section head for every section title. Don't center section titles or use the red rule without the grey hairline under it.
- Don't add emoji, icon fonts, glassmorphism, neon or dark-by-default.

## Voice

Warm, plain and a little playful, written for families: short sentences, concrete facts (dates, prices, places, ages), no hype words ("epic", "insane", "revolutionary") and no exclamation marks in headings. Titles say what it is ("Lantern Lake is out now", "Join a play-test"); labels are one or two words. Speak to players and parents as "you" and to the studio as "we". Say what something costs and who it is for.
