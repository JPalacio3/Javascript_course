/*
Las Promesas en JavaScript son objetos que representan el resultado
eventual (éxito o fracaso) de una operación asíncrona. Se utilizan
para manejar operaciones asíncronas de manera más clara y evitar el
Callback Hell. Una promesa puede estar en tres estados: pendiente,
cumplida (resuelta) o rechazada. Se resuelven con then() en caso
de éxito y catch() en caso de error, facilitando el manejo de
operaciones asíncronas y mejorando la legibilidad del código.
*/

const aplicarDescuento = new Promise( ( resolve, reject ) => {
    const descuento = true;

    if ( descuento ) {
        resolve( 'Descuento aplicado' );
    } else {
        reject( 'No se pudo aplicar el descuento' )
    }
} );

aplicarDescuento // Cuando el promise se cumple, podemos acceder a .then para darle la siguiente acción
    .then( resultado => descuento( resultado ) )
    // Cuando el promise no se cumple, siempre se le pasa el cath para manejar dicho error
    .catch( error => console.log( error ) );

function descuento( mensaje ) {
    console.log( mensaje );
}

// console.log( aplicarDescuento )
// fulfilled: Significa que el promise se cumplió
// rejected: Significa que el promise no se cumplió
// pending : Aún no se cumple y no ha sido rechazado aún
