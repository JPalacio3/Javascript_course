// 3. Separar los datos de las funciones

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

// Obtener los productos cuyo precio sea mayor a 400
const resultado = carrito.filter( producto => { return producto.precio > 400 } );
console.log( resultado ) // (6) [{…}, {…}, {…}, {…}, {…}, {…}]

// Para convertirlo a highter-order funtion, debemos crear un function que haga la filtración y signarla como argumento

const mayor400 = producto => {
    return producto.precio > 400;
}
const resultado2 = carrito.filter( mayor400 );
console.log( resultado ); //(6) [{…}, {…}, {…}, {…}, {…}, {…}]
