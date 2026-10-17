# Kawaii Warm · 可愛暖色風 Design System

A cute, warm, hand-illustrated visual language: pastel storefronts, cocoa-brown ink outlines, sticker-like UI, animal shopkeepers and floating soap bubbles. There is **no company or product** behind it — the brief was the phrase **"可愛暖色風"** ("cute warm-colour style") plus four mood illustrations. Everything here is derived from those references.

## Sources
- Brief: "可愛暖色風"
- Four uploaded reference illustrations (now in `assets/illustrations/`):
  - `soymilk-breakfast-shop.jpg` — 豆漿油條 breakfast stall, panda cook, lavender lanterns & striped awning, honey-yellow signboard
  - `green-flower-shop.jpg` — "Green hose" flower shop, fox shopkeeper, bunny with bouquet
  - `rabbit-flower-house.jpg` — "Mr.Rabbit Flower" No.47, giant pink tulips, falling petals (watermark: MAZI麻籽)
  - `ice-cream-laitier.jpg` — "LAITIER" ice-cream window, polar bear, dripping-cream facade (watermark: Color Time Happy Life)
- No logo, codebase, Figma, fonts or icon set were provided. **No logo exists** — render "Kawaii Warm" in Baloo 2 wherever a mark is needed. The illustrations are third-party art of unknown licence; use them only as placeholders/mood.

