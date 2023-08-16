# React Netflix Clone

Este es un sitio experimental que fué creado con la intención de poner en práctica React.js en un proyecto sencillo.

La idea de clonar parcialmente el sitio web de Netflix me dió la posibilidad de replicar los comportamientos de diferentes componentes como menúes, sliders, buscador, video, etc. Además me permitió hacer consumo de una api que fué generada con Firebase.

Creo que uno aprende "haciendo" y es por eso que decidí crear este mini proyecto, el cual me llevó una semana, trabajando aprox 3 hrs. por día.

### Características principales:

- Reproducción automática de video: Tal como sucede en Netflix, el video principal se reproduce automáticamente y al hacer scroll se detiene. Los controles de la derecha permiten activar o desactivar el sonido cuando el video se está reproduciendo y cuando finaliza se puede repetir la reproducción del mismo.
- Carusel de series y películas: Se puede explorar el catálogo utilizando el carousel de cada categoría, usando las flechitas o bien haciendo "slide" con el mouse.
- Diferentes categorías: El catálogo está separado en diferentes categorías ("Tendencias", "Películas dramáticas", etc)
- Modal de previsualización: Al hacer click en un item se abrirá el modal de previsualización donde se muestra la información básica y otros títulos sugeridos.
- Sitio responsivo: El sitio es completamente responsivo, y se adapta a cualquier dispositivo móvil.
- Consumo de base de datos: El sitio consume datos de una api creada con Firebase. Además se hizo un trabajo de edición de logos, miniaturas y covers para los títulos.
- Campo de búsqueda: Más que un búsqueda lo que hace el buscador es filtrar por coincidencia en el nombre de la serie o película y muestra los resultados obtenidos en primer orden.

## Instalación

1. Clonar el repositorio

2. En la raíz del proyecto ejecutar el comando 

   ```
   npm install
   ```

   Esto instala todas las dependencias del proyecto.

3. Ejecutar  

   ```
   npm start
   ```

    para correr el proyecto, que estará disponible en http://localhost:3000



## Dependencias

Uso de React Bootstrap para dar estilos básicos a la app.

Uso de React Router Dom para la navegación.

Uso de React Icons para utilización de los íconos de la app.

Uso de React Slick para sliders y carousels

Uso de Firebase para la api



## Aplicación en funcionamiento

La app se encuentra alojada en el siguiente dominio: [https://rnc-by-enocera.netlify.app/](https://rnc-by-enocera.netlify.app/)

### Autor

Emmanuel Nocera - Desarrollador Front-End

Noviembre 2022
