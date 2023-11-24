// EVERY : Todos los elementos de un arreglo deben de cumplir esa condición para que se retorne un true


const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audifonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 800 },
]

const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado); // false, porque hay un elemento de la lista que no cumple esa condición

const resultado2 = carrito.every(producto => producto.precio > 100);
console.log(resultado2); // true, porque todos los elementos tiene un precio mayor a 100
