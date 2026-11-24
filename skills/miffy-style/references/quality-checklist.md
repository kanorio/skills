# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The home page is one blue canvas from the header to the footer: a hero drawing, the lowercase name as the H1, one sentence, then the wall.
- [ ] Wall tiles are rounded squares in flat yellow, orange, green, brown or white, one drawing each, no visible text; neighbours never share a colour; wide tiles are at most two.
- [ ] Every inner page opens with a full-bleed band in its section colour, a lowercase H1, one lead, and one drawing sitting half over the band's lower edge.
- [ ] Headings, nav, buttons, chips, labels and captions are lowercase; body copy is sentence case; one rounded family throughout.
- [ ] Cards are pale grey and flat; no shadows except the film dialog; no gradients anywhere.
- [ ] Links to other pages use grey cards with the orange circled arrow.

## Drawings and images

- [ ] Every picture uses the one-line drawing language: 3.5 black line, round caps, flat fills from the palette, simple front-facing shapes.
- [ ] No existing character, mascot or lookalike; the sample cast (the owl, the snail and the whale) is renamed or replaced.
- [ ] No drawing sits on a tile of its own main colour.
- [ ] Photos, if any, are the user's own, in rounded frames, and never mixed into the wall.

## Motion

- [ ] Entrances are keyframes under the `js` class; hover lifts and tilts are small; nothing loops except an open film.
- [ ] With reduced motion nothing moves and everything is visible.

## Completeness and interaction

- [ ] Every sample string from the replace checklist is gone; title, description and Open Graph tags describe the real brand.
- [ ] Every tile, card and link reaches a view, a section or a real page; no `href="#"`.
- [ ] Search, age chips and kind chips filter with live counts and an empty state.
- [ ] The reader turns pages with buttons and arrow keys; add to bag updates the count; quantities and remove work.
- [ ] The memory game deals, flips, matches and wins; "new game" reshuffles.
- [ ] Films open in the dialog, close with the button, Escape and a click outside.
- [ ] Every form shows inline errors without moving its button and a success state after the button is clicked.
- [ ] The theme toggle switches and remembers both themes; the menu pill opens and closes.

## Responsive

- [ ] At 1440, 1024 and 768 the header stays on one line; below 960 the links are in the menu pill.
- [ ] At 390 (and 360) nothing scrolls sideways: check `document.documentElement.scrollWidth <= innerWidth` without phone emulation.
- [ ] The wall is two columns on phones; band drawings centre; forms stack.

## Accessibility

- [ ] One H1 per view; tiles have accessible names (their caption); drawings are `aria-hidden` unless they carry meaning (the hero has `role="img"` and a label).
- [ ] Focus rings show on the canvas, on every band colour, on the footer and on paper, in both themes.
- [ ] Ink text on yellow, orange and white; white text on green, blue and brown; muted text passes 4.5:1.
- [ ] Touch targets are 44px or more; chips and radio pills expose `aria-pressed` or a checked state.

## Performance

- [ ] One font family, two weights, `font-display: swap`; drawings are one inline sprite.
- [ ] No `loading="lazy"` in the single-file deliverable; no external requests.

## Real brief

- [ ] Prices, ages, dates, delivery terms, opening hours and policies come from the user, or are marked placeholders listed in your reply.
- [ ] No invented reviews, awards, sales figures, safety claims or certifications.
- [ ] The bag is labelled an order request until a real checkout is connected; forms say nothing is sent until an endpoint is connected.
