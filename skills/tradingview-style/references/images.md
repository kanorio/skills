# Pictures and images

In this style the pictures are charts. The page is white and ink; colour comes from the lines, badges and bars. Photographs are rare and never decorate a number.

## The visual language

One chart desk, one way of drawing:

- **Chart snapshots.** A chart picture looks like a saved view from a charting screen: a plain light or near-black background, faint grid lines, axis numbers on the right in small grey sans-serif, one or two strong lines, and at most two annotations (a dashed trend channel, a level line with a coloured price tag, a moving average, labels at the end of each line). Mix light and dark snapshots in one list; that contrast is part of the look.
- **Colour:** the same green and red for direction as the page, blue for a neutral series, amber for a second series or a level, violet and cyan only for extra series.
- **Other picture types**, when a site needs them: step charts for fares and tariffs, horizontal bars for rankings, candles for weekly ranges (low, high, first and last value of the week), area charts for an index.
- **Never:** stock photos of people pointing at screens, 3D charts, pie charts with more than five slices, glowing hologram graphs, screenshots of real trading software, real company logos or tickers, text paragraphs baked into a picture.

The template's pictures are original SVG chart snapshots drawn in that language (`assets/images/chart-*.svg`). They are data-free illustrations: replace them with charts of the user's real numbers, or redraw them with the user's series.

## Slots and ratios

| Role | Ratio | Source size | Where | Notes |
|---|---|---|---|---|
| Chart card | 16:9 | 640 x 360 (SVG) or 1280 x 720 | `.idea-img img` | A 1px hairline and 12px corners; the corner flag and the badge sit on top, so keep the top-left 60px and bottom-left 60px free of labels. |
| Article figure | 16:9 | 1280 x 720 | `.art figure img` | The same chart as the card, with a caption that says what is measured, where and over what period. |
| Live charts | any | none | `.plot`, `.spark` | Drawn by the script from data, not pictures. |
| Badges | none | none | `.badge` | Two letters or a line icon on a coloured circle (`--h`). Use the user's own product or team marks only when they own them. |
| People | none | none | `.av` | Initials on a pale blue circle; real headshots only when supplied. |
| Open Graph | 1200 x 630 | 1200 x 630 | `og:image` | Ink background, the mark and name, one line, the glowing line. Export as PNG for production. |

Every `<img>` has `alt`, `width` and `height`. Chart pictures get alt text that says what the chart shows ("Line chart of egg prices rising inside a channel"), because the trend is the content. On a built site, add `decoding="async"` and `loading="lazy"` to pictures below the first screen; the template keeps them eager so full-page preview screenshots render.

## Drawing new chart pictures

With real data, draw the chart as SVG at 640 x 360: background rectangle, grid paths in one light stroke, the series as one `<path>` scaled into a plot area that leaves 70px on the right for axis numbers, annotations as dashed paths, tags as small rounded rectangles with white bold numbers. Name each file after its subject and add it once to the `IMAGES` map in the script with its alt text.

## Prompts for an image tool

Use these only for decorative headers on articles, never as a record of real numbers, and label them as illustrations.

- Base: "Flat editorial illustration, clean vector, white background, one strong blue line chart rising across the frame, faint grid, no text, no logos, 16:9."
- Variants: "a shopping basket made of thin blue lines beside a small rising line chart", "a city street of small shops in flat blue and grey shapes with tiny price tags", "a bus ticket and a coin stack in flat vector shapes on white".

## Without an image tool

Keep the template's chart snapshots, or draw new ones by hand as described above with clearly fictional numbers. List every placeholder picture in your reply so the user knows which charts to replace with real data. Never hot-link charts or pictures from other sites, stock libraries or data providers.
