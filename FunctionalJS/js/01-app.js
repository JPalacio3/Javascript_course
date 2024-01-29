// Programación funcional
// 1. Asignamos funciones a variables y las ejecutamos desde esa varible (First-class functions)

const suma = function ( a, b ) {
    return a + b;
}

const resultado = suma;
console.log( resultado( 4, 5 ) ); // 9
