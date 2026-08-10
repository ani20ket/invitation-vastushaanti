# Image assets

| Filename                 | Used for                                | Status |
|---------------------------|-------------------------------------------|--------|
| `title-vastu-shanti.png`  | Golden "वास्तुशांती" title graphic       | ✅ included |
| `house-photo.png`         | House photo, bottom of the card           | ✅ included |
| `garland.png`              | Hanging marigold garland (top corners)   | optional — add your own |
| `banana-leaf.png`          | Banana leaf cluster (bottom corners)     | optional — add your own |

The title graphic and house photo are already in this folder and load
automatically. The garland and banana leaf are optional decorative
touches — until you add them, those corners show a small dashed
placeholder and the rest of the card still looks complete without them.

## Suggested sizes if you add garland/banana-leaf

| Filename          | Suggested size (px) | Shape                        |
|--------------------|----------------------|--------------------------------|
| `garland.png`      | ~300 × 850           | Tall, transparent background |
| `banana-leaf.png`  | ~650 × 750           | Wide, transparent background |

The same file is reused and mirrored automatically for the left/right
(or top/bottom) corners via CSS, so you only need one of each.

## Where to get them

- **Pngtree, Vecteezy, Freepik** — search "marigold toran hanging
  garland png transparent" or "banana leaf corner png transparent".
- **Flaticon** — simpler icon-style versions.
- **Pixabay / Rawpixel** — CC0 / public-domain, no attribution
  required.

## Swapping the title graphic or house photo

Want to use a different image for either? Just replace the file in
this folder, keeping the same filename — no code changes needed. If
you'd rather use a different filename, update the `ASSET_PATHS` object
near the top of `src/App.jsx` to match.
