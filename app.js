const systemsOrder = [
  "Cardiovascular",
  "Respiratory",
  "Abdominal",
  "Cranial nerves",
  "Peripheral neurological - upper limb",
  "Peripheral neurological - lower limb",
  "Hip",
  "Shoulder",
  "Knee",
  "Elbow",
  "Hand",
  "Foot",
  "Spine",
  "GALS",
  "Peripheral arterial",
  "Peripheral venous",
  "Thyroid",
  "Pituitary / endocrine appearance",
  "Cross-cutting viva",
];

const tabs = [
  { id: "signs", label: "Signs" },
  { id: "differentials", label: "Differentials" },
  { id: "investigations", label: "Investigations" },
  { id: "management", label: "Management" },
  { id: "prognosis", label: "Prognosis" },
  { id: "pathophysiology", label: "Pathophysiology" },
  { id: "viva", label: "Viva Questions" },
  { id: "pitfalls", label: "Pitfalls" },
];

const rawConditions = [
  {
    id: "aortic-stenosis",
    name: "Aortic stenosis",
    systems: ["Cardiovascular"],
    frequency: ["common", "classic"],
    clueTypes: [],
    labels: ["Very common", "Classic examiner favourite", "Must know"],
    summary: "Slow-rising pulse, harsh ejection systolic murmur to the carotids, elderly calcific valve or bicuspid valve history.",
    signs: [
      "Narrow pulse pressure and slow-rising low-volume pulse.",
      "Heaving apex if there is pressure-loaded LV hypertrophy.",
      "Harsh ejection systolic murmur loudest at the right upper sternal edge, radiating to carotids.",
      "Soft or absent second heart sound in severe disease.",
      "Look for sternotomy scar, valve replacement click, or signs of heart failure.",
    ],
    differentials: [
      "Sclerosis without significant stenosis in an older patient.",
      "Hypertrophic obstructive cardiomyopathy if murmur varies with manoeuvres.",
      "Pulmonary stenosis if radiation is to the left shoulder rather than neck.",
      "Flow murmur in anaemia or high-output states.",
    ],
    investigations: [
      "Echocardiography is the key test: valve area, gradient, LV function.",
      "ECG for LVH, AF, or conduction disease.",
      "CXR for cardiomegaly or post-surgical clues.",
      "Bloods: FBC, U&E, BNP if heart failure suspected.",
      "Coronary imaging before valve intervention in appropriate patients.",
    ],
    management: {
      initial: [
        "Assess for red-flag symptoms: exertional chest pain, syncope, breathlessness.",
        "Treat decompensated heart failure carefully; avoid sudden preload reduction.",
      ],
      definitive: [
        "Aortic valve replacement if severe symptomatic disease.",
        "TAVI is common in older or higher-risk patients.",
      ],
      longTerm: [
        "Serial echo in asymptomatic disease.",
        "Risk-factor optimisation and follow-up for symptoms progression.",
      ],
      mdt: [
        "Cardiology and valve MDT.",
        "Cardiothoracic surgery or structural heart team.",
      ],
    },
    prognosis: [
      "Prognosis is good before symptoms, but worsens sharply once angina, syncope, or heart failure develop.",
      "Valve replacement markedly improves symptoms and survival in severe symptomatic disease.",
    ],
    pathophysiology: [
      "Fixed outflow obstruction causes pressure overload and concentric LV hypertrophy.",
      "Reduced cardiac output on exertion explains syncope and exertional breathlessness.",
    ],
    vivaQuestions: [
      "Which examination features would make you think the stenosis is severe?",
      "What are the classic symptoms and why are they important prognostically?",
      "How would you distinguish aortic stenosis from HOCM at the bedside?",
      "What are the treatment options for severe aortic stenosis?",
    ],
    pitfalls: [
      "Do not call every ejection systolic murmur aortic stenosis; check radiation and pulse character.",
      "A normal apex beat does not exclude severe disease.",
      "Remember bicuspid valve disease in younger adults.",
    ],
  },
