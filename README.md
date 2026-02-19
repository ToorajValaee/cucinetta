# Cucinetta - Static Site

Minimal static site for the restaurant *Cucinetta*.

Files:
- `index.html` — main site (Persian, RTL)
- `styles.css` — styles and font-face
- `script.js` — small client JS
- `assets/logo.svg` — placeholder logo

Setup:
1. Place your `Morabba` font files at `fonts/Morabba.woff2` (or update `styles.css` to your font filenames).
2. Replace phone numbers, address text, and Instagram URL in `index.html`.

Deploying to Cloudflare Pages:
1. Create a new Pages site and connect the repository.
2. Build command: (none) — this is static. Set `Build output directory` to `/` or leave empty.
3. Configure the custom domain `cucinetta.ir` in Cloudflare and add a CNAME to the Pages site.

SEO notes:
- `index.html` includes basic OG and meta tags and an `author` meta set to `Tooraj Valaee`.
- Update page description and OG image when you have production assets.

Mobile behavior:
- Quick call button uses `tel:` so tapping calls the number on supported devices.
- Directions button opens Google Maps with the sample address.

Replace placeholders and preview locally with a static server, for example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
# cucinetta