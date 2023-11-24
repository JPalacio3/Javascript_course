// Modificar textos e imágenes

const encabezado = document.querySelector('.contenido-hero h1').textContent; // Selecciona directamente el contenido
console.log(encabezado);

// Hay tres maneras de traer el HTML  de un documento
console.log(encabezado.innerText); // Si en CSS está definida la propiedad visibility:hidden, NO LO VA A ENCONTRAR
console.log(encabezado.textContent); // Si en CSS está definida la propiedad visibility:hidden, SI LO VA A ENCONTRAR
console.log(encabezado.innerHTML); // Se trae el HTML completo de esa sección

document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading'; // Modifica el valor del texto en pantalla

// Modificar imagen
const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg'; // Esto modifica la imagen que está en esa posición
