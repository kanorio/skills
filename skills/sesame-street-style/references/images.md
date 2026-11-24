# Characters, scenes and images

This style is illustrated, not photographed. A small cast of friends built from simple geometric shapes stands in little scenes; the same drawings fill tiles, portraits, games, stories and the footer. Photos are the exception, and only on grown-ups pages.

## The cast

All characters are `<symbol>`s in the inline sprite of `assets/template.html`, drawn in a 120 by 120 box and placed with `<use href="#c-<id>">`. They never change with the theme.

- **Bodies are one simple shape** in one section colour: a circle, a rounded triangle, a rounded square, an arch, a rounded star. No outlines, no gradients, no texture, no fur.
- **Faces are shared:** one `#face` symbol (two dark dot eyes with a small white highlight, pink cheeks at 75 percent, a short smile) placed on each body with `<use href="#face" x y width height>`. Keep it identical so the cast reads as one family. No white eyeballs, no noses, no teeth.
- **Legs are shared:** two short round-capped ink strokes (`#legs`). No arms.
- **One accessory each**, small and flat: a leaf, a stripe, a bow, a curl. It is how children tell them apart in silhouette.
- **Colours:** bodies `#29aee6` (sky), `#ff8a1e` (orange), `#e5328f` (magenta), `#8e5bd6` (purple), `#35b85a` (green); accessories `#ffd23f`, `#ffc94d`, `#35b85a`; ink `#1f2547`; cheeks `#ff8fb3`.
- **Colour-in ready:** each body reads `fill="var(--body, <colour>)" stroke="var(--line, none)"`, so the colour-in sets `--body` and `--line` on the `<use>` to turn a friend into an outline and fill it with a tap. Keep these two variables on any new body.
- **Never draw an existing character** or anything close to one: no puppets, no furry monsters, no licensed cartoon shapes, no lookalikes of a brand mascot. If the user has their own mascot or characters, rebuild them in this construction only with their permission.

To add a friend: copy a `c-*` symbol, change the body path and colour, give it one new accessory, keep `#legs` and `#face`, add it to the `friends` map in the script (`id: [name, tint]`) and give it a portrait tint (`.t-*`).

## Scenes

A scene is a 320 by 200 picture: a tint background (`.art.t-<tint>`), one prop symbol (`#p-<name>`) that frames the edges, and one or two friends standing in the middle. The script builds them with `scene(art, who, tint)`; static ones in the HTML use the same markup.

| Prop | Contents | Good for |
|---|---|---|
| `p-hills` | sun, cloud, two green hills | outdoors, beginnings, the home big tile |
| `p-kite` | clouds, a kite with a tail, grass | wind, play, adventure |
| `p-blocks` | stacked blocks and shapes | building, maths, counting |
| `p-book` | an open book along the bottom | reading, libraries, stories |
| `p-moon` | night sky, moon and stars (use tint `night`) | bedtime, quiet time |
| `p-boat` | sun, waves and a sailboat | seaside, water, travel |
| `p-paint` | paint dots and a brush stroke | art, colour-ins, making |
| `p-music` | notes and dots | songs, music classes |
| `p-garden` | flowers on stems, a sun | nature, growing, spring |
| `p-rain` | clouds, raindrops, a puddle | weather, splashing, the 404 |

Tints: `t-sky`, `t-orange`, `t-magenta`, `t-purple`, `t-green`, `t-sun` (pale washes) and `t-night` (deep blue). Pick the tint of the section or of the main friend.

To add a prop for a new subject (a piano, a microscope, a fossil, a bus), draw flat shapes in the cast colours along the left and right edges and the bottom, leave the middle third empty for the friends, and put no text inside it.

## Files and slots

| Where | Size | Contents |
|---|---|---|
| Tiles, mosaic, "more" rows | 320 by 200, 16:10 | one scene per item |
| Home big tile | fills two rows (`preserveAspectRatio="xMidYMid slice"`) | the featured scene with two friends |
| Round portraits | the friend alone on its tint, legs cropped | mosaic, avatars, filters, game answers, friend cards |
| Circle pictures (`.circle-art`) | a 200 by 200 crop of a scene, ringed in yellow | grown-ups page heads, about |
| Stage | 320 by 180 | the shadow game (one friend as a silhouette with `filter: brightness(0)`) or the colour-in picture (outlined parts with `data-part`) |
| Story pages | 320 by 200 per page | one scene per page |
| Footer | 640 by 64 crop | four friends peeking over the edge |
| `illustrations/mark.svg` | 64 square | favicon: the three-shape mark on yellow |
| `illustrations/og.svg` | 1200 by 630 | Open Graph image: yellow, wordmark, headline, the cast in a circle |

An image-generation tool can help explore a new character or prop: ask for "flat vector shapes for a children's website, one simple geometric body, two dot eyes, pink cheeks, a small smile, two short legs, saturated toy colours, no outline, no shading, no text, plain background", then rebuild the result as SVG shapes with the shared face and legs so it stays crisp, small and consistent. Never ask for a style named after an existing show or brand.

## Photos

Use photos only on grown-ups pages and only when the owner supplies them: the studio, the rooms, teachers, finished work. Children's photos need the owner's confirmation that they have consent from every family; otherwise use the drawings. One treatment: bright daylight, cropped 4:3 (places) or 1:1 (people), inside a white frame with the card radius, never behind text. Never hot-link stock photos. Every image has `alt`, `width` and `height`; images below the first screen of a deployed site get `loading="lazy"` (the single-file page embeds everything, so it skips it).

## Brand mark

The mark is three overlapping shapes from the cast (circle, triangle, square) with two dots; in the header it sits beside the lowercase wordmark in Baloo 2 800. Replace it with the user's own mark, or keep the construction with their colours.
