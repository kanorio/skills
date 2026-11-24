# Style guide

The look in one sentence: a pale, peach-washed sourcing desk where big text tabs sit over one giant rounded search box with an orange gradient rim, and below it a rounded category list, a three-part trust strip and dense trade cards that show a price range, a minimum order, the maker and a verified tick.

It is built for buying in quantity. Every product says how many you must order and how the unit price falls as the quantity rises; every page offers a way to ask for a quote.

## Tokens

All colours live as CSS custom properties on `:root` in `assets/template.html`, each written once as `light-dark(<light>, <dark>)`. The page follows the system setting; the toggle sets `data-theme` on `<html>`, which sets `color-scheme` and flips every token. `references/tokens.json` holds the same values as data. Change them there and in the template, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--page` | warm near-white | near black brown | the page |
| `--surface` | white | one step up | search box, form cards, workshop cards, the order box, menus |
| `--tile` / `--tile-2` | warm light gray / one step darker | warm charcoal / lighter | category panel, product picture tiles, stat strips / hover |
| `--text` / `--muted` | brown-black ink / warm gray | near white / light warm gray | names and prices / counts, notes, workshop names |
| `--border` / `--border-strong` | hairline / mid gray | dark hairline / mid | dividers / fields and outlined pills |
| `--accent` → `--accent-2` | burnt orange to red-orange | the same | the one solid action: search, send, create account; always as a 100° gradient with white text |
| `--accent-bright` | bright orange | the same | the search rim gradient, the active tab underline, the chosen price tier, selected chips and swatches |
| `--accent-ink` | deep orange | light orange | orange text: the active tab, kickers, links, the chosen tier's price, the verified tick |
| `--accent-soft` | pale peach | dark rust | selected chips, workshop monograms, the new-season panel |
| `--wash` / `--wash-2` | peach / blush | dark ember / darker | the hero and band backgrounds, always fading into `--page` |
| `--ember` | deep red-brown | darker | the one-line notice bar above the header |
| `--ok`, `--error` | green, red | lighter | success states and field errors only |

One warm accent, used sparingly: the gradient pill for the main action, the gradient rim of the big search, and orange text for "you are here". Everything else is ink on white and warm gray tiles. No second brand colour, no blue links.

## Typography

- **Lexend** (variable weight) for everything: wide, open letterforms that stay readable in dense cards and make prices easy to scan.
- `.tab` (20 to 30px, weight 600): the hero's search tabs are the biggest type on the home page. The headline above them is deliberately quiet (15 to 18px, weight 500, muted): the search is the hero, not a slogan.
- `.h1` page titles 22 to 28px weight 600; `.h2` section titles 19 to 22px weight 600, sentence case, left aligned; `.h3` 17px.
- Body 15px with a 1.55 line height; small print 13px; card titles 14px clamped to two lines.
- Prices are bold and large in cards (19px) and in the price ladder (20 to 24px). A range always reads low to high: `$3.90–$5.40`.

## Spacing, layout and radius

- One centered column up to 1360px with a 16 to 40px gutter. Sections are 56px apart; cards in grids 16px apart, 28px between rows.
- Radii: search box, form cards, panels and tiles 16px (`--r-panel`), product picture tiles 12px, fields 10px, every button and chip a full pill.
- Grids: product cards auto-fill from 220px (five across at 1440, two on phones); workshop cards from 340px; the home explore row is a 300px category panel, three square "most requested" tiles and a wider new-season panel.

## Surfaces and depth

- Flat by default. Product cards have no border and no shadow: a gray picture tile and text below it.
- Panels that hold forms or float (form cards, the mega menu, category fly-outs, the toast) take one soft warm shadow.
- The big search carries a coloured glow under its rim. Washes are vertical gradients that always end in the page colour.

## Signature elements

Keep the first three on every page and at least five on the home page.

1. **The tabbed giant search.** Large text tabs (Products, Workshops, and after a thin rule, Request a quote) above one wide rounded box with a 2px orange-to-red gradient rim. Inside: a big input, a row of small tools (send a spec sheet, ready to ship only) and the gradient Search pill on the right. The tab changes what the box searches and what the button says.
2. **Trade product cards.** A square gray tile with the product contained and an optional "Ready to ship" flag, a two-line title, the price range in bold, "Min. order: 50 pieces", the maker's name underlined, a trust line (verified tick, years in business, country, rating) and two outlined pills: "Add to list" and "Inquire".
3. **The price ladder.** On the product page, the unit price by quantity tier in a gray strip of three cells; the tier that matches the chosen quantity lifts onto white with an orange ring, and the estimate below updates.
4. **The rounded category list with fly-outs.** A gray panel of categories, each with a line icon and a chevron; hovering one opens a white panel over the tiles beside it with subcategory chips and products. The header's "All categories" opens the same content as a mega menu.
5. **The trust strip.** Three short promises in a row under the hero, each with an icon in a white rounded square, separated by thin vertical rules.
6. **The quote request.** A band with a short pitch and three numbered steps beside a white form card, and a full request-for-quotation page with a "how quotes work" aside.
7. **The notice bar.** One line on deep ember above the header, with a highlighted phrase and an arrow link.
8. **Workshop (supplier) cards.** A monogram, the name, a verified tick, years and country, one line on the craft, a stat strip (rating, reply time, on-time share) and product thumbnails.

## Components

- **Header:** logo; on inner pages a compact pill search; "Ship to" country, theme toggle, inquiry list with a count, "Sign in" and the gradient "Create account" pill; a second row of text links with "All categories" first. On the home page the header shares the wash and its compact search appears only after the big search scrolls away.
- **Results:** text tabs (Products, Workshops) with an ink underline, the result title, a "Select by:" row of toggle chips, a filter column of radio lists, a count and a sort select, then the card grid or an empty state with "Request a quote".
- **Product page:** breadcrumb; a thumbnail column beside a square stage (front, close-up, packed); title, rating and lead time; the price ladder; sample price and maker; colour swatches; a lead-time table by tier; the order box (quantity stepper, estimate, "Send inquiry", "Order a sample", "Add to inquiry list"); the workshop card on the right; chips that jump to details, customization and packaging tables; related cards.
- **Inquiry list:** lines with a tile, name, colour, the unit price at this quantity, a quantity field that refuses less than the minimum, and a line estimate; a summary card with the estimated total and a single inquiry form.
- **Forms:** 14px labels above 46px fields with a 10px radius, a reserved 1.4em error line under each required field, check chips for options, the gradient pill to submit, a success state with a green check and a reference number.

## Do and don't

- Do lead with the search and show quantities, tiers, lead times and samples plainly. Don't hide the minimum order or the unit.
- Do keep one accent. Don't add blue links, a second colour band or coloured section backgrounds beyond the peach washes.
- Do keep product cards flat and dense. Don't add hover shadows, rounded white card frames or big lifestyle photos into the grid.
- Do let buyers ask for a quote from every dead end (empty results, 404, workshop cards).
- Don't invent certifications, audit results, ratings, "verified" status or factory figures for a real business; those come from the brief or are removed.

## Voice

Practical and specific, like a good trade desk. Numbers first ("Min. order: 40 packs", "Lead time from 6 days", "Replies within 6 h"). Labels are short verbs ("Send inquiry", "Order a sample", "Request a quote"). Promises are concrete and checkable ("We visit every partner once a year"), never "world-class" or "best prices". No exclamation marks.
