"""Static scientific evidence from computed fields; not a UI screenshot."""
from pathlib import Path
import json
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
from matplotlib.patches import Patch
from matplotlib.lines import Line2D
from PIL import Image
from marsflex.terrain import Terrain,RADIUS

ROOT=Path(__file__).resolve().parents[1]
def plot():
 g=json.loads((ROOT/'data/derived/grid.json').read_text());z=np.load(ROOT/'data/derived/elevation.npy');t=Terrain(z,g)
 home=t.node(77.4,18.47);target=t.node(77.385,18.501)
 a,b,c,d,e,f=g['transform'];h,w=z.shape
 extent=np.rad2deg(np.array([c,c+w*a,f+h*e,f])/RADIUS)
 west,south,east,north=g['aoi_lonlat']
 image=np.asarray(Image.open(ROOT/'data/derived/terrain_hillshade.png'))
 palette=['#808b95','#ed6267','#e4bc57','#41cf8b']
 plt.rcParams.update({'font.family':'DejaVu Sans','font.size':11})
 fig,axes=plt.subplots(1,2,figsize=(13,7.2),facecolor='#f8f9fb')
 for ax,budget in zip(axes,[300,360]):
  field=t.field(home,home,[(target,15)],budget,72,10)
  ax.imshow(image,extent=extent,origin='upper')
  ax.imshow(field['labels'],extent=extent,origin='upper',cmap=ListedColormap(palette),vmin=-.5,vmax=3.5,alpha=.60,interpolation='nearest')
  route,_=t.route(home,target);r,cl=np.divmod(route,w)
  ax.plot(t.lon[cl],t.lat[r],color='#005bd7',lw=2.0,zorder=4)
  for node,letter,offset in [(home,'H',(7,-12)),(target,'A',(7,5))]:
   rr,cc=divmod(node,w);ax.plot(t.lon[cc],t.lat[rr],'o',mfc='white',mec='#123152',ms=6,zorder=5)
   ax.annotate(letter,(t.lon[cc],t.lat[rr]),xytext=offset,textcoords='offset points',weight='bold',color='#10243c')
  ax.set_xlim(west,east);ax.set_ylim(south,north);ax.set_aspect(1/np.cos(np.deg2rad((south+north)/2)))
  ax.set_xlabel('Longitude (degrees east)');ax.set_ylabel('Planetocentric latitude (degrees north)')
  ax.set_title(f'{budget} min remaining',loc='left',weight='bold',fontsize=15)
  ax.tick_params(labelsize=9);ax.grid(alpha=.15)
 fig.suptitle('MarsFlex — freedom calculated from real Jezero terrain',x=.055,ha='left',fontsize=18,weight='bold',y=.97)
 fig.text(.055,.91,'Same CTX 20 m grid, habitat H and target A. Only the remaining-time budget changes.',fontsize=11)
 handles=[Patch(color=palette[3],label='Mission + return fit'),Patch(color=palette[2],label='Return fits; mission loss'),Patch(color=palette[1],label='Return reserve violated'),Patch(color=palette[0],label='Blocked / unknown')]
 handles.append(Line2D([0],[0],color='#005bd7',lw=2,label='Planned route (out / back overlap)'))
 fig.legend(handles=handles,loc='lower center',bbox_to_anchor=(.5,.105),ncol=3,frameon=False,fontsize=10)
 fig.text(.055,.065,'Reserve 72 min · target task 15 min · candidate detour task 10 min · speed / slope penalties are scenario assumptions.',fontsize=9,color='#37465b')
 fig.text(.055,.035,'USGS / NASA MRO CTX TRN DTM; MarsFlex-derived fields. Buffered grid boundary can be reached: red is domain-limited.',fontsize=9,color='#37465b')
 fig.subplots_adjust(left=.075,right=.97,top=.86,bottom=.24,wspace=.26)
 out=ROOT/'reports'/'MarsFlex_Validation.png';fig.savefig(out,dpi=150);plt.close(fig)
 print(out)

if __name__=='__main__':plot()
