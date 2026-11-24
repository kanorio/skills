# Pictures and images

This style is carried by photographs. The interface is black and white on purpose, so the pictures supply all the colour and all the mood. Every plate should look like one page of the same campaign.

## The photographic language

- **Light:** one hard, directional light, like a single spotlight or a slab of window sun. Deep shadows, a clear highlight on the subject, a darker lower third.
- **Colour:** mostly neutral (black, ivory, stone, charcoal) with one material colour allowed per picture: amber perfume, gold, ecru wool, a single flower. No saturated backdrops, no teal-and-orange grades.
- **Composition:** one subject, centred or on the vertical axis, filling the frame; empty wall or floor around it; the bottom third quieter and darker, because the caption sits there. Product pictures are cut out or shot on a plain pale grey, centred with room around them.
- **People:** a model may carry a plate when the user has such photographs. Otherwise show the object, the garment on a form, the workroom, hands at work.
- **Never:** text, logos or watermarks in pictures; monograms made of interlocking letters; collages; drop shadows or frames added in CSS; stock smiles.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Full plate | 16:9 to 5:3 on desktop, cropped to about 1:2 on phones | 2400 x 1440 | `.plate .plate-media` | Keep the subject in the middle third so the phone crop holds it; set `--pos` when it is not centred. Dark lower third. |
| Half plate | 4:5 | 1600 x 2000 | `.plate.half .plate-media` | Portrait; shown about 1:1.15 on desktop and full height on phones. |
| Band | about 3:1 | the same file as a plate | `.plate.band` | Usually reuses a plate; `--pos` picks the strip. |
| Product | 4:5 | 1200 x 1500, transparent or on pale grey | `.tile-media img`, `#p-img` | Object centred, about 70% of the frame, soft contact shadow. A transparent WebP or PNG lets the black theme show a dark tile. |
| Product thumbnails | 4:5 | the same files | `.thumb` | First the product, then a campaign plate, then a detail or the workroom. |
| Journal card | 4:5, the first card 8:5 | reuse plates or products | `.card .ph` | |
| Article pair | 4:5 | 1600 x 2000 | `.figure-pair` | |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Black, the wordmark in white and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A round glass flask of amber perfume on a dark stone block"). Do not add `decoding="async"` or `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip them); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each.

## The sample pictures

`assets/images/plate-*.webp` are rendered stand-ins in this language (a black coat on a dress form under a spotlight, a perfume flask on a stone block in striped sun, gold links on velvet, a tote on a stone step, a workroom table from above, an empty salon with a tall window), and the other files are product cut-outs (coat, jacket, dress, two perfume bottles, a candle, a ring, earrings, a bracelet, a tote, a card holder, a silk square). They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject:

> Fashion campaign still life, [subject], single hard spotlight from above left, deep shadows, neutral black ivory and stone palette, one material colour, subject centred filling the frame, lower third dark and quiet, medium format, no people facing the camera, no text, no logos.

For products: "Product photograph of [object], centred on a plain pale grey background, soft even light, small contact shadow, no props, no text." Subjects that suit the style: a garment on a tailor's form; a bottle on a stone plinth; jewellery on velvet; a bag on a step; tools on a cutting table; an empty room with one chair. Generate at the source size, crop to the slot, and check the set side by side: one light, one grade.

## Without an image tool

Keep the template's stand-ins, or make new ones the same way: a dark gradient wall, one simple object drawn with a few gradient shapes, one spot of light, a darker floor, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos, monograms or packaging from a real fashion, perfume or jewellery house unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the brand name in Josefin Sans 600, uppercase, letter-spacing 0.42em (`.brand`). If the brand has a real logo, put its SVG inside `.brand` at about 22px high and keep the space around it.
- The favicon (`illustrations/mark.svg`) is a black square with one white letter drawn in straight strokes. Keep it to a single letter; never interlock two.
