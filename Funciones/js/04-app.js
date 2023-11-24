// DIFERENCIAS ENTRE FUNCIONES Y MÉTODOS : la principal diferencia radica en la asociación con objetos. Las funciones son independientes y se pueden usar en cualquier lugar del código, mientras que los métodos están vinculados a objetos específicos y operan en el contexto de ese objeto. Los métodos suelen ser parte de la interfaz de objetos y se utilizan para realizar acciones relacionadas con esos objetos.

const numero1 = 20;
const numero2 = '20';

console.log(parseInt(numero2)); // Esto es una función que convierte un string a un número
console.log(numero1.toString()); // Este es un método que convierte un número a string
