# Aquatic Safety Inspector — Practice Quiz

A static website that lets candidates practice multiple-choice questions for the
Lifesaving Society Aquatic Safety Inspector certification exam.

The bank contains **152 questions**, providing comprehensive coverage of every
numeric reference value and every definition from the LSS slides and Ontario
Regulation 565 (including the Sept 2025 LSS Guide updates).

## Anti-memorization features

Every quiz run, two layers of randomization run on every single question:

1. **Distractor pools** — every question has 5 plausible wrong answers stored.
   Only 3 are picked per quiz run, so the visible option set varies between runs.
2. **A/B/C/D position shuffle** — the four selected options are shuffled into
   random positions, so the correct answer's letter changes between runs.

Together: the same question almost never looks identical twice.

## Files

| File           | Purpose                                                |
|----------------|--------------------------------------------------------|
| `index.html`   | The main page (structure)                              |
| `styles.css`   | Visual styling (minimalist black & white)              |
| `questions.js` | Question bank — **edit this file to add questions**    |
| `quiz.js`      | Quiz logic (don't usually need to touch)               |

## Running locally

Open `index.html` in any web browser. No server, no build step.

```bash
# from the project folder, to test on your phone on the same Wi-Fi
python3 -m http.server 8000
# then visit http://YOUR-COMPUTER-IP:8000
```

## Deploying to GitHub Pages

1. Push these files to the `main` branch of your repo.
2. **Settings → Pages → Source: Deploy from a branch → main → / (root) → Save**.
3. Wait ~1 minute. Site will be live at `https://YOUR-USERNAME.github.io/REPO/`.

## Quiz length options

On the setup screen, candidates can choose 10, 25, 50, 100, or **All** questions.
"All" automatically uses the full bank, however many questions it contains —
no need to update the button as you add more questions.

## Adding new questions

```js
{
  question: "What is the required pH range for a public pool?",
  correct: "7.2 – 7.8",                    // the right answer
  distractors: [                           // 5 plausible wrong answers
    "6.8 – 7.4",
    "7.0 – 7.6",
    "7.4 – 8.0",
    "7.0 – 7.8",
    "6.8 – 7.6"
  ],
  category: "Water Chemistry",
  explanation: "Optional short note shown after answering",
  slideRef: "Part 3, Slide 24",            // optional: LSS slide source
  regRef: "O. Reg. 565, s. 7"              // optional: regulation source
}
```

Each quiz run picks 3 of the 5 distractors, combines them with `correct`, and
shuffles all four options into A/B/C/D positions.

### Source references

- **`slideRef`** — Renders as a dark grey tag in the feedback box.
- **`regRef`** — Renders as an amber/orange tag (mirroring the orange highlight
  convention used in the LSS comprehensive study guide).

Either field is optional. Questions can have one, both, or neither.

### Legacy format (still supported)

The older `options` + `answer` format from earlier versions still works for
back-compatibility. The quiz logic auto-detects which format each question uses.

## Question categories in the bank

| Category                  | Count |
|---------------------------|-------|
| Water Chemistry           |   25  |
| Lifeguards & Supervision  |   18  |
| Inspections               |   14  |
| Signage                   |   12  |
| Pool Classifications      |   11  |
| Accreditation             |   11  |
| Distances & Depths        |   10  |
| Safety Equipment          |    9  |
| Ages & Admission          |    9  |
| Definitions               |    8  |
| Temperatures              |    7  |
| Specialty Facilities      |    6  |
| Bather Load               |    5  |
| Records & Notifications   |    5  |
| Closure Triggers          |    2  |
| **Total**                 |  **152**  |

## Coverage map

This bank now covers every entry in the cheat sheet's reference tables:

- **Water chemistry standards** (FAC, bromine, alkalinity, pH, ORP, cyanuric
  acid, combined chlorine) for every pool type — pool, spa, wading pool,
  hot water pool, cold plunge, floatation tank, floatation pool
- **All temperatures** — spa, shower, washroom sink, therapy pool,
  floatation tank, hot water heater cutoff, cold plunge max
- **All distances and depths** — wading pool, black disc, sign-required
  depths, slide channel terminations, GFCI distance, diving area thresholds
- **All bather load and lifeguard ratios** — both with-assistant and
  lifeguards-only columns, including +1 increments above 300/400
- **All age and admission rules** — Coroner ratios with and without lifejackets,
  guardian ages, changeroom requirements
- **All signage letter heights and strokes** — depth markings, no-diving signs,
  no-supervision notices, exemption notices, emergency stop, hot water/cold
  plunge headers and body text
- **All accreditation rules** — fees, fail criteria, validity, pre-requisites,
  inspection duration, certification mailing time
- **All inspection definitions and risk evaluation methods** — analog vs.
  numeric, magnitude, frequency, scoring, worked examples
