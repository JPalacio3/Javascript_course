// Arrow Functions en un forEach y un map

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// Iterar mediante el ciclo for each : No crea un nuevo arreglo con el resultado de la iteración
carrito.forEach(producto => console.log(`nombre: ${producto.nombre} - Precio: ${producto.precio} `)
);

// Iterar mediante el ciclo .map : Crea un nuevo arreglo con el resultado de la iteración
carrito.map(producto => console.log(`nombre: ${producto.nombre} - Precio: ${producto.precio} `)
);
