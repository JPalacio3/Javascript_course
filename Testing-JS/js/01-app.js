// Probar dos valores mediante validaciones de código esplícitas

function suma( a, b ) {
    return a + b;
}

function restar( a, b ) {
    return a - b;
}

let resultado = suma( 8, 5 );
let resultado2 = restar( 8, 5 );
let esperado1 = 9;
let esperado2 = 3;

if ( resultado !== esperado1 ) {
    console.error( 'El resultado NO es el esperado' );
} else {
    console.log( resultado );
} // El resultado NO es el esperado

if ( resultado2 !== esperado2 ) {
    console.error( 'El resultado NO es el esperado' );
} else {
    console.log( resultado );
} // 3
