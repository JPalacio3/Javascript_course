import { eliminarCita, cargarEdicion } from "../funciones.js";
import { contenedorCitas } from "../selectores.js";

// Clase para la interfaz de usuario
class UI {

    imprimirAlerta( mensaje, tipo ) {
        // Crear el DIV
        const divMensaje = document.createElement( 'DIV' );
        divMensaje.classList.add( 'text-center', 'alert', 'd-block', 'col-12' );

        //Agregar clase en base al tipo de error
        if ( tipo === 'error' ) {
            divMensaje.classList.add( 'alert-danger' );
        } else {
            divMensaje.classList.add( 'alert-success' );
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;
        //Agregar al DOM
        document.querySelector( '#contenido' ).insertBefore( divMensaje, document.querySelector( '.agregar-cita' ) );

        // Quitar la alerta después de 2 segundos
        setTimeout( () => {
            divMensaje.remove();
        }, 2000 );
    }

    // Mostrar las citas en el HTML
    imprimirCitas( { citas } ) {
        // Limpiar HTML para evitar que se repitan las citas
        this.limpiarHTML();

        citas.forEach( cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
            const divCita = document.createElement( 'DIV' );
            divCita.classList.add( 'cita', 'p-3' );
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement( 'H2' );
            mascotaParrafo.classList.add( 'card-title', 'font-weight-bolder' );
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement( 'P' );
            propietarioParrafo.innerHTML = `
            <span class="font-weight-bolder">Propietario : </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement( 'P' );
            telefonoParrafo.innerHTML = `
            <span class="font-weight-bolder">Teléfono : </span> ${telefono}
            `;

            const fechaParrafo = document.createElement( 'P' );
            fechaParrafo.innerHTML = `
            <span class="font-weight-bolder">Fecha : </span> ${fecha}
            `;

            const horaParrafo = document.createElement( 'P' );
            horaParrafo.innerHTML = `
            <span class="font-weight-bolder">Hora : </span> ${hora}
            `;

            const sintomasParrafo = document.createElement( 'P' );
            sintomasParrafo.innerHTML = `
            <span class="font-weight-bolder">Síntomas : </span> ${sintomas}
            `;

            // Botón para eliminar una cita
            const btnEliminar = document.createElement( 'BUTTON' );
            btnEliminar.classList.add( 'btn', 'btn-danger', 'mr-2', );
            btnEliminar.innerHTML = 'Eliminar';
            btnEliminar.onclick = () => eliminarCita( id );

            // Botón para editar una cita
            const btnEditar = document.createElement( 'BUTTON' );
            btnEditar.classList.add( 'btn', 'btn-info', 'mr-2', );
            btnEditar.innerHTML = 'Editar';
            btnEditar.onclick = () => cargarEdicion( cita );

            // Agregar los párrafos a Divcita
            divCita.appendChild( mascotaParrafo );
            divCita.appendChild( propietarioParrafo );
            divCita.appendChild( telefonoParrafo );
            divCita.appendChild( fechaParrafo );
            divCita.appendChild( horaParrafo );
            divCita.appendChild( sintomasParrafo );
            divCita.appendChild( btnEliminar );
            divCita.appendChild( btnEditar );

            // Agregar las citas al HTML
            contenedorCitas.appendChild( divCita );
        } );
    }

    // Limpiar el HTML para evitar que se dupliquen las citas al imprimir nuevas
    limpiarHTML() {
        while ( contenedorCitas.firstChild ) {
            contenedorCitas.removeChild( contenedorCitas.firstChild );
        }
    }
}

// Definir la exportación de la clase
export default UI;



