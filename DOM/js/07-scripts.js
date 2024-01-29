// Modificar el CSS con JS
const encabezado = document.querySelector('h1');
console.log(encabezado.style);

// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase'

// Agregar clases con Js
const card = document.querySelector('.card');
card.classList.add('nueva-clase','segunda-clase');

// Eliminar una clase
card.classList.remove('card');
