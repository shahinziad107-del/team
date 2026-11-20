// ============================================================
// app.js — Main Application Router & Page Renderer
// ============================================================

const App = {
  currentPage: 'home',
  currentPartId: null,

  init() {
    SlideViewer.init();
    Quiz.init();

    // Handle back/forward
    window.addEventListener('hashchange', () => this.handleRoute());

    // Theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon();

    // Mobile nav toggle
    document.getElementById('nav-toggle')?.addEventListener('click', () => {
      document.getElementById('nav-links')?.classList.toggle('show');
    });

    // Close mobile nav on link click
    document.querySelectorAll('.navbar-links a, .navbar-links button').forEach(el => {
      el.addEventListener('click', () => {
        document.getElementById('nav-links')?.classList.remove('show');
      });
    });

    // Search
    const searchInput = document.getElementById('global-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
      searchInput.addEventListener('focus', () => {
        if (searchInput.value.length > 0) this.handleSearch(searchInput.value);
      });
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-search')) {
          document.getElementById('search-results')?.classList.remove('show');
        }
      });
    }

    this.handleRoute();
  },

  handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const parts = hash.split('/');
    const page = parts[0];
    const param = parts[1];

    if (page === 'part' && param) {
      this.currentPartId = param;
      this.navigate('part-detail', false);
    } else if (page === 'slides' && param) {
      SlideViewer.currentSlide = parseInt(param);
      this.navigate('slides', false);
    } else {
      this.navigate(page, false);
    }
  },

  navigate(page, pushState = true) {
    this.currentPage = page;

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Update navbar active
    document.querySelectorAll('.navbar-links a').forEach(a => a.classList.remove('active'));
    const navLink = document.querySelector(`[data-page="${page}"]`);
    if (navLink) navLink.classList.add('active');

    // Render page
    switch (page) {
      case 'home': this.renderHome(); break;
      case 'slides': this.renderSlides(); break;
      case 'parts': this.renderParts(); break;
      case 'part-detail': this.renderPartDetail(); break;
      case 'files': this.renderFiles(); break;
      case 'quiz': this.renderQuiz(); break;
      default: this.renderHome(); page = 'home';
    }

    // Show page
    const pageEl = document.getElementById('page-' + (page === 'part-detail' ? 'part-detail' : page));
    if (pageEl) pageEl.classList.add('active');

    // Update breadcrumbs
    this.updateBreadcrumbs(page);

    // Push hash
    if (pushState) {
      let hash = page;
      if (page === 'part-detail') hash = 'part/' + this.currentPartId;
      window.location.hash = hash;
    }

    // Scroll top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  updateBreadcrumbs(page) {
    const bc = document.getElementById('breadcrumbs');
    if (!bc) return;
    let crumbs = [{ label: 'Home', page: 'home' }];
    switch (page) {
      case 'slides':
        crumbs.push({ label: 'Slide Viewer' });
        break;
      case 'parts':
        crumbs.push({ label: 'Five Parts' });
        break;
      case 'part-detail':
        const part = PARTS.find(p => p.id === this.currentPartId);
        crumbs.push({ label: 'Five Parts', page: 'parts' });
        if (part) crumbs.push({ label: `الPart ${part.number}: ${part.titleAr}` });
        break;
      case 'files':
        crumbs.push({ label: 'Attached Files' });
        break;
      case 'quiz':
        crumbs.push({ label: 'Quiz' });
        break;
    }

    bc.innerHTML = crumbs.map((c, i) => {
      if (i < crumbs.length - 1 && c.page) {
        return `<a onclick="App.navigate('${c.page}')">${c.label}</a><span class="sep">/</span>`;
      }
      return `<span>${c.label}</span>`;
    }).join('');
  },

  // ==================== HOME ====================
  renderHome() {
    const container = document.getElementById('page-home');
    container.innerHTML = `
      <div class="hero">
        <h1>${SITE_META.titleAr}</h1>
        <p class="subtitle">${SITE_META.subtitle}</p>
        <div class="hero-actions">
          <button class="btn btn-primary" onclick="App.navigate('parts')">📖 ابدأ الشرح</button>
          <button class="btn btn-secondary" onclick="App.navigate('slides')">🖼️ افتح العرض</button>
          <button class="btn btn-secondary" onclick="App.navigate('files')">📁 الملفات المرفقة</button>
          <button class="btn btn-secondary" onclick="App.navigate('quiz')">✏️ اختبر نفQك</button>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">${SITE_META.totalSlides}</span>
            <span class="stat-label">Slide</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">${SITE_META.totalParts}</span>
            <span class="stat-label">أجزاء</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">${SITE_META.totalQuestions}</span>
            <span class="stat-label">Question مراجعة</span>
          </div>
        </div>
        <div class="source-notice">
          ⚠️ ${SITE_META.sourceNote}
        </div>
      </div>

      <!-- Parts quick links -->
      <h2 style="font-family:var(--font-serif);margin:2rem 0 1rem;text-align:center;">Five Parts</h2>
      <div class="parts-nav">
        ${PARTS.map(p => `
          <div class="part-nav-card" onclick="App.currentPartId='${p.id}';App.navigate('part-detail')">
            <span class="part-num">0${p.number}</span>
            <div class="part-title">${p.titleAr}</div>
            <div class="part-slides">${p.slideNumbers.length} شرائح · <span class="ltr">${p.titleEn}</span></div>
          </div>
        `).join('')}
      </div>
    `;
  },

  // ==================== SLIDES ====================
  renderSlides() {
    SlideViewer.render();
  },

  // ==================== PARTS LIST ====================
  renderParts() {
    const container = document.getElementById('page-parts');
    container.innerHTML = `
      <h2 style="font-family:var(--font-serif);margin-bottom:1.5rem;">Five Parts</h2>
      <div class="parts-nav">
        ${PARTS.map(p => `
          <div class="part-nav-card" onclick="App.currentPartId='${p.id}';App.navigate('part-detail')">
            <span class="part-num">0${p.number}</span>
            <div class="part-title">${p.titleAr}</div>
            <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:0.3rem;">${p.summary.substring(0, 100)}...</div>
            <div class="part-slides" style="margin-top:0.5rem;">${p.slideNumbers.length} شرائح · <span class="ltr">${p.titleEn}</span></div>
          </div>
        `).join('')}
      </div>
    `;
  },

  // ==================== PART DETAIL ====================
  renderPartDetail() {
    const container = document.getElementById('page-part-detail');
    const part = PARTS.find(p => p.id === this.currentPartId);
    if (!part) { this.navigate('parts'); return; }

    container.innerHTML = `
      <div class="part-header">
        <span class="part-number">0${part.number}</span>
        <div>
          <h2>${part.titleAr}</h2>
          <span class="part-en ltr">${part.titleEn}</span>
        </div>
      </div>

      <!-- Summary -->
      <div class="card">
        <h3>Summary</h3>
        <p style="color:var(--text-secondary);line-height:1.9;">${part.summary}</p>
      </div>

      <!-- Concepts -->
      <h3 class="section-title">Key Concepts</h3>
      <ul class="concepts-list">
        ${part.concepts.map(c => `
          <li>
            <span class="concept-term">${c.term}</span>
            <span class="concept-desc">${c.desc}</span>
          </li>
        `).join('')}
      </ul>

      <!-- Diagram -->
      ${this.renderDiagram(part)}

      <!-- Examples -->
      ${part.examples.length > 0 ? `
        <h3 class="section-title">Lecture Examples</h3>
        ${part.examples.map(ex => `
          <div class="example-card">
            <div class="example-title">${ex.title}</div>
            <div class="example-text">${ex.text}</div>
          </div>
        `).join('')}
      ` : ''}

      <!-- Effective Leadership (Part 3) -->
      ${part.effectiveLeadership ? `
        <h3 class="section-title">Eight Effective Leadership Components</h3>
        <ul class="concepts-list">
          ${part.effectiveLeadership.map(c => `
            <li>
              <span class="concept-term">${c.num}. ${c.title}</span>
              <span class="concept-desc">${c.desc}</span>
            </li>
          `).join('')}
        </ul>
      ` : ''}

      <!-- Quick Question -->
      ${part.quickQuestion ? `
        <div class="quick-question" id="qq-${part.id}">
          <h4>❓ Quick Question</h4>
          <p style="margin-bottom:0.75rem;">${part.quickQuestion.q}</p>
          <div class="qq-options">
            ${part.quickQuestion.options.map((opt, i) => `
              <label onclick="App.answerQuickQ('${part.id}', ${i}, ${part.quickQuestion.correct})">
                <input type="radio" name="qq-${part.id}" /> ${opt}
              </label>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Part Actions -->
      <div class="part-actions">
        <button class="btn btn-secondary btn-sm" onclick="SlideViewer.filterByPart('${part.id}');App.navigate('slides')">🖼️ View This Part’s Slides</button>
        <button class="btn btn-secondary btn-sm" onclick="App.navigate('files')">📁 Add a File to This Part</button>
        ${part.number > 1 ? `<button class="btn btn-secondary btn-sm" onclick="App.currentPartId='part-${part.number-1}';App.navigate('part-detail')">→ Previous Part</button>` : ''}
        ${part.number < 5 ? `<button class="btn btn-secondary btn-sm" onclick="App.currentPartId='part-${part.number+1}';App.navigate('part-detail')">← Next Part</button>` : ''}
      </div>
    `;
  },

  answerQuickQ(partId, selected, correct) {
    const container = document.getElementById(`qq-${partId}`);
    if (!container) return;
    const labels = container.querySelectorAll('label');
    labels.forEach((lbl, i) => {
      lbl.onclick = null;
      if (i === correct) lbl.classList.add('correct');
      else if (i === selected && i !== correct) lbl.classList.add('wrong');
    });
  },

  renderDiagram(part) {
    if (!part.diagramData) return '';
    const d = part.diagramData;

    let content = '';
    switch (part.diagramType) {
      case 'comparison':
        content = `
          <div class="comparison-flow">
            <div class="flow-center">${d.center}</div>
            <div style="font-size:1.5rem;color:var(--accent);">↓</div>
            <div class="flow-branches">
              ${d.branches.map(b => `
                <div class="flow-branch">
                  <div class="branch-label">${b.label}</div>
                  <div class="branch-detail">${b.detail}</div>
                </div>
              `).join('')}
            </div>
          </div>`;
        break;

      case 'portfolio':
        content = `
          <div class="portfolio-flow">
            <div class="portfolio-stage">
              <div class="stage-label">${d.stages[0].label}</div>
              <div class="portfolio-items">
                ${d.stages[0].items.map(item => `<div class="portfolio-item">${item}</div>`).join('')}
              </div>
            </div>
            <div class="portfolio-arrow">←</div>
            <div class="portfolio-stage">
              <div class="stage-label">${d.stages[1].label}</div>
              <div class="portfolio-items">
                ${d.stages[1].items.map(item => `<div class="portfolio-item" style="border-color:var(--accent);font-weight:600;">${item}</div>`).join('')}
              </div>
            </div>
          </div>`;
        break;

      case 'radial':
        content = `
          <div class="radial-diagram">
            <div class="radial-center">${d.center}</div>
            <div class="radial-items">
              ${d.items.map(item => `<div class="radial-item">${item}</div>`).join('')}
            </div>
          </div>`;
        break;

      case 'timeline':
        content = `
          <div class="timeline-compare">
            <div class="timeline-side">
              <span class="side-label">${d.before.label}</span>
              <div class="timeline-items">
                ${d.before.items.map(item => `<div class="timeline-item">${item}</div>`).join('')}
              </div>
            </div>
            <div class="timeline-side">
              <span class="side-label">${d.after.label}</span>
              <div class="timeline-items">
                ${d.after.items.map(item => `<div class="timeline-item">${item}</div>`).join('')}
              </div>
            </div>
          </div>`;
        break;

      case 'grid':
        content = `
          <div class="practice-grid">
            ${d.pairs.map(pair => `
              <div class="practice-pair">
                <div class="pair-header">${pair.header}</div>
                <div class="pair-items">
                  ${pair.items.map(item => `<div class="pair-item">${item}</div>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>`;
        break;

      default: return '';
    }

    return `
      <div class="diagram-container">
        <h4>📊 ${d.title}</h4>
        ${content}
      </div>
    `;
  },

  // ==================== FILES ====================
  async renderFiles() {
    await FileManager.render();
  },

  // ==================== QUIZ ====================
  renderQuiz() {
    Quiz.render();
  },

  // ==================== SEARCH ====================
  handleSearch(query) {
    const resultsEl = document.getElementById('search-results');
    if (!resultsEl) return;

    if (!query || query.length < 2) {
      resultsEl.classList.remove('show');
      return;
    }

    const q = query.toLowerCase();
    const results = [];

    // Search slides
    SLIDES.forEach(s => {
      if (s.titleAr.toLowerCase().includes(q) || s.titleEn.toLowerCase().includes(q)) {
        results.push({
          type: 'Slide',
          label: `Slide ${s.num}: ${s.titleAr}`,
          action: `SlideViewer.currentSlide=${s.num};App.navigate('slides')`
        });
      }
    });

    // Search parts
    PARTS.forEach(p => {
      if (p.titleAr.includes(q) || p.titleEn.toLowerCase().includes(q) || p.summary.includes(q)) {
        results.push({
          type: 'Part',
          label: `الPart ${p.number}: ${p.titleAr}`,
          action: `App.currentPartId='${p.id}';App.navigate('part-detail')`
        });
      }
      // Search concepts
      p.concepts.forEach(c => {
        if (c.term.includes(q) || c.desc.includes(q)) {
          results.push({
            type: 'Concept',
            label: `${c.term} — الPart ${p.number}`,
            action: `App.currentPartId='${p.id}';App.navigate('part-detail')`
          });
        }
      });
    });

    // Search quiz
    QUIZ.forEach((qz, i) => {
      if (qz.question.includes(q)) {
        results.push({
          type: 'Question',
          label: `Q${i + 1}: ${qz.question.substring(0, 50)}...`,
          action: `Quiz.currentQuestion=${i};App.navigate('quiz')`
        });
      }
    });

    if (results.length === 0) {
      resultsEl.innerHTML = '<div class="search-result-item" style="opacity:0.6;">No results</div>';
    } else {
      resultsEl.innerHTML = results.slice(0, 10).map(r => `
        <div class="search-result-item" onclick="${r.action};document.getElementById('search-results').classList.remove('show');document.getElementById('global-search').value='';">
          <span class="result-type">${r.type}</span>
          ${r.label}
        </div>
      `).join('');
    }
    resultsEl.classList.add('show');
  },

  // ==================== THEME ====================
  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    this.updateThemeIcon();
  },

  updateThemeIcon() {
    const btn = document.getElementById('theme-btn');
    if (!btn) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent = isDark ? '☀️' : '🌙';
    btn.title = isDark ? 'الوضع الفاتح' : 'الوضع الداكن';
  }
};

// Boot
document.addEventListener('DOMContentLoaded', () => App.init());
