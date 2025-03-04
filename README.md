# Mercado Libre Search App (Buscador en Paginas para APX.school)

Esta aplicación permite a los usuarios buscar productos en Mercado Libre y visualizar los resultados de la búsqueda. Además, ofrece la posibilidad de ver más detalles sobre cada producto. Es un desafio de la carrera de FullStack en APX.school del nivel 3 donde esta aprendiendo React, React Router, etc.

## Características

- **Búsqueda de Productos**: La aplicación utiliza la API de Mercado Libre para buscar productos según el término ingresado por el usuario.
- **Visualización de Resultados**: Los resultados de la búsqueda se muestran en forma de tarjetas, mostrando la imagen del producto, su título y un enlace para ver más detalles.
- **Detalle del Producto**: Al hacer clic en "Ver más", se muestra una página con más detalles del producto seleccionado, incluyendo su precio.

## Tecnologías Utilizadas

- **React**: Se utiliza para crear los componentes de la interfaz de usuario.
- **React Router**: Para manejar las rutas de la aplicación.
- **API de Mercado Libre**: Se utiliza para obtener los datos de los productos.

## Estructura del Proyecto

El proyecto está organizado en componentes y rutas principales:

- **Componentes**:
  - `Card`: Muestra una tarjeta con información básica de un producto.
  - `Home`: Página principal que muestra un mensaje de bienvenida.
  - `SearchForm`: Formulario para ingresar el término de búsqueda.
  - `SearchResult`: Muestra los resultados de la búsqueda.
  - `Resume`: Muestra detalles de un producto específico.
- **Rutas**:
  - `/`: Página principal.
  - `/search/:query`: Muestra los resultados de la búsqueda.
  - `/item/:id`: Muestra detalles de un producto.

## Instrucciones para Ejecutar el Proyecto

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el proyecto con `npm start`.
4. Abre el navegador en `http://localhost:3000`.

## Contribuciones

Si deseas contribuir al proyecto, puedes hacerlo mediante pull requests. Asegúrate de seguir las mejores prácticas de desarrollo y documentación.
