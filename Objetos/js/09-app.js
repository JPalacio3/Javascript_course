// OBJECTS METHODS

"use strict" //  es una directiva que activa el modo estricto en JavaScript, aplicando reglas más estrictas y ayudando a evitar errores y comportamientos inseguros.

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

producto.disponible = false;
producto.imagen = 'imagen.jpg';

// seal Se utiliza para sellar un objeto en javascript, lo que permite modificar propiedades existentes pero no agregar ni eliminar propiedades.
Object.seal(producto);

// Permite modificar los valores de las propiedades
producto.precio = 400;
producto.disponible = true;

// Al trata de eliminar de alguna manera el objeto, se arroja un error
// delete producto.precio;
//producto.color = 'rojo';

console.log(Object.isSealed(producto)); // Nos indica si un objeto está congelado
console.log(producto);
