# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is night teal by default; the cream theme is complete and only appears after the toggle.
- [ ] Display and headings are thin (200 to 300), never bold; labels are small tracked capitals.
- [ ] The hero is a slow slideshow of night photographs with the composer in a plum band at the top, the line bottom left and the place with its control box bottom right.
- [ ] The espresso shortcut strip sits under the hero, and the footer is the same espresso.
- [ ] Every card title has the champagne hairline under it.
- [ ] Inner views open with a photograph (or a page head), then the teal crumb bar with the current page in champagne.
- [ ] Champagne fills one button per screen, the pressed tab and the chosen pace; nothing else is filled with it.
- [ ] Every action is a pill; no square buttons, no shadows.
- [ ] Copy is calm and exact: three to eight words per headline, no exclamation marks, no superlatives.

## Pictures

- [ ] All pictures share one grade: blue hour or night, teal shadows, amber practical lights.
- [ ] The lower third of every slide is dark enough for the words; page-hero words sit on the scrim.
- [ ] No aircraft, uniforms, logos or text from any real company appear in pictures.
- [ ] Every `<img>` has `alt`, `width` and `height`; place squares inside named links use `alt=""`.
- [ ] Placeholder pictures are listed in your reply.

## Motion

- [ ] Slides cross-fade slowly and drift; the slideshow pauses on hover, on focus, in a hidden tab and away from home, and the pause button works.
- [ ] With reduced motion, the slideshow starts paused and everything appears complete and still.
- [ ] Content is visible with JavaScript turned off: the first slide, every view, every journey, date, note and salon panel.

## Completeness and interactions

- [ ] Every nav, card, rail, shortcut, crumb, footer and note link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] Header links stay on one line at 1440, 1024 and 768 px; when they do not fit, the menu button appears.
- [ ] The menu dialog opens, keeps focus inside, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; night teal is the default.
- [ ] The notice pager steps through every notice.
- [ ] The composer requires "To", swaps From and To, and opens the enquiry with the places and month preselected.
- [ ] The rail arrows scroll and disable at the ends.
- [ ] `#/journey?j=<id>` fills the name, facts, price, picture, lead, rows and the enquiry links for every journey.
- [ ] Filters update the list, the count and the empty message; `?mode=`, `?length=`, `?kind=` and `?topic=` preselect.
- [ ] Salon tabs switch with clicks, arrow keys, Home and End.
- [ ] The billing switch swaps every tier amount and its period.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and when submitted with Enter.
- [ ] Document titles change per view and per journey.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (check `document.documentElement.scrollWidth <= innerWidth` in a normal, non-emulated 390px window too); the rail and the facts table scroll inside themselves.
- [ ] On phones the composer stacks (From, To, When, a full-width Compose) and the shortcuts become rows.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view (home uses a visually hidden one above the slides).
- [ ] The slideshow has `aria-roledescription="carousel"`, each slide `aria-roledescription="slide"` and a label, and the controls have labels.
- [ ] Text contrast meets WCAG 2.2 AA in both themes, on photographs too.
- [ ] Focus rings are visible on teal, cream, plum, espresso and photographs.
- [ ] Filter pills use `aria-pressed`; salon tabs use `role="tab"`, `aria-selected` and `aria-controls`; tables have captions.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One variable font file with the Latin subset; photographs compressed (WebP or AVIF, under 300 KB each).
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including places, journeys, salons, tiers and the reference format.
- [ ] Prices, dates, availability, opening hours and policies the user did not give stay as visible placeholders and are listed in your reply.
- [ ] Nothing claims awards, rankings, ratings, press or partnerships the user did not supply.
- [ ] If the user needs enquiries that arrive, journeys or dates they can edit, payments, member accounts or a newsletter, you have read `references/kanorio.md`.
