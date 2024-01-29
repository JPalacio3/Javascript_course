// ITERADORES
/*
Los iteradores en JavaScript son objetos que permiten recorrer y acceder secuencialmente a elementos en estructuras de datos, como arrays, conjuntos y más. Implementan un método `next()` que devuelve un objeto con propiedades `value` (el siguiente valor) y `done` (un booleano que indica si se ha llegado al final). Los iteradores se utilizan con bucles `for...of` para recorrer elementos de manera sencilla. Los objetos que son iterables tienen un método `Symbol.iterator` que devuelve un iterador. Los iteradores personalizados se pueden crear para definir comportamientos de recorrido personalizados en objetos específicos.
*/

function crearIterador( carrito ) {
    // Creamos un indice de inicio
    let i = 0;

    // Esta función de crearIterador retorna una función
    return {
        siguiente: () => {
            // 1. Se debe saber cuántos elementos se van a iterar
            const fin = ( i >= carrito.length );
            // 2. Se debe concocer el valor de inicio del arreglo a iterar
            const valor = !fin ? carrito[ i++ ] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

// Arreglo en el que se pretende iterar
const carrito = [ 'Producto1', 'Producto2', 'Producto3', 'Producto4' ];

// Utilizar el iterador
const recorrerCarrito = crearIterador( carrito );

console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );
console.log( recorrerCarrito.siguiente() );

