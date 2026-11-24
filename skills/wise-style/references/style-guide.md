# Style guide: Wise style

The look in one sentence: a full-bleed lime field, an all-caps headline so heavy it reads like a poster, big rounded cards in lime, aqua, ink and plum that hold the product's own numbers, and deep forest-green pill buttons.

## Tokens

All values live as CSS custom properties on `:root` (light, the default), repeated for dark under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]` in `assets/template.html`, and as data in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--bg-soft` | white / pale sage | deep forest / one step lighter | page / soft cards, the footer, tables |
| `--surface` / `--surface-2` | white / warm pale gray | forest steps | widgets, form cards / chips, input fills, bar rows |
| `--text` / `--text-muted` | near-black with a green cast / gray-green | pale mint / soft mint | body / descriptions, captions |
| `--border` / `--border-strong` | pale hairline / stronger | forest steps | rules, row dividers / input borders |
| `--accent` / `--accent-hover` / `--accent-text` | forest / lighter forest / lime | lime / paler lime / forest | the primary pill, selected chips, switches, focus |
| `--top` / `--top-text` | lime / forest | forest / lime | the lime field at the top of home, pricing and 404 |
| `--top-soft` / `--top-soft-text` | pale lime / forest | soft forest / pale mint | the field at the top of inner pages |
| `--band` | forest | deeper forest | the closing call-to-action block |
| `--lime`, `--aqua`, `--peach`, `--ink`, `--plum`, `--forest` | the card palette | the same (aqua and ink adjust) | colored cards, icon badges, avatars, guide covers |

Lime and forest always travel together: lime surfaces carry forest text and forest buttons, forest surfaces carry lime headlines and lime buttons. The `.t-lime` class re-points `--accent` to forest, so a primary button inside a lime card stays visible in both themes. Aqua and peach carry dark forest text; ink carries pale text with a lime heading; plum carries pale text with a peach heading.

## Typography

- **Barlow Semi Condensed 900** for the display, H1 and H2, always uppercase through CSS (`text-transform`), line-height 0.86 to 0.9, letter-spacing about zero, `text-wrap: balance`. The same face sets every large figure (`.num`): prices, totals, counts, the 404 and the guide covers. Cents and units sit beside the figure at 42 percent size (`<small>`).
- **Golos Text** for everything readable: body 18px with line-height 1.5, leads 18 to 21px at weight 500, H3 22 to 28px at weight 600 with -0.022em tracking, buttons and labels at 600.
- Uppercase belongs only to the display face. Never set body copy, buttons or labels in capitals, and never track the display face wide.
- One display headline per view, usually three to four short lines. Write it as a plain claim with a rhythm ("Your books done, your tax filed, your fee fixed"), not a slogan with punctuation tricks.
- A quieter sentence-case heading (`.h-plain`, 28 to 36px, weight 600) introduces small proof rows, so not every section shouts.

## Spacing, layout and radius

- Frame 1252px with a 16 to 32px gutter; the trio of hero cards widens to 1400px.
- Sections are 64 to 120px apart (`--space`). Headlines sit centered on the hero, pricing, guides, help and 404; inner pages with a visual (service, about) split into two columns.
- The hero is a full-bleed lime field with a centered headline, a lead and two pills; the first row of cards rises out of the field so the lime ends behind them.
- Radius: 999px pills for every button, chip and bar row; 18px inputs; 24px widgets and covers; 32px cards; 40px full-width blocks; circles for icon badges and avatars.

## Surfaces and depth

- Color does the layering, not shadows. Cards are flat fills; only white widgets inside them (`.mock`), form cards and featured plans carry a soft forest-tinted shadow.
- In dark, widgets get a hairline ring (`--mock-ring`) so a dark widget still separates from a dark card.
- Never more than two levels: a colored card holding one white widget.

## Signature elements

Keep at least four on the home page.

1. **The lime field with a poster headline.** Full-bleed lime, three or four lines of ultra-heavy capitals in forest, a lead in forest, a forest pill and a tinted pill. In dark the field turns forest and the headline turns lime.
2. **The colored card trio.** Three big rounded cards in different colors, rising out of the field: each has a sentence-case title, one sentence, an underlined link and a white widget showing the product's real numbers in the heavy face.
3. **The quote calculator.** A white widget with pill chips, a stepper and a switch; the total updates in huge heavy numerals with small cents. The figures are computed from a `RATES` object, never typed by hand.
4. **Pill bar rows.** Full-round rows that shorten one after another, each with a circular icon, a two-line label and a heavy figure; the top row is lime. Here they show where the fee goes and follow the calculator.
5. **Circular icon badges.** Lime, aqua or peach circles with a single-weight line icon, at 32, 48 and 96px; the 96px aqua ones carry the proof row.
6. **Forest pills.** Every action is a pill: forest with lime text on light, lime with forest text on dark, a 10 percent tint of the current color for the second action.

## Components

- **Header:** sits on the same color as the top of the view (`data-top` on `<html>`: lime, soft or plain). Brand mark and wordmark, four links with a tinted pill for the current page, the theme toggle, a "Book a call" text link and the primary pill. Under 1000px the links fold into a full-screen sheet with the links in the display face; under 480px the primary pill joins them, leaving the brand, the theme toggle and the menu button.
- **Buttons:** `.btn-primary` (forest or lime by theme), `.btn-tint` (10 percent of the current text color), `.btn-lime` (on ink, plum and forest surfaces). 48px tall, 56px for `.btn-lg`, 40px for `.btn-sm`. They press to 97 percent.
- **Chips:** 42px pills on `--surface-2`; the selected chip takes the accent. Filter chips use `aria-pressed`; the calculator's tier chips are a radio group with `aria-checked`.
- **Widget (`.mock`):** white, 24px radius, a small header row, one heavy figure, one supporting row with a small badge.
- **Service card:** soft sage, a 48px badge, an H3, one muted sentence, "From $45 a month" with the figure in the heavy face, an underlined link.
- **Plan card:** three in a row overlapping the lime field; the featured one is ink with a lime price and a lime button.
- **Guide card:** a colored cover with one or two words in the heavy face, a category tag, read time, an H3 and one sentence. Rendered from the `GUIDES` array.
- **Rows (`.rows`):** a hairline list where each item is a badge, a bold lead-in and a muted sentence.
- **FAQ:** `<details>` with a plus that turns into a cross.
- **Forms:** inside a white card with a soft shadow; labels above 56px fields; the error line is reserved under every field so nothing shifts; success replaces the form in place.
- **Footer:** soft sage, the brand, a pill-shaped newsletter field, four link columns, a short legal line.

## Do and don't

- Do let one lime field and one heavy headline carry each view. Don't add gradients, glows, textures or photos behind the headline.
- Do show the service through its own numbers in white widgets. Don't use stock photos of people at laptops or 3D coins.
- Do keep cards flat and colorful. Don't add borders and heavy shadows to the colored cards.
- Do use pills for every action. Don't mix in square buttons or outline buttons.
- Don't set the display face in lowercase or at small sizes, and don't use it for paragraphs.
- Don't use flags, currency symbols as decoration, or real bank and card-network logos.

## Voice

Plain, direct and a little dry, like a friend who is good with money. Short sentences, second person, no jargon without a plain gloss. Lead with what the visitor gets ("Know your fee before you sign"), state limits honestly ("Sales tax, if you charge it, is on top"), and keep jokes to one per page (the 404). Never promise returns, savings or outcomes the business cannot guarantee.
