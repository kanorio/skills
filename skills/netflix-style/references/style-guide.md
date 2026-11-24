# Style guide: Netflix style

The look in one sentence: a warm near-black stage where the artwork does the talking, a tilted wall of posters behind one huge centered headline, an email field beside a red button, a glowing red arc that opens into rows of titles, and condensed capital title treatments over every picture.

## Tokens

All values live as CSS custom properties on `:root` (dark, the default) and `:root[data-theme="light"]` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | warm near-black | warm off-white | the page, the fill of the rank numbers, the inside of the arc |
| `--surface` | one step up | white | the title detail panel, desks, plan cards, the menu |
| `--surface-2` / `--surface-3` | two and three steps up | light greys | FAQ bars, the current episode row, ghost buttons / hover on them |
| `--text` / `--text-muted` | near-white / warm grey | near-black / mid grey | titles and body / meta lines, nav, footer links |
| `--border` / `--border-strong` | dark hairline / grey | light hairline / grey | row dividers / field outlines, chips |
| `--accent` / `--accent-hover` / `--accent-text` | the red / a deeper red / white | the same | joining, signing in, sending, progress bars, check marks, the rim of the arc |
| `--accent-ink` | a lighter red | a deeper red | red used as text: "New", "Season 2 out now", "Explore all", desk emails, pillar numbers |
| `--rim-mid`, `--glow` | pink-red / wine haze | pink-red / blush haze | the bright middle of the arc and the haze under it |
| `--feat-a`, `--feat-b` | oxblood to ink | blush to lilac | the gradient of the feature cards |
| `--invert` / `--invert-text` | white / near-black | near-black / white | the Play button and toasts |
| `--glass` / `--glass-text` | translucent grey / white | translucent white / near-black | "More info" and secondary buttons over artwork |
| `--veil`, `--veil-core`, `--fade`, `--head-fade` | near-black at 50 to 90% | off-white at 55 to 92% | the poster wall veil, the billboard side fade, the header fade |
| `--white` | white | white | text and outlines that sit on artwork in both themes (tile titles, round tile buttons) |
| `--danger`, `--ok` | coral / green | deep red / deep green | form errors / the success tick |

The interface is neutral and warm; the artwork brings every other color. There is exactly one red. It means "start": the join button, sign in, send, progress, and the rim of the arc. Red text uses `--accent-ink`, never `--accent`, so it stays readable on both backgrounds. White text on the red is 5.4:1.

## Typography

- **DM Sans** for the interface: a geometric sans with a variable weight axis. Headlines at 800 to 900, labels at 600 to 700, body at 400.
- **League Gothic** for title treatments and rank numbers only: tall, condensed capitals that read like a poster. Never for sentences, buttons or nav.
- Hero headline (`.display`): 36 to 68px, 900, line height 1.04, letter-spacing -0.025em, centered, at most 15 characters per line.
- Page titles (`.h1`) 32 to 52px at 800; section titles (`.h2`) 20 to 28px at 700; row titles 17 to 22px at 700. Section titles stay small: the pictures are the headline.
- Title treatments (`.tt`): uppercase League Gothic with 0.02em tracking and 0.92 line height. Billboard 60 to 136px, detail 44 to 84px, tiles 20 to 28px with a soft text shadow.
- Kind labels (`.kind`): the small red mark followed by 13px uppercase letters at 700 with 0.16em tracking ("SERIES", "MEMBERSHIP").
- Rank numbers (`.rank`): League Gothic at 100 to 190px, filled with the page color and outlined with a 2px stroke in `--text-muted`, sitting behind the left edge of the poster.

## Layout, spacing and radius

- **Two widths.** Marketing and content pages use a centered 1180px column (`.wrap`). The browse page, rows and billboard run edge to edge with a fluid 16 to 60px gutter (`--gutter`), and rows bleed off the right edge so a partial tile hints at more.
- **The header** is fixed and transparent over pictures, with a soft fade from the top; it turns solid once the page scrolls or on views without a picture on top (`data-overlay` marks the views that start with a picture).
- **Rows** show 6 tiles at 1400px and wider, 5 down to 1100, 4 down to 800, 3 down to 500 and 2.3 below, with an 8px gap. Rows scroll sideways inside themselves; arrow bars fill the gutter on hover.
- **Rhythm.** Sections are 24 to 44px apart. The landing page uses generous space; the browse page is dense, with rows 14 to 36px apart.
- **Radius.** 4px for buttons, fields and chips; 6px for tiles and posters; 4px for episode thumbnails; 8px for the detail panel, desks and the sign-in card; 16px for feature cards and plan cards. Round buttons on tiles are circles. Nothing is a pill.
- **Shadows** only on things that float: posters (`--shadow-card`), a hovered tile, the dialog and the menu (`--shadow-overlay`).

