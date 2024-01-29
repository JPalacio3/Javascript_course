// Clase para las citas
class Citas {
    constructor( citas ) {
        this.citas = [];
    }

    // Agregar una nueva cita
    agregarCita( cita ) {
        this.citas = [ ...this.citas, cita ];
    }

    // Eliminar citas
    eliminarCita( id ) {
        this.citas = this.citas.filter( cita => cita.id !== id );
    }

    // Editar citas
    editarCita( citaActualizada ) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita );
    }
}

// Definir la exportación de la clase
export default Citas;
