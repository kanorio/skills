# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is warm cream, cards are white without borders, and green appears only on pills, chips, the send button and one line in the ink band.
- [ ] Headlines are Albert Sans at weight 400 and very large; nothing in the page is set in uppercase.
- [ ] Home keeps at least five signatures: the photo hero with floating bubbles, the voices around one statement, phone rows that alternate, the ink band with a green second line, the mint panel of cards, pill buttons.
- [ ] Every page has at least one chat bubble, and every bubble reads like a real message with a time on it.
- [ ] Outgoing bubbles are pale green on the right, incoming ones white on the left; only the first of a run has a tail.
- [ ] Copy is short, warm and specific, with no exclamation marks in headlines and no lorem ipsum.
- [ ] No emoji in bubbles, reactions or anywhere else; no logos or interface screenshots of real messaging apps.

## Pictures

- [ ] All photographs share the same warm light and soft background; the hero has a calm darker left side for the headline.
- [ ] Photos keep their subject in the middle, so the crops work at 1440, 768 and 390.
- [ ] Every image has `alt`, `width` and `height`; pictures inside decorative phones use `alt=""`.
- [ ] Every remaining placeholder picture and avatar is listed in your reply.

## Motion

- [ ] The hero rises once on load; bubbles pop in one after another as they enter, from their tail side.
- [ ] The voices drift slowly and nothing else loops.
- [ ] With reduced motion, everything appears in place and still, and the quote reply shows without the typing dots.
- [ ] Content is visible with JavaScript turned off, including every view, every price row, event and note.

## Completeness and interactions

- [ ] Every nav, footer, card and pill link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The menu opens and closes with the button, Escape and a link, and closes when the window grows past 1100px.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The weekday and evening toggle swaps every price that has both values.
- [ ] Price chips and search update the list and the live count; the empty state offers the quote form.
- [ ] Event chips filter the dates; every "Save a place" fills the date in the form and scrolls to it; the people stepper stays between 1 and 4.
- [ ] Note chips and search filter the notes; every note opens its own article with its own title, picture and steps.
- [ ] The notes track scrolls with the arrows, which disable at each end.
- [ ] FAQ search opens matching questions and hides empty groups.
- [ ] The quote preview mirrors the message and the counter updates; after sending, the phone shows read ticks, typing and a reply.
- [ ] Every form shows an error under each invalid field without moving the submit button, then a success state, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view and per note.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] The header never wraps at 1440, 1024 or 768; below 1100px the links move into the menu.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); the notes track scrolls inside itself.
- [ ] On phones the hero bubbles hide, rows stack copy first, voices move above and below the statement without being cut off, and forms go to one column.
- [ ] Touch targets are at least 40px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Ink text on the bright green, ink on pale green bubbles and white on the ink band meet WCAG 2.2 AA in both themes.
- [ ] Focus rings are visible on every interactive element in both themes, including radio pills and chips.
- [ ] Decorative phones, floating bubbles and voices are `aria-hidden`; whatever they say is also in the copy.
- [ ] Chips and the segmented control use `aria-pressed`; counts and errors use `aria-live`; FAQ uses native `<details>`.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; pictures under 200 KB each; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including the neighbourhoods, the street, the team, the customer in the story and the phone number.
- [ ] Prices, opening hours, reply times, guarantees, numbers in the ink band and the story's dates come from the owner; anything you drafted is listed in your reply.
- [ ] The thank-you messages around the statement are either real (with permission) or clearly generic; no invented reviews, ratings or awards.
- [ ] If the user needs forms that really deliver, bookings, payments, member login, editable notes or a newsletter, you have read `references/kanorio.md`.
