// ============================================================
// quiz.js — Quiz System
// ============================================================

const Quiz = {
  currentQuestion: 0,
  answers: {},
  submitted: false,

  init() {},

  render() {
    this.currentQuestion = 0;
    this.answers = {};
    this.submitted = false;
    this.renderQuestion();
  },

  renderQuestion() {
    const container = document.getElementById('page-quiz');
    if (this.submitted) { this.renderResults(container); return; }

    const q = QUIZ[this.currentQuestion];
    const progress = ((this.currentQuestion) / QUIZ.length) * 100;
    const answered = this.answers[q.id] !== undefined;

    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header">
          <h2 style="font-family:var(--font-serif);margin-bottom:0.75rem;">اختبر نفسك</h2>
          <div class="quiz-progress"><div class="progress-fill" style="width:${progress}%"></div></div>
          <div class="quiz-counter">السؤال ${this.currentQuestion + 1} من ${QUIZ.length}</div>
        </div>
        <div class="quiz-question">
          <h3>${q.question}</h3>
          <div class="quiz-options">
            ${q.options.map((opt, i) => {
              let cls = 'quiz-option';
              if (answered) {
                cls += ' disabled';
                if (i === this.answers[q.id]) {
                  cls += i === q.correctIndex ? ' correct' : ' wrong';
                }
                if (i === q.correctIndex && this.answers[q.id] !== i) {
                  cls += ' correct-reveal';
                }
              }
              return `<div class="${cls}" onclick="Quiz.answer('${q.id}', ${i})">${opt}</div>`;
            }).join('')}
          </div>
          <div class="quiz-explanation ${answered ? 'show' : ''}" id="quiz-exp">
            ${answered ? (this.answers[q.id] === q.correctIndex ? '✅ إجابة صحيحة! ' : '❌ إجابة خاطئة. ') + q.explanation : ''}
          </div>
        </div>
        <div class="quiz-nav">
          <button class="btn btn-secondary btn-sm" onclick="Quiz.prevQuestion()" 
                  ${this.currentQuestion === 0 ? 'disabled' : ''}>→ السابق</button>
          ${this.currentQuestion < QUIZ.length - 1 
            ? `<button class="btn btn-primary btn-sm" onclick="Quiz.nextQuestion()" ${!answered ? 'disabled' : ''}>التالي ←</button>`
            : `<button class="btn btn-primary btn-sm" onclick="Quiz.submit()" ${!answered ? 'disabled' : ''}>عرض النتائج</button>`
          }
        </div>
        <div style="text-align:center;margin-top:1rem;">
          <button class="btn btn-secondary btn-sm" onclick="Quiz.restart()">🔄 إعادة الاختبار</button>
        </div>
      </div>
    `;
  },

  answer(qId, optIndex) {
    if (this.answers[qId] !== undefined) return;
    this.answers[qId] = optIndex;
    this.renderQuestion();
  },

  nextQuestion() {
    if (this.currentQuestion < QUIZ.length - 1) {
      this.currentQuestion++;
      this.renderQuestion();
    }
  },

  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.renderQuestion();
    }
  },

  submit() {
    this.submitted = true;
    this.renderQuestion();
  },

  restart() {
    this.currentQuestion = 0;
    this.answers = {};
    this.submitted = false;
    this.renderQuestion();
  },

  renderResults(container) {
    let correct = 0;
    QUIZ.forEach(q => {
      if (this.answers[q.id] === q.correctIndex) correct++;
    });
    const percentage = Math.round((correct / QUIZ.length) * 100);
    let emoji = '🎯';
    if (percentage >= 90) emoji = '🏆';
    else if (percentage >= 70) emoji = '👏';
    else if (percentage >= 50) emoji = '📚';
    else emoji = '💪';

    container.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-results">
          <div style="font-size:3rem;margin-bottom:0.5rem;">${emoji}</div>
          <div class="quiz-score">${correct} / ${QUIZ.length}</div>
          <div class="quiz-score-text">${percentage}% — ${percentage >= 70 ? 'أداء ممتاز!' : percentage >= 50 ? 'أداء جيد، راجع الأجزاء الضعيفة.' : 'تحتاج مراجعة أكثر.'}</div>
          <div class="quiz-results-list">
            ${QUIZ.map((q, i) => {
              const isCorrect = this.answers[q.id] === q.correctIndex;
              return `<div class="result-item">
                <span class="${isCorrect ? 'result-icon-correct' : 'result-icon-wrong'}">${isCorrect ? '✅' : '❌'}</span>
                <span>س${i+1}: ${q.question.substring(0, 60)}...</span>
              </div>`;
            }).join('')}
          </div>
          <div style="margin-top:1.5rem;display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="Quiz.restart()">🔄 إعادة الاختبار</button>
            <button class="btn btn-secondary" onclick="App.navigate('home')">🏠 الرئيسية</button>
          </div>
        </div>
      </div>
    `;
  }
};
