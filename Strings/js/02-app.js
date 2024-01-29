
const producto = "Monitor de 20 pulgadas";

console.log(producto);
console.log(producto.length); // Cunta la cantidad de caracteres que tiene el valor de esa variable
console.log(producto.indexOf('Monitor')); // Imprime el índice de la primera ocurrencia de la palabra 'Monitor' en el valor de la variable producto. Como 'Monitor' comienza en el índice 0, la salida será: 0.
console.log(producto.includes('20')) // devolverá true si la subcadena '20' se encuentra en el valor de producto, y false si no se encuentra
