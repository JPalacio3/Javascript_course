// SETS
/*
: Permite crear una lista de valores sin dupicados, suele ser más rápido que un objeto o un arreglo al usar grandes volúmenes de datos.
** Los conjuntos son estructuras de datos que permiten almacenar valores únicos.
** Los valores duplicados no son agregados al SET
** Es sensible a mayúsculas y minúsculas
** Son iterables
*/

const carrito = new Set();

// Agregar elementos al conjunto
carrito.add( 'Camisa' );
carrito.add( 'Disco' );
carrito.add( 'Disco2' );

// Conocer la extensión del conjunto
console.log( carrito.size ); // 3

// Comprobar si un valor existe en el conjunto
console.log( carrito.has( 'Camisa' ) ); // true

// Eliminar un elemento del conjunto
console.log( carrito.delete( 'Disco3' ) ); // false

// Iterar sobre todos los elementos del carrito
carrito.forEach( ( producto, index ) => {
    console.log( index ); // llave y valor en los conjunto son lo mismo ya que solo almacena valores únicos
    console.log( producto );
} )

// Eliminar todos los elementos del set
carrito.clear(); // true

console.log( carrito );

// Ejemplo de uso: ELIMNAR LOS DUPLICADOS DEL SIGUIENTE ARREGLO
const numeros = [ 10, 20, 30, 10, 20, 40, 50, 40 ];

const noDuplicados = new Set( numeros );
console.log( noDuplicados ); // Set(5) {10, 20, 30, 40, 50}
