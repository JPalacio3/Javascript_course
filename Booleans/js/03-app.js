// BUENAS PRÁCTICAS CON BOOLEANS

// Evitar comparadores innecesarios

const autenticado = false;

// En lugar de usar:
if (autenticado == true) {
    console.log('Puedes ver Netflix');
} else {
    console.log('No, no puedes verlo');
}

// Se recomienda usar:
if (autenticado) {
    console.log('Puedes ver Netflix');
} else {
    console.log('No, no puedes verlo');
}

// Uso de operadores ternarios
console.log(autenticado ? 'Sí está autenticado' : 'No, no está autenticado');
