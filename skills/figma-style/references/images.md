# Pictures and images

The frame is black and white, so the pictures carry all the colour. Two kinds share the page: **work** (what the business makes or what its customers make, shown as bright flat-colour pictures in tiles) and **product views** (the app, the site, the menu or the programme, shown as clean screens inside pastel panels).

## The picture language

- **Work pictures:** one subject on a single saturated ground (orange, cobalt, lilac, pink, yellow, green, cyan, teal), photographed or rendered straight on, subject centred, plenty of colour around it. Each picture has its own ground colour; together they look like a set of posters.
- **Product views:** a phone, a laptop window or a tablet showing a light interface, front-on, no perspective, no hands, no desk. Shown inside a pastel panel, centred and usually running off the bottom edge.
- **Light:** even and soft. Shadows only under objects, never dramatic.
- **People:** in a quote or on the team, as initials on a pastel square or circle, or as the user's own portraits all cropped the same way (shoulders up, plain background).
- **Never:** perspective mock-ups floating in space, gradients behind screens, rounded corners or frames added in CSS, text baked into pictures, stock photos of people pointing at laptops.

## Slots and ratios

Pictures are cropped with `object-fit: cover`, so keep the subject in the middle third.

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Mosaic tiles | from 1.2:1 to 0.8:1 (phones 1:1 and 1:2) | 1600 x 2000 | `.mosaic .tile` | A 4:5 source crops well into every tile. Leave room for a floating control on three of them. |
| Hero collage, main picture | 0.7:1 | 1600 x 2000 | `.l-art` | Behind the phone; its colour sets the hero's mood. |
| Hero phone | 360 x 740 | 720 x 1480 | `.l-phone` | A product view in a phone frame, transparent outside the frame. |
| Panel product views | panel 16:10, 16:8 or 16:8.4 | 2400 wide | `.panel > img` | Phone, laptop window or tablet; the panel crops the bottom. |
| Story hero | 16:7 inside a 16:8 panel | 2400 x 1050 | `.panel.inset` | The best single picture of the customer, project or session. |
| Story cards and rail | 4:3 and 1:1 | 1600 x 2000 | `.story-img`, `.rail-img` | The same work pictures as the mosaic. |
| Journal covers | 4:5 inside a 3:2 panel | 1200 x 1500 | `.post-img` | Framed by a panel colour per post. |
| Feature-row panels | 4:3 | 1600 x 1200 | `.frow .panel` | A work picture or a product view. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | White, the wordmark, a block of four colour tiles. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Story cards describe the picture ("A cream vase on a dark potter's wheel against orange"), because the story view reuses it. Decorative pictures (the hero collage, tiles already named by their label, journal covers already named by their title) use `alt=""`. Do not add `loading="lazy"` or `decoding="async"` in a single-file delivery; on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each.

## The sample pictures

`assets/images/*.svg` are original flat drawings standing in for photographs: a vase on a potter's wheel (`kiln`), climbing holds on a wall (`hightide`), a choir under rings of sound (`northside`), dancing ribbons (`pivot`), loaves of bread (`crumb`), a bicycle wheel (`spoke`), brush strokes (`easel`) and a pool with a lane rope (`saltwater`), plus three product views (`ui-phone`, `ui-week`, `ui-checkin`) drawn as abstract bars. `assets/illustrations/` holds the favicon mark and the Open Graph image. They are free to use, but they are placeholders: replace them with the user's own pictures before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available and the user has no pictures yet, keep one base prompt and change only the subject and the ground colour:

> Flat, bright studio photograph of [subject], centred, front-on, on a seamless saturated [colour] background, soft even light, a small contact shadow, crisp detail, no people's faces, no text, no logos of real brands.

Subjects that suit the style: a hand-thrown bowl on a wheel; a stack of books with blank covers; a pair of running shoes; a loaf on a board; a guitar against a wall; a bicycle wheel; paint pots and brushes. For product views, draw the user's real screens or ask for screenshots; do not generate fake interfaces with readable text.

Never generate the user's actual logo, product screens or customers' work: those must come from the user.

## Without an image tool

Keep the sample drawings, or draw new SVG files the same way: one saturated ground, one object made of simple shapes, two or three accent colours, saved in `images/` and referenced with `<img>` like photographs so they can be swapped later. For product views, keep the bar-drawn screens and change only their colours. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos or work from a real company unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the name at 21px, weight 500, letter-spacing -0.035em, after a 26px mark (`#mark`, a circle with one quarter open and a dot). The footer repeats the name at 40 to 56px without the mark. If the brand has a real logo, put its SVG in `.brand` at about 26px tall and drop the mark.
- The favicon (`illustrations/mark.svg`) is the mark in white on a black rounded square.
