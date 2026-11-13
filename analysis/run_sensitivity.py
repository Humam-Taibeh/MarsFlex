"""Opt-in finite-grid analysis. Never imported by the application. Not executed before user approval."""
from pathlib import Path
import argparse,hashlib,itertools,json,sys
ROOT=Path(__file__).resolve().parents[1]
def run():
    p=argparse.ArgumentParser();p.add_argument('--proposal',type=Path,default=Path(__file__).with_name('sensitivity_proposal.json'));p.add_argument('--approved-sha256',required=True,help='Exact proposal-file SHA256, supplied only after the user explicitly approves its ranges');p.add_argument('--output',type=Path,required=True);args=p.parse_args()
    raw=args.proposal.read_bytes();digest=hashlib.sha256(raw).hexdigest()
    if args.approved_sha256!=digest:p.error('Approval does not match the exact proposed ranges. No analysis run.')
    conf=json.loads(raw);axes=conf['axes'];fixed=conf['fixed'];names=['speed_m_s','slope_penalty_multiplier','slope_gate_deg','station_dwell_min','reserve_min']
    if len(names)!=len(axes):raise ValueError('Unexpected parameter axis; review proposal first')
    terrain_digest=hashlib.sha256((ROOT/'terrain.py').read_bytes()).hexdigest()
    if terrain_digest!='e157d283da63b59638175eca24a8c8c4224d09d6a2c8c8c27d007f0e02b60436':raise ValueError('Protected terrain engine changed; stop')
    # Heavy imports and all calculations occur only after the explicit approval digest gate.
    import numpy as np
    sys.path.insert(0,str(ROOT));from marsflex.terrain import Terrain,Model
    z=np.load(ROOT/'data/derived/elevation.npy');meta=json.loads((ROOT/'data/derived/grid.json').read_text());green_count=np.zeros(z.shape,dtype=np.uint16);classified_count=np.zeros(z.shape,dtype=np.uint16);records=[]
    for speed,penalty,gate in itertools.product(*(axes[k]['values'] for k in names[:3])):
        model=Model(speed_m_s=speed,uphill_weight=4*penalty,downhill_weight=2*penalty,max_grade_deg=gate,max_surface_slope_deg=gate);t=Terrain(z,meta,model)
        nodes=None;blocked_reason=None
        try:nodes=[t.node(fixed['position']['lon'],fixed['position']['lat']),t.node(fixed['habitat']['lon'],fixed['habitat']['lat'])]+[t.node(a['lon'],a['lat']) for a in fixed['activities']]
        except ValueError as e:blocked_reason=str(e)
        for dwell,reserve in itertools.product(*(axes[k]['values'] for k in names[3:])):
            row={'parameters':dict(zip(names,[speed,penalty,gate,dwell,reserve]))}
            if nodes is None:
                row.update(status='required_location_blocked_or_outside_grid',reason=blocked_reason,green_cells=0,classified_cells=0)
            else:
                field=t.field(nodes[0],nodes[1],[(n,dwell) for n in nodes[2:]],fixed['remaining_min'],reserve,fixed['detour_dwell_min']);labels=field['labels'];green=labels==3;classified=labels>0;green_count+=green;classified_count+=classified;row.update(status='computed',green_cells=int(green.sum()),classified_cells=int(classified.sum()),domain_boundary_reachable=bool(field['boundary_reachable']))
            records.append(row)
    count=len(records);all_green=green_count==count;some_green=(green_count>0)&~all_green
    args.output.mkdir(parents=True,exist_ok=False)
    np.savez_compressed(args.output/'freedom_sensitivity.npz',green_in_all=all_green,green_in_some=some_green,green_count=green_count,classified_count=classified_count)
    report={'status':'completed_after_explicit_approval','proposal_sha256':digest,'terrain_sha256':terrain_digest,'grid':meta,'fixed':fixed,'axes':axes,'combinations':count,'green_in_all_cells':int(all_green.sum()),'green_in_some_cells':int(some_green.sum()),'records':records,'interpretation':conf['interpretation'],'warning':'No changes to live routes, class labels or original colors. Counts are finite-grid sensitivity, not probabilities. Missing/infeasible cases contribute no green cells.'}
    (args.output/'sensitivity_report.json').write_text(json.dumps(report,indent=2));print(json.dumps({k:report[k] for k in ['combinations','green_in_all_cells','green_in_some_cells']},indent=2))
if __name__=='__main__':run()
