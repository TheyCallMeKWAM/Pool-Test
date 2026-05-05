# Aquatic Safety Inspector — Practice Quiz

A static website that lets candidates practice multiple-choice questions for the
Lifesaving Society Aquatic Safety Inspector certification exam.

The bank contains **100 questions**, all drawn from the Ontario pool guides
(Lifesaving Society slides + Ontario Regulation 565 / Sept 2025 LSS Guide).
Questions cover **definitions, numeric standards, and accreditation rules** —
no meta-questions about the exam itself.

## Anti-memorization features

Every quiz run, two layers of randomization happen so candidates can't pattern-match:

1. **A/B/C/D positions shuffle** — the correct answer's letter changes between runs.
2. **Distractor pools** — for ~70 numeric questions, only 3 of 5–6 wrong answers
   are shown each run, so the visible option set itself varies.

Together: the same question rarely looks identical twice.

## Files

| File           | Purpose                                                |
|----------------|--------------------------------------------------------|
| `index.html`   | The main page (structure)                              |
| `styles.css`   | Visual styling (minimalist black & white)              |
| `questions.js` | Question bank — **edit this file to add questions**    |
| `quiz.js`      | Quiz logic (don't usually need to touch)               |

## Running locally

Just open `index.html` in any web browser. No server, no build step.

```bash
# from the project folder, to test on your phone on the same Wi-Fi
python3 -m http.server 8000
# then visit http://YOUR-COMPUTER-IP:8000
```

## Deploying to GitHub Pages

1. Push these files to the `main` branch of your repo.
2. **Settings → Pages → Source: Deploy from a branch → main → / (root) → Save**.
3. Wait ~1 minute. Site will be live at `https://YOUR-USERNAME.github.io/REPO/`.

## Adding new questions

Two formats are supported. Use whichever fits the question.

### Format 1 — Static options (best for definitions)

```js
{
  question: "Define risk:",
  options: ["A text", "B text", "C text", "D text"],
  answer: 1,                              // 0=A, 1=B, 2=C, 3=D
  category: "Definitions",
  explanation: "Optional short note",     // optional
  slideRef: "Part 1, Slide 28",           // optional
  regRef: "O. Reg. 565, s. 2"             // optional
}
```

### Format 2 — Distractor pool (best for numeric questions)

```js
{
  question: "What is the pH range for a public pool?",
  correct: "7.2 – 7.8",                   // the right answer
  distractors: [                          // pool of 5 wrong answers
    "6.8 – 7.4",
    "7.0 – 7.6",
    "7.4 – 8.0",
    "7.0 – 7.8",
    "6.8 – 7.6"
  ],
  category: "Water Chemistry",
  regRef: "O. Reg. 565, s. 7"
}
```

Each quiz run picks 3 of the 5 distractors at random, combines them with the
correct answer, and shuffles all four options. So the visible option set
changes between runs and the correct answer's position varies.

You can mix both formats in the same file — the quiz logic detects which
format each question uses.

### Source references

- **`slideRef`** — LSS slide source. Renders as a dark grey tag.
- **`regRef`** — Regulation 565 / LSS Guide source. Renders as an amber/orange
  tag (mirroring the orange highlight convention in the comprehensive study guide).

## Question categories in the bank

| Category                  | Count |
|---------------------------|-------|
| Water Chemistry           |   15  |
| Lifeguards & Supervision  |   10  |
| Pool Classifications      |    9  |
| Accreditation             |    9  |
| Safety Equipment          |    8  |
| Inspections               |    7  |
| Distances & Depths        |    7  |
| Ages & Admission          |    7  |
| Definitions               |    6  |
| Specialty Facilities      |    5  |
| Bather Load               |    4  |
| Signage                   |    4  |
| Records & Notifications   |    4  |
| Temperatures              |    3  |
| Closure Triggers          |    2  |
| **Total**                 |  **100**  |

## Quiz length options

On the setup screen, candidates can choose 10, 25, 50, or 100 questions per session.
