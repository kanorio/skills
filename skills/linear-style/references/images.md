# Product visuals and images

This style shows the product instead of decorating it. The hero window, bento vignettes and changelog snippets are built in HTML and SVG, so they stay sharp, follow the theme and can be edited like text.

## Building the product window

1. List the product's main objects (tickets, deploys, invoices, documents, runs) and pick the one screen that shows its promise best.
2. Map it onto the window's three panes: navigation (sidebar with counts), a list (five to seven rows, one selected with the violet left rule), and a detail pane (the selected object and the product's key action, such as a draft, a diff, a chart or a result).
3. Use real-sounding content in the product's vocabulary: names, states, timestamps in monospace, small tag chips. Avoid "Item 1" and lorem ipsum.
4. Use the shared parts: `.dot` with `.ok`, `.warn`, `.bad` or `.brand` for status; `.chiplet` and `.chiplet.brand` for tags; `.mini-btn` for actions; `.kbd` for shortcuts; `.meter` for a progress or confidence bar.
5. Give the window `role="img"` and an `aria-label` that says what it shows; mark the inner markup `aria-hidden="true"`.

Charts are inline SVG paths drawn from data, stroked with `currentColor` inside an element whose color is `--brand`, with a translucent fill under the line.

## Screenshots

If the user insists on real screenshots, frame them in the same window (bar, border, radius, overlay shadow), export them at 2x, provide a dark and a light version, and give every image `alt`, `width` and `height`. Never use device mockups or perspective photos of laptops.

## Photos

This style rarely uses photos. Team or customer photos appear only on an about page, cropped square, slightly desaturated, inside a hairline border. Never hot-link stock photos.

## Brand mark, favicon and Open Graph

- The mark is a simple geometric shape filled with the text color and cut with the background color, so it follows the theme.
- The favicon is the mark on a near-black rounded square.
- The Open Graph image is 1200 by 630: the near-black background, a violet glow from the bottom, the headline in Inter 600 with the white-to-gray gradient, and the mark. Export it as PNG for production; social networks do not render SVG.
