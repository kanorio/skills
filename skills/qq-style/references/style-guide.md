# Style guide: QQ style

The look in one sentence: a full-screen aurora seen through vertical fluted glass, one glowing, widely spaced white title in the middle, a single frosted white pill under it and a quiet row of platforms at the foot, with plain white inner pages that borrow the same glass for their heads, cards and covers.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html` and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | white | deep night blue | page background, header bar, dropdown |
| `--surface` | cool off-white | a step above the page | tinted bands, feature tiles, the release-notes sidebar, tab tracks, code |
| `--surface-2` | pale cool grey | lifted night blue | hover, the selected version, badges |
| `--text` / `--text-muted` | near-black with a blue cast / cool grey | soft white / light cool grey | headings and body / captions, dates, descriptions |
| `--border` / `--border-strong` | hairline / outline | the same roles in dark | header rule, rows, cards / outlined buttons |
| `--accent` / `--accent-hover` | a clear sky blue that reads on white | a light sky blue | the current header link, text links, solid buttons on white pages |
| `--accent-text` | white | night blue | text on an accent button |
| `--ink` | near-black | the same | text on the white pill and on pale aurora |
| `--pill` | white at 88% | the same | the frosted pill; it stays white in both themes |
| `--flute` | 36px (22px on phones) | the same | the width of one glass flute |

**Aurora palettes** are separate from the page colours. Each is seven stops (`--a0` top, `--a1` upper body, `--a2` teal or bright field, `--a3` violet field, `--a4` and `--a5` the warm foot, `--a6` the light middle), set by one class:

| Class | Mood | Text on it |
|---|---|---|
| `.au-night` | indigo top, teal and violet fields, sky middle, peach and pink foot (the hero) | white |
| `.au-dawn` | pale sky, lilac, pink and peach | `--ink` in light, white in dark (it turns to dusk) |
| `.au-ember` | plum to magenta, coral and amber | white |
| `.au-tide` | deep sea blue, teal, mint | white |
| `.au-lilac` | violet, orchid and periwinkle | white |

Add `.deep` to any palette when text runs to the bottom edge: it swaps the pale foot for violet so white text keeps its contrast. In dark mode the warm foot of `.au-night` darkens and the platform row turns white.

## Typography

- One family: **Sora**, variable weight 100 to 800, for everything. Code and checksums use the system monospace stack.
- **The glowing title** (`.glow`): weight 500, letter-spacing 0.14em, pure white, with a three-layer white and pale blue `text-shadow` halo. Only on aurora. The hero title is 42 to 76px; page-head titles 35 to 60px; card titles 28px with 0.1em. Because tracking adds space after the last letter, centred glowing titles carry `margin-right: -0.14em`.
- **Inner headings** are solid and heavy: H1 34 to 52px at 600, H2 26 to 38px at 700, H3 20px at 600, all in `--text`, slightly tight (-0.01em), never glowing.
- Body 16px, line-height 1.7 (Sora is wide; it needs the air). Articles 17px, line-height 1.8.
- Small labels (kicker "Stories", month under a date) are uppercase with 0.14em tracking. Use them sparingly.
- Numbers on dates are light (300) and large: the `.nd` date block.

## Spacing, layout and radius

- The home hero is exactly one screen: `min-height: calc(100svh - header)`, the title, pill and version line centred, the platform row pinned to the foot. Nothing else above the fold.
- Content sits in a 1200px column (`.wrap`); articles, help and legal use 720px (`.narrow`). Sections are separated by 64 to 112px of white space; one tinted band (`.tint`) at most per page.
- Aurora bands run full-bleed: page heads (`.pagehead`), the stories feature, the closing call to action, the sign-up panel. Aurora cards sit inside the column with 28px corners.
- Radius: 12px inputs, 16px panels and tables, 20px cards and story covers, 28px aurora cards and media, pills for every button, chip, tab track and search field.

## Surfaces and depth

- Pages are flat white (or night blue). The aurora is the only colour field; everything else is white, grey and one blue.
- The glass is drawn, not blurred: no per-element `backdrop-filter` on the aurora. Shading on the flutes comes from one repeating gradient; the refraction comes from a scaled copy of the light shown through every other flute.
- Shadows are soft and cool: the pill floats on a violet-tinted shadow, the dropdown and the selected tab on `--shadow-overlay` and `--shadow-card`. Cards on white have no shadow; they are tinted (`--surface`) or outlined.

## Signature elements

Keep the first three on the home page, and at least one aurora surface on every inner page.

1. **Aurora through fluted glass** (`.aurora` + `<i class="flutes">`): soft colour fields over a top-to-bottom gradient, seen through vertical flutes with a highlight on the left edge and a shadow on the right of each one. The hero and the closing band drift slowly (`.live`); everything else is still.
2. **The glowing tracked title** (`.glow`): white, weight 500, wide letter-spacing, a halo. One per aurora surface.
3. **The frosted white pill** (`.pill`, `.pill.lg`): 72px tall on the hero with a line download icon, white at 88% with a soft violet shadow. Under it a one-line version note (`.ver`).
4. **The platform row** (`.plats`): six small icon-and-name links in muted ink at the foot of the hero; on phones they become a 3 by 2 grid with the label under the icon.
5. **Frosted shapes behind the glass** (`.frost`): one or two big, blurred white silhouettes (a moon, a drop, a lamp, a boat, a star) behind the flutes on covers and pale heads. Simple filled shapes, never logos or characters.
6. **The release-notes layout** (`.log`): a grey sidebar with a platform picker and a list of versions with dates, beside one plain document.

## Components

- **Header (`.top`):** a solid 64px bar with a hairline: mark and wordmark left, text links centred with wide gaps (the current one turns blue, no underline), a quiet text link and the round theme button right. "Download" opens a white dropdown of platforms with a divider between phones and computers (CSS hover and focus, no script). Below 1100px the links fold into a sheet under the bar.
- **Pills:** `.pill` (white, on aurora), `.pill.ghost` (outlined white, on aurora, secondary), `.btn` (blue, on white pages), `.btn.line` (outlined, secondary on white). Two actions at most side by side.
- **Aurora card (`.room`):** 440px tall, 28px corners, a small frosted tag, a glowing title, one sentence and a "read" link at the bottom; one frosted shape above.
- **Mixer (`.mixer`):** a glass panel (`.mix-glass`, the one place with `backdrop-filter`) on an aurora card, with range sliders whose values move the light (hue, flute width, saturation, warmth) and a pill group.
- **Story card (`.card`):** a 16:10 aurora cover with a frosted shape, a muted date and tag, a title that turns blue on hover, one sentence.
- **Night row (`.night`):** a large light date, a title with venue and time icons, a status badge, a small pill.
- **Tabs (`.ptabs`):** a grey pill track; the chosen tab is a white pill with a card shadow.
- **Chips (`.chips`):** outlined pills; the chosen one fills with `--text`.
- **Plan card (`.plan`):** outlined; the featured plan is an aurora card with a glowing name and price and the white pill.
- **Forms:** labels above 48px fields with 12px corners, an error line reserved under each field (`.err`, so the button never moves), pill choices for small sets, a tinted success panel with a round check.
- **Footer (`.foot`):** brand and one line, three link columns, then a centred care line ("Customer care | Send feedback") and the copyright.

## Do and don't

- Do let the aurora carry all the colour; don't add coloured bands, gradients on buttons or gradient text.
- Do keep one glowing title per aurora surface; don't glow text on white pages or set body copy in the glow.
- Do keep the hero to one screen with one pill; don't add a second headline, feature bullets or a product screenshot to it.
- Do use `.deep` when white text reaches the pale foot of a palette.
- Don't use `backdrop-filter` on the aurora layers, animate background-position, or animate more than the hero and the closing band.
- Don't draw the product as a chat or messaging app unless it is one; don't use mascots, store badges or platform logos (names and generic device icons only).
- Don't use emoji as icons.

## Voice

Calm, short and kind. Two or three words for a title ("rest easy", "Stay a little longer"), one plain sentence under it. Say what something does and when, in the second person. No hype, no exclamation marks, no em dashes, no lorem ipsum.
