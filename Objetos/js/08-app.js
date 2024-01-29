// OBJECTS METHODS

"use strict" //  es una directiva que activa el modo estricto en JavaScript, aplicando reglas más estrictas y ayudando a evitar errores y comportamientos inseguros.

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

// Congelar un objeto para que no pueda ser modificado (Comportamiento de constante)
producto.disponible = false;
producto.imagen = 'imagen.jpg';

// Congelar un objeto para que no se pueda modificar
Object.freeze(producto);

// Al trata de modificar de alguna manera el objeto, se arroja un error
// producto.precio = 400;
// delete producto.precio;//

console.log(Object.isFrozen(producto)); // Nos indica si un objeto está congelado

console.log(producto);

// x = 20;
// console.log(x); // En el modo estricto se arroja un error porque no se definió el tipo de variable que es x
