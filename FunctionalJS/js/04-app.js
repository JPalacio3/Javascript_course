// 4. .map es muy utilizado en functional javascript : map crea un arreglo nuevo con las condiciones que le asignamos sin modificar el arreglo original

const carrito = [
    { nombre: 'Monitor de 20 Pulgdas', precio: 500 },
    { nombre: 'TV de 50 Pulgadas', precio: 1000 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 500 },
    { nombre: 'Teclado', precio: 700 },
    { nombre: 'Celular', precio: 1500 },
    { nombre: 'Bocinas', precio: 200 },
    { nombre: 'Laptop', precio: 7000 },
    { nombre: 'Luces LED', precio: 100 },
    { nombre: 'Mouse', precio: 150 },
];

// Obtener los nombres de cada producto dentro del carrito
const obtenerNombres = producto => {
    return producto.nombre;
}

// Crea un nuevo arreglo con las condiciones que le asignamos en la función con .map()
const resultado = carrito.map( obtenerNombres );

// Imprime el nuevo arreglo que contiene solamente los nombres de los productos
console.log( resultado );

// Imprime el arreglo original, el cual no es modificado durante la iteración
console.log( carrito );
