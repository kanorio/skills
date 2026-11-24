# Scenes, product panels, stars and photographs

This style pictures the work, not decoration: soft-focus colour scenes or real photographs in rounded frames, each with one small white interface panel floating on top, and a glossy star now and then. The template ships no image files: scenes are CSS gradients and every panel is HTML, so they follow the theme and stay sharp.

## Scenes (the stand-in for photographs)

- `.scene` plus a tone class draws three soft radial glows over a gradient and one faint ring at the lower right. Tones: `.t1` lilac and sky, `.t2` sky and mint, `.t3` peach and violet, `.t4` deep violet and blue (the same in both themes). Light tones dim automatically in the dark theme.
- Alternate tones down a page so neighbours differ; keep `.t4` for one or two places per view where you want weight (the workspace split, a feature card).
- Ratios by role: feature cards 2:1 (16:10 on phones), cards 16:9, tab art 4:3, the story frame at least 440px tall, the article hero 21:8 (4:3 on phones).

## Product panels

- One idea per panel: a task and its state. A `.mini` holds one or two `.mini-row`s (an icon tile, a bold line, a small detail, an optional status chip), or a request bubble and its answer.
- Use the brief's own nouns and believable numbers ("148 invoices today, 13 to review"). Status chips: neutral (`.chip`), done (`.st-ok`), needs attention (`.st-warn`).
- The hero card (`.ui`) is the one large panel per site. Rewrite its request, answer, result and chips for the brief's product or service; for a consultancy it can be a project plan, for a managed service a ticket thread.
- Panels are drawings of an interface, not screenshots. Never paste screenshots of real products.

## Stars and sparkles

- `#star` is a four-point star with concave sides, rounded tips, a lilac-to-violet gradient (`#sg`), a white highlight (`#sh`) and a soft violet drop shadow. Use it at 56 to 150px, one or two per view: off a corner of the product card, in a media frame, in a gradient block, beside a page head.
- `.spark` is the same shape as a thin white outline, 24 to 40px, only on gradients.
- Never use stars as bullets, never more than two in one viewport, never over text.

## Photographs

- When the brand has real photographs, put one inside a scene as `<img>` (`.scene > img` fills the frame with `object-fit: cover`) and keep the floating panel on top.
- One photographic language: people at work in bright, real workplaces (an office, a warehouse, a lab), natural light, slightly cool, shallow depth of field so the panel stays readable, nobody looking at the camera.
- If an image tool is available and the user wants photos, ask for "a photograph of <a person doing the brief's real work> in a bright modern workplace, natural light, soft background blur, cool tones, room on one side for an overlay, no text, no logos, no readable screens". Without such a tool, keep the scenes and write a placeholder caption that says which photo belongs there (the template does this in the story).
- Never hot-link stock photos or use pictures of real companies' products or people the user has not supplied.
- Every raster image needs `alt`, `width` and `height`, and no `loading="lazy"` above the fold.

## People

- Avatars are circles: a gradient (`.av`, `.a2`, `.a3`) with initials, or a real photo cropped to a circle at the same size, with a ring in the page colour.

## Brand mark, favicon and Open Graph

- The sample mark is a rounded square in a violet-to-blue gradient with a white four-point star, kept in the sprite as `#mark`. Draw a new one for the brand: a rounded square or circle in the gradient with one simple white shape. Avoid letters or shapes that read as an existing company's logo.
- Customer logos in the sample are a generic glyph (`#lg1` to `#lg3`) beside the name in small caps (`.logo-chip`). Use real customer logos only when the user supplies them with permission.
- The Open Graph image is 1200 by 630: the gradient, the mark, the headline in white, one line of description and a simplified product card with a star on the right. Export it as PNG for production; social networks do not render SVG.
