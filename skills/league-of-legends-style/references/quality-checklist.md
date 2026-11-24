# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page alternates painted night scenes with pale stone sections (light theme) or night-blue sections (dark theme); the header and footer are near-black in both.
- [ ] Every headline is Faustina italic in capitals, and section headings use the kicker pair: a small upright line over one huge word.
- [ ] Buttons are square gold with night-blue capitals; the hero button has the detached outer frame; arcane blue appears at most once per screen.
- [ ] Home keeps at least five signatures: the scene hero with the gold logotype, the lattice news strip, the crest watermark, a hero breaking out of the ring, a hero in the double diamond, the class picker, the ways-to-play disc.
- [ ] Copy is short and concrete, with no exclamation marks, no countdowns and no lorem ipsum.

## Pictures

- [ ] Scenes share one night palette with one light each; the text side of every scene is calm and dark.
- [ ] Every hero figure is cut out (transparent background), full body, and taller than its frame.
- [ ] Every image has `alt`, `width` and `height`; decorative mode thumbnails use `alt=""`.
- [ ] No art, characters, icons or logos from existing games, films or books; every remaining placeholder is listed in your reply.

## Motion

- [ ] Sections rise once as they enter; the ring sweeps and the hero steps in when a class is chosen.
- [ ] Only the mist and the embers loop, slowly.
- [ ] With reduced motion everything appears in place and still.
- [ ] Content is visible with JavaScript turned off: every view, every hero card, all four abilities, every news card, change and event.

## Completeness and interactions

- [ ] Every nav, footer, card and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The menu opens and closes with the button, Escape and a link, and closes when the window grows past 1180px.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The class picker and its arrows change the hero, name, title and link; the ways-to-play buttons change the disc and text.
- [ ] Roster chips, search (names and titles) and sort update the grid and the live count; the empty state can clear the search.
- [ ] Every hero card opens its own detail with its own scene, difficulty, lore, four abilities and three more heroes.
- [ ] News chips filter the stories; every story opens its own article with its own picture, byline and body.
- [ ] Rules chips filter changes and hide versions with nothing left; the version select jumps.
- [ ] Every "Save a seat" fills the date in the form and scrolls to it; the seats stepper stays between 1 and 5.
- [ ] Edition buttons preselect the edition on the join form.
- [ ] Every form shows an error under each invalid field without moving the submit button, then a success state, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view, per hero and per article.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] The header never wraps at 1440, 1024 or 768; below 1180px the links move into the menu.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); the news strip scrolls inside itself on phones.
- [ ] Split sections stack; the ring and diamond stay square and the figures are not cut off.
- [ ] Touch targets are at least 40px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view; the home H1 includes the name and the tagline.
- [ ] Night-blue on gold, gold-ink on stone, and parchment on scenes meet WCAG 2.2 AA in both themes.
- [ ] Focus rings (arcane blue) are visible on every interactive element, including chips, class icons, ability tiles and radio tiles.
- [ ] Chips, class icons, modes and ability tiles use `aria-pressed`; counts and errors use `aria-live`; FAQ uses native `<details>`; decorative crests and rings are `aria-hidden`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font files (one italic display, one text) with a Latin subset; pictures under 250 KB each; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including hero names, places, venues, people and prices.
- [ ] Prices, dates, player counts, play times, ages and event details come from the owner; anything you drafted is listed in your reply.
- [ ] No invented reviews, awards, sales figures, rankings or player counts.
- [ ] If the user needs forms that really deliver, pre-orders or payments, member login, editable news or a newsletter, you have read `references/kanorio.md`.
