// Métodos para validar Arrays

const carrito = [ 'Producto1', 'Producto2', 'Producto3', 'Producto4' ];

describe( 'Testing al carrito de Compras', () => {
    test( 'Probar que el array tenga 4 elementos', () => {
        expect( carrito ).toHaveLength( 4 );
    } );

    test( 'Verificar que el carrito no esté vacío', () => {
        expect( carrito ).not.toHaveLength( 0 );
    } )
} );
