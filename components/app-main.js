// components/app-main.js
class AppMain extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['active-page'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'active-page') {
            this.render();
        }
    }

    render() {
        const activePage = this.getAttribute('active-page') || 'home';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 20px;
                }
                .page {
                    display: none;
                }
                .page.active {
                    display: block;
                }
                .text-center {
                    text-align: center;
            </style>

            <div class="page ${activePage === 'home' ? 'active' : ''}">
                <div class="text-center">
                    <h2>Bienvenido a la Aplicación Social</h2>
                    <p>Selecciona una opción del menú para navegar.</p>
                </div>    
            </div>

            <div class="page ${activePage === 'profile' ? 'active' : ''}">
                <social-profile 
                    nombre="Enver Álvarez" 
                    avatar="https://reqres.in/img/faces/1-image.jpg" 
                    bio="Desarrollador de Software" 
                    seguidores="256">
                </social-profile>
            </div>

            <div class="page ${activePage === 'table' ? 'active' : ''}">
                <custom-table></custom-table>
            </div>

            <div class="page ${activePage === 'gallery' ? 'active' : ''}">
                <gallery-component></gallery-component>
            </div>
        `;
    }
}

// Registrar el componente
window.customElements.define('app-main', AppMain);