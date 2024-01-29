// OBJECTS METHODS

"use strict" //  es una directiva que activa el modo estricto en JavaScript, aplicando reglas más estrictas y ayudando a evitar errores y comportamientos inseguros.

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}

console.log(producto);
console.log(medidas);

// assign permite copiar las propiedades de uno o más objetos en un objeto de destino diferente.
const resultado = Object.assign(producto,medidas);
console.log(resultado);

// Spread Operator o Rest Operator permite crear un nuevo objeto combinando las propiedades de otros objetos
const resultado2 = { ...producto,...medidas };
console.log(resultado2);
