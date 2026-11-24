# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] Every view opens with a full-bleed stage: art edge to edge (or the plain grape gradient), a dark scrim at the bottom, a heavy white title at the lower left (centred on phones).
- [ ] The translucent grape header floats over the art; nav links and small labels are UPPERCASE with wide tracking.
- [ ] Content sits on orange bands with hard-edged goo blobs; band titles are UPPERCASE in band ink with a "more" link on the right.
- [ ] Cards are white (deep grape in dark), 4px corners, a hard orange-red underline, tight 10px gaps, three across on desktop.
- [ ] Night panels (split, promo) hold big headlines and art only; no cards on night, no headline panels on orange.
- [ ] Lime is the only button colour; one primary button per block.
- [ ] The footer is grape to plum with centred links and logo, after a thin goo strip.

## Images

- [ ] Every stage and card shows the brand's own art in one cartoon language: outlines, big eyes, flat bright colour, a strong sky.
- [ ] No existing character, logo, title lettering or show still; no lookalikes.
- [ ] Main subjects sit in the middle third and survive the phone crop and the stage title.
- [ ] All image paths are written out in full; every `<img>` has `alt`, `width` and `height`; no `loading="lazy"`.

## Motion

- [ ] Entrances are keyframes under the `js` class; buttons wobble on hover; cards lift with a growing underline.
- [ ] The carousel has dots, arrows and a pause button; autoplay stops on hover, on focus and with reduced motion.
- [ ] With reduced motion nothing moves and everything is visible.

## Completeness and interaction

- [ ] Every sample string from the replace checklist is gone; title, description and Open Graph tags describe the real brand.
- [ ] Every card, button and link reaches a view, a section or a real page; no `href="#"`.
- [ ] Chips and search filter with live counts and an empty state; `?age=`, `?kind=`, `?cat=` and `?q=` preselect.
- [ ] The detail pages (`?id=`) fill every field, and unknown ids fall back to the first item.
- [ ] The trailer dialog opens, captions change, and it closes with the button, Escape and a click outside, returning focus.
- [ ] Every form shows inline errors without moving its button, focuses the first problem, and shows a success state after the button is clicked (and after Enter).
- [ ] The camp summary total follows the chosen option and extras; full options are disabled.
- [ ] The theme toggle switches and remembers both themes; the menu opens, closes on a link and on Escape.

## Responsive

- [ ] At 1440, 1280 and 1160 the header stays on one line with every link; at 1024 and 768 the links are in the menu.
- [ ] At 390 (and 360) nothing scrolls sideways: check `document.documentElement.scrollWidth <= innerWidth` without phone emulation.
- [ ] On phones the stage art takes the top two thirds and the copy sits centred on black; cards stack; drips are hidden; split and promo stack with the art first.

## Accessibility

- [ ] One H1 per view (the home H1 is visually hidden; slide titles are H2).
- [ ] Focus rings show on orange, white, night and grape, in both themes (ink on light areas, lime on dark).
- [ ] Ink text on orange and white; white text on night, grape and the scrim; muted text passes 4.5:1.
- [ ] Chips expose `aria-pressed`; carousel slides that are not current are `inert`; the menu button exposes `aria-expanded`.
- [ ] Touch targets are 40px or more.

## Performance

- [ ] Two font families (one weight of the display face, the variable body face), `font-display: swap`.
- [ ] Art is SVG or compressed WebP; the single file makes no external requests.

## Real brief

- [ ] Prices, ages, dates, capacities, opening hours, safety and refund policies come from the user, or are marked placeholders listed in your reply.
- [ ] No invented reviews, awards, viewer numbers, broadcast partners or certifications.
- [ ] Forms say nothing is sent until an endpoint is connected; bookings are requests until a real checkout exists.
