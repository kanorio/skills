# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser, in light and dark.

## Look and feel

- [ ] The home page's first screen holds only the wordmark, the pill search box, two quiet grey buttons, one line of small links, the corner utility links and the footer bar. No pictures, cards or marketing copy.
- [ ] On home the header has no logo; inner pages show the mark and wordmark on the left and a tab row with a blue indicator under the current page.
- [ ] One filled blue pill per screen (the header action), plus at most the submit button of a form. Other actions are quiet grey, tonal or text links.
- [ ] Color is limited to the blue, the pale tonal blue and the small category dots; no gradients, colored sections or colored headings.
- [ ] Headlines are Gantari 400, centered on index pages, never bold; titles of cards and panels are 500.
- [ ] Panels are pale blue-grey with 24px corners and white icon wells; cards have no box or shadow.
- [ ] The footer is the grey bar with the place line on top and small links below.
- [ ] Copy is plain and brief, leads with the answer, and has no exclamation marks, emoji or lorem ipsum.

## Images

- [ ] Every listing and note has its own picture in one consistent daylight language, cropped to 16:10 on cards and 4:3 on detail pages.
- [ ] Pictures always have rounded corners and never sit behind text.
- [ ] The home view has no pictures.
- [ ] No other company's photos, logos or products; every image has `alt`, `width` and `height`.

## Motion

- [ ] Views and the home column rise in once; nothing loops, bounces or follows the scroll.
- [ ] The search box lifts with a shadow on hover and focus; the suggestion list fades in.
- [ ] With reduced motion everything is visible at once.
- [ ] Content is visible with JavaScript turned off.

## Completeness and interactions

- [ ] Every header, menu, card, chip, footer and button link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The home box suggests real content as you type, the arrow keys and Enter work, Escape closes the list, and the clear button empties it. "Search" and the second button both do something.
- [ ] Index-page search boxes filter as you type; chips follow `?cat=`; counts, "Show more" and empty states are right.
- [ ] Detail pages follow `?id=`, and save, share and nearby work.
- [ ] Every form shows an error under each invalid field without moving the button, a sending state and a success panel, and works with the button and with Enter, also inside a sandboxed frame.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width.
- [ ] The header never wraps; below 900px the links move into the menu sheet.
- [ ] The two home buttons stay side by side or wrap neatly; button labels never break inside.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view (the wordmark on home).
- [ ] Text contrast meets WCAG 2.2 AA in both themes, including muted text on the pale panels, white on blue and navy on light blue in dark mode.
- [ ] Focus is visible on every link, button, chip and field; the search box shows its shadow on focus.
- [ ] The home box is a combobox: `aria-expanded`, `aria-controls`, `aria-activedescendant` and options with `aria-selected`.
- [ ] Icons are `aria-hidden`; icon-only buttons have an `aria-label`; chips and toggles use `aria-pressed`.
- [ ] Form fields have labels; errors are linked with `aria-describedby`; option groups are fieldsets with a legend.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font file; the whole file stays under 1 MB with the pictures embedded.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including place names, areas, hours, events, notes, people and the email address.
- [ ] Every fact you drafted (hours, addresses, dates, prices, timetables, policies) is listed in your reply for the user to confirm.
- [ ] Nothing claims awards, ratings, reviews, certifications or numbers the user did not supply.
- [ ] If the user needs forms that deliver, content they edit themselves, accounts, a newsletter, payments or hosted media, you have read `references/kanorio.md`.
