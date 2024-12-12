// components/app-footer.js
class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const currentYear = new Date().getFullYear();
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #007bff;
                    color: white;
                    text-align: center;
                    padding: 15px;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
                }
            </style>
            <p>&copy; ${currentYear} Social Web App. Todos los derechos reservados.</p>
        `;
    }
}

// Registrar el componente
window.customElements.define('app-footer', AppFooter);