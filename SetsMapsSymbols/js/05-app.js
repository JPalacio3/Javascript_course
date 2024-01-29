// Symbols
/*
Los símbolos en JavaScript son valores únicos e inmutables utilizados como claves en objetos. Son ideales para propiedades privadas y evitan colisiones de nombres, ya que son inmutables y no enumerables. Se declaran con `Symbol()` y se acceden en objetos con notación de corchetes. Se usan para garantizar la unicidad de claves en objetos, como implementar propiedades privadas y API públicas, mejorando la seguridad y la organización del código.
** Tdos los symbols son diferentes siempre
** Las propiedades que utilizan Symbol NO son iteradores
** Se peuden definir descripciones de los Symbol
*/

const sym = Symbol();
const sym2 = Symbol();

if ( sym === sym2 ) {
    console.log( 'Son iguales' );
} else {
    console.log( 'son diferentes' );
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apeliido como llaves del objeto
persona[ nombre ] = 'Juel';
persona[ apellido ] = 'Palacio';
persona.cliente = 'Premium';
persona.saldo = 2000;

console.log( persona );
console.log( persona.nombre ); // Esto marcaría undefined
console.log( persona[ nombre ] ); // Joel

// Las propiedades de Symbol no son iterables
for ( let i in persona ) {
    console.log( i ); // Solamente itera en las propiedades que no están definifas como Symbol
}

// Definir una descripción de un Symbol
const nombreCliente = Symbol( 'Nombre del cliente' ); // Descripción de la variable con Symbol
const cliente = {};
cliente[ nombreCliente ] = 'Pedro';
console.log( cliente ); // Trae el objeto completo de cliente
console.log( cliente[ nombreCliente ] ); // Trae el valor de ese objeto
console.log( nombreCliente ); // Trae la llave del objeto
