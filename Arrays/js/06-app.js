// Spread operator: El operador de propagación (spread operator) se utiliza para copiar los elementos de un arreglo en un nuevo arreglo o para combinar varios arreglos en uno solo

const carrito = []; // Se inicia con un arreglo vacío

// Definir un producto
const producto = {
    nombre: 'Monitor de 32 pulgadas',
    precio: 400,
}
const producto2 = {
    nombre: 'Celular',
    precio: 800,
}
const producto3 = {
    nombre: 'Teclado',
    precio: 100,
}

console.table(carrito);

let resultado;

// Crear una copia del arreglo original y se modifica este, sin alterar el arreglo original.
resultado = [ ...carrito,producto3 ];
resultado = [ ...resultado,producto2 ]; // Ubica el elemento nuevo al final
resultado = [ producto,...resultado ]; // Ubica el elemento nuevo al principio

console.table(resultado);

// Programación Declarativa:
// Enfoque más orientado a "qué hacer" en lugar de "cómo hacerlo".
// Se centra en describir el resultado deseado sin preocuparse por los detalles de implementación.
// Utiliza abstracciones de alto nivel,como funciones y expresiones,para representar operaciones y transformaciones de datos.
// Fomenta la reutilización de código y es más legible.
// Ejemplos de paradigmas declarativos incluyen programación funcional y SQL(Structured Query Language).

