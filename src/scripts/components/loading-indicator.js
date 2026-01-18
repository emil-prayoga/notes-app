class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.render();
    this.hide();
  }

  render() {
    this.innerHTML = `
      <link rel="stylesheet" href="../styles/style.css">
      <div class="loading-overlay hidden" id="loadingOverlay">
        <div style="text-align: center;">
          <div class="spinner"></div>
          <p class="loading-text">Memuat</p>
        </div>
      </div>
    `;
  }

  show() {
    const overlay = this.querySelector('#loadingOverlay');
    overlay.classList.remove('hidden');
  }

  hide() {
    const overlay = this.querySelector('#loadingOverlay');
    overlay.classList.add('hidden');
  }
}

customElements.define('loading-indicator', LoadingIndicator);
