// Cargar datos de un JSON array

( function () {
    const cargarJSONArrayBtn = document.querySelector( '#cargarJSONArray' );
    cargarJSONArrayBtn.addEventListener( 'click', obtenerDatos );

    function obtenerDatos() {
        const url = 'data/empleados.json'
        fetch( url )
            .then( respuesta => respuesta.json() )
            .then( resultado => mostrarHtml( resultado ) )
    }

    function mostrarHtml( empleados ) {
        const contenido = document.querySelector( '.content' );
        let html = '';

        empleados.forEach( empleado => {
            const { nombre, id, empresa, trabajo } = empleado;
            html += `
            <p>ID empleado: ${id}</p>
            <p>Nombre: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Puesto: ${trabajo}</p>
            `;
        } );
        
        contenido.innerHTML = html;
    }
} )();
