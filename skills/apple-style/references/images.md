# Images

The interface is greyscale with one blue, so the product pictures carry everything: color, material and desire. Every picture is one object, lit like a studio product shot, standing on nothing.

## The image language

- **One product, nothing else.** No hands, props, people, rooms or text in product pictures. Lifestyle pictures appear only in the highlights gallery and the newsroom.
- **Seamless backdrop.** Product pictures have a transparent background (or exactly the tile color), so the same file sits on a grey tile, a white tile, a black tile and a store card in either theme.
- **Soft top light and a floor shadow.** One soft key light from the upper left, a gentle highlight on curved surfaces, and a blurred contact shadow under the object. No hard reflections, no glow, no floating.
- **Same floor, same scale logic.** Every product stands on the same floor line and is scaled to fill about 80 percent of the frame height, so a row of cards looks even.
- **Fill the frame.** Tiles put the picture straight under the buttons, so empty space at the top of a picture shows up as a hole in the tile. Keep the top of the product within the top tenth of the frame; a low, wide product (a scale, a keyboard, a router) fills the width instead and gets a wider frame (16:9) rather than sitting at the bottom of a 4:3 one.
- **Colorways are separate files.** One picture per color, same angle and framing, named `<product>-<color>`, so swatches can swap them without a jump.
- **Gallery scenes** are close-ups or moods for one feature each: a detail of a material, a control, a case, the product in a dark space with light rings. They have their own backdrop and keep the subject away from the top fifth, where the caption sits.

## Slots and ratios

| Role | Ratio | Template files | Notes |
|---|---|---|---|
| Tile and hero product | 4:3, transparent | `crest-*.svg`, `room-*.svg`, `cove-*.svg`, `cove-open-*.svg`, `arc-*.svg`, `dock.svg`, `case.svg` | The same files feed tiles, the product hero, store cards, compare columns, the buy frame and the bag. |
| Highlights gallery | 16:10 source, shown 16:9 on desktop and 4:5 on phones | `scene-quiet.svg`, `scene-cushion.svg`, `scene-controls.svg`, `scene-travel.svg` | Keep the subject centered and the top fifth calm for the caption. Mark light scenes with `.on-light`. |
| Closer look | 16:10 | scenes and product files | Reuse gallery scenes and colorways. |
| Newsroom cards and lead | 16:10 cards, 4:3 lead | scenes, `scene-app.svg`, product files | Cards may reuse product renders on the grey card. |
| Favicon and Open Graph | 64px and 1200 by 630 | `illustrations/mark.svg`, `illustrations/og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt`, `width` and `height`. Product pictures in cards whose title names the product use `alt=""`. In the template no picture is lazy-loaded so whole-page screenshots stay complete; on a deployed multi-page site add `loading="lazy"` below the first screen.

## With an image tool or a photographer

Ask for: "studio product photograph of [product] in [color], three-quarter view, centered, on a seamless transparent background, soft light from the upper left, soft contact shadow, no props, no text, no logo, 4:3". Shoot or render every colorway from the same angle with the same light. For gallery scenes: "close-up of [detail] of [product], soft studio light, [dark or light] seamless backdrop, subject in the lower two thirds, no text, 16:10". Export at 2400 by 1800 and keep the floor line identical across products.

## Without an image tool

Draw the products as SVG, like the template does: build the object from a few shapes (ellipses for cups and buds, rounded rectangles for cases, a cylinder from a rectangle and two ellipses), shade each with a radial gradient (light upper left, darker lower right), add one blurred white ellipse as a highlight and one blurred dark ellipse as the floor shadow. Keep each file under about 5 KB and one palette per colorway (highlight, base, shadow, deep, recess). The template's files show the method.

## Photos

When the user supplies real product photos or renders:

- Cut them out to a transparent background (or a backdrop that exactly matches the tile color) and align their floor lines.
- Keep them unframed in tiles; only the gallery, the buy frame and newsroom pictures get rounded corners.
- Use their own photography only; never use another company's product images, and never hot-link images from other sites.
