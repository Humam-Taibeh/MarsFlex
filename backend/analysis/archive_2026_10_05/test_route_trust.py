"""Read-only diagnostic tests; no terrain field, routing or metabolism is called."""
import argparse,hashlib,json,math,sys,traceback
from pathlib import Path
import numpy as np
from affine import Affine
from shapely.geometry import box,LineString

def main():
    p=argparse.ArgumentParser();p.add_argument('--project',type=Path,required=True);p.add_argument('--output',type=Path,required=True);args=p.parse_args()
    root=args.project.resolve();sys.path.insert(0,str(root/'backend'))
    from marsflex import terrain
    def forbidden(*a,**k):raise AssertionError('A routing operation was called; forbidden for this revision')
    for name in ['__init__','field','solve','route']:setattr(terrain.Terrain,name,forbidden)
    from marsflex import route_trust as rt
    from marsflex.mission_evidence import coverage_for_route
    from marsflex import api
    from fastapi.testclient import TestClient
    meta,A,ctx,patches,matched,full,native,common=rt.reference_data();R=meta['radius_m']
    def coord(x,y):return [math.degrees(x/R),math.degrees(y/R),0.]
    bounds=matched[0][0].bounds;x0,y0,x1,y1=bounds;y=(y0+y1)/2
    inside=[coord(x0+4,y),coord(x1-4,y)]
    x0,y0,x1,y1=full.bounds
    outside=[coord(x0-100,y0-100),coord(x0-80,y0-100)]
    stored=json.loads((root/'data/derived/api_smoke_results.json').read_text())['mission']['result']['mission']['route_lon_lat_areoid_height']
    records=[]
    def test(name,fn):
        try:detail=fn();records.append({'test':name,'passed':True,'actual':detail});print('PASS',name)
        except Exception as e:records.append({'test':name,'passed':False,'error':str(e),'traceback':traceback.format_exc()});print('FAIL',name,str(e))
    def empty():
        d=rt.analyse_route([]);assert d['status']=='no_route';return d
    test('empty_route_has_no_assessment',empty)
    def one():
        d=rt.analyse_route(inside[:1]);assert d['status']=='no_route';return d
    test('single_point_has_no_assessment',one)
    def stationary():
        d=rt.analyse_route([inside[0],inside[0]])
        assert d['loaded_comparison_coverage']['covered_percent'] is None
        assert d['matched_20m_comparison']['CTX_20m']['unique_cells']==0
        return {'status':d['status'],'coverage':d['loaded_comparison_coverage'],'limitation':'Top-level status is assessed for a zero-length two-point route; coverage correctly reports no_route_length. No fix applied.'}
    test('zero_length_never_claims_full_coverage',stationary)
    def not_covered():
        d=rt.analyse_route(outside)
        assert d['loaded_comparison_coverage']['covered_percent']==0
        assert d['matched_20m_comparison']['CTX_20m']['max_deg'] is None
        return d
    test('outside_reference_coverage_is_zero_and_slope_unknown',not_covered)
    def covered():
        d=rt.analyse_route(inside)
        assert abs(d['matched_20m_coverage']['covered_percent']-100)<1e-8
        c=d['matched_20m_comparison'];assert c['CTX_20m']['unique_cells']==1
        assert c['HiRISE_averaged_to_20m']['unique_cells']==1
        assert c['CTX_20m']['max_deg']==matched[0][1] and c['HiRISE_averaged_to_20m']['max_deg']==matched[0][2]
        return d
    test('actual_reference_cell_has_full_coverage_and_matched_values',covered)
    def reverse():
        a,b=rt.analyse_route(inside),rt.analyse_route(inside[::-1])
        assert a['matched_20m_comparison']==b['matched_20m_comparison']
        assert a['native_scale_comparison']==b['native_scale_comparison']
        return {'forward':a['matched_20m_comparison'],'reverse':b['matched_20m_comparison']}
    test('reverse_direction_preserves_sampled_slope_statistics',reverse)
    def repeat():
        a,b=rt.analyse_route(inside),rt.analyse_route(inside+[inside[0]])
        assert a['matched_20m_comparison']==b['matched_20m_comparison']
        for key in ['route_length_m','covered_length_m']:
            assert abs(b['matched_20m_coverage'][key]-2*a['matched_20m_coverage'][key])<1e-7
        return {'single':a['matched_20m_coverage'],'repeated':b['matched_20m_coverage'],'unique_cells_unchanged':True}
    test('repeated_traversal_counts_length_twice_but_cells_once',repeat)
    def partial():
        d=coverage_for_route([coord(0,0),coord(100,0)],box(25,-10,75,10),R)
        assert abs(d['covered_percent']-50)<1e-10
        return {'fixture':'synthetic geometry unit test, not Mars data',**d}
    test('analytical_half_covered_line_is_50_percent',partial)
    def point_contact():
        vals=np.array([[10.]]);T=Affine(20,0,0,0,-20,20)
        result=rt.sampled_cells(LineString([(-10,0),(0,0)]),T,vals)
        assert result==[];return {'fixture':'synthetic geometry unit test','samples':result}
    test('point_only_cell_contact_is_excluded',point_contact)
    def valid_mask():
        vals=np.array([[1.,2.],[3.,4.]]);T=Affine(20,0,0,0,-20,40);mask=np.array([[True,False],[True,True]])
        result=rt.sampled_cells(LineString([(1,30),(39,30)]),T,vals,mask)
        assert result==[1.];return {'fixture':'synthetic validity-mask test','values':result}
    test('invalid_cell_mask_is_respected',valid_mask)
    def actual_archived():
        d=rt.analyse_route(stored)
        assert 0<d['loaded_comparison_coverage']['covered_percent']<100
        assert d['native_scale_comparison']['HiRISE_1m']['unique_cells']>0
        assert d['matched_20m_comparison']['CTX_20m']['unique_cells']==d['matched_20m_comparison']['HiRISE_averaged_to_20m']['unique_cells']
        return {'coordinate_source':'data/derived/api_smoke_results.json / mission / result / mission; archived route, NOT default two-stop route',**d}
    test('archived_real_route_produces_partial_native_and_matched_diagnostics',actual_archived)
    client=TestClient(api.app)
    def endpoint():
        response=client.post('/v1/evidence/route-trust',json={'coordinates':inside});assert response.status_code==200
        assert response.json()==rt.analyse_route(inside)
        return {'http_status':response.status_code,'matches_direct_function':True}
    test('endpoint_equals_direct_analysis_without_routing',endpoint)
    def invalid():
        payloads=[{'coordinates':[]},{'coordinates':[[-1,0,0],[-1,.001,0]]},{'coordinates':inside,'unexpected':True}]
        statuses=[client.post('/v1/evidence/route-trust',json=x).status_code for x in payloads]
        assert statuses==[422,422,422];return {'empty_outside_extra_field_statuses':statuses}
    test('endpoint_rejects_empty_outside_and_extra_fields',invalid)
    out={'passed':all(r['passed'] for r in records),'tests':len(records),'passed_count':sum(r['passed'] for r in records),'failed_count':sum(not r['passed'] for r in records),'routing_calls':0,'records':records,
         'protected_diagnostic_sha256':hashlib.sha256((root/'route_trust.py').read_bytes()).hexdigest(),
         'scope':'Actual read-only route_trust/endpoint tests on loaded reference data and archived coordinates plus explicitly synthetic geometry tests. Does not rerun Delta or any sensitivity case.',
         'unretested_prior_cases':['delta_transect','v010_default_two_stops','v010_three_stops'],
         'limitation':'Zero-length two-point route returns top-level assessed although coverage is no_route_length; left unchanged as requested.'}
    args.output.write_text(json.dumps(out,indent=2));print(json.dumps({k:out[k] for k in ['tests','passed_count','failed_count','routing_calls']}))
    if not out['passed']:sys.exit(1)
if __name__=='__main__':main()
