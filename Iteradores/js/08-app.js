// FOR IN :
/*
`for...in` es una estructura de control en JavaScript que se utiliza para iterar sobre las propiedades enumerables de un objeto. A diferencia de `for...of`, que se utiliza para recorrer los valores de un iterable, `for...in` se utiliza para recorrer las claves (propiedades) de un objeto. Es especialmente útil cuando necesitas trabajar con las propiedades de un objeto, como un objeto literal o un objeto creado a partir de una clase.

La sintaxis general de `for...in` es la siguiente:

for (const clave in objeto) {
    Código a ejecutar para cada propiedad (clave)
}
*/

const pendientes = [ 'Trabajar','comer','dormir','estudiar','crear proyecto' ];

for (let pendiente in pendientes) {
    console.log(pendiente); // Devuelve los índices de cada elemento
}

const carrito = [
    { nombre: 'Monitor de 27 Pulgadas',precio: 5000 },
    { nombre: 'Televisión',precio: 6500 },
    { nombre: 'Tablet',precio: 800 },
    { nombre: 'Audífonos',precio: 250 },
    { nombre: 'Teclado',precio: 300 },
    { nombre: 'Celular',precio: 750 },
]

for (let objeto in carrito) {
    console.log(objeto); // Devuelve los índices dentro del arreglo
}

const automovil = {
    modelo: 'Camaro',
    year: 1956,
    motor: '6.0',
}

for (let propiedad in automovil) {
    console.log(propiedad); // Devuelve las claves o llaves dentro del objeto
}
