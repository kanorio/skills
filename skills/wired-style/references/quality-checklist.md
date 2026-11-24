# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Every section opens with a 2px heavy rule and a black tab; the tab touches the rule.
- [ ] Headlines are the condensed display face, big and tight, in title case; the lead and article headlines are centered.
- [ ] Every story has a monospace kicker above and a monospace byline below; dates and read times use the same voice.
- [ ] Columns are separated by vertical hairlines and stacked stories by horizontal hairlines.
- [ ] The page is black, white and gray; color comes only from pictures, the accent appears in a handful of places.
- [ ] Nothing is rounded and nothing has a shadow.
- [ ] Copy is specific and calm; no exclamation marks, clickbait or lorem ipsum.

## Pictures

- [ ] One art direction across every picture (flat color fields and halftone, or one consistent photographic look).
- [ ] Thumbnails keep their subject in the middle after the square crop.
- [ ] Every image has `alt`, `width` and `height`; decorative thumbnails have `alt=""`; below-the-fold images are lazy.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Views fade in once; nothing loops, zooms or scrolls on its own.
- [ ] With reduced motion, views and the menu appear instantly.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every nav, kicker, headline, byline, tab, footer and menu link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The menu opens from the left, closes with Escape, the close button, the backdrop and any link; search filters stories and shows an empty message.
- [ ] The theme toggle switches light and dark and remembers the choice; the system setting is the default.
- [ ] Topic chips filter the cards, "Load more" reveals the rest, and the empty message appears when nothing matches; `?c=` sets the section.
- [ ] The billing switch changes every price and period line; plan buttons preselect the plan on the sign-up form.
- [ ] Every form shows an error under each invalid field without moving anything, a sending state and a success message, and works inside a sandbox without `allow-forms`.
- [ ] The reading progress bar appears only on articles; the Save toggle remembers its state.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px, in light and dark.
- [ ] No horizontal scrolling at any width (check `scrollWidth <= innerWidth` at 390 without phone emulation).
- [ ] Under 1100px the lead story goes full width; under 760px everything is one column and thumbnails stay beside their headlines.
- [ ] The header fits on one line at 360px.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Body text and muted text meet 4.5:1 in both themes; the accent meets 4.5:1 on the page.
- [ ] The accent focus ring is visible on every interactive element.
- [ ] Landmarks: header, nav, main, footer; one `h1` per view (a visually hidden one on the front page).
- [ ] Form fields have labels; errors are announced and linked with `aria-describedby`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families (display and body); labels use the system monospace.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including the brand mark, the strip text and the newsletter names.
- [ ] Every fact you drafted (writers, dates, prices, issue schedules, quotes) is listed in your reply for the user to confirm.
- [ ] Privacy and terms are marked as sample text until the owner supplies real policies.
- [ ] Nothing quotes real people, cites studies or claims readership numbers, awards or partners the user did not supply.
- [ ] If the user needs newsletters that really send, subscriptions that really charge, a member login or articles they edit without code, you have read `references/kanorio.md`.
