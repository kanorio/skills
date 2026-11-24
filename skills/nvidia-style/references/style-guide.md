# Style guide

The look in one sentence: a white page with pale grey bands, bold sans headlines, one acid green on square buttons, arrows and chevrons, rows of rounded cards that run off the right edge of the screen, product shots lit on black, a black sub-navigation strip on long pages and a black footer with green links.

## Tokens

Every color is one custom property on `:root` written as `light-dark(<light>, <dark>)` in `assets/template.html`. The page follows the system setting; the toggle pins a theme by setting `data-theme="light"` or `"dark"` on `<html>`, which only changes `color-scheme`. The black band (`.black`), the strip, the footer and toasts set `color-scheme: dark` on themselves, so every token inside them resolves to its dark value in both themes. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` | white | black | the page; inside `.black` always black |
| `--band` | pale grey | near-black | the hero, page heads, alternate sections |
| `--surface` | white | dark grey | cards, panels, configurator options |
| `--hover` | light grey | grey | icon buttons, steppers |
| `--text` / `--text-2` | near-black / mid grey | near-white / light grey | headings and body / captions, crumbs, dates, counts |
| `--border` / `--border-strong` | hairline grey / mid grey | dark grey / mid grey | card edges, rules, tab baselines / fields, chips, the base bar in charts |
| `--accent` / `--accent-hover` / `--accent-text` | acid green / lighter green / near-black | the same | primary buttons, carousel arrows, link chevrons, underlines, progress bars, bars in charts, the cart badge |
| `--accent-ink` | deep green | light green | green that has to be read: big numbers on black, check marks, years |
| `--focus` | deep green | light green | focus rings |
| `--strip` | dark grey | dark grey | the sub-navigation strip and toasts |
| `--danger` | red | lighter red | form errors |

There is one hue. Acid green carries every action and every highlight; everything else is black, white and greys. Green is never used for body text on white (it fails contrast): on white it fills buttons and draws chevrons, rules and bars; on black it can be text (footer links, big numbers).

## Typography

- **Encode Sans** (variable, 100 to 900) for everything. No second family.
- Display: weight 700, 36 to 56px, line-height 1.14, used for the hero headline of the home page and the black heroes of product and event pages.
- H1 700 at 32 to 48px; H2 700 at 28 to 40px; H3 700 at 20px. Every headline is bold; never light, never uppercase.
- Eyebrows (`.eyebrow`) sit above headlines in bold 17px text colour, sentence case, never green and never tracked.
- Card labels (`.label`) are bold 15px with ` | ` between category and type: "Workstation | New".
- Leads and section intros are 18 to 22px at weight 400 with a loose line-height of 1.75: the roomy intro next to a bold headline is part of the look.
- Body 16px, line-height 1.6. Long reading (`.prose`) is 17px at 1.75 on a 46rem measure.
- Prices and figures use tabular numbers; big numbers on black are green.

## Grid, spacing and radius

- Page width 1290px with gutters that grow from 16px on phones to 75px at 1440px.
- Section padding 56 to 96px. Spacing steps: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 75, 96px.
- **Full-bleed rows**: carousel rows and the hero start at the page's left edge and run off the right edge of the screen (`--inset` is the left edge of the page column).
- **Radius**: 2px on buttons, fields, chips, tags and arrows (they read as square); 12px on cards, panels, configurator options and media. Nothing is pill-shaped.

## Surfaces and depth

- White sections alternate with pale grey bands (`.band`); a black band (`.black`) appears once or twice per page for a product on black or for numbers.
- Cards are white with a 1px hairline, 12px corners and a small two-layer shadow; on hover the shadow grows and the picture zooms by 3 percent. In dark, cards are dark grey on black with the same border.
- Product pictures always sit on black, inside cards and heroes, in both themes.

## Signature elements

Keep at least four on the home page.

1. **Carousel rows** (`.crow`): the H2 at the top left and two square green arrow buttons at the top right; below, a left column with a roomy intro and a "Quick links" disclosure, and a row of cards that runs off the right edge of the screen and scrolls sideways with snap.
2. **Cards with a picture on black** (`.card`): 12px corners, hairline, soft shadow, 16:9 picture on black, a bold `Category | Type` label, a bold title, one or two lines, and a bold "Learn more" link with a green chevron. The whole card is the link.
3. **The hero ticker**: a pale grey hero with the copy on the left and a picture bleeding off the right edge; under it, one ticker item per slide with a 4px bar that fills with green while the slide shows.
4. **The black sub-navigation strip** (`.strip`): on product and event pages, a dark bar under the hero with section links, a 4px green underline on the section in view, and a green action on the right. It sticks to the top while you scroll; on phones it becomes a disclosure button.
5. **Square acid-green buttons** with near-black bold labels, and bold text links with a green chevron (`.more`) or a 2px green underline (`.u`, links in prose).
6. **Products on black**: the black band with a product shot, green figures over hairlines and two actions.
7. **The black footer**: white bold column heads over a hairline, green links, and a newsletter field with a green button.

## Components

- **Header**: white (black in dark), 60px, hairline below. Brand mark and an uppercase bold wordmark, grey text links that turn black with a 3px green underline on the current page, then theme and cart icon buttons and a small green action. Under 1024px the links move into a left `<dialog>`; under 600px the action hides. Never wraps.
- **Hero**: `.hero.band` with `.slides`, each `.slide > .hero-in` (copy and `.hero-img`), and `.ticker` with `.tick` buttons. The first slide holds the page's H1; the others use H2 in the same style.
- **Carousel row**: `.crow > .crow-head` (H2 and `.arrows[data-for]`) and `.crow-body` (`.crow-intro` and `ul.track`). The script draws the arrows and disables them at either end.
- **Cards**: drawn by one `card()` function in the script; catalog cards add a spec list with green checks, a price and an "Add to cart" button.
- **Feature cards** (`.card.feat`): a 44px line pictogram in deep green, a bold H3 and one line, in rows of three or four.
- **Black band** (`.black .showcase`): copy, a two-by-two `dl.stats` with green figures over hairlines, two actions, and the product picture.
- **Strip**: `nav.strip > .strip-in` with `.strip-toggle`, `.strip-links` and a primary button.
- **Tabs and filters**: bold text tabs on a 2px rule with a 4px green underline (`.tab`); chips are square outlined buttons that fill with the text colour when pressed; a live count on the right; a dashed empty state with a reset button.
- **Chart**: vertical green bars against grey base bars, a value above each bar, labels under the axis, a legend with square swatches and a footnote about how it was measured.
- **Configurator**: radio cards (`.opt`) in groups with a green edge on the selected one; a sticky summary panel with the total and a full-width green button.
- **Spec table**: bold row heads, hairlines, a 2px rule under the column heads.
- **Accordion**: native `<details>` with hairlines and a green chevron that turns.
- **Forms**: bold labels above square fields with a mid-grey border; focus is a 2px deep-green ring; errors sit in a reserved line under the field; a success notice with a green left edge replaces the form.
- **Cart**: lines with a picture on black, configuration, a square stepper and a remove link; a summary panel with the checkout form.
- **People**: black blocks lit from the top right with large green initials, name and role below.
- **Footer**: black; four columns (three link lists and the newsletter), a bottom row with the brand, legal links and copyright.

## Do and don't

- Do keep one acid green and let black, white and greys do the rest. Don't add a second accent or use green for paragraph text on white.
- Do put products on black, lit from above with one green light. Don't place cut-out products on white or on coloured gradients.
- Do keep buttons square and bold. Don't round buttons into pills or use outline buttons as the main action.
- Do let carousel rows bleed off the right edge. Don't box them inside the page column or add dots under them.
- Do write headlines bold and short. Don't use light weights, all caps or tracking.

## Voice

Confident and specific, like an engineer who ships hardware: numbers with units ("38 dB under full load", "48 hours of burn-in"), product names with model numbers, short declarative headlines ("Up to four accelerators. One quiet tower."). Claims are measured and stated plainly; no exclamation marks, no superlatives without a figure, no em dashes.
