// DESTRUCTURING DE ARRAYS : Te permite extraer valores de un arreglo y asignarlos a variables individuales de manera más conveniente

const numeros = [ 10,20,30,40,50 ];
console.table(numeros);

const [ primero,segundo,tercero,,quinto ] = numeros;
console.log(quinto);

const [ uno,dos,...tres ] = numeros;
console.log(tres);

