# Pictures and images

The page is grey, white and ink; pictures and team colours bring the energy. On a results site the pictures must show the sport, at the level the user actually plays it, and be credited.

## The visual language

One picture desk, one way of seeing:

- **Action from courtside.** Players in the middle of a movement (a drive, a shot, a block, a celebration), shot from the side of the court at eye level or slightly below, under arena light. The subject fills the middle third of a 16:9 frame so it survives a thumbnail crop and the play button.
- **Colour:** warm floor, dark stands, team kits as the strongest colour. No heavy filters, no single tint across all pictures.
- **People:** athletes in kit, coaches on the sideline, crowds with scarves and signs, volunteers at work. Children only from behind or at a distance, never identifiable without consent.
- **Never:** stock photos of people pointing at screens, staged handshakes, trophies on white, text or logos baked into a picture, frames, drop shadows, or a picture from a different game than the one reported.

The template's pictures are original placeholder illustrations in that language: flat pictogram athletes in team colours on a wood floor in perspective, with dark stands, a row of lights and a soft vignette. They make the layout read like a sports page before real photographs arrive. Replace them with the user's photographs; keep the same crops.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Lead story | 16:9 | 1600 x 900 | `.lead .media` | The strongest action picture of the round. Video adds `.play` and `.dur`. |
| Second story, feed rows | 16:9 | 800 x 450 | `.pair .media`, `.rows .media` | Decorative next to their own headline. |
| Video cards | 16:9 | 640 x 360 | `.vcard .media` | Always with `.play` and `.dur`. |
| Article hero | 16:9 | 2000 x 1125 | `.art-hero .media` | The same picture as the lead when they match; caption under it. Put a real `<video>` here on a site that has footage. |
| People | none | none | `.av` | Initials in a team-coloured circle. Real headshots (square, cropped to a circle) only when the user supplies them. |
| Crests | none | none | `.crest` | One letter on a team-coloured shield. Use the user's real team badges as SVG or PNG at 2x when they have them, at the same sizes. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | The bar with the name block over a white card with one line and one score. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Card pictures that sit beside their own headline are decorative (`alt=""`; the picture link gets `aria-hidden="true"` and `tabindex="-1"`), because the headline link already names the story. The lead and the hero get real alt text that says what is in the picture. On a built site, add `decoding="async"` and `loading="lazy"` to pictures below the first screen; the template keeps them eager so full-page preview screenshots render.

## Prompts for an image tool

Use these only for illustrative or feature pictures, never as a record of a real game. Label generated pictures as illustrations in the caption.

- Base: "Sports photograph from courtside, eye level, arena lighting, warm wood floor, dark stands with a blurred crowd, 16:9, subject in the middle third, no readable text, no logos, no real team kits."
- Add the moment: "a guard in a teal kit driving past a defender in orange", "a player rising for a jump shot near the basket", "three teammates celebrating with arms raised under falling confetti", "a coach crouched on the sideline talking to five players in a huddle", "children in mixed colours dribbling in a community gym, seen from behind".

## Without an image tool

Keep the template's placeholder illustrations, or draw new SVG scenes in the same manner: a 160 x 90 viewBox, a dark vertical gradient for the stands, a patterned band of small circles for the crowd, a row of lights, a wood floor gradient with white court lines, pictogram figures built from thick round-capped strokes (limbs in a skin tone, torso and shorts in the team colour, a number on the chest), an orange ball, and a radial vignette. Name each file after its subject and add it once to the `IMAGES` map in the script. List every placeholder in your reply so the user knows which pictures to replace. Never hot-link photographs from other sites, stock libraries or team websites.
