<p align='left'>
   <img src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"  </img>
</p>

# Individual Project - Henry Food

<p align="right">
  <img height="200" src="./cooking.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver distintas recetas de comida junto con información relevante de las mismas utilizando la api externa [spoonacular](https://spoonacular.com/food-api) y a partir de ella poder, entre otras cosas:

  - Buscar recetas
  - Filtrarlos / Ordenarlos
  - Crear nuevas recetas propias
  
### Únicos Endpoints/Flags utilizados:

  * GET https://api.spoonacular.com/recipes/complexSearch
  * GET https://api.spoonacular.com/recipes/{id}/information

#### Tecnologías:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend
-React/Redux: contiene las siguientes pantallas/rutas.

__Pagina inicial__: landing page con
- [ ] imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: 
- [ ] Input de búsqueda para encontrar recetas por nombre
- [ ] Área donde se ve el listado de recetas:
  - Imagen
  - Nombre
  - Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
- [ ] Botones/Opciones para filtrar por por tipo de dieta
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por puntuación
- [ ] Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.

__IMPORTANTE__: Dentro de la Ruta Principal se muestran tanto las recetas traidas desde la API como así también las de la base de datos. Debido a que en la API existen alrededor de 5 mil recetas, por cuestiones de performance se paginaron las primeras 100.

__Ruta de detalle de receta__: 
- [ ] Campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
- [ ] Resumen del plato
- [ ] Puntuación
- [ ] Nivel de "comida saludable"
- [ ] Paso a paso

__Ruta de creación de recetas__:
- [ ] Un formulario __controlado__ con los siguientes campos
  - Nombre
  - Resumen del plato
  - Puntuación
  - Nivel de "comida saludable"
  - Paso a paso
- [ ] Posibilidad de seleccionar/agregar uno o más tipos de dietas
- [ ] Botón/Opción para crear una nueva receta

#### Base de datos

El modelo de la base de datos contiene las siguientes entidades:

- [ ] Receta con las siguientes propiedades:
  - ID: 
  - Nombre 
  - Resumen del plato 
  - Puntuación
  - Nivel de "comida saludable"
  - Paso a paso
- [ ] Tipo de dieta con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos.


#### Backend

Servidor en Node/Express con las siguientes rutas:

No  se utilizaron los filtrados, ordenamientos y paginados brindados por la API externa.

- [ ] __GET /recipes?name="..."__:
  - Obtiene un listado de las recetas que contengan la palabra ingresada como query parameter
- [ ] __GET /recipes/{idReceta}__:
  - Obtiene el detalle de una receta en particular
- [ ] __GET /types__:
  - Obtiene todos los tipos de dieta posibles
- [ ] __POST /recipe__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
  - Crea una receta en la base de datos
