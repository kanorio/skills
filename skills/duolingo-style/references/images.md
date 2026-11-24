# Characters, rewards and images

This style decorates with a cast, not with photos. A mascot and a few kids, drawn flat with big round eyes, stand beside the text and take turns left and right; small rewards (gems, coins, flames, hearts, stars) float around them. Photos are the exception.

## The drawing language

- **Shapes:** flat fills built from circles, ellipses, rounded rectangles and a few curves. Limbs are thick stroked paths with round caps (13 to 16 units wide). No outlines, no gradients, no shading, no texture.
- **Faces:** eyes are white ellipses with a large dark pupil and one small white highlight, looking in the same direction; a small pink blush on each cheek; a short smile line or an open mouth in dark red. Eyes carry the expression.
- **Proportions:** big heads (a 28-unit radius on a body about 56 units tall), short limbs, small feet. Everyone looks about the same age as the learners, except adults, who are the same build scaled up 1.1 times with longer legs.
- **Palette:** fixed, saturated toy colors that work on white and on the dark theme alike: green `#6ccb1c` (dark `#4ea612`), sky `#2ab0f2` (dark `#1288c8`), sun `#ffc61a` (dark `#e8a400`), berry `#ff5a5a`, grape `#c77dff`, pink `#ff8fc8`, teal `#1fc8a8`, navy `#233a7a`, ink `#3b2b2a` for pupils, noses and mouths, four skin tones `#f6c9a2`, `#f0b88f`, `#d79b6c`, `#9b6340`, and the mascot's orange `#ff8a1f` with cream `#fff3e0`. Drawings never change with the theme.
- **Ground:** a standing character gets a flat ground ellipse in `#1d2b4a` at 8 percent opacity. Floating characters and rewards have none.
- **Cast:** one mascot, two to four kids with different skin tones and hair, and at most one adult. Vary hair (short, bob, long, bun, puffs, curly) and shirt colors; keep everything else identical so they read as one family.

## Files and slots

All drawings are SVG files in `assets/illustrations/`, used with `<img>` and real `width` and `height`. `scripts/inline.mjs` embeds them in the single-file page.

| File | Size | Slot | Contents |
|---|---|---|---|
| `hero.svg` | 560 by 480 | `.hero-art` | Mascot waving on a lesson card, a kid on a tablet, two floating kids, a speech bubble, six rewards. The busiest drawing on the site. |
| `lesson.svg`, `path.svg`, `streak.svg`, `parents.svg` | 460 by 400 | `.feature-art` | One idea each: answering on a tablet, hopping along stops, a big flame and a week of days, a grown-up and child with a chart. |
| `family.svg` | 480 by 380 | `.navy-art`, about | Two kids and the mascot cheering, with gems. Works on navy and on white. |
| `cta.svg` | 520 by 300 | `.finale` | The mascot with a treasure chest and coins; its ground sits in the dip of the hill. |
| `fox.svg` | 240 by 280 | menu sheet, path side, success and results screens | The mascot alone, waving. |
| `lost.svg` | 360 by 320 | 404 | The mascot puzzled over a map. |
| sprite `#mark` | 140 by 140 | header, speech bubbles | The mascot's head, inline so it renders crisp at 44 and 96px. |
| sprite `#g-*`, `#p-*` | 32 or 64 square | stats, path stops, plans, lesson tiles | Rewards (flame, gem, heart, bolt, star, chest, trophy) and lesson pictures (apple, bread, milk). |

## Making a new character or scene

1. Open one of the template's SVG files to see the construction: every character is a `<g>` with a `transform` that places and scales it, drawn back to front (legs, body, arms, hands, hair behind, ears, head, hair in front, eyes, blush, mouth).
2. For a new kid, copy an existing one and change the skin, hair shape and colors, shirt and pants, and the arm and leg paths (the pose). Keep the head radius and eye size.
3. For a new mascot, keep the rules: a round head wider than the body, big eyes with highlights, one strong body color with a cream face and belly, no outline. Never draw an existing mascot or a lookalike.
4. For a subject scene (a maths club, a piano school, a reading programme), give the kids the subject's objects as flat props: number blocks, a keyboard, a stack of books. Props follow the same palette and have no text inside them.
5. Compose a scene in its viewBox with one main character large, one or two smaller ones, and two to six rewards scattered around the edges, slightly tilted.
6. Check it at 300 and 560px wide on white and on the dark background.

An image-generation tool can help explore a pose: ask for "a flat vector cartoon of <subject>, big round eyes, thick rounded limbs, saturated toy colors, no outlines, no shading, no text, plain white background", then rebuild it as SVG shapes so it stays crisp, small and consistent with the cast. If you keep a raster, export a transparent WebP at 2x and give it `alt`, `width` and `height`.

## Word bubbles

The colored bubbles in the strip, course cards and signup tiles are HTML (`.word` plus a color class), not images: one short word each (a greeting for languages, a symbol or short word for other subjects, such as "1+2", "abc" or "do re"). Keep them in Latin script unless the page language uses another.

## Photos

Use photos only when the user supplies them: the classroom, teachers, real lessons. Children's photos need the owner's confirmation that they have consent; otherwise use the drawings. Keep one treatment: bright daylight, cropped 4:3 for places and 1:1 for people, inside a 16px radius (`--r-media`) with no border, and never behind text. Never hot-link stock photos. Every image has `alt`, `width` and `height`; images below the first screen of a deployed site get `loading="lazy"` (the single-file page embeds everything, so it skips it).

## Brand mark, favicon and Open Graph

- The mark is the mascot's head; in the header it sits beside the lowercase wordmark in `--heading`.
- The favicon is the head on a green circle (`mark.svg`).
- The Open Graph image is 1200 by 630: white, a two-line lowercase headline in green, the mascot waving on the right and a green hill along the bottom. Export it as PNG for production; social networks do not render SVG.
