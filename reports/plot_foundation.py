"""Export a scientific coverage figure (not a screenshot of the future UI)."""
from pathlib import Path
import json
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.colors import LightSource
from matplotlib.patches import Rectangle

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'data/derived'


def main():
    grid=json.loads((OUT/'grid.json').read_text())
    report=json.loads((OUT/'catalog_report.json').read_text())
    places=json.loads((OUT/'places.json').read_text())['records']
    cov=json.loads((OUT/'evidence_coverage_report.json').read_text())
    z=np.load(OUT/'elevation.npy');bits=np.load(OUT/'evidence_coverage_bits.npy')
    h,w=z.shape;a,b,c,d,e,f=grid['transform'];R=grid['radius_m']
    extent=np.rad2deg(np.array([c,c+a*w,f+e*h,f])/R)
    west,south,east,north=grid['aoi_lonlat']
    inside=(np.array([p['lon'] for p in places])>=west)&(np.array([p['lon'] for p in places])<=east)&(np.array([p['lat'] for p in places])>=south)&(np.array([p['lat'] for p in places])<=north)
    pts=[p for p,yes in zip(places,inside) if yes]
    plt.rcParams.update({'font.family':'DejaVu Sans','font.size':10})
    fig=plt.figure(figsize=(13,8),facecolor='#f8fafb')
    gs=fig.add_gridspec(1,2,width_ratios=[1.65,1],left=.07,right=.97,top=.85,bottom=.21,wspace=.18)
    ax=fig.add_subplot(gs[0,0]);panel=fig.add_subplot(gs[0,1]);panel.axis('off')
    shade=LightSource(315,45).hillshade(z,vert_exag=1,dx=20*np.cos(np.deg2rad(18.46)),dy=20)
    ax.imshow(shade,extent=extent,cmap='gray',vmin=0,vmax=1)
    overlay=np.zeros((h,w,4));joint=(bits&7)==7
    overlay[joint]=[.13,.66,.73,.32]
    ax.imshow(overlay,extent=extent)
    ax.scatter([p['lon'] for p in pts],[p['lat'] for p in pts],s=12,c='#d7640f',edgecolor='white',linewidth=.25,zorder=4,label='Perseverance localized records')
    ax.add_patch(Rectangle((west,south),east-west,north-south,fill=False,edgecolor='#172c43',lw=1.5))
    for name,lon,lat in [('Floor',77.4509,18.4446),('Delta',77.385,18.501),('Margin',77.335,18.476)]:
        half_lat=np.rad2deg(200/R);half_lon=half_lat
        ax.add_patch(Rectangle((lon-half_lon,lat-half_lat),2*half_lon,2*half_lat,fill=False,edgecolor='#aa236a',lw=1.5,zorder=6))
        ax.annotate(name,(lon,lat),xytext=(6,8),textcoords='offset points',color='#6e123e',weight='bold',fontsize=9)
    ax.set_xlim(west-.004,east+.004);ax.set_ylim(south-.004,north+.004)
    ax.set_aspect(1/np.cos(np.deg2rad(18.46)))
    ax.set_xlabel('East longitude on Mars (degrees)');ax.set_ylabel('Planetocentric latitude (degrees)')
    ax.ticklabel_format(useOffset=False);ax.grid(alpha=.15);ax.legend(loc='lower left',fontsize=8,framealpha=.95)
    panel.text(0,1,'DATA FOUNDATION / 25 SEP 2026',weight='bold',fontsize=11,va='top')
    stats=[('145','catalogued products'),('339','Perseverance records inside AOI'),(f"{cov['aoi_area_km2']:.2f} km²",'analysis area'),(f"{cov['joint_area_km2']:.2f} km²",'joint availability on the 20 m grid')]
    for y,(value,title) in zip([.87,.68,.49,.30],stats):
        panel.text(0,y,value,fontsize=27,weight='bold',color='#172c43')
        panel.text(0,y-.05,title,fontsize=11,color='#475766')
    panel.text(0,.12,'103 HiRISE images | 4 HiRISE DTMs\n36 CTX products | 2 THEMIS mosaics',fontsize=10,linespacing=1.6)
    fig.text(.07,.94,'MarsFlex | Jezero evidence coverage',fontsize=22,weight='bold',color='#172c43')
    fig.text(.07,.895,'Actual CTX terrain, native CRISM validity, HiRISE catalog footprints and archived rover locations',fontsize=11,color='#475766')
    fig.text(.07,.105,'Cyan: CTX + CRISM + HiRISE DTM footprint overlap. Pink boxes: reference-comparison samples.',fontsize=10)
    fig.text(.07,.075,'Footprints do not guarantee valid pixels. Rover points are sparse locations, not a continuous traverse.',fontsize=10)
    fig.text(.07,.045,'Sources: USGS Astrogeology / NASA MRO; NASA PDS Mars 2020 PLACES. This is a coverage analysis, not a safety map.',fontsize=9,color='#475766')
    fig.savefig(ROOT/'reports'/'MarsFlex_Data_Foundation.png',dpi=170,facecolor=fig.get_facecolor())


if __name__=='__main__':main()
