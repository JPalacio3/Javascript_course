/*
Para trabajar con dos o más promesas dentro de un mismo await, puedes usar la función Promise.all(). Esta función toma un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas del array se han resuelto. Si alguna de las promesas falla, la promesa devuelta por Promise.all() también fallará.
*/

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log( 'Descargando clientes' );

        setTimeout( () => {
            resolve( 'Los clientes fueron descargados' );
        }, 5000 );
    } )
}

function descargarNuevosPedidos() {
    return new Promise( resolve => {
        console.log( 'Descargando pedidos' );

        setTimeout( () => {
            resolve( 'Los pedidos fueron descargados ...' );
        }, 3000 );
    } )
}

const app = async () => {
    try {
        //Este método va a funcionar, pero seriá más lento:
        /*
        const clientes = await descargarNuevosClientes();
        console.log( clientes );
        const pedidos = await descargarNuevosPedidos();
        console.log( pedidos );
        */

        // Promise.all([]) Es una mejor manera de manejar múltiples respuestas:
        const respuesta = await Promise.all( [ descargarNuevosClientes(), descargarNuevosPedidos() ] );
        console.log( respuesta[ 0 ] );
        console.log( respuesta[ 1 ] );
    } catch ( error ) {
        console.log( error );
    }
}

app();
