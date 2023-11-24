// Obtener datos de un archivo txt

( function () {
    const cargarTxtBtn = document.querySelector( '#cargarTxt' );
    cargarTxtBtn.addEventListener( 'click', obtenerDatos );

    function obtenerDatos() {
        const url = 'data/datos.txt';

        // Relizar la petición con fetch
        fetch( url )
            .then( respuesta => {
                console.log( respuesta );
                console.log( respuesta.status );
                console.log( respuesta.statusText );
                console.log( respuesta.url );
                console.log( respuesta.type );

                return respuesta.text();
            } )
            // Se imprimen los datos y se empiezan a manejar
            .then( datos => {
                mostrarHTML( datos );
            } )
            // Para manejar los errores que puwdan haber, se usa el cath
            .catch( err => {
                console.log( err );
            } )
    }

    function mostrarHTML( datos ) {
        const content = document.querySelector( '.content' );

        content.innerHTML = `${datos}`;
    }
} )()
