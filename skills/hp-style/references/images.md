# Images

This style is sold by product pictures. Every product is shown the same way: alone, cut out, on a white-to-gray tile or lit from behind on a near-black banner. A strip of six categories or a list of twenty rows reads as one tidy catalogue because the treatment never changes. Lifestyle photos are rare and only appear inside a banner or a guide cover.

## Product pictures

One studio, one light: the product alone, front or front three-quarter, soft light from above, a small contact shadow, no props, no hands, no text. Laptops open at about 110 degrees with the screen facing the viewer.

- The sample products are flat drawings in the sprite (`<symbol id="laptop">`, `tower`, `aio`, `monitor`, `inkjet`, `laser`, `ink`, `paper`, `dock`, `headset`; 200 by 150) with a shared ground shadow (`#gs`). Screens use a shared abstract wallpaper (`#wall`) coloured by `--w0` to `--w3`, and the chassis takes `--c1`. Keep them while drafting; replace them with the store's own product photos before launch.
- Never show another company's interface, wallpaper or logo on a screen. Use the store's own wallpaper or a plain gradient.
- Keep the same scale family by family: every laptop the same width in its tile, every printer the same height.

## Using photos

Put one image per product in the `#photos` holder, before `<header>`:

```html
<div id="photos" hidden>
  <img data-photo="glide14" src="images/glide14.webp" width="1600" height="1200" alt="">
</div>
```

`art()` then uses that file in every row, tile, compare column, the product page, the cart and the added panel, and `scripts/inline.mjs` embeds it when making a single file. Static spots that draw art directly (hero slides, the category strip, the tiles, the banners, the feature media) are edited by hand: swap the `<svg>…<use href="#…"/></svg>` for an `<img>` with `width`, `height` and `alt`.

## Slots and ratios

| Slot | Ratio | Export size | Notes |
|---|---|---|---|
| Product picture (rows, tiles, stage, cart) | 4:3 | 1600 × 1200 transparent PNG or WebP | Product fills about 80 percent of the width |
| Gallery views | 4:3 | 3 per product: front, side or back, a close-up of the ports or keyboard | The template fakes them with a mirror and a zoom |
| Hero slide and promo banner art | about 4:3 | cut-out, 1600 px wide | Lit for a dark background: a rim light on the edges |
| Category strip | 4:3 | the same cut-outs | One representative product per category |
| Feature media | 16:9 | 1600 × 900 | Product cut-outs grouped on the tile gradient |
| Guide cover | 16:10 on cards, 21:9 on the article | 1600 px wide | A product on a dark ground with one coloured glow, or a calm photo of the setup |
| Open Graph (`illustrations/og.svg`) | 1200 × 630 | | Mark, a dark banner block and one product |

Use WebP for photos (quality 75 to 85) with `width`, `height` and a real `alt` on every image that is not decorative. In a single-file delivery keep images eager (no `loading="lazy"`); a deployed site can lazy-load below the first screen.

## Prompts for an image tool

Keep one prompt base and change only the product:

> Studio product photograph of [product], front three-quarter view, isolated on a pure white background, soft top light, small soft contact shadow, sharp focus, no props, no text, no logos, 4:3 frame with the product filling about 80 percent of the width.

For banners: "the same [product] on a pure black background, a soft blue glow behind it, thin rim light on the edges, no text, no logos". For the flat illustrated catalogue of the sample instead: "flat vector illustration of [product], simple shapes, three tones, small ground shadow, transparent background, no outlines, no text".

## Without an image tool

Keep the drawn stand-ins and list every product picture the user must supply, product by product, in your reply. Do not hotlink product photos from manufacturers, marketplaces or other stores, and do not draw other brands' logos, device names or packaging.
