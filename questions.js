// =============================================================
// AQUATIC SAFETY INSPECTOR - QUESTION BANK (100 questions)
// =============================================================
// Two question formats supported (mix and match freely):
//
// FORMAT 1 — Static options (best for definitions / conceptual questions):
//   {
//     question: "Define risk:",
//     options:  ["A", "B", "C", "D"],
//     answer:   1,                          // index 0-3 of correct option
//     category: "Definitions",
//     ...
//   }
//
// FORMAT 2 — Distractor pool (best for numeric questions):
//   {
//     question: "What is the pH range?",
//     correct:  "7.2 – 7.8",                // the right answer
//     distractors: ["6.8 – 7.4", "7.0 – 7.6", "7.4 – 8.0",
//                   "7.0 – 7.8", "6.8 – 7.6"],   // 5 wrong answers
//     category: "Water Chemistry",
//     ...
//   }
//   On each quiz run, 3 of the 5 distractors are picked, combined
//   with `correct`, and the four options are shuffled.
//
// Both formats also support: explanation, slideRef, regRef.
// On every quiz, A/B/C/D positions are shuffled regardless of format.
// =============================================================

const QUESTIONS = [
  // ---------- POOL CLASSIFICATIONS / DEFINITIONS (static options) ----------
  {
    question: "Which best describes a Class A pool?",
    options: [
      "An apartment building with 6+ dwelling units",
      "A pool where the general public is admitted, or at an educational/athletic institution supported by public funds",
      "A wading pool or splash pad",
      "A private residential pool"
    ],
    answer: 1,
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "Which best describes a Class B pool?",
    options: [
      "A pool at a recreational camp",
      "A water slide receiving basin",
      "An apartment building with 6+ dwelling units, hotel, condominium, child care centre, or day camp",
      "A spray/splash pad"
    ],
    answer: 2,
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "Which is included in the Class C pool category?",
    options: [
      "Public schools",
      "Wading pools, splash/spray pads, water slide receiving basins, and floatation tanks",
      "Hotels with 6+ rooms",
      "All Olympic-sized pools"
    ],
    answer: 1,
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "A pool at a hotel with five or fewer suites is:",
    options: [
      "Classified as Class B",
      "Classified as Class C",
      "Exempt from Regulation 565 (with required notice posted)",
      "Required to be a private pool only"
    ],
    answer: 2,
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 4.1"
  },

  // ---------- POOL TYPE DEFINITIONS (static options) ----------
  {
    question: "How is a 'wading pool' defined in Regulation 565?",
    options: [
      "Any tank with water depth of 1.0 m or less at any point",
      "Any tank with water depth of 0.75 m (2'6\") or less at any point",
      "A pool used only by children under 6",
      "Any pool labeled 'kiddie pool'"
    ],
    answer: 1,
    category: "Definitions",
    slideRef: "Part 4, Slide 37",
    regRef: "O. Reg. 565"
  },
  {
    question: "How is a 'wave pool' defined?",
    options: [
      "A pool deeper than 2.5 m",
      "A public pool that is provided with a means for inducing wave motion in the water",
      "Any outdoor pool over 100 m²",
      "A pool used for surfing competitions only"
    ],
    answer: 1,
    category: "Definitions",
    slideRef: "Part 4, Slide 4"
  },
  {
    question: "How is a 'spa' defined?",
    options: [
      "Any heated pool",
      "A pool drained after each use",
      "A unit containing water, designed for recreational/therapeutic use, NOT drained after each use, with hydro-massage jets, air bubbles, or current flow over a majority of the area",
      "A whirlpool used only by adults"
    ],
    answer: 2,
    category: "Definitions",
    slideRef: "Part 4, Slide 62"
  },
  {
    question: "What is the definition of a public cold plunge pool?",
    options: [
      "Any pool kept below 20 °C",
      "A public pool maintained at 15 °C or less, with or without hydrojets, that is NOT drained, cleaned, sanitized, and refilled before each use",
      "An outdoor pool used in winter",
      "A pool only used after a sauna"
    ],
    answer: 1,
    category: "Definitions",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },

  // ---------- INSPECTION & RISK DEFINITIONS (static options) ----------
  {
    question: "What is the stated purpose of the LSS Aquatic Safety Inspection?",
    options: [
      "To audit pool finances",
      "Designed to maximize safety by identifying where the facility fails to meet appropriate standards, and thereby minimize the risk of drowning or serious water-related injury",
      "To test lifeguard skills",
      "To evaluate marketing materials"
    ],
    answer: 1,
    category: "Inspections",
    slideRef: "Part 1, Slide 26"
  },
  {
    question: "Define a 'Comprehensive Aquatic Safety Audit':",
    options: [
      "A water-quality lab test",
      "An all-encompassing review and evaluation by LSS Auditors of the complete operation of an aquatics program within a community",
      "An hour-long pool walk-through",
      "A lifeguard recertification clinic"
    ],
    answer: 1,
    category: "Inspections",
    slideRef: "Part 1, Slide 15"
  },
  {
    question: "Define 'Aquatic Facility Accreditation':",
    options: [
      "A government licence to sell pool memberships",
      "An inspection process through which the Lifesaving Society assesses and formally recognizes an aquatic facility's operation",
      "An award given to the cleanest facility",
      "A certificate proving water clarity"
    ],
    answer: 1,
    category: "Accreditation",
    slideRef: "Part 4, Slide 105"
  },
  {
    question: "Define 'Risk' as used in the inspection process:",
    options: [
      "Anything that could be a hazard",
      "The chance of physical injury, property damage, or financial loss",
      "Equipment failure rates",
      "Insurance premium calculation"
    ],
    answer: 1,
    category: "Definitions",
    slideRef: "Part 1, Slide 28"
  },
  {
    question: "Define 'Risk Management':",
    options: [
      "Avoiding all risks at any cost",
      "The thorough identification and evaluation of risks, and the careful selection and implementation of risk control strategies",
      "Buying liability insurance",
      "Posting warning signs"
    ],
    answer: 1,
    category: "Definitions",
    slideRef: "Part 1, Slide 35"
  },
  {
    question: "Define a 'Priority' inspection item:",
    options: [
      "A minor cosmetic flaw",
      "An item representing a major safety risk; merits immediate action; the Society recommends the facility be closed until corrected",
      "Any paperwork issue",
      "Optional improvement"
    ],
    answer: 1,
    category: "Inspections",
    slideRef: "Part 1, Slides 48–49"
  },
  {
    question: "Define a 'Secondary' inspection item:",
    options: [
      "A safety risk requiring closure",
      "An item in contravention of a statute, an LSS position on reasonable safety practice, or designed to enhance safe use of aquatic facilities",
      "A cosmetic-only issue",
      "A duplicate of a Priority item"
    ],
    answer: 1,
    category: "Inspections",
    slideRef: "Part 1, Slides 48–49"
  },

  // ---------- WATER CHEMISTRY (distractor pool format) ----------
  {
    question: "What is the required pH range for a public pool?",
    correct: "7.2 – 7.8",
    distractors: ["6.8 – 7.4", "7.0 – 7.6", "7.4 – 8.0", "7.0 – 7.8", "6.8 – 7.6"],
    category: "Water Chemistry",
    explanation: "Pool pH must be maintained between 7.2 and 7.8.",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the Free Available Chlorine (FAC) range for an unstabilized pool?",
    correct: "0.5 – 10 ppm",
    distractors: ["1.0 – 10 ppm", "2.0 – 8 ppm", "5.0 – 10 ppm", "0.2 – 5 ppm", "1.5 – 8 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the Free Available Chlorine range for a stabilized pool?",
    correct: "1.0 – 10 ppm",
    distractors: ["0.5 – 10 ppm", "2.0 – 8 ppm", "5.0 – 10 ppm", "1.5 – 5 ppm", "1.0 – 5 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the FAC range for a hot water pool (≥ 35 °C)?",
    correct: "5.0 – 10.0 ppm",
    distractors: ["0.5 – 10 ppm", "1.0 – 10 ppm", "2.0 – 8.0 ppm", "1.5 – 5 ppm", "3.0 – 10 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the chlorine range for a spa?",
    correct: "5.0 – 10.0 mg/L",
    distractors: ["0.5 – 5.0 mg/L", "1.0 – 5.0 mg/L", "2.0 – 8.0 mg/L", "3.0 – 10.0 mg/L", "1.5 – 5.0 mg/L"],
    category: "Water Chemistry",
    slideRef: "Part 4, Slide 64",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the chlorine range for a wading pool?",
    correct: "5.0 – 10.0 mg/L",
    distractors: ["0.5 – 5.0 mg/L", "1.0 – 5.0 mg/L", "2.0 – 8.0 mg/L", "3.0 – 10.0 mg/L", "1.0 – 10 mg/L"],
    category: "Water Chemistry",
    slideRef: "Part 4, Slide 39",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the total alkalinity range for a public pool?",
    correct: "60 – 180 ppm",
    distractors: ["40 – 100 ppm", "80 – 200 ppm", "100 – 250 ppm", "80 – 120 ppm", "60 – 200 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the combined chlorine threshold that triggers shocking the pool?",
    correct: "0.2 ppm",
    distractors: ["0.1 ppm", "0.5 ppm", "1.0 ppm", "0.3 ppm", "0.05 ppm"],
    category: "Water Chemistry",
    explanation: "When TC − FAC = CC reaches 0.2 ppm or higher, the pool must be shocked.",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the maximum allowable cyanuric acid level in an outdoor pool?",
    correct: "60 ppm",
    distractors: ["30 ppm", "50 ppm", "100 ppm", "40 ppm", "80 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the required ORP range when an automatic sensing device is used?",
    correct: "600 – 900 mV",
    distractors: ["400 – 600 mV", "500 – 800 mV", "700 – 1000 mV", "550 – 850 mV", "600 – 800 mV"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the total bromine range for a public pool?",
    correct: "2.0 – 8.0 ppm",
    distractors: ["1.0 – 5.0 ppm", "3.0 – 10.0 ppm", "5.0 – 10.0 ppm", "2.5 – 5.0 ppm", "1.5 – 8.0 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "Without an automatic sensing (ORP) device, how often must water be tested during operation?",
    correct: "Every 2 hours",
    distractors: ["Every 1 hour", "Every 4 hours", "Every 6 hours", "Every 30 minutes", "Every 3 hours"],
    category: "Water Chemistry",
    explanation: "Without ORP: 30 min before opening, then every 2 hours. With ORP: every 4 hours.",
    slideRef: "Part 3, Slide 24",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "With an automatic sensing (ORP) device, how often must water be tested during operation?",
    correct: "Every 4 hours",
    distractors: ["Every 1 hour", "Every 2 hours", "Every 6 hours", "Every 8 hours", "Every 3 hours"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "When mixing pool chemicals, the correct procedure is:",
    options: ["Add water to the chemical", "Add chemical to the water", "Mix both at the same time", "Always mix outdoors only"],
    answer: 1,
    category: "Water Chemistry",
    explanation: "Always add the chemical TO the water — never water to chemical.",
    regRef: "O. Reg. 565, ss. 6, 11, 13"
  },
  {
    question: "How often must a spa be super-chlorinated?",
    correct: "Once per week",
    distractors: ["Daily", "Once per month", "Only after fouling", "Twice per week", "Every 3 days"],
    category: "Water Chemistry",
    slideRef: "Part 4, Slide 64"
  },

  // ---------- TEMPERATURES (distractor pool format) ----------
  {
    question: "What is the maximum allowable spa water temperature?",
    correct: "40 °C",
    distractors: ["35 °C", "38 °C", "42 °C", "37 °C", "43 °C"],
    category: "Temperatures",
    slideRef: "Part 4, Slide 64",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the maximum allowable shower water temperature?",
    correct: "40 °C (104 °F)",
    distractors: ["38 °C (100 °F)", "43 °C (110 °F)", "46 °C (115 °F)", "37 °C (98 °F)", "42 °C (108 °F)"],
    category: "Temperatures",
    slideRef: "Part 2, Slide 30"
  },
  {
    question: "A therapy pool (not classified as a spa) must operate within what range?",
    correct: "32 – 34 °C",
    distractors: ["28 – 30 °C", "30 – 32 °C", "35 – 37 °C", "30 – 34 °C", "33 – 35 °C"],
    category: "Temperatures",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },

  // ---------- DISTANCES & DEPTHS (distractor pool format) ----------
  {
    question: "What is the maximum depth that defines a wading pool?",
    correct: "0.75 m",
    distractors: ["0.5 m", "1.0 m", "1.35 m", "0.6 m", "1.2 m"],
    category: "Distances & Depths",
    slideRef: "Part 4, Slide 37",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the bottom-visibility standard for a pool tank (the black disc test)?",
    correct: "Visible at 9 m",
    distractors: ["Visible at 6 m", "Visible at 12 m", "Visible at 15 m", "Visible at 7.5 m", "Visible at 10 m"],
    category: "Distances & Depths",
    explanation: "The 150 mm black disc on a white background must be visible from 9 m.",
    slideRef: "Part 3, Slide 3",
    regRef: "O. Reg. 565, ss. 7, 19(6)"
  },
  {
    question: "A 'Shallow Water — No Diving' sign is required where the maximum water depth is:",
    correct: "≤ 2.5 m",
    distractors: ["≤ 1.35 m", "≤ 2.0 m", "≤ 3.0 m", "≤ 1.5 m", "≤ 2.3 m"],
    category: "Distances & Depths",
    slideRef: "Part 2, Slide 46",
    regRef: "O. Reg. 565, s. 19(7)"
  },
  {
    question: "At what depth does a wave pool require a 'no diving / no jumping' sign?",
    correct: "2.3 m or less",
    distractors: ["1.35 m or less", "2.5 m or less", "3.0 m or less", "1.5 m or less", "2.0 m or less"],
    category: "Distances & Depths",
    slideRef: "Part 4, Slide 6"
  },
  {
    question: "How far below water level must a water slide channel terminate?",
    correct: "150 mm",
    distractors: ["50 mm", "100 mm", "200 mm", "75 mm", "250 mm"],
    category: "Distances & Depths",
    regRef: "O. Reg. 565"
  },
  {
    question: "The shallow / deep boundary depth used in bather load calculations is:",
    correct: "1.35 m",
    distractors: ["1.0 m", "1.2 m", "1.5 m", "1.25 m", "1.4 m"],
    category: "Distances & Depths",
    explanation: "Shallow ≤ 1.35 m (4.5 ft); Deep > 1.35 m.",
    regRef: "O. Reg. 565, ss. 10, 17"
  },
  {
    question: "GFCI is required if the pool has underwater lights or electrical outlets within what distance of the pool surface?",
    correct: "3 m",
    distractors: ["1 m", "2 m", "5 m", "1.5 m", "4 m"],
    category: "Distances & Depths",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },

  // ---------- POOL CLASSES & TURNOVER (distractor pool format) ----------
  {
    question: "How many classes of public pools does Regulation 565 establish?",
    correct: "3",
    distractors: ["2", "4", "5", "6", "7"],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "How often must a Class A pool's water turn over (cycle through filters)?",
    correct: "4 times per day",
    distractors: ["2 times per day", "3 times per day", "6 times per day", "8 times per day", "5 times per day"],
    category: "Pool Classifications",
    explanation: "Class A: 4×/day (every 6 hours). Class B: 3×/day (every 8 hours).",
    regRef: "O. Reg. 565"
  },
  {
    question: "How often must a Class B pool's water turn over?",
    correct: "3 times per day",
    distractors: ["2 times per day", "4 times per day", "6 times per day", "1 time per day", "5 times per day"],
    category: "Pool Classifications",
    regRef: "O. Reg. 565"
  },
  {
    question: "How much make-up (fresh) water must be added per bather per day?",
    correct: "15 L",
    distractors: ["5 L", "10 L", "20 L", "12 L", "25 L"],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the maximum percentage of pool volume that can be added as make-up water per day?",
    correct: "20%",
    distractors: ["10%", "15%", "25%", "30%", "5%"],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 7"
  },

  // ---------- SAFETY EQUIPMENT (distractor pool format) ----------
  {
    question: "What is the required length of a reaching pole?",
    correct: "3.65 m",
    distractors: ["2.5 m", "3.0 m", "4.5 m", "3.5 m", "4.0 m"],
    category: "Safety Equipment",
    slideRef: "Part 2, Slide 45",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },
  {
    question: "How many buoyant throwing aids are required at a public pool?",
    correct: "2",
    distractors: ["1", "3", "4", "5", "6"],
    category: "Safety Equipment",
    slideRef: "Part 2, Slide 45",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },
  {
    question: "What is the required rope length attached to a buoyant throwing aid?",
    options: ["3 m", "Half the width of the pool", "3 m + half the width of the pool", "Full width of the pool"],
    answer: 2,
    category: "Safety Equipment",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },
  {
    question: "What is the diameter of the rope attached to a buoyant throwing aid?",
    correct: "6 mm",
    distractors: ["3 mm", "9 mm", "12 mm", "5 mm", "8 mm"],
    category: "Safety Equipment",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },
  {
    question: "How often must a GFCI be tested?",
    options: ["Daily", "Weekly", "Monthly or per manufacturer (whichever is more frequent)", "Annually"],
    answer: 2,
    category: "Safety Equipment",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },
  {
    question: "How often must spa GFI be tested?",
    correct: "Daily",
    distractors: ["Weekly", "Monthly", "Annually", "Every shift", "Twice per week"],
    category: "Safety Equipment",
    slideRef: "Part 4, Slide 63"
  },
  {
    question: "Which item is REQUIRED in a regulation-compliant first aid kit?",
    options: [
      "Aspirin tablets",
      "Resuscitation pocket masks",
      "EpiPens",
      "Antibiotic ointment"
    ],
    answer: 1,
    category: "Safety Equipment",
    regRef: "O. Reg. 565, s. 6"
  },
  {
    question: "What gauze pad size is required in the first aid kit?",
    correct: "7.5 cm square",
    distractors: ["5 cm square", "10 cm square", "15 cm square", "6 cm square", "12 cm square"],
    category: "Safety Equipment",
    regRef: "O. Reg. 565, s. 6"
  },

  // ---------- LIFEGUARDS & SUPERVISION (distractor pool format) ----------
  {
    question: "What is the minimum age for a lifeguard?",
    correct: "15 years",
    distractors: ["14 years", "16 years", "18 years", "13 years", "17 years"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "How recent must a lifeguard's certificate be?",
    correct: "Within 2 years of issue",
    distractors: ["Within 1 year of issue", "Within 3 years of issue", "Within 5 years of issue", "Within 18 months of issue", "Within 4 years of issue"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "At a Class A pool, how recent must the within-call first aid certificate be?",
    correct: "Within 3 years",
    distractors: ["Within 1 year", "Within 2 years", "Within 5 years", "Within 4 years", "Within 18 months"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 0–30 bathers (lifeguards only), what is the minimum number of lifeguards required?",
    correct: "1",
    distractors: ["2", "3", "4", "0", "5"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 31–125 bathers (lifeguards only, no assistants), what is the minimum number of lifeguards?",
    correct: "2",
    distractors: ["1", "3", "4", "5", "6"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 126–250 bathers (lifeguards only), what is the minimum number of lifeguards?",
    correct: "3",
    distractors: ["2", "4", "5", "6", "7"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "What is the rule about assistant lifeguards in relation to lifeguards?",
    options: [
      "Must be at least double the lifeguards",
      "Must equal the lifeguards",
      "Cannot exceed the number of lifeguards",
      "No restriction"
    ],
    answer: 2,
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "What is the minimum age and qualification for a Wading Pool Attendant per the slides?",
    options: [
      "13 years + Bronze Star",
      "14 years + lifeguard certificate",
      "15 years + LSS Wading Pool Attendant cert OR current first aid",
      "16 years + National Lifeguard"
    ],
    answer: 2,
    category: "Lifeguards & Supervision",
    slideRef: "Part 4, Slide 42"
  },
  {
    question: "What lifeguard certification is required at a wave pool?",
    options: [
      "Bronze Cross",
      "Bronze Medallion",
      "Current National Lifeguard (NL)",
      "Standard First Aid only"
    ],
    answer: 2,
    category: "Lifeguards & Supervision",
    slideRef: "Part 4, Slide 6"
  },
  {
    question: "What is the minimum number of lifeguard stations at a wave pool?",
    correct: "2",
    distractors: ["1", "3", "4", "5", "6"],
    category: "Lifeguards & Supervision",
    slideRef: "Part 4, Slide 6"
  },

  // ---------- BATHER LOAD (distractor pool format) ----------
  {
    question: "What is the bather load formula for a public pool?",
    options: [
      "(Shallow ÷ 2.5) + (Deep ÷ 1.4)",
      "(Shallow ÷ 1.4) + (Deep ÷ 2.5)",
      "(Total area ÷ 2.0)",
      "(Total area ÷ 1.5)"
    ],
    answer: 1,
    category: "Bather Load",
    explanation: "Bather load = (Shallow area ÷ 1.4) + (Deep area ÷ 2.5), areas in m².",
    regRef: "O. Reg. 565, ss. 10, 17"
  },
  {
    question: "For an unsupervised Class B pool greater than 93 m², what is the bather load?",
    options: ["Calculated by formula", "Always 10", "Always 25", "Always 50"],
    answer: 1,
    category: "Bather Load",
    regRef: "O. Reg. 565, s. 17(19)"
  },
  {
    question: "Class B pools below what size may operate without supervision?",
    correct: "93 m²",
    distractors: ["50 m²", "75 m²", "100 m²", "150 m²", "60 m²"],
    category: "Bather Load",
    regRef: "O. Reg. 565, s. 17(19)"
  },
  {
    question: "A buoy line is required at a Class B pool when the slope of depth change is greater than:",
    correct: "8%",
    distractors: ["5%", "10%", "15%", "12%", "6%"],
    category: "Bather Load",
    regRef: "O. Reg. 565, ss. 10, 17"
  },

  // ---------- AGES & ADMISSION (distractor pool format) ----------
  {
    question: "Children under what age must be accompanied by a parent/guardian (max 2:1 ratio)?",
    correct: "Under 6",
    distractors: ["Under 5", "Under 8", "Under 10", "Under 7", "Under 4"],
    category: "Ages & Admission",
    slideRef: "Part 2, Slide 20",
    regRef: "Office of the Chief Coroner"
  },
  {
    question: "Children between what ages may NOT be admitted unaccompanied unless they pass the facility swim test?",
    correct: "6–9",
    distractors: ["4–7", "5–8", "7–10", "5–9", "6–10"],
    category: "Ages & Admission",
    slideRef: "Part 2, Slide 20"
  },
  {
    question: "From what age may a child be admitted unaccompanied?",
    correct: "10 and over",
    distractors: ["8 and over", "9 and over", "12 and over", "11 and over", "7 and over"],
    category: "Ages & Admission",
    slideRef: "Part 2, Slide 20"
  },
  {
    question: "Per Coroner standards, the maximum ratio for non-swimmers under 10 (without lifejackets) is:",
    correct: "4 : 1",
    distractors: ["2 : 1", "6 : 1", "8 : 1", "3 : 1", "5 : 1"],
    category: "Ages & Admission",
    regRef: "Office of the Chief Coroner"
  },
  {
    question: "Per Coroner standards, the maximum ratio for non-swimmers under 10 WITH lifejackets is:",
    correct: "8 : 1",
    distractors: ["2 : 1", "4 : 1", "6 : 1", "10 : 1", "5 : 1"],
    category: "Ages & Admission",
    regRef: "Office of the Chief Coroner"
  },
  {
    question: "From what age must bathers use the changeroom designated for their gender?",
    correct: "7 and over",
    distractors: ["5 and over", "6 and over", "10 and over", "8 and over", "9 and over"],
    category: "Ages & Admission",
    slideRef: "Part 2, Slide 21"
  },
  {
    question: "At an unsupervised Class B pool, bathers under 12 must be accompanied by a parent/agent at least:",
    correct: "16 years old",
    distractors: ["14 years old", "15 years old", "18 years old", "12 years old", "17 years old"],
    category: "Ages & Admission",
    regRef: "O. Reg. 565, s. 17(19)"
  },

  // ---------- SPECIALTY FACILITIES ----------
  {
    question: "Who currently regulates water slides in Ontario?",
    options: [
      "Regulation 565 only",
      "Amusement Devices Act (TSSA), inspected annually",
      "Public Health Act",
      "Ontario Building Code only"
    ],
    answer: 1,
    category: "Specialty Facilities",
    regRef: "Amusement Devices Act"
  },
  {
    question: "A dry slide is exempt from being classified as a water slide if it is no taller than:",
    correct: "3 m",
    distractors: ["1.5 m", "2 m", "4 m", "2.5 m", "5 m"],
    category: "Specialty Facilities",
    regRef: "O. Reg. 565"
  },
  {
    question: "A wet slide is exempt from being classified as a water slide if it is shorter than ___ from entry to exit:",
    correct: "2 m",
    distractors: ["1 m", "3 m", "4 m", "1.5 m", "2.5 m"],
    category: "Specialty Facilities",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the maximum recommended spa use time?",
    correct: "15 minutes",
    distractors: ["10 minutes", "20 minutes", "30 minutes", "5 minutes", "25 minutes"],
    category: "Specialty Facilities",
    slideRef: "Part 4, Slide 63"
  },
  {
    question: "How far must an emergency telephone be from a spa?",
    correct: "Within 30 m",
    distractors: ["Within 10 m", "Within 20 m", "Within 50 m", "Within 15 m", "Within 25 m"],
    category: "Specialty Facilities",
    slideRef: "Part 4, Slide 65"
  },

  // ---------- SIGNAGE (distractor pool format) ----------
  {
    question: "What is the minimum letter height for depth markings on the deck?",
    correct: "100 mm",
    distractors: ["50 mm", "75 mm", "150 mm", "125 mm", "200 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(6)"
  },
  {
    question: "What is the minimum letter height for a 'Shallow Water — No Diving' sign?",
    correct: "150 mm",
    distractors: ["100 mm", "125 mm", "200 mm", "75 mm", "175 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(7)"
  },
  {
    question: "What is the minimum letter height for a 'No Supervision' notice at a Class B pool?",
    correct: "25 mm",
    distractors: ["10 mm", "50 mm", "100 mm", "15 mm", "75 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, s. 17(19)"
  },
  {
    question: "What is the diameter of the black disc used as a clarity test marker?",
    correct: "150 mm",
    distractors: ["100 mm", "125 mm", "200 mm", "175 mm", "75 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(6)"
  },

  // ---------- ACCREDITATION (mix of formats) ----------
  {
    question: "What is the year-round accreditation fee?",
    correct: "$100 every 2 years",
    distractors: ["$50 every year", "$150 every 3 years", "$200 annually", "$100 every year", "$50 every 2 years"],
    category: "Accreditation",
    slideRef: "Part 4, Slide 110"
  },
  {
    question: "What is the seasonal accreditation fee?",
    correct: "$50 annually",
    distractors: ["$25 annually", "$100 every 2 years", "$150 annually", "$75 annually", "$100 annually"],
    category: "Accreditation",
    slideRef: "Part 4, Slide 110"
  },
  {
    question: "How many Priority OR Secondary items cause an accreditation FAIL?",
    options: [
      "1+ Priority OR more than 5 Secondary",
      "2+ Priority OR more than 10 Secondary",
      "Any 1 item of either type",
      "Only Priority items count"
    ],
    answer: 0,
    category: "Accreditation",
    slideRef: "Part 4, Slide 109"
  },
  {
    question: "What are the pre-requisites to apply for facility accreditation?",
    options: [
      "A passed safety audit within 12 months",
      "None",
      "Operator must hold NL certification",
      "Pool must be Class A only"
    ],
    answer: 1,
    category: "Accreditation",
    slideRef: "Part 4, Slide 108"
  },
  {
    question: "Roughly how long does an accreditation inspection take?",
    correct: "1 hour",
    distractors: ["15 minutes", "30 minutes", "Half a day", "2 hours", "45 minutes"],
    category: "Accreditation",
    slideRef: "Part 4, Slide 109"
  },
  {
    question: "How long is facility accreditation valid?",
    correct: "2 years",
    distractors: ["1 year", "3 years", "5 years", "18 months", "4 years"],
    category: "Accreditation",
    slideRef: "Part 4 (Aquatic Facility Accreditation)"
  },
  {
    question: "Can an Inspector close a pool?",
    options: [
      "Yes, immediately",
      "Yes, but only Class B pools",
      "No — only Public Health Inspectors can close pools",
      "Only with police involvement"
    ],
    answer: 2,
    category: "Accreditation",
    slideRef: "Part 1, Slide 27"
  },
  {
    question: "Can an Inspector inspect or accredit their own pool?",
    options: [
      "Neither inspect nor accredit",
      "May inspect AND accredit",
      "May inspect, but should NOT accredit",
      "Only with written approval"
    ],
    answer: 2,
    category: "Accreditation",
    slideRef: "Part 4, Slide 111"
  },
  {
    question: "In numeric risk evaluation, what two factors are measured?",
    options: [
      "Cost × Time",
      "Magnitude × Frequency",
      "Severity × Cost",
      "Probability × Severity"
    ],
    answer: 1,
    category: "Inspections",
    slideRef: "Part 1, Slide 35"
  },
  {
    question: "What is the rating scale for each factor in numeric risk evaluation?",
    correct: "1 to 5",
    distractors: ["1 to 3", "1 to 10", "0 to 100", "0 to 10", "1 to 7"],
    category: "Inspections",
    slideRef: "Part 1, Slide 37"
  },
  {
    question: "What is the overall score range in numeric risk evaluation?",
    correct: "0 – 25",
    distractors: ["0 – 10", "0 – 50", "0 – 100", "1 – 25", "0 – 30"],
    category: "Inspections",
    slideRef: "Part 1, Slide 37"
  },

  // ---------- RECORDS & NOTIFICATIONS (distractor pool format) ----------
  {
    question: "How long must daily records be retained?",
    correct: "1 year",
    distractors: ["6 months", "2 years", "5 years", "3 years", "18 months"],
    category: "Records & Notifications",
    regRef: "O. Reg. 565, s. 8"
  },
  {
    question: "How many days in advance must a pool opening be notified to Public Health?",
    correct: "14 days",
    distractors: ["7 days", "30 days", "60 days", "10 days", "21 days"],
    category: "Records & Notifications",
    regRef: "O. Reg. 565, ss. 5, 26.1"
  },
  {
    question: "Re-notification of Public Health is required when a pool has been closed for more than:",
    correct: "4 weeks",
    distractors: ["1 week", "2 weeks", "8 weeks", "6 weeks", "3 weeks"],
    category: "Records & Notifications",
    regRef: "O. Reg. 565, ss. 5, 26.1"
  },
  {
    question: "Which is a required DAILY log item per Regulation 565?",
    options: [
      "GFCI test",
      "Bather loads",
      "Outlet checks",
      "Emergency Stop test"
    ],
    answer: 1,
    category: "Records & Notifications",
    slideRef: "Part 3, Slide 26"
  },

  // ---------- CLOSURE TRIGGERS ----------
  {
    question: "Which is a Public Health pool closure trigger?",
    options: [
      "A lifeguard wearing the wrong colour shirt",
      "Filtration / circulation not operating",
      "More than 50 bathers in the pool",
      "Pool deck slightly wet"
    ],
    answer: 1,
    category: "Closure Triggers",
    regRef: "Health Protection and Promotion Act; Reg 950 Schedule 39"
  },
  {
    question: "Fines for non-compliance with Regulation 565 range from:",
    correct: "$55 to $465",
    distractors: ["$25 to $100", "$100 to $1000", "$500 to $5000", "$50 to $500", "$75 to $750"],
    category: "Closure Triggers",
    regRef: "Health Protection and Promotion Act; Reg 950 Schedule 39"
  }
];
