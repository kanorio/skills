# Style guide: Spotify style

The look in one sentence: a black frame holding rounded near-black panels, square cover art in rails and grids, one green that only means "play" or "go", pill and round controls, and heavy, tightly tracked headlines over pages tinted by their artwork.

## Tokens

All values live as CSS custom properties on `:root` (dark, the default) and `:root[data-theme="light"]` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | black | light grey | the frame around the panels, the header, the player bar, the menu sheet |
| `--surface` | near-black | white | the rounded panels: library sidebar and main |
| `--surface-2` | one step up | off-white | hover on cards and rows, boxes, plan cards, the search field |
| `--surface-3` / `--surface-4` | two and three steps up | light greys | chips, round buttons, date blocks / chip hover, the empty part of progress bars |
| `--text` / `--text-muted` | white / light grey | near-black / mid grey | titles and body / meta lines, captions, inactive nav |
| `--border` / `--border-strong` | dark hairline / grey | light hairline / grey | row dividers / outlined pills and form fields |
| `--accent` / `--accent-text` | the green / black | the same | play buttons, primary pills, checked choices |
| `--link` | the green | a darker green | green used as text: "New episode", the current track, links in desks, perk icons |
| `--invert` / `--invert-text` | white / black | near-black / white | secondary pills (`.btn.light`), the small play buttons on rows, toasts |
| `--danger` | soft red | deep red | form errors only |
| `--tint-mix`, `--tint-mix-2`, `--tint-mix-3` | 80 / 42 / 26% | 34 / 16 / 10% | how much artwork color tinted page tops and washes take |

