"""USGS STAC discovery and PDS PLACES ingestion, with explicit quality gates.

Catalog footprints are Mars planetocentric longitude/latitude, NOT Earth GeoJSON.
Discovery is not raster validation, and catalog timestamps are not necessarily
image acquisition times. Source responses are retained unchanged and hashed.
"""
from pathlib import Path
from datetime import datetime, timezone
from collections import Counter
import csv
import hashlib
import json
import math
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor

import numpy as np
from shapely.geometry import shape, box, mapping
from shapely.ops import unary_union
from pyproj import CRS

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / 'data/source'
OUT = ROOT / 'data/derived'
API = 'https://stac.astrogeology.usgs.gov/api'
COLLECTIONS = ['mro_hirise_socet_dtms', 'mro_ctx_controlled_usgs_dtms',
               'mro_hirise_uncontrolled_observations', 'mo_themis_controlled_mosaics']
PLACES = 'https://pds-geosciences.wustl.edu/m2020/urn-nasa-pds-mars2020_rover_places/'


def now():
    return datetime.now(timezone.utc).isoformat()


def digest(path):
    return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def fetch(url, destination, refresh=False):
    """Cache only when a stored URL AND SHA agree. Never accept partial downloads."""
    destination = Path(destination)
    destination.parent.mkdir(parents=True, exist_ok=True)
    receipt = destination.with_name(destination.name + '.receipt.json')
    if not refresh and destination.exists() and receipt.exists():
        old = json.loads(receipt.read_text())
        if old['url'] == url and old['sha256'] == digest(destination):
            return old
    with urllib.request.urlopen(url, timeout=45) as response:
        data = response.read()
        length = response.headers.get('Content-Length')
        if length is not None and int(length) != len(data):
            raise ValueError('Truncated source response')
        record = {'url': url, 'retrieved_utc': now(), 'bytes': len(data),
                  'sha256': hashlib.sha256(data).hexdigest(),
                  'last_modified': response.headers.get('Last-Modified')}
    destination.write_bytes(data)
    receipt.write_text(json.dumps(record, indent=2))
    return record


def collect(collection, aoi, refresh=False):
    url = API + '/search?' + urllib.parse.urlencode({
        'collections': collection, 'bbox': ','.join(map(str, aoi)), 'limit': 100})
    items, visited, receipts = {}, set(), []
    matched = None
    # Local paths include the query key; changing the AOI cannot reuse stale pages.
    key = hashlib.sha256(url.encode()).hexdigest()[:12]
    for page in range(1, 101):
        if url in visited:
            raise ValueError('STAC pagination repeated a URL')
        visited.add(url)
        path = SRC / 'catalog' / key / f'{collection}_{page}.json'
        receipts.append(fetch(url, path, refresh=refresh))
        data = json.loads(path.read_text())
        if data.get('type') != 'FeatureCollection':
            raise ValueError('Expected STAC FeatureCollection')
        if matched is None:
            matched = data.get('numberMatched')
        features = data['features']
        for item in features:
            if item.get('collection') != collection:
                raise ValueError('Unexpected collection in response')
            if item['id'] in items:
                raise ValueError('Duplicate STAC product across pages')
            items[item['id']] = item
        next_link = next((x for x in data.get('links', []) if x['rel'] == 'next'), None)
        if not features or not next_link:
            break
        if next_link.get('method', 'GET') != 'GET':
            raise ValueError('Unsupported pagination method; collection not complete')
        url = next_link['href']
    else:
        raise ValueError('Pagination limit reached; collection not complete')
    if matched is not None and len(items) != matched:
        raise ValueError(f'Expected {matched} products, received {len(items)}')
    return {'collection': collection, 'matched': matched, 'received': len(items),
            'complete': True, 'receipts': receipts, 'items': list(items.values())}


