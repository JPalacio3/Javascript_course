/*
CALLBACKS: Funciones pasadas como argumentos a operaciones asincrónicas.
Se ejecutan después de completarse la operación.
Pueden llevar a "Callback Hell" con anidaciones excesivas.
Comúnmente utilizados en funciones como setTimeout y manejo de eventos.
Ejemplo: operacionAsincronica(callback);
*/

const paises = [ 'Francia', 'España', 'Portugal', 'Australia', 'Inglaterra' ];

function nuevoPais( pais, callback ) {
    setTimeout( () => {
        paises.push( pais );
        callback();
    }, 2000 );
}

function mostrarPaises() {
    setTimeout( () => {
        paises.forEach( pais => {
            console.log( pais );
        } )
    }, 1000 )
}

mostrarPaises();
nuevoPais( 'Colombia', mostrarPaises );
