# Style guide: League of Legends style

The look in one sentence: painted night scenes that alternate with pale stone sections under a giant faint crest, cut-out heroes breaking out of thin gold rings and diamonds, an upright kicker over one huge italic capital word, and square gold buttons, all under a black command bar.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, written as `light-dark(light, dark)`, and as data in `tokens.json`. `data-theme="light"` or `"dark"` on `<html>` pins the scheme; without it the system setting decides. Change values there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | pale warm stone | deep night blue | the page behind stone sections |
| `--surface` / `--surface-2` | near-white / stone | one and two steps up | cards, forms, editions / stepper buttons |
| `--text` / `--text-muted` | night blue / slate | parchment / blue-grey | headings and body / meta, leads, excerpts |
| `--border` | warm grey hairline | blue hairline | card outlines, rules, the base of the ring |
| `--watermark` | one step darker than stone | one step lighter than night | the giant crest and the lattice |
| `--gold` / `--gold-hi` | antique gold / pale gold | the same | buttons, frames, rings, diamonds, the current nav bar |
| `--gold-ink` | deep gold | bright gold | gold used as text: topics, eyebrows, links, prices on light |
| `--on-gold` | night blue | night blue | text on gold buttons |
| `--arcane` / `--arcane-hi` | magic blue | the same | the second action: the header pre-order button and one secondary button per section |
| `--navy`, `--navy-2` | night blue | night blue | scenes, banners, name bars; the same in both themes |
| `--bar`, `--bar-2` | near-black | near-black | header and footer, icon buttons; the same in both themes |
| `--on-dark`, `--on-dark-muted` | parchment / blue-grey | the same | text on scenes, banners, the bar and the footer |
| `--hue` | per hero | per hero | the glow behind a hero (set on the card or stage) |
| `--danger`, `--ok` | deep red / green | soft red / green | form errors / "New" tags |

Three families of surface: **stone** (`--bg`, follows the theme), **night** (scenes, banners, name bars, always dark) and **bar** (header and footer, always near-black). In the light theme the page alternates stone and night; in the dark theme stone turns to night blue and the scenes still read as the brightest pictures on the page.

Gold is the only accent for actions and frames. Arcane blue appears at most once per screen, for the second action. Gold text on stone uses `--gold-ink` (5.6:1 on the light background); `--gold` itself is only a fill or a line.

## Typography

- **Faustina Italic** (variable, 700 to 800) for every headline: a sharp, wedge-serifed italic set in capitals. Never upright, never for sentences longer than a title.
- **Asap** (variable, 400 to 700) for the interface and reading: a narrow humanist sans. Body 17px at 400 and line height 1.6; nav, chips, buttons and labels in capitals at 500 to 700 with 0.06 to 0.14em tracking.
- **The kicker pair (`.duo`)**: an upright Asap line at 16 to 21px in capitals ("Choose your") over one Faustina word at 46 to 86px in capitals ("Hero"). The heading is one element, so it reads as one phrase. Use one or two words for the big line.
- Logotype (`.logotype`): Faustina 800 at 58 to 156px with a vertical gold gradient and a dark drop shadow; only in the home hero and on edition boxes.
- Tagline (`.tagline`): Faustina 700 italic capitals at 17 to 24px under the logotype, at most two lines.
- Hero names, edition names, prices, dates and big numbers are Faustina italic; card titles in news are Asap 700 at 21px, because they are read, not announced.
- Eyebrows (`.eyebrow`): Asap 700, 12px, 0.14em tracking, capitals, in `--gold-ink`.

## Layout, spacing and radius

- One 1344px column (`.wrap`) with a 16 to 48px gutter. Sections are 64 to 120px tall in padding (`--sec`); banners are shorter.
- **Split sections** (`.split`) put copy on one side and a framed figure on the other, centered text in the copy column. They stack below 900px with the picture second on stone and first on scenes.
- Alternate surfaces down the page: scene, stone, stone with crest, scene, night, scene, footer. Never put two scenes with text side by side without a stone or night section between them.
- **Radius is zero** for buttons, fields, chips, cards, boxes and media. Only the ring, the map disc, social buttons and the header's two buttons (6 to 8px) are round. Diamonds are squares turned 45 degrees.
- Shadows are rare: a drop shadow under the cut-out figures, a gold glow on hover and on the chosen ability. Featured cards get a detached gold frame (`box-shadow` with a gap), not a shadow.

## Signature elements

Keep at least five on the home page, and the kicker pair, square gold buttons and the black bar everywhere.

