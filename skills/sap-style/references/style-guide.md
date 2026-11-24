# Style guide: SAP style

The look in one sentence: a white canvas under a violet-to-blue gradient hero, a white product card floating in a frosted bezel with small panels and avatars overlapping its edges, glossy four-point stars as the only ornament, rounded media frames with floating interface snippets, a ruled story list, and blue text links that end in a chevron.

## Tokens

Every color is one custom property on `:root` written as `light-dark(<light>, <dark>)` in `assets/template.html`. The page follows the system setting; the toggle pins a theme by setting `data-theme="light"` or `"dark"` on `<html>`, which only changes `color-scheme`. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | white | deep indigo-navy | the page, fields |
| `--layer` / `--layer-2` | lavender-grey / one step deeper | a step above the page / one more | stat tiles, value cards, FAQ rows, the aside, the footer / hover, the pill track |
| `--card` | white | a step above the layer | cards, product cards, floating panels, plans, form cards |
| `--text` / `--text-2` | deep slate / muted slate | near-white / muted lavender | headlines and body / captions, descriptions, card text |
| `--border` / `--border-2` | pale lavender / mid grey | dark indigo / mid indigo | card outlines and rules / field outlines |
| `--accent` / `--accent-hover` / `--accent-text` | blue / deeper blue / white | light blue / lighter blue / deep navy | primary buttons, the floating contact button, the story rule, focus rings |
| `--link` | blue | light blue | chevron links, current tab, check marks |
| `--tint` / `--tint-text` | pale violet / deep violet | deep violet / pale violet | chips, the current nav item, icon tiles, the date tile, the page-head wash |
| `--g-blue`, `--g-indigo`, `--g-violet` and `--grad` | bright | deeper | the hero band and gradient blocks only |
| `--num` | violet to blue | light violet to light blue | gradient text on big figures |
| `--danger` / `--success` / `--warn` | red / green / amber | lighter versions | form errors / success, "Renewed" chips / "Due" chips |
| `.t1` to `.t4` (`--s1` to `--s3`) | lilac, sky and mint, peach and violet, deep violet-blue | the same hues, dimmed | the soft-focus scenes behind media and cards |

Two families of color do two jobs. Blue is for action: buttons, links, the active rule. Violet into blue is for atmosphere: the gradient band, the stars, the scenes and the figures. Never set body text in violet, and never make a button violet.

## Typography

- **Radio Canada** (variable, 300 to 700), a humanist sans, for everything. No second family.
- Display: weight 600, 38 to 60px, line-height 1.08, letter-spacing -0.015em, white on the gradient. Once per site, in the home hero.
- H1: 600, 34 to 50px. H2: 500, 26 to 36px, the workhorse for section heads. H3: 600 at 19px.
- Body 16px at 400, line-height 1.55. Leads are 17 to 21px in `--text-2`. Labels, links, buttons and chips are 600.
- Long reading (`.prose`) is 17px with line-height 1.65 and a 44rem measure.
- Headlines are sentence case, plain promises without a full stop: "One workspace for every request, contract and invoice".

## Layout, spacing and radius

- Page width 1240px with 16 to 40px gutters; a 16 to 32px gap between columns.
- Section heads (`.sh`): H2 with a one-line muted intro on the left, an optional chevron link on the right edge. Content follows full width.
- Wide two-column splits carry most sections: story list 5 to frame 7, frame 7 to links 5, text 1 to art 1.1. Feature cards run two per row.
- Section padding 64 to 120px; page heads get a soft violet wash that fades into the page.
- Radius grows with size: 8px controls and buttons, 16px cards and media, 20px product panels and form cards, 28px gradient blocks, full pills for chips, tabs and filters, circles for avatars.

## Surfaces and depth

- Cards are white with a pale border; linked cards lift 3px with a soft violet shadow on hover.
- Floating panels (`.ui`, `.ui-t`, `.mini`, `.note`, `.logo-chip`) are the only things with a deep shadow (`--shadow-float`), always over a gradient or a scene so they read as product screens.
- The hero and the gradient blocks (`.cta`) are the only saturated surfaces; everything else is white or a faint lavender layer.

## Signature elements

Keep at least four on the home page.

