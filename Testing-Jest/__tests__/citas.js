import Citas from '../js/classes/Citas';

describe( 'Probar la clase de Citas', () => {

    const citas = new Citas();
    const id = Date.now()

    test( 'Agregar una nueva cita', () => {

        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'Joel',
            telefono: '3339980089',
            fecha: '10-12-2020',
            hora: '10:23',
            sintomas: 'Solo duerme'
        };

        citas.agregarCita( citaObj );
        // Prueba para agregar una cita nueva:
        expect( citas ).toMatchSnapshot();
    } );

    test( 'Actualizar una cita', () => {
        const citaActualizada = {
            id: id,
            mascota: 'Nuevo Nombre',
            propietario: 'Joel',
            telefono: '3339980089',
            fecha: '10-12-2020',
            hora: '10:23',
            sintomas: 'Solo duerme'
        };

        citas.editarCita( citaActualizada );
        // Prueba para actualizar una cita:
        expect( citas ).toMatchSnapshot();
    } );

    test( 'Eliminar Citas', () => {
        citas.eliminarCita( id );

        // Prueba de eliminación de una cita:
        expect( citas ).toMatchSnapshot();
    } )
} );
