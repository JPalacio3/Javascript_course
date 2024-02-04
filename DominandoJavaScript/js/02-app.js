/*
HOISTING :
El "hoisting" es un comportamiento en JavaScript donde las declaraciones de variables y funciones son elevadas ("hoisted") al inicio de su ámbito (scope) antes de que se ejecute el código. Este proceso ocurre durante la fase de compilación, antes de la ejecución del código.
*/

obtenerCliente( 'Joel' ); // Es posible llamar la función y después declararla
function obtenerCliente( nombre ) {
    console.log( `El nombre del cliente es ${nombre}` );
}

// Es posible, gracias a que javascript compila el código en dos fases,
// en la primera fase registra las funciones y en la segunda les hace el llamado (ejecución ).

// Sin embargo cuando se usan funciones declarativas, no se puede
// utilizar la función antes de declarala, porque las variables se asignan después en la compilación
const obtenerCliente2 = function ( nombre ) {
    console.log( `El nombre del ciente es ${nombre}` );
}
obtenerCliente2( 'Alberto' ); // Se debe invocar la función declarativa después de crearla
