// =============================================================
// AQUATIC SAFETY INSPECTOR QUIZ - LOGIC
// =============================================================
// This file controls the entire quiz flow:
//   1. Setup screen: pick number of questions
//   2. Quiz screen: show one question at a time, give feedback
//   3. Results screen: show score + missed questions
//
// Two layers of randomization happen on every quiz run:
//   - Question selection: a random subset is picked from the bank
//   - Per-question:
//       (a) If the question has a distractor pool, pick 3 random
//           wrong answers from it and combine with the correct one.
//       (b) Shuffle the four options so A/B/C/D positions vary.
// =============================================================

// ----- State (the "memory" of the app) -----
const state = {
  selectedLength: 25,
  questions: [],         // PREPARED questions (with options + correctIndex baked in)
  currentIndex: 0,
  score: 0,
  missed: [],
  answered: false
};

// ----- DOM element references -----
const screens = {
  setup:   document.getElementById('setup-screen'),
  quiz:    document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen')
};

const els = {
  lengthOptions:    document.getElementById('length-options'),
  startBtn:         document.getElementById('start-btn'),
  questionCounter:  document.getElementById('question-counter'),
  scoreDisplay:     document.getElementById('score-display'),
  progressFill:     document.getElementById('progress-fill'),
  categoryTag:      document.getElementById('category-tag'),
  questionText:     document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  feedback:         document.getElementById('feedback'),
  feedbackText:     document.getElementById('feedback-text'),
  explanationText:  document.getElementById('explanation-text'),
  referencesBox:    document.getElementById('references-box'),
  nextBtn:          document.getElementById('next-btn'),
  finalPercentage:  document.getElementById('final-percentage'),
  correctCount:     document.getElementById('correct-count'),
  totalCount:       document.getElementById('total-count'),
  passFailMessage:  document.getElementById('pass-fail-message'),
  missedSection:    document.getElementById('missed-questions-section'),
  missedList:       document.getElementById('missed-list'),
  restartBtn:       document.getElementById('restart-btn'),
  homeBtn:          document.getElementById('home-btn')
};

// =============================================================
// SCREEN SWITCHING
// =============================================================
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[name].classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================================
// SETUP SCREEN
// =============================================================
els.lengthOptions.addEventListener('click', (e) => {
  if (!e.target.classList.contains('length-btn')) return;
  els.lengthOptions.querySelectorAll('.length-btn').forEach(b => b.classList.remove('selected'));
  e.target.classList.add('selected');
  state.selectedLength = parseInt(e.target.dataset.length, 10);
});

els.startBtn.addEventListener('click', startQuiz);

// =============================================================
// HELPER: Fisher-Yates shuffle (truly random array order)
// =============================================================
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =============================================================
// HELPER: Prepare a question for display
// Handles two question formats:
//   (1) NEW: question has `correct` + `distractors` -> pick 3 random
//       distractors, combine with correct, shuffle all 4.
//   (2) OLD: question has `options` + `answer` index -> shuffle the
//       4 options while remembering where the correct one moves to.
// Returns: { ...originalQuestion, options: [...], correctIndex: N }
// =============================================================
function prepareQuestion(q) {
  let optionTexts;
  let correctText;

  if (q.correct && Array.isArray(q.distractors)) {
    // New format: pick 3 random distractors, combine with the correct answer
    const pickedDistractors = shuffleArray([...q.distractors]).slice(0, 3);
    optionTexts = shuffleArray([q.correct, ...pickedDistractors]);
    correctText = q.correct;
  } else {
    // Legacy format: shuffle the existing options
    correctText = q.options[q.answer];
    optionTexts = shuffleArray([...q.options]);
  }

  // Find where the correct answer landed after shuffling
  const correctIndex = optionTexts.indexOf(correctText);

  return {
    ...q,
    options: optionTexts,
    correctIndex: correctIndex
  };
}

// =============================================================
// START QUIZ
// =============================================================
function startQuiz() {
  state.score = 0;
  state.currentIndex = 0;
  state.missed = [];
  state.answered = false;

  const count = Math.min(state.selectedLength, QUESTIONS.length);

  // Pick random questions, then prepare each one (shuffles options + picks distractors)
  state.questions = shuffleArray([...QUESTIONS])
    .slice(0, count)
    .map(prepareQuestion);

  showScreen('quiz');
  renderQuestion();
}

