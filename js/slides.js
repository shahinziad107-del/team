// ============================================================
// slides.js — Slide Viewer Component
// ============================================================

const SlideViewer = {
  currentSlide: 1,
  filteredSlides: [...SLIDES],
  isFullscreen: false,

  init() {
    // Restore last viewed slide
    const saved = localStorage.getItem('lastSlide');
    if (saved) this.currentSlide = parseInt(saved);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      const activePage = document.querySelector('.page.active');
      if (!activePage || activePage.id !== 'page-slides') return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); this.prev(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); this.next(); }
      if (e.key === 'Escape' && this.isFullscreen) this.closeFullscreen();
      if (e.key === 'f' || e.key === 'F') this.openFullscreen();
    });
  },

  render() {
    const container = document.getElementById('page-slides');
    container.innerHTML = `
      <div class="slide-viewer">
        <div class="slide-main">
          <div class="slide-display" onclick="SlideViewer.openFullscreen()" title="Click to view fullscreen">
            <img id="slide-img" src="" alt="Slide" />
            <div class="slide-loading" id="slide-loading"><span class="spinner"></span></div>
          </div>
          <div class="slide-controls">
            <div class="slide-nav-btns">
              <button onclick="SlideViewer.prev()" id="btn-prev" title="Previous (←)">→ Previous</button>
              <button onclick="SlideViewer.next()" id="btn-next" title="Next (→)">Next ←</button>
              <button onclick="SlideViewer.openFullscreen()" title="Fullscreen (F)">⛶</button>
            </div>
            <div class="slide-info">
              <div class="slide-goto">
                <span>Go to:</span>
                <input type="number" id="slide-goto-input" min="1" max="${SLIDES.length}" 
                       value="${this.currentSlide}" onchange="SlideViewer.goTo(this.value)" />
                <span>/ ${this.filteredSlides.length}</span>
              </div>
            </div>
            <div class="slide-filter">
              <select id="slide-part-filter" onchange="SlideViewer.filterByPart(this.value)">
                <option value="all">All Parts</option>
                ${PARTS.map(p => `<option value="${p.id}">Part ${p.number}</option>`).join('')}
                <option value="mcq">Review Questions</option>
              </select>
              <select id="slide-type-filter" onchange="SlideViewer.filterByType(this.value)">
                <option value="all">All Slides</option>
                <option value="chart">Contains Charts</option>
                <option value="mcq">MCQ Questions</option>
              </select>
            </div>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <a href="assets/presentation.pdf" download class="btn btn-secondary btn-sm">📥 Download PDF</a>
          </div>
        </div>
        <div class="slide-thumbnails" id="slide-thumbs"></div>
      </div>
      <!-- Fullscreen -->
      <div class="slide-fullscreen" id="slide-fs">
        <button class="fs-close" onclick="SlideViewer.closeFullscreen()">✕</button>
        <img id="fs-img" src="" alt="" />
        <div class="fs-nav">
          <button onclick="SlideViewer.next()">← Next</button>
          <span class="fs-counter" id="fs-counter"></span>
          <button onclick="SlideViewer.prev()">Previous →</button>
        </div>
      </div>
    `;
    this.renderThumbs();
    this.showSlide(this.currentSlide);
  },

  renderThumbs() {
    const container = document.getElementById('slide-thumbs');
    if (!container) return;
    container.innerHTML = this.filteredSlides.map(s => `
      <div class="thumb ${s.num === this.currentSlide ? 'active' : ''}" 
           onclick="SlideViewer.goTo(${s.num})" title="Slide ${s.num}">
        <img src="${s.image}" alt="Slide ${s.num}" loading="lazy" />
        <span class="thumb-num">${s.num}</span>
        ${s.hasChart ? '<span class="thumb-badge badge-chart">📊</span>' : ''}
        ${s.isMCQ ? '<span class="thumb-badge badge-mcq">MCQ</span>' : ''}
      </div>
    `).join('');
  },

  showSlide(num) {
    const slide = SLIDES.find(s => s.num === num);
    if (!slide) return;

    this.currentSlide = num;
    localStorage.setItem('lastSlide', num);

    const img = document.getElementById('slide-img');
    const loading = document.getElementById('slide-loading');
    const fsImg = document.getElementById('fs-img');
    const gotoInput = document.getElementById('slide-goto-input');

    if (loading) loading.style.display = 'flex';
    if (img) {
      img.onload = () => { if (loading) loading.style.display = 'none'; };
      img.onerror = () => { if (loading) loading.innerHTML = '<span>Unable to load slide</span>'; };
      img.src = slide.image;
    }
    if (fsImg) fsImg.src = slide.image;
    if (gotoInput) gotoInput.value = num;

    const fsCounter = document.getElementById('fs-counter');
    if (fsCounter) fsCounter.textContent = `${num} / ${SLIDES.length}`;

    // Update prev/next buttons
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const idx = this.filteredSlides.findIndex(s => s.num === num);
    if (btnPrev) btnPrev.disabled = idx <= 0;
    if (btnNext) btnNext.disabled = idx >= this.filteredSlides.length - 1;

    // Update thumbs
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    const thumbs = document.querySelectorAll('.thumb');
    const thumbIdx = this.filteredSlides.findIndex(s => s.num === num);
    if (thumbs[thumbIdx]) {
      thumbs[thumbIdx].classList.add('active');
      thumbs[thumbIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  },

  next() {
    const idx = this.filteredSlides.findIndex(s => s.num === this.currentSlide);
    if (idx < this.filteredSlides.length - 1) {
      this.showSlide(this.filteredSlides[idx + 1].num);
    }
  },

  prev() {
    const idx = this.filteredSlides.findIndex(s => s.num === this.currentSlide);
    if (idx > 0) {
      this.showSlide(this.filteredSlides[idx - 1].num);
    }
  },

  goTo(num) {
    num = parseInt(num);
    if (num >= 1 && num <= SLIDES.length) {
      this.showSlide(num);
    }
  },

  filterByPart(partId) {
    if (partId === 'all') {
      this.filteredSlides = [...SLIDES];
    } else if (partId === 'mcq') {
      this.filteredSlides = SLIDES.filter(s => s.isMCQ);
    } else {
      this.filteredSlides = SLIDES.filter(s => s.partId === partId);
    }
    this.renderThumbs();
    if (this.filteredSlides.length > 0) {
      this.showSlide(this.filteredSlides[0].num);
    }
  },

  filterByType(type) {
    if (type === 'all') {
      this.filteredSlides = [...SLIDES];
    } else if (type === 'chart') {
      this.filteredSlides = SLIDES.filter(s => s.hasChart);
    } else if (type === 'mcq') {
      this.filteredSlides = SLIDES.filter(s => s.isMCQ);
    }
    this.renderThumbs();
    if (this.filteredSlides.length > 0) {
      this.showSlide(this.filteredSlides[0].num);
    }
  },

  openFullscreen() {
    const el = document.getElementById('slide-fs');
    if (el) { el.classList.add('show'); this.isFullscreen = true; }
  },

  closeFullscreen() {
    const el = document.getElementById('slide-fs');
    if (el) { el.classList.remove('show'); this.isFullscreen = false; }
  }
};
