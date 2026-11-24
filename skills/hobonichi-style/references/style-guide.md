# Style guide: Hobonichi style

The look in one sentence: a warm white page under a dated masthead, a pastel band whose color follows the story on show, a daily column set in short hand-broken lines beside a small doodle, and rows of framed thumbnails where things to read and things to buy sit side by side.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline. Both themes are complete; light is the default and follows the system setting.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` (`background`) | warm white | warm near-black | the page |
| `--surface` | paper | a step lighter than the page | note cards, summaries, inline product cards, thumbnail backgrounds |
| `--sunk` | pale warm gray | a step darker than the page | the footer |
| `--text` / `--text-muted` | warm charcoal / warm gray | warm off-white / light warm gray | all type; never pure black or pure white |
| `--border` / `--rule` | hairline gray / a darker gray | the same roles | thumbnail frames and section rules / field outlines and dividers |
| `--accent` / `--accent-text` | tomato red / warm white | soft coral / deep brown | solid buttons, the "Today's" label, ranks, the bag count, the "This week" pill |
| `--link` | ink blue | pale blue | text links and the focus ring |
| `--pill` / `--pill-text` | pale sky / deep blue | deep blue / pale blue | "See all" pills and date stamps |
| `--ink` / `--ink-text` | dark brown / warm white | the same roles | the one dark "Around the studio" card |
| `--tone-oat`, `--tone-sky`, `--tone-peach`, `--tone-sage`, `--tone-lilac` | soft pastels near 90% lightness | deep muted versions near 30% | the story band and the header above it (`--band`), article heads, the "Out and about" card |
| `--cream`, `--rose`, `--mint` | very pale shelves | deep muted shelves | full-width pastel bands: picks, favourites, places |
| `--tag-*` and `--tag-*-text` | a pale fill and a deep text color per kind | inverted pairs | category tags and filter dots: sky for interviews, lilac for essays, peach for kitchen, moss for craft, rose for films, sun for the flagship product |
| `--sun`, `--leaf`, `--bird` | butter yellow, leaf green, soft orange | the same, slightly darker | doodle fills, "On now" tags, the speech bubble |
| `--ribbon` | bright butter | a softer butter | the one promotion strip |

Rules that keep it calm: one strong color per screen (the accent), pastels only as large quiet fields, and text that is always charcoal on pale or off-white on deep. A tone is a mood for the current story, never a brand color.

## Typography

- Two families, both open source and both with Japanese glyphs: **Zen Maru Gothic** (a rounded gothic, 400, 500, 700) for everything readable, and **Klee One** (a pencil handwriting face, 600, 400 kept for longer notes) for the hand-written voice.
- Klee One is for small doses only: the wordmark, the date numerals in the masthead, the column label ("Today's margin"), the signature, card headings in the sidebar, the pull quote, rank numerals, success messages. Never for body text, buttons or navigation.
- Headlines are modest: the story title is 22 to 28px, section titles 20px, page titles 24px, card titles 15px, all 700 with line-height 1.5 to 1.65 and 0.02em tracking. Size comes second; air and line breaks do the work.
- Body text is 16px with line-height 1.8; reading text (columns, articles) is 16 to 17px with line-height 2 to 2.05 and 0.03em tracking. Small text is 13px muted gray.
- Titles are plain sentences, usually ending with a full stop: "We visited a potter who answers every letter by hand." Section titles are names without a full stop: "Reads and watches".
- No uppercase labels, no italics, no negative letter-spacing anywhere.

## Layout and spacing

- Two widths: `--wrap` (1140px) for section heads, the header and page heads; `--inner` (980px) for content rows. Rows sit indented inside their ruled heading, which is what makes the page feel like a printed contents list.
- The page is a column of shelves separated by space (56 to 64px), not by boxes. Pastel shelves run full width; white shelves just stop.
- Thumbnail grids are four columns at 16px gaps on desktop, two on phones; reading lists become ruled rows on phones (title left, thumbnail right).
- Radius: 999px for pills and buttons, 4px for thumbnail frames, 8px for big pictures and fields, 10 to 14px for cards and venue panels.
- Under 860px the header becomes two rows: wordmark and tools, then the tabs. Under 760px the story band stacks (picture, text, arrows), rows become lists, and the shop becomes two columns.

## Surfaces and depth

- Most surfaces are flat. Thumbnails have a 1px hairline frame instead of a shadow; only the story picture and the article picture carry a soft card shadow.
- Pastel fields carry color, white cards with a hairline sit on top of them (favourites, venue panel).
- One dark card per page at most (the studio card).
- Pictures in dark mode are dimmed slightly (`brightness(0.9)`), never inverted.

## Signature elements

These make the style recognizable. Every page keeps the first two; the home page shows all six.

1. **The dated masthead.** A handwritten wordmark with a small sun doodle on the left, three or four bold tabs in the middle with a rounded underline on the current one, and today's date on the right in handwritten numerals ("11/23") with a small weekday and a leaf sprig that sways once. The date is real: the script writes today's date over the fallback.
2. **Ruled section heads.** A 22px line icon, a bold title, a hairline across the full wrap width, and a pale blue pill on the right ("See all" with a chevron). Every list on every page starts this way.
3. **The story band.** A pastel field at the top of the home page that takes the tone of the story on show, with the header above it in the same color. Inside: a doodle, a tag and part number, the title, a short dek, long-arrow pill buttons with a "1 / 4" counter, a square picture, and a rail of small thumbnails. Changing the story cross-fades the band color.
4. **The daily column.** A doodle beside a handwritten label, a title and a byline, then short lines broken by hand (six or so per stanza, a dot before the first), a thank-you line, a handwritten signature, and two right-aligned links: earlier columns, and write back.
5. **Framed thumbnails with stamps.** A 283:150 picture in a hairline frame with a tiny stamp tucked into the bottom-left corner: "On sale" on white, dates on pale blue, films on red with a play triangle, reads on butter with a book icon.
6. **Reads and goods in the same rows.** A shop row holds a read; an article holds the product that was on the table; the reads index holds a product. Interleaved cards keep their position when the shop is sorted and step aside when a filter is on.

## Components

- **Header:** wordmark, tabs, date, bag icon with a tomato count, theme button. On the home page the header takes the band color.
- **Story band (`[data-band]`):** slides with `data-tone`, arrows (`data-step`), rail (`data-goto`), counter. Arrow keys move between stories.
- **Ribbon:** a butter block with the product name in handwriting next to four cover pictures, linking to the product.
- **Sidebar cards:** the dark studio card (handwritten heading in butter, a framed picture, a speech bubble and an initials avatar) and the tone card for something happening now.
- **Cards:** `a.card` for reads (thumb, title, dek, optional tag and date), `div.card` for goods with a small outlined "Add to bag" pill.
- **Pastel shelves:** cream for the weekly pick (tomato pill label, title, text, outlined tomato button, picture), rose for numbered favourites (handwritten rank numerals), mint for places (a white venue panel with event rows and "On now" tags).
- **Article:** a tone band head with picture, then a narrow column; conversations as speaker and line, a handwritten pull quote under a sprig, an inline product card, round part numbers, and a "Write to us" button.
- **Product:** a large framed picture (sticky on desktop), cover swatches as small pictures, size pills, a quantity stepper, a tomato "Add to bag", short-line copy and accordions with a drawn plus.
- **Forms:** labels above 46px fields with an 8px radius; errors in bold red text that float in reserved space under each field; success replaces the form with a dashed box, a doodle and a handwritten line.
- **Footer:** pale gray, a row of links, the newsletter row, then legal links, the wordmark and the copyright.

## Do and don't

- Do leave air: generous line-height, short lines, space between shelves. Don't fill every gap with a card.
- Do break column and product copy into short lines by hand at natural pauses. Don't justify text or let long paragraphs run in the column.
- Do keep one doodle per block. Don't scatter doodles as decoration or use them as icons.
- Do use the pastel tones as quiet fields. Don't put tones on buttons, text or borders.
- Do keep thumbnails in hairline frames. Don't add shadows, gradients or rounded corners above 4px to them.
- Don't use emoji, icon fonts, stock photos of people, or more than two families.

## Voice

Warm, plain and a little wry, like a note left on the kitchen table. First person plural for the shop, first person singular in the column. Specific small things beat claims ("the mug in most of our photographs", "closed on Mondays, we are packing parcels"). Titles are full sentences that tell you what happened. No hype words, no exclamation marks in body copy, no "curated", "elevate" or "journey", no em dashes, no lorem ipsum.
