// Variables y selectores
const formulario = document.querySelector( '#agregar-gasto' );
const gastoListado = document.querySelector( '#gastos ul' );

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener( 'DOMContentLoaded', preguntarPresupuesto );
    formulario.addEventListener( 'submit', agregarGasto );
}

// Clases
class Presupuesto {
    constructor( presupuesto ) {
        this.presupuesto = Number( presupuesto );
        this.restante = Number( presupuesto );
        this.gastos = [];
    }

    nuevoGasto( gasto ) {
        this.gastos = [ ...this.gastos, gasto ];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( ( total, gasto ) => total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto( id ) {
        this.gastos = this.gastos.filter( gasto => gasto.id != id );
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto( cantidad ) {
        // Extrayendo el valor
        const { presupuesto, restante } = cantidad;
        // Agregar al HTML
        document.querySelector( '#total' ).textContent = presupuesto;
        document.querySelector( '#restante' ).textContent = restante;
    }

    imprimirAlerta( mensaje, tipo ) {
        // Crear el div
        const divMensaje = document.createElement( 'DIV' );
        divMensaje.classList.add( 'text-center', 'alert' );

        if ( tipo === 'error' ) {
            divMensaje.classList.add( 'alert-danger' );
        } else {
            divMensaje.classList.add( 'alert-success' );
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector( '.primario' ).insertBefore( divMensaje, formulario );

        setTimeout( () => {
            divMensaje.remove();
        }, 1500 );
    }

    // Agregar el listado de gastos
    mostrarGastos( gastos ) {

        // Limpiar el HTML al agregar un nuevo registro
        this.limpiarHTML();

        // Iterar sobre los gastos
        gastos.forEach( gasto => {
            const { cantidad, nombre, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement( 'LI' );
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `
            ${nombre} <span class="badge badge-primary badge-pill" > $ ${cantidad} </span>`;

            // Botón para borrar el gasto
            const btnBorrar = document.createElement( 'BUTTON' );
            btnBorrar.classList.add( 'btn', 'btn-danger', 'borrar-gasto' );
            btnBorrar.innerHTML = 'Borrar &times'
            nuevoGasto.appendChild( btnBorrar );

            // Eliminar un gasto y devolver el saldo
            btnBorrar.onclick = () => {
                eliminarGasto( id );
            }

            // Agregar al HTML
            gastoListado.appendChild( nuevoGasto );
        } );
    }

    // Limpiar HTML
    limpiarHTML() {
        while ( gastoListado.firstChild ) {
            gastoListado.removeChild( gastoListado.firstChild );
        }
    }

    // Actualizar el saldo restante
    actualizarRestante( restante ) {
        document.querySelector( '#restante' ).textContent = restante;
    }

    // Validación de colores dependiendo de la cantidad de presupuesto restante
    comprobarPresupuesto( presupuestoObj ) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector( '.restante' );


        if ( ( presupuesto / 4 ) >= restante ) {
            restanteDiv.classList.remove( 'alert-success', 'alert-warning' );
            restanteDiv.classList.add( 'alert-danger' );
        } else if ( ( presupuesto / 2 ) >= restante ) {
            restanteDiv.classList.remove( 'alert-success' );
            restanteDiv.classList.add( 'alert-warning' );
        } else {
            restanteDiv.classList.remove( 'alert-danger', 'alert-warning' );
            restanteDiv.classList.add( 'alert-success' );
            formulario.querySelector( 'button[type="submit"]' ).disabled = false;
        }
        // Si el total es 0 o menor
        if ( restante <= 0 ) {
            ui.imprimirAlerta( 'El presupuesto se ha agotado', 'error' );
            formulario.querySelector( 'button[type="submit"]' ).disabled = true;
        }
    }
}

// Instanciar
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto() {
    const presupuestoGuardado = localStorage.getItem( 'presupuesto' );
    const gastosGuardados = localStorage.getItem( 'gastos' );
    const saldoRestanteGuardado = recuperarSaldoRestanteDeLocalStorage();


    if ( presupuestoGuardado ) {
        presupuesto = new Presupuesto( presupuestoGuardado );

        if ( gastosGuardados ) {
            const gastos = JSON.parse( gastosGuardados );
            presupuesto.gastos = gastos;
        }

        if ( saldoRestanteGuardado !== null ) {
            presupuesto.restante = saldoRestanteGuardado;
        }

        // Actualiza la interfaz de usuario con los datos recuperados
        ui.insertarPresupuesto( presupuesto );
        ui.mostrarGastos( presupuesto.gastos );
        ui.comprobarPresupuesto( presupuesto );
    } else {
        const presupuestoUsuario = prompt( '¿Cuál es tu presupuesto?' );
        if ( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN( presupuestoUsuario ) || presupuestoUsuario <= 0 ) {
            window.location.reload();
        }
        // Presupuesto válido
        presupuesto = new Presupuesto( presupuestoUsuario );
        localStorage.setItem( 'presupuesto', presupuestoUsuario );
    }
}

function agregarGasto( e ) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector( '#gasto' ).value;
    const cantidad = Number( document.querySelector( '#cantidad' ).value );

    if ( nombre === '' || cantidad === '' ) {
        ui.imprimirAlerta( 'Ambos campos son obligatorios', 'error' );
        return;
    } else if ( cantidad <= 0 || isNaN( cantidad ) ) {
        ui.imprimirAlerta( 'Cantidad NO Válida', 'error' );
        return;
    }

    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() };

    // Añade un nuevo gasto
    presupuesto.nuevoGasto( gasto );

    // Mensaje de éxito
    ui.imprimirAlerta( 'Gasto agregado correctamente' );

    // Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos( gastos );
    ui.actualizarRestante( restante );
    ui.comprobarPresupuesto( presupuesto );

    // Reinicia el formulario
    formulario.reset();

    // Guardar el presupuesto y los gastos en localStorage
    guardarDatosEnLocalStorage( presupuesto );
    guardarSaldoRestanteEnLocalStorage( presupuesto.restante );
}

// Función para guardar el presupuesto y los gastos en localStorage
function guardarDatosEnLocalStorage( presupuesto ) {
    localStorage.setItem( 'presupuesto', JSON.stringify( presupuesto.presupuesto ) );
    localStorage.setItem( 'gastos', JSON.stringify( presupuesto.gastos ) );
}

function eliminarGasto( id ) {

    // Elimina los gastos del objeto
    presupuesto.eliminarGasto( id );

    // Actualiza el localStorage después de eliminar el gasto
    guardarDatosEnLocalStorage( presupuesto );
    guardarSaldoRestanteEnLocalStorage( presupuesto.restante );

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos( gastos );
    ui.actualizarRestante( restante );
    ui.comprobarPresupuesto( presupuesto );
}

// Función para guardar el presupuesto y los gastos en localStorage
function guardarDatosEnLocalStorage( presupuesto ) {
    localStorage.setItem( 'presupuesto', JSON.stringify( presupuesto.presupuesto ) );
    localStorage.setItem( 'gastos', JSON.stringify( presupuesto.gastos ) );
    localStorage.setItem( 'restante', JSON.stringify( presupuesto.restante ) );
}
// Función para guardar el saldo restante en localStorage
function guardarSaldoRestanteEnLocalStorage( restante ) {
    localStorage.setItem( 'restante', JSON.stringify( restante ) );
}

// Función para recuperar el saldo restante desde localStorage
function recuperarSaldoRestanteDeLocalStorage() {
    const saldoRestanteGuardado = localStorage.getItem( 'restante' );
    return saldoRestanteGuardado ? JSON.parse( saldoRestanteGuardado ) : null;
}
