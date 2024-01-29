// DESTRUCTURING DE OBJETOS ANIDADOS

const producto = {
    nombre: 'Monitor de 20 Pulgadas',
    precio: 300,
    disponible: true,
    color: 'black',

    informacion: {
        peso: '1kg',
        medida: '1m',

        fabricacion: {
            pais: 'Mexico',
            año: '2023',
        }

    }
}

const { nombre,informacion,informacion: { fabricacion: { pais } } } = producto;

console.log(nombre); // Monitor de 20 Pulgadas
console.log(informacion); // {peso: '1kg', medida: '1m', fabricacion: {…}}
console.log(pais); // Mexico


