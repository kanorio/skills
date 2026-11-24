# Style guide: Mistral AI style

The look in one sentence: an off-white page ruled by hairline rails and boxed cells, tight grotesque headlines, pixel-art sprites drawn from character maps, and a warm ramp of stepped blocks from sun yellow to ember red that rises from the floor of the hero and lies in stripes under the footer.

## Tokens

Every color is one custom property on `:root` written as `light-dark(<light>, <dark>)` in `assets/template.html`. The page follows the system setting; the toggle pins a theme by setting `data-theme="light"` or `"dark"` on `<html>`, which only changes `color-scheme`. The same values are in `tokens.json`.

| Token | Light (default) | Dark | Use |
|---|---|---|---|
| `--bg` / `--bg-2` | warm off-white / a step darker | deep blue-black / a step lighter | the page / bands (threads), inactive tabs, table columns, hover |
| `--surface` | almost white | lifted blue-black | chips, floating cards, form cards, the selected chapter |
| `--soft` / `--soft-2` | light warm gray / hover | gray-blue / hover | secondary buttons, tags, the billing switch track, inline code |
| `--text` / `--text-2` / `--text-3` | ink / gray / lighter gray | cream / gray / dimmer gray | headlines and labels / body copy and leads / dim chips, row labels, placeholders |
| `--line` / `--line-2` | hairline / stronger | hairline / stronger | rails, cells, sections / inputs, the threads |
| `--ink` / `--ink-2` / `--on-ink` | ink / hover / off-white | cream / hover / ink | the primary button and the header's action cell. It flips with the theme. |
| `--band` / `--band-2` | deep blue-black / its hairline | darker than the page / its hairline | the one dark band ("Go further") and code panels |
| `--s1` to `--s5` | sun, amber, orange, red, ember | the same | the warm ramp: stepped blocks, stripes, the diamond, the popular tab (`--s4`), the quote card (`--s4`), the mark |
| `--pk`, `--pw`, `--pl`, `--ps`, `--pb`, `--pn`, `--pg`, `--pd`, `--pt` | ink, white, light gray, gray, sky, navy, leaf, dark leaf, soil | the same | the pixel palette, used only inside sprites |
| `.m-leaf`, `.m-sky`, `.m-ember`, `.m-sun` | three tints per hue (`--m0` base, `--m1` light tiles, `--m2` dark tiles) | deeper tints | mosaic panels and post covers |
| `--link` / `--focus` | burnt orange | light amber | links in prose, focus rings |
| `--err` / `--ok` | red / green | lighter versions | form errors / checks in floating cards |

Color has three jobs and no others. Neutrals carry the page. The warm ramp is architecture: blocks, stripes, the mark, one red quote card and the popular tab. The pixel palette and the four mosaic hues belong to pictures. Buttons are ink or soft gray, never orange; headlines are always the text color.

White on `--s4` passes AA for normal text; use ink, never white, on `--s1` to `--s3`.

## Typography

- **Schibsted Grotesk** (variable, 400 to 900) for everything readable. **Azeret Mono** (400 and 500) for eyebrows, tags, code, specs inside cards, dates and the names row's monospace treatment. Ligatures are off in mono.
- Display: weight 500, letter-spacing -0.045em, line-height 0.98, centered on home only. A 16 by 16 sprite may sit inline in it (`.display .px`), once.
- H1: 500, -0.04em, line-height 1, left aligned on inner views. H2: 500, -0.035em, often centered on home. H3: 500 at 20 to 28px.
- Body 16px at 400, line-height 1.55. Leads are 17 to 20px in `--text-2`, at most 46 characters wide.
- **Eyebrows and tags** are Azeret Mono 11px, uppercase, letter-spacing 0.04 to 0.06em. Tags sit in a 22px gray box with a 2px corner; the pressed filter tag turns ink.
- Headlines are short statements that end with a period: "Small models. Your data. Your call."

## Spacing, layout and radius

- **The ruled canvas.** Content lives in `.frame`: 1200px wide with a 1px rail on each side (`min(1200px, 100% - 24px)`), so at 1440 the rails sit 120px from the edges. Sections are separated by full-width hairlines (`.line`), never by gaps or shadows. `.node` puts a 5px ink square where a section line meets the two rails.
- **The cell.** `--cell` is 120px at 1440 (8.334vw, minimum 48px): the size of every stepped block and the height of the names row. The gutter outside the rails at 1440 is exactly one cell, so the blocks stand in it.
- Sections are 56 to 112px tall inside the rails (`--sec`); page heads are 48 to 96px. Spacing steps: 4, 8, 12, 16, 24, 32, 40, 48, 64, 96, 120px.
- Radius: 4px on buttons and inputs, 6px on floating cards, form cards and code, 8px on the chapter index and the billing switch, 2px on tags. Blocks, cells, mosaic panels, covers and avatars are square (0).

## Surfaces and depth

- Flat. Structure comes from hairlines: joined cells (`.grid3`, `.cells3`, `.plans`, the header) share borders and never float.
- Only things that hover over a picture get a shadow: the interface cards on mosaic panels (`.mcard`) and the form card (`.fcard`).
- The single dark band per page (`.deep`) and code panels use `--band`. No gradients except the hard-stop stripes and stair bars, no blur, no glow.

## Signature elements

Keep at least five on the home page.

