# Images

This style is sold by product pictures, not by mood photography. Every product is shown the same way, cut out on an even light ground, so a grid of twenty items reads as one tidy shelf. Colour bands carry the promotions with product cut-outs on them; there are no full-bleed lifestyle photos behind text.

## Product pictures

One studio, one light: the product alone, centered, front three-quarter or straight on, soft even light from the front, a small contact shadow, no props, no text, no hands. Shoot or render on transparent or plain white so the `--tile` gray (and its dark mode slate) shows around it.

- The sample products are flat drawings in the sprite (`<symbol id="art-<id>">`, 200 by 200) with a shared ground shadow (`#sh`). Keep them while drafting; replace them with the store's own product photos before launch.
- Products that come in colours paint their main surface with `var(--c1, <default>)`; the colour options set `--c1`, so one drawing serves every colour. With photos, use one photo per colour instead.
- Keep the same scale family by family: every mug the same size in its tile, every bottle the same height. Never crop a product inside the grid; `object-fit: contain` and the 82 percent art box do the rest.

## Using photos

Put one image per product in the `#photos` holder, before `<header>`:

```html
<div id="photos" hidden>
  <img data-photo="kettle" src="images/kettle.webp" width="1200" height="1200" alt="">
</div>
```

`art()` then uses that file in every card, the product page, the cart and the added panel, and `scripts/inline.mjs` embeds it when making a single file. Static spots that draw art directly (the hero slides, the quad boxes, the promo band, the orders page) are edited by hand: swap the `<svg><use href="#art-…"></svg>` for an `<img>` with `width`, `height` and `alt`.

## Slots and ratios

| Slot | Ratio | Export size | Notes |
|---|---|---|---|
| Product tile, gallery stage, cart line | 1:1 | 1200 × 1200 transparent PNG or WebP, or white JPEG | Product fills about 80 percent of the frame |
| Gallery views | 1:1 | 3 per product: front, back or side, a close-up of the best detail | The template fakes them with a mirror and a zoom |
| Promotion band art | each item 1:1 | the same product cut-outs | Two or three side by side, grounded on the band |
| Promo band, about band | 1:1 cut-outs | | One to two items |
| Department tiles in quad boxes | 1:1 | a representative product per department | Same treatment as products |
| Open Graph (`illustrations/og.svg`) | 1200 × 630 | | Mark and a calm block layout |

Use WebP for photos (quality 75 to 85) with `width`, `height` and a real `alt` on every image that is not decorative. In a single-file delivery keep images eager (no `loading="lazy"`); a deployed store can lazy-load below the first screen.

## Prompts for an image tool

Keep one prompt base and change only the product:

> Studio product photograph of [product], centered, front three-quarter view, isolated on a pure white background, soft even front light, small soft contact shadow, sharp focus, no props, no text, no logos, square frame with the product filling about 80 percent.

For a flat illustrated catalogue like the sample instead: "flat vector illustration of [product], simple shapes, two or three tones, soft highlight stripe, small ground shadow, transparent background, no outlines, no text".

## Without an image tool

Keep the drawn stand-ins and list every product picture the user must supply, product by product, in your reply. Do not hotlink product photos from other stores, marketplaces or manufacturers, and do not use other brands' logos or packaging in the art.
