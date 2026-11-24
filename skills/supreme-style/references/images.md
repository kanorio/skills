# Images

Three kinds of picture, and they never mix: **product shots** on white, **looks** (a person wearing the season against a plain wall), and **story pictures** (places and moments). The interface has no colour of its own, so the pictures are where every colour on the site comes from.

## Product shots

Every product is shot the same way: flat lay or ghost mannequin, front view, centred, square, on pure white (or transparent), even soft light, no props, no shadow beyond a faint contact shadow. Same scale for everything in one category (all jackets fill the frame the same way; caps are smaller than jackets because they are smaller).

- The sample products in `assets/images/p-*.svg` are flat drawings with transparent backgrounds, so the tile colour comes from CSS (`--tile`). Replace them with the user's own photographs.
- The preview wall crops into these same pictures at 2.3x (`CROP` in the template sets the point). A product photographed with a clear print, pocket or texture makes the best wall square; set `CROP` to that point.
- In dark the tiles stay paper white, so white-background photographs need no second version.

## Looks

One person, one outfit, full length, straight on, against one plain wall colour per look, floor visible. Daylight or one soft light, no dramatic grading. The season's looks share one photographer, one lens and one framing so the thumbnails read as a set.

- The samples `assets/images/look-01.svg` to `look-08.svg` are flat paper-doll drawings (4:5) standing in for photographs.
- Real people only with the user's photographs and their permission. Never generate or use the likeness of a real person, athlete or musician.

## Story pictures

Places and moments around the brand: the shop front, a ramp at dusk, a street at night, a launch. Real photographs, colour, taken by the brand or a friend of it, framed simply. A story may also reuse a look or a product shot.

- The samples `assets/images/scene-*.svg` are flat drawings (5:4) of a shop front, a half-pipe and a street corner.

## Slots and ratios

| Slot | Ratio | Size to export | Notes |
|---|---|---|---|
| Product tile, spec sheet, cart line, wall square (`.tile img`, `.pd .pic img`) | 1:1 | 1200 x 1200, WebP or AVIF, white or transparent | centred, even margins of about 5% |
| Look (`.lb .main img`, `.thumbs img`, `.hero img` on home) | 4:5 | 1200 x 1500 | full length, feet in frame, head below the top edge |
| Story picture (`.story .pic img`) | 5:4 or 4:5 | 1500 x 1200 or 1200 x 1500 | the template takes either; keep one ratio per site if you can |
| Store picture (`.store img`) | 5:4 | 1500 x 1200 | the front of the shop from across the street |
| Open Graph (`illustrations/og.svg`) | 1200 x 630 | | the mark and a rule on white |

Every `<img>` has `alt`, `width` and `height`. Product `alt` describes the product ("A black quilted work jacket with a square collar"), not the brand. Wall squares and cart thumbnails use empty `alt` because their link carries the name. Do not use `loading="lazy"` in a single-file delivery (everything is embedded); in a deployed site it is fine below the first screen.

## Prompts for an image tool

When the user has no photographs and an image tool is available, keep one prompt base per kind and change only the subject:

> Product: studio flat lay photograph of [product, colour, material], front view, centred, square frame, pure white background, soft even light, faint contact shadow, no props, no text, no logos.

> Look: full-length fashion lookbook photograph of a [person description] wearing [outfit], standing straight on against a plain [colour] painted wall, concrete floor visible, soft daylight, 50mm lens, natural colours, no text.

> Story: candid colour photograph of [place or moment], [time of day], natural light, slightly grainy, simple framing, no text, no logos.

## Without an image tool

Keep the template's drawings as placeholders, recolour them if it helps the brief, and list every picture the user must supply, slot by slot, in your reply. Do not hotlink stock photos or pictures found online, and do not use other brands' products, logos or campaign images.
