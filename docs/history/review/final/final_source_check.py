"""Read saved evidence and hash files. Never executes sensitivity cases."""
from pathlib import Path
import hashlib, json, sys
import numpy as np

R=Path(__file__).resolve().parents[2]
before=json.loads((R/'review/final/before_hashes.json').read_text())
sha=lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
protected=['terrain.py','frontend/src/geoscene.ts','api.py','geo_models.py','route_trust.py','meda_archive.py','launch.py']
for f in protected: assert sha(R/f)==before[f],f
science={f:h for f,h in before.items() if f.startswith('data/source/') or (f.startswith('data/derived/') and f.endswith(('.npy','.tif','.f32','.jpg','.png')))}
changed=[f for f,h in science.items() if sha(R/f)!=h];assert not changed,changed
d=R/'analysis/results_2026_10_05';v=json.loads((d/'verification.json').read_text())
with np.load(d/'freedom_sensitivity.npz') as z:
    print('Stored NPZ keys:',', '.join(z.files))
    green=z['green_count'];count=int(np.count_nonzero(green==162));union=int(np.count_nonzero(green>0))
baseline=int(np.count_nonzero(np.load(d/'baseline_labels.npy')==3))
assert (count,baseline,union)==(6352,29068,66438)
assert sha(d/'freedom_sensitivity.npz')==before['analysis/results_2026_10_05/freedom_sensitivity.npz']
out={'passed':True,'protected_files_unchanged':{f:sha(R/f) for f in protected},'source_and_science_assets_checked':len(science),'source_or_science_assets_changed':changed,'robust_core_cells':count,'baseline_green_cells':baseline,'optimistic_union_cells':union,'sensitivity_npz_unchanged':True,'sensitivity_cases_rerun':0,'monotonicity_comparisons_from_saved_verification':v['monotonicity']['comparisons'],'monotonicity_violations_from_saved_verification':v['monotonicity']['violations']}
(R/'review/final/source_integrity.json').write_text(json.dumps(out,indent=2));print(json.dumps(out,indent=2))
