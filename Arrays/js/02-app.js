const numeros = [ 10,20,30,40,50,[ 1,2,3 ] ];

console.log(numeros);
console.table(numeros);

// Acceder a valores especifiicos del arreglo.
console.log(numeros[ 0 ]);
console.log(numeros[ 2 ]);
console.log(numeros[ 10 ]); // Si se accede a un valor que no existe, devolverá undefined.

console.log(numeros[ 5 ][ 1 ]); // Para cceder a un arreglo dentro de otro arreglo, funciona de la misma manera por medio de su índice, primero el íindice dentro del arreglo original, después el índice del elemento dentro de este.

