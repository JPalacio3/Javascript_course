// EJERCICIO DEL FIZZ BUZZ

// Múltiplo de 3 imprime FIZZ
// Múltiplo de 5 imprime BUZZ
// Múltiplo de 5 y 3 imprime FIZZBUZZ

for (let i = 1;i <= 100;i++) {

    if (i % 3 == 0 && i % 5 == 0) {

        // Múltiplo de 5 y 3 imprime FIZZBUZZ
        console.log(`${i} - FIZZBUZZ !!!`);
        continue;

    } else if (i % 3 == 0) {
        // Múltiplo de 3 imprime FIZZ
        console.log(`${i} - FIZZ`);
        continue;

    } else if (i % 5 == 0) {
        // Múltiplo de 5 imprime BUZZ
        console.log(`${i} - BUZZ`);
        continue;
    }
    // console.log(i);
}
