import Citas from './clases/Citas.js';
import UI from './clases/UI.js';
import {
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput,
    formulario
} from './selectores.js'

// Intanciar las clases de manera global
export const administrarCitas = new Citas();
export const ui = new UI();

// Modo edición
let editando;

// Objeto con información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Agrega datos al objeto de cita
export function datosCita( e ) {
    e.preventDefault();
    citaObj[ e.target.name ] = e.target.value;
}

// Valida y agrega una nueva cita a la clase de citas
export function nuevaCita( e ) {
    e.preventDefault();

    // Extraer la información del objeto de citas
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    // Validar
    if ( mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '' ) {
        ui.imprimirAlerta( 'Todos los campos son obligatorios', 'error' );
        return;
    }

    // Compueba si es edición o nuevo registro
    if ( editando ) {
        // Mensaje de agregado correctamente
        ui.imprimirAlerta( 'Registro editado Correctamente' );
        // Pasar el objeto de la cita a edición
        administrarCitas.editarCita( { ...citaObj } );
        // Cambiar el texto del botón
        formulario.querySelector( 'button[type="submit"]' ).textContent = 'Crear Cita';
        // Actualizar cita en el localStorage
        actualizarCitaLocalStorage( citaObj );
        editando = false;
    } else {
        // Generar un ID único
        citaObj.id = Date.now();
        // Creando una nueva cita
        administrarCitas.agregarCita( { ...citaObj } );
        // Mensaje de agregado correctamente
        ui.imprimirAlerta( 'Registro agregado Correctamente' );
        // Agregar cita al localStorage
        agregarCitaLocalStorage( citaObj );
    }

    // Reiniciar el objeto y el formulario
    reiniciarObjeto();
    formulario.reset();

    // Mostrar las citas en el HTML
    ui.imprimirCitas( administrarCitas );;
}

// Agregar cita al localStorage
export function agregarCitaLocalStorage( cita ) {
    const citas = obtenerCitasLocalStorage();
    citas.push( cita );
    localStorage.setItem( 'citas', JSON.stringify( citas ) );
}

// Obtener las citas del localStorage
export function obtenerCitasLocalStorage() {
    return JSON.parse( localStorage.getItem( 'citas' ) ) || [];
}

// Reiniciar el objeto
export function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

// Eliminar un cita
export function eliminarCita( id ) {
    // Eliminar la cita
    administrarCitas.eliminarCita( id );

    // Eliminar la cita del Local Storage
    eliminarCitaLocalStorage( id );

    // Muestra un mensaje
    ui.imprimirAlerta( 'La Cita se eliminó correctamente' );
    // Refresca las citas
    ui.imprimirCitas( administrarCitas );
}

// Editar una cita
export function cargarEdicion( cita ) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del botón
    formulario.querySelector( 'button[type="submit"]' ).textContent = 'Guardar Cambios';

    editando = true;
}

// Actualizar cita en el localStorage
function actualizarCitaLocalStorage( citaActualizada ) {
    const citas = obtenerCitasLocalStorage();
    const citasActualizadas = citas.map( cita => ( cita.id === citaActualizada.id ? citaActualizada : cita ) );
    localStorage.setItem( 'citas', JSON.stringify( citasActualizadas ) );
}

// Función para eliminar la cita del Local Storage
function eliminarCitaLocalStorage( id ) {
    let citas = obtenerCitasLocalStorage();
    citas = citas.filter( cita => cita.id !== id );
    localStorage.setItem( 'citas', JSON.stringify( citas ) );
}
