/*
Async / await es una sintaxis especial de JavaScript que te permite trabajar con promesas y funciones asíncronas de una forma más cómoda y limpia.
La palabra clave async se usa para declarar una función asíncrona, que devuelve una promesa. La palabra clave await se usa dentro de una función asíncrona para esperar el resultado de una promesa.
*/

function descargarClientes() {
    return new Promise( ( resolve, reject ) => {
        const error = false;

        setTimeout( () => {
            if ( !error ) {
                resolve( 'El listado de clientes se ha descargado exitosamente' );
            } else {
                reject( 'Error en la conexión' )
            }
        }, 3000 );
    } );
}

// Async await
async function ejecutar() {
    try {
        const respuesta = await descargarClientes();
        console.log( 2 + 2 );
        console.log( respuesta );
    } catch ( error ) {
        console.log( error )
    }
}
ejecutar();

