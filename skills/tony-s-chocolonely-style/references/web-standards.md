# Web platform standards

These apply to every Kanorio style skill, in any stack. The style guide decides how things look; this file decides how they are built.

## Structure

- Use landmarks (`header`, `nav`, `main`, `footer`) and one `h1` per page or view; headings go down one level at a time.
- Set `lang` on `<html>`, a specific `<title>` and `<meta name="description">`, and Open Graph tags (`og:title`, `og:description`, `og:image`).
- Every link goes somewhere real: a route, a section ID or an external page. Never `href="#"`.
- Content is readable without JavaScript. Reveal effects hide content only under a class that JavaScript adds, with a timed fallback.
- A script error must never leave the page blank. When JavaScript adds a class (for example `js` on `<html>`) that hides views, sections or reveal content, wrap start-up in `try`/`catch`, listen for `error` until the first view has rendered, and remove that class on failure so every section shows. Name element helpers so one and many cannot be confused (`one()` returns an element, `all()` returns an array); do not reuse jQuery's `$` for something that is not jQuery.
- Before handing a site over, open it in a browser at phone and desktop widths and check that the console shows no errors. If you cannot open a browser, say so and ask the person to open the page once before publishing.

## Color, themes and contrast

- Declare `<meta name="color-scheme" content="light dark">` and `:root { color-scheme: light dark; }`, then define every token for both themes.
- Body text meets WCAG 2.2 AA contrast (4.5:1; 3:1 for large text and interface parts) in both themes.
- Do not carry meaning with color alone: pair it with text, an icon or a pattern.

## Layout and type

- Design from 360 px wide up. Nothing scrolls sideways; check `document.documentElement.scrollWidth <= innerWidth` on a phone-sized viewport.
- Pair `100vh` with `100svh`/`100dvh`. Use container queries for reusable card grids and `subgrid` for aligned rows.
- Size type with `clamp()`, keep body text at 16 px or more, and limit text columns to about 70 characters.
- Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs.
- Chinese, Japanese and Korean text: keep `lang` accurate, do not add letter-spacing to it, use `word-break: keep-all` for Korean, and leave room for text that runs longer or shorter than English.

## Interaction

- Touch targets are at least 44 by 44 px. Hover effects have a focus and touch equivalent.
- Every interactive element shows a visible `:focus-visible` ring that meets 3:1 contrast.
- Prefer native elements: `<button>`, `<dialog>` opened with `showModal()`, `<details>`, and `popover`.
- Forms: every field has a `<label>`, the right `type`, `autocomplete` and `inputmode`; errors appear next to the field, are linked with `aria-describedby`, and use `:user-invalid` rather than `:invalid`. Guard Enter-key handlers with `if (event.isComposing) return;` so people typing with an input method do not submit by accident.
- Run a form's handler from its submit button's `click` (with `preventDefault()`) as well as from `submit`. A sandboxed frame without `allow-forms` blocks native submission before the `submit` event fires; pressing Enter in a field clicks the submit button, so the click path covers it too. Errors that appear on blur must not move the button: reserve their space or float them, or the click that caused the blur misses.
- Browsers compile a `pattern` attribute with the regular-expression `v` flag, which rejects unescaped `( ) [ ] { } / - |` inside a character class: write `[0-9+\(\)\-\s]`, not `[0-9+()\-\s]`. An invalid pattern only logs a console error and the field is never checked.
- Add `[hidden] { display: none !important; }`. Otherwise a component's own `display` rule wins over the `hidden` attribute, and filters, tabs and success messages stop hiding things.

## Motion

- Animate `transform` and `opacity` only. Durations come from the style's motion tokens.
- `@media (prefers-reduced-motion: reduce)` removes movement and keeps fades short.
- Scroll-linked effects use `animation-timeline: view()` inside `@supports`, with a static fallback.

## Images and media

- Every image has `alt` (empty for decoration) and explicit `width` and `height`, so the layout does not shift.
- Below the first screen, use `loading="lazy"` and `decoding="async"`. Prefer WebP or AVIF.
- Never hot-link stock photos or other sites' images.

## Fonts and performance

- Use fonts with an open license (for example the SIL Open Font License) and `font-display: swap`. Load at most two families.
- No render-blocking third-party scripts. Scripts are `defer` or `type="module"`.
- A single-file deliverable embeds fonts and images and makes no network requests, so it also runs inside `<iframe sandbox="allow-scripts">`. There, wrap `localStorage` in `try`/`catch` with an in-memory fallback, and do not use `alert`, `confirm`, `prompt`, `window.open` or top-level navigation.
