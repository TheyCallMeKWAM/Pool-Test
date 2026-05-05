// =============================================================
// AQUATIC SAFETY INSPECTOR - QUESTION BANK
// =============================================================
// To add a new question, just copy an existing block and edit it.
// Format:
//   {
//     question: "The question text",
//     options:  ["A", "B", "C", "D"],
//     answer:   0,                          // index (0-3) of correct answer
//     category: "Water Chemistry",          // category for filtering
//     explanation: "Optional short note"    // shown after answer
//   }
// =============================================================

const QUESTIONS = [
  // ---------- EXAM & CERTIFICATION ----------
  {
    question: "What percentage is required to pass the Aquatic Safety Inspector exam?",
    options: ["65%", "70%", "75%", "80%"],
    answer: 2,
    category: "Exam Logistics",
    explanation: "75% is the passing grade for the closed-book written exam."
  },
  {
    question: "How long is the Inspector certification valid?",
    options: ["1 year", "2 years", "3 years", "5 years"],
    answer: 1,
    category: "Exam Logistics",
    explanation: "Certification is valid for two years; recertify by attending a Safety Inspector recertification clinic."
  },
  {
    question: "How many multiple-choice questions are on the Inspector exam?",
    options: ["50", "75", "100", "150"],
    answer: 2,
    category: "Exam Logistics",
    explanation: "100 multiple-choice questions, 2-hour time limit, closed book."
  },
  {
    question: "What is the time limit for the Inspector exam?",
    options: ["1 hour", "1.5 hours", "2 hours", "3 hours"],
    answer: 2,
    category: "Exam Logistics"
  },
  {
    question: "If a candidate fails the Inspector exam, what must they do?",
    options: ["Retake the entire course", "Retake only the exam", "Wait one year before retrying", "Submit an appeal"],
    answer: 1,
    category: "Exam Logistics"
  },

  // ---------- WATER CHEMISTRY ----------
  {
    question: "What is the required pH range for a public pool?",
    options: ["6.8 – 7.4", "7.0 – 7.6", "7.2 – 7.8", "7.4 – 8.0"],
    answer: 2,
    category: "Water Chemistry",
    explanation: "Pool pH must be maintained between 7.2 and 7.8."
  },
  {
    question: "What is the Free Available Chlorine (FAC) range for an unstabilized pool?",
    options: ["0.5 – 10 ppm", "1.0 – 10 ppm", "2.0 – 8 ppm", "5.0 – 10 ppm"],
    answer: 0,
    category: "Water Chemistry",
    explanation: "Unstabilized pools: 0.5–10 ppm. Stabilized pools: 1.0–10 ppm."
  },
  {
    question: "What is the Free Available Chlorine range for a stabilized pool?",
    options: ["0.5 – 10 ppm", "1.0 – 10 ppm", "2.0 – 8 ppm", "5.0 – 10 ppm"],
    answer: 1,
    category: "Water Chemistry"
  },
  {
    question: "What is the chlorine range for a spa?",
    options: ["0.5 – 5.0 mg/L", "1.0 – 5.0 mg/L", "2.0 – 8.0 mg/L", "5.0 – 10.0 mg/L"],
    answer: 3,
    category: "Water Chemistry",
    explanation: "Spas require higher chlorine (5.0–10.0 mg/L) due to higher temperature and bather load."
  },
  {
    question: "What is the chlorine range for a wading pool?",
    options: ["0.5 – 5.0 mg/L", "1.0 – 5.0 mg/L", "2.0 – 8.0 mg/L", "5.0 – 10.0 mg/L"],
    answer: 3,
    category: "Water Chemistry"
  },
  {
    question: "What is the total alkalinity range for a public pool?",
    options: ["40 – 100 ppm", "60 – 180 ppm", "80 – 200 ppm", "100 – 250 ppm"],
    answer: 1,
    category: "Water Chemistry"
  },
  {
    question: "What is the combined chlorine threshold that triggers the need to shock the pool?",
    options: ["0.1 ppm", "0.2 ppm", "0.5 ppm", "1.0 ppm"],
    answer: 1,
    category: "Water Chemistry",
    explanation: "When TC − FAC = CC reaches 0.2 ppm or higher, the pool must be shocked."
  },
  {
    question: "What is the maximum allowable cyanuric acid level in an outdoor pool?",
    options: ["30 ppm", "50 ppm", "60 ppm", "100 ppm"],
    answer: 2,
    category: "Water Chemistry",
    explanation: "Cyanuric acid (stabilizer) is allowed only in outdoor pools, max 60 ppm."
  },
  {
    question: "What is the required ORP range when an automatic sensing device is used?",
    options: ["400 – 600 mV", "500 – 800 mV", "600 – 900 mV", "700 – 1000 mV"],
    answer: 2,
    category: "Water Chemistry"
  },
  {
    question: "What is the total bromine range for a public pool?",
    options: ["1.0 – 5.0 ppm", "2.0 – 8.0 ppm", "3.0 – 10.0 ppm", "5.0 – 10.0 ppm"],
    answer: 1,
    category: "Water Chemistry"
  },
  {
    question: "When a pool has NO automatic sensing (ORP) device, how often must water be tested during operation?",
    options: ["Every 1 hour", "Every 2 hours", "Every 4 hours", "Every 6 hours"],
    answer: 1,
    category: "Water Chemistry",
    explanation: "Without ORP: 30 min before opening, then every 2 hours. With ORP: every 4 hours."
  },
  {
    question: "When mixing pool chemicals, the correct procedure is:",
    options: ["Add water to the chemical", "Add chemical to the water", "Mix both at the same time", "Always mix outdoors only"],
    answer: 1,
    category: "Water Chemistry",
    explanation: "Always add the chemical TO the water — never water to chemical."
  },

  // ---------- TEMPERATURES ----------
  {
    question: "What is the maximum allowable spa water temperature?",
    options: ["35 °C", "38 °C", "40 °C", "42 °C"],
    answer: 2,
    category: "Temperatures",
    explanation: "Spa water max is 40 °C (104 °F)."
  },
  {
    question: "What is the maximum allowable shower water temperature?",
    options: ["38 °C (100 °F)", "40 °C (104 °F)", "43 °C (110 °F)", "46 °C (115 °F)"],
    answer: 1,
    category: "Temperatures"
  },
  {
    question: "A therapy pool (not classified as a spa) must operate within what temperature range?",
    options: ["28 – 30 °C", "30 – 32 °C", "32 – 34 °C", "35 – 37 °C"],
    answer: 2,
    category: "Temperatures",
    explanation: "Therapy pools: 32–34 °C, must remain below 35 °C."
  },

  // ---------- DISTANCES & DEPTHS ----------
  {
    question: "What is the maximum depth that defines a wading pool?",
    options: ["0.5 m", "0.75 m", "1.0 m", "1.35 m"],
    answer: 1,
    category: "Distances & Depths",
    explanation: "A wading pool is 0.75 m (2'6\") or less at any point."
  },
  {
    question: "What is the bottom-visibility standard for a pool tank (the black disc test)?",
    options: ["Visible at 6 m", "Visible at 9 m", "Visible at 12 m", "Visible at 15 m"],
    answer: 1,
    category: "Distances & Depths",
    explanation: "The 150 mm black disc on a white background must be visible from 9 m."
  },
  {
    question: "A 'Shallow Water — No Diving' sign is required where the maximum water depth is:",
    options: ["≤ 1.35 m", "≤ 2.0 m", "≤ 2.5 m", "≤ 3.0 m"],
    answer: 2,
    category: "Distances & Depths"
  },
  {
    question: "At what depth does a wave pool require a 'no diving / no jumping' sign?",
    options: ["1.35 m or less", "2.3 m or less", "2.5 m or less", "3.0 m or less"],
    answer: 1,
    category: "Distances & Depths"
  },
  {
    question: "How far below water level must a water slide channel terminate?",
    options: ["50 mm", "100 mm", "150 mm", "200 mm"],
    answer: 2,
    category: "Distances & Depths"
  },
  {
    question: "The shallow / deep boundary depth used in bather load calculations is:",
    options: ["1.0 m", "1.2 m", "1.35 m", "1.5 m"],
    answer: 2,
    category: "Distances & Depths",
    explanation: "Shallow ≤ 1.35 m (4.5 ft); Deep > 1.35 m."
  },

  // ---------- POOL CLASSES & TURNOVER ----------
  {
    question: "How many classes of public pools does Regulation 565 establish?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    category: "Pool Classes",
    explanation: "Class A (general public, schools), Class B (apartments, hotels), Class C (wading, splash, slide basin)."
  },
  {
    question: "How often must a Class A pool's water turn over (cycle through filters)?",
    options: ["2 times per day", "3 times per day", "4 times per day", "6 times per day"],
    answer: 2,
    category: "Pool Classes",
    explanation: "Class A: 4×/day (every 6 hours). Class B: 3×/day (every 8 hours)."
  },
  {
    question: "How often must a Class B pool's water turn over?",
    options: ["2 times per day", "3 times per day", "4 times per day", "6 times per day"],
    answer: 1,
    category: "Pool Classes"
  },
  {
    question: "How much make-up (fresh) water must be added per bather per day?",
    options: ["5 L", "10 L", "15 L", "20 L"],
    answer: 2,
    category: "Pool Classes",
    explanation: "15 L per bather per day, max 20% of pool volume."
  },
  {
    question: "What is the maximum percentage of pool volume that can be added as make-up water per day?",
    options: ["10%", "15%", "20%", "25%"],
    answer: 2,
    category: "Pool Classes"
  },

  // ---------- SAFETY EQUIPMENT ----------
  {
    question: "What is the required length of a reaching pole?",
    options: ["2.5 m", "3.0 m", "3.65 m", "4.5 m"],
    answer: 2,
    category: "Safety Equipment",
    explanation: "Reaching pole: 3.65 m long, electrically insulated or non-conducting."
  },
  {
    question: "How many buoyant throwing aids are required at a public pool?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    category: "Safety Equipment",
    explanation: "Two buoyant throwing aids, on a 6 mm rope, located on either side of the pool."
  },
  {
    question: "What is the required rope length attached to a buoyant throwing aid?",
    options: ["3 m", "Half the width of the pool", "3 m + half the width of the pool", "Full width of the pool"],
    answer: 2,
    category: "Safety Equipment"
  },
  {
    question: "What is the diameter of the rope attached to a buoyant throwing aid?",
    options: ["3 mm", "6 mm", "9 mm", "12 mm"],
    answer: 1,
    category: "Safety Equipment"
  },
  {
    question: "When is a Ground Fault Circuit Interrupter (GFCI) required at a pool?",
    options: ["Always", "Only at outdoor pools", "If the pool has underwater lights or outlets within 3 m", "Only at Class A pools"],
    answer: 2,
    category: "Safety Equipment"
  },
  {
    question: "How often must a GFCI be tested?",
    options: ["Daily", "Weekly", "Monthly or per manufacturer (whichever is more frequent)", "Annually"],
    answer: 2,
    category: "Safety Equipment"
  },

  // ---------- LIFEGUARDS & SUPERVISION ----------
  {
    question: "What is the minimum age for a lifeguard?",
    options: ["14 years", "15 years", "16 years", "18 years"],
    answer: 1,
    category: "Lifeguards & Supervision"
  },
  {
    question: "How recent must a lifeguard's certificate be?",
    options: ["Within 1 year of issue", "Within 2 years of issue", "Within 3 years of issue", "Within 5 years of issue"],
    answer: 1,
    category: "Lifeguards & Supervision"
  },
  {
    question: "At a Class A pool, how recent must the within-call first aid certificate be?",
    options: ["Within 1 year", "Within 2 years", "Within 3 years", "Within 5 years"],
    answer: 2,
    category: "Lifeguards & Supervision"
  },
  {
    question: "At a Class A pool, the within-call first aid holder must be at least:",
    options: ["14 years old", "15 years old", "16 years old", "18 years old"],
    answer: 2,
    category: "Lifeguards & Supervision"
  },
  {
    question: "For 0–30 bathers (lifeguards only), what is the minimum number of lifeguards required?",
    options: ["1", "2", "3", "4"],
    answer: 0,
    category: "Lifeguards & Supervision"
  },
  {
    question: "For 31–125 bathers (lifeguards only, no assistants), what is the minimum number of lifeguards?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    category: "Lifeguards & Supervision"
  },
  {
    question: "For 126–250 bathers (lifeguards only), what is the minimum number of lifeguards?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    category: "Lifeguards & Supervision"
  },
  {
    question: "What is the rule about assistant lifeguards in relation to lifeguards?",
    options: ["Must be at least double the lifeguards", "Must equal the lifeguards", "Cannot exceed the number of lifeguards", "No restriction"],
    answer: 2,
    category: "Lifeguards & Supervision"
  },

  // ---------- BATHER LOAD ----------
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
    explanation: "Bather load = (Shallow area ÷ 1.4) + (Deep area ÷ 2.5), areas in m²."
  },
  {
    question: "For an unsupervised Class B pool greater than 93 m², what is the bather load?",
    options: ["Calculated by formula", "Always 10", "Always 25", "Always 50"],
    answer: 1,
    category: "Bather Load",
    explanation: "Unsupervised Class B > 93 m² is ALWAYS 10 bathers, regardless of formula."
  },
  {
    question: "A buoy line is required at a Class B pool when the slope of depth change is greater than:",
    options: ["5%", "8%", "10%", "15%"],
    answer: 1,
    category: "Bather Load"
  },

  // ---------- AGES & ADMISSION ----------
  {
    question: "Children under what age must be accompanied by a parent/guardian (max 2:1 ratio)?",
    options: ["Under 5", "Under 6", "Under 8", "Under 10"],
    answer: 1,
    category: "Ages & Admission"
  },
  {
    question: "Per Coroner standards, the maximum ratio for non-swimmers under 10 (without lifejackets) is:",
    options: ["2 children : 1 guardian", "4 children : 1 guardian", "6 children : 1 guardian", "8 children : 1 guardian"],
    answer: 1,
    category: "Ages & Admission"
  },
  {
    question: "Per Coroner standards, the maximum ratio for non-swimmers under 10 WITH lifejackets is:",
    options: ["2 : 1", "4 : 1", "6 : 1", "8 : 1"],
    answer: 3,
    category: "Ages & Admission"
  },
  {
    question: "From what age must bathers use the changeroom designated for their gender?",
    options: ["5 and over", "6 and over", "7 and over", "10 and over"],
    answer: 2,
    category: "Ages & Admission"
  },
  {
    question: "At an unsupervised Class B pool, bathers under 12 must be accompanied by a parent/agent at least:",
    options: ["14 years old", "15 years old", "16 years old", "18 years old"],
    answer: 2,
    category: "Ages & Admission"
  },

  // ---------- WAVE POOLS ----------
  {
    question: "What lifeguard certification is required at a wave pool?",
    options: ["Bronze Cross", "Bronze Medallion", "Current National Lifeguard (NL)", "Standard First Aid only"],
    answer: 2,
    category: "Specialty Facilities"
  },
  {
    question: "What is the minimum number of lifeguard stations at a wave pool?",
    options: ["1", "2", "3", "4"],
    answer: 1,
    category: "Specialty Facilities",
    explanation: "Two or more lifeguard stations are required at a wave pool."
  },
  {
    question: "Who currently regulates water slides in Ontario?",
    options: ["Regulation 565", "Amusement Devices Act (TSSA)", "Public Health Act", "Building Code"],
    answer: 1,
    category: "Specialty Facilities",
    explanation: "Water slides fall under the Amusement Devices Act, inspected annually by TSSA."
  },
  {
    question: "A dry slide is exempt from being classified as a water slide if it is no taller than:",
    options: ["1.5 m", "2 m", "3 m", "4 m"],
    answer: 2,
    category: "Specialty Facilities"
  },
  {
    question: "A wet slide is exempt from being classified as a water slide if it is shorter than ___ from entry to exit:",
    options: ["1 m", "2 m", "3 m", "4 m"],
    answer: 1,
    category: "Specialty Facilities"
  },
  {
    question: "What is the maximum recommended spa use time?",
    options: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"],
    answer: 1,
    category: "Specialty Facilities"
  },
  {
    question: "How often must spa GFI be tested?",
    options: ["Daily", "Weekly", "Monthly", "Annually"],
    answer: 0,
    category: "Specialty Facilities"
  },
  {
    question: "How far must an emergency telephone be from a spa?",
    options: ["Within 10 m", "Within 20 m", "Within 30 m", "Within 50 m"],
    answer: 2,
    category: "Specialty Facilities"
  },

  // ---------- SIGNAGE ----------
  {
    question: "What is the minimum letter height for depth markings on the deck?",
    options: ["50 mm", "75 mm", "100 mm", "150 mm"],
    answer: 2,
    category: "Signage"
  },
  {
    question: "What is the minimum letter height for a 'Shallow Water — No Diving' sign?",
    options: ["100 mm", "125 mm", "150 mm", "200 mm"],
    answer: 2,
    category: "Signage"
  },
  {
    question: "What is the minimum letter height for a 'No Supervision' notice at a Class B pool?",
    options: ["10 mm", "25 mm", "50 mm", "100 mm"],
    answer: 1,
    category: "Signage"
  },
  {
    question: "What is the diameter of the black disc used as a clarity test marker?",
    options: ["100 mm", "125 mm", "150 mm", "200 mm"],
    answer: 2,
    category: "Signage"
  },

  // ---------- INSPECTIONS & ACCREDITATION ----------
  {
    question: "What is the LSS Aquatic Safety Inspection?",
    options: [
      "An inspection designed to maximize safety by identifying where the facility fails to meet appropriate standards",
      "A government audit of pool finances",
      "A certification of lifeguards only",
      "A water-quality lab test"
    ],
    answer: 0,
    category: "Inspections"
  },
  {
    question: "Define a 'Priority' inspection item:",
    options: [
      "A minor cosmetic issue",
      "An item representing major safety risk; merits immediate action; recommends closure until corrected",
      "An optional improvement suggestion",
      "Any item involving paperwork"
    ],
    answer: 1,
    category: "Inspections"
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
    category: "Inspections"
  },
  {
    question: "Can an Inspector close a pool?",
    options: [
      "Yes, immediately",
      "Yes, but only Class B pools",
      "No — only health inspectors can close pools",
      "Only with police involvement"
    ],
    answer: 2,
    category: "Inspections",
    explanation: "An LSS Inspector identifies issues; only a Public Health Inspector can close a pool."
  },
  {
    question: "Can an Inspector inspect their own pool?",
    options: [
      "No, never",
      "Yes, and they may also accredit it",
      "Yes — may inspect, but may NOT accredit it",
      "Only with written approval"
    ],
    answer: 2,
    category: "Inspections"
  },
  {
    question: "What is the year-round accreditation fee?",
    options: ["$50 every year", "$100 every 2 years", "$150 every 3 years", "$200 annually"],
    answer: 1,
    category: "Inspections"
  },
  {
    question: "What is the seasonal accreditation fee?",
    options: ["$25 annually", "$50 annually", "$100 every 2 years", "$150 annually"],
    answer: 1,
    category: "Inspections"
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
    explanation: "Magnitude × Frequency, each rated 1–5; product on a 0–25 scale."
  },
  {
    question: "What is the rating scale for each factor in numeric risk evaluation?",
    options: ["1 to 3", "1 to 5", "1 to 10", "0 to 100"],
    answer: 1,
    category: "Inspections"
  },

  // ---------- RECORDS & NOTIFICATIONS ----------
  {
    question: "How long must daily records be retained?",
    options: ["6 months", "1 year", "2 years", "5 years"],
    answer: 1,
    category: "Records & Notifications"
  },
  {
    question: "How many days in advance must a pool opening be notified to Public Health?",
    options: ["7 days", "14 days", "30 days", "60 days"],
    answer: 1,
    category: "Records & Notifications",
    explanation: "≥ 14 days prior in writing. Re-notification needed if closed > 4 weeks or any alteration."
  },
  {
    question: "Re-notification of Public Health is required when a pool has been closed for more than:",
    options: ["1 week", "2 weeks", "4 weeks", "8 weeks"],
    answer: 2,
    category: "Records & Notifications"
  },

  // ---------- CLOSURE TRIGGERS ----------
  {
    question: "Which of the following is a Public Health pool closure trigger?",
    options: [
      "A lifeguard wearing the wrong colour shirt",
      "Filtration / circulation not operating",
      "More than 50 bathers in the pool",
      "Pool deck slightly wet"
    ],
    answer: 1,
    category: "Closure Triggers"
  },
  {
    question: "Fines for non-compliance with Regulation 565 range from:",
    options: ["$25 to $100", "$55 to $465", "$100 to $1000", "$500 to $5000"],
    answer: 1,
    category: "Closure Triggers"
  }
];
