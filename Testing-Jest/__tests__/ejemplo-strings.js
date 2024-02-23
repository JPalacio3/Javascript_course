// Métodos para validar strings

const password = '123456';

describe( 'Valida las condiciones que deben cumplirse en el password', () => {
    test( 'Que el password tenga 6 caracteres', () => {
        expect( password ).toHaveLength( 6 );
    } );

    test( 'Password no vacío', () => {
        expect( password ).not.toHaveLength( 0 );
    } );

} );
