# MarsFlex: where to go, why go, and what remains unknown

MarsFlex is a research decision tool for a scenario Marswalk in Jezero crater, combining orbital terrain and spectral context with archived Perseverance measurements. [S1-S4]

**Where can the crew go and return?** A deterministic engine uses the CTX 20 m terrain grid to calculate mission and return routes and possible detours. Green means the queried detour, every required stop in order, and return fit the declared time budget with reserve. It is model feasibility, not a certified human operating limit. [S1,S2]

The presentation compares **29,068 baseline green cells** with a **6,352-cell conditional robust core**, surrounded by the **66,438-cell most-optimistic boundary**. The core is green in all **162 computed cases at 15° and 20° gates**. The **10° gate rejects required stop Hazeltop (CTX slope 10.43°); 81 cases were not computed**. Robustness is limited to those computed scenarios; all parameter ranges remain declared assumptions. [S7]

**Why these destinations?** Swift Run and Hazeltop are the required stations; Shuyak is a candidate detour in the existing demonstration. Station evidence pairs local PIXL oxide-equivalent measurements with the nearest CRISM summary-parameter pixel and CTX terrain context. These instruments sample different footprints: measured rover context is not validation of CRISM or a scientific-value ranking. Comparing the sites is a team investigation hypothesis. [S2-S4]

**How much do we know?** The saved default-route audit reports **23.60% loaded HiRISE comparison coverage**, and **21.37% matched-slope coverage**. Within the latter, maximum slopes are **18.66° CTX** and **25.44° HiRISE**, with **0/19** and **1/19** cells above 20°, respectively. **Not validated outside coverage.** These local differences do not establish a global CTX bias. [S5,S6]

MEDA supplies archived observations at the rover, not live weather across the route; RDS is not converted into dust concentration. A 20 m grid cannot certify small-obstacle clearance. The analysis also flags possible domain-edge truncation in 138 cases. [S1,S7,S12]

The decision is whether to retain the plan or investigate an extra visit under explicit assumptions. The conditional-core graphic is a separate analysis output; UI wording now matches the existing calculations; route and physiology logic remain unchanged. Original code is Apache 2.0 with separate data attribution. [S7-S9]
