// components/app-header.js
class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Social Web App';
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #007bff;
                    color: white;
                    padding: 15px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                h1 {
                    margin: 0;
                    font-size: 1.5em;
                }
            </style>
            <h1>${title}</h1>
        `;
    }
}

// Registrar el componente
window.customElements.define('app-header', AppHeader);