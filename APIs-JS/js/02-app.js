/*
La API Intersection Observer es una interfaz en JavaScript que proporciona una forma eficiente de detectar cuándo un elemento HTML entra o sale del área visible del navegador. Permite observar cambios en la intersección de un elemento con el contenedor del navegador o con otro elemento específico. Esto es útil para cargar recursos dinámicamente, como imágenes, mejorar el rendimiento al evitar cálculos innecesarios fuera de la vista y detectar eventos de desplazamiento. La API utiliza un enfoque basado en eventos y ofrece configuraciones flexibles para personalizar la lógica de observación, proporcionando una herramienta poderosa para mejorar la eficiencia y la experiencia del usuario en aplicaciones web.
*/

document.addEventListener( 'DOMContentLoaded', () => {

    // Esto crea el observador
    const observer = new IntersectionObserver( entries => {
        console.log( entries[ 0 ] );

        if ( entries[ 0 ].isIntersecting ) {
            console.log( 'Ya está visible' );
        }
    } );

    // Ejecutar el observador
    observer.observe( document.querySelector( '.premium' ) );
} )
