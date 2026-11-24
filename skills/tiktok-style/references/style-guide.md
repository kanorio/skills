# Style guide: TikTok style

The look in one sentence: a white app shell (a left rail with a pill search and icon rows, a top bar with a menu on phones) around a feed of full-height vertical videos shown one at a time, each with a white text sticker, a caption and a scrolling sound line at the bottom, and a column of round avatar, heart, comment, save and share buttons with counts at its right; an explore page of category chips over a dense grid of 9:16 tiles; and one pair of colors, violet and lime, kept for actions and signals.

## Tokens

All values live as CSS custom properties on `:root` (light), on `:root[data-theme="dark"]` and in the `prefers-color-scheme` block of `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | white | near-black | the page, the rail, menus |
| `--surface` / `--surface-2` | light grey / one step darker | dark grey / one step lighter | chips, the round action buttons, the search pill, hover rows, cards / hover on those, image wells, choice pills inside cards |
| `--text` / `--text-muted` | near-black / mid grey | near-white / light grey | names, titles, body / dates, creator names under tiles, stats labels |
| `--border` / `--border-strong` | hairline / grey | dark hairline / mid grey | tab rules, the rail divider / field outlines |
| `--accent` / `--accent-text` | violet / white | slightly lighter violet / white | the first color of the pair: Follow, the main button on every page, the plus badge on the feed avatar |
| `--pop` / `--pop-text` | lime / near-black | same | the second color: the progress bar, the active feed tab underline, Free and Creator badges, Saved, a set reminder, the success check, the sparks around a liked heart |
| `--ink` / `--ink-text` | near-black / white | near-white / near-black | the selected chip and the toast; they invert in dark mode |
| `--link` | deep violet | light violet | links, hashtags on the page, the current rail row |
| `--heart` / `--on-stage-heart` | violet / light violet | light violet / same | a liked heart on the page / over a video |
| `--stage` / `--on-stage` | near-black / white | black / white | video frames and the watch stage, dark in both themes |
| `--danger` | deep red | coral | form errors |

The page is white and grey; the videos bring every other color. The two accent colors never mix into a gradient across a surface: violet is for actions (it is what you press), lime is for signals (it is what changed or what is playing). The only place they meet is the ring around a creator's avatar, a small conic gradient. Lime is never used for text on white; it is a fill with dark text, or a line on the dark stage.

## Typography

- **Rubik** for everything: a sans with slightly rounded corners and a variable weight axis from 300 to 900. The soft corners match the rounded tiles and pills, and the heavy weights make handles and counts readable over video.
- Body 16px at 400, line height 1.5. Captions on video and under tiles 15px, clamped to two lines.
- Handles and names 600 to 700 (`ines.cuts` bold, `Ines Calloway` regular and muted next to or under it). Counts 12 to 14px at 700 under the round buttons.
- Page titles H1 26 to 36px at 800 with slight negative tracking. Section titles 20px at 700.
- The sticker: 16 to 21px at 800, near-black on a white rounded box, centred near the top third of the frame.
- Numbers are compact everywhere (`48.2K`, `1.1M`, `312`); dates are relative for a week (`5d ago`) and short after that (`Nov 18`).
- One display line per site at most (the 404).

## Spacing, layout and radius

- **The rail**: 248px wide on desktop (1100px and up), sticky and full height: brand and theme toggle, the pill search, six icon rows, one violet button ("Work with us"), a divider, "Our creators" with avatars, and small grey links at the bottom. From 720 to 1099px it becomes an 80px icon rail (labels move to screen readers, search becomes an icon). Below 720px it becomes a top bar with the brand, search, theme and a menu button that drops the same rail down as a sheet.
- **The feed** fills the content area at viewport height and scrolls one post at a time (`scroll-snap-type: y mandatory`, `scroll-snap-stop: always`). Each post is a three-column grid: the 9:16 frame in the middle, the action column at its right foot, the up and down buttons at the far right. On phones the frame is full-bleed and the actions float over it.
- **Grids** use `auto-fill` columns of at least 168px (six or seven at 1440), 16px apart with 26px between rows; compact grids (creator page) use 150px columns with 10px gaps and become three tight columns with 2px gaps and square corners on phones.
- **Pages** use a 1360px column with a 16 to 40px gutter (`.page`, `--gutter`).
- **Radius**: 18px on video frames, 14px on cards, 10px on tiles, buttons and fields, 999px on chips, the search pill, avatars and round buttons, 6px on badges.
- **Shadows** only on floating things: the phone menu sheet, the toast, the sticker. Tiles and cards have no border and no shadow.

## Signature elements

Keep the feed and at least four others on the home page; keep the rail on every page.

1. **The vertical feed.** One 9:16 video per screen, snapping. The frame is dark with the picture covering it, a soft dark gradient at the top and bottom, a white sticker with the current step, the handle (bold, white) and the date, a two-line caption with bold hashtags, a sound line with a note icon whose text scrolls while playing, and a thin lime progress bar along the bottom edge. A tap pauses (a round play symbol appears in the middle); a double tap likes and throws a violet heart with lime sparks.
2. **The action column.** At the right foot of the frame: the creator's round avatar with a small violet plus badge (it turns into a check when followed), then round grey buttons for heart, comment, save and share, each with its count under it, and a slowly spinning sound disc at the end. Liked hearts are violet; saved bookmarks fill lime.
3. **The feed tabs.** "For you" and "Following" in white over the top of the frame, the current one bold with a short lime underline. "Following" shows only the creators you follow, or a short list to follow.
4. **Category chips over a dense grid.** Grey pills in a sideways-scrolling row with an arrow at the end when it overflows; the selected chip is ink. Below, 9:16 tiles with the like count over the bottom-left corner, a two-line caption with bold hashtags and the creator's tiny avatar and handle.
5. **The watch page.** A dark stage with the same picture blurred behind the frame, a round close button at top left and up and down buttons at the right; at the right a column with a grey creator card (avatar, handle, name and date, Follow, the title as the H1, the caption, the sound), inline action buttons with counts, a copy-link field, and tabs for Comments and Creator videos with the comment box pinned at the bottom.
6. **The profile.** A large round avatar with the color ring, the handle as the H1 and the name under it, Follow, Message and share, a stats line (`214 Following  48.2K Followers  1.1M Likes`), a bio and a link, then Videos and Liked tabs with Latest, Popular and Oldest, over a compact grid that shows play counts instead of likes.
7. **The duo ring.** A conic violet-and-lime ring around every creator avatar in the rail, the profile and the team cards; the small avatars in tiles, comments and captions stay plain.

## Components

- **Buttons:** `.btn` is a 44px rounded rectangle (10px), grey by default; `.btn.accent` is violet with white text and turns grey with "Following" when pressed; `.btn.sm` is 36px; `.btn.wide` fills its card. `.icon-btn` is a 44px round button (`.soft` grey, `.glass` translucent white on the stage). Labels never wrap.
- **Chips:** `.chip`, 38px grey pills; `aria-pressed="true"` makes them ink.
- **Badges:** 22px lime pills with dark text (`Free`, `Course`, `Creator`).
- **Avatars:** `.av` initials on a light tint of the creator's hue (`--h`), sizes `xs` 22, `sm` 32, default 40, `lg` 48, `xl` 116; `.ring` wraps one in the duo ring.
- **Round action (`.act`):** a 48px grey circle with a filled icon and the count under it; on phones the circle disappears and the white icon gets a drop shadow over the video. On the watch page the count sits beside a 38px circle.
- **Tile (`.tile`):** the 9:16 `.tile-media` link with the picture and `.tile-n` (heart and count), `.tile-cap` and `.tile-by`. The picture zooms 4% on hover. Compact tiles show a play symbol and the view count.
- **Comment (`.cmt`):** avatar, handle (muted, with a lime `Creator` badge for the owner), text, a meta line with the time and Reply, and a small heart with its count at the right.
- **Lesson row (`.ep`):** a 52px 9:16 tile in a gradient of the lesson's hue with the number in white, the title, the length, and a lime `Free` badge or a lock.
- **Live row:** a white date tile (month in violet capitals, day in 800), the title, the host's avatar and handle, the time and length, and a "Remind me" button that turns lime.
- **Forms:** labels 14px at 600 above 46px fields with a 10px radius; choices are grey pills that turn ink when checked; errors float under their field in red, so nothing moves; the success state replaces the form with a lime check, a title and one sentence.
- **Toast:** a small ink box at the bottom centre for quiet confirmations (saved, followed, link copied, reminder set).

## Do and don't

- Do let the videos carry the color. Don't tint page sections, add gradients outside video frames, or color the rail.
- Do keep violet for what you press and lime for what changed. Don't use lime for text on white, and don't fill large areas with either color.
- Do write counts compactly and keep them under or beside their icon. Don't invent counts that look real for a real brand; mark drafted ones as placeholders.
- Do keep one video per screen in the feed. Don't turn the home page into a grid; the grid lives in Explore.
- Do use the sticker for one short step at a time. Don't put paragraphs on the video.
- Don't draw another app's logo, note-shaped mark, two-color glitch effect or interface into pictures or the brand mark; the mark is the site's own.
- Don't add emoji, icon fonts or embedded players from video sites.

## Voice

Short, warm and concrete, like a creator talking to the people who follow them: titles that say what you will get ("A paper crane in 28 seconds"), captions that add one useful detail and two hashtags, labels of one or two words ("Follow", "Remind me", "Copy link"). Numbers are specific (seconds, centimetres, days). The creators speak as "I" in captions and "we" on the about and collaboration pages.
