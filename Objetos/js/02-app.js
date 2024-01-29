// ACCEDER A LOS VALORES DE UN OBJETO

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto); // {nombre: 'Monitor de 20 Pulgadas', precio: 300, disponible: true}

console.log(producto.nombre); // Monitor de 20 Pulgadas
console.log(producto.precio); // 300
console.log(producto.disponible); // true

console.log(producto[ 'nombre' ]); // true
console.log(producto[ 'precio' ]); // 300
console.log(producto[ 'disponible' ]); // true

