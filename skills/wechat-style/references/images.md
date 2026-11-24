# Pictures and images

This style draws its pictures instead of photographing them: flat, friendly scenes on one solid panel colour, made of rounded rectangles and circles, with small people who have round heads and no faces. Icons are thin outline glyphs, each in its own colour. Photographs are welcome when the user has them, in the same slots.

## The illustration language

- **Panel:** one solid colour fills the frame: green, blue, amber or teal (`.p-green`, `.p-blue`, `.p-amber`, `.p-teal`). One big translucent white circle sits behind the scene for depth.
- **Shapes:** rounded rectangles and circles only, no outlines, no gradients, no texture. Objects are white or very light grey so they read on any panel.
- **Accents:** at most three of the fixed accent colours in one scene (green, yellow, coral, blue), plus the dark ink for legs, planters and phone frames.
- **People:** a round head in one skin tone, a short dark cap of hair, a rounded body in an accent colour (`--shirt`). No faces, no hands, no text on clothing.
- **The phone:** when the scene is about the service, a small phone stands at the right, its screen repeating the green header with an arch and three round icons (`#a-ph`).
- **Composition:** the subject sits centre left, the phone or a sun or a pin on the right, a floor line near the bottom. Keep the middle 70 percent busy and the edges calm, because the carousel crops top and bottom.
- **Never:** real logos, app interfaces of other companies, readable text, flags, emoji, characters or mascots that look like anyone else's.

## Slots and ratios

| Role | Ratio | Where | Notes |
|---|---|---|---|
| Story card | 9:5 | `.story .art` | Every scene is drawn in a 360 x 200 viewBox. On phones it sits above the text. |
| Featured slide | 12:5 (9:5 on phones) | `.feature .art` | The same symbol with `preserveAspectRatio="xMidYMid slice"`: it crops top and bottom. |
| Article picture | 9:5 | `#post-art` | Copied from the story card, so the list and the article always match. |
| Entry card and service icons | 1:1 | `.entry .i`, `.disc .i` | 24 x 24 outline icons, 1.8px stroke, round joins. Colour from `--c`. |
| Avatars | 1:1, circles | `.avatar` | Initials in a tinted circle. Use real portraits only of the user's own people, with permission. |
| Phone mockup | 1:2 | `.phone` | Built from HTML, not an image: the band, an arch, eight round icons, two cards. |
| Open Graph | 1200 x 630 | `assets/illustrations/og.svg` | The green band with the arch, the mark and name, three white cards. Export as PNG for production. |

Each illustration is one `<symbol>` in the sprite at the top of the template (`#a-laundry`, `#a-market`, `#a-roof`, `#a-bike`, `#a-parcel`, `#a-hall`, with parts `#a-ph` and `#a-person`), used with `<svg class="art p-…" viewBox="0 0 360 200" role="img" aria-label="…"><use href="#a-…"/></svg>`. Their shape colours are single-class rules (`.w`, `.k`, `.g`, `.y`, `.c`, `.b`, `.s`, `.d`, `.l`, `.sh`), because selectors with an ancestor do not reach inside `<use>`.

## Using photographs instead

When the user has photographs, replace the `<svg class="art">` in a slot with `<img class="art" src="images/…" alt="…" width="720" height="400">` and keep the ratio with `object-fit: cover`. Choose bright, evenly lit photos of real places and things, with a single subject and a plain background; avoid dark, moody or busy pictures, which fight the flat band. Every `<img>` has `alt`, `width` and `height`. Do not add `loading="lazy"` in a single-file delivery; on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 200 KB each, and write JS data paths in full (`"images/market.webp"`) so `scripts/inline.mjs` can embed them.

## Generating pictures

When an image tool is available and the user wants something richer than the drawn symbols, keep one base prompt and change only the subject:

> Flat vector illustration, [subject], simple rounded shapes, no outlines, solid [green / blue / amber / teal] background with one large pale circle, white and light grey objects, small accents of yellow, coral and green, small people with round heads and no facial features, centred composition, generous empty space at the edges, no text, no logos.

Subjects that suit the style: a parcel locker wall with one door open; a laundry room with two machines; a rooftop with planters; a bike by a dock; a market stall; three people around a table; a reception desk with a bell; a calendar with one day circled. Check the set side by side: same flatness, same palette, same size of people.

## Without an image tool

Draw new symbols in the same way: start from an existing one, keep the panel rectangle and the floor line, and swap the objects for rounded rectangles and circles that suggest the user's subject. Twenty to forty shapes are enough. Never hotlink stock images or copy pictures from other sites.
