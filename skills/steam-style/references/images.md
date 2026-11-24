# Images

This style is sold by cover art. Every item has one wide cover, and every slot on the site (carousel, deal card, row, library, news) shows a crop of it, so the store reads as a wall of distinct, colorful titles framed by a calm blue interface.

## One art language

- **Cover art:** one image per item at 460 by 215 (or 920 by 430 for sharp screens), a single strong subject in the left or central third, a clear silhouette, saturated color against a dark or light ground, room in the lower third for the title lettering. Each item has its own palette; the set should look like different makers, not one illustrator.
- **Screenshots:** four or more per item at 16:9 (1280 by 720), real captures of the game, product or course. Never paint fake interfaces onto photos.
- **No photos of people** unless the user supplies them with rights. No stock photos behind text.

## The sample art

The template draws each sample cover as an inline symbol (`<symbol id="cv-<id>" viewBox="0 0 460 215" preserveAspectRatio="xMidYMid slice">`), flat shapes with no lettering, and letters the title over it in Saira capitals (`.cv-t`). The gallery crops the same drawing at four `VIEWS` and lays a simple interface overlay (`.hud`) on two of them. Keep the drawings while drafting; replace them with the user's art before launch.

## Using real images

1. Put the cover inside the item's catalog row: `<li data-game="ember" …><img src="images/ember.webp" width="920" height="430" alt=""><a class="r-t" …>`. `art()` then uses it everywhere, and the title lettering is dropped because real covers carry their own.
2. Put screenshots in the `#shots` holder before the toast, in order: `<img data-shot="ember" src="images/ember-1.webp" width="1280" height="720" alt="">`.
3. Static spots that draw art directly (the first featured slide, the static game page, news cards, the first article) are edited by hand: swap `<svg class="art">…</svg>` for an `<img class="art">` with `width`, `height` and `alt`.
4. Write every path out in full inside the markup (never `images/${id}.webp` in script) so `scripts/inline.mjs` can embed them.

## Slots and ratios

| Slot | Ratio | Source |
|---|---|---|
| Carousel, deal cards, rows, mini cards, game page side, cart lines | 460:215 | cover |
| Library capsule | 2:3 | cover, center crop (`LIB_CROP`); with real art, supply a portrait cover |
| Gallery stage and thumbnails, carousel and preview screenshots | 16:9 | screenshots, or cover crops |
| News card and article | about 2.1:1 | cover of the related item, cropped |
| Open Graph | 1200 by 630 | `illustrations/og.svg`, redraw for the brand |

## Prompts (when an image tool is available)

Cover: "Flat vector key art for an indie game called <name>: <one-line subject>, single bold silhouette in the left third, three to five flat colors, <palette>, soft light from the <direction>, empty lower third for a title, no text, no logos, 460 by 215."

Screenshot stand-in for a concept page: "In-game scene of <game>, <what the player is doing>, same palette as the cover, 16:9, no interface text." Label any generated screenshot as concept art in the reply.

## Without an image tool

Draw each cover as an inline SVG symbol the way the sample does: a background rect, a horizon band, one big shape (sun, planet, tower, crown), a subject silhouette, and two or three accent shapes. Keep each under 1 KB, choose a distinct palette per item, and never letter text into the drawing. Never hot-link images from stores or search results.
