const carrito = [
    { nombre: 'Monitor de 20 Pulgdas', precio: 500 },
    { nombre: 'TV de 50 Pulgadas', precio: 1000 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 500 },
    { nombre: 'Teclado', precio: 700 },
    { nombre: 'Celular', precio: 1500 },
    { nombre: 'Bocinas', precio: 200 },
    { nombre: 'Laptop', precio: 7000 },
    { nombre: 'Luces LED', precio: 100 },
    { nombre: 'Mouse', precio: 150 },
];

// Se puede acortar el código por medio de las leyes de los array functions
const obtenerNombres = producto => producto.nombre;
const resultado = carrito.map( obtenerNombres );
console.log( resultado );

const mayor400 = producto => producto.precio > 400;
const resultado2 = carrito.filter( mayor400 );
console.log( resultado2 );
