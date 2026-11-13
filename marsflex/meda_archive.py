"""PDS MEDA context only. No routing imports. Standard-library archive loader.
Run: python meda_archive.py --refresh --sols 314 315 1858 1859
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import csv, hashlib, io, json, math, re, threading, urllib.request, urllib.error
import xml.etree.ElementTree as ET

ROOT=Path(__file__).resolve().parents[1]
CACHE=ROOT/'data/derived/meda'
RAW=ROOT/'data/source/meda'
BASE='https://atmos.nmsu.edu/PDS/data/PDS4/Mars2020/mars2020_meda/'
NS={'p':'http://pds.nasa.gov/pds4/pds/v1'}
BANNER='archived observation, not live weather'
LOCK=threading.Lock()
SPECS={
 'pressure':('data_derived_env','ps','PRESSURE','Pa','Pressure'),
 'air_temperature':('data_calibrated_env','ats','ATS_LOCAL_TEMP1','K','Local air temperature — ATS1'),
 'wind':('data_derived_env','ws','HORIZONTAL_WIND_SPEED','m/s','Horizontal wind speed'),
 'rds':('data_calibrated_env','rds','RDS_TOP_7','W/m²','RDS TOP7 radiance integrated over field of view')}

def now():return datetime.now(timezone.utc).isoformat()
def sha(b):return hashlib.sha256(b).hexdigest()
def save(path,data):
 path.parent.mkdir(parents=True,exist_ok=True)
 tmp=path.with_suffix('.tmp');tmp.write_text(json.dumps(data,ensure_ascii=False,allow_nan=False),encoding='utf-8');tmp.replace(path)
def fetch(url):
 if not url.startswith(BASE):raise ValueError('Only the fixed PDS MEDA archive is supported')
 req=urllib.request.Request(url,headers={'User-Agent':'MarsFlex-research-MEDA/0.8'})
 with urllib.request.urlopen(req,timeout=30) as r:
  data=r.read(40*1024*1024+1)
 if len(data)>40*1024*1024:raise ValueError('PDS product exceeds download size limit')
 return data

def catalog(refresh=False):
 path=CACHE/'catalog.json'
 if path.exists() and not refresh:return json.loads(path.read_text(encoding='utf-8'))
 entries={};sources=[]
 for collection in ['data_derived_env','data_calibrated_env']:
  url=BASE+collection+'/collection_meda_'+collection+'_inventory.csv'
  data=fetch(url);sources.append({'url':url,'sha256':sha(data)})
  for row in csv.reader(io.StringIO(data.decode('utf-8-sig'))):
   if len(row)<2 or row[0]!='P':continue
   match=re.search(r'we__(\d{4})_+(?:der|cal)_([a-z]+)_+p::([\d.]+)',row[1],re.I)
   if not match:continue
   sol,code,version=match.groups()
   for key,(col,sensor,*_) in SPECS.items():
    if collection==col and code.lower()==sensor:
     entries.setdefault(key,{})[int(sol)]={'lidvid':row[1],'version':version}
 available={k:sorted(v) for k,v in entries.items()}
 d={'checked_at_utc':now(),'source':BASE,'doi':'https://doi.org/10.17189/1522849',
    'inventory_sources':sources,'available_sols':available,'latest_product_sol':{k:max(v) for k,v in available.items()},
    'note':'Latest listed products as of checked_at_utc; not a live feed. A product may have no usable values.'}
 save(path,d);return d

def folder(sol):
 if sol<90:lo,hi=0,89
 elif sol<180:lo,hi=90,179
 elif sol<300:lo,hi=180,299
 else:lo=300+((sol-300)//120)*120;hi=lo+119
 return f'sol_{lo:04d}_{hi:04d}/sol_{sol:04d}/'

def number(v):
 try:
  x=float(v)
  return x if math.isfinite(x) and abs(x)<999999999 else None
 except (ValueError,TypeError):return None

def parse_product(xml_bytes,csv_bytes,label_url,key,sol):
 root=ET.fromstring(xml_bytes)
 def text(q):return root.findtext(q,'',NS).strip()
 table=root.find('.//p:Table_Delimited',NS)
 if table is None:raise ValueError('Missing PDS delimited table')
 fields=sorted(table.findall('.//p:Field_Delimited',NS),key=lambda f:int(f.findtext('p:field_number',namespaces=NS)))
 names=[f.findtext('p:name',namespaces=NS).strip() for f in fields]
 fieldmeta={f.findtext('p:name',namespaces=NS).strip():{'unit':f.findtext('p:unit','',NS),'description':f.findtext('p:description','',NS).strip()} for f in fields}
 column=SPECS[key][2]
 if column not in names:raise ValueError('Expected source column not present: '+column)
 expected_md5=text('.//p:File/p:md5_checksum')
 if expected_md5 and hashlib.md5(csv_bytes).hexdigest()!=expected_md5:raise ValueError('PDS MD5 mismatch')
 offset=int(table.findtext('p:offset','0',NS));rows=list(csv.reader(io.StringIO(csv_bytes[offset:].decode('utf-8-sig'))))
 expected_rows=int(table.findtext('p:records','0',NS))
 if len(rows)!=expected_rows:raise ValueError('PDS record count mismatch')
 latest=None;bins={};missing=0;rejected=0;unknown_quality=0
 for row in rows:
  if len(row)!=len(names):raise ValueError('PDS field count mismatch')
  item=dict(zip(names,row));v=number(item.get(column));clk=number(item.get('SCLK'))
  if v is None or clk is None:missing+=1;continue
  quality={k:item[k] for k in ['ROVER_STILL','ROVER_HGA_STILL','BOTH_BOOMS_USED_FOR_RETRIEVAL'] if k in item}
  if (key=='wind' and (sol<36 or number(item.get('ROVER_STILL'))!=1)) or (key=='rds' and (number(item.get('ROVER_STILL'))!=1 or number(item.get('ROVER_HGA_STILL'))==0)):
   rejected+=1;continue
  if key=='wind' and v<0:rejected+=1;continue
  if key in ('pressure','air_temperature') and v<=0:rejected+=1;continue
  if key=='rds' and number(item.get('ROVER_HGA_STILL')) is None:unknown_quality+=1
  stamp={'sol':sol,'lmst':item.get('LMST'),'ltst':item.get('LTST'),'sclk':clk,'value':v,'flags':quality}
  if latest is None or clk>latest['sclk']:latest=stamp
  match=re.search(r'M(\d{2}):',item.get('LMST',''))
  if not match:raise ValueError('Unrecognized LMST format; refusing a guessed time conversion')
  hour=int(match.group(1));b=bins.setdefault(hour,{'n':0,'sum':0.,'min':v,'max':v})
  b['n']+=1;b['sum']+=v;b['min']=min(b['min'],v);b['max']=max(b['max'],v)
 filename=text('.//p:File/p:file_name')
 source={'label_url':label_url,'data_url':label_url.rsplit('/',1)[0]+'/'+filename,'lid':text('.//p:logical_identifier'),'version':text('.//p:version_id'),
         'csv_sha256':sha(csv_bytes),'xml_sha256':sha(xml_bytes),'md5_verified':bool(expected_md5),'column':column,'column_metadata':fieldmeta[column],
         'start_utc':text('.//p:Time_Coordinates/p:start_date_time'),'stop_utc':text('.//p:Time_Coordinates/p:stop_date_time'),'records':len(rows),'processing_level':text('.//p:processing_level')}
 return {'key':key,'label':SPECS[key][4],'unit':SPECS[key][3],'sol':sol,'latest':latest,
         'hourly':[{'sol':sol,'lmst_hour':h,'count':v['n'],'mean':v['sum']/v['n'],'min':v['min'],'max':v['max']} for h,v in sorted(bins.items())],
         'missing_rows':missing,'quality_rejected_rows':rejected,'quality_unknown_rows':unknown_quality,'accepted_rows':sum(b['n'] for b in bins.values()),'source':source,'retrieved_at_utc':now()}

def product(key,sol):
 collection,code,*_=SPECS[key];url=BASE+collection+'/'+folder(sol)
 listing=fetch(url).decode();labels=re.findall(r'href="([^"/]+\.xml)"',listing)
 labels=[n for n in labels if re.search('_'+code+'_',n,re.I)]
 if not labels:raise ValueError('Listed product has no XML label')
 name=max(labels,key=lambda n:int(re.search(r'P(\d+)\.xml$',n,re.I).group(1)))
 local=RAW/str(sol);local.mkdir(parents=True,exist_ok=True)
 label=local/name
 xml=label.read_bytes() if label.exists() else fetch(url+name)
 root=ET.fromstring(xml);filename=root.findtext('.//p:File/p:file_name','',NS)
 if not re.fullmatch(r'[A-Za-z0-9_]+\.CSV',filename):raise ValueError('Unexpected PDS data filename')
 csvpath=local/filename;data=csvpath.read_bytes() if csvpath.exists() else fetch(url+filename)
 result=parse_product(xml,data,url+name,key,sol)
 label.write_bytes(xml);csvpath.write_bytes(data)
 return result

def sol_data(sol,cat,refresh=False):
 path=CACHE/f'sol_{sol:04d}.json'
 if path.exists() and not refresh:return json.loads(path.read_text(encoding='utf-8'))
 data={'sol':sol,'products':{},'errors':{}}
 keys=[k for k in SPECS if sol in cat['available_sols'].get(k,[])]
 def one(k):
  try:return k,product(k,sol),None
  except (OSError,ValueError,ET.ParseError) as e:return k,None,str(e)
 with ThreadPoolExecutor(max_workers=4) as pool:
  for key,p,error in pool.map(one,keys):
   if error:data['errors'][key]=error
   else:data['products'][key]=p
 if not data['errors']:save(path,data)
 return data

def environment(start_sol=None,end_sol=None,refresh=False):
 with LOCK:
  cat=catalog(refresh)
  end=cat['latest_product_sol']['pressure'] if end_sol is None else end_sol
  start=end if start_sol is None else start_sol
  if start<1 or end<start or end-start>6 or end>9999:raise ValueError('Select an ordered range of one to seven sols, between 1 and 9999.')
  days=[sol_data(s,cat,refresh) for s in range(start,end+1)]
 cached_wind=[]
 for path in CACHE.glob('sol_*.json'):
  cached=json.loads(path.read_text(encoding='utf-8'));w=cached.get('products',{}).get('wind')
  if w and w.get('latest'):cached_wind.append(cached['sol'])
 latest={};series={};sources=[]
 for key in SPECS:
  products=[d['products'][key] for d in days if key in d['products']]
  observations=[dict(p['latest'],unit=p['unit'],source=p['source']) for p in products if p['latest'] is not None]
  latest[key]=max(observations,key=lambda v:v['sclk']) if observations else None
  series[key]=[row for p in products for row in p['hourly']]
  sources.extend(dict(p['source'],key=key,sol=p['sol'],accepted_rows=p['accepted_rows'],missing_rows=p['missing_rows'],quality_rejected_rows=p['quality_rejected_rows'],quality_unknown_rows=p.get('quality_unknown_rows',0)) for p in products)
 return {'status':'partial_download' if any(d['errors'] for d in days) else 'ok','label':BANNER,'scope':'Perseverance observation site at the recorded sol; not the selected map location. No spatial weather interpolation.',
  'selection':{'start_sol':start,'end_sol':end,'time_system':'Mission sol and LMST; UTC bounds belong to source products, not synthesized row timestamps.'},
  'catalog':cat,'latest_cached_wind_sol':max(cached_wind) if cached_wind else None,'cached_sols':sorted(int(p.stem.split('_')[1]) for p in CACHE.glob('sol_*.json')),'latest_in_selected_range':latest,'hourly':series,'sources':sources,'errors':{str(d['sol']):d['errors'] for d in days if d['errors']},
  'dust':{'value':None,'status':'not_available','note':'لم أجد قيمة غبار كمية جاهزة في المنتجات المستوردة. RDS TOP7 is radiance integrated over field of view, not dust concentration or optical depth. No conversion is inferred.'},
  'notes':['Hourly arithmetic means of retained samples, not full-hour coverage; no gap filling. Latest values are individual retained observations, not hourly means.',
   'ATS1 measures local air near one mast detector; rover heating and environmental effects are not removed by MarsFlex.',
   'Wind before sol 36 is excluded. Missing derived wind is not replaced with calibrated wind. Wind requires ROVER_STILL=1; either boom count is retained and disclosed.',
   'RDS requires ROVER_STILL=1 and excludes known antenna motion (ROVER_HGA_STILL=0). Blank antenna flags are retained as UNKNOWN quality, never as good conditions; antenna contamination is not ruled out. One regular-gain channel is shown; no high-gain substitution or dust inference.',
   'Blank, nonfinite and PDS invalid sentinel values remain absent. No claim that remaining readings are hazard-free.',
   'MEDA does not affect routes, mission colors, consumable budgets or walk-back limits.']}

if __name__=='__main__':
 import argparse
 p=argparse.ArgumentParser();p.add_argument('--refresh',action='store_true');p.add_argument('--sols',type=int,nargs='+');a=p.parse_args()
 c=catalog(a.refresh)
 for s in a.sols or [c['latest_product_sol']['pressure']]:
  d=sol_data(s,c);print(s,{k:v['accepted_rows'] for k,v in d['products'].items()},d['errors'],flush=True)
