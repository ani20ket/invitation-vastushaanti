# वास्तुशांती व गृहप्रवेश — Invitation Webpage

A React + Vite single-page invitation styled after a traditional Marathi
Griha Pravesh / Vastu Shanti invite: marigold garlands, a kalash motif,
banana-leaf corners, and a teal/marigold palette.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can host anywhere (Netlify,
Vercel, GitHub Pages, etc.).

## Editing the content

Open `src/App.jsx` and edit the `DETAILS` object at the top of the file —
it holds every piece of text on the card: the subtitle under the title
graphic, the invitation message, date & time, house address, Google
Maps link, the "निमंत्रक" (hosts) family list, and the closing lines.
Everything else re-renders automatically.

## Adding your own images

- `title-vastu-shanti.png` and `house-photo.png` are already included
  in `public/assets/` — swap either file (keeping the same name) to
  change them.
- `garland.png` and `banana-leaf.png` are optional decorative corner
  images. Until you add them, those corners show a small dashed
  placeholder. See `public/assets/README.md` for suggested sizes and
  where to find free images.

## File structure

```
vastu-shanti-invite/
├── index.html          # loads Devanagari Google Fonts (Tillana, Noto Sans Devanagari)
├── package.json
├── vite.config.js
├── public/
│   └── assets/
│       ├── title-vastu-shanti.png   # golden title graphic
│       ├── house-photo.png          # house photo shown at the bottom
│       └── README.md                # where to source garland.png, banana-leaf.png
└── src/
    ├── main.jsx         # React entry point
    ├── App.jsx           # invitation content + image-based decorations
    └── index.css         # all styling
```
