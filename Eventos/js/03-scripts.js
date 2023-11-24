// EVENTOS DEL TECLADO

const busqueda = document.querySelector('.busqueda');

// Evento que se desencadena cuando el usuario está escribiendo
busqueda.addEventListener('keydown',(e) => {
    console.log(e.target.value); // Muestra lo que el usuario está escribiendo
})

// Se ejecuta el evento cuando se suelta la tecla escrita
busqueda.addEventListener('keyup',() => {
    console.log('Soltando la tecla');
})

// Se ejecuta cuando se hace click por fuera de un determinado elemento
busqueda.addEventListener('blur',() => {
    console.log('Saliendo del buscador con el puntero...');
})

// Se ejecuta cuando un determinado elemento es copiado
busqueda.addEventListener('copy',() => {
    console.log('Un elemento ha sido copíado...');
})

// Se ejecuta cunado un elemento es pegado
busqueda.addEventListener('paste',() => {
    console.log('Un elemento ha sido pegado...');
})

// Se ejecuta cunado un elemento es cortado
busqueda.addEventListener('cut',() => {
    console.log('Un elemento ha sido cortado...');
})

// Se ejecuta cuando se hace alguna interacción (copiar, pegar, cortar, escribir, eliminar) con el elemento seleccionado
busqueda.addEventListener('input',() => {
    console.log('Un elemento ha recibido interacción...');
})

