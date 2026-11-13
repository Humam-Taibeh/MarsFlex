import sys,json
from pathlib import Path
r=Path('audit010/project').resolve();sys.path.insert(0,str(r))
import api
from route_trust import analyse_route
expected=json.loads(Path('audit010/slopes.json').read_text())['routes'];req=json.loads(Path('audit010/delta_request.json').read_text());req['include_field']=False
for n,count in [('delta_transect',1),('v010_default_two_stops',2),('v010_three_stops',3)]:
 if count>1:req['activities']=[{'id':t['name'],'lon':t['lon'],'lat':t['lat'],'dwell_min':15 if i<2 else 10,'type':'required'} for i,t in enumerate(api.science_targets()['targets'][:count])]
 result=api.evaluate(api.Mission(**req));got=analyse_route(result['mission']['route_lon_lat_areoid_height'])
 for key,v in expected[n].items():assert got[key]==v,(n,key,got[key],v)
 print(n,'exactly matches prior audit')
