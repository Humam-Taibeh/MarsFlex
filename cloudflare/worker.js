// MarsFlex on Cloudflare: the static site (../build) is served by Workers Static Assets,
// and every /v1/* call is forwarded to the Python API (the Hugging Face Space, see deploy/DEPLOY.md).
// The browser only ever talks to this one address, so nothing needs CORS and the API address stays out of the page.

const CACHEABLE = ['/v1/pov/image/', '/v1/map/image/', '/v1/terrain/surface', '/v1/layers/'];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith('/v1/')) {
      return env.ASSETS.fetch(request);            // static files (only reached if run_worker_first lets it through)
    }
    if (!env.API_ORIGIN || env.API_ORIGIN.includes('YOUR-')) {
      return new Response(JSON.stringify({ detail: 'API_ORIGIN is not set (the Python API address)' }), {
        status: 503, headers: { 'content-type': 'application/json' } });
    }
    if (!['GET', 'HEAD', 'POST', 'OPTIONS'].includes(request.method)) {
      return new Response(JSON.stringify({ detail: 'Method not allowed' }), { status: 405, headers: { 'content-type': 'application/json' } });
    }
    const upstream = new URL(url.pathname + url.search, env.API_ORIGIN);
    const headers = new Headers(request.headers);
    headers.delete('cookie');                       // the app has no accounts; never forward cookies
    headers.set('x-forwarded-for', request.headers.get('cf-connecting-ip') || '');
    if (env.PROXY_KEY) {                            // proves to the API that this call came from our Worker
      headers.set('x-mf-key', env.PROXY_KEY);
      headers.set('x-mf-client', request.headers.get('cf-connecting-ip') || '');
    }
    const cacheable = request.method === 'GET' && CACHEABLE.some((p) => url.pathname.startsWith(p));
    const response = await fetch(upstream, {
      method: request.method,
      headers,
      body: request.method === 'POST' ? request.body : undefined,
      cf: cacheable ? { cacheEverything: true, cacheTtl: 3600 } : undefined,
    });
    const out = new Response(response.body, response);
    out.headers.set('X-Content-Type-Options', 'nosniff');
    out.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    return out;
  },
};
