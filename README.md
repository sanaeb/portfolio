# Portfolio — Sanae Boutarfass

Site portfolio personnel — bilingue FR/EN, dark theme, déployé en statique.

🔗 **Production** : https://sanae.dev *(à mettre à jour une fois deployé)*

## Stack

- [Astro 6](https://astro.build/) (SSG, zero JS runtime by default)
- [Tailwind v4](https://tailwindcss.com/) (CSS-first config, `@theme` tokens)
- TypeScript strict
- Inter font (rsms.me/inter)
- i18n maison via dict typé (`src/i18n/translations.ts`)
- View transitions (`<ClientRouter />`)

## Structure

```
src/
├── i18n/translations.ts        # Single source of truth FR + EN + site config
├── components/
│   ├── pages/                  # Templates partagés FR/EN (HomePage, etc.)
│   ├── Header, Footer, LangSwitcher, NowRow, …
│   └── …
├── layouts/Layout.astro        # Layout principal (head, meta, OG, transitions)
├── styles/global.css           # Tokens Tailwind + utilities (glass-card, btn, …)
└── pages/                      # Routes FR (sans préfixe)
    ├── index.astro             # /
    ├── experience.astro        # /experience
    ├── projects/…
    ├── about.astro
    ├── 404.astro
    └── en/                     # Routes EN (préfixe /en/)
        └── …

public/
├── favicon.svg                 # SB monogram + violet gradient
├── og-image.svg                # 1200×630, social preview
├── robots.txt
├── sitemap.xml
└── cv/
    ├── sanae-boutarfass-cv-fr.pdf
    └── sanae-boutarfass-cv-en.pdf
```

## Dev local

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # → dist/
npm run preview      # preview du build
npx astro check      # type-check
```

## Déploiement — Cloudflare Pages

### Option A — via GitHub (recommandé)

1. Crée un repo sur GitHub (privé ou public).
2. Push le projet :
   ```bash
   git remote add origin git@github.com:<ton-username>/portfolio.git
   git push -u origin main
   ```
3. Va sur https://dash.cloudflare.com/ → **Pages** → **Create a project** → **Connect to Git**.
4. Configuration build :
   - **Framework preset** : Astro
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Node version** : 22
5. Deploy → tu obtiens `https://<project>.pages.dev`.
6. Custom domain (optionnel) : Pages → ton projet → Custom domains → ajouter `sanae.dev`.

### Option B — CLI directe (sans GitHub)

```bash
npx wrangler login           # auth Cloudflare la première fois
npm run build
npx wrangler pages deploy dist --project-name=sanae-portfolio
```

## Mettre à jour le contenu

- **Strings FR/EN** → `src/i18n/translations.ts` (seul fichier à toucher).
- **CV PDF** → remplacer les fichiers dans `public/cv/`.
- **Photo de profil** → quand tu en as une, remplace `<Avatar />` par un `<img>` dans `AboutPage.astro` et `HomePage.astro`.
- **Lien GitHub** → `siteConfig.github` dans `translations.ts`.
- **URL prod** → `siteConfig.url` dans `translations.ts` (sert pour canonical, og:url, sitemap).

## License

Personal portfolio — code source disponible pour inspiration. Le contenu (texte, CV, identité) reste personnel.
