// FIND: Permite crear un nuevo arreglo, basado en la condición que se está evaluando

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audifonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 800 },
]

// foreach
let resultado = '';
carrito.forEach((producto,index) => {
    if (producto.nombre == 'Tablet') {
        resultado = carrito[ index ];
    }
});
console.log(resultado);

// FIND : Importante tener en cuenta que .find solamente va a retornar el primer elemento que cumpla con al condición
const resultado2 = carrito.find(producto => producto.nombre == 'Teclado');
console.log(resultado2);
