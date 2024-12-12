// components/app-menu.js
class AppMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #f4f4f4;
                    padding: 10px;
                }
                nav {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                }
                .menu-item {
                    cursor: pointer;
                    padding: 10px;
                    text-decoration: none;
                    color: #333;
                    transition: background-color 0.3s;
                }
                .menu-item:hover {
                    background-color: #e0e0e0;
                }
            </style>
            <nav>
                <a href="#" class="menu-item" data-page="home">Inicio</a>
                <a href="#" class="menu-item" data-page="profile">Perfil</a>
                <a href="#" class="menu-item" data-page="table">Usuarios</a>
                <a href="#" class="menu-item" data-page="gallery">Galería</a>
            </nav>
        `;
    }

    addEventListeners() {
        const menuItems = this.shadowRoot.querySelectorAll('.menu-item');
        const mainContent = document.querySelector('app-main');

        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.getAttribute('data-page');
                mainContent.setAttribute('active-page', page);
            });
        });
    }
}

// Registrar el componente
window.customElements.define('app-menu', AppMenu);