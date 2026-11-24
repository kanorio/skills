# Images

Two kinds of picture carry this style: **soft 3D toys** that float around the content, and **bright key art or product screens** inside the media panels. Both are saturated, rounded and friendly, lit from the upper left, on the deep blurple sky.

## The toy language

- Chunky, rounded objects that look like vinyl or clay toys: a ringed planet, a cube, a puffy star, a gamepad, a mushroom, a heart, a coin, a gem, and one small mascot. Pick five to nine that fit the brief (a cooking club gets a whisk and a dumpling; a book club gets a book and a teacup).
- Soft volume: a radial gradient from a pale highlight (upper left) to a saturated middle and a deep shadow colour, plus one white highlight blob. No outlines, no hard drop shadows.
- Palette: blurple and lavender, candy pink, mint, sunshine yellow, sky blue. Two or three colours per toy.
- Faces are optional and tiny (two dark ovals, a small smile, pink cheeks). Never draw a real character or someone else's mascot.
- Sizes: 90 to 150px beside content, 120px peeking over frames, 52 to 132px in the finale lineup. Far toys are larger, blurred and faded (`.toy.far`).

## Key art and screens

- Media panels show the site's real subject: game key art, an event poster, a product screenshot, a photo of the club. Inside a padded panel (`.media.pad`) images get 22px corners and a deep shadow so they read as a screen floating on the glow.
- Scenes are flat, colourful illustrations or photos with a clear centre; 16:10 is the default ratio.
- When the content is data (dates, scores, prices, changelogs), use a product card (`.ui`) instead of a picture.

## Slots and ratios

| Role | Ratio | Template files | Notes |
|---|---|---|---|
| Hero screen | 16:10 | `images/comet-picnic.svg` | The flagship product, event or community moment. |
| Frame media and card thumbnails | 16:10 inside 4:3 panels | `images/lantern-hop.svg`, `snailpost.svg`, `deep-sky-diner.svg`, `pebble-pals.svg`, `orbit-knit.svg` | One per game, post or event. |
| Story picture | 16:10, fills the panel | `images/studio.svg` | About page. |
| Toys | 1:1, transparent | `illustrations/planet.svg`, `cube.svg`, `star.svg`, `pad.svg`, `mushroom.svg`, `heart.svg`, `coin.svg`, `gem.svg`, `moth.svg` | Decorative: `alt=""`. |
| Sky | tile, 720px | `illustrations/sky.svg`, `sky-day.svg` | Sparkles for night and day. |
| Favicon and Open Graph | 64px and 1200 by 630 | `illustrations/mark.svg`, `illustrations/og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt` (empty for toys and thumbnails next to their own title), `width` and `height`. Do not lazy-load images: full-page captures and sandboxed previews do not scroll, and lazy images stay blank.

## With an image tool

Toys: "a single cute 3D toy of [object], soft clay or vinyl material, rounded chunky shapes, glossy highlight, pastel [colour] and [colour], lit from the upper left, transparent background, no text, no logo, no character from any franchise". Key art: "flat colourful illustration of [scene], night palette of blurple, magenta and mint, soft gradients, rounded shapes, 16:10, no text, no logos".

## Without an image tool

Draw toys as SVG like the template: one or two shapes filled with a `<radialGradient>` (highlight at 35 percent, 30 percent), a white ellipse at 50 percent opacity for the shine, and optional tiny face. Keep each file under about 1.5 KB. Draw key art as a gradient sky, two or three layers of rounded hills or platforms, and one clear subject. Replace the sample game art with art for the user's own subject; keep the toys if they fit.

## Photos

When the user supplies photos (members at a meetup, a venue, a team):

- Put them inside `.media.pad` frames or card thumbnails; they keep their colours on the night sky.
- Crop to 16:10 with the faces in the upper half; people photos need the owner's consent.
- Never use photos, logos, mascots or screenshots of products the user does not own, and never hot-link images from other sites.
