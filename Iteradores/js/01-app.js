// ITERADORES :
/*
Los iteradores son estructuras en programación que permiten recorrer y acceder a elementos de una colección de datos, como un arreglo o un objeto, de manera secuencial. Los iteradores son ampliamente utilizados en programación para procesar datos en bucles y realizar operaciones en cada elemento de una colección.
*/

/*FOR LOOP : El bucle for es una estructura de control de flujo en programación que se utiliza para repetir un bloque de código un número específico de veces o para iterar a través de elementos en una colección de datos, como un arreglo.
Sintaxis:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
*/

// Imprimir por consola los pumeros del 1 al 10
for (let i = 1;i <= 10;i++) {
    console.log(`Número: ${i}`);
}

// imprimir por consola los números pares
for (let i = 0;i <= 10;i += 2) {
    console.log(`Número Par: ${i}`);
}

// imprimir por consola los números impares
for (let i = 1;i <= 10;i += 2) {
    console.log(`Número Impar: ${i}`);
}

// Calcular números pares e impares
for (let i = 1;i < 20;i++) {
    if (i % 2 === 0) {
        console.log(`el número ${i} es PAR`);
    } else {
        console.log(`El número ${i} es IMPAR`);
    }
}

// Ejemplo con el carrito de compras
const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// Itera en todo el arreglo e imprime por consola cada uno de los elementos dentro de este
for (let i = 0;i <= carrito.length;i++) {
    // Imprimir por consola todos los objetos completos
    console.log(carrito[ i ]);

    // Imprimir solamente el nombre de los artículos
    console.log(carrito[ i ].nombre);
}
