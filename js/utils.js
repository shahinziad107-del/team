// ============================================================
// utils.js — Utility functions
// ============================================================

function formatFileSize(bytes) {
  if (bytes === 0) return '0 بايت';
  const k = 1024;
  const sizes = ['بايت', 'ك.ب', 'م.ب', 'ج.ب'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

function getFileIcon(type) {
  const icons = {
    'PowerPoint': '📊', 'PDF': '📕', 'Word': '📘',
    'Image': '🖼️', 'Notes': '📝', 'Other': '📄'
  };
  return icons[type] || '📄';
}

function getFileTypeFromExt(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const map = {
    pptx: 'PowerPoint', pdf: 'PDF', docx: 'Word',
    png: 'Image', jpg: 'Image', jpeg: 'Image', webp: 'Image',
    txt: 'Notes', md: 'Notes'
  };
  return map[ext] || 'Other';
}

function isAllowedFile(filename) {
  const ext = '.' + filename.split('.').pop().toLowerCase();
  return ALLOWED_EXTENSIONS.includes(ext);
}

function generateId() {
  return 'f' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

function showToast(message, type = 'info') {
  const container = document.querySelector('.toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function formatDate(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
}

// IndexedDB for file storage
const DB_NAME = 'strategicLeadershipDB';
const DB_VERSION = 1;
const STORE_NAME = 'attachments';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('partId', 'partId', { unique: false });
        store.createIndex('type', 'type', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function dbGetAll() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbPut(item) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.put(item);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function dbDelete(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function dbGet(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
