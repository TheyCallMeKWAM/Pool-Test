// =============================================================
// AQUATIC SAFETY INSPECTOR QUIZ - LOGIC
// =============================================================
// This file controls the entire quiz flow:
//   1. Setup screen: pick number of questions
//   2. Quiz screen: show one question at a time, give feedback
//   3. Results screen: show score + missed questions
// =============================================================

// ----- State (the "memory" of the app) -----
const state = {
  selectedLength: 20,    // how many questions the user wants
  questions: [],         // the random subset selected for this run
  currentIndex: 0,       // which question we're on
  score: 0,              // running correct count
  missed: [],            // store missed questions to review at end
  answered: false        // has user picked an option for this question yet?
};

// ----- DOM element references (grab them once for speed) -----
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
  // Remove "selected" from all, add to clicked
  els.lengthOptions.querySelectorAll('.length-btn').forEach(b => b.classList.remove('selected'));
  e.target.classList.add('selected');
  state.selectedLength = parseInt(e.target.dataset.length, 10);
});

els.startBtn.addEventListener('click', startQuiz);

// =============================================================
// START QUIZ
// =============================================================
function startQuiz() {
  // Reset state
  state.score = 0;
  state.currentIndex = 0;
  state.missed = [];
  state.answered = false;

  // Pick random questions (capped at total available)
  const count = Math.min(state.selectedLength, QUESTIONS.length);
  state.questions = shuffleArray([...QUESTIONS]).slice(0, count);

  showScreen('quiz');
  renderQuestion();
}

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

  // Build option buttons
  els.optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((optionText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[index]}</span><span>${optionText}</span>`;
    btn.addEventListener('click', () => handleAnswer(index));
    els.optionsContainer.appendChild(btn);
  });

  // Hide feedback + next button
  els.feedback.classList.add('hidden');
  els.nextBtn.classList.add('hidden');
}

// =============================================================
// HANDLE AN ANSWER
// =============================================================
function handleAnswer(selectedIndex) {
  if (state.answered) return;     // prevent multiple clicks
  state.answered = true;

  const q = state.questions[state.currentIndex];
  const correctIndex = q.answer;
  const buttons = els.optionsContainer.querySelectorAll('.option-btn');

  // Mark every button visually
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

  // Update score / track missed
  if (selectedIndex === correctIndex) {
    state.score++;
    els.feedbackText.textContent = '✓ Correct';
  } else {
    els.feedbackText.textContent = `✗ Incorrect — the correct answer is ${['A','B','C','D'][correctIndex]}.`;
    state.missed.push({
      question: q.question,
      yourAnswer: q.options[selectedIndex],
      correctAnswer: q.options[correctIndex],
      explanation: q.explanation
    });
  }

  // Show explanation if available
  if (q.explanation) {
    els.explanationText.textContent = q.explanation;
    els.explanationText.classList.remove('hidden');
  } else {
    els.explanationText.classList.add('hidden');
  }

  els.feedback.classList.remove('hidden');
  els.scoreDisplay.textContent = `Score: ${state.score}`;

  // Show next button (or "See Results" if last question)
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

  // Pool inspector exam pass mark is 75%
  if (percent >= 75) {
    els.passFailMessage.textContent = 'PASS — you would meet the 75% threshold';
    els.passFailMessage.className = 'pass-fail pass';
  } else {
    els.passFailMessage.textContent = 'Below 75% threshold — keep studying';
    els.passFailMessage.className = 'pass-fail fail';
  }

  // Render missed questions
  if (state.missed.length > 0) {
    els.missedSection.classList.remove('hidden');
    els.missedList.innerHTML = state.missed.map(m => `
      <div class="missed-item">
        <p class="missed-question">${escapeHtml(m.question)}</p>
        <p class="missed-answer your-answer"><span class="label">Your answer:</span> ${escapeHtml(m.yourAnswer)}</p>
        <p class="missed-answer correct-answer"><span class="label">Correct:</span> ${escapeHtml(m.correctAnswer)}</p>
        ${m.explanation ? `<p class="missed-explanation">${escapeHtml(m.explanation)}</p>` : ''}
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
