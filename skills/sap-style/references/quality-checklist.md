# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The light theme is white with deep slate text, blue actions and violet only in the gradient, stars, scenes and figures; the dark theme is deep indigo with near-white text and light blue actions.
- [ ] The home hero is the gradient band with a white headline, a white button and a white outline button, and the floating product card in its frosted bezel on the right.
- [ ] The product card tells one task of this brand from request to result, with a note and an avatar overlapping its corners.
- [ ] Corners grow with size: 8px buttons and fields, 16px cards and media, 20px panels, 28px gradient blocks, pills for chips and tabs.
- [ ] Every "Learn more" style link is blue with the CSS chevron; links inside sentences have no chevron (`.text-link` or prose links).
- [ ] At most two stars per viewport; none covers text or a control.
- [ ] The home page shows at least four signature elements: gradient hero, product card, stars, media frames with snippets, story switcher, chevron links, floating contact button.
- [ ] Copy is outcome first and specific, free of hype words, exclamation marks, em dashes and lorem ipsum.

## Images and panels

- [ ] Scene tones alternate; `.t4` appears at most twice per view.
- [ ] Every media frame has one small panel with the brief's own nouns and numbers, or a real photo with a panel on top.
- [ ] Every raster image has `alt`, `width` and `height`; photos are real or clearly marked placeholders listed in the reply.
- [ ] No screenshots or logos of real products or companies unless the user supplied them.

## Motion

- [ ] The hero text rises, the product card lifts in once, the floating button arrives last.
- [ ] Stars drift and the note bobs slowly; with reduced motion, everything is still and in place.
- [ ] Content is visible with JavaScript turned off, including a summary card in each data-drawn list and the first module.

## Completeness and interaction

- [ ] Every view in the nav exists and every link reaches a view, a section ID or a real page; there is no `href="#"`.
- [ ] The story switcher opens one item at a time and updates the frame (logo, figure, tone).
- [ ] Module tabs switch by click and arrow keys, and `?tab=` links open the right one.
- [ ] The billing pills swap every price and the "billed" line.
- [ ] Filters update the list, the live count and the empty state; reset buttons restore everything; search narrows resources as you type.
- [ ] Each form shows inline errors in a reserved line (the submit button does not move), focuses the first invalid field, and replaces itself with a success panel; Enter submits.
- [ ] Event Register buttons select the event in the form; `?topic=` preselects the demo topic.
- [ ] The theme toggle works and is remembered; the menu dialog opens, closes with its button, Escape and the backdrop, and closes when a link is chosen.
- [ ] `MODULES`, `STORIES`, `POSTS` and `TEAM` use the same keys as the filter buttons, the region select and the demo topic options.

## Responsive

- [ ] At 1440, 1024, 768 and 390 px the header never wraps.
- [ ] Nothing scrolls sideways at 390 px; tables scroll inside their own wrapper; pill rows scroll inside their track.
- [ ] The hero stacks under 960px with the card below the text; overlapping panels stay inside the screen.
- [ ] The floating button becomes a circle on phones and does not hide a form's submit button.

## Accessibility

- [ ] One `<h1>` per view; headings in order; cards have readable link text.
- [ ] The product card and the workspace table have `role="img"` with a label that says what they show; decorative scenes and stars are `aria-hidden`.
- [ ] Focus is visible on every control; the skip link works.
- [ ] Tabs use `role="tablist"`, `role="tab"` and `role="tabpanel"` with `aria-selected`; filter and billing pills use `aria-pressed`; story buttons use `aria-expanded`; counts are `aria-live`.
- [ ] White text on the gradient and muted text on lavender layers meet WCAG AA in both themes.

## Performance

- [ ] One font file only, preloaded.
- [ ] The finished single file is under 1 MB without photos.

## Real brief

- [ ] Every customer, figure, price, quote, date and person comes from the user or is a marked placeholder listed in the reply.
- [ ] No invented testimonials, awards, certifications, partner logos or compliance badges.
- [ ] All sample strings from the Replace checklist in SKILL.md are gone.
