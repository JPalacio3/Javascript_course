// BREAK Y CONTINUE :
/*
-> La instrucción break se utiliza para salir inmediatamente de un bucle cuando se cumple una cierta condición.
=> La instrucción continue se utiliza para saltar la iteración actual de un bucle y continuar con la siguiente iteración.
*/

// Terminar la ejecución del código una vez que llegue a 5
for (let i = 0;i <= 10;i++) {
    if (i === 5) {
        console.log('Esta es la quinta ejecución');
        break;
    }
    console.log(`Número: ${i}`);
}

// Que esa quinta ejecución aparezca como CINCO y que el ciclo continúe hasta 10
for (let i = 1;i <= 10;i++) {
    if (i === 5) {
        console.log('CINCO');
        continue;
    }
    console.log(`Número: ${i}`);
}

// En el siguiente carrito, queremos decirle que uno de los elementos tiene descuento:
const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800,descuento: true },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

for (i = 0;i < carrito.length;i++) {
    if (carrito[ i ].descuento) {
        console.log(`${carrito[ i ].nombre} ESTÁ EN DESCUENTO !!! `)
        continue;
    }
    console.log(carrito[ i ].nombre);
}
