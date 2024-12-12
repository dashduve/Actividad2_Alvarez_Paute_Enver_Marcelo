# Aplicación Web de Componentes Personalizados

## Descripción del Proyecto
Esta aplicación web utiliza Web Components para crear una interfaz modular e interactiva con diferentes páginas y funcionalidades.

## Estructura de Componentes

### 1. App Header
- Componente de encabezado personalizado
- Muestra el título de la aplicación
- Estilizado con fondo azul y texto blanco

### 2. App Menu
- Menú de navegación con enlaces a diferentes páginas
- Implementa lógica de navegación usando atributos
- Cambia el contenido principal según la página seleccionada

### 3. App Main
- Contenedor principal que gestiona la visualización de diferentes páginas
- Utiliza slots y atributos para mostrar contenido dinámico
- Páginas: Inicio, Perfil, Tabla de Usuarios, Galería

### 4. Social Profile
- Componente de perfil de usuario reutilizable
- Muestra información personal
- Permite seguir/dejar de seguir al usuario

### 5. Custom Table
- Tabla que carga datos de usuarios desde la API JSONPlaceholder
- Muestra ID, nombre, email y ciudad
- Diseño responsivo

### 6. Gallery Component
- Galería de imágenes de Pokémon
- Carga datos desde la PokeAPI
- Muestra 12 Pokémon con imagen y nombre

### 7. App Footer
- Pie de página con información de copyright
- Muestra el año actual

## Tecnologías Utilizadas
- HTML5
- JavaScript (Web Components)
- Shadow DOM
- Fetch API

## Instrucciones de Uso
1. Clonar el repositorio
2. Abrir `index.html` en un navegador
3. Navegar entre las diferentes secciones utilizando el menú

## Requisitos
- Navegador moderno que soporte Web Components
