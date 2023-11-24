// Cargar datos de una API

( function () {
    const cargarAPIBtn = document.querySelector( '#cargarAPI' );
    cargarAPIBtn.addEventListener( 'click', obtenerDatos );

    function obtenerDatos() {
        const url = 'https://picsum.photos/list';

        fetch( url )
            .then( respuesta => respuesta.json() )
            .then( resultado => mostrarHtml( resultado ) )
    }

    function mostrarHtml( datos ) {
        const contenido = document.querySelector( '.content' );

        let html = '';

        datos.forEach( perfil => {
            const { author, post_url, filename } = perfil;

            html += `
            <p>Autor: ${author}</p>
            <p>Nombre: ${filename}</p>
            <a href=" ${post_url}" target="_blank"> Ver imágen</a>
            `

        } );
        
        contenido.innerHTML = html;
    }
} )();

