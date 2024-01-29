const producto = 'Monitor de 20 Pulgadas';

// Reemplazar un texto de la cadena
console.log(producto);
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));

// Cortar / extraer una cadena de texto
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1)); //  Si el primer número es mayor que el segundo, No hace nada

// Alternativa a Slice
console.log(producto.substring(0,10));
console.log(producto.substring(10,1)); // Si el primer número es mayor, este método los invierte y sí devuelve un resulado

// Cortar / extraer una cadena de texto
const usuario = 'Joel';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
