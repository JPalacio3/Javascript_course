/* MODULES :
el patrón Module es útil para organizar y encapsular código en módulos reutilizables, facilitando el mantenimiento y la colaboración en proyectos grandes y complejos.
*/

// Forma moderna de exportar módulos:
const mostrarCliente = nombre => { console.log( nombre ) };
// export default mostrarCliente;

// Forma anterior de exportar los módulos
const modulo1 = ( function () {
    const nombre = 'Joel';

    function hola() {
        console.log( 'hola' );
    }

    return {
        nombre,
        hola
    }
} )();
