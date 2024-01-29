// 2. Pasar funciones como argumentos

// Función de suma
const suma = ( a, b ) => a + b;

// Función de restar
const restar = ( a, b ) => a - b;

// Función de multiplicar
const multiplicar = ( a, b ) => a * b;

// Función de dividir
const dividir = ( a, b ) => a / b;

// Función para asignar una función de operación
const operar = fn => fn( 10, 5 );

console.log( operar( suma ) ); // 15
console.log( operar( restar ) ); // 5
console.log( operar( multiplicar ) ); // 50
console.log( operar( dividir ) ); // 2



