/*
El Callback Hell (infierno de callbacks) ocurre cuando hay múltiples
callbacks anidados, dificultando la lectura y mantenimiento del código.
Esto sucede en situaciones asíncronas donde las operaciones dependen
de los resultados de otras. Puede conducir a un código confuso y difícil
de mantener, lo que se resuelve con promesas o async/await.
*/

const paises = [];

function nuevoPais( pais, callback ) {
    paises.push( pais );
    console.log( `Agregado: ${pais}` );
    callback();
}

function mostrarPaises() {
    console.log( paises );
}

function inciarCallbackHell() {
    setTimeout( () => {
        nuevoPais( 'Alemania', mostrarPaises );
        setTimeout( () => {
            nuevoPais( 'Inglaterra', mostrarPaises );
            setTimeout( () => {
                nuevoPais( 'Francia', mostrarPaises );
                setTimeout( () => {
                    nuevoPais( 'España', mostrarPaises );
                    setTimeout( () => {
                        nuevoPais( 'Italia', mostrarPaises );
                        setTimeout( () => {
                            nuevoPais( 'Portugal', mostrarPaises );
                            setTimeout( () => {
                                nuevoPais( 'Holanda', mostrarPaises );
                            }, 1000 );
                        }, 1000 );
                    }, 1000 );
                }, 1000 );
            }, 1000 );
        }, 1000 );
    }, 1000 );
}

inciarCallbackHell();a
