// Parcialización (Partial Application) y Currificación (Currying)
/*
** Parcialización:
La parcialización es el proceso de fijar un número menor de argumentos en una función que toma varios argumentos, produciendo una nueva función con menos parámetros
** Currificación:
La currificación es un proceso en el que una función que toma múltiples argumentos se convierte en una secuencia de funciones que toman un solo argumento.
*/

// Currying : Dividir un función en dos partes
const suma = ( a, b, c ) => a + b + c;
const parcial = a => ( b, c ) => suma( a, b, c );
const primerNumero = parcial( 5 );
const resultado = primerNumero( 4, 3 );
console.log( resultado ); // 12


// Dividir una función en tres partes
const partial = a => b => c => suma( a, b, c );
const primerNum = partial( 5 );
const segundoNum = primerNum( 4 );
const result = segundoNum( 5 );
console.log( result ); // 14


