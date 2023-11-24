// FILTER: Crea un nuevo arreglo basado en el parámetro que se le ha dado

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audifonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 800 },
]

// Crear un arreglo nuevo con los productos cuyo precio sea mayor a 400
let resultado;
resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado); // Devuelve un arreglo con la condición que se le asignó

// Crear un arreglo nuevo con los producto scuyo precio sea menor a 600
let resultado2;
resultado2 = carrito.filter(producto => producto.precio < 600);
console.log(resultado2);

// Crear un arreglo nuevo que excluya un producto en específico
let resultado3;
resultado3 = carrito.filter(producto => producto.nombre != 'Audifonos');
console.log(resultado3);
