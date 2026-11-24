# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is rice paper with ink text; ink night is deep blue-black with paper-coloured words, never pure black.
- [ ] Every section and page title is a split title (two to four words between fine rules) with one gloss line underneath; no wrapped line starts with a rule.
- [ ] The home hero has the landscape, the copy in the sky and one vertical inscription with its seal; the inscription does not touch the copy.
- [ ] Ink-wash bands separate the major sections and fade into the paper; the lotus appears once.
- [ ] Gold appears only on buttons, text links, prices, dates and chosen chips; cinnabar only on the seal, pins, house numbers and "hot" tags.
- [ ] Titles are regular weight, never bold or uppercase; buttons and links are uppercase tracked serif.
- [ ] Copy is quiet and exact: numbers instead of adjectives, no exclamation marks, no "authentic" or "best".

## Pictures

- [ ] Every content picture sits centred in a round fan; photographs fill it (`.fan.photo`), drawings float inside.
- [ ] All pictures share one manner: all photographs in the same light, or all drawings.
- [ ] The washes and the lotus are the template's own (or redrawn the same way), never stock art.
- [ ] Every `<img>` has `alt`, `width` and `height`; decorative washes have `alt=""` inside `aria-hidden` wrappers.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] The loader plays once per visit and leaves within about 2.5 seconds; it never appears without JavaScript or with reduced motion.
- [ ] The landscape clears from a blur, the inscription writes down its columns, sections fade up once; nothing loops.
- [ ] With reduced motion everything appears complete and still.
- [ ] Content is visible with JavaScript turned off, including every dish panel and every course.

## Completeness and interactions

- [ ] Every nav, card, pin, footer and text link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Header links stay on one line at 1440, 1024 and 768 px; when they do not fit, the menu button appears.
- [ ] The menu sheet opens, traps focus, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Dish tabs work with clicks and arrow keys.
- [ ] Course chips and the vegetarian toggle combine; town and news chips filter; each updates its count and empty message; `?course=`, `?town=` and `?kind=` preselect.
- [ ] House status reads "open now" or "closed" from each card's hours, including the closed day.
- [ ] `?house=`, `?gift=` and `?topic=` preselect their selects; dates cannot be in the past (gift collection two days ahead).
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel that repeats what was sent, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too); the lotus is clipped by its section.
- [ ] On phones the inscription comes first and stays two columns, the landscape follows the copy, the lotus sits below the text, the dish tabs scroll sideways, menus and houses stack.
- [ ] Touch targets are at least 44px, text links and time slots included.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view (the inscription on home).
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including glosses, tags, gold links and placeholder text.
- [ ] Focus rings are visible on paper, cards and ink night.
- [ ] Chips use `aria-pressed`; tabs use `role="tablist"`, `aria-selected` and `aria-controls`; the map image has alt text and every pin a hidden name.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; photographs compressed (WebP or AVIF, under 250 KB each); a CJK font, if added, is subset or hosted by the user's site.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including dishes, prices, houses, hours, gifts, years and people.
- [ ] Every fact you drafted (prices, hours, addresses, years, weights, policies) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, ratings, reviews, guide mentions, certifications or press the user did not supply; no dietary or health promise the owner did not give.
- [ ] If the user needs bookings or orders that arrive, menus they can edit, payments, member accounts or a newsletter, you have read `references/kanorio.md`.
