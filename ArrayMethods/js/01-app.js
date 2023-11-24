// . includes() y .some para comprobar la existencia de un valor dentro de arreglos
const meses = [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio' ];

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// Comprobar si un valor existe por medio de ForEach
meses.forEach(mes => {
    if (mes == 'Enero') {
        console.log('Sí existe');
    }
})

// INCLUDES : Permite comprobar la existencia de un valor en un arreglo
const resultado = meses.includes('Diciembre');
console.log(resultado); // false

// .SOME : Permite comprobar la existencia de un valor en un arreglo basado en objetos u objetos
const existe = carrito.some(producto => {
    return producto.nombre == 'Celular';
})
console.log(existe); //true

// .some también puede hacer la misma verificación en arreglos basados en índices solamente
const existe2 = meses.some(mes => mes == 'Febrero');
console.log(existe2); // true