## Signature elements

Keep at least five on the home page and the arc, the red and the title treatments everywhere.

1. **The poster wall.** A grid of artwork tilted in 3D (`perspective`, `rotateX`, `rotateY`, `rotateZ`) and bled past every edge, under a veil that darkens toward the center and fades into the page at the bottom. The sign-in page reuses it.
2. **One huge centered headline with an email start.** A two-line headline, one bold supporting line, a short prompt, then an email field with a floating label and a big red button with a chevron, side by side on wide screens and stacked on phones. The same form returns above the footer.
3. **The glowing arc.** Under the hero, a wide ellipse whose top edge is a 4px rim fading from transparent through red and pink and back, with a haze of `--glow` underneath. It is the transition from picture to page.
4. **Numbered posters.** A row of tall posters, each with an enormous outlined League Gothic number behind its left edge ("Most watched this week").
5. **Title treatments.** Every tile, poster, billboard and detail carries its title in condensed capitals over a dark gradient, so the artwork itself can stay free of text.
6. **The billboard.** On the browse page, a full-bleed picture with a side fade, a kind label, a giant title treatment, one red line of news, a three-line blurb, a white Play button and a glass "More info" button, and a rating tag flush with the right edge.
7. **Rows that open up.** Tiles grow 8% on hover or focus, lift their title and reveal round buttons (play, add to My list, more info). Row titles reveal "Explore all" with a chevron on hover.
8. **The title detail.** A panel with the artwork on top fading into the surface, the title treatment, Play or Resume and a round add button, a meta line ("New", year, count, rating badge, HD), a blurb with a credits column, a numbered episode list with zoomed thumbnails and a season picker, and "More like this". It opens as a dialog over any page and also stands as its own page.
9. **Feature cards and flat FAQ bars.** Four gradient cards with a glowing red icon disc in the corner; FAQ questions as flat grey bars with a large text size and a thin plus that turns into a cross.

## Components

- **Header:** mark and wordmark, nav links in muted text (current one bold), then a search icon that expands into a field, the theme toggle (`#theme-toggle`) and a small red "Sign in". Below 1100px the nav collapses into a "Browse" button with a dropdown menu; below 560px the wordmark and search hide.
- **Buttons:** red (`.btn`, 44px), big red with chevron (`.btn.big`, 56px, 18 to 24px text), white Play (`.btn.play`, with a filled triangle), glass (`.btn.glass`), ghost (`.btn.ghost`), small (`.btn.small`). Round buttons (`.round`, 40px or 32px on tiles) with a white outline over art, or `.round.on-surface` on panels; `.round.fill` is the white play circle.
- **Fields:** 56px tall, 4px radius, 1px outline in `--border-strong`, the label inside the field that floats up and shrinks when the field has focus or a value. Errors float under the field with a round "!" and never move anything.
- **Chips:** 4px-radius outlined buttons that fill with the text color when pressed. Dropdowns (`.pick`) are boxes with a white outline and a chevron, like a menu on a set-top box.
- **Tiles:** 16:9 artwork with the title treatment, an optional red progress bar along the bottom, and the hover buttons. In the catalog grid a meta line sits under each tile ("**Series** · 2 seasons · 2026").
- **Episode rows:** number, 16:9 thumbnail zoomed into a different part of the artwork, title and length on one line, a one-line description under it; the first row has a raised background.
- **Plan cards:** a gradient top (from charcoal to red to amber as plans grow) with name and resolution, then rows of label and value; the chosen card gets a white outline and a check.
- **Dialog:** 980px wide, 8px radius, scrolls inside itself, closes with the round close button, Escape or a click outside.
- **Toasts:** an inverted box at the bottom center for "Added to My list".

## Do and don't

- Do let the artwork carry the color and keep the interface neutral. Don't tint backgrounds, headers or cards with brand colors.
- Do keep the red for starting things. Don't use it for headings, icons, borders or decoration (the arc rim and the feature icon discs are the only decorative red).
- Do put titles on pictures as condensed capitals. Don't use the condensed face for anything that is read as a sentence.
- Do keep rows full and moving sideways. Don't stack rows of two or three tiles; merge them into a grid.
- Do keep the light theme complete, with the same structure. Don't ship pill buttons, glassy panels everywhere, emoji, icon fonts or a light-by-default theme.

## Voice

Short, direct and inviting, in the second person. Verbs first on buttons ("Start watching", "Play", "Pick a plan"). Headlines promise one plain thing ("Watch how it's made. Then make it yourself."). Blurbs set a scene in one or two sentences and stop. No hype words, no exclamation marks, no countdowns or fake scarcity, and no numbers that are not real.
