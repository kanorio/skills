# Pre-delivery checklist

Walk this list after `node scripts/validate.mjs` prints `ok` and you have looked at the site in a browser.

## Look and feel

- [ ] The header is a white bar with the wordmark plate in the middle, menu-and-search on the left and theme plus one filled button on the right.
- [ ] The section row sits under it on one line, centred, with the current section underlined in ink; it scrolls sideways on phones instead of wrapping.
- [ ] The front page opens with the three columns: picture cards, the lead in the middle, text-only stories on the right.
- [ ] Every headline is the serif at 600; every story has a gray "time | section" line split by a thin vertical rule.
- [ ] Every block opens with a 2px ink rule and a small capital label; there are no boxed cards, shadows or rounded corners.
- [ ] Red appears only for live coverage, section titles, live time tabs and ranking numbers.
- [ ] Video and audio carry a black badge with the duration; credited pictures carry the dark credit box.
- [ ] Video and audio sit on the full-width dark band; the footer is dark too.
- [ ] Copy is plain, specific and dated; no teasers, no exclamation marks, no lorem ipsum.

## Pictures

- [ ] One documentary language across every picture, 16:9, subjects in the middle third.
- [ ] Lead, hero, live and inline pictures have real alt text and a credit; card pictures beside their headline are `alt=""`.
- [ ] No generated picture stands in for a real event without saying it is an illustration.
- [ ] Every new picture is in `<template id="pics">` if the script uses it, and placeholder pictures are listed in your reply.

## Motion

- [ ] Only the live dot moves on its own; with reduced motion it is still.
- [ ] New live posts wait behind the "New updates" button and never shift the text the reader is on.
- [ ] Views fade in once; the menu slides in; nothing zooms or auto-scrolls.

## Completeness and interaction

- [ ] Every link reaches a view, a section ID, a `mailto:` address or a real page; no `href="#"`.
- [ ] Section pages: the route sets the title, the sub-row filters, "Show more stories" adds cards, the empty message appears when nothing matches.
- [ ] Live page: "Key posts only", "Show earlier updates" and "New updates" all work.
- [ ] Watch page: the format filter works, cards load into the player, play and Listen toggle.
- [ ] Menu search finds stories by headline, section and town, and says so when nothing matches.
- [ ] Every form validates inline, keeps the submit button still while errors appear, and shows a success state. Submit runs from the button's click, so it works in a sandboxed frame.
- [ ] Each view has exactly one `h1`; the front page's is visually hidden.
- [ ] The sample brand, people, towns and email addresses are all replaced (the validator checks the list in SKILL.md).

## Responsive

- [ ] 1440, 1024, 768 and 390 px wide in light and dark: the header never wraps, nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth`), headlines wrap cleanly.
- [ ] Under 700px the lead picture runs edge to edge and side cards become thumbnail rows.
- [ ] Touch targets are at least 44 x 44 px.

## Accessibility

- [ ] Body and muted text meet 4.5:1 in both themes, including gray text on the dark band and red on white.
- [ ] Focus rings are visible on every control, on white and on the dark band.
- [ ] The menu is a `<dialog>` with a labelled search field; filters use `aria-pressed`; the current section uses `aria-current="page"`.
- [ ] Live time tabs, badges and the live tag are not the only way to tell something: the words "Live", "Key post" and the duration are there in text.

## Performance

- [ ] Two font families, preloaded, `font-display: swap`; nothing loads from another host.
- [ ] Pictures are sized to their slot; a built site lazy-loads pictures below the first screen.

## Real brief

- [ ] Every headline, quote, person, figure, time and address is from the user or marked as a placeholder and listed in your reply.
- [ ] No invented quotes from real people, no real events presented as reported, no readership or award claims.
- [ ] The live page is only used for coverage that is actually live, or clearly labelled as an example.
