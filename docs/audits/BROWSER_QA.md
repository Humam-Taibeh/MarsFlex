# v5 integrated browser verification

Current surface/sections/mission integration checks are in
`data/derived/browser_v5_qa.json`, recorded in Chromium on Linux at 1600×1000.
The current backend integration results are in `v5_test_results.txt`.

To reproduce the 3D surface workflow: install Playwright and Chromium, set
PYTHON_EXECUTABLE to the project Python environment, and run
`node tests/browser/browser_surface.cjs`. BROWSER_EXECUTABLE optionally overrides the
browser executable. The script starts and stops its own local server.

The older image-based planner workflow remains in `tests/browser/browser_workbench.cjs`.
Public deployment, Windows launcher execution and broad device testing are not
claimed. Still captures and the surface animation are actual application frames.
