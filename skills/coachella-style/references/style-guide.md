# Style guide: Coachella style

The look in one sentence: cream paper, forest-green serif headlines, a type-set poster under a dusk sky, and cut-paper plants and objects pinned at the edges.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | cream paper | deep night green | page background, under the paper grain |
| `--surface` / `--surface-2` | fresh paper / sand | two lifted night greens | cards and inputs / alternate bands |
| `--text` / `--text-muted` | espresso ink / warm brown | cream / soft cream | body copy / leads, captions, metadata |
| `--heading` | forest green | pale sage | every serif headline, kickers, card titles |
| `--border` / `--border-strong` | sand hairline / brown rule | the same roles in dark | card edges / inputs, list rules, outline buttons |
| `--accent` / `--accent-text` | espresso / cream | cream / night | primary buttons, pressed chips |
| `--accent-hover` | forest green | light sage | primary button hover |
| `--marigold`, `--berry`, `--sky` | flower colors | brighter versions | stage dots, the active nav line, ribbons, numerals, the star |
| `--stem` / `--stem-light` | two greens | two lighter greens | the stem rule |
| `--tint-*` | four pale washes | four deep washes | tags, post covers, illustration blobs |
| `--night`, `--night-surface`, `--night-text` | deep navy | deeper navy | the night band and the footer, in both themes |
| `--dusk-1` to `--dusk-4` | violet to rose to apricot | the same | the poster sky, identical in both themes |
| `--scene-*` | daytime hills | moonlit hills | the illustrated landscape band |
| `--grain` | brown specks | cream specks | paper texture on the body, bands, header and sheet |

Green is for words, not for buttons. Buttons are espresso on cream and cream on night. The flower colors stay small: a dot, a ribbon, a line under the current page, a numeral.

## Typography

- Two families. **Libre Caslon Condensed** (500 and 600) sets every headline, the brand name, prices, years, stage names and the poster title. **Bricolage Grotesque** sets everything else, and its 75 percent width at 700 to 800 weight sets the names on the poster and in the set times.
- Display: 500 weight, line-height 0.98, letter-spacing -0.012em, once per page.
- H1 and H2: 500 weight, near-zero tracking. H3: 600 weight, 1.625rem.
- Body: 17px, line-height 1.6, optical sizing on. Leads are a size up and muted.
- Labels: Bricolage 700, 13px, uppercase, 0.09em tracking, in green. Used for kickers, card titles, navigation, buttons and footer headings. This is the only uppercase in the style; headlines are always sentence case.
- Headlines are a short line with a period, like a sign at the gate: "Three days in the high desert."

## Spacing, layout and radius

- Page width 1280px with a fluid gutter; long-form text sits in a 680px column.
- Sections are tall: 72 to 128px of vertical padding. Separate sections with a full band (sand, the scene or the night), never with boxed dividers.
- Headings sit left; center only the scene band, the night band and the 404.
- Lists are ruled: a 1.5px text-colored rule on top, hairline rules between rows, no boxes (stage list, towns, timeline, FAQ, comparison table).
- Radius: 2px for buttons and inputs (square, like printed tickets), 10px for paper cards, 4px for the poster and post covers. Pills only for tags, chips and switches.

## Surfaces and depth

- The page is paper: every large surface carries the `--grain` texture. Cards are smoother, fresh paper with a soft card shadow.
- `--grain` is an SVG noise tile written as a data URI, one per theme. Keep its quotes, parentheses and `#` percent-encoded (`%27`, `%28`, `%29`, `%23`); otherwise `scripts/inline.mjs` mistakes the inner `url()` for a missing file.
- Cut-outs carry their own drop shadow and a thin cream paper edge, so they read as objects lying on the page.
- The poster and the night band are the only deep color fields. No gradients anywhere else, no glass, no blur.

## Signature elements

These make the style recognizable. The home page uses all six; every other page keeps at least three.

