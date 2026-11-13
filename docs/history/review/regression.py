from pathlib import Path
import json,hashlib,sys,types,zipfile,ast
ROOT=Path('audit010/project').resolve();sys.path.insert(0,str(ROOT));import api
with zipfile.ZipFile('restored010/MarsFlex_v0.10.0_Full.zip') as z:oldbytes=z.read('api.py')
old=types.ModuleType('original_v010');old.__file__=str(ROOT/'api.py');sys.modules[old.__name__]=old;exec(compile(oldbytes,old.__file__,'exec'),old.__dict__)
req=json.loads(Path('audit010/delta_request.json').read_text());a=old.evaluate(old.Mission(**req));b=api.evaluate(api.Mission(**req));assert a==b
assert b['mission']['profile']['distance_m']==4019.7137875635854;assert b['mission']['travel_min']==143.4349420073279
old_ast=ast.parse(oldbytes);new_ast=ast.parse((ROOT/'api.py').read_text());old_functions={n.name:ast.dump(n,include_attributes=False) for n in old_ast.body if isinstance(n,(ast.FunctionDef,ast.ClassDef))};new_functions={n.name:ast.dump(n,include_attributes=False) for n in new_ast.body if isinstance(n,(ast.FunctionDef,ast.ClassDef))};assert all(new_functions[k]==v for k,v in old_functions.items())
before=json.loads(Path('decision011/before_hashes.json').read_text());hashes={n:hashlib.sha256((ROOT/n).read_bytes()).hexdigest() for n in ['terrain.py','frontend/src/geoscene.ts']}
for k,v in hashes.items():assert before[k]==v
result={'passed':True,'distance_m':b['mission']['profile']['distance_m'],'travel_min':b['mission']['travel_min'],'complete_original_api_response_exactly_equal':True,'all_original_api_functions_and_classes_ast_identical':True,'protected_sha256':hashes,'new_api_definitions':sorted(set(new_functions)-set(old_functions)),'sensitivity_run':'NOT RUN; awaiting user approval'}
Path('decision011/regression.json').write_text(json.dumps(result,indent=2));(ROOT/'docs/decision_regression.json').write_text(json.dumps(result,indent=2));print(json.dumps(result,indent=2))
