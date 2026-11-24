# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page alternates full-bleed photographs with black, white and grey bands; there are no boxed heroes and no coloured bands.
- [ ] Headlines are Host Grotesk at weight 500, very large and tightly spaced; nothing is set in uppercase and there are no eyebrow labels.
- [ ] Home keeps at least four signatures: the photo hero with the glass frame, pill tabs that swap a picture or mockup, an ink band with one huge line, a card or phone mockup, the trust band of figures.
- [ ] The accent color appears only as a signal (switch on, progress, ticks, the badge, focus), never as a band or a large fill.
- [ ] Pills are solid black on light bands, solid white on photographs and ink, outline for the second action.
- [ ] Copy is short and specific, with no exclamation marks, no superlatives and no lorem ipsum.

## Pictures

- [ ] Every photograph fills its band edge to edge, with a calm top third for the headline and the subject under the frame.
- [ ] Pictures that share tabs have the same horizon and exposure; the cross-fade does not jump.
- [ ] White type on every photograph reads at 1440, 768 and 390 in both themes (the scene gradient is in place).
- [ ] Every image has `alt`, `width` and `height`; decorative mockups are `aria-hidden`.
- [ ] Every remaining placeholder picture is listed in your reply.

## Motion

- [ ] The hero headline rises once per view; the glass frame lifts into place; bands fade up as they arrive.
- [ ] Tabs cross-fade the picture and the frame together; nothing changes on its own.
- [ ] With reduced motion, everything appears in place and tabs switch instantly.
- [ ] Content is visible with JavaScript turned off, including every view, session, plan and story.

## Completeness and interactions

- [ ] Every nav, footer, card and pill link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The header is transparent over photo and ink heroes and solid everywhere else and after scrolling.
- [ ] The menu opens and closes with the button, Escape and a link, and closes when the window grows past 1080px.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Every tab group changes what is above it and marks the chosen tab with `aria-pressed`; the billing tabs swap every price and period.
- [ ] Session chips and search update the list and the live count, with an empty state; every "Book a place" fills the form and scrolls to it; the guest stepper stays within its limits.
- [ ] Journal chips filter the stories; every story opens its own post with its own title, picture and quote.
- [ ] Help search opens matching questions and hides empty groups.
- [ ] The card on the join page follows the name and plan as the visitor types; `?plan=` preselects a plan.
- [ ] Every form shows an error under each invalid field without moving the submit button, then a success state, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view and per post.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] The header never wraps at 1440, 1024 or 768; below 1080px the links move into the menu.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); the card fan and the frame are clipped by their band, not by the page.
- [ ] On phones the hero stacks headline, lead, pill, then the frame cut by the bottom edge; split bands stack copy first; plans and tiles go to one column; tabs wrap.
- [ ] Touch targets are at least 40px (switches 30px tall inside a 50px wide track).

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] White on every photograph, white on ink, black on white and the muted grey meet WCAG 2.2 AA in both themes.
- [ ] Focus rings are visible on every interactive element in both themes, including radio pills, tabs and switches.
- [ ] Tabs and chips use `aria-pressed`, switches `role="switch"` with `aria-checked` and a label; counts and errors use `aria-live`; FAQ uses native `<details>`.
- [ ] Ticks in the comparison table have an accessible name.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; pictures under 200 KB each.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including the venues, neighbourhoods, people, addresses and email addresses.
- [ ] Prices, plan limits, figures in the trust band and the frames, opening hours and the story's dates come from the owner; anything you drafted is listed in your reply.
- [ ] No invented ratings, member counts, awards, press quotes or regulator badges; nothing promises returns, savings, health results or safety.
- [ ] If the user needs forms that really deliver, sign-ups or member login, bookings, payments, editable content or a newsletter, you have read `references/kanorio.md`.
