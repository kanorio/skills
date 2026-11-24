# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in light and dark.

## Look and feel

- [ ] The home page is the vertical feed: one 9:16 video per screen, snapping, with the sticker, the caption, the sound line and the lime progress bar.
- [ ] The action column is there on every post: avatar with the plus badge, heart, comment, save and share with counts, and the disc.
- [ ] The page is white (near-black in dark) and grey; pictures bring the color. No tinted sections or gradients outside video frames.
- [ ] Violet only on things you press (Follow, main buttons, the plus badge, liked hearts); lime only on signals (progress, badges, Saved, reminders, the feed tab underline). No lime text on white.
- [ ] The rail is on every page: full on desktop, icons on tablets, a top bar with a menu on phones; the current page highlighted.
- [ ] Explore has category chips and a dense 9:16 grid with like counts, two-line captions and creator handles.
- [ ] Rubik everywhere; handles and counts bold; captions clamp at two lines.
- [ ] Copy is short and concrete, with no clickbait, emoji or lorem ipsum.

## Images

- [ ] Every video has one 9:16 picture with the subject in the middle band, reused for the feed, the tile and the watch page.
- [ ] No text baked into pictures; no other platform's logo, mark or interface; no real people without permission; nothing hot-linked.
- [ ] Every image has `alt`, `width` and `height`.

## Motion

- [ ] The active video plays (or starts paused with reduced motion); a tap pauses; a double tap likes with the heart burst.
- [ ] Only the active video moves; nothing else loops.
- [ ] With reduced motion everything is visible at once and videos start paused.
- [ ] Content is visible with JavaScript turned off (every view shown in turn, the first post and every tile readable).

## Completeness and interactions

- [ ] Every rail, chip, tile, hashtag and footer link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The feed: scroll, the up and down buttons and the arrow keys move one post; Space pauses; "Following" shows only followed creators or the follow suggestions.
- [ ] Like, save, follow and share work everywhere and stay in step (feed, watch page, creator page, about); counts change by one; "Copy link" copies or shows the link.
- [ ] Explore: chips, Saved, both search fields, `?cat=` and `?q=`, the results line with "Clear search", the empty message.
- [ ] The watch page loads every video from its tile; close returns to where you were; up and down step through videos; comments post with Enter and update the count; Reply prefills the handle; Creator videos lists the rest.
- [ ] The creator page: Follow updates the follower count; Videos and Liked tabs; Latest, Popular and Oldest.
- [ ] Every form shows an error under each invalid field (including the choice groups), a sending state and a success card, and works with the button and with Enter, also inside a sandboxed frame. `?plan=` and `?with=` preselect.
- [ ] Reminders toggle; document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width; the chip row scrolls inside itself.
- [ ] The rail never wraps; it switches between full, icons and the top bar.
- [ ] The feed frame keeps 9:16 on desktop and tablets and goes full-bleed on phones with the actions over the video.
- [ ] Touch targets are at least 44px; button labels never wrap.

## Accessibility

- [ ] Landmarks: header (the rail), nav, main, footer; one `h1` per view (the feed's is visually hidden).
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted text, white text over video (with the gradients), violet buttons and the lime badges.
- [ ] Focus rings are visible on white, on grey, and on the dark stage.
- [ ] Icon-only buttons have an `aria-label`; like, save, follow, chips and reminders use `aria-pressed`; tabs use `role="tab"` with arrow keys; the play area is a button whose label says Play or Pause.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; choice groups are fieldsets with a legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`; no embedded players from other sites.
- [ ] One font family; the file stays under about 1 MB with the art embedded; real video files are hosted, not embedded.
- [ ] No `alert`, `confirm`, `prompt`, `window.open`, `history.back` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including handles, captions, counts, steps, comments, lessons, dates and prices.
- [ ] Every drafted fact (counts, follower numbers, durations, prices, schedules, team names) is listed in your reply for the user to confirm.
- [ ] Nothing claims followers, views, verification badges, awards or brand partnerships the user did not supply.
- [ ] If the user needs forms that deliver, content they edit themselves, video hosting, course access, payments, member login or a newsletter, you have read `references/kanorio.md`.
