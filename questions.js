// =============================================================
// AQUATIC SAFETY INSPECTOR - QUESTION BANK
// =============================================================
// Comprehensive coverage: every numeric value in the cheat sheet
// and every definition in the study materials gets its own question.
// All questions use the distractor-pool format so the visible options
// vary between runs, AND all options are shuffled into A/B/C/D
// positions on every render.
//
// FORMAT (used for every question):
//   {
//     question: "The question text",
//     correct:  "The right answer",
//     distractors: ["wrong 1", "wrong 2", "wrong 3", "wrong 4", "wrong 5"],
//     category: "Water Chemistry",
//     explanation: "Optional short note shown after answering",
//     slideRef: "Part 3, Slide 24",       // optional
//     regRef:   "O. Reg. 565, s. 7"        // optional
//   }
// 3 of the 5 distractors are picked at random per quiz run.
// =============================================================

const QUESTIONS = [
  // =============================================================
  // POOL CLASSIFICATIONS — DEFINITIONS
  // =============================================================
  {
    question: "Which best describes a Class A pool?",
    correct: "A pool where the general public is admitted, or at an educational/athletic institution supported by public funds, or at a recreational camp",
    distractors: [
      "An apartment building with 6+ dwelling units",
      "A wading pool, splash pad, or floatation tank",
      "A private residential pool",
      "Any indoor pool over 100 m²",
      "A pool used only for competitive swimming"
    ],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "Which best describes a Class B pool?",
    correct: "An apartment building (6+ units), hotel, condominium, child care centre, day camp, or special-needs facility",
    distractors: [
      "A pool at an educational institution supported by public funds",
      "A water slide receiving basin",
      "A spray/splash pad",
      "Any outdoor public pool",
      "A pool serving the general public for a fee"
    ],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "Which is included in the Class C pool category?",
    correct: "Wading pools, spray/splash pads, water slide receiving basins, and floatation tanks",
    distractors: [
      "Public school pools",
      "Hotels with 6+ rooms",
      "All Olympic-sized pools",
      "Apartment building pools",
      "Therapy pools"
    ],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "An apartment building with how many dwelling units triggers Class B classification?",
    correct: "6 or more",
    distractors: ["3 or more", "5 or more", "10 or more", "8 or more", "12 or more"],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "A pool at a hotel with five or fewer suites is:",
    correct: "Exempt from Regulation 565 (with required notice posted)",
    distractors: [
      "Classified as Class B",
      "Classified as Class C",
      "Required to be private only",
      "Classified as Class A",
      "Subject to Regulation 503 instead"
    ],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 4.1"
  },
  {
    question: "How many classes of public pools does Regulation 565 establish?",
    correct: "3",
    distractors: ["2", "4", "5", "6", "7"],
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },

  // =============================================================
  // POOL TYPE — DEFINITIONS
  // =============================================================
  {
    question: "How is a 'wading pool' defined in Regulation 565?",
    correct: "Any tank with water depth of 0.75 m (2'6\") or less at any point",
    distractors: [
      "Any tank with water depth of 1.0 m or less",
      "A pool used only by children under 6",
      "Any pool labeled 'kiddie pool'",
      "Any tank with water depth of 0.5 m or less",
      "A pool with a maximum depth of 1.35 m"
    ],
    category: "Definitions",
    slideRef: "Part 4, Slide 37",
    regRef: "O. Reg. 565"
  },
  {
    question: "How is a 'wave pool' defined?",
    correct: "A public pool that is provided with a means for inducing wave motion in the water",
    distractors: [
      "A pool deeper than 2.5 m",
      "Any outdoor pool over 100 m²",
      "A pool used for surfing competitions only",
      "A pool with a depth-changing floor",
      "A pool with current-flow jets"
    ],
    category: "Definitions",
    slideRef: "Part 4, Slide 4"
  },
  {
    question: "How is a 'spa' defined?",
    correct: "A unit containing water designed for recreational/therapeutic use, NOT drained after each use, with hydro-massage jets, air bubbles, or current flow over a majority of the area",
    distractors: [
      "Any heated pool",
      "A pool drained after each use",
      "A whirlpool used only by adults",
      "A pool with a temperature above 35 °C",
      "A small pool used for relaxation"
    ],
    category: "Definitions",
    slideRef: "Part 4, Slide 62"
  },
  {
    question: "What is the definition of a public cold plunge pool?",
    correct: "A public pool maintained at 15 °C or less, with or without hydrojets, NOT drained, cleaned, sanitized, and refilled before each use",
    distractors: [
      "Any pool kept below 20 °C",
      "An outdoor pool used in winter",
      "A pool only used after a sauna",
      "A pool maintained below 10 °C",
      "A pool drained after each bather"
    ],
    category: "Definitions",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "What is the definition of a public floatation tank (Class C)?",
    correct: "A basin/chamber/tank containing a saturated magnesium sulphate solution, not drained between uses, designed for up to 2 bathers, providing a light- and sound-reduced environment",
    distractors: [
      "Any small pool used for therapy",
      "A pool kept below 30 °C",
      "A multi-person sensory deprivation pool",
      "A drained-after-use single-person tank",
      "A pool with UV disinfection only"
    ],
    category: "Definitions",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "What is the definition of a public floatation POOL (multi-person)?",
    correct: "A public pool containing a saturated magnesium sulphate solution, not drained/cleaned/sanitized between uses, designed for multiple persons",
    distractors: [
      "A pool with multiple floating rafts",
      "Any pool with extra buoyancy",
      "A 1–2 person sensory tank",
      "A pool drained after each session",
      "A pool with magnesium-only treatment"
    ],
    category: "Definitions",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },

  // =============================================================
  // INSPECTION & RISK — DEFINITIONS
  // =============================================================
  {
    question: "What is the stated purpose of the LSS Aquatic Safety Inspection?",
    correct: "Designed to maximize safety by identifying where the facility fails to meet appropriate standards, and thereby minimize the risk of drowning or serious water-related injury",
    distractors: [
      "To audit pool finances",
      "To test lifeguard skills",
      "To evaluate marketing materials",
      "To certify water quality only",
      "To replace Public Health inspections"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slide 26"
  },
  {
    question: "Define a 'Comprehensive Aquatic Safety Audit':",
    correct: "An all-encompassing review and evaluation by LSS Auditors of the complete operation of an aquatics program within a community",
    distractors: [
      "A water-quality lab test",
      "An hour-long pool walk-through",
      "A lifeguard recertification clinic",
      "A single-area technical analysis",
      "A government licence inspection"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slide 15"
  },
  {
    question: "Define an Audit 'Specific Analysis':",
    correct: "A review of a specific area within the operation of an aquatic program or facility (e.g., lifeguard station placement, bulkhead placement)",
    distractors: [
      "A full audit of a community's aquatics program",
      "A water-chemistry-only inspection",
      "A staff certification review",
      "A facility's annual financial audit",
      "A safety-equipment-only check"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slide 13"
  },
  {
    question: "Define 'Aquatic Facility Accreditation':",
    correct: "An inspection process through which the Lifesaving Society assesses and formally recognizes an aquatic facility's operation",
    distractors: [
      "A government licence to sell pool memberships",
      "An award given to the cleanest facility",
      "A certificate proving water clarity",
      "An ISO certification for pools",
      "A standard issued by Public Health"
    ],
    category: "Accreditation",
    slideRef: "Part 4, Slide 105"
  },
  {
    question: "Define 'Risk' as used in the inspection process:",
    correct: "The chance of physical injury, property damage, or financial loss",
    distractors: [
      "Anything that could be a hazard",
      "Equipment failure rates",
      "Insurance premium calculation",
      "The likelihood of a lawsuit",
      "Any deviation from a standard"
    ],
    category: "Definitions",
    slideRef: "Part 1, Slide 28"
  },
  {
    question: "Define 'Risk Management':",
    correct: "The thorough identification and evaluation of risks, and the careful selection and implementation of risk control strategies",
    distractors: [
      "Avoiding all risks at any cost",
      "Buying liability insurance",
      "Posting warning signs",
      "Closing pools whenever a hazard appears",
      "Training staff in CPR"
    ],
    category: "Definitions",
    slideRef: "Part 1, Slide 35"
  },
  {
    question: "Define 'Magnitude' in numeric risk evaluation:",
    correct: "The severity or seriousness of the resulting injury, damage, or loss",
    distractors: [
      "The number of times an incident occurs",
      "The cost of repairing damage",
      "The size of the affected area",
      "The likelihood of an incident",
      "The duration of an incident"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slide 37"
  },
  {
    question: "Define 'Frequency' in numeric risk evaluation:",
    correct: "The likelihood of the injury, damage, or loss",
    distractors: [
      "The severity of the injury",
      "How often staff complete inspections",
      "The number of bathers per day",
      "The cost of the resulting damage",
      "The duration of an incident"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slide 37"
  },
  {
    question: "Define the 'Analog method' of risk evaluation:",
    correct: "A yes/no response to each item — does it meet the standard? Used for facility inspections.",
    distractors: [
      "A 0–25 numeric scoring system",
      "A pass/fail percentage system",
      "A magnitude × frequency calculation",
      "A weighted average of priority items",
      "A 1–5 rating scale per item"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slide 40"
  },
  {
    question: "Define a 'Priority' inspection item:",
    correct: "An item representing a major safety risk; merits immediate action; the Society recommends the facility be closed until corrected",
    distractors: [
      "A minor cosmetic flaw",
      "Any paperwork issue",
      "An optional improvement",
      "A statute violation only",
      "An item requiring documentation review"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slides 48–49"
  },
  {
    question: "Define a 'Secondary' inspection item:",
    correct: "An item in contravention of a statute, an LSS position on reasonable safety practice, or designed to enhance safe use of aquatic facilities",
    distractors: [
      "A safety risk requiring immediate closure",
      "A cosmetic-only issue",
      "A duplicate of a Priority item",
      "Any item not on the checklist",
      "An optional improvement suggestion"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slides 48–49"
  },

  // =============================================================
  // INSPECTOR ROLE & PROCESS
  // =============================================================
  {
    question: "Can an Inspector close a pool?",
    correct: "No — only Public Health Inspectors can close pools",
    distractors: [
      "Yes, immediately",
      "Yes, but only Class B pools",
      "Only with police involvement",
      "Yes, after written notice to the operator",
      "Yes, but only if the operator agrees"
    ],
    category: "Accreditation",
    slideRef: "Part 1, Slide 27"
  },
  {
    question: "Can an Inspector inspect or accredit their own pool?",
    correct: "May inspect, but should NOT accredit",
    distractors: [
      "Neither inspect nor accredit",
      "May inspect AND accredit",
      "Only with written approval",
      "Only if no other inspector is available",
      "Only after a 30-day waiting period"
    ],
    category: "Accreditation",
    slideRef: "Part 4, Slide 111"
  },
  {
    question: "What inspection method does the facility inspection use?",
    correct: "Analog measurement (yes/no per item)",
    distractors: [
      "Numeric magnitude × frequency scoring",
      "Pass/fail percentage system",
      "Weighted average of priority items",
      "1–5 rating scale per item",
      "0–100 risk score"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slide 42"
  },

  // =============================================================
  // WATER CHEMISTRY — NUMBERS
  // =============================================================
  {
    question: "What is the required pH range for a public pool?",
    correct: "7.2 – 7.8",
    distractors: ["6.8 – 7.4", "7.0 – 7.6", "7.4 – 8.0", "7.0 – 7.8", "6.8 – 7.6"],
    category: "Water Chemistry",
    explanation: "Pool pH must be maintained between 7.2 and 7.8.",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the pH range for a wading pool?",
    correct: "7.2 – 7.8",
    distractors: ["6.8 – 7.4", "7.0 – 7.6", "7.4 – 8.0", "7.0 – 7.8", "6.8 – 8.0"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the pH range for a spa?",
    correct: "7.2 – 7.8",
    distractors: ["6.8 – 7.4", "7.0 – 7.6", "7.4 – 8.0", "7.0 – 7.8", "6.8 – 8.0"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the pH range for a floatation tank?",
    correct: "7.2 – 7.8",
    distractors: ["6.8 – 7.4", "7.0 – 7.6", "7.4 – 8.0", "7.0 – 7.8", "6.8 – 8.0"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
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
    question: "What is the FAC range for a cold plunge or floatation pool (multi-person)?",
    correct: "5.0 – 10.0 ppm",
    distractors: ["0.5 – 10 ppm", "1.0 – 10 ppm", "2.0 – 8.0 ppm", "1.5 – 5 ppm", "3.0 – 10 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "What is the FAC range for a Class C floatation tank?",
    correct: "1.5 – 5 ppm",
    distractors: ["0.5 – 10 ppm", "1.0 – 10 ppm", "2.0 – 8.0 ppm", "5.0 – 10 ppm", "0.5 – 5 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
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
    question: "What is the chlorine range for a wading pool (filtered or fill-and-draw)?",
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
    question: "What is the total alkalinity range for a Class C floatation tank?",
    correct: "80 – 120 ppm",
    distractors: ["40 – 100 ppm", "60 – 180 ppm", "100 – 250 ppm", "60 – 200 ppm", "80 – 200 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "What is the total bromine range for a public pool?",
    correct: "2.0 – 8.0 ppm",
    distractors: ["1.0 – 5.0 ppm", "3.0 – 10.0 ppm", "5.0 – 10.0 ppm", "2.5 – 5.0 ppm", "1.5 – 8.0 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the total bromine range for a hot water pool (≥ 35 °C)?",
    correct: "5.0 – 10.0 ppm",
    distractors: ["1.0 – 5.0 ppm", "2.0 – 8.0 ppm", "3.0 – 10.0 ppm", "2.5 – 5.0 ppm", "1.5 – 8.0 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the bromine range for a Class C floatation tank?",
    correct: "2.5 – 5 ppm",
    distractors: ["1.0 – 5 ppm", "2.0 – 8 ppm", "5.0 – 10 ppm", "1.5 – 5 ppm", "3.0 – 8 ppm"],
    category: "Water Chemistry",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
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
    question: "When mixing pool chemicals, the correct procedure is:",
    correct: "Add the chemical to the water",
    distractors: [
      "Add water to the chemical",
      "Mix both at the same time",
      "Always mix outdoors only",
      "Pre-dissolve in solvent first",
      "Add chemicals only when the pool is closed"
    ],
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

  // =============================================================
  // WATER TESTING FREQUENCY — NUMBERS
  // =============================================================
  {
    question: "How long before opening must a pre-opening water test be completed?",
    correct: "30 minutes prior",
    distractors: [
      "10 minutes prior",
      "60 minutes prior",
      "2 hours prior",
      "15 minutes prior",
      "5 minutes prior"
    ],
    category: "Water Chemistry",
    slideRef: "Part 3, Slide 24",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "Without an automatic sensing (ORP) device, how often must water be tested during operation?",
    correct: "Every 2 hours",
    distractors: ["Every 1 hour", "Every 4 hours", "Every 6 hours", "Every 30 minutes", "Every 3 hours"],
    category: "Water Chemistry",
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
    question: "How often must a Class C floatation tank be tested AFTER opening?",
    correct: "The lesser of every 4 hours OR before each new bather",
    distractors: [
      "Every 2 hours OR before each new bather",
      "Every hour",
      "Once per day",
      "Every 6 hours",
      "Only before each new bather"
    ],
    category: "Water Chemistry",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },

  // =============================================================
  // TEMPERATURES — NUMBERS
  // =============================================================
  {
    question: "What is the maximum allowable spa water temperature?",
    correct: "40 °C (104 °F)",
    distractors: ["35 °C", "38 °C", "42 °C (108 °F)", "37 °C", "43 °C (110 °F)"],
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
    question: "What is the maximum allowable washroom sink water temperature?",
    correct: "40 °C (104 °F)",
    distractors: ["38 °C (100 °F)", "43 °C (110 °F)", "46 °C (115 °F)", "37 °C (98 °F)", "42 °C (108 °F)"],
    category: "Temperatures",
    slideRef: "Part 2, Slide 30"
  },
  {
    question: "A therapy pool (not classified as a spa) must operate within what range?",
    correct: "32 – 34 °C (must remain < 35 °C)",
    distractors: [
      "28 – 30 °C",
      "30 – 32 °C",
      "35 – 37 °C",
      "30 – 34 °C",
      "33 – 36 °C"
    ],
    category: "Temperatures",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "What is the maximum water temperature for a floatation tank?",
    correct: "Less than 37 °C",
    distractors: [
      "Less than 35 °C",
      "Less than 40 °C",
      "Less than 42 °C",
      "Less than 33 °C",
      "Less than 38 °C"
    ],
    category: "Temperatures",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "A hot water pool's water heater cutoff is set to what maximum (tamper-proof, independent of thermostat)?",
    correct: "40 °C",
    distractors: ["37 °C", "38 °C", "43 °C", "35 °C", "42 °C"],
    category: "Temperatures",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "A public cold plunge pool must be maintained at what maximum temperature?",
    correct: "15 °C or less",
    distractors: ["10 °C or less", "20 °C or less", "12 °C or less", "18 °C or less", "8 °C or less"],
    category: "Temperatures",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },

  // =============================================================
  // DISTANCES & DEPTHS — NUMBERS
  // =============================================================
  {
    question: "What is the maximum depth that defines a wading pool?",
    correct: "0.75 m (2'6\")",
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
    question: "If a water slide is level for 3 m at the exit, the maximum height above water level is:",
    correct: "50 mm",
    distractors: ["25 mm", "100 mm", "150 mm", "75 mm", "200 mm"],
    category: "Distances & Depths",
    regRef: "O. Reg. 565"
  },
  {
    question: "The shallow / deep boundary depth used in bather load calculations is:",
    correct: "1.35 m (4.5 ft)",
    distractors: ["1.0 m", "1.2 m", "1.5 m", "1.25 m", "1.4 m"],
    category: "Distances & Depths",
    explanation: "Shallow ≤ 1.35 m; Deep > 1.35 m.",
    regRef: "O. Reg. 565, ss. 10, 17"
  },
  {
    question: "GFCI is required if the pool has underwater lights or electrical outlets within what distance of the pool surface?",
    correct: "3 m",
    distractors: ["1 m", "2 m", "5 m", "1.5 m", "4 m"],
    category: "Distances & Depths",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },
  {
    question: "A Class B diving board ≤ 600 mm above water creates a diving area threshold within what distance from the board?",
    correct: "7.5 – 9 m",
    distractors: ["5 – 7 m", "9 – 12 m", "6 – 8 m", "4 – 6 m", "8 – 10 m"],
    category: "Distances & Depths",
    regRef: "O. Reg. 565, s. 19(9)"
  },
  {
    question: "An emergency telephone must be located within what distance of a spa?",
    correct: "30 m",
    distractors: ["10 m", "20 m", "50 m", "15 m", "25 m"],
    category: "Distances & Depths",
    slideRef: "Part 4, Slide 65"
  },

  // =============================================================
  // BATHER LOAD & POOL AREA — NUMBERS
  // =============================================================
  {
    question: "What is the bather load formula for a public pool?",
    correct: "(Shallow ÷ 1.4) + (Deep ÷ 2.5)",
    distractors: [
      "(Shallow ÷ 2.5) + (Deep ÷ 1.4)",
      "(Total area ÷ 2.0)",
      "(Total area ÷ 1.5)",
      "(Shallow ÷ 1.5) + (Deep ÷ 3.0)",
      "(Shallow + Deep) ÷ 2"
    ],
    category: "Bather Load",
    explanation: "Bather load = (Shallow area ÷ 1.4) + (Deep area ÷ 2.5), areas in m².",
    regRef: "O. Reg. 565, ss. 10, 17"
  },
  {
    question: "For an unsupervised Class B pool greater than 93 m², what is the bather load?",
    correct: "Always 10",
    distractors: ["Calculated by formula", "Always 25", "Always 50", "Always 5", "Always 20"],
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
  {
    question: "The standard lifeguard ratio table applies to pools with what maximum water surface area?",
    correct: "≤ 500 m²",
    distractors: ["≤ 300 m²", "≤ 400 m²", "≤ 750 m²", "≤ 1000 m²", "≤ 250 m²"],
    category: "Bather Load",
    regRef: "O. Reg. 565, s. 17"
  },

  // =============================================================
  // TURNOVER & MAKE-UP WATER — NUMBERS
  // =============================================================
  {
    question: "How often must a Class A pool's water turn over (cycle through filters)?",
    correct: "4 times per day (every 6 hours)",
    distractors: [
      "2 times per day",
      "3 times per day (every 8 hours)",
      "6 times per day",
      "8 times per day",
      "5 times per day"
    ],
    category: "Pool Classifications",
    regRef: "O. Reg. 565"
  },
  {
    question: "How often must a Class B pool's water turn over?",
    correct: "3 times per day (every 8 hours)",
    distractors: [
      "2 times per day",
      "4 times per day (every 6 hours)",
      "6 times per day",
      "1 time per day",
      "5 times per day"
    ],
    category: "Pool Classifications",
    regRef: "O. Reg. 565"
  },
  {
    question: "A Class C floatation tank must provide how many turnovers between each bather?",
    correct: "3",
    distractors: ["1", "2", "4", "5", "6"],
    category: "Pool Classifications",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
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

  // =============================================================
  // SAFETY EQUIPMENT — NUMBERS
  // =============================================================
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
    correct: "3 m + half the width of the pool",
    distractors: [
      "3 m",
      "Half the width of the pool",
      "Full width of the pool",
      "6 m + half the width",
      "Equal to the length of the pool"
    ],
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
    correct: "Monthly or per manufacturer (whichever is more frequent)",
    distractors: ["Daily", "Weekly", "Annually", "Every 6 months", "Every shift"],
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
    correct: "Resuscitation pocket masks",
    distractors: [
      "Aspirin tablets",
      "EpiPens",
      "Antibiotic ointment",
      "Defibrillator pads",
      "Burn cream"
    ],
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
  {
    question: "What rolls of gauze bandages are required in a first aid kit?",
    correct: "Both 5 cm and 10 cm wide rolls",
    distractors: [
      "Only 5 cm rolls",
      "Only 10 cm rolls",
      "5 cm and 7.5 cm rolls",
      "10 cm and 15 cm rolls",
      "Only 7.5 cm rolls"
    ],
    category: "Safety Equipment",
    regRef: "O. Reg. 565, s. 6"
  },

  // =============================================================
  // LIFEGUARDS & SUPERVISION — NUMBERS & RULES
  // =============================================================
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
    distractors: [
      "Within 1 year of issue",
      "Within 3 years of issue",
      "Within 5 years of issue",
      "Within 18 months of issue",
      "Within 4 years of issue"
    ],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "At a Class A pool, how recent must the within-call first aid certificate be?",
    correct: "Within 3 years",
    distractors: [
      "Within 1 year",
      "Within 2 years",
      "Within 5 years",
      "Within 4 years",
      "Within 18 months"
    ],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "At a Class A pool, the within-call first aid holder must be at least:",
    correct: "16 years old",
    distractors: ["14 years old", "15 years old", "18 years old", "17 years old", "19 years old"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "Which organization's first aid certificate is acceptable for the within-call requirement?",
    correct: "St. John Ambulance, Canadian Red Cross, Lifesaving Society, or Canadian Ski Patrol",
    distractors: [
      "Only the Lifesaving Society",
      "Only Canadian Red Cross",
      "Only Public Health Ontario",
      "Any provincial government certificate",
      "Workplace WSIB-approved only"
    ],
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
    question: "For 251–400 bathers (lifeguards only), what is the minimum number of lifeguards?",
    correct: "4",
    distractors: ["3", "5", "6", "7", "8"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "Above 400 bathers (lifeguards only), how many additional lifeguards are added per increment?",
    correct: "+1 per 150 bathers (or fraction)",
    distractors: [
      "+1 per 50 bathers",
      "+1 per 100 bathers",
      "+1 per 200 bathers",
      "+1 per 75 bathers",
      "+1 per 250 bathers"
    ],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 31–100 bathers (with assistant lifeguards), what is the minimum total staff?",
    correct: "2",
    distractors: ["1", "3", "4", "5", "6"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 101–200 bathers (with assistant lifeguards), what is the minimum total staff?",
    correct: "3",
    distractors: ["2", "4", "5", "6", "7"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 201–300 bathers (with assistant lifeguards), what is the minimum total staff?",
    correct: "4",
    distractors: ["3", "5", "6", "7", "8"],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "Above 300 bathers (with assistant lifeguards), how many additional staff are added per increment?",
    correct: "+1 per 100 bathers (or fraction)",
    distractors: [
      "+1 per 50 bathers",
      "+1 per 150 bathers",
      "+1 per 200 bathers",
      "+1 per 75 bathers",
      "+1 per 125 bathers"
    ],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "What is the rule about assistant lifeguards in relation to lifeguards?",
    correct: "Cannot exceed the number of lifeguards",
    distractors: [
      "Must be at least double the lifeguards",
      "Must equal the lifeguards",
      "No restriction",
      "Must be at least half the lifeguards",
      "Must be at least one per pool"
    ],
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "What is the minimum age and qualification for a Wading Pool Attendant per the slides?",
    correct: "15 years + LSS Wading Pool Attendant cert OR current first aid",
    distractors: [
      "13 years + Bronze Star",
      "14 years + lifeguard certificate",
      "16 years + National Lifeguard",
      "12 years + first aid cert",
      "18 years + Standard First Aid only"
    ],
    category: "Lifeguards & Supervision",
    slideRef: "Part 4, Slide 42"
  },
  {
    question: "What lifeguard certification is required at a wave pool?",
    correct: "Current National Lifeguard (NL)",
    distractors: [
      "Bronze Cross",
      "Bronze Medallion",
      "Standard First Aid only",
      "Wading Pool Attendant",
      "Aquatic Safety Inspector"
    ],
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

  // =============================================================
  // AGES & ADMISSION — NUMBERS
  // =============================================================
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
    question: "Per Coroner standards, the guardian for non-swimmers under 10 must be at least what age?",
    correct: "12 years",
    distractors: ["10 years", "14 years", "16 years", "13 years", "15 years"],
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
  {
    question: "At a hot water pool or cold plunge, children under 12 must be supervised by someone at least:",
    correct: "16 years old",
    distractors: ["14 years old", "15 years old", "18 years old", "13 years old", "17 years old"],
    category: "Ages & Admission",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },

  // =============================================================
  // SPECIALTY FACILITIES — NUMBERS & RULES
  // =============================================================
  {
    question: "Who currently regulates water slides in Ontario?",
    correct: "Amusement Devices Act (TSSA), inspected annually",
    distractors: [
      "Regulation 565 only",
      "Public Health Act",
      "Ontario Building Code only",
      "Lifesaving Society directly",
      "Regulation 503"
    ],
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
    question: "Which regulation governs waterfronts at residential camps?",
    correct: "Regulation 503/17",
    distractors: [
      "Regulation 565",
      "Regulation 950",
      "Amusement Devices Act",
      "Ontario Building Code Section 3.11",
      "Regulation 428"
    ],
    category: "Specialty Facilities",
    slideRef: "Part 4, Slide 73"
  },
  {
    question: "What standards apply to ALL supervised AND unsupervised waterfronts?",
    correct: "Lifesaving Society Waterfront Safety Standards",
    distractors: [
      "Regulation 565",
      "Regulation 503 only",
      "Ontario Building Code",
      "Public Health waterfront standards",
      "Inflatable Waterpark Standards"
    ],
    category: "Specialty Facilities",
    slideRef: "Part 4, Slide 73"
  },

  // =============================================================
  // SIGNAGE — NUMBERS
  // =============================================================
  {
    question: "What is the minimum letter height for depth markings on the deck?",
    correct: "≥ 100 mm (10 cm)",
    distractors: ["≥ 50 mm", "≥ 75 mm", "≥ 150 mm", "≥ 125 mm", "≥ 200 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(6)"
  },
  {
    question: "What is the minimum letter height for a 'Shallow Water — No Diving' sign?",
    correct: "≥ 150 mm (15 cm)",
    distractors: ["≥ 100 mm", "≥ 125 mm", "≥ 200 mm", "≥ 75 mm", "≥ 175 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(7)"
  },
  {
    question: "What is the minimum letter height for the Class B 'Avoid Deep or Long Dives' sign?",
    correct: "≥ 150 mm (dark on light background)",
    distractors: [
      "≥ 100 mm",
      "≥ 125 mm",
      "≥ 200 mm",
      "≥ 75 mm",
      "≥ 175 mm"
    ],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(9)"
  },
  {
    question: "What is the minimum letter height for a 'No Supervision' notice at a Class B pool?",
    correct: "≥ 25 mm (2.5 cm)",
    distractors: ["≥ 10 mm", "≥ 50 mm", "≥ 100 mm", "≥ 15 mm", "≥ 75 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, s. 17(19)"
  },
  {
    question: "What is the minimum letter height (and stroke) for an Exemption notice?",
    correct: "≥ 25 mm with 5 mm stroke",
    distractors: [
      "≥ 10 mm with 3 mm stroke",
      "≥ 50 mm with 5 mm stroke",
      "≥ 25 mm with 3 mm stroke",
      "≥ 100 mm with 10 mm stroke",
      "≥ 15 mm with 5 mm stroke"
    ],
    category: "Signage",
    regRef: "O. Reg. 565, s. 4.1"
  },
  {
    question: "What is the minimum letter height (and stroke) for an Emergency Stop button notice?",
    correct: "≥ 25 mm with 5 mm stroke",
    distractors: [
      "≥ 10 mm with 3 mm stroke",
      "≥ 50 mm with 5 mm stroke",
      "≥ 25 mm with 3 mm stroke",
      "≥ 100 mm with 10 mm stroke",
      "≥ 15 mm with 5 mm stroke"
    ],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(3)"
  },
  {
    question: "What is the minimum letter height for the 'CAUTION' header on a hot water pool / cold plunge sign?",
    correct: "≥ 50 mm",
    distractors: ["≥ 25 mm", "≥ 100 mm", "≥ 150 mm", "≥ 75 mm", "≥ 30 mm"],
    category: "Signage",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "What is the minimum letter height (and stroke) for body text on a hot water pool / cold plunge sign?",
    correct: "≥ 10 mm with 5 mm stroke",
    distractors: [
      "≥ 25 mm with 5 mm stroke",
      "≥ 10 mm with 3 mm stroke",
      "≥ 15 mm with 5 mm stroke",
      "≥ 50 mm with 5 mm stroke",
      "≥ 5 mm with 2 mm stroke"
    ],
    category: "Signage",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },
  {
    question: "What is the minimum letter height for a wading-pool unsupervised notice (≤ 15 cm depth)?",
    correct: "≥ 25 mm",
    distractors: ["≥ 10 mm", "≥ 50 mm", "≥ 100 mm", "≥ 15 mm", "≥ 75 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, ss. 26.1–26.5"
  },
  {
    question: "What is the diameter of the black disc used as a clarity test marker?",
    correct: "150 mm",
    distractors: ["100 mm", "125 mm", "200 mm", "175 mm", "75 mm"],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(6)"
  },
  {
    question: "Which exact wording is acceptable for the diving-related sign required at a pool with max depth < 2.5 m?",
    correct: "'CAUTION – AVOID DEEP DIVES' or 'SHALLOW WATER – NO DIVING'",
    distractors: [
      "'NO DIVING ALLOWED' only",
      "'DANGER – SHALLOW WATER' only",
      "'WARNING – KEEP OUT' only",
      "'POOL TOO SHALLOW FOR DIVING'",
      "'STOP – NO DIVING'"
    ],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(7)"
  },
  {
    question: "Which exact wording is required on the Class B 'Avoid Deep or Long Dives' sign?",
    correct: "'DANGER – AVOID DEEP OR LONG DIVES'",
    distractors: [
      "'WARNING – AVOID LONG DIVES'",
      "'CAUTION – AVOID DIVING'",
      "'NO DEEP DIVES'",
      "'DANGER – DO NOT DIVE'",
      "'AVOID DEEP DIVES'"
    ],
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(9)"
  },

  // =============================================================
  // ACCREDITATION — NUMBERS & RULES
  // =============================================================
  {
    question: "What is the year-round accreditation fee?",
    correct: "$100 every 2 years",
    distractors: [
      "$50 every year",
      "$150 every 3 years",
      "$200 annually",
      "$100 every year",
      "$50 every 2 years"
    ],
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
    correct: "1+ Priority OR more than 5 Secondary",
    distractors: [
      "2+ Priority OR more than 10 Secondary",
      "Any 1 item of either type",
      "Only Priority items count",
      "3+ Priority OR more than 8 Secondary",
      "1+ Priority OR more than 3 Secondary"
    ],
    category: "Accreditation",
    slideRef: "Part 4, Slide 109"
  },
  {
    question: "What are the pre-requisites to apply for facility accreditation?",
    correct: "None",
    distractors: [
      "A passed safety audit within 12 months",
      "Operator must hold NL certification",
      "Pool must be Class A only",
      "Two years of operation history",
      "Public Health approval letter"
    ],
    category: "Accreditation",
    slideRef: "Part 4, Slide 108"
  },
  {
    question: "Roughly how long does an accreditation inspection take?",
    correct: "Approximately 1 hour",
    distractors: [
      "15 minutes",
      "30 minutes",
      "Half a day",
      "2 hours",
      "45 minutes"
    ],
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
    question: "How long is Inspector certification valid (independent of the accreditation cycle)?",
    correct: "2 years",
    distractors: ["1 year", "3 years", "5 years", "18 months", "4 years"],
    category: "Accreditation",
    slideRef: "Part 1, Slide 7"
  },
  {
    question: "Approximately how long after the exam does Inspector certification arrive by mail?",
    correct: "About 2 weeks",
    distractors: ["About 1 week", "About 1 month", "About 6 weeks", "About 3 days", "About 2 months"],
    category: "Accreditation",
    slideRef: "Part 1 (Cert mailing time)"
  },

  // =============================================================
  // RISK EVALUATION — NUMBERS
  // =============================================================
  {
    question: "In numeric risk evaluation, what two factors are measured?",
    correct: "Magnitude × Frequency",
    distractors: [
      "Cost × Time",
      "Severity × Cost",
      "Probability × Severity",
      "Likelihood × Damage",
      "Frequency × Duration"
    ],
    category: "Inspections",
    slideRef: "Part 1, Slide 35"
  },
  {
    question: "What is the rating scale for each factor in numeric risk evaluation?",
    correct: "1 (low) to 5 (high)",
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
  {
    question: "Worked example: ponding on the pool deck (Magnitude 1 × Frequency 2). What is the score?",
    correct: "2 (low risk)",
    distractors: ["4 (low risk)", "6 (mid risk)", "10 (mid risk)", "1 (low risk)", "5 (low risk)"],
    category: "Inspections",
    slideRef: "Part 1, Slide 38"
  },
  {
    question: "Worked example: cloudy pool (Magnitude 5 × Frequency 3). What is the score?",
    correct: "15 (mid-to-high risk)",
    distractors: ["8 (low risk)", "10 (mid risk)", "20 (high risk)", "12 (mid risk)", "25 (high risk)"],
    category: "Inspections",
    slideRef: "Part 1, Slide 39"
  },

  // =============================================================
  // RECORDS & NOTIFICATIONS — NUMBERS
  // =============================================================
  {
    question: "How long must daily records be retained?",
    correct: "1 year",
    distractors: ["6 months", "2 years", "5 years", "3 years", "18 months"],
    category: "Records & Notifications",
    regRef: "O. Reg. 565, s. 8"
  },
  {
    question: "How many days in advance must a pool opening be notified to Public Health?",
    correct: "≥ 14 days prior, in writing",
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
    correct: "Bather loads",
    distractors: [
      "GFCI test",
      "Outlet checks",
      "Emergency Stop test",
      "Vacuum release test",
      "Annual chemical inventory"
    ],
    category: "Records & Notifications",
    slideRef: "Part 3, Slide 26"
  },
  {
    question: "Which checks are required MONTHLY per the slides?",
    correct: "GFCI, Emergency Stop, and Outlet checks",
    distractors: [
      "Telephone, bather loads, make-up water",
      "Daily water tests only",
      "Lifeguard certifications",
      "Chlorine inventory only",
      "Filter replacement"
    ],
    category: "Records & Notifications",
    slideRef: "Part 3, Slide 27"
  },

  // =============================================================
  // CLOSURE TRIGGERS
  // =============================================================
  {
    question: "Which is a Public Health pool closure trigger?",
    correct: "Filtration / circulation not operating",
    distractors: [
      "A lifeguard wearing the wrong colour shirt",
      "More than 50 bathers in the pool",
      "Pool deck slightly wet",
      "Lifeguard tower not painted",
      "Diving board paint chipped"
    ],
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
