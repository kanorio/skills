# Style guide: Telegram style

The look in one sentence: a plain white page with a round mark in the middle, blue words you can click, the product shown on real-looking devices, and a grid of cheerful die-cut stickers, with inner pages that read like a well-kept help document.

## Tokens

All values live as CSS custom properties on `:root` in `assets/template.html`, and as data in `tokens.json`. Change them there, never inline.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | white | deep blue-grey | page background |
| `--surface` | pale blue | lifted blue-grey | callouts, tags, the chosen filter's hover, success panels, the letter block |
| `--surface-2` | faint grey | a step above the page | code blocks, table heads, tab hover |
| `--text` | near-black with a cool cast | soft white | headings, body |
| `--text-muted` | cool grey | light cool grey | taglines, dates, captions, metadata |
| `--border` / `--border-strong` | hairline / input outline | the same roles in dark | header rule, dividers, table rows / inputs |
| `--accent` / `--accent-hover` | the link blue / a deeper blue | a light sky blue / lighter | every link, tab, filter, heading in the sticker grid and news cards, buttons |
| `--accent-text` | white | deep blue-grey | text on a blue button or a chosen filter |
| `--rule` | a brighter blue | lighter blue | the news rail line, the left edge of callouts |
| `--frame` | near-black | almost black | device bezels |
| `--scr-*` | the product's own screen colours | the same, dark | device screens; `.scr-dark` forces the dark set on one device |

There is one hue: blue. Grey carries everything else. Sticker colours are fixed (they are printed objects) and never become interface colours.

## Typography

- One family: **Host Grotesk**, variable weight 300 to 800. Code uses the system monospace stack, so no second font file is needed.
- The product name on the home page is the display size at weight 500, slightly tight (-0.015em). It is the only large type on the site.
- The tagline under it is lowercase, weight 300, muted, about 22px. It reads like a subtitle, not a slogan.
- Inner page H1s are small on purpose: 24 to 28px at weight 600. H2 20px, H3 17px, both 600.
- Blue headings: sticker grid titles at 28px weight 500, news card titles at 19px weight 600, section titles on the home page at 26px weight 600.
- Body 16px with line-height 1.6. Rail links and footer links 15px. Dates and captions muted.
- In feature sentences, the product name is set in bold at the start: "**Moonwake** keeps working on the beach."
- No all-caps labels, no eyebrows, no letter-spaced kickers.

## Spacing, layout and radius

- Home: everything is centred on one axis. The mark, name and tagline sit in a 480px middle column; the news rail hangs in the right column at the same height. Devices sit two to a row, the wide pair alone below.
- Inner pages: a 136px side column holding one sticker, then a document column up to 780px. The handbook swaps the sticker for a 190px "On this page" list. Lists, news and legal use one centred column (`.page.solo`).
- Sections on the home page are separated by 56 to 72px of white space, never by bands of colour.
- Hairline dividers (`.rule`) separate the parts of a long document.
- Radius: 8px inputs and code, 12px panels, 18px news covers, pills for buttons, filters and tags, and circles for the mark, avatars and badges.

## Surfaces and depth

- The page is flat white. Colour appears only in pale blue callouts, the stickers and the news covers.
- Shadows belong to physical things: device bezels and stickers. Panels and cards have none.
- News covers are soft two-colour gradients with a pale sun and a horizon, and a sticker in the middle. They are the only gradients.

## Signature elements

These make the style recognizable. Keep at least four on the home page and two on every inner page.

1. **The round mark.** A 120px circle in a vertical blue gradient with a simple white glyph, centred above the product name and a light lowercase tagline. No hero image, no headline sentence, no buttons.
2. **Text tabs, no logo.** The header is a row of blue text links with a 3px blue underline under the current one, a hairline under the bar, a quiet text link at the right and a round theme button. The brand lives in the page, not in the header.
3. **The news rail.** Beside the mark, a short list on a 2px blue line: a blue "Recent news" title, then bold dates over blue headlines.
4. **Devices with blue platform links.** The product's own screens drawn in SVG inside phone, tablet and laptop bezels, overlapping in pairs, each with a text link underneath where only the platform name is bold: "Moonwake for **Android**". No store badges.
5. **The sticker grid.** Nine die-cut stickers (a white edge and a soft shadow) over a big blue word and one sentence starting with the product name in bold. Three columns, centred.
6. **Document inner pages.** A small H1, a pale blue callout with a blue left edge, lists of blue question links, bold section labels, and "more" links that end in a double chevron (`.more`).

## Components

- **Header (`.top`):** five tabs at most, a text link with an icon (it hides on phones), the theme button. On phones the tabs scroll sideways instead of collapsing into a menu.
- **Callout (`.note`):** one or two sentences, a 3px left border in `--rule`, pale blue background, right corners rounded. Use it for the one thing a reader must know on that page.
- **Link lists (`.links`):** one link per line with 10px between them, an icon only when it names a platform.
- **News card (`.card`):** a cover with a sticker, then a blue title, a sentence, and a muted date. The cover and title are one link.
- **Filters (`.seg`):** blue text buttons; the chosen one becomes a filled blue pill.
- **Release entry (`.rel`):** a blue version title, a date and small pale tags, a short list. A hairline above each.
- **Source entry (`.src`):** a blue bold name, a plain description with its licence, a row of "more" links, an optional fingerprint in a disclosure.
- **Code (`.code`):** a bar with a plain label and a Copy button, then monospace text on the faint grey surface.
- **Buttons (`.btn`):** a blue pill. Use them only for form submits and one mobile "Browse all apps" link; everything else is a text link.
- **Forms:** labels above fields, 44px inputs with a hairline outline, the error line reserved under each field, and a pale blue success panel with a round check.
- **Team (`.team`):** round initials avatars in muted colours with a name and a role.
- **Footer (`.foot`):** a hairline, the name with one sentence, four columns of blue links under bold labels, a small muted legal line.

## Do and don't

- Do make every action a blue text link. Don't add outlined buttons, store badges or arrows in circles.
- Do let the stickers carry the colour. Don't tint whole sections or add coloured bands.
- Do keep inner pages plain and readable, like a help document. Don't add hero images to them.
- Do write headings as a word or a short phrase ("Private", "Source code"). Don't write slogans.
- Don't draw the product as a chat or a messaging app unless it is one; show what the user's product really does.
- Don't use emoji as icons, even inside sticker art.

## Voice

Plain, friendly and exact, like a good FAQ. Short sentences. Name the product often and in bold where it opens a sentence. State what something does, then the limit ("Predictions are a guide, not for navigation"). No hype words, no exclamation marks, no em dashes, no lorem ipsum.
