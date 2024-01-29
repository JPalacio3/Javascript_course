//  ITERADOR .MAP() : Hace la iteración y crea una copia después de esa iteración

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// Iterar mediante el ciclo for each : No crea un nuevo arreglo con el resultado de la iteración
const nuevoArreglo = carrito.forEach(function (producto)
{
    return `nombre: ${producto.nombre} - Precio: ${producto.precio} `;
});

// Iterar mediante el ciclo .map : Crea un nuevo arreglo con el resultado de la iteración
const nuevoArreglo2 = carrito.map(function (producto)
{
    return `nombre: ${producto.nombre} - Precio: ${producto.precio} `;
});


console.log(nuevoArreglo); // undefined
console.log(nuevoArreglo2); // Devuelve la copia del arreglo
