import numpy as np
import pytest
from marsflex.terrain import Terrain, Model, RADIUS

def terrain(z,model=Model()):
    return Terrain(np.array(z,dtype=float),{'transform':[20,0,0,0,-20,100]},model)

def test_flat_distance_and_closed_budget_boundary():
    t=terrain(np.zeros((5,5)))
    p=10;h=14
    nodes,c=t.route(p,h)
    assert len(nodes)==5
    assert c==pytest.approx(80/30,abs=1e-8)
    result=t.field(p,h,[],c+10,10,0)
    assert result['labels'].ravel()[h]==3
    assert t.field(p,h,[],c+10-0.01,10,0)['labels'].ravel()[h]==1

def test_return_requires_transposed_directed_graph():
    t=terrain(np.tile(np.arange(5)*2.,(5,1)))
    low,high=10,14
    _,up=t.route(low,high);_,down=t.route(high,low)
    assert up>down
    reverse,_=t.solve(low,True)
    assert reverse[high]==pytest.approx(down)
    wrong,_=t.solve(low,False)
    assert wrong[high]!=pytest.approx(down)

def test_nodata_barrier_not_traversed_or_colored_safe():
    z=np.zeros((9,9));z[:,4]=np.nan
    t=terrain(z)
    nodes,cost=t.route(4*9+1,4*9+7)
    assert not nodes and np.isinf(cost)
    f=t.field(4*9+1,4*9+1,[],100)
    assert np.all(f['labels'][:,4:]==0)

def test_no_corner_cutting():
    z=np.zeros((8,8));z[2,4]=np.nan
    t=terrain(z)
    # Test every finite diagonal against both adjacent cardinal cells.
    for k,(dr,dc) in enumerate([(-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1),(-1,-1)]):
        if dr and dc:
            r,c=np.where(np.isfinite(t.costs[k]))
            assert np.all(t.walkable[r,c+dc]&t.walkable[r+dr,c])

def test_budget_reserve_dwell_monotonic_and_yellow():
    t=terrain(np.zeros((9,9)));p=h=40;target=0
    small=t.field(p,h,[(target,5)],7,1,0)['labels']
    big=t.field(p,h,[(target,5)],30,1,0)['labels']
    assert small.ravel()[p]==2
    assert np.all((small==3)<=(big==3))
    more_reserve=t.field(p,h,[(target,5)],30,20,0)['labels']
    assert np.all((more_reserve==3)<=(big==3))
    more_dwell=t.field(p,h,[(target,5)],30,1,20)['labels']
    assert np.all((more_dwell==3)<=(big==3))

def test_surface_slope_rejects_sidehill_not_only_direction():
    t=terrain(np.tile(np.arange(5)*20.,(5,1)))
    assert not t.walkable.any()

def test_invalid_assumptions_rejected():
    with pytest.raises(ValueError):Model(speed_m_s=0).validate()
    with pytest.raises(ValueError):Model(uphill_weight=-1).validate()
    with pytest.raises(ValueError):terrain(np.zeros((5,5))).field(0,1,[],float('nan'))