1. **The line-up poster.** A tall panel with a dusk gradient sky (violet, rose, apricot), the event name in the condensed serif, ribbon-cut date tags, the headliner huge in condensed sans, and three rows of names in shrinking sizes separated by middle dots, ending in a silhouette horizon. It is real text, sized with container units so it scales like an image. It is the hero, never a thumbnail.
2. **The stem rule.** A hand-drawn green stem under each page headline that ends in a marigold bloom. It grows from left to right and the flower opens once.
3. **Cut-out objects.** Flat cut-paper drawings of plants and festival things (prickly pear, agave, bell tent, shuttle bus, lantern, radio, sun, map, canteen, stamp, ticket, tumbleweed) with a cream edge and a soft shadow. One to three per screen, slightly tilted, at the edge of a block or overlapping a card's top.
4. **Paper cards on a landscape.** Info cards with a cut-out breaking out of the top, a centered uppercase title over a rule, one short paragraph and an arrow link, set on an illustrated band of sky, sun and hills with a string of festoon lights across the top.
5. **The night band.** A full-width deep navy section with scattered stars, a centered cream headline, a five-color spectrum line and dark tiles that each hold a cut-out. The footer uses the same night under a horizon of palms and agaves.
6. **Ticket details.** Passes are tickets with notched sides and a dashed tear line; the active nav item gets a marigold underline; prices and years are set in the serif.

## Components

- **Header:** sticky paper bar with a hairline. Brand mark and name in the serif, a vertical rule and the dates, five uppercase green links, the theme toggle and one espresso button. It becomes a right-side sheet below 1080px.
- **Hero:** kicker, display headline, stem rule, lead, a primary and an outline button, two arrow links, a note, a cut-out cactus; the poster fills the right column. The copy stays in view while the poster scrolls.
- **Buttons:** primary is a solid espresso rectangle with cream uppercase text; the second is a 1.5px outline that fills on hover. Arrow links are uppercase with an arrow that nudges right.
- **Info card:** see signature 4.
- **Stage list:** a colored dot, the stage name in the serif, a muted note, an arrow; the whole row links to the set times filtered to that stage.
- **Night tile:** cut-out on the left, uppercase title, one line, an arrow link.
- **Post card:** a tinted cover with one centered cut-out, a tag and date, a serif title that underlines on hover.
- **Postcard:** the newsletter block is a postcard: copy and the email form on the left, a dashed divider, a stamp and address lines on the right.
- **Set times:** day tabs in the serif with a marigold underline, stage chips, a counter and an "Only my plan" toggle, then one paper card per stage listing time, name and a star button. The headliner's name is set in the serif.
- **Pass:** see signature 6. Uppercase label, a serif name, a big serif price that follows the payment switch, ticked features, one primary button.
- **Forms:** labels above 50px fields with a 1.5px brown border, a green focus ring (marigold in dark), the error under the field and a green success panel that replaces the form.
- **FAQ:** grouped under serif H2s, ruled rows with a chevron that turns, and a sticky topic list on desktop.
- **Footer:** horizon silhouette, night background, brand and one line, three link columns with marigold headings, the legal line.

## Do and don't

- Do let the poster be the loudest thing on the page. Don't add a second gradient or a photo behind it.
- Do keep cut-outs to one to three per screen and let them touch an edge. Don't scatter them like confetti or use them as icons.
- Do write headlines in the condensed serif, in green, with a period. Don't set headlines in uppercase or in the sans.
- Do use uppercase only for small labels. Don't track out body text.
- Do keep buttons square and dark. Don't make green, marigold or pill-shaped primary buttons.
- Don't use emoji, icon fonts, neon, glassmorphism, heavy blur or photos of crowds as decoration.

## Voice

Warm, plain and specific about the place and the hours. Speak to someone planning a trip: what time, how to get there, what to bring. Use real-sounding numbers ("every twenty minutes", "ten minutes from the stage"). No exclamation marks, no em dashes, no hype ("epic", "unforgettable", "the ultimate"), no lorem ipsum.
