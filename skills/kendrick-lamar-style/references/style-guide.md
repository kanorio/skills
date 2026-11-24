# Style guide

The look in one sentence: an almost empty white page with a few pixel folders and documents left on it like things on a desk, small monospace labels at the edges, and every folder opening onto a black page with a back arrow, a date and a narrow column of text.

The site behaves like a desk, not like a brochure. Nothing shouts. The visitor finds the work by opening things, and the reward for opening something is a quiet black page that reads like a note left for them.

## Three kinds of page

Every view is one of three kinds, and the kind decides its surface:

| Kind | Surface | What it holds | Template views |
|---|---|---|---|
| **The desk** | white (`--desk`) | six or seven icons placed loosely on an empty canvas, and nothing else | home |
| **A folder** | white (`--desk`) | the folder's contents as icons or as a list, with filter words above | records, shows, store, notes |
| **A file** | black (`--file`) | one thing to read or do: a back arrow and a date, a title, a narrow column | record, item, note, about, contact, letter, legal, 404 |

The script puts `on-file` on the root while a file is open, so the header and footer turn black with the page. Each file view also sets the file tokens on itself, so without JavaScript the files still read as black sheets between the white folders.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Components never read the desk or file tokens directly: they draw with the page tokens `--pg`, `--ink`, `--muted`, `--line`, `--fill` and `--err`, which point at the desk set or the file set. Change values there, never inline.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--desk` (`background`) | white | charcoal, 17% | the desk and every folder page |
| `--desk-ink` (`text`) | near-black, 15% | 93% | labels, titles, the selection block |
| `--desk-muted` (`textMuted`) | 47% grey | 71% grey | counts, crumbs, second lines |
| `--desk-line` (`border`) | 88% grey | 32% grey | hairlines between rows |
| `--desk-fill` (`surface`) | 95.5% grey | 22.5% grey | fields, hovered filter words |
| `--file` (`file`) | black, 7% | black, 5% | every file page |
| `--file-ink`, `--file-muted`, `--file-line`, `--file-fill` | 96%, 71%, 31%, 14% | 91%, 68%, 29%, 12.5% | the same roles on black |
| `--accent` / `--accent-edge` / `--accent-ink` | orange / brown / near-black | lighter orange / brown / near-black | one folder, the "new" tag, text selection |
| `--f-grey` (`folderGrey`) | 78% grey | 50% grey | the grey folder |
| `--f-shadow` (`iconShadow`) | near-black | black | the one-pixel drop under every icon |
| `--dither` | black at 30% | black at 36% | the checkerboard laid over folder fronts |
| `--error`, `--file-error` | brick red, light brick | light brick | field errors on white and on black |

Every grey has zero chroma. The accent is the only colour in the interface and it appears in three places at most: one folder on the desk, the small "new" tag, and selected text. Colour otherwise comes from pictures.

Files are black in both themes. In dark, the desk and folders turn charcoal and files go one step darker, so opening a file still feels like stepping into a darker room; toggling the theme on a file page changes almost nothing, because the page is already dark. That is intended, not a missing theme.

## Typography

- One family: **DM Mono**, weights 400 and 500. Everything is monospace: labels, navigation, titles, body text, prices, dates, form fields. Never a second family "for readability".
- Body `--fs-body` 14px, line-height 1.6, in a column of 31rem at most (about 55 characters). Paragraphs are separated by a blank line (`1.4em`), never indented.
- Titles `--fs-h1` 15px at weight 500. A page title is barely bigger than the text under it; weight does the work, not size.
- Section heads `--fs-h2` 13px at 500 (legal headings, "not near you?").
- Labels, dates, counts, chips, crumbs `--fs-small` 12px.
- Display `--fs-display` 20px, used twice only: the price on an item page and the 404 line. Nothing on the site is bigger.
- Names of things are lowercase: folder names, navigation, dates ("march 06 2026"), record and product titles, button words ("add to bag"). Sentences in body text use normal capitals.
- Durations and prices use `font-variant-numeric: tabular-nums` so columns line up.

## Layout and spacing

- **The desk** fills the first screen: `min-height: max(560px, 100svh - header - footer)`. Each icon is absolutely placed by two custom properties on its own `style` (`--x`, `--y` as percentages of the desk), with a second pair for phones (`--mx`, `--my`, on a 760px tall desk). Leave at least one icon-width of empty space around every icon; the emptiness is the point.
- **The header** is three groups pinned to the edges: the name at the left, the folder names in the centre, contact and the theme toggle at the right, all at 13px. It never wraps; when the words do not fit, `fitNav()` swaps them for a "menu" word.
- **Folder pages** run edge to edge with the gutter (16 to 32px): a crumb ("desk / records"), the folder icon at 1x beside a 15px H1 and its count, a one-line lede, then filter words and the contents.
- **File pages** are left-aligned to the gutter, never centred: the back arrow and the date on one line, 28px of space, then a column of 31rem. Pictures inside a file are small (200 to 240px) and may be indented from the column's edge.
- Icon grid: `repeat(auto-fill, minmax(150px, 1fr))`, 52px between rows, 132px square pictures; two columns on phones.
- Rows (notes, shows): a grid of date, title and kind between hairlines, 11px of padding.
- Spacing steps: 4, 6, 8, 12, 16, 24, 32, 40, 56, 88px.
- Radius: 0 everywhere. Fields, buttons, chips, pictures and panels are square.
- With a mouse, words stay compact (32 to 36px targets). On touch screens one `@media (pointer: coarse)` block raises every word link, filter word, button, option and field to 44px without changing how they look.

## Surfaces and depth

- No cards, no shadows on content, no borders around groups. Things sit straight on the page.
- Icons carry the only depth: a one-pixel hard drop to the lower right (`--f-shadow`), drawn inside the icon, never with CSS shadows.
- The success panel after a form is the one framed box: a 1px border and a hard 4px offset shadow in ink.
- The header, footer and page always share one surface. There are no bars or bands of a different colour.

## Signature elements

Keep all three on every site built with this style.

1. **The desk.** A home page that is an empty canvas with six or seven things left on it: pixel folders (`#i-folder`) for the sections that hold many things, pixel documents (`#i-doc`) for single pages, and at most one small square picture (88px) for the newest thing. Each has a small label underneath. There is no headline, no hero, no introduction on the desk; the H1 is visually hidden.
2. **Folder icons.** Drawn on a 34 by 28 grid with `shape-rendering: crispEdges` and shown at whole multiples only (68 by 56 on the desk, 34 by 28 in folder heads and the menu) so every pixel stays square. Four fills: ink, grey, paper (outline only) and accent, each with the checkerboard dither over the front. Do not draw folders any other way (no rounded, gradient or emoji folders).
3. **Black files.** Everything you open is a black page that starts with a pixel back arrow and a date (or the file's name when it has no date), in 12px at weight 500, followed by a 15px title and a narrow column. Notes end with a short signature line.

## Components

- **Selection:** hovering or focusing a label turns it into a block of ink with the page colour as text (`.sel`, `.lk`). The current header link stays selected. This is the only hover effect on text; there is no underline-on-hover and no colour change.
- **Desk item (`.it`):** icon or picture, then the label, centred, 8px apart, at most 160px wide. On hover the icon rises 2px.
- **Filter words (`.chips`):** 12px words with a count after each; the pressed one is a block of ink. The layout switch (`.seg`: icons, list) uses the same look. An empty result shows one sentence and a "show everything" button.
- **Rows (`.row`):** date, title, kind; on hover or when open the whole row is selected (ink block). Shows use `<details>`, so a date opens to doors, prices and how to buy, with or without JavaScript.
- **Buttons (`.btn`):** 40px tall, square, 12px at weight 500, ink fill with the page colour as text and a pixel arrow; `.ghost` is the outline version. On hover they swap.
- **Fields:** labels above in 12px muted lowercase, grey-filled square inputs with a 1px line, a 2px ink outline on focus, a red line when invalid. Errors sit in a reserved 1.75em line under each field, so the submit button never moves.
- **Options (`.opt`):** square word boxes for sizes and colours; the chosen one is ink; sold-out ones are struck through and disabled.
- **Tracklist (`.tracks`):** numbered rows with the length at the right in muted figures.
- **Menu sheet:** a full-screen `<dialog>` on the current page colour listing every folder and document with its icon at 1x.
- **Footer:** slash-separated words centred under the page, then one muted line with the copyright and an address.

## Do and don't

- Do leave most of the desk empty. Don't fill it with a grid, a hero, a slideshow or a block of text.
- Do keep everything in one monospace family at 12 to 15px. Don't add a display face, a serif or big headlines.
- Do make every file page black. Don't make some files white "for variety".
- Do keep pixel icons at whole-number scales. Don't scale them to 50px or 75px, and don't anti-alias them.
- Do write names in lowercase. Don't use title case or all caps anywhere.
- Don't build a fake operating system: no windows with title bars, no close and minimise buttons, no dock, no menu bar with a clock, no dragging, no double-click to open, no trash can. Folders and documents are links, opened with one click or tap.
- Don't use emoji, icon fonts, gradients, rounded corners, drop shadows on content or colour beyond the single accent.

## Voice

Quiet, first person and plain, like a note on a desk. Short sentences, specific facts ("nine songs, one hall", "posted twice a week"), no exclamation marks, no hype ("iconic", "unmissable", "world-class"), no em dashes. Labels are one or two lowercase words. Notes are signed with a short line. Lists of facts use plain terms on the left ("ships", "returns") and short answers on the right.
