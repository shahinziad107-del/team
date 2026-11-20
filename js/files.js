// ============================================================
// files.js — File Management Component
// ============================================================

const FileManager = {
  files: [],
  filterPart: 'all',
  filterType: 'all',
  searchQuery: '',

  async init() {
    try {
      this.files = await dbGetAll();
    } catch (e) {
      console.error('Failed to load files from DB:', e);
      this.files = [];
    }
  },

  async render() {
    await this.init();
    const container = document.getElementById('page-files');

    container.innerHTML = `
      <h2 style="font-family:var(--font-serif);margin-bottom:1rem;">الملفات المرفقة</h2>

      <!-- Drop Zone -->
      <div class="drop-zone" id="drop-zone" onclick="document.getElementById('file-input').click()">
        <span class="drop-icon">📁</span>
        <div class="drop-text">اسحب الملفات هنا أو اضغط للاختيار</div>
        <div class="drop-hint">الامتدادات المسموحة: PPTX, PDF, DOCX, PNG, JPG, WEBP, TXT, MD — الحد الأقصى: ${formatFileSize(MAX_FILE_SIZE)}</div>
        <input type="file" id="file-input" multiple accept="${ALLOWED_EXTENSIONS.join(',')}" onchange="FileManager.handleFileSelect(event)" />
      </div>

      <!-- Upload Form (shown after file selection) -->
      <div class="upload-form" id="upload-form">
        <h3 style="font-family:var(--font-serif);font-size:1rem;margin-bottom:0.75rem;">تفاصيل الملف</h3>
        <div id="upload-file-name" style="font-weight:500;margin-bottom:0.5rem;"></div>
        <div class="form-row">
          <div class="form-field">
            <label>الجزء المرتبط</label>
            <select id="upload-part">
              <option value="">بدون جزء محدد</option>
              ${PARTS.map(p => `<option value="${p.id}">الجزء ${p.number} — ${p.titleAr}</option>`).join('')}
            </select>
          </div>
          <div class="form-field">
            <label>نوع الملف</label>
            <select id="upload-type">
              <option value="PowerPoint">PowerPoint</option>
              <option value="PDF">PDF</option>
              <option value="Word">Word</option>
              <option value="Image">صورة</option>
              <option value="Notes">ملاحظات</option>
              <option value="Other">أخرى</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label>عنوان الملف</label>
            <input type="text" id="upload-title" placeholder="عنوان وصفي للملف" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-field">
            <label>وصف (اختياري)</label>
            <textarea id="upload-desc" placeholder="وصف مختصر..."></textarea>
          </div>
        </div>
        <div class="upload-progress" id="upload-progress">
          <div class="progress-bar" id="upload-progress-bar"></div>
        </div>
        <div style="display:flex;gap:0.5rem;margin-top:0.75rem;">
          <button class="btn btn-primary btn-sm" onclick="FileManager.uploadFile()">📤 رفع الملف</button>
          <button class="btn btn-secondary btn-sm" onclick="FileManager.cancelUpload()">إلغاء</button>
        </div>
      </div>

      <!-- Toolbar -->
      <div class="files-toolbar">
        <select id="files-filter-part" onchange="FileManager.filterPart=this.value;FileManager.renderList();">
          <option value="all">كل الأجزاء</option>
          ${PARTS.map(p => `<option value="${p.id}">الجزء ${p.number}</option>`).join('')}
        </select>
        <select id="files-filter-type" onchange="FileManager.filterType=this.value;FileManager.renderList();">
          <option value="all">كل الأنواع</option>
          <option value="PowerPoint">PowerPoint</option>
          <option value="PDF">PDF</option>
          <option value="Word">Word</option>
          <option value="Image">صورة</option>
          <option value="Notes">ملاحظات</option>
          <option value="Other">أخرى</option>
        </select>
        <input type="text" placeholder="بحث في الملفات..." id="files-search"
               oninput="FileManager.searchQuery=this.value;FileManager.renderList();" />
      </div>

      <!-- Files List -->
      <div id="files-list-container"></div>
    `;

    this.setupDragDrop();
    this.renderList();
  },

  renderList() {
    const container = document.getElementById('files-list-container');
    if (!container) return;

    let filtered = [...this.files];
    if (this.filterPart !== 'all') filtered = filtered.filter(f => f.partId === this.filterPart);
    if (this.filterType !== 'all') filtered = filtered.filter(f => f.type === this.filterType);
    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(f =>
        f.name.toLowerCase().includes(q) ||
        (f.description || '').toLowerCase().includes(q) ||
        (f.title || '').toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">📂</span>
          <div class="empty-text">لا توجد ملفات مرفقة</div>
          <div class="empty-hint">اسحب ملفاً إلى منطقة الرفع أعلاه أو اضغط عليها لإضافة ملف.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <ul class="files-list">
        ${filtered.map(f => {
          const part = PARTS.find(p => p.id === f.partId);
          return `
            <li class="file-item">
              <span class="file-icon">${getFileIcon(f.type)}</span>
              <div class="file-info">
                <div class="file-name">${f.title || f.name}</div>
                <div class="file-meta">
                  <span>${f.type}</span>
                  <span>${formatFileSize(f.size)}</span>
                  ${part ? `<span>الجزء ${part.number}</span>` : ''}
                  <span>${formatDate(f.createdAt)}</span>
                </div>
                ${f.description ? `<div style="font-size:0.75rem;color:var(--text-secondary);margin-top:0.2rem;">${f.description}</div>` : ''}
              </div>
              <div class="file-actions">
                ${f.type === 'Image' ? `<button onclick="FileManager.preview('${f.id}')" title="معاينة">👁️</button>` : ''}
                ${f.type === 'PDF' ? `<button onclick="FileManager.preview('${f.id}')" title="معاينة">👁️</button>` : ''}
                <button onclick="FileManager.download('${f.id}')" title="تحميل">📥</button>
                <button class="delete" onclick="FileManager.deleteFile('${f.id}')" title="حذف">🗑️</button>
              </div>
            </li>
          `;
        }).join('')}
      </ul>
    `;
  },

  pendingFile: null,

  handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;
    this.prepareUpload(file);
  },

  prepareUpload(file) {
    if (!isAllowedFile(file.name)) {
      showToast('امتداد الملف غير مسموح به.', 'error');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      showToast(`حجم الملف يتجاوز الحد الأقصى (${formatFileSize(MAX_FILE_SIZE)}).`, 'error');
      return;
    }

    this.pendingFile = file;
    const form = document.getElementById('upload-form');
    const nameEl = document.getElementById('upload-file-name');
    const titleEl = document.getElementById('upload-title');
    const typeEl = document.getElementById('upload-type');

    if (nameEl) nameEl.textContent = `📄 ${file.name} (${formatFileSize(file.size)})`;
    if (titleEl) titleEl.value = file.name.replace(/\.[^.]+$/, '');
    if (typeEl) typeEl.value = getFileTypeFromExt(file.name);
    if (form) form.classList.add('show');
  },

  cancelUpload() {
    this.pendingFile = null;
    const form = document.getElementById('upload-form');
    if (form) form.classList.remove('show');
    const input = document.getElementById('file-input');
    if (input) input.value = '';
  },

  async uploadFile() {
    if (!this.pendingFile) return;

    const progress = document.getElementById('upload-progress');
    const progressBar = document.getElementById('upload-progress-bar');
    if (progress) progress.classList.add('show');

    // Simulate progress
    let pct = 0;
    const interval = setInterval(() => {
      pct = Math.min(pct + 15, 90);
      if (progressBar) progressBar.style.width = pct + '%';
    }, 100);

    try {
      const reader = new FileReader();
      const fileData = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(this.pendingFile);
      });

      const attachment = {
        id: generateId(),
        name: this.pendingFile.name,
        title: document.getElementById('upload-title')?.value || this.pendingFile.name,
        type: document.getElementById('upload-type')?.value || 'Other',
        partId: document.getElementById('upload-part')?.value || '',
        description: document.getElementById('upload-desc')?.value || '',
        size: this.pendingFile.size,
        data: fileData,
        createdAt: new Date().toISOString()
      };

      await dbPut(attachment);
      this.files.push(attachment);

      clearInterval(interval);
      if (progressBar) progressBar.style.width = '100%';

      setTimeout(() => {
        this.cancelUpload();
        if (progress) progress.classList.remove('show');
        if (progressBar) progressBar.style.width = '0%';
        this.renderList();
        showToast('تم رفع الملف بنجاح!', 'success');
      }, 300);
    } catch (e) {
      clearInterval(interval);
      if (progress) progress.classList.remove('show');
      showToast('فشل في رفع الملف.', 'error');
      console.error(e);
    }
  },

  async download(id) {
    const file = await dbGet(id);
    if (!file || !file.data) { showToast('الملف غير موجود.', 'error'); return; }

    const a = document.createElement('a');
    a.href = file.data;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  async preview(id) {
    const file = await dbGet(id);
    if (!file || !file.data) { showToast('الملف غير موجود.', 'error'); return; }

    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');

    if (title) title.textContent = file.title || file.name;

    if (file.type === 'Image') {
      body.innerHTML = `<img src="${file.data}" alt="${file.name}" />`;
    } else if (file.type === 'PDF') {
      body.innerHTML = `<iframe src="${file.data}" style="width:100%;height:70vh;border:none;border-radius:var(--radius-sm);"></iframe>`;
    } else {
      body.innerHTML = `<p>لا يمكن عرض هذا النوع مباشرة. <button class="btn btn-primary btn-sm" onclick="FileManager.download('${id}')">📥 تحميل</button></p>`;
    }

    if (overlay) overlay.classList.add('show');
  },

  async deleteFile(id) {
    if (!confirm('هل تريد حذف هذا الملف؟')) return;
    try {
      await dbDelete(id);
      this.files = this.files.filter(f => f.id !== id);
      this.renderList();
      showToast('تم حذف الملف.', 'success');
    } catch (e) {
      showToast('فشل في حذف الملف.', 'error');
    }
  },

  setupDragDrop() {
    const zone = document.getElementById('drop-zone');
    if (!zone) return;

    ['dragenter', 'dragover'].forEach(evt => {
      zone.addEventListener(evt, (e) => { e.preventDefault(); zone.classList.add('dragover'); });
    });
    ['dragleave', 'drop'].forEach(evt => {
      zone.addEventListener(evt, (e) => { e.preventDefault(); zone.classList.remove('dragover'); });
    });
    zone.addEventListener('drop', (e) => {
      const file = e.dataTransfer.files[0];
      if (file) this.prepareUpload(file);
    });
  }
};
