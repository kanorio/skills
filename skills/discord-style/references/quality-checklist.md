# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, at night and in daylight.

## Look and feel

- [ ] Night sky by default whatever the system setting; the day sky is complete behind the toggle and remembered.
- [ ] The home page has all seven signature elements: sky with sparkles, double frames, floating toys, wide heavy titles, the hero with centred buttons, the word marquee, and the finale over the footer wordmark.
- [ ] Every frame, card, row and panel is glass with huge corners (64px frames, 44px media, 28px cards); buttons are rounded rectangles, never full pills.
- [ ] Frames alternate sides down the page; one toy at most peeks over each frame.
- [ ] Colour lives in media panels, date tiles, tags and toys; the page itself is always the sky.
- [ ] Headlines are short, Unbounded, sentence case; only the finale is uppercase.
- [ ] Copy is friendly and plain, with no hype, no exclamation marks outside the finale, no emoji and no lorem ipsum.

## Images

- [ ] Toys share one language (soft 3D, upper-left light, the candy palette) and never cover text.
- [ ] Media panels show the real subject or a product card with real data, not a fake chat client.
- [ ] Every image has `alt`, `width` and `height`; toys have `alt=""`; nothing uses `loading="lazy"`.
- [ ] No logos, mascots, characters or screenshots the user does not own.

## Motion

- [ ] Toys drift, sparkles twinkle and the marquee slides only when motion is allowed; with reduced motion everything stands still and is visible.
- [ ] Reveals use keyframes with the 2.5 second fallback; content is visible with JavaScript turned off.
- [ ] The header turns into two floating pills after scrolling and back at the top.

## Completeness and interactions

- [ ] Every nav, sheet, card, footer and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Filters on games, events and posts update the count, hide empty months, show the empty state and follow their URL parameters; the sort works.
- [ ] The game page shows the right item for `?id=`, the wishlist toggles and is remembered, the patch note filter follows `?game=`.
- [ ] The billing switch swaps prices and periods; plan, game and event links prefill the join form.
- [ ] Every form shows an error under each invalid field (including the required group), a sending state and a success panel that repeats the name and email, and works with the button and with Enter inside a sandboxed frame. Errors never move the submit button.
- [ ] The theme toggle works; the menu sheet opens and closes on a link, the close button, the backdrop and Escape; the copy-link button falls back to showing the link.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360px; the header never wraps (links move into the sheet below 1200px).
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth` at 390 without mobile emulation).
- [ ] On phones the hero art comes first, frame copy sits above its media, product cards are fully visible, event rows keep their button, and the lineup shows five toys.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view; a skip link.
- [ ] Contrast meets WCAG 2.2 AA in both skies, including muted text on glass, white text on the blurple button and labels on tags.
- [ ] Focus rings are visible on the sky, on glass and on white pills; cards show a ring when their link is focused.
- [ ] Icon-only buttons have an `aria-label`; chips, the billing switch and the wishlist expose `aria-pressed`; decorative icons, toys and the marquee are hidden from assistive technology.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; the required group is a fieldset with a legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families; the inlined file stays well under 1 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including game titles, events, people, prices, places and email addresses.
- [ ] Every fact you drafted (dates, prices, seats, versions, opening hours, team names) is listed in your reply for the user to confirm.
- [ ] Nothing claims member counts, downloads, ratings, awards or press quotes the user did not supply.
- [ ] If the user needs forms that deliver, content they edit themselves, paid memberships or tickets, member login, a newsletter, or hosted images and video, you have read `references/kanorio.md`.
