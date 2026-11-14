"""Public-deployment hardening: abuse limits and safe headers. Active only when MARSFLEX_PROD=1.

The local launcher (launch.py) never sets that variable, so local use is unchanged.
Everything here is in-memory and dependency-free; it needs no database and no external service.
"""
import os
import time
from collections import defaultdict, deque

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

PROD = os.environ.get('MARSFLEX_PROD') == '1'
# When set, /v1 calls are accepted only from our Cloudflare Worker, which sends this secret (so the public tunnel address is useless on its own).
PROXY_KEY = os.environ.get('MARSFLEX_PROXY_KEY', '')

# (path prefix, requests, seconds). Heavy compute endpoints get the tightest limit.
LIMITS = [
    ('/v1/sites/score', 12, 60),
    ('/v1/mission/', 30, 60),
    ('/v1/evidence/route-trust', 40, 60),
    ('/v1/life-support', 40, 60),
    ('/v1/', 600, 60),   # everything else under the API (images, layers, health)
]
MAX_BODY_BYTES = 256 * 1024          # request bodies are small JSON; refuse anything bigger
_hits: dict[tuple[str, str], deque] = defaultdict(deque)
_last_sweep = [time.monotonic()]


def _client_ip(request: Request) -> str:
    # With the proxy key, the Worker tells us the real visitor address (only trusted when the key matches).
    if PROXY_KEY and request.headers.get('x-mf-key') == PROXY_KEY and request.headers.get('x-mf-client'):
        return request.headers['x-mf-client'].strip()
    # Otherwise: the last X-Forwarded-For entry is the one the host's proxy appended (the first can be forged).
    forwarded = request.headers.get('x-forwarded-for')
    if forwarded:
        return forwarded.split(',')[-1].strip()
    return request.client.host if request.client else 'unknown'


def _limit_for(path: str):
    for prefix, count, window in LIMITS:
        if path.startswith(prefix):
            return prefix, count, window
    return None


def _sweep(now: float) -> None:
    """Drop idle clients so memory cannot grow without bound."""
    if now - _last_sweep[0] < 300:
        return
    _last_sweep[0] = now
    for key in [k for k, d in _hits.items() if not d or now - d[-1] > 300]:
        _hits.pop(key, None)


def harden(app: FastAPI) -> None:
    if not PROD:
        return

    @app.middleware('http')
    async def public_guard(request: Request, call_next):
        path = request.url.path
        # 1. Only the methods the app uses.
        if request.method not in ('GET', 'POST', 'HEAD', 'OPTIONS'):
            return JSONResponse({'detail': 'Method not allowed'}, status_code=405)
        # 2. Refuse oversized bodies before reading them.
        length = request.headers.get('content-length')
        if length and length.isdigit() and int(length) > MAX_BODY_BYTES:
            return JSONResponse({'detail': 'Request too large'}, status_code=413)
        # 2b. Only our Worker may call the API when a proxy key is configured.
        if PROXY_KEY and path.startswith('/v1/') and request.headers.get('x-mf-key') != PROXY_KEY:
            return JSONResponse({'detail': 'Forbidden'}, status_code=403)
        # 3. Per-client rate limit on the API.
        rule = _limit_for(path)
        if rule:
            prefix, count, window = rule
            now = time.monotonic()
            _sweep(now)
            bucket = _hits[(_client_ip(request), prefix)]
            while bucket and now - bucket[0] > window:
                bucket.popleft()
            if len(bucket) >= count:
                return JSONResponse({'detail': 'Too many requests. Please wait a moment and try again.'},
                                    status_code=429, headers={'Retry-After': str(window)})
            bucket.append(now)
        response = await call_next(request)
        # 4. Safe headers on every response.
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
        response.headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=(), payment=()'
        response.headers['Strict-Transport-Security'] = 'max-age=31536000'
        if path.startswith('/v1/'):
            response.headers.setdefault('Cache-Control', 'no-store')
        return response
