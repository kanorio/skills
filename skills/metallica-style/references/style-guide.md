# Style guide: Metallica style

The look in one sentence: black stage bands and grainy paper bands meeting at hard diagonals, heavy geometric capitals, giant outlined words behind the sections, and halftone art where photos would be.

## Tokens

All values live as CSS custom properties on `:root` (light) and `:root[data-theme="dark"]` (plus the `prefers-color-scheme` block) in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | warm paper white | charcoal | paper sections, the page |
| `--surface` / `--surface-2` | near white / light stone | one and two steps above charcoal | form fields / product image wells, table heads |
| `--text` / `--text-muted` | ink black / warm gray | paper white / light gray | headings and body / metadata, captions |
| `--border` / `--border-strong` | light rule / ink | dark rule / paper white | row dividers / top rules, field outlines |
| `--accent` / `--accent-text` | ink / paper | paper / ink | solid buttons, chips that are on, tags |
| `--signal` | signal red | brighter red | sale prices, "few left", errors, the shard in the mark, one detail in each artwork |
| `--signal-fill` | deep red | deep red | behind white text only: the "Sale" tag and the bag count |
| `--stage` / `--stage-text` / `--stage-muted` / `--stage-border` / `--stage-signal` | near black and its text roles | a deeper black and the same roles | header, hero, page heads, the album band, the watch band, the footer |

Two surfaces, not one: every section is either paper (the page background) or `.stage`. The `.stage` class swaps a set of surface variables (`--on`, `--on-muted`, `--hair`, `--rule`, `--fill`, `--fill-text`, `--sig`, `--ground`, `--field`), and every component reads those instead of the theme tokens directly. That is why the same button, chip, row or form works on black and on paper without a second version. In dark mode the paper turns charcoal and the stage turns a deeper black, so the cut between them still reads.

Red is a signal, not a color scheme. It marks something the visitor should act on or notice (a sale, a sold-out risk, an error) and appears once inside each artwork. Never use it for buttons, headings or large fills.

## Typography

- **Jost** for everything readable: a geometric sans with a variable weight axis. **Space Mono** for sub-lines, dates, venues, prices, track lists and metadata.
- Display and headings: Jost 800, uppercase through CSS (write the source in normal case), letter-spacing about -0.005em, line-height 0.9 to 0.95. Display is used once per page, for the hero.
- H3: Jost 800 uppercase at 22px; product names drop to 700 at 15px with 0.1em tracking.
- Labels: Jost 700, 13px, uppercase, 0.24em tracking ("ALL THE NEWS", "FAN CLUB"). Buttons and navigation use the same spaced capitals.
- Mono lines: Space Mono 400 at 15 to 17px, sentence case, under every big headline. They are the voice of the page: plain, specific, a little dry.
- Body copy (articles, details) is Jost 400 at 17 to 18px with a 1.6 to 1.7 line height. Articles open with a Jost 800 drop cap.
- Numbers that matter (dates, prices, quantities) are always mono.

## Spacing, layout and radius

- Page width 1280px with a fluid 16 to 48px gutter; articles and legal text sit in a 720px column.
- Sections are tall: 72 to 136px of vertical padding, plus the height of the cut when a section ends in one.
- Section heads are a row: a heavy H2 on the left, a spaced-capitals link with an arrow on the right ("Shop all"). The hero copy is right-aligned on wide screens and left-aligned on phones.
- Radius is zero everywhere: buttons, fields, cards, images, chips, the member card. Corners are cut, not rounded.
- Grids: four product columns on desktop and two below 1000px; three news columns, two below 900px (the first card spans both when there are exactly three), one below 600px.

## Surfaces and depth

- No drop shadows on cards or buttons. Depth comes from the black and paper bands and the diagonals between them.
- Paper carries a fine grain: one SVG noise tile (`illustrations/grain.svg`) over the whole page, multiplied on light and screened (inverted) on dark. It never shows on black in light mode.
- The only offset shadow is the selected fan club plan: a hard 8px ink block, no blur.

