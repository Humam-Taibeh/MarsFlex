"""Collect point-of-view rover images for each science station from the public Mars 2020 raw-image feed.

Two steps (the second is a human choice, recorded in the manifest):
  1) `python backend/pipeline/fetch_pov.py candidates`  -> data/derived/pov/candidates.json (+ small preview JPGs)
  2) `python backend/pipeline/fetch_pov.py select <station>=<imageid>[,<imageid>] ...`
        -> data/derived/pov/<imageid>.jpg (800 px browse JPG, as published) and data/derived/pov/manifest.json

Source: NASA Mars 2020 raw images (https://mars.nasa.gov/mars2020/multimedia/raw-images/), credited as published
("NASA/JPL-Caltech" or "NASA/JPL-Caltech/ASU"). Raw, unprocessed engineering/science browse products.
The app never fetches images at runtime; only the stored files are served.
"""
from pathlib import Path
import hashlib, json, sys, urllib.request

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'data/derived/pov'
API = 'https://mars.nasa.gov/rss/api/?feed=raw_images&category=mars2020&feedtype=json&sol={sol}&num=100&page={page}'
# abrasion (PIXL) sol and sampling sol per station, from data/derived/science_targets.json and rover_measurements.json
STATIONS = {'swift-run': ('Swift Run', [484, 490]), 'hazeltop': ('Hazeltop', [505, 509]), 'shuyak': ('Shuyak', [570, 575])}
CAMERAS = {'FRONT_HAZCAM_LEFT_A', 'MCZ_LEFT', 'NAVCAM_LEFT'}


def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'marsflex-pipeline'}), timeout=60) as r:
        return r.read()


def candidates():
    OUT.mkdir(parents=True, exist_ok=True); (OUT / 'preview').mkdir(exist_ok=True)
    found = {}
    for sid, (name, sols) in STATIONS.items():
        rows = []
        for sol in sols:
            for page in range(3):
                data = json.loads(get(API.format(sol=sol, page=page)))
                imgs = data.get('images', [])
                for i in imgs:
                    if i['camera']['instrument'] in CAMERAS and i.get('sample_type') == 'Full':
                        rows.append({'imageid': i['imageid'], 'sol': i['sol'], 'camera': i['camera']['instrument'],
                                     'filter': i['camera'].get('filter_name'), 'date_taken_utc': i['date_taken_utc'],
                                     'credit': i['credit'], 'caption': i['caption'], 'link': i['link'],
                                     'medium': i['image_files']['medium'], 'small': i['image_files']['small'],
                                     'dimension': i.get('extended', {}).get('dimension')})
                if len(imgs) < 100:
                    break
        # keep a manageable, varied set: unique ids, full-size frames, at most 8 per (sol, camera)
        seen, varied, per = set(), [], {}
        for r in rows:
            if r['imageid'] in seen:
                continue
            seen.add(r['imageid'])
            if not (r['dimension'] and int(r['dimension'].strip('()').split(',')[0]) >= 1000):
                continue
            key = (r['sol'], r['camera'])
            if per.get(key, 0) < 8:
                per[key] = per.get(key, 0) + 1; varied.append(r)
        found[sid] = varied
        for r in found[sid]:
            dst = OUT / 'preview' / (r['imageid'] + '.jpg')
            if not dst.exists():
                dst.write_bytes(get(r['small']))
        print(sid, len(rows), 'candidates')
    (OUT / 'candidates.json').write_text(json.dumps(found, indent=1))


def select(pairs):
    found = json.loads((OUT / 'candidates.json').read_text())
    manifest = {'source': 'NASA Mars 2020 raw images, https://mars.nasa.gov/mars2020/multimedia/raw-images/',
                'policy': 'JPL Image Use Policy: https://www.jpl.nasa.gov/jpl-image-use-policy/ ; credit shown with every image; no NASA endorsement implied.',
                'note': 'Raw, unprocessed rover images taken at or next to the station. They show the rover viewpoint, not an astronaut viewpoint.',
                'stations': {}}
    for pair in pairs:
        sid, ids = pair.split('=', 1)
        name = STATIONS[sid][0]; entries = []
        for imageid in ids.split(','):
            r = next(x for x in found[sid] if x['imageid'] == imageid)
            raw = get(r['medium']); dst = OUT / (imageid + '.jpg'); dst.write_bytes(raw)
            entries.append({**{k: r[k] for k in ('imageid', 'sol', 'camera', 'filter', 'date_taken_utc', 'credit', 'caption', 'link')},
                            'file': dst.name, 'sha256': hashlib.sha256(raw).hexdigest(), 'bytes': len(raw)})
        manifest['stations'][sid] = {'name': name, 'images': entries}
    (OUT / 'manifest.json').write_text(json.dumps(manifest, indent=1))
    print(json.dumps({k: [e['file'] for e in v['images']] for k, v in manifest['stations'].items()}, indent=1))


if __name__ == '__main__':
    if sys.argv[1:2] == ['candidates']:
        candidates()
    elif sys.argv[1:2] == ['select']:
        select(sys.argv[2:])
    else:
        print(__doc__)
