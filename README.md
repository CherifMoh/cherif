# Portfolio

React app lives at the **repo root** (`My potfolio` folder).

## Commands

```bash
npm install
npm start      # or: npm run dev
npm run build
npm run deploy # publishes build/ to gh-pages branch
```

Repo: [CherifMoh/cherif](https://github.com/CherifMoh/cherif)

## Deploy

### Vercel

`package.json` uses `"homepage": "."` so JS/CSS load with **relative** paths (fixes a blank page when assets were built for `/cherif/`).

`vercel.json` rewrites all paths to `index.html` for client-side routing if you add React Router later.

### GitHub Pages (project site under `/cherif/`)

Build with a base path, then deploy:

```bash
set PUBLIC_URL=/cherif/
npm run build
npx gh-pages -d build
```

(On macOS/Linux: `PUBLIC_URL=/cherif/ npm run build`)
