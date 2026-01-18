class NoteForm extends HTMLElement {
  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="../styles/style.css">
      <form class="note-form" id="noteForm">
        <div class="form-group">
          <label for="note-title">Judul Catatan <span>*</span></label>
          <input 
            type="text" 
            id="note-title" 
            name="title" 
            placeholder="Masukkan judul catatan"
            required
          >
          <span class="error-message" id="title-error">Judul harus diisi (minimal 3 karakter)</span>
          <span class="char-count" id="title-count">0</span>
        </div>

        <div class="form-group">
          <label for="note-body">Isi Catatan <span>*</span></label>
          <textarea 
            id="note-body" 
            name="body" 
            placeholder="Tulis catatan Anda di sini"
            required
          ></textarea>
          <span class="error-message" id="body-error">Isi catatan harus diisi (minimal 10 karakter)</span>
          <span class="char-count" id="body-count">0</span>
        </div>

        <button type="submit" class="submit-btn" id="submitBtn" disabled>
          <i class="fas fa-plus"></i> Tambah Catatan
        </button>
      </form>
    `;
  }

  attachEventListeners() {
    const form = this.querySelector('#noteForm');
    const titleInput = this.querySelector('#note-title');
    const bodyInput = this.querySelector('#note-body');
    const titleError = this.querySelector('#title-error');
    const bodyError = this.querySelector('#body-error');
    const titleCount = this.querySelector('#title-count');
    const bodyCount = this.querySelector('#body-count');
    const submitBtn = this.querySelector('#submitBtn');

    const updateSubmitButton = () => {
      const isTitleValid = titleInput.value.trim().length >= 3;
      const isBodyValid = bodyInput.value.trim().length >= 10;
      submitBtn.disabled = !(isTitleValid && isBodyValid);
    };

    titleInput.addEventListener('input', (e) => {
      const value = e.target.value;
      const length = value.length;

      titleCount.textContent = length;

      if (length === 0) {
        titleInput.classList.add('invalid');
        titleError.textContent = 'Judul harus diisi';
        titleError.classList.add('show');
      } else if (length < 3) {
        titleInput.classList.add('invalid');
        titleError.textContent = 'Judul minimal 3 karakter';
        titleError.classList.add('show');
      } else {
        titleInput.classList.remove('invalid');
        titleError.classList.remove('show');
      }

      updateSubmitButton();
    });

    bodyInput.addEventListener('input', (e) => {
      const value = e.target.value;
      const length = value.length;

      bodyCount.textContent = length;

      if (length === 0) {
        bodyInput.classList.add('invalid');
        bodyError.textContent = 'Isi catatan harus diisi';
        bodyError.classList.add('show');
      } else if (length < 10) {
        bodyInput.classList.add('invalid');
        bodyError.textContent = 'Isi catatan minimal 10 karakter';
        bodyError.classList.add('show');
      } else {
        bodyInput.classList.remove('invalid');
        bodyError.classList.remove('show');
      }

      updateSubmitButton();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = titleInput.value.trim();
      const body = bodyInput.value.trim();

      if (title.length >= 3 && body.length >= 10) {
        this.dispatchEvent(
          new CustomEvent('note-submit', {
            detail: { title, body },
            bubbles: true,
            composed: true,
          })
        );

        form.reset();
        titleCount.textContent = '0';
        bodyCount.textContent = '0';
        titleInput.classList.remove('invalid');
        bodyInput.classList.remove('invalid');
        updateSubmitButton();
      }
    });
  }
}

customElements.define('note-form', NoteForm);
