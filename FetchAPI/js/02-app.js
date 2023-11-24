// Obtener datos de un archivo JSON

( function () {
    const cargarJSONBtn = document.querySelector( '#cargarJSON' );
    cargarJSONBtn.addEventListener( 'click', obtenerDatos );

    function obtenerDatos() {
        const url = 'data/empleado.json';
        fetch( url )
            .then( respuesta => respuesta.json() )
            .then( resultado => mostrarHTML( resultado ) )
    }

    function mostrarHTML( { empresa, id, nombre, trabajo } ) {
        const content = document.querySelector( '.content' );

        content.innerHTML = `
            <p>ID empleado: ${id}</p>
            <p>Nombre: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Puesto: ${trabajo}</p>
        `;
    }
} )();

