// finIndex : Permite saber en qué índice del arreglo se encuentra un elemento

const meses = [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio' ];

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// Buscar el índice de un valor por medio del forEach
meses.forEach((mes,i) => {
    // console.log(i);
    // console.log(mes);

    if (mes == 'Abril') {
        console.log(`${mes} Encontrado en el índice ${i} `);
    }
});

// Encontrar el índice de un valor por medio de FINDINDEX
const indice = meses.findIndex(mes => mes == 'Marzo');
console.log(indice); // 2

// Encontrar el índice de un valor en un arreglo con objetos:
const index = carrito.findIndex(objeto => objeto.nombre === 'Tablet');
console.log(index); // 2
