"""Scenario radiation context for a surface walk.

Uses a single published measurement: the Galactic Cosmic Ray (GCR) dose equivalent measured
on the Martian surface by the Radiation Assessment Detector (RAD) on the Curiosity rover at Gale
crater. This is context, not a prediction for Jezero or for a suited human:
  * measured at Gale crater (about 2 km lower in elevation than Jezero, so more atmospheric shielding);
  * measured during one period of solar activity; solar particle events are NOT modelled;
  * spacesuit and equipment shielding is NOT modelled (dose to a person would differ).
"""
MINUTES_PER_DAY = 1440.0

SURFACE_GCR_DOSE_EQUIVALENT_mSv_per_day = 0.64   # Hassler et al. (2014), average at the Gale surface
CRUISE_GCR_DOSE_EQUIVALENT_mSv_per_day = 1.84    # same paper, measured in transit to Mars
NASA_CAREER_EFFECTIVE_DOSE_LIMIT_mSv = 600.0     # NASA-STD-3001 career limit (about 3% REID)

SOURCES = [
    {'id': 'RAD', 'citation': 'Hassler, D. M. et al. (2014), Mars\' surface radiation environment measured with the '
     'Mars Science Laboratory\'s Curiosity rover, Science 343, 1244797.', 'doi': 'https://doi.org/10.1126/science.1244797'},
    {'id': 'LIMIT', 'citation': 'NASA Office of the Chief Health and Medical Officer, radiation protection technical brief '
     '(NASA-STD-3001): 600 mSv career effective dose limit.',
     'url': 'https://www.nasa.gov/wp-content/uploads/2023/03/radiation-protection-technical-brief-ochmo.pdf'},
]
LIMITATIONS = [
    'Measured by RAD at Gale crater, not at Jezero. Jezero is higher, so thinner atmosphere overhead is expected to '
    'raise the dose somewhat; this is not modelled.',
    'Galactic cosmic rays only. Solar particle events are unpredictable and are not included.',
    'Dose equivalent measured inside the rover, not behind a spacesuit. Suit shielding is not modelled.',
    'Scenario context. Not a medical or operational dose prediction.',
]


def walk_dose(minutes: float, mission_days: float = 500.0) -> dict:
    """Linear scaling of the measured surface rate by duration. No other physics."""
    if not (0 <= minutes <= 24 * 60):
        raise ValueError('minutes must be between 0 and 1440')
    rate = SURFACE_GCR_DOSE_EQUIVALENT_mSv_per_day
    walk = rate * minutes / MINUTES_PER_DAY
    stay = rate * mission_days
    return {
        'rate_mSv_per_day': rate,
        'cruise_rate_mSv_per_day': CRUISE_GCR_DOSE_EQUIVALENT_mSv_per_day,
        'walk_minutes': minutes,
        'walk_dose_mSv': walk,
        'walk_fraction_of_career_limit': walk / NASA_CAREER_EFFECTIVE_DOSE_LIMIT_mSv,
        'reference_stay_days': mission_days,
        'reference_stay_dose_mSv': stay,
        'reference_stay_fraction_of_career_limit': stay / NASA_CAREER_EFFECTIVE_DOSE_LIMIT_mSv,
        'career_limit_mSv': NASA_CAREER_EFFECTIVE_DOSE_LIMIT_mSv,
        'status': 'scenario_context_not_a_dose_prediction',
        'sources': SOURCES,
        'limitations': LIMITATIONS,
    }
