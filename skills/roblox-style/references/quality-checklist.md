# Quality checklist

Walk this list before you hand the site over. Fix what fails, then look again at 1440, 1024, 768 and 390px wide, in light and dark.

## Visual

- [ ] The home page opens on the dark wall: tilted square art, the veil, six outline squares, the headline in the wide display face, one centered card, the caps heading and outlined badges.
- [ ] The wall stays dark in both themes; the rest of the page is plain white or near-black.
- [ ] One blue, used for the main action in each group (Join, Play, Save a spot, a ready form button). Blue text uses `--link`.
- [ ] The display face appears only in headlines 22px and larger; buttons, nav, tiles and paragraphs use the body face.
- [ ] Card titles and event titles are uppercase; everything else is sentence case.
- [ ] Tiles are square with an 8px radius, title underneath, stats line under the title.
- [ ] Radius stays in the scale: 8px controls and tiles, 10px cards, 12px the wall card and bands; pills only for filter selects, chips and the date chip.

## Images

- [ ] Every project has one picture in one visual language; neighbors on a shelf have different sky colors.
- [ ] Subjects sit in the central square, so square crops keep them.
- [ ] No text, logos or characters from existing games in any picture.
- [ ] At least half of the set is mid to light, so the dimmed wall still shows shapes.
- [ ] Every `img` has `alt`, `width` and `height`; the project page's picture has a real description.

## Motion

- [ ] The wall drifts slowly; the card rises once on load.
- [ ] Tiles lift on hover and on keyboard focus.
- [ ] With reduced motion, nothing drifts or rises and rows scroll without smoothing.

## Completeness and interaction

- [ ] Every link reaches a view, a section ID or a real page. No `href="#"`.
- [ ] The header search opens the showcase filtered; the genre, sort and search filters work together, show a count and an empty state, and "See all" shows that shelf as a grid.
- [ ] Shelf arrows scroll the row and hide at each end; the last tile fades out when there is more.
- [ ] Play shows the stage (or the real build); Exit returns focus to Play.
- [ ] Tabs switch with clicks and with the arrow keys.
- [ ] Favorite, votes and reminders toggle and say so in a toast.
- [ ] Every form shows errors under the right field without moving the button, a busy label, then a success box; the booking card's button turns blue only when the form is complete; Enter submits.
- [ ] The theme toggle switches every surface, and the icon follows.
- [ ] No sample names are left (run `node scripts/validate.mjs <file>`).

## Responsive

- [ ] The header stays on one line at 1440, 1024 and 768; on phones the links sit on a second row.
- [ ] Nothing scrolls sideways at 390 (`document.documentElement.scrollWidth <= innerWidth`, checked without mobile emulation).
- [ ] On phones the card fills the width, badges sit two by two, shelves show about two and a half tiles, event cards and posts stack.

## Accessibility

- [ ] One H1 per view; headings step down one level at a time.
- [ ] Focus rings are visible on every control, including segments and tiles.
- [ ] Text meets 4.5:1 in both themes (muted text on surfaces too); white on the blue is about 4.8:1.
- [ ] Segments and pressed buttons expose their state (`checked`, `aria-pressed`, `aria-selected`).
- [ ] Errors are linked with `aria-describedby` and announced (`aria-live`).

## Performance

- [ ] One self-contained file with fonts and images embedded, or a deployed site with them beside the page; no requests to other hosts.
- [ ] Two font families, each a single variable file.
- [ ] Images are SVG or WebP; no picture over 200 KB.

## Real brief

- [ ] Every fact is the user's own: names, ages, times, prices, places, team members, play counts and ratings. Anything drafted is marked as a placeholder and listed in your reply.
- [ ] No invented reviews, partner logos, awards, safety certifications or member numbers.
- [ ] For a site aimed at children: nicknames instead of full names, a parent or guardian's email for contact, and no photos of members unless the user confirms consent.
