import { obtenerCitasLocalStorage, administrarCitas } from './funciones.js';
import { ui } from './funciones.js';

// Variables para campos del formulario
export const mascotaInput = document.querySelector( '#mascota' );
export const propietarioInput = document.querySelector( '#propietario' );
export const telefonoInput = document.querySelector( '#telefono' );
export const fechaInput = document.querySelector( '#fecha' );
export const horaInput = document.querySelector( '#hora' );
export const sintomasInput = document.querySelector( '#sintomas' );

// UI
export const formulario = document.querySelector( '#nueva-cita' );
export const contenedorCitas = document.querySelector( '#citas' );

// Heading
export const heading = document.querySelector( '#administra' );

// EventListener para cargar al inicio
document.addEventListener( 'DOMContentLoaded', () => {
    const citas = obtenerCitasLocalStorage();
    administrarCitas.citas = citas;
    ui.imprimirCitas( administrarCitas );
} );
