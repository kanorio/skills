# Style guide: cartoon stage and goo bands

The look in one sentence: a translucent grape header over a full-bleed cartoon with a heavy white title at its lower left, then bright orange bands with soft goo blobs holding rows of white cards that sit on a hard orange-red underline, broken up by black panels where the art fades into a big headline, and a grape-to-plum footer.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, written as `light-dark(light, dark)` so one line holds both themes; `tokens.json` has the same values as data. Change them there, never inline. `:root` uses `color-scheme: light dark` (the system setting), and `data-theme="light"` or `"dark"` on `<html>` pins one.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--band` | hot orange | deep ember | every content band behind the cards |
| `--goo-hi` / `--goo-lo` | lighter / darker orange | lighter / darker ember | the hard-edged blobs layered into each band |
| `--band-ink` | ink navy | warm white | band headings, counts, chips and "more" links on the band |
| `--surface` / `--surface-2` | white / warm cream | deep grape / one step lighter | cards and panels / tags, chosen options, chip hover |
| `--text` / `--text-muted` | ink navy / slate violet | near white / lilac grey | everything on cards and panels |
| `--border` / `--border-strong` | pale lilac / mid violet (3:1) | the same roles | rules in panels / inputs and option cards |
| `--edge` | orange-red | bright orange | the hard 4px underline under every card and the 6px one under panels |
| `--accent` / `--accent-text` | goo lime / ink | goo lime / ink | primary buttons, tags on art, active dots, the focus ring on dark areas |
| `--night` | near black | near black | the stage, split panels, the promo and the trailer dialog |
| `--grape` / `--plum` | deep violet / plum | darker of both | the header bar (86 percent opaque), the footer gradient, plain stages and the 404 |
| `--on-dark` | warm white | warm white | text on night, grape and plum |
| `--focus` | ink | lime | the 3px focus ring on bands and cards |
| `--error` | brick red | coral | form errors |

**Three zones, never mixed.** Night (black) carries art and big headlines. Orange carries cards. Grape carries the header and footer. A section is one zone from edge to edge; do not put cards on night or a headline panel on orange.

**Orange in both themes.** The band is a brand colour, not a light-mode background: in dark it becomes a deep ember with the same blob pattern, and the cards turn deep grape while keeping their orange underline.

**Lime is the only button colour.** Primary buttons, the kicker tag and the active carousel dot are lime with ink text in both themes. On white cards the action button is ink (`.btn-ink`); on dark areas the second button is a white outline (`.btn-line`).

## Typography

- **Bricolage Grotesque 800** for display only: stage titles, band titles, panel titles, split and promo headlines, the wordmark, prices and big step numbers. Tight tracking (`-0.02em`), line-height 0.95 to 1.08.
- **Sora** (variable, 400 to 800) for everything else. 400 for body, 600 to 700 for card titles, labels and nav, 800 for buttons.
- Stage titles are mixed case: `clamp(2.5rem, …, 4.5rem)`, white, with a 2px dark drop line under the letters. Band titles are UPPERCASE: `clamp(1.5rem, …, 2.125rem)` in band ink. Panel titles are mixed case at about 1.9rem.
- Small capitals with wide tracking (`text-transform: uppercase; letter-spacing: .06em`) for nav links, buttons, chips, meta lines ("10:00 · 45 min · Ages 4+"), the kicker tag and the subtitle under a promo headline.
- Body 16px with line-height 1.6; leads 17 to 19px. Card text is 15px. No italics.

## Spacing, layout and radius

- Content width 1296px with a gutter of `clamp(16px, 5vw, 72px)`. Stages, bands, split panels, the promo and the footer are full-bleed.
- **Tight card rows.** Cards sit 10px apart (16px between rows) in three columns (two below 960px, one below 620px); show grids use `auto-fill` columns of at least 270px.
- Bands have 44 to 84px of padding top and bottom; two blocks inside one band are 48 to 72px apart.
- **Radius:** 4px for cards, media, inputs and tags; 8px for panels and the dialog; full pills for buttons, chips, the search field and the newsletter field. Nothing else is rounded.

## Surfaces and depth

- Flat colour, with one kind of depth: the **hard underline**. Cards have `box-shadow: 0 4px 0 0 var(--edge)` (no blur); panels have 6px. On hover a card lifts 3px, the underline grows to 7px and a 2px ink outline appears.
- The band's blobs are hard-edged radial gradients in two tints of the band colour, one soft white highlight, nothing blurred.
- Stages darken towards the bottom with a gradient scrim so the white title always reads; the top has a lighter scrim under the header.
- The only soft shadow is the trailer dialog's.

## Signature elements

Keep all six on the home page; every inner page keeps the header, a stage, a band and the footer.

1. **The cartoon stage.** A full-bleed illustration (82vh on the home page, about half that inside) with a heavy white title, one lead and lime and outline buttons at its lower left (centred on phones, where the art takes the top two thirds and the copy sits on black). On the home page it is a carousel of three featured items with dots, arrows and a pause button.
2. **Goo bands with white cards.** Orange bands with hard-edged blobs, an UPPERCASE band title with a "more" link on the right, and a tight row of white cards: 16:9 art on top, a bold title, one or two lines, a hard orange-red underline.
3. **The lime drip.** A lime goo drip hangs from the top-left (or top-right) corner of some bands, behind the cards. One per band at most, never on two bands in a row, hidden on phones.
4. **Split panels.** A black panel where the art fills the left 58 percent and fades into black, and a centred heavy headline, one sentence and a lime button sit on the right (`.split.flip` mirrors it).
5. **The goo promo.** A black panel with a centred headline, an UPPERCASE subtitle and two buttons on the left, and glossy lime goo blobs over pink and violet swirl stripes on the right.
6. **Grape frame.** A translucent grape-to-plum header bar floating over the art, and a grape-to-plum footer with the newsletter, centred links, the centred logo and a small line, separated from the last band by a thin goo strip.

## Components

- **Header:** logo and lowercase wordmark left; UPPERCASE nav links with a 3px underline (lime for the current section); a round theme toggle and a small lime "Book" button on the right. Below 1160px the links and the button move into a menu panel that drops down from the bar with big UPPERCASE display links.
- **Stage:** `.stage` (`.stage-sm` inside) > `img.stage-art` + `.stage-copy` (optional `.kicker` or `.back`, `h1.stage-title` or `h2` in the carousel, `.stage-lead` or `.meta-line`, `.actions`). `.stage.plain` has no art: a grape-to-plum gradient for contact and legal pages.
- **Band:** `section.band` (or `.band.alt` for the mirrored blob pattern) > optional `svg.drip` > `.wrap` > `.band-head` (`.band-title` + `.more`) or `.filters` (`.count` + `.chips` + `.search`) + `.cards`.
- **Card:** `a.card` (or `article.card` when it holds a button) > `img` or `.card-art` (image + `.date` badge) + `.card-body` (`.meta`, `h3`, `p`, `.tag`, `.price`, `.event-foot`). `.card.wide` spans two columns with the image on the left.
- **Date badge:** a lime block in the top-left of the art with the weekday, a big day number and the month, and a 3px ink underline.
- **Chips:** outlined pills in band ink that fill with band ink when pressed (`aria-pressed`).
- **Panel:** a white (deep grape in dark) block with 8px corners and a 6px underline for forms, FAQ, articles, facts and summaries.
- **Forms:** 52px fields with 4px corners and a 2px violet border, bold labels, errors in reserved space under each field, option cards for choices (a lime inner underline when chosen), pill options for topics, and a success panel with a lime splat and a check.
- **FAQ:** `details` rows with 2px rules and a lime round plus that turns into a cross.
- **Trailer dialog:** native `<dialog>` on night with the art panning slowly and caption lines that change every few seconds.
- **404:** grape background with two yellow hill blobs, a huge UPPERCASE title and three pieces of art cut into splat shapes (`clip-path: url(#splat-a)`).

## Do and don't

- Do let the art fill the stage edge to edge. Don't put the stage art in a box, a frame or a rounded card.
- Do keep cards white, 4px-cornered and underlined. Don't add soft shadows, borders or other card colours.
- Do keep the band orange with its blobs. Don't swap it for a gradient, a photo or a flat colour without blobs.
- Do use UPPERCASE for band titles and small labels. Don't uppercase stage titles, card titles or body copy.
- Do use lime for one primary button per block. Don't add a second accent colour for buttons.
- Don't draw an existing cartoon character or anything that looks like one, and don't reuse another studio's show titles, logos or goo marks. The goo is a texture, not a logo.

## Voice

Loud, warm and quick, like a presenter between cartoons: short sentences, concrete jokes, exclamation marks only in headlines ("Cartoon Camp is back!"). Titles name the thing ("The Saturday Picture House"), meta lines give the facts in small capitals, and grown-up information (prices, ages, safety, refunds) is plain and specific. Never invent facts, reviews or awards; mark anything the brief does not give as a placeholder.
