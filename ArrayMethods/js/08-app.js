// SPREAD OPERATOR

const meses = [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio' ];
console.log(meses);

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// Spread operator en un arreglo basado en índices
const meses2 = [ ...meses,'Agosto' ];
console.log(meses2)

// Spread operator con un arreglo basado en objetos
const producto = { nombre: 'SSD',precio: 800 };
const carrito2 = [ ...carrito,producto ];
console.log(carrito2);

