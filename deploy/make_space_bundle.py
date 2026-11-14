"""Assemble a self-contained folder to publish on a free Hugging Face Docker Space.

Run from the repo root:   python deploy/make_space_bundle.py
Result: deploy/_space/   (git-ignored). Upload that folder to the Space; nothing else is needed.

It copies only what the running site needs (API code, built frontend, derived data) from the
git-tracked tree, so private files, caches, tests and the 12 GB Viking mosaic never leave your machine.
"""
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'deploy' / '_space'
KEEP_PREFIXES = ('backend/requirements-tested.txt', 'data/', 'LICENSE')
SKIP_PARTS = ('__pycache__', '/tests/', '.pyc')

DOCKERFILE = """FROM python:3.12-slim
ENV MARSFLEX_PROD=1 PYTHONUNBUFFERED=1 PIP_NO_CACHE_DIR=1
RUN useradd -m -u 1000 user
WORKDIR /home/user/app
COPY --chown=user backend/requirements-tested.txt backend/requirements-tested.txt
RUN pip install -r backend/requirements-tested.txt
COPY --chown=user . .
USER user
EXPOSE 7860
CMD ["uvicorn", "marsflex.api:app", "--app-dir", "backend", "--host", "0.0.0.0", "--port", "7860", "--proxy-headers", "--forwarded-allow-ips", "*"]
"""

README = """---
title: MarsFlex
emoji: 🚀
colorFrom: yellow
colorTo: gray
sdk: docker
app_port: 7860
pinned: false
license: apache-2.0
short_description: Plan a Marswalk in Jezero Crater before the first step
---

# MarsFlex

Plan a Marswalk in Jezero Crater: choose a site, find the fastest safe route, count oxygen and suit time,
and see what the Perseverance rover photographed there.

A planning scenario, not flight-certified. Built on public NASA and USGS data.
Source code and documentation: https://github.com/MhmdAbuQutah/MarsFlex
"""


def tracked_files():
    out = subprocess.run(['git', 'ls-files'], cwd=ROOT, capture_output=True, text=True, check=True).stdout
    return [f for f in out.splitlines() if f.startswith(KEEP_PREFIXES) and not any(s in f for s in SKIP_PARTS)]


def main():
    if not (ROOT / 'frontend' / 'dist' / 'index.html').exists():
        sys.exit('frontend/dist is missing. Build it first:  cd frontend && npm ci && npm run build')
    if OUT.exists():
        shutil.rmtree(OUT)
    total = 0
    for rel in tracked_files():
        src, dst = ROOT / rel, OUT / rel
        if not src.is_file():
            continue
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        total += src.stat().st_size
    # The API code and the built frontend are copied as they are on disk (file names and new modules change).
    shutil.copytree(ROOT / 'backend' / 'marsflex', OUT / 'backend' / 'marsflex', ignore=shutil.ignore_patterns('__pycache__', '*.pyc'))
    # The built frontend is copied as it is on disk (its file names change with every build).
    shutil.copytree(ROOT / 'frontend' / 'dist', OUT / 'frontend' / 'dist', ignore=shutil.ignore_patterns('*.map'))
    total += sum(f.stat().st_size for f in (OUT / 'frontend' / 'dist').rglob('*') if f.is_file())
    (OUT / 'Dockerfile').write_text(DOCKERFILE, encoding='utf-8', newline='\n')
    (OUT / 'README.md').write_text(README, encoding='utf-8', newline='\n')
    (OUT / '.dockerignore').write_text('__pycache__/\n*.pyc\n', encoding='utf-8', newline='\n')
    print(f'Space bundle ready: {OUT}  ({total / 1e6:.0f} MB)')


if __name__ == '__main__':
    main()