The interface is achromatic. Color comes from the artwork: every cover owns one tint (`--tint` on the view or card, an `oklch()` value close to the cover's main color), and tinted page tops, the release card, the home wash and the browse tiles use it. The green never decorates: it marks what plays or what you should press next. Green text on light backgrounds uses `--link`, never `--accent`.

## Typography

- **Figtree** for everything: a geometric sans with a variable weight axis from 300 to 900. Round, friendly letters that stay crisp at 12px and hold together at 100px.
- Body 16px at 400, line height 1.5. Meta lines and captions 13 to 14px in `--text-muted`.
- UI labels (buttons, chips, nav, card titles) 600 to 700, sentence case, no letter-spacing. No uppercase except the month in date blocks.
- Display (`.display`, home and membership) 900, letter-spacing -0.05em, line height 0.9. Page titles (`.h1`) 900, -0.045em, 0.95. They are meant to feel heavy and packed; one per view.
- Section titles (`.h2`) are small for such a loud style: 24px at 800. The size contrast between a 90px title and 24px section heads is part of the look.
- Durations, times and track numbers use tabular figures.

## Layout, spacing and radius

- **The shell.** The header sits on the black frame. Below it, at 1100px and wider, a 292px library panel and the main panel sit side by side with an 8px gap and 8px frame around them. Below 1100px the library panel is gone; below 768px the frame disappears and the main panel runs edge to edge, like an app.
- Inside the panel, content uses a fluid 16 to 32px gutter (`.wrap`) and no max width: rails and grids fill the panel.
- Sections are tight: 20px of padding top and bottom and a section head (title left, "Show all" right). Density is the point; the dark panel gives the eye its rest.
- Rails show five cards on desktop, four on laptops, three on tablets and a little over two on phones, and scroll sideways inside themselves. Grids use `auto-fill` columns of at least 176px.
- Radius: 999px for buttons, chips, search and pills; 50% for round buttons, play buttons and people; 10px for panels and the player bar; 8px for cards, tiles, boxes and rows; 6px for covers; 16px for the big color blocks. Nothing is square.
- Shadows are heavy because they sit on black: covers carry `--shadow-card`, big covers, the disc, the player and menus carry `--shadow-overlay`. Cards themselves have no shadow, only a hover fill.

## Signature elements

Keep at least six on the home page, and the shell, the green play button and the footer band on every page.

1. **The app shell.** Black frame, rounded near-black panels, a library sidebar with filter chips and a list of covers, and a header with the mark, a round home button and a pill search field ("What do you want to hear?").
2. **Cover cards with the rising play button.** A square cover with a heavy shadow, a bold title, a muted line under it. On hover the card fills with `--surface-2` and a round green play button rises into the cover's bottom-right corner. People get the same card with a round portrait.
3. **Tinted page tops.** Show, episode and release pages open with a band in the artwork's tint fading into the panel: a big cover with a heavy shadow, a small kind label ("Podcast", "Album"), an enormous heavy title and a meta line with a round avatar and bullet separators. The action row below holds a big green play button, an outlined pill and round icon buttons.
4. **The shortcut grid and the wash.** Under the home hero, six compact cards with the cover flush left. Hovering one recolors the gradient wash at the top of the home page to that item's tint.
5. **Browse tiles.** Saturated color blocks with a bold title at the top left and a small cover tilted 25 degrees and cut off at the bottom-right corner.
6. **Lists that play.** Track rows (number, title and artist, duration) where the number turns into a play triangle on hover and into green equalizer bars when the track plays; episode rows with a cover, title, two-line description, a white round play button, date and length, and a progress bar for episodes already started.
7. **The player bar.** It appears the first time something plays: cover and title at the left, back 15, play or pause and forward 15 above a thin progress bar in the middle, speed and close at the right. On phones it becomes a compact bar above the tab bar with a hairline of progress.
8. **One green.** Green fills only play buttons and the main action; the rest of the buttons are white pills (`.btn.light`) or outlined pills.
9. **Color blocks and the gradient band.** Membership extras are big saturated blocks (blue, orange) with tilted covers and white text; a magenta-to-blue band with one white pill sits above the footer of every page that is not about membership.

## Components

- **Header:** mark and wordmark, round home button, search pill with a browse icon at its right end, nav links in bold grey that turn white when current, a thin divider, the theme toggle (`#theme-toggle`, round) and a white "Join free" pill. Below 960px the nav moves to a bottom tab bar and a full-screen menu sheet; below 768px the search field becomes a round search button.
- **Buttons:** green pill (`.btn`, 48px, 32px side padding); white pill (`.btn.light`); outlined pill (`.btn.outline`); `.small` is 44px. Pills grow to 104% on hover and press to 97%. Round buttons (`.round`, 48px) and ghost round buttons for icons; green play buttons (`.fab`, 48 or 56px) with the triangle drawn in CSS so it can turn into pause bars; white round play buttons on rows (`.play-sm`).
- **Chips:** grey pills that turn white with dark text when pressed (`aria-pressed`). Used for kind filters, order, library filters and tags.
- **Pills:** small status labels on events: grey for prices, green-tinted for free or RSVP.
- **Date blocks:** a rounded grey square with the month in small capitals and the day in 800 weight.
- **Plan cards:** a colored top with the plan name and price in black, a list with check marks, a pill in the plan's color and a line of fine print. Plan colors are pastel so black text works on them in both themes.
- **Forms:** bold 14px labels above 48px fields with a 1px grey inset outline and 4px radius; hover turns the outline to the text color, focus makes it 3px. Errors float under the field in `--danger` with a small round "!" and never move the layout. Choice cards and check pills get a 2px green outline when selected. The success state is a box with a green round check.
- **Toasts:** an inverted rounded box at the bottom center for "Following", "Saved" and "Feed link copied".

## Do and don't

- Do let the covers bring the color, and tint pages with their artwork. Don't color the interface itself: no colored section backgrounds except the tinted tops, tiles, color blocks and the gradient band.
- Do keep green for play and the next action. Don't use green for headings, icons in nav, borders or decoration.
- Do make every control a pill or a circle. Don't use square buttons or sharp corners.
- Do write titles heavy and tight. Don't add letter-spacing or uppercase to titles, and don't use more than one display or H1 per view.
- Do keep rows and rails dense. Don't spread sections apart with big empty bands.
- Don't add gradients to buttons, glassmorphism on panels, emoji, icon fonts or a light-by-default theme.

## Voice

Warm, plain and close to the listener: short sentences, second person, verbs first ("Start listening", "Show all", "Become a member"). Say what something is, when it comes out and how long it lasts. Titles of shows and episodes carry the personality; the interface around them stays quiet. No hype words, no exclamation marks, no fake urgency.
