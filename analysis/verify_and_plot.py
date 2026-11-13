"""Verify stored results and redraw them. NEVER imports or calls a routing engine."""
import argparse,hashlib,importlib.metadata,itertools,json,sys
from pathlib import Path
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.colors import LightSource
from matplotlib.patches import Rectangle


def digest(p):return hashlib.sha256(p.read_bytes()).hexdigest()

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--project',type=Path,required=True)
    parser.add_argument('--results',type=Path,required=True)
    parser.add_argument('--require-tested',action='store_true')
    a=parser.parse_args();project=a.project.resolve();out=a.results.resolve()
    report=json.loads((out/'sensitivity_report.json').read_text())
    old=json.loads((out/'verification.json').read_text())
    data=np.load(out/'freedom_sensitivity.npz');baseline=np.load(out/'baseline_labels.npy')
    computed=[r for r in report['records'] if r['status']=='computed'];n=len(computed)
    assert n==162 and len(report['records'])==243
    g=data['green_count'];assert g.shape==baseline.shape
    assert np.all(g<=data['classified_count']) and int(g.max())<=n
    assert int(g.sum())==sum(r['green_cells'] for r in computed)
    assert int(data['classified_count'].sum())==sum(r['classified_cells'] for r in computed)
    core=g==n;union=g>0;core_n=int(core.sum());union_n=int(union.sum())
    assert core_n==6352 and union_n==66438 and int((baseline==3).sum())==29068
    assert np.all(~core|(baseline==3)) and np.all(~(baseline==3)|union)
    minimum=min(computed,key=lambda r:r['green_cells']);maximum=max(computed,key=lambda r:r['green_cells'])
    assert core_n==minimum['green_cells'] and union_n==maximum['green_cells']
    assert sum(r['green_cells']==core_n for r in computed)==1
    # I is a subset of every saved case, U is a superset. Equal cardinalities
    # identify the extreme masks without reconstructing any per-case field.
    minimum_equals_intersection=True;maximum_equals_union=True
    depot=(290,382);assert int(g[depot])==161 and int(data['classified_count'][depot])==162
    assert not core[depot]
    # Exactly one case is missing green here. The uniquely smallest case is I.
    missing={'row':depot[0],'column':depot[1],'green_cases':int(g[depot]),'classified_cases':int(data['classified_count'][depot]),
             'non_green_computed_cases':1,'parameters':minimum['parameters'],
             'identified_by':'aggregate mask + intersection/minimum cardinality identity; no rerun',
             'exact_non_green_class':'NOT FOUND: per-case labels were not retained'}
    names=list(report['axes']);bykey={tuple(r['parameters'][k] for k in names):r for r in computed}
    assert len(bykey)==162
    # Adjacent moves go toward a less restrictive case. This checks counts,
    # not empirical pixelwise inclusion (individual masks were not saved).
    order={'speed_m_s':[.4,.5,.6],'slope_penalty_multiplier':[1.25,1.,.75],
           'slope_gate_deg':[15,20],'station_dwell_min':[20,15,10],'reserve_min':[90,72,60]}
    comparisons=[]
    for key,row in bykey.items():
        for i,k in enumerate(names):
            values=order[k];j=values.index(key[i])
            if j+1==len(values):continue
            next_key=list(key);next_key[i]=values[j+1];other=bykey[tuple(next_key)]
            comparisons.append({'axis':k,'stricter':row['parameters'],'relaxed':other['parameters'],
                                'stricter_green_cells':row['green_cells'],'relaxed_green_cells':other['green_cells'],
                                'violation':row['green_cells']>other['green_cells']})
    violations=[x for x in comparisons if x['violation']]
    assert len(comparisons)==513 and not violations
    (out/'monotonicity_comparisons.json').write_text(json.dumps(comparisons,indent=2))
    pins=[]
    for line in (project/'requirements-tested.txt').read_text().splitlines():
        if '==' not in line or line.lstrip().startswith('#'):continue
        name,expected=line.strip().split('==')
        try:actual=importlib.metadata.version(name)
        except importlib.metadata.PackageNotFoundError:actual='NOT INSTALLED'
        pins.append({'package':name,'required':expected,'installed':actual,'matches':actual==expected})
    matched=all(p['matches'] for p in pins)
    if a.require_tested:assert matched,pins
    unchanged={}
    for name in ['terrain.py','frontend/src/geoscene.ts']:
        unchanged[name]=digest(project/name);assert unchanged[name]==old['protected_sha256'][name]
    before=json.loads((out/'before_hashes.json').read_text())
    changed=[p for p,h in before.items() if not (project/p).is_file() or digest(project/p)!=h]
    assert not changed
    recheck={'robust_core_cells':core_n,'robust_core_scope':'all 162 computed cases; gates 15 and 20 degrees; excludes 81 rejected 10-degree cases',
       'excluded_cases_statement':'10° gate rejects required stop Hazeltop (CTX slope 10.43°); 81 cases not computed',
       'monotonicity':{'comparisons':len(comparisons),'violations':len(violations),'scope':'adjacent parameter comparisons of saved GREEN CELL COUNTS only',
           'pixelwise_per_case_check':'NOT RUN: individual masks not stored; no sensitivity case rerun',
           'per_axis_comparisons':{k:sum(c['axis']==k for c in comparisons) for k in names}},
       'extreme_set_identities':{'intersection_equals_smallest_case':minimum_equals_intersection,'union_equals_largest_case':maximum_equals_union,
           'smallest_case':minimum,'largest_case':maximum,'proof':'Intersection is contained in each case and has the same cardinality as the smallest; union contains each case and has the same cardinality as the largest. Therefore each pair is the same finite set. Uses stored aggregate masks and recorded case cardinalities; not reconstructed masks.'},
       'depot_non_green_case':missing,
       'revision_execution':{'sensitivity_cases_rerun':0,'routing_engine_imported_or_called':False,'metabolism_called':False,'application_files_changed':changed,
          'delta_regression_status':'Prior verified values retained; NOT rerun in this revision','source_npz_sha256':digest(out/'freedom_sensitivity.npz')},
       'environment_recheck':{'python':sys.version,'requirements_sha256':digest(project/'requirements-tested.txt'),'requirements_all_matched':matched,'pins':pins,
          'plotting_dependency':{'matplotlib':importlib.metadata.version('matplotlib'),'in_requirements_tested':False},
          'differences_in_stored_values_or_reductions':[],'scope':'Rechecks saved arrays, counts and set identities only; no cross-version rerouting or physiological calculation.'}}
    old.update(recheck);(out/'verification.json').write_text(json.dumps(old,indent=2))
    np.save(out/'robust_core.npy',core)
    meta=report['grid'];z=np.load(project/'data/derived/elevation.npy').astype(float)
    aa,_,c,_,e,f=meta['transform'];h,w=z.shape;R=meta['radius_m']
    lon=np.rad2deg((c+(np.arange(w)+.5)*aa)/R);lat=np.rad2deg((f+(np.arange(h)+.5)*e)/R)
    extent=np.rad2deg(np.array([c,c+aa*w,f+e*h,f])/R)
    hill=LightSource(315,45).hillshade(z,vert_exag=1,dx=20*np.cos(np.deg2rad(lat.mean())),dy=20)
    plt.rcParams.update({'font.family':'DejaVu Sans','font.size':11})
    west,south,east,north=meta['aoi_lonlat'];fixed=report['fixed']
    baseline_title='Baseline\n29,068 cells'
    core_title='Green in all computed cases (gates 15° and 20°)\n6,352 cells'
    for technical in [False,True]:
        masks=[baseline==3,core]+([union] if technical else [])
        titles=[baseline_title,core_title]+(['Most optimistic case\n66,438 cells'] if technical else [])
        fig,axs=plt.subplots(1,len(masks),figsize=(20 if technical else 15,9))
        for ax,mask,title in zip(axs,masks,titles):
            ax.imshow(hill,cmap='gray',vmin=0,vmax=1,extent=extent,origin='upper')
            rgba=np.zeros((*mask.shape,4));rgba[mask]=[.08,.83,.52,.82]
            ax.imshow(rgba,extent=extent,origin='upper',interpolation='nearest')
            ax.contour(lon,lat,union.astype(float),levels=[.5],colors=['#b4d1e0'],linewidths=1.15,linestyles='--',alpha=.8)
            ax.add_patch(Rectangle((west,south),east-west,north-south,fill=False,edgecolor='white',linestyle=':',linewidth=.8,alpha=.7))
            ax.scatter(fixed['position']['lon'],fixed['position']['lat'],s=33,c='white',edgecolors='black',zorder=6)
            ax.scatter(fixed['habitat']['lon'],fixed['habitat']['lat'],s=35,marker='s',c='white',edgecolors='black',zorder=6)
            ax.scatter([p['lon'] for p in fixed['activities']],[p['lat'] for p in fixed['activities']],s=30,marker='D',c='#ffc180',edgecolors='black',zorder=6)
            for label,pos,offset in [('Crew',fixed['position'],(-28,13)),('Habitat',fixed['habitat'],(10,0)),('Swift Run / Hazeltop',fixed['activities'][1],(-55,-25))]:
                ax.annotate(label,(pos['lon'],pos['lat']),xytext=offset,textcoords='offset points',fontsize=8,color='white',bbox={'facecolor':'#111827','alpha':.85,'edgecolor':'none','pad':2})
            ax.set_title(title,loc='left',fontsize=11 if technical else 12,fontweight='bold',pad=12)
            ax.set_xlabel('East longitude (degrees)',fontsize=10);ax.set_aspect(1/np.cos(np.deg2rad(lat.mean())));ax.tick_params(labelsize=9)
        axs[0].set_ylabel('Planetocentric latitude (degrees)',fontsize=10)
        fig.suptitle('MarsFlex | Baseline and conditional robust core',x=.055,y=.98,ha='left',fontsize=23,fontweight='bold')
        fig.text(.055,.895,recheck['excluded_cases_statement'],fontsize=12,color='#763b13')
        fig.text(.055,.859,'Conditional on the 162 computed cases, not the full proposed parameter range. No safety certification.',fontsize=11)
        fig.subplots_adjust(left=.055,right=.985,top=.77,bottom=.245,wspace=.18)
        fig.text(.055,.167,'Faint dashed outline: most optimistic case (66,438 cells). Dotted rectangle: original AOI.\nBackground: CTX 20 m DTM hillshade. Green retains both required stops and return with declared reserve.',fontsize=10,linespacing=1.6)
        fig.text(.055,.094,'[ASSUMPTION] Speed 0.4 / 0.5 / 0.6 m/s; penalty multiplier 0.75 / 1 / 1.25; gates 15° / 20°.\n[ASSUMPTION] Station dwell 10 / 15 / 20 min; reserve 60 / 72 / 90 min. Budget 300 min; detour stop 10 min.',fontsize=10,linespacing=1.6)
        fig.text(.055,.035,'138 cases flag a reachable domain edge; routing is confined to the buffered raster. No scenario was rerun for this figure.',fontsize=10,color='#374151')
        name='MarsFlex_Sensitivity_Technical' if technical else 'MarsFlex_Sensitivity'
        fig.savefig(out/(name+'.png'),dpi=160,facecolor='white');fig.savefig(out/(name+'.pdf'),facecolor='white');plt.close(fig)
    print(json.dumps(recheck,indent=2))

if __name__=='__main__':main()
