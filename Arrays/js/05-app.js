// AÑADIR O ELIMINAR ELEMENTOS AL PRINCIPIO O AL FINAL DE UN ARRAY

const meses = [ 'marzo','abril','mayo','junio' ];

meses[ 6 ] = 'julio';

// Arreglar elementos al final del arreglo sin conocer su índice o extensión
meses.push('agosto');
meses.push('septiembre');

console.table(meses);


// Ejemplo con un carrito de compras
const carrito = []; // Se inicia con un arreglo vacío

// Definir un producto
const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400,
}
const producto2 = {
    nombre: 'Celular',
    precio: 800,
}
const producto3 = {
    nombre: 'Teclado',
    precio: 100,
}

//.push() Agrega el producto al final del arreglo vacío
carrito.push(producto);
carrito.push(producto2);

// .unshift() Agrega el producto al principio del arreglo
carrito.unshift(producto3);

console.table(carrito);

// Programación Imperativa:
// Se centra en "cómo hacer" una tarea paso a paso utilizando instrucciones detalladas.
// El código se organiza en una secuencia de comandos que modifican el estado del programa.
// Puede ser más explícito y detallado,pero a veces menos legible.
// A menudo se utiliza cuando se necesita un control preciso sobre el flujo de ejecución y los detalles de implementación.