1. **The gradient hero band.** Full width, violet at the upper right melting into indigo and blue at the lower left (`--grad`), white display headline, a lead, a white button and a white outline button.
2. **The floating product card.** A white app window in a translucent frosted bezel (`.ui` with `::before`): an icon rail with the active item in gradient, a title bar, a chat request bubble, the assistant's answer, a result card with chips and a small outline button, and an input with a gradient send key. A notification panel (`.note`) and an avatar (`.av-float`) overlap two corners; a star sits off the third.
3. **Glossy four-point stars.** A lilac-to-violet star with a white highlight and soft drop shadow (`#star`), plus a thin white outline sparkle (`.spark`). One or two per view, never in a row, drifting slowly.
4. **Media frames with floating snippets.** Rounded scenes (`.scene.t1` to `.t4`) with one small white interface panel (`.mini`) centred or pinned, instead of a busy screenshot. With real photos, the photo fills the frame and the panel floats over it.
5. **The ruled story switcher.** A list of results with a 3px rule down the left; the active item turns blue, opens its summary and link, and drives the big frame beside it (logo chip, figure).
6. **Chevron links.** Blue, weight 600, a chevron drawn by CSS that nudges right on hover. Used for every "Learn more", "Read the story", "All resources".
7. **The floating contact button.** A blue rounded button fixed at the bottom right with a chat icon and "Talk to us"; a circle on phones; hidden on the contact and sign-up views.

## Components

- **Header:** sticky, white (frosted), 64px, hairline below. Brand, five nav links as soft pills (current one tinted), theme button, a blue text link and a small blue button. Under 1080px the links move into a left `<dialog>`; under 560px the text link hides and under 480px the button too (the dialog and the floating button carry the action). Never let it wrap.
- **Section head:** `.sh` with H2, muted line, optional right-aligned chevron link.
- **Feature cards:** `.cards2 > .fc`: a 2:1 scene with a mini panel, H3, one sentence, chevron link.
- **Workspace split:** `.ws`: a deep scene holding a table-like panel (`.ui-t` rows with status chips) beside two link blocks.
- **Stats:** tiles on `--layer` with a big gradient figure and a caption.
- **Cards:** `.card` with a 16:9 scene on top (chip or logo chip on it), body with chip, H3, a line, a chevron link pinned to the bottom. `.card-row` is the wide version.
- **Pills:** one rounded track (`.pills`) for tabs, filters and the billing toggle; the selected pill turns white with a blue label and a shadow.
- **Tab panels:** text (H2, lead, check list, chevron link) beside a 4:3 scene with a mini panel and a star.
- **Plans:** white cards; the featured one has a violet-to-blue gradient border and a "Most chosen" chip. Prices switch between monthly and yearly.
- **FAQ:** rounded lavender rows (`<details>`), a chevron that turns.
- **Events:** a gradient block for the flagship event with icon facts, then rows with a violet date tile, a format chip, H3, a line and a Register button.
- **People:** avatar circles in gradient with initials (or square-cropped photos in a circle), name and role on a lavender card.
- **Timeline:** a gradient line with ring markers above four milestones; vertical on phones.
- **Forms:** labels above in 600; outlined 44px fields with 8px corners; a blue focus ring; errors in a reserved line under the field so nothing moves; chip radios for short choices; a green-tinted success panel replaces the form.
- **Footer:** lavender layer, brand and one line, newsletter field and button, four link columns, a bottom rule with legal links.

## Do and don't

- Do keep the gradient for the hero and one or two closing blocks. Don't paint section backgrounds, cards or buttons with it.
- Do let product panels tell the story: one clear task, real-sounding numbers, status chips. Don't paste full dense screenshots or fake dashboards with twenty widgets.
- Do round everything by size. Don't mix square corners in.
- Do keep stars rare and glossy. Don't scatter sparkles, confetti, blobs or isometric 3D scenes.
- Don't use emoji, icon fonts, stock "handshake" photos or logos of real companies.

## Voice

Confident and practical, like a good product marketer who has used the software: outcome first, then how ("Quotes in days, not weeks"). Short sentences, the buyer's own words, numbers with units, verbs in the present tense. The assistant is helpful and bounded: it drafts, compares and reminds, and asks before acting. No exclamation marks, no "revolutionary", "seamless" or "next-generation", no em dashes.
