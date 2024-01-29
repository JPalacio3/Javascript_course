
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

// ASYNC AWAIT EN FUNCIÓN EXPRESS Y DECLARATION
/*
Se usa asignando la función padre en forma de variable, por lo que la función ejecutora contendría
el await después de esta declaración en forma de función anónima
*/

const ejecutar = async () => {
    try {
        const respuesta = await descargarClientes();
        console.log( 2 + 2 );
        console.log( respuesta );
    } catch ( error ) {
        console.log( error )
    }
}
ejecutar();

