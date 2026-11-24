# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in light and dark.

## Look and feel

- [ ] The page is white (near-black in dark) and grey; thumbnails bring the color. No tinted sections or gradients outside the player and the course panel.
- [ ] Red appears only on progress (watched bars, the scrubber), premiere and live badges, counts and the brand mark. Main buttons are ink.
- [ ] The app shell is there on every page: top bar with the pill search, sidebar (full, rail or drawer), the current page highlighted.
- [ ] At least five signature elements on the home page: channel header with Subscribe and tabs, featured video, a shelf of thumbnails with "View all", the clips row, chips, the course shelf, upcoming live rows.
- [ ] Video cards are frameless: rounded thumbnail with a duration badge, two-line title, one grey stats line, the three-dot menu.
- [ ] Figtree everywhere; card titles 600, headings 700 to 800; stats lines muted.
- [ ] Copy is plain and specific, with no clickbait capitals, hype words, emoji or lorem ipsum.

## Images

- [ ] Every thumbnail follows one picture language with one subject in the middle, and still reads cropped to 9:16.
- [ ] Each video keeps the same picture on its card, the watch page poster, "Up next" and any course or clip that uses it.
- [ ] No other video platform's logo, play button, name or interface, no real people without permission, no stock images hot-linked.
- [ ] Every image has `alt`, `width` and `height`; thumbnails whose title is beside them have `alt=""`.

## Motion

- [ ] Shelves rise once; nothing loops; no video plays by itself.
- [ ] With reduced motion everything is visible at once.
- [ ] Content is visible with JavaScript turned off (every view shown in turn).

## Completeness and interactions

- [ ] Every sidebar, tab, card, shelf and footer link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The menu button switches the sidebar between full and rail on desktop and opens the drawer on phones and on the watch page; the drawer closes on Escape, the scrim, the close button and a link.
- [ ] Search from the top bar opens the library with results, the note and "Clear search"; topic chips, Watch later, sorting and "Show more" work and follow their URL parameters, with an empty message.
- [ ] The three-dot menu saves to Watch later and copies a link; the sidebar count follows.
- [ ] The watch page loads every video from its card: title, stats, description, poster, duration and "Up next". Play, pause, seeking, chapters, captions, mute, theater mode, like, Save, Share and the description toggle all work; autoplay moves to the next video at the end.
- [ ] If the user has real video files, they are in `<source>` inside the player's `<video>` and the same controls play them.
- [ ] Subscribe changes every Subscribe button at once; "Notify me" becomes "Reminder set".
- [ ] Every form shows an error under each invalid field (including the radio group), a sending state and a success card, and works with the button and with Enter, also inside a sandboxed frame. The comment form adds a comment and updates the count.
- [ ] Monthly and yearly prices swap; tier and course links preselect the form.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width; chip rows, tabs, the clips row and the action pills scroll inside themselves.
- [ ] Grids go from four columns to one; home shelves become compact rows on phones; the player is full-bleed on phones.
- [ ] Touch targets are at least 40px; button labels never wrap.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including grey stats lines, white on the red badge, blue links and text on the tinted course panel.
- [ ] Focus rings are visible on white, on grey chips, in the player and on the tinted panel.
- [ ] Icon-only buttons have an `aria-label`; chips, like, Save, Subscribe and "Notify me" use `aria-pressed`; autoplay is a switch; the scrubber has an `aria-valuetext`.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; required groups are fieldsets with a legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`; no embedded players from other sites.
- [ ] One font family; the file stays under 1 MB with the art embedded. Real videos are hosted files, not embedded in the HTML.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including titles, counts, dates, prices and people.
- [ ] Every fact you drafted (subscriber and view counts, durations, prices, schedules, team names) is listed in your reply for the user to confirm.
- [ ] Nothing claims subscriber numbers, views, awards, verification badges or partnerships the user did not supply.
- [ ] If the user needs forms that deliver, videos or courses they manage themselves, memberships, payments, member login, a newsletter or video hosting, you have read `references/kanorio.md`.