1. **Boxed header cells.** The header is one row of cells divided by hairlines, edge to edge: brand, five nav cells, an empty stretch, the theme cell, a secondary cell and a solid ink action cell flush with the right edge. Nav cells collapse into a full-screen sheet of large rows under 900px; the header never wraps.
2. **Stepped blocks.** Squares of `--cell` in the warm ramp, stacked from the floor of the hero: a two-high column at the left edge, a three-two-one staircase at the right, a half block, and one rotated square (`.dia`). Lower blocks are warmer, higher blocks lighter. Sprites stand on top of them. The 404 view repeats a smaller version.
3. **Pixel sprites.** 16 by 16 pixel art (sun, cloud, drop, sprout, barn, panel, flake, chart, book, terminal, key, mail) drawn at whole-number scales (32, 48, 64px) with crisp edges. They stand on blocks, sit inline in the display headline, mark chips, cards, tabs and channels, and bob one frame up and down.
4. **Hairline rails with nodes.** The two vertical rails run the length of the page; small ink squares mark where section lines cross them.
5. **Chips on threads.** A band of boxed chips (some highlighted with a sprite, some dimmed) with tiny squares on their left and right edges, and hairline threads running from the page edges to the cluster.
6. **Mosaic panels.** Fields of square tiles in three tints of one hue (leaf, sky, ember, sun), generated so each panel differs, with one small interface card and a sprite floating on them. Post covers use the same tiles with a centered sprite.
7. **Sunset stripes.** The footer ends with five full-width stripes from sun to ember, and the brand mark, enlarged to 144 to 224px, sits on the top stripe with a sprite beside it.
8. **Pixel chevrons.** Buttons and row links end in a pixel chevron (a CSS mask, so it follows the text color) that steps 2px right on hover.

## Components

- **Header** (`.hd`, `.hc`, `.hc-r`, `.hd-cta`, `#theme-toggle`, `#menu-open`, `dialog.sheet`): see above. The current view's nav cell takes `--bg-2`.
- **Buttons:** 48px tall, 4px corners, label and pixel chevron (`.go`). `.btn-ink` primary, `.btn-soft` gray secondary, `.btn-sm` 36px, `.btn-wide` stretches with the chevron at the far end.
- **Hero** (`.hero`, `.terrain`, `.b`, `.dia`, `.sp`): centered display headline, a lead, two buttons, then the floor of blocks. Block positions are custom properties: `--x` cells from the edge (`.l` left, `.r` right), `--y` cells up, `--s` size, `--c` color.
- **Names row** (`.names`): five cells one block tall with invented customer names set as type in five treatments. Never fake logos.
- **Threads** (`.thr`, `.threads`, `.chips`, `.chip`, `.chip.dim`): centered H2 and the chip cluster on `--bg-2`.
- **Chapters** (`.chapters`, `.ch-nav`, `.ch`, `.mosaic`, `.mcard`): a sticky boxed index on the left that follows the row in view, and rows of text (H3, paragraph, soft button) beside a mosaic panel.
- **Stories** (`.stories`, `.st-tabs`, `.st-p`, `.st-fact`, `.st-q`): tall tab cells with sprites on the left (an amber tick marks the selected one), a white fact card and a solid red quote card on the right.
- **Deep band** (`.deep`, `.cells3`): "Go further." and three tall link cells with a sprite at the top and the description at the bottom.
- **Cards** (`.grid3`, `.card`, `.post-card`, `.cover`, `.tags`, `.specs`): joined cells, a sprite or a mosaic cover, mono tags, an H3, muted text and a mono date or specs list.
- **Toolbar** (`.bar`): a bold label, a live count, mono filter tags and a search field on the right.
- **Pricing** (`.seg`, `.plans`, `.plan.is-pop`, `.pop`, `.pi`, `.price`, `.feat`, `.cmp`, `.qa`): four joined plan cells, a red "Most chosen" tab that sits above its column, a tile with the mark, a large price, a check list and an ink button at the bottom; a comparison table with alternate columns shaded; FAQ rows with a pixel plus.
- **Docs** (`.docs`, `.d-side`, `.d-menu`, `.doc`, `.code`, `.note`, `.ptbl`, `.pager`, `.toc`): sidebar with search and groups, the article, and "On this page".
- **Forms** (`.fcard`, `.form`, `.fld`, `.in`, `.err`, `.check`, `.radios`, `.rad`, `.done`): labels above fields, a reserved line under each field for its error, radio choices as boxes that turn ink when picked, a success panel with a sprite.
- **Footer** (`.ft`, `.ft-cols`, `.nl`, `.ft-bot`, `.ft-land`, `.stripes`): four cells of links and the newsletter, a line of small print, then the mark on the stripes.

## Do and don't

- Do let hairlines and cells do the layout. Don't add rounded cards with shadows, colored section backgrounds (besides one `--bg-2` band and one dark band) or gradients.
- Do draw pictures as pixel sprites and mosaics. Don't use stock photos, 3D renders, isometric art, smooth vector illustrations or emoji.
- Do keep sprites at whole-number scales of 16 (16, 32, 48, 64, 128px). Don't scale them to odd sizes or blur them.
- Do keep the warm ramp for blocks, stripes, the mark, the popular tab and one quote card. Don't color buttons, headlines or body links orange outside prose.
- Don't use a mascot or character as the brand; sprites are objects from the brief's world.

## Voice

Plain, confident and specific. Short headlines that end with a period, often in two or three beats ("Small models. Your data. Your call."). Lead with what the visitor gets, then how ("Send coordinates, get an hourly forecast with an honest uncertainty band"). Numbers carry units. No exclamation marks, no hype words ("revolutionary", "next-gen", "supercharge"), no em dashes in sentences, no lorem ipsum.
