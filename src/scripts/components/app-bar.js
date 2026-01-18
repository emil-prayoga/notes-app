class AppBar extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'My App';

    this.innerHTML = `
             <link rel="stylesheet" href="../style.css">
            <header class="app-bar">
                <h1> <i class="fas fa-sticky-note"></i> ${title}</h1>
            </header>
        `;
  }
}

customElements.define('app-bar', AppBar);
