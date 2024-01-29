
/*
El bloque try contiene el código que puede lanzar errores. El bloque catch contiene el código que se ejecuta si hay un error. El bloque finally contiene el código que se ejecuta siempre, haya o no error. El bloque finally es opcional.
*/
/*
x = 'Estoy deifindo'
try {
    alert( "Hola" );
    alert( x ); // x no está definido, esto lanza un error
    alert( "Adiós" );
} catch ( error ) {
    alert( "Ha ocurrido un error: " + error.message ); // muestra el mensaje del error
}
*/

/*
Try Catch se usa pora el manejo de errores, ya que en javascript cuando se presenta
un error duranrte la ejecución del código, el resto deja de funcionar,
por lo que con este método podemos manejar los errores para evitar fallos
fatales en la aplicación.
*/


console.log( 1 + 1 ); // 2
// hola(); // Esta función al no estar definifa arroja un error que detiene el flujo de la aplicación
console.log( 2 + 2 ); // No se muestra por el error anterior
console.log( 1 + 1 ); // 2

// Con Try...Catch manejamos el mismo error para evitar que se detenga el flujo de la aplicación
try {
    hola();
} catch ( error ) {
    console.log( error ); // Arroja el error que está ocurriendo pero no detiene el resto de la aplicación
}

console.log( 2 + 2 ); // 4
