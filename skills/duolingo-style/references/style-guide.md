# Style guide: Duolingo style

The look in one sentence: a white page, chunky lowercase green headlines, buttons and tiles with a thick bottom edge that sink when pressed, and flat cartoon characters that take turns on the left and the right.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, written as `light-dark(light, dark)` so one line holds both themes; `tokens.json` has the same values as data. Change them there, never inline. The theme follows `color-scheme`: `:root` uses `light dark` (the system setting), and `data-theme="light"` or `"dark"` on `<html>` pins one.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--surface` | white / white | deep blue-gray / one step lighter | page, cards and inputs |
| `--surface-2` | cool off-white | lifted blue-gray | bands, hovers, input fill |
| `--text` / `--text-muted` | soft charcoal / slate | near white / blue-gray | body, card titles / leads, captions |
| `--border` / `--border-strong` | light gray / gray | the same roles in dark | every 2px border and 4px edge / locked stops |
| `--heading` | leaf green (3.4:1, headline sizes only) | bright leaf green | lowercase headlines |
| `--accent` / `--accent-edge` / `--accent-text` | bright green / darker green / deep green | the same roles | primary buttons, done stops, unit banners, progress |
| `--accent-soft` / `--accent-ink` | pale green / green ink | dark green / light green | correct answers, tags |
| `--sky`, `--sun`, `--tangerine`, `--berry`, `--grape` (+ `-edge`, `-soft`, `-ink`) | five toy colors | the same, softer washes | word bubbles, selections, the wrong-answer bar, avatars, tags |
| `--link` | clear blue | light blue | secondary buttons, text links |
| `--navy` / `--navy-text` / `--navy-muted` | deep navy | deep violet-navy | the family band and the featured plan |
| `--hill` / `--hill-text` | bright green / deep green | forest green / near white | the hill and the footer |
| `--edge` | 4px | 4px | the 3D bottom edge everywhere |

Green carries the brand: headlines, primary buttons, progress, the hill. Sky blue means "selected" (chips, choices, the current nav link). Berry means "wrong" and hearts. Sun means rewards and XP. Tangerine is the streak. Grape and the rest only appear in word bubbles, avatars and illustrations.

**Labels on bright fills are a deep shade of the same hue** (`--accent-text`, `--sky-text`), never white. It keeps the cheerful fill and passes WCAG AA, and it reads the same in both themes.

## Typography

- Two families. **Fredoka** (500 to 600) sets every headline, the wordmark, prices, stats and big numbers. **Nunito** (500 to 900) sets everything else: body at 500, labels and buttons at 850.
- Headlines are **lowercase** and end with a period: "ten minutes a day." Write them lowercase in the markup (do not use `text-transform`), so names keep their capitals when they appear in body text.
- The home H1 is the exception: sentence case in `--text`, centered beside the hero drawing. Article titles are sentence case too.
- Display: `clamp(2.5rem, …, 4.25rem)` for the finale and results. H2: up to 3rem, in `--heading`. H3: 1.375rem.
- Body: 17px, line-height 1.6, weight 500. Leads are a size up and muted.
- Labels: Nunito 850, 13 to 15px, uppercase, 0.07em tracking. Used on buttons, navigation, chips, kickers, tags and the strip. This is the only uppercase in the style.

## Spacing, layout and radius

- Page width 1120px with a fluid gutter; articles sit in a 680px column; the lesson in 760px.
- Sections are tall: 64 to 120px. Separate them with a full band (`--surface-2`, navy) or simply white space, never rules.
- Home feature rows are a two-column grid, text and drawing, and every second row is flipped. On phones they stack and center.
- Radius: 14px for buttons and inputs, 16px for cards, tiles and banners, 50% for path stops and avatars, 10px for word bubbles. Nothing is square, nothing is a full pill except the progress bar.

## Surfaces and depth (the 3D edge)

There are no soft shadows. Depth is one solid edge under the object:

- **Buttons:** `box-shadow: 0 4px 0 <darker shade>`. On `:active` the button moves down 4px and the edge disappears, so it sinks.
- **Cards, tiles, chips:** `border: 2px solid var(--border); border-bottom-width: 6px` (2px plus the 4px edge).
- **Path stops:** an 8px edge, sinking 6px when pressed.
- **Word bubbles and unit banners:** a 3 to 5px edge in the darker shade of their fill.
- Only the mobile sheet and nothing else gets a real shadow (`--shadow-overlay`).

## Signature elements

These make the style recognizable. The home page uses all six; every other page keeps at least three.

1. **The pressable button.** A solid, rounded rectangle with a darker 4px edge, an uppercase label in a deep shade of its own color, and a sink on press. The secondary button is white with a 2px gray border, a gray edge and a blue label.
2. **Lowercase green headlines.** Fredoka, leaf green, lowercase, short, with a period. One per section.
3. **Characters that take turns.** A mascot and a small cast of kids drawn flat with big eyes, set beside the text and alternating sides down the page, with floating rewards (gems, coins, flames, hearts, stars) around the hero.
4. **The path.** Round 3D stops zig-zagging down a column under bright unit banners: done stops in green with a check, the current stop in a progress ring under a bobbing "start" bubble, locked stops in gray, a chest and a trophy along the way. A tap opens a popover with the lesson and a start button.
5. **The lesson screen.** A rounded progress bar with a light highlight stripe, the mascot with a speech bubble, answer tiles with the 3D edge, and a check bar along the bottom that turns green ("Nicely done!") or red ("Not quite.") with a Continue button, ending on a results screen with three colored stat boxes.
6. **Bookends.** Under the hero, a strip of subjects as colored word bubbles with uppercase labels; near the end, a deep navy band for the family or premium offer with one gradient word; at the very end, a lowercase display line, one big button and a drawing sitting in the dip of a green hill that becomes the footer.

## Components

- **Header:** white, sticky, a 2px rule once you scroll. The mark and the lowercase wordmark in green, five uppercase links (the current one in a sky-blue chip), the theme toggle and one small primary button. Below 1000px the links move into a right-side `<dialog>` sheet of 3D cards.
- **Hero:** the character drawing on the left, on the right a centered sentence-case H1, a full-width primary button, a full-width secondary button and one short note.
- **Strip:** a full-width band between 2px rules with arrow buttons; each item is a word bubble and an uppercase label linking to that course.
- **Feature row:** lowercase H2, one short paragraph, an optional arrow link, the drawing on the other side.
- **Course card:** a big word bubble, an age tag, a Fredoka title, one line, units and lesson length with icons.
- **Unit banner:** a bright fill with an uppercase kicker, a lowercase title and a small outline button in the same color.
- **Choice tile:** 2px border plus edge, picture or number key, turns sky blue when picked, green when right, berry when wrong.
- **Stats:** flame (streak), gem and heart with a Fredoka number in the matching color.
- **Plans:** three cards; the family plan is navy with a white button. A segmented billing switch above.
- **Forms:** 52px fields with a 2px border on `--surface-2`, a sky border on focus, the error under the field in reserved space, chips and tiles for choices, and a success panel with the mascot.
- **FAQ:** each question is a 3D card with a chevron; groups have lowercase green H2s.
- **Footer:** a green hill SVG flows into a green footer with deep green text: brand, three link columns, the legal line.

## Do and don't

- Do keep the page white and let color come from buttons, bubbles and drawings. Don't tint whole sections in pastel or add gradients (one gradient word in the navy band is the only one).
- Do give every pressable thing the 3D edge. Don't use soft drop shadows, glass or blur.
- Do write headlines lowercase with a period. Don't set headlines in uppercase or in Nunito.
- Do put labels on bright fills in a deep shade of the fill. Don't put white text on bright green, sky or sun.
- Do alternate the drawings left and right. Don't stack two rows with the drawing on the same side.
- Don't use emoji, icon fonts, stock photos of children, real mascots or sharp corners.

## Voice

Cheerful, short and encouraging, written for the grown-up who decides and the child who plays. Say what happens and how long it takes ("about three minutes", "ten minutes a day"). Celebrate only in feedback moments ("Nicely done!", "lesson complete!"); everywhere else, no exclamation marks. No em dashes, no hype ("revolutionary", "the best way ever"), no invented statistics, no lorem ipsum. Be kind about mistakes: "Not quite." rather than "Wrong."
