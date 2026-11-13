import fs from 'node:fs/promises';
import path from 'node:path';
import {Presentation,PresentationFile} from '@oai/artifact-tool';
import {finalizePresentation,resolvePresentationFont} from '/root/.codex/skills/builtins/presentations/container_tools/artifact_tool_utils.mjs';
const work=path.resolve(import.meta.dirname,'..'),root=path.join(work,'MarsFlex'),out=path.join(root,'docs/submission');
const font=resolvePresentationFont({fontFamily:'DejaVu Sans'}),p=Presentation.create({slideSize:{width:1280,height:720}});
const C={bg:'#101F24',ink:'#EDF1E9',muted:'#ADC3BF',accent:'#E5CA8F'};
function text(s,v,x,y,w,h,size=26,color=C.ink,bold=false){const b=s.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});b.text=v;b.text.style={typeface:font,fontSize:size,color,bold,autoFit:'none'};return b;}
function slide(title,source){const s=p.slides.add();s.background.fill=C.bg; text(s,title,52,38,1176,70,44,C.ink,true);text(s,source,52,672,1100,26,16,C.muted);text(s,String(p.slides.items.length),1215,672,32,26,16,C.muted);s.speakerNotes.textFrame.setText(source+'\nSource keys resolve in docs/SOURCES_EN.md, included in the full release.');return s;}
async function img(s,f,x,y,w,h){s.images.add({blob:new Uint8Array(await fs.readFile(path.join(root,f))),contentType:f.endsWith('.jpg')?'image/jpeg':'image/png',alt:f,fit:'contain',position:{left:x,top:y,width:w,height:h}});}
function table(s,values,x,y,w,h,widths){const t=s.tables.add({rows:values.length,columns:values[0].length,left:x,top:y,width:w,height:h,values,columnWidths:widths});t.borders.assign({fill:'#47605F',width:1});for(let i=0;i<values.length;i++)for(let j=0;j<values[i].length;j++){const cell=t.getCell(i,j);cell.fill=i===0?'#29413F':C.bg;cell.text.style={typeface:font,fontSize:i===0?22:24,color:i===0?C.accent:C.ink,bold:i===0};}return t;}

let s=slide('MarsFlex','Sources: S1–S4. Image: NASA MRO / USGS CTX, imagery_manifest.json.');
text(s,'Jezero Marswalk\nscenario planning',54,172,540,175,49,C.ink,true);
text(s,'Where can we go and return?\nWhy visit this location?\nWhat remains unknown?',56,396,520,155,28,C.accent);
await img(s,'data/derived/ctx_orbital.jpg',625,143,598,489);
s.speakerNotes.textFrame.setText('Sources S1–S4. CTX image source URL and credit in data/derived/imagery_manifest.json and docs/submission/EXTERNAL_RESOURCES.md. This is a scenario planning demonstration, not a human mission safety approval.');

s=slide('Terrain and mission constraints','Sources: terrain.py, api.py, DecisionView.tsx; final browser screenshot [S1,S2,S9,S13].');
await img(s,'review/final/MarsFlex_Decision_First.png',48,128,880,525);
text(s,'Green includes the extra visit, all required stops in order, and return with reserve.',960,160,265,205,27);
text(s,'The declared time model is uncalibrated for a human Marswalk.',960,428,265,170,24,C.accent);

s=slide('Station questions','Sources: science_targets.json and PDS Initial Reports [S3,S4]. Questions are team hypotheses.');
const targets=JSON.parse(await fs.readFile(path.join(root,'data/derived/science_targets.json'),'utf8')).targets;
for(let i=0;i<3;i++){const t=targets[i];text(s,t.name,58,153+i*158,250,49,33,C.accent,true);text(s,t.planning_question,347,149+i*158,852,99,28);text(s,'TEAM HYPOTHESIS',350,248+i*158,600,24,16,C.muted);}
s.speakerNotes.textFrame.setText('Every displayed question is copied from data/derived/science_targets.json and labelled Team hypothesis. These are proposed investigation questions, not statements that an instrument established a mineral at the sampled CRISM pixel. Sources S3 and S4.');