def normalize(item):
    prop = item['properties']
    flags = []
    geometry = shape(item['geometry'])
    bounds = geometry.bounds
    geometry_ok = (not geometry.is_empty and geometry.is_valid and len(bounds) == 4
                   and all(math.isfinite(v) for v in bounds)
                   and -180 <= bounds[0] <= bounds[2] <= 360
                   and -90 <= bounds[1] <= bounds[3] <= 90)
    if not geometry_ok:
        flags.append('invalid_planetary_footprint')
    supplied = item.get('bbox', [])
    if len(supplied) != 4 or not np.allclose(supplied, bounds, atol=1e-5):
        flags.append('source_bbox_disagrees_with_geometry_use_geometry_bounds')
    start, end = prop.get('start_datetime'), prop.get('end_datetime')
    if start and end and datetime.fromisoformat(start.replace('Z', '+00:00')) > datetime.fromisoformat(end.replace('Z', '+00:00')):
        flags.append('source_time_interval_reversed')
    # All non-image timestamps stay source metadata until their meaning is checked.
    timestamp_role = ('observation_time_from_catalog' if item['collection'] ==
                      'mro_hirise_uncontrolled_observations' else 'catalog_time_semantics_unverified')
    wkt = prop.get('proj:wkt2')
    wkt_valid = False
    if wkt:
        try:
            wkt_valid = 'Mars' in CRS.from_wkt(wkt).name
        except Exception:
            flags.append('source_wkt_not_parseable')
    projjson_valid = False
    try:
        projjson_valid = 'Mars' in CRS.from_json_dict(prop['proj:projjson']).name
    except Exception:
        flags.append('source_projjson_not_parseable_or_not_mars')
    if 'uncontrolled' in item['collection']:
        flags.append('uncontrolled_image_registration_required')
    if 'themis' in item['collection']:
        flags.append('qualitative_ir_mosaic_not_temperature_or_weather')
    if 'dtms' in item['collection']:
        flags.append('raster_vertical_reference_and_valid_pixels_not_yet_verified')
    return {'id': item['id'], 'collection': item['collection'], 'body': 'Mars',
            'title': prop.get('title', item['id']), 'missions': prop.get('missions', []),
            'instruments': prop.get('instruments', []), 'geometry': item['geometry'],
            'bounds_lonlat': list(bounds) if geometry_ok else None,
            'geometry_usable_for_discovery': geometry_ok,
            'source_bbox': supplied, 'sample_spacing_m': prop.get('gsd'),
            'source_time': {'datetime': prop.get('datetime'), 'start': start, 'end': end,
                            'role': timestamp_role},
            'assets': item.get('assets', {}), 'links': item.get('links', []),
            'license': prop.get('license'), 'description': prop.get('description'),
            'source_crs': {'wkt': wkt, 'projjson': prop.get('proj:projjson'),
                           'wkt_parseable_as_mars': wkt_valid, 'projjson_parseable_as_mars': projjson_valid},
            'quality_flags': flags, 'status': 'catalogued_not_ingested',
            'approved_for_routing': False}