1. **Painted night scenes** (`.scene` with `sc-vale`, `sc-coast`, `sc-thorn`, `sc-gate`, `sc-stones`): full-bleed landscapes with mist and embers under a gradient that darkens toward the text side and the bottom. Text on scenes is always parchment.
2. **Stone sections with a giant crest** (`.stone` plus `svg.crest`): pale sections with the crest symbol drawn huge and faint behind the content, or a fine diamond lattice (`.lattice`) under rows of cards.
3. **Cut-out heroes in gold frames**: a figure with a transparent background that breaks out of a thin ring (`.ring-stage`, a full hairline circle with a gold arc that sweeps when the hero changes) or a double diamond (`.diamond-stage`). The figure is taller than its frame: head above it, feet below.
4. **The kicker pair** (`.duo`): small upright capitals over one huge italic capital word.
5. **Square gold buttons**: flat gold, night-blue text, capitals, no radius. The main hero button carries a detached 1px frame 6px outside (`.btn.framed`) that widens on hover.
6. **The class picker**: a row of gold crest icons with labels, a gold progress rule under them and two arrows; the chosen class lights up and turns the ring to its hero.
7. **Topic and date meta** (`.meta`): gold capital topic, a hairline divider, then the date, above a bold title; picture cards carry a small dark square badge in the corner.
8. **Name bars**: hero portraits stand on a tinted night with their hue glowing behind them, and the name sits in Faustina capitals on a night-blue bar.
9. **The black command bar**: near-black header with capital nav links, a gold bar under the current one, square icon buttons and one arcane button.

## Components

- **Header:** crest mark and gold wordmark, six capital nav links, the theme toggle (`#theme-toggle`, a dark rounded square), an arcane "Pre-order" button and, below 1180px, a menu button that opens the menu in the flow under the bar.
- **Buttons:** `.btn` (gold, 56px), `.btn.framed` (with the outer frame), `.btn.arcane`, `.btn.ghost` (transparent with a gold inset line), `.btn.sm` (40px). Text links (`.link`) are gold capitals with an arrow.
- **Hero card** (`.hcard`): 3:4 art on a radial glow of the hero's `--hue`, then the name bar with the class in small capitals. On hover the figure grows 6 percent and a double gold inset frame appears.
- **News card** (`.ncard`): 16:9 picture with the corner badge, meta line, title, one-line excerpt.
- **Ability tiles** (`.ab`): 76px squares with one gold glyph; the chosen tile gets a gold ring with a gap and a glow, and the panel below shows the kind, the name in Faustina capitals and one sentence.
- **Change rows** (`.change`): a gold-framed glyph box, the subject in bold, a tag (`.tag.new`, `.changed`, `.clarified`) and the change with the old value struck through.
- **Edition cards** (`.ed`): a box picture with the logotype, the name, a Faustina price, diamond-bullet contents and a full-width gold button; the featured card has a detached gold frame and a gold flag.
- **Event rows** (`.ev`): a gold left edge, a Faustina day over a gold month, the kind, the title and the place, time and price with line icons, and a small gold button.
- **Fields:** 52px, square, 1px border, gold focus ring; capital labels; errors float in reserved space under the field and never move the button. Radio choices are bordered tiles that turn gold when chosen. Success boxes have a gold diamond seal with a check.
- **FAQ:** rows with a hairline under each; the marker is a small diamond that fills with gold when open.
- **Footer:** a grey link bar of capital links, then social buttons in dark circles, the crest, the legal line, small links and a box-spec tile (age, players, play time).

## Do and don't

- Do keep scenes dark in both themes and put light text on them. Don't put stone-coloured panels over a scene except a form card.
- Do let figures break out of their frames. Don't crop a cut-out hero inside a box or a circle mask.
- Do use gold for one primary action per section and arcane for at most one more. Don't introduce other accent colours; hero hues live only in glows behind figures.
- Do set every headline as italic capitals. Don't set body copy, buttons or nav in the serif.
- Don't round buttons, cards or fields; don't add pills, soft shadows on every card, emoji or icon fonts.

## Voice

Short, a little epic, never breathless. Headlines are one image ("Gather your table", "Lost in the gloam"); kickers set them up in two or three plain words. Body copy speaks to the reader in the second person and gives facts: players, minutes, dates, prices. Buttons start with a verb ("Pre-order the core box", "Save a seat"). No exclamation marks, no countdowns, no "legendary" or "epic" as adjectives, and no numbers that are not real.
