# Pictures and images

This style is painted, not photographed: night landscapes in deep blue, violet and teal with one warm light source, and heroes cut out of their background so they can stand in front of gold frames. The pictures carry the colour; the interface stays gold, night blue and stone.

## The picture language

- **Scenes:** wide fantasy landscapes at dusk or night: valleys with a keep on a crag, storm coasts with a lighthouse, forests with ruins, a fortress gate lit from inside, standing stones under an aurora. Layered ridges that fade into mist, one bright light (moon, window, beam, fire), a few drifting embers or stars. Keep a calm, darker third where the text goes.
- **Heroes:** one character per picture, full figure from head to feet, in an active pose with a clear silhouette (a raised weapon, a drawn bow, a lantern held high). Transparent background, lit from the top left with a coloured rim light from their own magic or weapon. Each hero owns one hue; it glows behind them in the interface.
- **Colour:** deep blues and violets for the night, one warm or magical accent per picture, gold only as a highlight. No neon, no full daylight, no photographic skin textures next to painted ones.
- **Never:** text or logos inside pictures, recognisable characters or art from existing games, films or books, real people, gore.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Scene | 16:9 | 1600 x 900 or larger | CSS variables `--scene-vale`, `--scene-coast`, `--scene-thorn`, `--scene-gate`, `--scene-stones`, used by `.sc-*` classes | Decorative backgrounds behind text (hero, bands, banners of hero and join, about, 404, edition boxes). Cropped to wide or tall; keep the light source within the middle 60 percent. |
| Hero figure | 5:7 | 800 x 1120, transparent PNG or WebP | `.hcard img`, `.figure` in the ring and the diamond | Feet at the bottom edge, head about 8 percent below the top; empty space around the weapon. |
| News picture | 16:9 | 1200 x 675 | `.ncard img`, `#post-img` | One scene or a hero over a scene; the corner badge covers the bottom right 40px. |
| Mode picture | 1:1 for the map, 16:9 for scenes | 800 x 800 | `.mode img`, `#mode-img` | The map is a top-down board or world map; the disc crops it to a circle. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | The crest and the name on a night scene; export PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text names the hero and the pose ("Sable Wren, a hooded fighter crouching low with two daggers") or the place ("A lighthouse on a storm coast at night"); mode thumbnails use `alt=""` because the button's label names them. Scenes used as CSS backgrounds are decorative. Do not add `loading="lazy"` in a single-file delivery; on a deployed site, lazy-load pictures below the first screen. Keep each file under 250 KB.

## The sample pictures

`assets/images/` holds original vector stand-ins: five scenes (`scene-vale`, `scene-coast`, `scene-thorn`, `scene-gate`, `scene-stones`), a top-down board (`board`) and eight heroes drawn as night-blue silhouettes with a coloured rim light (`hero-maren` with a lantern, `hero-corvin` with a sword and tower shield, `hero-ysolde` drawing a bow, `hero-ilka` with floating crystals, `hero-sable` with two daggers, `hero-brannoc` with a hammer, `hero-sefa` with a crescent staff and water, `hero-halvard` with a halberd). They are free to use but they are placeholders: replace them with the user's art before launch and list every remaining one in your reply.

## Generating pictures

When an image tool is available, keep one base prompt per role and change only the subject:

> Painted fantasy key art, [scene], at night, deep blue and violet palette with one [warm / teal / ember] light source, layered misty ridges, soft painterly brushwork, cinematic wide composition with a calm darker [left / right] third, no text, no logos, no characters from existing games or films.

> Painted fantasy character, [hero: who, what they carry, pose], full body from head to feet, dynamic silhouette, lit from the top left with a [hue] rim light from their [weapon / magic], isolated on a transparent background, original design, no text, no logos.

Scenes that suit the style: a ruined bridge over a gorge, a harbour town under lanterns, a snowbound pass with a watchtower, a desert tomb at dusk, a floating island at moonrise. Check the set side by side: same night, same brushwork, one light per picture.

## Without an image tool

Keep the template's vector stand-ins or draw new ones the same way: a sky gradient, three or four ridges that get darker toward the front with mist bands between them, one glowing light, then silhouettes (trees, towers, stones). For a hero, build one silhouette from simple shapes, draw it twice offset by a few pixels in the hero's hue for the rim light, add one glowing object. Save them as files in `images/` and reference them with `<img>` or the scene variables so they can be swapped later.

Never hotlink stock art, and never use characters, maps, icons, logos or screenshots from an existing game, film or book unless the user owns them.

## Wordmark and favicon

- The wordmark (`.wordmark`) is the name in Faustina 800 italic capitals with a gold gradient, after the crest mark (`#crest`: a diamond ring around a gem with a flame cut out). Replace the crest with the brand's own mark at 34px, or keep the diamond shape with a symbol from the brand inside.
- The logotype in the hero is live text with the same gold gradient; replace it with the user's logo file only if they have one.
- The favicon (`illustrations/mark.svg`) is the crest in gold on a night-blue tile.
