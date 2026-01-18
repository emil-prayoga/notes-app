import '../styles/style.css';
import './components/app-bar.js';
import './components/loading-indicator.js';
import './components/note-form.js';
import './components/note-item.js';
import './components/notes-list.js';
import NotesAPI from './api/notes-api.js';
import Notification from './utils/notification.js';
import { fallbackNotes, fallbackArchivedNotes } from './data/fallback-data.js';

class NotesApp {
  constructor() {
    this.activeNotesList = document.querySelector('#activeNotes');
    this.archivedNotesList = document.querySelector('#archivedNotes');
    this.noteForm = document.querySelector('note-form');
    this.loadingIndicator = document.querySelector('loading-indicator');
    this.toggleArchivedBtn = document.querySelector('#toggleArchived');
    this.toggleActiveBtn = document.querySelector('#toggleActive');

    this.init();
  }

  async init() {
    this.attachEventListeners();
    await this.loadNotes();
  }

  attachEventListeners() {
    // Form submit
    document.addEventListener('note-submit', async (e) => {
      await this.handleNoteSubmit(e.detail);
    });

    // Note actions (archive, unarchive, delete)
    document.addEventListener('note-action', async (e) => {
      await this.handleNoteAction(e.detail);
    });

    // Toggle views
    this.toggleArchivedBtn.addEventListener('click', () => {
  this.switchViewWithLoading(() => this.showArchivedView());
});

this.toggleActiveBtn.addEventListener('click', () => {
  this.switchViewWithLoading(() => this.showActiveView());
});

  }
  
  async switchViewWithLoading(callback) {
  this.loadingIndicator.show();

  // Delay kecil agar animasi terlihat
  await new Promise(resolve => setTimeout(resolve, 150));

  callback();

  this.loadingIndicator.hide();
}


  showArchivedView() {
    document.querySelector(
      '.notes-section:not(.archived-section)'
    ).style.display = 'none';
    document.querySelector('.archived-section').style.display = 'block';
  }

  showActiveView() {
    document.querySelector(
      '.notes-section:not(.archived-section)'
    ).style.display = 'block';
    document.querySelector('.archived-section').style.display = 'none';
  }

   isFallbackNote(id) {
    return (
      fallbackNotes.some(note => note.id === id) ||
      fallbackArchivedNotes.some(note => note.id === id)
    );
  }

async loadNotes() {
  try {
    this.loadingIndicator.show();

    const [activeFromAPI, archivedFromAPI] = await Promise.all([
      NotesAPI.getNotes(),
      NotesAPI.getArchivedNotes(),
    ]);

    // Gabungkan fallback + API
    const activeNotes = mergeNotes(fallbackNotes, activeFromAPI);
    const archivedNotes = mergeNotes(fallbackArchivedNotes, archivedFromAPI);

    this.activeNotesList.setNotes(activeNotes);
    this.archivedNotesList.setNotes(archivedNotes);
  } catch (error) {
    Notification.error(error.message);
  } finally {
    this.loadingIndicator.hide();
  }

  // Fungsi merge sederhana, menghindari duplikasi ID
  function mergeNotes(fallback, apiNotes) {
    const ids = new Set(apiNotes.map(note => note.id));
    return [...fallback.filter(note => !ids.has(note.id)), ...apiNotes];
  }
}



  async handleNoteSubmit({ title, body }) {
    try {
      this.loadingIndicator.show();

      await NotesAPI.createNote(title, body);

      Notification.success('Catatan berhasil ditambahkan!');

      await this.loadNotes();
    } catch (error) {
      Notification.error(error.message);
    } finally {
      this.loadingIndicator.hide();
    }
  }

  async handleNoteAction({ id, action }) {
    if (action === 'delete') {
      const result = await Notification.confirm(
        'Hapus Catatan',
        'Anda yakin ingin menghapus catatan ini?'
      );

      if (result.isConfirmed) {
        await this.deleteNote(id);
      }
    } else if (action === 'archive') {
      await this.archiveNote(id);
    } else if (action === 'unarchive') {
      await this.unarchiveNote(id);
    }
  }

  async deleteNote(id) {
  // === FALLBACK ===
  if (this.isFallbackNote(id)) {
    const activeIndex = fallbackNotes.findIndex(note => note.id === id);
    const archivedIndex = fallbackArchivedNotes.findIndex(note => note.id === id);

    if (activeIndex !== -1) {
      fallbackNotes.splice(activeIndex, 1);
    }

    if (archivedIndex !== -1) {
      fallbackArchivedNotes.splice(archivedIndex, 1);
    }

    Notification.success('Catatan fallback berhasil dihapus!');
    await this.loadNotes();
    return;
  }

  // === API ===
  try {
    this.loadingIndicator.show();
    await NotesAPI.deleteNote(id);
    Notification.success('Catatan berhasil dihapus!');
    await this.loadNotes();
  } catch (error) {
    Notification.error(error.message);
  } finally {
    this.loadingIndicator.hide();
  }
}


  async archiveNote(id) {
  // === FALLBACK ===
  const index = fallbackNotes.findIndex(note => note.id === id);

  if (index !== -1) {
    const note = fallbackNotes.splice(index, 1)[0];
    note.archived = true;
    fallbackArchivedNotes.push(note);

    Notification.success('Catatan fallback berhasil diarsipkan!');
    await this.loadNotes();
    return;
  }

  // === API ===
  try {
    this.loadingIndicator.show();
    await NotesAPI.archiveNote(id);
    Notification.success('Catatan berhasil diarsipkan!');
    await this.loadNotes();
  } catch (error) {
    Notification.error(error.message);
  } finally {
    this.loadingIndicator.hide();
  }
}


 async unarchiveNote(id) {
  // === FALLBACK ===
  const index = fallbackArchivedNotes.findIndex(note => note.id === id);

  if (index !== -1) {
    const note = fallbackArchivedNotes.splice(index, 1)[0];
    note.archived = false;
    fallbackNotes.push(note);

    Notification.success('Catatan fallback berhasil dibatalkan dari arsip!');
    await this.loadNotes();
    return;
  }

  // === API ===
  try {
    this.loadingIndicator.show();
    await NotesAPI.unarchiveNote(id);
    Notification.success('Catatan berhasil dibatalkan dari arsip!');
    await this.loadNotes();
  } catch (error) {
    Notification.error(error.message);
  } finally {
    this.loadingIndicator.hide();
  }
}
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  new NotesApp();
});
