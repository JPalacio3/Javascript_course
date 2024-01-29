// Funciones que retornan funciones o Funciones de orden superior

const obtenerNombre = () => () => console.log( 'Joel Palacio' ); // Una función contenida dentro de otra función

const fn = obtenerNombre(); // Esta es la primera parte de la función
fn(); // Joel Palacio
