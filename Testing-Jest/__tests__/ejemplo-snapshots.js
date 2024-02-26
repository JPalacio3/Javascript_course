/* Métodos para validar Objetos por medio de snapshots :
En Jest, los snapshots son una forma de probar que la salida de una función o componente coincida con un valor esperado. Los snapshots capturan la salida de una prueba y la almacenan en un archivo. Luego, en ejecuciones posteriores de la prueba, Jest comparará la salida actual con la salida almacenada en el snapshot para verificar si ha habido cambios inesperados.
*/

const cliente = {
    nombre: 'Joel Palacio',
    balance: 500,
    tipo: 'premium'
}

describe( 'Testing al cliente', () => {
    test( 'Es Joel', () => {
        expect( cliente ).toMatchSnapshot();
    } );
} )
