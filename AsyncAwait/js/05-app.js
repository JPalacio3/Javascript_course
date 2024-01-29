const url = 'https://picsum.photos/list';

document.addEventListener( 'DOMContentLoaded', obtenerDatos );

// Hacer una llamada a la API con Promises
function obtenerDatos1() {
    fetch( url )
        .then( respuesta => respuesta.json() )
        .then( resultado => console.log( resultado ) )
        .catch( error => console.log( error ) )
}

// Hacer una llamada a la API con async await y try catch
async function obtenerDatos() {
    try {
        const respuesta = await fetch( url );
        const resultado = await respuesta.json();
        console.log( resultado );
    } catch ( error ) {
        console.log( error )
    }
}
