// Closures o cierre : Obtenemos el valor de una variable o función desde una sección externa de la función que la contiene

const obtenerCliente = () => {
    const nombre = 'Joel';

    function mostrarNombre() {
        console.log( nombre );
    }

    return mostrarNombre;
}

const cliente = obtenerCliente();

cliente();
