// EVENTOS DEL MOUSE

const nav = document.querySelector('.navegacion');

// Registrar un evento de click
nav.addEventListener('click',() => {
    console.log('click en nav');
})

// Registrar un evento de puntero (Entrando a un área)
nav.addEventListener('mouseenter',() => {
    console.log('Entrando a la navegación');
})

// Registrar un evento de puntero (Saliendo de un área)
nav.addEventListener('mouseout',() => {
    console.log('Saliendo de la navegación');
})

// Registrar un evento de puntero (doble clik)
nav.addEventListener('dblclick',() => {
    console.log('Doble click en la navegación');
})

// mousedown es similar al click
nav.addEventListener('mousedown',() => {
    console.log('click manejado por medio de mousedown');
})


// mouseup se registra despues del click, cuando sueltas el botón de click
nav.addEventListener('mouseup',() => {
    console.log('Se ejecuta cuando suelto el botón del click');
})
