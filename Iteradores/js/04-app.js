// WHILE LOOP
/*
El bucle while es una estructura de control en JavaScript (y en muchos otros lenguajes de programación) que permite ejecutar un bloque de código repetidamente mientras se cumpla una condición específica. La sintaxis general de un bucle while es la siguiente:

let contador = 1;
while (condición) {
    Código a ejecutar mientras la condición sea verdadera
}
*/

let i = 0;

while (i <= 10) {// Condición
    console.log(`Número ${i}`);

    i++; // Incremento
    // console.log(i);
}

// DETECTAR PARES E IMPARES
while (i <= 50) {
    if (i % 2 == 0) {
        console.log(`${i} ES PAR`);
    }
    else {
        console.log(`${i} ES IMPAR`);
    }
    i++;
}