## Index
- `styles.css` — entry point (imports only) → `tokens/`: `fonts.css`, `fonts-latin.css`, `icons.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `fonts/` — self-hosted Latin subsets of Baloo 2 and Nunito
- `assets/illustrations/` — the four reference illustrations
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), one `*.card.html` per folder
- `ui_kits/corner-shop/` — demo mobile app click-through
- `thumbnail.html`, `SKILL.md`

## Components
Built as a standard set (no source inventory existed).
- **actions/** — Button, IconButton
- **forms/** — Input, Select, Checkbox, Radio, Switch
- **display/** — Card, Badge, Tag, Icon
- **navigation/** — Tabs
- **feedback/** — Dialog, Toast, Tooltip

Intentional additions: **Icon** — thin wrapper so every component uses the same Phosphor glyph set and weights.

## UI kits
- **Corner Shop** (`ui_kits/corner-shop/`) — illustrative only; no real product exists. Home → Shop menu → Bag → Order done.

---

## CONTENT FUNDAMENTALS
The references are wordless apart from shop signs ("豆漿油條", "Green hose", "Mr.Rabbit Flower 47", "LAITIER", "ice cream shop ←", "HOT ♡", "NEW", "招牌牛肉麵", "營業 06:00"). Copy rules extrapolate that shop-sign voice:
- **Language:** Traditional Chinese first, short English as decoration (shop names, NEW / HOT tags). Mixed is fine: "LAITIER · 牛奶冰淇淋窗口".
- **Voice:** a friendly neighbourhood shopkeeper. Speak to the user as **你**, never 您; the app/shop speaks as itself or a named character ("熊貓老闆已經開始準備了").
- **Tone:** gentle, unhurried, a little playful. Soft sentence-final particles are welcome in moderation: 囉、喔、吧、耶. "還差 2 分鐘就打烊囉", "購物袋空空的", "找不到這家店耶…換個關鍵字試試？"
- **Brevity:** sign-length. Buttons are 2–5 characters ("加入購物袋", "結帳", "再想想"). Headlines are a single question or statement ("今天想去哪家店？").
- **Casing:** English shop names keep their own casing; tags are ALL CAPS (NEW, HOT); everything else sentence case.
- **Errors:** never blame — describe and offer the next step ("付款沒有成功，再試一次？").
- **Symbols:** ♡ ☀ ✎ → may appear sparingly inside hand-font notes, like doodles on a chalkboard. **No emoji** in UI.
- **Numbers:** "NT$ 45", 24-hour times "08:30", distances "350m".

## VISUAL FOUNDATIONS
- **Colour vibe:** warm, sunlit pastels on cream paper. Each reference is near-monochrome around one hue (honey+lavender, matcha, sakura+mint, soda blue) with small warm accents. Primary is **honey yellow** (`--honey-400`); pastels (apricot, sakura, lavender, matcha, soda) give each surface/category its own tint. Text and outlines are **cocoa brown** (`--ink-900 #4A372B`) — never pure black or cool grey.
- **Type:** rounded everything. Baloo 2 (chunky sign lettering) for display, Nunito for Latin body, 粉圓 Huninn for Chinese, 霞鶩文楷 LXGW WenKai TC as a hand-written accent for notes/captions. Headings 700–800; body 400 at 15px/1.6.
- **Outlines:** the defining motif. Interactive and container elements get a **2px solid cocoa outline** (`--stroke`), echoing the inked line-art. Soft secondary dividers use dashed `--ink-200`.
- **Shadows:** "sticker" shadows — hard, un-blurred, straight-down offsets in ink (`0 3px 0`). Overlays (dialog, toast) add a soft warm blur beneath (`--shadow-float`). No inner shadows, no coloured glows.
- **Corner radii:** generous and soft: 14px fields, 20px cards, 28px dialogs, pill buttons/tags/tabs. Nothing is square.
- **Cards:** cream (or pastel-tinted) fill, 2px ink outline, 20px radius, 3px sticker shadow; optional full-bleed cover image separated by a 2px ink rule, optional striped **awning** band on top.
- **Backgrounds:** flat cream paper (`--bg-page`), optionally a faint dot grid (`--pattern-dots`) or grain overlay (`--pattern-grain`) to suggest risograph/pencil texture. Full-bleed illustrations are used as hero/cover art. No gradients except hard-stop stripes.
- **Patterns:** lavender/cream awning stripes (`--pattern-awning`) are the signature decorative band — headers of dialogs, shop pages, promo cards.
- **Imagery:** warm, hand-inked, slightly grainy illustration; flat colour fills with watercolour-ish shading, wobbly outlines, cute animal characters, floating iridescent bubbles. Never photography with cold grading.
- **Hover:** sticker elements lift 1px and their shadow grows to 4px; fills lighten one step (honey-400 → 300). Ghost elements gain a cream-200 fill.
- **Press:** element sinks 3px onto its shadow (shadow → 0) and fill darkens one step — a tactile "stamp".
- **Focus:** 2px cream gap + 2px lavender ring (`--ring-focus`).
- **Disabled:** ink-100 fill, ink-300 outline, ink-500 text, no shadow.
- **Animation:** bouncy overshoot (`--ease-bounce`) for pops — radio dots, switch knobs, tooltips; soft ease for fades. Durations 120/200/360ms. Decorative bubbles may float slowly; UI never spins or slides far.
- **Transparency & blur:** only the modal scrim (`--overlay-scrim`, warm brown 38%). No glassmorphism.
- **Layout:** mobile-first, 20px page gutters, 14–16px gaps between stacked cards. Fixed elements: bottom tab bar and bottom CTA bar, each separated by a 2px ink top rule on cream.
- **Spacing:** 4px base scale (4–64).

## ICONOGRAPHY
- No icon set was supplied. **Substitute: Phosphor Icons** (`@phosphor-icons/web@2.1.1`, loaded via CDN in `tokens/icons.css`). Its rounded terminals match the soft outlines.
- **Bold** weight for all UI chrome (pairs with 2px strokes); **Fill** weight for active/selected (tab bar, favourited heart, toast chips).
- Use through the `Icon` component: `<Icon name="flower-tulip" />`. Icons sit inside round or rounded-square pastel chips with ink outlines when they stand in for imagery (menu items).
- **No emoji.** A few Unicode doodles (♡ ☀ ✎ →) are allowed only inside hand-font notes.
- Never hand-draw SVG illustrations; use real illustration assets or image placeholders.
