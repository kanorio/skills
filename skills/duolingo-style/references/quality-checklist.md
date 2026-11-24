# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The page is white (deep blue-gray in dark), and color comes from buttons, bubbles, banners and drawings.
- [ ] Section headlines are lowercase Fredoka in green with a period; the home H1 and article titles are sentence case.
- [ ] Every button, card, tile, chip and stop has the solid bottom edge; nothing uses a soft drop shadow except the menu sheet.
- [ ] Buttons sink when pressed, and labels on bright fills are a deep shade of the fill, never white.
- [ ] Uppercase appears only in labels, buttons, navigation, chips, tags and the strip.
- [ ] Feature rows alternate the drawing left and right.
- [ ] No emoji, icon fonts, gradients (except the one word in the navy band), glass, blur or sharp corners.
- [ ] Copy is short and kind, free of hype, em dashes and lorem ipsum; exclamation marks only in lesson feedback and results.

## Characters and images

- [ ] One mascot and one cast across the site, in the fixed palette, with big eyes and no outlines.
- [ ] The hero drawing is the busiest; feature drawings show one idea each.
- [ ] Characters never cover text, buttons or form fields, at any width.
- [ ] No real mascot, character or lookalike; children's photos only with the owner's consent.
- [ ] Every image has `alt` (empty for decoration), `width` and `height`.

## Motion

- [ ] Buttons and stops sink on press; reveals rise once with a small overshoot.
- [ ] Only the "start" bubble loops, and it stops with reduced motion.
- [ ] With reduced motion, everything appears complete and still.
- [ ] Content is visible with JavaScript turned off, including every lesson question.

## Completeness and interactions

- [ ] Every nav, footer, card, strip and arrow link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The mobile menu opens, traps focus in the dialog, and closes with Escape, the close button and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] The strip arrows scroll; filters update the cards, the count and the empty state.
- [ ] Path stops open a popover (locked ones explain why), and Escape or a click outside closes it.
- [ ] The lesson: Check stays disabled until a pick, right and wrong answers color the tiles and the bar, hearts drop on a mistake, number keys pick answers, the results screen shows XP and accuracy, Try again resets.
- [ ] The billing switch updates every price and its line; `?plan=` outlines the right card.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">`.
- [ ] Document titles change per view.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] No horizontal scrolling at any width (`document.documentElement.scrollWidth <= innerWidth` in a normal 390px window); tables scroll inside their own frame.
- [ ] The hero stacks with the drawing first; the path's offsets shrink on phones and the popover stays on screen; the course side column moves under the path.
- [ ] Touch targets are at least 44px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] Text contrast meets WCAG 2.2 AA in both themes: green headlines only at headline sizes, deep labels on bright fills, muted text on `--surface-2`.
- [ ] Focus rings are visible on every interactive element, including choice tiles, chips, path stops and the footer.
- [ ] Choice groups are `role="radiogroup"` with labelled radios; filters and the billing switch use `aria-pressed`; stops have an `aria-label` that says done, current or locked; the progress bar has `role="progressbar"` and a value.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] Two font families with Latin subsets; SVG drawings only; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample name and string from the Replace checklist is gone, including the mascot's name, the quotes and the team.
- [ ] The lesson questions are about the real subject, and their answers are correct.
- [ ] Every fact you drafted (prices, ages, schedules, teachers, policies) is listed in your reply for the user to confirm.
- [ ] Nothing claims learner numbers, results, research, awards, accreditations or safety certifications the user did not supply.
- [ ] If the user needs forms that deliver, editable content, payments, member login, courses or a newsletter, you have read `references/kanorio.md`.
