const autenticado = true;

// 1 )
// Evita hacer validaciones innecesarias
if (autenticado == true) {
    console.log('El usuario está autenticado')
}

// Mejor así, aunque la anterior también funcione
if (autenticado) {
    console.log('El usuario está autenticado')
}

// 2 ).
// Planear las validaciones para obtener los resultados deseados
const puntaje = 500;

if (puntaje > 300) {
    console.log('Buen puntaje');
} else if (puntaje > 400) {
    console.log('Excelente puntaje')
}

// Es mejor evaluar desde una condición superior hacia abajo (prioridad)
if (puntaje > 400) {
    console.log('Excelente puntaje');
} else if (puntaje > 300) {
    console.log('Buen puntaje')
}

//  También es buena práctica crear funciones que realicen las validaciones de manera individual
function revisarPuntaje() {
    if (puntaje > 400) {
        console.log('Excelente puntaje');
        return;
    }

    if (puntaje > 300) {
        console.log('Buen puntaje');
        return;
    }
}
revisarPuntaje();
