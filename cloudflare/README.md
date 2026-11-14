# MarsFlex on Cloudflare

`build/` (repo root) is the site. `worker.js` serves it and forwards every `/v1/*` call to the Python API.
Cloudflare Workers cannot run the Python maths (NumPy, SciPy, rasterio), so the API runs on the free
Hugging Face Space from `deploy/DEPLOY.md`, and the Worker is the single public address in front of both.

## 1) Build the site into `build/`

```
cd frontend
npm ci
npm run build:cf
```

Result: `build/` with 394 files, 12 MB, no source maps (largest file 4.3 MB, inside Cloudflare's 25 MiB limit).

## 2) Put the API address in `wrangler.jsonc`

Publish the API first (`python deploy/make_space_bundle.py`, then see `deploy/DEPLOY.md`).
Then set `API_ORIGIN` in `cloudflare/wrangler.jsonc` to `https://YOUR-NAME-marsflex.hf.space`.

## 3) Deploy

```
cd cloudflare
npx wrangler login
npx wrangler deploy
```

You get `https://marsflex.<your-subdomain>.workers.dev`. Free plan, no card needed.

## Test locally first (optional)

```
python launch.py                       # or: uvicorn marsflex.api:app --app-dir backend --port 8791
cd cloudflare
npx wrangler dev --local --var API_ORIGIN:http://127.0.0.1:8791
```

Checked this way: the home page, the Cesium files, `/v1/*` forwarding and the full browser walk-through (globe, descend, walk, stop) all work with no console errors.

## Cloudflare Pages (no workers.dev subdomain needed)

This is how the first deploy was done: https://marsflex.pages.dev

```
cp cloudflare/worker.js build/_worker.js        # "advanced mode": Pages runs this file in front of the static files
npx wrangler pages deploy build --project-name marsflex --branch main
```

Set the API address once: dashboard → Workers & Pages → marsflex → Settings → Variables and Secrets → add
`API_ORIGIN` = `https://YOUR-NAME-marsflex.hf.space` (Production), then deploy again.
Credentials go in the environment (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`), never in files.
