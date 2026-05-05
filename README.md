# Aquatic Safety Inspector — Practice Quiz

A static website that lets candidates practice multiple-choice questions for the
Lifesaving Society Aquatic Safety Inspector certification exam.

The bank contains **100 questions**, all drawn from the Ontario pool guides
(Lifesaving Society slides + Ontario Regulation 565 / Sept 2025 LSS Guide).
Questions cover **definitions, numeric standards, and accreditation rules** —
no meta-questions about the exam itself.

## Files

| File           | Purpose                                                |
|----------------|--------------------------------------------------------|
| `index.html`   | The main page (structure)                              |
| `styles.css`   | Visual styling (minimalist black & white)              |
| `questions.js` | Question bank — **edit this file to add questions**    |
| `quiz.js`      | Quiz logic (don't usually need to touch)               |

## Running locally

Just open `index.html` in any web browser. No server, no build step.

If you want to test on your phone on the same Wi-Fi, run a tiny local server:

```bash
# from the project folder
python3 -m http.server 8000
# then visit http://YOUR-COMPUTER-IP:8000
```

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g., `aquatic-quiz`).
2. Push these four files to the **`main`** branch.
3. In your repo, go to **Settings → Pages**.
4. Under "Source", choose **Deploy from a branch**.
5. Select branch **`main`** and folder **`/ (root)`**, then **Save**.
6. Wait ~1 minute. Your site will be live at:
   `https://YOUR-USERNAME.github.io/aquatic-quiz/`

## Adding new questions

Open `questions.js` and copy an existing question block:

```js
{
  question: "Your question text?",
  options:  ["Option A", "Option B", "Option C", "Option D"],
  answer:   2,                           // 0=A, 1=B, 2=C, 3=D
  category: "Water Chemistry",
  explanation: "Optional short note shown after answering",
  slideRef: "Part 3, Slide 24",          // optional: source from LSS slides
  regRef:   "O. Reg. 565, s. 7"          // optional: source from regulation/guide
}
```

The `answer` field is the **index** of the correct option (zero-based).

### About references

- **`slideRef`** — Cite content from the LSS slides. Renders as a dark grey tag.
- **`regRef`** — Cite content from Ontario Regulation 565 or the Sept 2025 LSS
  Guide. Renders as an amber/orange tag (mirroring the orange highlight
  convention used in the comprehensive study guide).

Either field is optional. Questions can have one, both, or neither.

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
Questions are randomly selected from the full bank each time, with no repeats
within a single quiz.
