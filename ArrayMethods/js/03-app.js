// .REDUCE : Aplica una función a un acumulador y a cada elemento del arreglo (de izquierda a derecha) para reducirlo a un solo valor. (Toma una gran cantidad de datos, los une y entrega un solo resultado)


const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

// Con un foreach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total); //13600

// .reduce
let resultado = carrito.reduce((total,producto) => total + producto.precio,0);
console.log(resultado); // 13600
