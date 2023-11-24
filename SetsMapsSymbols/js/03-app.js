// Map
/*
`Map` en JavaScript es una estructura de datos que permite almacenar pares clave-valor, donde las claves pueden ser de cualquier tipo, incluyendo objetos y funciones. A diferencia de los objetos, los `Map` preservan el orden de inserción de los elementos y proporcionan métodos para acceder y manipular los datos de manera más eficiente. Son ampliamente utilizados para asociar datos de manera flexible y eficiente.
** Son iterables
** Se puede conocer su extensión
*/

const cliente = new Map();

// Agregar elementos al map
cliente.set( 'nombre', ' Joel' );
cliente.set( 'tipo', ' premium' );
cliente.set( 'saldo', 6000 );

console.log( cliente );

// Conocer la extensión
console.log( cliente.size ); // 3

// Saber si un valor existe (llave)
console.log( cliente.has( 'saldo' ) ); // true
console.log( cliente.has( 'Joel' ) ); // false

// Obtener el valor de una llave
console.log( cliente.get( 'nombre' ) ); //  Joel

// Eliminar un valor
console.log( cliente.delete( 'saldo' ) ); // true
console.log( cliente.delete( 'tipo' ) ); // true

// Limpiar todo el map
cliente.clear()

// Agregar arreglos
const paciente = new Map( [ [ 'nombre', 'paciente' ], [ 'cuarto', 'No Definido' ] ] );

// Agregar objetos
paciente.set( 'dr.', 'Dr. asignado' );
// Si agregas una llave con el mismo valor, se reescribe la que está dentro del Map
paciente.set( 'nombre', 'Joel' );

console.log( paciente );

// Iteración
paciente.forEach( ( datos, index ) => {
    console.log( index ); // Imprime las llaves
    console.log( datos ); // Imprime el valor de esas llaves
} )

