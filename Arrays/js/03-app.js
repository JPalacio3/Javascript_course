// RECORRER UN ARREGLO

const meses = [ 'enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre' ];

console.table(meses);
console.table(meses[ 1 ]);
console.table(meses[ 2 ]);
console.table(meses[ 3 ]);


// Saber cuánto mide el arrelo (cantidad de elementos qu contiene)
console.log(meses.length);

// Para recorrer el arreglo usamos iteradores o ciclos

// For loop : Ciclo for clásico: Se utiliza para iterar una cantidad específica de veces, controlando un índice y ejecutando un bloque de código en cada iteración.
for (let i = 0;i < meses.length;i++) {
    console.log(meses[ i ]);
}
