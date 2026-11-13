"""Final exact regression. No sensitivity ensemble is run."""
from pathlib import Path
import argparse, ast, hashlib, json, platform, sys, types, zipfile
import importlib.metadata as md

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT))
import api

def main():
    p = argparse.ArgumentParser()
    p.add_argument('--original-zip', type=Path, required=True)
    args = p.parse_args()
    protected = {
        'terrain.py': 'e157d283da63b59638175eca24a8c8c4224d09d6a2c8c8c27d007f0e02b60436',
        'frontend/src/geoscene.ts': 'ed66474ce73cd2aa53a6c43d1a18a85f23afadbde3f8e09b06d9ad99957afbc4',
    }
    hashes = {f: hashlib.sha256((ROOT/f).read_bytes()).hexdigest() for f in protected}
    assert hashes == protected
    pins = {}
    for line in (ROOT/'requirements-tested.txt').read_text().splitlines():
        if '==' in line and not line.startswith('#'):
            n, v = line.split('=='); pins[n] = md.version(n)
            assert pins[n] == v, (n, pins[n], v)
    req = json.loads((ROOT/'analysis/results_2026_10_05/delta_request.json').read_text())
    with zipfile.ZipFile(args.original_zip) as z: oldbytes = z.read('api.py')
    old = types.ModuleType('original_v010_final_check')
    old.__file__ = str(ROOT/'api.py'); sys.modules[old.__name__] = old
    exec(compile(oldbytes, old.__file__, 'exec'), old.__dict__)
    a = old.evaluate(old.Mission(**req))
    b = api.evaluate(api.Mission(**req))
    assert a == b
    assert b['mission']['profile']['distance_m'] == 4019.7137875635854
    assert b['mission']['travel_min'] == 143.4349420073279
    def definitions(src):
        return {n.name: ast.dump(n, include_attributes=False) for n in ast.parse(src).body
                if isinstance(n, (ast.FunctionDef, ast.ClassDef))}
    od, nd = definitions(oldbytes), definitions((ROOT/'api.py').read_text())
    assert all(nd[k] == v for k,v in od.items())
    out = {'passed': True, 'python': platform.python_version(), 'platform': platform.platform(),
        'distance_m': b['mission']['profile']['distance_m'], 'travel_min': b['mission']['travel_min'],
        'complete_original_v010_api_response_exactly_equal': a == b,
        'all_original_v010_api_definitions_ast_identical': True,
        'protected_sha256': hashes, 'pinned_packages_matched': len(pins),
        'sensitivity_cases_rerun': 0,
        'v09_scope': 'Exact user-supplied Delta numeric reference. Full historical v0.9 response NOT FOUND in this check.'}
    (ROOT/'review/final/regression.json').write_text(json.dumps(out, indent=2))
    (ROOT/'review/final/runtime.json').write_text(json.dumps({'python':sys.version,'platform':platform.platform(),'packages':pins},indent=2))
    print(json.dumps(out, indent=2))

if __name__ == '__main__': main()
