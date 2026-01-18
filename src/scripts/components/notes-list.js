class NotesList extends HTMLElement {
  constructor() {
    super();
    this.notes = [];
  }

  static get observedAttributes() {
    return ['type'];
  }

  connectedCallback() {
    this.render();
  }

  setNotes(notes) {
    try {
      console.log('setNotes called:', {
        received: notes,
        length: notes?.length,
        type: this.getAttribute('type'),
      });
      this.notes = notes || [];
      this.render();
    } catch (e) {
      console.error('Error in setNotes:', e);
    }
  }

  render() {
    const type = this.getAttribute('type') || 'active';

    console.log('render called:', { type, notesCount: this.notes.length });

    this.innerHTML = `
      <link rel="stylesheet" href="../styles/style.css">
      ${this.notes.length === 0 ? this.renderEmptyState(type) : this.renderNotes()}
    `;
  }

  renderEmptyState(type) {
    const message =
      type === 'archived'
        ? 'Belum ada catatan yang diarsipkan.'
        : 'Belum ada catatan aktif. Mulai tambahkan catatan pertama Anda!';

    return `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="fas fa-file-alt"></i></div>
        <p class="empty-state-text">${message}</p>
      </div>
    `;
  }

  renderNotes() {
    console.log('renderNotes called with:', this.notes);
    const notesHTML = this.notes
      .map(
        (note) => `
      <note-item 
        note-id="${note.id}"
        note-title="${this.escapeAttribute(note.title)}"
        note-body="${this.escapeAttribute(note.body)}"
        note-date="${note.createdAt}"
        is-archived="${note.archived}"
      ></note-item>
    `
      )
      .join('');

    console.log('notesHTML generated:', {
      count: this.notes.length,
      htmlLength: notesHTML.length,
    });

    return `<div class="notes-grid">${notesHTML}</div>`;
  }

  escapeAttribute(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
}

customElements.define('notes-list', NotesList);
