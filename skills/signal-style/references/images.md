# Images

Three kinds of picture carry this style: **outlined flat illustrations** in pastel panels and cards, **product screens** inside tilted phones and a browser window, and **drawn avatars**. All three are drawn in the template as inline SVG and HTML, so a site built from it needs no image files until the owner has real ones.

## The illustration language

- One subject per drawing, built from simple geometric shapes: a folded map, a lift, a ramp, a bench under a tree, two message cards, a phone with a padlock, a jar of coins, a code window, a signpost.
- **3px ink outlines** with round joins and caps around every shape (`stroke: var(--i-ink)`), set once on the `<svg class="il">` and inherited by the symbol.
- **Flat pastel fills**, never gradients: paper (`.fp`), lilac (`.fl`), periwinkle (`.fb`), slate (`.fs`). One strong shape at most in blue (`.fa`), plus small coral (`.fc`) or yellow (`.fy`) accents for a pin, a heart, a coin or a sun.
- **Halftone dots**: one patch of blue dots (`.ht`) and often one smaller patch of ink dots (`.hk`) behind the subject, offset so they peek out from one side. They are what makes the drawings read as print rather than icons.
- Movement is a dotted blue line (`.rt`), not an arrow.
- No faces on objects, no mascots, no text inside drawings.
- Draw a new subject in the same 320 by 240 viewBox: a halftone rectangle first, then the subject's shapes back to front, then the accents. Keep each symbol under about 1 KB and add it to the sprite at the top of `<body>` as `<symbol id="il-name">`.

## Product screens

- The hero phones and the get-the-app panels show the product itself, built from HTML (`.s-card`, `.s-tags`, `.s-sheet`, `.s-list`) over the drawn map (`#map-art`). Replace them with the owner's own screens: either rebuild the screen in HTML with the same classes, or put a real screenshot inside `.screen` as an `<img>` that fills it.
- The front phone shows the main action on a light screen; the back phone shows details on a dark screen. Keep the text in the screens short and plausible.
- Without an app, the phones can hold a photograph, a printed flyer, a ticket or a donation receipt, cropped to 300 by 620.

## Slots and ratios

| Role | Ratio | Where | Notes |
|---|---|---|---|
| Panel illustration | 320 by 240 inside a 680 by 560 panel | `.panel` | Reason rows, mission rows, 404. |
| Card illustration | 320 by 240, up to 330px wide | `.card`, `.success`, `.empty` | One per feature card, success state or empty state. |
| Blog cover | 16:8 panel with a centred illustration or a photograph | `.cover` | Rotate the panel color: periwinkle, slate, lilac. |
| Strip drawing | 200 by 100 | `.strip` | Tiny scene, sits on the strip's bottom edge. |
| Phone screen | 300 by 620 | `.screen` | HTML or a real screenshot. |
| Avatars | 1:1 circle | `svg.av` | Drawn; replace with circular photographs when the owner supplies them. |
| Favicon and Open Graph | 40px and 1200 by 630 | `illustrations/mark.svg`, `illustrations/og.svg` | Export the Open Graph image as PNG for production; social networks do not render SVG. |

Every `<img>` has `alt`, `width` and `height`. Illustrations are decorative (`aria-hidden="true"`) because the heading next to them says the same thing. Do not lazy-load images: full-page captures and sandboxed previews do not scroll, and lazy images stay blank.

## With an image tool

Illustrations: "flat vector illustration of [subject], thick uniform black outlines with rounded joins, flat pastel fills in lilac, periwinkle, slate blue and warm off-white, one patch of blue halftone dots behind the subject, small coral accent, no gradients, no shading, no text, plain transparent background". Photographs for covers or screens: "candid photo of [real moment], soft daylight, natural colors, plain background, no text, no logos".

## Without an image tool

Reuse and recolor the drawings in the template: they cover maps, routes, buildings, money, privacy, code, people and directions. Change a panel's color class to fit the topic, and draw a new symbol only when no existing one fits. Never hot-link images from other sites, and never use logos, mascots or screenshots of products the owner does not own.

## Photos

When the owner supplies photographs (volunteers, a venue, the team):

- Put them inside a panel (`.panel` with `padding: 0` and the image covering it, 12px corners), a blog cover or a phone screen, never loose on the page.
- Team portraits go in the avatar circles, cropped square with the face centred.
- People photos need the owner's consent.
