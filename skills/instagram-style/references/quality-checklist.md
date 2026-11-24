# Quality checklist

Walk this list before delivering. Every item is a yes or no.

## Visual

- [ ] The home hero is a split screen: headline with one gradient phrase and the fan of three story cards on one side, a hairline, the form panel on the other (stacked below 900px).
- [ ] Headlines are weight 500 with tight spacing; exactly one gradient phrase per screen.
- [ ] The gradient appears only on rings, the mark, step numbers, the success tick, the nav dot and that phrase.
- [ ] Every face and highlight sits in a gradient ring with a page-coloured gap; watched highlights turn grey.
- [ ] The grid is three columns of 4:5 photographs, 4px apart, with square corners, at every width.
- [ ] One blue button per screen; other actions are grey or outlined.
- [ ] Stickers appear only in the hero fan.
- [ ] Both themes are complete: rings keep a gap the colour of the page, prints keep their paper, text and lines are readable.

## Pictures

- [ ] All photographs share one light and one grade; the grid reads as one feed.
- [ ] Subjects survive the 9:16 story crop and the round crop.
- [ ] Every `<img>` has `alt`, `width` and `height`; decorative copies use `alt=""`.
- [ ] Placeholders are listed in the reply; nothing is hotlinked.

## Motion

- [ ] The fan opens once, stickers pop after it, and nothing else animates on load.
- [ ] The heart pops when liked; double-clicking the post photograph shows the heart burst.
- [ ] The story viewer advances, pauses, steps with arrows and taps, and closes with Escape.
- [ ] With reduced motion everything appears in place and the viewer starts paused.

## Completeness and interaction

- [ ] Every link reaches a view, a section ID or a real page; there is no `href="#"`.
- [ ] Highlights open the viewer; "Open the photograph" goes to the post.
- [ ] Work: the series chips filter with counts, the tabs switch with clicks and arrow keys, the counts come from the data.
- [ ] Post: like, save, share, previous and next, and "Ask about this photograph" opening Contact with the title.
- [ ] Prints: filter chips, size and quantity update the price, Add to bag updates the count, the bag edits and removes lines and shows an empty state.
- [ ] Every form shows errors on blur and on submit without moving the button, then a success panel that repeats what was entered; Enter submits.
- [ ] Conditional fields (people for a session) appear, and are required, only when they apply.
- [ ] Saved and the bag survive a reload in a normal browser and still work inside a sandboxed frame.
- [ ] The theme toggle works and remembers the choice.

## Responsive

- [ ] 1440, 1024, 768 and 390 px wide: the header never wraps, nothing scrolls sideways (`document.documentElement.scrollWidth <= innerWidth` in a normal, non-mobile 390 window).
- [ ] At 390 the hero stacks, the fan keeps all three cards, the grid stays three columns, walk cards scroll sideways, the post panel folds around the photograph.
- [ ] Touch targets are at least 44 by 44 px.

## Accessibility

- [ ] One `h1` per view; headings go down one level at a time.
- [ ] Focus rings are visible on links, buttons, fields, chips, options, tiles and highlights.
- [ ] Icon buttons have labels; toggles use `aria-pressed`; tabs use `role="tab"` with `aria-selected`.
- [ ] Field errors are linked with `aria-describedby` and fields get `aria-invalid`.
- [ ] Body text and links meet 4.5:1 in both themes; the gradient phrase is at least large text.

## Performance

- [ ] One font file; the single file embeds it and the pictures with `node scripts/inline.mjs`.
- [ ] Pictures are WebP or AVIF under 150 KB each.
- [ ] `node scripts/validate.mjs <file>` prints `ok`.

## Real brief

- [ ] Every sample string from the Replace checklist is gone: names, handle, email, place, series, captions, prices, walk dates.
- [ ] No invented follower counts, likes, comments, reviews, press or clients.
- [ ] Prices, hours, addresses, dates and policies come from the brief or are marked placeholders and listed in the reply.
