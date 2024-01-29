const puntaje = 1000;  // Tipo numero
const puntaje2 = '1000'; // Tipo String

if (puntaje != 1001) { // el signo != significa es diferente
    console.log('Sí es diferente')
}

if (puntaje === 1000) { // el signo == ó === significa que compara igualdad
    console.log('Sí es igual')
}

if (puntaje2 === puntaje) {
    console.log('Sí son iguales');
} else {
    console.log(`el puntaje2 es ${typeof puntaje2} mientras que el puntaje es ${typeof puntaje}`);
}
// - `==` realiza una comparación con conversión de tipo.
// - `===` realiza una comparación estricta sin conversión de tipo.

console.log(typeof puntaje); // Number
console.log(typeof puntaje2); // String