## Signature elements

These make the style recognizable. Keep at least four on the home page and the cut plus one more on every page.

1. **The cut.** Sections end in a diagonal band (`.cut`) filled with the next section's color, with one thin shard piercing back into the section above. Use `.cut.to-paper` or `.cut.to-stage`, and `.cut.fall` to flip the direction. Alternate directions down the page; never stack two cuts in the same direction back to back.
2. **The hero wedge.** On the home page a black wedge rises from bottom left to the right across the artwork, with its own shard, and the headline sits on it, right-aligned.
3. **Heavy capitals.** Every headline is Jost 800 in uppercase, tight and large. One display headline per page.
4. **Outlined watermark words.** One word per section (`.wm`), set huge in outlined capitals with wide tracking, behind the content and clipped by the section: NEWS, TOUR, MERCH, DATES, JOIN, 404. Use the section's subject, one word, never a sentence. At most four per page.
5. **Mono sub-lines.** A Space Mono sentence under each big headline, and mono for every date, venue, price and track time.
6. **Halftone art.** Images are monochrome halftone and geometric drawings with one red detail (see `images.md`). News images are cut diagonally at the bottom.
7. **Square ghost buttons.** Outlined, 2px, spaced capitals; the solid version is the primary action. They invert on hover.

## Components

- **Header:** always on stage black, sticky. Three links on the left, the mark and wordmark centered, two links, the theme toggle and the bag on the right. The current link gets a 2px underline. Below 960px the links move into a full-screen black menu with huge capitals.
- **Hero:** halftone stage art, the wedge and shard, a spaced label, the display headline, a mono line, one solid and one ghost button.
- **Date row:** a big mono day with month and weekday, the city in heavy capitals with the venue and country in mono, a status chip ("On sale", "Few left" in red, "Sold out" struck through, "Presale Dec 3" dashed) and a small ghost button. Rows sit between a 2px top rule and hairlines.
- **News card:** a 3:2 halftone image cut diagonally at the bottom, a mono date and category line, a heavy H3 title. The whole card is the link; the image zooms 4% and the title underlines on hover.
- **Product card:** a square image well, a black or red tag in the corner ("New", "Sale", "Numbered"), the name in spaced capitals, the price in mono with the old price struck through and the new one in red.
- **Tabs:** two huge words ("Video", "Photo"); the inactive one is dimmed. Real `role="tab"` buttons with arrow-key support.
- **Member card:** a black card with a CSS halftone corner, the mark, the club name in capitals and a mono member number. One corner is cut.
- **Chips:** square outlined filters in spaced capitals; the pressed one is filled.
- **Forms:** labels in small spaced capitals above 50px square fields with a 2px outline; errors in red mono under the field; the success state is an outlined box that replaces the form.
- **Footer:** stage black after a final cut, the wordmark with a one-line newsletter form, three link columns, and a mono bottom line.

## Do and don't

- Do let the cut separate sections. Don't add borders, boxes or background tints between them.
- Do keep the palette black, paper and one red. Don't add a second accent, gradients on buttons, or colored text.
- Do write headlines in normal case in the source and let CSS uppercase them. Don't type headlines in capitals.
- Do use halftone drawings and silhouettes. Don't use stock photos, and don't put faces on silhouettes.
- Don't round any corner, add soft shadows, glassmorphism, emoji or icon fonts.
- Don't put more than one watermark word in a section, or let one sit in front of content.

## Voice

Short and declarative, like a tour poster. Headlines are three to five words with no punctuation ("World Tour 2027", "The store", "Wrong turn"). Mono lines are one plain sentence with a concrete number or place ("Forty-one nights on five continents."). No exclamation marks: the type is loud enough. No em dashes, no hype words ("epic", "legendary", "insane"), no lorem ipsum.
