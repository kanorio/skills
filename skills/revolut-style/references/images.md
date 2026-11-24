# Pictures and images

This style is carried by big photographs: whole-screen scenes of real places and people in strong natural light, with the interface (the glass frame, cards, phones) drawn on top in code. The pictures never carry text or interface; the frame and the mockups do.

## The photographic language

- **Scale:** wide and immersive. One clear subject (a person, a pool, a wall, a skyline) with a lot of sky, water or wall around it, shot to fill a whole screen.
- **Light:** strong and natural, one time of day per picture: clear midday blue, golden hour, blue hour, lamp-lit night. Deep, clean colour, slightly lifted blacks, no heavy filters or duotones.
- **Subject placement:** the subject stands in the centre or just below it, where the glass frame will sit, so the frame reads as a phone held in front of the scene. The top third is calm (sky, wall, dark ceiling) because the headline goes there.
- **People:** real moments, mid-activity or looking away from the camera: a swimmer on a wall at sunrise, a climber chalking up, two friends at a door. Never stock smiles at the lens, never people holding phones up to the camera.
- **Set:** pictures that share a band (tabs) share the same crop, horizon height and exposure, so the cross-fade feels like the same window looking at different moments.
- **Never:** text, logos, real interface screenshots, card schemes or bank branding inside photographs; cash, coins, charts or crypto symbols as decoration.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Hero | 16:10, cropped to the viewport | 1600 x 1000 or larger | `.hero > .bgimg` | `object-fit: cover`. Keep the subject inside the middle 40 percent: on phones the crop is tall and narrow. |
| Photo band panes | 16:10 | 1600 x 1000 | `.scene-band > .bgimg[data-pane]` | One per tab, same horizon and exposure. A dark gradient is added at the top and bottom in CSS. |
| Closing and company heroes | 16:10 | 1600 x 1000 | `.closing > .bgimg`, company `.scene` | Darker pictures (night, dusk, interiors) so white type reads at any width. |
| Join scene | 16:10, cropped to a tall half | 1600 x 1000 | `.join-scene > .bgimg` | The frame sits in the middle; keep the middle calm. |
| Journal card and article | 16:11 (card), 16:10 (article) | 1200 x 800 | `.post-card img`, `#post-img` | The same file serves both crops. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | The hero picture, the headline and the frame outline. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A sea pool wall at sunset with a swimmer looking out over the water"). Mockups that repeat what the copy says are `aria-hidden`. Do not add `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip lazy images); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 200 KB each.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this language: a blue midday sky over an open-air pool with lane ropes and a ladder (`sky`), a sea pool wall at sunset with a swimmer (`dusk`), a bouldering wall under warm spotlights (`climb`), a movement studio with a low window of morning light (`studio`), and a lit skyline behind a rooftop pool at night (`night`). They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject and the time of day:

> Wide cinematic lifestyle photograph, [subject] in [place], [clear midday sky / golden hour / blue hour / night with warm lights], subject centred in the lower half, calm empty [sky / wall] across the top third, deep natural colour, slightly lifted blacks, shot on a full-frame camera at 35mm, no text, no logos, no phones or screens.

Subjects that suit the style: a runner stopping on a bridge at sunrise; a festival crowd under string lights at blue hour; a cyclist at a crossing in hard noon light; a woman on a rooftop with the skyline behind her at dusk; a studio of people mid-stretch in window light. Generate the tab sets together and check them side by side: same horizon, same exposure.

## Without an image tool

Keep the template's stand-ins, or render new ones the same way: a sky or wall gradient for the top two thirds, one simple subject or horizon built from shapes with soft blurred light, a darker foreground band, then a light vignette and grain, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos, card designs or interface screenshots from a real company or photographer unless the user supplies them with permission.

## Wordmark, card and favicon

- The wordmark (`.logo`) is the name as live text in Host Grotesk at 650 with tight tracking. There is no symbol in the header. Replace it with the brand's own logo at the same height (about 26px) when there is one.
- The member card (`.pass`) is drawn in CSS: three gradient tones (`--a`, `--b`, `--c`), the `#waves` lines, the name and a tier. Recolour it with the brand palette; never add numbers, chips, expiry dates or payment network marks.
- The favicon (`illustrations/mark.svg`) is a black rounded square with a white symbol from the brand. Replace it with the brand's mark.
