// components/social-profile.js
class SocialProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['nombre', 'avatar', 'bio', 'seguidores'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Datos por defecto
        const nombre = this.getAttribute('nombre') || 'Usuario';
        const avatar = this.getAttribute('avatar') || 'https://via.placeholder.com/150';
        const bio = this.getAttribute('bio') || 'Descripción del perfil';
        const seguidores = this.getAttribute('seguidores') || '0';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    max-width: 400px;
                    margin: 0 auto;
                    background-color: #f9f9f9;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    text-align: center;
                }
                .avatar {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 4px solid #007bff;
                    margin-bottom: 15px;
                }
                .nombre {
                    font-size: 1.8em;
                    color: #333;
                    margin-bottom: 10px;
                }
                .bio {
                    color: #666;
                    margin-bottom: 15px;
                    font-style: italic;
                }
                .btn-seguir {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .btn-seguir:hover {
                    background-color: #0056b3;
                }
                .seguidores {
                    margin-top: 15px;
                    font-size: 1em;
                    color: #888;
                }
                .redes-sociales {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-top: 15px;
                }
                .red-social {
                    color: #007bff;
                    text-decoration: none;
                    font-weight: bold;
                }
            </style>
            
            <img class="avatar" src="${avatar}" alt="Avatar de ${nombre}">
            <div class="nombre">${nombre}</div>
            <div class="bio">${bio}</div>
            <button class="btn-seguir" id="btnSeguir">Seguir</button>
            <div class="seguidores">Seguidores: ${seguidores}</div>
            
            <div class="redes-sociales">
                <a href="#" class="red-social">Twitter</a>
                <a href="#" class="red-social">LinkedIn</a>
                <a href="#" class="red-social">GitHub</a>
            </div>
        `;

        // Añadir evento al botón de seguir
        this.shadowRoot.getElementById('btnSeguir').addEventListener('click', this.seguirPerfil);
    }

    seguirPerfil = () => {
        const btnSeguir = this.shadowRoot.getElementById('btnSeguir');
        const seguidoresSpan = this.shadowRoot.querySelector('.seguidores');
        let seguidores = parseInt(seguidoresSpan.textContent.split(': ')[1]);

        if (btnSeguir.textContent === 'Seguir') {
            btnSeguir.textContent = 'Siguiendo';
            btnSeguir.style.backgroundColor = '#28a745';
            seguidores++;
            seguidoresSpan.textContent = `Seguidores: ${seguidores}`;
        } else {
            btnSeguir.textContent = 'Seguir';
            btnSeguir.style.backgroundColor = '#007bff';
            seguidores--;
            seguidoresSpan.textContent = `Seguidores: ${seguidores}`;
        }
    }

    // Método para manejar cambios en atributos
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

// Registrar el componente personalizado
window.customElements.define('social-profile', SocialProfile);