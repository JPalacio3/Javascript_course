
const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
}

// Object.keys(objeto): Devuelve un arreglo on las propiedades dentro de ese objeto
console.log(Object.keys(producto));

// Object.entries(objeto) : Devuelve un arreglo con subarreglos con su clave y valor como vada elemento del subarreglo
console.log(Object.entries(producto));

// Object.values : Devuelve un arreglo solamente con los valores de las propiedades dentro de ese objeto
console.log(Object.values(producto));
