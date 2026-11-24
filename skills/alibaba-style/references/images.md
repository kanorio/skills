# Images

This style sells with honest catalog pictures, not mood photography. Every product is shown the same way, alone and centered on a light ground inside a warm gray tile, so a grid of twenty items reads as one tidy price list. The washes, the search and the price ladder carry the design; there are no full-bleed photos behind text.

## Product pictures

One studio, one light: the product alone, front three-quarter or straight on, soft even light, a small contact shadow, no props, no hands, no text, no packaging other than the product's own. Shoot or render on white or transparent so the `--tile` gray (warm charcoal in dark mode) shows around it.

- The sample products are flat drawings in the sprite (`<symbol id="art-<id>">`, 200 by 200) with a shared ground shadow (`#sh`). Keep them while drafting; replace them with the business's own product photos before launch.
- Products that come in colours paint their main surface with `var(--c1, <default>)`; the swatches set `--c1`, so one drawing serves every colour. With photos, use one photo per colour.
- Keep one scale per family: every mug the same height in its tile, every box the same width. Never crop a product inside the grid; `object-fit: contain` and the 76 percent art box keep the margins even.
- The gallery's three views are front, a close-up of the material or finish, and the product packed in its carton. Real photos should follow the same three.

## Using photos

Put one image per product in the `#photos` holder, before the notice bar:

```html
<div id="photos" hidden>
  <img data-photo="mug" src="images/mug.webp" width="1200" height="1200" alt="">
</div>
```

`art()` then uses that file in every card, the fly-outs, the product page, the workshop thumbnails, the inquiry list and the toast, and `scripts/inline.mjs` embeds it when making a single file. Write each `src` in full and in quotes; never build image paths from variables, or the single-file build cannot find them. Static spots that draw art directly (the most requested tiles, the new-season slides, the product page's static first product, the 404) are edited by hand: swap the `<svg><use href="#art-…"></svg>` for an `<img>` with `width`, `height` and `alt`.

## Slots and ratios

| Slot | Ratio | Export size | Notes |
|---|---|---|---|
| Product tile, gallery stage, inquiry line | 1:1 | 1200 × 1200 WebP on white or transparent | Product fills about 75 percent of the frame |
| Gallery views | 1:1 | three per product: front, close-up, packed | The template fakes the close-up with a zoom and the packed view with a carton drawing |
| Most requested, new season | 1:1 | the same product cut-outs | One per tile or slide |
| Workshop thumbnails, fly-out cards | 4:3 crop of the 1:1 tile | same files | Products, not portraits of people |
| Company mark | square | SVG | The profile card shows it at 88px |
| Open Graph (`illustrations/og.svg`) | 1200 × 630 | | The mark and a calm drawing of the search |

Use WebP for photos (quality 75 to 85) with `width`, `height` and a real `alt` on every image that is not decorative. In a single-file delivery keep images eager (no `loading="lazy"`); a deployed site can lazy-load below the first screen.

## Prompts for an image tool

Keep one prompt base and change only the product:

> Catalog product photograph of [product], centered, front three-quarter view, isolated on a pure white background, soft even studio light, small soft contact shadow, sharp focus, true colours, no props, no hands, no text, no logos, square frame with the product filling about 75 percent.

For a flat illustrated catalog like the sample: "flat vector illustration of [product], simple shapes, two or three warm tones, one soft highlight, small ground shadow, transparent background, no outlines, no text".

## Without an image tool

Keep the drawn stand-ins and list every product picture the user must supply, product by product, in your reply. Do not hotlink photos from marketplaces, manufacturers or other stores, do not use another company's logo, packaging or watermark in the art, and do not show factory floors or people that are not the user's own.
