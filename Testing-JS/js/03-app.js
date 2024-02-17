// Probar dos valores mediante validaciones de código esplícitas

function suma( a, b ) {
    return a + b;
}

function restar( a, b ) {
    return a - b;
}

// Realizar una prueba de asincronicidad
async function sumaAsync( a, b ) {
    return Promise.resolve( suma( a, b ) );
}

let resultado = suma( 8, 5 );
let esperado = 10;
expected( esperado ).toBe( resultado );
expected( esperado ).toEqual( resultado );

test( `Suma 8 + 5  el resultado deber ser ${resultado}...`, async () => {
    const resultado = await sumaAsync( 8, 5 );
    const esperado = 20;
    expected( esperado ).toBe( esperado );

} );

resultado = restar( 8, 5 );
esperado = 3;
expected( esperado ).toBe( resultado );
expected( esperado ).toEqual( resultado );

async function test( mensaje, callback ) {
    try {
        await callback();
        console.log( `El Test ${mensaje} se ejecutó correctamente` );
    } catch ( error ) {
        console.error( 'Error' );
        console.error( error );
    }
}

// Función para realizar la validación
function expected( esperado ) {
    return {
        toBe( resultado ) {
            if ( resultado !== esperado ) {
                console.error( 'El resultado NO es el esperado' );
            } else {
                console.log( resultado );
            }
        },
        toEqual( resultado ) {
            if ( resultado !== esperado ) {
                console.error( `El ${resultado} NO es el esperado` );
            } else {
                console.log( 'La prueba pasó correctamente' );
            }
        }
    }
}
