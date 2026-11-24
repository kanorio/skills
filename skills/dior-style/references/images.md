# Pictures and images

Two kinds of picture carry this style, and they never mix: **films** (atmospheric campaign stills, full-bleed, with mood and light) and **products** (one object, alone, on the pearl stage). The interface around them is black, white and pearl, so the pictures supply all the colour.

## The photographic language

**Films**
- **Light:** soft daylight from one side (a tall window, late sun), or a single studio light in the dark. Long, gentle shadows.
- **Colour:** pearl, ivory, dove grey, midnight, blush and a little warm amber. One grade per campaign; never teal-and-orange or HDR.
- **Composition:** one garment, one object or one place, with room around it: a gown on a stand in an empty gallery, silk folds close up, a clipped garden at dusk, a bottle on stone in late sun, a runway between rows of chairs.
- **People:** when the user has real campaign photographs, use them. Otherwise keep figures out of frame: stands, cloth, rooms and objects tell the story.

**Products**
- One piece, front view, centred, filling about 70% of the 4:5 frame, on a **transparent background** with a soft floor shadow, so the pearl stage shows through in both themes.
- Same camera height and scale for every piece of one kind; garments as if on an invisible form.
- Never: props, hands, hangers, models, text, logos or watermarks on product pictures.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Hero film stills | 16:9 on desktop, cropped to a tall frame on phones | 2400 x 1350 | `.film.hero .frame` | Keep the subject between 40% and 70% of the width, and set `--fx` on the still to its centre so phones crop to it. |
| Diptych film stills | 4:5 | 1200 x 1500 | `.diptych .film.tall .frame` | One garment per film. |
| Wide film stills | 21:9, 4:5 on phones | 2400 x 1030 | `.film.wide .frame` | Subject in the middle third. |
| Film page stills | 16:9, 4:5 on phones | 2400 x 1350 | `.film.screen .frame` | Add `data-cap` with the chapter name. |
| Product | 4:5, transparent | 1600 x 2000 | `.stage img` | WebP or PNG with alpha. |
| Film cards | 3:2 crop of any still | the same files | `.card figure` | |
| Savoir-faire, ateliers | 4:5 | 1200 x 1500 | `.split figure`, `.cards figure` | |
| Maison | 3:2 | 2400 x 1600 | the full-width figure | A facade, a salon or the atelier. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Pearl, the wordmark and one line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A long ivory wrap coat with a tie belt"). Extra stills inside a film use `alt=""`; the first still describes the film. Do not add `loading="lazy"` or `decoding="async"` in a single-file delivery (full-page captures skip lazy pictures); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this language: film stills (`film-gallery`, `film-silk`, `film-night-silk`, `film-garden`, `fragrance`, `runway`, `tailoring`, `evening`, `atelier`, `salon`) and transparent product pictures (`coat`, `blazer`, `slip-dress`, `gown`, `knit`, `skirt`, `trousers`, `bag`, `pump`, `scarf`, `bottle-amber`, `bottle-night`). They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt per kind and change only the subject.

> Film still: quiet fashion campaign photograph, [subject], soft directional daylight, pearl grey and ivory palette with [one accent colour], fine grain, generous empty space, shot on a 50mm lens, no text, no logos, no faces looking at the camera.

> Product: studio product photograph of [piece] alone, front view, centred, on a plain light grey seamless background, soft overhead light, gentle floor shadow, no props, no model, no text, no logos.

Remove the background of product pictures (keep the floor shadow soft) and export with alpha. Check each set side by side: same light, same scale, same grade.

## Without an image tool

Keep the template's stand-ins, or make new ones in the same way: a few soft shapes, gradients for light and cloth, one subject, the pearl palette, saved as files in `images/` and referenced with `<img>` so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos, monograms, patterns or packaging from a real fashion house, photographer or brand unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the brand name in the serif, uppercase, weight 500, letter-spacing 0.22em (`.brand`). If the brand has a real logo, put its SVG inside `.brand` at about 24px tall and keep it centred.
- Do not invent a monogram or an interlocking-initials mark for the user. The favicon (`illustrations/mark.svg`) is a pearl square with a thin play circle; replace it with the user's own mark when they have one.
