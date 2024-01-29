// ELIMINAR ELEMENTOS CON SPLICE

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

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);

// Eliminar el último elemento del arreglo .pop()
carrito.pop();
console.table(carrito);

// Eliminar el primer elemento del arreglo .shift()
carrito.shift();
console.table(carrito);

// Eliminar un elemento en cualquier otra posición .splice() : El primer argumento de splice() es el índice desde el cual deseas eliminar elementos, y el segundo argumento es la cantidad de elementos que deseas eliminar.
carrito.splice(0,1);
console.log(carrito);

