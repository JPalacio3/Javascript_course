// DO WHILE :
/*
permite ejecutar un bloque de código repetidamente mientras se cumpla una condición específica. La principal diferencia entre un bucle do...while y un bucle while es que en un bucle do...while, el bloque de código se ejecuta al menos una vez antes de verificar la condición.
Sintaaxis:

do {
    Código a ejecutar al menos una vez
} while(condición);
*/

let i = 1; // Inicio

// do {
//     console.log(`Número  ${i}`);
//     i++; // Incremento
// } while (i < 10);

// FIZZ BUZZ
do {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} - FIZZ BUZZ`);
    } else if (i % 3 == 0) {
        console.log(`${i} - FIZZ`);
    } else if (i % 5 == 0) {
        console.log(`${i} - BUZZ`);
    }
    i++;
} while (i <= 100);
