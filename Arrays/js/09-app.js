
// ITERADOR FOR EACH:  Permite ejecutar una función para cada elemento de un arreglo sin necesidad de utilizar bucles for, lo que hace que el código sea más legible y expresivo.

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// Iterar mediante el ciclo for
for (let i = 0;i < carrito.length;i++) {
    console.log(`${carrito[ i ].nombre} - ${carrito[ i ].precio}`);
}

// Iterar mediante el ciclo for each
carrito.forEach(function (producto)
{
    console.log(`nombre: ${producto.nombre} - Precio: ${producto.precio} `);
});


