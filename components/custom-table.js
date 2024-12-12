// components/custom-table.js
class CustomTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.fetchUsers();
    }

    async fetchUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            this.renderTable(users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    renderTable(users) {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #f2f2f2;
                }
            </style>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    ${users.map(user => `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.email}</td>
                            <td>${user.address.city}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
}

// Registrar el componente
window.customElements.define('custom-table', CustomTable);