# Pictures and images

Two kinds of picture share the page. **Scenes** are flat, cheerful illustrations of the thing happening (a podium, a question on a screen, a results chart, a table of players), used in gradient cards and slanted cards. **Photographs** of real rooms (people mid-answer, hands up, a host at a microphone) are welcome in their place once the user has them, as long as they share the same bright, warm palette. Tiles and track cards use large white line drawings instead of pictures.

## The picture language

- **Scenes:** flat shapes, no outlines, a handful of saturated colours from the page (violet, teal, orange, pink, gold) on a light or deep-purple ground; rounded, friendly figures made of circles and rounded blocks, with dot eyes; small stars and confetti squares as accents. No text inside.
- **Photographs:** real events, warm indoor light, candid moments (laughing tables, raised hands, a host mid-sentence), saturated colour, no heavy filters. Crop so faces sit in the upper half.
- **Line drawings:** the sprite icons drawn large in white at a thin stroke (`.tile-art`, `.ttop svg`), cropped by the card edge.
- **People in lists:** hosts and authors appear as initials on a coloured disc or in a white ring; real portraits only from the user, all cropped the same way.
- **Never:** characters, mascots or avatars copied from games or apps; shape icons used as answer markers; stock photos of people pointing at screens; text baked into pictures; screenshots of real products.

## Slots and ratios

Pictures are cropped with `object-fit: cover`, so keep the subject in the middle.

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Gradient card picture | 4:3 | 1200 x 900 | `.pframe img` | Framed by a 6px white edge; the card cuts off the bottom 30px, so keep the subject in the top two thirds. |
| Slanted card picture | 16:10 | 1200 x 750 | `.spic img` | The panel's tilted edge covers about 22px at the bottom. |
| Featured note | 16:10, filling the left half | 1600 x 1000 | `.feature img` | The panel overlaps the right edge by 26px. |
| Note article | 16:10 | 1600 x 1000 | `.apic img` | The same picture as the card. |
| Tile art | square, cropped by the tile | SVG | `.tile-art` | A sprite symbol or a white cut-out on transparent. |
| Track card head | square, cropped | SVG | `.ttop svg` | A sprite symbol. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | The purple gradient, the wordmark, the tagline and the five mode colours. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Describe the scene ("Three cheerful players on a winners' podium under bunting"), because note views reuse the card's picture and alt. Do not add `loading="lazy"` or `decoding="async"` in a single-file delivery; on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 300 KB each, or keep small SVG.

## The sample pictures

`assets/images/*.svg` are original flat scenes: a winners' podium (`podium`), a picture question with four answers (`question`), a laptop showing results (`results`), a microphone under a spotlight (`mic`), books and a question card (`books`) and players around a table (`huddle`). `assets/illustrations/` holds the favicon mark and the Open Graph image. They are free to use, but they are placeholders: replace them with the user's own pictures when they have them and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available and the user has no pictures yet, keep one base prompt and change only the subject:

> Flat vector illustration of [subject], bright saturated palette of violet, teal, orange, pink and gold, simple rounded shapes, no outlines, friendly round characters with dot eyes, small stars and confetti accents, plain light background, no text, no logos.

Subjects that suit the style: a host at a microphone; a team around a table with an answer sheet; a winners' podium; a classroom with hands up; a laptop with a results chart; a stack of books with a question card; a birthday table with a quiz sheet. For photographs, ask the user for their own; do not generate realistic people.

Never generate the user's logo, a real venue, real people or a real product's screens.

## Without an image tool

Keep the sample scenes, or draw new SVG files the same way: a light or purple ground, two to four flat shapes, round figures with dot eyes, a few stars, saved in `images/` and referenced with `<img>` like photographs so they can be swapped later. For tiles and track cards, pick a different sprite symbol or add one in the same 24px grid with a 2px round stroke. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos or artwork from a real company unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark is live text: the name at 24px, weight 900, letter-spacing -0.04em, after a 36px mark (`#i-mark`, a white speech bubble holding three coloured dots), with a 12px tagline under it on the console. The white link bar shows the mark alone in a purple tile on small screens; the footer repeats mark and name. If the brand has a real logo, put a white version in `.brand` at about 36px tall and drop the mark.
- The favicon (`illustrations/mark.svg`) is the mark on a purple rounded square.