// =============================================================
// HELPER: Build the references HTML for a question
// =============================================================
function buildReferencesHtml(q) {
  const tags = [];

  if (q.slideRef) {
    tags.push(`
      <div class="ref-tag ref-slide">
        <span class="ref-label">SLIDES</span>
        <span class="ref-value">${escapeHtml(q.slideRef)}</span>
      </div>
    `);
  }

  if (q.regRef) {
    tags.push(`
      <div class="ref-tag ref-regulation">
        <span class="ref-label">REGULATION</span>
        <span class="ref-value">${escapeHtml(q.regRef)}</span>
      </div>
    `);
  }

  if (tags.length === 0) return '';

  return `
    <div class="references">
      <p class="references-title">Reference${tags.length > 1 ? 's' : ''}:</p>
      <div class="references-tags">${tags.join('')}</div>
    </div>
  `;
}

// =============================================================
// RENDER A QUESTION
// =============================================================
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  state.answered = false;

  // Header info
  els.questionCounter.textContent = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
  els.scoreDisplay.textContent = `Score: ${state.score}`;
  const progress = (state.currentIndex / state.questions.length) * 100;
  els.progressFill.style.width = `${progress}%`;

  // Category + question
  els.categoryTag.textContent = q.category;
  els.questionText.textContent = q.question;

  // Build option buttons (q.options was already shuffled by prepareQuestion)
  els.optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[index]}</span><span>${escapeHtml(optionText)}</span>`;
    btn.addEventListener('click', () => handleAnswer(index));
    els.optionsContainer.appendChild(btn);
  });

  // Hide feedback + next button + clear references
  els.feedback.classList.add('hidden');
  els.nextBtn.classList.add('hidden');
  els.referencesBox.innerHTML = '';
}

// =============================================================
// HANDLE AN ANSWER
// =============================================================
function handleAnswer(selectedIndex) {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.currentIndex];
  const correctIndex = q.correctIndex;     // <-- now uses the prepared correctIndex
  const buttons = els.optionsContainer.querySelectorAll('.option-btn');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) {
      btn.classList.add('correct');
    } else if (i === selectedIndex) {
      btn.classList.add('incorrect');
    } else {
      btn.classList.add('faded');
    }
  });

  if (selectedIndex === correctIndex) {
    state.score++;
    els.feedbackText.textContent = '✓ Correct';
  } else {
    els.feedbackText.textContent = `✗ Incorrect — the correct answer is ${['A','B','C','D'][correctIndex]}.`;
    state.missed.push({
      question: q.question,
      yourAnswer: q.options[selectedIndex],
      correctAnswer: q.options[correctIndex],
      explanation: q.explanation,
      slideRef: q.slideRef,
      regRef: q.regRef
    });
  }

  if (q.explanation) {
    els.explanationText.textContent = q.explanation;
    els.explanationText.classList.remove('hidden');
  } else {
    els.explanationText.classList.add('hidden');
  }

  els.referencesBox.innerHTML = buildReferencesHtml(q);

  els.feedback.classList.remove('hidden');
  els.scoreDisplay.textContent = `Score: ${state.score}`;

  els.nextBtn.textContent = (state.currentIndex === state.questions.length - 1)
    ? 'See Results'
    : 'Next Question';
  els.nextBtn.classList.remove('hidden');
}

// =============================================================
// NEXT BUTTON
// =============================================================
els.nextBtn.addEventListener('click', () => {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

// =============================================================
// RESULTS SCREEN
// =============================================================
function showResults() {
  const total = state.questions.length;
  const percent = Math.round((state.score / total) * 100);

  els.finalPercentage.textContent = `${percent}%`;
  els.correctCount.textContent = state.score;
  els.totalCount.textContent = total;

  if (percent >= 75) {
    els.passFailMessage.textContent = 'PASS — you would meet the 75% threshold';
    els.passFailMessage.className = 'pass-fail pass';
  } else {
    els.passFailMessage.textContent = 'Below 75% threshold — keep studying';
    els.passFailMessage.className = 'pass-fail fail';
  }

  if (state.missed.length > 0) {
    els.missedSection.classList.remove('hidden');
    els.missedList.innerHTML = state.missed.map(m => `
      <div class="missed-item">
        <p class="missed-question">${escapeHtml(m.question)}</p>
        <p class="missed-answer your-answer"><span class="label">Your answer:</span> ${escapeHtml(m.yourAnswer)}</p>
        <p class="missed-answer correct-answer"><span class="label">Correct:</span> ${escapeHtml(m.correctAnswer)}</p>
        ${m.explanation ? `<p class="missed-explanation">${escapeHtml(m.explanation)}</p>` : ''}
        ${buildReferencesHtml(m)}
      </div>
    `).join('');
  } else {
    els.missedSection.classList.add('hidden');
  }

  showScreen('results');
}

// Tiny helper to prevent any HTML in question content from breaking layout
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// =============================================================
// RESTART / HOME BUTTONS
// =============================================================
els.restartBtn.addEventListener('click', startQuiz);
els.homeBtn.addEventListener('click', () => showScreen('setup'));