def build_places(refresh=False):
    folder = SRC / 'places'
    files = ['data_localizations/best_tactical.csv', 'data_localizations/best_tactical.csv.xml',
             'data_localizations/view_metadata.csv', 'data_localizations/view_metadata.csv.xml',
             'document/Mars2020_Rover_PLACES_PDS_SIS.pdf']
    receipts = [fetch(PLACES + name, folder / name.split('/')[-1], refresh=refresh) for name in files]
    label = ET.parse(folder / 'best_tactical.csv.xml').getroot()
    ns = {'p': 'http://pds.nasa.gov/pds4/pds/v1'}
    expected = int(label.findtext('.//p:Table_Delimited/p:records', namespaces=ns))
    lid = label.findtext('.//p:logical_identifier', namespaces=ns)
    version = label.findtext('.//p:version_id', namespaces=ns)
    rows = list(csv.DictReader((folder / 'best_tactical.csv').open()))
    if len(rows) != expected:
        raise ValueError('PLACES CSV row count differs from PDS label')
    records = []
    for line, row in enumerate(rows, 2):
        if row['frame'] != 'ROVER' or int(row['sol']) < 0:
            continue
        lon, lat = float(row['longitude']), float(row['planetocentric_latitude'])
        if not (0 <= lon < 360 and -90 <= lat <= 90):
            raise ValueError('Invalid PLACES angular coordinates')
        # Independent consistency check against documented projected coordinates.
        lat_check = math.degrees(float(row['northing']) / 3396190)
        lon_check = math.degrees(float(row['easting']) / (3396190 * math.cos(math.radians(18.4663))))
        if abs(lat-lat_check) > 2e-8 or abs(lon-lon_check) > 2e-8:
            raise ValueError('PLACES coordinate conventions do not match SIS')
        site, drive = int(row['site']), int(row['drive'])
        records.append({'id': f'places-tactical-{site}-{drive}', 'site': site, 'drive': drive,
                        'pose': int(row['pose']), 'sol': int(row['sol']), 'sclk': int(row['sclk']),
                        'lon': lon, 'lat': lat, 'elevation_m': float(row['elevation']),
                        'source_line': line, 'lidvid': f'{lid}::{version}',
                        'site_origin_convenience_entry': drive == 0,
                        'kind': 'localized_rover_position'})
    if len({r['id'] for r in records}) != len(records):
        raise ValueError('Duplicate rover localization keys')
    records.sort(key=lambda r: (r['sclk'], r['site'], r['drive']))
    result = {'body': 'Mars', 'coordinate_system': 'planetocentric latitude, east longitude in degrees',
              'source_url': PLACES + files[0], 'lidvid': f'{lid}::{version}',
              'source_rows': len(rows), 'rover_records': len(records), 'receipts': receipts,
              'scope': 'Sparse corrected locations; no straight segments asserted as actual traverse. '
                       'Elevations are sampled from the source HiRISE DEM, not independent height measurements. '
                       'No rover position is automatically a science target or a human traversability label.',
              'records': records}
    (OUT / 'places.json').write_text(json.dumps(result, indent=2))
    return result


def main():
    import argparse
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--refresh', action='store_true', help='Refresh source snapshots instead of reusing verified cache')
    args = parser.parse_args()
    grid = json.loads((OUT / 'grid.json').read_text())
    aoi = grid['aoi_lonlat']
    with ThreadPoolExecutor(max_workers=4) as pool:
        collections = list(pool.map(lambda c: collect(c, aoi, refresh=args.refresh), COLLECTIONS))
    items = [normalize(x) for c in collections for x in c['items']]
    places = build_places(refresh=args.refresh)
    envelope = box(*aoi)
    summaries = []
    for c in collections:
        group = [i for i in items if i['collection'] == c['collection']]
        valid = [shape(i['geometry']).intersection(envelope) for i in group if i['geometry_usable_for_discovery']]
        cover = unary_union(valid) if valid else box(0, 0, 0, 0)
        summaries.append({'collection': c['collection'], 'products': len(group), 'pagination_complete': c['complete'],
                          'footprint_coverage_fraction_angular_area': cover.area / envelope.area,
                          'scope': 'Catalog footprints only; does not measure valid raster pixels or metric area.',
                          'quality_flag_counts': dict(Counter(f for i in group for f in i['quality_flags']))})
    within = [r for r in places['records'] if aoi[0] <= r['lon'] <= aoi[2] and aoi[1] <= r['lat'] <= aoi[3]]
    output = {'schema_version': 'marsflex-catalog-1', 'generated_utc': now(), 'body': 'Mars',
              'coordinate_system': 'planetocentric latitude / positive east longitude, degrees; not Earth WGS84',
              'aoi_lonlat': aoi, 'items': items, 'collection_summaries': summaries,
              'discovery_receipts': [{k: v for k, v in c.items() if k != 'items'} for c in collections]}
    (OUT / 'catalog.json').write_text(json.dumps(output, indent=2))
    report = {'aoi_lonlat': aoi, 'catalog_products': len(items), 'collections': summaries,
              'places_source_rows': places['source_rows'], 'places_rover_records': len(places['records']),
              'places_in_aoi': len(within), 'places_sol_range_in_aoi': [min(r['sol'] for r in within), max(r['sol'] for r in within)] if within else None,
              'downloaded_vs_catalogued': 'STAC items are metadata and links. PLACES CSV is ingested. No STAC raster automatically enters routing.'}
    (OUT / 'catalog_report.json').write_text(json.dumps(report, indent=2))
    print(json.dumps(report, indent=2))


if __name__ == '__main__':
    main()
