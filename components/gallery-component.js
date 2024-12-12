// components/gallery-component.js
class GalleryComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.fetchPokemonData();
    }

    async fetchPokemonData() {
        try {
            const pokemonPromises = [];
            for (let i = 1; i <= 12; i++) {
                pokemonPromises.push(
                    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
                );
            }
            const pokemonData = await Promise.all(pokemonPromises);
            this.renderGallery(pokemonData);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        }
    }

    renderGallery(pokemonData) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .gallery {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 15px;
                }
                .pokemon-card {
                    border: 1px solid #ddd;
                    padding: 10px;
                    text-align: center;
                }
                .pokemon-image {
                    max-width: 150px;
                    height: auto;
                }
            </style>
            <div class="gallery">
                ${pokemonData.map(pokemon => `
                    <div class="pokemon-card">
                        <img 
                            class="pokemon-image" 
                            src="${pokemon.sprites.front_default}" 
                            alt="${pokemon.name}"
                        >
                        <p>${pokemon.name.toUpperCase()}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Registrar el componente
window.customElements.define('gallery-component', GalleryComponent);