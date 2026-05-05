# Aquatic Safety Inspector — Practice Quiz

A static website that lets candidates practice multiple-choice questions for the
Lifesaving Society Aquatic Safety Inspector certification exam.

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

Open `questions.js` and copy an existing question block. Each question has up to 7 fields:

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

Each question can have one or both reference fields:

- **`slideRef`** — Cite content from the LSS slides (e.g., `"Part 4, Slide 64"`).
  Renders as a dark grey tag in the feedback box.
- **`regRef`** — Cite content from Ontario Regulation 565 or the LSS Guide to
  Public Pool Regulations (e.g., `"O. Reg. 565, s. 7"`).
  Renders as an amber/orange tag, mirroring the orange highlight convention
  used in the comprehensive study guide.

Either field is optional. Questions can have one, both, or neither.

Save the file and refresh the page — your new question is now in the pool.

## Question categories currently in the bank

- Exam Logistics
- Water Chemistry
- Temperatures
- Distances & Depths
- Pool Classes
- Safety Equipment
- Lifeguards & Supervision
- Bather Load
- Ages & Admission
- Specialty Facilities (wave pools, slides, spas)
- Signage
- Inspections
- Records & Notifications
- Closure Triggers
