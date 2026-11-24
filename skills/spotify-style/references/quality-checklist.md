# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in dark and light.

## Look and feel

- [ ] Dark by default: black frame, near-black rounded panels, the header on the frame. The light theme is complete behind the toggle.
- [ ] At least six signature elements are on the home page: the app shell with the library sidebar, cover cards with the rising green play button, the shortcut grid with the home wash, browse tiles with tilted covers, a release card or tinted page top, a track or episode list, round people portraits, the gradient band.
- [ ] Green appears only on play buttons, the main action, checked choices and "now playing" text; every other button is a white or outlined pill or a round grey button.
- [ ] Every control is a pill or a circle; covers are 6px squares, people are circles.
- [ ] One display headline or H1 per view, heavy (900) and tightly tracked; section titles stay at 24px.
- [ ] Tinted page tops and tiles use the tint of their own cover.
- [ ] Copy is plain and warm, with no hype words, exclamation marks, emoji or lorem ipsum.

## Images

- [ ] Every show, episode, release and session has a square cover, consistent everywhere it appears (sidebar, cards, shortcut, tile, page top, player).
- [ ] Covers follow one language: flat shapes, one main color, no text (unless the user supplied real covers).
- [ ] No covers, logos or photos of real artists, labels or shows the user does not own.
- [ ] Every image has `alt`, `width` and `height`; covers next to their own title have `alt=""`.

## Motion

- [ ] Pills swell on hover and press on click; play buttons rise into cards on hover and focus.
- [ ] The home wash follows the hovered shortcut; the playing track shows the equalizer.
- [ ] With reduced motion nothing scales, slides or loops.
- [ ] Content is visible with JavaScript turned off, and play, follow and copy buttons are hidden then.

## Completeness and interactions

- [ ] Every nav, tab bar, sidebar, card, tile, footer and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Every play button starts the player bar; pressing it again pauses; the bar shows the right cover, title and length; seek, back and forward 15, speed and close work; album tracks advance to the next one.
- [ ] On the episode page the progress bar, chapters and time follow the player.
- [ ] Search from the header opens the browse page and filters it; kind chips, mood tiles, sorting and the empty state work and follow their URL parameters.
- [ ] Follow and save toggles change state, show a toast and are remembered; the feed copy button falls back to showing the link when the clipboard is blocked.
- [ ] Episode order and "Show more", live filters, the monthly or yearly switch, and plan and event preselection on the join page all work.
- [ ] Every form shows an error under each invalid field (including the "choose at least one" group), a sending state and a success box, and works with the button and with Enter, also inside a sandboxed frame. Errors never move the submit button.
- [ ] The theme toggle works and remembers the choice; the menu sheet opens and closes on a link, the close button and Escape.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width; rails scroll inside themselves.
- [ ] Below 1100px the sidebar is gone; below 960px the tab bar and menu appear and nothing hides behind them or behind the player at the bottom of the page.
- [ ] Page tops stack with the cover centered on phones; event rows and track rows stay readable; button labels never wrap.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, aside, main, footer; one `h1` per view; a skip link to the main content.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted meta lines, white text on tiles and color blocks, and black text on plan colors.
- [ ] Focus rings are visible on black, on grey and on tinted tops; cards show a ring when their link is focused.
- [ ] Icon-only buttons have an `aria-label`; play, follow, filter and billing buttons expose `aria-pressed`; decorative icons and covers are hidden from assistive technology.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; required groups are fieldsets with a legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family; the whole file stays under 1 MB with the art embedded.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including show, episode, track and artist names, dates, prices, places and email addresses.
- [ ] Every fact you drafted (episode dates and lengths, prices, event times and venues, track lists, credits) is listed in your reply for the user to confirm.
- [ ] Nothing claims listener numbers, chart positions, rankings, ratings, awards or press quotes the user did not supply.
- [ ] If the user needs forms that deliver, episodes or dates they edit themselves, paid memberships, member-only feeds, a newsletter, or hosted audio and images, you have read `references/kanorio.md`.
