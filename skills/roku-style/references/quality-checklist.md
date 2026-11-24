# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, at night and at dusk.

## Look and feel

- [ ] Deep purple night by default, regardless of the system setting; dusk is complete behind the toggle (sky, city, band, frames, cards, forms and footer all switch; screens stay dark).
- [ ] The home page keeps the drawn city with the lockup (script line, heavy wordmark, tracked tagline) and at least three of: the Tonight screen, the horizon band, the deck, the tile wall.
- [ ] Inner pages open with a script kicker over the H1, and schedules or choices sit on a dark screen inside a frame.
- [ ] One focus ring style everywhere on screens: a gap in the screen color and a white ring.
- [ ] Only one filled violet button per area; secondary actions are outline buttons; pink and gold appear only as light (sign, bulbs, now line, kickers on screens).
- [ ] The script face is used for five words or fewer, never on buttons or prices.
- [ ] One H1 per view; section titles are centered with one muted line.
- [ ] Copy is warm and plain, with no hype words, exclamation marks, emoji or lorem ipsum.

## Images

- [ ] Each title has one key art file used in every slot; the subject survives the 16:9 crop.
- [ ] The city's hero building matches the business (marquee for a cinema, stage door for a venue, tower for a radio or podcast network) and its sign and board say the user's words.
- [ ] No posters, stills, logos or lettering from real films, channels or services the user does not own.
- [ ] Every image has `alt`, `width` and `height`; decorative copies have `alt=""`.

## Motion

- [ ] Beams sway, bulbs chase and the wall drifts slowly; with reduced motion nothing moves.
- [ ] The focus ring moves with hover, focus and arrow keys, and the feature panel follows it.
- [ ] Content is readable with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, menu, tile, chip, card, footer and button link reaches a view, a section or a real page; unknown routes show the 404 view.
- [ ] The guide shows seven days, places every showing by time, dims past ones and draws the now line today; blocks open the film or event.
- [ ] Programme chips, search, the count, the empty state and the times for the chosen day work, and follow `?tag=` and `?q=`.
- [ ] The film page fills from its id; day and time pick on the screen, ticket steppers update the total, and booking refuses to continue without a time or a ticket.
- [ ] The trailer dialog opens, plays, pauses and closes with Escape, the close button and a click outside.
- [ ] The deck deals forward and back and only the front card is interactive.
- [ ] Monthly and yearly prices switch, and the chosen plan and billing carry to the join form; the member card shows the typed name.
- [ ] Every form shows an error under each invalid field, a busy state and a success box, works with the button and with Enter inside a sandboxed frame, and errors never move the submit button.
- [ ] Journal filters, article pages, FAQ search, the open-now status and the theme toggle work; the menu closes on a link and on Escape.

## Responsive

- [ ] At 1440, 1024 and 768 the header stays on one line; below 1100 the links are in the menu.
- [ ] At 390 the header fits on one line with the mark at full size, nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth`), the lockup clears the hero building, the Tonight screen stacks (tiles two across, feature below), the guide scrolls inside itself, the deck shows three posters and the plans stack.

## Accessibility

- [ ] Focus is visible on every control; screen tiles are one tab stop with arrow keys inside.
- [ ] The lockup is the home H1 and reads as one sentence.
- [ ] Icon-only buttons have labels ("One more adult ticket", "Next season").
- [ ] White text on violet, on screens and on art gradients meets 4.5:1 (3:1 for the wordmark and large titles).

## Performance

- [ ] The page makes no network requests; fonts and images are embedded by `scripts/inline.mjs` for single-file delivery.
- [ ] No `loading="lazy"`; key art files stay small (SVG under 2 KB, photos as WebP under 200 KB).

## Real brief

- [ ] Films, shows, times, prices, seat counts, opening hours and people come from the user; everything drafted is listed in your reply as a placeholder.
- [ ] No invented reviews, awards, festival selections, audience numbers or partner logos.
- [ ] Every sample string from the Replace checklist is gone.
