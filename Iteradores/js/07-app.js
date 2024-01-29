// FOR ... OF :
/*
es una estructura de control que se utiliza en JavaScript para iterar sobre elementos iterables, como arreglos, cadenas de texto, mapas, conjuntos y otros objetos que implementan la interfaz iterable. A diferencia de `for...in`, que se utiliza para iterar sobre las propiedades enumerables de un objeto, `for...of` se utiliza específicamente para recorrer los valores de un iterable.

La sintaxis general de `for...of` es la siguiente:

for (const elemento of iterable) {
    Código a ejecutar para cada elemento
}
*/

// ITERAR SOBRE ARREGLOS
const pendientes = [ 'Trabajar','comer','dormir','estudiar','crear proyecto' ];

for (let pendiente of pendientes) {
    console.log(pendiente);
}

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

for (let objeto of carrito) {
    console.log(objeto);
}

// ITERAR SOBRE UN OBJETO
const automovil = {
    modelo: 'Camaro',
    year: 1956,
    motor: '6.0',
}

for (let [ key,value ] of Object.entries(automovil)) {
    console.log(key); // Obtenemos la llave
    console.log(value); // Obtenemos el valor de las llaves
}
