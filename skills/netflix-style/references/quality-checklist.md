# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in dark and light.

## Look and feel

- [ ] Dark by default on a warm near-black; the light theme is complete behind the toggle (wall veil, arc haze, feature cards, billboard fade, plans and forms all switch).
- [ ] The home page keeps the poster wall, the centered headline with the email start, the glowing arc, the numbered posters, the feature cards and the flat FAQ bars.
- [ ] Every title appears with its title treatment in condensed capitals over its picture; the condensed face is used for nothing else except rank numbers.
- [ ] Red appears only on the start, join, sign-in and send buttons, progress bars, check marks, the arc rim, the feature icon discs and red text in `--accent-ink`.
- [ ] Buttons, fields and chips have 4px corners; feature and plan cards 16px; no pills.
- [ ] One H1 per view; section titles stay small next to the pictures.
- [ ] Copy is short and plain, with no hype words, exclamation marks, emoji or lorem ipsum.

## Images

- [ ] Each title has one picture used consistently in every slot (wall, poster, tile, billboard, detail, episodes, player).
- [ ] Subjects sit in the central third; nothing important is cropped away in the 2:3 poster or the zoomed thumbnails.
- [ ] No posters, stills, logos or lettering from real films, studios or services the user does not own.
- [ ] Every image has `alt`, `width` and `height`; decorative copies have `alt=""`.

## Motion

- [ ] Tiles grow and reveal their buttons on hover and on keyboard focus; row titles reveal "Explore all".
- [ ] The wall drifts slowly; with reduced motion nothing moves.
- [ ] Content is readable with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, menu, row title, tile, footer and button link reaches a view, a section or a real page; unknown routes show the 404 view.
- [ ] Both email start forms validate and carry the email to the join form.
- [ ] Any link to a title opens the detail dialog; Escape, the close button and a click outside close it; "More like this" swaps the title inside the dialog; the title page works on its own URL.
- [ ] The season picker swaps episodes; episode rows open the player; Play and Resume follow saved progress.
- [ ] The player plays, pauses, seeks back and forward 10 seconds, scrubs, and links to the next episode and back to the title.
- [ ] My list buttons toggle everywhere the title appears, show a toast, update the My list row and the "My list" filter, and are remembered.
- [ ] Catalog chips, topic, search, sort, the count and the empty state work and follow their URL parameters; header search opens the catalog filtered.
- [ ] Plan cards select, the Next button carries the plan to join, and join preselects it.
- [ ] Every form shows an error under each invalid field, a busy state and a success box, works with the button and with Enter inside a sandboxed frame, and errors never move the submit button.
- [ ] The theme toggle works and is remembered; the Browse menu opens and closes on a link, a click outside and Escape.

## Responsive

- [ ] At 1440, 1024 and 768 the header stays on one line; below 1100 the nav is in the Browse menu.
- [ ] At 390 nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth`), the email start stacks, rows show a partial third tile, the catalog is two columns and only the chosen plan shows its details.
- [ ] Arrow bars appear only on devices that hover; rows still scroll by touch.

## Accessibility

- [ ] Focus is visible on every control, including tiles (the buttons appear on focus).
- [ ] The dialog is a real `<dialog>` opened with `showModal()`, labelled by the title, and returns focus when closed.
- [ ] Icon-only buttons have labels that name the title ("Add Kiln Hours to My list").
- [ ] Text on the red, on the glass buttons and on artwork gradients meets 4.5:1 (3:1 for the large title treatments).

## Performance

- [ ] The page makes no network requests; fonts and images are embedded by `scripts/inline.mjs` for single-file delivery.
- [ ] No `loading="lazy"` on images that a full-page screenshot or print needs; key art files stay small (SVG under 3 KB, photos as WebP under 200 KB).

## Real brief

- [ ] Titles, episode names, lengths, ratings, prices and credits come from the user; everything drafted is listed in your reply as a placeholder.
- [ ] "Most watched" numbers and "New" labels appear only with real data; otherwise the numbered row becomes an ordered path ("Start here") or a plain poster row.
- [ ] Every sample string from the Replace checklist is gone.
