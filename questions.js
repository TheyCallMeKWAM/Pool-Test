// =============================================================
// AQUATIC SAFETY INSPECTOR - QUESTION BANK (100 questions)
// =============================================================
// All questions cover Ontario pool guide content only:
//   - Definitions (pool classes, pool types, inspection terms)
//   - Numbers (chemistry ranges, distances, ratios, fees, ages)
//   - Accreditation rules
//
// To add a new question, copy an existing block and edit it.
// Format:
//   {
//     question: "The question text",
//     options:  ["A", "B", "C", "D"],
//     answer:   0,                          // index (0-3) of correct answer
//     category: "Water Chemistry",
//     explanation: "Optional short note",
//     slideRef: "Part 3, Slide 24",         // optional: LSS slide reference
//     regRef:   "O. Reg. 565, s. 7"         // optional: regulation reference
//   }
// =============================================================

const QUESTIONS = [
  // ---------- POOL CLASSIFICATIONS / DEFINITIONS ----------
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

  // ---------- POOL TYPE DEFINITIONS ----------
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

  // ---------- INSPECTION & RISK DEFINITIONS ----------
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

  // ---------- WATER CHEMISTRY (NUMBERS) ----------
  {
    question: "What is the required pH range for a public pool?",
    options: ["6.8 – 7.4", "7.0 – 7.6", "7.2 – 7.8", "7.4 – 8.0"],
    answer: 2,
    category: "Water Chemistry",
    explanation: "Pool pH must be maintained between 7.2 and 7.8.",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the Free Available Chlorine (FAC) range for an unstabilized pool?",
    options: ["0.5 – 10 ppm", "1.0 – 10 ppm", "2.0 – 8 ppm", "5.0 – 10 ppm"],
    answer: 0,
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the Free Available Chlorine range for a stabilized pool?",
    options: ["0.5 – 10 ppm", "1.0 – 10 ppm", "2.0 – 8 ppm", "5.0 – 10 ppm"],
    answer: 1,
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the FAC range for a hot water pool (≥ 35 °C)?",
    options: ["0.5 – 5.0 ppm", "1.0 – 5.0 ppm", "2.0 – 8.0 ppm", "5.0 – 10.0 ppm"],
    answer: 3,
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the chlorine range for a spa?",
    options: ["0.5 – 5.0 mg/L", "1.0 – 5.0 mg/L", "2.0 – 8.0 mg/L", "5.0 – 10.0 mg/L"],
    answer: 3,
    category: "Water Chemistry",
    slideRef: "Part 4, Slide 64",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the chlorine range for a wading pool?",
    options: ["0.5 – 5.0 mg/L", "1.0 – 5.0 mg/L", "2.0 – 8.0 mg/L", "5.0 – 10.0 mg/L"],
    answer: 3,
    category: "Water Chemistry",
    slideRef: "Part 4, Slide 39",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the total alkalinity range for a public pool?",
    options: ["40 – 100 ppm", "60 – 180 ppm", "80 – 200 ppm", "100 – 250 ppm"],
    answer: 1,
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the combined chlorine threshold that triggers shocking the pool?",
    options: ["0.1 ppm", "0.2 ppm", "0.5 ppm", "1.0 ppm"],
    answer: 1,
    category: "Water Chemistry",
    explanation: "When TC − FAC = CC reaches 0.2 ppm or higher, the pool must be shocked.",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the maximum allowable cyanuric acid level in an outdoor pool?",
    options: ["30 ppm", "50 ppm", "60 ppm", "100 ppm"],
    answer: 2,
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the required ORP range when an automatic sensing device is used?",
    options: ["400 – 600 mV", "500 – 800 mV", "600 – 900 mV", "700 – 1000 mV"],
    answer: 2,
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the total bromine range for a public pool?",
    options: ["1.0 – 5.0 ppm", "2.0 – 8.0 ppm", "3.0 – 10.0 ppm", "5.0 – 10.0 ppm"],
    answer: 1,
    category: "Water Chemistry",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "Without an automatic sensing (ORP) device, how often must water be tested during operation?",
    options: ["Every 1 hour", "Every 2 hours", "Every 4 hours", "Every 6 hours"],
    answer: 1,
    category: "Water Chemistry",
    explanation: "Without ORP: 30 min before opening, then every 2 hours. With ORP: every 4 hours.",
    slideRef: "Part 3, Slide 24",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "With an automatic sensing (ORP) device, how often must water be tested during operation?",
    options: ["Every 1 hour", "Every 2 hours", "Every 4 hours", "Every 6 hours"],
    answer: 2,
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
    options: ["Daily", "Once per week", "Once per month", "Only after fouling"],
    answer: 1,
    category: "Water Chemistry",
    slideRef: "Part 4, Slide 64"
  },

  // ---------- TEMPERATURES (NUMBERS) ----------
  {
    question: "What is the maximum allowable spa water temperature?",
    options: ["35 °C", "38 °C", "40 °C", "42 °C"],
    answer: 2,
    category: "Temperatures",
    slideRef: "Part 4, Slide 64",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the maximum allowable shower water temperature?",
    options: ["38 °C (100 °F)", "40 °C (104 °F)", "43 °C (110 °F)", "46 °C (115 °F)"],
    answer: 1,
    category: "Temperatures",
    slideRef: "Part 2, Slide 30"
  },
  {
    question: "A therapy pool (not classified as a spa) must operate within what range?",
    options: ["28 – 30 °C", "30 – 32 °C", "32 – 34 °C", "35 – 37 °C"],
    answer: 2,
    category: "Temperatures",
    regRef: "O. Reg. 565 / Sept 2025 LSS Guide"
  },

  // ---------- DISTANCES & DEPTHS (NUMBERS) ----------
  {
    question: "What is the maximum depth that defines a wading pool?",
    options: ["0.5 m", "0.75 m", "1.0 m", "1.35 m"],
    answer: 1,
    category: "Distances & Depths",
    slideRef: "Part 4, Slide 37",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the bottom-visibility standard for a pool tank (the black disc test)?",
    options: ["Visible at 6 m", "Visible at 9 m", "Visible at 12 m", "Visible at 15 m"],
    answer: 1,
    category: "Distances & Depths",
    slideRef: "Part 3, Slide 3",
    regRef: "O. Reg. 565, ss. 7, 19(6)"
  },
  {
    question: "A 'Shallow Water — No Diving' sign is required where the maximum water depth is:",
    options: ["≤ 1.35 m", "≤ 2.0 m", "≤ 2.5 m", "≤ 3.0 m"],
    answer: 2,
    category: "Distances & Depths",
    slideRef: "Part 2, Slide 46",
    regRef: "O. Reg. 565, s. 19(7)"
  },
  {
    question: "At what depth does a wave pool require a 'no diving / no jumping' sign?",
    options: ["1.35 m or less", "2.3 m or less", "2.5 m or less", "3.0 m or less"],
    answer: 1,
    category: "Distances & Depths",
    slideRef: "Part 4, Slide 6"
  },
  {
    question: "How far below water level must a water slide channel terminate?",
    options: ["50 mm", "100 mm", "150 mm", "200 mm"],
    answer: 2,
    category: "Distances & Depths",
    regRef: "O. Reg. 565"
  },
  {
    question: "The shallow / deep boundary depth used in bather load calculations is:",
    options: ["1.0 m", "1.2 m", "1.35 m", "1.5 m"],
    answer: 2,
    category: "Distances & Depths",
    explanation: "Shallow ≤ 1.35 m (4.5 ft); Deep > 1.35 m.",
    regRef: "O. Reg. 565, ss. 10, 17"
  },
  {
    question: "GFCI is required if the pool has underwater lights or electrical outlets within what distance of the pool surface?",
    options: ["1 m", "2 m", "3 m", "5 m"],
    answer: 2,
    category: "Distances & Depths",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },

  // ---------- POOL CLASSES & TURNOVER (NUMBERS) ----------
  {
    question: "How many classes of public pools does Regulation 565 establish?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 2"
  },
  {
    question: "How often must a Class A pool's water turn over (cycle through filters)?",
    options: ["2 times per day", "3 times per day", "4 times per day", "6 times per day"],
    answer: 2,
    category: "Pool Classifications",
    explanation: "Class A: 4×/day (every 6 hours). Class B: 3×/day (every 8 hours).",
    regRef: "O. Reg. 565"
  },
  {
    question: "How often must a Class B pool's water turn over?",
    options: ["2 times per day", "3 times per day", "4 times per day", "6 times per day"],
    answer: 1,
    category: "Pool Classifications",
    regRef: "O. Reg. 565"
  },
  {
    question: "How much make-up (fresh) water must be added per bather per day?",
    options: ["5 L", "10 L", "15 L", "20 L"],
    answer: 2,
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 7"
  },
  {
    question: "What is the maximum percentage of pool volume that can be added as make-up water per day?",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2,
    category: "Pool Classifications",
    regRef: "O. Reg. 565, s. 7"
  },

  // ---------- SAFETY EQUIPMENT (NUMBERS) ----------
  {
    question: "What is the required length of a reaching pole?",
    options: ["2.5 m", "3.0 m", "3.65 m", "4.5 m"],
    answer: 2,
    category: "Safety Equipment",
    slideRef: "Part 2, Slide 45",
    regRef: "O. Reg. 565, ss. 6, 16.1"
  },
  {
    question: "How many buoyant throwing aids are required at a public pool?",
    options: ["1", "2", "3", "4"],
    answer: 1,
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
    options: ["3 mm", "6 mm", "9 mm", "12 mm"],
    answer: 1,
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
    options: ["Daily", "Weekly", "Monthly", "Annually"],
    answer: 0,
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
    options: ["5 cm square", "7.5 cm square", "10 cm square", "15 cm square"],
    answer: 1,
    category: "Safety Equipment",
    regRef: "O. Reg. 565, s. 6"
  },

  // ---------- LIFEGUARDS & SUPERVISION (NUMBERS) ----------
  {
    question: "What is the minimum age for a lifeguard?",
    options: ["14 years", "15 years", "16 years", "18 years"],
    answer: 1,
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "How recent must a lifeguard's certificate be?",
    options: ["Within 1 year of issue", "Within 2 years of issue", "Within 3 years of issue", "Within 5 years of issue"],
    answer: 1,
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "At a Class A pool, how recent must the within-call first aid certificate be?",
    options: ["Within 1 year", "Within 2 years", "Within 3 years", "Within 5 years"],
    answer: 2,
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 0–30 bathers (lifeguards only), what is the minimum number of lifeguards required?",
    options: ["1", "2", "3", "4"],
    answer: 0,
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 31–125 bathers (lifeguards only, no assistants), what is the minimum number of lifeguards?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    category: "Lifeguards & Supervision",
    regRef: "O. Reg. 565, s. 17"
  },
  {
    question: "For 126–250 bathers (lifeguards only), what is the minimum number of lifeguards?",
    options: ["2", "3", "4", "5"],
    answer: 1,
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
    options: ["1", "2", "3", "4"],
    answer: 1,
    category: "Lifeguards & Supervision",
    slideRef: "Part 4, Slide 6"
  },

  // ---------- BATHER LOAD (NUMBERS) ----------
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
    options: ["50 m²", "75 m²", "93 m²", "100 m²"],
    answer: 2,
    category: "Bather Load",
    regRef: "O. Reg. 565, s. 17(19)"
  },
  {
    question: "A buoy line is required at a Class B pool when the slope of depth change is greater than:",
    options: ["5%", "8%", "10%", "15%"],
    answer: 1,
    category: "Bather Load",
    regRef: "O. Reg. 565, ss. 10, 17"
  },

  // ---------- AGES & ADMISSION (NUMBERS) ----------
  {
    question: "Children under what age must be accompanied by a parent/guardian (max 2:1 ratio)?",
    options: ["Under 5", "Under 6", "Under 8", "Under 10"],
    answer: 1,
    category: "Ages & Admission",
    slideRef: "Part 2, Slide 20",
    regRef: "Office of the Chief Coroner"
  },
  {
    question: "Children between what ages may NOT be admitted unaccompanied unless they pass the facility swim test?",
    options: ["4–7", "5–8", "6–9", "7–10"],
    answer: 2,
    category: "Ages & Admission",
    slideRef: "Part 2, Slide 20"
  },
  {
    question: "From what age may a child be admitted unaccompanied?",
    options: ["8 and over", "9 and over", "10 and over", "12 and over"],
    answer: 2,
    category: "Ages & Admission",
    slideRef: "Part 2, Slide 20"
  },
  {
    question: "Per Coroner standards, the maximum ratio for non-swimmers under 10 (without lifejackets) is:",
    options: ["2 : 1", "4 : 1", "6 : 1", "8 : 1"],
    answer: 1,
    category: "Ages & Admission",
    regRef: "Office of the Chief Coroner"
  },
  {
    question: "Per Coroner standards, the maximum ratio for non-swimmers under 10 WITH lifejackets is:",
    options: ["2 : 1", "4 : 1", "6 : 1", "8 : 1"],
    answer: 3,
    category: "Ages & Admission",
    regRef: "Office of the Chief Coroner"
  },
  {
    question: "From what age must bathers use the changeroom designated for their gender?",
    options: ["5 and over", "6 and over", "7 and over", "10 and over"],
    answer: 2,
    category: "Ages & Admission",
    slideRef: "Part 2, Slide 21"
  },
  {
    question: "At an unsupervised Class B pool, bathers under 12 must be accompanied by a parent/agent at least:",
    options: ["14 years old", "15 years old", "16 years old", "18 years old"],
    answer: 2,
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
    options: ["1.5 m", "2 m", "3 m", "4 m"],
    answer: 2,
    category: "Specialty Facilities",
    regRef: "O. Reg. 565"
  },
  {
    question: "A wet slide is exempt from being classified as a water slide if it is shorter than ___ from entry to exit:",
    options: ["1 m", "2 m", "3 m", "4 m"],
    answer: 1,
    category: "Specialty Facilities",
    regRef: "O. Reg. 565"
  },
  {
    question: "What is the maximum recommended spa use time?",
    options: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"],
    answer: 1,
    category: "Specialty Facilities",
    slideRef: "Part 4, Slide 63"
  },
  {
    question: "How far must an emergency telephone be from a spa?",
    options: ["Within 10 m", "Within 20 m", "Within 30 m", "Within 50 m"],
    answer: 2,
    category: "Specialty Facilities",
    slideRef: "Part 4, Slide 65"
  },

  // ---------- SIGNAGE (NUMBERS) ----------
  {
    question: "What is the minimum letter height for depth markings on the deck?",
    options: ["50 mm", "75 mm", "100 mm", "150 mm"],
    answer: 2,
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(6)"
  },
  {
    question: "What is the minimum letter height for a 'Shallow Water — No Diving' sign?",
    options: ["100 mm", "125 mm", "150 mm", "200 mm"],
    answer: 2,
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(7)"
  },
  {
    question: "What is the minimum letter height for a 'No Supervision' notice at a Class B pool?",
    options: ["10 mm", "25 mm", "50 mm", "100 mm"],
    answer: 1,
    category: "Signage",
    regRef: "O. Reg. 565, s. 17(19)"
  },
  {
    question: "What is the diameter of the black disc used as a clarity test marker?",
    options: ["100 mm", "125 mm", "150 mm", "200 mm"],
    answer: 2,
    category: "Signage",
    regRef: "O. Reg. 565, s. 19(6)"
  },

  // ---------- ACCREDITATION ----------
  {
    question: "What is the year-round accreditation fee?",
    options: ["$50 every year", "$100 every 2 years", "$150 every 3 years", "$200 annually"],
    answer: 1,
    category: "Accreditation",
    slideRef: "Part 4, Slide 110"
  },
  {
    question: "What is the seasonal accreditation fee?",
    options: ["$25 annually", "$50 annually", "$100 every 2 years", "$150 annually"],
    answer: 1,
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
    options: ["15 minutes", "30 minutes", "1 hour", "Half a day"],
    answer: 2,
    category: "Accreditation",
    slideRef: "Part 4, Slide 109"
  },
  {
    question: "How long is facility accreditation valid?",
    options: ["1 year", "2 years", "3 years", "5 years"],
    answer: 1,
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
    options: ["1 to 3", "1 to 5", "1 to 10", "0 to 100"],
    answer: 1,
    category: "Inspections",
    slideRef: "Part 1, Slide 37"
  },
  {
    question: "What is the overall score range in numeric risk evaluation?",
    options: ["0 – 10", "0 – 25", "0 – 50", "0 – 100"],
    answer: 1,
    category: "Inspections",
    slideRef: "Part 1, Slide 37"
  },

  // ---------- RECORDS & NOTIFICATIONS ----------
  {
    question: "How long must daily records be retained?",
    options: ["6 months", "1 year", "2 years", "5 years"],
    answer: 1,
    category: "Records & Notifications",
    regRef: "O. Reg. 565, s. 8"
  },
  {
    question: "How many days in advance must a pool opening be notified to Public Health?",
    options: ["7 days", "14 days", "30 days", "60 days"],
    answer: 1,
    category: "Records & Notifications",
    regRef: "O. Reg. 565, ss. 5, 26.1"
  },
  {
    question: "Re-notification of Public Health is required when a pool has been closed for more than:",
    options: ["1 week", "2 weeks", "4 weeks", "8 weeks"],
    answer: 2,
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
    options: ["$25 to $100", "$55 to $465", "$100 to $1000", "$500 to $5000"],
    answer: 1,
    category: "Closure Triggers",
    regRef: "Health Protection and Promotion Act; Reg 950 Schedule 39"
  }
];
