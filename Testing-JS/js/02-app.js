// Probar dos valores mediante validaciones de código esplícitas

function suma( a, b ) {
    return a + b;
}

function restar( a, b ) {
    return a - b;
}

let resultado = suma( 8, 5 );
let esperado = 10;
expected( esperado ).toBe( resultado );
expected( esperado ).toEqual( resultado );

resultado = restar( 8, 5 );
esperado = 3;
expected( esperado ).toBe( resultado );
expected( esperado ).toEqual( resultado );

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
