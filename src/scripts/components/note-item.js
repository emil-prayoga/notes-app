import anime from 'animejs';

class NoteItem extends HTMLElement {
  static get observedAttributes() {
    return ['note-id', 'note-title', 'note-body', 'note-date', 'is-archived'];
  }

  connectedCallback() {
    this.render();
    this.animateIn();
  }

  attributeChangedCallback() {
    this.render();
  }

  animateIn() {
    anime({
      targets: this.querySelector('.note-item'),
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: 'easeOutQuad',
    });
  }

  render() {
    const id = this.getAttribute('note-id') || '';
    const title = this.getAttribute('note-title') || 'Untitled';
    const body = this.getAttribute('note-body') || '';
    const date = this.getAttribute('note-date') || '';
    const isArchived = this.getAttribute('is-archived') === 'true';

    const formattedDate = date ? this.formatDate(date) : '';

    this.innerHTML = `
      <link rel="stylesheet" href="./styles/style.css">
      <article class="note-item" data-note-id="${id}">
        <div class="note-header">
          <h3 class="note-title">${this.escapeHtml(title)}</h3>
          <p class="note-date">${formattedDate}</p>
        </div>
        <p class="note-body">${this.escapeHtml(body)}</p>
        <div class="note-actions">
          ${
            isArchived
              ? `<button class="btn btn-unarchive" data-action="unarchive">Batalkan Arsip</button>`
              : `<button class="btn btn-archive" data-action="archive">Arsipkan</button>`
          }
          <button class="btn btn-delete" data-action="delete">Hapus</button>
        </div>
      </article>
    `;

    this.attachActionListeners();
  }

  attachActionListeners() {
    const noteItem = this.querySelector('.note-item');
    const id = noteItem.dataset.noteId;

    noteItem.addEventListener('click', (e) => {
      const action = e.target.dataset.action;
      if (action) {
        this.dispatchEvent(
          new CustomEvent('note-action', {
            detail: { id, action },
            bubbles: true,
            composed: true,
          })
        );
      }
    });
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString('id-ID', options);
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

customElements.define('note-item', NoteItem);
