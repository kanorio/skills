# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The header is white (evergreen black in the evening) with uppercase tracked links and the green tab under the current section.
- [ ] Home opens with a full-bleed green band and continues with split blocks that alternate sides, separated by 32px of page colour.
- [ ] Copy in bands and panels is centred, with one pill per block; nothing sits on top of a photograph.
- [ ] Every button is a pill: outline or solid, white on green.
- [ ] One family (Nunito Sans) in heavy weights for headings; uppercase only in the navigation and eyebrows.
- [ ] Gold and terracotta stay rare: the middle tier, eyebrows, icons on cream, one "New" tag per category.
- [ ] No emoji, no festive clip art, no cups, mascots or logos that copy a real chain.
- [ ] Copy is short, specific and friendly, with no exclamation marks in headings and no lorem ipsum.

## Pictures

- [ ] All scenes share the same light from the upper left and the same paper grounds; cut-outs are on transparent grounds inside the green circles.
- [ ] Split photos keep their subject in the middle, so the crop works at 1440, 768 and 390.
- [ ] Every image has `alt`, `width` and `height`; cut-outs inside named links use `alt=""`.
- [ ] Every remaining placeholder picture is listed in your reply.

## Motion

- [ ] The opening band rises once on load; steps, tiers, values and dates rise once as they enter.
- [ ] Nothing loops or autoplays.
- [ ] With reduced motion, everything appears in place and still.
- [ ] Content is visible with JavaScript turned off, including every view, every menu item and every café.

## Completeness and interactions

- [ ] Every nav, footer, band, menu and card link reaches a view, a section or a real page; the 404 view catches the rest.
- [ ] The menu sheet opens and closes with the button, Escape, the backdrop and a link.
- [ ] The theme toggle works and remembers the choice; the system setting is the default.
- [ ] Menu chips filter items and hide empty categories; the empty message offers a reset.
- [ ] Every menu item opens the drink page with its own name, picture, calories, options and price; size, shots and quantity reprice the order card.
- [ ] The pickup café is shared between the menu strip and the order card; ordering without one shows an error under the field.
- [ ] The café search and chips update the list and the live count; a card and its pin select each other.
- [ ] Gift designs filter by occasion; the preview follows the design, amount and recipient; the message counter updates.
- [ ] Rewards tabs work with clicks and arrow keys.
- [ ] Every form shows an error under each invalid field without moving the submit button, a sending state and a success panel, also inside `<iframe sandbox="allow-scripts">` and with Enter.
- [ ] Document titles change per view and per item.

## Responsiveness

- [ ] Checked at 1440, 1024, 768, 390 and 360 px.
- [ ] The header never wraps at 1440, 1024 or 768; it hides the find label first and then switches to the menu button.
- [ ] No horizontal scrolling at any width (`scrollWidth <= innerWidth` in a normal 390px window); tab bars and the sub-navigation scroll inside themselves.
- [ ] On phones split photos stack above their panel, the menu drops its sidebar, the map sits above the café list, and forms go to one column.
- [ ] Touch targets are at least 40px.

## Accessibility

- [ ] Landmarks: header, nav, main, footer; one `h1` per view.
- [ ] White text on green and spruce links on cream meet WCAG 2.2 AA in both themes.
- [ ] Focus rings are visible on every interactive element in both themes, including size cards and amount pills.
- [ ] Tabs use `role="tablist"`, `aria-selected` and `aria-controls`; chips and pins use `aria-pressed`; counts and errors use `aria-live`.
- [ ] The find link keeps its accessible name when only the pin icon shows.

## Performance and sandbox

- [ ] The single-file page makes no network requests and runs inside `<iframe sandbox="allow-scripts">`.
- [ ] One font family with a Latin subset; pictures under 200 KB each; the file stays under 2 MB.
- [ ] No `alert`, `confirm`, `prompt`, `window.open` or top navigation.

## Real brief

- [ ] Every sample string from the Replace checklist is gone, including café names, street names on the map, the rewards program, its tiers and its points name.
- [ ] Prices, calories, caffeine, allergens, opening hours and reward rules come from the owner; anything you drafted is listed in your reply.
- [ ] Nothing claims awards, certifications, sourcing or charity facts the user did not supply.
- [ ] If the user needs orders that really arrive, forms that deliver, member login, gift card payments, editable menus or a newsletter, you have read `references/kanorio.md`.
