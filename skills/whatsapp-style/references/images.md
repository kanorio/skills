# Pictures and images

This style shows everyday life with the conversation laid over it: warm, candid photographs of homes, hands and places, with the interface (bubbles, chip cards, phones) drawn on top in code. The pictures never carry text; the bubbles do.

## The photographic language

- **Light:** morning daylight through a window or warm lamp light in the evening. Soft, from one side, with a bright highlight somewhere in the background.
- **Depth:** shallow. The subject is sharp and the background melts into soft shapes and round highlights, so bubbles placed over it stay readable.
- **Colour:** warm and natural: cream walls, honey wood, brushed metal, a little green from plants. Slightly lifted blacks and a fine grain. No cold blue grades, no heavy filters.
- **Subject:** one thing in a real place: a tap over a sink, a toolbox on a counter, a lamp on a table, a door with a plant beside it. When people appear they are doing something ordinary and are not looking at the camera.
- **Composition:** for the hero, the subject sits right of centre and the left third is darker and quieter, because the headline goes there. Leave clear space at the top right for floating bubbles.
- **Never:** text, logos or screens with readable app interfaces inside photographs, stock smiles at the camera, people holding up phones to the lens, emoji stickers.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Hero | 2:1 | 1600 x 800 or larger | `.hero-card > img` | `object-position: 70% 50%`; it is cropped taller on phones, so keep the subject inside the middle 50 percent. A dark gradient is added in CSS on the left (and from the bottom on phones). |
| Row photo | 4:3.2 | 1200 x 900 | `.photo > img` | The chip card covers the lower left corner; keep that corner calm. |
| Note card and article | 4:3 (card), 16:10 (article) | 900 x 675 | `.note-card img`, `#note-img` | One subject, centred. The same file serves both crops. |
| Photo inside a bubble | 4:3 | 800 x 600 | `.bubble .pic` | The picture a customer would send: close, simple, a little imperfect. |
| Avatars | 1:1, shown as circles | drawn SVG, or 160 x 160 photos | `svg.av` with `.p1`…`.p8`, or `<img class="av">` | Use real portraits only of the user's own people, with permission. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | The hero colours, the headline and two bubbles. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Alt text says what is in the picture ("A toolbox and a coffee mug on a kitchen counter beside a dripping tap"). Pictures inside decorative phones use `alt=""` because the phone is `aria-hidden`. Do not add `loading="lazy"` in a single-file delivery (the pictures are embedded anyway, and full-page captures skip lazy images); on a deployed site, lazy-load pictures below the first screen. Export WebP or AVIF under 200 KB each.

## The sample pictures

`assets/images/*.webp` are rendered stand-ins in this photographic language: a kitchen counter with a toolbox and a dripping tap (`hero`), a tap close-up (`tap`), an evening repair café with lamps, a radio and a bicycle wheel (`cafe`), a shelf on a sage wall (`shelf`), a radiator under a window (`radiator`), a table lamp at night (`lamp`), a painted front door (`door`) and a flat lay of tools (`tools`). They are original and free to use, but they are placeholders: replace them with the user's photographs before launch and list every remaining placeholder in your reply. The avatars are drawn symbols (`#av-a`, `#av-b`, `#av-c`) coloured by the `.p1`…`.p8` classes; they are not portraits of anyone.

## Generating pictures

When an image tool is available, keep one base prompt and change only the subject and the light:

> Candid lifestyle photograph, [subject] in a real home, warm [morning window light / evening lamp light] from the side, shallow depth of field with soft round highlights in the background, natural warm colours, cream and honey wood tones, fine film grain, subject right of centre, calm darker space on the left, no text, no logos, no screens.

Subjects that suit the style: hands fitting a washer under a sink; a cake box on a doorstep; a tutor's desk with two cups and an open notebook; a bike being pumped up outside a door; a salon chair by a window; a group of people setting chairs out in a hall. Check the set side by side: same warmth, same softness behind the subject.

## Without an image tool

Keep the template's stand-ins, or render new ones the same way: a warm gradient wall, a blurred window or lamp glow with a few soft round highlights, one simple subject built from shapes with a highlight and a contact shadow, then a light vignette and grain, saved as files in `images/` and referenced with `<img>` like photographs so they can be swapped later. List every placeholder, slot by slot, in your reply.

Never hotlink stock photos, and never use photographs, logos, stickers or interface screenshots from a real company, messaging app or photographer unless the user supplies them with permission.

## Wordmark and favicon

- The wordmark (`.logo`) is a speech bubble with a small house inside (`#i-mark`) followed by the name as live text at 600, both in `--green-ink` (bright `--green` on the ink footer). Replace the symbol with the brand's own mark at the same 32px size, or with a simple speech-bubble shape holding one symbol from the business.
- The favicon (`illustrations/mark.svg`) is the same mark on a cream tile.
