# Aurora, glass and images

In this style the colour field is the picture. The template has no photographs: every hero, card, cover and figure is an aurora palette seen through fluted glass, sometimes with one soft white shape behind it. All of it is CSS and inline SVG, so it costs nothing to load and follows the theme.

## Making an aurora surface

```html
<section class="pagehead aurora au-tide">
  <i class="flutes" aria-hidden="true"></i>
  <svg class="frost" aria-hidden="true"><use href="#g-drop"/></svg>   <!-- optional -->
  <div class="wrap center"><h1 class="glow">Title</h1><p>One sentence.</p></div>
</section>
```

- `.aurora` draws the light and the glass; `.flutes` adds the refraction (leave it out and the glass looks flat). Content inside sits above both.
- Pick a palette class: `au-night`, `au-dawn`, `au-ember`, `au-tide`, `au-lilac`. Add `.deep` when white text reaches the bottom edge. Add `.live` only to the hero and one closing band.
- Flute width is `--flute` (36px, 22px on phones); set it per element for small cards (24 to 30px). Narrower flutes read as finer glass.

### Recolouring for a brand

Change only the seven stops of a palette (`--a0` to `--a6`), keeping the structure: a dark top (`--a0`, `--a1`), one bright cool field (`--a2`), one saturated field (`--a3`), a lighter middle (`--a6`), and a warm, pale foot (`--a4`, `--a5`). Keep at least 20 points of lightness between the top and the middle so the white title stays readable. Define the dark-mode version of any pale palette next to `[data-theme="dark"] .au-dawn`.

## Frosted shapes

- One or two big filled silhouettes per surface, white at 78% and blurred 5px, placed behind the glass so the flutes cut through them.
- Draw them as `<symbol id="g-…" viewBox="0 0 100 100">` with one to three filled paths: a moon, a drop, a wave, a lamp, a star, a ring, a boat. Choose objects from the user's world (a ticket, a vinyl record, a cup, a leaf).
- No outlines, no text, no faces, no mascots, no logos.

## When the brief has photographs

Photos are welcome for people, venues and products, but they never replace the aurora on the hero.

| Role | Ratio | Where | Treatment |
|---|---|---|---|
| Story or episode cover | 16:10 | `.cover` | Replace the inner `.frost` with an `<img>` at full size and keep `.flutes` over it at 0.85 opacity for the glass look, or use the photo plain with 20px corners |
| Venue or event photo | 4:3 | `.fig`, `.night` (as a 96px thumbnail) | Night-time, warm light, low contrast; 28px corners |
| Product shot | 1:1 | `.pp-art` | On a still aurora tile, the product centred |
| Team portrait | 1:1 | `.team .av` | Circular, 72px; keep initials when there is no photo |

- One photographic language: dusk or night, soft light, a little haze, colours close to the palette in use. No harsh flash, no stock smiles.
- Every `<img>` has `alt`, `width` and `height`, and no `loading="lazy"` in the single-file deliverable (sandboxed previews never scroll it into view).

### Prompts, when an image tool is available

- Cover: "Long-exposure photograph of [subject] at night, soft violet and teal light, gentle haze, shallow depth of field, calm, no people facing camera, no text."
- Venue: "Quiet room at night lit by warm lamps, rows of chairs facing nothing in particular, soft shadows, film grain, no logos, no text."

Without an image tool, keep the aurora covers with frosted shapes and list the missing photos in your reply. Never hotlink stock photos.

## Icons, mark and share image

- Icons are inline SVG line icons on a 24px grid with a 1.6 stroke and round caps (`.i`), drawn in the sprite at the top of `<body>`. Platforms are named in text beside generic device icons; never draw store badges or platform logos.
- The brand mark (`#mark` in the sprite and `illustrations/mark.svg`) is a small aurora disc with a white glyph; redraw both for the user's brand.
- `illustrations/og.svg` is the 1200 by 630 share image: the aurora, the flutes, the glowing name and a pill. Redraw it with the user's name and palette.
