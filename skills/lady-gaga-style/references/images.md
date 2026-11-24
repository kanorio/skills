# Images

This style lives on its pictures: full-bleed, grainy, lit like a stage, each era with its own color. The template proves the look with abstract drawings, so it never depends on photos the user does not have.

## The image language

- **One object, one hard light, darkness around it.** A pane of glass breaking, a ring of light in fog, an orchid in steam, a lamp over a desk. The subject glows; the edges fall to black through a vignette.
- **Duotone per era.** Black plus the era color (vermilion, green, violet, gold, blue), with white only for the brightest highlights. One era may break the rule with paper and ink, as a quiet record.
- **Film grain everywhere.** A layer of fine noise over every image, stronger than you think, so flat shapes read as photographs of light.
- **No faces, no text, no logos.** People appear as crowds, silhouettes or hands at most. Titles, dates and names stay in HTML.

## Slots and ratios

| Role | Ratio | Template file | Notes |
|---|---|---|---|
| Hero | 16:10, cropped by `object-fit: cover` | `illustrations/hero-saltglass.svg` | The bright point sits in the upper right; the center and the lower third stay darker for the lettering and the strip. Set `object-position` so the light stays clear of the lettering on phones. |
| Era cover | 1:1 | `cover-*.svg` | One per era and one per single. Used in the era panel, the collection, moments and the strip. |
| Moment still | 16:9 | `still-*.svg` | Videos, shows and news. Videos get the round play mark from CSS. |
| Tour art | 4:5, cropped | `halftone.svg` | Dots fading out of a shape, one accent disc. Stays black in both themes. |
| Band background | 16:9 | `still-halo.svg` | Shown at half opacity behind text; keep the middle calm. |
| Product | drawn in the sprite | `#p-*` symbols | Flat drawings colored through `--g` on the `<svg>`. With real products, use photos on one plain gray backdrop, square or 4:5. |
| Grain | 220px tile | `grain.svg` | Under the whole page. |
| Favicon and Open Graph | 32px and 1200 by 630 | `mark.svg`, `og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt` (empty when the title next to it says the same), `width` and `height`. Do not add `loading="lazy"` in a single-file build; on a deployed site with photos, add it to images below the first screen.

## Making new art without an image tool

Draw SVG with gradients and filters; each file stays between 1 and 6 KB.

```js
// node art.mjs > cover.svg  — one glowing object, grain and a vignette
const W = 600, H = 600, era = "#2f8f5b";
const grain = `<filter id="g"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .9 -.38"/><feComposite operator="in" in2="SourceGraphic"/></filter>`;
const glow = `<radialGradient id="l"><stop offset="0" stop-color="${era}"/><stop offset=".7" stop-color="${era}" stop-opacity="0"/></radialGradient>`;
const vignette = `<radialGradient id="v" r=".72"><stop offset=".55" stop-opacity="0"/><stop offset="1" stop-opacity=".75"/></radialGradient>`;
const subject = `<circle cx="300" cy="280" r="150" fill="none" stroke="#f4fff6" stroke-width="5"/>`; // the one object
console.log(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><defs>${grain}${glow}${vignette}</defs><rect width="${W}" height="${H}" fill="#050505"/><circle cx="300" cy="300" r="300" fill="url(#l)"/>${subject}<rect width="${W}" height="${H}" fill="url(#v)"/><rect width="${W}" height="${H}" fill="#fff" filter="url(#g)" opacity=".55"/></svg>`);
```

Change the subject (shards as triangles fanning from one point, petals as rotated ellipses, a window as a path) and the era color. Inside a data URI, percent-encode `#`, quotes and brackets.

## With an image tool

Ask for: "a single [object] lit by one hard [era color] light in total darkness, heavy film grain, deep vignette, duotone black and [color], high contrast, album cover, no people, no faces, no text". Generate 1:1 for covers and 16:9 for stills, then check that the brightest area is where the layout wants it (away from the lettering in the hero).

## Photos

When the user supplies photos (portraits, shows, products):

- Grade them toward the era: crush the blacks, add grain, tint the highlights with the era color, or go black and white.
- Keep the brightest part of the hero photo away from the lettering, and keep faces out from under the lettering.
- Product photos all share one plain backdrop and ratio.
- Never hot-link stock photos or images from other sites, and never use photos of real performers the user has no rights to.
