// Métodos para validar Funciones

function suma( a, b ) {
    return a + b;
}

function resta( a, b ) {
    return a - b;
}

describe( 'Testting a las funciones de Suma y Resta', () => {
    test( 'Suma de valores', () => {
        expect( suma( 20, 30 ) ).toBe( 50 );
    } );

    test( 'Resta de valores', () => {
        expect( resta( 20, 30 ) ).toBe( -10 );
    } );

    test( 'Que la suma de 10 y 10 no sea diferente a 20', () => {
        expect( suma( 10, 10 ) ).toBe( 20 );
    } );

    test( 'Que la suma de 10 y 10 no sea 10', () => {
        expect( suma( 10, 10 ) ).not.toBe( 10 );
    } );

    test( 'Que la resta de 10 y 10 no sea diferente a 0', () => {
        expect( resta( 10, 10 ) ).toBe( 0 );
    } );

    test( 'Que la resta de 10 y 10 no sea 10', () => {
        expect( resta( 10, 10 ) ).not.toBe( 10 );
    } );



} )
