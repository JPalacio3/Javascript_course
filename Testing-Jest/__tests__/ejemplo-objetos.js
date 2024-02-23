// Métodos para validar Objetos

const cliente = {
    nombre: 'Joel',
    balance: 600
};

describe( 'Testing al Objeto de cliente', () => {
    test( 'El cliente es Premium', () => {
        expect( cliente.balance ).toBeGreaterThan( 400 );
    } );

    test( 'Validar el Nombre del cliente', () => {
        expect( cliente.nombre ).toBe( 'Joel' );
    } );

    test( 'Validar que no sea un valor vacío', () => {
        expect( cliente.nombre ).not.toBe( '' );
    } );

    test( 'No tiene 500', () => {
        expect( cliente.balance ).not.toBe( 500 );
    } );
} )


