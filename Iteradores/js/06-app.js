// FOR EACH Y .MAP
/*
-> FOR EACH :
- Propósito: `forEach` se utiliza para iterar sobre cada elemento de un arreglo y realizar una acción o ejecutar una función para cada elemento.
- No modifica el arreglo original. No devuelve un nuevo arreglo.
- Uso común: Útil cuando deseas realizar una acción para cada elemento del arreglo sin preocuparte por crear un nuevo arreglo.

-> .MAP :
- Propósito: `map` se utiliza para iterar sobre cada elemento de un arreglo y crear un nuevo arreglo que contiene los resultados de aplicar una función a cada elemento.
- No modifica el arreglo original. Devuelve un nuevo arreglo con los resultados.
- Uso común: Útil cuando deseas transformar los elementos de un arreglo y crear un nuevo arreglo basado en esos resultados.
*/

const pendientes = [ 'Trabajar','comer','dormir','estudiar','crear proyecto' ];

// .FOREACH : No crea un arreglo nuevo
pendientes.forEach((pendiente,index) => {
    console.log(`${index} : ${pendiente}`);
});

// .MAP : Crea un arreglo nuevo
pendientes.map((pendiente,index) => {
    console.log(`${index} : ${pendiente}`);
});

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// .FOREACH
const arregloCarrito = carrito.forEach(articulo => articulo);
console.log(arregloCarrito); // Undefined, porque no se creó un nuevo arreglo

// .MAP
const arregloCarrito2 = carrito.map(articulo => articulo);
console.log(arregloCarrito2); // Devuelve el nuevo arreglo como copia del original
