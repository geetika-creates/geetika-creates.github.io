# Geetika Tripathi — Portfolio

Modern personal site built with **Jekyll** for **GitHub Pages**.

## Local preview

```bash
bundle install
bundle exec jekyll serve
# open http://127.0.0.1:4000
```

If you don't want to install Ruby/Jekyll locally, you can also just open `index.html` in a browser — it works as a static page (the Jekyll layout will not be applied, but you can use it for a quick visual check by inlining the layout).

## Deploy to GitHub Pages

### Option A — User site (recommended)

1. Create a public repo named exactly `<your-username>.github.io` (e.g. `geetika-tripathi.github.io`).
2. Push the contents of this folder to that repo's `main` branch:
   ```bash
   cd geetika-portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In GitHub: **Settings → Pages → Build and deployment → Source: Deploy from branch → Branch: main / root**.
4. Visit `https://<your-username>.github.io` — your site is live.

### Option B — Project site

1. Push to any repo, e.g. `portfolio`.
2. In `_config.yml`, set:
   ```yaml
   baseurl: "/portfolio"
   ```
3. Enable Pages in repo settings (same as above).
4. Site will be at `https://<your-username>.github.io/portfolio`.

## Customize

- `_config.yml` — name, social links, description.
- `index.html` — all sections content.
- `assets/css/style.css` — colors, type, spacing.
- `assets/js/main.js` — small interactions.

The color palette is defined as CSS variables at the top of `style.css` (`--accent`, `--accent-3`, etc.) — change them once and the whole site updates.

## Update content later

The site reads content directly from `index.html`. To add a new role, drop another `<li class="timeline-item">…</li>` into the `#experience` section. To add a publication, copy a `.content-card`. Everything is plain HTML/Markdown — no build complexity beyond Jekyll's defaults.
