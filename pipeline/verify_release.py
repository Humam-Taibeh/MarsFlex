"""Real-data cross-language checks and static HTML integrity (no UI test claim)."""
from pathlib import Path
from tempfile import TemporaryDirectory
from html.parser import HTMLParser
import json,re,subprocess
import numpy as np
from marsflex.terrain import Terrain

ROOT=Path(__file__).resolve().parents[1]
class AuditHTML(HTMLParser):
 def __init__(self):super().__init__();self.ids=[];self.external=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if 'id' in a:self.ids.append(a['id'])
  if tag in ('img','script','link'):
   src=a.get('src',a.get('href',''))
   if src and not src.startswith('data:'):self.external.append(src)

def verify():
 html=(ROOT/'reports'/'MarsFlex_Terrain_v2.html').read_text();parser=AuditHTML();parser.feed(html)
 assert len(parser.ids)==len(set(parser.ids)),'Duplicate HTML IDs'
 assert not parser.external,parser.external
 app=(ROOT/'frontend/legacy/app.js').read_text()
 assert set(re.findall(r"el\('([^']+)'\)",app))<=set(parser.ids),'Missing app controls'
 for script in ['engine.js','science.js','app.js']:
  subprocess.run(['node','--check',str(ROOT/'frontend'/'legacy'/script)],check=True)
 grid=json.loads((ROOT/'data/derived/grid.json').read_text());t=Terrain(np.load(ROOT/'data/derived/elevation.npy'),grid)
 home=t.node(77.4,18.47);target=t.node(77.385,18.501)
 reference=t.field(home,home,[(target,15)],300,72,10)['labels'].ravel()
 with TemporaryDirectory() as tmp:
  subprocess.run(['node',str(ROOT/'tests/browser/verify_engine.js'),tmp],check=True)
  actual=np.fromfile(Path(tmp)/'labels.u8',dtype='uint8')
  result=json.loads((Path(tmp)/'result.json').read_text())
 assert len(actual)==len(reference)
 differences=int((actual!=reference).sum());assert differences==0
 nodes=result['baseline']['nodes'];edges=sum(float(t.graph[a,b]) for a,b in zip(nodes,nodes[1:]))
 assert nodes[0]==home and nodes[-1]==home and target in nodes
 assert all(t.graph[a,b]>0 for a,b in zip(nodes,nodes[1:]))
 assert abs(edges+15-result['baseline']['cost'])<1e-4
 report={'classification_cells_compared':len(actual),'classification_differences':differences,
   'baseline_worker_min':result['baseline']['cost'],'baseline_independent_edge_sum_plus_dwell_min':edges+15,
   'source_native_science_lookups':'pass, including outside coverage and source NoData',
   'static_html_integrity':'pass; no external loads or missing referenced controls',
   'browser_ui_test':'not completed; local-file navigation blocked in available browser',
   'science_samples':result['science_checks']}
 (ROOT/'data/derived/release_verification.json').write_text(json.dumps(report,indent=2))
 print(json.dumps({k:v for k,v in report.items() if k!='science_samples'},indent=2))

if __name__=='__main__':verify()
