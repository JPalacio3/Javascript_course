const producto = '           Monitor de 20 Pulgadas     ';

console.log(producto);
console.log(producto.length);

// Eliminar del inicio espacios en blanco
console.log(producto.trimStart());
console.log(producto.length);


// Eliminar el espacio al final
console.log(producto.trimEnd());
console.log(producto.length);


// Método anterior para eliminar ambos espacios
console.log(producto.trim());

// Eliminar ambos espacios: método nuevo
console.log(producto.trimStart().trimEnd());
console.log(producto.length);

