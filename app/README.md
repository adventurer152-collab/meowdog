# 寵物首頁 (Pet home screen)

React + Vite implementation of design **2a** from `project/寵物首頁.dc.html`:
full-bleed hero photo + tagline, search and categories, today's deals list, and a
swipeable 每日我最靚 polaroid row.

```sh
npm install
npm run dev     # http://localhost:5173
npm run build
```

- `src/ds/` — Kawaii Warm design-system tokens, fonts and the components the screen uses (Icon, IconButton, Input, Badge, Card), ported from the design bundle.
- `src/components/` — home-screen sections.
- `src/data.js` — placeholder stores, deals and pet captions. Set `photo` fields to image URLs to fill the photo frames; until then, empty frames can be clicked (or have a file dropped on them) to preview a local photo.

On phones the screen fills the viewport; on wider screens it's shown in a 390px phone frame.
