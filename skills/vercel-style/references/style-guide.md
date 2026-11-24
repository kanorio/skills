# Style guide: Vercel style

The look in one sentence: a white page that turns pure black in dark mode, oversized tight headlines, black buttons, monospace labels, joined hairline grids, and the product's own interface as the only picture.

## Tokens

Every color is one custom property on `:root` written as `light-dark(<light>, <dark>)` in `assets/template.html`. The page follows the system setting; the toggle pins a theme by setting `data-theme="light"` or `"dark"` on `<html>`, which only changes `color-scheme`. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--bg-subtle` | white / a breath of gray | pure black / near-black | page / code blocks, table heads, inactive plans, inputs in docs |
| `--surface` / `--surface-2` / `--surface-3` | white / two light grays | three steps up from black | windows and cards / hover and selected rows / meters and tracks |
| `--text` | near-black | near-white | headlines, labels that matter, icons |
| `--text-body` / `--text-muted` / `--text-faint` | three grays | three light grays | long reading / leads and descriptions / monospace labels and timestamps |
| `--border` / `--border-strong` | hairline gray / stronger | dark gray / lighter | every edge, rule and cell / inputs and secondary buttons |
| `--accent` / `--accent-hover` / `--accent-text` | black / graphite / white | white / light gray / black | the primary button, the selected filter, solid badges |
| `--link` / `--focus` | blue | lighter blue | links inside prose, focus rings. Never a button or a fill. |
| `--success` / `--warning` / `--danger` | green / amber / red | lighter versions | status dots, failed runs, form errors |
| `--pass` | ink at 16% | white at 20% | passing runs in history strips |
| `--syn-key` / `--syn-str` / `--syn-fn` | magenta / green / blue | lighter versions | code tokens; comments use `--text-faint` |
| `--m1` to `--m4` | blue, cyan, violet, peach | deeper versions | the mesh pane only |
| `--mesh-line` | white at 32% | white at 14% | the grid drawn over the mesh |

The style is almost colorless. Black and white do the work; blue appears only as links and focus; status colors appear only as small dots and failed-run marks; the four mesh colors appear in one pane per page and nowhere else.

## Typography

- **Instrument Sans** (variable, 400 to 700) for everything readable. **Fragment Mono** (400) for eyebrows, labels in tables, timestamps, versions, code, keyboard keys and figures inside product screens.
- Display: weight 600, letter-spacing -0.05em, line-height 0.98. Once per page, on home.
- H1: 600, -0.045em, line-height 1.02. H2: 600, -0.038em. H3: 600 at 18px, -0.015em.
- Body 16px at 400, line-height 1.6; docs and articles use `--text-body` at line-height 1.7. Leads are 17 to 20px in `--text-muted`.
- **Eyebrows** (`.eyebrow`) sit above every section and page head: Fragment Mono 13px, sentence case, muted. On home they carry an index: `01 <b>Features</b>`, where the number stays muted and the word turns to the text color. No uppercase anywhere.
- Headlines are short claims that end with a period: "Ship on green, not on retries." Page-head H1s run to two lines at most.

## Spacing, layout and radius

- Page width 1200px, gutters 16 to 32px. Sections are 64 to 120px tall and separated by a full-width hairline (`.line`), never by background color bands.
- Home hero: headline on the left, lead, buttons and the install command on the right, both aligned to the bottom; the product window spans the full width below and fades into the page.
- Radius is tight: 6px for buttons, inputs, chips and filters; 8px for cards, code blocks and small tables; 10px for windows and form cards. Pills (the announcement link) are the only fully round shape.
- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 120px.

## Surfaces and depth

- Flat. Borders carry the structure, not shadows. Cards and cells have a 1px `--border` and no shadow.
- Only the product window and form cards get `--shadow-overlay`, a soft drop that disappears in dark mode, where borders alone separate black from near-black.
- No gradients inside components, no glows, no blur except the translucent sticky header.

## Signature elements

Keep at least four on the home page.

1. **Joined hairline cells with crosshairs.** Features, steps, numbers, plans, logos, blog cards and the closing call to action sit in grids that share their borders (`.cells` with `.c2` to `.c6`), with a small `+` crosshair at the top-left and bottom-right corners (`.cross`). No gaps, no shadows, no rounded grid corners.
2. **The product as the picture.** The home hero is a full-width window of the product's real screen drawn in HTML: a path bar in monospace, a sidebar, KPI cells and a table, fading out at the bottom edge (`.fade`). Smaller interface snippets (history strips, a bot comment, shard bars, a stack trace, an owners list) are the vignettes in the feature cells.
3. **Black buttons.** The primary button is solid black on light and solid white on dark, 40px tall with 6px corners; the secondary is the surface color with a strong hairline.
4. **Monospace details.** Eyebrows, table heads, timestamps, versions, badges, the install command with a blinking block cursor, and the copy buttons.
5. **Oversized tight headlines.** Weight 600 with letter-spacing near -0.05em, in solid text color. No gradient text, no two-tone headlines, no italics.
6. **One mesh pane.** A single rectangle of soft blue, cyan, violet and peach with a white grid drawn over it, used once per view at most (the template uses it only in the closing call to action on home), with a small product card floating on it.

## Components

- **Header:** sticky, translucent white or black, a hairline after scrolling. Brand mark and name, five small muted links, the theme toggle, a secondary "Book a demo" and the primary "Start free". The links move into a right-side sheet under 860px; the header never wraps at 1440, 1024 or 768.
- **Announcement pill:** a round outline link with a solid `New` badge and an arrow.
- **Install command:** a 44px mono box with a `$` prompt, the command, a blinking block cursor and a copy button.
- **Product window:** `.window` with `.window-bar` (mark, path segments separated by faint slashes, status chips on the right) and `.app` (sidebar, title row, `.kpis`, `.table` of `.tr` rows). Status chips (`.st`) are mono with a colored dot. History strips (`.strip`) are built from a string of `p` and `f`.
- **Feature cell:** an 18px line icon, an H3, one muted sentence and a vignette pinned to the bottom.
- **Code block:** a subtle gray panel with a bar of mono tabs or a file name and a copy button; tokens in magenta, green and blue, comments faint.
- **Stats:** large 600-weight figures with tabular numbers and a short muted caption, in joined cells.
- **Quote:** large 500-weight text, left aligned, an initials avatar, name and role.
- **Pricing:** a segmented billing switch, plans in joined cells (inactive plans on `--bg-subtle`, the featured plan on the surface with a 2px black top edge and a badge), an estimator with two sliders and a breakdown, a comparison table and an FAQ.
- **Docs:** a three-column layout: a sidebar with a search field (`/` focuses it) and grouped links, the article with breadcrumbs, code blocks, a note, a reference table, a pager and a feedback row, and an "On this page" list. On phones the sidebar becomes a collapsed "Documentation menu".
- **Changelog:** filter buttons with a live count; each entry has a sticky mono date, badges for the kind and version, a title, a note and an optional code block or snippet.
- **Blog:** a featured post in a two-cell row, filters, and cards in joined cells; covers are a fine grid with one mono figure or phrase.
- **Forms:** inside a white card with the overlay shadow; labels above fields; errors in a reserved line under each field so nothing moves; a success panel replaces the form.

## Do and don't

- Do let white space and hairlines do the layout. Don't add colored section backgrounds, cards with shadows or decorative illustrations.
- Do show the product. Don't use stock photos, 3D objects, isometric art or device mockups.
- Do keep color in its three places: status dots, code tokens, the single mesh pane. Don't color buttons, headlines or icons.
- Do use monospace for anything a machine would print. Don't set paragraphs or headlines in monospace.
- Don't use emoji, gradient text, glows, glassmorphism on content, or bouncy motion.

## Voice

Plain, technical and exact. Lead with the outcome in a short sentence, then the mechanism ("Test files are balanced across runners by their real durations, so every shard finishes within seconds of the others"). Numbers carry units and are real or clearly marked as drafts. Commands and paths are written exactly as a developer would type them. No exclamation marks, no em dashes in sentences, no "revolutionary", "blazing fast" or "next-gen", no lorem ipsum.
