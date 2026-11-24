# Style guide: YouTube style

The look in one sentence: a plain white app shell (a top bar with a centred pill search and a left icon sidebar) around shelves of rounded 16:9 thumbnails, each with a dark duration badge, a two-line title and a grey stats line, plus a row of tall 9:16 clips (short vertical videos), with near-black pill buttons and one red reserved for progress, live and the brand mark.

## Tokens

All values live as CSS custom properties on `:root` (light), on `:root[data-theme="dark"]` and in the `prefers-color-scheme` block of `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | white | near-black | the page, the top bar, the sidebar, menus |
| `--surface` / `--surface-2` | light grey / one step darker | dark grey / one step lighter | chips, the description box, the current sidebar row, soft pills, asides / chip hover, image wells, pressed controls |
| `--text` / `--text-muted` | near-black / mid grey | near-white / light grey | titles and body / stats lines, dates, captions |
| `--border` / `--border-strong` | hairline / grey | dark hairline / mid grey | shelf dividers, the tab rule, tier cards / the search pill, fields |
| `--ink` / `--ink-text` | near-black / white | near-white / near-black | primary pills (Subscribe, Comment, Continue) and the selected chip; they invert in dark mode |
| `--accent` / `--accent-text` | the red / white | a slightly brighter red / white | progress bars (watched bar, player scrubber), premiere and live badges, counts, the brand mark, section icons |
| `--link` | blue | light blue | text links, hashtags, "View all", the channel link |
| `--danger` | deep red | coral | form errors |
| `--scrim` | black at 74% | same | duration and count badges, the player's controls and big play button |

The interface is greyscale. Thumbnails bring every other color, so the page stays white (or near-black) and grey. Red is a signal, not a decoration: it means "progress", "live" or "new", and appears on small things only. Main actions are ink, not red. Links are blue so they read as links in long descriptions and comments.

## Typography

- **Figtree** for everything: a clean geometric sans with a variable weight axis from 300 to 900. It stays legible at the 12 to 14px sizes the stats lines and badges use.
- Body 15px at weight 400, line height 1.5; prose pages (about, legal) 16px with line height 1.7.
- Card titles 16px at 600, clamped to two lines. Stats lines 14px muted, one line: `182K views · 3 weeks ago`.
- Section and shelf titles 20px at 700. Page titles H1 26 to 36px at 700; the channel name 24 to 36px at 800 with slight negative tracking.
- Numbers: compact counts in cards and headers (`182K`, `1.2M`), full numbers on the watch page and the about page (`182,406 views`), tabular figures in durations, timers and dates.
- Dates are relative in cards (`3 weeks ago`) and absolute in schedules (`Wed, Dec 2, 2026 · 8:00 PM`).
- One display line per site at most (the 404).

## Spacing, layout and radius

- The app shell: a 56px top bar across the full width, a 240px sidebar at the left, and content in a 1332px column with a fluid 16 to 48px gutter (`.page`, `--gutter`).
- The sidebar has three states: full (240px, icon and label rows) at 1312px and wider, a 72px rail with the five main destinations as icon-over-label tiles from 792 to 1311px, and a drawer that slides in from the left on phones and always on the watch page. The menu button switches between them.
- Grids are container-query driven: four columns from 1080px of content width, three from 820, two from 520, one below. On phones, home shelves turn into compact rows (168px thumbnail beside the text); the video library stays full-width cards.
- Shelves are separated by 24 to 32px of space and a 1px hairline, never by background bands. The newsletter is the only tinted box on the home page.
- Radius: 12px on thumbnails and the player, 16px on the banner, cards and asides, 8px on chips and fields, 999px on pills, the search pill, switches and avatars, 4px on badges.
- Shadows only on floating things: the card menu, the shelf arrows, the drawer and the toast. Cards have no border and no background: a thumbnail and text on the page.

## Signature elements

Keep at least five on the home page, and the app shell on every page.

1. **The app shell.** Menu button, brand mark and wordmark at the left of the top bar; a centred pill search whose button is a separate grey segment with square inner corners; the theme toggle and one outlined pill (the membership) at the right. The left sidebar lists destinations as icon rows with a rounded grey highlight on the current one, then small groups ("You", "The channel"), then a tiny grey footer.
2. **The thumbnail.** A rounded 16:9 picture with a dark duration badge at the bottom right, an optional red watched bar along the bottom edge, and underneath a two-line title, a grey stats line and a three-dot menu that appears on hover. No card frame, no shadow.
3. **Shelves.** A 20px bold title, an optional ghost "Play all" pill, and a blue "View all" at the far right, over one row of thumbnails; shelves are divided by hairlines.
4. **The vertical clips row.** 9:16 tiles with rounded corners, a two-line title and the view count, scrolling sideways with round shadowed arrow buttons at the edges.
5. **The channel header.** A wide rounded banner, a large round avatar, the name in 800 weight, a stats line (`@handle · 182K subscribers · 214 videos`), one line of description, a link line, an ink "Subscribe" pill that turns grey "Subscribed" with a bell, and tabs with a 2px underline under the current one.
6. **Chip bars.** Grey rounded-rectangle chips (8px radius) in a sideways-scrolling row; the selected chip is ink with inverse text. Used for topics, sorting, stream kinds and billing periods.
7. **The watch page.** A big rounded player with its own controls (a red scrubber with gaps at chapter starts, play, mute, time, the chapter name, captions and theater mode), the title under it, the owner row with Subscribe, a joined like and dislike pill, Share and Save pills, a grey description box with bold stats that expands, comments, and an "Up next" rail of compact rows with an autoplay switch.
8. **The tinted course panel.** A course or playlist page opens with a rounded panel tinted from the cover's color (a dark gradient of `--tint`), holding the cover, the title, the meta line, the price and white pills, beside a numbered lesson list.

## Components

- **Buttons:** `.pill` is a 36px grey pill (`.ink` for the main action, `.outline` for the header's membership link, `.ghost` for "Play all" and Cancel, `.big` for form buttons, `.light` and `.glass` on tinted panels). `.icon-btn` is a 40px round button that greys on hover. Labels never wrap.
- **Subscribe:** every `[data-subscribe]` button shares one state; subscribed shows a bell and a grey pill.
- **Badges:** 20px, 4px radius, 12px semibold: grey (`New`, `Open now`), red (`Premiere`), or dark on thumbnails (`Cook-along`, `10 lessons`).
- **Video card (`.vc`):** thumbnail, `.vc-body` with title and stats, then a kebab button added by the script; the title link stretches over the whole card, so the picture is not a second link.
- **Compact row (`.row`):** 168px thumbnail and two-line title with the channel and stats; used for "Up next".
- **Course card:** thumbnail with a lesson count badge, an uppercase eyebrow (`Course · Beginner`), the title, a stats line and the price or a waitlist badge. **Playlist card:** the same thumbnail with two thin stacked bars above it and a video count badge.
- **Live row:** a 246px thumbnail with a kind badge, the title, the date and time, one line of description and a "Notify me" pill that becomes "Reminder set".
- **Tier card:** hairline card with the name, the price in 36px 800, a check list and a full-width pill; the highlighted tier gets an ink outline.
- **Forms:** labels in 14px semibold above 44px fields with an 8px radius; focus is a blue outline. Choices are outlined pills. Errors float under the field in red, so nothing moves. The success state is a hairline card with an ink round check. The comment form is a single underline field whose buttons appear once it has focus.
- **Toast:** a small ink box at the bottom left that confirms quiet actions (saved, subscribed, link copied) and disappears.

## Do and don't

- Do let the thumbnails carry the color. Don't tint sections, color the sidebar or add gradients outside the player and the course panel.
- Do use red only for progress, live, premiere, counts and the brand mark. Don't make primary buttons red.
- Do keep cards frameless. Don't add borders, shadows or backgrounds to video cards.
- Do keep stats lines short and in the same order: count, then time. Don't add star ratings or invented metrics.
- Do use chips for filters and sorting. Don't use dropdowns where a chip row fits.
- Don't use an existing video platform's logo, play-button shape, name or icons; the brand mark is the site's own.
- Don't add emoji, icon fonts or autoplaying video.

## Voice

Friendly, plain and specific, like a creator talking to regulars: short titles that say what you will get ("Overnight focaccia that waits for you"), no clickbait capitals, no "you won't believe". Numbers are concrete (minutes, grams, dates). Speak to viewers as "you" and as "we" for the channel. Labels are one or two words ("View all", "Play all", "Notify me", "Save").