s=slide('PIXL measurements near the sample sites','Source: Farley & Stack / Mars 2020 team (2023), PDS, doi:10.17189/49zd-2k55 [S4].');
text(s,'Bulk abrasion composition, oxide-equivalent wt% ±1σ',56,124,1160,52,27,C.accent);
table(s,[['Station','Sol','MgO','FeO-T','SO₃'],['Swift Run','484','22.7 ±1.3','24.5 ±1.2','2.6 ±0.4'],['Hazeltop','505','13.1 ±1.3','17.5 ±1.8','20.0 ±4.4'],['Shuyak','570','19.1 ±1.1','28.0 ±1.5','3.8 ±0.5']],56,204,1168,300,[288,120,254,254,252]);
text(s,'Different footprints: local PIXL abrasion measurements and a 36 m CRISM summary-parameter pixel.',56,534,1165,78,27);
text(s,'Measured context. No independent CRISM validation.',56,620,1165,37,24,C.accent);
s.speakerNotes.textFrame.setText('Nine primary values from Table 1, first bulk column, in Mars 2020 Initial Reports Volume 2 release 3.1. Swift Run/Thornton Gap: sol 484, PDF31 printed11-18; Hazeltop/Berry Hollow: sol505, PDF75 printed14-18; Shuyak/Novarupta2: sol570, PDF118 printed16-19. N=3335,3342,3333. Units oxide-equivalent wt%; errors ±1σ calibration/counting statistics. https://doi.org/10.17189/49zd-2k55 . NASA/JPL-Caltech; ©2023 Caltech. Facts transcribed in docs/PIXL_EVIDENCE_NINE.md; no source-page image used on this slide. Different footprints do not establish a match or contradiction.');

s=slide('Green in all computed cases','Source: stored freedom_sensitivity.npz, sensitivity_report.json and verification.json [S7].');
await img(s,'analysis/results_2026_10_05/MarsFlex_Sensitivity.png',45,111,1190,494);
text(s,'15° and 20° gates only. 10° rejects Hazeltop (10.43°); 81 cases not computed.',54,613,1170,51,24,C.accent);
s.speakerNotes.textFrame.setText('Stored sensitivity output, not rerun in final release. Baseline=29068; conditional intersection=6352; union/optimistic maximum=66438. 162 computed combinations at 15° and20° gates. 81 cases at10° cannot compute because Hazeltop violates the gate. All parameter ranges are declared assumptions. 513 adjacent count comparisons have zero violations; empirical per-cell monotonicity was not tested because individual masks were not retained. Figure remains a separate analysis output; it is not integrated into live map.');

s=slide('Local slope comparison','Sources: route_audit_results.json, route_trust.py and final browser output [S5,S6,S13].');
text(s,'23.60% of the planned route lies inside loaded HiRISE comparison cells.',56,127,1160,74,31,C.accent);
text(s,'Matched 20 m slope coverage: 21.37% of this route',56,218,1160,42,26);
table(s,[['Matched cells','CTX','HiRISE averaged to 20 m'],['Maximum slope','18.66°','25.44°'],['Mean slope','11.96°','12.19°'],['Cells above 20°','0 / 19','1 / 19']],56,283,1168,244,[480,256,432]);
text(s,'Not validated outside coverage.',56,559,1165,47,32,C.accent,true);
text(s,'Related terrain products. This local comparison establishes no global bias.',56,618,1165,34,23);

s=slide('Decision and release evidence','Sources: final logs and HANDOFF.md [S1,S7,S8,S12–S14].');
text(s,'Test the additional visit under declared assumptions.',56,137,1160,68,34,C.accent);
text(s,'37 tests passed\n13 route-trust checks passed\n413,130 Python/JavaScript cells, zero differences',56,246,690,190,29);
text(s,'Delta regression unchanged\n4,019.7137875635854 m\n143.4349420073279 min',800,245,418,164,26);
text(s,'MEDA is archived rover-local context. CTX cannot resolve every small obstacle. Human-safety calibration: NOT FOUND.',56,475,1155,109,28);
text(s,'Apache-2.0 original code. External resources retain separate terms.',56,607,1165,40,25,C.muted);

await fs.mkdir(out,{recursive:true});const candidate=path.join(import.meta.dirname,'candidate.pptx');await(await PresentationFile.exportPptx(p)).save(candidate);
const final=path.join(out,'MarsFlex_Seven_Slides.pptx');
await finalizePresentation({workspaceDir:work,candidatePath:candidate,finalPath:final,pythonExecutable:process.env.CODEX_PRIMARY_RUNTIME_PYTHON,integrityValidatorPath:'/root/.codex/skills/builtins/presentations/container_tools/inspect_presentation_package_integrity.py',layoutValidatorPath:'/root/.codex/skills/builtins/presentations/container_tools/inspect_presentation_layout_geometry.py',layoutArgs:['--expected-slide-size-emu','12192000,6858000','--validate-bullet-geometry','--validate-heading-fit','--require-native-table-slide','4','--require-native-table-slide','6'],requiredNativeTableOwnerSlides:[4,6],explicitTotalSlideCount:7,fontPolicy:{basis:'design',families:[font]},verifyArtifactToolImport:true,receiptPath:path.join(import.meta.dirname,'deck_validation.json')});
for(let i=0;i<p.slides.items.length;i++){const b=await p.export({slide:p.slides.items[i],format:'png',scale:1});await fs.writeFile(path.join(import.meta.dirname,`slide-${i+1}.png`),new Uint8Array(await b.arrayBuffer()));}
console.log(JSON.stringify({file:final,slides:p.slides.items.length,font}));
